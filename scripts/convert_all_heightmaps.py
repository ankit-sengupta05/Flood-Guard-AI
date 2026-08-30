#!/usr/bin/env python3
"""Convert every dam DEM GeoTIFF into browser-ready float32 terrain assets."""
from __future__ import annotations

import argparse
import json
from pathlib import Path

import numpy as np
import rasterio

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_INPUT = REPO_ROOT / "dam_heightmaps"
DEFAULT_OUTPUT = REPO_ROOT / "frontend" / "public" / "terrain"


def convert(dem_path: Path, output_dir: Path, target: int) -> Path:
    with rasterio.open(dem_path) as source:
        array = source.read(1).astype(np.float32)
        if source.nodata is not None:
            array[array == source.nodata] = np.nan
        if np.isnan(array).any():
            valid = np.isfinite(array)
            if not valid.any():
                raise ValueError("DEM contains no valid elevations")
            array[~valid] = float(np.nanmean(array))
        source_shape = array.shape
        step_y = max(1, array.shape[0] // target)
        step_x = max(1, array.shape[1] // target)
        reduced = np.ascontiguousarray(array[::step_y, ::step_x], dtype=np.float32)
        bounds = {"left": source.bounds.left, "bottom": source.bounds.bottom, "right": source.bounds.right, "top": source.bounds.top}

    slug = dem_path.name.removesuffix("_dem.tif")
    output_dir.mkdir(parents=True, exist_ok=True)
    binary_path = output_dir / f"{slug}_heightmap.bin"
    metadata_path = output_dir / f"{slug}_heightmap.json"
    reduced.tofile(binary_path)
    metadata_path.write_text(json.dumps({"width": reduced.shape[1], "height": reduced.shape[0], "min_elev_m": float(reduced.min()), "max_elev_m": float(reduced.max()), "source_shape": list(source_shape), "bounds": bounds}, indent=2), encoding="utf-8")
    return binary_path


def main() -> None:
    parser = argparse.ArgumentParser(description="Batch-convert all dam DEMs for the browser terrain loader.")
    parser.add_argument("--input-dir", type=Path, default=DEFAULT_INPUT)
    parser.add_argument("--output-dir", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--target", type=int, default=200, help="Maximum approximate grid dimension per terrain")
    args = parser.parse_args()
    dem_files = sorted(args.input_dir.rglob("*_dem.tif"))
    if not dem_files:
        raise SystemExit(f"No *_dem.tif files found under {args.input_dir}")
    for dem_path in dem_files:
        try:
            output = convert(dem_path, args.output_dir, args.target)
            print(f"{dem_path.name} -> {output.name}")
        except Exception as error:
            print(f"SKIPPED {dem_path}: {error}")
    print(f"Terrain assets: {args.output_dir}")


if __name__ == "__main__":
    main()
