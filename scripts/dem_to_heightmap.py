"""
Convert a GeoTIFF DEM (e.g. SRTM tile from QGIS's SRTM-Downloader) into a
raw float32 heightmap the browser demo can load directly.

Usage:
    pip install rasterio numpy scipy --break-system-packages
    python dem_to_heightmap.py almatti_srtm.tif heightmap.bin --target 200

Output:
    heightmap.bin   - raw row-major float32 elevations (meters), ready for
                       the "Load DEM" panel in dam-break-3d-hydro.html
    heightmap.json  - width/height/min/max metadata (informational)
"""
import sys
import json
import argparse
import numpy as np
import rasterio


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("input_tif")
    ap.add_argument("output_bin")
    ap.add_argument("--target", type=int, default=200,
                     help="Downsample to roughly target x target cells "
                          "(keep this near the sim grid size, e.g. 100-250, "
                          "for real-time performance)")
    args = ap.parse_args()

    with rasterio.open(args.input_tif) as src:
        arr = src.read(1).astype(np.float32)
        nodata = src.nodata

        if nodata is not None:
            mask = arr == nodata
            if mask.any():
                try:
                    from scipy.ndimage import distance_transform_edt
                    arr = arr.copy()
                    arr[mask] = np.nan
                    idx = distance_transform_edt(
                        np.isnan(arr), return_distances=False, return_indices=True
                    )
                    arr = arr[tuple(idx)]
                except ImportError:
                    print("scipy not installed - filling nodata with the tile's mean instead "
                          "of nearest-valid (install scipy for a cleaner fill).")
                    arr[mask] = np.nanmean(arr[~mask])

        h, w = arr.shape
        step_y = max(1, h // args.target)
        step_x = max(1, w // args.target)
        arr_ds = arr[::step_y, ::step_x].astype(np.float32)

        arr_ds.tofile(args.output_bin)

        meta = {
            "width": int(arr_ds.shape[1]),
            "height": int(arr_ds.shape[0]),
            "min_elev_m": float(np.nanmin(arr_ds)),
            "max_elev_m": float(np.nanmax(arr_ds)),
            "source_shape": [int(h), int(w)],
            "bounds": {
                "left": src.bounds.left, "bottom": src.bounds.bottom,
                "right": src.bounds.right, "top": src.bounds.top,
            },
        }
        with open(args.output_bin.replace(".bin", ".json"), "w") as f:
            json.dump(meta, f, indent=2)

        print(f"Wrote {args.output_bin}: {arr_ds.shape[1]}x{arr_ds.shape[0]} cells, "
              f"elevation {meta['min_elev_m']:.1f}m - {meta['max_elev_m']:.1f}m")
        print(f"In the demo's 'Load DEM' panel, enter Width={meta['width']} "
              f"Height={meta['height']}.")


if __name__ == "__main__":
    main()
