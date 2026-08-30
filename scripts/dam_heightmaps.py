#!/usr/bin/env python3
"""Generate DEM extraction metadata and optional SRTM downloads for dams in important-dam-locations.md.

Core behavior:
- Parses the markdown dam catalog from the project root.
- Creates point + 200 km buffer GeoJSON for each dam.
- Exports a CSV manifest with center coordinates and bounding box.
- If --download is set and the optional `elevation` package is available, downloads SRTM DEM tiles
  clipped to the specified radius.

Example:
    python scripts/dam_heightmaps.py --dry-run
    python scripts/dam_heightmaps.py --radius-km 200 --download --max-dams 5
"""

from __future__ import annotations

import argparse
import csv
import gzip
import json
import math
import time
import urllib.error
import urllib.request
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, List, Optional

import numpy as np
import rasterio
from affine import Affine
from PIL import Image
from rasterio.merge import merge
from rasterio.windows import from_bounds

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_SOURCE = REPO_ROOT / "important-dam-locations.md"


@dataclass
class DamLocation:
    name: str
    river: str
    town: str
    lat: float
    lon: float
    north: Optional[float] = None
    south: Optional[float] = None
    east: Optional[float] = None
    west: Optional[float] = None
    section: str = ""
    approx: bool = False

    @property
    def slug(self) -> str:
        s = self.name.lower().strip()
        s = s.replace("*", "").replace("(", "").replace(")", "")
        s = s.replace("/", "-")
        s = "".join(ch if ch.isalnum() or ch in "-_" else "-" for ch in s)
        while "--" in s:
            s = s.replace("--", "-")
        return s.strip("-") or "dam"


def parse_dam_locations(path: Path) -> List[DamLocation]:
    if not path.exists():
        raise FileNotFoundError(f"Dam location file not found: {path}")

    lines = path.read_text(encoding="utf-8").splitlines()
    records: List[DamLocation] = []
    current_section = ""

    for raw_line in lines:
        line = raw_line.strip()
        if not line:
            continue

        if line.startswith("## "):
            current_section = line[3:].strip()
            continue

        if not line.startswith("|") or "---" in line:
            continue

        cells = [cell.strip() for cell in line.strip("|").split("|")]
        if len(cells) < 8:
            continue

        if cells[0].lower() == "dam":
            continue

        name = cells[0].replace("*", "").strip()
        if not name or name.lower() == "dam":
            continue

        river = cells[1].strip()
        town = cells[2].strip()
        coord_text = cells[3].strip()
        match = None
        for pattern in [
            r"(-?\d+\.\d+)\s*,\s*(-?\d+\.\d+)",
            r"(-?\d+)\s*,\s*(-?\d+\.\d+)",
            r"(-?\d+\.\d+)\s*,\s*(-?\d+)",
        ]:
            match = __import__("re").search(pattern, coord_text)
            if match:
                break

        if not match:
            continue

        lat = float(match.group(1))
        lon = float(match.group(2))
        north = parse_float_or_none(cells[4])
        south = parse_float_or_none(cells[5])
        east = parse_float_or_none(cells[6])
        west = parse_float_or_none(cells[7])

        records.append(
            DamLocation(
                name=name,
                river=river,
                town=town,
                lat=lat,
                lon=lon,
                north=north,
                south=south,
                east=east,
                west=west,
                section=current_section,
                approx="approx" in name.lower(),
            )
        )

    return records


def parse_float_or_none(value: str) -> Optional[float]:
    value = value.strip()
    if not value or value.lower() in {"-", "n/a", "na"}:
        return None
    try:
        return float(value)
    except ValueError:
        return None


def build_buffer_polygon(lon: float, lat: float, radius_km: float, points: int = 64):
    """Creates a simple circular buffer polygon in lon/lat space using a local tangent-plane approximation."""
    earth_circumference_km = 111.32
    lat_rad = math.radians(lat)
    delta_deg = radius_km / earth_circumference_km
    coords = []
    for i in range(points):
        theta = 2 * math.pi * i / points
        x = lon + (delta_deg * math.cos(theta)) / max(math.cos(lat_rad), 1e-6)
        y = lat + delta_deg * math.sin(theta)
        coords.append([x, y])
    coords.append(coords[0])
    return {"type": "Polygon", "coordinates": [coords]}


def export_geojson(dam: DamLocation, radius_km: float, output_dir: Path):
    output_dir.mkdir(parents=True, exist_ok=True)
    feature_collection = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "name": dam.name,
                    "river": dam.river,
                    "town": dam.town,
                    "approx": dam.approx,
                    "section": dam.section,
                    "radius_km": radius_km,
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [dam.lon, dam.lat],
                },
            },
            {
                "type": "Feature",
                "properties": {
                    "name": dam.name,
                    "river": dam.river,
                    "town": dam.town,
                    "approx": dam.approx,
                    "section": dam.section,
                    "radius_km": radius_km,
                    "buffer_type": "200km_search_area",
                },
                "geometry": build_buffer_polygon(dam.lon, dam.lat, radius_km),
            },
        ],
    }
    path = output_dir / f"{dam.slug}.geojson"
    path.write_text(json.dumps(feature_collection, indent=2), encoding="utf-8")
    return path


def write_manifest(dams: Iterable[DamLocation], radius_km: float, path: Path):
    fieldnames = [
        "name",
        "river",
        "town",
        "section",
        "approx",
        "lat",
        "lon",
        "radius_km",
        "north",
        "south",
        "east",
        "west",
    ]
    with path.open("w", newline="", encoding="utf-8") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for dam in dams:
            writer.writerow(
                {
                    "name": dam.name,
                    "river": dam.river,
                    "town": dam.town,
                    "section": dam.section,
                    "approx": dam.approx,
                    "lat": dam.lat,
                    "lon": dam.lon,
                    "radius_km": radius_km,
                    "north": dam.north,
                    "south": dam.south,
                    "east": dam.east,
                    "west": dam.west,
                }
            )


def render_grayscale_heightmap(dem_path: Path, output_path: Path) -> Path:
    """Convert a DEM TIFF into a grayscale PNG heightmap."""
    if not dem_path.exists():
        raise FileNotFoundError(f"DEM file not found: {dem_path}")

    with rasterio.open(dem_path) as src:
        data = src.read(1, masked=True).astype(np.float32)

    valid = np.isfinite(data)
    if not np.any(valid):
        raise ValueError(f"DEM contains no valid elevation values: {dem_path}")

    values = data[valid]
    vmin = float(values.min())
    vmax = float(values.max())
    if np.isclose(vmax, vmin):
        normalized = np.zeros_like(data, dtype=np.float32)
    else:
        normalized = (data - vmin) / (vmax - vmin)

    normalized = np.clip(normalized, 0.0, 1.0)
    grayscale = np.where(valid, (normalized * 255.0).astype(np.uint8), 255)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(grayscale, mode="L").save(output_path)
    return output_path


def find_dem_files(output_dir: Path) -> List[Path]:
    return sorted(output_dir.rglob("*_dem.tif"))


def render_existing_heightmaps(output_dir: Path) -> int:
    rendered = 0
    for dem_path in find_dem_files(output_dir):
        image_path = dem_path.with_suffix(".png")
        if image_path.exists() and image_path.stat().st_mtime >= dem_path.stat().st_mtime:
            continue
        render_grayscale_heightmap(dem_path, image_path)
        print(f"  {dem_path.name} -> {image_path.name}")
        rendered += 1
    return rendered


def download_file_resumable(url: str, target: Path, retries: int = 5, chunk_size: int = 1024 * 1024) -> Path:
    """Download a file with HTTP Range resume and an atomic final rename."""
    partial = target.with_name(f"{target.name}.part")
    target.parent.mkdir(parents=True, exist_ok=True)

    for attempt in range(1, retries + 1):
        downloaded = partial.stat().st_size if partial.exists() else 0
        request = urllib.request.Request(url)
        if downloaded:
            request.add_header("Range", f"bytes={downloaded}-")

        try:
            with urllib.request.urlopen(request, timeout=60) as response:
                resumed = downloaded > 0 and response.status == 206
                if downloaded and not resumed:
                    partial.unlink()
                    downloaded = 0
                mode = "ab" if resumed else "wb"
                with partial.open(mode) as destination:
                    while True:
                        chunk = response.read(chunk_size)
                        if not chunk:
                            break
                        destination.write(chunk)
            partial.replace(target)
            return target
        except (OSError, urllib.error.URLError, urllib.error.HTTPError) as exc:
            print(f"      download interrupted ({attempt}/{retries}): {exc}")
            if attempt == retries:
                raise RuntimeError(f"Could not finish download: {url}. Resume file kept at {partial}") from exc
            time.sleep(min(2 ** (attempt - 1), 30))

    raise RuntimeError(f"Could not finish download: {url}")


def download_dem_for_dam(dam: DamLocation, radius_km: float, output_dir: Path, product: str = "SRTM1"):
    """Download public SRTM tiles and write a DEM clipped to the requested radius."""
    if product != "SRTM1":
        raise ValueError("The native downloader currently supports SRTM1 only; use --product SRTM1.")

    # Always derive the download extent from the requested radius. The markdown
    # table contains legacy +/-0.2 degree reference boxes, not the DEM extent.
    latitude_delta = radius_km / 111.32
    longitude_delta = latitude_delta / max(math.cos(math.radians(dam.lat)), 1e-6)
    west = dam.lon - longitude_delta
    south = dam.lat - latitude_delta
    east = dam.lon + longitude_delta
    north = dam.lat + latitude_delta
    bounds = (west, south, east, north)
    target = output_dir / f"{dam.slug}_dem.tif"
    tile_cache = output_dir / "srtm_tiles"
    tile_cache.mkdir(parents=True, exist_ok=True)

    west_tile = math.floor(west)
    east_tile = math.floor(east - 1e-9)
    south_tile = math.floor(south)
    north_tile = math.floor(north - 1e-9)
    tile_paths = []
    for latitude in range(south_tile, north_tile + 1):
        for longitude in range(west_tile, east_tile + 1):
            latitude_name = f"{'N' if latitude >= 0 else 'S'}{abs(latitude):02d}"
            longitude_name = f"{'E' if longitude >= 0 else 'W'}{abs(longitude):03d}"
            tile_name = f"{latitude_name}{longitude_name}"
            tile_path = tile_cache / f"{tile_name}.hgt"
            if not tile_path.exists():
                url = f"https://s3.amazonaws.com/elevation-tiles-prod/skadi/{latitude_name}/{tile_name}.hgt.gz"
                compressed_path = tile_path.with_suffix(".hgt.gz")
                print(f"    downloading {tile_name}.hgt.gz")
                download_file_resumable(url, compressed_path)
                try:
                    with gzip.open(compressed_path, "rb") as source, tile_path.open("wb") as destination:
                        destination.write(source.read())
                except (OSError, EOFError) as exc:
                    tile_path.unlink(missing_ok=True)
                    compressed_path.unlink(missing_ok=True)
                    raise RuntimeError(f"Downloaded tile {tile_name} is corrupt: {exc}") from exc
                compressed_path.unlink(missing_ok=True)
            tile_paths.append(tile_path)

    sources = [rasterio.open(path) for path in tile_paths]
    try:
        mosaic, mosaic_transform = merge(sources)
    finally:
        for source in sources:
            source.close()

    window = from_bounds(*bounds, transform=mosaic_transform).round_offsets().round_lengths()
    row_start = max(0, int(window.row_off))
    col_start = max(0, int(window.col_off))
    row_end = min(mosaic.shape[1], row_start + int(window.height))
    col_end = min(mosaic.shape[2], col_start + int(window.width))
    clipped = mosaic[:, row_start:row_end, col_start:col_end]
    clipped_transform = mosaic_transform * Affine.translation(col_start, row_start)

    output_dir.mkdir(parents=True, exist_ok=True)
    with rasterio.open(
        target,
        "w",
        driver="GTiff",
        height=clipped.shape[1],
        width=clipped.shape[2],
        count=1,
        dtype=clipped.dtype,
        crs="EPSG:4326",
        transform=clipped_transform,
        nodata=-32768,
        compress="deflate",
    ) as destination:
        destination.write(clipped[0], 1)
    return target


def main():
    parser = argparse.ArgumentParser(description="Generate dam height-map extraction metadata for important Indian dams.")
    parser.add_argument("--source", type=Path, default=DEFAULT_SOURCE, help="Path to important-dam-locations.md")
    parser.add_argument("--output-dir", type=Path, default=REPO_ROOT / "dam_heightmaps", help="Directory for generated geojson and DEM outputs")
    parser.add_argument("--radius-km", type=float, default=200.0, help="Search radius to generate around each dam center")
    parser.add_argument("--download", action="store_true", help="Download DEM GeoTIFFs for each dam using the elevation package")
    parser.add_argument("--product", choices=["SRTM1", "SRTM3", "ASTER", "ALOS"], default="SRTM1", help="DEM product to download when --download is used")
    parser.add_argument("--max-dams", type=int, default=None, help="Optional limit for number of dams to process")
    parser.add_argument("--dry-run", action="store_true", help="Generate metadata only without downloading DEMs")
    parser.add_argument("--render-grayscale", action="store_true", help="Render grayscale PNG heightmaps after each DEM download")
    parser.add_argument("--render-existing", action="store_true", help="Render PNGs for completed DEM TIFFs without downloading")
    args = parser.parse_args()

    dams = parse_dam_locations(args.source)
    if args.max_dams is not None:
        dams = dams[: args.max_dams]

    if not dams:
        raise ValueError(f"No dam records were found in {args.source}")

    output_dir = args.output_dir.resolve()
    output_dir.mkdir(parents=True, exist_ok=True)

    for dam in dams:
        export_geojson(dam, args.radius_km, output_dir / "geojson")

    manifest_path = output_dir / "dam_manifest.csv"
    write_manifest(dams, args.radius_km, manifest_path)

    print(f"Parsed {len(dams)} dams from {args.source}")
    print(f"Manifest: {manifest_path}")
    print(f"GeoJSON directory: {output_dir / 'geojson'}")

    if args.download and not args.dry_run:
        print("Downloading DEMs...")
        for dam in dams:
            try:
                dem_path = download_dem_for_dam(dam, args.radius_km, output_dir / dam.slug, product=args.product)
                print(f"  {dam.name}: {dem_path}")
                if args.render_grayscale:
                    image_path = dem_path.with_suffix(".png")
                    render_grayscale_heightmap(dem_path, image_path)
                    print(f"    grayscale: {image_path}")
            except RuntimeError as exc:
                print(f"  {dam.name}: skipped - {exc}")
            except Exception as exc:  # pragma: no cover
                print(f"  {dam.name}: download failed - {exc}")

    if args.render_existing or (args.render_grayscale and not args.download):
        print("Rendering grayscale heightmaps from completed DEMs...")
        try:
            rendered = render_existing_heightmaps(output_dir)
            print(f"Rendered {rendered} grayscale image(s).")
        except Exception as exc:  # pragma: no cover
            print(f"Existing DEM render failed: {exc}")

    if args.dry_run:
        print("Dry run: metadata exported without DEM downloads.")


if __name__ == "__main__":
    main()
