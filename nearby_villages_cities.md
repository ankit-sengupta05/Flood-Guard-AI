# Villages/Towns/Cities Within 200 km of Major Indian Dams

Auto-generated reference list. For each dam in `dam_locations.md`, this file lists all populated places (cities and towns, population >= ~15,000) within a 200 km great-circle radius of the dam coordinates, sourced from the GeoNames `cities15000` dataset (via the `geonamescache` Python library), sorted by distance (nearest first). Each place also has its own +-0.2 deg (~20 km) bounding box, in the same North/South/East/West format as `dam_locations.md`, for reuse as a QGIS SRTM-Downloader / GEE bounding box if needed.

**Coverage note:** GeoNames' `cities15000` layer only includes places with population >= ~15,000, so small villages and hamlets are not listed here -- for actual village-level detail (needed for evacuation routing, per `constraints.md` A1), use OpenStreetMap (`osmnx`) queries against the same bounding boxes in `dam_locations.md`, or the full GeoNames `allCountries` dump / Survey of India village data if a lower population threshold is required.

**Flood-risk flag -- IMPORTANT CAVEAT:** the `Flood Path (heuristic)` column is a *coarse geometric proxy only*, computed by checking whether each place falls within a +-50 deg compass cone around a hand-estimated general downstream-flow direction for that dam's river, with no use of actual river-channel geometry, elevation, or hydraulic routing. It is meant purely to help eyeball/prioritize which places to check first -- it is **not** a substitute for the real dam-break flood model in this project's Data Layer (DEM-based inundation modeling per `architecture.md` Section 2.1). A place flagged 'Off flood-path' can still be at risk (e.g. via a tributary or low-lying terrain not captured by this heuristic), and a place flagged 'Downstream' may sit at elevation safely above any realistic flood extent. Treat this column as a triage hint, and validate every place against the actual DEM/HEC-RAS-style model output before using it for any real evacuation or risk decision.

---

## Tehri Dam (Uttarakhand)
Dam coordinates: 30.38, 78.48

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Tehri | 39 | 1.2 | 27,611 | 30.3909 | 78.4803 | 30.59 | 30.19 | 78.68 | 78.28 | Off flood-path (heuristic) |
| Srīnagar | 39 | 34.0 | 20,216 | 30.2224 | 78.7834 | 30.42 | 30.02 | 78.98 | 78.58 | Downstream (heuristic - verify) |
| Rishīkesh | 39 | 35.2 | 66,390 | 30.1078 | 78.2926 | 30.31 | 29.91 | 78.49 | 78.09 | Off flood-path (heuristic) |
| Pauri | 39 | 38.1 | 26,514 | 30.1529 | 78.7771 | 30.35 | 29.95 | 78.98 | 78.58 | Downstream (heuristic - verify) |
| Rāipur | 39 | 38.2 | 27,702 | 30.3110 | 78.0898 | 30.51 | 30.11 | 78.29 | 77.89 | Off flood-path (heuristic) |
| Uttarkāshi | 39 | 39.1 | 17,123 | 30.7299 | 78.4434 | 30.93 | 30.53 | 78.64 | 78.24 | Off flood-path (heuristic) |
| Mussoorie | 39 | 40.1 | 25,753 | 30.4550 | 78.0707 | 30.65 | 30.25 | 78.27 | 77.87 | Off flood-path (heuristic) |
| Dehradun | 39 | 43.2 | 522,081 | 30.3244 | 78.0339 | 30.52 | 30.12 | 78.23 | 77.83 | Off flood-path (heuristic) |
| Clement Town | 39 | 47.1 | 20,806 | 30.2636 | 78.0086 | 30.46 | 30.06 | 78.21 | 77.81 | Off flood-path (heuristic) |
| Haridwar | 39 | 57.0 | 186,079 | 29.9479 | 78.1603 | 30.15 | 29.75 | 78.36 | 77.96 | Off flood-path (heuristic) |
| Kotdwāra | 39 | 70.6 | 27,009 | 29.7461 | 78.5222 | 29.95 | 29.55 | 78.72 | 78.32 | Downstream (heuristic - verify) |
| Roorkee | 39 | 80.4 | 103,894 | 29.8663 | 77.8912 | 30.07 | 29.67 | 78.09 | 77.69 | Off flood-path (heuristic) |
| Laksar | 39 | 81.0 | 19,270 | 29.7587 | 78.0415 | 29.96 | 29.56 | 78.24 | 77.84 | Off flood-path (heuristic) |
| Pāonta Sāhib | 11 | 82.3 | 25,183 | 30.4367 | 77.6246 | 30.64 | 30.24 | 77.82 | 77.42 | Off flood-path (heuristic) |
| Behat | 36 | 86.3 | 18,223 | 30.1718 | 77.6139 | 30.37 | 29.97 | 77.81 | 77.41 | Off flood-path (heuristic) |
| Najībābād | 36 | 86.4 | 84,006 | 29.6119 | 78.3427 | 29.81 | 29.41 | 78.54 | 78.14 | Downstream (heuristic - verify) |
| Manglaur | 39 | 87.4 | 46,395 | 29.7909 | 77.8784 | 29.99 | 29.59 | 78.08 | 77.68 | Off flood-path (heuristic) |
| Kīratpur | 36 | 100.6 | 60,223 | 29.5067 | 78.2061 | 29.71 | 29.31 | 78.41 | 78.01 | Downstream (heuristic - verify) |
| Sahāranpur | 36 | 100.9 | 484,873 | 29.9679 | 77.5452 | 30.17 | 29.77 | 77.75 | 77.35 | Off flood-path (heuristic) |
| Nagīna | 36 | 104.1 | 76,593 | 29.4443 | 78.4365 | 29.64 | 29.24 | 78.64 | 78.24 | Downstream (heuristic - verify) |
| Mandāwar | 36 | 105.0 | 21,339 | 29.4866 | 78.1273 | 29.69 | 29.29 | 78.33 | 77.93 | Downstream (heuristic - verify) |
| Deoband | 36 | 108.3 | 88,171 | 29.6950 | 77.6796 | 29.9 | 29.5 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Afzalgarh | 36 | 111.3 | 27,753 | 29.3937 | 78.6739 | 29.59 | 29.19 | 78.87 | 78.47 | Downstream (heuristic - verify) |
| Nāhan | 11 | 115.4 | 28,899 | 30.5603 | 77.2943 | 30.76 | 30.36 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Jagādhri | 10 | 115.4 | 124,894 | 30.1672 | 77.3037 | 30.37 | 29.97 | 77.5 | 77.1 | Off flood-path (heuristic) |
| Bijnor | 36 | 116.8 | 84,593 | 29.3730 | 78.1364 | 29.57 | 29.17 | 78.34 | 77.94 | Downstream (heuristic - verify) |
| Sherkot | 36 | 117.4 | 57,361 | 29.3270 | 78.5743 | 29.53 | 29.13 | 78.77 | 78.37 | Downstream (heuristic - verify) |
| Rāmpur | 36 | 117.7 | 26,257 | 29.8062 | 77.4525 | 30.01 | 29.61 | 77.65 | 77.25 | Off flood-path (heuristic) |
| Nihtaur | 36 | 117.7 | 48,389 | 29.3242 | 78.3872 | 29.52 | 29.12 | 78.59 | 78.19 | Downstream (heuristic - verify) |
| Yamuna Nagar | 10 | 118.3 | 217,071 | 30.1280 | 77.2837 | 30.33 | 29.93 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Jhālu | 36 | 118.6 | 20,356 | 29.3361 | 78.2261 | 29.54 | 29.14 | 78.43 | 78.03 | Downstream (heuristic - verify) |
| Dhāmpur | 36 | 119.1 | 49,973 | 29.3088 | 78.5108 | 29.51 | 29.11 | 78.71 | 78.31 | Downstream (heuristic - verify) |
| Kansāpur | 10 | 119.4 | 18,909 | 30.1455 | 77.2663 | 30.35 | 29.95 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Sisauli | 10 | 120.1 | 22,479 | 30.1430 | 77.2596 | 30.34 | 29.94 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Haldaur | 36 | 122.7 | 18,686 | 29.2899 | 78.2844 | 29.49 | 29.09 | 78.48 | 78.08 | Downstream (heuristic - verify) |
| Rānikhet | 39 | 123.1 | 19,873 | 29.6408 | 79.4323 | 29.84 | 29.44 | 79.63 | 79.23 | Downstream (heuristic - verify) |
| Nakūr | 36 | 124.1 | 23,084 | 29.9196 | 77.3044 | 30.12 | 29.72 | 77.5 | 77.1 | Off flood-path (heuristic) |
| Muzaffarnagar | 36 | 125.8 | 349,706 | 29.4709 | 77.7033 | 29.67 | 29.27 | 77.9 | 77.5 | Off flood-path (heuristic) |
| Charthāwal | 36 | 125.9 | 19,942 | 29.5469 | 77.5944 | 29.75 | 29.35 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Rāmnagar | 39 | 126.3 | 51,244 | 29.3925 | 79.1283 | 29.59 | 29.19 | 79.33 | 78.93 | Downstream (heuristic - verify) |
| Nanauta | 36 | 126.4 | 18,738 | 29.7122 | 77.4173 | 29.91 | 29.51 | 77.62 | 77.22 | Off flood-path (heuristic) |
| Jaspur | 39 | 126.9 | 42,524 | 29.2792 | 78.8280 | 29.48 | 29.08 | 79.03 | 78.63 | Downstream (heuristic - verify) |
| Naraingarh | 10 | 130.1 | 22,832 | 30.4780 | 77.1280 | 30.68 | 30.28 | 77.33 | 76.93 | Off flood-path (heuristic) |
| Seohāra | 36 | 130.6 | 46,546 | 29.2090 | 78.5884 | 29.41 | 29.01 | 78.79 | 78.39 | Downstream (heuristic - verify) |
| Jalālābad | 36 | 131.2 | 25,302 | 29.6185 | 77.4391 | 29.82 | 29.42 | 77.64 | 77.24 | Off flood-path (heuristic) |
| Mīrānpur | 36 | 131.5 | 27,390 | 29.2903 | 77.9494 | 29.49 | 29.09 | 78.15 | 77.75 | Downstream (heuristic - verify) |
| Jānsath | 36 | 132.1 | 19,467 | 29.3250 | 77.8504 | 29.53 | 29.13 | 78.05 | 77.65 | Downstream (heuristic - verify) |
| Gangoh | 36 | 134.7 | 59,519 | 29.7800 | 77.2635 | 29.98 | 29.58 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Thāna Bhawan | 36 | 135.1 | 33,498 | 29.5861 | 77.4181 | 29.79 | 29.39 | 77.62 | 77.22 | Off flood-path (heuristic) |
| Tājpur | 36 | 135.4 | 17,529 | 29.1624 | 78.4846 | 29.36 | 28.96 | 78.68 | 78.28 | Downstream (heuristic - verify) |
| Nūrpur | 36 | 137.0 | 39,077 | 29.1496 | 78.4084 | 29.35 | 28.95 | 78.61 | 78.21 | Downstream (heuristic - verify) |
| Thakurdwara | 36 | 137.1 | 39,860 | 29.1920 | 78.8615 | 29.39 | 28.99 | 79.06 | 78.66 | Downstream (heuristic - verify) |
| Kashipur | 39 | 137.6 | 103,138 | 29.2140 | 78.9569 | 29.41 | 29.01 | 79.16 | 78.76 | Downstream (heuristic - verify) |
| Barāra | 10 | 139.4 | 21,545 | 30.2146 | 77.0403 | 30.41 | 30.01 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Chāndpur | 36 | 139.9 | 73,555 | 29.1349 | 78.2719 | 29.33 | 28.93 | 78.47 | 78.07 | Downstream (heuristic - verify) |
| Sahaspur | 36 | 140.6 | 24,452 | 29.1212 | 78.6227 | 29.32 | 28.92 | 78.82 | 78.42 | Downstream (heuristic - verify) |
| Khatauli | 36 | 142.1 | 64,731 | 29.2784 | 77.7330 | 29.48 | 29.08 | 77.93 | 77.53 | Off flood-path (heuristic) |
| Hastināpur | 36 | 143.1 | 24,093 | 29.1604 | 78.0076 | 29.36 | 28.96 | 78.21 | 77.81 | Downstream (heuristic - verify) |
| Almora | 39 | 143.1 | 32,442 | 29.5971 | 79.6591 | 29.8 | 29.4 | 79.86 | 79.46 | Downstream (heuristic - verify) |
| Naini Tāl | 39 | 143.6 | 42,309 | 29.3974 | 79.4469 | 29.6 | 29.2 | 79.65 | 79.25 | Downstream (heuristic - verify) |
| Solan | 11 | 143.8 | 40,283 | 30.9091 | 77.1087 | 31.11 | 30.71 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Lādwa | 10 | 144.4 | 28,887 | 29.9935 | 77.0456 | 30.19 | 29.79 | 77.25 | 76.85 | Off flood-path (heuristic) |
| Sisauli | 36 | 145.1 | 15,837 | 29.4139 | 77.4689 | 29.61 | 29.21 | 77.67 | 77.27 | Off flood-path (heuristic) |
| Shāhpur | 36 | 145.4 | 18,874 | 29.3501 | 77.5516 | 29.55 | 29.15 | 77.75 | 77.35 | Off flood-path (heuristic) |
| Phalauda | 36 | 146.6 | 18,545 | 29.1882 | 77.8300 | 29.39 | 28.99 | 78.03 | 77.63 | Downstream (heuristic - verify) |
| Ūn | 36 | 147.4 | 15,007 | 29.5848 | 77.2554 | 29.78 | 29.38 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Indri | 10 | 147.5 | 17,487 | 29.8800 | 77.0597 | 30.08 | 29.68 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Kānth | 36 | 147.6 | 24,883 | 29.0594 | 78.6295 | 29.26 | 28.86 | 78.83 | 78.43 | Downstream (heuristic - verify) |
| Banat | 36 | 148.8 | 21,580 | 29.4636 | 77.3548 | 29.66 | 29.26 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Shimla | 11 | 149.1 | 173,503 | 31.1044 | 77.1666 | 31.3 | 30.9 | 77.37 | 76.97 | Off flood-path (heuristic) |
| Bāzpur | 39 | 149.3 | 23,900 | 29.1530 | 79.1081 | 29.35 | 28.95 | 79.31 | 78.91 | Downstream (heuristic - verify) |
| Mawāna | 36 | 151.9 | 76,973 | 29.1029 | 77.9220 | 29.3 | 28.9 | 78.12 | 77.72 | Downstream (heuristic - verify) |
| Shāmli | 36 | 153.1 | 97,966 | 29.4497 | 77.3096 | 29.65 | 29.25 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Bablāi | 10 | 153.6 | 26,412 | 30.3573 | 76.8790 | 30.56 | 30.16 | 77.08 | 76.68 | Off flood-path (heuristic) |
| Jhinjhāna | 36 | 154.1 | 19,711 | 29.5212 | 77.2247 | 29.72 | 29.32 | 77.42 | 77.02 | Off flood-path (heuristic) |
| Kardhān | 10 | 155.0 | 18,662 | 30.3177 | 76.8660 | 30.52 | 30.12 | 77.07 | 76.67 | Off flood-path (heuristic) |
| Ambala Sadar | 10 | 155.3 | 104,974 | 30.3354 | 76.8627 | 30.54 | 30.14 | 77.06 | 76.66 | Off flood-path (heuristic) |
| Budhāna | 36 | 155.3 | 35,442 | 29.2880 | 77.4753 | 29.49 | 29.09 | 77.68 | 77.28 | Off flood-path (heuristic) |
| Kālka | 11 | 155.9 | 34,134 | 30.8398 | 76.9407 | 31.04 | 30.64 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Shāhābād | 10 | 156.4 | 42,607 | 30.1678 | 76.8705 | 30.37 | 29.97 | 77.07 | 76.67 | Off flood-path (heuristic) |
| Lāwar Khās | 36 | 156.6 | 19,556 | 29.1109 | 77.7777 | 29.31 | 28.91 | 77.98 | 77.58 | Downstream (heuristic - verify) |
| Pinjaur | 10 | 156.6 | 35,912 | 30.7987 | 76.9182 | 31.0 | 30.6 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Basi | 23 | 158.4 | 26,295 | 30.5881 | 76.8450 | 30.79 | 30.39 | 77.04 | 76.64 | Off flood-path (heuristic) |
| Dhanaura | 36 | 159.5 | 28,285 | 28.9591 | 78.2563 | 29.16 | 28.76 | 78.46 | 78.06 | Downstream (heuristic - verify) |
| Panchkula | 10 | 159.9 | 211,355 | 30.6946 | 76.8504 | 30.89 | 30.49 | 77.05 | 76.65 | Off flood-path (heuristic) |
| Suār | 36 | 160.3 | 28,941 | 29.0284 | 79.0565 | 29.23 | 28.83 | 79.26 | 78.86 | Downstream (heuristic - verify) |
| Nīlokheri | 10 | 160.7 | 17,938 | 29.8367 | 76.9319 | 30.04 | 29.64 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Sardhana | 36 | 160.7 | 49,857 | 29.1455 | 77.6143 | 29.35 | 28.95 | 77.81 | 77.41 | Off flood-path (heuristic) |
| Ambāla | 10 | 161.4 | 195,153 | 30.3610 | 76.7978 | 30.56 | 30.16 | 77.0 | 76.6 | Off flood-path (heuristic) |
| Mani Mājra | 10 | 161.5 | 15,489 | 30.7140 | 76.8382 | 30.91 | 30.51 | 77.04 | 76.64 | Off flood-path (heuristic) |
| Lālru | 23 | 161.7 | 21,394 | 30.4917 | 76.7987 | 30.69 | 30.29 | 77.0 | 76.6 | Off flood-path (heuristic) |
| Zerakpur | 23 | 161.9 | 95,553 | 30.6562 | 76.8209 | 30.86 | 30.46 | 77.02 | 76.62 | Off flood-path (heuristic) |
| Tānda | 36 | 162.3 | 44,822 | 28.9762 | 78.9419 | 29.18 | 28.78 | 79.14 | 78.74 | Downstream (heuristic - verify) |
| Tirāwari | 10 | 162.6 | 25,944 | 29.8015 | 76.9283 | 30.0 | 29.6 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Karnāl | 10 | 163.0 | 302,140 | 29.6920 | 76.9845 | 29.89 | 29.49 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Bachhraon | 36 | 163.3 | 29,232 | 28.9269 | 78.2346 | 29.13 | 28.73 | 78.43 | 78.03 | Downstream (heuristic - verify) |
| Haldwani | 39 | 163.7 | 139,497 | 29.2225 | 79.5286 | 29.42 | 29.02 | 79.73 | 79.33 | Downstream (heuristic - verify) |
| Amroha | 36 | 164.2 | 176,253 | 28.9031 | 78.4698 | 29.1 | 28.7 | 78.67 | 78.27 | Downstream (heuristic - verify) |
| Parīchhatgarh | 36 | 164.5 | 18,990 | 28.9784 | 77.9342 | 29.18 | 28.78 | 78.13 | 77.73 | Downstream (heuristic - verify) |
| Kairāna | 36 | 164.6 | 80,432 | 29.3954 | 77.2054 | 29.6 | 29.2 | 77.41 | 77.01 | Off flood-path (heuristic) |
| Thānesar | 10 | 164.7 | 155,152 | 29.9732 | 76.8321 | 30.17 | 29.77 | 77.03 | 76.63 | Off flood-path (heuristic) |
| Kāndhla | 36 | 165.7 | 43,387 | 29.3210 | 77.2710 | 29.52 | 29.12 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Chandigarh | 05 | 166.7 | 970,602 | 30.7363 | 76.7884 | 30.94 | 30.54 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Naya Gaon | 23 | 167.4 | 50,869 | 30.7752 | 76.7931 | 30.98 | 30.58 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Asāra | 36 | 169.2 | 15,959 | 29.2471 | 77.3089 | 29.45 | 29.05 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Banūr | 23 | 169.8 | 18,775 | 30.5541 | 76.7195 | 30.75 | 30.35 | 76.92 | 76.52 | Off flood-path (heuristic) |
| Mohali | 23 | 171.6 | 166,864 | 30.6800 | 76.7221 | 30.88 | 30.48 | 76.92 | 76.52 | Off flood-path (heuristic) |
| Gajraula | 36 | 172.2 | 50,380 | 28.8457 | 78.2396 | 29.05 | 28.65 | 78.44 | 78.04 | Downstream (heuristic - verify) |
| Meerut | 36 | 172.7 | 1,223,184 | 28.9800 | 77.7064 | 29.18 | 28.78 | 77.91 | 77.51 | Downstream (heuristic - verify) |
| Gharaunda | 10 | 172.9 | 37,816 | 29.5369 | 76.9714 | 29.74 | 29.34 | 77.17 | 76.77 | Off flood-path (heuristic) |
| Morādābād | 36 | 173.7 | 721,139 | 28.8389 | 78.7768 | 29.04 | 28.64 | 78.98 | 78.58 | Downstream (heuristic - verify) |
| Baddi | 11 | 173.8 | 29,911 | 30.9578 | 76.7914 | 31.16 | 30.76 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Balaungi | 23 | 175.4 | 15,982 | 30.7306 | 76.6937 | 30.93 | 30.53 | 76.89 | 76.49 | Off flood-path (heuristic) |
| Kithor | 36 | 176.2 | 25,262 | 28.8668 | 77.9386 | 29.07 | 28.67 | 78.14 | 77.74 | Downstream (heuristic - verify) |
| Rudrapur | 39 | 179.3 | 154,554 | 28.9800 | 79.4000 | 29.18 | 28.78 | 79.6 | 79.2 | Downstream (heuristic - verify) |
| Panipat Taraf Makhdum Zadgan | 10 | 179.3 | 67,998 | 29.4161 | 76.9883 | 29.62 | 29.22 | 77.19 | 76.79 | Off flood-path (heuristic) |
| Kharar | 23 | 180.2 | 74,460 | 30.7463 | 76.6469 | 30.95 | 30.55 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Ugrākheri | 10 | 180.3 | 24,440 | 29.3780 | 77.0093 | 29.58 | 29.18 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Garhmuktesar | 36 | 180.8 | 37,043 | 28.7873 | 78.1021 | 28.99 | 28.59 | 78.3 | 77.9 | Downstream (heuristic - verify) |
| Chhaprauli | 36 | 181.1 | 19,224 | 29.2099 | 77.1745 | 29.41 | 29.01 | 77.37 | 76.97 | Off flood-path (heuristic) |
| Rajpura | 23 | 181.3 | 92,301 | 30.4786 | 76.5928 | 30.68 | 30.28 | 76.79 | 76.39 | Off flood-path (heuristic) |
| Panipat Taraf Ansar | 10 | 182.2 | 42,877 | 29.4122 | 76.9547 | 29.61 | 29.21 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Rāmpur | 36 | 182.4 | 296,418 | 28.8101 | 79.0270 | 29.01 | 28.61 | 79.23 | 78.83 | Downstream (heuristic - verify) |
| Bīlāspur | 36 | 182.8 | 39,873 | 28.8865 | 79.2703 | 29.09 | 28.69 | 79.47 | 79.07 | Downstream (heuristic - verify) |
| Panipat | 10 | 182.8 | 295,970 | 29.3875 | 76.9682 | 29.59 | 29.19 | 77.17 | 76.77 | Off flood-path (heuristic) |
| Nīsang | 10 | 182.8 | 17,438 | 29.6923 | 76.7546 | 29.89 | 29.49 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Baraut | 36 | 184.4 | 93,544 | 29.1020 | 77.2633 | 29.3 | 28.9 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Kheri Nāngal | 10 | 184.4 | 18,195 | 29.3544 | 76.9774 | 29.55 | 29.15 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Hasanpur | 36 | 185.3 | 57,481 | 28.7225 | 78.2844 | 28.92 | 28.52 | 78.48 | 78.08 | Downstream (heuristic - verify) |
| Panipat Taraf Rajputan | 10 | 186.6 | 28,803 | 29.3609 | 76.9426 | 29.56 | 29.16 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Pehowa | 10 | 187.8 | 39,101 | 29.9790 | 76.5825 | 30.18 | 29.78 | 76.78 | 76.38 | Off flood-path (heuristic) |
| Kemrī | 36 | 188.5 | 26,726 | 28.8067 | 79.2048 | 29.01 | 28.61 | 79.4 | 79.0 | Downstream (heuristic - verify) |
| Pithorāgarh | 39 | 188.7 | 47,571 | 29.5835 | 80.2095 | 29.78 | 29.38 | 80.41 | 80.01 | Downstream (heuristic - verify) |
| Kūrāli | 23 | 189.0 | 31,060 | 30.8342 | 76.5768 | 31.03 | 30.63 | 76.78 | 76.38 | Off flood-path (heuristic) |
| Samālkha | 10 | 190.4 | 39,710 | 29.2355 | 77.0127 | 29.44 | 29.04 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Kundarkhi | 36 | 191.0 | 27,197 | 28.6830 | 78.7856 | 28.88 | 28.48 | 78.99 | 78.59 | Downstream (heuristic - verify) |
| Kichha | 39 | 191.7 | 34,904 | 28.9115 | 79.5201 | 29.11 | 28.71 | 79.72 | 79.32 | Downstream (heuristic - verify) |
| Sirsi | 36 | 194.2 | 22,549 | 28.6392 | 78.6430 | 28.84 | 28.44 | 78.84 | 78.44 | Downstream (heuristic - verify) |
| Sanaur | 23 | 194.2 | 21,201 | 30.3018 | 76.4579 | 30.5 | 30.1 | 76.66 | 76.26 | Off flood-path (heuristic) |
| Morinda | 23 | 195.1 | 24,022 | 30.7901 | 76.4988 | 30.99 | 30.59 | 76.7 | 76.3 | Off flood-path (heuristic) |
| Hāpur | 36 | 195.6 | 242,920 | 28.7298 | 77.7807 | 28.93 | 28.53 | 77.98 | 77.58 | Downstream (heuristic - verify) |
| Pūndri | 10 | 197.1 | 33,484 | 29.7610 | 76.5603 | 29.96 | 29.56 | 76.76 | 76.36 | Off flood-path (heuristic) |
| Sundarnagar | 11 | 197.6 | 25,338 | 31.5352 | 76.9050 | 31.74 | 31.34 | 77.11 | 76.7 | Off flood-path (heuristic) |
| Ropar | 23 | 197.9 | 56,038 | 30.9690 | 76.5269 | 31.17 | 30.77 | 76.73 | 76.33 | Off flood-path (heuristic) |
| Bilāri | 36 | 198.0 | 29,666 | 28.6215 | 78.8036 | 28.82 | 28.42 | 79.0 | 78.6 | Downstream (heuristic - verify) |
| Ganaur | 10 | 198.0 | 35,603 | 29.1302 | 77.0183 | 29.33 | 28.93 | 77.22 | 76.82 | Off flood-path (heuristic) |
| Sambhal | 36 | 199.8 | 196,109 | 28.5850 | 78.5696 | 28.78 | 28.38 | 78.77 | 78.37 | Downstream (heuristic - verify) |

## Bhakra Nangal Dam (Himachal Pradesh)
Dam coordinates: 31.42, 76.43

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Nangal | 23 | 6.2 | 48,497 | 31.3897 | 76.3757 | 31.59 | 31.19 | 76.58 | 76.18 | Downstream (heuristic - verify) |
| Una | 11 | 16.1 | 18,722 | 31.4649 | 76.2691 | 31.66 | 31.26 | 76.47 | 76.07 | Off flood-path (heuristic) |
| Anandpur | 23 | 21.2 | 16,282 | 31.2393 | 76.5025 | 31.44 | 31.04 | 76.7 | 76.3 | Off flood-path (heuristic) |
| Hamīrpur | 11 | 30.7 | 19,280 | 31.6841 | 76.5251 | 31.88 | 31.48 | 76.73 | 76.33 | Off flood-path (heuristic) |
| Garhshankar | 23 | 35.6 | 16,955 | 31.2154 | 76.1415 | 31.42 | 31.02 | 76.34 | 75.94 | Downstream (heuristic - verify) |
| Bālāchor | 23 | 41.8 | 21,631 | 31.0606 | 76.3017 | 31.26 | 30.86 | 76.5 | 76.1 | Downstream (heuristic - verify) |
| Nawanshahr | 23 | 44.4 | 46,024 | 31.1245 | 76.1161 | 31.32 | 30.92 | 76.32 | 75.92 | Downstream (heuristic - verify) |
| Sundarnagar | 11 | 46.8 | 25,338 | 31.5352 | 76.9050 | 31.74 | 31.34 | 77.11 | 76.7 | Off flood-path (heuristic) |
| Banga | 23 | 48.7 | 20,906 | 31.1887 | 75.9950 | 31.39 | 30.99 | 76.19 | 75.79 | Downstream (heuristic - verify) |
| Rāhon | 23 | 50.4 | 15,676 | 31.0527 | 76.1191 | 31.25 | 30.85 | 76.32 | 75.92 | Downstream (heuristic - verify) |
| Hoshiārpur | 23 | 50.8 | 168,653 | 31.5372 | 75.9127 | 31.74 | 31.34 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Ropar | 23 | 51.0 | 56,038 | 30.9690 | 76.5269 | 31.17 | 30.77 | 76.73 | 76.33 | Off flood-path (heuristic) |
| Mandi | 11 | 57.6 | 28,217 | 31.7119 | 76.9327 | 31.91 | 31.51 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Māchhīwāra | 23 | 60.2 | 24,916 | 30.9156 | 76.2002 | 31.12 | 30.72 | 76.4 | 76.0 | Downstream (heuristic - verify) |
| Baddi | 11 | 61.8 | 29,911 | 30.9578 | 76.7914 | 31.16 | 30.76 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Phagwāra | 23 | 66.0 | 100,146 | 31.2245 | 75.7739 | 31.42 | 31.02 | 75.97 | 75.57 | Downstream (heuristic - verify) |
| Kūrāli | 23 | 66.6 | 31,060 | 30.8342 | 76.5768 | 31.03 | 30.63 | 76.78 | 76.38 | Off flood-path (heuristic) |
| Adampur | 23 | 67.9 | 20,922 | 31.4322 | 75.7148 | 31.63 | 31.23 | 75.91 | 75.51 | Downstream (heuristic - verify) |
| Samrāla | 23 | 68.7 | 19,678 | 30.8360 | 76.1932 | 31.04 | 30.64 | 76.39 | 75.99 | Downstream (heuristic - verify) |
| Morinda | 23 | 70.3 | 24,022 | 30.7901 | 76.4988 | 30.99 | 30.59 | 76.7 | 76.3 | Off flood-path (heuristic) |
| Gorāya | 23 | 70.6 | 16,462 | 31.1241 | 75.7724 | 31.32 | 30.92 | 75.97 | 75.57 | Downstream (heuristic - verify) |
| Phillaur | 23 | 75.4 | 24,688 | 31.0189 | 75.7911 | 31.22 | 30.82 | 75.99 | 75.59 | Downstream (heuristic - verify) |
| Bhogpur | 23 | 76.1 | 18,008 | 31.5544 | 75.6427 | 31.75 | 31.35 | 75.84 | 75.44 | Off flood-path (heuristic) |
| Sānehwāl | 23 | 77.0 | 22,484 | 30.8413 | 75.9855 | 31.04 | 30.64 | 76.19 | 75.79 | Downstream (heuristic - verify) |
| Talwāra | 23 | 77.2 | 24,752 | 31.9376 | 75.8866 | 32.14 | 31.74 | 76.09 | 75.69 | Off flood-path (heuristic) |
| Kharar | 23 | 77.7 | 74,460 | 30.7463 | 76.6469 | 30.95 | 30.55 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Jalandhar Cantonment | 23 | 78.2 | 47,845 | 31.2942 | 75.6197 | 31.49 | 31.09 | 75.82 | 75.42 | Downstream (heuristic - verify) |
| Shimla | 11 | 78.3 | 173,503 | 31.1044 | 77.1666 | 31.3 | 30.9 | 77.37 | 76.97 | Off flood-path (heuristic) |
| Ludhiana | 23 | 78.7 | 1,618,879 | 30.9120 | 75.8538 | 31.11 | 30.71 | 76.05 | 75.65 | Downstream (heuristic - verify) |
| Dorāha | 23 | 79.1 | 25,424 | 30.7995 | 76.0236 | 31.0 | 30.6 | 76.22 | 75.82 | Downstream (heuristic - verify) |
| Naya Gaon | 23 | 79.6 | 50,869 | 30.7752 | 76.7931 | 30.98 | 30.58 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Balaungi | 23 | 80.7 | 15,982 | 30.7306 | 76.6937 | 30.93 | 30.53 | 76.89 | 76.49 | Off flood-path (heuristic) |
| Urmar | 23 | 80.7 | 23,419 | 31.6814 | 75.6355 | 31.88 | 31.48 | 75.84 | 75.44 | Off flood-path (heuristic) |
| Kālka | 11 | 80.8 | 34,134 | 30.8398 | 76.9407 | 31.04 | 30.64 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Basi | 23 | 81.4 | 20,288 | 30.6885 | 76.4011 | 30.89 | 30.49 | 76.6 | 76.2 | Downstream (heuristic - verify) |
| Jalandhar | 23 | 81.5 | 868,929 | 31.3256 | 75.5792 | 31.53 | 31.13 | 75.78 | 75.38 | Downstream (heuristic - verify) |
| Khanna | 23 | 81.9 | 128,137 | 30.7055 | 76.2220 | 30.91 | 30.51 | 76.42 | 76.02 | Downstream (heuristic - verify) |
| Jandiāla | 23 | 82.5 | 25,631 | 31.1593 | 75.6175 | 31.36 | 30.96 | 75.82 | 75.42 | Downstream (heuristic - verify) |
| Pinjaur | 10 | 83.3 | 35,912 | 30.7987 | 76.9182 | 31.0 | 30.6 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Chandigarh | 05 | 83.3 | 970,602 | 30.7363 | 76.7884 | 30.94 | 30.54 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Gil | 23 | 83.5 | 28,884 | 30.8469 | 75.8636 | 31.05 | 30.65 | 76.06 | 75.66 | Downstream (heuristic - verify) |
| Gobindgarh | 23 | 84.2 | 82,266 | 30.6709 | 76.3019 | 30.87 | 30.47 | 76.5 | 76.1 | Downstream (heuristic - verify) |
| Dasūya | 23 | 85.8 | 25,192 | 31.8168 | 75.6531 | 32.02 | 31.62 | 75.85 | 75.45 | Off flood-path (heuristic) |
| Solan | 11 | 86.0 | 40,283 | 30.9091 | 77.1087 | 31.11 | 30.71 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Sirhind | 23 | 86.5 | 60,847 | 30.6432 | 76.3842 | 30.84 | 30.44 | 76.58 | 76.18 | Downstream (heuristic - verify) |
| Mohali | 23 | 86.9 | 166,864 | 30.6800 | 76.7221 | 30.88 | 30.48 | 76.92 | 76.52 | Off flood-path (heuristic) |
| Mani Mājra | 10 | 87.6 | 15,489 | 30.7140 | 76.8382 | 30.91 | 30.51 | 77.04 | 76.64 | Off flood-path (heuristic) |
| Kulu | 11 | 87.8 | 19,831 | 31.9583 | 77.1082 | 32.16 | 31.76 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Kartārpur | 23 | 88.4 | 26,701 | 31.4427 | 75.4985 | 31.64 | 31.24 | 75.7 | 75.3 | Downstream (heuristic - verify) |
| Dharamsala | 11 | 89.6 | 30,764 | 32.2201 | 76.3201 | 32.42 | 32.02 | 76.52 | 76.12 | Off flood-path (heuristic) |
| Panchkula | 10 | 90.1 | 211,355 | 30.6946 | 76.8504 | 30.89 | 30.49 | 77.05 | 76.65 | Off flood-path (heuristic) |
| Zerakpur | 23 | 92.7 | 95,553 | 30.6562 | 76.8209 | 30.86 | 30.46 | 77.02 | 76.62 | Off flood-path (heuristic) |
| Nakodar | 23 | 96.5 | 36,973 | 31.1259 | 75.4751 | 31.33 | 30.93 | 75.68 | 75.28 | Downstream (heuristic - verify) |
| Mūllānpur | 23 | 96.5 | 16,356 | 30.8546 | 75.6609 | 31.05 | 30.65 | 75.86 | 75.46 | Downstream (heuristic - verify) |
| Mukeriān | 23 | 97.2 | 29,841 | 31.9539 | 75.6172 | 32.15 | 31.75 | 75.82 | 75.42 | Off flood-path (heuristic) |
| Kapurthala Town | 23 | 99.7 | 98,916 | 31.3801 | 75.3811 | 31.58 | 31.18 | 75.58 | 75.18 | Downstream (heuristic - verify) |
| Banūr | 23 | 100.2 | 18,775 | 30.5541 | 76.7195 | 30.75 | 30.35 | 76.92 | 76.52 | Off flood-path (heuristic) |
| Basi | 23 | 100.6 | 26,295 | 30.5881 | 76.8450 | 30.79 | 30.39 | 77.04 | 76.64 | Off flood-path (heuristic) |
| Ahmedgarh | 23 | 100.6 | 31,302 | 30.6773 | 75.8263 | 30.88 | 30.48 | 76.03 | 75.63 | Downstream (heuristic - verify) |
| Rajpura | 23 | 105.8 | 92,301 | 30.4786 | 76.5928 | 30.68 | 30.28 | 76.79 | 76.39 | Off flood-path (heuristic) |
| Husainpur | 23 | 105.9 | 15,575 | 31.3118 | 75.3217 | 31.51 | 31.11 | 75.52 | 75.12 | Downstream (heuristic - verify) |
| Lālru | 23 | 109.0 | 21,394 | 30.4917 | 76.7987 | 30.69 | 30.29 | 77.0 | 76.6 | Off flood-path (heuristic) |
| Qadian | 23 | 109.3 | 23,632 | 31.8220 | 75.3766 | 32.02 | 31.62 | 75.58 | 75.18 | Off flood-path (heuristic) |
| Māler Kotla | 23 | 111.9 | 135,424 | 30.5309 | 75.8795 | 30.73 | 30.33 | 76.08 | 75.68 | Downstream (heuristic - verify) |
| Jagraon | 23 | 115.0 | 65,305 | 30.7878 | 75.4739 | 30.99 | 30.59 | 75.67 | 75.27 | Downstream (heuristic - verify) |
| Rāikot | 23 | 116.6 | 28,734 | 30.6500 | 75.6000 | 30.85 | 30.45 | 75.8 | 75.4 | Downstream (heuristic - verify) |
| Mamun | 23 | 118.2 | 32,689 | 32.2824 | 75.6983 | 32.48 | 32.08 | 75.9 | 75.5 | Off flood-path (heuristic) |
| Gurdaspur | 23 | 119.1 | 77,928 | 32.0393 | 75.4032 | 32.24 | 31.84 | 75.6 | 75.2 | Off flood-path (heuristic) |
| Nābha | 23 | 119.1 | 67,972 | 30.3758 | 76.1529 | 30.58 | 30.18 | 76.35 | 75.95 | Downstream (heuristic - verify) |
| Sultanpur | 23 | 119.4 | 16,877 | 31.2147 | 75.1960 | 31.41 | 31.01 | 75.4 | 75.0 | Downstream (heuristic - verify) |
| Pathānkot | 23 | 120.1 | 174,306 | 32.2748 | 75.6529 | 32.47 | 32.07 | 75.85 | 75.45 | Off flood-path (heuristic) |
| Dhāriwāl | 23 | 120.4 | 20,604 | 31.9562 | 75.3239 | 32.16 | 31.76 | 75.52 | 75.12 | Off flood-path (heuristic) |
| Dīnānagar | 23 | 120.6 | 23,976 | 32.1366 | 75.4729 | 32.34 | 31.94 | 75.67 | 75.27 | Off flood-path (heuristic) |
| Patiāla | 23 | 120.6 | 446,246 | 30.3362 | 76.3922 | 30.54 | 30.14 | 76.59 | 76.19 | Downstream (heuristic - verify) |
| Ambāla | 10 | 122.9 | 195,153 | 30.3610 | 76.7978 | 30.56 | 30.16 | 77.0 | 76.6 | Off flood-path (heuristic) |
| Batāla | 23 | 124.0 | 158,621 | 31.8092 | 75.2029 | 32.01 | 31.61 | 75.4 | 75.0 | Off flood-path (heuristic) |
| Naraingarh | 10 | 124.1 | 22,832 | 30.4780 | 77.1280 | 30.68 | 30.28 | 77.33 | 76.93 | Off flood-path (heuristic) |
| Sanaur | 23 | 124.4 | 21,201 | 30.3018 | 76.4579 | 30.5 | 30.1 | 76.66 | 76.26 | Off flood-path (heuristic) |
| Dharmkot | 23 | 125.5 | 19,057 | 30.9456 | 75.2324 | 31.15 | 30.75 | 75.43 | 75.03 | Downstream (heuristic - verify) |
| Bablāi | 10 | 125.7 | 26,412 | 30.3573 | 76.8790 | 30.56 | 30.16 | 77.08 | 76.68 | Off flood-path (heuristic) |
| Nāhan | 11 | 126.2 | 28,899 | 30.5603 | 77.2943 | 30.76 | 30.36 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Sujānpur | 23 | 126.4 | 28,270 | 32.3162 | 75.6074 | 32.52 | 32.12 | 75.81 | 75.41 | Off flood-path (heuristic) |
| Jugiāl | 23 | 127.1 | 15,210 | 32.3684 | 75.6782 | 32.57 | 32.17 | 75.88 | 75.48 | Off flood-path (heuristic) |
| Ambala Sadar | 10 | 127.5 | 104,974 | 30.3354 | 76.8627 | 30.54 | 30.14 | 77.06 | 76.66 | Off flood-path (heuristic) |
| Dhūri | 23 | 128.6 | 55,225 | 30.3685 | 75.8679 | 30.57 | 30.17 | 76.07 | 75.67 | Downstream (heuristic - verify) |
| Kardhān | 10 | 129.4 | 18,662 | 30.3177 | 76.8660 | 30.52 | 30.12 | 77.07 | 76.67 | Off flood-path (heuristic) |
| Chamba | 11 | 129.4 | 21,502 | 32.5553 | 76.1265 | 32.76 | 32.36 | 76.33 | 75.93 | Off flood-path (heuristic) |
| Bhawānīgarh | 23 | 133.6 | 22,320 | 30.2669 | 76.0385 | 30.47 | 30.07 | 76.24 | 75.84 | Downstream (heuristic - verify) |
| Jandiāla Gurū | 23 | 133.9 | 29,232 | 31.5620 | 75.0277 | 31.76 | 31.36 | 75.23 | 74.83 | Downstream (heuristic - verify) |
| Kathua | 12 | 135.8 | 59,866 | 32.3694 | 75.5254 | 32.57 | 32.17 | 75.73 | 75.33 | Off flood-path (heuristic) |
| Moga | 23 | 137.7 | 163,397 | 30.8138 | 75.1688 | 31.01 | 30.61 | 75.37 | 74.97 | Downstream (heuristic - verify) |
| Sangrūr | 23 | 142.1 | 88,615 | 30.2451 | 75.8449 | 30.45 | 30.05 | 76.04 | 75.64 | Downstream (heuristic - verify) |
| Samāna | 23 | 142.5 | 54,072 | 30.1539 | 76.1985 | 30.35 | 29.95 | 76.4 | 76.0 | Downstream (heuristic - verify) |
| Tarn Taran | 23 | 142.6 | 66,847 | 31.4519 | 74.9278 | 31.65 | 31.25 | 75.13 | 74.73 | Downstream (heuristic - verify) |
| Barnāla | 23 | 143.5 | 116,449 | 30.3745 | 75.5487 | 30.57 | 30.17 | 75.75 | 75.35 | Downstream (heuristic - verify) |
| Shāhābād | 10 | 145.5 | 42,607 | 30.1678 | 76.8705 | 30.37 | 29.97 | 77.07 | 76.67 | Off flood-path (heuristic) |
| Zira | 23 | 145.8 | 37,498 | 30.9685 | 74.9911 | 31.17 | 30.77 | 75.19 | 74.79 | Downstream (heuristic - verify) |
| Barāra | 10 | 146.1 | 21,545 | 30.2146 | 77.0403 | 30.41 | 30.01 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Fatehgarh Chūriān | 23 | 148.0 | 18,051 | 31.8643 | 74.9566 | 32.06 | 31.66 | 75.16 | 74.76 | Off flood-path (heuristic) |
| Bhadaur | 23 | 148.3 | 18,561 | 30.4765 | 75.3305 | 30.68 | 30.28 | 75.53 | 75.13 | Downstream (heuristic - verify) |
| Amritsar | 23 | 149.1 | 1,159,227 | 31.6223 | 74.8753 | 31.82 | 31.42 | 75.08 | 74.68 | Downstream (heuristic - verify) |
| Nangli | 23 | 149.1 | 20,440 | 31.6863 | 74.8875 | 31.89 | 31.49 | 75.09 | 74.69 | Off flood-path (heuristic) |
| Patti | 23 | 150.0 | 40,976 | 31.2809 | 74.8585 | 31.48 | 31.08 | 75.06 | 74.66 | Downstream (heuristic - verify) |
| Dhanaula | 23 | 150.6 | 19,920 | 30.2822 | 75.5734 | 30.48 | 30.08 | 75.77 | 75.37 | Downstream (heuristic - verify) |
| Bagha Purana | 23 | 150.7 | 25,206 | 30.6881 | 75.0984 | 30.89 | 30.49 | 75.3 | 74.9 | Downstream (heuristic - verify) |
| Chīka | 10 | 152.7 | 38,952 | 30.0489 | 76.3430 | 30.25 | 29.85 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Longowal | 23 | 153.5 | 23,851 | 30.1985 | 75.6819 | 30.4 | 30.0 | 75.88 | 75.48 | Downstream (heuristic - verify) |
| Laungowāl | 23 | 154.0 | 21,880 | 30.1939 | 75.6809 | 30.39 | 29.99 | 75.88 | 75.48 | Downstream (heuristic - verify) |
| Dirba | 23 | 155.5 | 16,952 | 30.0722 | 75.9961 | 30.27 | 29.87 | 76.2 | 75.8 | Downstream (heuristic - verify) |
| Sunām | 23 | 155.7 | 69,069 | 30.1288 | 75.7994 | 30.33 | 29.93 | 76.0 | 75.6 | Downstream (heuristic - verify) |
| Talwandi Bhai | 23 | 156.0 | 17,285 | 30.8558 | 74.9298 | 31.06 | 30.66 | 75.13 | 74.73 | Downstream (heuristic - verify) |
| Mullānwāla | 23 | 157.9 | 16,183 | 31.0619 | 74.8228 | 31.26 | 30.86 | 75.02 | 74.62 | Downstream (heuristic - verify) |
| Pāonta Sāhib | 11 | 157.9 | 25,183 | 30.4367 | 77.6246 | 30.64 | 30.24 | 77.82 | 77.42 | Off flood-path (heuristic) |
| Tapa | 23 | 160.7 | 23,248 | 30.2979 | 75.3694 | 30.5 | 30.1 | 75.57 | 75.17 | Downstream (heuristic - verify) |
| Pehowa | 10 | 160.9 | 39,101 | 29.9790 | 76.5825 | 30.18 | 29.78 | 76.78 | 76.38 | Off flood-path (heuristic) |
| Jagādhri | 10 | 162.4 | 124,894 | 30.1672 | 77.3037 | 30.37 | 29.97 | 77.5 | 77.1 | Off flood-path (heuristic) |
| Sisauli | 10 | 162.6 | 22,479 | 30.1430 | 77.2596 | 30.34 | 29.94 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Kansāpur | 10 | 162.7 | 18,909 | 30.1455 | 77.2663 | 30.35 | 29.95 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Bhikkiwind Uttār | 23 | 164.2 | 20,526 | 31.3494 | 74.7027 | 31.55 | 31.15 | 74.9 | 74.5 | Downstream (heuristic - verify) |
| Ajnāla | 23 | 164.7 | 21,107 | 31.8447 | 74.7630 | 32.04 | 31.64 | 74.96 | 74.56 | Off flood-path (heuristic) |
| Yamuna Nagar | 10 | 165.2 | 217,071 | 30.1280 | 77.2837 | 30.33 | 29.93 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Thānesar | 10 | 165.4 | 155,152 | 29.9732 | 76.8321 | 30.17 | 29.77 | 77.03 | 76.63 | Off flood-path (heuristic) |
| Patran | 23 | 166.6 | 27,963 | 29.9577 | 76.0486 | 30.16 | 29.76 | 76.25 | 75.85 | Downstream (heuristic - verify) |
| Lādwa | 10 | 169.2 | 28,887 | 29.9935 | 77.0456 | 30.19 | 29.79 | 77.25 | 76.85 | Off flood-path (heuristic) |
| Rampura Phul | 23 | 170.4 | 51,023 | 30.2756 | 75.2425 | 30.48 | 30.08 | 75.44 | 75.04 | Downstream (heuristic - verify) |
| Rāmpura | 23 | 172.1 | 45,639 | 30.2560 | 75.2412 | 30.46 | 30.06 | 75.44 | 75.04 | Downstream (heuristic - verify) |
| Bhīkhi | 23 | 173.8 | 17,825 | 30.0592 | 75.5350 | 30.26 | 29.86 | 75.73 | 75.33 | Downstream (heuristic - verify) |
| Lehragaga | 23 | 174.9 | 22,588 | 29.9427 | 75.8014 | 30.14 | 29.74 | 76.0 | 75.6 | Downstream (heuristic - verify) |
| Sāmba | 12 | 177.2 | 26,893 | 32.5624 | 75.1199 | 32.76 | 32.36 | 75.32 | 74.92 | Off flood-path (heuristic) |
| Kotkapura | 23 | 178.5 | 80,741 | 30.5819 | 74.8330 | 30.78 | 30.38 | 75.03 | 74.63 | Downstream (heuristic - verify) |
| Behat | 36 | 179.0 | 18,223 | 30.1718 | 77.6139 | 30.37 | 29.97 | 77.81 | 77.41 | Off flood-path (heuristic) |
| Kot Kapūra | 23 | 179.1 | 91,979 | 30.5806 | 74.8261 | 30.78 | 30.38 | 75.03 | 74.63 | Downstream (heuristic - verify) |
| Farīdkot | 23 | 179.8 | 87,695 | 30.6740 | 74.7558 | 30.87 | 30.47 | 74.96 | 74.56 | Downstream (heuristic - verify) |
| Kaithal | 10 | 180.0 | 144,915 | 29.8015 | 76.3996 | 30.0 | 29.6 | 76.6 | 76.2 | Downstream (heuristic - verify) |
| Firozpur | 23 | 181.4 | 110,313 | 30.9257 | 74.6131 | 31.13 | 30.73 | 74.81 | 74.41 | Downstream (heuristic - verify) |
| Indri | 10 | 181.5 | 17,487 | 29.8800 | 77.0597 | 30.08 | 29.68 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Jaito | 23 | 182.0 | 37,377 | 30.4513 | 74.8919 | 30.65 | 30.25 | 75.09 | 74.69 | Downstream (heuristic - verify) |
| Nīlokheri | 10 | 182.5 | 17,938 | 29.8367 | 76.9319 | 30.04 | 29.64 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Moonak | 23 | 184.7 | 18,141 | 29.8253 | 75.8906 | 30.03 | 29.63 | 76.09 | 75.69 | Downstream (heuristic - verify) |
| Pūndri | 10 | 184.9 | 33,484 | 29.7610 | 76.5603 | 29.96 | 29.56 | 76.76 | 76.36 | Off flood-path (heuristic) |
| Budhlāda | 23 | 185.5 | 26,172 | 29.9280 | 75.5620 | 30.13 | 29.73 | 75.76 | 75.36 | Downstream (heuristic - verify) |
| Tirāwari | 10 | 186.2 | 25,944 | 29.8015 | 76.9283 | 30.0 | 29.6 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Maur | 23 | 186.6 | 31,849 | 30.0833 | 75.2500 | 30.28 | 29.88 | 75.45 | 75.05 | Downstream (heuristic - verify) |
| Nakūr | 36 | 186.6 | 23,084 | 29.9196 | 77.3044 | 30.12 | 29.72 | 77.5 | 77.1 | Off flood-path (heuristic) |
| Bareta | 23 | 186.8 | 17,432 | 29.8635 | 75.6964 | 30.06 | 29.66 | 75.9 | 75.5 | Downstream (heuristic - verify) |
| Mānsa | 23 | 187.1 | 82,956 | 29.9884 | 75.4017 | 30.19 | 29.79 | 75.6 | 75.2 | Downstream (heuristic - verify) |
| Mussoorie | 39 | 189.7 | 25,753 | 30.4550 | 78.0707 | 30.65 | 30.25 | 78.27 | 77.87 | Off flood-path (heuristic) |
| Goniāna Mandi | 23 | 189.8 | 15,208 | 30.3168 | 74.9125 | 30.52 | 30.12 | 75.11 | 74.71 | Downstream (heuristic - verify) |
| Mahna | 23 | 190.7 | 27,733 | 30.2280 | 74.9937 | 30.43 | 30.03 | 75.19 | 74.79 | Downstream (heuristic - verify) |
| Sahāranpur | 36 | 193.5 | 484,873 | 29.9679 | 77.5452 | 30.17 | 29.77 | 77.75 | 77.35 | Off flood-path (heuristic) |
| Kalāyat | 10 | 194.6 | 18,660 | 29.6766 | 76.2556 | 29.88 | 29.48 | 76.46 | 76.06 | Downstream (heuristic - verify) |
| Nīsang | 10 | 194.6 | 17,438 | 29.6923 | 76.7546 | 29.89 | 29.49 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Dehradun | 39 | 195.6 | 522,081 | 30.3244 | 78.0339 | 30.52 | 30.12 | 78.23 | 77.83 | Off flood-path (heuristic) |
| Bathinda | 23 | 196.1 | 285,788 | 30.2075 | 74.9389 | 30.41 | 30.01 | 75.14 | 74.74 | Downstream (heuristic - verify) |
| Tohāna | 10 | 196.3 | 63,871 | 29.7133 | 75.9044 | 29.91 | 29.51 | 76.1 | 75.7 | Downstream (heuristic - verify) |
| Bunjwah | 12 | 197.2 | 15,899 | 33.1458 | 75.9479 | 33.35 | 32.95 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Brāhmanān di Bāri | 12 | 197.5 | 15,453 | 32.6440 | 74.9110 | 32.84 | 32.44 | 75.11 | 74.71 | Off flood-path (heuristic) |
| Clement Town | 39 | 198.1 | 20,806 | 30.2636 | 78.0086 | 30.46 | 30.06 | 78.21 | 77.81 | Off flood-path (heuristic) |
| Gangoh | 36 | 199.0 | 59,519 | 29.7800 | 77.2635 | 29.98 | 29.58 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Karnāl | 10 | 199.3 | 302,140 | 29.6920 | 76.9845 | 29.89 | 29.49 | 77.18 | 76.78 | Off flood-path (heuristic) |

## Rihand Dam (Uttar Pradesh)
Dam coordinates: 24.05, 83.03

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Renukūt | 36 | 18.5 | 62,413 | 24.2164 | 83.0358 | 24.42 | 24.02 | 83.24 | 82.84 | Downstream (heuristic - verify) |
| Singrauli | 35 | 39.7 | 220,257 | 24.1997 | 82.6753 | 24.4 | 24.0 | 82.88 | 82.48 | Off flood-path (heuristic) |
| Obra | 36 | 41.2 | 56,110 | 24.4186 | 82.9880 | 24.62 | 24.22 | 83.19 | 82.79 | Downstream (heuristic - verify) |
| Robertsganj | 36 | 71.1 | 37,855 | 24.6886 | 83.0678 | 24.89 | 24.49 | 83.27 | 82.87 | Downstream (heuristic - verify) |
| Garhwa | 38 | 79.9 | 46,059 | 24.1600 | 83.8076 | 24.36 | 23.96 | 84.01 | 83.61 | Off flood-path (heuristic) |
| Majhiāon Kalān | 38 | 85.4 | 18,349 | 24.3243 | 83.8161 | 24.52 | 24.12 | 84.02 | 83.62 | Off flood-path (heuristic) |
| Bishrāmpur | 38 | 93.6 | 42,925 | 24.2530 | 83.9250 | 24.45 | 24.05 | 84.13 | 83.73 | Off flood-path (heuristic) |
| Surajpur | 37 | 94.5 | 20,189 | 23.2135 | 82.8684 | 23.41 | 23.01 | 83.07 | 82.67 | Off flood-path (heuristic) |
| Shivpur Charcha | 37 | 95.1 | 23,514 | 23.3289 | 82.5281 | 23.53 | 23.13 | 82.73 | 82.33 | Off flood-path (heuristic) |
| Baikunthpur | 37 | 99.8 | 28,431 | 23.2621 | 82.5605 | 23.46 | 23.06 | 82.76 | 82.36 | Off flood-path (heuristic) |
| Ambikāpur | 37 | 104.9 | 121,071 | 23.1189 | 83.1954 | 23.32 | 22.92 | 83.4 | 83.0 | Off flood-path (heuristic) |
| Medininagar | 38 | 105.2 | 78,396 | 24.0397 | 84.0658 | 24.24 | 23.84 | 84.27 | 83.87 | Off flood-path (heuristic) |
| Ahraura | 36 | 107.4 | 25,075 | 25.0158 | 83.0329 | 25.22 | 24.82 | 83.23 | 82.83 | Downstream (heuristic - verify) |
| Husainābād | 38 | 111.8 | 29,241 | 24.5285 | 84.0000 | 24.73 | 24.33 | 84.2 | 83.8 | Off flood-path (heuristic) |
| Chirmiri | 37 | 117.8 | 100,800 | 23.1907 | 82.3531 | 23.39 | 22.99 | 82.55 | 82.15 | Off flood-path (heuristic) |
| Chunār | 36 | 120.8 | 36,459 | 25.1278 | 82.8821 | 25.33 | 24.93 | 83.08 | 82.68 | Downstream (heuristic - verify) |
| Sidhi | 35 | 123.1 | 54,331 | 24.4038 | 81.8795 | 24.6 | 24.2 | 82.08 | 81.68 | Off flood-path (heuristic) |
| Hanumana | 35 | 124.5 | 16,771 | 24.7789 | 82.0960 | 24.98 | 24.58 | 82.3 | 81.9 | Downstream (heuristic - verify) |
| Bhabhua | 34 | 124.7 | 50,179 | 25.0405 | 83.6075 | 25.24 | 24.84 | 83.81 | 83.41 | Downstream (heuristic - verify) |
| Manendragarh | 37 | 125.6 | 33,071 | 23.2134 | 82.2023 | 23.41 | 23.01 | 82.4 | 82.0 | Off flood-path (heuristic) |
| Nabīnagar | 34 | 127.2 | 23,984 | 24.6068 | 84.1262 | 24.81 | 24.41 | 84.33 | 83.93 | Off flood-path (heuristic) |
| Bijuri | 35 | 128.5 | 32,682 | 23.2524 | 82.1167 | 23.45 | 23.05 | 82.32 | 81.92 | Off flood-path (heuristic) |
| Khongapani | 37 | 130.1 | 17,400 | 23.1912 | 82.1626 | 23.39 | 22.99 | 82.36 | 81.96 | Off flood-path (heuristic) |
| Mirzāpur | 36 | 130.5 | 220,029 | 25.1449 | 82.5653 | 25.34 | 24.94 | 82.77 | 82.37 | Downstream (heuristic - verify) |
| Kachhwa | 36 | 132.5 | 15,381 | 25.2062 | 82.7144 | 25.41 | 25.01 | 82.91 | 82.51 | Downstream (heuristic - verify) |
| Bangawan | 35 | 132.5 | 20,873 | 23.1926 | 82.1272 | 23.39 | 22.99 | 82.33 | 81.93 | Off flood-path (heuristic) |
| Rāmnagar | 36 | 135.6 | 44,277 | 25.2691 | 83.0297 | 25.47 | 25.07 | 83.23 | 82.83 | Downstream (heuristic - verify) |
| Mauganj | 35 | 135.8 | 26,420 | 24.6672 | 81.8734 | 24.87 | 24.47 | 82.07 | 81.67 | Downstream (heuristic - verify) |
| Chandauli | 36 | 136.5 | 25,035 | 25.2580 | 83.2682 | 25.46 | 25.06 | 83.47 | 83.07 | Downstream (heuristic - verify) |
| Pandit Deen Dayal Upadhyaya Nagar | 36 | 137.4 | 109,650 | 25.2831 | 83.1197 | 25.48 | 25.08 | 83.32 | 82.92 | Downstream (heuristic - verify) |
| Varanasi | 36 | 140.9 | 1,164,404 | 25.3167 | 83.0104 | 25.52 | 25.12 | 83.21 | 82.81 | Downstream (heuristic - verify) |
| Sasarām | 34 | 141.3 | 147,408 | 24.9494 | 84.0165 | 25.15 | 24.75 | 84.22 | 83.82 | Off flood-path (heuristic) |
| Kotma | 35 | 142.5 | 31,756 | 23.2038 | 81.9790 | 23.4 | 23.0 | 82.18 | 81.78 | Off flood-path (heuristic) |
| Pasan | 35 | 149.3 | 28,447 | 23.1649 | 81.9286 | 23.36 | 22.96 | 82.13 | 81.73 | Off flood-path (heuristic) |
| Lātehār | 38 | 153.2 | 26,981 | 23.7442 | 84.4998 | 23.94 | 23.54 | 84.7 | 84.3 | Off flood-path (heuristic) |
| Gyānpur | 36 | 153.6 | 200,000 | 25.3327 | 82.4664 | 25.53 | 25.13 | 82.67 | 82.27 | Downstream (heuristic - verify) |
| Madhurampur Dehri | 34 | 156.1 | 137,231 | 24.9690 | 84.1964 | 25.17 | 24.77 | 84.4 | 84.0 | Off flood-path (heuristic) |
| Bhadohi | 36 | 156.6 | 78,568 | 25.3953 | 82.5703 | 25.6 | 25.2 | 82.77 | 82.37 | Downstream (heuristic - verify) |
| Aurangābād | 34 | 156.9 | 102,244 | 24.7520 | 84.3742 | 24.95 | 24.55 | 84.57 | 84.17 | Off flood-path (heuristic) |
| Pasān | 37 | 158.7 | 30,928 | 22.8441 | 82.1982 | 23.04 | 22.64 | 82.4 | 82.0 | Off flood-path (heuristic) |
| Nokha | 34 | 160.7 | 27,302 | 25.1048 | 84.1162 | 25.3 | 24.9 | 84.32 | 83.92 | Off flood-path (heuristic) |
| Zamānia | 36 | 161.4 | 32,008 | 25.4196 | 83.5579 | 25.62 | 25.22 | 83.76 | 83.36 | Downstream (heuristic - verify) |
| Saidpur | 36 | 166.6 | 22,904 | 25.5375 | 83.2238 | 25.74 | 25.34 | 83.42 | 83.02 | Downstream (heuristic - verify) |
| Beohāri | 35 | 167.8 | 24,545 | 24.0242 | 81.3783 | 24.22 | 23.82 | 81.58 | 81.18 | Off flood-path (heuristic) |
| Suriānwān | 36 | 168.9 | 19,157 | 25.4639 | 82.4192 | 25.66 | 25.26 | 82.62 | 82.22 | Downstream (heuristic - verify) |
| Handiā | 36 | 169.1 | 17,861 | 25.3638 | 82.1865 | 25.56 | 25.16 | 82.39 | 81.99 | Downstream (heuristic - verify) |
| Jashpur Nagar | 37 | 171.7 | 28,301 | 22.8878 | 84.1386 | 23.09 | 22.69 | 84.34 | 83.94 | Off flood-path (heuristic) |
| Pathalgaon | 37 | 171.9 | 16,613 | 22.5566 | 83.4635 | 22.76 | 22.36 | 83.66 | 83.26 | Off flood-path (heuristic) |
| Nāsriganj | 34 | 172.2 | 23,819 | 25.0514 | 84.3284 | 25.25 | 24.85 | 84.53 | 84.13 | Off flood-path (heuristic) |
| Anūppur | 35 | 172.3 | 19,899 | 23.1034 | 81.6908 | 23.3 | 22.9 | 81.89 | 81.49 | Off flood-path (heuristic) |
| Teonthar | 35 | 174.5 | 17,039 | 24.9821 | 81.6419 | 25.18 | 24.78 | 81.84 | 81.44 | Downstream (heuristic - verify) |
| Amlai | 35 | 175.4 | 30,354 | 23.1984 | 81.5806 | 23.4 | 23.0 | 81.78 | 81.38 | Off flood-path (heuristic) |
| Daudnagar | 34 | 176.7 | 52,364 | 25.0347 | 84.4009 | 25.23 | 24.83 | 84.6 | 84.2 | Off flood-path (heuristic) |
| Mariāhu | 36 | 178.1 | 22,248 | 25.6040 | 82.6038 | 25.8 | 25.4 | 82.8 | 82.4 | Downstream (heuristic - verify) |
| Dhanpuri | 35 | 178.4 | 45,156 | 23.1854 | 81.5551 | 23.39 | 22.99 | 81.76 | 81.36 | Off flood-path (heuristic) |
| Burhar | 35 | 178.6 | 19,289 | 23.2149 | 81.5320 | 23.41 | 23.01 | 81.73 | 81.33 | Off flood-path (heuristic) |
| Bikramganj | 34 | 178.9 | 48,465 | 25.2107 | 84.2551 | 25.41 | 25.01 | 84.46 | 84.06 | Off flood-path (heuristic) |
| Katghora | 37 | 179.1 | 22,690 | 22.5025 | 82.5428 | 22.7 | 22.3 | 82.74 | 82.34 | Off flood-path (heuristic) |
| Ghazīpur | 36 | 179.5 | 103,095 | 25.5833 | 83.5853 | 25.78 | 25.38 | 83.79 | 83.39 | Downstream (heuristic - verify) |
| Lohārdagā | 38 | 181.4 | 57,411 | 23.4331 | 84.6799 | 23.63 | 23.23 | 84.88 | 84.48 | Off flood-path (heuristic) |
| Rafiganj | 34 | 183.5 | 35,536 | 24.8176 | 84.6345 | 25.02 | 24.62 | 84.83 | 84.43 | Off flood-path (heuristic) |
| Rewa | 35 | 184.1 | 235,654 | 24.5326 | 81.2923 | 24.73 | 24.33 | 81.49 | 81.09 | Off flood-path (heuristic) |
| Gaurela | 37 | 184.5 | 18,165 | 22.7545 | 81.9011 | 22.95 | 22.55 | 82.1 | 81.7 | Off flood-path (heuristic) |
| Sherghāti | 34 | 187.3 | 40,666 | 24.5595 | 84.7916 | 24.76 | 24.36 | 84.99 | 84.59 | Off flood-path (heuristic) |
| Chatrā | 38 | 187.6 | 49,985 | 24.2065 | 84.8709 | 24.41 | 24.01 | 85.07 | 84.67 | Off flood-path (heuristic) |
| Koāth | 34 | 188.6 | 18,890 | 25.3264 | 84.2598 | 25.53 | 25.13 | 84.46 | 84.06 | Off flood-path (heuristic) |
| Muhammadābād | 36 | 189.2 | 33,186 | 25.6191 | 83.7558 | 25.82 | 25.42 | 83.96 | 83.56 | Downstream (heuristic - verify) |
| Shahdol | 35 | 189.6 | 89,289 | 23.2936 | 81.3619 | 23.49 | 23.09 | 81.56 | 81.16 | Off flood-path (heuristic) |
| Gumlā | 38 | 190.7 | 51,264 | 23.0427 | 84.5443 | 23.24 | 22.84 | 84.74 | 84.34 | Off flood-path (heuristic) |
| Jhūsi | 36 | 191.6 | 16,642 | 25.4374 | 81.9055 | 25.64 | 25.24 | 82.11 | 81.71 | Downstream (heuristic - verify) |
| Phulpur | 36 | 191.8 | 22,886 | 25.5490 | 82.0895 | 25.75 | 25.35 | 82.29 | 81.89 | Downstream (heuristic - verify) |
| Machhlīshahr | 36 | 192.3 | 25,247 | 25.6856 | 82.4111 | 25.89 | 25.49 | 82.61 | 82.21 | Downstream (heuristic - verify) |
| Korba | 37 | 192.5 | 419,146 | 22.3458 | 82.6963 | 22.55 | 22.15 | 82.9 | 82.5 | Off flood-path (heuristic) |
| Jaunpur | 36 | 192.6 | 169,572 | 25.7536 | 82.6869 | 25.95 | 25.55 | 82.89 | 82.49 | Downstream (heuristic - verify) |
| Lalganj | 36 | 194.5 | 23,124 | 25.7990 | 82.9977 | 26.0 | 25.6 | 83.2 | 82.8 | Downstream (heuristic - verify) |
| Buxar | 34 | 194.9 | 102,861 | 25.5755 | 83.9804 | 25.78 | 25.38 | 84.18 | 83.78 | Downstream (heuristic - verify) |
| Prayagraj | 36 | 196.0 | 1,073,438 | 25.4448 | 81.8432 | 25.64 | 25.24 | 82.04 | 81.64 | Downstream (heuristic - verify) |
| Bhelai | 37 | 198.3 | 27,158 | 22.3093 | 82.6095 | 22.51 | 22.11 | 82.81 | 82.41 | Off flood-path (heuristic) |
| Piro | 34 | 199.0 | 33,785 | 25.3322 | 84.4045 | 25.53 | 25.13 | 84.6 | 84.2 | Off flood-path (heuristic) |

## Hirakud Dam (Odisha)
Dam coordinates: 21.53, 83.87

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Hīrākud | 21 | 0.6 | 30,207 | 21.5250 | 83.8727 | 21.73 | 21.33 | 84.07 | 83.67 | Downstream (heuristic - verify) |
| Burla | 21 | 2.3 | 46,698 | 21.5098 | 83.8726 | 21.71 | 21.31 | 84.07 | 83.67 | Off flood-path (heuristic) |
| Sambalpur | 21 | 13.1 | 189,366 | 21.4653 | 83.9757 | 21.67 | 21.27 | 84.18 | 83.78 | Downstream (heuristic - verify) |
| Brajarajnagar | 21 | 32.2 | 80,403 | 21.8167 | 83.9167 | 22.02 | 21.62 | 84.12 | 83.72 | Off flood-path (heuristic) |
| Belpahar | 21 | 32.5 | 38,993 | 21.8218 | 83.8458 | 22.02 | 21.62 | 84.05 | 83.65 | Off flood-path (heuristic) |
| Bargarh | 21 | 33.9 | 80,625 | 21.3335 | 83.6191 | 21.53 | 21.13 | 83.82 | 83.42 | Off flood-path (heuristic) |
| Jharsuguda | 21 | 38.8 | 97,730 | 21.8553 | 84.0070 | 22.06 | 21.66 | 84.21 | 83.81 | Off flood-path (heuristic) |
| Barpāli | 21 | 47.8 | 20,850 | 21.1900 | 83.5872 | 21.39 | 20.99 | 83.79 | 83.39 | Off flood-path (heuristic) |
| Kuchinda | 21 | 54.9 | 15,576 | 21.7436 | 84.3485 | 21.94 | 21.54 | 84.55 | 84.15 | Off flood-path (heuristic) |
| Binika | 21 | 56.3 | 15,765 | 21.0263 | 83.8120 | 21.23 | 20.83 | 84.01 | 83.61 | Off flood-path (heuristic) |
| Raigarh | 37 | 63.7 | 150,019 | 21.8976 | 83.3966 | 22.1 | 21.7 | 83.6 | 83.2 | Off flood-path (heuristic) |
| Sundergarh | 21 | 67.4 | 45,036 | 22.1167 | 84.0333 | 22.32 | 21.92 | 84.23 | 83.83 | Off flood-path (heuristic) |
| Rāmpur | 21 | 70.4 | 15,379 | 21.0735 | 84.3410 | 21.27 | 20.87 | 84.54 | 84.14 | Downstream (heuristic - verify) |
| Sonepur | 21 | 77.6 | 20,770 | 20.8333 | 83.9167 | 21.03 | 20.63 | 84.12 | 83.72 | Off flood-path (heuristic) |
| Deogarh | 21 | 89.3 | 22,390 | 21.5383 | 84.7334 | 21.74 | 21.34 | 84.93 | 84.53 | Downstream (heuristic - verify) |
| Baud | 21 | 90.3 | 20,424 | 20.8377 | 84.3262 | 21.04 | 20.64 | 84.53 | 84.13 | Downstream (heuristic - verify) |
| Saraipali | 37 | 92.5 | 20,043 | 21.3153 | 83.0063 | 21.52 | 21.12 | 83.21 | 82.81 | Off flood-path (heuristic) |
| Kharsia | 37 | 94.1 | 18,939 | 21.9895 | 83.1048 | 22.19 | 21.79 | 83.3 | 82.9 | Off flood-path (heuristic) |
| Balāngīr | 21 | 99.9 | 98,238 | 20.7042 | 83.4903 | 20.9 | 20.5 | 83.69 | 83.29 | Off flood-path (heuristic) |
| Padmapur | 21 | 102.0 | 17,625 | 21.0000 | 83.0667 | 21.2 | 20.8 | 83.27 | 82.87 | Off flood-path (heuristic) |
| Padampur | 21 | 102.3 | 16,387 | 20.9993 | 83.0632 | 21.2 | 20.8 | 83.26 | 82.86 | Off flood-path (heuristic) |
| Rajgangpur | 21 | 104.7 | 51,362 | 22.2000 | 84.5830 | 22.4 | 22.0 | 84.78 | 84.38 | Off flood-path (heuristic) |
| Saktī | 37 | 108.9 | 21,955 | 22.0266 | 82.9609 | 22.23 | 21.83 | 83.16 | 82.76 | Off flood-path (heuristic) |
| Patnāgarh | 21 | 119.2 | 21,024 | 20.7083 | 83.1326 | 20.91 | 20.51 | 83.33 | 82.93 | Off flood-path (heuristic) |
| Pathalgaon | 37 | 121.6 | 16,613 | 22.5566 | 83.4635 | 22.76 | 22.36 | 83.66 | 83.26 | Off flood-path (heuristic) |
| Phulbāni | 21 | 122.5 | 37,371 | 20.4810 | 84.2306 | 20.68 | 20.28 | 84.43 | 84.03 | Downstream (heuristic - verify) |
| Jalda | 21 | 124.2 | 15,789 | 22.1872 | 84.8436 | 22.39 | 21.99 | 85.04 | 84.64 | Off flood-path (heuristic) |
| Raurkela Industrial Township | 21 | 126.6 | 216,410 | 22.1999 | 84.8618 | 22.4 | 22.0 | 85.06 | 84.66 | Off flood-path (heuristic) |
| Rourkela | 21 | 128.4 | 273,317 | 22.2250 | 84.8641 | 22.42 | 22.02 | 85.06 | 84.66 | Off flood-path (heuristic) |
| Birmitrapur | 21 | 133.8 | 33,442 | 22.4000 | 84.7667 | 22.6 | 22.2 | 84.97 | 84.57 | Off flood-path (heuristic) |
| Simdega | 38 | 137.1 | 42,944 | 22.6152 | 84.5021 | 22.82 | 22.42 | 84.7 | 84.3 | Off flood-path (heuristic) |
| Chāmpa | 37 | 138.7 | 45,256 | 22.0353 | 82.6423 | 22.24 | 21.84 | 82.84 | 82.44 | Off flood-path (heuristic) |
| Jānjgīr | 37 | 143.7 | 32,833 | 22.0092 | 82.5778 | 22.21 | 21.81 | 82.78 | 82.38 | Off flood-path (heuristic) |
| Nailā | 37 | 145.2 | 40,561 | 22.0207 | 82.5666 | 22.22 | 21.82 | 82.77 | 82.37 | Off flood-path (heuristic) |
| Baliguda | 21 | 148.0 | 16,611 | 20.1997 | 83.9094 | 20.4 | 20.0 | 84.11 | 83.71 | Off flood-path (heuristic) |
| Angul | 21 | 148.9 | 44,386 | 20.8409 | 85.1019 | 21.04 | 20.64 | 85.3 | 84.9 | Downstream (heuristic - verify) |
| Dera Colliery Township | 21 | 149.4 | 15,787 | 20.9528 | 85.1717 | 21.15 | 20.75 | 85.37 | 84.97 | Downstream (heuristic - verify) |
| Korba | 37 | 151.3 | 419,146 | 22.3458 | 82.6963 | 22.55 | 22.15 | 82.9 | 82.5 | Off flood-path (heuristic) |
| Ghantapada | 21 | 151.8 | 15,169 | 20.9345 | 85.1879 | 21.13 | 20.73 | 85.39 | 84.99 | Downstream (heuristic - verify) |
| Jashpur Nagar | 37 | 153.5 | 28,301 | 22.8878 | 84.1386 | 23.09 | 22.69 | 84.34 | 83.94 | Off flood-path (heuristic) |
| Kantābānji | 21 | 153.9 | 21,819 | 20.4671 | 82.9204 | 20.67 | 20.27 | 83.12 | 82.72 | Off flood-path (heuristic) |
| Nalco | 21 | 154.9 | 19,644 | 20.8654 | 85.1828 | 21.07 | 20.67 | 85.38 | 84.98 | Downstream (heuristic - verify) |
| Tālcher | 21 | 155.4 | 40,841 | 20.9493 | 85.2335 | 21.15 | 20.75 | 85.43 | 85.03 | Downstream (heuristic - verify) |
| Bhelai | 37 | 156.3 | 27,158 | 22.3093 | 82.6095 | 22.51 | 22.11 | 82.81 | 82.41 | Off flood-path (heuristic) |
| Titlāgarh | 21 | 156.8 | 34,067 | 20.2896 | 83.1523 | 20.49 | 20.09 | 83.35 | 82.95 | Off flood-path (heuristic) |
| Khariar Road | 21 | 157.6 | 18,967 | 20.8987 | 82.5089 | 21.1 | 20.7 | 82.71 | 82.31 | Off flood-path (heuristic) |
| Akaltara | 37 | 158.9 | 22,712 | 22.0246 | 82.4264 | 22.22 | 21.82 | 82.63 | 82.23 | Off flood-path (heuristic) |
| Bāgbahra | 37 | 162.9 | 19,529 | 21.0461 | 82.3864 | 21.25 | 20.85 | 82.59 | 82.19 | Off flood-path (heuristic) |
| Kesinga | 21 | 163.8 | 19,239 | 20.1878 | 83.2195 | 20.39 | 19.99 | 83.42 | 83.02 | Off flood-path (heuristic) |
| Barbil | 21 | 168.1 | 66,540 | 22.1019 | 85.3775 | 22.3 | 21.9 | 85.58 | 85.18 | Off flood-path (heuristic) |
| Joda | 21 | 169.2 | 46,631 | 22.0170 | 85.4220 | 22.22 | 21.82 | 85.62 | 85.22 | Downstream (heuristic - verify) |
| Bada Barabīl | 21 | 169.4 | 56,870 | 22.1119 | 85.3868 | 22.31 | 21.91 | 85.59 | 85.19 | Off flood-path (heuristic) |
| Katghora | 37 | 174.4 | 22,690 | 22.5025 | 82.5428 | 22.7 | 22.3 | 82.74 | 82.34 | Off flood-path (heuristic) |
| Deori | 37 | 177.2 | 17,265 | 22.0990 | 82.2664 | 22.3 | 21.9 | 82.47 | 82.07 | Off flood-path (heuristic) |
| Baloda Bāzār | 37 | 177.3 | 26,632 | 21.6568 | 82.1606 | 21.86 | 21.46 | 82.36 | 81.96 | Off flood-path (heuristic) |
| Keonjhargarh | 21 | 178.9 | 60,590 | 21.6318 | 85.5969 | 21.83 | 21.43 | 85.8 | 85.4 | Downstream (heuristic - verify) |
| Kharhiāl | 21 | 179.8 | 15,087 | 20.2885 | 82.7606 | 20.49 | 20.09 | 82.96 | 82.56 | Off flood-path (heuristic) |
| Gumlā | 38 | 181.9 | 51,264 | 23.0427 | 84.5443 | 23.24 | 22.84 | 84.74 | 84.34 | Off flood-path (heuristic) |
| Noāmundi | 38 | 182.7 | 17,954 | 22.1609 | 85.5042 | 22.36 | 21.96 | 85.7 | 85.3 | Off flood-path (heuristic) |
| Lingiādīh | 37 | 185.2 | 22,209 | 22.0775 | 82.1761 | 22.28 | 21.88 | 82.38 | 81.98 | Off flood-path (heuristic) |
| Kāmākhyānagar | 21 | 185.8 | 16,810 | 20.9338 | 85.5449 | 21.13 | 20.73 | 85.74 | 85.34 | Downstream (heuristic - verify) |
| Sirgittī | 37 | 186.8 | 18,428 | 22.0471 | 82.1487 | 22.25 | 21.85 | 82.35 | 81.95 | Off flood-path (heuristic) |
| Bilāspur | 37 | 187.3 | 365,579 | 22.0800 | 82.1554 | 22.28 | 21.88 | 82.36 | 81.96 | Off flood-path (heuristic) |
| Tifrā | 37 | 189.0 | 30,465 | 22.0631 | 82.1313 | 22.26 | 21.86 | 82.33 | 81.93 | Off flood-path (heuristic) |
| Bodrī | 37 | 189.5 | 17,481 | 22.0235 | 82.1136 | 22.22 | 21.82 | 82.31 | 81.91 | Off flood-path (heuristic) |
| Mahāsamund | 37 | 189.8 | 54,413 | 21.1074 | 82.0948 | 21.31 | 20.91 | 82.29 | 81.89 | Off flood-path (heuristic) |
| Ambikāpur | 37 | 189.8 | 121,071 | 23.1189 | 83.1954 | 23.32 | 22.92 | 83.4 | 83.0 | Off flood-path (heuristic) |
| Bhanjanagar | 21 | 193.0 | 20,647 | 19.9272 | 84.5820 | 20.13 | 19.73 | 84.78 | 84.38 | Downstream (heuristic - verify) |
| Ratanpur | 37 | 194.7 | 24,636 | 22.2866 | 82.1682 | 22.49 | 22.09 | 82.37 | 81.97 | Off flood-path (heuristic) |
| Bhawānipatna | 21 | 194.7 | 69,045 | 19.9072 | 83.1670 | 20.11 | 19.71 | 83.37 | 82.97 | Off flood-path (heuristic) |
| Bālugaon | 21 | 198.2 | 17,238 | 20.1784 | 85.1133 | 20.38 | 19.98 | 85.31 | 84.91 | Downstream (heuristic - verify) |

## Maithon Dam (Jharkhand)
Dam coordinates: 23.78, 86.83

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Maithon | 38 | 2.0 | 18,830 | 23.7800 | 86.8100 | 23.98 | 23.58 | 87.01 | 86.61 | Off flood-path (heuristic) |
| Kulti | 28 | 5.6 | 305,405 | 23.7317 | 86.8437 | 23.93 | 23.53 | 87.04 | 86.64 | Downstream (heuristic - verify) |
| Chirkunda | 38 | 5.6 | 45,508 | 23.7477 | 86.7880 | 23.95 | 23.55 | 86.99 | 86.59 | Off flood-path (heuristic) |
| Siuliban | 38 | 5.8 | 24,202 | 23.7486 | 86.7848 | 23.95 | 23.55 | 86.98 | 86.58 | Off flood-path (heuristic) |
| Chittaranjan | 28 | 11.3 | 45,305 | 23.8568 | 86.9032 | 24.06 | 23.66 | 87.1 | 86.7 | Off flood-path (heuristic) |
| Āsansol | 28 | 19.0 | 504,271 | 23.6833 | 86.9833 | 23.88 | 23.48 | 87.18 | 86.78 | Downstream (heuristic - verify) |
| Jāmtāra | 38 | 20.5 | 29,415 | 23.9630 | 86.8029 | 24.16 | 23.76 | 87.0 | 86.6 | Off flood-path (heuristic) |
| Lakhyabad | 28 | 20.9 | 33,162 | 23.6667 | 86.6667 | 23.87 | 23.47 | 86.87 | 86.47 | Off flood-path (heuristic) |
| Jāmuria | 28 | 26.7 | 160,242 | 23.7047 | 87.0787 | 23.9 | 23.5 | 87.28 | 86.88 | Downstream (heuristic - verify) |
| Raghunathpur | 28 | 31.2 | 22,802 | 23.5388 | 86.6735 | 23.74 | 23.34 | 86.87 | 86.47 | Off flood-path (heuristic) |
| Adra | 28 | 34.9 | 22,159 | 23.4967 | 86.6836 | 23.7 | 23.3 | 86.88 | 86.48 | Off flood-path (heuristic) |
| Rānīganj | 28 | 35.6 | 131,261 | 23.6164 | 87.1306 | 23.82 | 23.42 | 87.33 | 86.93 | Downstream (heuristic - verify) |
| Bahula | 28 | 36.9 | 16,264 | 23.6518 | 87.1647 | 23.85 | 23.45 | 87.36 | 86.96 | Downstream (heuristic - verify) |
| Dhanbad | 38 | 40.8 | 1,196,214 | 23.7976 | 86.4299 | 24.0 | 23.6 | 86.63 | 86.23 | Off flood-path (heuristic) |
| Pāthardih | 38 | 42.5 | 45,276 | 23.6658 | 86.4317 | 23.87 | 23.47 | 86.63 | 86.23 | Off flood-path (heuristic) |
| Jharia | 38 | 42.5 | 86,938 | 23.7408 | 86.4146 | 23.94 | 23.54 | 86.61 | 86.21 | Off flood-path (heuristic) |
| Jāmadoba | 38 | 44.3 | 34,774 | 23.7167 | 86.4000 | 23.92 | 23.52 | 86.6 | 86.2 | Off flood-path (heuristic) |
| Sijua | 38 | 50.9 | 31,537 | 23.7762 | 86.3303 | 23.98 | 23.58 | 86.53 | 86.13 | Off flood-path (heuristic) |
| Kātrās | 38 | 54.1 | 57,349 | 23.7975 | 86.2983 | 24.0 | 23.6 | 86.5 | 86.1 | Off flood-path (heuristic) |
| Dubrājpur | 28 | 55.6 | 35,087 | 23.7902 | 87.3765 | 23.99 | 23.59 | 87.58 | 87.18 | Off flood-path (heuristic) |
| Durgapur | 28 | 56.9 | 518,872 | 23.5158 | 87.3080 | 23.72 | 23.32 | 87.51 | 87.11 | Downstream (heuristic - verify) |
| Madhupur | 38 | 58.3 | 55,238 | 24.2742 | 86.6393 | 24.47 | 24.07 | 86.84 | 86.44 | Off flood-path (heuristic) |
| Bānkura | 28 | 65.7 | 133,966 | 23.2324 | 87.0716 | 23.43 | 23.03 | 87.27 | 86.87 | Downstream (heuristic - verify) |
| Dugda | 38 | 67.1 | 22,740 | 23.7452 | 86.1718 | 23.95 | 23.55 | 86.37 | 85.97 | Off flood-path (heuristic) |
| Dumka | 38 | 68.9 | 47,663 | 24.2678 | 87.2485 | 24.47 | 24.07 | 87.45 | 87.05 | Off flood-path (heuristic) |
| Puruliya | 28 | 69.0 | 122,533 | 23.3306 | 86.3630 | 23.53 | 23.13 | 86.56 | 86.16 | Off flood-path (heuristic) |
| Chas | 38 | 69.4 | 141,640 | 23.6356 | 86.1671 | 23.84 | 23.44 | 86.37 | 85.97 | Off flood-path (heuristic) |
| Giridih | 38 | 69.6 | 114,533 | 24.1862 | 86.3088 | 24.39 | 23.99 | 86.51 | 86.11 | Off flood-path (heuristic) |
| Gomoh | 38 | 69.8 | 31,495 | 23.8736 | 86.1516 | 24.07 | 23.67 | 86.35 | 85.95 | Off flood-path (heuristic) |
| Bokāro | 38 | 70.1 | 564,319 | 23.6693 | 86.1516 | 23.87 | 23.47 | 86.35 | 85.95 | Off flood-path (heuristic) |
| Siuri | 28 | 72.4 | 64,659 | 23.9081 | 87.5277 | 24.11 | 23.71 | 87.73 | 87.33 | Off flood-path (heuristic) |
| Chandrapura | 38 | 72.4 | 27,425 | 23.7488 | 86.1196 | 23.95 | 23.55 | 86.32 | 85.92 | Off flood-path (heuristic) |
| Kenda | 28 | 72.5 | 15,131 | 23.1959 | 86.5150 | 23.4 | 23.0 | 86.71 | 86.31 | Off flood-path (heuristic) |
| Basukinath | 38 | 73.1 | 17,123 | 24.3945 | 87.0864 | 24.59 | 24.19 | 87.29 | 86.89 | Off flood-path (heuristic) |
| Sonāmukhi | 28 | 79.5 | 28,334 | 23.3052 | 87.4134 | 23.51 | 23.11 | 87.61 | 87.21 | Downstream (heuristic - verify) |
| Deoghar | 38 | 80.0 | 203,123 | 24.4898 | 86.6990 | 24.69 | 24.29 | 86.9 | 86.5 | Off flood-path (heuristic) |
| Jasidih | 38 | 83.7 | 16,338 | 24.5138 | 86.6458 | 24.71 | 24.31 | 86.85 | 86.45 | Off flood-path (heuristic) |
| Phusro | 38 | 84.0 | 185,555 | 23.7564 | 86.0051 | 23.96 | 23.56 | 86.21 | 85.81 | Off flood-path (heuristic) |
| Kāro | 38 | 86.7 | 39,305 | 23.7852 | 85.9783 | 23.99 | 23.59 | 86.18 | 85.78 | Off flood-path (heuristic) |
| Sainthia | 28 | 88.5 | 43,221 | 23.9483 | 87.6804 | 24.15 | 23.75 | 87.88 | 87.48 | Off flood-path (heuristic) |
| Bolpur | 28 | 89.2 | 70,998 | 23.6628 | 87.6970 | 23.86 | 23.46 | 87.9 | 87.5 | Downstream (heuristic - verify) |
| Khātra | 28 | 89.4 | 16,484 | 22.9762 | 86.8546 | 23.18 | 22.78 | 87.05 | 86.65 | Downstream (heuristic - verify) |
| Jāridih | 38 | 90.7 | 31,882 | 23.7657 | 85.9386 | 23.97 | 23.57 | 86.14 | 85.74 | Off flood-path (heuristic) |
| Bermo | 38 | 91.0 | 17,401 | 23.7878 | 85.9353 | 23.99 | 23.59 | 86.14 | 85.74 | Off flood-path (heuristic) |
| Bishnupur | 28 | 93.1 | 64,041 | 23.0738 | 87.3199 | 23.27 | 22.87 | 87.52 | 87.12 | Downstream (heuristic - verify) |
| Kathhāra | 38 | 96.2 | 22,080 | 23.7638 | 85.8847 | 23.96 | 23.56 | 86.08 | 85.68 | Off flood-path (heuristic) |
| Guskhara | 28 | 97.5 | 33,780 | 23.4928 | 87.7348 | 23.69 | 23.29 | 87.93 | 87.53 | Downstream (heuristic - verify) |
| Balarāmpur | 28 | 98.0 | 22,847 | 23.0971 | 86.2229 | 23.3 | 22.9 | 86.42 | 86.02 | Off flood-path (heuristic) |
| Jhalidā | 28 | 98.5 | 18,057 | 23.3654 | 85.9764 | 23.57 | 23.17 | 86.18 | 85.78 | Off flood-path (heuristic) |
| Sāram | 38 | 101.8 | 15,212 | 23.7625 | 85.8300 | 23.96 | 23.56 | 86.03 | 85.63 | Off flood-path (heuristic) |
| Gumia | 38 | 102.3 | 48,141 | 23.7975 | 85.8252 | 24.0 | 23.6 | 86.03 | 85.63 | Off flood-path (heuristic) |
| Barki Saria | 38 | 105.2 | 24,134 | 24.1759 | 85.8894 | 24.38 | 23.98 | 86.09 | 85.69 | Off flood-path (heuristic) |
| Rampur Hat | 28 | 106.4 | 53,468 | 24.1774 | 87.7827 | 24.38 | 23.98 | 87.98 | 87.58 | Off flood-path (heuristic) |
| Āmlāgora | 28 | 116.0 | 19,038 | 22.8462 | 87.3356 | 23.05 | 22.65 | 87.54 | 87.14 | Downstream (heuristic - verify) |
| Nalhāti | 28 | 116.6 | 25,878 | 24.2970 | 87.8290 | 24.5 | 24.1 | 88.03 | 87.63 | Off flood-path (heuristic) |
| Jhajha | 34 | 119.3 | 40,646 | 24.7711 | 86.3789 | 24.97 | 24.57 | 86.58 | 86.18 | Off flood-path (heuristic) |
| Barddhamān | 28 | 119.8 | 301,725 | 23.2557 | 87.8569 | 23.46 | 23.06 | 88.06 | 87.66 | Downstream (heuristic - verify) |
| Chitarpur | 38 | 122.0 | 22,837 | 23.5728 | 85.6535 | 23.77 | 23.37 | 85.85 | 85.45 | Off flood-path (heuristic) |
| Godda | 38 | 122.7 | 48,480 | 24.8270 | 87.2125 | 25.03 | 24.63 | 87.41 | 87.01 | Off flood-path (heuristic) |
| Bānka | 34 | 122.8 | 45,977 | 24.8809 | 86.9226 | 25.08 | 24.68 | 87.12 | 86.72 | Off flood-path (heuristic) |
| Mango | 38 | 123.1 | 223,805 | 22.8275 | 86.2164 | 23.03 | 22.63 | 86.42 | 86.02 | Off flood-path (heuristic) |
| Kopali | 38 | 123.5 | 43,256 | 22.8372 | 86.1916 | 23.04 | 22.64 | 86.39 | 85.99 | Off flood-path (heuristic) |
| Kāndi | 28 | 124.7 | 54,848 | 23.9595 | 88.0402 | 24.16 | 23.76 | 88.24 | 87.84 | Off flood-path (heuristic) |
| Ghorabandha | 38 | 125.7 | 20,718 | 22.7724 | 86.2711 | 22.97 | 22.57 | 86.47 | 86.07 | Off flood-path (heuristic) |
| Kedia | 38 | 126.5 | 16,054 | 23.7945 | 85.5872 | 23.99 | 23.59 | 85.79 | 85.39 | Off flood-path (heuristic) |
| Jamshedpur | 38 | 127.0 | 1,339,438 | 22.8028 | 86.1855 | 23.0 | 22.6 | 86.39 | 85.99 | Off flood-path (heuristic) |
| Chhota Gobindpur | 38 | 128.9 | 31,843 | 22.7459 | 86.2589 | 22.95 | 22.55 | 86.46 | 86.06 | Off flood-path (heuristic) |
| Gadhra | 38 | 129.5 | 18,801 | 22.7467 | 86.2455 | 22.95 | 22.55 | 86.45 | 86.05 | Off flood-path (heuristic) |
| Jugsālai | 38 | 129.6 | 49,660 | 22.7767 | 86.1835 | 22.98 | 22.58 | 86.38 | 85.98 | Off flood-path (heuristic) |
| Sarjamda | 38 | 130.3 | 23,788 | 22.7476 | 86.2257 | 22.95 | 22.55 | 86.43 | 86.03 | Off flood-path (heuristic) |
| Bhetia | 38 | 130.4 | 174,355 | 22.7932 | 86.1410 | 22.99 | 22.59 | 86.34 | 85.94 | Off flood-path (heuristic) |
| Haludbani | 38 | 130.8 | 25,360 | 22.7512 | 86.2099 | 22.95 | 22.55 | 86.41 | 86.01 | Off flood-path (heuristic) |
| Bagbera | 38 | 130.9 | 78,356 | 22.7595 | 86.1905 | 22.96 | 22.56 | 86.39 | 85.99 | Off flood-path (heuristic) |
| Rāmjībanpur | 28 | 132.4 | 18,318 | 22.8282 | 87.6089 | 23.03 | 22.63 | 87.81 | 87.41 | Downstream (heuristic - verify) |
| Kātoya | 28 | 133.5 | 78,408 | 23.6456 | 88.1326 | 23.85 | 23.45 | 88.33 | 87.93 | Downstream (heuristic - verify) |
| Rāmgarh | 38 | 134.3 | 88,781 | 23.6303 | 85.5216 | 23.83 | 23.43 | 85.72 | 85.32 | Off flood-path (heuristic) |
| Jadugora | 38 | 134.3 | 18,563 | 22.6536 | 86.3560 | 22.85 | 22.45 | 86.56 | 86.16 | Off flood-path (heuristic) |
| Kuju | 38 | 134.5 | 21,356 | 23.7254 | 85.5102 | 23.93 | 23.53 | 85.71 | 85.31 | Off flood-path (heuristic) |
| Chandrakona | 28 | 135.9 | 21,855 | 22.7333 | 87.5167 | 22.93 | 22.53 | 87.72 | 87.32 | Downstream (heuristic - verify) |
| Ghātsīla | 38 | 137.7 | 40,624 | 22.5853 | 86.4768 | 22.79 | 22.39 | 86.68 | 86.28 | Off flood-path (heuristic) |
| Domchānch | 38 | 138.9 | 15,809 | 24.4748 | 85.6921 | 24.67 | 24.27 | 85.89 | 85.49 | Off flood-path (heuristic) |
| Arāmbāgh | 28 | 139.3 | 60,639 | 22.8833 | 87.7833 | 23.08 | 22.68 | 87.98 | 87.58 | Downstream (heuristic - verify) |
| Barkā Kānā | 38 | 139.8 | 18,475 | 23.6212 | 85.4675 | 23.82 | 23.42 | 85.67 | 85.27 | Off flood-path (heuristic) |
| Pakur | 38 | 140.2 | 45,840 | 24.6393 | 87.8424 | 24.84 | 24.44 | 88.04 | 87.64 | Off flood-path (heuristic) |
| Amarpur | 34 | 140.3 | 25,336 | 25.0397 | 86.9025 | 25.24 | 24.84 | 87.1 | 86.7 | Off flood-path (heuristic) |
| Jamūī | 34 | 141.4 | 87,357 | 24.9261 | 86.2253 | 25.13 | 24.73 | 86.43 | 86.03 | Off flood-path (heuristic) |
| Sirka | 38 | 143.0 | 19,871 | 23.6456 | 85.4333 | 23.85 | 23.45 | 85.63 | 85.23 | Off flood-path (heuristic) |
| Būndu | 38 | 144.0 | 21,054 | 23.1609 | 85.5901 | 23.36 | 22.96 | 85.79 | 85.39 | Off flood-path (heuristic) |
| Chākuliā | 38 | 144.7 | 16,306 | 22.4830 | 86.7179 | 22.68 | 22.28 | 86.92 | 86.52 | Downstream (heuristic - verify) |
| Memāri | 28 | 145.7 | 44,448 | 23.1765 | 88.0975 | 23.38 | 22.98 | 88.3 | 87.9 | Downstream (heuristic - verify) |
| Mushābani | 38 | 146.1 | 32,761 | 22.5114 | 86.4571 | 22.71 | 22.31 | 86.66 | 86.26 | Off flood-path (heuristic) |
| Beldānga | 28 | 146.4 | 27,489 | 23.9343 | 88.2602 | 24.13 | 23.73 | 88.46 | 88.06 | Off flood-path (heuristic) |
| Kodarma | 38 | 146.9 | 24,633 | 24.4675 | 85.5940 | 24.67 | 24.27 | 85.79 | 85.39 | Off flood-path (heuristic) |
| Jangipur | 28 | 148.0 | 82,548 | 24.4700 | 88.0766 | 24.67 | 24.27 | 88.28 | 87.88 | Off flood-path (heuristic) |
| Jhārgrām | 28 | 148.4 | 57,796 | 22.4538 | 86.9950 | 22.65 | 22.25 | 87.19 | 86.79 | Downstream (heuristic - verify) |
| Baharampur | 28 | 148.9 | 180,547 | 24.1047 | 88.2515 | 24.3 | 23.9 | 88.45 | 88.05 | Off flood-path (heuristic) |
| Gobindpur | 38 | 149.2 | 27,066 | 22.6339 | 86.0716 | 22.83 | 22.43 | 86.27 | 85.87 | Off flood-path (heuristic) |
| Jhumri Telaiya | 38 | 150.7 | 87,867 | 24.4349 | 85.5295 | 24.63 | 24.23 | 85.73 | 85.33 | Off flood-path (heuristic) |
| Hazāribāgh | 38 | 151.1 | 153,595 | 23.9924 | 85.3616 | 24.19 | 23.79 | 85.56 | 85.16 | Off flood-path (heuristic) |
| Dhuliān | 28 | 151.7 | 77,070 | 24.6813 | 87.9535 | 24.88 | 24.48 | 88.15 | 87.75 | Off flood-path (heuristic) |
| Kharagpur | 34 | 152.1 | 31,385 | 25.1245 | 86.5558 | 25.32 | 24.92 | 86.76 | 86.36 | Off flood-path (heuristic) |
| Purāini | 34 | 152.3 | 30,829 | 25.1426 | 86.9797 | 25.34 | 24.94 | 87.18 | 86.78 | Off flood-path (heuristic) |
| Srirāmpur | 28 | 152.6 | 18,682 | 22.9485 | 88.0195 | 23.15 | 22.75 | 88.22 | 87.82 | Downstream (heuristic - verify) |
| Murshidābād | 28 | 153.2 | 39,557 | 24.1839 | 88.2717 | 24.38 | 23.98 | 88.47 | 88.07 | Off flood-path (heuristic) |
| Saunda | 38 | 153.5 | 81,915 | 23.6645 | 85.3269 | 23.86 | 23.46 | 85.53 | 85.13 | Off flood-path (heuristic) |
| Ghātāl | 28 | 154.8 | 54,658 | 22.6624 | 87.7340 | 22.86 | 22.46 | 87.93 | 87.53 | Downstream (heuristic - verify) |
| Patrātu | 38 | 155.9 | 32,899 | 23.6651 | 85.3035 | 23.87 | 23.47 | 85.5 | 85.1 | Off flood-path (heuristic) |
| Tarakeswar | 28 | 156.5 | 30,475 | 22.8861 | 88.0136 | 23.09 | 22.69 | 88.21 | 87.81 | Downstream (heuristic - verify) |
| Farakka | 28 | 158.3 | 21,834 | 24.8167 | 87.9000 | 25.02 | 24.62 | 88.1 | 87.7 | Off flood-path (heuristic) |
| Kānke | 38 | 158.5 | 17,560 | 23.4348 | 85.3206 | 23.63 | 23.23 | 85.52 | 85.12 | Off flood-path (heuristic) |
| Medinīpur | 28 | 159.3 | 153,349 | 22.4211 | 87.3226 | 22.62 | 22.22 | 87.52 | 87.12 | Downstream (heuristic - verify) |
| Lālgola | 28 | 161.1 | 28,442 | 24.4224 | 88.2524 | 24.62 | 24.22 | 88.45 | 88.05 | Off flood-path (heuristic) |
| Navadwīp | 28 | 162.2 | 111,123 | 23.4067 | 88.3686 | 23.61 | 23.21 | 88.57 | 88.17 | Downstream (heuristic - verify) |
| Ranchi | 38 | 162.4 | 1,120,374 | 23.3432 | 85.3094 | 23.54 | 23.14 | 85.51 | 85.11 | Off flood-path (heuristic) |
| Sultānganj | 34 | 162.4 | 52,892 | 25.2383 | 86.7356 | 25.44 | 25.04 | 86.94 | 86.54 | Off flood-path (heuristic) |
| Bhāgalpur | 34 | 163.5 | 400,146 | 25.2445 | 86.9718 | 25.44 | 25.04 | 87.17 | 86.77 | Off flood-path (heuristic) |
| Rajauli | 34 | 165.6 | 30,170 | 24.6449 | 85.5003 | 24.84 | 24.44 | 85.7 | 85.3 | Off flood-path (heuristic) |
| Kharagpur | 28 | 168.0 | 219,665 | 22.3397 | 87.3250 | 22.54 | 22.14 | 87.53 | 87.13 | Downstream (heuristic - verify) |
| Pandua | 28 | 168.0 | 28,205 | 23.0749 | 88.2864 | 23.27 | 22.87 | 88.49 | 88.09 | Downstream (heuristic - verify) |
| Kālna | 28 | 168.3 | 53,964 | 23.2194 | 88.3629 | 23.42 | 23.02 | 88.56 | 88.16 | Downstream (heuristic - verify) |
| Rātu | 38 | 169.4 | 22,379 | 23.4204 | 85.2146 | 23.62 | 23.22 | 85.41 | 85.01 | Off flood-path (heuristic) |
| Colgong | 34 | 169.9 | 33,700 | 25.2633 | 87.2326 | 25.46 | 25.06 | 87.43 | 87.03 | Off flood-path (heuristic) |
| Luckeesarai | 34 | 172.2 | 99,979 | 25.1765 | 86.0947 | 25.38 | 24.98 | 86.29 | 85.89 | Off flood-path (heuristic) |
| Chāībāsa | 38 | 172.4 | 69,565 | 22.5504 | 85.8025 | 22.75 | 22.35 | 86.0 | 85.6 | Off flood-path (heuristic) |
| Chakradharpur | 38 | 173.6 | 56,531 | 22.6761 | 85.6289 | 22.88 | 22.48 | 85.83 | 85.43 | Off flood-path (heuristic) |
| Shāntipur | 28 | 173.9 | 149,983 | 23.2472 | 88.4330 | 23.45 | 23.05 | 88.63 | 88.23 | Downstream (heuristic - verify) |
| Jamālpur | 34 | 173.9 | 105,434 | 25.3126 | 86.4889 | 25.51 | 25.11 | 86.69 | 86.29 | Off flood-path (heuristic) |
| Rājmahal | 38 | 174.1 | 22,514 | 25.0530 | 87.8305 | 25.25 | 24.85 | 88.03 | 87.63 | Off flood-path (heuristic) |
| Krishnanagar | 28 | 174.3 | 145,926 | 23.4058 | 88.4907 | 23.61 | 23.21 | 88.69 | 88.29 | Downstream (heuristic - verify) |
| Khunti | 38 | 176.6 | 36,390 | 23.0760 | 85.2782 | 23.28 | 22.88 | 85.48 | 85.08 | Off flood-path (heuristic) |
| Singur | 28 | 179.1 | 19,402 | 22.8092 | 88.2294 | 23.01 | 22.61 | 88.43 | 88.03 | Downstream (heuristic - verify) |
| Bhadauni | 34 | 179.1 | 20,739 | 24.8754 | 85.5337 | 25.08 | 24.68 | 85.73 | 85.33 | Off flood-path (heuristic) |
| Nawāda | 34 | 179.2 | 98,029 | 24.8867 | 85.5436 | 25.09 | 24.69 | 85.74 | 85.34 | Off flood-path (heuristic) |
| Āmta | 28 | 179.6 | 16,753 | 22.5834 | 88.0104 | 22.78 | 22.38 | 88.21 | 87.81 | Downstream (heuristic - verify) |
| Naugachhia | 34 | 180.9 | 49,069 | 25.3881 | 87.0991 | 25.59 | 25.19 | 87.3 | 86.9 | Off flood-path (heuristic) |
| Munger | 34 | 180.9 | 213,303 | 25.3746 | 86.4745 | 25.57 | 25.17 | 86.67 | 86.27 | Off flood-path (heuristic) |
| Rairangpur | 21 | 181.2 | 34,929 | 22.2667 | 86.1739 | 22.47 | 22.07 | 86.37 | 85.97 | Off flood-path (heuristic) |
| Sheikhpura | 34 | 181.3 | 62,927 | 25.1399 | 85.8410 | 25.34 | 24.94 | 86.04 | 85.64 | Off flood-path (heuristic) |
| Sāhibganj | 38 | 182.0 | 95,890 | 25.2443 | 87.6348 | 25.44 | 25.04 | 87.83 | 87.43 | Off flood-path (heuristic) |
| Gogri Jamālpur | 34 | 182.2 | 37,753 | 25.4112 | 86.6593 | 25.61 | 25.21 | 86.86 | 86.46 | Off flood-path (heuristic) |
| Wāris Alīganj | 34 | 182.9 | 35,243 | 25.0172 | 85.6405 | 25.22 | 24.82 | 85.84 | 85.44 | Off flood-path (heuristic) |
| Bānsbāria | 28 | 184.8 | 108,474 | 22.9539 | 88.4010 | 23.15 | 22.75 | 88.6 | 88.2 | Downstream (heuristic - verify) |
| Hisua | 34 | 185.0 | 32,585 | 24.8336 | 85.4173 | 25.03 | 24.63 | 85.62 | 85.22 | Off flood-path (heuristic) |
| Churi | 38 | 185.5 | 24,876 | 23.6549 | 85.0128 | 23.85 | 23.45 | 85.21 | 84.81 | Off flood-path (heuristic) |
| Khalāri | 38 | 186.1 | 20,010 | 23.6506 | 85.0074 | 23.85 | 23.45 | 85.21 | 84.81 | Off flood-path (heuristic) |
| Kalyani | 28 | 186.5 | 93,184 | 22.9757 | 88.4337 | 23.18 | 22.78 | 88.63 | 88.23 | Downstream (heuristic - verify) |
| Barhiya | 34 | 186.6 | 43,045 | 25.2881 | 86.0206 | 25.49 | 25.09 | 86.22 | 85.82 | Off flood-path (heuristic) |
| Kānchrāpāra | 28 | 186.9 | 136,954 | 22.9600 | 88.4285 | 23.16 | 22.76 | 88.63 | 88.23 | Downstream (heuristic - verify) |
| Hugli | 28 | 187.0 | 177,005 | 22.9088 | 88.3967 | 23.11 | 22.71 | 88.6 | 88.2 | Downstream (heuristic - verify) |
| Bhadreswar | 28 | 187.1 | 121,662 | 22.8245 | 88.3384 | 23.02 | 22.62 | 88.54 | 88.14 | Downstream (heuristic - verify) |
| Chandannagar | 28 | 187.3 | 180,623 | 22.8622 | 88.3680 | 23.06 | 22.66 | 88.57 | 88.17 | Downstream (heuristic - verify) |
| Hālīsahar | 28 | 187.6 | 128,172 | 22.9322 | 88.4186 | 23.13 | 22.73 | 88.62 | 88.22 | Downstream (heuristic - verify) |
| Baidyabāti | 28 | 188.6 | 115,504 | 22.7850 | 88.3259 | 22.98 | 22.58 | 88.53 | 88.13 | Downstream (heuristic - verify) |
| Shyamnagar | 28 | 189.0 | 441,956 | 22.8333 | 88.3667 | 23.03 | 22.63 | 88.57 | 88.17 | Downstream (heuristic - verify) |
| Rānāghāt | 28 | 189.4 | 70,984 | 23.1762 | 88.5667 | 23.38 | 22.98 | 88.77 | 88.37 | Downstream (heuristic - verify) |
| Naihāti | 28 | 189.5 | 253,221 | 22.8940 | 88.4152 | 23.09 | 22.69 | 88.62 | 88.22 | Downstream (heuristic - verify) |
| Ballia | 34 | 189.8 | 47,550 | 25.4214 | 86.3144 | 25.62 | 25.22 | 86.51 | 86.11 | Off flood-path (heuristic) |
| Bhātpāra | 28 | 189.9 | 483,129 | 22.8664 | 88.4011 | 23.07 | 22.67 | 88.6 | 88.2 | Downstream (heuristic - verify) |
| Malda | 28 | 190.5 | 170,039 | 25.0045 | 88.1457 | 25.2 | 24.8 | 88.35 | 87.95 | Off flood-path (heuristic) |
| Aistala | 28 | 190.5 | 19,425 | 23.1800 | 88.5800 | 23.38 | 22.98 | 88.78 | 88.38 | Downstream (heuristic - verify) |
| Manihāri | 34 | 190.9 | 26,629 | 25.3389 | 87.6200 | 25.54 | 25.14 | 87.82 | 87.42 | Off flood-path (heuristic) |
| Bagulā | 28 | 191.1 | 20,999 | 23.3366 | 88.6411 | 23.54 | 23.14 | 88.84 | 88.44 | Downstream (heuristic - verify) |
| Dhulagari | 28 | 191.1 | 21,080 | 22.5821 | 88.1710 | 22.78 | 22.38 | 88.37 | 87.97 | Downstream (heuristic - verify) |
| Shrīrāmpur | 28 | 192.1 | 226,317 | 22.7528 | 88.3422 | 22.95 | 22.55 | 88.54 | 88.14 | Downstream (heuristic - verify) |
| Pānchla | 28 | 192.3 | 23,526 | 22.5367 | 88.1379 | 22.74 | 22.34 | 88.34 | 87.94 | Downstream (heuristic - verify) |
| Bārākpur | 28 | 193.0 | 148,174 | 22.7660 | 88.3634 | 22.97 | 22.57 | 88.56 | 88.16 | Downstream (heuristic - verify) |
| Dumjor | 28 | 193.8 | 17,972 | 22.6199 | 88.2457 | 22.82 | 22.42 | 88.45 | 88.05 | Downstream (heuristic - verify) |
| Rishra | 28 | 194.3 | 117,014 | 22.7239 | 88.3456 | 22.92 | 22.52 | 88.55 | 88.15 | Downstream (heuristic - verify) |
| Barbigha | 34 | 194.5 | 46,075 | 25.2167 | 85.7333 | 25.42 | 25.02 | 85.93 | 85.53 | Off flood-path (heuristic) |
| Uluberiya | 28 | 194.6 | 235,345 | 22.4756 | 88.0990 | 22.68 | 22.28 | 88.3 | 87.9 | Downstream (heuristic - verify) |
| Bar Bigha | 34 | 194.7 | 41,758 | 25.2186 | 85.7332 | 25.42 | 25.02 | 85.93 | 85.53 | Off flood-path (heuristic) |
| Khagaria | 34 | 195.0 | 49,982 | 25.5022 | 86.4671 | 25.7 | 25.3 | 86.67 | 86.27 | Off flood-path (heuristic) |
| Begusarai | 34 | 195.3 | 252,008 | 25.4185 | 86.1339 | 25.62 | 25.22 | 86.33 | 85.93 | Off flood-path (heuristic) |
| Titāgarh | 28 | 195.4 | 127,751 | 22.7425 | 88.3733 | 22.94 | 22.54 | 88.57 | 88.17 | Downstream (heuristic - verify) |
| Mahiari | 28 | 195.4 | 17,051 | 22.5883 | 88.2354 | 22.79 | 22.39 | 88.44 | 88.04 | Downstream (heuristic - verify) |
| Konnagar | 28 | 195.5 | 76,082 | 22.7051 | 88.3445 | 22.91 | 22.51 | 88.54 | 88.14 | Downstream (heuristic - verify) |
| Khardah | 28 | 197.3 | 128,346 | 22.7186 | 88.3781 | 22.92 | 22.52 | 88.58 | 88.18 | Downstream (heuristic - verify) |
| Bankra | 28 | 197.5 | 56,273 | 22.6029 | 88.2775 | 22.8 | 22.4 | 88.48 | 88.08 | Downstream (heuristic - verify) |
| Sānkrāil | 28 | 197.6 | 27,523 | 22.5500 | 88.2251 | 22.75 | 22.35 | 88.43 | 88.03 | Downstream (heuristic - verify) |
| Bagaha | 34 | 197.9 | 91,383 | 24.5290 | 85.0602 | 24.73 | 24.33 | 85.26 | 84.86 | Off flood-path (heuristic) |
| Fort Gloster | 28 | 198.2 | 18,350 | 22.5044 | 88.1833 | 22.7 | 22.3 | 88.38 | 87.98 | Downstream (heuristic - verify) |
| Pujali | 28 | 198.4 | 37,047 | 22.4679 | 88.1452 | 22.67 | 22.27 | 88.35 | 87.95 | Downstream (heuristic - verify) |
| Pānihāti | 28 | 198.9 | 378,705 | 22.6909 | 88.3740 | 22.89 | 22.49 | 88.57 | 88.17 | Downstream (heuristic - verify) |
| Tamlūk | 28 | 199.1 | 48,646 | 22.3008 | 87.9259 | 22.5 | 22.1 | 88.13 | 87.73 | Downstream (heuristic - verify) |
| Rājgīr | 34 | 199.1 | 41,587 | 25.0283 | 85.4208 | 25.23 | 24.83 | 85.62 | 85.22 | Off flood-path (heuristic) |
| Bāli | 28 | 199.2 | 296,973 | 22.6486 | 88.3411 | 22.85 | 22.45 | 88.54 | 88.14 | Downstream (heuristic - verify) |
| Budge Budge | 28 | 199.8 | 76,837 | 22.4827 | 88.1818 | 22.68 | 22.28 | 88.38 | 87.98 | Downstream (heuristic - verify) |

## Nakti Dam (Bihar)
Dam coordinates: 24.9, 86.2

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Jamūī | 34 | 3.9 | 87,357 | 24.9261 | 86.2253 | 25.13 | 24.73 | 86.43 | 86.03 | Downstream (heuristic - verify) |
| Jhajha | 34 | 23.1 | 40,646 | 24.7711 | 86.3789 | 24.97 | 24.57 | 86.58 | 86.18 | Downstream (heuristic - verify) |
| Luckeesarai | 34 | 32.5 | 99,979 | 25.1765 | 86.0947 | 25.38 | 24.98 | 86.29 | 85.89 | Off flood-path (heuristic) |
| Kharagpur | 34 | 43.7 | 31,385 | 25.1245 | 86.5558 | 25.32 | 24.92 | 86.76 | 86.36 | Downstream (heuristic - verify) |
| Sheikhpura | 34 | 45.0 | 62,927 | 25.1399 | 85.8410 | 25.34 | 24.94 | 86.04 | 85.64 | Off flood-path (heuristic) |
| Barhiya | 34 | 46.8 | 43,045 | 25.2881 | 86.0206 | 25.49 | 25.09 | 86.22 | 85.82 | Off flood-path (heuristic) |
| Jamālpur | 34 | 54.3 | 105,434 | 25.3126 | 86.4889 | 25.51 | 25.11 | 86.69 | 86.29 | Off flood-path (heuristic) |
| Wāris Alīganj | 34 | 57.9 | 35,243 | 25.0172 | 85.6405 | 25.22 | 24.82 | 85.84 | 85.44 | Off flood-path (heuristic) |
| Begusarai | 34 | 58.0 | 252,008 | 25.4185 | 86.1339 | 25.62 | 25.22 | 86.33 | 85.93 | Off flood-path (heuristic) |
| Barbigha | 34 | 58.7 | 46,075 | 25.2167 | 85.7333 | 25.42 | 25.02 | 85.93 | 85.53 | Off flood-path (heuristic) |
| Bar Bigha | 34 | 58.9 | 41,758 | 25.2186 | 85.7332 | 25.42 | 25.02 | 85.93 | 85.53 | Off flood-path (heuristic) |
| Ballia | 34 | 59.1 | 47,550 | 25.4214 | 86.3144 | 25.62 | 25.22 | 86.51 | 86.11 | Off flood-path (heuristic) |
| Munger | 34 | 59.6 | 213,303 | 25.3746 | 86.4745 | 25.57 | 25.17 | 86.67 | 86.27 | Off flood-path (heuristic) |
| Bihāt | 34 | 61.1 | 67,952 | 25.4253 | 86.0208 | 25.63 | 25.23 | 86.22 | 85.82 | Off flood-path (heuristic) |
| Mokameh | 34 | 61.9 | 60,678 | 25.3966 | 85.9219 | 25.6 | 25.2 | 86.12 | 85.72 | Off flood-path (heuristic) |
| Jasidih | 38 | 62.2 | 16,338 | 24.5138 | 86.6458 | 24.71 | 24.31 | 86.85 | 86.45 | Downstream (heuristic - verify) |
| Sultānganj | 34 | 65.8 | 52,892 | 25.2383 | 86.7356 | 25.44 | 25.04 | 86.94 | 86.54 | Downstream (heuristic - verify) |
| Nawāda | 34 | 66.2 | 98,029 | 24.8867 | 85.5436 | 25.09 | 24.69 | 85.74 | 85.34 | Off flood-path (heuristic) |
| Bhadauni | 34 | 67.3 | 20,739 | 24.8754 | 85.5337 | 25.08 | 24.68 | 85.73 | 85.33 | Off flood-path (heuristic) |
| Barauni | 34 | 67.4 | 71,660 | 25.4709 | 85.9760 | 25.67 | 25.27 | 86.18 | 85.78 | Off flood-path (heuristic) |
| Deoghar | 38 | 68.0 | 203,123 | 24.4898 | 86.6990 | 24.69 | 24.29 | 86.9 | 86.5 | Downstream (heuristic - verify) |
| Bāruni | 34 | 68.1 | 84,888 | 25.4751 | 85.9681 | 25.68 | 25.28 | 86.17 | 85.77 | Off flood-path (heuristic) |
| Domchānch | 38 | 69.8 | 15,809 | 24.4748 | 85.6921 | 24.67 | 24.27 | 85.89 | 85.49 | Off flood-path (heuristic) |
| Teghra | 34 | 70.7 | 56,234 | 25.4904 | 85.9400 | 25.69 | 25.29 | 86.14 | 85.74 | Off flood-path (heuristic) |
| Khagaria | 34 | 72.2 | 49,982 | 25.5022 | 86.4671 | 25.7 | 25.3 | 86.67 | 86.27 | Off flood-path (heuristic) |
| Amarpur | 34 | 72.5 | 25,336 | 25.0397 | 86.9025 | 25.24 | 24.84 | 87.1 | 86.7 | Downstream (heuristic - verify) |
| Bānka | 34 | 72.9 | 45,977 | 24.8809 | 86.9226 | 25.08 | 24.68 | 87.12 | 86.72 | Downstream (heuristic - verify) |
| Gogri Jamālpur | 34 | 73.3 | 37,753 | 25.4112 | 86.6593 | 25.61 | 25.21 | 86.86 | 86.46 | Off flood-path (heuristic) |
| Bihār Sharīf | 34 | 75.9 | 297,268 | 25.2008 | 85.5239 | 25.4 | 25.0 | 85.72 | 85.32 | Off flood-path (heuristic) |
| Rajauli | 34 | 76.1 | 30,170 | 24.6449 | 85.5003 | 24.84 | 24.44 | 85.7 | 85.3 | Off flood-path (heuristic) |
| Kodarma | 38 | 77.9 | 24,633 | 24.4675 | 85.5940 | 24.67 | 24.27 | 85.79 | 85.39 | Off flood-path (heuristic) |
| Bakhri | 34 | 78.0 | 40,043 | 25.5989 | 86.2607 | 25.8 | 25.4 | 86.46 | 86.06 | Off flood-path (heuristic) |
| Hisua | 34 | 79.3 | 32,585 | 24.8336 | 85.4173 | 25.03 | 24.63 | 85.62 | 85.22 | Off flood-path (heuristic) |
| Rājgīr | 34 | 79.8 | 41,587 | 25.0283 | 85.4208 | 25.23 | 24.83 | 85.62 | 85.22 | Off flood-path (heuristic) |
| Giridih | 38 | 80.1 | 114,533 | 24.1862 | 86.3088 | 24.39 | 23.99 | 86.51 | 86.11 | Off flood-path (heuristic) |
| Silao | 34 | 80.4 | 25,674 | 25.0836 | 85.4280 | 25.28 | 24.88 | 85.63 | 85.23 | Off flood-path (heuristic) |
| Bārh | 34 | 81.5 | 61,470 | 25.4834 | 85.7093 | 25.68 | 25.28 | 85.91 | 85.51 | Off flood-path (heuristic) |
| Madhupur | 38 | 82.6 | 55,238 | 24.2742 | 86.6393 | 24.47 | 24.07 | 86.84 | 86.44 | Off flood-path (heuristic) |
| Purāini | 34 | 83.1 | 30,829 | 25.1426 | 86.9797 | 25.34 | 24.94 | 87.18 | 86.78 | Downstream (heuristic - verify) |
| Jhumri Telaiya | 38 | 85.2 | 87,867 | 24.4349 | 85.5295 | 24.63 | 24.23 | 85.73 | 85.33 | Off flood-path (heuristic) |
| Barki Saria | 38 | 86.4 | 24,134 | 24.1759 | 85.8894 | 24.38 | 23.98 | 86.09 | 85.69 | Off flood-path (heuristic) |
| Bhāgalpur | 34 | 86.7 | 400,146 | 25.2445 | 86.9718 | 25.44 | 25.04 | 87.17 | 86.77 | Downstream (heuristic - verify) |
| Bakhtiarpur | 34 | 91.3 | 47,897 | 25.4560 | 85.5329 | 25.66 | 25.26 | 85.73 | 85.33 | Off flood-path (heuristic) |
| Bakhtiyārpur | 34 | 91.8 | 34,533 | 25.4618 | 85.5318 | 25.66 | 25.26 | 85.73 | 85.33 | Off flood-path (heuristic) |
| Dalsingh Sarai | 34 | 92.9 | 23,862 | 25.6680 | 85.8364 | 25.87 | 25.47 | 86.04 | 85.64 | Off flood-path (heuristic) |
| Rusera | 34 | 96.5 | 28,781 | 25.7536 | 86.0260 | 25.95 | 25.55 | 86.23 | 85.83 | Off flood-path (heuristic) |
| Rosera | 34 | 96.6 | 31,155 | 25.7549 | 86.0315 | 25.95 | 25.55 | 86.23 | 85.83 | Off flood-path (heuristic) |
| Godda | 38 | 102.5 | 48,480 | 24.8270 | 87.2125 | 25.03 | 24.63 | 87.41 | 87.01 | Downstream (heuristic - verify) |
| Hilsa | 34 | 103.3 | 51,052 | 25.3164 | 85.2823 | 25.52 | 25.12 | 85.48 | 85.08 | Off flood-path (heuristic) |
| Islāmpur | 34 | 103.7 | 35,641 | 25.1408 | 85.2059 | 25.34 | 24.94 | 85.41 | 85.01 | Off flood-path (heuristic) |
| Khusropur | 34 | 104.5 | 15,731 | 25.4817 | 85.3849 | 25.68 | 25.28 | 85.58 | 85.18 | Off flood-path (heuristic) |
| Naugachhia | 34 | 105.5 | 49,069 | 25.3881 | 87.0991 | 25.59 | 25.19 | 87.3 | 86.9 | Downstream (heuristic - verify) |
| Basukinath | 38 | 105.8 | 17,123 | 24.3945 | 87.0864 | 24.59 | 24.19 | 87.29 | 86.89 | Downstream (heuristic - verify) |
| Mahnar Bazar | 34 | 107.0 | 48,293 | 25.6096 | 85.4808 | 25.81 | 25.41 | 85.68 | 85.28 | Off flood-path (heuristic) |
| Colgong | 34 | 111.6 | 33,700 | 25.2633 | 87.2326 | 25.46 | 25.06 | 87.43 | 87.03 | Downstream (heuristic - verify) |
| Bangaon | 34 | 112.0 | 60,000 | 25.8673 | 86.5115 | 26.07 | 25.67 | 86.71 | 86.31 | Off flood-path (heuristic) |
| Fatwa | 34 | 112.7 | 50,961 | 25.5096 | 85.3050 | 25.71 | 25.31 | 85.51 | 85.11 | Off flood-path (heuristic) |
| Gomoh | 38 | 114.2 | 31,495 | 23.8736 | 86.1516 | 24.07 | 23.67 | 86.35 | 85.95 | Off flood-path (heuristic) |
| Samāstipur | 34 | 115.0 | 67,925 | 25.8622 | 85.7795 | 26.06 | 25.66 | 85.98 | 85.58 | Off flood-path (heuristic) |
| Saharsa | 34 | 115.5 | 156,540 | 25.8750 | 86.5961 | 26.07 | 25.67 | 86.8 | 86.4 | Off flood-path (heuristic) |
| Jāmtāra | 38 | 120.7 | 29,415 | 23.9630 | 86.8029 | 24.16 | 23.76 | 87.0 | 86.6 | Off flood-path (heuristic) |
| Gaya | 34 | 121.2 | 474,093 | 24.7969 | 85.0038 | 25.0 | 24.6 | 85.2 | 84.8 | Off flood-path (heuristic) |
| Bihārīganj | 34 | 122.0 | 32,805 | 25.7341 | 86.9884 | 25.93 | 25.53 | 87.19 | 86.79 | Downstream (heuristic - verify) |
| Bagaha | 34 | 122.3 | 91,383 | 24.5290 | 85.0602 | 24.73 | 24.33 | 85.26 | 84.86 | Off flood-path (heuristic) |
| Kātrās | 38 | 123.0 | 57,349 | 23.7975 | 86.2983 | 24.0 | 23.6 | 86.5 | 86.1 | Off flood-path (heuristic) |
| Bodh Gaya | 34 | 124.5 | 38,439 | 24.6981 | 84.9869 | 24.9 | 24.5 | 85.19 | 84.79 | Off flood-path (heuristic) |
| Dhanbad | 38 | 124.8 | 1,196,214 | 23.7976 | 86.4299 | 24.0 | 23.6 | 86.63 | 86.23 | Off flood-path (heuristic) |
| Makhdumpur | 34 | 125.1 | 31,994 | 25.0657 | 84.9725 | 25.27 | 24.87 | 85.17 | 84.77 | Off flood-path (heuristic) |
| Sijua | 38 | 125.7 | 31,537 | 23.7762 | 86.3303 | 23.98 | 23.58 | 86.53 | 86.13 | Off flood-path (heuristic) |
| Kāro | 38 | 126.0 | 39,305 | 23.7852 | 85.9783 | 23.99 | 23.59 | 86.18 | 85.78 | Off flood-path (heuristic) |
| Bermo | 38 | 126.5 | 17,401 | 23.7878 | 85.9353 | 23.99 | 23.59 | 86.14 | 85.74 | Off flood-path (heuristic) |
| Jahānābād | 34 | 127.1 | 103,202 | 25.2137 | 84.9871 | 25.41 | 25.01 | 85.19 | 84.79 | Off flood-path (heuristic) |
| Dumka | 38 | 127.2 | 47,663 | 24.2678 | 87.2485 | 24.47 | 24.07 | 87.45 | 87.05 | Downstream (heuristic - verify) |
| Masaurhi Buzurg | 34 | 128.0 | 59,803 | 25.3542 | 85.0319 | 25.55 | 25.15 | 85.23 | 84.83 | Off flood-path (heuristic) |
| Madhepura | 34 | 128.2 | 54,472 | 25.9213 | 86.7927 | 26.12 | 25.72 | 86.99 | 86.59 | Off flood-path (heuristic) |
| Chandrapura | 38 | 128.3 | 27,425 | 23.7488 | 86.1196 | 23.95 | 23.55 | 86.32 | 85.92 | Off flood-path (heuristic) |
| Gumia | 38 | 128.3 | 48,141 | 23.7975 | 85.8252 | 24.0 | 23.6 | 86.03 | 85.63 | Off flood-path (heuristic) |
| Dugda | 38 | 128.4 | 22,740 | 23.7452 | 86.1718 | 23.95 | 23.55 | 86.37 | 85.97 | Off flood-path (heuristic) |
| Benipur | 34 | 128.6 | 75,317 | 26.0551 | 86.1456 | 26.26 | 25.86 | 86.35 | 85.95 | Off flood-path (heuristic) |
| Phusro | 38 | 128.7 | 185,555 | 23.7564 | 86.0051 | 23.96 | 23.56 | 86.21 | 85.81 | Off flood-path (heuristic) |
| Jāridih | 38 | 128.9 | 31,882 | 23.7657 | 85.9386 | 23.97 | 23.57 | 86.14 | 85.74 | Off flood-path (heuristic) |
| Kathhāra | 38 | 130.3 | 22,080 | 23.7638 | 85.8847 | 23.96 | 23.56 | 86.08 | 85.68 | Off flood-path (heuristic) |
| Jharia | 38 | 130.7 | 86,938 | 23.7408 | 86.4146 | 23.94 | 23.54 | 86.61 | 86.21 | Off flood-path (heuristic) |
| Hazāribāgh | 38 | 131.9 | 153,595 | 23.9924 | 85.3616 | 24.19 | 23.79 | 85.56 | 85.16 | Off flood-path (heuristic) |
| Sāram | 38 | 131.9 | 15,212 | 23.7625 | 85.8300 | 23.96 | 23.56 | 86.03 | 85.63 | Off flood-path (heuristic) |
| Patna | 34 | 132.0 | 1,684,297 | 25.5941 | 85.1356 | 25.79 | 25.39 | 85.34 | 84.94 | Off flood-path (heuristic) |
| Hājīpur | 34 | 132.4 | 147,688 | 25.6854 | 85.2098 | 25.89 | 25.49 | 85.41 | 85.01 | Off flood-path (heuristic) |
| Jāmadoba | 38 | 133.1 | 34,774 | 23.7167 | 86.4000 | 23.92 | 23.52 | 86.6 | 86.2 | Off flood-path (heuristic) |
| Chittaranjan | 28 | 136.1 | 45,305 | 23.8568 | 86.9032 | 24.06 | 23.66 | 87.1 | 86.7 | Off flood-path (heuristic) |
| Phulwari Sharif | 34 | 136.2 | 81,740 | 25.5776 | 85.0725 | 25.78 | 25.38 | 85.27 | 84.87 | Off flood-path (heuristic) |
| Sonepur | 34 | 136.5 | 37,776 | 25.6961 | 85.1667 | 25.9 | 25.5 | 85.37 | 84.97 | Off flood-path (heuristic) |
| Murlīganj | 34 | 136.7 | 28,691 | 25.8969 | 86.9958 | 26.1 | 25.7 | 87.2 | 86.8 | Off flood-path (heuristic) |
| Nohsa | 34 | 136.8 | 16,680 | 25.5653 | 85.0560 | 25.77 | 25.37 | 85.26 | 84.86 | Off flood-path (heuristic) |
| Bokāro | 38 | 136.9 | 564,319 | 23.6693 | 86.1516 | 23.87 | 23.47 | 86.35 | 85.95 | Off flood-path (heuristic) |
| Tekāri | 34 | 137.0 | 21,324 | 24.9425 | 84.8427 | 25.14 | 24.74 | 85.04 | 84.64 | Off flood-path (heuristic) |
| Kedia | 38 | 137.7 | 16,054 | 23.7945 | 85.5872 | 23.99 | 23.59 | 85.79 | 85.39 | Off flood-path (heuristic) |
| Khagaul | 34 | 138.5 | 51,577 | 25.5790 | 85.0456 | 25.78 | 25.38 | 85.25 | 84.85 | Off flood-path (heuristic) |
| Maithon | 38 | 139.0 | 18,830 | 23.7800 | 86.8100 | 23.98 | 23.58 | 87.01 | 86.61 | Off flood-path (heuristic) |
| Pāthardih | 38 | 139.2 | 45,276 | 23.6658 | 86.4317 | 23.87 | 23.47 | 86.63 | 86.23 | Off flood-path (heuristic) |
| Chas | 38 | 140.6 | 141,640 | 23.6356 | 86.1671 | 23.84 | 23.44 | 86.37 | 85.97 | Off flood-path (heuristic) |
| Supaul | 34 | 140.8 | 65,437 | 26.1153 | 86.5951 | 26.32 | 25.92 | 86.8 | 86.4 | Off flood-path (heuristic) |
| Siuliban | 38 | 141.1 | 24,202 | 23.7486 | 86.7848 | 23.95 | 23.55 | 86.98 | 86.58 | Off flood-path (heuristic) |
| Chirkunda | 38 | 141.3 | 45,508 | 23.7477 | 86.7880 | 23.95 | 23.55 | 86.99 | 86.59 | Off flood-path (heuristic) |
| Naubatpur | 34 | 141.3 | 25,011 | 25.4986 | 84.9608 | 25.7 | 25.3 | 85.16 | 84.76 | Off flood-path (heuristic) |
| Dinapur Nizamat | 34 | 141.7 | 182,429 | 25.6385 | 85.0512 | 25.84 | 25.44 | 85.25 | 84.85 | Off flood-path (heuristic) |
| Dinapore | 34 | 141.9 | 152,940 | 25.6370 | 85.0479 | 25.84 | 25.44 | 85.25 | 84.85 | Off flood-path (heuristic) |
| Darbhanga | 34 | 142.5 | 296,039 | 26.1522 | 85.8971 | 26.35 | 25.95 | 86.1 | 85.7 | Off flood-path (heuristic) |
| Dinapur Cantonment | 34 | 144.1 | 28,723 | 25.6362 | 85.0203 | 25.84 | 25.44 | 85.22 | 84.82 | Off flood-path (heuristic) |
| Lakhyabad | 28 | 145.1 | 33,162 | 23.6667 | 86.6667 | 23.87 | 23.47 | 86.87 | 86.47 | Off flood-path (heuristic) |
| Kulti | 28 | 145.4 | 305,405 | 23.7317 | 86.8437 | 23.93 | 23.53 | 87.04 | 86.64 | Off flood-path (heuristic) |
| Sherghāti | 34 | 147.2 | 40,666 | 24.5595 | 84.7916 | 24.76 | 24.36 | 84.99 | 84.59 | Off flood-path (heuristic) |
| Bikram | 34 | 147.7 | 22,486 | 25.4471 | 84.8626 | 25.65 | 25.25 | 85.06 | 84.66 | Off flood-path (heuristic) |
| Kuju | 38 | 148.1 | 21,356 | 23.7254 | 85.5102 | 23.93 | 23.53 | 85.71 | 85.31 | Off flood-path (heuristic) |
| Banmankhi Bazar | 34 | 148.4 | 30,336 | 25.8876 | 87.1936 | 26.09 | 25.69 | 87.39 | 86.99 | Downstream (heuristic - verify) |
| Banmankhi | 34 | 148.5 | 26,806 | 25.8886 | 87.1942 | 26.09 | 25.69 | 87.39 | 86.99 | Downstream (heuristic - verify) |
| Lālganj | 34 | 149.1 | 37,098 | 25.8689 | 85.1739 | 26.07 | 25.67 | 85.37 | 84.97 | Off flood-path (heuristic) |
| Sāhibganj | 38 | 149.5 | 95,890 | 25.2443 | 87.6348 | 25.44 | 25.04 | 87.83 | 87.43 | Downstream (heuristic - verify) |
| Manihāri | 34 | 151.1 | 26,629 | 25.3389 | 87.6200 | 25.54 | 25.14 | 87.82 | 87.42 | Downstream (heuristic - verify) |
| Jhanjhārpur | 34 | 152.0 | 31,283 | 26.2647 | 86.2799 | 26.46 | 26.06 | 86.48 | 86.08 | Off flood-path (heuristic) |
| Dighwāra | 34 | 152.1 | 32,741 | 25.7443 | 85.0100 | 25.94 | 25.54 | 85.21 | 84.81 | Off flood-path (heuristic) |
| Bihtā | 34 | 152.4 | 47,549 | 25.5588 | 84.8714 | 25.76 | 25.36 | 85.07 | 84.67 | Off flood-path (heuristic) |
| Chatrā | 38 | 155.0 | 49,985 | 24.2065 | 84.8709 | 24.41 | 24.01 | 85.07 | 84.67 | Off flood-path (heuristic) |
| Katihar | 34 | 155.1 | 240,838 | 25.5385 | 87.5704 | 25.74 | 25.34 | 87.77 | 87.37 | Downstream (heuristic - verify) |
| Ghogardīha | 34 | 155.8 | 18,257 | 26.2799 | 86.4700 | 26.48 | 26.08 | 86.67 | 86.27 | Off flood-path (heuristic) |
| Āsansol | 28 | 156.9 | 504,271 | 23.6833 | 86.9833 | 23.88 | 23.48 | 87.18 | 86.78 | Off flood-path (heuristic) |
| Rāmgarh | 38 | 157.0 | 88,781 | 23.6303 | 85.5216 | 23.83 | 23.43 | 85.72 | 85.32 | Off flood-path (heuristic) |
| Maner | 34 | 157.1 | 40,068 | 25.6460 | 84.8729 | 25.85 | 25.45 | 85.07 | 84.67 | Off flood-path (heuristic) |
| Chitarpur | 38 | 157.6 | 22,837 | 23.5728 | 85.6535 | 23.77 | 23.37 | 85.85 | 85.45 | Off flood-path (heuristic) |
| Rafiganj | 34 | 158.2 | 35,536 | 24.8176 | 84.6345 | 25.02 | 24.62 | 84.83 | 84.43 | Off flood-path (heuristic) |
| Muzaffarpur | 34 | 158.4 | 354,462 | 26.1226 | 85.3906 | 26.32 | 25.92 | 85.59 | 85.19 | Off flood-path (heuristic) |
| Raghunathpur | 28 | 158.8 | 22,802 | 23.5388 | 86.6735 | 23.74 | 23.34 | 86.87 | 86.47 | Off flood-path (heuristic) |
| Arwal | 34 | 159.2 | 51,849 | 25.2428 | 84.6657 | 25.44 | 25.04 | 84.87 | 84.47 | Off flood-path (heuristic) |
| Sirka | 38 | 159.7 | 19,871 | 23.6456 | 85.4333 | 23.85 | 23.45 | 85.63 | 85.23 | Off flood-path (heuristic) |
| Jāmuria | 28 | 160.0 | 160,242 | 23.7047 | 87.0787 | 23.9 | 23.5 | 87.28 | 86.88 | Off flood-path (heuristic) |
| Koelwār | 34 | 160.1 | 25,494 | 25.5805 | 84.7975 | 25.78 | 25.38 | 85.0 | 84.6 | Off flood-path (heuristic) |
| Barkā Kānā | 38 | 160.4 | 18,475 | 23.6212 | 85.4675 | 23.82 | 23.42 | 85.67 | 85.27 | Off flood-path (heuristic) |
| Purnia | 34 | 161.1 | 282,248 | 25.7789 | 87.4742 | 25.98 | 25.58 | 87.67 | 87.27 | Downstream (heuristic - verify) |
| Nirmāli | 34 | 161.9 | 20,189 | 26.3140 | 86.5854 | 26.51 | 26.11 | 86.79 | 86.39 | Off flood-path (heuristic) |
| Madhubani | 34 | 162.2 | 75,736 | 26.3537 | 86.0717 | 26.55 | 26.15 | 86.27 | 85.87 | Off flood-path (heuristic) |
| Saunda | 38 | 163.4 | 81,915 | 23.6645 | 85.3269 | 23.86 | 23.46 | 85.53 | 85.13 | Off flood-path (heuristic) |
| Adra | 28 | 163.6 | 22,159 | 23.4967 | 86.6836 | 23.7 | 23.3 | 86.88 | 86.48 | Off flood-path (heuristic) |
| Patrātu | 38 | 164.7 | 32,899 | 23.6651 | 85.3035 | 23.87 | 23.47 | 85.5 | 85.1 | Off flood-path (heuristic) |
| Rājmahal | 38 | 165.2 | 22,514 | 25.0530 | 87.8305 | 25.25 | 24.85 | 88.03 | 87.63 | Downstream (heuristic - verify) |
| Chhātāpur | 34 | 167.5 | 23,425 | 26.2197 | 87.0048 | 26.42 | 26.02 | 87.2 | 86.8 | Off flood-path (heuristic) |
| Pakur | 38 | 168.3 | 45,840 | 24.6393 | 87.8424 | 24.84 | 24.44 | 88.04 | 87.64 | Downstream (heuristic - verify) |
| Bahula | 28 | 169.8 | 16,264 | 23.6518 | 87.1647 | 23.85 | 23.45 | 87.36 | 86.96 | Off flood-path (heuristic) |
| Arrah | 34 | 170.9 | 261,430 | 25.5563 | 84.6633 | 25.76 | 25.36 | 84.86 | 84.46 | Off flood-path (heuristic) |
| Rānīganj | 28 | 171.1 | 131,261 | 23.6164 | 87.1306 | 23.82 | 23.42 | 87.33 | 86.93 | Off flood-path (heuristic) |
| Kasba | 34 | 171.4 | 30,421 | 25.8564 | 87.5384 | 26.06 | 25.66 | 87.74 | 87.34 | Downstream (heuristic - verify) |
| Dubrājpur | 28 | 171.6 | 35,087 | 23.7902 | 87.3765 | 23.99 | 23.59 | 87.58 | 87.18 | Downstream (heuristic - verify) |
| Farakka | 28 | 171.8 | 21,834 | 24.8167 | 87.9000 | 25.02 | 24.62 | 88.1 | 87.7 | Downstream (heuristic - verify) |
| Kantai | 34 | 171.9 | 25,051 | 26.2142 | 85.2975 | 26.41 | 26.01 | 85.5 | 85.1 | Off flood-path (heuristic) |
| Jhalidā | 28 | 172.1 | 18,057 | 23.3654 | 85.9764 | 23.57 | 23.17 | 86.18 | 85.78 | Off flood-path (heuristic) |
| Siuri | 28 | 173.9 | 64,659 | 23.9081 | 87.5277 | 24.11 | 23.71 | 87.73 | 87.33 | Downstream (heuristic - verify) |
| Puruliya | 28 | 175.3 | 122,533 | 23.3306 | 86.3630 | 23.53 | 23.13 | 86.56 | 86.16 | Off flood-path (heuristic) |
| Chāpra | 34 | 175.8 | 202,352 | 25.7803 | 84.7471 | 25.98 | 25.58 | 84.95 | 84.55 | Off flood-path (heuristic) |
| Nalhāti | 28 | 177.8 | 25,878 | 24.2970 | 87.8290 | 24.5 | 24.1 | 88.03 | 87.63 | Downstream (heuristic - verify) |
| Dhuliān | 28 | 178.7 | 77,070 | 24.6813 | 87.9535 | 24.88 | 24.48 | 88.15 | 87.75 | Downstream (heuristic - verify) |
| Rampur Hat | 28 | 179.1 | 53,468 | 24.1774 | 87.7827 | 24.38 | 23.98 | 87.98 | 87.58 | Downstream (heuristic - verify) |
| Marhaura | 34 | 179.3 | 29,932 | 25.9735 | 84.8680 | 26.17 | 25.77 | 85.07 | 84.67 | Off flood-path (heuristic) |
| Pupri | 34 | 181.6 | 15,129 | 26.4708 | 85.7031 | 26.67 | 26.27 | 85.9 | 85.5 | Off flood-path (heuristic) |
| Daudnagar | 34 | 182.0 | 52,364 | 25.0347 | 84.4009 | 25.23 | 24.83 | 84.6 | 84.2 | Off flood-path (heuristic) |
| Motipur | 34 | 183.0 | 28,572 | 26.2527 | 85.1608 | 26.45 | 26.05 | 85.36 | 84.96 | Off flood-path (heuristic) |
| Churi | 38 | 183.4 | 24,876 | 23.6549 | 85.0128 | 23.85 | 23.45 | 85.21 | 84.81 | Off flood-path (heuristic) |
| Sainthia | 28 | 183.5 | 43,221 | 23.9483 | 87.6804 | 24.15 | 23.75 | 87.88 | 87.48 | Downstream (heuristic - verify) |
| Khalāri | 38 | 184.1 | 20,010 | 23.6506 | 85.0074 | 23.85 | 23.45 | 85.21 | 84.81 | Off flood-path (heuristic) |
| Aurangābād | 34 | 185.0 | 102,244 | 24.7520 | 84.3742 | 24.95 | 24.55 | 84.57 | 84.17 | Off flood-path (heuristic) |
| Revelganj | 34 | 185.7 | 39,039 | 25.7898 | 84.6360 | 25.99 | 25.59 | 84.84 | 84.44 | Off flood-path (heuristic) |
| Kānke | 38 | 185.8 | 17,560 | 23.4348 | 85.3206 | 23.63 | 23.23 | 85.52 | 85.12 | Off flood-path (heuristic) |
| Piro | 34 | 187.0 | 33,785 | 25.3322 | 84.4045 | 25.53 | 25.13 | 84.6 | 84.2 | Off flood-path (heuristic) |
| Jainagar | 34 | 188.1 | 21,782 | 26.5905 | 86.1379 | 26.79 | 26.39 | 86.34 | 85.94 | Off flood-path (heuristic) |
| Forbesganj | 34 | 189.0 | 50,475 | 26.3025 | 87.2656 | 26.5 | 26.1 | 87.47 | 87.07 | Off flood-path (heuristic) |
| Nāsriganj | 34 | 189.4 | 23,819 | 25.0514 | 84.3284 | 25.25 | 24.85 | 84.53 | 84.13 | Off flood-path (heuristic) |
| Belsand | 34 | 189.4 | 20,566 | 26.4437 | 85.4008 | 26.64 | 26.24 | 85.6 | 85.2 | Off flood-path (heuristic) |
| Jagdīspur | 34 | 190.0 | 32,447 | 25.4681 | 84.4194 | 25.67 | 25.27 | 84.62 | 84.22 | Off flood-path (heuristic) |
| Durgapur | 28 | 190.6 | 518,872 | 23.5158 | 87.3080 | 23.72 | 23.32 | 87.51 | 87.11 | Off flood-path (heuristic) |
| Shahbazpur | 34 | 190.6 | 38,000 | 26.3051 | 87.2887 | 26.51 | 26.11 | 87.49 | 87.09 | Off flood-path (heuristic) |
| Arāria | 34 | 191.5 | 79,021 | 26.1493 | 87.5132 | 26.35 | 25.95 | 87.71 | 87.31 | Downstream (heuristic - verify) |
| Bhawanipur | 34 | 191.6 | 27,000 | 26.4535 | 87.0274 | 26.65 | 26.25 | 87.23 | 86.83 | Off flood-path (heuristic) |
| Kenda | 28 | 192.2 | 15,131 | 23.1959 | 86.5150 | 23.4 | 23.0 | 86.71 | 86.31 | Off flood-path (heuristic) |
| Bela | 34 | 192.4 | 26,707 | 25.5571 | 84.4308 | 25.76 | 25.36 | 84.63 | 84.23 | Off flood-path (heuristic) |
| Rātu | 38 | 192.5 | 22,379 | 23.4204 | 85.2146 | 23.62 | 23.22 | 85.41 | 85.01 | Off flood-path (heuristic) |
| Ranchi | 38 | 195.3 | 1,120,374 | 23.3432 | 85.3094 | 23.54 | 23.14 | 85.51 | 85.11 | Off flood-path (heuristic) |
| Jangipur | 28 | 195.5 | 82,548 | 24.4700 | 88.0766 | 24.67 | 24.27 | 88.28 | 87.88 | Downstream (heuristic - verify) |
| Mehsi | 34 | 196.3 | 25,995 | 26.3557 | 85.0925 | 26.56 | 26.16 | 85.29 | 84.89 | Off flood-path (heuristic) |
| Bīrpur | 34 | 196.5 | 19,932 | 26.5082 | 87.0119 | 26.71 | 26.31 | 87.21 | 86.81 | Off flood-path (heuristic) |
| Malda | 28 | 196.5 | 170,039 | 25.0045 | 88.1457 | 25.2 | 24.8 | 88.35 | 87.95 | Downstream (heuristic - verify) |
| Shāhpur | 34 | 196.8 | 17,767 | 25.6029 | 84.4041 | 25.8 | 25.4 | 84.6 | 84.2 | Off flood-path (heuristic) |
| Dalkola | 28 | 197.3 | 15,285 | 25.8758 | 87.8401 | 26.08 | 25.68 | 88.04 | 87.64 | Downstream (heuristic - verify) |
| Dumra | 34 | 197.5 | 15,778 | 26.5671 | 85.5204 | 26.77 | 26.37 | 85.72 | 85.32 | Off flood-path (heuristic) |
| Jogbani | 34 | 198.0 | 39,281 | 26.3990 | 87.2652 | 26.6 | 26.2 | 87.47 | 87.07 | Off flood-path (heuristic) |
| Bikramganj | 34 | 198.9 | 48,465 | 25.2107 | 84.2551 | 25.41 | 25.01 | 84.46 | 84.06 | Off flood-path (heuristic) |

## Phulwaria Dam (Bihar)
Dam coordinates: 24.75, 85.6

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Rajauli | 34 | 15.4 | 30,170 | 24.6449 | 85.5003 | 24.84 | 24.44 | 85.7 | 85.3 | Off flood-path (heuristic) |
| Bhadauni | 34 | 15.5 | 20,739 | 24.8754 | 85.5337 | 25.08 | 24.68 | 85.73 | 85.33 | Off flood-path (heuristic) |
| Nawāda | 34 | 16.2 | 98,029 | 24.8867 | 85.5436 | 25.09 | 24.69 | 85.74 | 85.34 | Off flood-path (heuristic) |
| Hisua | 34 | 20.7 | 32,585 | 24.8336 | 85.4173 | 25.03 | 24.63 | 85.62 | 85.22 | Off flood-path (heuristic) |
| Wāris Alīganj | 34 | 30.0 | 35,243 | 25.0172 | 85.6405 | 25.22 | 24.82 | 85.84 | 85.44 | Downstream (heuristic - verify) |
| Kodarma | 38 | 31.4 | 24,633 | 24.4675 | 85.5940 | 24.67 | 24.27 | 85.79 | 85.39 | Off flood-path (heuristic) |
| Domchānch | 38 | 32.0 | 15,809 | 24.4748 | 85.6921 | 24.67 | 24.27 | 85.89 | 85.49 | Off flood-path (heuristic) |
| Jhumri Telaiya | 38 | 35.8 | 87,867 | 24.4349 | 85.5295 | 24.63 | 24.23 | 85.73 | 85.33 | Off flood-path (heuristic) |
| Rājgīr | 34 | 35.8 | 41,587 | 25.0283 | 85.4208 | 25.23 | 24.83 | 85.62 | 85.22 | Off flood-path (heuristic) |
| Silao | 34 | 40.9 | 25,674 | 25.0836 | 85.4280 | 25.28 | 24.88 | 85.63 | 85.23 | Off flood-path (heuristic) |
| Sheikhpura | 34 | 49.7 | 62,927 | 25.1399 | 85.8410 | 25.34 | 24.94 | 86.04 | 85.64 | Downstream (heuristic - verify) |
| Bihār Sharīf | 34 | 50.7 | 297,268 | 25.2008 | 85.5239 | 25.4 | 25.0 | 85.72 | 85.32 | Downstream (heuristic - verify) |
| Barbigha | 34 | 53.6 | 46,075 | 25.2167 | 85.7333 | 25.42 | 25.02 | 85.93 | 85.53 | Downstream (heuristic - verify) |
| Bar Bigha | 34 | 53.8 | 41,758 | 25.2186 | 85.7332 | 25.42 | 25.02 | 85.93 | 85.53 | Downstream (heuristic - verify) |
| Islāmpur | 34 | 58.9 | 35,641 | 25.1408 | 85.2059 | 25.34 | 24.94 | 85.41 | 85.01 | Off flood-path (heuristic) |
| Bagaha | 34 | 59.8 | 91,383 | 24.5290 | 85.0602 | 24.73 | 24.33 | 85.26 | 84.86 | Off flood-path (heuristic) |
| Gaya | 34 | 60.4 | 474,093 | 24.7969 | 85.0038 | 25.0 | 24.6 | 85.2 | 84.8 | Off flood-path (heuristic) |
| Bodh Gaya | 34 | 62.2 | 38,439 | 24.6981 | 84.9869 | 24.9 | 24.5 | 85.19 | 84.79 | Off flood-path (heuristic) |
| Jamūī | 34 | 66.1 | 87,357 | 24.9261 | 86.2253 | 25.13 | 24.73 | 86.43 | 86.03 | Downstream (heuristic - verify) |
| Luckeesarai | 34 | 68.8 | 99,979 | 25.1765 | 86.0947 | 25.38 | 24.98 | 86.29 | 85.89 | Downstream (heuristic - verify) |
| Barki Saria | 38 | 70.2 | 24,134 | 24.1759 | 85.8894 | 24.38 | 23.98 | 86.09 | 85.69 | Off flood-path (heuristic) |
| Hilsa | 34 | 70.6 | 51,052 | 25.3164 | 85.2823 | 25.52 | 25.12 | 85.48 | 85.08 | Off flood-path (heuristic) |
| Makhdumpur | 34 | 72.4 | 31,994 | 25.0657 | 84.9725 | 25.27 | 24.87 | 85.17 | 84.77 | Off flood-path (heuristic) |
| Barhiya | 34 | 73.3 | 43,045 | 25.2881 | 86.0206 | 25.49 | 25.09 | 86.22 | 85.82 | Downstream (heuristic - verify) |
| Jhajha | 34 | 78.7 | 40,646 | 24.7711 | 86.3789 | 24.97 | 24.57 | 86.58 | 86.18 | Off flood-path (heuristic) |
| Bakhtiarpur | 34 | 78.8 | 47,897 | 25.4560 | 85.5329 | 25.66 | 25.26 | 85.73 | 85.33 | Downstream (heuristic - verify) |
| Mokameh | 34 | 78.9 | 60,678 | 25.3966 | 85.9219 | 25.6 | 25.2 | 86.12 | 85.72 | Downstream (heuristic - verify) |
| Tekāri | 34 | 79.4 | 21,324 | 24.9425 | 84.8427 | 25.14 | 24.74 | 85.04 | 84.64 | Off flood-path (heuristic) |
| Bakhtiyārpur | 34 | 79.4 | 34,533 | 25.4618 | 85.5318 | 25.66 | 25.26 | 85.73 | 85.33 | Downstream (heuristic - verify) |
| Jahānābād | 34 | 80.5 | 103,202 | 25.2137 | 84.9871 | 25.41 | 25.01 | 85.19 | 84.79 | Off flood-path (heuristic) |
| Bārh | 34 | 82.3 | 61,470 | 25.4834 | 85.7093 | 25.68 | 25.28 | 85.91 | 85.51 | Downstream (heuristic - verify) |
| Khusropur | 34 | 84.2 | 15,731 | 25.4817 | 85.3849 | 25.68 | 25.28 | 85.58 | 85.18 | Downstream (heuristic - verify) |
| Sherghāti | 34 | 84.4 | 40,666 | 24.5595 | 84.7916 | 24.76 | 24.36 | 84.99 | 84.59 | Off flood-path (heuristic) |
| Bihāt | 34 | 86.2 | 67,952 | 25.4253 | 86.0208 | 25.63 | 25.23 | 86.22 | 85.82 | Downstream (heuristic - verify) |
| Hazāribāgh | 38 | 87.6 | 153,595 | 23.9924 | 85.3616 | 24.19 | 23.79 | 85.56 | 85.16 | Off flood-path (heuristic) |
| Masaurhi Buzurg | 34 | 88.2 | 59,803 | 25.3542 | 85.0319 | 25.55 | 25.15 | 85.23 | 84.83 | Off flood-path (heuristic) |
| Barauni | 34 | 88.7 | 71,660 | 25.4709 | 85.9760 | 25.67 | 25.27 | 86.18 | 85.78 | Downstream (heuristic - verify) |
| Bāruni | 34 | 88.7 | 84,888 | 25.4751 | 85.9681 | 25.68 | 25.28 | 86.17 | 85.77 | Downstream (heuristic - verify) |
| Teghra | 34 | 89.2 | 56,234 | 25.4904 | 85.9400 | 25.69 | 25.29 | 86.14 | 85.74 | Downstream (heuristic - verify) |
| Fatwa | 34 | 89.5 | 50,961 | 25.5096 | 85.3050 | 25.71 | 25.31 | 85.51 | 85.11 | Downstream (heuristic - verify) |
| Begusarai | 34 | 91.7 | 252,008 | 25.4185 | 86.1339 | 25.62 | 25.22 | 86.33 | 85.93 | Downstream (heuristic - verify) |
| Giridih | 38 | 95.3 | 114,533 | 24.1862 | 86.3088 | 24.39 | 23.99 | 86.51 | 86.11 | Off flood-path (heuristic) |
| Chatrā | 38 | 95.4 | 49,985 | 24.2065 | 84.8709 | 24.41 | 24.01 | 85.07 | 84.67 | Off flood-path (heuristic) |
| Mahnar Bazar | 34 | 96.3 | 48,293 | 25.6096 | 85.4808 | 25.81 | 25.41 | 85.68 | 85.28 | Downstream (heuristic - verify) |
| Rafiganj | 34 | 97.8 | 35,536 | 24.8176 | 84.6345 | 25.02 | 24.62 | 84.83 | 84.43 | Off flood-path (heuristic) |
| Ballia | 34 | 103.7 | 47,550 | 25.4214 | 86.3144 | 25.62 | 25.22 | 86.51 | 86.11 | Downstream (heuristic - verify) |
| Dalsingh Sarai | 34 | 104.8 | 23,862 | 25.6680 | 85.8364 | 25.87 | 25.47 | 86.04 | 85.64 | Downstream (heuristic - verify) |
| Patna | 34 | 104.8 | 1,684,297 | 25.5941 | 85.1356 | 25.79 | 25.39 | 85.34 | 84.94 | Off flood-path (heuristic) |
| Kharagpur | 34 | 105.0 | 31,385 | 25.1245 | 86.5558 | 25.32 | 24.92 | 86.76 | 86.36 | Downstream (heuristic - verify) |
| Naubatpur | 34 | 105.2 | 25,011 | 25.4986 | 84.9608 | 25.7 | 25.3 | 85.16 | 84.76 | Off flood-path (heuristic) |
| Nohsa | 34 | 105.9 | 16,680 | 25.5653 | 85.0560 | 25.77 | 25.37 | 85.26 | 84.86 | Off flood-path (heuristic) |
| Phulwari Sharif | 34 | 106.2 | 81,740 | 25.5776 | 85.0725 | 25.78 | 25.38 | 85.27 | 84.87 | Off flood-path (heuristic) |
| Kedia | 38 | 106.3 | 16,054 | 23.7945 | 85.5872 | 23.99 | 23.59 | 85.79 | 85.39 | Off flood-path (heuristic) |
| Bikram | 34 | 107.3 | 22,486 | 25.4471 | 84.8626 | 25.65 | 25.25 | 85.06 | 84.66 | Off flood-path (heuristic) |
| Khagaul | 34 | 107.7 | 51,577 | 25.5790 | 85.0456 | 25.78 | 25.38 | 85.25 | 84.85 | Off flood-path (heuristic) |
| Gumia | 38 | 108.3 | 48,141 | 23.7975 | 85.8252 | 24.0 | 23.6 | 86.03 | 85.63 | Off flood-path (heuristic) |
| Jasidih | 38 | 108.9 | 16,338 | 24.5138 | 86.6458 | 24.71 | 24.31 | 86.85 | 86.45 | Off flood-path (heuristic) |
| Arwal | 34 | 108.9 | 51,849 | 25.2428 | 84.6657 | 25.44 | 25.04 | 84.87 | 84.47 | Off flood-path (heuristic) |
| Jamālpur | 34 | 109.2 | 105,434 | 25.3126 | 86.4889 | 25.51 | 25.11 | 86.69 | 86.29 | Downstream (heuristic - verify) |
| Hājīpur | 34 | 111.2 | 147,688 | 25.6854 | 85.2098 | 25.89 | 25.49 | 85.41 | 85.01 | Off flood-path (heuristic) |
| Munger | 34 | 112.2 | 213,303 | 25.3746 | 86.4745 | 25.57 | 25.17 | 86.67 | 86.27 | Downstream (heuristic - verify) |
| Sāram | 38 | 112.2 | 15,212 | 23.7625 | 85.8300 | 23.96 | 23.56 | 86.03 | 85.63 | Off flood-path (heuristic) |
| Bermo | 38 | 112.3 | 17,401 | 23.7878 | 85.9353 | 23.99 | 23.59 | 86.14 | 85.74 | Off flood-path (heuristic) |
| Gomoh | 38 | 112.3 | 31,495 | 23.8736 | 86.1516 | 24.07 | 23.67 | 86.35 | 85.95 | Off flood-path (heuristic) |
| Dinapur Nizamat | 34 | 113.2 | 182,429 | 25.6385 | 85.0512 | 25.84 | 25.44 | 85.25 | 84.85 | Off flood-path (heuristic) |
| Dinapore | 34 | 113.2 | 152,940 | 25.6370 | 85.0479 | 25.84 | 25.44 | 85.25 | 84.85 | Off flood-path (heuristic) |
| Kathhāra | 38 | 113.4 | 22,080 | 23.7638 | 85.8847 | 23.96 | 23.56 | 86.08 | 85.68 | Off flood-path (heuristic) |
| Sonepur | 34 | 113.9 | 37,776 | 25.6961 | 85.1667 | 25.9 | 25.5 | 85.37 | 84.97 | Off flood-path (heuristic) |
| Kāro | 38 | 113.9 | 39,305 | 23.7852 | 85.9783 | 23.99 | 23.59 | 86.18 | 85.78 | Off flood-path (heuristic) |
| Kuju | 38 | 114.3 | 21,356 | 23.7254 | 85.5102 | 23.93 | 23.53 | 85.71 | 85.31 | Off flood-path (heuristic) |
| Dinapur Cantonment | 34 | 114.5 | 28,723 | 25.6362 | 85.0203 | 25.84 | 25.44 | 85.22 | 84.82 | Off flood-path (heuristic) |
| Jāridih | 38 | 114.7 | 31,882 | 23.7657 | 85.9386 | 23.97 | 23.57 | 86.14 | 85.74 | Off flood-path (heuristic) |
| Deoghar | 38 | 114.8 | 203,123 | 24.4898 | 86.6990 | 24.69 | 24.29 | 86.9 | 86.5 | Off flood-path (heuristic) |
| Bakhri | 34 | 115.5 | 40,043 | 25.5989 | 86.2607 | 25.8 | 25.4 | 86.46 | 86.06 | Downstream (heuristic - verify) |
| Bihtā | 34 | 116.0 | 47,549 | 25.5588 | 84.8714 | 25.76 | 25.36 | 85.07 | 84.67 | Off flood-path (heuristic) |
| Madhupur | 38 | 117.7 | 55,238 | 24.2742 | 86.6393 | 24.47 | 24.07 | 86.84 | 86.44 | Off flood-path (heuristic) |
| Phusro | 38 | 117.9 | 185,555 | 23.7564 | 86.0051 | 23.96 | 23.56 | 86.21 | 85.81 | Off flood-path (heuristic) |
| Rusera | 34 | 119.5 | 28,781 | 25.7536 | 86.0260 | 25.95 | 25.55 | 86.23 | 85.83 | Downstream (heuristic - verify) |
| Rosera | 34 | 119.9 | 31,155 | 25.7549 | 86.0315 | 25.95 | 25.55 | 86.23 | 85.83 | Downstream (heuristic - verify) |
| Khagaria | 34 | 120.9 | 49,982 | 25.5022 | 86.4671 | 25.7 | 25.3 | 86.67 | 86.27 | Downstream (heuristic - verify) |
| Koelwār | 34 | 122.7 | 25,494 | 25.5805 | 84.7975 | 25.78 | 25.38 | 85.0 | 84.6 | Off flood-path (heuristic) |
| Chandrapura | 38 | 123.2 | 27,425 | 23.7488 | 86.1196 | 23.95 | 23.55 | 86.32 | 85.92 | Off flood-path (heuristic) |
| Maner | 34 | 123.6 | 40,068 | 25.6460 | 84.8729 | 25.85 | 25.45 | 85.07 | 84.67 | Off flood-path (heuristic) |
| Aurangābād | 34 | 123.8 | 102,244 | 24.7520 | 84.3742 | 24.95 | 24.55 | 84.57 | 84.17 | Off flood-path (heuristic) |
| Saunda | 38 | 123.8 | 81,915 | 23.6645 | 85.3269 | 23.86 | 23.46 | 85.53 | 85.13 | Off flood-path (heuristic) |
| Sirka | 38 | 124.0 | 19,871 | 23.6456 | 85.4333 | 23.85 | 23.45 | 85.63 | 85.23 | Off flood-path (heuristic) |
| Patrātu | 38 | 124.3 | 32,899 | 23.6651 | 85.3035 | 23.87 | 23.47 | 85.5 | 85.1 | Off flood-path (heuristic) |
| Rāmgarh | 38 | 124.8 | 88,781 | 23.6303 | 85.5216 | 23.83 | 23.43 | 85.72 | 85.32 | Off flood-path (heuristic) |
| Samāstipur | 34 | 125.0 | 67,925 | 25.8622 | 85.7795 | 26.06 | 25.66 | 85.98 | 85.58 | Downstream (heuristic - verify) |
| Daudnagar | 34 | 125.0 | 52,364 | 25.0347 | 84.4009 | 25.23 | 24.83 | 84.6 | 84.2 | Off flood-path (heuristic) |
| Dighwāra | 34 | 125.5 | 32,741 | 25.7443 | 85.0100 | 25.94 | 25.54 | 85.21 | 84.81 | Off flood-path (heuristic) |
| Dugda | 38 | 125.9 | 22,740 | 23.7452 | 86.1718 | 23.95 | 23.55 | 86.37 | 85.97 | Off flood-path (heuristic) |
| Barkā Kānā | 38 | 126.2 | 18,475 | 23.6212 | 85.4675 | 23.82 | 23.42 | 85.67 | 85.27 | Off flood-path (heuristic) |
| Sultānganj | 34 | 126.7 | 52,892 | 25.2383 | 86.7356 | 25.44 | 25.04 | 86.94 | 86.54 | Downstream (heuristic - verify) |
| Kātrās | 38 | 127.4 | 57,349 | 23.7975 | 86.2983 | 24.0 | 23.6 | 86.5 | 86.1 | Off flood-path (heuristic) |
| Gogri Jamālpur | 34 | 129.6 | 37,753 | 25.4112 | 86.6593 | 25.61 | 25.21 | 86.86 | 86.46 | Downstream (heuristic - verify) |
| Arrah | 34 | 130.1 | 261,430 | 25.5563 | 84.6633 | 25.76 | 25.36 | 84.86 | 84.46 | Off flood-path (heuristic) |
| Chitarpur | 38 | 131.0 | 22,837 | 23.5728 | 85.6535 | 23.77 | 23.37 | 85.85 | 85.45 | Off flood-path (heuristic) |
| Sijua | 38 | 131.2 | 31,537 | 23.7762 | 86.3303 | 23.98 | 23.58 | 86.53 | 86.13 | Off flood-path (heuristic) |
| Lālganj | 34 | 131.6 | 37,098 | 25.8689 | 85.1739 | 26.07 | 25.67 | 85.37 | 84.97 | Downstream (heuristic - verify) |
| Bokāro | 38 | 132.5 | 564,319 | 23.6693 | 86.1516 | 23.87 | 23.47 | 86.35 | 85.95 | Off flood-path (heuristic) |
| Nāsriganj | 34 | 132.6 | 23,819 | 25.0514 | 84.3284 | 25.25 | 24.85 | 84.53 | 84.13 | Off flood-path (heuristic) |
| Bānka | 34 | 134.3 | 45,977 | 24.8809 | 86.9226 | 25.08 | 24.68 | 87.12 | 86.72 | Off flood-path (heuristic) |
| Dhanbad | 38 | 135.2 | 1,196,214 | 23.7976 | 86.4299 | 24.0 | 23.6 | 86.63 | 86.23 | Off flood-path (heuristic) |
| Amarpur | 34 | 135.3 | 25,336 | 25.0397 | 86.9025 | 25.24 | 24.84 | 87.1 | 86.7 | Downstream (heuristic - verify) |
| Churi | 38 | 135.6 | 24,876 | 23.6549 | 85.0128 | 23.85 | 23.45 | 85.21 | 84.81 | Off flood-path (heuristic) |
| Khalāri | 38 | 136.2 | 20,010 | 23.6506 | 85.0074 | 23.85 | 23.45 | 85.21 | 84.81 | Off flood-path (heuristic) |
| Chas | 38 | 136.6 | 141,640 | 23.6356 | 86.1671 | 23.84 | 23.44 | 86.37 | 85.97 | Off flood-path (heuristic) |
| Piro | 34 | 136.7 | 33,785 | 25.3322 | 84.4045 | 25.53 | 25.13 | 84.6 | 84.2 | Off flood-path (heuristic) |
| Jharia | 38 | 139.3 | 86,938 | 23.7408 | 86.4146 | 23.94 | 23.54 | 86.61 | 86.21 | Off flood-path (heuristic) |
| Jāmadoba | 38 | 140.6 | 34,774 | 23.7167 | 86.4000 | 23.92 | 23.52 | 86.6 | 86.2 | Off flood-path (heuristic) |
| Chāpra | 34 | 143.1 | 202,352 | 25.7803 | 84.7471 | 25.98 | 25.58 | 84.95 | 84.55 | Off flood-path (heuristic) |
| Jagdīspur | 34 | 143.2 | 32,447 | 25.4681 | 84.4194 | 25.67 | 25.27 | 84.62 | 84.22 | Off flood-path (heuristic) |
| Madhurampur Dehri | 34 | 143.7 | 137,231 | 24.9690 | 84.1964 | 25.17 | 24.77 | 84.4 | 84.0 | Off flood-path (heuristic) |
| Bikramganj | 34 | 144.9 | 48,465 | 25.2107 | 84.2551 | 25.41 | 25.01 | 84.46 | 84.06 | Off flood-path (heuristic) |
| Purāini | 34 | 145.8 | 30,829 | 25.1426 | 86.9797 | 25.34 | 24.94 | 87.18 | 86.78 | Downstream (heuristic - verify) |
| Pāthardih | 38 | 147.1 | 45,276 | 23.6658 | 86.4317 | 23.87 | 23.47 | 86.63 | 86.23 | Off flood-path (heuristic) |
| Bela | 34 | 148.0 | 26,707 | 25.5571 | 84.4308 | 25.76 | 25.36 | 84.63 | 84.23 | Off flood-path (heuristic) |
| Bhāgalpur | 34 | 148.8 | 400,146 | 25.2445 | 86.9718 | 25.44 | 25.04 | 87.17 | 86.77 | Downstream (heuristic - verify) |
| Kānke | 38 | 149.0 | 17,560 | 23.4348 | 85.3206 | 23.63 | 23.23 | 85.52 | 85.12 | Off flood-path (heuristic) |
| Koāth | 34 | 149.5 | 18,890 | 25.3264 | 84.2598 | 25.53 | 25.13 | 84.46 | 84.06 | Off flood-path (heuristic) |
| Nabīnagar | 34 | 149.8 | 23,984 | 24.6068 | 84.1262 | 24.81 | 24.41 | 84.33 | 83.93 | Off flood-path (heuristic) |
| Jāmtāra | 38 | 150.0 | 29,415 | 23.9630 | 86.8029 | 24.16 | 23.76 | 87.0 | 86.6 | Off flood-path (heuristic) |
| Revelganj | 34 | 150.9 | 39,039 | 25.7898 | 84.6360 | 25.99 | 25.59 | 84.84 | 84.44 | Off flood-path (heuristic) |
| Rātu | 38 | 152.9 | 22,379 | 23.4204 | 85.2146 | 23.62 | 23.22 | 85.41 | 85.01 | Off flood-path (heuristic) |
| Shāhpur | 34 | 153.2 | 17,767 | 25.6029 | 84.4041 | 25.8 | 25.4 | 84.6 | 84.2 | Off flood-path (heuristic) |
| Muzaffarpur | 34 | 154.1 | 354,462 | 26.1226 | 85.3906 | 26.32 | 25.92 | 85.59 | 85.19 | Downstream (heuristic - verify) |
| Bangaon | 34 | 154.4 | 60,000 | 25.8673 | 86.5115 | 26.07 | 25.67 | 86.71 | 86.31 | Downstream (heuristic - verify) |
| Marhaura | 34 | 154.7 | 29,932 | 25.9735 | 84.8680 | 26.17 | 25.77 | 85.07 | 84.67 | Off flood-path (heuristic) |
| Nokha | 34 | 154.7 | 27,302 | 25.1048 | 84.1162 | 25.3 | 24.9 | 84.32 | 83.92 | Off flood-path (heuristic) |
| Benipur | 34 | 155.1 | 75,317 | 26.0551 | 86.1456 | 26.26 | 25.86 | 86.35 | 85.95 | Downstream (heuristic - verify) |
| Basukinath | 38 | 155.4 | 17,123 | 24.3945 | 87.0864 | 24.59 | 24.19 | 87.29 | 86.89 | Off flood-path (heuristic) |
| Lātehār | 38 | 157.9 | 26,981 | 23.7442 | 84.4998 | 23.94 | 23.54 | 84.7 | 84.3 | Off flood-path (heuristic) |
| Jhalidā | 28 | 158.6 | 18,057 | 23.3654 | 85.9764 | 23.57 | 23.17 | 86.18 | 85.78 | Off flood-path (heuristic) |
| Darbhanga | 34 | 158.7 | 296,039 | 26.1522 | 85.8971 | 26.35 | 25.95 | 86.1 | 85.7 | Downstream (heuristic - verify) |
| Ranchi | 38 | 159.2 | 1,120,374 | 23.3432 | 85.3094 | 23.54 | 23.14 | 85.51 | 85.11 | Off flood-path (heuristic) |
| Saharsa | 34 | 160.2 | 156,540 | 25.8750 | 86.5961 | 26.07 | 25.67 | 86.8 | 86.4 | Downstream (heuristic - verify) |
| Sasarām | 34 | 161.3 | 147,408 | 24.9494 | 84.0165 | 25.15 | 24.75 | 84.22 | 83.82 | Off flood-path (heuristic) |
| Lakhyabad | 28 | 161.9 | 33,162 | 23.6667 | 86.6667 | 23.87 | 23.47 | 86.87 | 86.47 | Off flood-path (heuristic) |
| Godda | 38 | 163.0 | 48,480 | 24.8270 | 87.2125 | 25.03 | 24.63 | 87.41 | 87.01 | Off flood-path (heuristic) |
| Maithon | 38 | 163.3 | 18,830 | 23.7800 | 86.8100 | 23.98 | 23.58 | 87.01 | 86.61 | Off flood-path (heuristic) |
| Husainābād | 38 | 163.6 | 29,241 | 24.5285 | 84.0000 | 24.73 | 24.33 | 84.2 | 83.8 | Off flood-path (heuristic) |
| Siuliban | 38 | 163.8 | 24,202 | 23.7486 | 86.7848 | 23.95 | 23.55 | 86.98 | 86.58 | Off flood-path (heuristic) |
| Chirkunda | 38 | 164.1 | 45,508 | 23.7477 | 86.7880 | 23.95 | 23.55 | 86.99 | 86.59 | Off flood-path (heuristic) |
| Chittaranjan | 28 | 165.2 | 45,305 | 23.8568 | 86.9032 | 24.06 | 23.66 | 87.1 | 86.7 | Off flood-path (heuristic) |
| Kantai | 34 | 165.6 | 25,051 | 26.2142 | 85.2975 | 26.41 | 26.01 | 85.5 | 85.1 | Downstream (heuristic - verify) |
| Naugachhia | 34 | 166.8 | 49,069 | 25.3881 | 87.0991 | 25.59 | 25.19 | 87.3 | 86.9 | Downstream (heuristic - verify) |
| Kulti | 28 | 169.5 | 305,405 | 23.7317 | 86.8437 | 23.93 | 23.53 | 87.04 | 86.64 | Off flood-path (heuristic) |
| Dumraon | 34 | 170.9 | 53,618 | 25.5526 | 84.1515 | 25.75 | 25.35 | 84.35 | 83.95 | Off flood-path (heuristic) |
| Motipur | 34 | 172.8 | 28,572 | 26.2527 | 85.1608 | 26.45 | 26.05 | 85.36 | 84.96 | Downstream (heuristic - verify) |
| Raghunathpur | 28 | 173.2 | 22,802 | 23.5388 | 86.6735 | 23.74 | 23.34 | 86.87 | 86.47 | Off flood-path (heuristic) |
| Reoti | 36 | 173.4 | 23,819 | 25.8509 | 84.3778 | 26.05 | 25.65 | 84.58 | 84.18 | Off flood-path (heuristic) |
| Lohārdagā | 38 | 173.7 | 57,411 | 23.4331 | 84.6799 | 23.63 | 23.23 | 84.88 | 84.48 | Off flood-path (heuristic) |
| Colgong | 34 | 174.1 | 33,700 | 25.2633 | 87.2326 | 25.46 | 25.06 | 87.43 | 87.03 | Downstream (heuristic - verify) |
| Medininagar | 38 | 174.3 | 78,396 | 24.0397 | 84.0658 | 24.24 | 23.84 | 84.27 | 83.87 | Off flood-path (heuristic) |
| Dumka | 38 | 175.2 | 47,663 | 24.2678 | 87.2485 | 24.47 | 24.07 | 87.45 | 87.05 | Off flood-path (heuristic) |
| Puruliya | 28 | 175.8 | 122,533 | 23.3306 | 86.3630 | 23.53 | 23.13 | 86.56 | 86.16 | Off flood-path (heuristic) |
| Būndu | 38 | 176.7 | 21,054 | 23.1609 | 85.5901 | 23.36 | 22.96 | 85.79 | 85.39 | Off flood-path (heuristic) |
| Madhepura | 34 | 177.0 | 54,472 | 25.9213 | 86.7927 | 26.12 | 25.72 | 86.99 | 86.59 | Downstream (heuristic - verify) |
| Bihārīganj | 34 | 177.4 | 32,805 | 25.7341 | 86.9884 | 25.93 | 25.53 | 87.19 | 86.79 | Downstream (heuristic - verify) |
| Adra | 28 | 177.5 | 22,159 | 23.4967 | 86.6836 | 23.7 | 23.3 | 86.88 | 86.48 | Off flood-path (heuristic) |
| Bishrāmpur | 38 | 178.3 | 42,925 | 24.2530 | 83.9250 | 24.45 | 24.05 | 84.13 | 83.73 | Off flood-path (heuristic) |
| Jhanjhārpur | 34 | 181.7 | 31,283 | 26.2647 | 86.2799 | 26.46 | 26.06 | 86.48 | 86.08 | Downstream (heuristic - verify) |
| Supaul | 34 | 181.7 | 65,437 | 26.1153 | 86.5951 | 26.32 | 25.92 | 86.8 | 86.4 | Downstream (heuristic - verify) |
| Āsansol | 28 | 183.7 | 504,271 | 23.6833 | 86.9833 | 23.88 | 23.48 | 87.18 | 86.78 | Off flood-path (heuristic) |
| Madhubani | 34 | 184.5 | 75,736 | 26.3537 | 86.0717 | 26.55 | 26.15 | 86.27 | 85.87 | Downstream (heuristic - verify) |
| Mehsi | 34 | 185.7 | 25,995 | 26.3557 | 85.0925 | 26.56 | 26.16 | 85.29 | 84.89 | Downstream (heuristic - verify) |
| Sāhibganj | 34 | 186.0 | 23,224 | 26.3083 | 84.9270 | 26.51 | 26.11 | 85.13 | 84.73 | Off flood-path (heuristic) |
| Majhiāon Kalān | 38 | 186.5 | 18,349 | 24.3243 | 83.8161 | 24.52 | 24.12 | 84.02 | 83.62 | Off flood-path (heuristic) |
| Buxar | 34 | 187.1 | 102,861 | 25.5755 | 83.9804 | 25.78 | 25.38 | 84.18 | 83.78 | Off flood-path (heuristic) |
| Mahārājgani | 34 | 187.1 | 24,282 | 26.1102 | 84.5036 | 26.31 | 25.91 | 84.7 | 84.3 | Off flood-path (heuristic) |
| Bānsdīh | 36 | 187.6 | 21,457 | 25.8838 | 84.2183 | 26.08 | 25.68 | 84.42 | 84.02 | Off flood-path (heuristic) |
| Khunti | 38 | 189.0 | 36,390 | 23.0760 | 85.2782 | 23.28 | 22.88 | 85.48 | 85.08 | Off flood-path (heuristic) |
| Belsand | 34 | 189.4 | 20,566 | 26.4437 | 85.4008 | 26.64 | 26.24 | 85.6 | 85.2 | Downstream (heuristic - verify) |
| Murlīganj | 34 | 189.6 | 28,691 | 25.8969 | 86.9958 | 26.1 | 25.7 | 87.2 | 86.8 | Downstream (heuristic - verify) |
| Jāmuria | 28 | 189.7 | 160,242 | 23.7047 | 87.0787 | 23.9 | 23.5 | 87.28 | 86.88 | Off flood-path (heuristic) |
| Ghogardīha | 34 | 191.2 | 18,257 | 26.2799 | 86.4700 | 26.48 | 26.08 | 86.67 | 86.27 | Downstream (heuristic - verify) |
| Pupri | 34 | 191.6 | 15,129 | 26.4708 | 85.7031 | 26.67 | 26.27 | 85.9 | 85.5 | Downstream (heuristic - verify) |
| Kesariyā | 34 | 192.4 | 18,984 | 26.3499 | 84.8709 | 26.55 | 26.15 | 85.07 | 84.67 | Off flood-path (heuristic) |
| Garhwa | 38 | 192.9 | 46,059 | 24.1600 | 83.8076 | 24.36 | 23.96 | 84.01 | 83.61 | Off flood-path (heuristic) |
| Chākia | 34 | 193.4 | 20,686 | 26.4160 | 85.0466 | 26.62 | 26.22 | 85.25 | 84.85 | Downstream (heuristic - verify) |
| Madhuban | 34 | 193.5 | 17,510 | 26.4386 | 85.1357 | 26.64 | 26.24 | 85.34 | 84.94 | Downstream (heuristic - verify) |
| Balarāmpur | 28 | 194.4 | 22,847 | 23.0971 | 86.2229 | 23.3 | 22.9 | 86.42 | 86.02 | Off flood-path (heuristic) |
| Kenda | 28 | 196.2 | 15,131 | 23.1959 | 86.5150 | 23.4 | 23.0 | 86.71 | 86.31 | Off flood-path (heuristic) |
| Sheohar | 34 | 198.5 | 28,116 | 26.5139 | 85.2934 | 26.71 | 26.31 | 85.49 | 85.09 | Downstream (heuristic - verify) |
| Maniar | 36 | 198.6 | 20,462 | 25.9855 | 84.1723 | 26.19 | 25.79 | 84.37 | 83.97 | Off flood-path (heuristic) |
| Rānīganj | 28 | 200.0 | 131,261 | 23.6164 | 87.1306 | 23.82 | 23.42 | 87.33 | 86.93 | Off flood-path (heuristic) |

## Upper Kiul Dam (Bihar)
Dam coordinates: 24.7, 86.1

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Jamūī | 34 | 28.1 | 87,357 | 24.9261 | 86.2253 | 25.13 | 24.73 | 86.43 | 86.03 | Downstream (heuristic - verify) |
| Jhajha | 34 | 29.3 | 40,646 | 24.7711 | 86.3789 | 24.97 | 24.57 | 86.58 | 86.18 | Downstream (heuristic - verify) |
| Domchānch | 38 | 48.2 | 15,809 | 24.4748 | 85.6921 | 24.67 | 24.27 | 85.89 | 85.49 | Off flood-path (heuristic) |
| Luckeesarai | 34 | 53.0 | 99,979 | 25.1765 | 86.0947 | 25.38 | 24.98 | 86.29 | 85.89 | Downstream (heuristic - verify) |
| Sheikhpura | 34 | 55.5 | 62,927 | 25.1399 | 85.8410 | 25.34 | 24.94 | 86.04 | 85.64 | Off flood-path (heuristic) |
| Kodarma | 38 | 57.3 | 24,633 | 24.4675 | 85.5940 | 24.67 | 24.27 | 85.79 | 85.39 | Off flood-path (heuristic) |
| Wāris Alīganj | 34 | 58.3 | 35,243 | 25.0172 | 85.6405 | 25.22 | 24.82 | 85.84 | 85.44 | Off flood-path (heuristic) |
| Jasidih | 38 | 58.9 | 16,338 | 24.5138 | 86.6458 | 24.71 | 24.31 | 86.85 | 86.45 | Off flood-path (heuristic) |
| Nawāda | 34 | 59.9 | 98,029 | 24.8867 | 85.5436 | 25.09 | 24.69 | 85.74 | 85.34 | Off flood-path (heuristic) |
| Bhadauni | 34 | 60.4 | 20,739 | 24.8754 | 85.5337 | 25.08 | 24.68 | 85.73 | 85.33 | Off flood-path (heuristic) |
| Rajauli | 34 | 60.9 | 30,170 | 24.6449 | 85.5003 | 24.84 | 24.44 | 85.7 | 85.3 | Off flood-path (heuristic) |
| Giridih | 38 | 60.9 | 114,533 | 24.1862 | 86.3088 | 24.39 | 23.99 | 86.51 | 86.11 | Off flood-path (heuristic) |
| Barki Saria | 38 | 62.1 | 24,134 | 24.1759 | 85.8894 | 24.38 | 23.98 | 86.09 | 85.69 | Off flood-path (heuristic) |
| Jhumri Telaiya | 38 | 64.8 | 87,867 | 24.4349 | 85.5295 | 24.63 | 24.23 | 85.73 | 85.33 | Off flood-path (heuristic) |
| Deoghar | 38 | 64.9 | 203,123 | 24.4898 | 86.6990 | 24.69 | 24.29 | 86.9 | 86.5 | Off flood-path (heuristic) |
| Kharagpur | 34 | 65.9 | 31,385 | 25.1245 | 86.5558 | 25.32 | 24.92 | 86.76 | 86.36 | Downstream (heuristic - verify) |
| Barhiya | 34 | 65.9 | 43,045 | 25.2881 | 86.0206 | 25.49 | 25.09 | 86.22 | 85.82 | Downstream (heuristic - verify) |
| Barbigha | 34 | 68.3 | 46,075 | 25.2167 | 85.7333 | 25.42 | 25.02 | 85.93 | 85.53 | Off flood-path (heuristic) |
| Bar Bigha | 34 | 68.5 | 41,758 | 25.2186 | 85.7332 | 25.42 | 25.02 | 85.93 | 85.53 | Off flood-path (heuristic) |
| Hisua | 34 | 70.5 | 32,585 | 24.8336 | 85.4173 | 25.03 | 24.63 | 85.62 | 85.22 | Off flood-path (heuristic) |
| Madhupur | 38 | 72.2 | 55,238 | 24.2742 | 86.6393 | 24.47 | 24.07 | 86.84 | 86.44 | Off flood-path (heuristic) |
| Rājgīr | 34 | 77.6 | 41,587 | 25.0283 | 85.4208 | 25.23 | 24.83 | 85.62 | 85.22 | Off flood-path (heuristic) |
| Jamālpur | 34 | 78.6 | 105,434 | 25.3126 | 86.4889 | 25.51 | 25.11 | 86.69 | 86.29 | Downstream (heuristic - verify) |
| Mokameh | 34 | 79.5 | 60,678 | 25.3966 | 85.9219 | 25.6 | 25.2 | 86.12 | 85.72 | Off flood-path (heuristic) |
| Begusarai | 34 | 80.0 | 252,008 | 25.4185 | 86.1339 | 25.62 | 25.22 | 86.33 | 85.93 | Downstream (heuristic - verify) |
| Silao | 34 | 80.1 | 25,674 | 25.0836 | 85.4280 | 25.28 | 24.88 | 85.63 | 85.23 | Off flood-path (heuristic) |
| Bihār Sharīf | 34 | 80.5 | 297,268 | 25.2008 | 85.5239 | 25.4 | 25.0 | 85.72 | 85.32 | Off flood-path (heuristic) |
| Bihāt | 34 | 81.0 | 67,952 | 25.4253 | 86.0208 | 25.63 | 25.23 | 86.22 | 85.82 | Downstream (heuristic - verify) |
| Ballia | 34 | 83.1 | 47,550 | 25.4214 | 86.3144 | 25.62 | 25.22 | 86.51 | 86.11 | Downstream (heuristic - verify) |
| Munger | 34 | 84.0 | 213,303 | 25.3746 | 86.4745 | 25.57 | 25.17 | 86.67 | 86.27 | Downstream (heuristic - verify) |
| Bānka | 34 | 85.4 | 45,977 | 24.8809 | 86.9226 | 25.08 | 24.68 | 87.12 | 86.72 | Downstream (heuristic - verify) |
| Barauni | 34 | 86.6 | 71,660 | 25.4709 | 85.9760 | 25.67 | 25.27 | 86.18 | 85.78 | Downstream (heuristic - verify) |
| Bāruni | 34 | 87.2 | 84,888 | 25.4751 | 85.9681 | 25.68 | 25.28 | 86.17 | 85.77 | Downstream (heuristic - verify) |
| Sultānganj | 34 | 87.7 | 52,892 | 25.2383 | 86.7356 | 25.44 | 25.04 | 86.94 | 86.54 | Downstream (heuristic - verify) |
| Amarpur | 34 | 89.3 | 25,336 | 25.0397 | 86.9025 | 25.24 | 24.84 | 87.1 | 86.7 | Downstream (heuristic - verify) |
| Teghra | 34 | 89.4 | 56,234 | 25.4904 | 85.9400 | 25.69 | 25.29 | 86.14 | 85.74 | Off flood-path (heuristic) |
| Gomoh | 38 | 92.0 | 31,495 | 23.8736 | 86.1516 | 24.07 | 23.67 | 86.35 | 85.95 | Off flood-path (heuristic) |
| Bārh | 34 | 95.6 | 61,470 | 25.4834 | 85.7093 | 25.68 | 25.28 | 85.91 | 85.51 | Off flood-path (heuristic) |
| Khagaria | 34 | 96.6 | 49,982 | 25.5022 | 86.4671 | 25.7 | 25.3 | 86.67 | 86.27 | Downstream (heuristic - verify) |
| Gogri Jamālpur | 34 | 97.1 | 37,753 | 25.4112 | 86.6593 | 25.61 | 25.21 | 86.86 | 86.46 | Downstream (heuristic - verify) |
| Bakhri | 34 | 101.3 | 40,043 | 25.5989 | 86.2607 | 25.8 | 25.4 | 86.46 | 86.06 | Downstream (heuristic - verify) |
| Purāini | 34 | 101.4 | 30,829 | 25.1426 | 86.9797 | 25.34 | 24.94 | 87.18 | 86.78 | Downstream (heuristic - verify) |
| Bakhtiarpur | 34 | 101.6 | 47,897 | 25.4560 | 85.5329 | 25.66 | 25.26 | 85.73 | 85.33 | Off flood-path (heuristic) |
| Bakhtiyārpur | 34 | 102.2 | 34,533 | 25.4618 | 85.5318 | 25.66 | 25.26 | 85.73 | 85.33 | Off flood-path (heuristic) |
| Kātrās | 38 | 102.3 | 57,349 | 23.7975 | 86.2983 | 24.0 | 23.6 | 86.5 | 86.1 | Off flood-path (heuristic) |
| Kāro | 38 | 102.5 | 39,305 | 23.7852 | 85.9783 | 23.99 | 23.59 | 86.18 | 85.78 | Off flood-path (heuristic) |
| Islāmpur | 34 | 102.6 | 35,641 | 25.1408 | 85.2059 | 25.34 | 24.94 | 85.41 | 85.01 | Off flood-path (heuristic) |
| Bermo | 38 | 102.8 | 17,401 | 23.7878 | 85.9353 | 23.99 | 23.59 | 86.14 | 85.74 | Off flood-path (heuristic) |
| Gumia | 38 | 104.1 | 48,141 | 23.7975 | 85.8252 | 24.0 | 23.6 | 86.03 | 85.63 | Off flood-path (heuristic) |
| Jāridih | 38 | 105.2 | 31,882 | 23.7657 | 85.9386 | 23.97 | 23.57 | 86.14 | 85.74 | Off flood-path (heuristic) |
| Sijua | 38 | 105.3 | 31,537 | 23.7762 | 86.3303 | 23.98 | 23.58 | 86.53 | 86.13 | Off flood-path (heuristic) |
| Phusro | 38 | 105.4 | 185,555 | 23.7564 | 86.0051 | 23.96 | 23.56 | 86.21 | 85.81 | Off flood-path (heuristic) |
| Basukinath | 38 | 105.4 | 17,123 | 24.3945 | 87.0864 | 24.59 | 24.19 | 87.29 | 86.89 | Off flood-path (heuristic) |
| Dhanbad | 38 | 105.8 | 1,196,214 | 23.7976 | 86.4299 | 24.0 | 23.6 | 86.63 | 86.23 | Off flood-path (heuristic) |
| Chandrapura | 38 | 105.8 | 27,425 | 23.7488 | 86.1196 | 23.95 | 23.55 | 86.32 | 85.92 | Off flood-path (heuristic) |
| Kathhāra | 38 | 106.4 | 22,080 | 23.7638 | 85.8847 | 23.96 | 23.56 | 86.08 | 85.68 | Off flood-path (heuristic) |
| Dugda | 38 | 106.4 | 22,740 | 23.7452 | 86.1718 | 23.95 | 23.55 | 86.37 | 85.97 | Off flood-path (heuristic) |
| Bhāgalpur | 34 | 106.7 | 400,146 | 25.2445 | 86.9718 | 25.44 | 25.04 | 87.17 | 86.77 | Downstream (heuristic - verify) |
| Bagaha | 34 | 106.8 | 91,383 | 24.5290 | 85.0602 | 24.73 | 24.33 | 85.26 | 84.86 | Off flood-path (heuristic) |
| Hilsa | 34 | 107.2 | 51,052 | 25.3164 | 85.2823 | 25.52 | 25.12 | 85.48 | 85.08 | Off flood-path (heuristic) |
| Sāram | 38 | 107.8 | 15,212 | 23.7625 | 85.8300 | 23.96 | 23.56 | 86.03 | 85.63 | Off flood-path (heuristic) |
| Hazāribāgh | 38 | 108.6 | 153,595 | 23.9924 | 85.3616 | 24.19 | 23.79 | 85.56 | 85.16 | Off flood-path (heuristic) |
| Jāmtāra | 38 | 108.6 | 29,415 | 23.9630 | 86.8029 | 24.16 | 23.76 | 87.0 | 86.6 | Off flood-path (heuristic) |
| Dalsingh Sarai | 34 | 110.9 | 23,862 | 25.6680 | 85.8364 | 25.87 | 25.47 | 86.04 | 85.64 | Off flood-path (heuristic) |
| Gaya | 34 | 111.2 | 474,093 | 24.7969 | 85.0038 | 25.0 | 24.6 | 85.2 | 84.8 | Off flood-path (heuristic) |
| Jharia | 38 | 111.3 | 86,938 | 23.7408 | 86.4146 | 23.94 | 23.54 | 86.61 | 86.21 | Off flood-path (heuristic) |
| Bodh Gaya | 34 | 112.4 | 38,439 | 24.6981 | 84.9869 | 24.9 | 24.5 | 85.19 | 84.79 | Off flood-path (heuristic) |
| Khusropur | 34 | 112.9 | 15,731 | 25.4817 | 85.3849 | 25.68 | 25.28 | 85.58 | 85.18 | Off flood-path (heuristic) |
| Godda | 38 | 113.2 | 48,480 | 24.8270 | 87.2125 | 25.03 | 24.63 | 87.41 | 87.01 | Downstream (heuristic - verify) |
| Kedia | 38 | 113.3 | 16,054 | 23.7945 | 85.5872 | 23.99 | 23.59 | 85.79 | 85.39 | Off flood-path (heuristic) |
| Jāmadoba | 38 | 113.5 | 34,774 | 23.7167 | 86.4000 | 23.92 | 23.52 | 86.6 | 86.2 | Off flood-path (heuristic) |
| Bokāro | 38 | 114.7 | 564,319 | 23.6693 | 86.1516 | 23.87 | 23.47 | 86.35 | 85.95 | Off flood-path (heuristic) |
| Rusera | 34 | 117.4 | 28,781 | 25.7536 | 86.0260 | 25.95 | 25.55 | 86.23 | 85.83 | Downstream (heuristic - verify) |
| Rosera | 34 | 117.5 | 31,155 | 25.7549 | 86.0315 | 25.95 | 25.55 | 86.23 | 85.83 | Downstream (heuristic - verify) |
| Chas | 38 | 118.6 | 141,640 | 23.6356 | 86.1671 | 23.84 | 23.44 | 86.37 | 85.97 | Off flood-path (heuristic) |
| Mahnar Bazar | 34 | 118.8 | 48,293 | 25.6096 | 85.4808 | 25.81 | 25.41 | 85.68 | 85.28 | Off flood-path (heuristic) |
| Pāthardih | 38 | 119.8 | 45,276 | 23.6658 | 86.4317 | 23.87 | 23.47 | 86.63 | 86.23 | Off flood-path (heuristic) |
| Fatwa | 34 | 120.5 | 50,961 | 25.5096 | 85.3050 | 25.71 | 25.31 | 85.51 | 85.11 | Off flood-path (heuristic) |
| Makhdumpur | 34 | 120.8 | 31,994 | 25.0657 | 84.9725 | 25.27 | 24.87 | 85.17 | 84.77 | Off flood-path (heuristic) |
| Kuju | 38 | 123.8 | 21,356 | 23.7254 | 85.5102 | 23.93 | 23.53 | 85.71 | 85.31 | Off flood-path (heuristic) |
| Chittaranjan | 28 | 124.2 | 45,305 | 23.8568 | 86.9032 | 24.06 | 23.66 | 87.1 | 86.7 | Off flood-path (heuristic) |
| Maithon | 38 | 125.1 | 18,830 | 23.7800 | 86.8100 | 23.98 | 23.58 | 87.01 | 86.61 | Off flood-path (heuristic) |
| Dumka | 38 | 125.8 | 47,663 | 24.2678 | 87.2485 | 24.47 | 24.07 | 87.45 | 87.05 | Off flood-path (heuristic) |
| Jahānābād | 34 | 125.9 | 103,202 | 25.2137 | 84.9871 | 25.41 | 25.01 | 85.19 | 84.79 | Off flood-path (heuristic) |
| Naugachhia | 34 | 126.4 | 49,069 | 25.3881 | 87.0991 | 25.59 | 25.19 | 87.3 | 86.9 | Downstream (heuristic - verify) |
| Siuliban | 38 | 126.5 | 24,202 | 23.7486 | 86.7848 | 23.95 | 23.55 | 86.98 | 86.58 | Off flood-path (heuristic) |
| Chirkunda | 38 | 126.8 | 45,508 | 23.7477 | 86.7880 | 23.95 | 23.55 | 86.99 | 86.59 | Off flood-path (heuristic) |
| Lakhyabad | 28 | 128.5 | 33,162 | 23.6667 | 86.6667 | 23.87 | 23.47 | 86.87 | 86.47 | Off flood-path (heuristic) |
| Tekāri | 34 | 129.7 | 21,324 | 24.9425 | 84.8427 | 25.14 | 24.74 | 85.04 | 84.64 | Off flood-path (heuristic) |
| Masaurhi Buzurg | 34 | 129.9 | 59,803 | 25.3542 | 85.0319 | 25.55 | 25.15 | 85.23 | 84.83 | Off flood-path (heuristic) |
| Colgong | 34 | 130.2 | 33,700 | 25.2633 | 87.2326 | 25.46 | 25.06 | 87.43 | 87.03 | Downstream (heuristic - verify) |
| Kulti | 28 | 131.5 | 305,405 | 23.7317 | 86.8437 | 23.93 | 23.53 | 87.04 | 86.64 | Off flood-path (heuristic) |
| Rāmgarh | 38 | 132.6 | 88,781 | 23.6303 | 85.5216 | 23.83 | 23.43 | 85.72 | 85.32 | Off flood-path (heuristic) |
| Sherghāti | 34 | 133.2 | 40,666 | 24.5595 | 84.7916 | 24.76 | 24.36 | 84.99 | 84.59 | Off flood-path (heuristic) |
| Samāstipur | 34 | 133.2 | 67,925 | 25.8622 | 85.7795 | 26.06 | 25.66 | 85.98 | 85.58 | Off flood-path (heuristic) |
| Chitarpur | 38 | 133.3 | 22,837 | 23.5728 | 85.6535 | 23.77 | 23.37 | 85.85 | 85.45 | Off flood-path (heuristic) |
| Sirka | 38 | 135.3 | 19,871 | 23.6456 | 85.4333 | 23.85 | 23.45 | 85.63 | 85.23 | Off flood-path (heuristic) |
| Chatrā | 38 | 136.0 | 49,985 | 24.2065 | 84.8709 | 24.41 | 24.01 | 85.07 | 84.67 | Off flood-path (heuristic) |
| Barkā Kānā | 38 | 136.0 | 18,475 | 23.6212 | 85.4675 | 23.82 | 23.42 | 85.67 | 85.27 | Off flood-path (heuristic) |
| Bangaon | 34 | 136.2 | 60,000 | 25.8673 | 86.5115 | 26.07 | 25.67 | 86.71 | 86.31 | Downstream (heuristic - verify) |
| Patna | 34 | 138.9 | 1,684,297 | 25.5941 | 85.1356 | 25.79 | 25.39 | 85.34 | 84.94 | Off flood-path (heuristic) |
| Saunda | 38 | 139.3 | 81,915 | 23.6645 | 85.3269 | 23.86 | 23.46 | 85.53 | 85.13 | Off flood-path (heuristic) |
| Saharsa | 34 | 139.8 | 156,540 | 25.8750 | 86.5961 | 26.07 | 25.67 | 86.8 | 86.4 | Downstream (heuristic - verify) |
| Patrātu | 38 | 140.6 | 32,899 | 23.6651 | 85.3035 | 23.87 | 23.47 | 85.5 | 85.1 | Off flood-path (heuristic) |
| Hājīpur | 34 | 141.5 | 147,688 | 25.6854 | 85.2098 | 25.89 | 25.49 | 85.41 | 85.01 | Off flood-path (heuristic) |
| Raghunathpur | 28 | 141.6 | 22,802 | 23.5388 | 86.6735 | 23.74 | 23.34 | 86.87 | 86.47 | Off flood-path (heuristic) |
| Phulwari Sharif | 34 | 142.2 | 81,740 | 25.5776 | 85.0725 | 25.78 | 25.38 | 85.27 | 84.87 | Off flood-path (heuristic) |
| Nohsa | 34 | 142.5 | 16,680 | 25.5653 | 85.0560 | 25.77 | 25.37 | 85.26 | 84.86 | Off flood-path (heuristic) |
| Āsansol | 28 | 144.2 | 504,271 | 23.6833 | 86.9833 | 23.88 | 23.48 | 87.18 | 86.78 | Off flood-path (heuristic) |
| Khagaul | 34 | 144.3 | 51,577 | 25.5790 | 85.0456 | 25.78 | 25.38 | 85.25 | 84.85 | Off flood-path (heuristic) |
| Naubatpur | 34 | 145.1 | 25,011 | 25.4986 | 84.9608 | 25.7 | 25.3 | 85.16 | 84.76 | Off flood-path (heuristic) |
| Sonepur | 34 | 145.2 | 37,776 | 25.6961 | 85.1667 | 25.9 | 25.5 | 85.37 | 84.97 | Off flood-path (heuristic) |
| Bihārīganj | 34 | 145.6 | 32,805 | 25.7341 | 86.9884 | 25.93 | 25.53 | 87.19 | 86.79 | Downstream (heuristic - verify) |
| Adra | 28 | 146.3 | 22,159 | 23.4967 | 86.6836 | 23.7 | 23.3 | 86.88 | 86.48 | Off flood-path (heuristic) |
| Dinapur Nizamat | 34 | 148.4 | 182,429 | 25.6385 | 85.0512 | 25.84 | 25.44 | 85.25 | 84.85 | Off flood-path (heuristic) |
| Dinapore | 34 | 148.5 | 152,940 | 25.6370 | 85.0479 | 25.84 | 25.44 | 85.25 | 84.85 | Off flood-path (heuristic) |
| Rafiganj | 34 | 148.6 | 35,536 | 24.8176 | 84.6345 | 25.02 | 24.62 | 84.83 | 84.43 | Off flood-path (heuristic) |
| Jāmuria | 28 | 148.7 | 160,242 | 23.7047 | 87.0787 | 23.9 | 23.5 | 87.28 | 86.88 | Off flood-path (heuristic) |
| Jhalidā | 28 | 148.9 | 18,057 | 23.3654 | 85.9764 | 23.57 | 23.17 | 86.18 | 85.78 | Off flood-path (heuristic) |
| Bikram | 34 | 149.8 | 22,486 | 25.4471 | 84.8626 | 25.65 | 25.25 | 85.06 | 84.66 | Off flood-path (heuristic) |
| Dinapur Cantonment | 34 | 150.5 | 28,723 | 25.6362 | 85.0203 | 25.84 | 25.44 | 85.22 | 84.82 | Off flood-path (heuristic) |
| Benipur | 34 | 150.7 | 75,317 | 26.0551 | 86.1456 | 26.26 | 25.86 | 86.35 | 85.95 | Downstream (heuristic - verify) |
| Madhepura | 34 | 152.6 | 54,472 | 25.9213 | 86.7927 | 26.12 | 25.72 | 86.99 | 86.59 | Downstream (heuristic - verify) |
| Puruliya | 28 | 154.6 | 122,533 | 23.3306 | 86.3630 | 23.53 | 23.13 | 86.56 | 86.16 | Off flood-path (heuristic) |
| Bihtā | 34 | 156.3 | 47,549 | 25.5588 | 84.8714 | 25.76 | 25.36 | 85.07 | 84.67 | Off flood-path (heuristic) |
| Arwal | 34 | 156.7 | 51,849 | 25.2428 | 84.6657 | 25.44 | 25.04 | 84.87 | 84.47 | Off flood-path (heuristic) |
| Bahula | 28 | 158.9 | 16,264 | 23.6518 | 87.1647 | 23.85 | 23.45 | 87.36 | 86.96 | Off flood-path (heuristic) |
| Rānīganj | 28 | 159.5 | 131,261 | 23.6164 | 87.1306 | 23.82 | 23.42 | 87.33 | 86.93 | Off flood-path (heuristic) |
| Dighwāra | 34 | 159.7 | 32,741 | 25.7443 | 85.0100 | 25.94 | 25.54 | 85.21 | 84.81 | Off flood-path (heuristic) |
| Lālganj | 34 | 159.9 | 37,098 | 25.8689 | 85.1739 | 26.07 | 25.67 | 85.37 | 84.97 | Off flood-path (heuristic) |
| Churi | 38 | 160.2 | 24,876 | 23.6549 | 85.0128 | 23.85 | 23.45 | 85.21 | 84.81 | Off flood-path (heuristic) |
| Murlīganj | 34 | 160.7 | 28,691 | 25.8969 | 86.9958 | 26.1 | 25.7 | 87.2 | 86.8 | Downstream (heuristic - verify) |
| Khalāri | 38 | 160.9 | 20,010 | 23.6506 | 85.0074 | 23.85 | 23.45 | 85.21 | 84.81 | Off flood-path (heuristic) |
| Kānke | 38 | 161.4 | 17,560 | 23.4348 | 85.3206 | 23.63 | 23.23 | 85.52 | 85.12 | Off flood-path (heuristic) |
| Maner | 34 | 162.2 | 40,068 | 25.6460 | 84.8729 | 25.85 | 25.45 | 85.07 | 84.67 | Off flood-path (heuristic) |
| Darbhanga | 34 | 162.8 | 296,039 | 26.1522 | 85.8971 | 26.35 | 25.95 | 86.1 | 85.7 | Downstream (heuristic - verify) |
| Koelwār | 34 | 163.6 | 25,494 | 25.5805 | 84.7975 | 25.78 | 25.38 | 85.0 | 84.6 | Off flood-path (heuristic) |
| Dubrājpur | 28 | 164.3 | 35,087 | 23.7902 | 87.3765 | 23.99 | 23.59 | 87.58 | 87.18 | Off flood-path (heuristic) |
| Supaul | 34 | 165.0 | 65,437 | 26.1153 | 86.5951 | 26.32 | 25.92 | 86.8 | 86.4 | Downstream (heuristic - verify) |
| Sāhibganj | 38 | 166.1 | 95,890 | 25.2443 | 87.6348 | 25.44 | 25.04 | 87.83 | 87.43 | Downstream (heuristic - verify) |
| Rātu | 38 | 168.3 | 22,379 | 23.4204 | 85.2146 | 23.62 | 23.22 | 85.41 | 85.01 | Off flood-path (heuristic) |
| Manihāri | 34 | 168.8 | 26,629 | 25.3389 | 87.6200 | 25.54 | 25.14 | 87.82 | 87.42 | Downstream (heuristic - verify) |
| Siuri | 28 | 169.4 | 64,659 | 23.9081 | 87.5277 | 24.11 | 23.71 | 87.73 | 87.33 | Off flood-path (heuristic) |
| Ranchi | 38 | 170.9 | 1,120,374 | 23.3432 | 85.3094 | 23.54 | 23.14 | 85.51 | 85.11 | Off flood-path (heuristic) |
| Banmankhi Bazar | 34 | 171.8 | 30,336 | 25.8876 | 87.1936 | 26.09 | 25.69 | 87.39 | 86.99 | Downstream (heuristic - verify) |
| Banmankhi | 34 | 172.0 | 26,806 | 25.8886 | 87.1942 | 26.09 | 25.69 | 87.39 | 86.99 | Downstream (heuristic - verify) |
| Kenda | 28 | 172.5 | 15,131 | 23.1959 | 86.5150 | 23.4 | 23.0 | 86.71 | 86.31 | Off flood-path (heuristic) |
| Arrah | 34 | 173.2 | 261,430 | 25.5563 | 84.6633 | 25.76 | 25.36 | 84.86 | 84.46 | Off flood-path (heuristic) |
| Muzaffarpur | 34 | 173.5 | 354,462 | 26.1226 | 85.3906 | 26.32 | 25.92 | 85.59 | 85.19 | Off flood-path (heuristic) |
| Aurangābād | 34 | 174.4 | 102,244 | 24.7520 | 84.3742 | 24.95 | 24.55 | 84.57 | 84.17 | Off flood-path (heuristic) |
| Jhanjhārpur | 34 | 174.9 | 31,283 | 26.2647 | 86.2799 | 26.46 | 26.06 | 86.48 | 86.08 | Downstream (heuristic - verify) |
| Katihar | 34 | 175.0 | 240,838 | 25.5385 | 87.5704 | 25.74 | 25.34 | 87.77 | 87.37 | Downstream (heuristic - verify) |
| Daudnagar | 34 | 175.4 | 52,364 | 25.0347 | 84.4009 | 25.23 | 24.83 | 84.6 | 84.2 | Off flood-path (heuristic) |
| Pakur | 38 | 176.2 | 45,840 | 24.6393 | 87.8424 | 24.84 | 24.44 | 88.04 | 87.64 | Off flood-path (heuristic) |
| Balarāmpur | 28 | 178.7 | 22,847 | 23.0971 | 86.2229 | 23.3 | 22.9 | 86.42 | 86.02 | Off flood-path (heuristic) |
| Būndu | 38 | 178.8 | 21,054 | 23.1609 | 85.5901 | 23.36 | 22.96 | 85.79 | 85.39 | Off flood-path (heuristic) |
| Rājmahal | 38 | 178.9 | 22,514 | 25.0530 | 87.8305 | 25.25 | 24.85 | 88.03 | 87.63 | Downstream (heuristic - verify) |
| Ghogardīha | 34 | 179.6 | 18,257 | 26.2799 | 86.4700 | 26.48 | 26.08 | 86.67 | 86.27 | Downstream (heuristic - verify) |
| Durgapur | 28 | 179.9 | 518,872 | 23.5158 | 87.3080 | 23.72 | 23.32 | 87.51 | 87.11 | Off flood-path (heuristic) |
| Rampur Hat | 28 | 180.0 | 53,468 | 24.1774 | 87.7827 | 24.38 | 23.98 | 87.98 | 87.58 | Off flood-path (heuristic) |
| Nalhāti | 28 | 180.6 | 25,878 | 24.2970 | 87.8290 | 24.5 | 24.1 | 88.03 | 87.63 | Off flood-path (heuristic) |
| Sainthia | 28 | 180.6 | 43,221 | 23.9483 | 87.6804 | 24.15 | 23.75 | 87.88 | 87.48 | Off flood-path (heuristic) |
| Chāpra | 34 | 181.5 | 202,352 | 25.7803 | 84.7471 | 25.98 | 25.58 | 84.95 | 84.55 | Off flood-path (heuristic) |
| Farakka | 28 | 182.2 | 21,834 | 24.8167 | 87.9000 | 25.02 | 24.62 | 88.1 | 87.7 | Downstream (heuristic - verify) |
| Nāsriganj | 34 | 182.9 | 23,819 | 25.0514 | 84.3284 | 25.25 | 24.85 | 84.53 | 84.13 | Off flood-path (heuristic) |
| Purnia | 34 | 183.0 | 282,248 | 25.7789 | 87.4742 | 25.98 | 25.58 | 87.67 | 87.27 | Downstream (heuristic - verify) |
| Madhubani | 34 | 183.9 | 75,736 | 26.3537 | 86.0717 | 26.55 | 26.15 | 86.27 | 85.87 | Downstream (heuristic - verify) |
| Piro | 34 | 184.7 | 33,785 | 25.3322 | 84.4045 | 25.53 | 25.13 | 84.6 | 84.2 | Off flood-path (heuristic) |
| Nirmāli | 34 | 186.0 | 20,189 | 26.3140 | 86.5854 | 26.51 | 26.11 | 86.79 | 86.39 | Downstream (heuristic - verify) |
| Kantai | 34 | 186.7 | 25,051 | 26.2142 | 85.2975 | 26.41 | 26.01 | 85.5 | 85.1 | Off flood-path (heuristic) |
| Dhuliān | 28 | 187.3 | 77,070 | 24.6813 | 87.9535 | 24.88 | 24.48 | 88.15 | 87.75 | Off flood-path (heuristic) |
| Marhaura | 34 | 188.1 | 29,932 | 25.9735 | 84.8680 | 26.17 | 25.77 | 85.07 | 84.67 | Off flood-path (heuristic) |
| Jagdīspur | 34 | 189.6 | 32,447 | 25.4681 | 84.4194 | 25.67 | 25.27 | 84.62 | 84.22 | Off flood-path (heuristic) |
| Revelganj | 34 | 190.7 | 39,039 | 25.7898 | 84.6360 | 25.99 | 25.59 | 84.84 | 84.44 | Off flood-path (heuristic) |
| Bānkura | 28 | 190.7 | 133,966 | 23.2324 | 87.0716 | 23.43 | 23.03 | 87.27 | 86.87 | Off flood-path (heuristic) |
| Chhātāpur | 34 | 191.8 | 23,425 | 26.2197 | 87.0048 | 26.42 | 26.02 | 87.2 | 86.8 | Downstream (heuristic - verify) |
| Bela | 34 | 193.2 | 26,707 | 25.5571 | 84.4308 | 25.76 | 25.36 | 84.63 | 84.23 | Off flood-path (heuristic) |
| Kasba | 34 | 193.5 | 30,421 | 25.8564 | 87.5384 | 26.06 | 25.66 | 87.74 | 87.34 | Downstream (heuristic - verify) |
| Lātehār | 38 | 194.0 | 26,981 | 23.7442 | 84.4998 | 23.94 | 23.54 | 84.7 | 84.3 | Off flood-path (heuristic) |
| Madhurampur Dehri | 34 | 194.4 | 137,231 | 24.9690 | 84.1964 | 25.17 | 24.77 | 84.4 | 84.0 | Off flood-path (heuristic) |
| Bikramganj | 34 | 194.5 | 48,465 | 25.2107 | 84.2551 | 25.41 | 25.01 | 84.46 | 84.06 | Off flood-path (heuristic) |
| Motipur | 34 | 196.7 | 28,572 | 26.2527 | 85.1608 | 26.45 | 26.05 | 85.36 | 84.96 | Off flood-path (heuristic) |
| Shāhpur | 34 | 198.0 | 17,767 | 25.6029 | 84.4041 | 25.8 | 25.4 | 84.6 | 84.2 | Off flood-path (heuristic) |
| Koāth | 34 | 198.1 | 18,890 | 25.3264 | 84.2598 | 25.53 | 25.13 | 84.46 | 84.06 | Off flood-path (heuristic) |
| Bolpur | 28 | 198.9 | 70,998 | 23.6628 | 87.6970 | 23.86 | 23.46 | 87.9 | 87.5 | Off flood-path (heuristic) |
| Khunti | 38 | 199.0 | 36,390 | 23.0760 | 85.2782 | 23.28 | 22.88 | 85.48 | 85.08 | Off flood-path (heuristic) |
| Nabīnagar | 34 | 199.7 | 23,984 | 24.6068 | 84.1262 | 24.81 | 24.41 | 84.33 | 83.93 | Off flood-path (heuristic) |

## Nagarjuna Sagar Dam (Andhra Pradesh/Telangana)
Dam coordinates: 16.57, 79.31

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Vijayapuri North | 40 | 2.0 | 15,887 | 16.5853 | 79.3205 | 16.79 | 16.39 | 79.52 | 79.12 | Off flood-path (heuristic) |
| Mācherla | 02 | 16.9 | 57,290 | 16.4764 | 79.4353 | 16.68 | 16.28 | 79.64 | 79.24 | Downstream (heuristic - verify) |
| Miryalaguda | 40 | 43.0 | 104,918 | 16.8722 | 79.5625 | 17.07 | 16.67 | 79.76 | 79.36 | Off flood-path (heuristic) |
| Devarkonda | 40 | 43.6 | 29,731 | 16.6919 | 78.9207 | 16.89 | 16.49 | 79.12 | 78.72 | Off flood-path (heuristic) |
| Nalgonda | 40 | 54.1 | 154,326 | 17.0544 | 79.2671 | 17.25 | 16.85 | 79.47 | 79.07 | Off flood-path (heuristic) |
| Pidugurālla | 02 | 62.3 | 63,103 | 16.4793 | 79.8863 | 16.68 | 16.28 | 80.09 | 79.69 | Downstream (heuristic - verify) |
| Nakrekal | 40 | 67.1 | 29,126 | 17.1626 | 79.4275 | 17.36 | 16.96 | 79.63 | 79.23 | Off flood-path (heuristic) |
| Suriāpet | 40 | 71.5 | 111,729 | 17.1405 | 79.6205 | 17.34 | 16.94 | 79.82 | 79.42 | Off flood-path (heuristic) |
| Srisailam Project RFC Township | 02 | 72.2 | 21,452 | 16.0733 | 78.8741 | 16.27 | 15.87 | 79.07 | 78.67 | Off flood-path (heuristic) |
| Srīsailain | 02 | 72.7 | 24,142 | 16.0722 | 78.8682 | 16.27 | 15.87 | 79.07 | 78.67 | Off flood-path (heuristic) |
| Vinukonda | 02 | 73.5 | 62,550 | 16.0531 | 79.7396 | 16.25 | 15.85 | 79.94 | 79.54 | Downstream (heuristic - verify) |
| Achampet | 40 | 74.2 | 20,721 | 16.3982 | 78.6376 | 16.6 | 16.2 | 78.84 | 78.44 | Off flood-path (heuristic) |
| Kodār | 40 | 84.5 | 64,234 | 16.9985 | 79.9656 | 17.2 | 16.8 | 80.17 | 79.77 | Off flood-path (heuristic) |
| Narasaraopet | 02 | 87.2 | 117,489 | 16.2349 | 80.0493 | 16.43 | 16.03 | 80.25 | 79.85 | Downstream (heuristic - verify) |
| Kalwākurti | 40 | 87.8 | 28,060 | 16.6640 | 78.4914 | 16.86 | 16.46 | 78.69 | 78.29 | Off flood-path (heuristic) |
| Chautāpal | 40 | 88.2 | 19,092 | 17.2580 | 78.8978 | 17.46 | 17.06 | 79.1 | 78.7 | Off flood-path (heuristic) |
| Jaggaiahpet | 02 | 91.0 | 53,530 | 16.8915 | 80.0955 | 17.09 | 16.69 | 80.3 | 79.9 | Downstream (heuristic - verify) |
| Jaggayyapeta | 02 | 91.3 | 41,180 | 16.8938 | 80.0981 | 17.09 | 16.69 | 80.3 | 79.9 | Downstream (heuristic - verify) |
| Sattenapalle | 02 | 91.9 | 56,721 | 16.3938 | 80.1522 | 16.59 | 16.19 | 80.35 | 79.95 | Downstream (heuristic - verify) |
| Mārkāpur | 02 | 92.9 | 71,092 | 15.7353 | 79.2685 | 15.94 | 15.54 | 79.47 | 79.07 | Off flood-path (heuristic) |
| Darsi | 02 | 97.3 | 33,418 | 15.7698 | 79.6794 | 15.97 | 15.57 | 79.88 | 79.48 | Downstream (heuristic - verify) |
| Nāgar Karnūl | 40 | 105.5 | 29,439 | 16.4821 | 78.3247 | 16.68 | 16.28 | 78.52 | 78.12 | Off flood-path (heuristic) |
| Chilakalūrupet | 02 | 105.9 | 101,398 | 16.0899 | 80.1671 | 16.29 | 15.89 | 80.37 | 79.97 | Downstream (heuristic - verify) |
| Phirangipuram | 02 | 106.2 | 17,335 | 16.2908 | 80.2623 | 16.49 | 16.09 | 80.46 | 80.06 | Downstream (heuristic - verify) |
| Nandigāma | 02 | 106.4 | 38,219 | 16.7717 | 80.2860 | 16.97 | 16.57 | 80.49 | 80.09 | Downstream (heuristic - verify) |
| Atmakūr | 02 | 108.7 | 35,137 | 15.8811 | 78.5870 | 16.08 | 15.68 | 78.79 | 78.39 | Off flood-path (heuristic) |
| Yamjāl | 40 | 110.2 | 15,689 | 17.2694 | 78.5767 | 17.47 | 17.07 | 78.78 | 78.38 | Off flood-path (heuristic) |
| Addanki | 02 | 110.2 | 28,547 | 15.8106 | 79.9734 | 16.01 | 15.61 | 80.17 | 79.77 | Downstream (heuristic - verify) |
| Cumbum | 02 | 111.9 | 22,653 | 15.5817 | 79.1106 | 15.78 | 15.38 | 79.31 | 78.91 | Off flood-path (heuristic) |
| Podili | 02 | 112.0 | 31,145 | 15.6064 | 79.6149 | 15.81 | 15.41 | 79.81 | 79.41 | Off flood-path (heuristic) |
| Bhongīr | 40 | 114.4 | 53,339 | 17.5154 | 78.8856 | 17.72 | 17.32 | 79.09 | 78.69 | Off flood-path (heuristic) |
| Khammam | 40 | 116.4 | 196,283 | 17.2477 | 80.1437 | 17.45 | 17.05 | 80.34 | 79.94 | Off flood-path (heuristic) |
| Meerpet | 40 | 117.7 | 32,013 | 17.3210 | 78.5305 | 17.52 | 17.12 | 78.73 | 78.33 | Off flood-path (heuristic) |
| Lal Bahadur Nagar | 40 | 117.8 | 261,987 | 17.3477 | 78.5576 | 17.55 | 17.15 | 78.76 | 78.36 | Off flood-path (heuristic) |
| Ghatkesar | 40 | 118.4 | 19,763 | 17.4508 | 78.6837 | 17.65 | 17.25 | 78.88 | 78.48 | Off flood-path (heuristic) |
| Torūr | 40 | 118.6 | 19,100 | 17.5835 | 79.6586 | 17.78 | 17.38 | 79.86 | 79.46 | Off flood-path (heuristic) |
| Madhira | 40 | 118.8 | 22,716 | 16.9233 | 80.3631 | 17.12 | 16.72 | 80.56 | 80.16 | Downstream (heuristic - verify) |
| Jilādiguda | 40 | 118.9 | 27,461 | 17.3320 | 78.5255 | 17.53 | 17.13 | 78.73 | 78.33 | Off flood-path (heuristic) |
| Khanapuram Haveli | 40 | 119.4 | 53,442 | 17.2624 | 80.1681 | 17.46 | 17.06 | 80.37 | 79.97 | Off flood-path (heuristic) |
| Pīrzādagūda | 40 | 119.4 | 32,586 | 17.3945 | 78.5905 | 17.59 | 17.19 | 78.79 | 78.39 | Off flood-path (heuristic) |
| Yadagirigutta | 40 | 119.8 | 15,232 | 17.5889 | 78.9434 | 17.79 | 17.39 | 79.14 | 78.74 | Off flood-path (heuristic) |
| Shamshabad | 40 | 121.4 | 32,583 | 17.2519 | 78.4184 | 17.45 | 17.05 | 78.62 | 78.22 | Off flood-path (heuristic) |
| Gaddi Annaram | 40 | 121.8 | 53,622 | 17.3669 | 78.5242 | 17.57 | 17.17 | 78.72 | 78.32 | Off flood-path (heuristic) |
| Bodupāl | 40 | 121.9 | 43,692 | 17.4188 | 78.5843 | 17.62 | 17.22 | 78.78 | 78.38 | Off flood-path (heuristic) |
| Uppal Kalan | 40 | 122.5 | 118,259 | 17.4058 | 78.5591 | 17.61 | 17.21 | 78.76 | 78.36 | Off flood-path (heuristic) |
| Bādepalli | 40 | 125.9 | 32,598 | 16.7549 | 78.1443 | 16.95 | 16.55 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Guntur | 02 | 126.0 | 670,073 | 16.2997 | 80.4573 | 16.5 | 16.1 | 80.66 | 80.26 | Downstream (heuristic - verify) |
| Nāgāvaram | 40 | 126.9 | 30,502 | 17.4886 | 78.6021 | 17.69 | 17.29 | 78.8 | 78.4 | Off flood-path (heuristic) |
| Jadcherla | 40 | 127.0 | 17,958 | 16.7738 | 78.1367 | 16.97 | 16.57 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Hyderabad | 40 | 128.2 | 6,993,262 | 17.3840 | 78.4564 | 17.58 | 17.18 | 78.66 | 78.26 | Off flood-path (heuristic) |
| Malkajgiri | 40 | 128.3 | 150,000 | 17.4478 | 78.5263 | 17.65 | 17.25 | 78.73 | 78.33 | Off flood-path (heuristic) |
| Ibrāhīmpatnam | 02 | 128.4 | 29,432 | 16.5830 | 80.5143 | 16.78 | 16.38 | 80.71 | 80.31 | Downstream (heuristic - verify) |
| Amaravati | 02 | 128.7 | 103,000 | 16.5140 | 80.5160 | 16.71 | 16.31 | 80.72 | 80.32 | Downstream (heuristic - verify) |
| Rāniganj | 40 | 129.0 | 217,910 | 17.4284 | 78.4936 | 17.63 | 17.23 | 78.69 | 78.29 | Off flood-path (heuristic) |
| Jangaon | 40 | 129.6 | 52,394 | 17.7260 | 79.1524 | 17.93 | 17.53 | 79.35 | 78.95 | Off flood-path (heuristic) |
| Farrukhnagar | 40 | 130.6 | 45,675 | 17.0779 | 78.2034 | 17.28 | 16.88 | 78.4 | 78.0 | Off flood-path (heuristic) |
| Kanigiri U | 02 | 131.1 | 37,420 | 15.4064 | 79.5070 | 15.61 | 15.21 | 79.71 | 79.31 | Off flood-path (heuristic) |
| Jawaharnagar | 40 | 131.1 | 44,562 | 17.5100 | 78.5656 | 17.71 | 17.31 | 78.77 | 78.37 | Off flood-path (heuristic) |
| Kanigiri | 02 | 131.2 | 25,045 | 15.4055 | 79.5069 | 15.61 | 15.21 | 79.71 | 79.31 | Off flood-path (heuristic) |
| Kondapalle | 02 | 131.4 | 38,714 | 16.6199 | 80.5424 | 16.82 | 16.42 | 80.74 | 80.34 | Downstream (heuristic - verify) |
| Dornakal | 40 | 132.0 | 15,350 | 17.4447 | 80.1491 | 17.64 | 17.24 | 80.35 | 79.95 | Off flood-path (heuristic) |
| Secunderabad | 40 | 132.1 | 204,182 | 17.5043 | 78.5426 | 17.7 | 17.3 | 78.74 | 78.34 | Off flood-path (heuristic) |
| Wanparti | 40 | 134.2 | 60,949 | 16.3674 | 78.0689 | 16.57 | 16.17 | 78.27 | 77.87 | Off flood-path (heuristic) |
| Mangalagiri | 02 | 135.0 | 107,197 | 16.4308 | 80.5682 | 16.63 | 16.23 | 80.77 | 80.37 | Downstream (heuristic - verify) |
| Mahbūbābād | 40 | 135.9 | 42,851 | 17.5973 | 80.0021 | 17.8 | 17.4 | 80.2 | 79.8 | Off flood-path (heuristic) |
| Srīrāmnagar | 40 | 136.3 | 19,550 | 17.2665 | 78.2554 | 17.47 | 17.07 | 78.46 | 78.06 | Off flood-path (heuristic) |
| Nandikotkūr | 02 | 136.8 | 45,343 | 15.8567 | 78.2657 | 16.06 | 15.66 | 78.47 | 78.07 | Off flood-path (heuristic) |
| Quthbullapur | 40 | 137.5 | 225,816 | 17.5011 | 78.4582 | 17.7 | 17.3 | 78.66 | 78.26 | Off flood-path (heuristic) |
| Vetapālem | 02 | 137.6 | 38,671 | 15.7850 | 80.3066 | 15.99 | 15.59 | 80.51 | 80.11 | Downstream (heuristic - verify) |
| Tādepalle | 02 | 137.9 | 64,149 | 16.4833 | 80.6000 | 16.68 | 16.28 | 80.8 | 80.4 | Downstream (heuristic - verify) |
| Chīrāla | 02 | 138.8 | 92,942 | 15.8239 | 80.3522 | 16.02 | 15.62 | 80.55 | 80.15 | Downstream (heuristic - verify) |
| Giddalūr | 02 | 139.1 | 35,150 | 15.3744 | 78.9261 | 15.57 | 15.17 | 79.13 | 78.73 | Off flood-path (heuristic) |
| Kompalli | 40 | 139.2 | 15,575 | 17.5450 | 78.4884 | 17.74 | 17.34 | 78.69 | 78.29 | Off flood-path (heuristic) |
| Kukatpally | 40 | 139.4 | 341,709 | 17.4849 | 78.4138 | 17.68 | 17.28 | 78.61 | 78.21 | Off flood-path (heuristic) |
| Ongole | 02 | 142.2 | 208,344 | 15.5036 | 80.0445 | 15.7 | 15.3 | 80.24 | 79.84 | Downstream (heuristic - verify) |
| Mahbūbnagar | 40 | 142.4 | 190,400 | 16.7438 | 77.9860 | 16.94 | 16.54 | 78.19 | 77.79 | Off flood-path (heuristic) |
| Vijayawada | 02 | 142.6 | 1,143,232 | 16.5074 | 80.6466 | 16.71 | 16.31 | 80.85 | 80.45 | Downstream (heuristic - verify) |
| Ponnur | 02 | 143.4 | 59,913 | 16.0711 | 80.5494 | 16.27 | 15.87 | 80.75 | 80.35 | Downstream (heuristic - verify) |
| Ponnūru | 02 | 143.9 | 57,170 | 16.0655 | 80.5520 | 16.27 | 15.87 | 80.75 | 80.35 | Downstream (heuristic - verify) |
| Bāpatla | 02 | 144.0 | 70,777 | 15.9042 | 80.4674 | 16.1 | 15.7 | 80.67 | 80.27 | Downstream (heuristic - verify) |
| Yanamalakuduru | 02 | 145.0 | 34,177 | 16.4853 | 80.6675 | 16.69 | 16.29 | 80.87 | 80.47 | Downstream (heuristic - verify) |
| Rāmavarappādu | 02 | 146.2 | 22,222 | 16.5209 | 80.6808 | 16.72 | 16.32 | 80.88 | 80.48 | Downstream (heuristic - verify) |
| Thenali | 02 | 146.4 | 164,937 | 16.2425 | 80.6398 | 16.44 | 16.04 | 80.84 | 80.44 | Downstream (heuristic - verify) |
| Medchal | 40 | 147.1 | 35,611 | 17.6297 | 78.4814 | 17.83 | 17.43 | 78.68 | 78.28 | Off flood-path (heuristic) |
| Bāspalli | 40 | 147.4 | 27,563 | 17.5391 | 78.3636 | 17.74 | 17.34 | 78.56 | 78.16 | Off flood-path (heuristic) |
| Kānūru | 02 | 147.5 | 49,006 | 16.4985 | 80.6914 | 16.7 | 16.3 | 80.89 | 80.49 | Downstream (heuristic - verify) |
| Kothakota | 40 | 147.6 | 19,042 | 16.3800 | 77.9400 | 16.58 | 16.18 | 78.14 | 77.74 | Off flood-path (heuristic) |
| Tādigadapa | 02 | 148.3 | 17,462 | 16.4713 | 80.6970 | 16.67 | 16.27 | 80.9 | 80.5 | Downstream (heuristic - verify) |
| Serilingampalle | 40 | 148.4 | 150,525 | 17.4931 | 78.3020 | 17.69 | 17.29 | 78.5 | 78.1 | Off flood-path (heuristic) |
| Amīnpur | 40 | 149.2 | 36,452 | 17.5242 | 78.3227 | 17.72 | 17.32 | 78.52 | 78.12 | Off flood-path (heuristic) |
| Poranki | 02 | 149.3 | 25,545 | 16.4777 | 80.7075 | 16.68 | 16.28 | 80.91 | 80.51 | Downstream (heuristic - verify) |
| Bolārum | 40 | 149.9 | 34,667 | 17.5561 | 78.3482 | 17.76 | 17.36 | 78.55 | 78.15 | Off flood-path (heuristic) |
| Nandyāl | 02 | 150.1 | 211,424 | 15.4780 | 78.4836 | 15.68 | 15.28 | 78.68 | 78.28 | Off flood-path (heuristic) |
| Nadim Tiruvuru | 02 | 150.8 | 18,567 | 17.1121 | 80.6088 | 17.31 | 16.91 | 80.81 | 80.41 | Downstream (heuristic - verify) |
| Rāmachandrapuran | 40 | 150.9 | 15,381 | 17.5126 | 78.2885 | 17.71 | 17.31 | 78.49 | 78.09 | Off flood-path (heuristic) |
| Patancheru | 40 | 154.4 | 46,821 | 17.5333 | 78.2645 | 17.73 | 17.33 | 78.46 | 78.06 | Off flood-path (heuristic) |
| Yellandu | 40 | 156.3 | 43,787 | 17.5906 | 80.3215 | 17.79 | 17.39 | 80.52 | 80.12 | Off flood-path (heuristic) |
| Gajwel | 40 | 157.0 | 24,961 | 17.8482 | 78.6829 | 18.05 | 17.65 | 78.88 | 78.48 | Off flood-path (heuristic) |
| Kurnool | 02 | 159.0 | 460,184 | 15.8289 | 78.0360 | 16.03 | 15.63 | 78.24 | 77.84 | Off flood-path (heuristic) |
| Gannavaram | 02 | 159.1 | 19,410 | 16.5409 | 80.8021 | 16.74 | 16.34 | 81.0 | 80.6 | Downstream (heuristic - verify) |
| Māmidālapādu | 02 | 159.6 | 26,694 | 15.8541 | 78.0148 | 16.05 | 15.65 | 78.21 | 77.81 | Off flood-path (heuristic) |
| Singāpur | 40 | 160.8 | 24,457 | 17.4698 | 78.1257 | 17.67 | 17.27 | 78.33 | 77.93 | Off flood-path (heuristic) |
| Warangal | 40 | 161.6 | 704,570 | 18.0000 | 79.5833 | 18.2 | 17.8 | 79.78 | 79.38 | Off flood-path (heuristic) |
| Narsampet | 40 | 163.2 | 30,963 | 17.9279 | 79.8923 | 18.13 | 17.73 | 80.09 | 79.69 | Off flood-path (heuristic) |
| Kandukūr | 02 | 163.5 | 57,246 | 15.2154 | 79.9039 | 15.42 | 15.02 | 80.1 | 79.7 | Downstream (heuristic - verify) |
| Pāmūru | 02 | 164.2 | 20,000 | 15.0963 | 79.4117 | 15.3 | 14.9 | 79.61 | 79.21 | Off flood-path (heuristic) |
| Vuyyūru | 02 | 165.2 | 36,755 | 16.3631 | 80.8441 | 16.56 | 16.16 | 81.04 | 80.64 | Downstream (heuristic - verify) |
| Bhattiprolu | 02 | 165.3 | 18,001 | 16.1026 | 80.7807 | 16.3 | 15.9 | 80.98 | 80.58 | Downstream (heuristic - verify) |
| Nūzvīd | 02 | 165.4 | 58,590 | 16.7885 | 80.8459 | 16.99 | 16.59 | 81.05 | 80.65 | Downstream (heuristic - verify) |
| Gadwāl | 40 | 165.8 | 63,177 | 16.2350 | 77.7956 | 16.44 | 16.04 | 78.0 | 77.6 | Off flood-path (heuristic) |
| Singarāyakonda | 02 | 167.6 | 19,400 | 15.2305 | 80.0279 | 15.43 | 15.03 | 80.23 | 79.83 | Downstream (heuristic - verify) |
| Vikārābād | 40 | 172.2 | 53,143 | 17.3381 | 77.9044 | 17.54 | 17.14 | 78.1 | 77.7 | Off flood-path (heuristic) |
| Repalle | 02 | 173.4 | 50,866 | 16.0184 | 80.8296 | 16.22 | 15.82 | 81.03 | 80.63 | Downstream (heuristic - verify) |
| Chunchupally | 40 | 173.7 | 19,944 | 17.5233 | 80.6041 | 17.72 | 17.32 | 80.8 | 80.4 | Off flood-path (heuristic) |
| Sangāreddi | 40 | 175.1 | 72,344 | 17.6248 | 78.0867 | 17.82 | 17.42 | 78.29 | 77.89 | Off flood-path (heuristic) |
| Betamcherla | 02 | 175.8 | 38,994 | 15.4514 | 78.1480 | 15.65 | 15.25 | 78.35 | 77.95 | Off flood-path (heuristic) |
| Kottagūdem | 40 | 176.7 | 79,819 | 17.5511 | 80.6178 | 17.75 | 17.35 | 80.82 | 80.42 | Off flood-path (heuristic) |
| Sādpalli | 40 | 177.3 | 31,857 | 17.2099 | 80.8364 | 17.41 | 17.01 | 81.04 | 80.64 | Downstream (heuristic - verify) |
| Siddipet | 40 | 177.6 | 66,737 | 18.1048 | 78.8486 | 18.3 | 17.9 | 79.05 | 78.65 | Off flood-path (heuristic) |
| Challapalle | 02 | 180.2 | 16,841 | 16.1176 | 80.9314 | 16.32 | 15.92 | 81.13 | 80.73 | Downstream (heuristic - verify) |
| Gudivāda | 02 | 180.3 | 118,167 | 16.4355 | 80.9955 | 16.64 | 16.24 | 81.2 | 80.8 | Downstream (heuristic - verify) |
| Banganapalle | 02 | 181.1 | 25,325 | 15.3177 | 78.2267 | 15.52 | 15.12 | 78.43 | 78.03 | Off flood-path (heuristic) |
| Avanigadda | 02 | 182.1 | 25,761 | 16.0215 | 80.9181 | 16.22 | 15.82 | 81.12 | 80.72 | Downstream (heuristic - verify) |
| Sathupalli | 40 | 182.3 | 40,000 | 17.2497 | 80.8690 | 17.45 | 17.05 | 81.07 | 80.67 | Downstream (heuristic - verify) |
| Palwancha | 40 | 183.7 | 80,199 | 17.5815 | 80.6765 | 17.78 | 17.38 | 80.88 | 80.48 | Off flood-path (heuristic) |
| Sadasivpet | 40 | 185.5 | 47,920 | 17.6193 | 77.9526 | 17.82 | 17.42 | 78.15 | 77.75 | Off flood-path (heuristic) |
| Pāloncha | 40 | 187.5 | 75,224 | 17.6018 | 80.7051 | 17.8 | 17.4 | 80.91 | 80.51 | Off flood-path (heuristic) |
| Andol | 40 | 190.5 | 24,645 | 17.8146 | 78.0771 | 18.01 | 17.61 | 78.28 | 77.88 | Off flood-path (heuristic) |
| Eluru | 02 | 191.8 | 218,020 | 16.7131 | 81.1044 | 16.91 | 16.51 | 81.3 | 80.9 | Downstream (heuristic - verify) |
| Mulugu | 40 | 192.4 | 297,671 | 18.1910 | 79.9430 | 18.39 | 17.99 | 80.14 | 79.74 | Off flood-path (heuristic) |
| Jogipet | 40 | 192.9 | 18,494 | 17.8356 | 78.0681 | 18.04 | 17.64 | 78.27 | 77.87 | Off flood-path (heuristic) |
| Nārāyanpet | 40 | 194.3 | 41,752 | 16.7480 | 77.4954 | 16.95 | 16.55 | 77.7 | 77.3 | Off flood-path (heuristic) |
| Kāvali | 02 | 197.9 | 90,099 | 14.9163 | 79.9945 | 15.12 | 14.72 | 80.19 | 79.79 | Downstream (heuristic - verify) |
| Medak | 40 | 198.3 | 46,880 | 18.0453 | 78.2608 | 18.25 | 17.85 | 78.46 | 78.06 | Off flood-path (heuristic) |
| Pedana | 02 | 198.7 | 30,721 | 16.2558 | 81.1438 | 16.46 | 16.06 | 81.34 | 80.94 | Downstream (heuristic - verify) |
| Tandur | 40 | 199.2 | 65,115 | 17.2485 | 77.5770 | 17.45 | 17.05 | 77.78 | 77.38 | Off flood-path (heuristic) |
| Machilīpatnam | 02 | 199.7 | 192,827 | 16.1875 | 81.1389 | 16.39 | 15.99 | 81.34 | 80.94 | Downstream (heuristic - verify) |

## Srisailam Dam (Andhra Pradesh)
Dam coordinates: 16.08, 78.87

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Srisailam Project RFC Township | 02 | 0.9 | 21,452 | 16.0733 | 78.8741 | 16.27 | 15.87 | 79.07 | 78.67 | Downstream (heuristic - verify) |
| Srīsailain | 02 | 0.9 | 24,142 | 16.0722 | 78.8682 | 16.27 | 15.87 | 79.07 | 78.67 | Off flood-path (heuristic) |
| Atmakūr | 02 | 37.5 | 35,137 | 15.8811 | 78.5870 | 16.08 | 15.68 | 78.79 | 78.39 | Off flood-path (heuristic) |
| Achampet | 40 | 43.2 | 20,721 | 16.3982 | 78.6376 | 16.6 | 16.2 | 78.84 | 78.44 | Off flood-path (heuristic) |
| Mārkāpur | 02 | 57.3 | 71,092 | 15.7353 | 79.2685 | 15.94 | 15.54 | 79.47 | 79.07 | Downstream (heuristic - verify) |
| Cumbum | 02 | 61.1 | 22,653 | 15.5817 | 79.1106 | 15.78 | 15.38 | 79.31 | 78.91 | Off flood-path (heuristic) |
| Devarkonda | 40 | 68.3 | 29,731 | 16.6919 | 78.9207 | 16.89 | 16.49 | 79.12 | 78.72 | Off flood-path (heuristic) |
| Nandikotkūr | 02 | 69.2 | 45,343 | 15.8567 | 78.2657 | 16.06 | 15.66 | 78.47 | 78.07 | Off flood-path (heuristic) |
| Nāgar Karnūl | 40 | 73.4 | 29,439 | 16.4821 | 78.3247 | 16.68 | 16.28 | 78.52 | 78.12 | Off flood-path (heuristic) |
| Vijayapuri North | 40 | 73.9 | 15,887 | 16.5853 | 79.3205 | 16.79 | 16.39 | 79.52 | 79.12 | Off flood-path (heuristic) |
| Mācherla | 02 | 74.7 | 57,290 | 16.4764 | 79.4353 | 16.68 | 16.28 | 79.64 | 79.24 | Downstream (heuristic - verify) |
| Kalwākurti | 40 | 76.5 | 28,060 | 16.6640 | 78.4914 | 16.86 | 16.46 | 78.69 | 78.29 | Off flood-path (heuristic) |
| Nandyāl | 02 | 78.7 | 211,424 | 15.4780 | 78.4836 | 15.68 | 15.28 | 78.68 | 78.28 | Off flood-path (heuristic) |
| Giddalūr | 02 | 78.7 | 35,150 | 15.3744 | 78.9261 | 15.57 | 15.17 | 79.13 | 78.73 | Off flood-path (heuristic) |
| Wanparti | 40 | 91.3 | 60,949 | 16.3674 | 78.0689 | 16.57 | 16.17 | 78.27 | 77.87 | Off flood-path (heuristic) |
| Vinukonda | 02 | 93.0 | 62,550 | 16.0531 | 79.7396 | 16.25 | 15.85 | 79.94 | 79.54 | Downstream (heuristic - verify) |
| Darsi | 02 | 93.2 | 33,418 | 15.7698 | 79.6794 | 15.97 | 15.57 | 79.88 | 79.48 | Downstream (heuristic - verify) |
| Kurnool | 02 | 93.4 | 460,184 | 15.8289 | 78.0360 | 16.03 | 15.63 | 78.24 | 77.84 | Off flood-path (heuristic) |
| Māmidālapādu | 02 | 94.8 | 26,694 | 15.8541 | 78.0148 | 16.05 | 15.65 | 78.21 | 77.81 | Off flood-path (heuristic) |
| Podili | 02 | 95.5 | 31,145 | 15.6064 | 79.6149 | 15.81 | 15.41 | 79.81 | 79.41 | Downstream (heuristic - verify) |
| Kanigiri U | 02 | 101.3 | 37,420 | 15.4064 | 79.5070 | 15.61 | 15.21 | 79.71 | 79.31 | Downstream (heuristic - verify) |
| Kanigiri | 02 | 101.3 | 25,045 | 15.4055 | 79.5069 | 15.61 | 15.21 | 79.71 | 79.31 | Downstream (heuristic - verify) |
| Betamcherla | 02 | 104.2 | 38,994 | 15.4514 | 78.1480 | 15.65 | 15.25 | 78.35 | 77.95 | Off flood-path (heuristic) |
| Kothakota | 40 | 104.7 | 19,042 | 16.3800 | 77.9400 | 16.58 | 16.18 | 78.14 | 77.74 | Off flood-path (heuristic) |
| Bādepalli | 40 | 107.8 | 32,598 | 16.7549 | 78.1443 | 16.95 | 16.55 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Banganapalle | 02 | 109.2 | 25,325 | 15.3177 | 78.2267 | 15.52 | 15.12 | 78.43 | 78.03 | Off flood-path (heuristic) |
| Jadcherla | 40 | 109.9 | 17,958 | 16.7738 | 78.1367 | 16.97 | 16.57 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Miryalaguda | 40 | 114.9 | 104,918 | 16.8722 | 79.5625 | 17.07 | 16.67 | 79.76 | 79.36 | Off flood-path (heuristic) |
| Gadwāl | 40 | 116.0 | 63,177 | 16.2350 | 77.7956 | 16.44 | 16.04 | 78.0 | 77.6 | Off flood-path (heuristic) |
| Nalgonda | 40 | 116.3 | 154,326 | 17.0544 | 79.2671 | 17.25 | 16.85 | 79.47 | 79.07 | Off flood-path (heuristic) |
| Pidugurālla | 02 | 117.2 | 63,103 | 16.4793 | 79.8863 | 16.68 | 16.28 | 80.09 | 79.69 | Downstream (heuristic - verify) |
| Mahbūbnagar | 40 | 119.8 | 190,400 | 16.7438 | 77.9860 | 16.94 | 16.54 | 78.19 | 77.79 | Off flood-path (heuristic) |
| Addanki | 02 | 121.7 | 28,547 | 15.8106 | 79.9734 | 16.01 | 15.61 | 80.17 | 79.77 | Downstream (heuristic - verify) |
| Pāmūru | 02 | 123.8 | 20,000 | 15.0963 | 79.4117 | 15.3 | 14.9 | 79.61 | 79.21 | Off flood-path (heuristic) |
| Narasaraopet | 02 | 127.1 | 117,489 | 16.2349 | 80.0493 | 16.43 | 16.03 | 80.25 | 79.85 | Downstream (heuristic - verify) |
| Chautāpal | 40 | 131.0 | 19,092 | 17.2580 | 78.8978 | 17.46 | 17.06 | 79.1 | 78.7 | Off flood-path (heuristic) |
| Dhone | 02 | 131.2 | 59,272 | 15.3952 | 77.8715 | 15.6 | 15.2 | 78.07 | 77.67 | Off flood-path (heuristic) |
| Farrukhnagar | 40 | 131.8 | 45,675 | 17.0779 | 78.2034 | 17.28 | 16.88 | 78.4 | 78.0 | Off flood-path (heuristic) |
| Nakrekal | 40 | 134.2 | 29,126 | 17.1626 | 79.4275 | 17.36 | 16.96 | 79.63 | 79.23 | Off flood-path (heuristic) |
| Yamjāl | 40 | 135.9 | 15,689 | 17.2694 | 78.5767 | 17.47 | 17.07 | 78.78 | 78.38 | Off flood-path (heuristic) |
| Chilakalūrupet | 02 | 138.6 | 101,398 | 16.0899 | 80.1671 | 16.29 | 15.89 | 80.37 | 79.97 | Downstream (heuristic - verify) |
| Shamshabad | 40 | 138.9 | 32,583 | 17.2519 | 78.4184 | 17.45 | 17.05 | 78.62 | 78.22 | Off flood-path (heuristic) |
| Ongole | 02 | 141.1 | 208,344 | 15.5036 | 80.0445 | 15.7 | 15.3 | 80.24 | 79.84 | Downstream (heuristic - verify) |
| Sattenapalle | 02 | 141.3 | 56,721 | 16.3938 | 80.1522 | 16.59 | 16.19 | 80.35 | 79.95 | Downstream (heuristic - verify) |
| Suriāpet | 40 | 142.5 | 111,729 | 17.1405 | 79.6205 | 17.34 | 16.94 | 79.82 | 79.42 | Off flood-path (heuristic) |
| Meerpet | 40 | 142.7 | 32,013 | 17.3210 | 78.5305 | 17.52 | 17.12 | 78.73 | 78.33 | Off flood-path (heuristic) |
| Jilādiguda | 40 | 144.0 | 27,461 | 17.3320 | 78.5255 | 17.53 | 17.13 | 78.73 | 78.33 | Off flood-path (heuristic) |
| Lal Bahadur Nagar | 40 | 144.8 | 261,987 | 17.3477 | 78.5576 | 17.55 | 17.15 | 78.76 | 78.36 | Off flood-path (heuristic) |
| Kandukūr | 02 | 146.6 | 57,246 | 15.2154 | 79.9039 | 15.42 | 15.02 | 80.1 | 79.7 | Downstream (heuristic - verify) |
| Jammalamadugu | 02 | 146.7 | 46,069 | 14.8468 | 78.3831 | 15.05 | 14.65 | 78.58 | 78.18 | Off flood-path (heuristic) |
| Srīrāmnagar | 40 | 147.3 | 19,550 | 17.2665 | 78.2554 | 17.47 | 17.07 | 78.46 | 78.06 | Off flood-path (heuristic) |
| Gopavaram | 02 | 147.6 | 22,936 | 14.7841 | 78.5729 | 14.98 | 14.58 | 78.77 | 78.37 | Off flood-path (heuristic) |
| Gaddi Annaram | 40 | 147.8 | 53,622 | 17.3669 | 78.5242 | 17.57 | 17.17 | 78.72 | 78.32 | Off flood-path (heuristic) |
| Pīrzādagūda | 40 | 149.2 | 32,586 | 17.3945 | 78.5905 | 17.59 | 17.19 | 78.79 | 78.39 | Off flood-path (heuristic) |
| Badvel | 02 | 149.9 | 70,626 | 14.7451 | 79.0629 | 14.95 | 14.55 | 79.26 | 78.86 | Off flood-path (heuristic) |
| Phirangipuram | 02 | 150.5 | 17,335 | 16.2908 | 80.2623 | 16.49 | 16.09 | 80.46 | 80.06 | Downstream (heuristic - verify) |
| Uppal Kalan | 40 | 151.1 | 118,259 | 17.4058 | 78.5591 | 17.61 | 17.21 | 78.76 | 78.36 | Off flood-path (heuristic) |
| Hyderabad | 40 | 151.5 | 6,993,262 | 17.3840 | 78.4564 | 17.58 | 17.18 | 78.66 | 78.26 | Off flood-path (heuristic) |
| Proddatūr | 02 | 151.8 | 177,797 | 14.7502 | 78.5481 | 14.95 | 14.55 | 78.75 | 78.35 | Off flood-path (heuristic) |
| Bodupāl | 40 | 151.9 | 43,692 | 17.4188 | 78.5843 | 17.62 | 17.22 | 78.78 | 78.38 | Off flood-path (heuristic) |
| Emmiganūr | 02 | 152.2 | 95,149 | 15.7720 | 77.4835 | 15.97 | 15.57 | 77.68 | 77.28 | Off flood-path (heuristic) |
| Rameswaram | 02 | 153.1 | 19,483 | 14.7401 | 78.5426 | 14.94 | 14.54 | 78.74 | 78.34 | Off flood-path (heuristic) |
| Ghatkesar | 40 | 153.7 | 19,763 | 17.4508 | 78.6837 | 17.65 | 17.25 | 78.88 | 78.48 | Off flood-path (heuristic) |
| Kodār | 40 | 155.1 | 64,234 | 16.9985 | 79.9656 | 17.2 | 16.8 | 80.17 | 79.77 | Off flood-path (heuristic) |
| Rāniganj | 40 | 155.2 | 217,910 | 17.4284 | 78.4936 | 17.63 | 17.23 | 78.69 | 78.29 | Off flood-path (heuristic) |
| Singarāyakonda | 02 | 155.9 | 19,400 | 15.2305 | 80.0279 | 15.43 | 15.03 | 80.23 | 79.83 | Downstream (heuristic - verify) |
| Malkajgiri | 40 | 156.4 | 150,000 | 17.4478 | 78.5263 | 17.65 | 17.25 | 78.73 | 78.33 | Off flood-path (heuristic) |
| Vetapālem | 02 | 157.1 | 38,671 | 15.7850 | 80.3066 | 15.99 | 15.59 | 80.51 | 80.11 | Downstream (heuristic - verify) |
| Jaggaiahpet | 02 | 158.8 | 53,530 | 16.8915 | 80.0955 | 17.09 | 16.69 | 80.3 | 79.9 | Downstream (heuristic - verify) |
| Jaggayyapeta | 02 | 159.2 | 41,180 | 16.8938 | 80.0981 | 17.09 | 16.69 | 80.3 | 79.9 | Downstream (heuristic - verify) |
| Nāgāvaram | 40 | 159.2 | 30,502 | 17.4886 | 78.6021 | 17.69 | 17.29 | 78.8 | 78.4 | Off flood-path (heuristic) |
| Tadpatri | 02 | 159.6 | 108,171 | 14.9083 | 78.0103 | 15.11 | 14.71 | 78.21 | 77.81 | Off flood-path (heuristic) |
| Bhongīr | 40 | 159.6 | 53,339 | 17.5154 | 78.8856 | 17.72 | 17.32 | 79.09 | 78.69 | Off flood-path (heuristic) |
| Chīrāla | 02 | 161.0 | 92,942 | 15.8239 | 80.3522 | 16.02 | 15.62 | 80.55 | 80.15 | Downstream (heuristic - verify) |
| Secunderabad | 40 | 162.2 | 204,182 | 17.5043 | 78.5426 | 17.7 | 17.3 | 78.74 | 78.34 | Off flood-path (heuristic) |
| Jawaharnagar | 40 | 162.3 | 44,562 | 17.5100 | 78.5656 | 17.71 | 17.31 | 78.77 | 78.37 | Off flood-path (heuristic) |
| Rāichūr | 19 | 162.3 | 234,073 | 16.2055 | 77.3557 | 16.41 | 16.01 | 77.56 | 77.16 | Off flood-path (heuristic) |
| Kukatpally | 40 | 163.6 | 341,709 | 17.4849 | 78.4138 | 17.68 | 17.28 | 78.61 | 78.21 | Off flood-path (heuristic) |
| Quthbullapur | 40 | 164.0 | 225,816 | 17.5011 | 78.4582 | 17.7 | 17.3 | 78.66 | 78.26 | Off flood-path (heuristic) |
| Erraguntla | 02 | 164.1 | 32,574 | 14.6385 | 78.5397 | 14.84 | 14.44 | 78.74 | 78.34 | Off flood-path (heuristic) |
| Nārāyanpet | 40 | 164.4 | 41,752 | 16.7480 | 77.4954 | 16.95 | 16.55 | 77.7 | 77.3 | Off flood-path (heuristic) |
| Shaktinagar | 19 | 164.4 | 17,088 | 16.3649 | 77.3586 | 16.56 | 16.16 | 77.56 | 77.16 | Off flood-path (heuristic) |
| Kompalli | 40 | 167.9 | 15,575 | 17.5450 | 78.4884 | 17.74 | 17.34 | 78.69 | 78.29 | Off flood-path (heuristic) |
| Yadagirigutta | 40 | 168.0 | 15,232 | 17.5889 | 78.9434 | 17.79 | 17.39 | 79.14 | 78.74 | Off flood-path (heuristic) |
| Serilingampalle | 40 | 168.4 | 150,525 | 17.4931 | 78.3020 | 17.69 | 17.29 | 78.5 | 78.1 | Off flood-path (heuristic) |
| Nandigāma | 02 | 169.5 | 38,219 | 16.7717 | 80.2860 | 16.97 | 16.57 | 80.49 | 80.09 | Downstream (heuristic - verify) |
| Gooty | 02 | 169.9 | 48,658 | 15.1184 | 77.6378 | 15.32 | 14.92 | 77.84 | 77.44 | Off flood-path (heuristic) |
| Amīnpur | 40 | 170.8 | 36,452 | 17.5242 | 78.3227 | 17.72 | 17.32 | 78.52 | 78.12 | Off flood-path (heuristic) |
| Rāmachandrapuran | 40 | 170.9 | 15,381 | 17.5126 | 78.2885 | 17.71 | 17.31 | 78.49 | 78.09 | Off flood-path (heuristic) |
| Bāspalli | 40 | 171.0 | 27,563 | 17.5391 | 78.3636 | 17.74 | 17.34 | 78.56 | 78.16 | Off flood-path (heuristic) |
| Guntur | 02 | 171.3 | 670,073 | 16.2997 | 80.4573 | 16.5 | 16.1 | 80.66 | 80.26 | Downstream (heuristic - verify) |
| Bāpatla | 02 | 171.9 | 70,777 | 15.9042 | 80.4674 | 16.1 | 15.7 | 80.67 | 80.27 | Downstream (heuristic - verify) |
| Bolārum | 40 | 173.3 | 34,667 | 17.5561 | 78.3482 | 17.76 | 17.36 | 78.55 | 78.15 | Off flood-path (heuristic) |
| Vikārābād | 40 | 173.6 | 53,143 | 17.3381 | 77.9044 | 17.54 | 17.14 | 78.1 | 77.7 | Off flood-path (heuristic) |
| Singāpur | 40 | 173.7 | 24,457 | 17.4698 | 78.1257 | 17.67 | 17.27 | 78.33 | 77.93 | Off flood-path (heuristic) |
| Patancheru | 40 | 174.0 | 46,821 | 17.5333 | 78.2645 | 17.73 | 17.33 | 78.46 | 78.06 | Off flood-path (heuristic) |
| Kosigi | 02 | 175.5 | 15,455 | 15.8551 | 77.2446 | 16.06 | 15.66 | 77.44 | 77.04 | Off flood-path (heuristic) |
| Kāvali | 02 | 176.8 | 90,099 | 14.9163 | 79.9945 | 15.12 | 14.72 | 80.19 | 79.79 | Downstream (heuristic - verify) |
| Medchal | 40 | 177.2 | 35,611 | 17.6297 | 78.4814 | 17.83 | 17.43 | 78.68 | 78.28 | Off flood-path (heuristic) |
| Adoni | 02 | 177.9 | 184,625 | 15.6279 | 77.2750 | 15.83 | 15.43 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Kadapa | 02 | 178.0 | 344,893 | 14.4800 | 78.8235 | 14.68 | 14.28 | 79.02 | 78.62 | Off flood-path (heuristic) |
| Chinnachowk | 02 | 178.5 | 64,053 | 14.4752 | 78.8354 | 14.68 | 14.28 | 79.04 | 78.64 | Off flood-path (heuristic) |
| Ponnur | 02 | 179.4 | 59,913 | 16.0711 | 80.5494 | 16.27 | 15.87 | 80.75 | 80.35 | Downstream (heuristic - verify) |
| Ponnūru | 02 | 179.7 | 57,170 | 16.0655 | 80.5520 | 16.27 | 15.87 | 80.75 | 80.35 | Downstream (heuristic - verify) |
| Chemmumiahpet | 02 | 179.9 | 31,416 | 14.4629 | 78.8119 | 14.66 | 14.26 | 79.01 | 78.61 | Off flood-path (heuristic) |
| Gurmatkāl | 19 | 180.4 | 20,614 | 16.8677 | 77.3909 | 17.07 | 16.67 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Amaravati | 02 | 182.2 | 103,000 | 16.5140 | 80.5160 | 16.71 | 16.31 | 80.72 | 80.32 | Downstream (heuristic - verify) |
| Ibrāhīmpatnam | 02 | 184.2 | 29,432 | 16.5830 | 80.5143 | 16.78 | 16.38 | 80.71 | 80.31 | Downstream (heuristic - verify) |
| Madhira | 40 | 184.7 | 22,716 | 16.9233 | 80.3631 | 17.12 | 16.72 | 80.56 | 80.16 | Downstream (heuristic - verify) |
| Mangalagiri | 02 | 185.4 | 107,197 | 16.4308 | 80.5682 | 16.63 | 16.23 | 80.77 | 80.37 | Downstream (heuristic - verify) |
| Jangaon | 40 | 185.5 | 52,394 | 17.7260 | 79.1524 | 17.93 | 17.53 | 79.35 | 78.95 | Off flood-path (heuristic) |
| Torūr | 40 | 187.1 | 19,100 | 17.5835 | 79.6586 | 17.78 | 17.38 | 79.86 | 79.46 | Off flood-path (heuristic) |
| Khammam | 40 | 187.8 | 196,283 | 17.2477 | 80.1437 | 17.45 | 17.05 | 80.34 | 79.94 | Off flood-path (heuristic) |
| Kondapalle | 02 | 188.3 | 38,714 | 16.6199 | 80.5424 | 16.82 | 16.42 | 80.74 | 80.34 | Downstream (heuristic - verify) |
| Tandur | 40 | 189.3 | 65,115 | 17.2485 | 77.5770 | 17.45 | 17.05 | 77.78 | 77.38 | Off flood-path (heuristic) |
| Thenali | 02 | 189.9 | 164,937 | 16.2425 | 80.6398 | 16.44 | 16.04 | 80.84 | 80.44 | Downstream (heuristic - verify) |
| Tādepalle | 02 | 190.0 | 64,149 | 16.4833 | 80.6000 | 16.68 | 16.28 | 80.8 | 80.4 | Downstream (heuristic - verify) |
| Guntakal | 02 | 190.5 | 126,270 | 15.1711 | 77.3624 | 15.37 | 14.97 | 77.56 | 77.16 | Off flood-path (heuristic) |
| Khanapuram Haveli | 40 | 190.8 | 53,442 | 17.2624 | 80.1681 | 17.46 | 17.06 | 80.37 | 79.97 | Off flood-path (heuristic) |
| Sangāreddi | 40 | 190.9 | 72,344 | 17.6248 | 78.0867 | 17.82 | 17.42 | 78.29 | 77.89 | Off flood-path (heuristic) |
| Mānvi | 19 | 194.7 | 46,465 | 15.9913 | 77.0503 | 16.19 | 15.79 | 77.25 | 76.85 | Off flood-path (heuristic) |
| Vijayawada | 02 | 195.5 | 1,143,232 | 16.5074 | 80.6466 | 16.71 | 16.31 | 80.85 | 80.45 | Downstream (heuristic - verify) |
| Pulivendla | 02 | 197.0 | 65,706 | 14.4214 | 78.2250 | 14.62 | 14.22 | 78.43 | 78.03 | Off flood-path (heuristic) |
| Sadasivpet | 40 | 197.0 | 47,920 | 17.6193 | 77.9526 | 17.82 | 17.42 | 78.15 | 77.75 | Off flood-path (heuristic) |
| Yanamalakuduru | 02 | 197.1 | 34,177 | 16.4853 | 80.6675 | 16.69 | 16.29 | 80.87 | 80.47 | Downstream (heuristic - verify) |
| Gajwel | 40 | 197.6 | 24,961 | 17.8482 | 78.6829 | 18.05 | 17.65 | 78.88 | 78.48 | Off flood-path (heuristic) |
| Rāmavarappādu | 02 | 199.4 | 22,222 | 16.5209 | 80.6808 | 16.72 | 16.32 | 80.88 | 80.48 | Downstream (heuristic - verify) |
| Tādigadapa | 02 | 199.8 | 17,462 | 16.4713 | 80.6970 | 16.67 | 16.27 | 80.9 | 80.5 | Downstream (heuristic - verify) |
| Kānūru | 02 | 199.9 | 49,006 | 16.4985 | 80.6914 | 16.7 | 16.3 | 80.89 | 80.49 | Downstream (heuristic - verify) |

## Somasila Dam (Andhra Pradesh)
Dam coordinates: 14.4, 79.6

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Vadlapūdi | 02 | 24.1 | 17,881 | 14.3112 | 79.8043 | 14.51 | 14.11 | 80.0 | 79.6 | Downstream (heuristic - verify) |
| Gūdūr | 02 | 38.8 | 74,851 | 14.1509 | 79.8521 | 14.35 | 13.95 | 80.05 | 79.65 | Downstream (heuristic - verify) |
| Nellore | 02 | 42.0 | 547,621 | 14.4499 | 79.9870 | 14.65 | 14.25 | 80.19 | 79.79 | Downstream (heuristic - verify) |
| Kovūr | 02 | 43.0 | 35,600 | 14.5005 | 79.9852 | 14.7 | 14.3 | 80.19 | 79.79 | Downstream (heuristic - verify) |
| Venkatagiri | 02 | 49.0 | 52,688 | 13.9601 | 79.5803 | 14.16 | 13.76 | 79.78 | 79.38 | Off flood-path (heuristic) |
| Rāzampeta | 02 | 52.7 | 54,050 | 14.1954 | 79.1590 | 14.4 | 14.0 | 79.36 | 78.96 | Off flood-path (heuristic) |
| Nāyudupet | 02 | 63.3 | 45,769 | 13.9074 | 79.8946 | 14.11 | 13.71 | 80.09 | 79.69 | Off flood-path (heuristic) |
| L.A.Sagaram | 02 | 63.5 | 19,904 | 13.9034 | 79.8906 | 14.1 | 13.7 | 80.09 | 79.69 | Off flood-path (heuristic) |
| Vinnamāla | 02 | 64.1 | 20,924 | 13.9074 | 79.9086 | 14.11 | 13.71 | 80.11 | 79.71 | Off flood-path (heuristic) |
| Badvel | 02 | 69.4 | 70,626 | 14.7451 | 79.0629 | 14.95 | 14.55 | 79.26 | 78.86 | Off flood-path (heuristic) |
| Kāvali | 02 | 71.4 | 90,099 | 14.9163 | 79.9945 | 15.12 | 14.72 | 80.19 | 79.79 | Off flood-path (heuristic) |
| Srikalahasti | 02 | 72.5 | 80,056 | 13.7551 | 79.7014 | 13.96 | 13.56 | 79.9 | 79.5 | Off flood-path (heuristic) |
| Pāmūru | 02 | 80.0 | 20,000 | 15.0963 | 79.4117 | 15.3 | 14.9 | 79.61 | 79.21 | Off flood-path (heuristic) |
| Chinnachowk | 02 | 82.8 | 64,053 | 14.4752 | 78.8354 | 14.68 | 14.28 | 79.04 | 78.64 | Off flood-path (heuristic) |
| Renigunta | 02 | 83.8 | 26,031 | 13.6514 | 79.5126 | 13.85 | 13.45 | 79.71 | 79.31 | Off flood-path (heuristic) |
| Mangalam | 02 | 83.9 | 19,318 | 13.6575 | 79.4626 | 13.86 | 13.46 | 79.66 | 79.26 | Off flood-path (heuristic) |
| Kadapa | 02 | 84.1 | 344,893 | 14.4800 | 78.8235 | 14.68 | 14.28 | 79.02 | 78.62 | Off flood-path (heuristic) |
| Tirumala | 02 | 84.1 | 18,013 | 13.6833 | 79.3500 | 13.88 | 13.48 | 79.55 | 79.15 | Off flood-path (heuristic) |
| Chemmumiahpet | 02 | 85.2 | 31,416 | 14.4629 | 78.8119 | 14.66 | 14.26 | 79.01 | 78.61 | Off flood-path (heuristic) |
| Akkarampalle | 02 | 85.6 | 44,219 | 13.6500 | 79.4200 | 13.85 | 13.45 | 79.62 | 79.22 | Off flood-path (heuristic) |
| Tirupati NMA | 02 | 86.3 | 37,968 | 13.6323 | 79.4857 | 13.83 | 13.43 | 79.69 | 79.29 | Off flood-path (heuristic) |
| Tirupati | 02 | 87.2 | 295,323 | 13.6355 | 79.4199 | 13.84 | 13.44 | 79.62 | 79.22 | Off flood-path (heuristic) |
| Tiruchanur | 02 | 89.6 | 22,963 | 13.6073 | 79.4486 | 13.81 | 13.41 | 79.65 | 79.25 | Off flood-path (heuristic) |
| Avilala | 02 | 89.8 | 24,839 | 13.6111 | 79.4208 | 13.81 | 13.41 | 79.62 | 79.22 | Off flood-path (heuristic) |
| Sūlūru | 02 | 89.9 | 38,065 | 13.7000 | 80.0167 | 13.9 | 13.5 | 80.22 | 79.82 | Off flood-path (heuristic) |
| Kandukūr | 02 | 96.4 | 57,246 | 15.2154 | 79.9039 | 15.42 | 15.02 | 80.1 | 79.7 | Off flood-path (heuristic) |
| Rayachoti | 02 | 99.2 | 91,234 | 14.0572 | 78.7506 | 14.26 | 13.86 | 78.95 | 78.55 | Off flood-path (heuristic) |
| Singarāyakonda | 02 | 103.2 | 19,400 | 15.2305 | 80.0279 | 15.43 | 15.03 | 80.23 | 79.83 | Off flood-path (heuristic) |
| Puttūr | 02 | 106.7 | 54,092 | 13.4419 | 79.5531 | 13.64 | 13.24 | 79.75 | 79.35 | Off flood-path (heuristic) |
| Pīleru | 02 | 109.3 | 41,489 | 13.6558 | 78.9385 | 13.86 | 13.46 | 79.14 | 78.74 | Off flood-path (heuristic) |
| Kanigiri | 02 | 112.3 | 25,045 | 15.4055 | 79.5069 | 15.61 | 15.21 | 79.71 | 79.31 | Off flood-path (heuristic) |
| Kanigiri U | 02 | 112.3 | 37,420 | 15.4064 | 79.5070 | 15.61 | 15.21 | 79.71 | 79.31 | Off flood-path (heuristic) |
| Nagalapuram | 02 | 114.5 | 34,026 | 13.3884 | 79.7962 | 13.59 | 13.19 | 80.0 | 79.6 | Off flood-path (heuristic) |
| Erraguntla | 02 | 117.2 | 32,574 | 14.6385 | 78.5397 | 14.84 | 14.44 | 78.74 | 78.34 | Off flood-path (heuristic) |
| Pākāla | 02 | 118.0 | 24,680 | 13.4490 | 79.1149 | 13.65 | 13.25 | 79.31 | 78.91 | Off flood-path (heuristic) |
| Gopavaram | 02 | 118.5 | 22,936 | 14.7841 | 78.5729 | 14.98 | 14.58 | 78.77 | 78.37 | Off flood-path (heuristic) |
| Proddatūr | 02 | 119.7 | 177,797 | 14.7502 | 78.5481 | 14.95 | 14.55 | 78.75 | 78.35 | Off flood-path (heuristic) |
| Rameswaram | 02 | 119.9 | 19,483 | 14.7401 | 78.5426 | 14.94 | 14.54 | 78.74 | 78.34 | Off flood-path (heuristic) |
| Nagari | 02 | 119.9 | 62,253 | 13.3214 | 79.5856 | 13.52 | 13.12 | 79.79 | 79.39 | Off flood-path (heuristic) |
| Gummidipundi | 25 | 123.3 | 18,891 | 13.4077 | 80.1088 | 13.61 | 13.21 | 80.31 | 79.91 | Off flood-path (heuristic) |
| Podaturpet | 25 | 125.0 | 35,000 | 13.2817 | 79.4854 | 13.48 | 13.08 | 79.69 | 79.29 | Off flood-path (heuristic) |
| Giddalūr | 02 | 130.3 | 35,150 | 15.3744 | 78.9261 | 15.57 | 15.17 | 79.13 | 78.73 | Off flood-path (heuristic) |
| Ongole | 02 | 131.7 | 208,344 | 15.5036 | 80.0445 | 15.7 | 15.3 | 80.24 | 79.84 | Off flood-path (heuristic) |
| Podili | 02 | 134.2 | 31,145 | 15.6064 | 79.6149 | 15.81 | 15.41 | 79.81 | 79.41 | Off flood-path (heuristic) |
| Ponneri | 25 | 134.4 | 31,025 | 13.3387 | 80.1949 | 13.54 | 13.14 | 80.39 | 79.99 | Off flood-path (heuristic) |
| Thiruthani | 25 | 136.1 | 44,781 | 13.1759 | 79.6164 | 13.38 | 12.98 | 79.82 | 79.42 | Off flood-path (heuristic) |
| Jammalamadugu | 02 | 140.0 | 46,069 | 14.8468 | 78.3831 | 15.05 | 14.65 | 78.58 | 78.18 | Off flood-path (heuristic) |
| Cumbum | 02 | 141.5 | 22,653 | 15.5817 | 79.1106 | 15.78 | 15.38 | 79.31 | 78.91 | Off flood-path (heuristic) |
| Chittoor | 02 | 143.0 | 160,722 | 13.2105 | 79.0956 | 13.41 | 13.01 | 79.3 | 78.9 | Off flood-path (heuristic) |
| Mīnjūr | 25 | 143.4 | 28,337 | 13.2795 | 80.2582 | 13.48 | 13.08 | 80.46 | 80.06 | Off flood-path (heuristic) |
| Tiruvallur | 25 | 143.6 | 56,074 | 13.1438 | 79.9089 | 13.34 | 12.94 | 80.11 | 79.71 | Off flood-path (heuristic) |
| Sholinghur | 25 | 143.9 | 30,856 | 13.1181 | 79.4202 | 13.32 | 12.92 | 79.62 | 79.22 | Off flood-path (heuristic) |
| Arakkonam | 25 | 146.5 | 79,080 | 13.0845 | 79.6705 | 13.28 | 12.88 | 79.87 | 79.47 | Off flood-path (heuristic) |
| Pādiyanallūr | 25 | 147.2 | 23,819 | 13.2004 | 80.1761 | 13.4 | 13.0 | 80.38 | 79.98 | Off flood-path (heuristic) |
| Pulivendla | 02 | 148.1 | 65,706 | 14.4214 | 78.2250 | 14.62 | 14.22 | 78.43 | 78.03 | Off flood-path (heuristic) |
| Nāravārikuppam | 25 | 148.5 | 20,946 | 13.1913 | 80.1847 | 13.39 | 12.99 | 80.38 | 79.98 | Off flood-path (heuristic) |
| Vengattūr | 25 | 148.9 | 23,292 | 13.0999 | 79.9321 | 13.3 | 12.9 | 80.13 | 79.73 | Off flood-path (heuristic) |
| Tinnanūr | 25 | 150.2 | 37,095 | 13.1145 | 80.0271 | 13.31 | 12.91 | 80.23 | 79.83 | Off flood-path (heuristic) |
| Rāmāpuram | 02 | 151.3 | 31,169 | 13.1009 | 79.1841 | 13.3 | 12.9 | 79.38 | 78.98 | Off flood-path (heuristic) |
| Madanapalle | 02 | 151.5 | 180,180 | 13.5503 | 78.5029 | 13.75 | 13.35 | 78.7 | 78.3 | Off flood-path (heuristic) |
| Puzhal | 25 | 152.0 | 31,665 | 13.1647 | 80.2039 | 13.36 | 12.96 | 80.4 | 80.0 | Off flood-path (heuristic) |
| Darsi | 02 | 152.6 | 33,418 | 15.7698 | 79.6794 | 15.97 | 15.57 | 79.88 | 79.48 | Off flood-path (heuristic) |
| Kattivākkam | 25 | 152.6 | 36,617 | 13.2167 | 80.3167 | 13.42 | 13.02 | 80.52 | 80.12 | Off flood-path (heuristic) |
| Mārkāpur | 02 | 152.7 | 71,092 | 15.7353 | 79.2685 | 15.94 | 15.54 | 79.47 | 79.07 | Off flood-path (heuristic) |
| Avadi | 25 | 153.2 | 345,996 | 13.1147 | 80.1098 | 13.31 | 12.91 | 80.31 | 79.91 | Off flood-path (heuristic) |
| Mathur | 25 | 153.5 | 27,674 | 13.1710 | 80.2476 | 13.37 | 12.97 | 80.45 | 80.05 | Off flood-path (heuristic) |
| Reddipālaiyam | 25 | 154.3 | 29,511 | 13.1078 | 80.1206 | 13.31 | 12.91 | 80.32 | 79.92 | Off flood-path (heuristic) |
| Manali | 25 | 154.9 | 35,248 | 13.1667 | 80.2667 | 13.37 | 12.97 | 80.47 | 80.07 | Off flood-path (heuristic) |
| Madhavaram | 25 | 155.0 | 119,105 | 13.1482 | 80.2314 | 13.35 | 12.95 | 80.43 | 80.03 | Off flood-path (heuristic) |
| Ambattur | 25 | 156.9 | 466,205 | 13.0982 | 80.1615 | 13.3 | 12.9 | 80.36 | 79.96 | Off flood-path (heuristic) |
| Vīrarāghavapuram | 25 | 157.4 | 64,698 | 13.0731 | 80.1078 | 13.27 | 12.87 | 80.31 | 79.91 | Off flood-path (heuristic) |
| Tiruvottiyūr | 25 | 157.5 | 249,446 | 13.1582 | 80.3018 | 13.36 | 12.96 | 80.5 | 80.1 | Off flood-path (heuristic) |
| Tirumeshi | 25 | 157.8 | 19,733 | 13.0534 | 80.0600 | 13.25 | 12.85 | 80.26 | 79.86 | Off flood-path (heuristic) |
| Kadiri | 02 | 158.5 | 89,429 | 14.1117 | 78.1598 | 14.31 | 13.91 | 78.36 | 77.96 | Off flood-path (heuristic) |
| Nalambūr | 25 | 158.5 | 21,973 | 13.0867 | 80.1703 | 13.29 | 12.89 | 80.37 | 79.97 | Off flood-path (heuristic) |
| Punganūru | 02 | 159.7 | 54,746 | 13.3667 | 78.5719 | 13.57 | 13.17 | 78.77 | 78.37 | Off flood-path (heuristic) |
| Maduravoyal | 25 | 160.2 | 86,195 | 13.0675 | 80.1632 | 13.27 | 12.87 | 80.36 | 79.96 | Off flood-path (heuristic) |
| Poonamalle | 25 | 160.2 | 60,607 | 13.0489 | 80.1149 | 13.25 | 12.85 | 80.31 | 79.91 | Off flood-path (heuristic) |
| Maduraivayal | 25 | 161.0 | 19,208 | 13.0631 | 80.1719 | 13.26 | 12.86 | 80.37 | 79.97 | Off flood-path (heuristic) |
| Addanki | 02 | 161.9 | 28,547 | 15.8106 | 79.9734 | 16.01 | 15.61 | 80.17 | 79.77 | Off flood-path (heuristic) |
| Palmaner | 02 | 162.1 | 54,035 | 13.2000 | 78.7472 | 13.4 | 13.0 | 78.95 | 78.55 | Off flood-path (heuristic) |
| Nerkunram | 25 | 162.7 | 59,790 | 13.0619 | 80.2094 | 13.26 | 12.86 | 80.41 | 80.01 | Off flood-path (heuristic) |
| Valasaravakkam | 25 | 163.0 | 47,378 | 13.0439 | 80.1725 | 13.24 | 12.84 | 80.37 | 79.97 | Off flood-path (heuristic) |
| Kaikalapettai | 25 | 163.2 | 23,910 | 13.0219 | 80.1206 | 13.22 | 12.82 | 80.32 | 79.92 | Off flood-path (heuristic) |
| Porur | 25 | 163.3 | 46,690 | 13.0357 | 80.1582 | 13.24 | 12.84 | 80.36 | 79.96 | Off flood-path (heuristic) |
| Chennai | 25 | 163.3 | 4,681,087 | 13.0878 | 80.2785 | 13.29 | 12.89 | 80.48 | 80.08 | Off flood-path (heuristic) |
| Chetput | 25 | 163.3 | 18,326 | 13.0700 | 80.2408 | 13.27 | 12.87 | 80.44 | 80.04 | Off flood-path (heuristic) |
| Srīperumbūdūr | 25 | 163.5 | 24,864 | 12.9676 | 79.9420 | 13.17 | 12.77 | 80.14 | 79.74 | Off flood-path (heuristic) |
| Virugambakkam | 25 | 163.5 | 21,376 | 13.0463 | 80.1913 | 13.25 | 12.85 | 80.39 | 79.99 | Off flood-path (heuristic) |
| Kavanur | 25 | 164.3 | 54,986 | 12.9962 | 80.0751 | 13.2 | 12.8 | 80.28 | 79.88 | Off flood-path (heuristic) |
| Ramapuram | 25 | 164.6 | 52,295 | 13.0318 | 80.1824 | 13.23 | 12.83 | 80.38 | 79.98 | Off flood-path (heuristic) |
| Mugalivakkam | 25 | 165.1 | 25,117 | 13.0205 | 80.1653 | 13.22 | 12.82 | 80.37 | 79.97 | Off flood-path (heuristic) |
| Puliyankannu | 25 | 165.5 | 20,171 | 12.9392 | 79.3079 | 13.14 | 12.74 | 79.51 | 79.11 | Off flood-path (heuristic) |
| Walajapet | 25 | 165.9 | 47,498 | 12.9251 | 79.3663 | 13.13 | 12.73 | 79.57 | 79.17 | Off flood-path (heuristic) |
| Kātpādi | 25 | 166.5 | 38,833 | 12.9695 | 79.1455 | 13.17 | 12.77 | 79.35 | 78.95 | Off flood-path (heuristic) |
| Rānipet | 25 | 166.6 | 264,330 | 12.9247 | 79.3333 | 13.12 | 12.72 | 79.53 | 79.13 | Off flood-path (heuristic) |
| Polichalur | 25 | 167.4 | 21,906 | 12.9891 | 80.1418 | 13.19 | 12.79 | 80.34 | 79.94 | Off flood-path (heuristic) |
| Anakaputhur | 25 | 167.5 | 48,050 | 12.9828 | 80.1264 | 13.18 | 12.78 | 80.33 | 79.93 | Off flood-path (heuristic) |
| Saint Thomas Mount | 25 | 168.1 | 43,795 | 13.0033 | 80.1961 | 13.2 | 12.8 | 80.4 | 80.0 | Off flood-path (heuristic) |
| Kangeyanallur | 25 | 168.3 | 15,177 | 12.9508 | 79.1506 | 13.15 | 12.75 | 79.35 | 78.95 | Off flood-path (heuristic) |
| Vishāram | 25 | 168.4 | 44,786 | 12.9181 | 79.2776 | 13.12 | 12.72 | 79.48 | 79.08 | Off flood-path (heuristic) |
| Kalinjur | 25 | 168.6 | 19,828 | 12.9534 | 79.1337 | 13.15 | 12.75 | 79.33 | 78.93 | Off flood-path (heuristic) |
| Alandur | 25 | 168.6 | 164,430 | 13.0025 | 80.2061 | 13.2 | 12.8 | 80.41 | 80.01 | Off flood-path (heuristic) |
| Pammal | 25 | 168.7 | 75,870 | 12.9750 | 80.1347 | 13.17 | 12.78 | 80.33 | 79.93 | Off flood-path (heuristic) |
| Arcot | 25 | 168.9 | 55,955 | 12.9057 | 79.3190 | 13.11 | 12.71 | 79.52 | 79.12 | Off flood-path (heuristic) |
| Meenambakkam | 25 | 169.2 | 24,334 | 12.9846 | 80.1747 | 13.18 | 12.78 | 80.37 | 79.97 | Off flood-path (heuristic) |
| Nandyāl | 02 | 169.6 | 211,424 | 15.4780 | 78.4836 | 15.68 | 15.28 | 78.68 | 78.28 | Off flood-path (heuristic) |
| Pallāvaram | 25 | 170.0 | 233,984 | 12.9680 | 80.1502 | 13.17 | 12.77 | 80.35 | 79.95 | Off flood-path (heuristic) |
| Ullagaram | 25 | 170.7 | 53,322 | 12.9790 | 80.1970 | 13.18 | 12.78 | 80.4 | 80.0 | Off flood-path (heuristic) |
| Kallamchavadi | 25 | 170.8 | 30,702 | 12.9531 | 80.1308 | 13.15 | 12.75 | 80.33 | 79.93 | Off flood-path (heuristic) |
| Vetapālem | 02 | 171.7 | 38,671 | 15.7850 | 80.3066 | 15.99 | 15.59 | 80.51 | 80.11 | Off flood-path (heuristic) |
| Vellore | 25 | 172.3 | 484,690 | 12.9184 | 79.1325 | 13.12 | 12.72 | 79.33 | 78.93 | Off flood-path (heuristic) |
| Madipakkam | 25 | 172.5 | 35,752 | 12.9623 | 80.1986 | 13.16 | 12.76 | 80.4 | 80.0 | Off flood-path (heuristic) |
| Perunkalattu | 25 | 172.8 | 37,342 | 12.9182 | 80.0824 | 13.12 | 12.72 | 80.28 | 79.88 | Off flood-path (heuristic) |
| Tambaram | 25 | 173.7 | 174,787 | 12.9246 | 80.1271 | 13.12 | 12.72 | 80.33 | 79.93 | Off flood-path (heuristic) |
| Kotivakkam | 25 | 174.1 | 20,217 | 12.9702 | 80.2577 | 13.17 | 12.77 | 80.46 | 80.06 | Off flood-path (heuristic) |
| Kanchipuram | 25 | 174.3 | 221,715 | 12.8352 | 79.7001 | 13.04 | 12.64 | 79.9 | 79.5 | Off flood-path (heuristic) |
| Perungudi | 25 | 174.4 | 43,111 | 12.9610 | 80.2409 | 13.16 | 12.76 | 80.44 | 80.04 | Off flood-path (heuristic) |
| Kullattūr | 25 | 174.4 | 27,374 | 12.9419 | 80.1947 | 13.14 | 12.74 | 80.39 | 79.99 | Off flood-path (heuristic) |
| Allapuram | 25 | 174.9 | 31,211 | 12.8951 | 79.1279 | 13.1 | 12.7 | 79.33 | 78.93 | Off flood-path (heuristic) |
| Palavansathu | 25 | 175.0 | 22,176 | 12.8931 | 79.1345 | 13.09 | 12.69 | 79.33 | 78.93 | Off flood-path (heuristic) |
| Thorapadi | 25 | 175.4 | 16,700 | 12.8915 | 79.1238 | 13.09 | 12.69 | 79.32 | 78.92 | Off flood-path (heuristic) |
| Vandalūr | 25 | 175.5 | 16,852 | 12.8924 | 80.0808 | 13.09 | 12.69 | 80.28 | 79.88 | Off flood-path (heuristic) |
| Pallikaranai | 25 | 175.7 | 43,493 | 12.9377 | 80.2153 | 13.14 | 12.74 | 80.42 | 80.02 | Off flood-path (heuristic) |
| Rajakilpakkam | 25 | 175.8 | 37,906 | 12.9194 | 80.1697 | 13.12 | 12.72 | 80.37 | 79.97 | Off flood-path (heuristic) |
| Palavakkam | 25 | 175.8 | 26,766 | 12.9535 | 80.2572 | 13.15 | 12.75 | 80.46 | 80.06 | Off flood-path (heuristic) |
| Neelankarai | 25 | 176.3 | 76,600 | 12.9495 | 80.2592 | 13.15 | 12.75 | 80.46 | 80.06 | Off flood-path (heuristic) |
| Nattappettai | 25 | 176.6 | 19,883 | 12.8187 | 79.7493 | 13.02 | 12.62 | 79.95 | 79.55 | Off flood-path (heuristic) |
| Meddappakkam | 25 | 177.0 | 45,356 | 12.9166 | 80.1938 | 13.12 | 12.72 | 80.39 | 79.99 | Off flood-path (heuristic) |
| Jalladiampet | 25 | 177.2 | 19,100 | 12.9203 | 80.2081 | 13.12 | 12.72 | 80.41 | 80.01 | Off flood-path (heuristic) |
| Sevilimedu | 25 | 177.2 | 23,454 | 12.8083 | 79.6864 | 13.01 | 12.61 | 79.89 | 79.49 | Off flood-path (heuristic) |
| Thimiri | 25 | 177.6 | 16,246 | 12.8283 | 79.3079 | 13.03 | 12.63 | 79.51 | 79.11 | Off flood-path (heuristic) |
| Chīrāla | 02 | 177.7 | 92,942 | 15.8239 | 80.3522 | 16.02 | 15.62 | 80.55 | 80.15 | Off flood-path (heuristic) |
| Madambakkam | 25 | 178.7 | 17,058 | 12.8525 | 80.0467 | 13.05 | 12.65 | 80.25 | 79.85 | Off flood-path (heuristic) |
| Injambakkam | 25 | 179.3 | 23,346 | 12.9162 | 80.2488 | 13.12 | 12.72 | 80.45 | 80.05 | Off flood-path (heuristic) |
| Banganapalle | 02 | 179.4 | 25,325 | 15.3177 | 78.2267 | 15.52 | 15.12 | 78.43 | 78.03 | Off flood-path (heuristic) |
| Kondasamudram | 25 | 179.5 | 21,335 | 12.9455 | 78.8788 | 13.15 | 12.75 | 79.08 | 78.68 | Off flood-path (heuristic) |
| Unamaucheri | 25 | 179.7 | 29,122 | 12.8608 | 80.1066 | 13.06 | 12.66 | 80.31 | 79.91 | Off flood-path (heuristic) |
| Gudiyatham | 25 | 179.7 | 93,973 | 12.9460 | 78.8738 | 13.15 | 12.75 | 79.07 | 78.67 | Off flood-path (heuristic) |
| Gūduvāncheri | 25 | 179.9 | 44,098 | 12.8452 | 80.0606 | 13.05 | 12.65 | 80.26 | 79.86 | Off flood-path (heuristic) |
| Tadpatri | 02 | 180.1 | 108,171 | 14.9083 | 78.0103 | 15.11 | 14.71 | 78.21 | 77.81 | Off flood-path (heuristic) |
| Pallikonda | 25 | 180.8 | 23,067 | 12.9052 | 78.9427 | 13.11 | 12.71 | 79.14 | 78.74 | Off flood-path (heuristic) |
| Sholinganallur | 25 | 181.2 | 35,602 | 12.8900 | 80.2313 | 13.09 | 12.69 | 80.43 | 80.03 | Off flood-path (heuristic) |
| Maraimalainagar | 25 | 184.0 | 81,872 | 12.7978 | 80.0250 | 13.0 | 12.6 | 80.23 | 79.83 | Off flood-path (heuristic) |
| Vinukonda | 02 | 184.4 | 62,550 | 16.0531 | 79.7396 | 16.25 | 15.85 | 79.94 | 79.54 | Off flood-path (heuristic) |
| Peranāmpattu | 25 | 188.7 | 51,271 | 12.9343 | 78.7189 | 13.13 | 12.73 | 78.92 | 78.52 | Off flood-path (heuristic) |
| Mulbāgal | 19 | 189.4 | 57,276 | 13.1635 | 78.3935 | 13.36 | 12.96 | 78.59 | 78.19 | Off flood-path (heuristic) |
| Srīnivāspur | 19 | 190.7 | 26,793 | 13.3391 | 78.2117 | 13.54 | 13.14 | 78.41 | 78.01 | Off flood-path (heuristic) |
| Bāpatla | 02 | 191.4 | 70,777 | 15.9042 | 80.4674 | 16.1 | 15.7 | 80.67 | 80.27 | Off flood-path (heuristic) |
| Cheyyar | 25 | 193.5 | 37,802 | 12.6605 | 79.5431 | 12.86 | 12.46 | 79.74 | 79.34 | Off flood-path (heuristic) |
| Chengalpattu | 25 | 194.3 | 65,689 | 12.6918 | 79.9766 | 12.89 | 12.49 | 80.18 | 79.78 | Off flood-path (heuristic) |
| Betamcherla | 02 | 195.0 | 38,994 | 15.4514 | 78.1480 | 15.65 | 15.25 | 78.35 | 77.95 | Off flood-path (heuristic) |
| Arni | 25 | 195.6 | 63,671 | 12.6677 | 79.2853 | 12.87 | 12.47 | 79.49 | 79.09 | Off flood-path (heuristic) |
| Atmakūr | 02 | 197.3 | 35,137 | 15.8811 | 78.5870 | 16.08 | 15.68 | 78.79 | 78.39 | Off flood-path (heuristic) |
| Chilakalūrupet | 02 | 197.5 | 101,398 | 16.0899 | 80.1671 | 16.29 | 15.89 | 80.37 | 79.97 | Off flood-path (heuristic) |
| Uttiramerūr | 25 | 199.3 | 25,194 | 12.6143 | 79.7575 | 12.81 | 12.41 | 79.96 | 79.56 | Off flood-path (heuristic) |

## Polavaram Dam (Andhra Pradesh)
Dam coordinates: 17.25, 81.65

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Polavaram | 02 | 0.7 | 43,710 | 17.2475 | 81.6437 | 17.45 | 17.05 | 81.84 | 81.44 | Off flood-path (heuristic) |
| Gokavaram | 02 | 21.2 | 16,389 | 17.2582 | 81.8499 | 17.46 | 17.06 | 82.05 | 81.65 | Downstream (heuristic - verify) |
| Rampachodavaram | 02 | 25.1 | 25,074 | 17.4409 | 81.7756 | 17.64 | 17.24 | 81.98 | 81.58 | Off flood-path (heuristic) |
| Katheru | 02 | 27.1 | 23,572 | 17.0379 | 81.7760 | 17.24 | 16.84 | 81.98 | 81.58 | Downstream (heuristic - verify) |
| Kovvūr | 02 | 27.3 | 40,379 | 17.0162 | 81.7293 | 17.22 | 16.82 | 81.93 | 81.53 | Downstream (heuristic - verify) |
| Rajamahendravaram | 02 | 30.4 | 376,333 | 17.0052 | 81.7778 | 17.21 | 16.81 | 81.98 | 81.58 | Downstream (heuristic - verify) |
| Hukumpeta | 02 | 33.2 | 16,985 | 16.9887 | 81.8017 | 17.19 | 16.79 | 82.0 | 81.6 | Downstream (heuristic - verify) |
| Morampudi | 02 | 36.0 | 15,346 | 16.9800 | 81.8371 | 17.18 | 16.78 | 82.04 | 81.64 | Downstream (heuristic - verify) |
| Dowleswaram | 02 | 36.3 | 44,637 | 16.9476 | 81.7799 | 17.15 | 16.75 | 81.98 | 81.58 | Downstream (heuristic - verify) |
| Nidadavole | 02 | 38.4 | 44,173 | 16.9057 | 81.6722 | 17.11 | 16.71 | 81.87 | 81.47 | Downstream (heuristic - verify) |
| Tadepalligudem | 02 | 50.1 | 112,655 | 16.8147 | 81.5272 | 17.01 | 16.61 | 81.73 | 81.33 | Off flood-path (heuristic) |
| Mandapeta | 02 | 52.3 | 56,063 | 16.8625 | 81.9292 | 17.06 | 16.66 | 82.13 | 81.73 | Downstream (heuristic - verify) |
| Tanuku | 02 | 55.2 | 77,962 | 16.7544 | 81.6814 | 16.95 | 16.55 | 81.88 | 81.48 | Downstream (heuristic - verify) |
| Peddāpuram | 02 | 55.3 | 49,477 | 17.0770 | 82.1384 | 17.28 | 16.88 | 82.34 | 81.94 | Downstream (heuristic - verify) |
| Sāmalkot | 02 | 59.9 | 56,864 | 17.0568 | 82.1764 | 17.26 | 16.86 | 82.38 | 81.98 | Downstream (heuristic - verify) |
| Rāmachandrapuram | 02 | 61.1 | 43,657 | 16.8364 | 82.0287 | 17.04 | 16.64 | 82.23 | 81.83 | Downstream (heuristic - verify) |
| Attili | 02 | 61.4 | 68,196 | 16.7000 | 81.6000 | 16.9 | 16.5 | 81.8 | 81.4 | Off flood-path (heuristic) |
| Pithāpuram | 02 | 65.7 | 54,859 | 17.1168 | 82.2528 | 17.32 | 16.92 | 82.45 | 82.05 | Downstream (heuristic - verify) |
| Suryaraopeta | 02 | 67.0 | 24,112 | 16.9996 | 82.2232 | 17.2 | 16.8 | 82.42 | 82.02 | Downstream (heuristic - verify) |
| Penugonda | 02 | 67.1 | 23,654 | 16.6536 | 81.7455 | 16.85 | 16.45 | 81.95 | 81.55 | Downstream (heuristic - verify) |
| Kākināda | 02 | 70.3 | 384,182 | 16.9604 | 82.2381 | 17.16 | 16.76 | 82.44 | 82.04 | Downstream (heuristic - verify) |
| Ramanayyapeta | 02 | 71.1 | 28,369 | 16.9452 | 82.2385 | 17.15 | 16.75 | 82.44 | 82.04 | Downstream (heuristic - verify) |
| Akivīdu | 02 | 79.6 | 40,413 | 16.5822 | 81.3811 | 16.78 | 16.38 | 81.58 | 81.18 | Off flood-path (heuristic) |
| Bhimavaram | 02 | 80.0 | 146,961 | 16.5408 | 81.5232 | 16.74 | 16.34 | 81.72 | 81.32 | Off flood-path (heuristic) |
| Palakollu | 02 | 82.0 | 81,199 | 16.5167 | 81.7300 | 16.72 | 16.32 | 81.93 | 81.53 | Downstream (heuristic - verify) |
| Sathupalli | 40 | 82.9 | 40,000 | 17.2497 | 80.8690 | 17.45 | 17.05 | 81.07 | 80.67 | Off flood-path (heuristic) |
| Yanam | 02 | 83.0 | 55,626 | 16.7331 | 82.2136 | 16.93 | 16.53 | 82.41 | 82.01 | Downstream (heuristic - verify) |
| Eluru | 02 | 83.3 | 218,020 | 16.7131 | 81.1044 | 16.91 | 16.51 | 81.3 | 80.9 | Off flood-path (heuristic) |
| Amalāpuram | 02 | 83.7 | 53,231 | 16.5787 | 82.0061 | 16.78 | 16.38 | 82.21 | 81.81 | Downstream (heuristic - verify) |
| Sādpalli | 40 | 86.5 | 31,857 | 17.2099 | 80.8364 | 17.41 | 17.01 | 81.04 | 80.64 | Off flood-path (heuristic) |
| Kaikalūr | 02 | 90.5 | 20,763 | 16.5515 | 81.2140 | 16.75 | 16.35 | 81.41 | 81.01 | Off flood-path (heuristic) |
| Narasapur | 02 | 90.9 | 59,306 | 16.4342 | 81.6984 | 16.63 | 16.23 | 81.9 | 81.5 | Downstream (heuristic - verify) |
| Bhadrāchalam | 40 | 93.2 | 50,087 | 17.6685 | 80.8889 | 17.87 | 17.47 | 81.09 | 80.69 | Off flood-path (heuristic) |
| Tuni | 02 | 95.9 | 53,425 | 17.3590 | 82.5461 | 17.56 | 17.16 | 82.75 | 82.35 | Downstream (heuristic - verify) |
| Sarapāka | 40 | 96.2 | 22,149 | 17.6913 | 80.8700 | 17.89 | 17.49 | 81.07 | 80.67 | Off flood-path (heuristic) |
| Payakaraopeta | 02 | 98.4 | 27,001 | 17.3678 | 82.5683 | 17.57 | 17.17 | 82.77 | 82.37 | Downstream (heuristic - verify) |
| Nūzvīd | 02 | 99.7 | 58,590 | 16.7885 | 80.8459 | 16.99 | 16.59 | 81.05 | 80.65 | Off flood-path (heuristic) |
| Pāloncha | 40 | 107.6 | 75,224 | 17.6018 | 80.7051 | 17.8 | 17.4 | 80.91 | 80.51 | Off flood-path (heuristic) |
| Palwancha | 40 | 109.7 | 80,199 | 17.5815 | 80.6765 | 17.78 | 17.38 | 80.88 | 80.48 | Off flood-path (heuristic) |
| Nadim Tiruvuru | 02 | 111.7 | 18,567 | 17.1121 | 80.6088 | 17.31 | 16.91 | 80.81 | 80.41 | Off flood-path (heuristic) |
| Narsīpatnam | 02 | 112.1 | 33,757 | 17.6671 | 82.6124 | 17.87 | 17.47 | 82.81 | 82.41 | Off flood-path (heuristic) |
| Gudivāda | 02 | 114.3 | 118,167 | 16.4355 | 80.9955 | 16.64 | 16.24 | 81.2 | 80.8 | Off flood-path (heuristic) |
| Kottagūdem | 40 | 114.5 | 79,819 | 17.5511 | 80.6178 | 17.75 | 17.35 | 80.82 | 80.42 | Off flood-path (heuristic) |
| Chunchupally | 40 | 115.1 | 19,944 | 17.5233 | 80.6041 | 17.72 | 17.32 | 80.8 | 80.4 | Off flood-path (heuristic) |
| Kanuru | 02 | 115.2 | 43,696 | 16.2858 | 81.2546 | 16.49 | 16.09 | 81.45 | 81.05 | Off flood-path (heuristic) |
| Manuguru | 40 | 115.5 | 32,539 | 17.9302 | 80.8267 | 18.13 | 17.73 | 81.03 | 80.63 | Off flood-path (heuristic) |
| Gannavaram | 02 | 119.8 | 19,410 | 16.5409 | 80.8021 | 16.74 | 16.34 | 81.0 | 80.6 | Off flood-path (heuristic) |
| Pedana | 02 | 123.0 | 30,721 | 16.2558 | 81.1438 | 16.46 | 16.06 | 81.34 | 80.94 | Off flood-path (heuristic) |
| Malakanagiri | 21 | 126.4 | 31,007 | 18.3643 | 81.8880 | 18.56 | 18.16 | 82.09 | 81.69 | Off flood-path (heuristic) |
| Machilīpatnam | 02 | 130.1 | 192,827 | 16.1875 | 81.1389 | 16.39 | 15.99 | 81.34 | 80.94 | Off flood-path (heuristic) |
| Vuyyūru | 02 | 130.7 | 36,755 | 16.3631 | 80.8441 | 16.56 | 16.16 | 81.04 | 80.64 | Off flood-path (heuristic) |
| Rāmavarappādu | 02 | 131.2 | 22,222 | 16.5209 | 80.6808 | 16.72 | 16.32 | 80.88 | 80.48 | Off flood-path (heuristic) |
| Kānūru | 02 | 131.9 | 49,006 | 16.4985 | 80.6914 | 16.7 | 16.3 | 80.89 | 80.49 | Off flood-path (heuristic) |
| Poranki | 02 | 132.0 | 25,545 | 16.4777 | 80.7075 | 16.68 | 16.28 | 80.91 | 80.51 | Off flood-path (heuristic) |
| Elamanchili | 02 | 132.4 | 27,265 | 17.5491 | 82.8575 | 17.75 | 17.35 | 83.06 | 82.66 | Off flood-path (heuristic) |
| Tādigadapa | 02 | 133.4 | 17,462 | 16.4713 | 80.6970 | 16.67 | 16.27 | 80.9 | 80.5 | Off flood-path (heuristic) |
| Yanamalakuduru | 02 | 134.8 | 34,177 | 16.4853 | 80.6675 | 16.69 | 16.29 | 80.87 | 80.47 | Off flood-path (heuristic) |
| Vijayawada | 02 | 135.0 | 1,143,232 | 16.5074 | 80.6466 | 16.71 | 16.31 | 80.85 | 80.45 | Off flood-path (heuristic) |
| Kondapalle | 02 | 137.1 | 38,714 | 16.6199 | 80.5424 | 16.82 | 16.42 | 80.74 | 80.34 | Off flood-path (heuristic) |
| Tādepalle | 02 | 140.5 | 64,149 | 16.4833 | 80.6000 | 16.68 | 16.28 | 80.8 | 80.4 | Off flood-path (heuristic) |
| Madhira | 40 | 141.5 | 22,716 | 16.9233 | 80.3631 | 17.12 | 16.72 | 80.56 | 80.16 | Off flood-path (heuristic) |
| Ibrāhīmpatnam | 02 | 141.8 | 29,432 | 16.5830 | 80.5143 | 16.78 | 16.38 | 80.71 | 80.31 | Off flood-path (heuristic) |
| Amaravati | 02 | 145.8 | 103,000 | 16.5140 | 80.5160 | 16.71 | 16.31 | 80.72 | 80.32 | Off flood-path (heuristic) |
| Yellandu | 40 | 146.0 | 43,787 | 17.5906 | 80.3215 | 17.79 | 17.39 | 80.52 | 80.12 | Off flood-path (heuristic) |
| Mangalagiri | 02 | 146.8 | 107,197 | 16.4308 | 80.5682 | 16.63 | 16.23 | 80.77 | 80.37 | Off flood-path (heuristic) |
| Challapalle | 02 | 147.4 | 16,841 | 16.1176 | 80.9314 | 16.32 | 15.92 | 81.13 | 80.73 | Off flood-path (heuristic) |
| Chodavaram | 02 | 150.7 | 29,000 | 17.8288 | 82.9353 | 18.03 | 17.63 | 83.14 | 82.74 | Off flood-path (heuristic) |
| Anakapalle | 02 | 151.8 | 86,519 | 17.6913 | 83.0040 | 17.89 | 17.49 | 83.2 | 82.8 | Off flood-path (heuristic) |
| Nandigāma | 02 | 154.5 | 38,219 | 16.7717 | 80.2860 | 16.97 | 16.57 | 80.49 | 80.09 | Off flood-path (heuristic) |
| Thenali | 02 | 155.3 | 164,937 | 16.2425 | 80.6398 | 16.44 | 16.04 | 80.84 | 80.44 | Off flood-path (heuristic) |
| Avanigadda | 02 | 157.3 | 25,761 | 16.0215 | 80.9181 | 16.22 | 15.82 | 81.12 | 80.72 | Off flood-path (heuristic) |
| Khanapuram Haveli | 40 | 157.4 | 53,442 | 17.2624 | 80.1681 | 17.46 | 17.06 | 80.37 | 79.97 | Off flood-path (heuristic) |
| Bhattiprolu | 02 | 157.6 | 18,001 | 16.1026 | 80.7807 | 16.3 | 15.9 | 80.98 | 80.58 | Off flood-path (heuristic) |
| Kirandul | 37 | 159.6 | 19,053 | 18.6365 | 81.2583 | 18.84 | 18.44 | 81.46 | 81.06 | Off flood-path (heuristic) |
| Khammam | 40 | 160.0 | 196,283 | 17.2477 | 80.1437 | 17.45 | 17.05 | 80.34 | 79.94 | Off flood-path (heuristic) |
| Dornakal | 40 | 160.8 | 15,350 | 17.4447 | 80.1491 | 17.64 | 17.24 | 80.35 | 79.95 | Off flood-path (heuristic) |
| Repalle | 02 | 162.5 | 50,866 | 16.0184 | 80.8296 | 16.22 | 15.82 | 81.03 | 80.63 | Off flood-path (heuristic) |
| Bacheli | 37 | 164.5 | 21,435 | 18.6843 | 81.2686 | 18.88 | 18.48 | 81.47 | 81.07 | Off flood-path (heuristic) |
| Guntur | 02 | 165.2 | 670,073 | 16.2997 | 80.4573 | 16.5 | 16.1 | 80.66 | 80.26 | Off flood-path (heuristic) |
| Jaggayyapeta | 02 | 169.7 | 41,180 | 16.8938 | 80.0981 | 17.09 | 16.69 | 80.3 | 79.9 | Off flood-path (heuristic) |
| Jaggaiahpet | 02 | 170.0 | 53,530 | 16.8915 | 80.0955 | 17.09 | 16.69 | 80.3 | 79.9 | Off flood-path (heuristic) |
| Visakhapatnam | 02 | 171.4 | 1,063,178 | 17.6801 | 83.2016 | 17.88 | 17.48 | 83.4 | 83.0 | Off flood-path (heuristic) |
| Gajuwaka | 02 | 173.5 | 258,944 | 17.7000 | 83.2167 | 17.9 | 17.5 | 83.42 | 83.02 | Off flood-path (heuristic) |
| Ponnur | 02 | 175.9 | 59,913 | 16.0711 | 80.5494 | 16.27 | 15.87 | 80.75 | 80.35 | Off flood-path (heuristic) |
| Vepagunta | 02 | 176.1 | 26,881 | 17.7784 | 83.2158 | 17.98 | 17.58 | 83.42 | 83.02 | Off flood-path (heuristic) |
| Ponnūru | 02 | 176.1 | 57,170 | 16.0655 | 80.5520 | 16.27 | 15.87 | 80.75 | 80.35 | Off flood-path (heuristic) |
| Mahbūbābād | 40 | 179.0 | 42,851 | 17.5973 | 80.0021 | 17.8 | 17.4 | 80.2 | 79.8 | Off flood-path (heuristic) |
| Kodār | 40 | 181.2 | 64,234 | 16.9985 | 79.9656 | 17.2 | 16.8 | 80.17 | 79.77 | Off flood-path (heuristic) |
| Phirangipuram | 02 | 182.2 | 17,335 | 16.2908 | 80.2623 | 16.49 | 16.09 | 80.46 | 80.06 | Off flood-path (heuristic) |
| Rasapūdipalem | 02 | 184.7 | 1,728,128 | 17.7331 | 83.3162 | 17.93 | 17.53 | 83.52 | 83.12 | Off flood-path (heuristic) |
| Sattenapalle | 02 | 185.7 | 56,721 | 16.3938 | 80.1522 | 16.59 | 16.19 | 80.35 | 79.95 | Off flood-path (heuristic) |
| Bījāpur | 37 | 193.0 | 16,129 | 18.7939 | 80.8160 | 18.99 | 18.59 | 81.02 | 80.62 | Off flood-path (heuristic) |
| Bāpatla | 02 | 195.6 | 70,777 | 15.9042 | 80.4674 | 16.1 | 15.7 | 80.67 | 80.27 | Off flood-path (heuristic) |

## Jalaput Dam (Andhra Pradesh)
Dam coordinates: 18.62, 82.58

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Koraput | 21 | 25.4 | 47,468 | 18.8120 | 82.7105 | 19.01 | 18.61 | 82.91 | 82.51 | Off flood-path (heuristic) |
| Jeypore | 21 | 26.3 | 84,830 | 18.8563 | 82.5716 | 19.06 | 18.66 | 82.77 | 82.37 | Off flood-path (heuristic) |
| Sunabeda | 21 | 28.9 | 50,394 | 18.7284 | 82.8293 | 18.93 | 18.53 | 83.03 | 82.63 | Off flood-path (heuristic) |
| Kotapārh | 37 | 64.0 | 16,326 | 19.1426 | 82.3254 | 19.34 | 18.94 | 82.53 | 82.13 | Off flood-path (heuristic) |
| Sālūr | 02 | 66.9 | 50,206 | 18.5172 | 83.2055 | 18.72 | 18.32 | 83.41 | 83.01 | Off flood-path (heuristic) |
| Nowrangapur | 21 | 68.0 | 1,220,946 | 19.2311 | 82.5483 | 19.43 | 19.03 | 82.75 | 82.35 | Off flood-path (heuristic) |
| Jagdalpur | 37 | 78.0 | 125,463 | 19.0814 | 82.0213 | 19.28 | 18.88 | 82.22 | 81.82 | Off flood-path (heuristic) |
| Malakanagiri | 21 | 78.3 | 31,007 | 18.3643 | 81.8880 | 18.56 | 18.16 | 82.09 | 81.69 | Off flood-path (heuristic) |
| Bobbili | 02 | 82.3 | 56,819 | 18.5737 | 83.3593 | 18.77 | 18.37 | 83.56 | 83.16 | Off flood-path (heuristic) |
| Pārvatipuram | 02 | 90.9 | 53,844 | 18.7839 | 83.4257 | 18.98 | 18.58 | 83.63 | 83.23 | Off flood-path (heuristic) |
| Chodavaram | 02 | 95.6 | 29,000 | 17.8288 | 82.9353 | 18.03 | 17.63 | 83.14 | 82.74 | Downstream (heuristic - verify) |
| Vizianagaram | 02 | 104.1 | 228,720 | 18.1169 | 83.4115 | 18.32 | 17.92 | 83.61 | 83.21 | Downstream (heuristic - verify) |
| Nellimarla | 02 | 105.0 | 20,498 | 18.1562 | 83.4473 | 18.36 | 17.96 | 83.65 | 83.25 | Downstream (heuristic - verify) |
| Narsīpatnam | 02 | 106.0 | 33,757 | 17.6671 | 82.6124 | 17.87 | 17.47 | 82.81 | 82.41 | Downstream (heuristic - verify) |
| Rāyagada | 21 | 107.1 | 71,208 | 19.1713 | 83.4143 | 19.37 | 18.97 | 83.61 | 83.21 | Off flood-path (heuristic) |
| Sriramnagar | 02 | 107.4 | 18,893 | 18.2833 | 83.5342 | 18.48 | 18.08 | 83.73 | 83.33 | Downstream (heuristic - verify) |
| Chīpurupalle | 02 | 109.8 | 25,898 | 18.3114 | 83.5685 | 18.51 | 18.11 | 83.77 | 83.37 | Downstream (heuristic - verify) |
| Chandili | 21 | 111.3 | 18,552 | 19.2466 | 83.4058 | 19.45 | 19.05 | 83.61 | 83.21 | Off flood-path (heuristic) |
| Anakapalle | 02 | 112.6 | 86,519 | 17.6913 | 83.0040 | 17.89 | 17.49 | 83.2 | 82.8 | Downstream (heuristic - verify) |
| Vepagunta | 02 | 115.2 | 26,881 | 17.7784 | 83.2158 | 17.98 | 17.58 | 83.42 | 83.02 | Downstream (heuristic - verify) |
| Rāzām | 02 | 115.4 | 42,197 | 18.4491 | 83.6596 | 18.65 | 18.25 | 83.86 | 83.46 | Off flood-path (heuristic) |
| Gajuwaka | 02 | 122.4 | 258,944 | 17.7000 | 83.2167 | 17.9 | 17.5 | 83.42 | 83.02 | Downstream (heuristic - verify) |
| Elamanchili | 02 | 122.6 | 27,265 | 17.5491 | 82.8575 | 17.75 | 17.35 | 83.06 | 82.66 | Downstream (heuristic - verify) |
| Umarkot | 37 | 122.7 | 28,993 | 19.6653 | 82.2063 | 19.87 | 19.47 | 82.41 | 82.01 | Off flood-path (heuristic) |
| Bhīmunipatnam | 02 | 122.7 | 55,082 | 17.8902 | 83.4520 | 18.09 | 17.69 | 83.65 | 83.25 | Downstream (heuristic - verify) |
| Visakhapatnam | 02 | 123.4 | 1,063,178 | 17.6801 | 83.2016 | 17.88 | 17.48 | 83.4 | 83.0 | Downstream (heuristic - verify) |
| Pālkonda | 02 | 123.9 | 29,378 | 18.6037 | 83.7557 | 18.8 | 18.4 | 83.96 | 83.56 | Off flood-path (heuristic) |
| Rasapūdipalem | 02 | 125.6 | 1,728,128 | 17.7331 | 83.3162 | 17.93 | 17.53 | 83.52 | 83.12 | Downstream (heuristic - verify) |
| Bacheli | 37 | 138.3 | 21,435 | 18.6843 | 81.2686 | 18.88 | 18.48 | 81.47 | 81.07 | Off flood-path (heuristic) |
| Gunupur | 21 | 139.1 | 28,870 | 19.0804 | 83.8088 | 19.28 | 18.88 | 84.01 | 83.61 | Off flood-path (heuristic) |
| Payakaraopeta | 02 | 139.2 | 27,001 | 17.3678 | 82.5683 | 17.57 | 17.17 | 82.77 | 82.37 | Downstream (heuristic - verify) |
| Kirandul | 37 | 139.3 | 19,053 | 18.6365 | 81.2583 | 18.84 | 18.44 | 81.46 | 81.06 | Off flood-path (heuristic) |
| Tuni | 02 | 140.3 | 53,425 | 17.3590 | 82.5461 | 17.56 | 17.16 | 82.75 | 82.35 | Downstream (heuristic - verify) |
| Amudālavalasa | 02 | 141.4 | 39,799 | 18.4103 | 83.9030 | 18.61 | 18.21 | 84.1 | 83.7 | Off flood-path (heuristic) |
| Jūnāgarh | 37 | 142.8 | 19,656 | 19.8599 | 82.9339 | 20.06 | 19.66 | 83.13 | 82.73 | Off flood-path (heuristic) |
| Srikakulam | 02 | 143.5 | 137,944 | 18.2989 | 83.8975 | 18.5 | 18.1 | 84.1 | 83.7 | Downstream (heuristic - verify) |
| Kondagaon | 37 | 144.6 | 30,921 | 19.5908 | 81.6640 | 19.79 | 19.39 | 81.86 | 81.46 | Off flood-path (heuristic) |
| Bhawānipatna | 21 | 155.8 | 69,045 | 19.9072 | 83.1670 | 20.11 | 19.71 | 83.37 | 82.97 | Off flood-path (heuristic) |
| Narasannapeta | 02 | 156.1 | 26,280 | 18.4143 | 84.0446 | 18.61 | 18.21 | 84.24 | 83.84 | Off flood-path (heuristic) |
| Rampachodavaram | 02 | 156.3 | 25,074 | 17.4409 | 81.7756 | 17.64 | 17.24 | 81.98 | 81.58 | Off flood-path (heuristic) |
| Paralakhemundi | 21 | 160.5 | 87,152 | 18.7762 | 84.0950 | 18.98 | 18.58 | 84.3 | 83.9 | Off flood-path (heuristic) |
| Gokavaram | 02 | 170.0 | 16,389 | 17.2582 | 81.8499 | 17.46 | 17.06 | 82.05 | 81.65 | Off flood-path (heuristic) |
| Pithāpuram | 02 | 170.7 | 54,859 | 17.1168 | 82.2528 | 17.32 | 16.92 | 82.45 | 82.05 | Downstream (heuristic - verify) |
| Tekkali | 02 | 174.5 | 28,631 | 18.6057 | 84.2355 | 18.81 | 18.41 | 84.44 | 84.04 | Off flood-path (heuristic) |
| Peddāpuram | 02 | 177.8 | 49,477 | 17.0770 | 82.1384 | 17.28 | 16.88 | 82.34 | 81.94 | Downstream (heuristic - verify) |
| Sāmalkot | 02 | 179.0 | 56,864 | 17.0568 | 82.1764 | 17.26 | 16.86 | 82.38 | 81.98 | Downstream (heuristic - verify) |
| Polavaram | 02 | 181.9 | 43,710 | 17.2475 | 81.6437 | 17.45 | 17.05 | 81.84 | 81.44 | Off flood-path (heuristic) |
| Suryaraopeta | 02 | 184.1 | 24,112 | 16.9996 | 82.2232 | 17.2 | 16.8 | 82.42 | 82.02 | Downstream (heuristic - verify) |
| Nārāinpur | 37 | 186.0 | 22,106 | 19.7179 | 81.2444 | 19.92 | 19.52 | 81.44 | 81.04 | Off flood-path (heuristic) |
| Kharhiāl | 21 | 186.5 | 15,087 | 20.2885 | 82.7606 | 20.49 | 20.09 | 82.96 | 82.56 | Off flood-path (heuristic) |
| Kesinga | 21 | 186.8 | 19,239 | 20.1878 | 83.2195 | 20.39 | 19.99 | 83.42 | 83.02 | Off flood-path (heuristic) |
| Bījāpur | 37 | 186.8 | 16,129 | 18.7939 | 80.8160 | 18.99 | 18.59 | 81.02 | 80.62 | Off flood-path (heuristic) |
| Kākināda | 02 | 188.1 | 384,182 | 16.9604 | 82.2381 | 17.16 | 16.76 | 82.44 | 82.04 | Downstream (heuristic - verify) |
| Ramanayyapeta | 02 | 189.7 | 28,369 | 16.9452 | 82.2385 | 17.15 | 16.75 | 82.44 | 82.04 | Downstream (heuristic - verify) |
| Palāsa | 02 | 193.5 | 65,833 | 18.7726 | 84.4101 | 18.97 | 18.57 | 84.61 | 84.21 | Off flood-path (heuristic) |
| Kāsībugga | 02 | 194.0 | 57,507 | 18.7593 | 84.4161 | 18.96 | 18.56 | 84.62 | 84.22 | Off flood-path (heuristic) |
| Titlāgarh | 21 | 195.1 | 34,067 | 20.2896 | 83.1523 | 20.49 | 20.09 | 83.35 | 82.95 | Off flood-path (heuristic) |
| Katheru | 02 | 195.4 | 23,572 | 17.0379 | 81.7760 | 17.24 | 16.84 | 81.98 | 81.58 | Off flood-path (heuristic) |
| Morampudi | 02 | 198.6 | 15,346 | 16.9800 | 81.8371 | 17.18 | 16.78 | 82.04 | 81.64 | Off flood-path (heuristic) |
| Rajamahendravaram | 02 | 198.6 | 376,333 | 17.0052 | 81.7778 | 17.21 | 16.81 | 81.98 | 81.58 | Off flood-path (heuristic) |
| Hukumpeta | 02 | 199.2 | 16,985 | 16.9887 | 81.8017 | 17.19 | 16.79 | 82.0 | 81.6 | Off flood-path (heuristic) |
| Kovvūr | 02 | 199.8 | 40,379 | 17.0162 | 81.7293 | 17.22 | 16.82 | 81.93 | 81.53 | Off flood-path (heuristic) |

## Prakasham Barrage (Andhra Pradesh)
Dam coordinates: 16.51, 80.61

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Tādepalle | 02 | 3.2 | 64,149 | 16.4833 | 80.6000 | 16.68 | 16.28 | 80.8 | 80.4 | Off flood-path (heuristic) |
| Vijayawada | 02 | 3.9 | 1,143,232 | 16.5074 | 80.6466 | 16.71 | 16.31 | 80.85 | 80.45 | Downstream (heuristic - verify) |
| Yanamalakuduru | 02 | 6.7 | 34,177 | 16.4853 | 80.6675 | 16.69 | 16.29 | 80.87 | 80.47 | Downstream (heuristic - verify) |
| Rāmavarappādu | 02 | 7.6 | 22,222 | 16.5209 | 80.6808 | 16.72 | 16.32 | 80.88 | 80.48 | Downstream (heuristic - verify) |
| Kānūru | 02 | 8.8 | 49,006 | 16.4985 | 80.6914 | 16.7 | 16.3 | 80.89 | 80.49 | Downstream (heuristic - verify) |
| Mangalagiri | 02 | 9.9 | 107,197 | 16.4308 | 80.5682 | 16.63 | 16.23 | 80.77 | 80.37 | Off flood-path (heuristic) |
| Amaravati | 02 | 10.0 | 103,000 | 16.5140 | 80.5160 | 16.71 | 16.31 | 80.72 | 80.32 | Off flood-path (heuristic) |
| Tādigadapa | 02 | 10.2 | 17,462 | 16.4713 | 80.6970 | 16.67 | 16.27 | 80.9 | 80.5 | Downstream (heuristic - verify) |
| Poranki | 02 | 11.0 | 25,545 | 16.4777 | 80.7075 | 16.68 | 16.28 | 80.91 | 80.51 | Downstream (heuristic - verify) |
| Ibrāhīmpatnam | 02 | 13.0 | 29,432 | 16.5830 | 80.5143 | 16.78 | 16.38 | 80.71 | 80.31 | Off flood-path (heuristic) |
| Kondapalle | 02 | 14.2 | 38,714 | 16.6199 | 80.5424 | 16.82 | 16.42 | 80.74 | 80.34 | Off flood-path (heuristic) |
| Gannavaram | 02 | 20.8 | 19,410 | 16.5409 | 80.8021 | 16.74 | 16.34 | 81.0 | 80.6 | Downstream (heuristic - verify) |
| Guntur | 02 | 28.5 | 670,073 | 16.2997 | 80.4573 | 16.5 | 16.1 | 80.66 | 80.26 | Off flood-path (heuristic) |
| Vuyyūru | 02 | 29.8 | 36,755 | 16.3631 | 80.8441 | 16.56 | 16.16 | 81.04 | 80.64 | Downstream (heuristic - verify) |
| Thenali | 02 | 29.9 | 164,937 | 16.2425 | 80.6398 | 16.44 | 16.04 | 80.84 | 80.44 | Off flood-path (heuristic) |
| Nūzvīd | 02 | 39.9 | 58,590 | 16.7885 | 80.8459 | 16.99 | 16.59 | 81.05 | 80.65 | Off flood-path (heuristic) |
| Gudivāda | 02 | 41.9 | 118,167 | 16.4355 | 80.9955 | 16.64 | 16.24 | 81.2 | 80.8 | Downstream (heuristic - verify) |
| Phirangipuram | 02 | 44.4 | 17,335 | 16.2908 | 80.2623 | 16.49 | 16.09 | 80.46 | 80.06 | Off flood-path (heuristic) |
| Nandigāma | 02 | 45.2 | 38,219 | 16.7717 | 80.2860 | 16.97 | 16.57 | 80.49 | 80.09 | Off flood-path (heuristic) |
| Bhattiprolu | 02 | 48.8 | 18,001 | 16.1026 | 80.7807 | 16.3 | 15.9 | 80.98 | 80.58 | Off flood-path (heuristic) |
| Ponnur | 02 | 49.2 | 59,913 | 16.0711 | 80.5494 | 16.27 | 15.87 | 80.75 | 80.35 | Off flood-path (heuristic) |
| Ponnūru | 02 | 49.8 | 57,170 | 16.0655 | 80.5520 | 16.27 | 15.87 | 80.75 | 80.35 | Off flood-path (heuristic) |
| Sattenapalle | 02 | 50.5 | 56,721 | 16.3938 | 80.1522 | 16.59 | 16.19 | 80.35 | 79.95 | Off flood-path (heuristic) |
| Madhira | 40 | 52.9 | 22,716 | 16.9233 | 80.3631 | 17.12 | 16.72 | 80.56 | 80.16 | Off flood-path (heuristic) |
| Challapalle | 02 | 55.5 | 16,841 | 16.1176 | 80.9314 | 16.32 | 15.92 | 81.13 | 80.73 | Downstream (heuristic - verify) |
| Eluru | 02 | 57.3 | 218,020 | 16.7131 | 81.1044 | 16.91 | 16.51 | 81.3 | 80.9 | Downstream (heuristic - verify) |
| Repalle | 02 | 59.5 | 50,866 | 16.0184 | 80.8296 | 16.22 | 15.82 | 81.03 | 80.63 | Off flood-path (heuristic) |
| Avanigadda | 02 | 63.5 | 25,761 | 16.0215 | 80.9181 | 16.22 | 15.82 | 81.12 | 80.72 | Downstream (heuristic - verify) |
| Pedana | 02 | 63.6 | 30,721 | 16.2558 | 81.1438 | 16.46 | 16.06 | 81.34 | 80.94 | Downstream (heuristic - verify) |
| Kaikalūr | 02 | 64.6 | 20,763 | 16.5515 | 81.2140 | 16.75 | 16.35 | 81.41 | 81.01 | Downstream (heuristic - verify) |
| Chilakalūrupet | 02 | 66.5 | 101,398 | 16.0899 | 80.1671 | 16.29 | 15.89 | 80.37 | 79.97 | Off flood-path (heuristic) |
| Machilīpatnam | 02 | 66.9 | 192,827 | 16.1875 | 81.1389 | 16.39 | 15.99 | 81.34 | 80.94 | Downstream (heuristic - verify) |
| Nadim Tiruvuru | 02 | 66.9 | 18,567 | 17.1121 | 80.6088 | 17.31 | 16.91 | 80.81 | 80.41 | Off flood-path (heuristic) |
| Narasaraopet | 02 | 67.2 | 117,489 | 16.2349 | 80.0493 | 16.43 | 16.03 | 80.25 | 79.85 | Off flood-path (heuristic) |
| Bāpatla | 02 | 69.1 | 70,777 | 15.9042 | 80.4674 | 16.1 | 15.7 | 80.67 | 80.27 | Off flood-path (heuristic) |
| Jaggayyapeta | 02 | 69.2 | 41,180 | 16.8938 | 80.0981 | 17.09 | 16.69 | 80.3 | 79.9 | Off flood-path (heuristic) |
| Jaggaiahpet | 02 | 69.3 | 53,530 | 16.8915 | 80.0955 | 17.09 | 16.69 | 80.3 | 79.9 | Off flood-path (heuristic) |
| Kanuru | 02 | 73.1 | 43,696 | 16.2858 | 81.2546 | 16.49 | 16.09 | 81.45 | 81.05 | Downstream (heuristic - verify) |
| Pidugurālla | 02 | 77.2 | 63,103 | 16.4793 | 79.8863 | 16.68 | 16.28 | 80.09 | 79.69 | Off flood-path (heuristic) |
| Chīrāla | 02 | 81.1 | 92,942 | 15.8239 | 80.3522 | 16.02 | 15.62 | 80.55 | 80.15 | Off flood-path (heuristic) |
| Sādpalli | 40 | 81.5 | 31,857 | 17.2099 | 80.8364 | 17.41 | 17.01 | 81.04 | 80.64 | Off flood-path (heuristic) |
| Akivīdu | 02 | 82.6 | 40,413 | 16.5822 | 81.3811 | 16.78 | 16.38 | 81.58 | 81.18 | Downstream (heuristic - verify) |
| Sathupalli | 40 | 86.7 | 40,000 | 17.2497 | 80.8690 | 17.45 | 17.05 | 81.07 | 80.67 | Off flood-path (heuristic) |
| Vetapālem | 02 | 86.9 | 38,671 | 15.7850 | 80.3066 | 15.99 | 15.59 | 80.51 | 80.11 | Off flood-path (heuristic) |
| Kodār | 40 | 87.5 | 64,234 | 16.9985 | 79.9656 | 17.2 | 16.8 | 80.17 | 79.77 | Off flood-path (heuristic) |
| Khammam | 40 | 95.9 | 196,283 | 17.2477 | 80.1437 | 17.45 | 17.05 | 80.34 | 79.94 | Off flood-path (heuristic) |
| Khanapuram Haveli | 40 | 96.0 | 53,442 | 17.2624 | 80.1681 | 17.46 | 17.06 | 80.37 | 79.97 | Off flood-path (heuristic) |
| Bhimavaram | 02 | 97.4 | 146,961 | 16.5408 | 81.5232 | 16.74 | 16.34 | 81.72 | 81.32 | Downstream (heuristic - verify) |
| Addanki | 02 | 103.3 | 28,547 | 15.8106 | 79.9734 | 16.01 | 15.61 | 80.17 | 79.77 | Off flood-path (heuristic) |
| Tadepalligudem | 02 | 103.4 | 112,655 | 16.8147 | 81.5272 | 17.01 | 16.61 | 81.73 | 81.33 | Downstream (heuristic - verify) |
| Vinukonda | 02 | 105.9 | 62,550 | 16.0531 | 79.7396 | 16.25 | 15.85 | 79.94 | 79.54 | Off flood-path (heuristic) |
| Attili | 02 | 107.6 | 68,196 | 16.7000 | 81.6000 | 16.9 | 16.5 | 81.8 | 81.4 | Downstream (heuristic - verify) |
| Chunchupally | 40 | 112.7 | 19,944 | 17.5233 | 80.6041 | 17.72 | 17.32 | 80.8 | 80.4 | Off flood-path (heuristic) |
| Dornakal | 40 | 114.9 | 15,350 | 17.4447 | 80.1491 | 17.64 | 17.24 | 80.35 | 79.95 | Off flood-path (heuristic) |
| Kottagūdem | 40 | 115.8 | 79,819 | 17.5511 | 80.6178 | 17.75 | 17.35 | 80.82 | 80.42 | Off flood-path (heuristic) |
| Narasapur | 02 | 116.4 | 59,306 | 16.4342 | 81.6984 | 16.63 | 16.23 | 81.9 | 81.5 | Downstream (heuristic - verify) |
| Tanuku | 02 | 117.3 | 77,962 | 16.7544 | 81.6814 | 16.95 | 16.55 | 81.88 | 81.48 | Downstream (heuristic - verify) |
| Miryalaguda | 40 | 118.6 | 104,918 | 16.8722 | 79.5625 | 17.07 | 16.67 | 79.76 | 79.36 | Off flood-path (heuristic) |
| Palwancha | 40 | 119.4 | 80,199 | 17.5815 | 80.6765 | 17.78 | 17.38 | 80.88 | 80.48 | Off flood-path (heuristic) |
| Palakollu | 02 | 119.4 | 81,199 | 16.5167 | 81.7300 | 16.72 | 16.32 | 81.93 | 81.53 | Downstream (heuristic - verify) |
| Nidadavole | 02 | 121.4 | 44,173 | 16.9057 | 81.6722 | 17.11 | 16.71 | 81.87 | 81.47 | Downstream (heuristic - verify) |
| Pāloncha | 40 | 121.8 | 75,224 | 17.6018 | 80.7051 | 17.8 | 17.4 | 80.91 | 80.51 | Off flood-path (heuristic) |
| Penugonda | 02 | 122.1 | 23,654 | 16.6536 | 81.7455 | 16.85 | 16.45 | 81.95 | 81.55 | Downstream (heuristic - verify) |
| Yellandu | 40 | 124.0 | 43,787 | 17.5906 | 80.3215 | 17.79 | 17.39 | 80.52 | 80.12 | Off flood-path (heuristic) |
| Mācherla | 02 | 125.3 | 57,290 | 16.4764 | 79.4353 | 16.68 | 16.28 | 79.64 | 79.24 | Off flood-path (heuristic) |
| Suriāpet | 40 | 126.5 | 111,729 | 17.1405 | 79.6205 | 17.34 | 16.94 | 79.82 | 79.42 | Off flood-path (heuristic) |
| Ongole | 02 | 127.2 | 208,344 | 15.5036 | 80.0445 | 15.7 | 15.3 | 80.24 | 79.84 | Off flood-path (heuristic) |
| Darsi | 02 | 129.1 | 33,418 | 15.7698 | 79.6794 | 15.97 | 15.57 | 79.88 | 79.48 | Off flood-path (heuristic) |
| Kovvūr | 02 | 131.8 | 40,379 | 17.0162 | 81.7293 | 17.22 | 16.82 | 81.93 | 81.53 | Downstream (heuristic - verify) |
| Bhadrāchalam | 40 | 132.2 | 50,087 | 17.6685 | 80.8889 | 17.87 | 17.47 | 81.09 | 80.69 | Off flood-path (heuristic) |
| Dowleswaram | 02 | 133.7 | 44,637 | 16.9476 | 81.7799 | 17.15 | 16.75 | 81.98 | 81.58 | Downstream (heuristic - verify) |
| Sarapāka | 40 | 134.2 | 22,149 | 17.6913 | 80.8700 | 17.89 | 17.49 | 81.07 | 80.67 | Off flood-path (heuristic) |
| Rajamahendravaram | 02 | 136.0 | 376,333 | 17.0052 | 81.7778 | 17.21 | 16.81 | 81.98 | 81.58 | Downstream (heuristic - verify) |
| Mahbūbābād | 40 | 137.1 | 42,851 | 17.5973 | 80.0021 | 17.8 | 17.4 | 80.2 | 79.8 | Off flood-path (heuristic) |
| Polavaram | 02 | 137.2 | 43,710 | 17.2475 | 81.6437 | 17.45 | 17.05 | 81.84 | 81.44 | Downstream (heuristic - verify) |
| Katheru | 02 | 137.3 | 23,572 | 17.0379 | 81.7760 | 17.24 | 16.84 | 81.98 | 81.58 | Downstream (heuristic - verify) |
| Hukumpeta | 02 | 137.6 | 16,985 | 16.9887 | 81.8017 | 17.19 | 16.79 | 82.0 | 81.6 | Downstream (heuristic - verify) |
| Vijayapuri North | 40 | 137.7 | 15,887 | 16.5853 | 79.3205 | 16.79 | 16.39 | 79.52 | 79.12 | Off flood-path (heuristic) |
| Morampudi | 02 | 140.7 | 15,346 | 16.9800 | 81.8371 | 17.18 | 16.78 | 82.04 | 81.64 | Downstream (heuristic - verify) |
| Nakrekal | 40 | 145.3 | 29,126 | 17.1626 | 79.4275 | 17.36 | 16.96 | 79.63 | 79.23 | Off flood-path (heuristic) |
| Mandapeta | 02 | 145.9 | 56,063 | 16.8625 | 81.9292 | 17.06 | 16.66 | 82.13 | 81.73 | Downstream (heuristic - verify) |
| Podili | 02 | 146.3 | 31,145 | 15.6064 | 79.6149 | 15.81 | 15.41 | 79.81 | 79.41 | Off flood-path (heuristic) |
| Amalāpuram | 02 | 149.0 | 53,231 | 16.5787 | 82.0061 | 16.78 | 16.38 | 82.21 | 81.81 | Downstream (heuristic - verify) |
| Nalgonda | 40 | 155.3 | 154,326 | 17.0544 | 79.2671 | 17.25 | 16.85 | 79.47 | 79.07 | Off flood-path (heuristic) |
| Singarāyakonda | 02 | 155.3 | 19,400 | 15.2305 | 80.0279 | 15.43 | 15.03 | 80.23 | 79.83 | Off flood-path (heuristic) |
| Rāmachandrapuram | 02 | 155.4 | 43,657 | 16.8364 | 82.0287 | 17.04 | 16.64 | 82.23 | 81.83 | Downstream (heuristic - verify) |
| Gokavaram | 02 | 156.0 | 16,389 | 17.2582 | 81.8499 | 17.46 | 17.06 | 82.05 | 81.65 | Downstream (heuristic - verify) |
| Torūr | 40 | 156.5 | 19,100 | 17.5835 | 79.6586 | 17.78 | 17.38 | 79.86 | 79.46 | Off flood-path (heuristic) |
| Manuguru | 40 | 159.6 | 32,539 | 17.9302 | 80.8267 | 18.13 | 17.73 | 81.03 | 80.63 | Off flood-path (heuristic) |
| Rampachodavaram | 02 | 161.5 | 25,074 | 17.4409 | 81.7756 | 17.64 | 17.24 | 81.98 | 81.58 | Off flood-path (heuristic) |
| Kandukūr | 02 | 162.6 | 57,246 | 15.2154 | 79.9039 | 15.42 | 15.02 | 80.1 | 79.7 | Off flood-path (heuristic) |
| Mārkāpur | 02 | 167.2 | 71,092 | 15.7353 | 79.2685 | 15.94 | 15.54 | 79.47 | 79.07 | Off flood-path (heuristic) |
| Kanigiri U | 02 | 170.2 | 37,420 | 15.4064 | 79.5070 | 15.61 | 15.21 | 79.71 | 79.31 | Off flood-path (heuristic) |
| Kanigiri | 02 | 170.3 | 25,045 | 15.4055 | 79.5069 | 15.61 | 15.21 | 79.71 | 79.31 | Off flood-path (heuristic) |
| Yanam | 02 | 172.7 | 55,626 | 16.7331 | 82.2136 | 16.93 | 16.53 | 82.41 | 82.01 | Downstream (heuristic - verify) |
| Peddāpuram | 02 | 174.5 | 49,477 | 17.0770 | 82.1384 | 17.28 | 16.88 | 82.34 | 81.94 | Downstream (heuristic - verify) |
| Narsampet | 40 | 175.1 | 30,963 | 17.9279 | 79.8923 | 18.13 | 17.73 | 80.09 | 79.69 | Off flood-path (heuristic) |
| Sāmalkot | 02 | 177.5 | 56,864 | 17.0568 | 82.1764 | 17.26 | 16.86 | 82.38 | 81.98 | Downstream (heuristic - verify) |
| Ramanayyapeta | 02 | 180.0 | 28,369 | 16.9452 | 82.2385 | 17.15 | 16.75 | 82.44 | 82.04 | Downstream (heuristic - verify) |
| Suryaraopeta | 02 | 180.2 | 24,112 | 16.9996 | 82.2232 | 17.2 | 16.8 | 82.42 | 82.02 | Downstream (heuristic - verify) |
| Kākināda | 02 | 180.5 | 384,182 | 16.9604 | 82.2381 | 17.16 | 16.76 | 82.44 | 82.04 | Downstream (heuristic - verify) |
| Devarkonda | 40 | 181.1 | 29,731 | 16.6919 | 78.9207 | 16.89 | 16.49 | 79.12 | 78.72 | Off flood-path (heuristic) |
| Pithāpuram | 02 | 187.4 | 54,859 | 17.1168 | 82.2528 | 17.32 | 16.92 | 82.45 | 82.05 | Downstream (heuristic - verify) |
| Kāvali | 02 | 189.1 | 90,099 | 14.9163 | 79.9945 | 15.12 | 14.72 | 80.19 | 79.79 | Off flood-path (heuristic) |
| Cumbum | 02 | 190.6 | 22,653 | 15.5817 | 79.1106 | 15.78 | 15.38 | 79.31 | 78.91 | Off flood-path (heuristic) |
| Srisailam Project RFC Township | 02 | 191.5 | 21,452 | 16.0733 | 78.8741 | 16.27 | 15.87 | 79.07 | 78.67 | Off flood-path (heuristic) |
| Srīsailain | 02 | 192.2 | 24,142 | 16.0722 | 78.8682 | 16.27 | 15.87 | 79.07 | 78.67 | Off flood-path (heuristic) |
| Warangal | 40 | 198.3 | 704,570 | 18.0000 | 79.5833 | 18.2 | 17.8 | 79.78 | 79.38 | Off flood-path (heuristic) |
| Mulugu | 40 | 199.9 | 297,671 | 18.1910 | 79.9430 | 18.39 | 17.99 | 80.14 | 79.74 | Off flood-path (heuristic) |

## Tungabhadra Dam (Karnataka)
Dam coordinates: 15.27, 76.33

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Hosapete | 19 | 6.1 | 206,167 | 15.2695 | 76.3871 | 15.47 | 15.07 | 76.59 | 76.19 | Downstream (heuristic - verify) |
| Kamalāpuram | 19 | 16.2 | 25,552 | 15.3044 | 76.4765 | 15.5 | 15.1 | 76.68 | 76.28 | Downstream (heuristic - verify) |
| Koppal | 19 | 20.6 | 70,698 | 15.3452 | 76.1548 | 15.55 | 15.15 | 76.35 | 75.95 | Off flood-path (heuristic) |
| Gangavati | 19 | 27.9 | 114,642 | 15.4313 | 76.5293 | 15.63 | 15.23 | 76.73 | 76.33 | Downstream (heuristic - verify) |
| Sandūr | 19 | 31.0 | 37,431 | 15.0861 | 76.5469 | 15.29 | 14.89 | 76.75 | 76.35 | Off flood-path (heuristic) |
| Kampli | 19 | 32.7 | 39,307 | 15.4063 | 76.6001 | 15.61 | 15.21 | 76.8 | 76.4 | Downstream (heuristic - verify) |
| Kurikuppi | 19 | 34.7 | 22,560 | 15.2176 | 76.6487 | 15.42 | 15.02 | 76.85 | 76.45 | Downstream (heuristic - verify) |
| Kūdligi | 19 | 41.0 | 26,680 | 14.9050 | 76.3853 | 15.1 | 14.71 | 76.59 | 76.19 | Off flood-path (heuristic) |
| Mundargi | 19 | 48.4 | 24,919 | 15.2068 | 75.8839 | 15.41 | 15.01 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Kottūru | 19 | 50.9 | 26,289 | 14.8244 | 76.2201 | 15.02 | 14.62 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Hadagalli | 19 | 51.0 | 27,967 | 15.0205 | 75.9318 | 15.22 | 14.82 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Kushtagi | 19 | 56.1 | 24,878 | 15.7562 | 76.1911 | 15.96 | 15.56 | 76.39 | 75.99 | Off flood-path (heuristic) |
| Gajendragarh | 19 | 64.6 | 32,359 | 15.7363 | 75.9698 | 15.94 | 15.54 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Harpanahalli | 19 | 65.0 | 47,039 | 14.7877 | 75.9886 | 14.99 | 14.59 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Ballari | 19 | 65.3 | 410,445 | 15.1420 | 76.9240 | 15.34 | 14.94 | 77.12 | 76.72 | Downstream (heuristic - verify) |
| Naregal | 19 | 65.3 | 17,403 | 15.5732 | 75.8080 | 15.77 | 15.37 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Tekkalakote | 19 | 65.6 | 26,224 | 15.5344 | 76.8770 | 15.73 | 15.33 | 77.08 | 76.68 | Downstream (heuristic - verify) |
| Sindhnūr | 19 | 71.9 | 75,837 | 15.7698 | 76.7558 | 15.97 | 15.57 | 76.96 | 76.56 | Downstream (heuristic - verify) |
| Siruguppa | 19 | 72.3 | 52,492 | 15.6300 | 76.8922 | 15.83 | 15.43 | 77.09 | 76.69 | Downstream (heuristic - verify) |
| Molakālumuru | 19 | 76.0 | 15,797 | 14.7178 | 76.7468 | 14.92 | 14.52 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Gadag | 19 | 77.2 | 172,612 | 15.4298 | 75.6297 | 15.63 | 15.23 | 75.83 | 75.43 | Off flood-path (heuristic) |
| Gadag-Betageri | 19 | 78.2 | 172,813 | 15.4167 | 75.6167 | 15.62 | 15.22 | 75.82 | 75.42 | Off flood-path (heuristic) |
| Ron | 19 | 79.7 | 23,311 | 15.6994 | 75.7341 | 15.9 | 15.5 | 75.93 | 75.53 | Off flood-path (heuristic) |
| Ilkal | 19 | 80.1 | 60,242 | 15.9592 | 76.1135 | 16.16 | 15.76 | 76.31 | 75.91 | Off flood-path (heuristic) |
| Shirhatti | 19 | 80.6 | 17,610 | 15.2335 | 75.5800 | 15.43 | 15.03 | 75.78 | 75.38 | Off flood-path (heuristic) |
| Mudgal | 19 | 83.4 | 22,731 | 16.0119 | 76.4420 | 16.21 | 15.81 | 76.64 | 76.24 | Off flood-path (heuristic) |
| Jagalūr | 19 | 83.4 | 17,257 | 14.5196 | 76.3392 | 14.72 | 14.32 | 76.54 | 76.14 | Off flood-path (heuristic) |
| Rāyadrug | 02 | 84.7 | 61,749 | 14.6997 | 76.8524 | 14.9 | 14.5 | 77.05 | 76.65 | Off flood-path (heuristic) |
| Mulgund | 19 | 86.8 | 18,928 | 15.2807 | 75.5213 | 15.48 | 15.08 | 75.72 | 75.32 | Off flood-path (heuristic) |
| Hungund | 19 | 92.7 | 20,877 | 16.0621 | 76.0586 | 16.26 | 15.86 | 76.26 | 75.86 | Off flood-path (heuristic) |
| Lakshmeshwar | 19 | 93.7 | 36,754 | 15.1269 | 75.4694 | 15.33 | 14.93 | 75.67 | 75.27 | Off flood-path (heuristic) |
| Amīngarh | 19 | 96.6 | 15,073 | 16.0566 | 75.9477 | 16.26 | 15.86 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Annigeri | 19 | 97.7 | 28,267 | 15.4251 | 75.4335 | 15.63 | 15.23 | 75.63 | 75.23 | Off flood-path (heuristic) |
| Davangere | 19 | 99.2 | 435,128 | 14.4669 | 75.9269 | 14.67 | 14.27 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Bādāmi | 19 | 100.2 | 30,943 | 15.9149 | 75.6768 | 16.11 | 15.71 | 75.88 | 75.48 | Off flood-path (heuristic) |
| Lingsugūr | 19 | 100.9 | 35,411 | 16.1588 | 76.5217 | 16.36 | 15.96 | 76.72 | 76.32 | Off flood-path (heuristic) |
| Harihar | 19 | 101.2 | 83,219 | 14.5129 | 75.8072 | 14.71 | 14.31 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Ranebennur | 19 | 104.2 | 106,406 | 14.6224 | 75.6295 | 14.82 | 14.42 | 75.83 | 75.43 | Off flood-path (heuristic) |
| Guledagudda | 19 | 104.3 | 33,851 | 16.0502 | 75.7900 | 16.25 | 15.85 | 75.99 | 75.59 | Off flood-path (heuristic) |
| Kamatgi | 16 | 105.5 | 15,620 | 16.0779 | 75.8132 | 16.28 | 15.88 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Uravakonda | 02 | 105.7 | 35,565 | 14.9435 | 77.2549 | 15.14 | 14.74 | 77.45 | 77.05 | Downstream (heuristic - verify) |
| Adoni | 02 | 108.8 | 184,625 | 15.6279 | 77.2750 | 15.83 | 15.43 | 77.47 | 77.07 | Downstream (heuristic - verify) |
| Hatti | 19 | 109.1 | 16,278 | 16.1984 | 76.6604 | 16.4 | 16.0 | 76.86 | 76.46 | Off flood-path (heuristic) |
| Navalgund | 19 | 109.5 | 24,613 | 15.5588 | 75.3530 | 15.76 | 15.36 | 75.55 | 75.15 | Off flood-path (heuristic) |
| Mānvi | 19 | 111.3 | 46,465 | 15.9913 | 77.0503 | 16.19 | 15.79 | 77.25 | 76.85 | Downstream (heuristic - verify) |
| Guntakal | 02 | 111.3 | 126,270 | 15.1711 | 77.3624 | 15.37 | 14.97 | 77.56 | 77.16 | Downstream (heuristic - verify) |
| Challakere | 19 | 111.4 | 55,194 | 14.3180 | 76.6517 | 14.52 | 14.12 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Savanūr | 19 | 111.6 | 40,567 | 14.9733 | 75.3372 | 15.17 | 14.77 | 75.54 | 75.14 | Off flood-path (heuristic) |
| Byādgi | 19 | 112.3 | 30,014 | 14.6732 | 75.4868 | 14.87 | 14.47 | 75.69 | 75.29 | Off flood-path (heuristic) |
| Hāveri | 19 | 112.6 | 67,102 | 14.7935 | 75.4045 | 14.99 | 14.59 | 75.6 | 75.2 | Off flood-path (heuristic) |
| Nargund | 19 | 112.9 | 36,291 | 15.7230 | 75.3867 | 15.92 | 15.52 | 75.59 | 75.19 | Off flood-path (heuristic) |
| Kalyandurg | 02 | 115.9 | 32,328 | 14.5452 | 77.1055 | 14.75 | 14.35 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Kundgol | 19 | 116.1 | 18,726 | 15.2561 | 75.2473 | 15.46 | 15.06 | 75.45 | 75.05 | Off flood-path (heuristic) |
| Chitradurga | 19 | 116.7 | 145,853 | 14.2226 | 76.4004 | 14.42 | 14.02 | 76.6 | 76.2 | Off flood-path (heuristic) |
| Kosigi | 02 | 117.6 | 15,455 | 15.8551 | 77.2446 | 16.06 | 15.66 | 77.44 | 77.04 | Downstream (heuristic - verify) |
| Kerūr | 19 | 117.8 | 19,731 | 16.0138 | 75.5463 | 16.21 | 15.81 | 75.75 | 75.35 | Off flood-path (heuristic) |
| Muddebihāl | 19 | 120.6 | 34,217 | 16.3378 | 76.1317 | 16.54 | 16.14 | 76.33 | 75.93 | Off flood-path (heuristic) |
| Bankāpur | 19 | 121.0 | 22,529 | 14.9230 | 75.2622 | 15.12 | 14.72 | 75.46 | 75.06 | Off flood-path (heuristic) |
| Bagalkot | 19 | 122.4 | 111,933 | 16.1867 | 75.6961 | 16.39 | 15.99 | 75.9 | 75.5 | Off flood-path (heuristic) |
| Shiggaon | 19 | 122.6 | 28,207 | 14.9905 | 75.2250 | 15.19 | 14.79 | 75.42 | 75.02 | Off flood-path (heuristic) |
| Hubballi | 19 | 128.6 | 943,788 | 15.3478 | 75.1338 | 15.55 | 15.15 | 75.33 | 74.93 | Off flood-path (heuristic) |
| Rāmdurg | 19 | 133.7 | 34,800 | 15.9458 | 75.2978 | 16.15 | 15.75 | 75.5 | 75.1 | Off flood-path (heuristic) |
| Tālīkota | 19 | 133.8 | 31,693 | 16.4731 | 76.3109 | 16.67 | 16.27 | 76.51 | 76.11 | Off flood-path (heuristic) |
| Hirekerūr | 19 | 135.3 | 19,191 | 14.4551 | 75.3952 | 14.66 | 14.26 | 75.6 | 75.2 | Off flood-path (heuristic) |
| Emmiganūr | 02 | 135.6 | 95,149 | 15.7720 | 77.4835 | 15.97 | 15.57 | 77.68 | 77.28 | Downstream (heuristic - verify) |
| Honnāli | 19 | 136.2 | 17,928 | 14.2398 | 75.6451 | 14.44 | 14.04 | 75.85 | 75.45 | Off flood-path (heuristic) |
| Holalkere | 19 | 137.3 | 15,783 | 14.0429 | 76.1850 | 14.24 | 13.84 | 76.38 | 75.98 | Off flood-path (heuristic) |
| Saundatti | 19 | 141.1 | 41,215 | 15.7661 | 75.1178 | 15.97 | 15.57 | 75.32 | 74.92 | Off flood-path (heuristic) |
| Hāngal | 19 | 141.1 | 28,159 | 14.7646 | 75.1246 | 14.96 | 14.56 | 75.32 | 74.92 | Off flood-path (heuristic) |
| Gooty | 02 | 141.3 | 48,658 | 15.1184 | 77.6378 | 15.32 | 14.92 | 77.84 | 77.44 | Downstream (heuristic - verify) |
| Bilgi | 19 | 141.9 | 17,792 | 16.3471 | 75.6180 | 16.55 | 16.15 | 75.82 | 75.42 | Off flood-path (heuristic) |
| Mundgod | 19 | 142.8 | 18,866 | 14.9714 | 75.0366 | 15.17 | 14.77 | 75.24 | 74.84 | Off flood-path (heuristic) |
| Devadurga | 19 | 143.7 | 28,929 | 16.4231 | 76.9358 | 16.62 | 16.22 | 77.14 | 76.74 | Downstream (heuristic - verify) |
| Channagiri | 19 | 145.2 | 21,313 | 14.0240 | 75.9258 | 14.22 | 13.82 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Kalghatgi | 19 | 146.1 | 16,917 | 15.1831 | 74.9710 | 15.38 | 14.98 | 75.17 | 74.77 | Off flood-path (heuristic) |
| Shorāpur | 19 | 146.4 | 51,398 | 16.5210 | 76.7574 | 16.72 | 16.32 | 76.96 | 76.56 | Off flood-path (heuristic) |
| Basavana Bāgevādi | 19 | 149.8 | 33,198 | 16.5728 | 75.9725 | 16.77 | 16.37 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Kakkalapalle | 02 | 150.1 | 30,128 | 14.6415 | 77.5668 | 14.84 | 14.44 | 77.77 | 77.37 | Downstream (heuristic - verify) |
| Hiriyūr | 19 | 150.6 | 56,416 | 13.9445 | 76.6172 | 14.14 | 13.74 | 76.82 | 76.42 | Off flood-path (heuristic) |
| Rāichūr | 19 | 151.2 | 234,073 | 16.2055 | 77.3557 | 16.41 | 16.01 | 77.56 | 77.16 | Downstream (heuristic - verify) |
| Anantapur | 02 | 152.3 | 267,161 | 14.6778 | 77.6081 | 14.88 | 14.48 | 77.81 | 77.41 | Downstream (heuristic - verify) |
| Sirālkoppa | 19 | 152.5 | 16,864 | 14.3807 | 75.2501 | 14.58 | 14.18 | 75.45 | 75.05 | Off flood-path (heuristic) |
| Shikaripura | 19 | 152.7 | 36,015 | 14.2698 | 75.3564 | 14.47 | 14.07 | 75.56 | 75.16 | Off flood-path (heuristic) |
| Mudhol | 19 | 162.9 | 52,199 | 16.3335 | 75.2831 | 16.53 | 16.13 | 75.48 | 75.08 | Off flood-path (heuristic) |
| Hosadurga | 19 | 163.9 | 28,370 | 13.7963 | 76.2841 | 14.0 | 13.6 | 76.48 | 76.08 | Off flood-path (heuristic) |
| Shaktinagar | 19 | 164.1 | 17,088 | 16.3649 | 77.3586 | 16.56 | 16.16 | 77.56 | 77.16 | Downstream (heuristic - verify) |
| Pāvugada | 19 | 165.5 | 32,063 | 14.0995 | 77.2802 | 14.3 | 13.9 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Dhone | 02 | 165.9 | 59,272 | 15.3952 | 77.8715 | 15.6 | 15.2 | 78.07 | 77.67 | Downstream (heuristic - verify) |
| Shāhpur | 19 | 167.8 | 53,366 | 16.6960 | 76.8422 | 16.9 | 16.5 | 77.04 | 76.64 | Off flood-path (heuristic) |
| Bail-Hongal | 19 | 168.8 | 49,182 | 15.8137 | 74.8589 | 16.01 | 15.61 | 75.06 | 74.66 | Off flood-path (heuristic) |
| Haliyal | 19 | 168.9 | 24,238 | 15.3286 | 74.7564 | 15.53 | 15.13 | 74.96 | 74.56 | Off flood-path (heuristic) |
| Shivamogga | 19 | 169.9 | 322,650 | 13.9316 | 75.5679 | 14.13 | 13.73 | 75.77 | 75.37 | Off flood-path (heuristic) |
| Alnāvar | 19 | 171.3 | 17,228 | 15.4273 | 74.7411 | 15.63 | 15.23 | 74.94 | 74.54 | Off flood-path (heuristic) |
| Bhadrāvati | 19 | 171.8 | 163,903 | 13.8485 | 75.7050 | 14.05 | 13.65 | 75.91 | 75.51 | Off flood-path (heuristic) |
| Sirsi | 19 | 176.0 | 62,882 | 14.6207 | 74.8355 | 14.82 | 14.42 | 75.04 | 74.64 | Off flood-path (heuristic) |
| Jamkhandi | 19 | 176.6 | 68,938 | 16.5046 | 75.2915 | 16.7 | 16.3 | 75.49 | 75.09 | Off flood-path (heuristic) |
| Dharmavaram | 02 | 177.2 | 121,874 | 14.4144 | 77.7203 | 14.61 | 14.21 | 77.92 | 77.52 | Off flood-path (heuristic) |
| Yellāpur | 19 | 177.3 | 20,452 | 14.9637 | 74.7093 | 15.16 | 14.76 | 74.91 | 74.51 | Off flood-path (heuristic) |
| Mahālingpur | 19 | 180.4 | 36,055 | 16.3888 | 75.1087 | 16.59 | 16.19 | 75.31 | 74.91 | Off flood-path (heuristic) |
| Sīra | 19 | 180.9 | 57,928 | 13.7416 | 76.9043 | 13.94 | 13.54 | 77.1 | 76.7 | Off flood-path (heuristic) |
| Tarikere | 19 | 182.2 | 37,848 | 13.7095 | 75.8138 | 13.91 | 13.51 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Sindgi | 19 | 183.6 | 37,226 | 16.9188 | 76.2337 | 17.12 | 16.72 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Dandeli | 19 | 183.8 | 52,295 | 15.2667 | 74.6167 | 15.47 | 15.07 | 74.82 | 74.42 | Off flood-path (heuristic) |
| Tadpatri | 02 | 184.8 | 108,171 | 14.9083 | 78.0103 | 15.11 | 14.71 | 78.21 | 77.81 | Downstream (heuristic - verify) |
| Vijayapura | 19 | 184.9 | 327,427 | 16.8244 | 75.7154 | 17.02 | 16.62 | 75.92 | 75.52 | Off flood-path (heuristic) |
| Rabkavi-Banhatti | 19 | 185.9 | 77,004 | 16.4700 | 75.1200 | 16.67 | 16.27 | 75.32 | 74.92 | Off flood-path (heuristic) |
| Sāgar | 19 | 186.2 | 54,550 | 14.1650 | 75.0290 | 14.36 | 13.96 | 75.23 | 74.83 | Off flood-path (heuristic) |
| Rabkavi | 19 | 187.0 | 73,835 | 16.4757 | 75.1106 | 16.68 | 16.28 | 75.31 | 74.91 | Off flood-path (heuristic) |
| Yadgir | 19 | 187.8 | 74,294 | 16.7701 | 77.1376 | 16.97 | 16.57 | 77.34 | 76.94 | Downstream (heuristic - verify) |
| Mudalgi | 19 | 187.9 | 29,128 | 16.3368 | 74.9677 | 16.54 | 16.14 | 75.17 | 74.77 | Off flood-path (heuristic) |
| Penukonda | 02 | 189.6 | 20,220 | 14.0829 | 77.5947 | 14.28 | 13.88 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Gokak | 19 | 189.7 | 79,121 | 16.1690 | 74.8239 | 16.37 | 15.97 | 75.02 | 74.62 | Off flood-path (heuristic) |
| Birūr | 19 | 190.0 | 23,493 | 13.5972 | 75.9717 | 13.8 | 13.4 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Gadwāl | 40 | 190.0 | 63,177 | 16.2350 | 77.7956 | 16.44 | 16.04 | 78.0 | 77.6 | Downstream (heuristic - verify) |
| Māmidālapādu | 02 | 191.8 | 26,694 | 15.8541 | 78.0148 | 16.05 | 15.65 | 78.21 | 77.81 | Downstream (heuristic - verify) |
| Kurnool | 02 | 193.0 | 460,184 | 15.8289 | 78.0360 | 16.03 | 15.63 | 78.24 | 77.84 | Downstream (heuristic - verify) |
| Terdāl | 19 | 193.3 | 26,411 | 16.4938 | 75.0467 | 16.69 | 16.29 | 75.25 | 74.85 | Off flood-path (heuristic) |
| Kadūr | 19 | 194.0 | 34,151 | 13.5528 | 76.0116 | 13.75 | 13.35 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Betamcherla | 02 | 196.0 | 38,994 | 15.4514 | 78.1480 | 15.65 | 15.25 | 78.35 | 77.95 | Downstream (heuristic - verify) |
| Somandepalle | 02 | 196.5 | 18,895 | 14.0077 | 77.6085 | 14.21 | 13.81 | 77.81 | 77.41 | Off flood-path (heuristic) |
| Konnūr | 19 | 198.4 | 19,386 | 16.2014 | 74.7489 | 16.4 | 16.0 | 74.95 | 74.55 | Off flood-path (heuristic) |
| Khānāpur | 19 | 199.5 | 19,309 | 15.6397 | 74.5085 | 15.84 | 15.44 | 74.71 | 74.31 | Off flood-path (heuristic) |
| Jevargi | 19 | 199.6 | 25,686 | 17.0139 | 76.7732 | 17.21 | 16.81 | 76.97 | 76.57 | Off flood-path (heuristic) |

## Almatti Dam (Karnataka)
Dam coordinates: 16.33, 75.88

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Bagalkot | 19 | 25.3 | 111,933 | 16.1867 | 75.6961 | 16.39 | 15.99 | 75.9 | 75.5 | Off flood-path (heuristic) |
| Muddebihāl | 19 | 26.9 | 34,217 | 16.3378 | 76.1317 | 16.54 | 16.14 | 76.33 | 75.93 | Downstream (heuristic - verify) |
| Bilgi | 19 | 28.0 | 17,792 | 16.3471 | 75.6180 | 16.55 | 16.15 | 75.82 | 75.42 | Off flood-path (heuristic) |
| Basavana Bāgevādi | 19 | 28.7 | 33,198 | 16.5728 | 75.9725 | 16.77 | 16.37 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Kamatgi | 16 | 28.9 | 15,620 | 16.0779 | 75.8132 | 16.28 | 15.88 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Amīngarh | 19 | 31.2 | 15,073 | 16.0566 | 75.9477 | 16.26 | 15.86 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Guledagudda | 19 | 32.6 | 33,851 | 16.0502 | 75.7900 | 16.25 | 15.85 | 75.99 | 75.59 | Off flood-path (heuristic) |
| Hungund | 19 | 35.4 | 20,877 | 16.0621 | 76.0586 | 16.26 | 15.86 | 76.26 | 75.86 | Downstream (heuristic - verify) |
| Ilkal | 19 | 48.2 | 60,242 | 15.9592 | 76.1135 | 16.16 | 15.76 | 76.31 | 75.91 | Downstream (heuristic - verify) |
| Tālīkota | 19 | 48.6 | 31,693 | 16.4731 | 76.3109 | 16.67 | 16.27 | 76.51 | 76.11 | Downstream (heuristic - verify) |
| Kerūr | 19 | 50.1 | 19,731 | 16.0138 | 75.5463 | 16.21 | 15.81 | 75.75 | 75.35 | Off flood-path (heuristic) |
| Bādāmi | 19 | 51.0 | 30,943 | 15.9149 | 75.6768 | 16.11 | 15.71 | 75.88 | 75.48 | Off flood-path (heuristic) |
| Vijayapura | 19 | 57.7 | 327,427 | 16.8244 | 75.7154 | 17.02 | 16.62 | 75.92 | 75.52 | Off flood-path (heuristic) |
| Mudhol | 19 | 63.7 | 52,199 | 16.3335 | 75.2831 | 16.53 | 16.13 | 75.48 | 75.08 | Off flood-path (heuristic) |
| Jamkhandi | 19 | 65.7 | 68,938 | 16.5046 | 75.2915 | 16.7 | 16.3 | 75.49 | 75.09 | Off flood-path (heuristic) |
| Gajendragarh | 19 | 66.7 | 32,359 | 15.7363 | 75.9698 | 15.94 | 15.54 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Mudgal | 19 | 69.7 | 22,731 | 16.0119 | 76.4420 | 16.21 | 15.81 | 76.64 | 76.24 | Downstream (heuristic - verify) |
| Lingsugūr | 19 | 71.1 | 35,411 | 16.1588 | 76.5217 | 16.36 | 15.96 | 76.72 | 76.32 | Downstream (heuristic - verify) |
| Ron | 19 | 71.8 | 23,311 | 15.6994 | 75.7341 | 15.9 | 15.5 | 75.93 | 75.53 | Off flood-path (heuristic) |
| Kushtagi | 19 | 71.9 | 24,878 | 15.7562 | 76.1911 | 15.96 | 15.56 | 76.39 | 75.99 | Downstream (heuristic - verify) |
| Rāmdurg | 19 | 75.4 | 34,800 | 15.9458 | 75.2978 | 16.15 | 15.75 | 75.5 | 75.1 | Off flood-path (heuristic) |
| Sindgi | 19 | 75.5 | 37,226 | 16.9188 | 76.2337 | 17.12 | 16.72 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Mahālingpur | 19 | 82.5 | 36,055 | 16.3888 | 75.1087 | 16.59 | 16.19 | 75.31 | 74.91 | Off flood-path (heuristic) |
| Rabkavi-Banhatti | 19 | 82.6 | 77,004 | 16.4700 | 75.1200 | 16.67 | 16.27 | 75.32 | 74.92 | Off flood-path (heuristic) |
| Rabkavi | 19 | 83.7 | 73,835 | 16.4757 | 75.1106 | 16.68 | 16.28 | 75.31 | 74.91 | Off flood-path (heuristic) |
| Naregal | 19 | 84.5 | 17,403 | 15.5732 | 75.8080 | 15.77 | 15.37 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Hatti | 19 | 84.6 | 16,278 | 16.1984 | 76.6604 | 16.4 | 16.0 | 76.86 | 76.46 | Downstream (heuristic - verify) |
| Nargund | 19 | 85.6 | 36,291 | 15.7230 | 75.3867 | 15.92 | 15.52 | 75.59 | 75.19 | Off flood-path (heuristic) |
| Terdāl | 19 | 90.7 | 26,411 | 16.4938 | 75.0467 | 16.69 | 16.29 | 75.25 | 74.85 | Off flood-path (heuristic) |
| Indi | 19 | 94.5 | 38,217 | 17.1774 | 75.9526 | 17.38 | 16.98 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Shorāpur | 19 | 96.0 | 51,398 | 16.5210 | 76.7574 | 16.72 | 16.32 | 76.96 | 76.56 | Downstream (heuristic - verify) |
| Mudalgi | 19 | 97.4 | 29,128 | 16.3368 | 74.9677 | 16.54 | 16.14 | 75.17 | 74.77 | Off flood-path (heuristic) |
| Athani | 19 | 97.5 | 47,842 | 16.7261 | 75.0642 | 16.93 | 16.53 | 75.26 | 74.86 | Off flood-path (heuristic) |
| Navalgund | 19 | 102.6 | 24,613 | 15.5588 | 75.3530 | 15.76 | 15.36 | 75.55 | 75.15 | Off flood-path (heuristic) |
| Saundatti | 19 | 102.8 | 41,215 | 15.7661 | 75.1178 | 15.97 | 15.57 | 75.32 | 74.92 | Off flood-path (heuristic) |
| Gadag | 19 | 103.6 | 172,612 | 15.4298 | 75.6297 | 15.63 | 15.23 | 75.83 | 75.43 | Off flood-path (heuristic) |
| Gadag-Betageri | 19 | 105.4 | 172,813 | 15.4167 | 75.6167 | 15.62 | 15.22 | 75.82 | 75.42 | Off flood-path (heuristic) |
| Afzalpur | 19 | 109.4 | 27,088 | 17.1999 | 76.3602 | 17.4 | 17.0 | 76.56 | 76.16 | Off flood-path (heuristic) |
| Shāhpur | 19 | 110.4 | 53,366 | 16.6960 | 76.8422 | 16.9 | 16.5 | 77.04 | 76.64 | Downstream (heuristic - verify) |
| Annigeri | 19 | 111.4 | 28,267 | 15.4251 | 75.4335 | 15.63 | 15.23 | 75.63 | 75.23 | Off flood-path (heuristic) |
| Sindhnūr | 19 | 112.4 | 75,837 | 15.7698 | 76.7558 | 15.97 | 15.57 | 76.96 | 76.56 | Downstream (heuristic - verify) |
| Devadurga | 19 | 113.1 | 28,929 | 16.4231 | 76.9358 | 16.62 | 16.22 | 77.14 | 76.74 | Downstream (heuristic - verify) |
| Koppal | 19 | 113.4 | 70,698 | 15.3452 | 76.1548 | 15.55 | 15.15 | 76.35 | 75.95 | Off flood-path (heuristic) |
| Gokak | 19 | 114.2 | 79,121 | 16.1690 | 74.8239 | 16.37 | 15.97 | 75.02 | 74.62 | Off flood-path (heuristic) |
| Kudachi | 19 | 114.3 | 23,154 | 16.6278 | 74.8541 | 16.83 | 16.43 | 75.05 | 74.65 | Off flood-path (heuristic) |
| Raybag | 19 | 119.3 | 18,736 | 16.4918 | 74.7739 | 16.69 | 16.29 | 74.97 | 74.57 | Off flood-path (heuristic) |
| Konnūr | 19 | 121.6 | 19,386 | 16.2014 | 74.7489 | 16.4 | 16.0 | 74.95 | 74.55 | Off flood-path (heuristic) |
| Gangavati | 19 | 121.7 | 114,642 | 15.4313 | 76.5293 | 15.63 | 15.23 | 76.73 | 76.33 | Downstream (heuristic - verify) |
| Jevargi | 19 | 121.8 | 25,686 | 17.0139 | 76.7732 | 17.21 | 16.81 | 76.97 | 76.57 | Off flood-path (heuristic) |
| Mulgund | 19 | 122.8 | 18,928 | 15.2807 | 75.5213 | 15.48 | 15.08 | 75.72 | 75.32 | Off flood-path (heuristic) |
| Bail-Hongal | 19 | 123.3 | 49,182 | 15.8137 | 74.8589 | 16.01 | 15.61 | 75.06 | 74.66 | Off flood-path (heuristic) |
| Mundargi | 19 | 124.9 | 24,919 | 15.2068 | 75.8839 | 15.41 | 15.01 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Shirhatti | 19 | 126.1 | 17,610 | 15.2335 | 75.5800 | 15.43 | 15.03 | 75.78 | 75.38 | Off flood-path (heuristic) |
| Kampli | 19 | 128.4 | 39,307 | 15.4063 | 76.6001 | 15.61 | 15.21 | 76.8 | 76.4 | Downstream (heuristic - verify) |
| Shiraguppi | 16 | 128.9 | 25,000 | 16.6187 | 74.7091 | 16.82 | 16.42 | 74.91 | 74.51 | Off flood-path (heuristic) |
| Hosapete | 19 | 129.8 | 206,167 | 15.2695 | 76.3871 | 15.47 | 15.07 | 76.59 | 76.19 | Downstream (heuristic - verify) |
| Mānvi | 19 | 130.5 | 46,465 | 15.9913 | 77.0503 | 16.19 | 15.79 | 77.25 | 76.85 | Downstream (heuristic - verify) |
| Kamalāpuram | 19 | 130.7 | 25,552 | 15.3044 | 76.4765 | 15.5 | 15.1 | 76.68 | 76.28 | Downstream (heuristic - verify) |
| Siruguppa | 19 | 133.3 | 52,492 | 15.6300 | 76.8922 | 15.83 | 15.43 | 77.09 | 76.69 | Downstream (heuristic - verify) |
| Hubballi | 19 | 135.3 | 943,788 | 15.3478 | 75.1338 | 15.55 | 15.15 | 75.33 | 74.93 | Off flood-path (heuristic) |
| Hukeri | 19 | 136.8 | 22,988 | 16.2308 | 74.6024 | 16.43 | 16.03 | 74.8 | 74.4 | Off flood-path (heuristic) |
| Kundgol | 19 | 137.3 | 18,726 | 15.2561 | 75.2473 | 15.46 | 15.06 | 75.45 | 75.05 | Off flood-path (heuristic) |
| Akalkot | 16 | 137.4 | 40,103 | 17.5253 | 76.2061 | 17.73 | 17.33 | 76.41 | 76.01 | Off flood-path (heuristic) |
| Chikodi | 19 | 138.5 | 38,307 | 16.4290 | 74.5859 | 16.63 | 16.23 | 74.79 | 74.39 | Off flood-path (heuristic) |
| Tekkalakote | 19 | 138.5 | 26,224 | 15.5344 | 76.8770 | 15.73 | 15.33 | 77.08 | 76.68 | Downstream (heuristic - verify) |
| Mangalvedha | 16 | 139.1 | 21,824 | 17.5105 | 75.4471 | 17.71 | 17.31 | 75.65 | 75.25 | Off flood-path (heuristic) |
| Lakshmeshwar | 19 | 140.8 | 36,754 | 15.1269 | 75.4694 | 15.33 | 14.93 | 75.67 | 75.27 | Off flood-path (heuristic) |
| Yadgir | 19 | 142.7 | 74,294 | 16.7701 | 77.1376 | 16.97 | 16.57 | 77.34 | 76.94 | Downstream (heuristic - verify) |
| Wādi | 19 | 142.9 | 37,988 | 17.0518 | 76.9905 | 17.25 | 16.85 | 77.19 | 76.79 | Off flood-path (heuristic) |
| Kurandvād | 16 | 143.1 | 22,372 | 16.6832 | 74.5889 | 16.88 | 16.48 | 74.79 | 74.39 | Off flood-path (heuristic) |
| Sāngola | 16 | 143.4 | 34,321 | 17.4395 | 75.1938 | 17.64 | 17.24 | 75.39 | 74.99 | Off flood-path (heuristic) |
| Shāhābād | 19 | 144.1 | 52,952 | 17.1307 | 76.9436 | 17.33 | 16.93 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Hadagalli | 19 | 145.7 | 27,967 | 15.0205 | 75.9318 | 15.22 | 14.82 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Sadalgi | 19 | 146.0 | 23,790 | 16.5587 | 74.5321 | 16.76 | 16.36 | 74.73 | 74.33 | Off flood-path (heuristic) |
| Kurikuppi | 19 | 148.5 | 22,560 | 15.2176 | 76.6487 | 15.42 | 15.02 | 76.85 | 76.45 | Downstream (heuristic - verify) |
| Sholapur | 16 | 149.2 | 997,281 | 17.6715 | 75.9104 | 17.87 | 17.47 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Sankeshwar | 19 | 149.4 | 34,637 | 16.2565 | 74.4819 | 16.46 | 16.06 | 74.68 | 74.28 | Off flood-path (heuristic) |
| Jaisingpur | 16 | 149.8 | 48,510 | 16.7764 | 74.5536 | 16.98 | 16.58 | 74.75 | 74.35 | Off flood-path (heuristic) |
| Bhudgaon | 16 | 150.8 | 15,738 | 16.9074 | 74.5995 | 17.11 | 16.71 | 74.8 | 74.4 | Off flood-path (heuristic) |
| Kalaburagi | 19 | 151.3 | 543,147 | 17.3358 | 76.8376 | 17.54 | 17.14 | 77.04 | 76.64 | Off flood-path (heuristic) |
| Sāngli | 16 | 151.9 | 601,214 | 16.8544 | 74.5642 | 17.05 | 16.65 | 74.76 | 74.36 | Off flood-path (heuristic) |
| Kosigi | 02 | 155.1 | 15,455 | 15.8551 | 77.2446 | 16.06 | 15.66 | 77.44 | 77.04 | Downstream (heuristic - verify) |
| Chītāpur | 19 | 155.5 | 31,299 | 17.1236 | 77.0824 | 17.32 | 16.92 | 77.28 | 76.88 | Off flood-path (heuristic) |
| Aland | 19 | 155.6 | 42,371 | 17.5643 | 76.5685 | 17.76 | 17.36 | 76.77 | 76.37 | Off flood-path (heuristic) |
| Sandūr | 19 | 155.6 | 37,431 | 15.0861 | 76.5469 | 15.29 | 14.89 | 76.75 | 76.35 | Downstream (heuristic - verify) |
| Belagavi | 19 | 156.3 | 490,045 | 15.8521 | 74.5045 | 16.05 | 15.65 | 74.7 | 74.3 | Off flood-path (heuristic) |
| Ichalkaranji | 16 | 156.6 | 287,353 | 16.6912 | 74.4605 | 16.89 | 16.49 | 74.66 | 74.26 | Off flood-path (heuristic) |
| Tāsgaon | 16 | 157.2 | 37,945 | 17.0370 | 74.6017 | 17.24 | 16.84 | 74.8 | 74.4 | Off flood-path (heuristic) |
| Shaktinagar | 19 | 157.8 | 17,088 | 16.3649 | 77.3586 | 16.56 | 16.16 | 77.56 | 77.16 | Downstream (heuristic - verify) |
| Alnāvar | 19 | 157.8 | 17,228 | 15.4273 | 74.7411 | 15.63 | 15.23 | 74.94 | 74.54 | Off flood-path (heuristic) |
| Rāichūr | 19 | 158.1 | 234,073 | 16.2055 | 77.3557 | 16.41 | 16.01 | 77.56 | 77.16 | Downstream (heuristic - verify) |
| Korochi | 16 | 159.0 | 20,420 | 16.7192 | 74.4451 | 16.92 | 16.52 | 74.65 | 74.25 | Off flood-path (heuristic) |
| Kabnur | 16 | 159.0 | 38,146 | 16.7017 | 74.4395 | 16.9 | 16.5 | 74.64 | 74.24 | Off flood-path (heuristic) |
| Nipāni | 16 | 159.9 | 62,865 | 16.3990 | 74.3829 | 16.6 | 16.2 | 74.58 | 74.18 | Off flood-path (heuristic) |
| Kalghatgi | 19 | 160.4 | 16,917 | 15.1831 | 74.9710 | 15.38 | 14.98 | 75.17 | 74.77 | Off flood-path (heuristic) |
| Hupari | 16 | 160.5 | 28,953 | 16.6167 | 74.4044 | 16.82 | 16.42 | 74.6 | 74.2 | Off flood-path (heuristic) |
| Māchai | 19 | 160.7 | 18,073 | 15.7926 | 74.4841 | 15.99 | 15.59 | 74.68 | 74.28 | Off flood-path (heuristic) |
| Piranvādi | 19 | 160.7 | 17,874 | 15.8020 | 74.4801 | 16.0 | 15.6 | 74.68 | 74.28 | Off flood-path (heuristic) |
| Pandharpur | 16 | 161.0 | 98,923 | 17.6792 | 75.3310 | 17.88 | 17.48 | 75.53 | 75.13 | Off flood-path (heuristic) |
| Savanūr | 19 | 161.7 | 40,567 | 14.9733 | 75.3372 | 15.17 | 14.77 | 75.54 | 75.14 | Off flood-path (heuristic) |
| Gadhinglaj | 16 | 163.7 | 27,185 | 16.2229 | 74.3501 | 16.42 | 16.02 | 74.55 | 74.15 | Off flood-path (heuristic) |
| Haliyal | 19 | 163.8 | 24,238 | 15.3286 | 74.7564 | 15.53 | 15.13 | 74.96 | 74.56 | Off flood-path (heuristic) |
| Shiggaon | 19 | 164.6 | 28,207 | 14.9905 | 75.2250 | 15.19 | 14.79 | 75.42 | 75.02 | Off flood-path (heuristic) |
| Khānāpur | 19 | 165.5 | 19,309 | 15.6397 | 74.5085 | 15.84 | 15.44 | 74.71 | 74.31 | Off flood-path (heuristic) |
| Kūdligi | 19 | 167.4 | 26,680 | 14.9050 | 76.3853 | 15.1 | 14.71 | 76.59 | 76.19 | Off flood-path (heuristic) |
| Adoni | 02 | 168.3 | 184,625 | 15.6279 | 77.2750 | 15.83 | 15.43 | 77.47 | 77.07 | Downstream (heuristic - verify) |
| Kāgal | 16 | 169.1 | 34,106 | 16.5770 | 74.3154 | 16.78 | 16.38 | 74.52 | 74.12 | Off flood-path (heuristic) |
| Bankāpur | 19 | 169.9 | 22,529 | 14.9230 | 75.2622 | 15.12 | 14.72 | 75.46 | 75.06 | Off flood-path (heuristic) |
| Naldurg | 16 | 170.7 | 18,341 | 17.8167 | 76.2818 | 18.02 | 17.62 | 76.48 | 76.08 | Off flood-path (heuristic) |
| Ashta | 16 | 171.1 | 37,105 | 16.9494 | 74.4094 | 17.15 | 16.75 | 74.61 | 74.21 | Off flood-path (heuristic) |
| Kottūru | 19 | 171.3 | 26,289 | 14.8244 | 76.2201 | 15.02 | 14.62 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Gurmatkāl | 19 | 171.7 | 20,614 | 16.8677 | 77.3909 | 17.07 | 16.67 | 77.59 | 77.19 | Downstream (heuristic - verify) |
| Harpanahalli | 19 | 171.9 | 47,039 | 14.7877 | 75.9886 | 14.99 | 14.59 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Ballari | 19 | 173.0 | 410,445 | 15.1420 | 76.9240 | 15.34 | 14.94 | 77.12 | 76.72 | Downstream (heuristic - verify) |
| Moram | 16 | 173.9 | 18,371 | 17.7881 | 76.4708 | 17.99 | 17.59 | 76.67 | 76.27 | Off flood-path (heuristic) |
| Mundgod | 19 | 176.0 | 18,866 | 14.9714 | 75.0366 | 15.17 | 14.77 | 75.24 | 74.84 | Off flood-path (heuristic) |
| Unchagao | 16 | 176.1 | 31,238 | 16.6975 | 74.2733 | 16.9 | 16.5 | 74.47 | 74.07 | Off flood-path (heuristic) |
| Wadgaon | 16 | 176.2 | 25,651 | 16.8355 | 74.3134 | 17.04 | 16.64 | 74.51 | 74.11 | Off flood-path (heuristic) |
| Vite | 16 | 177.2 | 48,289 | 17.2734 | 74.5379 | 17.47 | 17.07 | 74.74 | 74.34 | Off flood-path (heuristic) |
| Sedam | 19 | 177.3 | 39,341 | 17.1786 | 77.2900 | 17.38 | 16.98 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Hāveri | 19 | 178.3 | 67,102 | 14.7935 | 75.4045 | 14.99 | 14.59 | 75.6 | 75.2 | Off flood-path (heuristic) |
| Nārāyanpet | 40 | 178.4 | 41,752 | 16.7480 | 77.4954 | 16.95 | 16.55 | 77.7 | 77.3 | Downstream (heuristic - verify) |
| Dandeli | 19 | 179.6 | 52,295 | 15.2667 | 74.6167 | 15.47 | 15.07 | 74.82 | 74.42 | Off flood-path (heuristic) |
| Ajara | 16 | 179.8 | 17,257 | 16.1160 | 74.2110 | 16.32 | 15.92 | 74.41 | 74.01 | Off flood-path (heuristic) |
| Pachgaon | 16 | 180.0 | 22,353 | 16.6602 | 74.2274 | 16.86 | 16.46 | 74.43 | 74.03 | Off flood-path (heuristic) |
| Kolhāpur | 16 | 180.4 | 549,236 | 16.6956 | 74.2317 | 16.9 | 16.5 | 74.43 | 74.03 | Off flood-path (heuristic) |
| Emmiganūr | 02 | 182.2 | 95,149 | 15.7720 | 77.4835 | 15.97 | 15.57 | 77.68 | 77.28 | Downstream (heuristic - verify) |
| Umarga | 16 | 185.4 | 35,477 | 17.8384 | 76.6233 | 18.04 | 17.64 | 76.82 | 76.42 | Off flood-path (heuristic) |
| Mhaswad | 16 | 185.8 | 24,120 | 17.6336 | 74.7877 | 17.83 | 17.43 | 74.99 | 74.59 | Off flood-path (heuristic) |
| Tuljāpur | 16 | 187.7 | 35,596 | 18.0080 | 76.0701 | 18.21 | 17.81 | 76.27 | 75.87 | Off flood-path (heuristic) |
| Byādgi | 19 | 189.0 | 30,014 | 14.6732 | 75.4868 | 14.87 | 14.47 | 75.69 | 75.29 | Off flood-path (heuristic) |
| Urun-Islāmpur | 16 | 189.6 | 67,391 | 17.0500 | 74.2667 | 17.25 | 16.85 | 74.47 | 74.07 | Off flood-path (heuristic) |
| Kodoli | 16 | 190.0 | 17,537 | 16.8764 | 74.1909 | 17.08 | 16.68 | 74.39 | 73.99 | Off flood-path (heuristic) |
| Ranebennur | 19 | 191.8 | 106,406 | 14.6224 | 75.6295 | 14.82 | 14.42 | 75.83 | 75.43 | Off flood-path (heuristic) |
| Hāngal | 19 | 191.9 | 28,159 | 14.7646 | 75.1246 | 14.96 | 14.56 | 75.32 | 74.92 | Off flood-path (heuristic) |
| Aklūj | 16 | 196.2 | 39,972 | 17.8924 | 75.0214 | 18.09 | 17.69 | 75.22 | 74.82 | Off flood-path (heuristic) |
| Yellāpur | 19 | 197.0 | 20,452 | 14.9637 | 74.7093 | 15.16 | 14.76 | 74.91 | 74.51 | Off flood-path (heuristic) |

## Basava Sagara Dam (Karnataka)
Dam coordinates: 16.22, 76.52

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Lingsugūr | 19 | 6.8 | 35,411 | 16.1588 | 76.5217 | 16.36 | 15.96 | 76.72 | 76.32 | Off flood-path (heuristic) |
| Hatti | 19 | 15.2 | 16,278 | 16.1984 | 76.6604 | 16.4 | 16.0 | 76.86 | 76.46 | Downstream (heuristic - verify) |
| Mudgal | 19 | 24.6 | 22,731 | 16.0119 | 76.4420 | 16.21 | 15.81 | 76.64 | 76.24 | Off flood-path (heuristic) |
| Tālīkota | 19 | 35.9 | 31,693 | 16.4731 | 76.3109 | 16.67 | 16.27 | 76.51 | 76.11 | Off flood-path (heuristic) |
| Shorāpur | 19 | 42.0 | 51,398 | 16.5210 | 76.7574 | 16.72 | 16.32 | 76.96 | 76.56 | Off flood-path (heuristic) |
| Muddebihāl | 19 | 43.5 | 34,217 | 16.3378 | 76.1317 | 16.54 | 16.14 | 76.33 | 75.93 | Off flood-path (heuristic) |
| Devadurga | 19 | 49.8 | 28,929 | 16.4231 | 76.9358 | 16.62 | 16.22 | 77.14 | 76.74 | Downstream (heuristic - verify) |
| Ilkal | 19 | 52.2 | 60,242 | 15.9592 | 76.1135 | 16.16 | 15.76 | 76.31 | 75.91 | Off flood-path (heuristic) |
| Hungund | 19 | 52.3 | 20,877 | 16.0621 | 76.0586 | 16.26 | 15.86 | 76.26 | 75.86 | Off flood-path (heuristic) |
| Sindhnūr | 19 | 56.0 | 75,837 | 15.7698 | 76.7558 | 15.97 | 15.57 | 76.96 | 76.56 | Off flood-path (heuristic) |
| Mānvi | 19 | 62.1 | 46,465 | 15.9913 | 77.0503 | 16.19 | 15.79 | 77.25 | 76.85 | Downstream (heuristic - verify) |
| Kushtagi | 19 | 62.4 | 24,878 | 15.7562 | 76.1911 | 15.96 | 15.56 | 76.39 | 75.99 | Off flood-path (heuristic) |
| Shāhpur | 19 | 63.1 | 53,366 | 16.6960 | 76.8422 | 16.9 | 16.5 | 77.04 | 76.64 | Off flood-path (heuristic) |
| Amīngarh | 19 | 63.8 | 15,073 | 16.0566 | 75.9477 | 16.26 | 15.86 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Basavana Bāgevādi | 19 | 70.4 | 33,198 | 16.5728 | 75.9725 | 16.77 | 16.37 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Siruguppa | 19 | 76.7 | 52,492 | 15.6300 | 76.8922 | 15.83 | 15.43 | 77.09 | 76.69 | Downstream (heuristic - verify) |
| Kamatgi | 16 | 77.1 | 15,620 | 16.0779 | 75.8132 | 16.28 | 15.88 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Gajendragarh | 19 | 79.7 | 32,359 | 15.7363 | 75.9698 | 15.94 | 15.54 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Guledagudda | 19 | 80.2 | 33,851 | 16.0502 | 75.7900 | 16.25 | 15.85 | 75.99 | 75.59 | Off flood-path (heuristic) |
| Sindgi | 19 | 83.5 | 37,226 | 16.9188 | 76.2337 | 17.12 | 16.72 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Tekkalakote | 19 | 85.3 | 26,224 | 15.5344 | 76.8770 | 15.73 | 15.33 | 77.08 | 76.68 | Off flood-path (heuristic) |
| Kosigi | 02 | 87.4 | 15,455 | 15.8551 | 77.2446 | 16.06 | 15.66 | 77.44 | 77.04 | Downstream (heuristic - verify) |
| Gangavati | 19 | 87.7 | 114,642 | 15.4313 | 76.5293 | 15.63 | 15.23 | 76.73 | 76.33 | Off flood-path (heuristic) |
| Bagalkot | 19 | 88.0 | 111,933 | 16.1867 | 75.6961 | 16.39 | 15.99 | 75.9 | 75.5 | Off flood-path (heuristic) |
| Rāichūr | 19 | 89.2 | 234,073 | 16.2055 | 77.3557 | 16.41 | 16.01 | 77.56 | 77.16 | Downstream (heuristic - verify) |
| Yadgir | 19 | 89.9 | 74,294 | 16.7701 | 77.1376 | 16.97 | 16.57 | 77.34 | 76.94 | Off flood-path (heuristic) |
| Kampli | 19 | 90.9 | 39,307 | 15.4063 | 76.6001 | 15.61 | 15.21 | 76.8 | 76.4 | Off flood-path (heuristic) |
| Shaktinagar | 19 | 90.9 | 17,088 | 16.3649 | 77.3586 | 16.56 | 16.16 | 77.56 | 77.16 | Downstream (heuristic - verify) |
| Jevargi | 19 | 92.3 | 25,686 | 17.0139 | 76.7732 | 17.21 | 16.81 | 76.97 | 76.57 | Off flood-path (heuristic) |
| Bādāmi | 19 | 96.3 | 30,943 | 15.9149 | 75.6768 | 16.11 | 15.71 | 75.88 | 75.48 | Off flood-path (heuristic) |
| Bilgi | 19 | 97.3 | 17,792 | 16.3471 | 75.6180 | 16.55 | 16.15 | 75.82 | 75.42 | Off flood-path (heuristic) |
| Kamalāpuram | 19 | 101.9 | 25,552 | 15.3044 | 76.4765 | 15.5 | 15.1 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Ron | 19 | 102.0 | 23,311 | 15.6994 | 75.7341 | 15.9 | 15.5 | 75.93 | 75.53 | Off flood-path (heuristic) |
| Adoni | 02 | 104.2 | 184,625 | 15.6279 | 77.2750 | 15.83 | 15.43 | 77.47 | 77.07 | Downstream (heuristic - verify) |
| Naregal | 19 | 104.7 | 17,403 | 15.5732 | 75.8080 | 15.77 | 15.37 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Koppal | 19 | 104.8 | 70,698 | 15.3452 | 76.1548 | 15.55 | 15.15 | 76.35 | 75.95 | Off flood-path (heuristic) |
| Wādi | 19 | 105.2 | 37,988 | 17.0518 | 76.9905 | 17.25 | 16.85 | 77.19 | 76.79 | Off flood-path (heuristic) |
| Kerūr | 19 | 106.5 | 19,731 | 16.0138 | 75.5463 | 16.21 | 15.81 | 75.75 | 75.35 | Off flood-path (heuristic) |
| Hosapete | 19 | 106.6 | 206,167 | 15.2695 | 76.3871 | 15.47 | 15.07 | 76.59 | 76.19 | Off flood-path (heuristic) |
| Vijayapura | 19 | 109.0 | 327,427 | 16.8244 | 75.7154 | 17.02 | 16.62 | 75.92 | 75.52 | Off flood-path (heuristic) |
| Afzalpur | 19 | 110.3 | 27,088 | 17.1999 | 76.3602 | 17.4 | 17.0 | 76.56 | 76.16 | Off flood-path (heuristic) |
| Shāhābād | 19 | 110.9 | 52,952 | 17.1307 | 76.9436 | 17.33 | 16.93 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Kurikuppi | 19 | 112.3 | 22,560 | 15.2176 | 76.6487 | 15.42 | 15.02 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Emmiganūr | 02 | 114.4 | 95,149 | 15.7720 | 77.4835 | 15.97 | 15.57 | 77.68 | 77.28 | Downstream (heuristic - verify) |
| Chītāpur | 19 | 117.0 | 31,299 | 17.1236 | 77.0824 | 17.32 | 16.92 | 77.28 | 76.88 | Off flood-path (heuristic) |
| Gurmatkāl | 19 | 117.5 | 20,614 | 16.8677 | 77.3909 | 17.07 | 16.67 | 77.59 | 77.19 | Downstream (heuristic - verify) |
| Nārāyanpet | 40 | 119.4 | 41,752 | 16.7480 | 77.4954 | 16.95 | 16.55 | 77.7 | 77.3 | Downstream (heuristic - verify) |
| Indi | 19 | 122.4 | 38,217 | 17.1774 | 75.9526 | 17.38 | 16.98 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Sandūr | 19 | 126.1 | 37,431 | 15.0861 | 76.5469 | 15.29 | 14.89 | 76.75 | 76.35 | Off flood-path (heuristic) |
| Ballari | 19 | 127.4 | 410,445 | 15.1420 | 76.9240 | 15.34 | 14.94 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Kalaburagi | 19 | 128.6 | 543,147 | 17.3358 | 76.8376 | 17.54 | 17.14 | 77.04 | 76.64 | Off flood-path (heuristic) |
| Gadag | 19 | 129.6 | 172,612 | 15.4298 | 75.6297 | 15.63 | 15.23 | 75.83 | 75.43 | Off flood-path (heuristic) |
| Gadag-Betageri | 19 | 131.6 | 172,813 | 15.4167 | 75.6167 | 15.62 | 15.22 | 75.82 | 75.42 | Off flood-path (heuristic) |
| Mundargi | 19 | 131.6 | 24,919 | 15.2068 | 75.8839 | 15.41 | 15.01 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Mudhol | 19 | 132.6 | 52,199 | 16.3335 | 75.2831 | 16.53 | 16.13 | 75.48 | 75.08 | Off flood-path (heuristic) |
| Nargund | 19 | 133.2 | 36,291 | 15.7230 | 75.3867 | 15.92 | 15.52 | 75.59 | 75.19 | Off flood-path (heuristic) |
| Rāmdurg | 19 | 134.1 | 34,800 | 15.9458 | 75.2978 | 16.15 | 15.75 | 75.5 | 75.1 | Off flood-path (heuristic) |
| Sedam | 19 | 134.5 | 39,341 | 17.1786 | 77.2900 | 17.38 | 16.98 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Jamkhandi | 19 | 134.8 | 68,938 | 16.5046 | 75.2915 | 16.7 | 16.3 | 75.49 | 75.09 | Off flood-path (heuristic) |
| Gadwāl | 40 | 136.2 | 63,177 | 16.2350 | 77.7956 | 16.44 | 16.04 | 78.0 | 77.6 | Downstream (heuristic - verify) |
| Navalgund | 19 | 144.8 | 24,613 | 15.5588 | 75.3530 | 15.76 | 15.36 | 75.55 | 75.15 | Off flood-path (heuristic) |
| Annigeri | 19 | 146.0 | 28,267 | 15.4251 | 75.4335 | 15.63 | 15.23 | 75.63 | 75.23 | Off flood-path (heuristic) |
| Kūdligi | 19 | 146.9 | 26,680 | 14.9050 | 76.3853 | 15.1 | 14.71 | 76.59 | 76.19 | Off flood-path (heuristic) |
| Guntakal | 02 | 147.4 | 126,270 | 15.1711 | 77.3624 | 15.37 | 14.97 | 77.56 | 77.16 | Downstream (heuristic - verify) |
| Hadagalli | 19 | 147.5 | 27,967 | 15.0205 | 75.9318 | 15.22 | 14.82 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Shirhatti | 19 | 148.8 | 17,610 | 15.2335 | 75.5800 | 15.43 | 15.03 | 75.78 | 75.38 | Off flood-path (heuristic) |
| Akalkot | 16 | 148.9 | 40,103 | 17.5253 | 76.2061 | 17.73 | 17.33 | 76.41 | 76.01 | Off flood-path (heuristic) |
| Mulgund | 19 | 149.4 | 18,928 | 15.2807 | 75.5213 | 15.48 | 15.08 | 75.72 | 75.32 | Off flood-path (heuristic) |
| Aland | 19 | 149.6 | 42,371 | 17.5643 | 76.5685 | 17.76 | 17.36 | 76.77 | 76.37 | Off flood-path (heuristic) |
| Mahālingpur | 19 | 151.8 | 36,055 | 16.3888 | 75.1087 | 16.59 | 16.19 | 75.31 | 74.91 | Off flood-path (heuristic) |
| Rabkavi-Banhatti | 19 | 151.9 | 77,004 | 16.4700 | 75.1200 | 16.67 | 16.27 | 75.32 | 74.92 | Off flood-path (heuristic) |
| Kothakota | 40 | 152.6 | 19,042 | 16.3800 | 77.9400 | 16.58 | 16.18 | 78.14 | 77.74 | Downstream (heuristic - verify) |
| Rabkavi | 19 | 153.0 | 73,835 | 16.4757 | 75.1106 | 16.68 | 16.28 | 75.31 | 74.91 | Off flood-path (heuristic) |
| Saundatti | 19 | 158.2 | 41,215 | 15.7661 | 75.1178 | 15.97 | 15.57 | 75.32 | 74.92 | Off flood-path (heuristic) |
| Kottūru | 19 | 158.5 | 26,289 | 14.8244 | 76.2201 | 15.02 | 14.62 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Terdāl | 19 | 160.1 | 26,411 | 16.4938 | 75.0467 | 16.69 | 16.29 | 75.25 | 74.85 | Off flood-path (heuristic) |
| Tandur | 40 | 160.5 | 65,115 | 17.2485 | 77.5770 | 17.45 | 17.05 | 77.78 | 77.38 | Off flood-path (heuristic) |
| Uravakonda | 02 | 162.3 | 35,565 | 14.9435 | 77.2549 | 15.14 | 14.74 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Māmidālapādu | 02 | 164.8 | 26,694 | 15.8541 | 78.0148 | 16.05 | 15.65 | 78.21 | 77.81 | Downstream (heuristic - verify) |
| Athani | 19 | 165.1 | 47,842 | 16.7261 | 75.0642 | 16.93 | 16.53 | 75.26 | 74.86 | Off flood-path (heuristic) |
| Lakshmeshwar | 19 | 165.6 | 36,754 | 15.1269 | 75.4694 | 15.33 | 14.93 | 75.67 | 75.27 | Off flood-path (heuristic) |
| Wanparti | 40 | 166.1 | 60,949 | 16.3674 | 78.0689 | 16.57 | 16.17 | 78.27 | 77.87 | Downstream (heuristic - verify) |
| Mudalgi | 19 | 166.2 | 29,128 | 16.3368 | 74.9677 | 16.54 | 16.14 | 75.17 | 74.77 | Off flood-path (heuristic) |
| Mahbūbnagar | 40 | 166.8 | 190,400 | 16.7438 | 77.9860 | 16.94 | 16.54 | 78.19 | 77.79 | Downstream (heuristic - verify) |
| Kurnool | 02 | 167.8 | 460,184 | 15.8289 | 78.0360 | 16.03 | 15.63 | 78.24 | 77.84 | Downstream (heuristic - verify) |
| Chincholi | 19 | 168.3 | 20,897 | 17.4651 | 77.4187 | 17.67 | 17.27 | 77.62 | 77.22 | Off flood-path (heuristic) |
| Molakālumuru | 19 | 168.8 | 15,797 | 14.7178 | 76.7468 | 14.92 | 14.52 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Harpanahalli | 19 | 169.1 | 47,039 | 14.7877 | 75.9886 | 14.99 | 14.59 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Dhone | 02 | 171.2 | 59,272 | 15.3952 | 77.8715 | 15.6 | 15.2 | 78.07 | 77.67 | Downstream (heuristic - verify) |
| Gooty | 02 | 171.2 | 48,658 | 15.1184 | 77.6378 | 15.32 | 14.92 | 77.84 | 77.44 | Downstream (heuristic - verify) |
| Rāyadrug | 02 | 172.8 | 61,749 | 14.6997 | 76.8524 | 14.9 | 14.5 | 77.05 | 76.65 | Off flood-path (heuristic) |
| Kundgol | 19 | 173.3 | 18,726 | 15.2561 | 75.2473 | 15.46 | 15.06 | 75.45 | 75.05 | Off flood-path (heuristic) |
| Sholapur | 16 | 173.9 | 997,281 | 17.6715 | 75.9104 | 17.87 | 17.47 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Moram | 16 | 174.4 | 18,371 | 17.7881 | 76.4708 | 17.99 | 17.59 | 76.67 | 76.27 | Off flood-path (heuristic) |
| Hubballi | 19 | 177.2 | 943,788 | 15.3478 | 75.1338 | 15.55 | 15.15 | 75.33 | 74.93 | Off flood-path (heuristic) |
| Naldurg | 16 | 179.3 | 18,341 | 17.8167 | 76.2818 | 18.02 | 17.62 | 76.48 | 76.08 | Off flood-path (heuristic) |
| Chitaguppa | 19 | 180.2 | 25,298 | 17.6974 | 77.2152 | 17.9 | 17.5 | 77.42 | 77.02 | Off flood-path (heuristic) |
| Umarga | 16 | 180.3 | 35,477 | 17.8384 | 76.6233 | 18.04 | 17.64 | 76.82 | 76.42 | Off flood-path (heuristic) |
| Gokak | 19 | 181.2 | 79,121 | 16.1690 | 74.8239 | 16.37 | 15.97 | 75.02 | 74.62 | Off flood-path (heuristic) |
| Jadcherla | 40 | 183.0 | 17,958 | 16.7738 | 78.1367 | 16.97 | 16.57 | 78.34 | 77.94 | Downstream (heuristic - verify) |
| Bādepalli | 40 | 183.1 | 32,598 | 16.7549 | 78.1443 | 16.95 | 16.55 | 78.34 | 77.94 | Downstream (heuristic - verify) |
| Bail-Hongal | 19 | 183.2 | 49,182 | 15.8137 | 74.8589 | 16.01 | 15.61 | 75.06 | 74.66 | Off flood-path (heuristic) |
| Mangalvedha | 16 | 183.4 | 21,824 | 17.5105 | 75.4471 | 17.71 | 17.31 | 75.65 | 75.25 | Off flood-path (heuristic) |
| Kudachi | 19 | 183.4 | 23,154 | 16.6278 | 74.8541 | 16.83 | 16.43 | 75.05 | 74.65 | Off flood-path (heuristic) |
| Homnābād | 19 | 184.1 | 44,483 | 17.7707 | 77.1252 | 17.97 | 17.57 | 77.33 | 76.93 | Off flood-path (heuristic) |
| Savanūr | 19 | 187.8 | 40,567 | 14.9733 | 75.3372 | 15.17 | 14.77 | 75.54 | 75.14 | Off flood-path (heuristic) |
| Raybag | 19 | 188.7 | 18,736 | 16.4918 | 74.7739 | 16.69 | 16.29 | 74.97 | 74.57 | Off flood-path (heuristic) |
| Konnūr | 19 | 189.1 | 19,386 | 16.2014 | 74.7489 | 16.4 | 16.0 | 74.95 | 74.55 | Off flood-path (heuristic) |
| Basavakalyan | 19 | 189.6 | 69,717 | 17.8744 | 76.9497 | 18.07 | 17.67 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Jagalūr | 19 | 190.1 | 17,257 | 14.5196 | 76.3392 | 14.72 | 14.32 | 76.54 | 76.14 | Off flood-path (heuristic) |
| Nandikotkūr | 02 | 190.9 | 45,343 | 15.8567 | 78.2657 | 16.06 | 15.66 | 78.47 | 78.07 | Downstream (heuristic - verify) |
| Vikārābād | 40 | 192.8 | 53,143 | 17.3381 | 77.9044 | 17.54 | 17.14 | 78.1 | 77.7 | Off flood-path (heuristic) |
| Betamcherla | 02 | 194.0 | 38,994 | 15.4514 | 78.1480 | 15.65 | 15.25 | 78.35 | 77.95 | Downstream (heuristic - verify) |
| Shiggaon | 19 | 194.7 | 28,207 | 14.9905 | 75.2250 | 15.19 | 14.79 | 75.42 | 75.02 | Off flood-path (heuristic) |
| Nāgar Karnūl | 40 | 194.8 | 29,439 | 16.4821 | 78.3247 | 16.68 | 16.28 | 78.52 | 78.12 | Downstream (heuristic - verify) |
| Sāngola | 16 | 195.7 | 34,321 | 17.4395 | 75.1938 | 17.64 | 17.24 | 75.39 | 74.99 | Off flood-path (heuristic) |
| Kalyandurg | 02 | 196.5 | 32,328 | 14.5452 | 77.1055 | 14.75 | 14.35 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Bankāpur | 19 | 197.4 | 22,529 | 14.9230 | 75.2622 | 15.12 | 14.72 | 75.46 | 75.06 | Off flood-path (heuristic) |
| Shiraguppi | 16 | 198.2 | 25,000 | 16.6187 | 74.7091 | 16.82 | 16.42 | 74.91 | 74.51 | Off flood-path (heuristic) |
| Hāveri | 19 | 198.6 | 67,102 | 14.7935 | 75.4045 | 14.99 | 14.59 | 75.6 | 75.2 | Off flood-path (heuristic) |
| Zahirābād | 40 | 199.5 | 71,166 | 17.6814 | 77.6074 | 17.88 | 17.48 | 77.81 | 77.41 | Off flood-path (heuristic) |

## Bhadra Dam (Karnataka)
Dam coordinates: 13.68, 75.63

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Tarikere | 19 | 20.1 | 37,848 | 13.7095 | 75.8138 | 13.91 | 13.51 | 76.01 | 75.61 | Downstream (heuristic - verify) |
| Bhadrāvati | 19 | 20.4 | 163,903 | 13.8485 | 75.7050 | 14.05 | 13.65 | 75.91 | 75.51 | Downstream (heuristic - verify) |
| Shivamogga | 19 | 28.8 | 322,650 | 13.9316 | 75.5679 | 14.13 | 13.73 | 75.77 | 75.37 | Off flood-path (heuristic) |
| Birūr | 19 | 38.1 | 23,493 | 13.5972 | 75.9717 | 13.8 | 13.4 | 76.17 | 75.77 | Downstream (heuristic - verify) |
| Tīrthahalli | 19 | 41.6 | 15,422 | 13.6883 | 75.2455 | 13.89 | 13.49 | 75.45 | 75.05 | Off flood-path (heuristic) |
| Chikmagalūr | 19 | 42.7 | 121,484 | 13.3223 | 75.7740 | 13.52 | 13.12 | 75.97 | 75.57 | Off flood-path (heuristic) |
| Kadūr | 19 | 43.6 | 34,151 | 13.5528 | 76.0116 | 13.75 | 13.35 | 76.21 | 75.81 | Downstream (heuristic - verify) |
| Channagiri | 19 | 49.8 | 21,313 | 14.0240 | 75.9258 | 14.22 | 13.82 | 76.13 | 75.73 | Downstream (heuristic - verify) |
| Honnāli | 19 | 62.3 | 17,928 | 14.2398 | 75.6451 | 14.44 | 14.04 | 75.85 | 75.45 | Off flood-path (heuristic) |
| Belūr | 19 | 62.6 | 22,484 | 13.1656 | 75.8652 | 13.37 | 12.97 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Someshwar | 19 | 64.4 | 22,137 | 13.4911 | 75.0665 | 13.69 | 13.29 | 75.27 | 74.87 | Off flood-path (heuristic) |
| Hosadurga | 19 | 71.8 | 28,370 | 13.7963 | 76.2841 | 14.0 | 13.6 | 76.48 | 76.08 | Downstream (heuristic - verify) |
| Shikaripura | 19 | 71.9 | 36,015 | 14.2698 | 75.3564 | 14.47 | 14.07 | 75.56 | 75.16 | Off flood-path (heuristic) |
| Holalkere | 19 | 72.2 | 15,783 | 14.0429 | 76.1850 | 14.24 | 13.84 | 76.38 | 75.98 | Downstream (heuristic - verify) |
| Arsikere | 19 | 79.0 | 53,216 | 13.3145 | 76.2570 | 13.51 | 13.11 | 76.46 | 76.06 | Off flood-path (heuristic) |
| Sakleshpur | 19 | 83.8 | 24,931 | 12.9412 | 75.7847 | 13.14 | 12.74 | 75.98 | 75.58 | Off flood-path (heuristic) |
| Sāgar | 19 | 84.4 | 54,550 | 14.1650 | 75.0290 | 14.36 | 13.96 | 75.23 | 74.83 | Off flood-path (heuristic) |
| Kārkala | 19 | 86.2 | 25,800 | 13.2143 | 74.9923 | 13.41 | 13.01 | 75.19 | 74.79 | Off flood-path (heuristic) |
| Sirālkoppa | 19 | 88.0 | 16,864 | 14.3807 | 75.2501 | 14.58 | 14.18 | 75.45 | 75.05 | Off flood-path (heuristic) |
| Hirekerūr | 19 | 89.8 | 19,191 | 14.4551 | 75.3952 | 14.66 | 14.26 | 75.6 | 75.2 | Off flood-path (heuristic) |
| Hassan | 19 | 90.2 | 155,006 | 13.0071 | 76.0962 | 13.21 | 12.81 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Satyāmangala | 19 | 90.9 | 18,002 | 13.0193 | 76.1243 | 13.22 | 12.82 | 76.32 | 75.92 | Off flood-path (heuristic) |
| Davangere | 19 | 93.2 | 435,128 | 14.4669 | 75.9269 | 14.67 | 14.27 | 76.13 | 75.73 | Downstream (heuristic - verify) |
| Harihar | 19 | 94.6 | 83,219 | 14.5129 | 75.8072 | 14.71 | 14.31 | 76.01 | 75.61 | Downstream (heuristic - verify) |
| Mūdbidri | 19 | 96.8 | 30,632 | 13.0665 | 74.9952 | 13.27 | 12.87 | 75.2 | 74.8 | Off flood-path (heuristic) |
| Manipal | 19 | 98.6 | 34,370 | 13.3500 | 74.7833 | 13.55 | 13.15 | 74.98 | 74.58 | Off flood-path (heuristic) |
| Saligram | 19 | 101.5 | 15,123 | 13.4991 | 74.7094 | 13.7 | 13.3 | 74.91 | 74.51 | Off flood-path (heuristic) |
| Kundapura | 19 | 101.7 | 30,444 | 13.6313 | 74.6902 | 13.83 | 13.43 | 74.89 | 74.49 | Off flood-path (heuristic) |
| Chitradurga | 19 | 102.7 | 145,853 | 14.2226 | 76.4004 | 14.42 | 14.02 | 76.6 | 76.2 | Downstream (heuristic - verify) |
| Udupi | 19 | 103.0 | 165,000 | 13.3347 | 74.7462 | 13.53 | 13.13 | 74.95 | 74.55 | Off flood-path (heuristic) |
| Tiptūr | 19 | 103.1 | 60,957 | 13.2563 | 76.4777 | 13.46 | 13.06 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Gangolli | 19 | 103.7 | 15,200 | 13.6502 | 74.6707 | 13.85 | 13.45 | 74.87 | 74.47 | Off flood-path (heuristic) |
| Ranebennur | 19 | 104.8 | 106,406 | 14.6224 | 75.6295 | 14.82 | 14.42 | 75.83 | 75.43 | Off flood-path (heuristic) |
| Malpe | 19 | 106.6 | 23,496 | 13.3496 | 74.7039 | 13.55 | 13.15 | 74.9 | 74.5 | Off flood-path (heuristic) |
| Bantvāl | 19 | 108.9 | 40,155 | 12.8905 | 75.0349 | 13.09 | 12.69 | 75.23 | 74.83 | Off flood-path (heuristic) |
| Byndoor | 19 | 109.6 | 20,323 | 13.8667 | 74.6333 | 14.07 | 13.67 | 74.83 | 74.43 | Off flood-path (heuristic) |
| Hiriyūr | 19 | 110.6 | 56,416 | 13.9445 | 76.6172 | 14.14 | 13.74 | 76.82 | 76.42 | Downstream (heuristic - verify) |
| Chiknāyakanhalli | 19 | 111.0 | 24,292 | 13.4161 | 76.6206 | 13.62 | 13.22 | 76.82 | 76.42 | Downstream (heuristic - verify) |
| Byādgi | 19 | 111.5 | 30,014 | 14.6732 | 75.4868 | 14.87 | 14.47 | 75.69 | 75.29 | Off flood-path (heuristic) |
| Mūlki | 19 | 111.7 | 17,274 | 13.0910 | 74.7935 | 13.29 | 12.89 | 74.99 | 74.59 | Off flood-path (heuristic) |
| Arkalgūd | 19 | 112.2 | 16,810 | 12.7617 | 76.0603 | 12.96 | 12.56 | 76.26 | 75.86 | Off flood-path (heuristic) |
| Puttūr | 19 | 112.3 | 53,331 | 12.7598 | 75.2017 | 12.96 | 12.56 | 75.4 | 75.0 | Off flood-path (heuristic) |
| Vittal | 19 | 117.0 | 17,618 | 12.7632 | 75.0990 | 12.96 | 12.56 | 75.3 | 74.9 | Off flood-path (heuristic) |
| Channarāyapatna | 19 | 118.8 | 40,417 | 12.9064 | 76.3877 | 13.11 | 12.71 | 76.59 | 76.19 | Off flood-path (heuristic) |
| Mangaluru | 19 | 119.2 | 499,487 | 12.9172 | 74.8560 | 13.12 | 12.72 | 75.06 | 74.66 | Off flood-path (heuristic) |
| Holenarasipura | 19 | 119.5 | 29,974 | 12.7864 | 76.2433 | 12.99 | 12.59 | 76.44 | 76.04 | Off flood-path (heuristic) |
| Jagalūr | 19 | 120.7 | 17,257 | 14.5196 | 76.3392 | 14.72 | 14.32 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Bhatkal | 19 | 120.9 | 32,000 | 13.9853 | 74.5553 | 14.19 | 13.79 | 74.76 | 74.36 | Off flood-path (heuristic) |
| Hāveri | 19 | 126.2 | 67,102 | 14.7935 | 75.4045 | 14.99 | 14.59 | 75.6 | 75.2 | Off flood-path (heuristic) |
| Sullya | 19 | 127.2 | 19,958 | 12.5610 | 75.3874 | 12.76 | 12.36 | 75.59 | 75.19 | Off flood-path (heuristic) |
| Sōmēshvara | 19 | 127.9 | 24,066 | 12.8035 | 74.8647 | 13.0 | 12.6 | 75.06 | 74.66 | Off flood-path (heuristic) |
| Ullal | 19 | 128.0 | 59,116 | 12.8057 | 74.8606 | 13.01 | 12.61 | 75.06 | 74.66 | Off flood-path (heuristic) |
| Kōtekāra | 19 | 128.3 | 16,505 | 12.7929 | 74.8722 | 12.99 | 12.59 | 75.07 | 74.67 | Off flood-path (heuristic) |
| Harpanahalli | 19 | 129.1 | 47,039 | 14.7877 | 75.9886 | 14.99 | 14.59 | 76.19 | 75.79 | Downstream (heuristic - verify) |
| Challakere | 19 | 131.1 | 55,194 | 14.3180 | 76.6517 | 14.52 | 14.12 | 76.85 | 76.45 | Downstream (heuristic - verify) |
| Murudeshwara | 19 | 132.0 | 17,938 | 14.0943 | 74.4845 | 14.29 | 13.89 | 74.68 | 74.28 | Off flood-path (heuristic) |
| Hāngal | 19 | 132.3 | 28,159 | 14.7646 | 75.1246 | 14.96 | 14.56 | 75.32 | 74.92 | Off flood-path (heuristic) |
| Sirsi | 19 | 135.2 | 62,882 | 14.6207 | 74.8355 | 14.82 | 14.42 | 75.04 | 74.64 | Off flood-path (heuristic) |
| Sīra | 19 | 137.8 | 57,928 | 13.7416 | 76.9043 | 13.94 | 13.54 | 77.1 | 76.7 | Downstream (heuristic - verify) |
| Madikeri | 19 | 139.9 | 33,540 | 12.4260 | 75.7382 | 12.63 | 12.23 | 75.94 | 75.54 | Off flood-path (heuristic) |
| Kushālnagar | 19 | 140.5 | 15,326 | 12.4580 | 75.9590 | 12.66 | 12.26 | 76.16 | 75.76 | Off flood-path (heuristic) |
| Koipādi | 13 | 140.8 | 18,121 | 12.5930 | 74.9626 | 12.79 | 12.39 | 75.16 | 74.76 | Off flood-path (heuristic) |
| Kottūru | 19 | 142.3 | 26,289 | 14.8244 | 76.2201 | 15.02 | 14.62 | 76.42 | 76.02 | Downstream (heuristic - verify) |
| Bankāpur | 19 | 143.8 | 22,529 | 14.9230 | 75.2622 | 15.12 | 14.72 | 75.46 | 75.06 | Off flood-path (heuristic) |
| Honnavar | 19 | 144.3 | 19,109 | 14.2809 | 74.4450 | 14.48 | 14.08 | 74.64 | 74.24 | Off flood-path (heuristic) |
| Chengala | 13 | 145.6 | 15,588 | 12.4984 | 75.0503 | 12.7 | 12.3 | 75.25 | 74.85 | Off flood-path (heuristic) |
| Krishnarājpet | 19 | 146.1 | 25,946 | 12.6662 | 76.4877 | 12.87 | 12.47 | 76.69 | 76.29 | Off flood-path (heuristic) |
| Kūdlu | 13 | 146.1 | 26,235 | 12.5298 | 74.9788 | 12.73 | 12.33 | 75.18 | 74.78 | Off flood-path (heuristic) |
| Savanūr | 19 | 147.2 | 40,567 | 14.9733 | 75.3372 | 15.17 | 14.77 | 75.54 | 75.14 | Off flood-path (heuristic) |
| Gubbi | 19 | 147.5 | 18,446 | 13.3122 | 76.9410 | 13.51 | 13.11 | 77.14 | 76.74 | Downstream (heuristic - verify) |
| Kāsaragod | 13 | 148.6 | 54,172 | 12.4984 | 74.9896 | 12.7 | 12.3 | 75.19 | 74.79 | Off flood-path (heuristic) |
| Shiggaon | 19 | 152.1 | 28,207 | 14.9905 | 75.2250 | 15.19 | 14.79 | 75.42 | 75.02 | Off flood-path (heuristic) |
| Hadagalli | 19 | 152.6 | 27,967 | 15.0205 | 75.9318 | 15.22 | 14.82 | 76.13 | 75.73 | Downstream (heuristic - verify) |
| Nāgamangala | 19 | 154.8 | 17,776 | 12.8194 | 76.7546 | 13.02 | 12.62 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Kumta | 19 | 154.9 | 36,719 | 14.4285 | 74.4189 | 14.63 | 14.23 | 74.62 | 74.22 | Off flood-path (heuristic) |
| Mundgod | 19 | 157.2 | 18,866 | 14.9714 | 75.0366 | 15.17 | 14.77 | 75.24 | 74.84 | Off flood-path (heuristic) |
| Piriyāpatna | 19 | 158.0 | 16,685 | 12.3350 | 76.1007 | 12.53 | 12.13 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Kūdligi | 19 | 158.7 | 26,680 | 14.9050 | 76.3853 | 15.1 | 14.71 | 76.59 | 76.19 | Downstream (heuristic - verify) |
| Krishnarājāsāgara | 19 | 160.2 | 35,805 | 12.4398 | 76.3828 | 12.64 | 12.24 | 76.58 | 76.18 | Off flood-path (heuristic) |
| Ajānūr | 13 | 160.4 | 33,079 | 12.3361 | 75.0930 | 12.54 | 12.14 | 75.29 | 74.89 | Off flood-path (heuristic) |
| Lakshmeshwar | 19 | 161.8 | 36,754 | 15.1269 | 75.4694 | 15.33 | 14.93 | 75.67 | 75.27 | Off flood-path (heuristic) |
| Kanhangad | 13 | 162.8 | 125,564 | 12.3081 | 75.1063 | 12.51 | 12.11 | 75.31 | 74.91 | Off flood-path (heuristic) |
| Tumkūr | 19 | 163.6 | 307,359 | 13.3414 | 77.1022 | 13.54 | 13.14 | 77.3 | 76.9 | Downstream (heuristic - verify) |
| Virajpet | 19 | 166.1 | 17,246 | 12.1964 | 75.8051 | 12.4 | 12.0 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Molakālumuru | 19 | 166.8 | 15,797 | 14.7178 | 76.7468 | 14.92 | 14.52 | 76.95 | 76.55 | Downstream (heuristic - verify) |
| Nīlēshwar | 13 | 166.8 | 25,405 | 12.2595 | 75.1352 | 12.46 | 12.06 | 75.34 | 74.94 | Off flood-path (heuristic) |
| Kunigal | 19 | 167.7 | 34,155 | 13.0232 | 77.0252 | 13.22 | 12.82 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Hunsūr | 19 | 169.1 | 50,865 | 12.3036 | 76.2927 | 12.5 | 12.1 | 76.49 | 76.09 | Off flood-path (heuristic) |
| Madhugiri | 19 | 171.0 | 29,159 | 13.6603 | 77.2124 | 13.86 | 13.46 | 77.41 | 77.01 | Downstream (heuristic - verify) |
| Gokarna | 19 | 171.5 | 25,851 | 14.5500 | 74.3167 | 14.75 | 14.35 | 74.52 | 74.12 | Off flood-path (heuristic) |
| Mundargi | 19 | 172.0 | 24,919 | 15.2068 | 75.8839 | 15.41 | 15.01 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Shirhatti | 19 | 172.8 | 17,610 | 15.2335 | 75.5800 | 15.43 | 15.03 | 75.78 | 75.38 | Off flood-path (heuristic) |
| French Rocks | 19 | 173.1 | 20,399 | 12.5009 | 76.6742 | 12.7 | 12.3 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Yellāpur | 19 | 173.8 | 20,452 | 14.9637 | 74.7093 | 15.16 | 14.76 | 74.91 | 74.51 | Off flood-path (heuristic) |
| Rāyadrug | 02 | 173.8 | 61,749 | 14.6997 | 76.8524 | 14.9 | 14.5 | 77.05 | 76.65 | Downstream (heuristic - verify) |
| Koratagere | 19 | 174.6 | 15,265 | 13.5220 | 77.2373 | 13.72 | 13.32 | 77.44 | 77.04 | Downstream (heuristic - verify) |
| Trikarpūr North | 13 | 177.6 | 18,210 | 12.1458 | 75.1748 | 12.35 | 11.95 | 75.37 | 74.97 | Off flood-path (heuristic) |
| Mulgund | 19 | 178.4 | 18,928 | 15.2807 | 75.5213 | 15.48 | 15.08 | 75.72 | 75.32 | Off flood-path (heuristic) |
| Ankola | 19 | 179.7 | 22,249 | 14.6605 | 74.3047 | 14.86 | 14.46 | 74.5 | 74.1 | Off flood-path (heuristic) |
| Kundgol | 19 | 180.0 | 18,726 | 15.2561 | 75.2473 | 15.46 | 15.06 | 75.45 | 75.05 | Off flood-path (heuristic) |
| Trikarpūr South | 13 | 180.4 | 22,991 | 12.1165 | 75.1852 | 12.32 | 11.92 | 75.39 | 74.99 | Off flood-path (heuristic) |
| Shrīrangapattana | 19 | 180.5 | 25,061 | 12.4226 | 76.6844 | 12.62 | 12.22 | 76.88 | 76.48 | Off flood-path (heuristic) |
| Hutagalli | 19 | 181.3 | 18,308 | 12.3417 | 76.5863 | 12.54 | 12.14 | 76.79 | 76.39 | Off flood-path (heuristic) |
| Kalghatgi | 19 | 181.6 | 16,917 | 15.1831 | 74.9710 | 15.38 | 14.98 | 75.17 | 74.77 | Off flood-path (heuristic) |
| Cheruthazham | 13 | 182.2 | 29,348 | 12.0810 | 75.2627 | 12.28 | 11.88 | 75.46 | 75.06 | Off flood-path (heuristic) |
| Payyanur | 13 | 182.4 | 72,111 | 12.0935 | 75.2025 | 12.29 | 11.89 | 75.4 | 75.0 | Off flood-path (heuristic) |
| Pariyāram | 13 | 183.3 | 20,405 | 12.0588 | 75.3248 | 12.26 | 11.86 | 75.52 | 75.12 | Off flood-path (heuristic) |
| Hinakallu | 19 | 183.3 | 23,162 | 12.3304 | 76.6021 | 12.53 | 12.13 | 76.8 | 76.4 | Off flood-path (heuristic) |
| Kunnimangalam | 22 | 183.5 | 18,965 | 12.0735 | 75.2412 | 12.27 | 11.87 | 75.44 | 75.04 | Off flood-path (heuristic) |
| Kurumathur | 13 | 183.9 | 18,641 | 12.0397 | 75.4114 | 12.24 | 11.84 | 75.61 | 75.21 | Off flood-path (heuristic) |
| Pāvugada | 19 | 184.1 | 32,063 | 14.0995 | 77.2802 | 14.3 | 13.9 | 77.48 | 77.08 | Downstream (heuristic - verify) |
| Taliparamba | 13 | 184.5 | 72,465 | 12.0416 | 75.3593 | 12.24 | 11.84 | 75.56 | 75.16 | Off flood-path (heuristic) |
| Sandūr | 19 | 184.9 | 37,431 | 15.0861 | 76.5469 | 15.29 | 14.89 | 76.75 | 76.35 | Downstream (heuristic - verify) |
| Kalyandurg | 02 | 185.9 | 32,328 | 14.5452 | 77.1055 | 14.75 | 14.35 | 77.31 | 76.91 | Downstream (heuristic - verify) |
| Ezhome | 13 | 187.3 | 19,261 | 12.0300 | 75.2819 | 12.23 | 11.83 | 75.48 | 75.08 | Off flood-path (heuristic) |
| Mādāyi | 22 | 187.9 | 35,888 | 12.0343 | 75.2378 | 12.23 | 11.83 | 75.44 | 75.04 | Off flood-path (heuristic) |
| Mandya | 19 | 188.2 | 137,358 | 12.5223 | 76.8975 | 12.72 | 12.32 | 77.1 | 76.7 | Off flood-path (heuristic) |
| Mysuru | 19 | 188.6 | 920,550 | 12.2979 | 76.6393 | 12.5 | 12.1 | 76.84 | 76.44 | Off flood-path (heuristic) |
| Māgadi | 19 | 190.3 | 27,605 | 12.9571 | 77.2237 | 13.16 | 12.76 | 77.42 | 77.02 | Off flood-path (heuristic) |
| Kolaccheri | 13 | 190.8 | 17,095 | 11.9763 | 75.4167 | 12.18 | 11.78 | 75.62 | 75.22 | Off flood-path (heuristic) |
| Cherukunnu | 13 | 190.9 | 16,111 | 11.9956 | 75.2872 | 12.2 | 11.8 | 75.49 | 75.09 | Off flood-path (heuristic) |
| Kalliyasshēri | 13 | 191.7 | 31,122 | 11.9755 | 75.3645 | 12.18 | 11.78 | 75.56 | 75.16 | Off flood-path (heuristic) |
| Kannapuram | 13 | 191.8 | 18,459 | 11.9843 | 75.3041 | 12.18 | 11.78 | 75.5 | 75.1 | Off flood-path (heuristic) |
| Hubballi | 19 | 193.0 | 943,788 | 15.3478 | 75.1338 | 15.55 | 15.15 | 75.33 | 74.93 | Off flood-path (heuristic) |
| Gadag-Betageri | 19 | 193.1 | 172,813 | 15.4167 | 75.6167 | 15.62 | 15.22 | 75.82 | 75.42 | Off flood-path (heuristic) |
| Koppal | 19 | 193.6 | 70,698 | 15.3452 | 76.1548 | 15.55 | 15.15 | 76.35 | 75.95 | Downstream (heuristic - verify) |
| Pāppinisshēri | 13 | 194.2 | 35,134 | 11.9566 | 75.3403 | 12.16 | 11.76 | 75.54 | 75.14 | Off flood-path (heuristic) |
| Gadag | 19 | 194.6 | 172,612 | 15.4298 | 75.6297 | 15.63 | 15.23 | 75.83 | 75.43 | Off flood-path (heuristic) |
| Hosapete | 19 | 194.6 | 206,167 | 15.2695 | 76.3871 | 15.47 | 15.07 | 76.59 | 76.19 | Downstream (heuristic - verify) |
| Mattanur | 13 | 194.7 | 47,078 | 11.9302 | 75.5715 | 12.13 | 11.73 | 75.77 | 75.37 | Off flood-path (heuristic) |
| Annigeri | 19 | 195.2 | 28,267 | 15.4251 | 75.4335 | 15.63 | 15.23 | 75.63 | 75.23 | Off flood-path (heuristic) |
| Munderi | 13 | 195.6 | 21,676 | 11.9303 | 75.4455 | 12.13 | 11.73 | 75.65 | 75.25 | Off flood-path (heuristic) |
| Maddūr | 19 | 195.7 | 28,754 | 12.5828 | 77.0429 | 12.78 | 12.38 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Kudali | 13 | 196.5 | 15,236 | 11.9198 | 75.4722 | 12.12 | 11.72 | 75.67 | 75.27 | Off flood-path (heuristic) |
| Kanhirode | 13 | 196.7 | 15,353 | 11.9184 | 75.4645 | 12.12 | 11.72 | 75.66 | 75.26 | Off flood-path (heuristic) |
| Azhikkōd | 13 | 198.3 | 25,195 | 11.9199 | 75.3355 | 12.12 | 11.72 | 75.54 | 75.14 | Off flood-path (heuristic) |
| Keevallur | 13 | 198.5 | 20,440 | 11.8970 | 75.5310 | 12.1 | 11.7 | 75.73 | 75.33 | Off flood-path (heuristic) |
| Chirakkal | 13 | 198.7 | 45,601 | 11.9126 | 75.3610 | 12.11 | 11.71 | 75.56 | 75.16 | Off flood-path (heuristic) |
| Varam | 13 | 199.4 | 17,008 | 11.8996 | 75.4132 | 12.1 | 11.7 | 75.61 | 75.21 | Off flood-path (heuristic) |
| Puzhathi | 13 | 199.5 | 35,212 | 11.9011 | 75.3892 | 12.1 | 11.7 | 75.59 | 75.19 | Off flood-path (heuristic) |
| Chelora | 13 | 199.6 | 20,952 | 11.8949 | 75.4396 | 12.09 | 11.69 | 75.64 | 75.24 | Off flood-path (heuristic) |

## Krishna Raja Sagara (KRS) (Karnataka)
Dam coordinates: 12.42, 76.57

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Hutagalli | 19 | 8.9 | 18,308 | 12.3417 | 76.5863 | 12.54 | 12.14 | 76.79 | 76.39 | Off flood-path (heuristic) |
| Hinakallu | 19 | 10.6 | 23,162 | 12.3304 | 76.6021 | 12.53 | 12.13 | 76.8 | 76.4 | Off flood-path (heuristic) |
| Shrīrangapattana | 19 | 12.4 | 25,061 | 12.4226 | 76.6844 | 12.62 | 12.22 | 76.88 | 76.48 | Downstream (heuristic - verify) |
| French Rocks | 19 | 14.5 | 20,399 | 12.5009 | 76.6742 | 12.7 | 12.3 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Mysuru | 19 | 15.5 | 920,550 | 12.2979 | 76.6393 | 12.5 | 12.1 | 76.84 | 76.44 | Downstream (heuristic - verify) |
| Krishnarājāsāgara | 19 | 20.5 | 35,805 | 12.4398 | 76.3828 | 12.64 | 12.24 | 76.58 | 76.18 | Off flood-path (heuristic) |
| Krishnarājpet | 19 | 28.8 | 25,946 | 12.6662 | 76.4877 | 12.87 | 12.47 | 76.69 | 76.29 | Off flood-path (heuristic) |
| Hunsūr | 19 | 32.8 | 50,865 | 12.3036 | 76.2927 | 12.5 | 12.1 | 76.49 | 76.09 | Off flood-path (heuristic) |
| Bannūr | 19 | 33.2 | 25,455 | 12.3330 | 76.8620 | 12.53 | 12.13 | 77.06 | 76.66 | Downstream (heuristic - verify) |
| Nanjangūd | 19 | 35.8 | 50,598 | 12.1176 | 76.6840 | 12.32 | 11.92 | 76.88 | 76.48 | Downstream (heuristic - verify) |
| Mandya | 19 | 37.3 | 137,358 | 12.5223 | 76.8975 | 12.72 | 12.32 | 77.1 | 76.7 | Downstream (heuristic - verify) |
| Nāgamangala | 19 | 48.7 | 17,776 | 12.8194 | 76.7546 | 13.02 | 12.62 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Piriyāpatna | 19 | 51.8 | 16,685 | 12.3350 | 76.1007 | 12.53 | 12.13 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Malavalli | 19 | 53.4 | 38,129 | 12.3856 | 77.0605 | 12.59 | 12.19 | 77.26 | 76.86 | Downstream (heuristic - verify) |
| Holenarasipura | 19 | 54.0 | 29,974 | 12.7864 | 76.2433 | 12.99 | 12.59 | 76.44 | 76.04 | Off flood-path (heuristic) |
| Maddūr | 19 | 54.4 | 28,754 | 12.5828 | 77.0429 | 12.78 | 12.38 | 77.24 | 76.84 | Downstream (heuristic - verify) |
| Channarāyapatna | 19 | 57.6 | 40,417 | 12.9064 | 76.3877 | 13.11 | 12.71 | 76.59 | 76.19 | Off flood-path (heuristic) |
| Kollegāl | 19 | 65.7 | 57,149 | 12.1545 | 77.1105 | 12.35 | 11.95 | 77.31 | 76.91 | Downstream (heuristic - verify) |
| Kushālnagar | 19 | 66.5 | 15,326 | 12.4580 | 75.9590 | 12.66 | 12.26 | 76.16 | 75.76 | Off flood-path (heuristic) |
| Arkalgūd | 19 | 67.1 | 16,810 | 12.7617 | 76.0603 | 12.96 | 12.56 | 76.26 | 75.86 | Off flood-path (heuristic) |
| Chamrajnagar | 19 | 68.3 | 69,875 | 11.9231 | 76.9395 | 12.12 | 11.72 | 77.14 | 76.74 | Downstream (heuristic - verify) |
| Gundlupēt | 19 | 69.1 | 28,105 | 11.8100 | 76.6903 | 12.01 | 11.61 | 76.89 | 76.49 | Off flood-path (heuristic) |
| Channapatna | 19 | 73.7 | 71,942 | 12.6514 | 77.2067 | 12.85 | 12.45 | 77.41 | 77.01 | Downstream (heuristic - verify) |
| Satyāmangala | 19 | 82.3 | 18,002 | 13.0193 | 76.1243 | 13.22 | 12.82 | 76.32 | 75.92 | Off flood-path (heuristic) |
| Hassan | 19 | 83.1 | 155,006 | 13.0071 | 76.0962 | 13.21 | 12.81 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Kunigal | 19 | 83.3 | 34,155 | 13.0232 | 77.0252 | 13.22 | 12.82 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Closepet | 19 | 84.2 | 95,167 | 12.7218 | 77.2815 | 12.92 | 12.52 | 77.48 | 77.08 | Downstream (heuristic - verify) |
| Virajpet | 19 | 86.7 | 17,246 | 12.1964 | 75.8051 | 12.4 | 12.0 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Madikeri | 19 | 90.3 | 33,540 | 12.4260 | 75.7382 | 12.63 | 12.23 | 75.94 | 75.54 | Off flood-path (heuristic) |
| Māgadi | 19 | 92.7 | 27,605 | 12.9571 | 77.2237 | 13.16 | 12.76 | 77.42 | 77.02 | Off flood-path (heuristic) |
| Kanakapura | 19 | 93.4 | 54,014 | 12.5465 | 77.4201 | 12.75 | 12.35 | 77.62 | 77.22 | Downstream (heuristic - verify) |
| Tiptūr | 19 | 93.5 | 60,957 | 13.2563 | 76.4777 | 13.46 | 13.06 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Devarshola | 25 | 98.5 | 24,954 | 11.5437 | 76.4404 | 11.74 | 11.34 | 76.64 | 76.24 | Off flood-path (heuristic) |
| Gudalur | 25 | 100.5 | 49,535 | 11.5207 | 76.4814 | 11.72 | 11.32 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Kollivāyal | 25 | 102.8 | 21,943 | 11.4998 | 76.4815 | 11.7 | 11.3 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Sakleshpur | 19 | 103.0 | 24,931 | 12.9412 | 75.7847 | 13.14 | 12.74 | 75.98 | 75.58 | Off flood-path (heuristic) |
| Kalpatta | 13 | 104.6 | 31,580 | 11.6087 | 76.0834 | 11.81 | 11.41 | 76.28 | 75.88 | Off flood-path (heuristic) |
| Tondalam | 25 | 104.9 | 44,590 | 11.5014 | 76.3498 | 11.7 | 11.3 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Arsikere | 19 | 105.1 | 53,216 | 13.3145 | 76.2570 | 13.51 | 13.11 | 76.46 | 76.06 | Off flood-path (heuristic) |
| Gubbi | 19 | 107.0 | 18,446 | 13.3122 | 76.9410 | 13.51 | 13.11 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Chiknāyakanhalli | 19 | 110.9 | 24,292 | 13.4161 | 76.6206 | 13.62 | 13.22 | 76.82 | 76.42 | Off flood-path (heuristic) |
| Ooty | 25 | 112.8 | 233,426 | 11.4134 | 76.6952 | 11.61 | 11.21 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Belūr | 19 | 112.8 | 22,484 | 13.1656 | 75.8652 | 13.37 | 12.97 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Kotagiri | 25 | 115.5 | 28,848 | 11.4207 | 76.8603 | 11.62 | 11.22 | 77.06 | 76.66 | Off flood-path (heuristic) |
| Nelamangala | 19 | 117.0 | 37,232 | 13.0998 | 77.3936 | 13.3 | 12.9 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Tumkūr | 19 | 117.6 | 307,359 | 13.3414 | 77.1022 | 13.54 | 13.14 | 77.3 | 76.9 | Off flood-path (heuristic) |
| Kērkandi | 25 | 118.5 | 23,229 | 11.3678 | 76.7458 | 11.57 | 11.17 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Wellington | 25 | 119.6 | 20,254 | 11.3655 | 76.7844 | 11.57 | 11.17 | 76.98 | 76.58 | Off flood-path (heuristic) |
| Mattanur | 13 | 121.4 | 47,078 | 11.9302 | 75.5715 | 12.13 | 11.73 | 75.77 | 75.37 | Off flood-path (heuristic) |
| Coonoor | 25 | 121.5 | 45,494 | 11.3498 | 76.7938 | 11.55 | 11.15 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Jigani | 19 | 122.9 | 17,036 | 12.7861 | 77.6385 | 12.99 | 12.59 | 77.84 | 77.44 | Downstream (heuristic - verify) |
| Kandamkunnu | 13 | 123.7 | 16,025 | 11.8695 | 75.5808 | 12.07 | 11.67 | 75.78 | 75.38 | Off flood-path (heuristic) |
| Kunnummal | 13 | 124.3 | 18,031 | 11.6832 | 75.7108 | 11.88 | 11.48 | 75.91 | 75.51 | Off flood-path (heuristic) |
| Sathyamangalam | 25 | 125.0 | 37,816 | 11.5053 | 77.2383 | 11.71 | 11.31 | 77.44 | 77.04 | Downstream (heuristic - verify) |
| Anekal | 19 | 126.4 | 44,260 | 12.7111 | 77.6956 | 12.91 | 12.51 | 77.9 | 77.5 | Downstream (heuristic - verify) |
| Kumārapālaiyam | 25 | 126.4 | 15,706 | 11.5021 | 77.2555 | 11.7 | 11.3 | 77.46 | 77.06 | Downstream (heuristic - verify) |
| Bengaluru | 19 | 126.9 | 8,495,492 | 12.9719 | 77.5937 | 13.17 | 12.77 | 77.79 | 77.39 | Downstream (heuristic - verify) |
| Keevallur | 13 | 127.0 | 20,440 | 11.8970 | 75.5310 | 12.1 | 11.7 | 75.73 | 75.33 | Off flood-path (heuristic) |
| Kolavallúr | 13 | 127.3 | 19,817 | 11.7507 | 75.6199 | 11.95 | 11.55 | 75.82 | 75.42 | Off flood-path (heuristic) |
| Kuttuparamba | 13 | 127.5 | 29,619 | 11.8277 | 75.5659 | 12.03 | 11.63 | 75.77 | 75.37 | Off flood-path (heuristic) |
| Chekkiād | 13 | 127.6 | 24,246 | 11.7173 | 75.6419 | 11.92 | 11.52 | 75.84 | 75.44 | Off flood-path (heuristic) |
| Electronic City Phase I | 19 | 128.1 | 76,348 | 12.8549 | 77.6633 | 13.05 | 12.65 | 77.86 | 77.46 | Downstream (heuristic - verify) |
| koppana Agrahara | 19 | 128.5 | 20,622 | 12.8551 | 77.6671 | 13.06 | 12.66 | 77.87 | 77.47 | Downstream (heuristic - verify) |
| Mangattidam | 13 | 128.7 | 18,627 | 11.8433 | 75.5437 | 12.04 | 11.64 | 75.74 | 75.34 | Off flood-path (heuristic) |
| Hebbagodi | 19 | 128.7 | 34,827 | 12.8263 | 77.6809 | 13.03 | 12.63 | 77.88 | 77.48 | Downstream (heuristic - verify) |
| Bommasandra Industrial Area | 19 | 128.7 | 15,254 | 12.8177 | 77.6842 | 13.02 | 12.62 | 77.88 | 77.48 | Downstream (heuristic - verify) |
| Nādāpuram | 13 | 128.8 | 40,230 | 11.6846 | 75.6549 | 11.88 | 11.48 | 75.85 | 75.45 | Off flood-path (heuristic) |
| Kōttayam | 13 | 129.3 | 19,176 | 11.8252 | 75.5478 | 12.03 | 11.63 | 75.75 | 75.35 | Off flood-path (heuristic) |
| Sullya | 19 | 129.3 | 19,958 | 12.5610 | 75.3874 | 12.76 | 12.36 | 75.59 | 75.19 | Off flood-path (heuristic) |
| Patuvilāyi | 13 | 129.4 | 20,598 | 11.8656 | 75.5233 | 12.07 | 11.67 | 75.72 | 75.32 | Off flood-path (heuristic) |
| Tūnēri | 13 | 129.6 | 23,421 | 11.6970 | 75.6349 | 11.9 | 11.5 | 75.83 | 75.43 | Off flood-path (heuristic) |
| Pāttyam | 13 | 129.7 | 20,161 | 11.7930 | 75.5641 | 11.99 | 11.59 | 75.76 | 75.36 | Off flood-path (heuristic) |
| Mokēri | 13 | 129.8 | 19,684 | 11.7776 | 75.5731 | 11.98 | 11.58 | 75.77 | 75.37 | Off flood-path (heuristic) |
| Eravattūr | 13 | 130.0 | 17,016 | 11.5801 | 75.7384 | 11.78 | 11.38 | 75.94 | 75.54 | Off flood-path (heuristic) |
| Mennānyam | 13 | 130.2 | 15,768 | 11.5579 | 75.7596 | 11.76 | 11.36 | 75.96 | 75.56 | Off flood-path (heuristic) |
| Panoor | 13 | 130.5 | 17,438 | 11.7594 | 75.5784 | 11.96 | 11.56 | 75.78 | 75.38 | Off flood-path (heuristic) |
| Mettupalayam | 25 | 130.7 | 69,213 | 11.2997 | 76.9348 | 11.5 | 11.1 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Sirumugai | 25 | 131.0 | 20,066 | 11.3214 | 77.0052 | 11.52 | 11.12 | 77.21 | 76.81 | Downstream (heuristic - verify) |
| Patiriyat | 13 | 131.1 | 18,008 | 11.8490 | 75.5147 | 12.05 | 11.65 | 75.71 | 75.31 | Off flood-path (heuristic) |
| Panniyannūr | 13 | 131.4 | 22,308 | 11.7486 | 75.5756 | 11.95 | 11.55 | 75.78 | 75.38 | Off flood-path (heuristic) |
| Āyanchēri | 13 | 131.5 | 26,293 | 11.6261 | 75.6743 | 11.83 | 11.43 | 75.87 | 75.47 | Off flood-path (heuristic) |
| Edacchēri | 13 | 131.5 | 26,819 | 11.6818 | 75.6248 | 11.88 | 11.48 | 75.82 | 75.42 | Off flood-path (heuristic) |
| Kudali | 13 | 131.7 | 15,236 | 11.9198 | 75.4722 | 12.12 | 11.72 | 75.67 | 75.27 | Off flood-path (heuristic) |
| Eruvatti | 13 | 132.0 | 16,905 | 11.8062 | 75.5302 | 12.01 | 11.61 | 75.73 | 75.33 | Off flood-path (heuristic) |
| Ancharakandy | 13 | 132.1 | 23,030 | 11.8841 | 75.4850 | 12.08 | 11.68 | 75.69 | 75.29 | Off flood-path (heuristic) |
| Chikmagalūr | 19 | 132.3 | 121,484 | 13.3223 | 75.7740 | 13.52 | 13.12 | 75.97 | 75.57 | Off flood-path (heuristic) |
| Kanhirode | 13 | 132.5 | 15,353 | 11.9184 | 75.4645 | 12.12 | 11.72 | 75.66 | 75.26 | Off flood-path (heuristic) |
| Peringathur | 13 | 132.7 | 40,292 | 11.7137 | 75.5860 | 11.91 | 11.51 | 75.79 | 75.39 | Off flood-path (heuristic) |
| Kurumathur | 13 | 132.8 | 18,641 | 12.0397 | 75.4114 | 12.24 | 11.84 | 75.61 | 75.21 | Off flood-path (heuristic) |
| Denkanikota | 25 | 132.9 | 24,252 | 12.5301 | 77.7889 | 12.73 | 12.33 | 77.99 | 77.59 | Downstream (heuristic - verify) |
| Nilambūr | 13 | 133.0 | 46,366 | 11.2727 | 76.2257 | 11.47 | 11.07 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Katirur | 13 | 133.3 | 31,087 | 11.7849 | 75.5302 | 11.98 | 11.58 | 75.73 | 75.33 | Off flood-path (heuristic) |
| Kottappally | 13 | 133.5 | 21,169 | 11.6127 | 75.6614 | 11.81 | 11.41 | 75.86 | 75.46 | Off flood-path (heuristic) |
| Munderi | 13 | 133.8 | 21,676 | 11.9303 | 75.4455 | 12.13 | 11.73 | 75.65 | 75.25 | Off flood-path (heuristic) |
| Erāmala | 13 | 134.1 | 34,658 | 11.6859 | 75.5910 | 11.89 | 11.49 | 75.79 | 75.39 | Off flood-path (heuristic) |
| Chockli | 13 | 134.6 | 33,732 | 11.7274 | 75.5551 | 11.93 | 11.53 | 75.76 | 75.36 | Off flood-path (heuristic) |
| Yelahanka | 19 | 134.6 | 116,447 | 13.1007 | 77.5963 | 13.3 | 12.9 | 77.8 | 77.4 | Off flood-path (heuristic) |
| Irivēri | 13 | 134.7 | 17,231 | 11.8559 | 75.4736 | 12.06 | 11.66 | 75.67 | 75.27 | Off flood-path (heuristic) |
| Kolaccheri | 13 | 134.7 | 17,095 | 11.9763 | 75.4167 | 12.18 | 11.78 | 75.62 | 75.22 | Off flood-path (heuristic) |
| Balussheri | 13 | 134.9 | 27,363 | 11.4474 | 75.8294 | 11.65 | 11.25 | 76.03 | 75.63 | Off flood-path (heuristic) |
| Naduvannūr | 13 | 135.0 | 25,979 | 11.4877 | 75.7751 | 11.69 | 11.29 | 75.98 | 75.58 | Off flood-path (heuristic) |
| Peralassery | 13 | 135.1 | 16,821 | 11.8322 | 75.4825 | 12.03 | 11.63 | 75.68 | 75.28 | Off flood-path (heuristic) |
| Villiappally | 13 | 135.3 | 34,502 | 11.6250 | 75.6287 | 11.82 | 11.42 | 75.83 | 75.43 | Off flood-path (heuristic) |
| Punjai Puliyampatti | 25 | 135.4 | 18,967 | 11.3516 | 77.1667 | 11.55 | 11.15 | 77.37 | 76.97 | Downstream (heuristic - verify) |
| Erannoli | 13 | 135.4 | 25,818 | 11.7691 | 75.5177 | 11.97 | 11.57 | 75.72 | 75.32 | Off flood-path (heuristic) |
| Chelora | 13 | 136.0 | 20,952 | 11.8949 | 75.4396 | 12.09 | 11.69 | 75.64 | 75.24 | Off flood-path (heuristic) |
| Azhiyūr | 13 | 136.3 | 30,023 | 11.6935 | 75.5601 | 11.89 | 11.49 | 75.76 | 75.36 | Off flood-path (heuristic) |
| Attibele | 19 | 136.4 | 20,532 | 12.7781 | 77.7726 | 12.98 | 12.58 | 77.97 | 77.57 | Downstream (heuristic - verify) |
| Pinarāyi | 13 | 136.7 | 16,801 | 11.8049 | 75.4810 | 12.0 | 11.6 | 75.68 | 75.28 | Off flood-path (heuristic) |
| Nanminda | 13 | 137.4 | 27,316 | 11.4232 | 75.8231 | 11.62 | 11.22 | 76.02 | 75.62 | Off flood-path (heuristic) |
| Kāramadai | 25 | 137.8 | 35,166 | 11.2406 | 76.9601 | 11.44 | 11.04 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Mattigiri | 25 | 137.9 | 23,129 | 12.6980 | 77.8083 | 12.9 | 12.5 | 78.01 | 77.61 | Downstream (heuristic - verify) |
| Mahē | 13 | 138.0 | 41,816 | 11.7017 | 75.5347 | 11.9 | 11.5 | 75.73 | 75.33 | Off flood-path (heuristic) |
| Kadachira | 13 | 138.0 | 18,979 | 11.8369 | 75.4490 | 12.04 | 11.64 | 75.65 | 75.25 | Off flood-path (heuristic) |
| Thazhecode | 13 | 138.1 | 25,116 | 11.3226 | 75.9758 | 11.52 | 11.12 | 76.18 | 75.78 | Off flood-path (heuristic) |
| Jūjūvādi | 25 | 138.1 | 32,474 | 12.7679 | 77.7918 | 12.97 | 12.57 | 77.99 | 77.59 | Downstream (heuristic - verify) |
| Taliparamba | 13 | 138.1 | 72,465 | 12.0416 | 75.3593 | 12.24 | 11.84 | 75.56 | 75.16 | Off flood-path (heuristic) |
| Chālakilakākara | 13 | 138.1 | 17,088 | 11.8540 | 75.4387 | 12.05 | 11.65 | 75.64 | 75.24 | Off flood-path (heuristic) |
| Chōrōd | 13 | 138.2 | 38,245 | 11.6277 | 75.5915 | 11.83 | 11.43 | 75.79 | 75.39 | Off flood-path (heuristic) |
| Varam | 13 | 138.4 | 17,008 | 11.8996 | 75.4132 | 12.1 | 11.7 | 75.61 | 75.21 | Off flood-path (heuristic) |
| Ulliyeri | 13 | 138.6 | 32,509 | 11.4525 | 75.7666 | 11.65 | 11.25 | 75.97 | 75.57 | Off flood-path (heuristic) |
| Mūkondapalli | 25 | 138.7 | 39,245 | 12.7514 | 77.8017 | 12.95 | 12.55 | 78.0 | 77.6 | Downstream (heuristic - verify) |
| Tellicherry | 13 | 138.9 | 97,201 | 11.7481 | 75.4929 | 11.95 | 11.55 | 75.69 | 75.29 | Off flood-path (heuristic) |
| Elayavur | 13 | 139.0 | 33,853 | 11.8892 | 75.4124 | 12.09 | 11.69 | 75.61 | 75.21 | Off flood-path (heuristic) |
| Māniyūr | 13 | 139.0 | 21,820 | 11.5522 | 75.6503 | 11.75 | 11.35 | 75.85 | 75.45 | Off flood-path (heuristic) |
| Kadūr | 19 | 139.7 | 34,151 | 13.5528 | 76.0116 | 13.75 | 13.35 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Dharmadam | 13 | 139.9 | 30,804 | 11.7754 | 75.4646 | 11.98 | 11.58 | 75.66 | 75.26 | Off flood-path (heuristic) |
| Muluppilagadu | 13 | 139.9 | 23,709 | 11.7979 | 75.4511 | 12.0 | 11.6 | 75.65 | 75.25 | Off flood-path (heuristic) |
| Kalliyasshēri | 13 | 140.0 | 31,122 | 11.9755 | 75.3645 | 12.18 | 11.78 | 75.56 | 75.16 | Off flood-path (heuristic) |
| Thottada | 13 | 140.7 | 40,818 | 11.8385 | 75.4208 | 12.04 | 11.64 | 75.62 | 75.22 | Off flood-path (heuristic) |
| Pūlakkōd | 13 | 140.7 | 29,872 | 11.3097 | 75.9500 | 11.51 | 11.11 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Puzhathi | 13 | 140.7 | 35,212 | 11.9011 | 75.3892 | 12.1 | 11.7 | 75.59 | 75.19 | Off flood-path (heuristic) |
| Palayad | 13 | 140.8 | 18,141 | 11.5505 | 75.6289 | 11.75 | 11.35 | 75.83 | 75.43 | Off flood-path (heuristic) |
| Kizhariyūr | 13 | 140.9 | 15,116 | 11.4982 | 75.6807 | 11.7 | 11.3 | 75.88 | 75.48 | Off flood-path (heuristic) |
| Iringal | 13 | 141.1 | 25,894 | 11.5593 | 75.6166 | 11.76 | 11.36 | 75.82 | 75.42 | Off flood-path (heuristic) |
| Badagara | 13 | 141.1 | 76,493 | 11.5978 | 75.5814 | 11.8 | 11.4 | 75.78 | 75.38 | Off flood-path (heuristic) |
| Pariyāram | 13 | 141.2 | 20,405 | 12.0588 | 75.3248 | 12.26 | 11.86 | 75.52 | 75.12 | Off flood-path (heuristic) |
| Hosūr | 25 | 141.5 | 229,528 | 12.7365 | 77.8326 | 12.94 | 12.54 | 78.03 | 77.63 | Downstream (heuristic - verify) |
| Koratagere | 19 | 142.3 | 15,265 | 13.5220 | 77.2373 | 13.72 | 13.32 | 77.44 | 77.04 | Off flood-path (heuristic) |
| Kizhuparamba | 13 | 142.7 | 22,062 | 11.2526 | 76.0244 | 11.45 | 11.05 | 76.22 | 75.82 | Off flood-path (heuristic) |
| Chirakkal | 13 | 143.0 | 45,601 | 11.9126 | 75.3610 | 12.11 | 11.71 | 75.56 | 75.16 | Off flood-path (heuristic) |
| Doddaballapura | 19 | 143.0 | 93,105 | 13.2945 | 77.5378 | 13.49 | 13.09 | 77.74 | 77.34 | Off flood-path (heuristic) |
| Pāppinisshēri | 13 | 143.2 | 35,134 | 11.9566 | 75.3403 | 12.16 | 11.76 | 75.54 | 75.14 | Off flood-path (heuristic) |
| Gobichettipalayam | 25 | 143.2 | 59,523 | 11.4550 | 77.4422 | 11.65 | 11.25 | 77.64 | 77.24 | Downstream (heuristic - verify) |
| Nambiyūr | 25 | 143.6 | 16,379 | 11.3581 | 77.3212 | 11.56 | 11.16 | 77.52 | 77.12 | Downstream (heuristic - verify) |
| Annur | 25 | 143.9 | 20,079 | 11.2362 | 77.1051 | 11.44 | 11.04 | 77.31 | 76.91 | Downstream (heuristic - verify) |
| Pallikunnu | 13 | 144.5 | 27,820 | 11.8899 | 75.3565 | 12.09 | 11.69 | 75.56 | 75.16 | Off flood-path (heuristic) |
| Kuruvattūr | 13 | 144.6 | 34,241 | 11.3361 | 75.8351 | 11.54 | 11.14 | 76.04 | 75.64 | Off flood-path (heuristic) |
| Atholi | 13 | 144.7 | 28,213 | 11.3885 | 75.7597 | 11.59 | 11.19 | 75.96 | 75.56 | Off flood-path (heuristic) |
| Koyilandy | 13 | 145.0 | 71,873 | 11.4381 | 75.6931 | 11.64 | 11.24 | 75.89 | 75.49 | Off flood-path (heuristic) |
| Kunnamangalam | 13 | 145.1 | 47,396 | 11.3046 | 75.8777 | 11.5 | 11.1 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Azhikkōd | 13 | 145.3 | 25,195 | 11.9199 | 75.3355 | 12.12 | 11.72 | 75.54 | 75.14 | Off flood-path (heuristic) |
| Avalēpalli | 25 | 145.3 | 17,859 | 12.7714 | 77.8594 | 12.97 | 12.57 | 78.06 | 77.66 | Downstream (heuristic - verify) |
| Kannur | 13 | 145.4 | 62,836 | 11.8675 | 75.3576 | 12.07 | 11.67 | 75.56 | 75.16 | Off flood-path (heuristic) |
| Anthiyur | 25 | 145.4 | 21,086 | 11.5751 | 77.5904 | 11.78 | 11.38 | 77.79 | 77.39 | Downstream (heuristic - verify) |
| Chēmanchēri | 13 | 145.7 | 34,819 | 11.4048 | 75.7236 | 11.6 | 11.2 | 75.92 | 75.52 | Off flood-path (heuristic) |
| Kannapuram | 13 | 145.9 | 18,459 | 11.9843 | 75.3041 | 12.18 | 11.78 | 75.5 | 75.1 | Off flood-path (heuristic) |
| Icchannūr | 13 | 145.9 | 40,697 | 11.3615 | 75.7782 | 11.56 | 11.16 | 75.98 | 75.58 | Off flood-path (heuristic) |
| Birūr | 19 | 146.1 | 23,493 | 13.5972 | 75.9717 | 13.8 | 13.4 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Ezhome | 13 | 146.5 | 19,261 | 12.0300 | 75.2819 | 12.23 | 11.83 | 75.48 | 75.08 | Off flood-path (heuristic) |
| Mavoor | 13 | 146.6 | 29,781 | 11.2667 | 75.9167 | 11.47 | 11.07 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Periyanayakkanpalaiyam | 25 | 146.9 | 25,930 | 11.1525 | 76.9516 | 11.35 | 10.95 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Cheruthazham | 13 | 147.0 | 29,348 | 12.0810 | 75.2627 | 12.28 | 11.88 | 75.46 | 75.06 | Off flood-path (heuristic) |
| Tikkotti | 13 | 147.0 | 27,051 | 11.4833 | 75.6167 | 11.68 | 11.28 | 75.82 | 75.42 | Off flood-path (heuristic) |
| Cherukunnu | 13 | 147.2 | 16,111 | 11.9956 | 75.2872 | 12.2 | 11.8 | 75.49 | 75.09 | Off flood-path (heuristic) |
| Pennāgaram | 25 | 147.5 | 17,480 | 12.1343 | 77.8953 | 12.33 | 11.93 | 78.1 | 77.7 | Downstream (heuristic - verify) |
| Pūvātūparamba | 13 | 147.7 | 27,598 | 11.2710 | 75.8894 | 11.47 | 11.07 | 76.09 | 75.69 | Off flood-path (heuristic) |
| Talakkolattur | 13 | 147.9 | 29,388 | 11.3537 | 75.7580 | 11.55 | 11.15 | 75.96 | 75.56 | Off flood-path (heuristic) |
| Kakkodi | 13 | 148.2 | 42,866 | 11.3197 | 75.8015 | 11.52 | 11.12 | 76.0 | 75.6 | Off flood-path (heuristic) |
| Kuttikkāttūr | 13 | 149.0 | 25,929 | 11.2626 | 75.8796 | 11.46 | 11.06 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Perumanna | 13 | 149.4 | 35,460 | 11.2529 | 75.8906 | 11.45 | 11.05 | 76.09 | 75.69 | Off flood-path (heuristic) |
| Kunnimangalam | 22 | 149.4 | 18,965 | 12.0735 | 75.2412 | 12.27 | 11.87 | 75.44 | 75.04 | Off flood-path (heuristic) |
| Narasimhanaickenpalayam | 25 | 150.2 | 17,858 | 11.1173 | 76.9363 | 11.32 | 10.92 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Mādāyi | 22 | 151.0 | 35,888 | 12.0343 | 75.2378 | 12.23 | 11.83 | 75.44 | 75.04 | Off flood-path (heuristic) |
| Mettur | 25 | 151.1 | 56,743 | 11.7880 | 77.8008 | 11.99 | 11.59 | 78.0 | 77.6 | Downstream (heuristic - verify) |
| Sīra | 19 | 151.3 | 57,928 | 13.7416 | 76.9043 | 13.94 | 13.54 | 77.1 | 76.7 | Off flood-path (heuristic) |
| Hoskote | 19 | 151.6 | 56,980 | 13.0707 | 77.7981 | 13.27 | 12.87 | 78.0 | 77.6 | Downstream (heuristic - verify) |
| Rakkiyapālaiyam | 25 | 151.6 | 18,749 | 11.1061 | 76.9425 | 11.31 | 10.91 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Vazhayur | 13 | 152.3 | 36,909 | 11.2173 | 75.8999 | 11.42 | 11.02 | 76.1 | 75.7 | Off flood-path (heuristic) |
| Manjeri | 13 | 152.6 | 97,102 | 11.1202 | 76.1200 | 11.32 | 10.92 | 76.32 | 75.92 | Off flood-path (heuristic) |
| Vīrnūr | 25 | 152.9 | 16,665 | 11.8443 | 77.8473 | 12.04 | 11.64 | 78.05 | 77.65 | Downstream (heuristic - verify) |
| Payyanur | 13 | 153.0 | 72,111 | 12.0935 | 75.2025 | 12.29 | 11.89 | 75.4 | 75.0 | Off flood-path (heuristic) |
| Puttūr | 19 | 153.2 | 53,331 | 12.7598 | 75.2017 | 12.96 | 12.56 | 75.4 | 75.0 | Off flood-path (heuristic) |
| Pantheeramkavu | 13 | 153.6 | 24,537 | 11.2305 | 75.8518 | 11.43 | 11.03 | 76.05 | 75.65 | Off flood-path (heuristic) |
| Devanahalli | 19 | 154.2 | 28,051 | 13.2465 | 77.7118 | 13.45 | 13.05 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Trikarpūr South | 13 | 154.2 | 22,991 | 12.1165 | 75.1852 | 12.32 | 11.92 | 75.39 | 74.99 | Off flood-path (heuristic) |
| Tudiyalūr | 25 | 154.3 | 33,924 | 11.0816 | 76.9446 | 11.28 | 10.88 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Madhugiri | 19 | 154.5 | 29,159 | 13.6603 | 77.2124 | 13.86 | 13.46 | 77.41 | 77.01 | Off flood-path (heuristic) |
| Trikarpūr North | 13 | 154.6 | 18,210 | 12.1458 | 75.1748 | 12.35 | 11.95 | 75.37 | 74.97 | Off flood-path (heuristic) |
| Salangaippālaiyam | 25 | 155.1 | 15,609 | 11.4260 | 77.5707 | 11.63 | 11.23 | 77.77 | 77.37 | Downstream (heuristic - verify) |
| Vellakkinar | 25 | 155.5 | 15,998 | 11.0736 | 76.9566 | 11.27 | 10.87 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Pottaneri Nallakavundanpatti | 25 | 155.8 | 25,133 | 11.8039 | 77.8567 | 12.0 | 11.6 | 78.06 | 77.66 | Downstream (heuristic - verify) |
| Olavanna | 13 | 155.9 | 43,895 | 11.2184 | 75.8325 | 11.42 | 11.02 | 76.03 | 75.63 | Off flood-path (heuristic) |
| Kozhikode | 13 | 156.1 | 550,440 | 11.2480 | 75.7804 | 11.45 | 11.05 | 75.98 | 75.58 | Off flood-path (heuristic) |
| Hosadurga | 19 | 156.1 | 28,370 | 13.7963 | 76.2841 | 14.0 | 13.6 | 76.48 | 76.08 | Off flood-path (heuristic) |
| Avinashi | 25 | 156.2 | 28,868 | 11.1930 | 77.2686 | 11.39 | 10.99 | 77.47 | 77.07 | Downstream (heuristic - verify) |
| Cherukavu | 13 | 156.2 | 30,126 | 11.1731 | 75.9086 | 11.37 | 10.97 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Kondotty | 13 | 156.6 | 28,794 | 11.1423 | 75.9657 | 11.34 | 10.94 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Srvanampatti | 25 | 156.7 | 32,920 | 11.0764 | 77.0045 | 11.28 | 10.88 | 77.2 | 76.8 | Off flood-path (heuristic) |
| Nīlēshwar | 13 | 156.9 | 25,405 | 12.2595 | 75.1352 | 12.46 | 12.06 | 75.34 | 74.94 | Off flood-path (heuristic) |
| Kālappatti | 25 | 157.5 | 39,586 | 11.0794 | 77.0371 | 11.28 | 10.88 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Jāmbai | 25 | 157.6 | 16,522 | 11.4678 | 77.6434 | 11.67 | 11.27 | 77.84 | 77.44 | Downstream (heuristic - verify) |
| Chinnavādampatti | 25 | 157.6 | 20,122 | 11.0615 | 76.9838 | 11.26 | 10.86 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Vilankurichi | 25 | 157.7 | 24,235 | 11.0715 | 77.0173 | 11.27 | 10.87 | 77.22 | 76.82 | Off flood-path (heuristic) |
| Palangarai | 25 | 157.7 | 17,248 | 11.1978 | 77.3058 | 11.4 | 11.0 | 77.51 | 77.11 | Downstream (heuristic - verify) |
| Ramanattukara | 13 | 157.8 | 35,937 | 11.1780 | 75.8689 | 11.38 | 10.98 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Idaiyarpālaiyam | 25 | 158.3 | 83,908 | 11.0394 | 76.9237 | 11.24 | 10.84 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Cheruvannur | 13 | 158.8 | 61,614 | 11.1903 | 75.8283 | 11.39 | 10.99 | 76.03 | 75.63 | Off flood-path (heuristic) |
| Pallikal | 13 | 158.9 | 46,962 | 11.1372 | 75.9257 | 11.34 | 10.94 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Ferokh | 13 | 159.1 | 32,122 | 11.1799 | 75.8414 | 11.38 | 10.98 | 76.04 | 75.64 | Off flood-path (heuristic) |
| Mannārakkāt | 13 | 159.2 | 50,921 | 10.9922 | 76.4642 | 11.19 | 10.79 | 76.66 | 76.26 | Off flood-path (heuristic) |
| Vadavalli | 25 | 159.2 | 39,873 | 11.0247 | 76.8973 | 11.22 | 10.82 | 77.1 | 76.7 | Off flood-path (heuristic) |
| Kanhangad | 13 | 159.5 | 125,564 | 12.3081 | 75.1063 | 12.51 | 12.11 | 75.31 | 74.91 | Off flood-path (heuristic) |
| Karumattampatti | 25 | 160.2 | 35,062 | 11.1093 | 77.1820 | 11.31 | 10.91 | 77.38 | 76.98 | Downstream (heuristic - verify) |
| Chelambra | 13 | 160.3 | 34,149 | 11.1509 | 75.8719 | 11.35 | 10.95 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Ajānūr | 13 | 160.7 | 33,079 | 12.3361 | 75.0930 | 12.54 | 12.14 | 75.29 | 74.89 | Off flood-path (heuristic) |
| Karuvanthuruthy | 13 | 160.9 | 21,952 | 11.1721 | 75.8226 | 11.37 | 10.97 | 76.02 | 75.62 | Off flood-path (heuristic) |
| Tirumuruganpūndi | 25 | 161.0 | 31,528 | 11.1649 | 77.3084 | 11.36 | 10.96 | 77.51 | 77.11 | Downstream (heuristic - verify) |
| Vīrakeralam | 25 | 161.4 | 23,841 | 11.0077 | 76.9126 | 11.21 | 10.81 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Thenhippalam | 13 | 161.6 | 32,045 | 11.1323 | 75.8822 | 11.33 | 10.93 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Beypore | 13 | 161.8 | 70,751 | 11.1715 | 75.8061 | 11.37 | 10.97 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Peruvallur | 13 | 161.9 | 34,941 | 11.1048 | 75.9327 | 11.3 | 10.9 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Mālūr | 19 | 161.9 | 40,050 | 13.0032 | 77.9380 | 13.2 | 12.8 | 78.14 | 77.74 | Downstream (heuristic - verify) |
| Malappuram | 13 | 162.2 | 101,386 | 11.0420 | 76.0815 | 11.24 | 10.84 | 76.28 | 75.88 | Off flood-path (heuristic) |
| Chettipālaiyam | 25 | 162.3 | 37,620 | 11.1667 | 77.3350 | 11.37 | 10.97 | 77.54 | 77.14 | Downstream (heuristic - verify) |
| Bhavāni | 25 | 162.4 | 39,744 | 11.4455 | 77.6821 | 11.65 | 11.25 | 77.88 | 77.48 | Downstream (heuristic - verify) |
| Kannamangalam | 13 | 162.5 | 41,260 | 11.0754 | 75.9852 | 11.28 | 10.88 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Pudūr | 25 | 162.6 | 17,240 | 11.4360 | 77.6760 | 11.64 | 11.24 | 77.88 | 77.48 | Downstream (heuristic - verify) |
| Jalakandapuram | 25 | 162.9 | 16,184 | 11.6978 | 77.8730 | 11.9 | 11.5 | 78.07 | 77.67 | Downstream (heuristic - verify) |
| Mechcheri | 25 | 162.9 | 25,676 | 11.8341 | 77.9439 | 12.03 | 11.63 | 78.14 | 77.74 | Downstream (heuristic - verify) |
| Coimbatore | 25 | 163.1 | 2,136,916 | 11.0055 | 76.9661 | 11.21 | 10.81 | 77.17 | 76.77 | Off flood-path (heuristic) |
| Peringottupulam | 13 | 163.2 | 36,602 | 11.0268 | 76.0987 | 11.23 | 10.83 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Pālakkodu | 25 | 163.4 | 20,959 | 12.3070 | 78.0702 | 12.51 | 12.11 | 78.27 | 77.87 | Downstream (heuristic - verify) |
| Velampālaiyam | 25 | 163.8 | 87,427 | 11.1376 | 77.3106 | 11.34 | 10.94 | 77.51 | 77.11 | Downstream (heuristic - verify) |
| Vittal | 19 | 164.1 | 17,618 | 12.7632 | 75.0990 | 12.96 | 12.56 | 75.3 | 74.9 | Off flood-path (heuristic) |
| Sāmalāpuram | 25 | 164.7 | 20,691 | 11.0724 | 77.1980 | 11.27 | 10.87 | 77.4 | 77.0 | Downstream (heuristic - verify) |
| Perintalmanna | 13 | 164.8 | 49,723 | 10.9772 | 76.2254 | 11.18 | 10.78 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Kumarapalayam | 25 | 164.8 | 195,071 | 11.4450 | 77.7110 | 11.64 | 11.24 | 77.91 | 77.51 | Downstream (heuristic - verify) |
| Urakam | 13 | 164.8 | 29,157 | 11.0512 | 75.9883 | 11.25 | 10.85 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Irugūr | 25 | 164.9 | 25,691 | 11.0178 | 77.0628 | 11.22 | 10.82 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Nerupperichchal | 25 | 165.1 | 53,579 | 11.1610 | 77.3740 | 11.36 | 10.96 | 77.57 | 77.17 | Downstream (heuristic - verify) |
| Boyampālaiyam | 25 | 165.1 | 40,503 | 11.1487 | 77.3537 | 11.35 | 10.95 | 77.55 | 77.15 | Downstream (heuristic - verify) |
| Abdu Rahiman Nagar | 13 | 165.1 | 41,993 | 11.0698 | 75.9388 | 11.27 | 10.87 | 76.14 | 75.74 | Off flood-path (heuristic) |
| Tarikere | 19 | 165.1 | 37,848 | 13.7095 | 75.8138 | 13.91 | 13.51 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Chengala | 13 | 165.2 | 15,588 | 12.4984 | 75.0503 | 12.7 | 12.3 | 75.25 | 74.85 | Off flood-path (heuristic) |
| Vengara | 13 | 165.3 | 48,600 | 11.0508 | 75.9781 | 11.25 | 10.85 | 76.18 | 75.78 | Off flood-path (heuristic) |
| Vijayapura | 19 | 165.4 | 34,866 | 13.2972 | 77.8018 | 13.5 | 13.1 | 78.0 | 77.6 | Off flood-path (heuristic) |
| Mangalam | 25 | 165.4 | 17,699 | 11.1005 | 77.2712 | 11.3 | 10.9 | 77.47 | 77.07 | Downstream (heuristic - verify) |
| Kodur | 13 | 165.4 | 45,459 | 11.0153 | 76.0701 | 11.22 | 10.82 | 76.27 | 75.87 | Off flood-path (heuristic) |
| Othukkungal | 13 | 165.6 | 39,139 | 11.0283 | 76.0290 | 11.23 | 10.83 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Singānallūr | 25 | 165.8 | 31,239 | 10.9990 | 77.0324 | 11.2 | 10.8 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Idappadi | 25 | 166.3 | 54,823 | 11.5862 | 77.8389 | 11.79 | 11.39 | 78.04 | 77.64 | Downstream (heuristic - verify) |
| Karumāndi Chellipālaiyam | 25 | 166.4 | 23,868 | 11.3019 | 77.5860 | 11.5 | 11.1 | 77.79 | 77.39 | Downstream (heuristic - verify) |
| Tattānkuttai | 25 | 166.6 | 24,708 | 11.4352 | 77.7237 | 11.64 | 11.24 | 77.92 | 77.52 | Downstream (heuristic - verify) |
| Sulur | 25 | 166.6 | 27,909 | 11.0243 | 77.1256 | 11.22 | 10.82 | 77.33 | 76.93 | Downstream (heuristic - verify) |
| Rāmachettipālaiyam | 25 | 167.0 | 17,809 | 10.9582 | 76.9201 | 11.16 | 10.76 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Kuniyamuttūr | 25 | 167.2 | 95,924 | 10.9638 | 76.9525 | 11.16 | 10.76 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Gauribidanur | 19 | 167.5 | 37,947 | 13.6107 | 77.5174 | 13.81 | 13.41 | 77.72 | 77.32 | Off flood-path (heuristic) |
| Moonniyur | 13 | 167.8 | 55,535 | 11.0597 | 75.9031 | 11.26 | 10.86 | 76.1 | 75.7 | Off flood-path (heuristic) |
| Vellalūr | 25 | 167.9 | 24,872 | 10.9775 | 77.0260 | 11.18 | 10.78 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Sūryampālaiyam | 25 | 167.9 | 28,585 | 11.4045 | 77.7123 | 11.6 | 11.2 | 77.91 | 77.51 | Downstream (heuristic - verify) |
| Ariyallur | 13 | 168.1 | 22,558 | 11.0833 | 75.8490 | 11.28 | 10.88 | 76.05 | 75.65 | Off flood-path (heuristic) |
| Kurichchi | 25 | 168.1 | 123,667 | 10.9609 | 76.9738 | 11.16 | 10.76 | 77.17 | 76.77 | Off flood-path (heuristic) |
| Andipalayam | 25 | 168.3 | 25,539 | 11.0925 | 77.3123 | 11.29 | 10.89 | 77.51 | 77.11 | Downstream (heuristic - verify) |
| Tiruppur | 25 | 168.3 | 963,173 | 11.1154 | 77.3546 | 11.32 | 10.92 | 77.55 | 77.15 | Downstream (heuristic - verify) |
| Tirūrangādi | 13 | 168.5 | 56,632 | 11.0432 | 75.9234 | 11.24 | 10.84 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Kannampālaiyam | 25 | 168.6 | 15,868 | 10.9954 | 77.0990 | 11.2 | 10.8 | 77.3 | 76.9 | Downstream (heuristic - verify) |
| Parappur | 13 | 168.6 | 36,270 | 11.0121 | 75.9947 | 11.21 | 10.81 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Perundurai | 25 | 168.7 | 24,930 | 11.2756 | 77.5879 | 11.48 | 11.08 | 77.79 | 77.39 | Downstream (heuristic - verify) |
| Chik Ballāpur | 19 | 168.8 | 63,652 | 13.4351 | 77.7279 | 13.64 | 13.24 | 77.93 | 77.53 | Off flood-path (heuristic) |
| Mannarai | 25 | 169.2 | 17,261 | 11.1172 | 77.3726 | 11.32 | 10.92 | 77.57 | 77.17 | Downstream (heuristic - verify) |
| Kōttakkal | 13 | 169.3 | 44,382 | 11.0009 | 76.0062 | 11.2 | 10.8 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Periya Semūr | 25 | 169.4 | 55,282 | 11.3609 | 77.6895 | 11.56 | 11.16 | 77.89 | 77.49 | Downstream (heuristic - verify) |
| Hiriyūr | 19 | 169.6 | 56,416 | 13.9445 | 76.6172 | 14.14 | 13.74 | 76.82 | 76.42 | Off flood-path (heuristic) |
| Neduva | 13 | 169.8 | 35,996 | 11.0567 | 75.8668 | 11.26 | 10.86 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Murugampālaiyam | 25 | 170.0 | 26,349 | 11.0806 | 77.3238 | 11.28 | 10.88 | 77.52 | 77.12 | Downstream (heuristic - verify) |
| Brāhmana Periya Agrahāram | 25 | 170.1 | 24,798 | 11.3690 | 77.7063 | 11.57 | 11.17 | 77.91 | 77.51 | Downstream (heuristic - verify) |
| Kāraippudūr | 25 | 171.5 | 28,602 | 11.0567 | 77.3061 | 11.26 | 10.86 | 77.51 | 77.11 | Downstream (heuristic - verify) |
| Tindal | 25 | 171.7 | 15,440 | 11.3169 | 77.6742 | 11.52 | 11.12 | 77.87 | 77.47 | Downstream (heuristic - verify) |
| Kāsaragod | 13 | 171.8 | 54,172 | 12.4984 | 74.9896 | 12.7 | 12.3 | 75.19 | 74.79 | Off flood-path (heuristic) |
| Vīrappanchathiram | 25 | 171.8 | 84,453 | 11.3531 | 77.7125 | 11.55 | 11.15 | 77.91 | 77.51 | Downstream (heuristic - verify) |
| Nallūr | 25 | 171.8 | 70,115 | 11.1003 | 77.3914 | 11.3 | 10.9 | 77.59 | 77.19 | Downstream (heuristic - verify) |
| Tāramangalam | 25 | 172.3 | 30,222 | 11.6940 | 77.9703 | 11.89 | 11.49 | 78.17 | 77.77 | Downstream (heuristic - verify) |
| Elandakuttai | 25 | 172.9 | 16,160 | 11.4060 | 77.7750 | 11.61 | 11.21 | 77.98 | 77.58 | Downstream (heuristic - verify) |
| Tennala | 13 | 173.0 | 56,546 | 10.9934 | 75.9350 | 11.19 | 10.79 | 76.14 | 75.74 | Off flood-path (heuristic) |
| Kūdlu | 13 | 173.2 | 26,235 | 12.5298 | 74.9788 | 12.73 | 12.33 | 75.18 | 74.78 | Off flood-path (heuristic) |
| Vīrapāndi | 25 | 173.2 | 50,301 | 11.0625 | 77.3508 | 11.26 | 10.86 | 77.55 | 77.15 | Downstream (heuristic - verify) |
| Muttanampālaiyam | 25 | 173.7 | 26,014 | 11.0845 | 77.3969 | 11.28 | 10.88 | 77.6 | 77.2 | Downstream (heuristic - verify) |
| Sūrampatti | 25 | 173.7 | 41,782 | 11.3273 | 77.7112 | 11.53 | 11.13 | 77.91 | 77.51 | Downstream (heuristic - verify) |
| Madukkarai | 25 | 173.7 | 30,357 | 10.9057 | 76.9634 | 11.11 | 10.71 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Erode | 25 | 173.8 | 521,891 | 11.3428 | 77.7274 | 11.54 | 11.14 | 77.93 | 77.53 | Downstream (heuristic - verify) |
| Pariyāpuram | 13 | 173.8 | 22,766 | 11.0167 | 75.8667 | 11.22 | 10.82 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Cherpulassery | 13 | 174.0 | 30,000 | 10.8765 | 76.3093 | 11.08 | 10.68 | 76.51 | 76.11 | Off flood-path (heuristic) |
| Kāsipālaiyam | 25 | 174.2 | 73,425 | 11.3198 | 77.7097 | 11.52 | 11.12 | 77.91 | 77.51 | Downstream (heuristic - verify) |
| Nannambra | 13 | 174.4 | 40,543 | 10.9921 | 75.9080 | 11.19 | 10.79 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Bantvāl | 19 | 174.6 | 40,155 | 12.8905 | 75.0349 | 13.09 | 12.69 | 75.23 | 74.83 | Off flood-path (heuristic) |
| Pallipalayam | 25 | 174.9 | 40,140 | 11.3652 | 77.7623 | 11.57 | 11.17 | 77.96 | 77.56 | Downstream (heuristic - verify) |
| Chettipālaiyam | 25 | 175.2 | 24,080 | 10.9125 | 77.0370 | 11.11 | 10.71 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Ālampālaiyam | 25 | 175.5 | 20,286 | 11.3635 | 77.7677 | 11.56 | 11.16 | 77.97 | 77.57 | Downstream (heuristic - verify) |
| Lakkanahalli | 25 | 175.5 | 39,697 | 12.1120 | 78.1538 | 12.31 | 11.91 | 78.35 | 77.95 | Downstream (heuristic - verify) |
| Koipādi | 13 | 175.5 | 18,121 | 12.5930 | 74.9626 | 12.79 | 12.39 | 75.16 | 74.76 | Off flood-path (heuristic) |
| Dharmapuri | 25 | 175.6 | 68,619 | 12.1277 | 78.1579 | 12.33 | 11.93 | 78.36 | 77.96 | Downstream (heuristic - verify) |
| Sankagiri | 25 | 175.8 | 29,467 | 11.4760 | 77.8664 | 11.68 | 11.28 | 78.07 | 77.67 | Downstream (heuristic - verify) |
| Ponmundam | 13 | 176.6 | 25,855 | 10.9536 | 75.9468 | 11.15 | 10.75 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Cheriyamundam | 13 | 176.8 | 31,212 | 10.9476 | 75.9564 | 11.15 | 10.75 | 76.16 | 75.76 | Off flood-path (heuristic) |
| Sidlaghatta | 19 | 176.9 | 51,159 | 13.3890 | 77.8644 | 13.59 | 13.19 | 78.06 | 77.66 | Off flood-path (heuristic) |
| Palladam | 25 | 176.9 | 42,225 | 10.9917 | 77.2863 | 11.19 | 10.79 | 77.49 | 77.09 | Downstream (heuristic - verify) |
| Omalur | 25 | 177.3 | 16,279 | 11.7410 | 78.0456 | 11.94 | 11.54 | 78.25 | 77.85 | Downstream (heuristic - verify) |
| Idangansālai | 25 | 177.7 | 33,245 | 11.6272 | 77.9890 | 11.83 | 11.43 | 78.19 | 77.79 | Downstream (heuristic - verify) |
| Kādiganpalli | 25 | 178.3 | 22,714 | 12.5232 | 78.2086 | 12.72 | 12.32 | 78.41 | 78.01 | Downstream (heuristic - verify) |
| Tānālūr | 13 | 178.4 | 47,976 | 10.9515 | 75.9096 | 11.15 | 10.75 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Puthuppariyāram | 13 | 178.8 | 30,895 | 10.8131 | 76.6287 | 11.01 | 10.61 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Krishnagiri | 25 | 178.8 | 71,323 | 12.5192 | 78.2138 | 12.72 | 12.32 | 78.41 | 78.01 | Downstream (heuristic - verify) |
| Kāveripatnam | 25 | 179.0 | 15,006 | 12.4219 | 78.2188 | 12.62 | 12.22 | 78.42 | 78.02 | Downstream (heuristic - verify) |
| Chennimalai | 25 | 179.4 | 16,268 | 11.1638 | 77.6039 | 11.36 | 10.96 | 77.8 | 77.4 | Downstream (heuristic - verify) |
| Irimbiliyam | 13 | 180.8 | 30,635 | 10.8624 | 76.0922 | 11.06 | 10.66 | 76.29 | 75.89 | Off flood-path (heuristic) |
| Kāttipparutti | 13 | 180.9 | 40,318 | 10.8738 | 76.0535 | 11.07 | 10.67 | 76.25 | 75.85 | Off flood-path (heuristic) |
| Ambikāpuram | 13 | 181.0 | 28,592 | 10.7939 | 76.6530 | 10.99 | 10.59 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Muthutala | 13 | 181.8 | 24,861 | 10.8354 | 76.1596 | 11.04 | 10.64 | 76.36 | 75.96 | Off flood-path (heuristic) |
| Tirur | 13 | 181.8 | 56,058 | 10.9137 | 75.9212 | 11.11 | 10.71 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Naduvattam | 13 | 182.1 | 21,273 | 10.8799 | 76.0020 | 11.08 | 10.68 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Pudussery West | 13 | 182.3 | 20,140 | 10.7880 | 76.7279 | 10.99 | 10.59 | 76.93 | 76.53 | Off flood-path (heuristic) |
| Thirunavaya | 13 | 183.3 | 24,790 | 10.8746 | 75.9855 | 11.07 | 10.67 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Palakkad | 13 | 183.3 | 132,728 | 10.7732 | 76.6537 | 10.97 | 10.57 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Marutharōd | 13 | 183.4 | 24,963 | 10.7751 | 76.6995 | 10.98 | 10.58 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Vāniyamkulam | 13 | 183.8 | 16,085 | 10.7830 | 76.3336 | 10.98 | 10.58 | 76.53 | 76.13 | Off flood-path (heuristic) |
| Ongallur-I | 13 | 183.9 | 16,998 | 10.8027 | 76.2185 | 11.0 | 10.6 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Pirāyiri | 13 | 184.1 | 41,359 | 10.7652 | 76.6318 | 10.97 | 10.57 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Ottapalam | 13 | 184.3 | 53,792 | 10.7735 | 76.3776 | 10.97 | 10.57 | 76.58 | 76.18 | Off flood-path (heuristic) |
| Talakkād | 13 | 184.4 | 35,820 | 10.8846 | 75.9309 | 11.08 | 10.68 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Bhadrāvati | 19 | 184.4 | 163,903 | 13.8485 | 75.7050 | 14.05 | 13.65 | 75.91 | 75.51 | Off flood-path (heuristic) |
| Tiruchengode | 25 | 184.8 | 95,335 | 11.3802 | 77.8944 | 11.58 | 11.18 | 78.09 | 77.69 | Downstream (heuristic - verify) |
| Pattāmbi | 13 | 185.0 | 28,632 | 10.8001 | 76.1841 | 11.0 | 10.6 | 76.38 | 75.98 | Off flood-path (heuristic) |
| Kuttippuram | 13 | 185.0 | 25,750 | 10.8425 | 76.0308 | 11.04 | 10.64 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Holalkere | 19 | 185.2 | 15,783 | 14.0429 | 76.1850 | 14.24 | 13.84 | 76.38 | 75.98 | Off flood-path (heuristic) |
| Ongallur-II | 13 | 185.3 | 26,273 | 10.7897 | 76.2190 | 10.99 | 10.59 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Mūdbidri | 19 | 185.3 | 30,632 | 13.0665 | 74.9952 | 13.27 | 12.87 | 75.2 | 74.8 | Off flood-path (heuristic) |
| Bangarapet | 19 | 185.6 | 44,849 | 12.9912 | 78.1780 | 13.19 | 12.79 | 78.38 | 77.98 | Downstream (heuristic - verify) |
| Hindupur | 02 | 185.7 | 151,677 | 13.8281 | 77.4914 | 14.03 | 13.63 | 77.69 | 77.29 | Off flood-path (heuristic) |
| Trittāla | 13 | 186.1 | 27,796 | 10.8030 | 76.1288 | 11.0 | 10.6 | 76.33 | 75.93 | Off flood-path (heuristic) |
| Pudusseri | 13 | 186.3 | 16,629 | 10.7582 | 76.7859 | 10.96 | 10.56 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Kolār | 19 | 187.0 | 138,462 | 13.1377 | 78.1300 | 13.34 | 12.94 | 78.33 | 77.93 | Downstream (heuristic - verify) |
| Shōranūr | 13 | 187.2 | 43,533 | 10.7618 | 76.2708 | 10.96 | 10.56 | 76.47 | 76.07 | Off flood-path (heuristic) |
| Triprangod | 13 | 188.0 | 41,167 | 10.8422 | 75.9486 | 11.04 | 10.64 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Kāladi | 13 | 188.3 | 25,872 | 10.8194 | 76.0064 | 11.02 | 10.62 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Kōtekāra | 19 | 188.8 | 16,505 | 12.7929 | 74.8722 | 12.99 | 12.59 | 75.07 | 74.67 | Off flood-path (heuristic) |
| Mallasamudram | 25 | 189.4 | 18,820 | 11.4933 | 78.0312 | 11.69 | 11.29 | 78.23 | 77.83 | Downstream (heuristic - verify) |
| Sōmēshvara | 19 | 189.9 | 24,066 | 12.8035 | 74.8647 | 13.0 | 12.6 | 75.06 | 74.66 | Off flood-path (heuristic) |
| Kondalampatti | 25 | 190.2 | 20,318 | 11.6345 | 78.1237 | 11.83 | 11.43 | 78.32 | 77.92 | Downstream (heuristic - verify) |
| Ullal | 19 | 190.4 | 59,116 | 12.8057 | 74.8606 | 13.01 | 12.61 | 75.06 | 74.66 | Off flood-path (heuristic) |
| Kangayam | 25 | 190.7 | 32,147 | 11.0060 | 77.5609 | 11.21 | 10.81 | 77.76 | 77.36 | Downstream (heuristic - verify) |
| Channagiri | 19 | 191.5 | 21,313 | 14.0240 | 75.9258 | 14.22 | 13.82 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Edappāl | 13 | 192.0 | 32,550 | 10.7834 | 76.0079 | 10.98 | 10.58 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Chittūr | 13 | 192.3 | 32,298 | 10.6997 | 76.7471 | 10.9 | 10.5 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Salem | 25 | 192.3 | 917,414 | 11.6538 | 78.1554 | 11.85 | 11.45 | 78.36 | 77.96 | Downstream (heuristic - verify) |
| Kārkala | 19 | 192.5 | 25,800 | 13.2143 | 74.9923 | 13.41 | 13.01 | 75.19 | 74.79 | Off flood-path (heuristic) |
| Kannānkurichchi | 25 | 192.6 | 19,765 | 11.6969 | 78.1794 | 11.9 | 11.5 | 78.38 | 77.98 | Downstream (heuristic - verify) |
| Koduvayur | 13 | 193.0 | 20,703 | 10.6867 | 76.6588 | 10.89 | 10.49 | 76.86 | 76.46 | Off flood-path (heuristic) |
| Pudunagaram | 13 | 193.9 | 17,892 | 10.6802 | 76.6836 | 10.88 | 10.48 | 76.88 | 76.48 | Off flood-path (heuristic) |
| Mangaluru | 19 | 194.0 | 499,487 | 12.9172 | 74.8560 | 13.12 | 12.72 | 75.06 | 74.66 | Off flood-path (heuristic) |
| Chintamani | 19 | 194.1 | 76,068 | 13.4005 | 78.0517 | 13.6 | 13.2 | 78.25 | 77.85 | Off flood-path (heuristic) |
| Robertsonpet | 19 | 194.4 | 162,230 | 12.9563 | 78.2754 | 13.16 | 12.76 | 78.48 | 78.08 | Downstream (heuristic - verify) |
| Bargūr | 25 | 194.5 | 16,366 | 12.5429 | 78.3573 | 12.74 | 12.34 | 78.56 | 78.16 | Downstream (heuristic - verify) |
| Ālankōd | 13 | 195.1 | 33,918 | 10.7460 | 76.0348 | 10.95 | 10.55 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Kuppam | 02 | 195.7 | 21,963 | 12.7493 | 78.3419 | 12.95 | 12.55 | 78.54 | 78.14 | Downstream (heuristic - verify) |
| Sivagiri | 25 | 196.1 | 16,779 | 11.1203 | 77.7881 | 11.32 | 10.92 | 77.99 | 77.59 | Downstream (heuristic - verify) |
| Ponnāni | 13 | 196.8 | 105,512 | 10.7669 | 75.9252 | 10.97 | 10.57 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Alattūr | 13 | 196.9 | 26,720 | 10.6500 | 76.5333 | 10.85 | 10.45 | 76.73 | 76.33 | Off flood-path (heuristic) |
| Māranchēri | 13 | 197.8 | 35,011 | 10.7405 | 75.9710 | 10.94 | 10.54 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Vadakāncheri | 13 | 198.8 | 15,674 | 10.6604 | 76.2466 | 10.86 | 10.46 | 76.45 | 76.05 | Off flood-path (heuristic) |

## Mettur Dam (Tamil Nadu)
Dam coordinates: 11.79, 77.8

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Mettur | 25 | 0.2 | 56,743 | 11.7880 | 77.8008 | 11.99 | 11.59 | 78.0 | 77.6 | Downstream (heuristic - verify) |
| Pottaneri Nallakavundanpatti | 25 | 6.4 | 25,133 | 11.8039 | 77.8567 | 12.0 | 11.6 | 78.06 | 77.66 | Downstream (heuristic - verify) |
| Vīrnūr | 25 | 7.9 | 16,665 | 11.8443 | 77.8473 | 12.04 | 11.64 | 78.05 | 77.65 | Off flood-path (heuristic) |
| Jalakandapuram | 25 | 13.0 | 16,184 | 11.6978 | 77.8730 | 11.9 | 11.5 | 78.07 | 77.67 | Downstream (heuristic - verify) |
| Mechcheri | 25 | 16.4 | 25,676 | 11.8341 | 77.9439 | 12.03 | 11.63 | 78.14 | 77.74 | Downstream (heuristic - verify) |
| Tāramangalam | 25 | 21.4 | 30,222 | 11.6940 | 77.9703 | 11.89 | 11.49 | 78.17 | 77.77 | Downstream (heuristic - verify) |
| Idappadi | 25 | 23.0 | 54,823 | 11.5862 | 77.8389 | 11.79 | 11.39 | 78.04 | 77.64 | Downstream (heuristic - verify) |
| Omalur | 25 | 27.3 | 16,279 | 11.7410 | 78.0456 | 11.94 | 11.54 | 78.25 | 77.85 | Downstream (heuristic - verify) |
| Idangansālai | 25 | 27.4 | 33,245 | 11.6272 | 77.9890 | 11.83 | 11.43 | 78.19 | 77.79 | Downstream (heuristic - verify) |
| Anthiyur | 25 | 33.0 | 21,086 | 11.5751 | 77.5904 | 11.78 | 11.38 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Sankagiri | 25 | 35.7 | 29,467 | 11.4760 | 77.8664 | 11.68 | 11.28 | 78.07 | 77.67 | Downstream (heuristic - verify) |
| Kondalampatti | 25 | 39.3 | 20,318 | 11.6345 | 78.1237 | 11.83 | 11.43 | 78.32 | 77.92 | Downstream (heuristic - verify) |
| Kumarapalayam | 25 | 39.6 | 195,071 | 11.4450 | 77.7110 | 11.64 | 11.24 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Pennāgaram | 25 | 39.7 | 17,480 | 12.1343 | 77.8953 | 12.33 | 11.93 | 78.1 | 77.7 | Off flood-path (heuristic) |
| Jāmbai | 25 | 39.7 | 16,522 | 11.4678 | 77.6434 | 11.67 | 11.27 | 77.84 | 77.44 | Off flood-path (heuristic) |
| Tattānkuttai | 25 | 40.3 | 24,708 | 11.4352 | 77.7237 | 11.64 | 11.24 | 77.92 | 77.52 | Off flood-path (heuristic) |
| Bhavāni | 25 | 40.4 | 39,744 | 11.4455 | 77.6821 | 11.65 | 11.25 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Mallasamudram | 25 | 41.5 | 18,820 | 11.4933 | 78.0312 | 11.69 | 11.29 | 78.23 | 77.83 | Downstream (heuristic - verify) |
| Salem | 25 | 41.6 | 917,414 | 11.6538 | 78.1554 | 11.85 | 11.45 | 78.36 | 77.96 | Downstream (heuristic - verify) |
| Pudūr | 25 | 41.6 | 17,240 | 11.4360 | 77.6760 | 11.64 | 11.24 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Kannānkurichchi | 25 | 42.6 | 19,765 | 11.6969 | 78.1794 | 11.9 | 11.5 | 78.38 | 77.98 | Downstream (heuristic - verify) |
| Elandakuttai | 25 | 42.8 | 16,160 | 11.4060 | 77.7750 | 11.61 | 11.21 | 77.98 | 77.58 | Off flood-path (heuristic) |
| Sūryampālaiyam | 25 | 43.9 | 28,585 | 11.4045 | 77.7123 | 11.6 | 11.2 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Tiruchengode | 25 | 46.7 | 95,335 | 11.3802 | 77.8944 | 11.58 | 11.18 | 78.09 | 77.69 | Downstream (heuristic - verify) |
| Pallipalayam | 25 | 47.4 | 40,140 | 11.3652 | 77.7623 | 11.57 | 11.17 | 77.96 | 77.56 | Off flood-path (heuristic) |
| Ālampālaiyam | 25 | 47.6 | 20,286 | 11.3635 | 77.7677 | 11.56 | 11.16 | 77.97 | 77.57 | Off flood-path (heuristic) |
| Salangaippālaiyam | 25 | 47.6 | 15,609 | 11.4260 | 77.5707 | 11.63 | 11.23 | 77.77 | 77.37 | Off flood-path (heuristic) |
| Brāhmana Periya Agrahāram | 25 | 47.9 | 24,798 | 11.3690 | 77.7063 | 11.57 | 11.17 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Periya Semūr | 25 | 49.2 | 55,282 | 11.3609 | 77.6895 | 11.56 | 11.16 | 77.89 | 77.49 | Off flood-path (heuristic) |
| Vīrappanchathiram | 25 | 49.5 | 84,453 | 11.3531 | 77.7125 | 11.55 | 11.15 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Erode | 25 | 50.4 | 521,891 | 11.3428 | 77.7274 | 11.54 | 11.14 | 77.93 | 77.53 | Off flood-path (heuristic) |
| Sūrampatti | 25 | 52.4 | 41,782 | 11.3273 | 77.7112 | 11.53 | 11.13 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Lakkanahalli | 25 | 52.6 | 39,697 | 12.1120 | 78.1538 | 12.31 | 11.91 | 78.35 | 77.95 | Off flood-path (heuristic) |
| Kāsipālaiyam | 25 | 53.2 | 73,425 | 11.3198 | 77.7097 | 11.52 | 11.12 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Gobichettipalayam | 25 | 53.9 | 59,523 | 11.4550 | 77.4422 | 11.65 | 11.25 | 77.64 | 77.24 | Off flood-path (heuristic) |
| Dharmapuri | 25 | 54.1 | 68,619 | 12.1277 | 78.1579 | 12.33 | 11.93 | 78.36 | 77.96 | Off flood-path (heuristic) |
| Tindal | 25 | 54.4 | 15,440 | 11.3169 | 77.6742 | 11.52 | 11.12 | 77.87 | 77.47 | Off flood-path (heuristic) |
| Rasipuram | 25 | 55.8 | 50,244 | 11.4601 | 78.1864 | 11.66 | 11.26 | 78.39 | 77.99 | Downstream (heuristic - verify) |
| Karumāndi Chellipālaiyam | 25 | 59.1 | 23,868 | 11.3019 | 77.5860 | 11.5 | 11.1 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Perundurai | 25 | 61.7 | 24,930 | 11.2756 | 77.5879 | 11.48 | 11.08 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Nāmagiripettai | 25 | 63.1 | 22,098 | 11.4551 | 78.2682 | 11.66 | 11.26 | 78.47 | 78.07 | Downstream (heuristic - verify) |
| Pālakkodu | 25 | 64.6 | 20,959 | 12.3070 | 78.0702 | 12.51 | 12.11 | 78.27 | 77.87 | Off flood-path (heuristic) |
| Vazhapadi | 25 | 67.1 | 17,559 | 11.6554 | 78.4012 | 11.86 | 11.46 | 78.6 | 78.2 | Downstream (heuristic - verify) |
| Kumārapālaiyam | 25 | 67.4 | 15,706 | 11.5021 | 77.2555 | 11.7 | 11.3 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Pallippatti | 25 | 67.6 | 26,492 | 11.9399 | 78.4016 | 12.14 | 11.74 | 78.6 | 78.2 | Downstream (heuristic - verify) |
| Paramathi Velur | 25 | 68.7 | 25,012 | 11.1916 | 77.9563 | 11.39 | 10.99 | 78.16 | 77.76 | Downstream (heuristic - verify) |
| Sathyamangalam | 25 | 68.9 | 37,816 | 11.5053 | 77.2383 | 11.71 | 11.31 | 77.44 | 77.04 | Off flood-path (heuristic) |
| Nambiyūr | 25 | 70.9 | 16,379 | 11.3581 | 77.3212 | 11.56 | 11.16 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Chennimalai | 25 | 72.8 | 16,268 | 11.1638 | 77.6039 | 11.36 | 10.96 | 77.8 | 77.4 | Off flood-path (heuristic) |
| Sendamangalam | 25 | 73.8 | 19,750 | 11.2811 | 78.2342 | 11.48 | 11.08 | 78.43 | 78.03 | Downstream (heuristic - verify) |
| Sivagiri | 25 | 74.5 | 16,779 | 11.1203 | 77.7881 | 11.32 | 10.92 | 77.99 | 77.59 | Off flood-path (heuristic) |
| Nāmakkal | 25 | 74.7 | 55,997 | 11.2213 | 78.1652 | 11.42 | 11.02 | 78.37 | 77.97 | Downstream (heuristic - verify) |
| Periyapatti | 25 | 75.5 | 15,690 | 11.2052 | 78.1512 | 11.41 | 11.01 | 78.35 | 77.95 | Downstream (heuristic - verify) |
| Pottanūr | 25 | 78.4 | 18,455 | 11.1098 | 77.9888 | 11.31 | 10.91 | 78.19 | 77.79 | Downstream (heuristic - verify) |
| Peddanāyakkanpālaiyam | 25 | 78.7 | 17,678 | 11.6510 | 78.5087 | 11.85 | 11.45 | 78.71 | 78.31 | Downstream (heuristic - verify) |
| Velur | 25 | 78.9 | 25,012 | 11.1082 | 78.0011 | 11.31 | 10.91 | 78.2 | 77.8 | Downstream (heuristic - verify) |
| Harūr | 25 | 79.6 | 25,469 | 12.0527 | 78.4802 | 12.25 | 11.85 | 78.68 | 78.28 | Off flood-path (heuristic) |
| Denkanikota | 25 | 82.3 | 24,252 | 12.5301 | 77.7889 | 12.73 | 12.33 | 77.99 | 77.59 | Off flood-path (heuristic) |
| Pugalūr | 25 | 83.2 | 23,408 | 11.0740 | 78.0209 | 11.27 | 10.87 | 78.22 | 77.82 | Downstream (heuristic - verify) |
| Kāveripatnam | 25 | 83.7 | 15,006 | 12.4219 | 78.2188 | 12.62 | 12.22 | 78.42 | 78.02 | Off flood-path (heuristic) |
| Nerupperichchal | 25 | 83.9 | 53,579 | 11.1610 | 77.3740 | 11.36 | 10.96 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Tammampatti | 25 | 84.4 | 21,503 | 11.4413 | 78.4887 | 11.64 | 11.24 | 78.69 | 78.29 | Downstream (heuristic - verify) |
| Punjai Puliyampatti | 25 | 84.5 | 18,967 | 11.3516 | 77.1667 | 11.55 | 11.15 | 77.37 | 76.97 | Off flood-path (heuristic) |
| Palangarai | 25 | 85.1 | 17,248 | 11.1978 | 77.3058 | 11.4 | 11.0 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Kollegāl | 19 | 85.3 | 57,149 | 12.1545 | 77.1105 | 12.35 | 11.95 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Chettipālaiyam | 25 | 85.9 | 37,620 | 11.1667 | 77.3350 | 11.37 | 10.97 | 77.54 | 77.14 | Off flood-path (heuristic) |
| Boyampālaiyam | 25 | 86.3 | 40,503 | 11.1487 | 77.3537 | 11.35 | 10.95 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Narasingapuram | 25 | 87.2 | 23,084 | 11.6038 | 78.5778 | 11.8 | 11.4 | 78.78 | 78.38 | Downstream (heuristic - verify) |
| Tirumuruganpūndi | 25 | 87.8 | 31,528 | 11.1649 | 77.3084 | 11.36 | 10.96 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Avinashi | 25 | 88.1 | 28,868 | 11.1930 | 77.2686 | 11.39 | 10.99 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Mannarai | 25 | 88.1 | 17,261 | 11.1172 | 77.3726 | 11.32 | 10.92 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Nallūr | 25 | 88.7 | 70,115 | 11.1003 | 77.3914 | 11.3 | 10.9 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Tiruppur | 25 | 89.3 | 963,173 | 11.1154 | 77.3546 | 11.32 | 10.92 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Muttanampālaiyam | 25 | 89.9 | 26,014 | 11.0845 | 77.3969 | 11.28 | 10.88 | 77.6 | 77.2 | Off flood-path (heuristic) |
| Attur | 25 | 89.9 | 61,793 | 11.5941 | 78.6014 | 11.79 | 11.39 | 78.8 | 78.4 | Downstream (heuristic - verify) |
| Velampālaiyam | 25 | 90.0 | 87,427 | 11.1376 | 77.3106 | 11.34 | 10.94 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Kangayam | 25 | 91.0 | 32,147 | 11.0060 | 77.5609 | 11.21 | 10.81 | 77.76 | 77.36 | Off flood-path (heuristic) |
| Krishnagiri | 25 | 92.7 | 71,323 | 12.5192 | 78.2138 | 12.72 | 12.32 | 78.41 | 78.01 | Off flood-path (heuristic) |
| Kādiganpalli | 25 | 92.8 | 22,714 | 12.5232 | 78.2086 | 12.72 | 12.32 | 78.41 | 78.01 | Off flood-path (heuristic) |
| Kanakapura | 19 | 93.7 | 54,014 | 12.5465 | 77.4201 | 12.75 | 12.35 | 77.62 | 77.22 | Off flood-path (heuristic) |
| Andipalayam | 25 | 94.0 | 25,539 | 11.0925 | 77.3123 | 11.29 | 10.89 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Vellakkovil | 25 | 94.3 | 40,359 | 10.9463 | 77.7124 | 11.15 | 10.75 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Murugampālaiyam | 25 | 94.4 | 26,349 | 11.0806 | 77.3238 | 11.28 | 10.88 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Vīrapāndi | 25 | 94.6 | 50,301 | 11.0625 | 77.3508 | 11.26 | 10.86 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Chamrajnagar | 19 | 94.8 | 69,875 | 11.9231 | 76.9395 | 12.12 | 11.72 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Mangalam | 25 | 95.9 | 17,699 | 11.1005 | 77.2712 | 11.3 | 10.9 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Ūttangarai | 25 | 96.2 | 18,470 | 12.2671 | 78.5378 | 12.47 | 12.07 | 78.74 | 78.34 | Off flood-path (heuristic) |
| Karur | 25 | 97.5 | 234,191 | 10.9577 | 78.0810 | 11.16 | 10.76 | 78.28 | 77.88 | Downstream (heuristic - verify) |
| Annur | 25 | 97.6 | 20,079 | 11.2362 | 77.1051 | 11.44 | 11.04 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Kāraippudūr | 25 | 97.7 | 28,602 | 11.0567 | 77.3061 | 11.26 | 10.86 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Chinna Āndānkovil | 25 | 97.8 | 19,779 | 10.9511 | 78.0681 | 11.15 | 10.75 | 78.27 | 77.87 | Downstream (heuristic - verify) |
| Senapparetti | 25 | 98.1 | 22,447 | 10.9625 | 78.1132 | 11.16 | 10.76 | 78.31 | 77.91 | Downstream (heuristic - verify) |
| Mattigiri | 25 | 101.0 | 23,129 | 12.6980 | 77.8083 | 12.9 | 12.5 | 78.01 | 77.61 | Off flood-path (heuristic) |
| Sirumugai | 25 | 101.1 | 20,066 | 11.3214 | 77.0052 | 11.52 | 11.12 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Tāndoni | 25 | 101.3 | 53,854 | 10.9261 | 78.0941 | 11.13 | 10.73 | 78.29 | 77.89 | Downstream (heuristic - verify) |
| Karumattampatti | 25 | 101.3 | 35,062 | 11.1093 | 77.1820 | 11.31 | 10.91 | 77.38 | 76.98 | Off flood-path (heuristic) |
| Anekal | 19 | 103.0 | 44,260 | 12.7111 | 77.6956 | 12.91 | 12.51 | 77.9 | 77.5 | Off flood-path (heuristic) |
| Sāmalāpuram | 25 | 103.3 | 20,691 | 11.0724 | 77.1980 | 11.27 | 10.87 | 77.4 | 77.0 | Off flood-path (heuristic) |
| Bargūr | 25 | 103.3 | 16,366 | 12.5429 | 78.3573 | 12.74 | 12.34 | 78.56 | 78.16 | Off flood-path (heuristic) |
| Malavalli | 19 | 104.2 | 38,129 | 12.3856 | 77.0605 | 12.59 | 12.19 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Palladam | 25 | 104.9 | 42,225 | 10.9917 | 77.2863 | 11.19 | 10.79 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Hosūr | 25 | 105.3 | 229,528 | 12.7365 | 77.8326 | 12.94 | 12.54 | 78.03 | 77.63 | Off flood-path (heuristic) |
| Mūkondapalli | 25 | 106.9 | 39,245 | 12.7514 | 77.8017 | 12.95 | 12.55 | 78.0 | 77.6 | Off flood-path (heuristic) |
| Jūjūvādi | 25 | 108.7 | 32,474 | 12.7679 | 77.7918 | 12.97 | 12.57 | 77.99 | 77.59 | Off flood-path (heuristic) |
| Mettupalayam | 25 | 108.9 | 69,213 | 11.2997 | 76.9348 | 11.5 | 11.1 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Avalēpalli | 25 | 109.3 | 17,859 | 12.7714 | 77.8594 | 12.97 | 12.57 | 78.06 | 77.66 | Off flood-path (heuristic) |
| Attibele | 19 | 109.9 | 20,532 | 12.7781 | 77.7726 | 12.98 | 12.58 | 77.97 | 77.57 | Off flood-path (heuristic) |
| Kāramadai | 25 | 110.0 | 35,166 | 11.2406 | 76.9601 | 11.44 | 11.04 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Kotagiri | 25 | 110.3 | 28,848 | 11.4207 | 76.8603 | 11.62 | 11.22 | 77.06 | 76.66 | Off flood-path (heuristic) |
| Mūlanūr | 25 | 111.1 | 15,223 | 10.7943 | 77.7115 | 10.99 | 10.59 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Jigani | 19 | 112.1 | 17,036 | 12.7861 | 77.6385 | 12.99 | 12.59 | 77.84 | 77.44 | Off flood-path (heuristic) |
| Turaiyūr | 25 | 112.4 | 32,134 | 11.1497 | 78.5987 | 11.35 | 10.95 | 78.8 | 78.4 | Downstream (heuristic - verify) |
| Sulur | 25 | 112.5 | 27,909 | 11.0243 | 77.1256 | 11.22 | 10.82 | 77.33 | 76.93 | Off flood-path (heuristic) |
| Thuraiyur | 25 | 112.6 | 32,439 | 11.1480 | 78.5991 | 11.35 | 10.95 | 78.8 | 78.4 | Downstream (heuristic - verify) |
| Vadakkanandal | 25 | 112.7 | 23,034 | 11.7817 | 78.8354 | 11.98 | 11.58 | 79.04 | 78.64 | Downstream (heuristic - verify) |
| Tirupattur | 25 | 114.3 | 64,125 | 12.4924 | 78.5680 | 12.69 | 12.29 | 78.77 | 78.37 | Off flood-path (heuristic) |
| Kālappatti | 25 | 114.7 | 39,586 | 11.0794 | 77.0371 | 11.28 | 10.88 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Pāchchal | 25 | 114.8 | 16,789 | 12.5112 | 78.5552 | 12.71 | 12.31 | 78.76 | 78.36 | Off flood-path (heuristic) |
| Bommasandra Industrial Area | 19 | 115.0 | 15,254 | 12.8177 | 77.6842 | 13.02 | 12.62 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Channapatna | 19 | 115.5 | 71,942 | 12.6514 | 77.2067 | 12.85 | 12.45 | 77.41 | 77.01 | Off flood-path (heuristic) |
| Hebbagodi | 19 | 116.0 | 34,827 | 12.8263 | 77.6809 | 13.03 | 12.63 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Kulittalai | 25 | 116.2 | 27,910 | 10.9349 | 78.4125 | 11.13 | 10.73 | 78.61 | 78.21 | Downstream (heuristic - verify) |
| Periyanayakkanpalaiyam | 25 | 116.5 | 25,930 | 11.1525 | 76.9516 | 11.35 | 10.95 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Musiri | 25 | 116.6 | 30,209 | 10.9530 | 78.4443 | 11.15 | 10.75 | 78.64 | 78.24 | Downstream (heuristic - verify) |
| Kulattuppālaiyam | 25 | 116.8 | 17,819 | 10.7613 | 77.5842 | 10.96 | 10.56 | 77.78 | 77.38 | Off flood-path (heuristic) |
| Kannampālaiyam | 25 | 116.8 | 15,868 | 10.9954 | 77.0990 | 11.2 | 10.8 | 77.3 | 76.9 | Off flood-path (heuristic) |
| Vilankurichi | 25 | 116.9 | 24,235 | 11.0715 | 77.0173 | 11.27 | 10.87 | 77.22 | 76.82 | Off flood-path (heuristic) |
| Srvanampatti | 25 | 117.5 | 32,920 | 11.0764 | 77.0045 | 11.28 | 10.88 | 77.2 | 76.8 | Off flood-path (heuristic) |
| Irugūr | 25 | 117.6 | 25,691 | 11.0178 | 77.0628 | 11.22 | 10.82 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Closepet | 19 | 117.9 | 95,167 | 12.7218 | 77.2815 | 12.92 | 12.52 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Chinna Salem | 25 | 118.2 | 25,106 | 11.6342 | 78.8741 | 11.83 | 11.43 | 79.07 | 78.67 | Downstream (heuristic - verify) |
| Bannūr | 19 | 118.5 | 25,455 | 12.3330 | 76.8620 | 12.53 | 12.13 | 77.06 | 76.66 | Off flood-path (heuristic) |
| Pallappatti | 25 | 119.2 | 30,624 | 10.7206 | 77.8795 | 10.92 | 10.52 | 78.08 | 77.68 | Off flood-path (heuristic) |
| koppana Agrahara | 19 | 119.3 | 20,622 | 12.8551 | 77.6671 | 13.06 | 12.66 | 77.87 | 77.47 | Off flood-path (heuristic) |
| Electronic City Phase I | 19 | 119.3 | 76,348 | 12.8549 | 77.6633 | 13.05 | 12.65 | 77.86 | 77.46 | Off flood-path (heuristic) |
| Coonoor | 25 | 120.0 | 45,494 | 11.3498 | 76.7938 | 11.55 | 11.15 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Narasimhanaickenpalayam | 25 | 120.2 | 17,858 | 11.1173 | 76.9363 | 11.32 | 10.92 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Wellington | 25 | 120.3 | 20,254 | 11.3655 | 76.7844 | 11.57 | 11.17 | 76.98 | 76.58 | Off flood-path (heuristic) |
| Chinnavādampatti | 25 | 120.3 | 20,122 | 11.0615 | 76.9838 | 11.26 | 10.86 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Rakkiyapālaiyam | 25 | 120.5 | 18,749 | 11.1061 | 76.9425 | 11.31 | 10.91 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Dharapuram | 25 | 120.5 | 72,291 | 10.7383 | 77.5322 | 10.94 | 10.54 | 77.73 | 77.33 | Off flood-path (heuristic) |
| Maddūr | 19 | 120.6 | 28,754 | 12.5828 | 77.0429 | 12.78 | 12.38 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Jalārpet | 25 | 120.8 | 40,959 | 12.5702 | 78.5732 | 12.77 | 12.37 | 78.77 | 78.37 | Off flood-path (heuristic) |
| Gundlupēt | 19 | 120.8 | 28,105 | 11.8100 | 76.6903 | 12.01 | 11.61 | 76.89 | 76.49 | Off flood-path (heuristic) |
| Singānallūr | 25 | 121.4 | 31,239 | 10.9990 | 77.0324 | 11.2 | 10.8 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Vellakkinar | 25 | 121.6 | 15,998 | 11.0736 | 76.9566 | 11.27 | 10.87 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Kuppam | 02 | 121.8 | 21,963 | 12.7493 | 78.3419 | 12.95 | 12.55 | 78.54 | 78.14 | Off flood-path (heuristic) |
| Tudiyalūr | 25 | 122.0 | 33,924 | 11.0816 | 76.9446 | 11.28 | 10.88 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Chengam | 25 | 122.3 | 26,980 | 12.3089 | 78.7914 | 12.51 | 12.11 | 78.99 | 78.59 | Off flood-path (heuristic) |
| Vellalūr | 25 | 123.6 | 24,872 | 10.9775 | 77.0260 | 11.18 | 10.78 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Pālaiyam | 25 | 123.9 | 15,336 | 10.7256 | 78.1354 | 10.93 | 10.53 | 78.34 | 77.94 | Downstream (heuristic - verify) |
| Kērkandi | 25 | 124.1 | 23,229 | 11.3678 | 76.7458 | 11.57 | 11.17 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Coimbatore | 25 | 126.0 | 2,136,916 | 11.0055 | 76.9661 | 11.21 | 10.81 | 77.17 | 76.77 | Off flood-path (heuristic) |
| Kallakkurichchi | 25 | 126.3 | 40,449 | 11.7404 | 78.9590 | 11.94 | 11.54 | 79.16 | 78.76 | Downstream (heuristic - verify) |
| Kallakurichi | 25 | 126.4 | 1,682,687 | 11.7338 | 78.9592 | 11.93 | 11.53 | 79.16 | 78.76 | Downstream (heuristic - verify) |
| Nanjangūd | 19 | 126.8 | 50,598 | 12.1176 | 76.6840 | 12.32 | 11.92 | 76.88 | 76.48 | Off flood-path (heuristic) |
| Idaiyarpālaiyam | 25 | 126.8 | 83,908 | 11.0394 | 76.9237 | 11.24 | 10.84 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Ooty | 25 | 127.4 | 233,426 | 11.4134 | 76.6952 | 11.61 | 11.21 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Mandya | 19 | 127.5 | 137,358 | 12.5223 | 76.8975 | 12.72 | 12.32 | 77.1 | 76.7 | Off flood-path (heuristic) |
| Chettipālaiyam | 25 | 128.2 | 24,080 | 10.9125 | 77.0370 | 11.11 | 10.71 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Kurichchi | 25 | 128.9 | 123,667 | 10.9609 | 76.9738 | 11.16 | 10.76 | 77.17 | 76.77 | Off flood-path (heuristic) |
| Vadavalli | 25 | 130.1 | 39,873 | 11.0247 | 76.8973 | 11.22 | 10.82 | 77.1 | 76.7 | Off flood-path (heuristic) |
| Vīrakeralam | 25 | 130.1 | 23,841 | 11.0077 | 76.9126 | 11.21 | 10.81 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Kuniyamuttūr | 25 | 130.3 | 95,924 | 10.9638 | 76.9525 | 11.16 | 10.76 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Nangavaram | 25 | 130.3 | 17,629 | 10.8692 | 78.5392 | 11.07 | 10.67 | 78.74 | 78.34 | Downstream (heuristic - verify) |
| Rāmachettipālaiyam | 25 | 133.2 | 17,809 | 10.9582 | 76.9201 | 11.16 | 10.76 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Perambalur | 25 | 133.3 | 49,648 | 11.2333 | 78.8833 | 11.43 | 11.03 | 79.08 | 78.68 | Downstream (heuristic - verify) |
| Vaniyambadi | 25 | 133.3 | 95,061 | 12.6816 | 78.6201 | 12.88 | 12.48 | 78.82 | 78.42 | Off flood-path (heuristic) |
| Bengaluru | 19 | 133.3 | 8,495,492 | 12.9719 | 77.5937 | 13.17 | 12.77 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Madukkarai | 25 | 134.1 | 30,357 | 10.9057 | 76.9634 | 11.11 | 10.71 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Mālūr | 19 | 135.7 | 40,050 | 13.0032 | 77.9380 | 13.2 | 12.8 | 78.14 | 77.74 | Off flood-path (heuristic) |
| Mysuru | 19 | 138.3 | 920,550 | 12.2979 | 76.6393 | 12.5 | 12.1 | 76.84 | 76.44 | Off flood-path (heuristic) |
| Mannachanallur | 25 | 138.5 | 25,931 | 10.9099 | 78.6993 | 11.11 | 10.71 | 78.9 | 78.5 | Downstream (heuristic - verify) |
| Alangāyam | 25 | 138.8 | 18,327 | 12.6224 | 78.7521 | 12.82 | 12.42 | 78.95 | 78.55 | Off flood-path (heuristic) |
| Tyāgadurgam | 25 | 139.1 | 18,605 | 11.7411 | 79.0770 | 11.94 | 11.54 | 79.28 | 78.88 | Downstream (heuristic - verify) |
| Robertsonpet | 19 | 139.6 | 162,230 | 12.9563 | 78.2754 | 13.16 | 12.76 | 78.48 | 78.08 | Off flood-path (heuristic) |
| Bangarapet | 19 | 139.7 | 44,849 | 12.9912 | 78.1780 | 13.19 | 12.79 | 78.38 | 77.98 | Off flood-path (heuristic) |
| Shrīrangapattana | 19 | 140.2 | 25,061 | 12.4226 | 76.6844 | 12.62 | 12.22 | 76.88 | 76.48 | Off flood-path (heuristic) |
| Bhikshāndārkovil | 25 | 141.1 | 17,257 | 10.8827 | 78.7046 | 11.08 | 10.68 | 78.9 | 78.5 | Downstream (heuristic - verify) |
| Hoskote | 19 | 142.4 | 56,980 | 13.0707 | 77.7981 | 13.27 | 12.87 | 78.0 | 77.6 | Off flood-path (heuristic) |
| Hinakallu | 19 | 143.4 | 23,162 | 12.3304 | 76.6021 | 12.53 | 12.13 | 76.8 | 76.4 | Off flood-path (heuristic) |
| Māgadi | 19 | 144.1 | 27,605 | 12.9571 | 77.2237 | 13.16 | 12.76 | 77.42 | 77.02 | Off flood-path (heuristic) |
| Madattukkulam | 25 | 144.9 | 20,620 | 10.5587 | 77.3660 | 10.76 | 10.36 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Periyakottai | 25 | 144.9 | 17,356 | 10.5909 | 77.2797 | 10.79 | 10.39 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Hutagalli | 19 | 145.5 | 18,308 | 12.3417 | 76.5863 | 12.54 | 12.14 | 76.79 | 76.39 | Off flood-path (heuristic) |
| French Rocks | 19 | 145.7 | 20,399 | 12.5009 | 76.6742 | 12.7 | 12.3 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Oddanchathiram | 25 | 145.8 | 30,064 | 10.4801 | 77.7498 | 10.68 | 10.28 | 77.95 | 77.55 | Off flood-path (heuristic) |
| Tiruchirappalli | 25 | 145.9 | 1,022,518 | 10.8155 | 78.6965 | 11.02 | 10.62 | 78.9 | 78.5 | Downstream (heuristic - verify) |
| Udumalaippettai | 25 | 146.6 | 61,133 | 10.5881 | 77.2478 | 10.79 | 10.39 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Gudalur | 25 | 146.7 | 49,535 | 11.5207 | 76.4814 | 11.72 | 11.32 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Tiruvannamalai | 25 | 146.9 | 145,278 | 12.2266 | 79.0746 | 12.43 | 12.03 | 79.27 | 78.87 | Downstream (heuristic - verify) |
| Kollivāyal | 25 | 147.2 | 21,943 | 11.4998 | 76.4815 | 11.7 | 11.3 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Yelahanka | 19 | 147.4 | 116,447 | 13.1007 | 77.5963 | 13.3 | 12.9 | 77.8 | 77.4 | Off flood-path (heuristic) |
| Vengikkal | 25 | 147.6 | 18,244 | 12.2642 | 79.0674 | 12.46 | 12.06 | 79.27 | 78.87 | Off flood-path (heuristic) |
| Manapparai | 25 | 148.1 | 40,510 | 10.6077 | 78.4258 | 10.81 | 10.41 | 78.63 | 78.23 | Downstream (heuristic - verify) |
| Ambur | 25 | 149.4 | 114,608 | 12.7916 | 78.7164 | 12.99 | 12.59 | 78.92 | 78.52 | Off flood-path (heuristic) |
| Pāppākurichchi | 25 | 149.9 | 24,023 | 10.8137 | 78.7481 | 11.01 | 10.61 | 78.95 | 78.55 | Downstream (heuristic - verify) |
| Tittagudi | 25 | 150.2 | 22,894 | 11.4072 | 79.1222 | 11.61 | 11.21 | 79.32 | 78.92 | Downstream (heuristic - verify) |
| Sundakkāmpālaiyam | 25 | 150.3 | 16,459 | 10.5666 | 77.2135 | 10.77 | 10.37 | 77.41 | 77.01 | Off flood-path (heuristic) |
| Ayyalur | 25 | 150.6 | 17,100 | 10.4818 | 78.1564 | 10.68 | 10.28 | 78.36 | 77.96 | Downstream (heuristic - verify) |
| Devarshola | 25 | 150.6 | 24,954 | 11.5437 | 76.4404 | 11.74 | 11.34 | 76.64 | 76.24 | Off flood-path (heuristic) |
| Agaram | 25 | 150.6 | 15,610 | 10.4433 | 77.9485 | 10.64 | 10.24 | 78.15 | 77.75 | Off flood-path (heuristic) |
| Ellakkudi | 25 | 150.7 | 16,244 | 10.8060 | 78.7503 | 11.01 | 10.61 | 78.95 | 78.55 | Downstream (heuristic - verify) |
| Lalgudi | 25 | 150.7 | 23,740 | 10.8742 | 78.8194 | 11.07 | 10.67 | 79.02 | 78.62 | Downstream (heuristic - verify) |
| Tādikombu | 25 | 151.2 | 18,838 | 10.4390 | 77.9546 | 10.64 | 10.24 | 78.15 | 77.75 | Off flood-path (heuristic) |
| Ayakudi | 25 | 151.4 | 27,156 | 10.4499 | 77.5520 | 10.65 | 10.25 | 77.75 | 77.35 | Off flood-path (heuristic) |
| Sivagirippatti | 25 | 151.9 | 17,306 | 10.4502 | 77.5303 | 10.65 | 10.25 | 77.73 | 77.33 | Off flood-path (heuristic) |
| Palani | 25 | 152.0 | 70,467 | 10.4503 | 77.5209 | 10.65 | 10.25 | 77.72 | 77.32 | Off flood-path (heuristic) |
| Nelamangala | 19 | 152.2 | 37,232 | 13.0998 | 77.3936 | 13.3 | 12.9 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Pollachi | 25 | 152.6 | 90,180 | 10.6583 | 77.0085 | 10.86 | 10.46 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Tiruverumbūr | 25 | 153.1 | 23,156 | 10.7937 | 78.7690 | 10.99 | 10.59 | 78.97 | 78.57 | Downstream (heuristic - verify) |
| Vadamadurai | 25 | 153.5 | 18,015 | 10.4408 | 78.0978 | 10.64 | 10.24 | 78.3 | 77.9 | Downstream (heuristic - verify) |
| Tirukkoyilur | 25 | 153.9 | 30,212 | 11.9662 | 79.2026 | 12.17 | 11.77 | 79.4 | 79.0 | Downstream (heuristic - verify) |
| Kolār | 19 | 154.1 | 138,462 | 13.1377 | 78.1300 | 13.34 | 12.94 | 78.33 | 77.93 | Off flood-path (heuristic) |
| Sūleswaranpatti | 25 | 154.4 | 20,104 | 10.6388 | 77.0084 | 10.84 | 10.44 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Koothappar | 25 | 154.6 | 15,943 | 10.7971 | 78.7923 | 11.0 | 10.6 | 78.99 | 78.59 | Downstream (heuristic - verify) |
| Ūttukuli | 25 | 155.1 | 16,354 | 10.6519 | 76.9778 | 10.85 | 10.45 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Chettināyakkanpatti | 25 | 156.4 | 17,701 | 10.3940 | 77.9754 | 10.59 | 10.19 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Ariyalūr | 25 | 156.8 | 29,144 | 11.1385 | 79.0756 | 11.34 | 10.94 | 79.28 | 78.88 | Downstream (heuristic - verify) |
| Sīlappādi | 25 | 156.9 | 17,824 | 10.3940 | 78.0078 | 10.59 | 10.19 | 78.21 | 77.81 | Off flood-path (heuristic) |
| Navalpattu | 25 | 157.1 | 16,788 | 10.7505 | 78.7763 | 10.95 | 10.55 | 78.98 | 78.58 | Downstream (heuristic - verify) |
| Dindigul | 25 | 159.2 | 292,512 | 10.3690 | 77.9804 | 10.57 | 10.17 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Pudusseri | 13 | 159.3 | 16,629 | 10.7582 | 76.7859 | 10.96 | 10.56 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Balakrishnapuram | 25 | 160.6 | 25,627 | 10.3591 | 78.0026 | 10.56 | 10.16 | 78.2 | 77.8 | Off flood-path (heuristic) |
| Tuvāgudi | 25 | 160.8 | 38,887 | 10.7472 | 78.8213 | 10.95 | 10.55 | 79.02 | 78.62 | Downstream (heuristic - verify) |
| Kunigal | 19 | 160.9 | 34,155 | 13.0232 | 77.0252 | 13.22 | 12.82 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Vettavalam | 25 | 161.1 | 15,506 | 12.1077 | 79.2452 | 12.31 | 11.91 | 79.45 | 79.05 | Downstream (heuristic - verify) |
| Tondalam | 25 | 161.2 | 44,590 | 11.5014 | 76.3498 | 11.7 | 11.3 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Nāgamangala | 19 | 161.2 | 17,776 | 12.8194 | 76.7546 | 13.02 | 12.62 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Pudussery West | 13 | 161.5 | 20,140 | 10.7880 | 76.7279 | 10.99 | 10.59 | 76.93 | 76.53 | Off flood-path (heuristic) |
| Peranāmpattu | 25 | 161.7 | 51,271 | 12.9343 | 78.7189 | 13.13 | 12.73 | 78.92 | 78.52 | Off flood-path (heuristic) |
| Devanahalli | 19 | 162.2 | 28,051 | 13.2465 | 77.7118 | 13.45 | 13.05 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Ulundurpet | 25 | 162.3 | 23,734 | 11.6910 | 79.2873 | 11.89 | 11.49 | 79.49 | 79.09 | Downstream (heuristic - verify) |
| Pennādam | 25 | 162.8 | 19,494 | 11.4039 | 79.2416 | 11.6 | 11.2 | 79.44 | 79.04 | Downstream (heuristic - verify) |
| Adiyanuthu | 25 | 163.5 | 17,851 | 10.3308 | 77.9812 | 10.53 | 10.13 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Anaimalai | 25 | 164.1 | 17,208 | 10.5830 | 76.9344 | 10.78 | 10.38 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Marutharōd | 13 | 164.7 | 24,963 | 10.7751 | 76.6995 | 10.98 | 10.58 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Polūr | 25 | 164.8 | 28,123 | 12.5122 | 79.1240 | 12.71 | 12.31 | 79.32 | 78.92 | Off flood-path (heuristic) |
| Kottur | 25 | 165.6 | 26,627 | 10.5365 | 76.9803 | 10.74 | 10.34 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Mulbāgal | 19 | 165.8 | 57,276 | 13.1635 | 78.3935 | 13.36 | 12.96 | 78.59 | 78.19 | Off flood-path (heuristic) |
| Chittūr | 13 | 167.0 | 32,298 | 10.6997 | 76.7471 | 10.9 | 10.5 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Ambikāpuram | 13 | 167.1 | 28,592 | 10.7939 | 76.6530 | 10.99 | 10.59 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Vettaikkaranpudur | 25 | 167.3 | 18,128 | 10.5621 | 76.9130 | 10.76 | 10.36 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Vijayapura | 19 | 167.6 | 34,866 | 13.2972 | 77.8018 | 13.5 | 13.1 | 78.0 | 77.6 | Off flood-path (heuristic) |
| Puthuppariyāram | 13 | 167.7 | 30,895 | 10.8131 | 76.6287 | 11.01 | 10.61 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Chinnalapatti | 25 | 167.9 | 26,285 | 10.2848 | 77.9233 | 10.48 | 10.08 | 78.12 | 77.72 | Off flood-path (heuristic) |
| V.S.K.Valasai (Dindigul-Dist.) | 25 | 168.4 | 17,865 | 10.3155 | 78.1514 | 10.52 | 10.12 | 78.35 | 77.95 | Downstream (heuristic - verify) |
| Palakkad | 13 | 168.5 | 132,728 | 10.7732 | 76.6537 | 10.97 | 10.57 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Vriddhāchalam | 25 | 168.7 | 61,498 | 11.5183 | 79.3241 | 11.72 | 11.32 | 79.52 | 79.12 | Downstream (heuristic - verify) |
| Virudhachalam | 25 | 169.2 | 73,585 | 11.5150 | 79.3282 | 11.71 | 11.31 | 79.53 | 79.13 | Downstream (heuristic - verify) |
| Doddaballapura | 19 | 169.7 | 93,105 | 13.2945 | 77.5378 | 13.49 | 13.09 | 77.74 | 77.34 | Off flood-path (heuristic) |
| Krishnarājāsāgara | 19 | 170.2 | 35,805 | 12.4398 | 76.3828 | 12.64 | 12.24 | 76.58 | 76.18 | Off flood-path (heuristic) |
| Mannārakkāt | 13 | 170.5 | 50,921 | 10.9922 | 76.4642 | 11.19 | 10.79 | 76.66 | 76.26 | Off flood-path (heuristic) |
| Pirāyiri | 13 | 170.9 | 41,359 | 10.7652 | 76.6318 | 10.97 | 10.57 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Krishnarājpet | 19 | 172.7 | 25,946 | 12.6662 | 76.4877 | 12.87 | 12.47 | 76.69 | 76.29 | Off flood-path (heuristic) |
| Pudunagaram | 13 | 173.4 | 17,892 | 10.6802 | 76.6836 | 10.88 | 10.48 | 76.88 | 76.48 | Off flood-path (heuristic) |
| Gudiyatham | 25 | 173.6 | 93,973 | 12.9460 | 78.8738 | 13.15 | 12.75 | 79.07 | 78.67 | Off flood-path (heuristic) |
| Hunsūr | 19 | 173.6 | 50,865 | 12.3036 | 76.2927 | 12.5 | 12.1 | 76.49 | 76.09 | Off flood-path (heuristic) |
| Kondasamudram | 25 | 173.9 | 21,335 | 12.9455 | 78.8788 | 13.15 | 12.75 | 79.08 | 78.68 | Off flood-path (heuristic) |
| Thiruvaiyaru | 25 | 174.2 | 16,164 | 10.8841 | 79.1036 | 11.08 | 10.68 | 79.3 | 78.9 | Downstream (heuristic - verify) |
| Koduvayur | 13 | 174.8 | 20,703 | 10.6867 | 76.6588 | 10.89 | 10.49 | 76.86 | 76.46 | Off flood-path (heuristic) |
| Pallikonda | 25 | 175.4 | 23,067 | 12.9052 | 78.9427 | 13.11 | 12.71 | 79.14 | 78.74 | Off flood-path (heuristic) |
| Kodaikānāl | 25 | 175.7 | 36,501 | 10.2393 | 77.4893 | 10.44 | 10.04 | 77.69 | 77.29 | Off flood-path (heuristic) |
| Sidlaghatta | 19 | 177.9 | 51,159 | 13.3890 | 77.8644 | 13.59 | 13.19 | 78.06 | 77.66 | Off flood-path (heuristic) |
| Srīnivāspur | 19 | 178.0 | 26,793 | 13.3391 | 78.2117 | 13.54 | 13.14 | 78.41 | 78.01 | Off flood-path (heuristic) |
| Natham | 25 | 179.9 | 23,660 | 10.2278 | 78.2297 | 10.43 | 10.03 | 78.43 | 78.03 | Downstream (heuristic - verify) |
| Ayyampettāi | 25 | 180.0 | 16,263 | 10.9014 | 79.1798 | 11.1 | 10.7 | 79.38 | 78.98 | Downstream (heuristic - verify) |
| Nilakottai | 25 | 180.8 | 22,197 | 10.1650 | 77.8502 | 10.36 | 9.96 | 78.05 | 77.65 | Off flood-path (heuristic) |
| Ammainaickanur | 25 | 180.9 | 19,257 | 10.1671 | 77.9132 | 10.37 | 9.97 | 78.11 | 77.71 | Off flood-path (heuristic) |
| Nilambūr | 13 | 180.9 | 46,366 | 11.2727 | 76.2257 | 11.47 | 11.07 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Chintamani | 19 | 181.2 | 76,068 | 13.4005 | 78.0517 | 13.6 | 13.2 | 78.25 | 77.85 | Off flood-path (heuristic) |
| Vattalkundu | 25 | 181.2 | 22,928 | 10.1607 | 77.7588 | 10.36 | 9.96 | 77.96 | 77.56 | Off flood-path (heuristic) |
| Neelagiri | 25 | 181.7 | 16,197 | 10.7594 | 79.0934 | 10.96 | 10.56 | 79.29 | 78.89 | Downstream (heuristic - verify) |
| Vallam | 25 | 181.8 | 16,758 | 10.7199 | 79.0598 | 10.92 | 10.52 | 79.26 | 78.86 | Downstream (heuristic - verify) |
| Jayamkondacholapuram | 25 | 182.1 | 33,945 | 11.2127 | 79.3637 | 11.41 | 11.01 | 79.56 | 79.16 | Downstream (heuristic - verify) |
| Marayur | 13 | 182.1 | 25,000 | 10.2764 | 77.1620 | 10.48 | 10.08 | 77.36 | 76.96 | Off flood-path (heuristic) |
| Chik Ballāpur | 19 | 183.1 | 63,652 | 13.4351 | 77.7279 | 13.64 | 13.24 | 77.93 | 77.53 | Off flood-path (heuristic) |
| Gingee | 25 | 183.3 | 27,045 | 12.2528 | 79.4173 | 12.45 | 12.05 | 79.62 | 79.22 | Downstream (heuristic - verify) |
| Devadanapatti | 25 | 183.5 | 19,285 | 10.1467 | 77.6439 | 10.35 | 9.95 | 77.84 | 77.44 | Off flood-path (heuristic) |
| Thanjavur | 25 | 183.9 | 291,067 | 10.7852 | 79.1391 | 10.99 | 10.59 | 79.34 | 78.94 | Downstream (heuristic - verify) |
| Chetput | 25 | 184.3 | 19,827 | 12.4640 | 79.3484 | 12.66 | 12.26 | 79.55 | 79.15 | Off flood-path (heuristic) |
| Sālamedu | 25 | 184.6 | 20,854 | 11.9088 | 79.4919 | 12.11 | 11.71 | 79.69 | 79.29 | Downstream (heuristic - verify) |
| Villupuram | 25 | 184.9 | 97,380 | 11.9398 | 79.4924 | 12.14 | 11.74 | 79.69 | 79.29 | Downstream (heuristic - verify) |
| Neyveli | 25 | 186.1 | 179,150 | 11.6088 | 79.4994 | 11.81 | 11.41 | 79.7 | 79.3 | Downstream (heuristic - verify) |
| Papanasam | 25 | 186.8 | 17,548 | 10.9269 | 79.2706 | 11.13 | 10.73 | 79.47 | 79.07 | Downstream (heuristic - verify) |
| Valparai | 25 | 187.2 | 90,353 | 10.3269 | 76.9512 | 10.53 | 10.13 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Alattūr | 13 | 187.5 | 26,720 | 10.6500 | 76.5333 | 10.85 | 10.45 | 76.73 | 76.33 | Off flood-path (heuristic) |
| Periyakulam | 25 | 187.5 | 42,976 | 10.1227 | 77.5437 | 10.32 | 9.92 | 77.74 | 77.34 | Off flood-path (heuristic) |
| Palmaner | 02 | 187.5 | 54,035 | 13.2000 | 78.7472 | 13.4 | 13.0 | 78.95 | 78.55 | Off flood-path (heuristic) |
| Kalpatta | 13 | 188.0 | 31,580 | 11.6087 | 76.0834 | 11.81 | 11.41 | 76.28 | 75.88 | Off flood-path (heuristic) |
| Nānjikkottai | 25 | 188.0 | 32,689 | 10.7293 | 79.1424 | 10.93 | 10.53 | 79.34 | 78.94 | Downstream (heuristic - verify) |
| Tumkūr | 19 | 188.4 | 307,359 | 13.3414 | 77.1022 | 13.54 | 13.14 | 77.3 | 76.9 | Off flood-path (heuristic) |
| Arni | 25 | 188.6 | 63,671 | 12.6677 | 79.2853 | 12.87 | 12.47 | 79.49 | 79.09 | Off flood-path (heuristic) |
| Thorapadi | 25 | 188.9 | 16,700 | 12.8915 | 79.1238 | 13.09 | 12.69 | 79.32 | 78.92 | Off flood-path (heuristic) |
| Allapuram | 25 | 189.5 | 31,211 | 12.8951 | 79.1279 | 13.1 | 12.7 | 79.33 | 78.93 | Off flood-path (heuristic) |
| Palavansathu | 25 | 189.9 | 22,176 | 12.8931 | 79.1345 | 13.09 | 12.69 | 79.33 | 78.93 | Off flood-path (heuristic) |
| Vadipatti | 25 | 190.4 | 26,830 | 10.0848 | 77.9611 | 10.28 | 9.88 | 78.16 | 77.76 | Off flood-path (heuristic) |
| Singampunari | 25 | 190.6 | 18,143 | 10.1862 | 78.4150 | 10.39 | 9.99 | 78.62 | 78.22 | Downstream (heuristic - verify) |
| Panruti | 25 | 190.8 | 60,323 | 11.7766 | 79.5527 | 11.98 | 11.58 | 79.75 | 79.35 | Downstream (heuristic - verify) |
| Vellore | 25 | 191.6 | 484,690 | 12.9184 | 79.1325 | 13.12 | 12.72 | 79.33 | 78.93 | Off flood-path (heuristic) |
| Cherpulassery | 13 | 191.7 | 30,000 | 10.8765 | 76.3093 | 11.08 | 10.68 | 76.51 | 76.11 | Off flood-path (heuristic) |
| Ottapalam | 13 | 191.9 | 53,792 | 10.7735 | 76.3776 | 10.97 | 10.57 | 76.58 | 76.18 | Off flood-path (heuristic) |
| Pudukkottai | 25 | 192.2 | 117,630 | 10.3813 | 78.8214 | 10.58 | 10.18 | 79.02 | 78.62 | Downstream (heuristic - verify) |
| Gubbi | 19 | 193.2 | 18,446 | 13.3122 | 76.9410 | 13.51 | 13.11 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Dārāsuram | 25 | 193.7 | 15,326 | 10.9499 | 79.3561 | 11.15 | 10.75 | 79.56 | 79.16 | Downstream (heuristic - verify) |
| Perintalmanna | 13 | 194.0 | 49,723 | 10.9772 | 76.2254 | 11.18 | 10.78 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Kalinjur | 25 | 194.2 | 19,828 | 12.9534 | 79.1337 | 13.15 | 12.75 | 79.33 | 78.93 | Off flood-path (heuristic) |
| Punganūru | 02 | 194.3 | 54,746 | 13.3667 | 78.5719 | 13.57 | 13.17 | 78.77 | 78.37 | Off flood-path (heuristic) |
| Piriyāpatna | 19 | 194.5 | 16,685 | 12.3350 | 76.1007 | 12.53 | 12.13 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Valavanur | 25 | 194.5 | 16,745 | 11.9209 | 79.5824 | 12.12 | 11.72 | 79.78 | 79.38 | Downstream (heuristic - verify) |
| Vāniyamkulam | 13 | 195.2 | 16,085 | 10.7830 | 76.3336 | 10.98 | 10.58 | 76.53 | 76.13 | Off flood-path (heuristic) |
| Kangeyanallur | 25 | 195.4 | 15,177 | 12.9508 | 79.1506 | 13.15 | 12.75 | 79.35 | 78.95 | Off flood-path (heuristic) |
| Kātpādi | 25 | 196.4 | 38,833 | 12.9695 | 79.1455 | 13.17 | 12.77 | 79.35 | 78.95 | Off flood-path (heuristic) |
| Kumbakonam | 25 | 196.4 | 167,155 | 10.9621 | 79.3912 | 11.16 | 10.76 | 79.59 | 79.19 | Downstream (heuristic - verify) |
| Kurinjippādi | 25 | 196.8 | 39,514 | 11.5503 | 79.5907 | 11.75 | 11.35 | 79.79 | 79.39 | Downstream (heuristic - verify) |
| Channarāyapatna | 19 | 197.3 | 40,417 | 12.9064 | 76.3877 | 13.11 | 12.71 | 76.59 | 76.19 | Off flood-path (heuristic) |
| Sholavandan | 25 | 197.4 | 22,578 | 10.0216 | 77.9609 | 10.22 | 9.82 | 78.16 | 77.76 | Off flood-path (heuristic) |
| Manjeri | 13 | 197.7 | 97,102 | 11.1202 | 76.1200 | 11.32 | 10.92 | 76.32 | 75.92 | Off flood-path (heuristic) |
| Lālpettai | 25 | 198.9 | 16,561 | 11.3009 | 79.5561 | 11.5 | 11.1 | 79.76 | 79.36 | Downstream (heuristic - verify) |
| Allinagaram | 25 | 199.1 | 94,453 | 10.0274 | 77.4781 | 10.23 | 9.83 | 77.68 | 77.28 | Off flood-path (heuristic) |
| Kattumannarkoil | 25 | 199.9 | 27,294 | 11.2763 | 79.5578 | 11.48 | 11.08 | 79.76 | 79.36 | Downstream (heuristic - verify) |
| Tirunāgeswaram | 25 | 199.9 | 15,082 | 10.9646 | 79.4293 | 11.16 | 10.76 | 79.63 | 79.23 | Downstream (heuristic - verify) |

## Bhavanisagar Dam (Tamil Nadu)
Dam coordinates: 11.48, 77.11

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Sathyamangalam | 25 | 14.3 | 37,816 | 11.5053 | 77.2383 | 11.71 | 11.31 | 77.44 | 77.04 | Downstream (heuristic - verify) |
| Punjai Puliyampatti | 25 | 15.6 | 18,967 | 11.3516 | 77.1667 | 11.55 | 11.15 | 77.37 | 76.97 | Off flood-path (heuristic) |
| Kumārapālaiyam | 25 | 16.0 | 15,706 | 11.5021 | 77.2555 | 11.7 | 11.3 | 77.46 | 77.06 | Downstream (heuristic - verify) |
| Sirumugai | 25 | 21.0 | 20,066 | 11.3214 | 77.0052 | 11.52 | 11.12 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Nambiyūr | 25 | 26.7 | 16,379 | 11.3581 | 77.3212 | 11.56 | 11.16 | 77.52 | 77.12 | Downstream (heuristic - verify) |
| Annur | 25 | 27.1 | 20,079 | 11.2362 | 77.1051 | 11.44 | 11.04 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Mettupalayam | 25 | 27.7 | 69,213 | 11.2997 | 76.9348 | 11.5 | 11.1 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Kotagiri | 25 | 28.0 | 28,848 | 11.4207 | 76.8603 | 11.62 | 11.22 | 77.06 | 76.66 | Off flood-path (heuristic) |
| Kāramadai | 25 | 31.2 | 35,166 | 11.2406 | 76.9601 | 11.44 | 11.04 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Avinashi | 25 | 36.3 | 28,868 | 11.1930 | 77.2686 | 11.39 | 10.99 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Gobichettipalayam | 25 | 36.3 | 59,523 | 11.4550 | 77.4422 | 11.65 | 11.25 | 77.64 | 77.24 | Downstream (heuristic - verify) |
| Coonoor | 25 | 37.4 | 45,494 | 11.3498 | 76.7938 | 11.55 | 11.15 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Wellington | 25 | 37.7 | 20,254 | 11.3655 | 76.7844 | 11.57 | 11.17 | 76.98 | 76.58 | Off flood-path (heuristic) |
| Palangarai | 25 | 38.0 | 17,248 | 11.1978 | 77.3058 | 11.4 | 11.0 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Periyanayakkanpalaiyam | 25 | 40.3 | 25,930 | 11.1525 | 76.9516 | 11.35 | 10.95 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Tirumuruganpūndi | 25 | 41.2 | 31,528 | 11.1649 | 77.3084 | 11.36 | 10.96 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Kērkandi | 25 | 41.6 | 23,229 | 11.3678 | 76.7458 | 11.57 | 11.17 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Karumattampatti | 25 | 42.0 | 35,062 | 11.1093 | 77.1820 | 11.31 | 10.91 | 77.38 | 76.98 | Off flood-path (heuristic) |
| Chettipālaiyam | 25 | 42.6 | 37,620 | 11.1667 | 77.3350 | 11.37 | 10.97 | 77.54 | 77.14 | Off flood-path (heuristic) |
| Velampālaiyam | 25 | 43.9 | 87,427 | 11.1376 | 77.3106 | 11.34 | 10.94 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Narasimhanaickenpalayam | 25 | 44.6 | 17,858 | 11.1173 | 76.9363 | 11.32 | 10.92 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Kālappatti | 25 | 45.3 | 39,586 | 11.0794 | 77.0371 | 11.28 | 10.88 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Rakkiyapālaiyam | 25 | 45.4 | 18,749 | 11.1061 | 76.9425 | 11.31 | 10.91 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Boyampālaiyam | 25 | 45.4 | 40,503 | 11.1487 | 77.3537 | 11.35 | 10.95 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Nerupperichchal | 25 | 45.7 | 53,579 | 11.1610 | 77.3740 | 11.36 | 10.96 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Mangalam | 25 | 45.7 | 17,699 | 11.1005 | 77.2712 | 11.3 | 10.9 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Ooty | 25 | 45.8 | 233,426 | 11.4134 | 76.6952 | 11.61 | 11.21 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Srvanampatti | 25 | 46.3 | 32,920 | 11.0764 | 77.0045 | 11.28 | 10.88 | 77.2 | 76.8 | Off flood-path (heuristic) |
| Sāmalāpuram | 25 | 46.3 | 20,691 | 11.0724 | 77.1980 | 11.27 | 10.87 | 77.4 | 77.0 | Off flood-path (heuristic) |
| Vilankurichi | 25 | 46.5 | 24,235 | 11.0715 | 77.0173 | 11.27 | 10.87 | 77.22 | 76.82 | Off flood-path (heuristic) |
| Tudiyalūr | 25 | 47.8 | 33,924 | 11.0816 | 76.9446 | 11.28 | 10.88 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Vellakkinar | 25 | 48.2 | 15,998 | 11.0736 | 76.9566 | 11.27 | 10.87 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Andipalayam | 25 | 48.4 | 25,539 | 11.0925 | 77.3123 | 11.29 | 10.89 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Tiruppur | 25 | 48.5 | 963,173 | 11.1154 | 77.3546 | 11.32 | 10.92 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Chinnavādampatti | 25 | 48.5 | 20,122 | 11.0615 | 76.9838 | 11.26 | 10.86 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Mannarai | 25 | 49.5 | 17,261 | 11.1172 | 77.3726 | 11.32 | 10.92 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Murugampālaiyam | 25 | 50.2 | 26,349 | 11.0806 | 77.3238 | 11.28 | 10.88 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Salangaippālaiyam | 25 | 50.6 | 15,609 | 11.4260 | 77.5707 | 11.63 | 11.23 | 77.77 | 77.37 | Downstream (heuristic - verify) |
| Sulur | 25 | 50.7 | 27,909 | 11.0243 | 77.1256 | 11.22 | 10.82 | 77.33 | 76.93 | Off flood-path (heuristic) |
| Irugūr | 25 | 51.6 | 25,691 | 11.0178 | 77.0628 | 11.22 | 10.82 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Kāraippudūr | 25 | 51.7 | 28,602 | 11.0567 | 77.3061 | 11.26 | 10.86 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Nallūr | 25 | 52.2 | 70,115 | 11.1003 | 77.3914 | 11.3 | 10.9 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Chamrajnagar | 19 | 52.7 | 69,875 | 11.9231 | 76.9395 | 12.12 | 11.72 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Idaiyarpālaiyam | 25 | 53.0 | 83,908 | 11.0394 | 76.9237 | 11.24 | 10.84 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Vīrapāndi | 25 | 53.3 | 50,301 | 11.0625 | 77.3508 | 11.26 | 10.86 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Anthiyur | 25 | 53.4 | 21,086 | 11.5751 | 77.5904 | 11.78 | 11.38 | 77.79 | 77.39 | Downstream (heuristic - verify) |
| Kannampālaiyam | 25 | 53.9 | 15,868 | 10.9954 | 77.0990 | 11.2 | 10.8 | 77.3 | 76.9 | Off flood-path (heuristic) |
| Muttanampālaiyam | 25 | 54.0 | 26,014 | 11.0845 | 77.3969 | 11.28 | 10.88 | 77.6 | 77.2 | Off flood-path (heuristic) |
| Singānallūr | 25 | 54.2 | 31,239 | 10.9990 | 77.0324 | 11.2 | 10.8 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Coimbatore | 25 | 55.0 | 2,136,916 | 11.0055 | 76.9661 | 11.21 | 10.81 | 77.17 | 76.77 | Off flood-path (heuristic) |
| Karumāndi Chellipālaiyam | 25 | 55.5 | 23,868 | 11.3019 | 77.5860 | 11.5 | 11.1 | 77.79 | 77.39 | Downstream (heuristic - verify) |
| Vadavalli | 25 | 55.7 | 39,873 | 11.0247 | 76.8973 | 11.22 | 10.82 | 77.1 | 76.7 | Off flood-path (heuristic) |
| Vellalūr | 25 | 56.6 | 24,872 | 10.9775 | 77.0260 | 11.18 | 10.78 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Vīrakeralam | 25 | 56.8 | 23,841 | 11.0077 | 76.9126 | 11.21 | 10.81 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Perundurai | 25 | 56.8 | 24,930 | 11.2756 | 77.5879 | 11.48 | 11.08 | 77.79 | 77.39 | Downstream (heuristic - verify) |
| Palladam | 25 | 57.6 | 42,225 | 10.9917 | 77.2863 | 11.19 | 10.79 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Jāmbai | 25 | 58.1 | 16,522 | 11.4678 | 77.6434 | 11.67 | 11.27 | 77.84 | 77.44 | Downstream (heuristic - verify) |
| Gundlupēt | 19 | 58.6 | 28,105 | 11.8100 | 76.6903 | 12.01 | 11.61 | 76.89 | 76.49 | Off flood-path (heuristic) |
| Kurichchi | 25 | 59.6 | 123,667 | 10.9609 | 76.9738 | 11.16 | 10.76 | 77.17 | 76.77 | Off flood-path (heuristic) |
| Kuniyamuttūr | 25 | 59.9 | 95,924 | 10.9638 | 76.9525 | 11.16 | 10.76 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Rāmachettipālaiyam | 25 | 61.6 | 17,809 | 10.9582 | 76.9201 | 11.16 | 10.76 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Pudūr | 25 | 61.9 | 17,240 | 11.4360 | 77.6760 | 11.64 | 11.24 | 77.88 | 77.48 | Downstream (heuristic - verify) |
| Bhavāni | 25 | 62.5 | 39,744 | 11.4455 | 77.6821 | 11.65 | 11.25 | 77.88 | 77.48 | Downstream (heuristic - verify) |
| Chettipālaiyam | 25 | 63.6 | 24,080 | 10.9125 | 77.0370 | 11.11 | 10.71 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Tindal | 25 | 64.1 | 15,440 | 11.3169 | 77.6742 | 11.52 | 11.12 | 77.87 | 77.47 | Downstream (heuristic - verify) |
| Chennimalai | 25 | 64.3 | 16,268 | 11.1638 | 77.6039 | 11.36 | 10.96 | 77.8 | 77.4 | Downstream (heuristic - verify) |
| Periya Semūr | 25 | 64.5 | 55,282 | 11.3609 | 77.6895 | 11.56 | 11.16 | 77.89 | 77.49 | Downstream (heuristic - verify) |
| Kumarapalayam | 25 | 65.6 | 195,071 | 11.4450 | 77.7110 | 11.64 | 11.24 | 77.91 | 77.51 | Downstream (heuristic - verify) |
| Madukkarai | 25 | 65.8 | 30,357 | 10.9057 | 76.9634 | 11.11 | 10.71 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Brāhmana Periya Agrahāram | 25 | 66.2 | 24,798 | 11.3690 | 77.7063 | 11.57 | 11.17 | 77.91 | 77.51 | Downstream (heuristic - verify) |
| Sūryampālaiyam | 25 | 66.2 | 28,585 | 11.4045 | 77.7123 | 11.6 | 11.2 | 77.91 | 77.51 | Downstream (heuristic - verify) |
| Tattānkuttai | 25 | 67.1 | 24,708 | 11.4352 | 77.7237 | 11.64 | 11.24 | 77.92 | 77.52 | Downstream (heuristic - verify) |
| Vīrappanchathiram | 25 | 67.2 | 84,453 | 11.3531 | 77.7125 | 11.55 | 11.15 | 77.91 | 77.51 | Downstream (heuristic - verify) |
| Sūrampatti | 25 | 67.7 | 41,782 | 11.3273 | 77.7112 | 11.53 | 11.13 | 77.91 | 77.51 | Downstream (heuristic - verify) |
| Kāsipālaiyam | 25 | 67.8 | 73,425 | 11.3198 | 77.7097 | 11.52 | 11.12 | 77.91 | 77.51 | Downstream (heuristic - verify) |
| Kollivāyal | 25 | 68.5 | 21,943 | 11.4998 | 76.4815 | 11.7 | 11.3 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Gudalur | 25 | 68.6 | 49,535 | 11.5207 | 76.4814 | 11.72 | 11.32 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Erode | 25 | 69.0 | 521,891 | 11.3428 | 77.7274 | 11.54 | 11.14 | 77.93 | 77.53 | Downstream (heuristic - verify) |
| Kangayam | 25 | 72.1 | 32,147 | 11.0060 | 77.5609 | 11.21 | 10.81 | 77.76 | 77.36 | Downstream (heuristic - verify) |
| Pallipalayam | 25 | 72.2 | 40,140 | 11.3652 | 77.7623 | 11.57 | 11.17 | 77.96 | 77.56 | Downstream (heuristic - verify) |
| Ālampālaiyam | 25 | 72.8 | 20,286 | 11.3635 | 77.7677 | 11.56 | 11.16 | 77.97 | 77.57 | Downstream (heuristic - verify) |
| Elandakuttai | 25 | 72.9 | 16,160 | 11.4060 | 77.7750 | 11.61 | 11.21 | 77.98 | 77.58 | Downstream (heuristic - verify) |
| Devarshola | 25 | 73.3 | 24,954 | 11.5437 | 76.4404 | 11.74 | 11.34 | 76.64 | 76.24 | Off flood-path (heuristic) |
| Kollegāl | 19 | 75.0 | 57,149 | 12.1545 | 77.1105 | 12.35 | 11.95 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Idappadi | 25 | 80.3 | 54,823 | 11.5862 | 77.8389 | 11.79 | 11.39 | 78.04 | 77.64 | Downstream (heuristic - verify) |
| Sankagiri | 25 | 82.4 | 29,467 | 11.4760 | 77.8664 | 11.68 | 11.28 | 78.07 | 77.67 | Downstream (heuristic - verify) |
| Mettur | 25 | 82.7 | 56,743 | 11.7880 | 77.8008 | 11.99 | 11.59 | 78.0 | 77.6 | Downstream (heuristic - verify) |
| Tondalam | 25 | 82.9 | 44,590 | 11.5014 | 76.3498 | 11.7 | 11.3 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Sivagiri | 25 | 84.1 | 16,779 | 11.1203 | 77.7881 | 11.32 | 10.92 | 77.99 | 77.59 | Downstream (heuristic - verify) |
| Nanjangūd | 19 | 84.7 | 50,598 | 12.1176 | 76.6840 | 12.32 | 11.92 | 76.88 | 76.48 | Off flood-path (heuristic) |
| Tiruchengode | 25 | 86.2 | 95,335 | 11.3802 | 77.8944 | 11.58 | 11.18 | 78.09 | 77.69 | Downstream (heuristic - verify) |
| Jalakandapuram | 25 | 86.6 | 16,184 | 11.6978 | 77.8730 | 11.9 | 11.5 | 78.07 | 77.67 | Downstream (heuristic - verify) |
| Pudussery West | 13 | 87.5 | 20,140 | 10.7880 | 76.7279 | 10.99 | 10.59 | 76.93 | 76.53 | Off flood-path (heuristic) |
| Pudusseri | 13 | 87.7 | 16,629 | 10.7582 | 76.7859 | 10.96 | 10.56 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Vellakkovil | 25 | 88.5 | 40,359 | 10.9463 | 77.7124 | 11.15 | 10.75 | 77.91 | 77.51 | Downstream (heuristic - verify) |
| Mannārakkāt | 13 | 88.9 | 50,921 | 10.9922 | 76.4642 | 11.19 | 10.79 | 76.66 | 76.26 | Off flood-path (heuristic) |
| Pottaneri Nallakavundanpatti | 25 | 88.9 | 25,133 | 11.8039 | 77.8567 | 12.0 | 11.6 | 78.06 | 77.66 | Downstream (heuristic - verify) |
| Vīrnūr | 25 | 89.9 | 16,665 | 11.8443 | 77.8473 | 12.04 | 11.64 | 78.05 | 77.65 | Downstream (heuristic - verify) |
| Marutharōd | 13 | 90.3 | 24,963 | 10.7751 | 76.6995 | 10.98 | 10.58 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Puthuppariyāram | 13 | 90.9 | 30,895 | 10.8131 | 76.6287 | 11.01 | 10.61 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Ambikāpuram | 13 | 91.1 | 28,592 | 10.7939 | 76.6530 | 10.99 | 10.59 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Pollachi | 25 | 92.0 | 90,180 | 10.6583 | 77.0085 | 10.86 | 10.46 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Palakkad | 13 | 93.0 | 132,728 | 10.7732 | 76.6537 | 10.97 | 10.57 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Ūttukuli | 25 | 93.2 | 16,354 | 10.6519 | 76.9778 | 10.85 | 10.45 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Sūleswaranpatti | 25 | 94.2 | 20,104 | 10.6388 | 77.0084 | 10.84 | 10.44 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Dharapuram | 25 | 94.5 | 72,291 | 10.7383 | 77.5322 | 10.94 | 10.54 | 77.73 | 77.33 | Off flood-path (heuristic) |
| Pirāyiri | 13 | 95.1 | 41,359 | 10.7652 | 76.6318 | 10.97 | 10.57 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Kulattuppālaiyam | 25 | 95.2 | 17,819 | 10.7613 | 77.5842 | 10.96 | 10.56 | 77.78 | 77.38 | Off flood-path (heuristic) |
| Chittūr | 13 | 95.4 | 32,298 | 10.6997 | 76.7471 | 10.9 | 10.5 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Tāramangalam | 25 | 96.7 | 30,222 | 11.6940 | 77.9703 | 11.89 | 11.49 | 78.17 | 77.77 | Downstream (heuristic - verify) |
| Idangansālai | 25 | 97.1 | 33,245 | 11.6272 | 77.9890 | 11.83 | 11.43 | 78.19 | 77.79 | Downstream (heuristic - verify) |
| Paramathi Velur | 25 | 97.7 | 25,012 | 11.1916 | 77.9563 | 11.39 | 10.99 | 78.16 | 77.76 | Downstream (heuristic - verify) |
| Bannūr | 19 | 98.6 | 25,455 | 12.3330 | 76.8620 | 12.53 | 12.13 | 77.06 | 76.66 | Off flood-path (heuristic) |
| Mechcheri | 25 | 99.0 | 25,676 | 11.8341 | 77.9439 | 12.03 | 11.63 | 78.14 | 77.74 | Downstream (heuristic - verify) |
| Nilambūr | 13 | 99.1 | 46,366 | 11.2727 | 76.2257 | 11.47 | 11.07 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Udumalaippettai | 25 | 100.3 | 61,133 | 10.5881 | 77.2478 | 10.79 | 10.39 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Pudunagaram | 13 | 100.4 | 17,892 | 10.6802 | 76.6836 | 10.88 | 10.48 | 76.88 | 76.48 | Off flood-path (heuristic) |
| Mallasamudram | 25 | 100.4 | 18,820 | 11.4933 | 78.0312 | 11.69 | 11.29 | 78.23 | 77.83 | Downstream (heuristic - verify) |
| Periyakottai | 25 | 100.6 | 17,356 | 10.5909 | 77.2797 | 10.79 | 10.39 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Mūlanūr | 25 | 100.6 | 15,223 | 10.7943 | 77.7115 | 10.99 | 10.59 | 77.91 | 77.51 | Downstream (heuristic - verify) |
| Malavalli | 19 | 100.8 | 38,129 | 12.3856 | 77.0605 | 12.59 | 12.19 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Koduvayur | 13 | 101.0 | 20,703 | 10.6867 | 76.6588 | 10.89 | 10.49 | 76.86 | 76.46 | Off flood-path (heuristic) |
| Anaimalai | 25 | 101.6 | 17,208 | 10.5830 | 76.9344 | 10.78 | 10.38 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Sundakkāmpālaiyam | 25 | 102.2 | 16,459 | 10.5666 | 77.2135 | 10.77 | 10.37 | 77.41 | 77.01 | Off flood-path (heuristic) |
| Pottanūr | 25 | 104.3 | 18,455 | 11.1098 | 77.9888 | 11.31 | 10.91 | 78.19 | 77.79 | Downstream (heuristic - verify) |
| Vettaikkaranpudur | 25 | 104.3 | 18,128 | 10.5621 | 76.9130 | 10.76 | 10.36 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Mysuru | 19 | 104.4 | 920,550 | 12.2979 | 76.6393 | 12.5 | 12.1 | 76.84 | 76.44 | Off flood-path (heuristic) |
| Velur | 25 | 105.6 | 25,012 | 11.1082 | 78.0011 | 11.31 | 10.91 | 78.2 | 77.8 | Downstream (heuristic - verify) |
| Kottur | 25 | 105.9 | 26,627 | 10.5365 | 76.9803 | 10.74 | 10.34 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Omalur | 25 | 106.0 | 16,279 | 11.7410 | 78.0456 | 11.94 | 11.54 | 78.25 | 77.85 | Downstream (heuristic - verify) |
| Madattukkulam | 25 | 106.2 | 20,620 | 10.5587 | 77.3660 | 10.76 | 10.36 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Pugalūr | 25 | 109.1 | 23,408 | 11.0740 | 78.0209 | 11.27 | 10.87 | 78.22 | 77.82 | Downstream (heuristic - verify) |
| Hinakallu | 19 | 109.5 | 23,162 | 12.3304 | 76.6021 | 12.53 | 12.13 | 76.8 | 76.4 | Off flood-path (heuristic) |
| Cherpulassery | 13 | 110.1 | 30,000 | 10.8765 | 76.3093 | 11.08 | 10.68 | 76.51 | 76.11 | Off flood-path (heuristic) |
| Hutagalli | 19 | 111.5 | 18,308 | 12.3417 | 76.5863 | 12.54 | 12.14 | 76.79 | 76.39 | Off flood-path (heuristic) |
| Perintalmanna | 13 | 111.5 | 49,723 | 10.9772 | 76.2254 | 11.18 | 10.78 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Alattūr | 13 | 111.7 | 26,720 | 10.6500 | 76.5333 | 10.85 | 10.45 | 76.73 | 76.33 | Off flood-path (heuristic) |
| Kondalampatti | 25 | 111.8 | 20,318 | 11.6345 | 78.1237 | 11.83 | 11.43 | 78.32 | 77.92 | Downstream (heuristic - verify) |
| Ottapalam | 13 | 112.1 | 53,792 | 10.7735 | 76.3776 | 10.97 | 10.57 | 76.58 | 76.18 | Off flood-path (heuristic) |
| Pennāgaram | 25 | 112.2 | 17,480 | 12.1343 | 77.8953 | 12.33 | 11.93 | 78.1 | 77.7 | Downstream (heuristic - verify) |
| Kalpatta | 13 | 112.8 | 31,580 | 11.6087 | 76.0834 | 11.81 | 11.41 | 76.28 | 75.88 | Off flood-path (heuristic) |
| Shrīrangapattana | 19 | 114.6 | 25,061 | 12.4226 | 76.6844 | 12.62 | 12.22 | 76.88 | 76.48 | Off flood-path (heuristic) |
| Vāniyamkulam | 13 | 114.8 | 16,085 | 10.7830 | 76.3336 | 10.98 | 10.58 | 76.53 | 76.13 | Off flood-path (heuristic) |
| Manjeri | 13 | 115.1 | 97,102 | 11.1202 | 76.1200 | 11.32 | 10.92 | 76.32 | 75.92 | Off flood-path (heuristic) |
| Salem | 25 | 115.5 | 917,414 | 11.6538 | 78.1554 | 11.85 | 11.45 | 78.36 | 77.96 | Downstream (heuristic - verify) |
| Rasipuram | 25 | 117.3 | 50,244 | 11.4601 | 78.1864 | 11.66 | 11.26 | 78.39 | 77.99 | Downstream (heuristic - verify) |
| Periyapatti | 25 | 117.6 | 15,690 | 11.2052 | 78.1512 | 11.41 | 11.01 | 78.35 | 77.95 | Downstream (heuristic - verify) |
| Mandya | 19 | 118.2 | 137,358 | 12.5223 | 76.8975 | 12.72 | 12.32 | 77.1 | 76.7 | Off flood-path (heuristic) |
| Nāmakkal | 25 | 118.6 | 55,997 | 11.2213 | 78.1652 | 11.42 | 11.02 | 78.37 | 77.97 | Downstream (heuristic - verify) |
| Kannānkurichchi | 25 | 119.0 | 19,765 | 11.6969 | 78.1794 | 11.9 | 11.5 | 78.38 | 77.98 | Downstream (heuristic - verify) |
| Pallappatti | 25 | 119.1 | 30,624 | 10.7206 | 77.8795 | 10.92 | 10.52 | 78.08 | 77.68 | Downstream (heuristic - verify) |
| Chinna Āndānkovil | 25 | 119.9 | 19,779 | 10.9511 | 78.0681 | 11.15 | 10.75 | 78.27 | 77.87 | Downstream (heuristic - verify) |
| Karur | 25 | 120.8 | 234,191 | 10.9577 | 78.0810 | 11.16 | 10.76 | 78.28 | 77.88 | Downstream (heuristic - verify) |
| Kizhuparamba | 13 | 121.0 | 22,062 | 11.2526 | 76.0244 | 11.45 | 11.05 | 76.22 | 75.82 | Off flood-path (heuristic) |
| Peringottupulam | 13 | 121.3 | 36,602 | 11.0268 | 76.0987 | 11.23 | 10.83 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Shōranūr | 13 | 121.5 | 43,533 | 10.7618 | 76.2708 | 10.96 | 10.56 | 76.47 | 76.07 | Off flood-path (heuristic) |
| Malappuram | 13 | 122.3 | 101,386 | 11.0420 | 76.0815 | 11.24 | 10.84 | 76.28 | 75.88 | Off flood-path (heuristic) |
| Maddūr | 19 | 122.8 | 28,754 | 12.5828 | 77.0429 | 12.78 | 12.38 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Palani | 25 | 123.0 | 70,467 | 10.4503 | 77.5209 | 10.65 | 10.25 | 77.72 | 77.32 | Off flood-path (heuristic) |
| Ongallur-I | 13 | 123.0 | 16,998 | 10.8027 | 76.2185 | 11.0 | 10.6 | 76.42 | 76.02 | Off flood-path (heuristic) |
| French Rocks | 19 | 123.0 | 20,399 | 12.5009 | 76.6742 | 12.7 | 12.3 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Kanakapura | 19 | 123.3 | 54,014 | 12.5465 | 77.4201 | 12.75 | 12.35 | 77.62 | 77.22 | Off flood-path (heuristic) |
| Sivagirippatti | 25 | 123.4 | 17,306 | 10.4502 | 77.5303 | 10.65 | 10.25 | 77.73 | 77.33 | Off flood-path (heuristic) |
| Senapparetti | 25 | 123.6 | 22,447 | 10.9625 | 78.1132 | 11.16 | 10.76 | 78.31 | 77.91 | Downstream (heuristic - verify) |
| Tāndoni | 25 | 123.8 | 53,854 | 10.9261 | 78.0941 | 11.13 | 10.73 | 78.29 | 77.89 | Downstream (heuristic - verify) |
| Ongallur-II | 13 | 123.9 | 26,273 | 10.7897 | 76.2190 | 10.99 | 10.59 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Ayakudi | 25 | 124.3 | 27,156 | 10.4499 | 77.5520 | 10.65 | 10.25 | 77.75 | 77.35 | Off flood-path (heuristic) |
| Sendamangalam | 25 | 124.5 | 19,750 | 11.2811 | 78.2342 | 11.48 | 11.08 | 78.43 | 78.03 | Downstream (heuristic - verify) |
| Kodur | 13 | 124.6 | 45,459 | 11.0153 | 76.0701 | 11.22 | 10.82 | 76.27 | 75.87 | Off flood-path (heuristic) |
| Thazhecode | 13 | 124.9 | 25,116 | 11.3226 | 75.9758 | 11.52 | 11.12 | 76.18 | 75.78 | Off flood-path (heuristic) |
| Muthutala | 13 | 126.0 | 24,861 | 10.8354 | 76.1596 | 11.04 | 10.64 | 76.36 | 75.96 | Off flood-path (heuristic) |
| Pattāmbi | 13 | 126.2 | 28,632 | 10.8001 | 76.1841 | 11.0 | 10.6 | 76.38 | 75.98 | Off flood-path (heuristic) |
| Nāmagiripettai | 25 | 126.2 | 22,098 | 11.4551 | 78.2682 | 11.66 | 11.26 | 78.47 | 78.07 | Downstream (heuristic - verify) |
| Hunsūr | 19 | 127.6 | 50,865 | 12.3036 | 76.2927 | 12.5 | 12.1 | 76.49 | 76.09 | Off flood-path (heuristic) |
| Pūlakkōd | 13 | 127.9 | 29,872 | 11.3097 | 75.9500 | 11.51 | 11.11 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Othukkungal | 13 | 128.1 | 39,139 | 11.0283 | 76.0290 | 11.23 | 10.83 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Valparai | 25 | 129.4 | 90,353 | 10.3269 | 76.9512 | 10.53 | 10.13 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Kondotty | 13 | 130.3 | 28,794 | 11.1423 | 75.9657 | 11.34 | 10.94 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Irimbiliyam | 13 | 130.6 | 30,635 | 10.8624 | 76.0922 | 11.06 | 10.66 | 76.29 | 75.89 | Off flood-path (heuristic) |
| Kannamangalam | 13 | 130.6 | 41,260 | 11.0754 | 75.9852 | 11.28 | 10.88 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Channapatna | 19 | 130.7 | 71,942 | 12.6514 | 77.2067 | 12.85 | 12.45 | 77.41 | 77.01 | Off flood-path (heuristic) |
| Trittāla | 13 | 130.9 | 27,796 | 10.8030 | 76.1288 | 11.0 | 10.6 | 76.33 | 75.93 | Off flood-path (heuristic) |
| Vadakāncheri | 13 | 131.1 | 15,674 | 10.6604 | 76.2466 | 10.86 | 10.46 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Urakam | 13 | 131.3 | 29,157 | 11.0512 | 75.9883 | 11.25 | 10.85 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Oddanchathiram | 25 | 131.3 | 30,064 | 10.4801 | 77.7498 | 10.68 | 10.28 | 77.95 | 77.55 | Off flood-path (heuristic) |
| Kōttakkal | 13 | 131.6 | 44,382 | 11.0009 | 76.0062 | 11.2 | 10.8 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Mavoor | 13 | 132.2 | 29,781 | 11.2667 | 75.9167 | 11.47 | 11.07 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Parappur | 13 | 132.3 | 36,270 | 11.0121 | 75.9947 | 11.21 | 10.81 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Vengara | 13 | 132.3 | 48,600 | 11.0508 | 75.9781 | 11.25 | 10.85 | 76.18 | 75.78 | Off flood-path (heuristic) |
| Krishnarājāsāgara | 19 | 132.8 | 35,805 | 12.4398 | 76.3828 | 12.64 | 12.24 | 76.58 | 76.18 | Off flood-path (heuristic) |
| Kāttipparutti | 13 | 133.5 | 40,318 | 10.8738 | 76.0535 | 11.07 | 10.67 | 76.25 | 75.85 | Off flood-path (heuristic) |
| Lakkanahalli | 25 | 133.6 | 39,697 | 12.1120 | 78.1538 | 12.31 | 11.91 | 78.35 | 77.95 | Downstream (heuristic - verify) |
| Marayur | 13 | 134.0 | 25,000 | 10.2764 | 77.1620 | 10.48 | 10.08 | 77.36 | 76.96 | Off flood-path (heuristic) |
| Pallikal | 13 | 134.6 | 46,962 | 11.1372 | 75.9257 | 11.34 | 10.94 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Dharmapuri | 25 | 134.9 | 68,619 | 12.1277 | 78.1579 | 12.33 | 11.93 | 78.36 | 77.96 | Downstream (heuristic - verify) |
| Peruvallur | 13 | 135.0 | 34,941 | 11.1048 | 75.9327 | 11.3 | 10.9 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Pūvātūparamba | 13 | 135.1 | 27,598 | 11.2710 | 75.8894 | 11.47 | 11.07 | 76.09 | 75.69 | Off flood-path (heuristic) |
| Vazhayur | 13 | 135.1 | 36,909 | 11.2173 | 75.8999 | 11.42 | 11.02 | 76.1 | 75.7 | Off flood-path (heuristic) |
| Perumanna | 13 | 135.3 | 35,460 | 11.2529 | 75.8906 | 11.45 | 11.05 | 76.09 | 75.69 | Off flood-path (heuristic) |
| Cherukavu | 13 | 135.4 | 30,126 | 11.1731 | 75.9086 | 11.37 | 10.97 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Abdu Rahiman Nagar | 13 | 135.6 | 41,993 | 11.0698 | 75.9388 | 11.27 | 10.87 | 76.14 | 75.74 | Off flood-path (heuristic) |
| Kunnamangalam | 13 | 135.7 | 47,396 | 11.3046 | 75.8777 | 11.5 | 11.1 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Kuttikkāttūr | 13 | 136.3 | 25,929 | 11.2626 | 75.8796 | 11.46 | 11.06 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Kuttippuram | 13 | 137.4 | 25,750 | 10.8425 | 76.0308 | 11.04 | 10.64 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Naduvattam | 13 | 138.1 | 21,273 | 10.8799 | 76.0020 | 11.08 | 10.68 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Killannur | 13 | 138.1 | 20,339 | 10.5992 | 76.2180 | 10.8 | 10.4 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Denkanikota | 25 | 138.2 | 24,252 | 12.5301 | 77.7889 | 12.73 | 12.33 | 77.99 | 77.59 | Off flood-path (heuristic) |
| Tirūrangādi | 13 | 138.2 | 56,632 | 11.0432 | 75.9234 | 11.24 | 10.84 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Cheriyamundam | 13 | 139.1 | 31,212 | 10.9476 | 75.9564 | 11.15 | 10.75 | 76.16 | 75.76 | Off flood-path (heuristic) |
| Tennala | 13 | 139.1 | 56,546 | 10.9934 | 75.9350 | 11.19 | 10.79 | 76.14 | 75.74 | Off flood-path (heuristic) |
| Pālakkodu | 25 | 139.2 | 20,959 | 12.3070 | 78.0702 | 12.51 | 12.11 | 78.27 | 77.87 | Downstream (heuristic - verify) |
| Closepet | 19 | 139.3 | 95,167 | 12.7218 | 77.2815 | 12.92 | 12.52 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Thenhippalam | 13 | 139.3 | 32,045 | 11.1323 | 75.8822 | 11.33 | 10.93 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Ramanattukara | 13 | 139.4 | 35,937 | 11.1780 | 75.8689 | 11.38 | 10.98 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Balussheri | 13 | 139.6 | 27,363 | 11.4474 | 75.8294 | 11.65 | 11.25 | 76.03 | 75.63 | Off flood-path (heuristic) |
| Moonniyur | 13 | 139.7 | 55,535 | 11.0597 | 75.9031 | 11.26 | 10.86 | 76.1 | 75.7 | Off flood-path (heuristic) |
| Ponmundam | 13 | 139.7 | 25,855 | 10.9536 | 75.9468 | 11.15 | 10.75 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Pālaiyam | 25 | 139.8 | 15,336 | 10.7256 | 78.1354 | 10.93 | 10.53 | 78.34 | 77.94 | Downstream (heuristic - verify) |
| Chelambra | 13 | 139.9 | 34,149 | 11.1509 | 75.8719 | 11.35 | 10.95 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Kuruvattūr | 13 | 139.9 | 34,241 | 11.3361 | 75.8351 | 11.54 | 11.14 | 76.04 | 75.64 | Off flood-path (heuristic) |
| Thirunavaya | 13 | 139.9 | 24,790 | 10.8746 | 75.9855 | 11.07 | 10.67 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Pantheeramkavu | 13 | 139.9 | 24,537 | 11.2305 | 75.8518 | 11.43 | 11.03 | 76.05 | 75.65 | Off flood-path (heuristic) |
| Nanminda | 13 | 140.4 | 27,316 | 11.4232 | 75.8231 | 11.62 | 11.22 | 76.02 | 75.62 | Off flood-path (heuristic) |
| Kāladi | 13 | 141.0 | 25,872 | 10.8194 | 76.0064 | 11.02 | 10.62 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Nannambra | 13 | 141.9 | 40,543 | 10.9921 | 75.9080 | 11.19 | 10.79 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Vazhapadi | 25 | 142.0 | 17,559 | 11.6554 | 78.4012 | 11.86 | 11.46 | 78.6 | 78.2 | Downstream (heuristic - verify) |
| Ferokh | 13 | 142.3 | 32,122 | 11.1799 | 75.8414 | 11.38 | 10.98 | 76.04 | 75.64 | Off flood-path (heuristic) |
| Olavanna | 13 | 142.3 | 43,895 | 11.2184 | 75.8325 | 11.42 | 11.02 | 76.03 | 75.63 | Off flood-path (heuristic) |
| Puthūr | 13 | 142.8 | 17,430 | 10.4874 | 76.2793 | 10.69 | 10.29 | 76.48 | 76.08 | Off flood-path (heuristic) |
| Ālankōd | 13 | 142.9 | 33,918 | 10.7460 | 76.0348 | 10.95 | 10.55 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Edappāl | 13 | 143.0 | 32,550 | 10.7834 | 76.0079 | 10.98 | 10.58 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Cheruvannur | 13 | 143.4 | 61,614 | 11.1903 | 75.8283 | 11.39 | 10.99 | 76.03 | 75.63 | Off flood-path (heuristic) |
| Neduva | 13 | 143.5 | 35,996 | 11.0567 | 75.8668 | 11.26 | 10.86 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Tānālūr | 13 | 143.5 | 47,976 | 10.9515 | 75.9096 | 11.15 | 10.75 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Kakkodi | 13 | 143.7 | 42,866 | 11.3197 | 75.8015 | 11.52 | 11.12 | 76.0 | 75.6 | Off flood-path (heuristic) |
| Kodaikānāl | 25 | 144.0 | 36,501 | 10.2393 | 77.4893 | 10.44 | 10.04 | 77.69 | 77.29 | Off flood-path (heuristic) |
| Tirur | 13 | 144.2 | 56,058 | 10.9137 | 75.9212 | 11.11 | 10.71 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Ariyallur | 13 | 144.4 | 22,558 | 11.0833 | 75.8490 | 11.28 | 10.88 | 76.05 | 75.65 | Off flood-path (heuristic) |
| Karuvanthuruthy | 13 | 144.5 | 21,952 | 11.1721 | 75.8226 | 11.37 | 10.97 | 76.02 | 75.62 | Off flood-path (heuristic) |
| Talakkād | 13 | 144.7 | 35,820 | 10.8846 | 75.9309 | 11.08 | 10.68 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Thrissur | 13 | 144.9 | 315,957 | 10.5167 | 76.2167 | 10.72 | 10.32 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Pariyāpuram | 13 | 145.1 | 22,766 | 11.0167 | 75.8667 | 11.22 | 10.82 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Triprangod | 13 | 145.2 | 41,167 | 10.8422 | 75.9486 | 11.04 | 10.64 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Piriyāpatna | 19 | 145.2 | 16,685 | 12.3350 | 76.1007 | 12.53 | 12.13 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Naduvannūr | 13 | 145.5 | 25,979 | 11.4877 | 75.7751 | 11.69 | 11.29 | 75.98 | 75.58 | Off flood-path (heuristic) |
| Marattakara | 13 | 145.7 | 15,817 | 10.4733 | 76.2558 | 10.67 | 10.27 | 76.46 | 76.06 | Off flood-path (heuristic) |
| Icchannūr | 13 | 145.8 | 40,697 | 11.3615 | 75.7782 | 11.56 | 11.16 | 75.98 | 75.58 | Off flood-path (heuristic) |
| Beypore | 13 | 146.2 | 70,751 | 11.1715 | 75.8061 | 11.37 | 10.97 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Ulliyeri | 13 | 146.4 | 32,509 | 11.4525 | 75.7666 | 11.65 | 11.25 | 75.97 | 75.57 | Off flood-path (heuristic) |
| Kunnamkulam | 13 | 146.8 | 63,903 | 10.6467 | 76.0670 | 10.85 | 10.45 | 76.27 | 75.87 | Off flood-path (heuristic) |
| Agaram | 25 | 147.2 | 15,610 | 10.4433 | 77.9485 | 10.64 | 10.24 | 78.15 | 77.75 | Off flood-path (heuristic) |
| Kozhikode | 13 | 147.2 | 550,440 | 11.2480 | 75.7804 | 11.45 | 11.05 | 75.98 | 75.58 | Off flood-path (heuristic) |
| Mennānyam | 13 | 147.4 | 15,768 | 11.5579 | 75.7596 | 11.76 | 11.36 | 75.96 | 75.56 | Off flood-path (heuristic) |
| Atholi | 13 | 147.5 | 28,213 | 11.3885 | 75.7597 | 11.59 | 11.19 | 75.96 | 75.56 | Off flood-path (heuristic) |
| Tādikombu | 25 | 148.0 | 18,838 | 10.4390 | 77.9546 | 10.64 | 10.24 | 78.15 | 77.75 | Off flood-path (heuristic) |
| Talakkolattur | 13 | 148.0 | 29,388 | 11.3537 | 75.7580 | 11.55 | 11.15 | 75.96 | 75.56 | Off flood-path (heuristic) |
| Krishnarājpet | 19 | 148.2 | 25,946 | 12.6662 | 76.4877 | 12.87 | 12.47 | 76.69 | 76.29 | Off flood-path (heuristic) |
| Amballūr | 13 | 148.5 | 29,341 | 10.4343 | 76.2634 | 10.63 | 10.23 | 76.46 | 76.06 | Off flood-path (heuristic) |
| Māranchēri | 13 | 149.0 | 35,011 | 10.7405 | 75.9710 | 10.94 | 10.54 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Namminikara | 13 | 149.3 | 18,067 | 10.4322 | 76.2542 | 10.63 | 10.23 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Pallippatti | 25 | 149.6 | 26,492 | 11.9399 | 78.4016 | 12.14 | 11.74 | 78.6 | 78.2 | Downstream (heuristic - verify) |
| Eravattūr | 13 | 149.8 | 17,016 | 11.5801 | 75.7384 | 11.78 | 11.38 | 75.94 | 75.54 | Off flood-path (heuristic) |
| Chevvoor | 13 | 150.3 | 16,086 | 10.4586 | 76.2088 | 10.66 | 10.26 | 76.41 | 76.01 | Off flood-path (heuristic) |
| Tammampatti | 25 | 150.3 | 21,503 | 11.4413 | 78.4887 | 11.64 | 11.24 | 78.69 | 78.29 | Downstream (heuristic - verify) |
| Anekal | 19 | 151.0 | 44,260 | 12.7111 | 77.6956 | 12.91 | 12.51 | 77.9 | 77.5 | Off flood-path (heuristic) |
| Vadakkēkkād | 13 | 151.1 | 15,811 | 10.6635 | 76.0033 | 10.86 | 10.46 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Chēmanchēri | 13 | 151.3 | 34,819 | 11.4048 | 75.7236 | 11.6 | 11.2 | 75.92 | 75.52 | Off flood-path (heuristic) |
| Ponnāni | 13 | 151.6 | 105,512 | 10.7669 | 75.9252 | 10.97 | 10.57 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Punnayūr | 13 | 152.6 | 19,387 | 10.6521 | 75.9951 | 10.85 | 10.45 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Guruvāyūr | 13 | 152.7 | 21,416 | 10.5943 | 76.0411 | 10.79 | 10.39 | 76.24 | 75.84 | Off flood-path (heuristic) |
| Kadikkād | 13 | 152.7 | 19,147 | 10.6705 | 75.9797 | 10.87 | 10.47 | 76.18 | 75.78 | Off flood-path (heuristic) |
| Kārakkād | 13 | 153.3 | 39,098 | 10.5880 | 76.0388 | 10.79 | 10.39 | 76.24 | 75.84 | Off flood-path (heuristic) |
| Chettināyakkanpatti | 25 | 153.3 | 17,701 | 10.3940 | 77.9754 | 10.59 | 10.19 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Kuttampuzha | 13 | 153.4 | 25,436 | 10.1503 | 76.7354 | 10.35 | 9.95 | 76.94 | 76.54 | Off flood-path (heuristic) |
| Peddanāyakkanpālaiyam | 25 | 153.6 | 17,678 | 11.6510 | 78.5087 | 11.85 | 11.45 | 78.71 | 78.31 | Downstream (heuristic - verify) |
| Nāgamangala | 19 | 153.9 | 17,776 | 12.8194 | 76.7546 | 13.02 | 12.62 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Kunnummal | 13 | 154.1 | 18,031 | 11.6832 | 75.7108 | 11.88 | 11.48 | 75.91 | 75.51 | Off flood-path (heuristic) |
| Edakkazhiyūr | 13 | 154.4 | 17,335 | 10.6228 | 75.9965 | 10.82 | 10.42 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Kulittalai | 25 | 154.5 | 27,910 | 10.9349 | 78.4125 | 11.13 | 10.73 | 78.61 | 78.21 | Downstream (heuristic - verify) |
| Koyilandy | 13 | 154.5 | 71,873 | 11.4381 | 75.6931 | 11.64 | 11.24 | 75.89 | 75.49 | Off flood-path (heuristic) |
| Munnar | 13 | 154.9 | 68,000 | 10.0882 | 77.0624 | 10.29 | 9.89 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Mattigiri | 25 | 155.3 | 23,129 | 12.6980 | 77.8083 | 12.9 | 12.5 | 78.01 | 77.61 | Off flood-path (heuristic) |
| Manalur | 13 | 155.4 | 17,757 | 10.4929 | 76.1027 | 10.69 | 10.29 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Sīlappādi | 25 | 155.5 | 17,824 | 10.3940 | 78.0078 | 10.59 | 10.19 | 78.21 | 77.81 | Off flood-path (heuristic) |
| Kizhariyūr | 13 | 155.8 | 15,116 | 11.4982 | 75.6807 | 11.7 | 11.3 | 75.88 | 75.48 | Off flood-path (heuristic) |
| Dindigul | 25 | 155.9 | 292,512 | 10.3690 | 77.9804 | 10.57 | 10.17 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Karamuck | 13 | 155.9 | 15,129 | 10.4842 | 76.1044 | 10.68 | 10.28 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Kizhake Chālakudi | 13 | 155.9 | 49,525 | 10.3007 | 76.3376 | 10.5 | 10.1 | 76.54 | 76.14 | Off flood-path (heuristic) |
| Jigani | 19 | 156.2 | 17,036 | 12.7861 | 77.6385 | 12.99 | 12.59 | 77.84 | 77.44 | Off flood-path (heuristic) |
| Musiri | 25 | 156.9 | 30,209 | 10.9530 | 78.4443 | 11.15 | 10.75 | 78.64 | 78.24 | Downstream (heuristic - verify) |
| Chetwayi | 13 | 156.9 | 38,011 | 10.5289 | 76.0479 | 10.73 | 10.33 | 76.25 | 75.85 | Off flood-path (heuristic) |
| Āyanchēri | 13 | 157.3 | 26,293 | 11.6261 | 75.6743 | 11.83 | 11.43 | 75.87 | 75.47 | Off flood-path (heuristic) |
| Porathissery | 13 | 157.8 | 16,768 | 10.3764 | 76.2015 | 10.58 | 10.18 | 76.4 | 76.0 | Off flood-path (heuristic) |
| Vadamadurai | 25 | 158.1 | 18,015 | 10.4408 | 78.0978 | 10.64 | 10.24 | 78.3 | 77.9 | Downstream (heuristic - verify) |
| Periyakulam | 25 | 158.2 | 42,976 | 10.1227 | 77.5437 | 10.32 | 9.92 | 77.74 | 77.34 | Off flood-path (heuristic) |
| Balakrishnapuram | 25 | 158.2 | 25,627 | 10.3591 | 78.0026 | 10.56 | 10.16 | 78.2 | 77.8 | Off flood-path (heuristic) |
| Kottappally | 13 | 158.5 | 21,169 | 11.6127 | 75.6614 | 11.81 | 11.41 | 75.86 | 75.46 | Off flood-path (heuristic) |
| Koratti | 13 | 158.6 | 17,618 | 10.2660 | 76.3477 | 10.47 | 10.07 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Vadanappally | 13 | 158.9 | 30,657 | 10.4690 | 76.0813 | 10.67 | 10.27 | 76.28 | 75.88 | Off flood-path (heuristic) |
| Māniyūr | 13 | 159.3 | 21,820 | 11.5522 | 75.6503 | 11.75 | 11.35 | 75.85 | 75.45 | Off flood-path (heuristic) |
| Ayyalur | 25 | 159.3 | 17,100 | 10.4818 | 78.1564 | 10.68 | 10.28 | 78.36 | 77.96 | Downstream (heuristic - verify) |
| Adiyanuthu | 25 | 159.3 | 17,851 | 10.3308 | 77.9812 | 10.53 | 10.13 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Devadanapatti | 25 | 159.3 | 19,285 | 10.1467 | 77.6439 | 10.35 | 9.95 | 77.84 | 77.44 | Off flood-path (heuristic) |
| Kāveripatnam | 25 | 159.7 | 15,006 | 12.4219 | 78.2188 | 12.62 | 12.22 | 78.42 | 78.02 | Downstream (heuristic - verify) |
| Chinnalapatti | 25 | 159.8 | 26,285 | 10.2848 | 77.9233 | 10.48 | 10.08 | 78.12 | 77.72 | Off flood-path (heuristic) |
| Irinjālakuda | 13 | 160.1 | 29,208 | 10.3424 | 76.2112 | 10.54 | 10.14 | 76.41 | 76.01 | Off flood-path (heuristic) |
| Nādāpuram | 13 | 160.1 | 40,230 | 11.6846 | 75.6549 | 11.88 | 11.48 | 75.85 | 75.45 | Off flood-path (heuristic) |
| Mūkondapalli | 25 | 160.1 | 39,245 | 12.7514 | 77.8017 | 12.95 | 12.55 | 78.0 | 77.6 | Off flood-path (heuristic) |
| Talikkulam | 13 | 160.1 | 25,507 | 10.4404 | 76.0948 | 10.64 | 10.24 | 76.29 | 75.89 | Off flood-path (heuristic) |
| Hosūr | 25 | 160.3 | 229,528 | 12.7365 | 77.8326 | 12.94 | 12.54 | 78.03 | 77.63 | Off flood-path (heuristic) |
| Kattur | 13 | 160.5 | 18,017 | 10.3732 | 76.1668 | 10.57 | 10.17 | 76.37 | 75.97 | Off flood-path (heuristic) |
| Narasingapuram | 25 | 160.5 | 23,084 | 11.6038 | 78.5778 | 11.8 | 11.4 | 78.78 | 78.38 | Downstream (heuristic - verify) |
| Kallūr Vadakummuri | 13 | 160.9 | 25,259 | 10.2532 | 76.3281 | 10.45 | 10.05 | 76.53 | 76.13 | Off flood-path (heuristic) |
| Jūjūvādi | 25 | 161.3 | 32,474 | 12.7679 | 77.7918 | 12.97 | 12.57 | 77.99 | 77.59 | Off flood-path (heuristic) |
| Bommasandra Industrial Area | 19 | 161.3 | 15,254 | 12.8177 | 77.6842 | 13.02 | 12.62 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Attibele | 19 | 161.3 | 20,532 | 12.7781 | 77.7726 | 12.98 | 12.58 | 77.97 | 77.57 | Off flood-path (heuristic) |
| Palayad | 13 | 161.6 | 18,141 | 11.5505 | 75.6289 | 11.75 | 11.35 | 75.83 | 75.43 | Off flood-path (heuristic) |
| Hebbagodi | 19 | 162.1 | 34,827 | 12.8263 | 77.6809 | 13.03 | 12.63 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Chekkiād | 13 | 162.1 | 24,246 | 11.7173 | 75.6419 | 11.92 | 11.52 | 75.84 | 75.44 | Off flood-path (heuristic) |
| Villiappally | 13 | 162.2 | 34,502 | 11.6250 | 75.6287 | 11.82 | 11.42 | 75.83 | 75.43 | Off flood-path (heuristic) |
| Harūr | 25 | 162.2 | 25,469 | 12.0527 | 78.4802 | 12.25 | 11.85 | 78.68 | 78.28 | Downstream (heuristic - verify) |
| Koovappady | 13 | 162.3 | 29,339 | 10.1553 | 76.4854 | 10.36 | 9.96 | 76.69 | 76.29 | Off flood-path (heuristic) |
| Kallūr Tekkumuri | 13 | 162.4 | 17,480 | 10.2401 | 76.3236 | 10.44 | 10.04 | 76.52 | 76.12 | Off flood-path (heuristic) |
| Tūnēri | 13 | 162.5 | 23,421 | 11.6970 | 75.6349 | 11.9 | 11.5 | 75.83 | 75.43 | Off flood-path (heuristic) |
| Tikkotti | 13 | 162.7 | 27,051 | 11.4833 | 75.6167 | 11.68 | 11.28 | 75.82 | 75.42 | Off flood-path (heuristic) |
| Virajpet | 19 | 162.8 | 17,246 | 12.1964 | 75.8051 | 12.4 | 12.0 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Vattalkundu | 25 | 162.9 | 22,928 | 10.1607 | 77.7588 | 10.36 | 9.96 | 77.96 | 77.56 | Off flood-path (heuristic) |
| Iringal | 13 | 162.9 | 25,894 | 11.5593 | 75.6166 | 11.76 | 11.36 | 75.82 | 75.42 | Off flood-path (heuristic) |
| Attur | 25 | 163.0 | 61,793 | 11.5941 | 78.6014 | 11.79 | 11.39 | 78.8 | 78.4 | Downstream (heuristic - verify) |
| Edacchēri | 13 | 163.3 | 26,819 | 11.6818 | 75.6248 | 11.88 | 11.48 | 75.82 | 75.42 | Off flood-path (heuristic) |
| Martūru | 13 | 163.5 | 18,890 | 10.1717 | 76.4264 | 10.37 | 9.97 | 76.63 | 76.23 | Off flood-path (heuristic) |
| Angamāli | 13 | 163.6 | 34,399 | 10.1905 | 76.3879 | 10.39 | 9.99 | 76.59 | 76.19 | Off flood-path (heuristic) |
| Electronic City Phase I | 19 | 164.3 | 76,348 | 12.8549 | 77.6633 | 13.05 | 12.65 | 77.86 | 77.46 | Off flood-path (heuristic) |
| koppana Agrahara | 19 | 164.5 | 20,622 | 12.8551 | 77.6671 | 13.06 | 12.66 | 77.87 | 77.47 | Off flood-path (heuristic) |
| Chendrappini | 13 | 164.7 | 16,404 | 10.3555 | 76.1282 | 10.56 | 10.16 | 76.33 | 75.93 | Off flood-path (heuristic) |
| Māgadi | 19 | 164.7 | 27,605 | 12.9571 | 77.2237 | 13.16 | 12.76 | 77.42 | 77.02 | Off flood-path (heuristic) |
| Kolavallúr | 13 | 165.1 | 19,817 | 11.7507 | 75.6199 | 11.95 | 11.55 | 75.82 | 75.42 | Off flood-path (heuristic) |
| Avalēpalli | 25 | 165.1 | 17,859 | 12.7714 | 77.8594 | 12.97 | 12.57 | 78.06 | 77.66 | Off flood-path (heuristic) |
| Thekkumkara | 13 | 165.3 | 15,258 | 10.2819 | 76.2132 | 10.48 | 10.08 | 76.41 | 76.01 | Off flood-path (heuristic) |
| Bodināyakkanūr | 25 | 165.4 | 75,680 | 10.0117 | 77.3498 | 10.21 | 9.81 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Chelamartam | 13 | 165.5 | 16,844 | 10.1371 | 76.4570 | 10.34 | 9.94 | 76.66 | 76.26 | Off flood-path (heuristic) |
| Kaipamangalam | 13 | 165.7 | 35,626 | 10.3350 | 76.1392 | 10.53 | 10.13 | 76.34 | 75.94 | Off flood-path (heuristic) |
| Kushālnagar | 19 | 165.8 | 15,326 | 12.4580 | 75.9590 | 12.66 | 12.26 | 76.16 | 75.76 | Off flood-path (heuristic) |
| Kotamangalam | 13 | 166.0 | 38,837 | 10.0643 | 76.6284 | 10.26 | 9.86 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Chōrōd | 13 | 166.2 | 38,245 | 11.6277 | 75.5915 | 11.83 | 11.43 | 75.79 | 75.39 | Off flood-path (heuristic) |
| Nedumbassery | 13 | 166.3 | 29,706 | 10.1565 | 76.4017 | 10.36 | 9.96 | 76.6 | 76.2 | Off flood-path (heuristic) |
| Turaiyūr | 25 | 166.4 | 32,134 | 11.1497 | 78.5987 | 11.35 | 10.95 | 78.8 | 78.4 | Downstream (heuristic - verify) |
| Allinagaram | 25 | 166.5 | 94,453 | 10.0274 | 77.4781 | 10.23 | 9.83 | 77.68 | 77.28 | Off flood-path (heuristic) |
| Thuraiyur | 25 | 166.5 | 32,439 | 11.1480 | 78.5991 | 11.35 | 10.95 | 78.8 | 78.4 | Downstream (heuristic - verify) |
| Kādiganpalli | 25 | 166.5 | 22,714 | 12.5232 | 78.2086 | 12.72 | 12.32 | 78.41 | 78.01 | Downstream (heuristic - verify) |
| Krishnagiri | 25 | 166.6 | 71,323 | 12.5192 | 78.2138 | 12.72 | 12.32 | 78.41 | 78.01 | Downstream (heuristic - verify) |
| Perumpāvūr | 13 | 166.8 | 27,105 | 10.1154 | 76.4761 | 10.32 | 9.92 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Perinjanam | 13 | 166.9 | 21,012 | 10.3133 | 76.1485 | 10.51 | 10.11 | 76.35 | 75.95 | Off flood-path (heuristic) |
| Erāmala | 13 | 167.0 | 34,658 | 11.6859 | 75.5910 | 11.89 | 11.49 | 75.79 | 75.39 | Off flood-path (heuristic) |
| Badagara | 13 | 167.0 | 76,493 | 11.5978 | 75.5814 | 11.8 | 11.4 | 75.78 | 75.38 | Off flood-path (heuristic) |
| Nilakottai | 25 | 167.1 | 22,197 | 10.1650 | 77.8502 | 10.36 | 9.96 | 78.05 | 77.65 | Off flood-path (heuristic) |
| Chokkanāthapuram | 25 | 167.6 | 15,625 | 9.9921 | 77.3566 | 10.19 | 9.79 | 77.56 | 77.16 | Off flood-path (heuristic) |
| Perumbavoor | 13 | 167.8 | 28,110 | 10.1069 | 76.4737 | 10.31 | 9.91 | 76.67 | 76.27 | Off flood-path (heuristic) |
| Pappinivattom | 13 | 167.9 | 15,336 | 10.2937 | 76.1583 | 10.49 | 10.09 | 76.36 | 75.96 | Off flood-path (heuristic) |
| Peringathur | 13 | 168.0 | 40,292 | 11.7137 | 75.5860 | 11.91 | 11.51 | 75.79 | 75.39 | Off flood-path (heuristic) |
| Teni | 25 | 168.2 | 1,034,724 | 10.0112 | 77.4777 | 10.21 | 9.81 | 77.68 | 77.28 | Off flood-path (heuristic) |
| Iramallūr | 13 | 168.3 | 33,829 | 10.0619 | 76.5717 | 10.26 | 9.86 | 76.77 | 76.37 | Off flood-path (heuristic) |
| Marampilly | 13 | 168.5 | 23,272 | 10.1138 | 76.4418 | 10.31 | 9.91 | 76.64 | 76.24 | Off flood-path (heuristic) |
| Panangad | 13 | 168.7 | 15,630 | 10.2728 | 76.1748 | 10.47 | 10.07 | 76.37 | 75.97 | Off flood-path (heuristic) |
| Chengamanād | 13 | 169.6 | 29,576 | 10.1541 | 76.3416 | 10.35 | 9.95 | 76.54 | 76.14 | Off flood-path (heuristic) |
| Panoor | 13 | 169.7 | 17,438 | 11.7594 | 75.5784 | 11.96 | 11.56 | 75.78 | 75.38 | Off flood-path (heuristic) |
| Panniyannūr | 13 | 169.8 | 22,308 | 11.7486 | 75.5756 | 11.95 | 11.55 | 75.78 | 75.38 | Off flood-path (heuristic) |
| Nangavaram | 25 | 170.1 | 17,629 | 10.8692 | 78.5392 | 11.07 | 10.67 | 78.74 | 78.34 | Downstream (heuristic - verify) |
| Ammainaickanur | 25 | 170.3 | 19,257 | 10.1671 | 77.9132 | 10.37 | 9.97 | 78.11 | 77.71 | Off flood-path (heuristic) |
| Azhiyūr | 13 | 170.5 | 30,023 | 11.6935 | 75.5601 | 11.89 | 11.49 | 75.76 | 75.36 | Off flood-path (heuristic) |
| Mokēri | 13 | 170.6 | 19,684 | 11.7776 | 75.5731 | 11.98 | 11.58 | 75.77 | 75.37 | Off flood-path (heuristic) |
| Kodungallūr | 13 | 170.9 | 60,190 | 10.2326 | 76.1951 | 10.43 | 10.03 | 76.4 | 76.0 | Off flood-path (heuristic) |
| Chockli | 13 | 171.6 | 33,732 | 11.7274 | 75.5551 | 11.93 | 11.53 | 75.76 | 75.36 | Off flood-path (heuristic) |
| Vāzhakulam | 13 | 171.6 | 18,358 | 10.0938 | 76.4198 | 10.29 | 9.89 | 76.62 | 76.22 | Off flood-path (heuristic) |
| Edavilangu | 13 | 171.8 | 20,363 | 10.2403 | 76.1710 | 10.44 | 10.04 | 76.37 | 75.97 | Off flood-path (heuristic) |
| Kunigal | 19 | 171.8 | 34,155 | 13.0232 | 77.0252 | 13.22 | 12.82 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Pāttyam | 13 | 171.9 | 20,161 | 11.7930 | 75.5641 | 11.99 | 11.59 | 75.76 | 75.36 | Off flood-path (heuristic) |
| Vengola Kizhakkumbāgam | 13 | 172.0 | 32,697 | 10.0637 | 76.4761 | 10.26 | 9.86 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Kandamkunnu | 13 | 172.1 | 16,025 | 11.8695 | 75.5808 | 12.07 | 11.67 | 75.78 | 75.38 | Off flood-path (heuristic) |
| Puthenvelikara | 13 | 172.2 | 33,372 | 10.1851 | 76.2454 | 10.39 | 9.99 | 76.45 | 76.05 | Off flood-path (heuristic) |
| V.S.K.Valasai (Dindigul-Dist.) | 25 | 172.3 | 17,865 | 10.3155 | 78.1514 | 10.52 | 10.12 | 78.35 | 77.95 | Downstream (heuristic - verify) |
| Kuttuparamba | 13 | 172.5 | 29,619 | 11.8277 | 75.5659 | 12.03 | 11.63 | 75.77 | 75.37 | Off flood-path (heuristic) |
| Holenarasipura | 19 | 173.1 | 29,974 | 12.7864 | 76.2433 | 12.99 | 12.59 | 76.44 | 76.04 | Off flood-path (heuristic) |
| Manapparai | 25 | 173.3 | 40,510 | 10.6077 | 78.4258 | 10.81 | 10.41 | 78.63 | 78.23 | Downstream (heuristic - verify) |
| Mahē | 13 | 173.4 | 41,816 | 11.7017 | 75.5347 | 11.9 | 11.5 | 75.73 | 75.33 | Off flood-path (heuristic) |
| Alwaye | 13 | 173.6 | 23,703 | 10.1065 | 76.3548 | 10.31 | 9.91 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Aluva | 13 | 173.6 | 24,108 | 10.1076 | 76.3516 | 10.31 | 9.91 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Āndippatti | 25 | 174.0 | 27,287 | 9.9980 | 77.6210 | 10.2 | 9.8 | 77.82 | 77.42 | Off flood-path (heuristic) |
| Bengaluru | 19 | 174.0 | 8,495,492 | 12.9719 | 77.5937 | 13.17 | 12.77 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Kōttayam | 13 | 174.4 | 19,176 | 11.8252 | 75.5478 | 12.03 | 11.63 | 75.75 | 75.35 | Off flood-path (heuristic) |
| Moothakunnam | 13 | 174.5 | 27,458 | 10.1899 | 76.2008 | 10.39 | 9.99 | 76.4 | 76.0 | Off flood-path (heuristic) |
| Mattanur | 13 | 174.8 | 47,078 | 11.9302 | 75.5715 | 12.13 | 11.73 | 75.77 | 75.37 | Off flood-path (heuristic) |
| Chendamangalam | 13 | 174.9 | 29,326 | 10.1632 | 76.2346 | 10.36 | 9.96 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Karumālūr | 13 | 175.1 | 29,805 | 10.1329 | 76.2799 | 10.33 | 9.93 | 76.48 | 76.08 | Off flood-path (heuristic) |
| Alengād | 13 | 175.2 | 47,329 | 10.1190 | 76.3023 | 10.32 | 9.92 | 76.5 | 76.1 | Off flood-path (heuristic) |
| Mangattidam | 13 | 175.3 | 18,627 | 11.8433 | 75.5437 | 12.04 | 11.64 | 75.74 | 75.34 | Off flood-path (heuristic) |
| Katirur | 13 | 175.4 | 31,087 | 11.7849 | 75.5302 | 11.98 | 11.58 | 75.73 | 75.33 | Off flood-path (heuristic) |
| Eruvatti | 13 | 175.8 | 16,905 | 11.8062 | 75.5302 | 12.01 | 11.61 | 75.73 | 75.33 | Off flood-path (heuristic) |
| Choornikkara | 13 | 176.1 | 43,207 | 10.0879 | 76.3411 | 10.29 | 9.89 | 76.54 | 76.14 | Off flood-path (heuristic) |
| Mūvattupula | 13 | 176.1 | 29,664 | 9.9849 | 76.5773 | 10.18 | 9.78 | 76.78 | 76.38 | Off flood-path (heuristic) |
| Erannoli | 13 | 176.4 | 25,818 | 11.7691 | 75.5177 | 11.97 | 11.57 | 75.72 | 75.32 | Off flood-path (heuristic) |
| Kunnatnād | 13 | 176.5 | 22,881 | 10.0429 | 76.4241 | 10.24 | 9.84 | 76.62 | 76.22 | Off flood-path (heuristic) |
| Kadungalūr | 13 | 176.5 | 39,666 | 10.0948 | 76.3211 | 10.29 | 9.89 | 76.52 | 76.12 | Off flood-path (heuristic) |
| Vadakakarai | 13 | 176.6 | 20,571 | 10.1664 | 76.2018 | 10.37 | 9.97 | 76.4 | 76.0 | Off flood-path (heuristic) |
| Parūr | 13 | 176.6 | 31,503 | 10.1477 | 76.2300 | 10.35 | 9.95 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Muvattupuzha | 13 | 176.8 | 30,397 | 9.9799 | 76.5738 | 10.18 | 9.78 | 76.77 | 76.37 | Off flood-path (heuristic) |
| Channarāyapatna | 19 | 177.0 | 40,417 | 12.9064 | 76.3877 | 13.11 | 12.71 | 76.59 | 76.19 | Off flood-path (heuristic) |
| Edattala | 13 | 177.0 | 77,811 | 10.0564 | 76.3845 | 10.26 | 9.86 | 76.58 | 76.18 | Off flood-path (heuristic) |
| Tevāram | 25 | 177.0 | 16,079 | 9.8967 | 77.2809 | 10.1 | 9.7 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Alangad | 13 | 177.4 | 47,329 | 10.1019 | 76.2910 | 10.3 | 9.9 | 76.49 | 76.09 | Off flood-path (heuristic) |
| Patuvilāyi | 13 | 178.0 | 20,598 | 11.8656 | 75.5233 | 12.07 | 11.67 | 75.72 | 75.32 | Off flood-path (heuristic) |
| Keevallur | 13 | 178.1 | 20,440 | 11.8970 | 75.5310 | 12.1 | 11.7 | 75.73 | 75.33 | Off flood-path (heuristic) |
| Ūttangarai | 25 | 178.3 | 18,470 | 12.2671 | 78.5378 | 12.47 | 12.07 | 78.74 | 78.34 | Downstream (heuristic - verify) |
| Patiriyat | 13 | 178.5 | 18,008 | 11.8490 | 75.5147 | 12.05 | 11.65 | 75.71 | 75.31 | Off flood-path (heuristic) |
| Tellicherry | 13 | 178.6 | 97,201 | 11.7481 | 75.4929 | 11.95 | 11.55 | 75.69 | 75.29 | Off flood-path (heuristic) |
| Kottuvalli | 13 | 179.1 | 42,922 | 10.1112 | 76.2463 | 10.31 | 9.91 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Kalamassery | 13 | 179.5 | 71,038 | 10.0614 | 76.3263 | 10.26 | 9.86 | 76.53 | 76.13 | Off flood-path (heuristic) |
| Bargūr | 25 | 179.9 | 16,366 | 12.5429 | 78.3573 | 12.74 | 12.34 | 78.56 | 78.16 | Downstream (heuristic - verify) |
| Vadipatti | 25 | 180.9 | 26,830 | 10.0848 | 77.9611 | 10.28 | 9.88 | 78.16 | 77.76 | Off flood-path (heuristic) |
| Varappuzha | 13 | 181.0 | 26,750 | 10.0759 | 76.2715 | 10.28 | 9.88 | 76.47 | 76.07 | Off flood-path (heuristic) |
| Pinarāyi | 13 | 181.1 | 16,801 | 11.8049 | 75.4810 | 12.0 | 11.6 | 75.68 | 75.28 | Off flood-path (heuristic) |
| Elūr | 13 | 181.3 | 31,468 | 10.0667 | 76.2833 | 10.27 | 9.87 | 76.48 | 76.08 | Off flood-path (heuristic) |
| Thodupuzha | 13 | 181.4 | 52,045 | 9.8939 | 76.7222 | 10.09 | 9.69 | 76.92 | 76.52 | Off flood-path (heuristic) |
| Peralassery | 13 | 181.5 | 16,821 | 11.8322 | 75.4825 | 12.03 | 11.63 | 75.68 | 75.28 | Off flood-path (heuristic) |
| Cheranellūr | 13 | 182.1 | 30,594 | 10.0543 | 76.2896 | 10.25 | 9.85 | 76.49 | 76.09 | Off flood-path (heuristic) |
| Dharmadam | 13 | 182.2 | 30,804 | 11.7754 | 75.4646 | 11.98 | 11.58 | 75.66 | 75.26 | Off flood-path (heuristic) |
| Ancharakandy | 13 | 182.6 | 23,030 | 11.8841 | 75.4850 | 12.08 | 11.68 | 75.69 | 75.29 | Off flood-path (heuristic) |
| Arkalgūd | 19 | 182.6 | 16,810 | 12.7617 | 76.0603 | 12.96 | 12.56 | 76.26 | 75.86 | Off flood-path (heuristic) |
| Madikeri | 19 | 182.6 | 33,540 | 12.4260 | 75.7382 | 12.63 | 12.23 | 75.94 | 75.54 | Off flood-path (heuristic) |
| Kombai | 25 | 182.7 | 15,960 | 9.8475 | 77.2960 | 10.05 | 9.65 | 77.5 | 77.1 | Off flood-path (heuristic) |
| Nelamangala | 19 | 182.7 | 37,232 | 13.0998 | 77.3936 | 13.3 | 12.9 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Irivēri | 13 | 183.0 | 17,231 | 11.8559 | 75.4736 | 12.06 | 11.66 | 75.67 | 75.27 | Off flood-path (heuristic) |
| Kakkanad | 13 | 183.1 | 25,531 | 10.0164 | 76.3417 | 10.22 | 9.82 | 76.54 | 76.14 | Off flood-path (heuristic) |
| Usilampatti | 25 | 183.5 | 35,219 | 9.9694 | 77.7862 | 10.17 | 9.77 | 77.99 | 77.59 | Off flood-path (heuristic) |
| Kadamakudi | 13 | 183.6 | 16,295 | 10.0642 | 76.2456 | 10.26 | 9.86 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Puthencruz | 13 | 183.7 | 22,378 | 9.9773 | 76.4105 | 10.18 | 9.78 | 76.61 | 76.21 | Off flood-path (heuristic) |
| Muluppilagadu | 13 | 184.1 | 23,709 | 11.7979 | 75.4511 | 12.0 | 11.6 | 75.65 | 75.25 | Off flood-path (heuristic) |
| Vazhakkala | 13 | 184.3 | 51,242 | 10.0124 | 76.3263 | 10.21 | 9.81 | 76.53 | 76.13 | Off flood-path (heuristic) |
| Mannachanallur | 25 | 184.6 | 25,931 | 10.9099 | 78.6993 | 11.11 | 10.71 | 78.9 | 78.5 | Downstream (heuristic - verify) |
| Chinnamanūr | 25 | 184.8 | 42,305 | 9.8400 | 77.3811 | 10.04 | 9.64 | 77.58 | 77.18 | Off flood-path (heuristic) |
| Kudali | 13 | 184.9 | 15,236 | 11.9198 | 75.4722 | 12.12 | 11.72 | 75.67 | 75.27 | Off flood-path (heuristic) |
| Kadachira | 13 | 185.2 | 18,979 | 11.8369 | 75.4490 | 12.04 | 11.64 | 75.65 | 75.25 | Off flood-path (heuristic) |
| Natham | 25 | 185.3 | 23,660 | 10.2278 | 78.2297 | 10.43 | 10.03 | 78.43 | 78.03 | Downstream (heuristic - verify) |
| Kanhirode | 13 | 185.7 | 15,353 | 11.9184 | 75.4645 | 12.12 | 11.72 | 75.66 | 75.26 | Off flood-path (heuristic) |
| Bhikshāndārkovil | 25 | 186.2 | 17,257 | 10.8827 | 78.7046 | 11.08 | 10.68 | 78.9 | 78.5 | Downstream (heuristic - verify) |
| Chālakilakākara | 13 | 186.7 | 17,088 | 11.8540 | 75.4387 | 12.05 | 11.65 | 75.64 | 75.24 | Off flood-path (heuristic) |
| Sholavandan | 25 | 186.9 | 22,578 | 10.0216 | 77.9609 | 10.22 | 9.82 | 78.16 | 77.76 | Off flood-path (heuristic) |
| Narakal | 13 | 187.4 | 23,760 | 10.0383 | 76.2221 | 10.24 | 9.84 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Mulavukad | 13 | 187.5 | 21,833 | 10.0136 | 76.2631 | 10.21 | 9.81 | 76.46 | 76.06 | Off flood-path (heuristic) |
| Uttamapālaiyam | 25 | 187.5 | 29,050 | 9.8070 | 77.3272 | 10.01 | 9.61 | 77.53 | 77.13 | Off flood-path (heuristic) |
| Chelora | 13 | 187.7 | 20,952 | 11.8949 | 75.4396 | 12.09 | 11.69 | 75.64 | 75.24 | Off flood-path (heuristic) |
| Yelahanka | 19 | 187.8 | 116,447 | 13.1007 | 77.5963 | 13.3 | 12.9 | 77.8 | 77.4 | Off flood-path (heuristic) |
| Munderi | 13 | 188.0 | 21,676 | 11.9303 | 75.4455 | 12.13 | 11.73 | 75.65 | 75.25 | Off flood-path (heuristic) |
| Tiruchirappalli | 25 | 188.2 | 1,022,518 | 10.8155 | 78.6965 | 11.02 | 10.62 | 78.9 | 78.5 | Downstream (heuristic - verify) |
| Thottada | 13 | 188.2 | 40,818 | 11.8385 | 75.4208 | 12.04 | 11.64 | 75.62 | 75.22 | Off flood-path (heuristic) |
| Elamkunnapuzha | 13 | 188.5 | 26,997 | 10.0267 | 76.2223 | 10.23 | 9.83 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Thiruvankulam | 13 | 188.8 | 23,160 | 9.9468 | 76.3666 | 10.15 | 9.75 | 76.57 | 76.17 | Off flood-path (heuristic) |
| Elayavur | 13 | 190.4 | 33,853 | 11.8892 | 75.4124 | 12.09 | 11.69 | 75.61 | 75.21 | Off flood-path (heuristic) |
| Varam | 13 | 190.6 | 17,008 | 11.8996 | 75.4132 | 12.1 | 11.7 | 75.61 | 75.21 | Off flood-path (heuristic) |
| Elumalai | 25 | 190.8 | 15,746 | 9.8650 | 77.6992 | 10.07 | 9.67 | 77.9 | 77.5 | Off flood-path (heuristic) |
| Tripunittura | 13 | 190.8 | 69,390 | 9.9428 | 76.3333 | 10.14 | 9.74 | 76.53 | 76.13 | Off flood-path (heuristic) |
| Vadakkanandal | 25 | 190.9 | 23,034 | 11.7817 | 78.8354 | 11.98 | 11.58 | 79.04 | 78.64 | Downstream (heuristic - verify) |
| Piravam | 13 | 191.4 | 28,254 | 9.8667 | 76.5000 | 10.07 | 9.67 | 76.7 | 76.3 | Off flood-path (heuristic) |
| Mālūr | 19 | 191.8 | 40,050 | 13.0032 | 77.9380 | 13.2 | 12.8 | 78.14 | 77.74 | Off flood-path (heuristic) |
| Kanayannur | 13 | 191.8 | 851,406 | 9.9667 | 76.2667 | 10.17 | 9.77 | 76.47 | 76.07 | Off flood-path (heuristic) |
| Maradu | 13 | 191.9 | 44,704 | 9.9365 | 76.3238 | 10.14 | 9.74 | 76.52 | 76.12 | Off flood-path (heuristic) |
| Hoskote | 19 | 192.0 | 56,980 | 13.0707 | 77.7981 | 13.27 | 12.87 | 78.0 | 77.6 | Off flood-path (heuristic) |
| Kolaccheri | 13 | 192.4 | 17,095 | 11.9763 | 75.4167 | 12.18 | 11.78 | 75.62 | 75.22 | Off flood-path (heuristic) |
| Mulamthuruthy | 13 | 192.6 | 25,852 | 9.9003 | 76.3870 | 10.1 | 9.7 | 76.59 | 76.19 | Off flood-path (heuristic) |
| Vypīn | 13 | 192.7 | 23,717 | 9.9667 | 76.2500 | 10.17 | 9.77 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Chinna Salem | 25 | 192.9 | 25,106 | 11.6342 | 78.8741 | 11.83 | 11.43 | 79.07 | 78.67 | Downstream (heuristic - verify) |
| Puzhathi | 13 | 193.1 | 35,212 | 11.9011 | 75.3892 | 12.1 | 11.7 | 75.59 | 75.19 | Off flood-path (heuristic) |
| Pāppākurichchi | 25 | 193.5 | 24,023 | 10.8137 | 78.7481 | 11.01 | 10.61 | 78.95 | 78.55 | Downstream (heuristic - verify) |
| Ellakkudi | 25 | 194.0 | 16,244 | 10.8060 | 78.7503 | 11.01 | 10.61 | 78.95 | 78.55 | Downstream (heuristic - verify) |
| Tirupattur | 25 | 194.5 | 64,125 | 12.4924 | 78.5680 | 12.69 | 12.29 | 78.77 | 78.37 | Downstream (heuristic - verify) |
| Pāchchal | 25 | 194.6 | 16,789 | 12.5112 | 78.5552 | 12.71 | 12.31 | 78.76 | 78.36 | Downstream (heuristic - verify) |
| Kuppam | 02 | 194.6 | 21,963 | 12.7493 | 78.3419 | 12.95 | 12.55 | 78.54 | 78.14 | Downstream (heuristic - verify) |
| Manakunnam | 13 | 194.7 | 39,538 | 9.8857 | 76.3733 | 10.09 | 9.69 | 76.57 | 76.17 | Off flood-path (heuristic) |
| Kochi | 13 | 194.8 | 633,553 | 9.9399 | 76.2602 | 10.14 | 9.74 | 76.46 | 76.06 | Off flood-path (heuristic) |
| Cumbum | 25 | 194.8 | 68,090 | 9.7365 | 77.2847 | 9.94 | 9.54 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Kāmayakkavundanpatti | 25 | 195.0 | 16,134 | 9.7386 | 77.3200 | 9.94 | 9.54 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Kurumathur | 13 | 195.1 | 18,641 | 12.0397 | 75.4114 | 12.24 | 11.84 | 75.61 | 75.21 | Off flood-path (heuristic) |
| Perambalur | 25 | 195.3 | 49,648 | 11.2333 | 78.8833 | 11.43 | 11.03 | 79.08 | 78.68 | Downstream (heuristic - verify) |
| Kumbalam | 13 | 195.5 | 29,193 | 9.9063 | 76.3113 | 10.11 | 9.71 | 76.51 | 76.11 | Off flood-path (heuristic) |
| Kannur | 13 | 195.6 | 62,836 | 11.8675 | 75.3576 | 12.07 | 11.67 | 75.56 | 75.16 | Off flood-path (heuristic) |
| Pallikunnu | 13 | 196.3 | 27,820 | 11.8899 | 75.3565 | 12.09 | 11.69 | 75.56 | 75.16 | Off flood-path (heuristic) |
| Chirakkal | 13 | 196.4 | 45,601 | 11.9126 | 75.3610 | 12.11 | 11.71 | 75.56 | 75.16 | Off flood-path (heuristic) |
| Tiruverumbūr | 25 | 196.4 | 23,156 | 10.7937 | 78.7690 | 10.99 | 10.59 | 78.97 | 78.57 | Downstream (heuristic - verify) |
| Arukutti | 13 | 197.7 | 17,944 | 9.8667 | 76.3500 | 10.07 | 9.67 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Kalliyasshēri | 13 | 197.9 | 31,122 | 11.9755 | 75.3645 | 12.18 | 11.78 | 75.56 | 75.16 | Off flood-path (heuristic) |
| Lalgudi | 25 | 198.3 | 23,740 | 10.8742 | 78.8194 | 11.07 | 10.67 | 79.02 | 78.62 | Downstream (heuristic - verify) |
| Paravai | 25 | 198.3 | 20,042 | 9.9645 | 78.0667 | 10.16 | 9.76 | 78.27 | 77.87 | Off flood-path (heuristic) |
| Koothappar | 25 | 198.6 | 15,943 | 10.7971 | 78.7923 | 11.0 | 10.6 | 78.99 | 78.59 | Downstream (heuristic - verify) |
| Navalpattu | 25 | 199.1 | 16,788 | 10.7505 | 78.7763 | 10.95 | 10.55 | 78.98 | 78.58 | Downstream (heuristic - verify) |
| Azhikkōd | 13 | 199.3 | 25,195 | 11.9199 | 75.3355 | 12.12 | 11.72 | 75.54 | 75.14 | Off flood-path (heuristic) |
| Aroor | 13 | 199.5 | 39,214 | 9.8694 | 76.3050 | 10.07 | 9.67 | 76.5 | 76.1 | Off flood-path (heuristic) |
| Kumbalangy | 13 | 199.5 | 42,367 | 9.8798 | 76.2835 | 10.08 | 9.68 | 76.48 | 76.08 | Off flood-path (heuristic) |
| Pāppinisshēri | 13 | 199.8 | 35,134 | 11.9566 | 75.3403 | 12.16 | 11.76 | 75.54 | 75.14 | Off flood-path (heuristic) |

## Idukki Dam (Kerala)
Dam coordinates: 9.84, 76.97

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Erāttupetta | 13 | 26.9 | 34,814 | 9.6875 | 76.7789 | 9.89 | 9.49 | 76.98 | 76.58 | Downstream (heuristic - verify) |
| Thodupuzha | 13 | 27.8 | 52,045 | 9.8939 | 76.7222 | 10.09 | 9.69 | 76.92 | 76.52 | Downstream (heuristic - verify) |
| Munnar | 13 | 29.4 | 68,000 | 10.0882 | 77.0624 | 10.29 | 9.89 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Palai | 13 | 34.4 | 22,056 | 9.7131 | 76.6833 | 9.91 | 9.51 | 76.88 | 76.48 | Downstream (heuristic - verify) |
| Tevāram | 25 | 34.6 | 16,079 | 9.8967 | 77.2809 | 10.1 | 9.7 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Gudalur | 25 | 35.5 | 47,419 | 9.6783 | 77.2495 | 9.88 | 9.48 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Kombai | 25 | 35.7 | 15,960 | 9.8475 | 77.2960 | 10.05 | 9.65 | 77.5 | 77.1 | Off flood-path (heuristic) |
| Cumbum | 25 | 36.4 | 68,090 | 9.7365 | 77.2847 | 9.94 | 9.54 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Uttamapālaiyam | 25 | 39.3 | 29,050 | 9.8070 | 77.3272 | 10.01 | 9.61 | 77.53 | 77.13 | Off flood-path (heuristic) |
| Kāmayakkavundanpatti | 25 | 40.0 | 16,134 | 9.7386 | 77.3200 | 9.94 | 9.54 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Kuttampuzha | 13 | 43.0 | 25,436 | 10.1503 | 76.7354 | 10.35 | 9.95 | 76.94 | 76.54 | Off flood-path (heuristic) |
| Kotamangalam | 13 | 45.0 | 38,837 | 10.0643 | 76.6284 | 10.26 | 9.86 | 76.83 | 76.43 | Downstream (heuristic - verify) |
| Chinnamanūr | 25 | 45.0 | 42,305 | 9.8400 | 77.3811 | 10.04 | 9.64 | 77.58 | 77.18 | Off flood-path (heuristic) |
| Chokkanāthapuram | 25 | 45.6 | 15,625 | 9.9921 | 77.3566 | 10.19 | 9.79 | 77.56 | 77.16 | Off flood-path (heuristic) |
| Bodināyakkanūr | 25 | 45.8 | 75,680 | 10.0117 | 77.3498 | 10.21 | 9.81 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Mūvattupula | 13 | 45.9 | 29,664 | 9.9849 | 76.5773 | 10.18 | 9.78 | 76.78 | 76.38 | Downstream (heuristic - verify) |
| Muvattupuzha | 13 | 46.1 | 30,397 | 9.9799 | 76.5738 | 10.18 | 9.78 | 76.77 | 76.37 | Downstream (heuristic - verify) |
| Ettumanoor | 13 | 47.7 | 26,993 | 9.6700 | 76.5700 | 9.87 | 9.47 | 76.77 | 76.37 | Downstream (heuristic - verify) |
| Ettumānūr | 13 | 48.9 | 40,438 | 9.6690 | 76.5592 | 9.87 | 9.47 | 76.76 | 76.36 | Downstream (heuristic - verify) |
| Iramallūr | 13 | 50.1 | 33,829 | 10.0619 | 76.5717 | 10.26 | 9.86 | 76.77 | 76.37 | Downstream (heuristic - verify) |
| Piravam | 13 | 51.6 | 28,254 | 9.8667 | 76.5000 | 10.07 | 9.67 | 76.7 | 76.3 | Downstream (heuristic - verify) |
| Vijayapuram | 13 | 52.7 | 29,248 | 9.5912 | 76.5612 | 9.79 | 9.39 | 76.76 | 76.36 | Downstream (heuristic - verify) |
| Marayur | 13 | 52.9 | 25,000 | 10.2764 | 77.1620 | 10.48 | 10.08 | 77.36 | 76.96 | Off flood-path (heuristic) |
| Puthuppally | 13 | 53.5 | 29,635 | 9.5575 | 76.5748 | 9.76 | 9.36 | 76.77 | 76.37 | Downstream (heuristic - verify) |
| Perumbaikad | 13 | 54.0 | 42,839 | 9.6183 | 76.5313 | 9.82 | 9.42 | 76.73 | 76.33 | Downstream (heuristic - verify) |
| Valparai | 25 | 54.2 | 90,353 | 10.3269 | 76.9512 | 10.53 | 10.13 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Kottayam | 13 | 56.7 | 55,374 | 9.5869 | 76.5213 | 9.79 | 9.39 | 76.72 | 76.32 | Downstream (heuristic - verify) |
| Aymanam | 13 | 57.6 | 34,470 | 9.6068 | 76.5006 | 9.81 | 9.41 | 76.7 | 76.3 | Downstream (heuristic - verify) |
| Panachikkad | 13 | 58.4 | 43,595 | 9.5297 | 76.5406 | 9.73 | 9.33 | 76.74 | 76.34 | Downstream (heuristic - verify) |
| Teni | 25 | 58.8 | 1,034,724 | 10.0112 | 77.4777 | 10.21 | 9.81 | 77.68 | 77.28 | Off flood-path (heuristic) |
| Allinagaram | 25 | 59.4 | 94,453 | 10.0274 | 77.4781 | 10.23 | 9.83 | 77.68 | 77.28 | Off flood-path (heuristic) |
| Vengola Kizhakkumbāgam | 13 | 59.5 | 32,697 | 10.0637 | 76.4761 | 10.26 | 9.86 | 76.68 | 76.28 | Downstream (heuristic - verify) |
| Nattakam | 13 | 59.8 | 38,599 | 9.5453 | 76.5141 | 9.75 | 9.35 | 76.71 | 76.31 | Downstream (heuristic - verify) |
| Chengalam | 13 | 61.3 | 16,111 | 9.5966 | 76.4678 | 9.8 | 9.4 | 76.67 | 76.27 | Downstream (heuristic - verify) |
| Perumbavoor | 13 | 61.9 | 28,110 | 10.1069 | 76.4737 | 10.31 | 9.91 | 76.67 | 76.27 | Downstream (heuristic - verify) |
| Perumpāvūr | 13 | 62.2 | 27,105 | 10.1154 | 76.4761 | 10.32 | 9.92 | 76.68 | 76.28 | Downstream (heuristic - verify) |
| Paippad | 13 | 62.6 | 21,338 | 9.4246 | 76.5848 | 9.62 | 9.22 | 76.78 | 76.38 | Downstream (heuristic - verify) |
| Puthencruz | 13 | 63.2 | 22,378 | 9.9773 | 76.4105 | 10.18 | 9.78 | 76.61 | 76.21 | Downstream (heuristic - verify) |
| Koovappady | 13 | 63.6 | 29,339 | 10.1553 | 76.4854 | 10.36 | 9.96 | 76.69 | 76.29 | Downstream (heuristic - verify) |
| Vaikam | 13 | 63.7 | 23,234 | 9.7486 | 76.3964 | 9.95 | 9.55 | 76.6 | 76.2 | Downstream (heuristic - verify) |
| Kunnatnād | 13 | 63.9 | 22,881 | 10.0429 | 76.4241 | 10.24 | 9.84 | 76.62 | 76.22 | Downstream (heuristic - verify) |
| Mulamthuruthy | 13 | 64.2 | 25,852 | 9.9003 | 76.3870 | 10.1 | 9.7 | 76.59 | 76.19 | Downstream (heuristic - verify) |
| Changanācheri | 13 | 65.0 | 51,430 | 9.4420 | 76.5360 | 9.64 | 9.24 | 76.74 | 76.34 | Downstream (heuristic - verify) |
| Chelamartam | 13 | 65.2 | 16,844 | 10.1371 | 76.4570 | 10.34 | 9.94 | 76.66 | 76.26 | Downstream (heuristic - verify) |
| Marampilly | 13 | 65.4 | 23,272 | 10.1138 | 76.4418 | 10.31 | 9.91 | 76.64 | 76.24 | Downstream (heuristic - verify) |
| Manakunnam | 13 | 65.6 | 39,538 | 9.8857 | 76.3733 | 10.09 | 9.69 | 76.57 | 76.17 | Downstream (heuristic - verify) |
| Vāzhakulam | 13 | 66.5 | 18,358 | 10.0938 | 76.4198 | 10.29 | 9.89 | 76.62 | 76.22 | Downstream (heuristic - verify) |
| Tiruvalla | 13 | 66.9 | 57,223 | 9.3816 | 76.5749 | 9.58 | 9.18 | 76.77 | 76.37 | Downstream (heuristic - verify) |
| Pathanāmthitta | 13 | 67.0 | 38,285 | 9.2667 | 76.7833 | 9.47 | 9.07 | 76.98 | 76.58 | Off flood-path (heuristic) |
| Thiruvankulam | 13 | 67.2 | 23,160 | 9.9468 | 76.3666 | 10.15 | 9.75 | 76.57 | 76.17 | Downstream (heuristic - verify) |
| Thanneermukkom | 13 | 67.5 | 31,525 | 9.6634 | 76.3807 | 9.86 | 9.46 | 76.58 | 76.18 | Downstream (heuristic - verify) |
| Pallipuram | 13 | 67.8 | 28,276 | 9.7550 | 76.3572 | 9.96 | 9.56 | 76.56 | 76.16 | Downstream (heuristic - verify) |
| Arukutti | 13 | 68.0 | 17,944 | 9.8667 | 76.3500 | 10.07 | 9.67 | 76.55 | 76.15 | Downstream (heuristic - verify) |
| Edattala | 13 | 68.5 | 77,811 | 10.0564 | 76.3845 | 10.26 | 9.86 | 76.58 | 76.18 | Downstream (heuristic - verify) |
| Thaikkattussery | 13 | 69.0 | 20,874 | 9.7715 | 76.3439 | 9.97 | 9.57 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Kokōtamangalam South | 13 | 69.3 | 17,047 | 9.6795 | 76.3589 | 9.88 | 9.48 | 76.56 | 76.16 | Downstream (heuristic - verify) |
| Srīkandamangalam | 13 | 69.4 | 23,681 | 9.6594 | 76.3633 | 9.86 | 9.46 | 76.56 | 76.16 | Downstream (heuristic - verify) |
| Kutiatodu | 13 | 69.9 | 23,669 | 9.8000 | 76.3333 | 10.0 | 9.6 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Martūru | 13 | 70.0 | 18,890 | 10.1717 | 76.4264 | 10.37 | 9.97 | 76.63 | 76.23 | Downstream (heuristic - verify) |
| Chengannūr | 13 | 70.1 | 25,043 | 9.3157 | 76.6151 | 9.52 | 9.12 | 76.82 | 76.42 | Downstream (heuristic - verify) |
| Periyakulam | 25 | 70.3 | 42,976 | 10.1227 | 77.5437 | 10.32 | 9.92 | 77.74 | 77.34 | Off flood-path (heuristic) |
| Vayalār | 13 | 70.6 | 25,094 | 9.7116 | 76.3389 | 9.91 | 9.51 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Tripunittura | 13 | 70.7 | 69,390 | 9.9428 | 76.3333 | 10.14 | 9.74 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Shertallai | 13 | 71.1 | 45,474 | 9.6858 | 76.3400 | 9.89 | 9.49 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Nedumbassery | 13 | 71.5 | 29,706 | 10.1565 | 76.4017 | 10.36 | 9.96 | 76.6 | 76.2 | Downstream (heuristic - verify) |
| Muhamma | 13 | 71.5 | 25,861 | 9.6089 | 76.3608 | 9.81 | 9.41 | 76.56 | 76.16 | Downstream (heuristic - verify) |
| Kakkanad | 13 | 71.6 | 25,531 | 10.0164 | 76.3417 | 10.22 | 9.82 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Maradu | 13 | 71.6 | 44,704 | 9.9365 | 76.3238 | 10.14 | 9.74 | 76.52 | 76.12 | Downstream (heuristic - verify) |
| Cherthala | 13 | 71.6 | 45,827 | 9.6844 | 76.3356 | 9.88 | 9.48 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Kodaikānāl | 25 | 72.1 | 36,501 | 10.2393 | 77.4893 | 10.44 | 10.04 | 77.69 | 77.29 | Off flood-path (heuristic) |
| Kumbalam | 13 | 72.5 | 29,193 | 9.9063 | 76.3113 | 10.11 | 9.71 | 76.51 | 76.11 | Downstream (heuristic - verify) |
| Aroor | 13 | 72.9 | 39,214 | 9.8694 | 76.3050 | 10.07 | 9.67 | 76.5 | 76.1 | Downstream (heuristic - verify) |
| Vazhakkala | 13 | 73.1 | 51,242 | 10.0124 | 76.3263 | 10.21 | 9.81 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Kodamthuruth | 13 | 73.4 | 21,295 | 9.8006 | 76.3015 | 10.0 | 9.6 | 76.5 | 76.1 | Downstream (heuristic - verify) |
| Āndippatti | 25 | 73.4 | 27,287 | 9.9980 | 77.6210 | 10.2 | 9.8 | 77.82 | 77.42 | Off flood-path (heuristic) |
| Ezhupunna | 13 | 73.5 | 27,528 | 9.8211 | 76.2998 | 10.02 | 9.62 | 76.5 | 76.1 | Downstream (heuristic - verify) |
| Alwaye | 13 | 73.6 | 23,703 | 10.1065 | 76.3548 | 10.31 | 9.91 | 76.55 | 76.15 | Downstream (heuristic - verify) |
| Settūr | 25 | 73.8 | 20,228 | 9.4056 | 77.4784 | 9.61 | 9.21 | 77.68 | 77.28 | Off flood-path (heuristic) |
| Mannanchōri | 13 | 73.9 | 32,139 | 9.5722 | 76.3525 | 9.77 | 9.37 | 76.55 | 76.15 | Downstream (heuristic - verify) |
| Aluva | 13 | 74.0 | 24,108 | 10.1076 | 76.3516 | 10.31 | 9.91 | 76.55 | 76.15 | Downstream (heuristic - verify) |
| Choornikkara | 13 | 74.2 | 43,207 | 10.0879 | 76.3411 | 10.29 | 9.89 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Sivagiri | 25 | 74.6 | 23,040 | 9.3446 | 77.4291 | 9.54 | 9.14 | 77.63 | 77.23 | Off flood-path (heuristic) |
| Kalamassery | 13 | 74.7 | 71,038 | 10.0614 | 76.3263 | 10.26 | 9.86 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Angamāli | 13 | 74.7 | 34,399 | 10.1905 | 76.3879 | 10.39 | 9.99 | 76.59 | 76.19 | Downstream (heuristic - verify) |
| Kumbalangy | 13 | 75.3 | 42,367 | 9.8798 | 76.2835 | 10.08 | 9.68 | 76.48 | 76.08 | Downstream (heuristic - verify) |
| Settiyārpatti | 25 | 75.9 | 17,520 | 9.3935 | 77.4935 | 9.59 | 9.19 | 77.69 | 77.29 | Off flood-path (heuristic) |
| Komalapuram | 13 | 76.4 | 47,126 | 9.5419 | 76.3424 | 9.74 | 9.34 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Kadungalūr | 13 | 76.5 | 39,666 | 10.0948 | 76.3211 | 10.29 | 9.89 | 76.52 | 76.12 | Downstream (heuristic - verify) |
| Kalavoor | 13 | 76.5 | 29,564 | 9.5705 | 76.3276 | 9.77 | 9.37 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Vathirairuppu | 25 | 76.8 | 16,784 | 9.6353 | 77.6389 | 9.84 | 9.44 | 77.84 | 77.44 | Off flood-path (heuristic) |
| Rajapalayam | 25 | 77.1 | 130,442 | 9.4530 | 77.5533 | 9.65 | 9.25 | 77.75 | 77.35 | Off flood-path (heuristic) |
| Chengamanād | 13 | 77.2 | 29,576 | 10.1541 | 76.3416 | 10.35 | 9.95 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Kottur | 25 | 77.5 | 26,627 | 10.5365 | 76.9803 | 10.74 | 10.34 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Mamsapuram | 25 | 77.6 | 18,635 | 9.4996 | 77.5879 | 9.7 | 9.3 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Mēppādam | 13 | 77.6 | 17,067 | 9.3242 | 76.4934 | 9.52 | 9.12 | 76.69 | 76.29 | Downstream (heuristic - verify) |
| Cheranellūr | 13 | 78.2 | 30,594 | 10.0543 | 76.2896 | 10.25 | 9.85 | 76.49 | 76.09 | Downstream (heuristic - verify) |
| Kanayannur | 13 | 78.3 | 851,406 | 9.9667 | 76.2667 | 10.17 | 9.77 | 76.47 | 76.07 | Downstream (heuristic - verify) |
| Kochi | 13 | 78.5 | 633,553 | 9.9399 | 76.2602 | 10.14 | 9.74 | 76.46 | 76.06 | Downstream (heuristic - verify) |
| Pathirappally | 13 | 78.7 | 27,445 | 9.5354 | 76.3221 | 9.74 | 9.34 | 76.52 | 76.12 | Downstream (heuristic - verify) |
| Māvelikara | 13 | 78.9 | 28,300 | 9.2593 | 76.5564 | 9.46 | 9.06 | 76.76 | 76.36 | Downstream (heuristic - verify) |
| Elūr | 13 | 79.3 | 31,468 | 10.0667 | 76.2833 | 10.27 | 9.87 | 76.48 | 76.08 | Downstream (heuristic - verify) |
| Alengād | 13 | 79.4 | 47,329 | 10.1190 | 76.3023 | 10.32 | 9.92 | 76.5 | 76.1 | Downstream (heuristic - verify) |
| Mulavukad | 13 | 79.8 | 21,833 | 10.0136 | 76.2631 | 10.21 | 9.81 | 76.46 | 76.06 | Downstream (heuristic - verify) |
| Alangad | 13 | 79.9 | 47,329 | 10.1019 | 76.2910 | 10.3 | 9.9 | 76.49 | 76.09 | Downstream (heuristic - verify) |
| Elumalai | 25 | 79.9 | 15,746 | 9.8650 | 77.6992 | 10.07 | 9.67 | 77.9 | 77.5 | Off flood-path (heuristic) |
| Vypīn | 13 | 80.1 | 23,717 | 9.9667 | 76.2500 | 10.17 | 9.77 | 76.45 | 76.05 | Downstream (heuristic - verify) |
| Adūr | 13 | 80.4 | 29,652 | 9.1560 | 76.7319 | 9.36 | 8.96 | 76.93 | 76.53 | Off flood-path (heuristic) |
| Vettaikkaranpudur | 25 | 80.5 | 18,128 | 10.5621 | 76.9130 | 10.76 | 10.36 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Alappuzha | 13 | 80.6 | 240,991 | 9.4900 | 76.3264 | 9.69 | 9.29 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Varappuzha | 13 | 80.9 | 26,750 | 10.0759 | 76.2715 | 10.28 | 9.88 | 76.47 | 76.07 | Downstream (heuristic - verify) |
| Devadanapatti | 25 | 81.3 | 19,285 | 10.1467 | 77.6439 | 10.35 | 9.95 | 77.84 | 77.44 | Off flood-path (heuristic) |
| Srivilliputhur | 25 | 81.3 | 75,396 | 9.5127 | 77.6337 | 9.71 | 9.31 | 77.83 | 77.43 | Off flood-path (heuristic) |
| Karumālūr | 13 | 82.3 | 29,805 | 10.1329 | 76.2799 | 10.33 | 9.93 | 76.48 | 76.08 | Downstream (heuristic - verify) |
| Vāsudevanallūr | 25 | 82.3 | 21,361 | 9.2417 | 77.4118 | 9.44 | 9.04 | 77.61 | 77.21 | Off flood-path (heuristic) |
| Anaimalai | 25 | 82.7 | 17,208 | 10.5830 | 76.9344 | 10.78 | 10.38 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Koratti | 13 | 83.0 | 17,618 | 10.2660 | 76.3477 | 10.47 | 10.07 | 76.55 | 76.15 | Downstream (heuristic - verify) |
| Kadamakudi | 13 | 83.2 | 16,295 | 10.0642 | 76.2456 | 10.26 | 9.86 | 76.45 | 76.05 | Downstream (heuristic - verify) |
| Kallūr Tekkumuri | 13 | 83.6 | 17,480 | 10.2401 | 76.3236 | 10.44 | 10.04 | 76.52 | 76.12 | Downstream (heuristic - verify) |
| Haripād | 13 | 83.8 | 15,588 | 9.2836 | 76.4552 | 9.48 | 9.08 | 76.66 | 76.26 | Downstream (heuristic - verify) |
| Kallūr Vadakummuri | 13 | 84.0 | 25,259 | 10.2532 | 76.3281 | 10.45 | 10.05 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Elamkunnapuzha | 13 | 84.5 | 26,997 | 10.0267 | 76.2223 | 10.23 | 9.83 | 76.42 | 76.02 | Downstream (heuristic - verify) |
| Kottuvalli | 13 | 84.8 | 42,922 | 10.1112 | 76.2463 | 10.31 | 9.91 | 76.45 | 76.05 | Downstream (heuristic - verify) |
| Narakal | 13 | 84.8 | 23,760 | 10.0383 | 76.2221 | 10.24 | 9.84 | 76.42 | 76.02 | Downstream (heuristic - verify) |
| Sundakkāmpālaiyam | 25 | 85.1 | 16,459 | 10.5666 | 77.2135 | 10.77 | 10.37 | 77.41 | 77.01 | Off flood-path (heuristic) |
| Bharanikāvu Tekku | 13 | 85.6 | 15,922 | 9.1849 | 76.5608 | 9.38 | 8.98 | 76.76 | 76.36 | Downstream (heuristic - verify) |
| Kizhake Chālakudi | 13 | 86.1 | 49,525 | 10.3007 | 76.3376 | 10.5 | 10.1 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Kattanam | 13 | 86.2 | 19,764 | 9.1761 | 76.5632 | 9.38 | 8.98 | 76.76 | 76.36 | Downstream (heuristic - verify) |
| Karthikappally | 13 | 86.4 | 19,021 | 9.2568 | 76.4487 | 9.46 | 9.06 | 76.65 | 76.25 | Downstream (heuristic - verify) |
| Kumārapuram | 13 | 86.5 | 26,943 | 9.2708 | 76.4326 | 9.47 | 9.07 | 76.63 | 76.23 | Downstream (heuristic - verify) |
| Cheppad | 13 | 86.6 | 20,052 | 9.2346 | 76.4733 | 9.43 | 9.03 | 76.67 | 76.27 | Downstream (heuristic - verify) |
| Puliyankudi | 25 | 87.6 | 66,034 | 9.1749 | 77.3980 | 9.37 | 8.97 | 77.6 | 77.2 | Off flood-path (heuristic) |
| Parūr | 13 | 88.0 | 31,503 | 10.1477 | 76.2300 | 10.35 | 9.95 | 76.43 | 76.03 | Downstream (heuristic - verify) |
| Puthenvelikara | 13 | 88.1 | 33,372 | 10.1851 | 76.2454 | 10.39 | 9.99 | 76.45 | 76.05 | Downstream (heuristic - verify) |
| Chendamangalam | 13 | 88.2 | 29,326 | 10.1632 | 76.2346 | 10.36 | 9.96 | 76.43 | 76.03 | Downstream (heuristic - verify) |
| Udumalaippettai | 25 | 88.6 | 61,133 | 10.5881 | 77.2478 | 10.79 | 10.39 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Sūleswaranpatti | 25 | 88.9 | 20,104 | 10.6388 | 77.0084 | 10.84 | 10.44 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Muthukulam | 13 | 89.1 | 20,740 | 9.2168 | 76.4592 | 9.42 | 9.02 | 76.66 | 76.26 | Downstream (heuristic - verify) |
| Kayamkulam | 13 | 89.5 | 68,634 | 9.1817 | 76.5009 | 9.38 | 8.98 | 76.7 | 76.3 | Downstream (heuristic - verify) |
| Pattiyūrgrāmam | 13 | 89.8 | 23,460 | 9.1774 | 76.5011 | 9.38 | 8.98 | 76.7 | 76.3 | Downstream (heuristic - verify) |
| Periyakottai | 25 | 90.1 | 17,356 | 10.5909 | 77.2797 | 10.79 | 10.39 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Ūttukuli | 25 | 90.3 | 16,354 | 10.6519 | 76.9778 | 10.85 | 10.45 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Usilampatti | 25 | 90.6 | 35,219 | 9.9694 | 77.7862 | 10.17 | 9.77 | 77.99 | 77.59 | Off flood-path (heuristic) |
| Palani | 25 | 90.8 | 70,467 | 10.4503 | 77.5209 | 10.65 | 10.25 | 77.72 | 77.32 | Off flood-path (heuristic) |
| Krishnāpuram | 13 | 90.8 | 26,705 | 9.1521 | 76.5234 | 9.35 | 8.95 | 76.72 | 76.32 | Downstream (heuristic - verify) |
| Madattukkulam | 25 | 90.9 | 20,620 | 10.5587 | 77.3660 | 10.76 | 10.36 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Pollachi | 25 | 91.1 | 90,180 | 10.6583 | 77.0085 | 10.86 | 10.46 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Punalūr | 13 | 91.4 | 47,263 | 9.0196 | 76.9226 | 9.22 | 8.82 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Sivagirippatti | 25 | 91.5 | 17,306 | 10.4502 | 77.5303 | 10.65 | 10.25 | 77.73 | 77.33 | Off flood-path (heuristic) |
| Vadakakarai | 13 | 91.6 | 20,571 | 10.1664 | 76.2018 | 10.37 | 9.97 | 76.4 | 76.0 | Downstream (heuristic - verify) |
| Kandalloor | 13 | 91.9 | 19,925 | 9.1756 | 76.4713 | 9.38 | 8.98 | 76.67 | 76.27 | Downstream (heuristic - verify) |
| Moothakunnam | 13 | 92.8 | 27,458 | 10.1899 | 76.2008 | 10.39 | 9.99 | 76.4 | 76.0 | Downstream (heuristic - verify) |
| Ayakudi | 25 | 93.0 | 27,156 | 10.4499 | 77.5520 | 10.65 | 10.25 | 77.75 | 77.35 | Off flood-path (heuristic) |
| Ochira | 13 | 93.1 | 28,412 | 9.1348 | 76.5117 | 9.33 | 8.93 | 76.71 | 76.31 | Downstream (heuristic - verify) |
| Vattalkundu | 25 | 93.5 | 22,928 | 10.1607 | 77.7588 | 10.36 | 9.96 | 77.96 | 77.56 | Off flood-path (heuristic) |
| Kadayanallur | 25 | 94.5 | 90,364 | 9.0728 | 77.3415 | 9.27 | 8.87 | 77.54 | 77.14 | Off flood-path (heuristic) |
| Karungappalli | 13 | 94.6 | 25,336 | 9.1042 | 76.5370 | 9.3 | 8.9 | 76.74 | 76.34 | Downstream (heuristic - verify) |
| Vadakarai Kīl Pidāgai | 25 | 95.0 | 20,821 | 9.0401 | 77.2741 | 9.24 | 8.84 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Thodiyoor | 13 | 95.0 | 25,884 | 9.0780 | 76.5777 | 9.28 | 8.88 | 76.78 | 76.38 | Off flood-path (heuristic) |
| Kodungallūr | 13 | 95.4 | 60,190 | 10.2326 | 76.1951 | 10.43 | 10.03 | 76.4 | 76.0 | Downstream (heuristic - verify) |
| Kottārakara | 13 | 95.5 | 29,788 | 9.0036 | 76.7738 | 9.2 | 8.8 | 76.97 | 76.57 | Off flood-path (heuristic) |
| Kulasēkarapuram | 13 | 96.2 | 26,907 | 9.0912 | 76.5303 | 9.29 | 8.89 | 76.73 | 76.33 | Downstream (heuristic - verify) |
| Thekkumkara | 13 | 96.3 | 15,258 | 10.2819 | 76.2132 | 10.48 | 10.08 | 76.41 | 76.01 | Downstream (heuristic - verify) |
| Sankarankovil | 25 | 97.3 | 57,277 | 9.1705 | 77.5411 | 9.37 | 8.97 | 77.74 | 77.34 | Off flood-path (heuristic) |
| Edavilangu | 13 | 98.2 | 20,363 | 10.2403 | 76.1710 | 10.44 | 10.04 | 76.37 | 75.97 | Downstream (heuristic - verify) |
| Ādanāttutekkumuri Kizhakku | 13 | 98.3 | 22,250 | 9.0791 | 76.5137 | 9.28 | 8.88 | 76.71 | 76.31 | Downstream (heuristic - verify) |
| Kalleribhāgam | 13 | 98.4 | 21,723 | 9.0540 | 76.5580 | 9.25 | 8.85 | 76.76 | 76.36 | Off flood-path (heuristic) |
| Pudunagaram | 13 | 98.5 | 17,892 | 10.6802 | 76.6836 | 10.88 | 10.48 | 76.88 | 76.48 | Off flood-path (heuristic) |
| Chittūr | 13 | 98.7 | 32,298 | 10.6997 | 76.7471 | 10.9 | 10.5 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Panangad | 13 | 99.5 | 15,630 | 10.2728 | 76.1748 | 10.47 | 10.07 | 76.37 | 75.97 | Downstream (heuristic - verify) |
| Irinjālakuda | 13 | 100.1 | 29,208 | 10.3424 | 76.2112 | 10.54 | 10.14 | 76.41 | 76.01 | Downstream (heuristic - verify) |
| Koduvayur | 13 | 100.1 | 20,703 | 10.6867 | 76.6588 | 10.89 | 10.49 | 76.86 | 76.46 | Off flood-path (heuristic) |
| Shenkottai | 25 | 100.6 | 26,823 | 8.9774 | 77.2463 | 9.18 | 8.78 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Sivakasi | 25 | 100.6 | 234,704 | 9.4500 | 77.7980 | 9.65 | 9.25 | 78.0 | 77.6 | Off flood-path (heuristic) |
| Sithurajapuram | 25 | 101.0 | 16,860 | 9.4214 | 77.7873 | 9.62 | 9.22 | 77.99 | 77.59 | Off flood-path (heuristic) |
| Ayanavelikulangara Vadakku | 13 | 101.3 | 24,268 | 9.0430 | 76.5230 | 9.24 | 8.84 | 76.72 | 76.32 | Off flood-path (heuristic) |
| Amballūr | 13 | 101.7 | 29,341 | 10.4343 | 76.2634 | 10.63 | 10.23 | 76.46 | 76.06 | Off flood-path (heuristic) |
| Āyikudi | 25 | 101.7 | 15,129 | 9.0032 | 77.3449 | 9.2 | 8.8 | 77.54 | 77.14 | Off flood-path (heuristic) |
| Viswanatham | 25 | 101.8 | 25,555 | 9.4295 | 77.8003 | 9.63 | 9.23 | 78.0 | 77.6 | Off flood-path (heuristic) |
| Alattūr | 13 | 102.0 | 26,720 | 10.6500 | 76.5333 | 10.85 | 10.45 | 76.73 | 76.33 | Off flood-path (heuristic) |
| Pappinivattom | 13 | 102.2 | 15,336 | 10.2937 | 76.1583 | 10.49 | 10.09 | 76.36 | 75.96 | Downstream (heuristic - verify) |
| Namminikara | 13 | 102.3 | 18,067 | 10.4322 | 76.2542 | 10.63 | 10.23 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Tiruttangal | 25 | 102.6 | 55,362 | 9.4833 | 77.8333 | 9.68 | 9.28 | 78.03 | 77.63 | Off flood-path (heuristic) |
| Nilakottai | 25 | 102.9 | 22,197 | 10.1650 | 77.8502 | 10.36 | 9.96 | 78.05 | 77.65 | Off flood-path (heuristic) |
| Porathissery | 13 | 103.1 | 16,768 | 10.3764 | 76.2015 | 10.58 | 10.18 | 76.4 | 76.0 | Downstream (heuristic - verify) |
| Elampalloor | 13 | 103.5 | 33,959 | 8.9558 | 76.6739 | 9.16 | 8.76 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Pudusseri | 13 | 104.1 | 16,629 | 10.7582 | 76.7859 | 10.96 | 10.56 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Sāmbūrvadakara | 25 | 104.2 | 16,709 | 8.9986 | 77.3876 | 9.2 | 8.8 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Perinjanam | 13 | 104.2 | 21,012 | 10.3133 | 76.1485 | 10.51 | 10.11 | 76.35 | 75.95 | Downstream (heuristic - verify) |
| Puthūr | 13 | 104.4 | 17,430 | 10.4874 | 76.2793 | 10.69 | 10.29 | 76.48 | 76.08 | Off flood-path (heuristic) |
| Ponmana | 13 | 104.8 | 29,139 | 9.0080 | 76.5202 | 9.21 | 8.81 | 76.72 | 76.32 | Off flood-path (heuristic) |
| Thenkasi | 25 | 104.9 | 70,545 | 8.9600 | 77.3153 | 9.16 | 8.76 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Marattakara | 13 | 105.2 | 15,817 | 10.4733 | 76.2558 | 10.67 | 10.27 | 76.46 | 76.06 | Off flood-path (heuristic) |
| Perunād | 13 | 105.4 | 35,173 | 8.9490 | 76.6427 | 9.15 | 8.75 | 76.84 | 76.44 | Off flood-path (heuristic) |
| Panayāttur Vadakkumbhāgam | 13 | 105.7 | 25,607 | 8.9546 | 76.6185 | 9.15 | 8.75 | 76.82 | 76.42 | Off flood-path (heuristic) |
| Kattur | 13 | 106.0 | 18,017 | 10.3732 | 76.1668 | 10.57 | 10.17 | 76.37 | 75.97 | Downstream (heuristic - verify) |
| Kaipamangalam | 13 | 106.3 | 35,626 | 10.3350 | 76.1392 | 10.53 | 10.13 | 76.34 | 75.94 | Downstream (heuristic - verify) |
| Karuva | 13 | 107.0 | 25,432 | 8.9500 | 76.5986 | 9.15 | 8.75 | 76.8 | 76.4 | Off flood-path (heuristic) |
| Chavara | 13 | 107.8 | 42,655 | 8.9673 | 76.5419 | 9.17 | 8.77 | 76.74 | 76.34 | Off flood-path (heuristic) |
| Kottangara | 13 | 107.8 | 44,402 | 8.9241 | 76.6467 | 9.12 | 8.72 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Sūrandai | 25 | 108.0 | 35,272 | 8.9757 | 77.4192 | 9.18 | 8.78 | 77.62 | 77.22 | Off flood-path (heuristic) |
| Nedumpana | 13 | 108.0 | 29,454 | 8.9080 | 76.6930 | 9.11 | 8.71 | 76.89 | 76.49 | Off flood-path (heuristic) |
| Chevvoor | 13 | 108.0 | 16,086 | 10.4586 | 76.2088 | 10.66 | 10.26 | 76.41 | 76.01 | Downstream (heuristic - verify) |
| Marutharōd | 13 | 108.1 | 24,963 | 10.7751 | 76.6995 | 10.98 | 10.58 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Chendrappini | 13 | 108.5 | 16,404 | 10.3555 | 76.1282 | 10.56 | 10.16 | 76.33 | 75.93 | Downstream (heuristic - verify) |
| Pudussery West | 13 | 108.7 | 20,140 | 10.7880 | 76.7279 | 10.99 | 10.59 | 76.93 | 76.53 | Off flood-path (heuristic) |
| Pirāyiri | 13 | 109.3 | 41,359 | 10.7652 | 76.6318 | 10.97 | 10.57 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Palakkad | 13 | 109.4 | 132,728 | 10.7732 | 76.6537 | 10.97 | 10.57 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Ammainaickanur | 25 | 109.5 | 19,257 | 10.1671 | 77.9132 | 10.37 | 9.97 | 78.11 | 77.71 | Off flood-path (heuristic) |
| Tirkadavūr | 13 | 110.0 | 39,285 | 8.9240 | 76.5910 | 9.12 | 8.72 | 76.79 | 76.39 | Off flood-path (heuristic) |
| Adichānallūr | 13 | 110.3 | 27,240 | 8.8805 | 76.7156 | 9.08 | 8.68 | 76.92 | 76.52 | Off flood-path (heuristic) |
| Sholavandan | 25 | 110.4 | 22,578 | 10.0216 | 77.9609 | 10.22 | 9.82 | 78.16 | 77.76 | Off flood-path (heuristic) |
| Trikonavattam | 13 | 110.8 | 41,609 | 8.8899 | 76.6659 | 9.09 | 8.69 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Tirumangalam | 25 | 111.1 | 51,194 | 9.8231 | 77.9838 | 10.02 | 9.62 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Oddanchathiram | 25 | 111.1 | 30,064 | 10.4801 | 77.7498 | 10.68 | 10.28 | 77.95 | 77.55 | Off flood-path (heuristic) |
| Kalugumalai | 25 | 111.4 | 15,423 | 9.1494 | 77.7057 | 9.35 | 8.95 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Ambikāpuram | 13 | 111.6 | 28,592 | 10.7939 | 76.6530 | 10.99 | 10.59 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Thrissur | 13 | 111.6 | 315,957 | 10.5167 | 76.2167 | 10.72 | 10.32 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Vadipatti | 25 | 111.9 | 26,830 | 10.0848 | 77.9611 | 10.28 | 9.88 | 78.16 | 77.76 | Off flood-path (heuristic) |
| Virudunagar | 25 | 111.9 | 73,273 | 9.5851 | 77.9579 | 9.79 | 9.39 | 78.16 | 77.76 | Off flood-path (heuristic) |
| Talattala | 13 | 112.3 | 37,517 | 8.8738 | 76.6716 | 9.07 | 8.67 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Mīnād | 13 | 114.1 | 29,716 | 8.8503 | 76.6952 | 9.05 | 8.65 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Puthuppariyāram | 13 | 114.5 | 30,895 | 10.8131 | 76.6287 | 11.01 | 10.61 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Kollam | 13 | 114.7 | 367,107 | 8.8811 | 76.5847 | 9.08 | 8.68 | 76.78 | 76.38 | Off flood-path (heuristic) |
| Kilapavoor | 25 | 115.3 | 22,231 | 8.9086 | 77.4311 | 9.11 | 8.71 | 77.63 | 77.23 | Off flood-path (heuristic) |
| Chinnalapatti | 25 | 115.5 | 26,285 | 10.2848 | 77.9233 | 10.48 | 10.08 | 78.12 | 77.72 | Off flood-path (heuristic) |
| Talikkulam | 13 | 116.8 | 25,507 | 10.4404 | 76.0948 | 10.64 | 10.24 | 76.29 | 75.89 | Downstream (heuristic - verify) |
| Mayyanād | 13 | 117.1 | 40,039 | 8.8373 | 76.6450 | 9.04 | 8.64 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Dharapuram | 25 | 117.3 | 72,291 | 10.7383 | 77.5322 | 10.94 | 10.54 | 77.73 | 77.33 | Off flood-path (heuristic) |
| Puttankulam | 13 | 117.4 | 29,447 | 8.8138 | 76.7179 | 9.01 | 8.61 | 76.92 | 76.52 | Off flood-path (heuristic) |
| Sattur | 25 | 117.7 | 31,856 | 9.3559 | 77.9246 | 9.56 | 9.16 | 78.12 | 77.72 | Off flood-path (heuristic) |
| Killannur | 13 | 117.9 | 20,339 | 10.5992 | 76.2180 | 10.8 | 10.4 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Madukkarai | 25 | 118.5 | 30,357 | 10.9057 | 76.9634 | 11.11 | 10.71 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Karamuck | 13 | 118.8 | 15,129 | 10.4842 | 76.1044 | 10.68 | 10.28 | 76.3 | 75.9 | Downstream (heuristic - verify) |
| Pudukkottai | 25 | 119.2 | 15,769 | 9.9373 | 78.0533 | 10.14 | 9.74 | 78.25 | 77.85 | Off flood-path (heuristic) |
| Chettipālaiyam | 25 | 119.5 | 24,080 | 10.9125 | 77.0370 | 11.11 | 10.71 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Manalur | 13 | 119.5 | 17,757 | 10.4929 | 76.1027 | 10.69 | 10.29 | 76.3 | 75.9 | Downstream (heuristic - verify) |
| Vadanappally | 13 | 119.8 | 30,657 | 10.4690 | 76.0813 | 10.67 | 10.27 | 76.28 | 75.88 | Downstream (heuristic - verify) |
| Vadakāncheri | 13 | 120.8 | 15,674 | 10.6604 | 76.2466 | 10.86 | 10.46 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Paravūr Tekkumbhāgam | 13 | 120.9 | 38,946 | 8.7947 | 76.6680 | 8.99 | 8.59 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Paravai | 25 | 120.9 | 20,042 | 9.9645 | 78.0667 | 10.16 | 9.76 | 78.27 | 77.87 | Off flood-path (heuristic) |
| Tirupparangunram | 25 | 120.9 | 50,004 | 9.8815 | 78.0731 | 10.08 | 9.68 | 78.27 | 77.87 | Off flood-path (heuristic) |
| Inam Maniyachi | 25 | 122.0 | 18,258 | 9.1706 | 77.8512 | 9.37 | 8.97 | 78.05 | 77.65 | Off flood-path (heuristic) |
| Ottapalam | 13 | 122.4 | 53,792 | 10.7735 | 76.3776 | 10.97 | 10.57 | 76.58 | 76.18 | Off flood-path (heuristic) |
| Kulattuppālaiyam | 25 | 122.5 | 17,819 | 10.7613 | 77.5842 | 10.96 | 10.56 | 77.78 | 77.38 | Off flood-path (heuristic) |
| Ālangulam | 25 | 123.1 | 28,558 | 8.8640 | 77.4994 | 9.06 | 8.66 | 77.7 | 77.3 | Off flood-path (heuristic) |
| Adiyanuthu | 25 | 123.4 | 17,851 | 10.3308 | 77.9812 | 10.53 | 10.13 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Edavai | 13 | 123.5 | 25,994 | 8.7645 | 76.6885 | 8.96 | 8.56 | 76.89 | 76.49 | Off flood-path (heuristic) |
| Kovilpatti | 25 | 123.5 | 95,057 | 9.1717 | 77.8699 | 9.37 | 8.97 | 78.07 | 77.67 | Off flood-path (heuristic) |
| Vilāngudi | 25 | 123.6 | 30,884 | 9.9458 | 78.0935 | 10.15 | 9.75 | 78.29 | 77.89 | Off flood-path (heuristic) |
| Rāmachettipālaiyam | 25 | 124.5 | 17,809 | 10.9582 | 76.9201 | 11.16 | 10.76 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Kurichchi | 25 | 124.6 | 123,667 | 10.9609 | 76.9738 | 11.16 | 10.76 | 77.17 | 76.77 | Off flood-path (heuristic) |
| Kuniyamuttūr | 25 | 125.0 | 95,924 | 10.9638 | 76.9525 | 11.16 | 10.76 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Kariapatti | 25 | 125.2 | 18,191 | 9.6751 | 78.0999 | 9.88 | 9.48 | 78.3 | 77.9 | Off flood-path (heuristic) |
| Avaniyāpuram | 25 | 125.3 | 89,635 | 9.8818 | 78.1125 | 10.08 | 9.68 | 78.31 | 77.91 | Off flood-path (heuristic) |
| Dindigul | 25 | 125.3 | 292,512 | 10.3690 | 77.9804 | 10.57 | 10.17 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Ānaiyūr | 25 | 125.8 | 63,917 | 9.9615 | 78.1118 | 10.16 | 9.76 | 78.31 | 77.91 | Off flood-path (heuristic) |
| Vāniyamkulam | 13 | 125.9 | 16,085 | 10.7830 | 76.3336 | 10.98 | 10.58 | 76.53 | 76.13 | Off flood-path (heuristic) |
| Chettināyakkanpatti | 25 | 126.1 | 17,701 | 10.3940 | 77.9754 | 10.59 | 10.19 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Varkala | 13 | 126.2 | 43,276 | 8.7333 | 76.7167 | 8.93 | 8.53 | 76.92 | 76.52 | Off flood-path (heuristic) |
| Madurai | 25 | 126.2 | 1,465,625 | 9.9190 | 78.1195 | 10.12 | 9.72 | 78.32 | 77.92 | Off flood-path (heuristic) |
| Agaram | 25 | 126.4 | 15,610 | 10.4433 | 77.9485 | 10.64 | 10.24 | 78.15 | 77.75 | Off flood-path (heuristic) |
| Vellalūr | 25 | 126.6 | 24,872 | 10.9775 | 77.0260 | 11.18 | 10.78 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Chetwayi | 13 | 126.7 | 38,011 | 10.5289 | 76.0479 | 10.73 | 10.33 | 76.25 | 75.85 | Downstream (heuristic - verify) |
| Tādikombu | 25 | 126.7 | 18,838 | 10.4390 | 77.9546 | 10.64 | 10.24 | 78.15 | 77.75 | Off flood-path (heuristic) |
| Balakrishnapuram | 25 | 126.9 | 25,627 | 10.3591 | 78.0026 | 10.56 | 10.16 | 78.2 | 77.8 | Off flood-path (heuristic) |
| Vettūr | 13 | 127.7 | 37,219 | 8.7174 | 76.7258 | 8.92 | 8.52 | 76.93 | 76.53 | Off flood-path (heuristic) |
| Shōranūr | 13 | 127.9 | 43,533 | 10.7618 | 76.2708 | 10.96 | 10.56 | 76.47 | 76.07 | Off flood-path (heuristic) |
| Pālaiyampatti | 25 | 128.1 | 18,576 | 9.5392 | 78.0984 | 9.74 | 9.34 | 78.3 | 77.9 | Off flood-path (heuristic) |
| Tiruppālai | 25 | 128.3 | 19,305 | 9.9779 | 78.1329 | 10.18 | 9.78 | 78.33 | 77.93 | Off flood-path (heuristic) |
| Attingal | 13 | 128.3 | 37,346 | 8.6961 | 76.8151 | 8.9 | 8.5 | 77.02 | 76.62 | Off flood-path (heuristic) |
| Nāyanakulam | 25 | 128.6 | 23,284 | 9.9611 | 78.1372 | 10.16 | 9.76 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Anuppānadi | 25 | 128.7 | 26,158 | 9.9040 | 78.1433 | 10.1 | 9.7 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Aruppukkottai | 25 | 128.8 | 87,722 | 9.5096 | 78.0959 | 9.71 | 9.31 | 78.3 | 77.9 | Off flood-path (heuristic) |
| Kīlattingal | 13 | 129.0 | 15,185 | 8.6926 | 76.7933 | 8.89 | 8.49 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Singānallūr | 25 | 129.1 | 31,239 | 10.9990 | 77.0324 | 11.2 | 10.8 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Kannānendal | 25 | 129.1 | 31,095 | 9.9649 | 78.1416 | 10.16 | 9.76 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Sīlappādi | 25 | 129.2 | 17,824 | 10.3940 | 78.0078 | 10.59 | 10.19 | 78.21 | 77.81 | Off flood-path (heuristic) |
| Kannampālaiyam | 25 | 129.3 | 15,868 | 10.9954 | 77.0990 | 11.2 | 10.8 | 77.3 | 76.9 | Off flood-path (heuristic) |
| Coimbatore | 25 | 129.6 | 2,136,916 | 11.0055 | 76.9661 | 11.21 | 10.81 | 77.17 | 76.77 | Off flood-path (heuristic) |
| Melmadai | 25 | 129.6 | 43,797 | 9.9264 | 78.1503 | 10.13 | 9.73 | 78.35 | 77.95 | Off flood-path (heuristic) |
| Vīrakeralam | 25 | 130.0 | 23,841 | 11.0077 | 76.9126 | 11.21 | 10.81 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Vakkam | 13 | 130.4 | 19,267 | 8.6845 | 76.7675 | 8.88 | 8.48 | 76.97 | 76.57 | Off flood-path (heuristic) |
| Vandiyūr | 25 | 130.7 | 28,646 | 9.9092 | 78.1609 | 10.11 | 9.71 | 78.36 | 77.96 | Off flood-path (heuristic) |
| Kadakkavoor | 13 | 131.0 | 25,362 | 8.6792 | 76.7671 | 8.88 | 8.48 | 76.97 | 76.57 | Off flood-path (heuristic) |
| Irugūr | 25 | 131.4 | 25,691 | 11.0178 | 77.0628 | 11.22 | 10.82 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Kārakkād | 13 | 131.5 | 39,098 | 10.5880 | 76.0388 | 10.79 | 10.39 | 76.24 | 75.84 | Downstream (heuristic - verify) |
| Guruvāyūr | 13 | 131.8 | 21,416 | 10.5943 | 76.0411 | 10.79 | 10.39 | 76.24 | 75.84 | Downstream (heuristic - verify) |
| Vadavalli | 25 | 132.0 | 39,873 | 11.0247 | 76.8973 | 11.22 | 10.82 | 77.1 | 76.7 | Off flood-path (heuristic) |
| Kizhuvalam-Koonthalloor | 13 | 132.1 | 30,770 | 8.6625 | 76.8097 | 8.86 | 8.46 | 77.01 | 76.61 | Off flood-path (heuristic) |
| Palladam | 25 | 132.7 | 42,225 | 10.9917 | 77.2863 | 11.19 | 10.79 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Sulur | 25 | 132.8 | 27,909 | 11.0243 | 77.1256 | 11.22 | 10.82 | 77.33 | 76.93 | Off flood-path (heuristic) |
| Vikramasingapuram | 25 | 133.4 | 47,241 | 8.7148 | 77.3903 | 8.91 | 8.51 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Kunnamkulam | 13 | 133.5 | 63,903 | 10.6467 | 76.0670 | 10.85 | 10.45 | 76.27 | 75.87 | Off flood-path (heuristic) |
| Idaiyarpālaiyam | 25 | 133.5 | 83,908 | 11.0394 | 76.9237 | 11.24 | 10.84 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Mūlanūr | 25 | 133.6 | 15,223 | 10.7943 | 77.7115 | 10.99 | 10.59 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Ongallur-II | 13 | 133.8 | 26,273 | 10.7897 | 76.2190 | 10.99 | 10.59 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Ottakkadai | 25 | 134.1 | 15,152 | 9.9580 | 78.1886 | 10.16 | 9.76 | 78.39 | 77.99 | Off flood-path (heuristic) |
| Azhoor | 13 | 134.3 | 27,390 | 8.6441 | 76.7990 | 8.84 | 8.44 | 77.0 | 76.6 | Off flood-path (heuristic) |
| Ongallur-I | 13 | 135.0 | 16,998 | 10.8027 | 76.2185 | 11.0 | 10.6 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Chinnavādampatti | 25 | 135.8 | 20,122 | 11.0615 | 76.9838 | 11.26 | 10.86 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Vellūr | 13 | 135.8 | 22,816 | 8.6262 | 76.8305 | 8.83 | 8.43 | 77.03 | 76.63 | Off flood-path (heuristic) |
| Cherpulassery | 13 | 136.0 | 30,000 | 10.8765 | 76.3093 | 11.08 | 10.68 | 76.51 | 76.11 | Off flood-path (heuristic) |
| Ambasamudram | 25 | 136.3 | 35,645 | 8.7107 | 77.4519 | 8.91 | 8.51 | 77.65 | 77.25 | Off flood-path (heuristic) |
| Vilankurichi | 25 | 137.0 | 24,235 | 11.0715 | 77.0173 | 11.27 | 10.87 | 77.22 | 76.82 | Off flood-path (heuristic) |
| Pattāmbi | 13 | 137.1 | 28,632 | 10.8001 | 76.1841 | 11.0 | 10.6 | 76.38 | 75.98 | Off flood-path (heuristic) |
| Vellakkinar | 25 | 137.2 | 15,998 | 11.0736 | 76.9566 | 11.27 | 10.87 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Iroopara | 13 | 137.2 | 23,113 | 8.6075 | 76.9149 | 8.81 | 8.41 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Vettanād | 13 | 137.3 | 27,140 | 8.6059 | 76.9424 | 8.81 | 8.41 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Srvanampatti | 25 | 137.5 | 32,920 | 11.0764 | 77.0045 | 11.28 | 10.88 | 77.2 | 76.8 | Off flood-path (heuristic) |
| Edakkazhiyūr | 13 | 137.6 | 17,335 | 10.6228 | 75.9965 | 10.82 | 10.42 | 76.2 | 75.8 | Downstream (heuristic - verify) |
| Nedumangād | 13 | 137.6 | 60,161 | 8.6027 | 77.0014 | 8.8 | 8.4 | 77.2 | 76.8 | Off flood-path (heuristic) |
| Kālappatti | 25 | 138.0 | 39,586 | 11.0794 | 77.0371 | 11.28 | 10.88 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Tudiyalūr | 25 | 138.1 | 33,924 | 11.0816 | 76.9446 | 11.28 | 10.88 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Sāmalāpuram | 25 | 139.3 | 20,691 | 11.0724 | 77.1980 | 11.27 | 10.87 | 77.4 | 77.0 | Off flood-path (heuristic) |
| Kallidaikurichi | 25 | 139.4 | 26,398 | 8.6859 | 77.4659 | 8.89 | 8.49 | 77.67 | 77.27 | Off flood-path (heuristic) |
| Mannārakkāt | 13 | 139.6 | 50,921 | 10.9922 | 76.4642 | 11.19 | 10.79 | 76.66 | 76.26 | Off flood-path (heuristic) |
| Pallappatti | 25 | 139.6 | 30,624 | 10.7206 | 77.8795 | 10.92 | 10.52 | 78.08 | 77.68 | Off flood-path (heuristic) |
| V.S.K.Valasai (Dindigul-Dist.) | 25 | 139.7 | 17,865 | 10.3155 | 78.1514 | 10.52 | 10.12 | 78.35 | 77.95 | Off flood-path (heuristic) |
| Punnayūr | 13 | 139.8 | 19,387 | 10.6521 | 75.9951 | 10.85 | 10.45 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Vadakkēkkād | 13 | 139.9 | 15,811 | 10.6635 | 76.0033 | 10.86 | 10.46 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Uliyazhathura | 13 | 140.0 | 28,230 | 8.5816 | 76.9224 | 8.78 | 8.38 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Kāraippudūr | 25 | 140.2 | 28,602 | 11.0567 | 77.3061 | 11.26 | 10.86 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Vadamadurai | 25 | 140.4 | 18,015 | 10.4408 | 78.0978 | 10.64 | 10.24 | 78.3 | 77.9 | Off flood-path (heuristic) |
| Vadakku Viravanallur | 25 | 140.6 | 19,689 | 8.6979 | 77.5192 | 8.9 | 8.5 | 77.72 | 77.32 | Off flood-path (heuristic) |
| Rakkiyapālaiyam | 25 | 140.8 | 18,749 | 11.1061 | 76.9425 | 11.31 | 10.91 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Tiruppuvanam | 25 | 141.1 | 24,554 | 9.8256 | 78.2579 | 10.03 | 9.63 | 78.46 | 78.06 | Off flood-path (heuristic) |
| Trittāla | 13 | 141.2 | 27,796 | 10.8030 | 76.1288 | 11.0 | 10.6 | 76.33 | 75.93 | Off flood-path (heuristic) |
| Kidarakulam | 13 | 141.6 | 29,624 | 8.5669 | 76.9913 | 8.77 | 8.37 | 77.19 | 76.79 | Off flood-path (heuristic) |
| Muthutala | 13 | 141.8 | 24,861 | 10.8354 | 76.1596 | 11.04 | 10.64 | 76.36 | 75.96 | Off flood-path (heuristic) |
| Narasimhanaickenpalayam | 25 | 142.1 | 17,858 | 11.1173 | 76.9363 | 11.32 | 10.92 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Vīrapāndi | 25 | 142.2 | 50,301 | 11.0625 | 77.3508 | 11.26 | 10.86 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Kadikkād | 13 | 142.4 | 19,147 | 10.6705 | 75.9797 | 10.87 | 10.47 | 76.18 | 75.78 | Off flood-path (heuristic) |
| Karumattampatti | 25 | 143.0 | 35,062 | 11.1093 | 77.1820 | 11.31 | 10.91 | 77.38 | 76.98 | Off flood-path (heuristic) |
| Murugampālaiyam | 25 | 143.3 | 26,349 | 11.0806 | 77.3238 | 11.28 | 10.88 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Kudappanakkunnu | 13 | 143.3 | 41,583 | 8.5514 | 76.9608 | 8.75 | 8.35 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Ālankōd | 13 | 143.6 | 33,918 | 10.7460 | 76.0348 | 10.95 | 10.55 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Sreekaryam | 13 | 143.7 | 23,528 | 8.5488 | 76.9172 | 8.75 | 8.35 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Mangalam | 25 | 144.0 | 17,699 | 11.1005 | 77.2712 | 11.3 | 10.9 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Andipalayam | 25 | 144.2 | 25,539 | 11.0925 | 77.3123 | 11.29 | 10.89 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Natham | 25 | 144.5 | 23,660 | 10.2278 | 78.2297 | 10.43 | 10.03 | 78.43 | 78.03 | Off flood-path (heuristic) |
| Kangayam | 25 | 144.9 | 32,147 | 11.0060 | 77.5609 | 11.21 | 10.81 | 77.76 | 77.36 | Off flood-path (heuristic) |
| Cheranmahadevi | 25 | 145.2 | 18,327 | 8.6755 | 77.5696 | 8.88 | 8.48 | 77.77 | 77.37 | Off flood-path (heuristic) |
| Periyanayakkanpalaiyam | 25 | 146.0 | 25,930 | 11.1525 | 76.9516 | 11.35 | 10.95 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Muttanampālaiyam | 25 | 146.0 | 26,014 | 11.0845 | 77.3969 | 11.28 | 10.88 | 77.6 | 77.2 | Off flood-path (heuristic) |
| Vattiyūrkāvu | 13 | 146.3 | 47,187 | 8.5247 | 76.9889 | 8.72 | 8.32 | 77.19 | 76.79 | Off flood-path (heuristic) |
| Pattamadai | 25 | 146.3 | 16,625 | 8.6726 | 77.5845 | 8.87 | 8.47 | 77.78 | 77.38 | Off flood-path (heuristic) |
| Tirunelveli | 25 | 146.4 | 1,435,844 | 8.7274 | 77.6838 | 8.93 | 8.53 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Vilappil | 13 | 146.7 | 36,212 | 8.5222 | 77.0400 | 8.72 | 8.32 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Nāranammālpuram | 25 | 146.8 | 17,094 | 8.7599 | 77.7399 | 8.96 | 8.56 | 77.94 | 77.54 | Off flood-path (heuristic) |
| Vellakkovil | 25 | 147.4 | 40,359 | 10.9463 | 77.7124 | 11.15 | 10.75 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Nallūr | 25 | 147.5 | 70,115 | 11.1003 | 77.3914 | 11.3 | 10.9 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Tiruppur | 25 | 147.9 | 963,173 | 11.1154 | 77.3546 | 11.32 | 10.92 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Ayyalur | 25 | 148.2 | 17,100 | 10.4818 | 78.1564 | 10.68 | 10.28 | 78.36 | 77.96 | Off flood-path (heuristic) |
| Māranchēri | 13 | 148.2 | 35,011 | 10.7405 | 75.9710 | 10.94 | 10.54 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Edappāl | 13 | 148.6 | 32,550 | 10.7834 | 76.0079 | 10.98 | 10.58 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Mannarai | 25 | 148.7 | 17,261 | 11.1172 | 77.3726 | 11.32 | 10.92 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Kulathummal | 13 | 148.7 | 40,448 | 8.5073 | 77.0815 | 8.71 | 8.31 | 77.28 | 76.88 | Off flood-path (heuristic) |
| Irimbiliyam | 13 | 148.8 | 30,635 | 10.8624 | 76.0922 | 11.06 | 10.66 | 76.29 | 75.89 | Off flood-path (heuristic) |
| Velampālaiyam | 25 | 149.0 | 87,427 | 11.1376 | 77.3106 | 11.34 | 10.94 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Malayinkeezhu | 13 | 150.3 | 37,350 | 8.4902 | 77.0374 | 8.69 | 8.29 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Perintalmanna | 13 | 150.4 | 49,723 | 10.9772 | 76.2254 | 11.18 | 10.78 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Thiruvananthapuram | 13 | 150.6 | 788,271 | 8.4855 | 76.9492 | 8.69 | 8.29 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Vilavoorkkal | 13 | 151.2 | 31,761 | 8.4809 | 77.0220 | 8.68 | 8.28 | 77.22 | 76.82 | Off flood-path (heuristic) |
| Boyampālaiyam | 25 | 151.5 | 40,503 | 11.1487 | 77.3537 | 11.35 | 10.95 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Melur | 25 | 151.5 | 40,017 | 10.0324 | 78.3393 | 10.23 | 9.83 | 78.54 | 78.14 | Off flood-path (heuristic) |
| Kāladi | 13 | 151.6 | 25,872 | 10.8194 | 76.0064 | 11.02 | 10.62 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Kuttippuram | 13 | 151.6 | 25,750 | 10.8425 | 76.0308 | 11.04 | 10.64 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Tirumuruganpūndi | 25 | 151.9 | 31,528 | 11.1649 | 77.3084 | 11.36 | 10.96 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Kāttipparutti | 13 | 152.5 | 40,318 | 10.8738 | 76.0535 | 11.07 | 10.67 | 76.25 | 75.85 | Off flood-path (heuristic) |
| Chettipālaiyam | 25 | 152.8 | 37,620 | 11.1667 | 77.3350 | 11.37 | 10.97 | 77.54 | 77.14 | Off flood-path (heuristic) |
| Vilattikulam | 25 | 153.0 | 15,277 | 9.1323 | 78.1663 | 9.33 | 8.93 | 78.37 | 77.97 | Off flood-path (heuristic) |
| Nerupperichchal | 25 | 153.4 | 53,579 | 11.1610 | 77.3740 | 11.36 | 10.96 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Ponnāni | 13 | 153.9 | 105,512 | 10.7669 | 75.9252 | 10.97 | 10.57 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Avinashi | 25 | 153.9 | 28,868 | 11.1930 | 77.2686 | 11.39 | 10.99 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Pallichal | 13 | 154.7 | 53,861 | 8.4498 | 77.0257 | 8.65 | 8.25 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Palangarai | 25 | 155.4 | 17,248 | 11.1978 | 77.3058 | 11.4 | 11.0 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Kāramadai | 25 | 155.7 | 35,166 | 11.2406 | 76.9601 | 11.44 | 11.04 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Annur | 25 | 155.9 | 20,079 | 11.2362 | 77.1051 | 11.44 | 11.04 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Kalliyoor | 13 | 156.7 | 40,816 | 8.4313 | 77.0129 | 8.63 | 8.23 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Naduvattam | 13 | 156.8 | 21,273 | 10.8799 | 76.0020 | 11.08 | 10.68 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Thirunavaya | 13 | 157.6 | 24,790 | 10.8746 | 75.9855 | 11.07 | 10.67 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Triprangod | 13 | 157.8 | 41,167 | 10.8422 | 75.9486 | 11.04 | 10.64 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Venganoor | 13 | 160.6 | 35,963 | 8.3964 | 77.0033 | 8.6 | 8.2 | 77.2 | 76.8 | Off flood-path (heuristic) |
| Kalakkādu | 25 | 160.6 | 30,921 | 8.5138 | 77.5494 | 8.71 | 8.31 | 77.75 | 77.35 | Off flood-path (heuristic) |
| Neyyāttinkara | 13 | 160.8 | 88,104 | 8.3985 | 77.0859 | 8.6 | 8.2 | 77.29 | 76.89 | Off flood-path (heuristic) |
| Pālaiyam | 25 | 161.1 | 15,336 | 10.7256 | 78.1354 | 10.93 | 10.53 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Athiyannur | 13 | 161.2 | 40,712 | 8.3930 | 77.0637 | 8.59 | 8.19 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Mettupalayam | 25 | 162.4 | 69,213 | 11.2997 | 76.9348 | 11.5 | 11.1 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Kadayal | 25 | 162.5 | 21,665 | 8.4083 | 77.2657 | 8.61 | 8.21 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Talakkād | 13 | 162.5 | 35,820 | 10.8846 | 75.9309 | 11.08 | 10.68 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Chennimalai | 25 | 162.7 | 16,268 | 11.1638 | 77.6039 | 11.36 | 10.96 | 77.8 | 77.4 | Off flood-path (heuristic) |
| Peringottupulam | 13 | 162.8 | 36,602 | 11.0268 | 76.0987 | 11.23 | 10.83 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Singampunari | 25 | 162.8 | 18,143 | 10.1862 | 78.4150 | 10.39 | 9.99 | 78.62 | 78.22 | Off flood-path (heuristic) |
| Kodur | 13 | 163.6 | 45,459 | 11.0153 | 76.0701 | 11.22 | 10.82 | 76.27 | 75.87 | Off flood-path (heuristic) |
| Triparappu | 25 | 164.0 | 22,401 | 8.3948 | 77.2659 | 8.59 | 8.19 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Edaicode | 25 | 164.0 | 25,378 | 8.3825 | 77.1983 | 8.58 | 8.18 | 77.4 | 77.0 | Off flood-path (heuristic) |
| Sirumugai | 25 | 164.8 | 20,066 | 11.3214 | 77.0052 | 11.52 | 11.12 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Kanjiramkulam | 13 | 164.8 | 19,902 | 8.3598 | 77.0525 | 8.56 | 8.16 | 77.25 | 76.85 | Off flood-path (heuristic) |
| Malappuram | 13 | 165.2 | 101,386 | 11.0420 | 76.0815 | 11.24 | 10.84 | 76.28 | 75.88 | Off flood-path (heuristic) |
| Manamadurai | 25 | 165.5 | 32,257 | 9.6732 | 78.4710 | 9.87 | 9.47 | 78.67 | 78.27 | Off flood-path (heuristic) |
| Tirur | 13 | 165.6 | 56,058 | 10.9137 | 75.9212 | 11.11 | 10.71 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Cheriyamundam | 13 | 165.7 | 31,212 | 10.9476 | 75.9564 | 11.15 | 10.75 | 76.16 | 75.76 | Off flood-path (heuristic) |
| Sivaganga | 25 | 165.8 | 42,785 | 9.8470 | 78.4836 | 10.05 | 9.65 | 78.68 | 78.28 | Off flood-path (heuristic) |
| Arumanai | 25 | 166.5 | 16,283 | 8.3670 | 77.2433 | 8.57 | 8.17 | 77.44 | 77.04 | Off flood-path (heuristic) |
| Kōttakkal | 13 | 166.7 | 44,382 | 11.0009 | 76.0062 | 11.2 | 10.8 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Ponmundam | 13 | 166.9 | 25,855 | 10.9536 | 75.9468 | 11.15 | 10.75 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Palugal | 25 | 167.0 | 18,276 | 8.3536 | 77.1859 | 8.55 | 8.15 | 77.39 | 76.99 | Off flood-path (heuristic) |
| Sankaraperi | 25 | 167.1 | 19,844 | 8.8387 | 78.1051 | 9.04 | 8.64 | 78.31 | 77.91 | Off flood-path (heuristic) |
| Milavittan | 25 | 167.4 | 45,863 | 8.8193 | 78.0909 | 9.02 | 8.62 | 78.29 | 77.89 | Off flood-path (heuristic) |
| Othukkungal | 13 | 167.5 | 39,139 | 11.0283 | 76.0290 | 11.23 | 10.83 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Kulasegaram | 25 | 168.1 | 17,267 | 8.3632 | 77.2978 | 8.56 | 8.16 | 77.5 | 77.1 | Off flood-path (heuristic) |
| Sivagiri | 25 | 168.1 | 16,779 | 11.1203 | 77.7881 | 11.32 | 10.92 | 77.99 | 77.59 | Off flood-path (heuristic) |
| Pārassāla | 25 | 168.2 | 34,096 | 8.3387 | 77.1542 | 8.54 | 8.14 | 77.35 | 76.95 | Off flood-path (heuristic) |
| Parappur | 13 | 168.4 | 36,270 | 11.0121 | 75.9947 | 11.21 | 10.81 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Coonoor | 25 | 169.0 | 45,494 | 11.3498 | 76.7938 | 11.55 | 11.15 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Pacode | 25 | 169.5 | 24,050 | 8.3352 | 77.2136 | 8.54 | 8.14 | 77.41 | 77.01 | Off flood-path (heuristic) |
| Punjai Puliyampatti | 25 | 169.5 | 18,967 | 11.3516 | 77.1667 | 11.55 | 11.15 | 77.37 | 76.97 | Off flood-path (heuristic) |
| Tānālūr | 13 | 169.5 | 47,976 | 10.9515 | 75.9096 | 11.15 | 10.75 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Ponmana | 25 | 169.7 | 15,554 | 8.3552 | 77.3283 | 8.56 | 8.16 | 77.53 | 77.13 | Off flood-path (heuristic) |
| Mappilaiurani | 25 | 169.7 | 40,035 | 8.8359 | 78.1352 | 9.04 | 8.64 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Srivaikuntam | 25 | 169.8 | 15,847 | 8.6293 | 77.9128 | 8.83 | 8.43 | 78.11 | 77.71 | Off flood-path (heuristic) |
| Manjeri | 13 | 170.0 | 97,102 | 11.1202 | 76.1200 | 11.32 | 10.92 | 76.32 | 75.92 | Off flood-path (heuristic) |
| Eruvādi | 25 | 170.1 | 18,067 | 8.4439 | 77.6044 | 8.64 | 8.24 | 77.8 | 77.4 | Off flood-path (heuristic) |
| Wellington | 25 | 170.8 | 20,254 | 11.3655 | 76.7844 | 11.57 | 11.17 | 76.98 | 76.58 | Off flood-path (heuristic) |
| Tiruvattār | 25 | 171.0 | 18,985 | 8.3307 | 77.2673 | 8.53 | 8.13 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Kuzhithurai | 25 | 171.0 | 21,307 | 8.3179 | 77.1919 | 8.52 | 8.12 | 77.39 | 76.99 | Off flood-path (heuristic) |
| Tennala | 13 | 171.1 | 56,546 | 10.9934 | 75.9350 | 11.19 | 10.79 | 76.14 | 75.74 | Off flood-path (heuristic) |
| Methukummal | 25 | 171.6 | 19,417 | 8.3075 | 77.1521 | 8.51 | 8.11 | 77.35 | 76.95 | Off flood-path (heuristic) |
| Kērkandi | 25 | 171.6 | 23,229 | 11.3678 | 76.7458 | 11.57 | 11.17 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Urakam | 13 | 172.2 | 29,157 | 11.0512 | 75.9883 | 11.25 | 10.85 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Chinna Āndānkovil | 25 | 172.3 | 19,779 | 10.9511 | 78.0681 | 11.15 | 10.75 | 78.27 | 77.87 | Off flood-path (heuristic) |
| Tāndoni | 25 | 172.3 | 53,854 | 10.9261 | 78.0941 | 11.13 | 10.73 | 78.29 | 77.89 | Off flood-path (heuristic) |
| Marthandam | 25 | 172.6 | 20,938 | 8.3081 | 77.2214 | 8.51 | 8.11 | 77.42 | 77.02 | Off flood-path (heuristic) |
| Nalloor | 25 | 172.8 | 17,989 | 8.3064 | 77.2240 | 8.51 | 8.11 | 77.42 | 77.02 | Off flood-path (heuristic) |
| Vengara | 13 | 172.9 | 48,600 | 11.0508 | 75.9781 | 11.25 | 10.85 | 76.18 | 75.78 | Off flood-path (heuristic) |
| Nannambra | 13 | 172.9 | 40,543 | 10.9921 | 75.9080 | 11.19 | 10.79 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Nambiyūr | 25 | 173.1 | 16,379 | 11.3581 | 77.3212 | 11.56 | 11.16 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Kollancode | 25 | 173.1 | 38,385 | 8.2890 | 77.1080 | 8.49 | 8.09 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Perundurai | 25 | 173.3 | 24,930 | 11.2756 | 77.5879 | 11.48 | 11.08 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Karur | 25 | 173.8 | 234,191 | 10.9577 | 78.0810 | 11.16 | 10.76 | 78.28 | 77.88 | Off flood-path (heuristic) |
| Unnamalaikadai | 25 | 173.8 | 23,656 | 8.2996 | 77.2406 | 8.5 | 8.1 | 77.44 | 77.04 | Off flood-path (heuristic) |
| Kannamangalam | 13 | 174.5 | 41,260 | 11.0754 | 75.9852 | 11.28 | 10.88 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Attimarappatti | 25 | 174.6 | 22,218 | 8.7399 | 78.1053 | 8.94 | 8.54 | 78.31 | 77.91 | Off flood-path (heuristic) |
| Thoothukudi | 25 | 174.8 | 410,760 | 8.7674 | 78.1342 | 8.97 | 8.57 | 78.33 | 77.93 | Off flood-path (heuristic) |
| Verukulambu | 25 | 175.4 | 19,730 | 8.2953 | 77.2939 | 8.5 | 8.1 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Muttayyāpuram | 25 | 175.9 | 32,494 | 8.7498 | 78.1311 | 8.95 | 8.55 | 78.33 | 77.93 | Off flood-path (heuristic) |
| Karumāndi Chellipālaiyam | 25 | 176.0 | 23,868 | 11.3019 | 77.5860 | 11.5 | 11.1 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Tirūrangādi | 13 | 176.1 | 56,632 | 11.0432 | 75.9234 | 11.24 | 10.84 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Ezhudesam | 25 | 176.1 | 24,657 | 8.2651 | 77.1421 | 8.47 | 8.07 | 77.34 | 76.94 | Off flood-path (heuristic) |
| Kāttatturai | 25 | 176.1 | 17,271 | 8.2849 | 77.2755 | 8.48 | 8.08 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Kotagiri | 25 | 176.2 | 28,848 | 11.4207 | 76.8603 | 11.62 | 11.22 | 77.06 | 76.66 | Off flood-path (heuristic) |
| Valvachatottam | 25 | 176.3 | 16,965 | 8.2803 | 77.2561 | 8.48 | 8.08 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Senapparetti | 25 | 176.7 | 22,447 | 10.9625 | 78.1132 | 11.16 | 10.76 | 78.31 | 77.91 | Off flood-path (heuristic) |
| Vadakku Valliyūr | 25 | 176.7 | 29,417 | 8.3829 | 77.6122 | 8.58 | 8.18 | 77.81 | 77.41 | Off flood-path (heuristic) |
| Painkulam | 25 | 177.1 | 23,630 | 8.2602 | 77.1740 | 8.46 | 8.06 | 77.37 | 76.97 | Off flood-path (heuristic) |
| Abdu Rahiman Nagar | 13 | 177.2 | 41,993 | 11.0698 | 75.9388 | 11.27 | 10.87 | 76.14 | 75.74 | Off flood-path (heuristic) |
| Ooty | 25 | 177.5 | 233,426 | 11.4134 | 76.6952 | 11.61 | 11.21 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Kothanallur | 25 | 177.5 | 17,662 | 8.2791 | 77.3096 | 8.48 | 8.08 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Pariyāpuram | 13 | 178.0 | 22,766 | 11.0167 | 75.8667 | 11.22 | 10.82 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Mulakumūd | 25 | 178.2 | 19,538 | 8.2681 | 77.2860 | 8.47 | 8.07 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Nilambūr | 13 | 178.9 | 46,366 | 11.2727 | 76.2257 | 11.47 | 11.07 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Moonniyur | 13 | 178.9 | 55,535 | 11.0597 | 75.9031 | 11.26 | 10.86 | 76.1 | 75.7 | Off flood-path (heuristic) |
| Pugalūr | 25 | 179.0 | 23,408 | 11.0740 | 78.0209 | 11.27 | 10.87 | 78.22 | 77.82 | Off flood-path (heuristic) |
| Nazareth | 25 | 179.8 | 16,584 | 8.5610 | 77.9721 | 8.76 | 8.36 | 78.17 | 77.77 | Off flood-path (heuristic) |
| Pottanūr | 25 | 179.9 | 18,455 | 11.1098 | 77.9888 | 11.31 | 10.91 | 78.19 | 77.79 | Off flood-path (heuristic) |
| Kappiyara | 25 | 180.0 | 15,998 | 8.2466 | 77.2617 | 8.45 | 8.05 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Keezhkulam | 25 | 180.5 | 17,327 | 8.2307 | 77.1863 | 8.43 | 8.03 | 77.39 | 76.99 | Off flood-path (heuristic) |
| Velur | 25 | 180.6 | 25,012 | 11.1082 | 78.0011 | 11.31 | 10.91 | 78.2 | 77.8 | Off flood-path (heuristic) |
| Paramagudi | 25 | 180.6 | 95,579 | 9.5463 | 78.5907 | 9.75 | 9.35 | 78.79 | 78.39 | Off flood-path (heuristic) |
| Peruvallur | 13 | 180.7 | 34,941 | 11.1048 | 75.9327 | 11.3 | 10.9 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Manapparai | 25 | 180.7 | 40,510 | 10.6077 | 78.4258 | 10.81 | 10.41 | 78.63 | 78.23 | Off flood-path (heuristic) |
| Karingal | 25 | 180.8 | 16,691 | 8.2363 | 77.2426 | 8.44 | 8.04 | 77.44 | 77.04 | Off flood-path (heuristic) |
| Tiruvankod | 25 | 181.0 | 18,723 | 8.2452 | 77.3010 | 8.45 | 8.05 | 77.5 | 77.1 | Off flood-path (heuristic) |
| Neduva | 13 | 181.3 | 35,996 | 11.0567 | 75.8668 | 11.26 | 10.86 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Tindal | 25 | 181.4 | 15,440 | 11.3169 | 77.6742 | 11.52 | 11.12 | 77.87 | 77.47 | Off flood-path (heuristic) |
| Pānakkudi | 25 | 181.5 | 29,895 | 8.3220 | 77.5771 | 8.52 | 8.12 | 77.78 | 77.38 | Off flood-path (heuristic) |
| Padmanābhapuram | 25 | 181.6 | 21,342 | 8.2446 | 77.3258 | 8.44 | 8.04 | 77.53 | 77.13 | Off flood-path (heuristic) |
| Kondotty | 13 | 181.7 | 28,794 | 11.1423 | 75.9657 | 11.34 | 10.94 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Boothapandi | 25 | 182.7 | 15,931 | 8.2659 | 77.4461 | 8.47 | 8.07 | 77.65 | 77.25 | Off flood-path (heuristic) |
| Ilaiyankudi | 25 | 182.9 | 24,767 | 9.6251 | 78.6243 | 9.83 | 9.43 | 78.82 | 78.42 | Off flood-path (heuristic) |
| Kāsipālaiyam | 25 | 183.3 | 73,425 | 11.3198 | 77.7097 | 11.52 | 11.12 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Palappallam | 25 | 183.9 | 18,589 | 8.2095 | 77.2476 | 8.41 | 8.01 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Pallikal | 13 | 184.0 | 46,962 | 11.1372 | 75.9257 | 11.34 | 10.94 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Sūrampatti | 25 | 184.2 | 41,782 | 11.3273 | 77.7112 | 11.53 | 11.13 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Ariyallur | 13 | 184.8 | 22,558 | 11.0833 | 75.8490 | 11.28 | 10.88 | 76.05 | 75.65 | Off flood-path (heuristic) |
| Paramathi Velur | 25 | 185.0 | 25,012 | 11.1916 | 77.9563 | 11.39 | 10.99 | 78.16 | 77.76 | Off flood-path (heuristic) |
| Villukuri | 25 | 185.2 | 15,304 | 8.2226 | 77.3732 | 8.42 | 8.02 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Nallavila | 25 | 186.3 | 16,138 | 8.2055 | 77.3444 | 8.41 | 8.01 | 77.54 | 77.14 | Off flood-path (heuristic) |
| Erode | 25 | 186.5 | 521,891 | 11.3428 | 77.7274 | 11.54 | 11.14 | 77.93 | 77.53 | Off flood-path (heuristic) |
| Periya Semūr | 25 | 186.5 | 55,282 | 11.3609 | 77.6895 | 11.56 | 11.16 | 77.89 | 77.49 | Off flood-path (heuristic) |
| Thenhippalam | 13 | 186.5 | 32,045 | 11.1323 | 75.8822 | 11.33 | 10.93 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Reethapuram | 25 | 186.6 | 21,177 | 8.1843 | 77.2481 | 8.38 | 7.98 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Vīrappanchathiram | 25 | 186.8 | 84,453 | 11.3531 | 77.7125 | 11.55 | 11.15 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Gobichettipalayam | 25 | 186.8 | 59,523 | 11.4550 | 77.4422 | 11.65 | 11.25 | 77.64 | 77.24 | Off flood-path (heuristic) |
| Kallukuttam | 25 | 186.9 | 19,093 | 8.1887 | 77.2878 | 8.39 | 7.99 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Aramboli | 25 | 186.9 | 22,846 | 8.2496 | 77.5216 | 8.45 | 8.05 | 77.72 | 77.32 | Off flood-path (heuristic) |
| Colachel | 25 | 187.3 | 23,227 | 8.1794 | 77.2582 | 8.38 | 7.98 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Arumuganeri | 25 | 187.4 | 27,266 | 8.5688 | 78.0909 | 8.77 | 8.37 | 78.29 | 77.89 | Off flood-path (heuristic) |
| Kumārapālaiyam | 25 | 187.4 | 15,706 | 11.5021 | 77.2555 | 11.7 | 11.3 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Sathyamangalam | 25 | 187.5 | 37,816 | 11.5053 | 77.2383 | 11.71 | 11.31 | 77.44 | 77.04 | Off flood-path (heuristic) |
| Kizhuparamba | 13 | 188.0 | 22,062 | 11.2526 | 76.0244 | 11.45 | 11.05 | 76.22 | 75.82 | Off flood-path (heuristic) |
| Brāhmana Periya Agrahāram | 25 | 188.1 | 24,798 | 11.3690 | 77.7063 | 11.57 | 11.17 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Ālūr | 25 | 188.2 | 15,063 | 8.1931 | 77.3643 | 8.39 | 7.99 | 77.56 | 77.16 | Off flood-path (heuristic) |
| Salangaippālaiyam | 25 | 188.2 | 15,609 | 11.4260 | 77.5707 | 11.63 | 11.23 | 77.77 | 77.37 | Off flood-path (heuristic) |
| Cherukavu | 13 | 188.3 | 30,126 | 11.1731 | 75.9086 | 11.37 | 10.97 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Chelambra | 13 | 188.8 | 34,149 | 11.1509 | 75.8719 | 11.35 | 10.95 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Kayalpattinam | 25 | 189.3 | 40,588 | 8.5714 | 78.1199 | 8.77 | 8.37 | 78.32 | 77.92 | Off flood-path (heuristic) |
| Pallipalayam | 25 | 190.4 | 40,140 | 11.3652 | 77.7623 | 11.57 | 11.17 | 77.96 | 77.56 | Off flood-path (heuristic) |
| Ālampālaiyam | 25 | 190.5 | 20,286 | 11.3635 | 77.7677 | 11.56 | 11.16 | 77.97 | 77.57 | Off flood-path (heuristic) |
| Āchāripallam Vāniyakudi | 25 | 190.7 | 16,822 | 8.1743 | 77.3849 | 8.37 | 7.97 | 77.58 | 77.18 | Off flood-path (heuristic) |
| Ramanattukara | 13 | 191.4 | 35,937 | 11.1780 | 75.8689 | 11.38 | 10.98 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Nāgercoil | 25 | 191.5 | 224,849 | 8.1790 | 77.4323 | 8.38 | 7.98 | 77.63 | 77.23 | Off flood-path (heuristic) |
| Sūryampālaiyam | 25 | 191.9 | 28,585 | 11.4045 | 77.7123 | 11.6 | 11.2 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Kollivāyal | 25 | 192.1 | 21,943 | 11.4998 | 76.4815 | 11.7 | 11.3 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Vazhayur | 13 | 192.7 | 36,909 | 11.2173 | 75.8999 | 11.42 | 11.02 | 76.1 | 75.7 | Off flood-path (heuristic) |
| Ferokh | 13 | 193.4 | 32,122 | 11.1799 | 75.8414 | 11.38 | 10.98 | 76.04 | 75.64 | Off flood-path (heuristic) |
| Pudūr | 25 | 193.5 | 17,240 | 11.4360 | 77.6760 | 11.64 | 11.24 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Tisaiyanvilai | 25 | 194.0 | 23,702 | 8.3370 | 77.8678 | 8.54 | 8.14 | 78.07 | 77.67 | Off flood-path (heuristic) |
| Karuvanthuruthy | 13 | 194.1 | 21,952 | 11.1721 | 75.8226 | 11.37 | 10.97 | 76.02 | 75.62 | Off flood-path (heuristic) |
| Gudalur | 25 | 194.4 | 49,535 | 11.5207 | 76.4814 | 11.72 | 11.32 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Bhavāni | 25 | 194.8 | 39,744 | 11.4455 | 77.6821 | 11.65 | 11.25 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Elandakuttai | 25 | 195.1 | 16,160 | 11.4060 | 77.7750 | 11.61 | 11.21 | 77.98 | 77.58 | Off flood-path (heuristic) |
| Beypore | 13 | 195.2 | 70,751 | 11.1715 | 75.8061 | 11.37 | 10.97 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Cheruvannur | 13 | 195.3 | 61,614 | 11.1903 | 75.8283 | 11.39 | 10.99 | 76.03 | 75.63 | Off flood-path (heuristic) |
| Udangudi | 25 | 195.3 | 19,738 | 8.4292 | 78.0297 | 8.63 | 8.23 | 78.23 | 77.83 | Off flood-path (heuristic) |
| Jāmbai | 25 | 195.4 | 16,522 | 11.4678 | 77.6434 | 11.67 | 11.27 | 77.84 | 77.44 | Off flood-path (heuristic) |
| Tiruchchendur | 25 | 195.5 | 32,171 | 8.4972 | 78.1191 | 8.7 | 8.3 | 78.32 | 77.92 | Off flood-path (heuristic) |
| Tattānkuttai | 25 | 195.6 | 24,708 | 11.4352 | 77.7237 | 11.64 | 11.24 | 77.92 | 77.52 | Off flood-path (heuristic) |
| Kumarapalayam | 25 | 196.0 | 195,071 | 11.4450 | 77.7110 | 11.64 | 11.24 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Sankarapatti | 25 | 196.0 | 26,536 | 10.0477 | 78.7472 | 10.25 | 9.85 | 78.95 | 78.55 | Off flood-path (heuristic) |
| Mavoor | 13 | 196.0 | 29,781 | 11.2667 | 75.9167 | 11.47 | 11.07 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Perumanna | 13 | 196.5 | 35,460 | 11.2529 | 75.8906 | 11.45 | 11.05 | 76.09 | 75.69 | Off flood-path (heuristic) |
| Dharmapuram | 25 | 196.7 | 17,476 | 8.1203 | 77.3890 | 8.32 | 7.92 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Tondalam | 25 | 196.8 | 44,590 | 11.5014 | 76.3498 | 11.7 | 11.3 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Pantheeramkavu | 13 | 197.1 | 24,537 | 11.2305 | 75.8518 | 11.43 | 11.03 | 76.05 | 75.65 | Off flood-path (heuristic) |
| Olavanna | 13 | 197.4 | 43,895 | 11.2184 | 75.8325 | 11.42 | 11.02 | 76.03 | 75.63 | Off flood-path (heuristic) |
| Thazhecode | 13 | 197.4 | 25,116 | 11.3226 | 75.9758 | 11.52 | 11.12 | 76.18 | 75.78 | Off flood-path (heuristic) |
| Pūlakkōd | 13 | 197.8 | 29,872 | 11.3097 | 75.9500 | 11.51 | 11.11 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Kuttikkāttūr | 13 | 198.1 | 25,929 | 11.2626 | 75.8796 | 11.46 | 11.06 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Devarshola | 25 | 198.1 | 24,954 | 11.5437 | 76.4404 | 11.74 | 11.34 | 76.64 | 76.24 | Off flood-path (heuristic) |
| Pūvātūparamba | 13 | 198.2 | 27,598 | 11.2710 | 75.8894 | 11.47 | 11.07 | 76.09 | 75.69 | Off flood-path (heuristic) |
| Kāraikkudi | 25 | 198.5 | 181,851 | 10.0662 | 78.7678 | 10.27 | 9.87 | 78.97 | 78.57 | Off flood-path (heuristic) |
| Tiruchengode | 25 | 198.8 | 95,335 | 11.3802 | 77.8944 | 11.58 | 11.18 | 78.09 | 77.69 | Off flood-path (heuristic) |
| Kulittalai | 25 | 199.3 | 27,910 | 10.9349 | 78.4125 | 11.13 | 10.73 | 78.61 | 78.21 | Off flood-path (heuristic) |
| Periyapatti | 25 | 199.3 | 15,690 | 11.2052 | 78.1512 | 11.41 | 11.01 | 78.35 | 77.95 | Off flood-path (heuristic) |

## Cheruthoni Dam (Kerala)
Dam coordinates: 9.85, 76.98

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Munnar | 13 | 28.0 | 68,000 | 10.0882 | 77.0624 | 10.29 | 9.89 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Erāttupetta | 13 | 28.5 | 34,814 | 9.6875 | 76.7789 | 9.89 | 9.49 | 76.98 | 76.58 | Downstream (heuristic - verify) |
| Thodupuzha | 13 | 28.7 | 52,045 | 9.8939 | 76.7222 | 10.09 | 9.69 | 76.92 | 76.52 | Downstream (heuristic - verify) |
| Tevāram | 25 | 33.4 | 16,079 | 9.8967 | 77.2809 | 10.1 | 9.7 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Kombai | 25 | 34.6 | 15,960 | 9.8475 | 77.2960 | 10.05 | 9.65 | 77.5 | 77.1 | Off flood-path (heuristic) |
| Gudalur | 25 | 35.2 | 47,419 | 9.6783 | 77.2495 | 9.88 | 9.48 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Cumbum | 25 | 35.7 | 68,090 | 9.7365 | 77.2847 | 9.94 | 9.54 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Palai | 13 | 35.9 | 22,056 | 9.7131 | 76.6833 | 9.91 | 9.51 | 76.88 | 76.48 | Downstream (heuristic - verify) |
| Uttamapālaiyam | 25 | 38.3 | 29,050 | 9.8070 | 77.3272 | 10.01 | 9.61 | 77.53 | 77.13 | Off flood-path (heuristic) |
| Kāmayakkavundanpatti | 25 | 39.3 | 16,134 | 9.7386 | 77.3200 | 9.94 | 9.54 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Kuttampuzha | 13 | 42.8 | 25,436 | 10.1503 | 76.7354 | 10.35 | 9.95 | 76.94 | 76.54 | Off flood-path (heuristic) |
| Chinnamanūr | 25 | 44.0 | 42,305 | 9.8400 | 77.3811 | 10.04 | 9.64 | 77.58 | 77.18 | Off flood-path (heuristic) |
| Chokkanāthapuram | 25 | 44.2 | 15,625 | 9.9921 | 77.3566 | 10.19 | 9.79 | 77.56 | 77.16 | Off flood-path (heuristic) |
| Bodināyakkanūr | 25 | 44.3 | 75,680 | 10.0117 | 77.3498 | 10.21 | 9.81 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Kotamangalam | 13 | 45.3 | 38,837 | 10.0643 | 76.6284 | 10.26 | 9.86 | 76.83 | 76.43 | Downstream (heuristic - verify) |
| Mūvattupula | 13 | 46.6 | 29,664 | 9.9849 | 76.5773 | 10.18 | 9.78 | 76.78 | 76.38 | Downstream (heuristic - verify) |
| Muvattupuzha | 13 | 46.8 | 30,397 | 9.9799 | 76.5738 | 10.18 | 9.78 | 76.77 | 76.37 | Downstream (heuristic - verify) |
| Ettumanoor | 13 | 49.2 | 26,993 | 9.6700 | 76.5700 | 9.87 | 9.47 | 76.77 | 76.37 | Downstream (heuristic - verify) |
| Ettumānūr | 13 | 50.3 | 40,438 | 9.6690 | 76.5592 | 9.87 | 9.47 | 76.76 | 76.36 | Downstream (heuristic - verify) |
| Iramallūr | 13 | 50.5 | 33,829 | 10.0619 | 76.5717 | 10.26 | 9.86 | 76.77 | 76.37 | Downstream (heuristic - verify) |
| Marayur | 13 | 51.4 | 25,000 | 10.2764 | 77.1620 | 10.48 | 10.08 | 77.36 | 76.96 | Off flood-path (heuristic) |
| Piravam | 13 | 52.6 | 28,254 | 9.8667 | 76.5000 | 10.07 | 9.67 | 76.7 | 76.3 | Downstream (heuristic - verify) |
| Valparai | 25 | 53.1 | 90,353 | 10.3269 | 76.9512 | 10.53 | 10.13 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Vijayapuram | 13 | 54.2 | 29,248 | 9.5912 | 76.5612 | 9.79 | 9.39 | 76.76 | 76.36 | Downstream (heuristic - verify) |
| Puthuppally | 13 | 55.0 | 29,635 | 9.5575 | 76.5748 | 9.76 | 9.36 | 76.77 | 76.37 | Downstream (heuristic - verify) |
| Perumbaikad | 13 | 55.5 | 42,839 | 9.6183 | 76.5313 | 9.82 | 9.42 | 76.73 | 76.33 | Downstream (heuristic - verify) |
| Teni | 25 | 57.4 | 1,034,724 | 10.0112 | 77.4777 | 10.21 | 9.81 | 77.68 | 77.28 | Off flood-path (heuristic) |
| Allinagaram | 25 | 58.0 | 94,453 | 10.0274 | 77.4781 | 10.23 | 9.83 | 77.68 | 77.28 | Off flood-path (heuristic) |
| Kottayam | 13 | 58.2 | 55,374 | 9.5869 | 76.5213 | 9.79 | 9.39 | 76.72 | 76.32 | Downstream (heuristic - verify) |
| Aymanam | 13 | 59.1 | 34,470 | 9.6068 | 76.5006 | 9.81 | 9.41 | 76.7 | 76.3 | Downstream (heuristic - verify) |
| Panachikkad | 13 | 59.9 | 43,595 | 9.5297 | 76.5406 | 9.73 | 9.33 | 76.74 | 76.34 | Downstream (heuristic - verify) |
| Vengola Kizhakkumbāgam | 13 | 60.1 | 32,697 | 10.0637 | 76.4761 | 10.26 | 9.86 | 76.68 | 76.28 | Downstream (heuristic - verify) |
| Nattakam | 13 | 61.3 | 38,599 | 9.5453 | 76.5141 | 9.75 | 9.35 | 76.71 | 76.31 | Downstream (heuristic - verify) |
| Perumbavoor | 13 | 62.4 | 28,110 | 10.1069 | 76.4737 | 10.31 | 9.91 | 76.67 | 76.27 | Downstream (heuristic - verify) |
| Perumpāvūr | 13 | 62.6 | 27,105 | 10.1154 | 76.4761 | 10.32 | 9.92 | 76.68 | 76.28 | Downstream (heuristic - verify) |
| Chengalam | 13 | 62.8 | 16,111 | 9.5966 | 76.4678 | 9.8 | 9.4 | 76.67 | 76.27 | Downstream (heuristic - verify) |
| Koovappady | 13 | 63.9 | 29,339 | 10.1553 | 76.4854 | 10.36 | 9.96 | 76.69 | 76.29 | Downstream (heuristic - verify) |
| Puthencruz | 13 | 64.0 | 22,378 | 9.9773 | 76.4105 | 10.18 | 9.78 | 76.61 | 76.21 | Downstream (heuristic - verify) |
| Paippad | 13 | 64.1 | 21,338 | 9.4246 | 76.5848 | 9.62 | 9.22 | 76.78 | 76.38 | Downstream (heuristic - verify) |
| Kunnatnād | 13 | 64.6 | 22,881 | 10.0429 | 76.4241 | 10.24 | 9.84 | 76.62 | 76.22 | Downstream (heuristic - verify) |
| Vaikam | 13 | 64.9 | 23,234 | 9.7486 | 76.3964 | 9.95 | 9.55 | 76.6 | 76.2 | Downstream (heuristic - verify) |
| Mulamthuruthy | 13 | 65.2 | 25,852 | 9.9003 | 76.3870 | 10.1 | 9.7 | 76.59 | 76.19 | Downstream (heuristic - verify) |
| Chelamartam | 13 | 65.6 | 16,844 | 10.1371 | 76.4570 | 10.34 | 9.94 | 76.66 | 76.26 | Downstream (heuristic - verify) |
| Marampilly | 13 | 65.8 | 23,272 | 10.1138 | 76.4418 | 10.31 | 9.91 | 76.64 | 76.24 | Downstream (heuristic - verify) |
| Changanācheri | 13 | 66.5 | 51,430 | 9.4420 | 76.5360 | 9.64 | 9.24 | 76.74 | 76.34 | Downstream (heuristic - verify) |
| Manakunnam | 13 | 66.6 | 39,538 | 9.8857 | 76.3733 | 10.09 | 9.69 | 76.57 | 76.17 | Downstream (heuristic - verify) |
| Vāzhakulam | 13 | 67.1 | 18,358 | 10.0938 | 76.4198 | 10.29 | 9.89 | 76.62 | 76.22 | Downstream (heuristic - verify) |
| Thiruvankulam | 13 | 68.0 | 23,160 | 9.9468 | 76.3666 | 10.15 | 9.75 | 76.57 | 76.17 | Downstream (heuristic - verify) |
| Pathanāmthitta | 13 | 68.4 | 38,285 | 9.2667 | 76.7833 | 9.47 | 9.07 | 76.98 | 76.58 | Off flood-path (heuristic) |
| Tiruvalla | 13 | 68.4 | 57,223 | 9.3816 | 76.5749 | 9.58 | 9.18 | 76.77 | 76.37 | Downstream (heuristic - verify) |
| Periyakulam | 25 | 68.8 | 42,976 | 10.1227 | 77.5437 | 10.32 | 9.92 | 77.74 | 77.34 | Off flood-path (heuristic) |
| Thanneermukkom | 13 | 68.9 | 31,525 | 9.6634 | 76.3807 | 9.86 | 9.46 | 76.58 | 76.18 | Downstream (heuristic - verify) |
| Arukutti | 13 | 69.0 | 17,944 | 9.8667 | 76.3500 | 10.07 | 9.67 | 76.55 | 76.15 | Downstream (heuristic - verify) |
| Pallipuram | 13 | 69.0 | 28,276 | 9.7550 | 76.3572 | 9.96 | 9.56 | 76.56 | 76.16 | Downstream (heuristic - verify) |
| Edattala | 13 | 69.1 | 77,811 | 10.0564 | 76.3845 | 10.26 | 9.86 | 76.58 | 76.18 | Downstream (heuristic - verify) |
| Thaikkattussery | 13 | 70.2 | 20,874 | 9.7715 | 76.3439 | 9.97 | 9.57 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Martūru | 13 | 70.4 | 18,890 | 10.1717 | 76.4264 | 10.37 | 9.97 | 76.63 | 76.23 | Downstream (heuristic - verify) |
| Kodaikānāl | 25 | 70.6 | 36,501 | 10.2393 | 77.4893 | 10.44 | 10.04 | 77.69 | 77.29 | Off flood-path (heuristic) |
| Kokōtamangalam South | 13 | 70.7 | 17,047 | 9.6795 | 76.3589 | 9.88 | 9.48 | 76.56 | 76.16 | Downstream (heuristic - verify) |
| Srīkandamangalam | 13 | 70.8 | 23,681 | 9.6594 | 76.3633 | 9.86 | 9.46 | 76.56 | 76.16 | Downstream (heuristic - verify) |
| Kutiatodu | 13 | 71.1 | 23,669 | 9.8000 | 76.3333 | 10.0 | 9.6 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Tripunittura | 13 | 71.6 | 69,390 | 9.9428 | 76.3333 | 10.14 | 9.74 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Chengannūr | 13 | 71.6 | 25,043 | 9.3157 | 76.6151 | 9.52 | 9.12 | 76.82 | 76.42 | Downstream (heuristic - verify) |
| Nedumbassery | 13 | 71.9 | 29,706 | 10.1565 | 76.4017 | 10.36 | 9.96 | 76.6 | 76.2 | Downstream (heuristic - verify) |
| Vayalār | 13 | 71.9 | 25,094 | 9.7116 | 76.3389 | 9.91 | 9.51 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Āndippatti | 25 | 72.1 | 27,287 | 9.9980 | 77.6210 | 10.2 | 9.8 | 77.82 | 77.42 | Off flood-path (heuristic) |
| Kakkanad | 13 | 72.3 | 25,531 | 10.0164 | 76.3417 | 10.22 | 9.82 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Shertallai | 13 | 72.5 | 45,474 | 9.6858 | 76.3400 | 9.89 | 9.49 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Maradu | 13 | 72.5 | 44,704 | 9.9365 | 76.3238 | 10.14 | 9.74 | 76.52 | 76.12 | Downstream (heuristic - verify) |
| Muhamma | 13 | 73.0 | 25,861 | 9.6089 | 76.3608 | 9.81 | 9.41 | 76.56 | 76.16 | Downstream (heuristic - verify) |
| Cherthala | 13 | 73.0 | 45,827 | 9.6844 | 76.3356 | 9.88 | 9.48 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Kumbalam | 13 | 73.5 | 29,193 | 9.9063 | 76.3113 | 10.11 | 9.71 | 76.51 | 76.11 | Downstream (heuristic - verify) |
| Settūr | 25 | 73.7 | 20,228 | 9.4056 | 77.4784 | 9.61 | 9.21 | 77.68 | 77.28 | Off flood-path (heuristic) |
| Vazhakkala | 13 | 73.8 | 51,242 | 10.0124 | 76.3263 | 10.21 | 9.81 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Aroor | 13 | 74.0 | 39,214 | 9.8694 | 76.3050 | 10.07 | 9.67 | 76.5 | 76.1 | Downstream (heuristic - verify) |
| Alwaye | 13 | 74.2 | 23,703 | 10.1065 | 76.3548 | 10.31 | 9.91 | 76.55 | 76.15 | Downstream (heuristic - verify) |
| Kodamthuruth | 13 | 74.5 | 21,295 | 9.8006 | 76.3015 | 10.0 | 9.6 | 76.5 | 76.1 | Downstream (heuristic - verify) |
| Aluva | 13 | 74.5 | 24,108 | 10.1076 | 76.3516 | 10.31 | 9.91 | 76.55 | 76.15 | Downstream (heuristic - verify) |
| Ezhupunna | 13 | 74.6 | 27,528 | 9.8211 | 76.2998 | 10.02 | 9.62 | 76.5 | 76.1 | Downstream (heuristic - verify) |
| Sivagiri | 25 | 74.7 | 23,040 | 9.3446 | 77.4291 | 9.54 | 9.14 | 77.63 | 77.23 | Off flood-path (heuristic) |
| Choornikkara | 13 | 74.8 | 43,207 | 10.0879 | 76.3411 | 10.29 | 9.89 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Angamāli | 13 | 75.1 | 34,399 | 10.1905 | 76.3879 | 10.39 | 9.99 | 76.59 | 76.19 | Downstream (heuristic - verify) |
| Kalamassery | 13 | 75.4 | 71,038 | 10.0614 | 76.3263 | 10.26 | 9.86 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Mannanchōri | 13 | 75.4 | 32,139 | 9.5722 | 76.3525 | 9.77 | 9.37 | 76.55 | 76.15 | Downstream (heuristic - verify) |
| Settiyārpatti | 25 | 75.8 | 17,520 | 9.3935 | 77.4935 | 9.59 | 9.19 | 77.69 | 77.29 | Off flood-path (heuristic) |
| Vathirairuppu | 25 | 76.1 | 16,784 | 9.6353 | 77.6389 | 9.84 | 9.44 | 77.84 | 77.44 | Off flood-path (heuristic) |
| Kottur | 25 | 76.3 | 26,627 | 10.5365 | 76.9803 | 10.74 | 10.34 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Kumbalangy | 13 | 76.4 | 42,367 | 9.8798 | 76.2835 | 10.08 | 9.68 | 76.48 | 76.08 | Downstream (heuristic - verify) |
| Rajapalayam | 25 | 76.8 | 130,442 | 9.4530 | 77.5533 | 9.65 | 9.25 | 77.75 | 77.35 | Off flood-path (heuristic) |
| Kadungalūr | 13 | 77.1 | 39,666 | 10.0948 | 76.3211 | 10.29 | 9.89 | 76.52 | 76.12 | Downstream (heuristic - verify) |
| Mamsapuram | 25 | 77.2 | 18,635 | 9.4996 | 77.5879 | 9.7 | 9.3 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Chengamanād | 13 | 77.7 | 29,576 | 10.1541 | 76.3416 | 10.35 | 9.95 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Komalapuram | 13 | 77.8 | 47,126 | 9.5419 | 76.3424 | 9.74 | 9.34 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Kalavoor | 13 | 78.0 | 29,564 | 9.5705 | 76.3276 | 9.77 | 9.37 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Elumalai | 25 | 78.8 | 15,746 | 9.8650 | 77.6992 | 10.07 | 9.67 | 77.9 | 77.5 | Off flood-path (heuristic) |
| Cheranellūr | 13 | 79.0 | 30,594 | 10.0543 | 76.2896 | 10.25 | 9.85 | 76.49 | 76.09 | Downstream (heuristic - verify) |
| Mēppādam | 13 | 79.2 | 17,067 | 9.3242 | 76.4934 | 9.52 | 9.12 | 76.69 | 76.29 | Downstream (heuristic - verify) |
| Kanayannur | 13 | 79.2 | 851,406 | 9.9667 | 76.2667 | 10.17 | 9.77 | 76.47 | 76.07 | Downstream (heuristic - verify) |
| Kochi | 13 | 79.5 | 633,553 | 9.9399 | 76.2602 | 10.14 | 9.74 | 76.46 | 76.06 | Downstream (heuristic - verify) |
| Vettaikkaranpudur | 25 | 79.5 | 18,128 | 10.5621 | 76.9130 | 10.76 | 10.36 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Devadanapatti | 25 | 79.8 | 19,285 | 10.1467 | 77.6439 | 10.35 | 9.95 | 77.84 | 77.44 | Off flood-path (heuristic) |
| Elūr | 13 | 80.0 | 31,468 | 10.0667 | 76.2833 | 10.27 | 9.87 | 76.48 | 76.08 | Downstream (heuristic - verify) |
| Alengād | 13 | 80.0 | 47,329 | 10.1190 | 76.3023 | 10.32 | 9.92 | 76.5 | 76.1 | Downstream (heuristic - verify) |
| Pathirappally | 13 | 80.2 | 27,445 | 9.5354 | 76.3221 | 9.74 | 9.34 | 76.52 | 76.12 | Downstream (heuristic - verify) |
| Māvelikara | 13 | 80.4 | 28,300 | 9.2593 | 76.5564 | 9.46 | 9.06 | 76.76 | 76.36 | Downstream (heuristic - verify) |
| Alangad | 13 | 80.5 | 47,329 | 10.1019 | 76.2910 | 10.3 | 9.9 | 76.49 | 76.09 | Downstream (heuristic - verify) |
| Mulavukad | 13 | 80.6 | 21,833 | 10.0136 | 76.2631 | 10.21 | 9.81 | 76.46 | 76.06 | Downstream (heuristic - verify) |
| Srivilliputhur | 25 | 80.9 | 75,396 | 9.5127 | 77.6337 | 9.71 | 9.31 | 77.83 | 77.43 | Off flood-path (heuristic) |
| Vypīn | 13 | 81.0 | 23,717 | 9.9667 | 76.2500 | 10.17 | 9.77 | 76.45 | 76.05 | Downstream (heuristic - verify) |
| Varappuzha | 13 | 81.6 | 26,750 | 10.0759 | 76.2715 | 10.28 | 9.88 | 76.47 | 76.07 | Downstream (heuristic - verify) |
| Anaimalai | 25 | 81.7 | 17,208 | 10.5830 | 76.9344 | 10.78 | 10.38 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Adūr | 13 | 81.8 | 29,652 | 9.1560 | 76.7319 | 9.36 | 8.96 | 76.93 | 76.53 | Off flood-path (heuristic) |
| Alappuzha | 13 | 82.1 | 240,991 | 9.4900 | 76.3264 | 9.69 | 9.29 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Vāsudevanallūr | 25 | 82.6 | 21,361 | 9.2417 | 77.4118 | 9.44 | 9.04 | 77.61 | 77.21 | Off flood-path (heuristic) |
| Karumālūr | 13 | 82.9 | 29,805 | 10.1329 | 76.2799 | 10.33 | 9.93 | 76.48 | 76.08 | Downstream (heuristic - verify) |
| Koratti | 13 | 83.3 | 17,618 | 10.2660 | 76.3477 | 10.47 | 10.07 | 76.55 | 76.15 | Downstream (heuristic - verify) |
| Sundakkāmpālaiyam | 25 | 83.7 | 16,459 | 10.5666 | 77.2135 | 10.77 | 10.37 | 77.41 | 77.01 | Off flood-path (heuristic) |
| Kadamakudi | 13 | 83.9 | 16,295 | 10.0642 | 76.2456 | 10.26 | 9.86 | 76.45 | 76.05 | Downstream (heuristic - verify) |
| Kallūr Tekkumuri | 13 | 83.9 | 17,480 | 10.2401 | 76.3236 | 10.44 | 10.04 | 76.52 | 76.12 | Downstream (heuristic - verify) |
| Kallūr Vadakummuri | 13 | 84.3 | 25,259 | 10.2532 | 76.3281 | 10.45 | 10.05 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Elamkunnapuzha | 13 | 85.3 | 26,997 | 10.0267 | 76.2223 | 10.23 | 9.83 | 76.42 | 76.02 | Downstream (heuristic - verify) |
| Haripād | 13 | 85.3 | 15,588 | 9.2836 | 76.4552 | 9.48 | 9.08 | 76.66 | 76.26 | Downstream (heuristic - verify) |
| Kottuvalli | 13 | 85.4 | 42,922 | 10.1112 | 76.2463 | 10.31 | 9.91 | 76.45 | 76.05 | Downstream (heuristic - verify) |
| Narakal | 13 | 85.6 | 23,760 | 10.0383 | 76.2221 | 10.24 | 9.84 | 76.42 | 76.02 | Downstream (heuristic - verify) |
| Kizhake Chālakudi | 13 | 86.4 | 49,525 | 10.3007 | 76.3376 | 10.5 | 10.1 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Bharanikāvu Tekku | 13 | 87.1 | 15,922 | 9.1849 | 76.5608 | 9.38 | 8.98 | 76.76 | 76.36 | Downstream (heuristic - verify) |
| Udumalaippettai | 25 | 87.1 | 61,133 | 10.5881 | 77.2478 | 10.79 | 10.39 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Kattanam | 13 | 87.8 | 19,764 | 9.1761 | 76.5632 | 9.38 | 8.98 | 76.76 | 76.36 | Downstream (heuristic - verify) |
| Sūleswaranpatti | 25 | 87.8 | 20,104 | 10.6388 | 77.0084 | 10.84 | 10.44 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Puliyankudi | 25 | 88.0 | 66,034 | 9.1749 | 77.3980 | 9.37 | 8.97 | 77.6 | 77.2 | Off flood-path (heuristic) |
| Karthikappally | 13 | 88.0 | 19,021 | 9.2568 | 76.4487 | 9.46 | 9.06 | 76.65 | 76.25 | Downstream (heuristic - verify) |
| Kumārapuram | 13 | 88.0 | 26,943 | 9.2708 | 76.4326 | 9.47 | 9.07 | 76.63 | 76.23 | Downstream (heuristic - verify) |
| Cheppad | 13 | 88.2 | 20,052 | 9.2346 | 76.4733 | 9.43 | 9.03 | 76.67 | 76.27 | Downstream (heuristic - verify) |
| Parūr | 13 | 88.5 | 31,503 | 10.1477 | 76.2300 | 10.35 | 9.95 | 76.43 | 76.03 | Downstream (heuristic - verify) |
| Puthenvelikara | 13 | 88.7 | 33,372 | 10.1851 | 76.2454 | 10.39 | 9.99 | 76.45 | 76.05 | Downstream (heuristic - verify) |
| Periyakottai | 25 | 88.7 | 17,356 | 10.5909 | 77.2797 | 10.79 | 10.39 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Chendamangalam | 13 | 88.7 | 29,326 | 10.1632 | 76.2346 | 10.36 | 9.96 | 76.43 | 76.03 | Downstream (heuristic - verify) |
| Ūttukuli | 25 | 89.2 | 16,354 | 10.6519 | 76.9778 | 10.85 | 10.45 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Palani | 25 | 89.2 | 70,467 | 10.4503 | 77.5209 | 10.65 | 10.25 | 77.72 | 77.32 | Off flood-path (heuristic) |
| Usilampatti | 25 | 89.3 | 35,219 | 9.9694 | 77.7862 | 10.17 | 9.77 | 77.99 | 77.59 | Off flood-path (heuristic) |
| Madattukkulam | 25 | 89.4 | 20,620 | 10.5587 | 77.3660 | 10.76 | 10.36 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Sivagirippatti | 25 | 89.9 | 17,306 | 10.4502 | 77.5303 | 10.65 | 10.25 | 77.73 | 77.33 | Off flood-path (heuristic) |
| Pollachi | 25 | 89.9 | 90,180 | 10.6583 | 77.0085 | 10.86 | 10.46 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Muthukulam | 13 | 90.7 | 20,740 | 9.2168 | 76.4592 | 9.42 | 9.02 | 76.66 | 76.26 | Downstream (heuristic - verify) |
| Kayamkulam | 13 | 91.0 | 68,634 | 9.1817 | 76.5009 | 9.38 | 8.98 | 76.7 | 76.3 | Downstream (heuristic - verify) |
| Pattiyūrgrāmam | 13 | 91.4 | 23,460 | 9.1774 | 76.5011 | 9.38 | 8.98 | 76.7 | 76.3 | Downstream (heuristic - verify) |
| Ayakudi | 25 | 91.5 | 27,156 | 10.4499 | 77.5520 | 10.65 | 10.25 | 77.75 | 77.35 | Off flood-path (heuristic) |
| Vattalkundu | 25 | 92.0 | 22,928 | 10.1607 | 77.7588 | 10.36 | 9.96 | 77.96 | 77.56 | Off flood-path (heuristic) |
| Vadakakarai | 13 | 92.2 | 20,571 | 10.1664 | 76.2018 | 10.37 | 9.97 | 76.4 | 76.0 | Downstream (heuristic - verify) |
| Krishnāpuram | 13 | 92.4 | 26,705 | 9.1521 | 76.5234 | 9.35 | 8.95 | 76.72 | 76.32 | Downstream (heuristic - verify) |
| Punalūr | 13 | 92.6 | 47,263 | 9.0196 | 76.9226 | 9.22 | 8.82 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Moothakunnam | 13 | 93.3 | 27,458 | 10.1899 | 76.2008 | 10.39 | 9.99 | 76.4 | 76.0 | Downstream (heuristic - verify) |
| Kandalloor | 13 | 93.5 | 19,925 | 9.1756 | 76.4713 | 9.38 | 8.98 | 76.67 | 76.27 | Downstream (heuristic - verify) |
| Ochira | 13 | 94.7 | 28,412 | 9.1348 | 76.5117 | 9.33 | 8.93 | 76.71 | 76.31 | Downstream (heuristic - verify) |
| Kadayanallur | 25 | 95.1 | 90,364 | 9.0728 | 77.3415 | 9.27 | 8.87 | 77.54 | 77.14 | Off flood-path (heuristic) |
| Vadakarai Kīl Pidāgai | 25 | 95.7 | 20,821 | 9.0401 | 77.2741 | 9.24 | 8.84 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Kodungallūr | 13 | 95.9 | 60,190 | 10.2326 | 76.1951 | 10.43 | 10.03 | 76.4 | 76.0 | Downstream (heuristic - verify) |
| Karungappalli | 13 | 96.1 | 25,336 | 9.1042 | 76.5370 | 9.3 | 8.9 | 76.74 | 76.34 | Downstream (heuristic - verify) |
| Thodiyoor | 13 | 96.5 | 25,884 | 9.0780 | 76.5777 | 9.28 | 8.88 | 76.78 | 76.38 | Off flood-path (heuristic) |
| Thekkumkara | 13 | 96.7 | 15,258 | 10.2819 | 76.2132 | 10.48 | 10.08 | 76.41 | 76.01 | Downstream (heuristic - verify) |
| Kottārakara | 13 | 96.8 | 29,788 | 9.0036 | 76.7738 | 9.2 | 8.8 | 76.97 | 76.57 | Off flood-path (heuristic) |
| Sankarankovil | 25 | 97.4 | 57,277 | 9.1705 | 77.5411 | 9.37 | 8.97 | 77.74 | 77.34 | Off flood-path (heuristic) |
| Kulasēkarapuram | 13 | 97.7 | 26,907 | 9.0912 | 76.5303 | 9.29 | 8.89 | 76.73 | 76.33 | Downstream (heuristic - verify) |
| Pudunagaram | 13 | 97.8 | 17,892 | 10.6802 | 76.6836 | 10.88 | 10.48 | 76.88 | 76.48 | Off flood-path (heuristic) |
| Chittūr | 13 | 97.9 | 32,298 | 10.6997 | 76.7471 | 10.9 | 10.5 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Edavilangu | 13 | 98.6 | 20,363 | 10.2403 | 76.1710 | 10.44 | 10.04 | 76.37 | 75.97 | Downstream (heuristic - verify) |
| Koduvayur | 13 | 99.5 | 20,703 | 10.6867 | 76.6588 | 10.89 | 10.49 | 76.86 | 76.46 | Off flood-path (heuristic) |
| Ādanāttutekkumuri Kizhakku | 13 | 99.8 | 22,250 | 9.0791 | 76.5137 | 9.28 | 8.88 | 76.71 | 76.31 | Downstream (heuristic - verify) |
| Kalleribhāgam | 13 | 99.9 | 21,723 | 9.0540 | 76.5580 | 9.25 | 8.85 | 76.76 | 76.36 | Off flood-path (heuristic) |
| Panangad | 13 | 99.9 | 15,630 | 10.2728 | 76.1748 | 10.47 | 10.07 | 76.37 | 75.97 | Downstream (heuristic - verify) |
| Sivakasi | 25 | 100.1 | 234,704 | 9.4500 | 77.7980 | 9.65 | 9.25 | 78.0 | 77.6 | Off flood-path (heuristic) |
| Irinjālakuda | 13 | 100.4 | 29,208 | 10.3424 | 76.2112 | 10.54 | 10.14 | 76.41 | 76.01 | Downstream (heuristic - verify) |
| Sithurajapuram | 25 | 100.5 | 16,860 | 9.4214 | 77.7873 | 9.62 | 9.22 | 77.99 | 77.59 | Off flood-path (heuristic) |
| Shenkottai | 25 | 101.3 | 26,823 | 8.9774 | 77.2463 | 9.18 | 8.78 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Viswanatham | 25 | 101.4 | 25,555 | 9.4295 | 77.8003 | 9.63 | 9.23 | 78.0 | 77.6 | Off flood-path (heuristic) |
| Alattūr | 13 | 101.5 | 26,720 | 10.6500 | 76.5333 | 10.85 | 10.45 | 76.73 | 76.33 | Off flood-path (heuristic) |
| Nilakottai | 25 | 101.5 | 22,197 | 10.1650 | 77.8502 | 10.36 | 9.96 | 78.05 | 77.65 | Off flood-path (heuristic) |
| Amballūr | 13 | 101.9 | 29,341 | 10.4343 | 76.2634 | 10.63 | 10.23 | 76.46 | 76.06 | Downstream (heuristic - verify) |
| Tiruttangal | 25 | 102.0 | 55,362 | 9.4833 | 77.8333 | 9.68 | 9.28 | 78.03 | 77.63 | Off flood-path (heuristic) |
| Āyikudi | 25 | 102.3 | 15,129 | 9.0032 | 77.3449 | 9.2 | 8.8 | 77.54 | 77.14 | Off flood-path (heuristic) |
| Namminikara | 13 | 102.5 | 18,067 | 10.4322 | 76.2542 | 10.63 | 10.23 | 76.45 | 76.05 | Downstream (heuristic - verify) |
| Pappinivattom | 13 | 102.6 | 15,336 | 10.2937 | 76.1583 | 10.49 | 10.09 | 76.36 | 75.96 | Downstream (heuristic - verify) |
| Ayanavelikulangara Vadakku | 13 | 102.8 | 24,268 | 9.0430 | 76.5230 | 9.24 | 8.84 | 76.72 | 76.32 | Off flood-path (heuristic) |
| Pudusseri | 13 | 103.2 | 16,629 | 10.7582 | 76.7859 | 10.96 | 10.56 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Porathissery | 13 | 103.4 | 16,768 | 10.3764 | 76.2015 | 10.58 | 10.18 | 76.4 | 76.0 | Downstream (heuristic - verify) |
| Puthūr | 13 | 104.4 | 17,430 | 10.4874 | 76.2793 | 10.69 | 10.29 | 76.48 | 76.08 | Off flood-path (heuristic) |
| Perinjanam | 13 | 104.6 | 21,012 | 10.3133 | 76.1485 | 10.51 | 10.11 | 76.35 | 75.95 | Downstream (heuristic - verify) |
| Sāmbūrvadakara | 25 | 104.7 | 16,709 | 8.9986 | 77.3876 | 9.2 | 8.8 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Elampalloor | 13 | 104.9 | 33,959 | 8.9558 | 76.6739 | 9.16 | 8.76 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Marattakara | 13 | 105.3 | 15,817 | 10.4733 | 76.2558 | 10.67 | 10.27 | 76.46 | 76.06 | Off flood-path (heuristic) |
| Thenkasi | 25 | 105.6 | 70,545 | 8.9600 | 77.3153 | 9.16 | 8.76 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Kattur | 13 | 106.3 | 18,017 | 10.3732 | 76.1668 | 10.57 | 10.17 | 76.37 | 75.97 | Downstream (heuristic - verify) |
| Ponmana | 13 | 106.3 | 29,139 | 9.0080 | 76.5202 | 9.21 | 8.81 | 76.72 | 76.32 | Off flood-path (heuristic) |
| Kaipamangalam | 13 | 106.7 | 35,626 | 10.3350 | 76.1392 | 10.53 | 10.13 | 76.34 | 75.94 | Downstream (heuristic - verify) |
| Perunād | 13 | 106.8 | 35,173 | 8.9490 | 76.6427 | 9.15 | 8.75 | 76.84 | 76.44 | Off flood-path (heuristic) |
| Panayāttur Vadakkumbhāgam | 13 | 107.2 | 25,607 | 8.9546 | 76.6185 | 9.15 | 8.75 | 76.82 | 76.42 | Off flood-path (heuristic) |
| Marutharōd | 13 | 107.3 | 24,963 | 10.7751 | 76.6995 | 10.98 | 10.58 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Pudussery West | 13 | 107.9 | 20,140 | 10.7880 | 76.7279 | 10.99 | 10.59 | 76.93 | 76.53 | Off flood-path (heuristic) |
| Ammainaickanur | 25 | 108.1 | 19,257 | 10.1671 | 77.9132 | 10.37 | 9.97 | 78.11 | 77.71 | Off flood-path (heuristic) |
| Chevvoor | 13 | 108.2 | 16,086 | 10.4586 | 76.2088 | 10.66 | 10.26 | 76.41 | 76.01 | Downstream (heuristic - verify) |
| Karuva | 13 | 108.5 | 25,432 | 8.9500 | 76.5986 | 9.15 | 8.75 | 76.8 | 76.4 | Off flood-path (heuristic) |
| Sūrandai | 25 | 108.5 | 35,272 | 8.9757 | 77.4192 | 9.18 | 8.78 | 77.62 | 77.22 | Off flood-path (heuristic) |
| Pirāyiri | 13 | 108.7 | 41,359 | 10.7652 | 76.6318 | 10.97 | 10.57 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Palakkad | 13 | 108.7 | 132,728 | 10.7732 | 76.6537 | 10.97 | 10.57 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Chendrappini | 13 | 108.9 | 16,404 | 10.3555 | 76.1282 | 10.56 | 10.16 | 76.33 | 75.93 | Downstream (heuristic - verify) |
| Sholavandan | 25 | 109.1 | 22,578 | 10.0216 | 77.9609 | 10.22 | 9.82 | 78.16 | 77.76 | Off flood-path (heuristic) |
| Kottangara | 13 | 109.3 | 44,402 | 8.9241 | 76.6467 | 9.12 | 8.72 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Chavara | 13 | 109.3 | 42,655 | 8.9673 | 76.5419 | 9.17 | 8.77 | 76.74 | 76.34 | Off flood-path (heuristic) |
| Nedumpana | 13 | 109.4 | 29,454 | 8.9080 | 76.6930 | 9.11 | 8.71 | 76.89 | 76.49 | Off flood-path (heuristic) |
| Oddanchathiram | 25 | 109.6 | 30,064 | 10.4801 | 77.7498 | 10.68 | 10.28 | 77.95 | 77.55 | Off flood-path (heuristic) |
| Tirumangalam | 25 | 110.0 | 51,194 | 9.8231 | 77.9838 | 10.02 | 9.62 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Vadipatti | 25 | 110.6 | 26,830 | 10.0848 | 77.9611 | 10.28 | 9.88 | 78.16 | 77.76 | Off flood-path (heuristic) |
| Ambikāpuram | 13 | 110.9 | 28,592 | 10.7939 | 76.6530 | 10.99 | 10.59 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Virudunagar | 25 | 111.1 | 73,273 | 9.5851 | 77.9579 | 9.79 | 9.39 | 78.16 | 77.76 | Off flood-path (heuristic) |
| Kalugumalai | 25 | 111.4 | 15,423 | 9.1494 | 77.7057 | 9.35 | 8.95 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Tirkadavūr | 13 | 111.5 | 39,285 | 8.9240 | 76.5910 | 9.12 | 8.72 | 76.79 | 76.39 | Off flood-path (heuristic) |
| Adichānallūr | 13 | 111.6 | 27,240 | 8.8805 | 76.7156 | 9.08 | 8.68 | 76.92 | 76.52 | Off flood-path (heuristic) |
| Thrissur | 13 | 111.7 | 315,957 | 10.5167 | 76.2167 | 10.72 | 10.32 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Trikonavattam | 13 | 112.2 | 41,609 | 8.8899 | 76.6659 | 9.09 | 8.69 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Talattala | 13 | 113.7 | 37,517 | 8.8738 | 76.6716 | 9.07 | 8.67 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Puthuppariyāram | 13 | 113.8 | 30,895 | 10.8131 | 76.6287 | 11.01 | 10.61 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Chinnalapatti | 25 | 114.0 | 26,285 | 10.2848 | 77.9233 | 10.48 | 10.08 | 78.12 | 77.72 | Off flood-path (heuristic) |
| Mīnād | 13 | 115.5 | 29,716 | 8.8503 | 76.6952 | 9.05 | 8.65 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Dharapuram | 25 | 115.8 | 72,291 | 10.7383 | 77.5322 | 10.94 | 10.54 | 77.73 | 77.33 | Off flood-path (heuristic) |
| Kilapavoor | 25 | 115.8 | 22,231 | 8.9086 | 77.4311 | 9.11 | 8.71 | 77.63 | 77.23 | Off flood-path (heuristic) |
| Kollam | 13 | 116.1 | 367,107 | 8.8811 | 76.5847 | 9.08 | 8.68 | 76.78 | 76.38 | Off flood-path (heuristic) |
| Talikkulam | 13 | 117.0 | 25,507 | 10.4404 | 76.0948 | 10.64 | 10.24 | 76.29 | 75.89 | Downstream (heuristic - verify) |
| Sattur | 25 | 117.2 | 31,856 | 9.3559 | 77.9246 | 9.56 | 9.16 | 78.12 | 77.72 | Off flood-path (heuristic) |
| Madukkarai | 25 | 117.4 | 30,357 | 10.9057 | 76.9634 | 11.11 | 10.71 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Killannur | 13 | 117.9 | 20,339 | 10.5992 | 76.2180 | 10.8 | 10.4 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Pudukkottai | 25 | 118.0 | 15,769 | 9.9373 | 78.0533 | 10.14 | 9.74 | 78.25 | 77.85 | Off flood-path (heuristic) |
| Chettipālaiyam | 25 | 118.3 | 24,080 | 10.9125 | 77.0370 | 11.11 | 10.71 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Mayyanād | 13 | 118.5 | 40,039 | 8.8373 | 76.6450 | 9.04 | 8.64 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Puttankulam | 13 | 118.8 | 29,447 | 8.8138 | 76.7179 | 9.01 | 8.61 | 76.92 | 76.52 | Off flood-path (heuristic) |
| Karamuck | 13 | 119.0 | 15,129 | 10.4842 | 76.1044 | 10.68 | 10.28 | 76.3 | 75.9 | Downstream (heuristic - verify) |
| Manalur | 13 | 119.7 | 17,757 | 10.4929 | 76.1027 | 10.69 | 10.29 | 76.3 | 75.9 | Downstream (heuristic - verify) |
| Paravai | 25 | 119.7 | 20,042 | 9.9645 | 78.0667 | 10.16 | 9.76 | 78.27 | 77.87 | Off flood-path (heuristic) |
| Tirupparangunram | 25 | 119.8 | 50,004 | 9.8815 | 78.0731 | 10.08 | 9.68 | 78.27 | 77.87 | Off flood-path (heuristic) |
| Vadanappally | 13 | 120.1 | 30,657 | 10.4690 | 76.0813 | 10.67 | 10.27 | 76.28 | 75.88 | Downstream (heuristic - verify) |
| Vadakāncheri | 13 | 120.7 | 15,674 | 10.6604 | 76.2466 | 10.86 | 10.46 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Kulattuppālaiyam | 25 | 121.0 | 17,819 | 10.7613 | 77.5842 | 10.96 | 10.56 | 77.78 | 77.38 | Off flood-path (heuristic) |
| Inam Maniyachi | 25 | 121.8 | 18,258 | 9.1706 | 77.8512 | 9.37 | 8.97 | 78.05 | 77.65 | Off flood-path (heuristic) |
| Adiyanuthu | 25 | 121.9 | 17,851 | 10.3308 | 77.9812 | 10.53 | 10.13 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Ottapalam | 13 | 122.0 | 53,792 | 10.7735 | 76.3776 | 10.97 | 10.57 | 76.58 | 76.18 | Off flood-path (heuristic) |
| Paravūr Tekkumbhāgam | 13 | 122.2 | 38,946 | 8.7947 | 76.6680 | 8.99 | 8.59 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Vilāngudi | 25 | 122.4 | 30,884 | 9.9458 | 78.0935 | 10.15 | 9.75 | 78.29 | 77.89 | Off flood-path (heuristic) |
| Kovilpatti | 25 | 123.3 | 95,057 | 9.1717 | 77.8699 | 9.37 | 8.97 | 78.07 | 77.67 | Off flood-path (heuristic) |
| Rāmachettipālaiyam | 25 | 123.4 | 17,809 | 10.9582 | 76.9201 | 11.16 | 10.76 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Kurichchi | 25 | 123.5 | 123,667 | 10.9609 | 76.9738 | 11.16 | 10.76 | 77.17 | 76.77 | Off flood-path (heuristic) |
| Ālangulam | 25 | 123.6 | 28,558 | 8.8640 | 77.4994 | 9.06 | 8.66 | 77.7 | 77.3 | Off flood-path (heuristic) |
| Dindigul | 25 | 123.8 | 292,512 | 10.3690 | 77.9804 | 10.57 | 10.17 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Kuniyamuttūr | 25 | 123.9 | 95,924 | 10.9638 | 76.9525 | 11.16 | 10.76 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Avaniyāpuram | 25 | 124.1 | 89,635 | 9.8818 | 78.1125 | 10.08 | 9.68 | 78.31 | 77.91 | Off flood-path (heuristic) |
| Kariapatti | 25 | 124.3 | 18,191 | 9.6751 | 78.0999 | 9.88 | 9.48 | 78.3 | 77.9 | Off flood-path (heuristic) |
| Ānaiyūr | 25 | 124.6 | 63,917 | 9.9615 | 78.1118 | 10.16 | 9.76 | 78.31 | 77.91 | Off flood-path (heuristic) |
| Chettināyakkanpatti | 25 | 124.6 | 17,701 | 10.3940 | 77.9754 | 10.59 | 10.19 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Agaram | 25 | 124.9 | 15,610 | 10.4433 | 77.9485 | 10.64 | 10.24 | 78.15 | 77.75 | Off flood-path (heuristic) |
| Edavai | 13 | 124.9 | 25,994 | 8.7645 | 76.6885 | 8.96 | 8.56 | 76.89 | 76.49 | Off flood-path (heuristic) |
| Madurai | 25 | 125.1 | 1,465,625 | 9.9190 | 78.1195 | 10.12 | 9.72 | 78.32 | 77.92 | Off flood-path (heuristic) |
| Tādikombu | 25 | 125.2 | 18,838 | 10.4390 | 77.9546 | 10.64 | 10.24 | 78.15 | 77.75 | Off flood-path (heuristic) |
| Balakrishnapuram | 25 | 125.4 | 25,627 | 10.3591 | 78.0026 | 10.56 | 10.16 | 78.2 | 77.8 | Off flood-path (heuristic) |
| Vellalūr | 25 | 125.5 | 24,872 | 10.9775 | 77.0260 | 11.18 | 10.78 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Vāniyamkulam | 13 | 125.6 | 16,085 | 10.7830 | 76.3336 | 10.98 | 10.58 | 76.53 | 76.13 | Off flood-path (heuristic) |
| Chetwayi | 13 | 126.9 | 38,011 | 10.5289 | 76.0479 | 10.73 | 10.33 | 76.25 | 75.85 | Downstream (heuristic - verify) |
| Tiruppālai | 25 | 127.1 | 19,305 | 9.9779 | 78.1329 | 10.18 | 9.78 | 78.33 | 77.93 | Off flood-path (heuristic) |
| Nāyanakulam | 25 | 127.4 | 23,284 | 9.9611 | 78.1372 | 10.16 | 9.76 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Pālaiyampatti | 25 | 127.4 | 18,576 | 9.5392 | 78.0984 | 9.74 | 9.34 | 78.3 | 77.9 | Off flood-path (heuristic) |
| Varkala | 13 | 127.5 | 43,276 | 8.7333 | 76.7167 | 8.93 | 8.53 | 76.92 | 76.52 | Off flood-path (heuristic) |
| Anuppānadi | 25 | 127.6 | 26,158 | 9.9040 | 78.1433 | 10.1 | 9.7 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Shōranūr | 13 | 127.7 | 43,533 | 10.7618 | 76.2708 | 10.96 | 10.56 | 76.47 | 76.07 | Off flood-path (heuristic) |
| Sīlappādi | 25 | 127.7 | 17,824 | 10.3940 | 78.0078 | 10.59 | 10.19 | 78.21 | 77.81 | Off flood-path (heuristic) |
| Kannānendal | 25 | 127.9 | 31,095 | 9.9649 | 78.1416 | 10.16 | 9.76 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Singānallūr | 25 | 127.9 | 31,239 | 10.9990 | 77.0324 | 11.2 | 10.8 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Kannampālaiyam | 25 | 128.0 | 15,868 | 10.9954 | 77.0990 | 11.2 | 10.8 | 77.3 | 76.9 | Off flood-path (heuristic) |
| Aruppukkottai | 25 | 128.0 | 87,722 | 9.5096 | 78.0959 | 9.71 | 9.31 | 78.3 | 77.9 | Off flood-path (heuristic) |
| Melmadai | 25 | 128.5 | 43,797 | 9.9264 | 78.1503 | 10.13 | 9.73 | 78.35 | 77.95 | Off flood-path (heuristic) |
| Coimbatore | 25 | 128.5 | 2,136,916 | 11.0055 | 76.9661 | 11.21 | 10.81 | 77.17 | 76.77 | Off flood-path (heuristic) |
| Vīrakeralam | 25 | 128.9 | 23,841 | 11.0077 | 76.9126 | 11.21 | 10.81 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Vettūr | 13 | 129.0 | 37,219 | 8.7174 | 76.7258 | 8.92 | 8.52 | 76.93 | 76.53 | Off flood-path (heuristic) |
| Vandiyūr | 25 | 129.5 | 28,646 | 9.9092 | 78.1609 | 10.11 | 9.71 | 78.36 | 77.96 | Off flood-path (heuristic) |
| Attingal | 13 | 129.6 | 37,346 | 8.6961 | 76.8151 | 8.9 | 8.5 | 77.02 | 76.62 | Off flood-path (heuristic) |
| Irugūr | 25 | 130.2 | 25,691 | 11.0178 | 77.0628 | 11.22 | 10.82 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Kīlattingal | 13 | 130.3 | 15,185 | 8.6926 | 76.7933 | 8.89 | 8.49 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Vadavalli | 25 | 130.9 | 39,873 | 11.0247 | 76.8973 | 11.22 | 10.82 | 77.1 | 76.7 | Off flood-path (heuristic) |
| Palladam | 25 | 131.3 | 42,225 | 10.9917 | 77.2863 | 11.19 | 10.79 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Sulur | 25 | 131.5 | 27,909 | 11.0243 | 77.1256 | 11.22 | 10.82 | 77.33 | 76.93 | Off flood-path (heuristic) |
| Vakkam | 13 | 131.7 | 19,267 | 8.6845 | 76.7675 | 8.88 | 8.48 | 76.97 | 76.57 | Off flood-path (heuristic) |
| Kārakkād | 13 | 131.7 | 39,098 | 10.5880 | 76.0388 | 10.79 | 10.39 | 76.24 | 75.84 | Downstream (heuristic - verify) |
| Guruvāyūr | 13 | 131.9 | 21,416 | 10.5943 | 76.0411 | 10.79 | 10.39 | 76.24 | 75.84 | Downstream (heuristic - verify) |
| Mūlanūr | 25 | 132.0 | 15,223 | 10.7943 | 77.7115 | 10.99 | 10.59 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Kadakkavoor | 13 | 132.3 | 25,362 | 8.6792 | 76.7671 | 8.88 | 8.48 | 76.97 | 76.57 | Off flood-path (heuristic) |
| Idaiyarpālaiyam | 25 | 132.4 | 83,908 | 11.0394 | 76.9237 | 11.24 | 10.84 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Ottakkadai | 25 | 132.9 | 15,152 | 9.9580 | 78.1886 | 10.16 | 9.76 | 78.39 | 77.99 | Off flood-path (heuristic) |
| Kizhuvalam-Koonthalloor | 13 | 133.4 | 30,770 | 8.6625 | 76.8097 | 8.86 | 8.46 | 77.01 | 76.61 | Off flood-path (heuristic) |
| Kunnamkulam | 13 | 133.5 | 63,903 | 10.6467 | 76.0670 | 10.85 | 10.45 | 76.27 | 75.87 | Off flood-path (heuristic) |
| Ongallur-II | 13 | 133.6 | 26,273 | 10.7897 | 76.2190 | 10.99 | 10.59 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Vikramasingapuram | 25 | 134.0 | 47,241 | 8.7148 | 77.3903 | 8.91 | 8.51 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Chinnavādampatti | 25 | 134.7 | 20,122 | 11.0615 | 76.9838 | 11.26 | 10.86 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Ongallur-I | 13 | 134.8 | 16,998 | 10.8027 | 76.2185 | 11.0 | 10.6 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Azhoor | 13 | 135.5 | 27,390 | 8.6441 | 76.7990 | 8.84 | 8.44 | 77.0 | 76.6 | Off flood-path (heuristic) |
| Cherpulassery | 13 | 135.7 | 30,000 | 10.8765 | 76.3093 | 11.08 | 10.68 | 76.51 | 76.11 | Off flood-path (heuristic) |
| Vilankurichi | 25 | 135.9 | 24,235 | 11.0715 | 77.0173 | 11.27 | 10.87 | 77.22 | 76.82 | Off flood-path (heuristic) |
| Vellakkinar | 25 | 136.1 | 15,998 | 11.0736 | 76.9566 | 11.27 | 10.87 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Srvanampatti | 25 | 136.4 | 32,920 | 11.0764 | 77.0045 | 11.28 | 10.88 | 77.2 | 76.8 | Off flood-path (heuristic) |
| Kālappatti | 25 | 136.8 | 39,586 | 11.0794 | 77.0371 | 11.28 | 10.88 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Ambasamudram | 25 | 136.9 | 35,645 | 8.7107 | 77.4519 | 8.91 | 8.51 | 77.65 | 77.25 | Off flood-path (heuristic) |
| Pattāmbi | 13 | 136.9 | 28,632 | 10.8001 | 76.1841 | 11.0 | 10.6 | 76.38 | 75.98 | Off flood-path (heuristic) |
| Tudiyalūr | 25 | 137.0 | 33,924 | 11.0816 | 76.9446 | 11.28 | 10.88 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Vellūr | 13 | 137.1 | 22,816 | 8.6262 | 76.8305 | 8.83 | 8.43 | 77.03 | 76.63 | Off flood-path (heuristic) |
| Edakkazhiyūr | 13 | 137.7 | 17,335 | 10.6228 | 75.9965 | 10.82 | 10.42 | 76.2 | 75.8 | Downstream (heuristic - verify) |
| Sāmalāpuram | 25 | 138.0 | 20,691 | 11.0724 | 77.1980 | 11.27 | 10.87 | 77.4 | 77.0 | Off flood-path (heuristic) |
| Pallappatti | 25 | 138.0 | 30,624 | 10.7206 | 77.8795 | 10.92 | 10.52 | 78.08 | 77.68 | Off flood-path (heuristic) |
| V.S.K.Valasai (Dindigul-Dist.) | 25 | 138.3 | 17,865 | 10.3155 | 78.1514 | 10.52 | 10.12 | 78.35 | 77.95 | Off flood-path (heuristic) |
| Iroopara | 13 | 138.3 | 23,113 | 8.6075 | 76.9149 | 8.81 | 8.41 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Vettanād | 13 | 138.4 | 27,140 | 8.6059 | 76.9424 | 8.81 | 8.41 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Nedumangād | 13 | 138.7 | 60,161 | 8.6027 | 77.0014 | 8.8 | 8.4 | 77.2 | 76.8 | Off flood-path (heuristic) |
| Kāraippudūr | 25 | 138.8 | 28,602 | 11.0567 | 77.3061 | 11.26 | 10.86 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Vadamadurai | 25 | 138.9 | 18,015 | 10.4408 | 78.0978 | 10.64 | 10.24 | 78.3 | 77.9 | Off flood-path (heuristic) |
| Mannārakkāt | 13 | 139.0 | 50,921 | 10.9922 | 76.4642 | 11.19 | 10.79 | 76.66 | 76.26 | Off flood-path (heuristic) |
| Rakkiyapālaiyam | 25 | 139.7 | 18,749 | 11.1061 | 76.9425 | 11.31 | 10.91 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Punnayūr | 13 | 139.9 | 19,387 | 10.6521 | 75.9951 | 10.85 | 10.45 | 76.2 | 75.8 | Downstream (heuristic - verify) |
| Kallidaikurichi | 25 | 140.0 | 26,398 | 8.6859 | 77.4659 | 8.89 | 8.49 | 77.67 | 77.27 | Off flood-path (heuristic) |
| Vadakkēkkād | 13 | 140.0 | 15,811 | 10.6635 | 76.0033 | 10.86 | 10.46 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Tiruppuvanam | 25 | 140.0 | 24,554 | 9.8256 | 78.2579 | 10.03 | 9.63 | 78.46 | 78.06 | Off flood-path (heuristic) |
| Vīrapāndi | 25 | 140.8 | 50,301 | 11.0625 | 77.3508 | 11.26 | 10.86 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Narasimhanaickenpalayam | 25 | 141.0 | 17,858 | 11.1173 | 76.9363 | 11.32 | 10.92 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Trittāla | 13 | 141.1 | 27,796 | 10.8030 | 76.1288 | 11.0 | 10.6 | 76.33 | 75.93 | Off flood-path (heuristic) |
| Vadakku Viravanallur | 25 | 141.1 | 19,689 | 8.6979 | 77.5192 | 8.9 | 8.5 | 77.72 | 77.32 | Off flood-path (heuristic) |
| Uliyazhathura | 13 | 141.2 | 28,230 | 8.5816 | 76.9224 | 8.78 | 8.38 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Muthutala | 13 | 141.6 | 24,861 | 10.8354 | 76.1596 | 11.04 | 10.64 | 76.36 | 75.96 | Off flood-path (heuristic) |
| Karumattampatti | 25 | 141.8 | 35,062 | 11.1093 | 77.1820 | 11.31 | 10.91 | 77.38 | 76.98 | Off flood-path (heuristic) |
| Murugampālaiyam | 25 | 141.9 | 26,349 | 11.0806 | 77.3238 | 11.28 | 10.88 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Kadikkād | 13 | 142.5 | 19,147 | 10.6705 | 75.9797 | 10.87 | 10.47 | 76.18 | 75.78 | Downstream (heuristic - verify) |
| Mangalam | 25 | 142.7 | 17,699 | 11.1005 | 77.2712 | 11.3 | 10.9 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Kidarakulam | 13 | 142.7 | 29,624 | 8.5669 | 76.9913 | 8.77 | 8.37 | 77.19 | 76.79 | Off flood-path (heuristic) |
| Andipalayam | 25 | 142.9 | 25,539 | 11.0925 | 77.3123 | 11.29 | 10.89 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Natham | 25 | 143.1 | 23,660 | 10.2278 | 78.2297 | 10.43 | 10.03 | 78.43 | 78.03 | Off flood-path (heuristic) |
| Kangayam | 25 | 143.4 | 32,147 | 11.0060 | 77.5609 | 11.21 | 10.81 | 77.76 | 77.36 | Off flood-path (heuristic) |
| Ālankōd | 13 | 143.6 | 33,918 | 10.7460 | 76.0348 | 10.95 | 10.55 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Kudappanakkunnu | 13 | 144.4 | 41,583 | 8.5514 | 76.9608 | 8.75 | 8.35 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Muttanampālaiyam | 25 | 144.6 | 26,014 | 11.0845 | 77.3969 | 11.28 | 10.88 | 77.6 | 77.2 | Off flood-path (heuristic) |
| Sreekaryam | 13 | 144.8 | 23,528 | 8.5488 | 76.9172 | 8.75 | 8.35 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Periyanayakkanpalaiyam | 25 | 144.9 | 25,930 | 11.1525 | 76.9516 | 11.35 | 10.95 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Cheranmahadevi | 25 | 145.7 | 18,327 | 8.6755 | 77.5696 | 8.88 | 8.48 | 77.77 | 77.37 | Off flood-path (heuristic) |
| Vellakkovil | 25 | 145.9 | 40,359 | 10.9463 | 77.7124 | 11.15 | 10.75 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Nallūr | 25 | 146.1 | 70,115 | 11.1003 | 77.3914 | 11.3 | 10.9 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Tiruppur | 25 | 146.5 | 963,173 | 11.1154 | 77.3546 | 11.32 | 10.92 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Ayyalur | 25 | 146.7 | 17,100 | 10.4818 | 78.1564 | 10.68 | 10.28 | 78.36 | 77.96 | Off flood-path (heuristic) |
| Pattamadai | 25 | 146.8 | 16,625 | 8.6726 | 77.5845 | 8.87 | 8.47 | 77.78 | 77.38 | Off flood-path (heuristic) |
| Tirunelveli | 25 | 146.8 | 1,435,844 | 8.7274 | 77.6838 | 8.93 | 8.53 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Nāranammālpuram | 25 | 147.1 | 17,094 | 8.7599 | 77.7399 | 8.96 | 8.56 | 77.94 | 77.54 | Off flood-path (heuristic) |
| Mannarai | 25 | 147.3 | 17,261 | 11.1172 | 77.3726 | 11.32 | 10.92 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Vattiyūrkāvu | 13 | 147.4 | 47,187 | 8.5247 | 76.9889 | 8.72 | 8.32 | 77.19 | 76.79 | Off flood-path (heuristic) |
| Velampālaiyam | 25 | 147.7 | 87,427 | 11.1376 | 77.3106 | 11.34 | 10.94 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Vilappil | 13 | 147.8 | 36,212 | 8.5222 | 77.0400 | 8.72 | 8.32 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Māranchēri | 13 | 148.3 | 35,011 | 10.7405 | 75.9710 | 10.94 | 10.54 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Edappāl | 13 | 148.6 | 32,550 | 10.7834 | 76.0079 | 10.98 | 10.58 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Irimbiliyam | 13 | 148.7 | 30,635 | 10.8624 | 76.0922 | 11.06 | 10.66 | 76.29 | 75.89 | Off flood-path (heuristic) |
| Kulathummal | 13 | 149.7 | 40,448 | 8.5073 | 77.0815 | 8.71 | 8.31 | 77.28 | 76.88 | Off flood-path (heuristic) |
| Perintalmanna | 13 | 150.1 | 49,723 | 10.9772 | 76.2254 | 11.18 | 10.78 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Boyampālaiyam | 25 | 150.1 | 40,503 | 11.1487 | 77.3537 | 11.35 | 10.95 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Melur | 25 | 150.3 | 40,017 | 10.0324 | 78.3393 | 10.23 | 9.83 | 78.54 | 78.14 | Off flood-path (heuristic) |
| Tirumuruganpūndi | 25 | 150.6 | 31,528 | 11.1649 | 77.3084 | 11.36 | 10.96 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Malayinkeezhu | 13 | 151.3 | 37,350 | 8.4902 | 77.0374 | 8.69 | 8.29 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Chettipālaiyam | 25 | 151.5 | 37,620 | 11.1667 | 77.3350 | 11.37 | 10.97 | 77.54 | 77.14 | Off flood-path (heuristic) |
| Kuttippuram | 13 | 151.5 | 25,750 | 10.8425 | 76.0308 | 11.04 | 10.64 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Kāladi | 13 | 151.5 | 25,872 | 10.8194 | 76.0064 | 11.02 | 10.62 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Thiruvananthapuram | 13 | 151.8 | 788,271 | 8.4855 | 76.9492 | 8.69 | 8.29 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Nerupperichchal | 25 | 152.0 | 53,579 | 11.1610 | 77.3740 | 11.36 | 10.96 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Vilavoorkkal | 13 | 152.3 | 31,761 | 8.4809 | 77.0220 | 8.68 | 8.28 | 77.22 | 76.82 | Off flood-path (heuristic) |
| Kāttipparutti | 13 | 152.4 | 40,318 | 10.8738 | 76.0535 | 11.07 | 10.67 | 76.25 | 75.85 | Off flood-path (heuristic) |
| Avinashi | 25 | 152.6 | 28,868 | 11.1930 | 77.2686 | 11.39 | 10.99 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Vilattikulam | 25 | 152.6 | 15,277 | 9.1323 | 78.1663 | 9.33 | 8.93 | 78.37 | 77.97 | Off flood-path (heuristic) |
| Ponnāni | 13 | 154.0 | 105,512 | 10.7669 | 75.9252 | 10.97 | 10.57 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Palangarai | 25 | 154.0 | 17,248 | 11.1978 | 77.3058 | 11.4 | 11.0 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Kāramadai | 25 | 154.6 | 35,166 | 11.2406 | 76.9601 | 11.44 | 11.04 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Annur | 25 | 154.7 | 20,079 | 11.2362 | 77.1051 | 11.44 | 11.04 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Pallichal | 13 | 155.8 | 53,861 | 8.4498 | 77.0257 | 8.65 | 8.25 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Naduvattam | 13 | 156.7 | 21,273 | 10.8799 | 76.0020 | 11.08 | 10.68 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Thirunavaya | 13 | 157.5 | 24,790 | 10.8746 | 75.9855 | 11.07 | 10.67 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Kalliyoor | 13 | 157.8 | 40,816 | 8.4313 | 77.0129 | 8.63 | 8.23 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Triprangod | 13 | 157.8 | 41,167 | 10.8422 | 75.9486 | 11.04 | 10.64 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Pālaiyam | 25 | 159.6 | 15,336 | 10.7256 | 78.1354 | 10.93 | 10.53 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Kalakkādu | 25 | 161.2 | 30,921 | 8.5138 | 77.5494 | 8.71 | 8.31 | 77.75 | 77.35 | Off flood-path (heuristic) |
| Chennimalai | 25 | 161.2 | 16,268 | 11.1638 | 77.6039 | 11.36 | 10.96 | 77.8 | 77.4 | Off flood-path (heuristic) |
| Mettupalayam | 25 | 161.3 | 69,213 | 11.2997 | 76.9348 | 11.5 | 11.1 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Singampunari | 25 | 161.5 | 18,143 | 10.1862 | 78.4150 | 10.39 | 9.99 | 78.62 | 78.22 | Off flood-path (heuristic) |
| Venganoor | 13 | 161.7 | 35,963 | 8.3964 | 77.0033 | 8.6 | 8.2 | 77.2 | 76.8 | Off flood-path (heuristic) |
| Neyyāttinkara | 13 | 161.8 | 88,104 | 8.3985 | 77.0859 | 8.6 | 8.2 | 77.29 | 76.89 | Off flood-path (heuristic) |
| Athiyannur | 13 | 162.3 | 40,712 | 8.3930 | 77.0637 | 8.59 | 8.19 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Talakkād | 13 | 162.5 | 35,820 | 10.8846 | 75.9309 | 11.08 | 10.68 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Peringottupulam | 13 | 162.5 | 36,602 | 11.0268 | 76.0987 | 11.23 | 10.83 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Kadayal | 25 | 163.3 | 21,665 | 8.4083 | 77.2657 | 8.61 | 8.21 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Kodur | 13 | 163.4 | 45,459 | 11.0153 | 76.0701 | 11.22 | 10.82 | 76.27 | 75.87 | Off flood-path (heuristic) |
| Sirumugai | 25 | 163.6 | 20,066 | 11.3214 | 77.0052 | 11.52 | 11.12 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Manamadurai | 25 | 164.6 | 32,257 | 9.6732 | 78.4710 | 9.87 | 9.47 | 78.67 | 78.27 | Off flood-path (heuristic) |
| Sivaganga | 25 | 164.7 | 42,785 | 9.8470 | 78.4836 | 10.05 | 9.65 | 78.68 | 78.28 | Off flood-path (heuristic) |
| Triparappu | 25 | 164.8 | 22,401 | 8.3948 | 77.2659 | 8.59 | 8.19 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Edaicode | 25 | 164.9 | 25,378 | 8.3825 | 77.1983 | 8.58 | 8.18 | 77.4 | 77.0 | Off flood-path (heuristic) |
| Malappuram | 13 | 165.0 | 101,386 | 11.0420 | 76.0815 | 11.24 | 10.84 | 76.28 | 75.88 | Off flood-path (heuristic) |
| Tirur | 13 | 165.5 | 56,058 | 10.9137 | 75.9212 | 11.11 | 10.71 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Cheriyamundam | 13 | 165.6 | 31,212 | 10.9476 | 75.9564 | 11.15 | 10.75 | 76.16 | 75.76 | Off flood-path (heuristic) |
| Kanjiramkulam | 13 | 165.9 | 19,902 | 8.3598 | 77.0525 | 8.56 | 8.16 | 77.25 | 76.85 | Off flood-path (heuristic) |
| Kōttakkal | 13 | 166.5 | 44,382 | 11.0009 | 76.0062 | 11.2 | 10.8 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Sivagiri | 25 | 166.6 | 16,779 | 11.1203 | 77.7881 | 11.32 | 10.92 | 77.99 | 77.59 | Off flood-path (heuristic) |
| Ponmundam | 13 | 166.8 | 25,855 | 10.9536 | 75.9468 | 11.15 | 10.75 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Sankaraperi | 25 | 167.0 | 19,844 | 8.8387 | 78.1051 | 9.04 | 8.64 | 78.31 | 77.91 | Off flood-path (heuristic) |
| Othukkungal | 13 | 167.3 | 39,139 | 11.0283 | 76.0290 | 11.23 | 10.83 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Milavittan | 25 | 167.3 | 45,863 | 8.8193 | 78.0909 | 9.02 | 8.62 | 78.29 | 77.89 | Off flood-path (heuristic) |
| Arumanai | 25 | 167.4 | 16,283 | 8.3670 | 77.2433 | 8.57 | 8.17 | 77.44 | 77.04 | Off flood-path (heuristic) |
| Palugal | 25 | 167.9 | 18,276 | 8.3536 | 77.1859 | 8.55 | 8.15 | 77.39 | 76.99 | Off flood-path (heuristic) |
| Coonoor | 25 | 168.0 | 45,494 | 11.3498 | 76.7938 | 11.55 | 11.15 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Punjai Puliyampatti | 25 | 168.2 | 18,967 | 11.3516 | 77.1667 | 11.55 | 11.15 | 77.37 | 76.97 | Off flood-path (heuristic) |
| Parappur | 13 | 168.2 | 36,270 | 11.0121 | 75.9947 | 11.21 | 10.81 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Kulasegaram | 25 | 169.0 | 17,267 | 8.3632 | 77.2978 | 8.56 | 8.16 | 77.5 | 77.1 | Off flood-path (heuristic) |
| Pārassāla | 25 | 169.1 | 34,096 | 8.3387 | 77.1542 | 8.54 | 8.14 | 77.35 | 76.95 | Off flood-path (heuristic) |
| Tānālūr | 13 | 169.4 | 47,976 | 10.9515 | 75.9096 | 11.15 | 10.75 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Mappilaiurani | 25 | 169.6 | 40,035 | 8.8359 | 78.1352 | 9.04 | 8.64 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Manjeri | 13 | 169.7 | 97,102 | 11.1202 | 76.1200 | 11.32 | 10.92 | 76.32 | 75.92 | Off flood-path (heuristic) |
| Wellington | 25 | 169.9 | 20,254 | 11.3655 | 76.7844 | 11.57 | 11.17 | 76.98 | 76.58 | Off flood-path (heuristic) |
| Srivaikuntam | 25 | 170.0 | 15,847 | 8.6293 | 77.9128 | 8.83 | 8.43 | 78.11 | 77.71 | Off flood-path (heuristic) |
| Pacode | 25 | 170.4 | 24,050 | 8.3352 | 77.2136 | 8.54 | 8.14 | 77.41 | 77.01 | Off flood-path (heuristic) |
| Ponmana | 25 | 170.6 | 15,554 | 8.3552 | 77.3283 | 8.56 | 8.16 | 77.53 | 77.13 | Off flood-path (heuristic) |
| Kērkandi | 25 | 170.7 | 23,229 | 11.3678 | 76.7458 | 11.57 | 11.17 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Eruvādi | 25 | 170.7 | 18,067 | 8.4439 | 77.6044 | 8.64 | 8.24 | 77.8 | 77.4 | Off flood-path (heuristic) |
| Chinna Āndānkovil | 25 | 170.7 | 19,779 | 10.9511 | 78.0681 | 11.15 | 10.75 | 78.27 | 77.87 | Off flood-path (heuristic) |
| Tāndoni | 25 | 170.8 | 53,854 | 10.9261 | 78.0941 | 11.13 | 10.73 | 78.29 | 77.89 | Off flood-path (heuristic) |
| Tennala | 13 | 171.0 | 56,546 | 10.9934 | 75.9350 | 11.19 | 10.79 | 76.14 | 75.74 | Off flood-path (heuristic) |
| Nambiyūr | 25 | 171.8 | 16,379 | 11.3581 | 77.3212 | 11.56 | 11.16 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Tiruvattār | 25 | 171.9 | 18,985 | 8.3307 | 77.2673 | 8.53 | 8.13 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Perundurai | 25 | 171.9 | 24,930 | 11.2756 | 77.5879 | 11.48 | 11.08 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Kuzhithurai | 25 | 171.9 | 21,307 | 8.3179 | 77.1919 | 8.52 | 8.12 | 77.39 | 76.99 | Off flood-path (heuristic) |
| Urakam | 13 | 172.0 | 29,157 | 11.0512 | 75.9883 | 11.25 | 10.85 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Karur | 25 | 172.2 | 234,191 | 10.9577 | 78.0810 | 11.16 | 10.76 | 78.28 | 77.88 | Off flood-path (heuristic) |
| Methukummal | 25 | 172.6 | 19,417 | 8.3075 | 77.1521 | 8.51 | 8.11 | 77.35 | 76.95 | Off flood-path (heuristic) |
| Vengara | 13 | 172.7 | 48,600 | 11.0508 | 75.9781 | 11.25 | 10.85 | 76.18 | 75.78 | Off flood-path (heuristic) |
| Nannambra | 13 | 172.8 | 40,543 | 10.9921 | 75.9080 | 11.19 | 10.79 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Marthandam | 25 | 173.5 | 20,938 | 8.3081 | 77.2214 | 8.51 | 8.11 | 77.42 | 77.02 | Off flood-path (heuristic) |
| Nalloor | 25 | 173.7 | 17,989 | 8.3064 | 77.2240 | 8.51 | 8.11 | 77.42 | 77.02 | Off flood-path (heuristic) |
| Kollancode | 25 | 174.1 | 38,385 | 8.2890 | 77.1080 | 8.49 | 8.09 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Kannamangalam | 13 | 174.4 | 41,260 | 11.0754 | 75.9852 | 11.28 | 10.88 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Karumāndi Chellipālaiyam | 25 | 174.5 | 23,868 | 11.3019 | 77.5860 | 11.5 | 11.1 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Attimarappatti | 25 | 174.6 | 22,218 | 8.7399 | 78.1053 | 8.94 | 8.54 | 78.31 | 77.91 | Off flood-path (heuristic) |
| Thoothukudi | 25 | 174.7 | 410,760 | 8.7674 | 78.1342 | 8.97 | 8.57 | 78.33 | 77.93 | Off flood-path (heuristic) |
| Unnamalaikadai | 25 | 174.8 | 23,656 | 8.2996 | 77.2406 | 8.5 | 8.1 | 77.44 | 77.04 | Off flood-path (heuristic) |
| Senapparetti | 25 | 175.1 | 22,447 | 10.9625 | 78.1132 | 11.16 | 10.76 | 78.31 | 77.91 | Off flood-path (heuristic) |
| Kotagiri | 25 | 175.1 | 28,848 | 11.4207 | 76.8603 | 11.62 | 11.22 | 77.06 | 76.66 | Off flood-path (heuristic) |
| Muttayyāpuram | 25 | 175.8 | 32,494 | 8.7498 | 78.1311 | 8.95 | 8.55 | 78.33 | 77.93 | Off flood-path (heuristic) |
| Tirūrangādi | 13 | 175.9 | 56,632 | 11.0432 | 75.9234 | 11.24 | 10.84 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Verukulambu | 25 | 176.3 | 19,730 | 8.2953 | 77.2939 | 8.5 | 8.1 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Ooty | 25 | 176.6 | 233,426 | 11.4134 | 76.6952 | 11.61 | 11.21 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Kāttatturai | 25 | 177.0 | 17,271 | 8.2849 | 77.2755 | 8.48 | 8.08 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Abdu Rahiman Nagar | 13 | 177.1 | 41,993 | 11.0698 | 75.9388 | 11.27 | 10.87 | 76.14 | 75.74 | Off flood-path (heuristic) |
| Ezhudesam | 25 | 177.1 | 24,657 | 8.2651 | 77.1421 | 8.47 | 8.07 | 77.34 | 76.94 | Off flood-path (heuristic) |
| Valvachatottam | 25 | 177.2 | 16,965 | 8.2803 | 77.2561 | 8.48 | 8.08 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Vadakku Valliyūr | 25 | 177.3 | 29,417 | 8.3829 | 77.6122 | 8.58 | 8.18 | 77.81 | 77.41 | Off flood-path (heuristic) |
| Pugalūr | 25 | 177.4 | 23,408 | 11.0740 | 78.0209 | 11.27 | 10.87 | 78.22 | 77.82 | Off flood-path (heuristic) |
| Pariyāpuram | 13 | 177.9 | 22,766 | 11.0167 | 75.8667 | 11.22 | 10.82 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Painkulam | 25 | 178.1 | 23,630 | 8.2602 | 77.1740 | 8.46 | 8.06 | 77.37 | 76.97 | Off flood-path (heuristic) |
| Pottanūr | 25 | 178.3 | 18,455 | 11.1098 | 77.9888 | 11.31 | 10.91 | 78.19 | 77.79 | Off flood-path (heuristic) |
| Kothanallur | 25 | 178.4 | 17,662 | 8.2791 | 77.3096 | 8.48 | 8.08 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Nilambūr | 13 | 178.4 | 46,366 | 11.2727 | 76.2257 | 11.47 | 11.07 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Moonniyur | 13 | 178.8 | 55,535 | 11.0597 | 75.9031 | 11.26 | 10.86 | 76.1 | 75.7 | Off flood-path (heuristic) |
| Velur | 25 | 179.0 | 25,012 | 11.1082 | 78.0011 | 11.31 | 10.91 | 78.2 | 77.8 | Off flood-path (heuristic) |
| Mulakumūd | 25 | 179.1 | 19,538 | 8.2681 | 77.2860 | 8.47 | 8.07 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Manapparai | 25 | 179.2 | 40,510 | 10.6077 | 78.4258 | 10.81 | 10.41 | 78.63 | 78.23 | Off flood-path (heuristic) |
| Paramagudi | 25 | 179.7 | 95,579 | 9.5463 | 78.5907 | 9.75 | 9.35 | 78.79 | 78.39 | Off flood-path (heuristic) |
| Tindal | 25 | 179.9 | 15,440 | 11.3169 | 77.6742 | 11.52 | 11.12 | 77.87 | 77.47 | Off flood-path (heuristic) |
| Nazareth | 25 | 180.0 | 16,584 | 8.5610 | 77.9721 | 8.76 | 8.36 | 78.17 | 77.77 | Off flood-path (heuristic) |
| Peruvallur | 13 | 180.5 | 34,941 | 11.1048 | 75.9327 | 11.3 | 10.9 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Kappiyara | 25 | 181.0 | 15,998 | 8.2466 | 77.2617 | 8.45 | 8.05 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Neduva | 13 | 181.2 | 35,996 | 11.0567 | 75.8668 | 11.26 | 10.86 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Keezhkulam | 25 | 181.5 | 17,327 | 8.2307 | 77.1863 | 8.43 | 8.03 | 77.39 | 76.99 | Off flood-path (heuristic) |
| Kondotty | 13 | 181.5 | 28,794 | 11.1423 | 75.9657 | 11.34 | 10.94 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Karingal | 25 | 181.7 | 16,691 | 8.2363 | 77.2426 | 8.44 | 8.04 | 77.44 | 77.04 | Off flood-path (heuristic) |
| Kāsipālaiyam | 25 | 181.9 | 73,425 | 11.3198 | 77.7097 | 11.52 | 11.12 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Tiruvankod | 25 | 181.9 | 18,723 | 8.2452 | 77.3010 | 8.45 | 8.05 | 77.5 | 77.1 | Off flood-path (heuristic) |
| Ilaiyankudi | 25 | 181.9 | 24,767 | 9.6251 | 78.6243 | 9.83 | 9.43 | 78.82 | 78.42 | Off flood-path (heuristic) |
| Pānakkudi | 25 | 182.1 | 29,895 | 8.3220 | 77.5771 | 8.52 | 8.12 | 77.78 | 77.38 | Off flood-path (heuristic) |
| Padmanābhapuram | 25 | 182.5 | 21,342 | 8.2446 | 77.3258 | 8.44 | 8.04 | 77.53 | 77.13 | Off flood-path (heuristic) |
| Sūrampatti | 25 | 182.7 | 41,782 | 11.3273 | 77.7112 | 11.53 | 11.13 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Paramathi Velur | 25 | 183.4 | 25,012 | 11.1916 | 77.9563 | 11.39 | 10.99 | 78.16 | 77.76 | Off flood-path (heuristic) |
| Boothapandi | 25 | 183.4 | 15,931 | 8.2659 | 77.4461 | 8.47 | 8.07 | 77.65 | 77.25 | Off flood-path (heuristic) |
| Pallikal | 13 | 183.8 | 46,962 | 11.1372 | 75.9257 | 11.34 | 10.94 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Ariyallur | 13 | 184.7 | 22,558 | 11.0833 | 75.8490 | 11.28 | 10.88 | 76.05 | 75.65 | Off flood-path (heuristic) |
| Palappallam | 25 | 184.8 | 18,589 | 8.2095 | 77.2476 | 8.41 | 8.01 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Erode | 25 | 185.0 | 521,891 | 11.3428 | 77.7274 | 11.54 | 11.14 | 77.93 | 77.53 | Off flood-path (heuristic) |
| Periya Semūr | 25 | 185.0 | 55,282 | 11.3609 | 77.6895 | 11.56 | 11.16 | 77.89 | 77.49 | Off flood-path (heuristic) |
| Vīrappanchathiram | 25 | 185.3 | 84,453 | 11.3531 | 77.7125 | 11.55 | 11.15 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Gobichettipalayam | 25 | 185.5 | 59,523 | 11.4550 | 77.4422 | 11.65 | 11.25 | 77.64 | 77.24 | Off flood-path (heuristic) |
| Villukuri | 25 | 186.0 | 15,304 | 8.2226 | 77.3732 | 8.42 | 8.02 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Kumārapālaiyam | 25 | 186.2 | 15,706 | 11.5021 | 77.2555 | 11.7 | 11.3 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Sathyamangalam | 25 | 186.2 | 37,816 | 11.5053 | 77.2383 | 11.71 | 11.31 | 77.44 | 77.04 | Off flood-path (heuristic) |
| Thenhippalam | 13 | 186.4 | 32,045 | 11.1323 | 75.8822 | 11.33 | 10.93 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Brāhmana Periya Agrahāram | 25 | 186.6 | 24,798 | 11.3690 | 77.7063 | 11.57 | 11.17 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Salangaippālaiyam | 25 | 186.8 | 15,609 | 11.4260 | 77.5707 | 11.63 | 11.23 | 77.77 | 77.37 | Off flood-path (heuristic) |
| Nallavila | 25 | 187.2 | 16,138 | 8.2055 | 77.3444 | 8.41 | 8.01 | 77.54 | 77.14 | Off flood-path (heuristic) |
| Arumuganeri | 25 | 187.5 | 27,266 | 8.5688 | 78.0909 | 8.77 | 8.37 | 78.29 | 77.89 | Off flood-path (heuristic) |
| Reethapuram | 25 | 187.5 | 21,177 | 8.1843 | 77.2481 | 8.38 | 7.98 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Aramboli | 25 | 187.6 | 22,846 | 8.2496 | 77.5216 | 8.45 | 8.05 | 77.72 | 77.32 | Off flood-path (heuristic) |
| Kizhuparamba | 13 | 187.7 | 22,062 | 11.2526 | 76.0244 | 11.45 | 11.05 | 76.22 | 75.82 | Off flood-path (heuristic) |
| Kallukuttam | 25 | 187.8 | 19,093 | 8.1887 | 77.2878 | 8.39 | 7.99 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Cherukavu | 13 | 188.1 | 30,126 | 11.1731 | 75.9086 | 11.37 | 10.97 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Colachel | 25 | 188.3 | 23,227 | 8.1794 | 77.2582 | 8.38 | 7.98 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Chelambra | 13 | 188.7 | 34,149 | 11.1509 | 75.8719 | 11.35 | 10.95 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Pallipalayam | 25 | 188.9 | 40,140 | 11.3652 | 77.7623 | 11.57 | 11.17 | 77.96 | 77.56 | Off flood-path (heuristic) |
| Ālūr | 25 | 189.0 | 15,063 | 8.1931 | 77.3643 | 8.39 | 7.99 | 77.56 | 77.16 | Off flood-path (heuristic) |
| Ālampālaiyam | 25 | 189.0 | 20,286 | 11.3635 | 77.7677 | 11.56 | 11.16 | 77.97 | 77.57 | Off flood-path (heuristic) |
| Kayalpattinam | 25 | 189.4 | 40,588 | 8.5714 | 78.1199 | 8.77 | 8.37 | 78.32 | 77.92 | Off flood-path (heuristic) |
| Sūryampālaiyam | 25 | 190.5 | 28,585 | 11.4045 | 77.7123 | 11.6 | 11.2 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Ramanattukara | 13 | 191.2 | 35,937 | 11.1780 | 75.8689 | 11.38 | 10.98 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Kollivāyal | 25 | 191.4 | 21,943 | 11.4998 | 76.4815 | 11.7 | 11.3 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Āchāripallam Vāniyakudi | 25 | 191.6 | 16,822 | 8.1743 | 77.3849 | 8.37 | 7.97 | 77.58 | 77.18 | Off flood-path (heuristic) |
| Pudūr | 25 | 192.1 | 17,240 | 11.4360 | 77.6760 | 11.64 | 11.24 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Nāgercoil | 25 | 192.3 | 224,849 | 8.1790 | 77.4323 | 8.38 | 7.98 | 77.63 | 77.23 | Off flood-path (heuristic) |
| Vazhayur | 13 | 192.5 | 36,909 | 11.2173 | 75.8999 | 11.42 | 11.02 | 76.1 | 75.7 | Off flood-path (heuristic) |
| Ferokh | 13 | 193.3 | 32,122 | 11.1799 | 75.8414 | 11.38 | 10.98 | 76.04 | 75.64 | Off flood-path (heuristic) |
| Bhavāni | 25 | 193.3 | 39,744 | 11.4455 | 77.6821 | 11.65 | 11.25 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Gudalur | 25 | 193.6 | 49,535 | 11.5207 | 76.4814 | 11.72 | 11.32 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Elandakuttai | 25 | 193.6 | 16,160 | 11.4060 | 77.7750 | 11.61 | 11.21 | 77.98 | 77.58 | Off flood-path (heuristic) |
| Jāmbai | 25 | 193.9 | 16,522 | 11.4678 | 77.6434 | 11.67 | 11.27 | 77.84 | 77.44 | Off flood-path (heuristic) |
| Karuvanthuruthy | 13 | 194.0 | 21,952 | 11.1721 | 75.8226 | 11.37 | 10.97 | 76.02 | 75.62 | Off flood-path (heuristic) |
| Tattānkuttai | 25 | 194.1 | 24,708 | 11.4352 | 77.7237 | 11.64 | 11.24 | 77.92 | 77.52 | Off flood-path (heuristic) |
| Tisaiyanvilai | 25 | 194.4 | 23,702 | 8.3370 | 77.8678 | 8.54 | 8.14 | 78.07 | 77.67 | Off flood-path (heuristic) |
| Kumarapalayam | 25 | 194.5 | 195,071 | 11.4450 | 77.7110 | 11.64 | 11.24 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Sankarapatti | 25 | 194.8 | 26,536 | 10.0477 | 78.7472 | 10.25 | 9.85 | 78.95 | 78.55 | Off flood-path (heuristic) |
| Beypore | 13 | 195.1 | 70,751 | 11.1715 | 75.8061 | 11.37 | 10.97 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Cheruvannur | 13 | 195.1 | 61,614 | 11.1903 | 75.8283 | 11.39 | 10.99 | 76.03 | 75.63 | Off flood-path (heuristic) |
| Udangudi | 25 | 195.5 | 19,738 | 8.4292 | 78.0297 | 8.63 | 8.23 | 78.23 | 77.83 | Off flood-path (heuristic) |
| Tiruchchendur | 25 | 195.6 | 32,171 | 8.4972 | 78.1191 | 8.7 | 8.3 | 78.32 | 77.92 | Off flood-path (heuristic) |
| Mavoor | 13 | 195.8 | 29,781 | 11.2667 | 75.9167 | 11.47 | 11.07 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Tondalam | 25 | 196.1 | 44,590 | 11.5014 | 76.3498 | 11.7 | 11.3 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Perumanna | 13 | 196.3 | 35,460 | 11.2529 | 75.8906 | 11.45 | 11.05 | 76.09 | 75.69 | Off flood-path (heuristic) |
| Pantheeramkavu | 13 | 196.9 | 24,537 | 11.2305 | 75.8518 | 11.43 | 11.03 | 76.05 | 75.65 | Off flood-path (heuristic) |
| Thazhecode | 13 | 197.1 | 25,116 | 11.3226 | 75.9758 | 11.52 | 11.12 | 76.18 | 75.78 | Off flood-path (heuristic) |
| Olavanna | 13 | 197.2 | 43,895 | 11.2184 | 75.8325 | 11.42 | 11.02 | 76.03 | 75.63 | Off flood-path (heuristic) |
| Kāraikkudi | 25 | 197.3 | 181,851 | 10.0662 | 78.7678 | 10.27 | 9.87 | 78.97 | 78.57 | Off flood-path (heuristic) |
| Tiruchengode | 25 | 197.3 | 95,335 | 11.3802 | 77.8944 | 11.58 | 11.18 | 78.09 | 77.69 | Off flood-path (heuristic) |
| Devarshola | 25 | 197.3 | 24,954 | 11.5437 | 76.4404 | 11.74 | 11.34 | 76.64 | 76.24 | Off flood-path (heuristic) |
| Dharmapuram | 25 | 197.5 | 17,476 | 8.1203 | 77.3890 | 8.32 | 7.92 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Pūlakkōd | 13 | 197.5 | 29,872 | 11.3097 | 75.9500 | 11.51 | 11.11 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Kulittalai | 25 | 197.7 | 27,910 | 10.9349 | 78.4125 | 11.13 | 10.73 | 78.61 | 78.21 | Off flood-path (heuristic) |
| Periyapatti | 25 | 197.7 | 15,690 | 11.2052 | 78.1512 | 11.41 | 11.01 | 78.35 | 77.95 | Off flood-path (heuristic) |
| Kuttikkāttūr | 13 | 197.8 | 25,929 | 11.2626 | 75.8796 | 11.46 | 11.06 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Pūvātūparamba | 13 | 197.9 | 27,598 | 11.2710 | 75.8894 | 11.47 | 11.07 | 76.09 | 75.69 | Off flood-path (heuristic) |

## Banasura Sagar Dam (Kerala)
Dam coordinates: 11.68, 76.02

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Kalpatta | 13 | 10.5 | 31,580 | 11.6087 | 76.0834 | 11.81 | 11.41 | 76.28 | 75.88 | Off flood-path (heuristic) |
| Mennānyam | 13 | 31.4 | 15,768 | 11.5579 | 75.7596 | 11.76 | 11.36 | 75.96 | 75.56 | Downstream (heuristic - verify) |
| Eravattūr | 13 | 32.6 | 17,016 | 11.5801 | 75.7384 | 11.78 | 11.38 | 75.94 | 75.54 | Downstream (heuristic - verify) |
| Balussheri | 13 | 33.2 | 27,363 | 11.4474 | 75.8294 | 11.65 | 11.25 | 76.03 | 75.63 | Downstream (heuristic - verify) |
| Kunnummal | 13 | 33.7 | 18,031 | 11.6832 | 75.7108 | 11.88 | 11.48 | 75.91 | 75.51 | Downstream (heuristic - verify) |
| Naduvannūr | 13 | 34.2 | 25,979 | 11.4877 | 75.7751 | 11.69 | 11.29 | 75.98 | 75.58 | Downstream (heuristic - verify) |
| Nanminda | 13 | 35.7 | 27,316 | 11.4232 | 75.8231 | 11.62 | 11.22 | 76.02 | 75.62 | Downstream (heuristic - verify) |
| Ulliyeri | 13 | 37.4 | 32,509 | 11.4525 | 75.7666 | 11.65 | 11.25 | 75.97 | 75.57 | Downstream (heuristic - verify) |
| Āyanchēri | 13 | 38.1 | 26,293 | 11.6261 | 75.6743 | 11.83 | 11.43 | 75.87 | 75.47 | Downstream (heuristic - verify) |
| Nādāpuram | 13 | 39.8 | 40,230 | 11.6846 | 75.6549 | 11.88 | 11.48 | 75.85 | 75.45 | Downstream (heuristic - verify) |
| Kottappally | 13 | 39.8 | 21,169 | 11.6127 | 75.6614 | 11.81 | 11.41 | 75.86 | 75.46 | Downstream (heuristic - verify) |
| Thazhecode | 13 | 40.0 | 25,116 | 11.3226 | 75.9758 | 11.52 | 11.12 | 76.18 | 75.78 | Off flood-path (heuristic) |
| Tondalam | 25 | 41.1 | 44,590 | 11.5014 | 76.3498 | 11.7 | 11.3 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Chekkiād | 13 | 41.4 | 24,246 | 11.7173 | 75.6419 | 11.92 | 11.52 | 75.84 | 75.44 | Downstream (heuristic - verify) |
| Pūlakkōd | 13 | 41.9 | 29,872 | 11.3097 | 75.9500 | 11.51 | 11.11 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Tūnēri | 13 | 42.0 | 23,421 | 11.6970 | 75.6349 | 11.9 | 11.5 | 75.83 | 75.43 | Downstream (heuristic - verify) |
| Kizhariyūr | 13 | 42.1 | 15,116 | 11.4982 | 75.6807 | 11.7 | 11.3 | 75.88 | 75.48 | Downstream (heuristic - verify) |
| Māniyūr | 13 | 42.7 | 21,820 | 11.5522 | 75.6503 | 11.75 | 11.35 | 75.85 | 75.45 | Downstream (heuristic - verify) |
| Edacchēri | 13 | 43.0 | 26,819 | 11.6818 | 75.6248 | 11.88 | 11.48 | 75.82 | 75.42 | Downstream (heuristic - verify) |
| Villiappally | 13 | 43.0 | 34,502 | 11.6250 | 75.6287 | 11.82 | 11.42 | 75.83 | 75.43 | Downstream (heuristic - verify) |
| Atholi | 13 | 43.1 | 28,213 | 11.3885 | 75.7597 | 11.59 | 11.19 | 75.96 | 75.56 | Downstream (heuristic - verify) |
| Kuruvattūr | 13 | 43.2 | 34,241 | 11.3361 | 75.8351 | 11.54 | 11.14 | 76.04 | 75.64 | Off flood-path (heuristic) |
| Icchannūr | 13 | 44.1 | 40,697 | 11.3615 | 75.7782 | 11.56 | 11.16 | 75.98 | 75.58 | Downstream (heuristic - verify) |
| Kolavallúr | 13 | 44.3 | 19,817 | 11.7507 | 75.6199 | 11.95 | 11.55 | 75.82 | 75.42 | Downstream (heuristic - verify) |
| Chēmanchēri | 13 | 44.5 | 34,819 | 11.4048 | 75.7236 | 11.6 | 11.2 | 75.92 | 75.52 | Downstream (heuristic - verify) |
| Kunnamangalam | 13 | 44.5 | 47,396 | 11.3046 | 75.8777 | 11.5 | 11.1 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Koyilandy | 13 | 44.6 | 71,873 | 11.4381 | 75.6931 | 11.64 | 11.24 | 75.89 | 75.49 | Downstream (heuristic - verify) |
| Palayad | 13 | 45.0 | 18,141 | 11.5505 | 75.6289 | 11.75 | 11.35 | 75.83 | 75.43 | Downstream (heuristic - verify) |
| Iringal | 13 | 45.9 | 25,894 | 11.5593 | 75.6166 | 11.76 | 11.36 | 75.82 | 75.42 | Downstream (heuristic - verify) |
| Talakkolattur | 13 | 46.2 | 29,388 | 11.3537 | 75.7580 | 11.55 | 11.15 | 75.96 | 75.56 | Downstream (heuristic - verify) |
| Kakkodi | 13 | 46.6 | 42,866 | 11.3197 | 75.8015 | 11.52 | 11.12 | 76.0 | 75.6 | Downstream (heuristic - verify) |
| Erāmala | 13 | 46.7 | 34,658 | 11.6859 | 75.5910 | 11.89 | 11.49 | 75.79 | 75.39 | Downstream (heuristic - verify) |
| Chōrōd | 13 | 47.0 | 38,245 | 11.6277 | 75.5915 | 11.83 | 11.43 | 75.79 | 75.39 | Downstream (heuristic - verify) |
| Mavoor | 13 | 47.3 | 29,781 | 11.2667 | 75.9167 | 11.47 | 11.07 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Peringathur | 13 | 47.4 | 40,292 | 11.7137 | 75.5860 | 11.91 | 11.51 | 75.79 | 75.39 | Downstream (heuristic - verify) |
| Kizhuparamba | 13 | 47.5 | 22,062 | 11.2526 | 76.0244 | 11.45 | 11.05 | 76.22 | 75.82 | Off flood-path (heuristic) |
| Pūvātūparamba | 13 | 47.7 | 27,598 | 11.2710 | 75.8894 | 11.47 | 11.07 | 76.09 | 75.69 | Off flood-path (heuristic) |
| Devarshola | 25 | 48.2 | 24,954 | 11.5437 | 76.4404 | 11.74 | 11.34 | 76.64 | 76.24 | Off flood-path (heuristic) |
| Badagara | 13 | 48.6 | 76,493 | 11.5978 | 75.5814 | 11.8 | 11.4 | 75.78 | 75.38 | Downstream (heuristic - verify) |
| Kuttikkāttūr | 13 | 48.9 | 25,929 | 11.2626 | 75.8796 | 11.46 | 11.06 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Panoor | 13 | 48.9 | 17,438 | 11.7594 | 75.5784 | 11.96 | 11.56 | 75.78 | 75.38 | Downstream (heuristic - verify) |
| Panniyannūr | 13 | 49.0 | 22,308 | 11.7486 | 75.5756 | 11.95 | 11.55 | 75.78 | 75.38 | Downstream (heuristic - verify) |
| Tikkotti | 13 | 49.1 | 27,051 | 11.4833 | 75.6167 | 11.68 | 11.28 | 75.82 | 75.42 | Downstream (heuristic - verify) |
| Perumanna | 13 | 49.5 | 35,460 | 11.2529 | 75.8906 | 11.45 | 11.05 | 76.09 | 75.69 | Off flood-path (heuristic) |
| Mokēri | 13 | 49.9 | 19,684 | 11.7776 | 75.5731 | 11.98 | 11.58 | 75.77 | 75.37 | Downstream (heuristic - verify) |
| Azhiyūr | 13 | 50.1 | 30,023 | 11.6935 | 75.5601 | 11.89 | 11.49 | 75.76 | 75.36 | Downstream (heuristic - verify) |
| Nilambūr | 13 | 50.5 | 46,366 | 11.2727 | 76.2257 | 11.47 | 11.07 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Chockli | 13 | 50.9 | 33,732 | 11.7274 | 75.5551 | 11.93 | 11.53 | 75.76 | 75.36 | Downstream (heuristic - verify) |
| Pāttyam | 13 | 51.2 | 20,161 | 11.7930 | 75.5641 | 11.99 | 11.59 | 75.76 | 75.36 | Downstream (heuristic - verify) |
| Kuttuparamba | 13 | 52.1 | 29,619 | 11.8277 | 75.5659 | 12.03 | 11.63 | 75.77 | 75.37 | Downstream (heuristic - verify) |
| Kandamkunnu | 13 | 52.2 | 16,025 | 11.8695 | 75.5808 | 12.07 | 11.67 | 75.78 | 75.38 | Downstream (heuristic - verify) |
| Mahē | 13 | 52.9 | 41,816 | 11.7017 | 75.5347 | 11.9 | 11.5 | 75.73 | 75.33 | Downstream (heuristic - verify) |
| Vazhayur | 13 | 53.1 | 36,909 | 11.2173 | 75.8999 | 11.42 | 11.02 | 76.1 | 75.7 | Off flood-path (heuristic) |
| Pantheeramkavu | 13 | 53.2 | 24,537 | 11.2305 | 75.8518 | 11.43 | 11.03 | 76.05 | 75.65 | Off flood-path (heuristic) |
| Gudalur | 25 | 53.3 | 49,535 | 11.5207 | 76.4814 | 11.72 | 11.32 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Kōttayam | 13 | 53.9 | 19,176 | 11.8252 | 75.5478 | 12.03 | 11.63 | 75.75 | 75.35 | Downstream (heuristic - verify) |
| Kollivāyal | 25 | 54.1 | 21,943 | 11.4998 | 76.4815 | 11.7 | 11.3 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Katirur | 13 | 54.6 | 31,087 | 11.7849 | 75.5302 | 11.98 | 11.58 | 75.73 | 75.33 | Downstream (heuristic - verify) |
| Kozhikode | 13 | 54.7 | 550,440 | 11.2480 | 75.7804 | 11.45 | 11.05 | 75.98 | 75.58 | Off flood-path (heuristic) |
| Mangattidam | 13 | 54.9 | 18,627 | 11.8433 | 75.5437 | 12.04 | 11.64 | 75.74 | 75.34 | Downstream (heuristic - verify) |
| Eruvatti | 13 | 55.1 | 16,905 | 11.8062 | 75.5302 | 12.01 | 11.61 | 75.73 | 75.33 | Downstream (heuristic - verify) |
| Olavanna | 13 | 55.3 | 43,895 | 11.2184 | 75.8325 | 11.42 | 11.02 | 76.03 | 75.63 | Off flood-path (heuristic) |
| Erannoli | 13 | 55.6 | 25,818 | 11.7691 | 75.5177 | 11.97 | 11.57 | 75.72 | 75.32 | Downstream (heuristic - verify) |
| Mattanur | 13 | 56.2 | 47,078 | 11.9302 | 75.5715 | 12.13 | 11.73 | 75.77 | 75.37 | Downstream (heuristic - verify) |
| Cherukavu | 13 | 57.7 | 30,126 | 11.1731 | 75.9086 | 11.37 | 10.97 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Patuvilāyi | 13 | 57.9 | 20,598 | 11.8656 | 75.5233 | 12.07 | 11.67 | 75.72 | 75.32 | Downstream (heuristic - verify) |
| Tellicherry | 13 | 57.9 | 97,201 | 11.7481 | 75.4929 | 11.95 | 11.55 | 75.69 | 75.29 | Downstream (heuristic - verify) |
| Patiriyat | 13 | 58.1 | 18,008 | 11.8490 | 75.5147 | 12.05 | 11.65 | 75.71 | 75.31 | Downstream (heuristic - verify) |
| Ramanattukara | 13 | 58.2 | 35,937 | 11.1780 | 75.8689 | 11.38 | 10.98 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Cheruvannur | 13 | 58.3 | 61,614 | 11.1903 | 75.8283 | 11.39 | 10.99 | 76.03 | 75.63 | Off flood-path (heuristic) |
| Keevallur | 13 | 58.4 | 20,440 | 11.8970 | 75.5310 | 12.1 | 11.7 | 75.73 | 75.33 | Downstream (heuristic - verify) |
| Ferokh | 13 | 58.9 | 32,122 | 11.1799 | 75.8414 | 11.38 | 10.98 | 76.04 | 75.64 | Off flood-path (heuristic) |
| Kondotty | 13 | 60.1 | 28,794 | 11.1423 | 75.9657 | 11.34 | 10.94 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Pinarāyi | 13 | 60.3 | 16,801 | 11.8049 | 75.4810 | 12.0 | 11.6 | 75.68 | 75.28 | Downstream (heuristic - verify) |
| Karuvanthuruthy | 13 | 60.4 | 21,952 | 11.1721 | 75.8226 | 11.37 | 10.97 | 76.02 | 75.62 | Off flood-path (heuristic) |
| Peralassery | 13 | 60.9 | 16,821 | 11.8322 | 75.4825 | 12.03 | 11.63 | 75.68 | 75.28 | Downstream (heuristic - verify) |
| Chelambra | 13 | 61.0 | 34,149 | 11.1509 | 75.8719 | 11.35 | 10.95 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Beypore | 13 | 61.2 | 70,751 | 11.1715 | 75.8061 | 11.37 | 10.97 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Pallikal | 13 | 61.2 | 46,962 | 11.1372 | 75.9257 | 11.34 | 10.94 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Dharmadam | 13 | 61.4 | 30,804 | 11.7754 | 75.4646 | 11.98 | 11.58 | 75.66 | 75.26 | Downstream (heuristic - verify) |
| Virajpet | 19 | 62.0 | 17,246 | 12.1964 | 75.8051 | 12.4 | 12.0 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Ancharakandy | 13 | 62.5 | 23,030 | 11.8841 | 75.4850 | 12.08 | 11.68 | 75.69 | 75.29 | Downstream (heuristic - verify) |
| Irivēri | 13 | 62.6 | 17,231 | 11.8559 | 75.4736 | 12.06 | 11.66 | 75.67 | 75.27 | Downstream (heuristic - verify) |
| Thenhippalam | 13 | 62.7 | 32,045 | 11.1323 | 75.8822 | 11.33 | 10.93 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Manjeri | 13 | 63.2 | 97,102 | 11.1202 | 76.1200 | 11.32 | 10.92 | 76.32 | 75.92 | Off flood-path (heuristic) |
| Muluppilagadu | 13 | 63.3 | 23,709 | 11.7979 | 75.4511 | 12.0 | 11.6 | 75.65 | 75.25 | Downstream (heuristic - verify) |
| Kadachira | 13 | 64.6 | 18,979 | 11.8369 | 75.4490 | 12.04 | 11.64 | 75.65 | 75.25 | Downstream (heuristic - verify) |
| Peruvallur | 13 | 64.7 | 34,941 | 11.1048 | 75.9327 | 11.3 | 10.9 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Kudali | 13 | 65.3 | 15,236 | 11.9198 | 75.4722 | 12.12 | 11.72 | 75.67 | 75.27 | Downstream (heuristic - verify) |
| Kanhirode | 13 | 66.0 | 15,353 | 11.9184 | 75.4645 | 12.12 | 11.72 | 75.66 | 75.26 | Downstream (heuristic - verify) |
| Chālakilakākara | 13 | 66.2 | 17,088 | 11.8540 | 75.4387 | 12.05 | 11.65 | 75.64 | 75.24 | Downstream (heuristic - verify) |
| Kannamangalam | 13 | 67.3 | 41,260 | 11.0754 | 75.9852 | 11.28 | 10.88 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Chelora | 13 | 67.5 | 20,952 | 11.8949 | 75.4396 | 12.09 | 11.69 | 75.64 | 75.24 | Downstream (heuristic - verify) |
| Thottada | 13 | 67.6 | 40,818 | 11.8385 | 75.4208 | 12.04 | 11.64 | 75.62 | 75.22 | Downstream (heuristic - verify) |
| Abdu Rahiman Nagar | 13 | 68.4 | 41,993 | 11.0698 | 75.9388 | 11.27 | 10.87 | 76.14 | 75.74 | Off flood-path (heuristic) |
| Munderi | 13 | 68.4 | 21,676 | 11.9303 | 75.4455 | 12.13 | 11.73 | 75.65 | 75.25 | Downstream (heuristic - verify) |
| Ariyallur | 13 | 68.9 | 22,558 | 11.0833 | 75.8490 | 11.28 | 10.88 | 76.05 | 75.65 | Off flood-path (heuristic) |
| Urakam | 13 | 70.0 | 29,157 | 11.0512 | 75.9883 | 11.25 | 10.85 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Elayavur | 13 | 70.1 | 33,853 | 11.8892 | 75.4124 | 12.09 | 11.69 | 75.61 | 75.21 | Downstream (heuristic - verify) |
| Vengara | 13 | 70.1 | 48,600 | 11.0508 | 75.9781 | 11.25 | 10.85 | 76.18 | 75.78 | Off flood-path (heuristic) |
| Moonniyur | 13 | 70.1 | 55,535 | 11.0597 | 75.9031 | 11.26 | 10.86 | 76.1 | 75.7 | Off flood-path (heuristic) |
| Varam | 13 | 70.4 | 17,008 | 11.8996 | 75.4132 | 12.1 | 11.7 | 75.61 | 75.21 | Downstream (heuristic - verify) |
| Malappuram | 13 | 71.3 | 101,386 | 11.0420 | 76.0815 | 11.24 | 10.84 | 76.28 | 75.88 | Off flood-path (heuristic) |
| Neduva | 13 | 71.3 | 35,996 | 11.0567 | 75.8668 | 11.26 | 10.86 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Tirūrangādi | 13 | 71.6 | 56,632 | 11.0432 | 75.9234 | 11.24 | 10.84 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Othukkungal | 13 | 72.5 | 39,139 | 11.0283 | 76.0290 | 11.23 | 10.83 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Puzhathi | 13 | 72.9 | 35,212 | 11.9011 | 75.3892 | 12.1 | 11.7 | 75.59 | 75.19 | Downstream (heuristic - verify) |
| Peringottupulam | 13 | 73.1 | 36,602 | 11.0268 | 76.0987 | 11.23 | 10.83 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Piriyāpatna | 19 | 73.4 | 16,685 | 12.3350 | 76.1007 | 12.53 | 12.13 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Kolaccheri | 13 | 73.5 | 17,095 | 11.9763 | 75.4167 | 12.18 | 11.78 | 75.62 | 75.22 | Downstream (heuristic - verify) |
| Kodur | 13 | 74.1 | 45,459 | 11.0153 | 76.0701 | 11.22 | 10.82 | 76.27 | 75.87 | Off flood-path (heuristic) |
| Parappur | 13 | 74.3 | 36,270 | 11.0121 | 75.9947 | 11.21 | 10.81 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Gundlupēt | 19 | 74.4 | 28,105 | 11.8100 | 76.6903 | 12.01 | 11.61 | 76.89 | 76.49 | Off flood-path (heuristic) |
| Kannur | 13 | 75.1 | 62,836 | 11.8675 | 75.3576 | 12.07 | 11.67 | 75.56 | 75.16 | Downstream (heuristic - verify) |
| Hunsūr | 19 | 75.4 | 50,865 | 12.3036 | 76.2927 | 12.5 | 12.1 | 76.49 | 76.09 | Off flood-path (heuristic) |
| Kōttakkal | 13 | 75.5 | 44,382 | 11.0009 | 76.0062 | 11.2 | 10.8 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Pariyāpuram | 13 | 75.6 | 22,766 | 11.0167 | 75.8667 | 11.22 | 10.82 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Pallikunnu | 13 | 75.9 | 27,820 | 11.8899 | 75.3565 | 12.09 | 11.69 | 75.56 | 75.16 | Downstream (heuristic - verify) |
| Chirakkal | 13 | 76.2 | 45,601 | 11.9126 | 75.3610 | 12.11 | 11.71 | 75.56 | 75.16 | Downstream (heuristic - verify) |
| Tennala | 13 | 76.9 | 56,546 | 10.9934 | 75.9350 | 11.19 | 10.79 | 76.14 | 75.74 | Off flood-path (heuristic) |
| Kurumathur | 13 | 77.4 | 18,641 | 12.0397 | 75.4114 | 12.24 | 11.84 | 75.61 | 75.21 | Downstream (heuristic - verify) |
| Nannambra | 13 | 77.5 | 40,543 | 10.9921 | 75.9080 | 11.19 | 10.79 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Kalliyasshēri | 13 | 78.5 | 31,122 | 11.9755 | 75.3645 | 12.18 | 11.78 | 75.56 | 75.16 | Downstream (heuristic - verify) |
| Azhikkōd | 13 | 79.1 | 25,195 | 11.9199 | 75.3355 | 12.12 | 11.72 | 75.54 | 75.14 | Downstream (heuristic - verify) |
| Ooty | 25 | 79.3 | 233,426 | 11.4134 | 76.6952 | 11.61 | 11.21 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Pāppinisshēri | 13 | 80.1 | 35,134 | 11.9566 | 75.3403 | 12.16 | 11.76 | 75.54 | 75.14 | Downstream (heuristic - verify) |
| Ponmundam | 13 | 81.2 | 25,855 | 10.9536 | 75.9468 | 11.15 | 10.75 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Perintalmanna | 13 | 81.3 | 49,723 | 10.9772 | 76.2254 | 11.18 | 10.78 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Cheriyamundam | 13 | 81.7 | 31,212 | 10.9476 | 75.9564 | 11.15 | 10.75 | 76.16 | 75.76 | Off flood-path (heuristic) |
| Tānālūr | 13 | 81.9 | 47,976 | 10.9515 | 75.9096 | 11.15 | 10.75 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Taliparamba | 13 | 82.4 | 72,465 | 12.0416 | 75.3593 | 12.24 | 11.84 | 75.56 | 75.16 | Downstream (heuristic - verify) |
| Kannapuram | 13 | 84.9 | 18,459 | 11.9843 | 75.3041 | 12.18 | 11.78 | 75.5 | 75.1 | Downstream (heuristic - verify) |
| Tirur | 13 | 85.9 | 56,058 | 10.9137 | 75.9212 | 11.11 | 10.71 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Kērkandi | 25 | 86.4 | 23,229 | 11.3678 | 76.7458 | 11.57 | 11.17 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Pariyāram | 13 | 86.6 | 20,405 | 12.0588 | 75.3248 | 12.26 | 11.86 | 75.52 | 75.12 | Downstream (heuristic - verify) |
| Kushālnagar | 19 | 86.8 | 15,326 | 12.4580 | 75.9590 | 12.66 | 12.26 | 76.16 | 75.76 | Off flood-path (heuristic) |
| Nanjangūd | 19 | 87.1 | 50,598 | 12.1176 | 76.6840 | 12.32 | 11.92 | 76.88 | 76.48 | Off flood-path (heuristic) |
| Cherukunnu | 13 | 87.1 | 16,111 | 11.9956 | 75.2872 | 12.2 | 11.8 | 75.49 | 75.09 | Downstream (heuristic - verify) |
| Madikeri | 19 | 88.4 | 33,540 | 12.4260 | 75.7382 | 12.63 | 12.23 | 75.94 | 75.54 | Off flood-path (heuristic) |
| Talakkād | 13 | 89.0 | 35,820 | 10.8846 | 75.9309 | 11.08 | 10.68 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Naduvattam | 13 | 89.0 | 21,273 | 10.8799 | 76.0020 | 11.08 | 10.68 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Ezhome | 13 | 89.3 | 19,261 | 12.0300 | 75.2819 | 12.23 | 11.83 | 75.48 | 75.08 | Downstream (heuristic - verify) |
| Thirunavaya | 13 | 89.6 | 24,790 | 10.8746 | 75.9855 | 11.07 | 10.67 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Kāttipparutti | 13 | 89.7 | 40,318 | 10.8738 | 76.0535 | 11.07 | 10.67 | 76.25 | 75.85 | Off flood-path (heuristic) |
| Wellington | 25 | 90.3 | 20,254 | 11.3655 | 76.7844 | 11.57 | 11.17 | 76.98 | 76.58 | Off flood-path (heuristic) |
| Mannārakkāt | 13 | 90.5 | 50,921 | 10.9922 | 76.4642 | 11.19 | 10.79 | 76.66 | 76.26 | Off flood-path (heuristic) |
| Irimbiliyam | 13 | 91.3 | 30,635 | 10.8624 | 76.0922 | 11.06 | 10.66 | 76.29 | 75.89 | Off flood-path (heuristic) |
| Coonoor | 25 | 92.0 | 45,494 | 11.3498 | 76.7938 | 11.55 | 11.15 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Kuttippuram | 13 | 93.1 | 25,750 | 10.8425 | 76.0308 | 11.04 | 10.64 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Krishnarājāsāgara | 19 | 93.2 | 35,805 | 12.4398 | 76.3828 | 12.64 | 12.24 | 76.58 | 76.18 | Off flood-path (heuristic) |
| Triprangod | 13 | 93.5 | 41,167 | 10.8422 | 75.9486 | 11.04 | 10.64 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Cheruthazham | 13 | 93.7 | 29,348 | 12.0810 | 75.2627 | 12.28 | 11.88 | 75.46 | 75.06 | Downstream (heuristic - verify) |
| Mādāyi | 22 | 93.8 | 35,888 | 12.0343 | 75.2378 | 12.23 | 11.83 | 75.44 | 75.04 | Downstream (heuristic - verify) |
| Cherpulassery | 13 | 94.7 | 30,000 | 10.8765 | 76.3093 | 11.08 | 10.68 | 76.51 | 76.11 | Off flood-path (heuristic) |
| Muthutala | 13 | 95.1 | 24,861 | 10.8354 | 76.1596 | 11.04 | 10.64 | 76.36 | 75.96 | Off flood-path (heuristic) |
| Kunnimangalam | 22 | 95.4 | 18,965 | 12.0735 | 75.2412 | 12.27 | 11.87 | 75.44 | 75.04 | Downstream (heuristic - verify) |
| Kāladi | 13 | 95.7 | 25,872 | 10.8194 | 76.0064 | 11.02 | 10.62 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Hutagalli | 19 | 96.0 | 18,308 | 12.3417 | 76.5863 | 12.54 | 12.14 | 76.79 | 76.39 | Off flood-path (heuristic) |
| Kotagiri | 25 | 96.0 | 28,848 | 11.4207 | 76.8603 | 11.62 | 11.22 | 77.06 | 76.66 | Off flood-path (heuristic) |
| Hinakallu | 19 | 96.1 | 23,162 | 12.3304 | 76.6021 | 12.53 | 12.13 | 76.8 | 76.4 | Off flood-path (heuristic) |
| Mysuru | 19 | 96.2 | 920,550 | 12.2979 | 76.6393 | 12.5 | 12.1 | 76.84 | 76.44 | Off flood-path (heuristic) |
| Trittāla | 13 | 98.2 | 27,796 | 10.8030 | 76.1288 | 11.0 | 10.6 | 76.33 | 75.93 | Off flood-path (heuristic) |
| Pattāmbi | 13 | 99.5 | 28,632 | 10.8001 | 76.1841 | 11.0 | 10.6 | 76.38 | 75.98 | Off flood-path (heuristic) |
| Edappāl | 13 | 99.7 | 32,550 | 10.7834 | 76.0079 | 10.98 | 10.58 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Ongallur-I | 13 | 99.9 | 16,998 | 10.8027 | 76.2185 | 11.0 | 10.6 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Payyanur | 13 | 100.1 | 72,111 | 12.0935 | 75.2025 | 12.29 | 11.89 | 75.4 | 75.0 | Downstream (heuristic - verify) |
| Ongallur-II | 13 | 101.3 | 26,273 | 10.7897 | 76.2190 | 10.99 | 10.59 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Ponnāni | 13 | 102.1 | 105,512 | 10.7669 | 75.9252 | 10.97 | 10.57 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Trikarpūr South | 13 | 103.0 | 22,991 | 12.1165 | 75.1852 | 12.32 | 11.92 | 75.39 | 74.99 | Downstream (heuristic - verify) |
| Chamrajnagar | 19 | 103.7 | 69,875 | 11.9231 | 76.9395 | 12.12 | 11.72 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Ālankōd | 13 | 103.9 | 33,918 | 10.7460 | 76.0348 | 10.95 | 10.55 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Māranchēri | 13 | 104.6 | 35,011 | 10.7405 | 75.9710 | 10.94 | 10.54 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Vāniyamkulam | 13 | 105.4 | 16,085 | 10.7830 | 76.3336 | 10.98 | 10.58 | 76.53 | 76.13 | Off flood-path (heuristic) |
| Trikarpūr North | 13 | 105.5 | 18,210 | 12.1458 | 75.1748 | 12.35 | 11.95 | 75.37 | 74.97 | Downstream (heuristic - verify) |
| Shōranūr | 13 | 105.7 | 43,533 | 10.7618 | 76.2708 | 10.96 | 10.56 | 76.47 | 76.07 | Off flood-path (heuristic) |
| Ottapalam | 13 | 108.1 | 53,792 | 10.7735 | 76.3776 | 10.97 | 10.57 | 76.58 | 76.18 | Off flood-path (heuristic) |
| Mettupalayam | 25 | 108.3 | 69,213 | 11.2997 | 76.9348 | 11.5 | 11.1 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Shrīrangapattana | 19 | 109.7 | 25,061 | 12.4226 | 76.6844 | 12.62 | 12.22 | 76.88 | 76.48 | Off flood-path (heuristic) |
| Kadikkād | 13 | 112.3 | 19,147 | 10.6705 | 75.9797 | 10.87 | 10.47 | 76.18 | 75.78 | Off flood-path (heuristic) |
| Vadakkēkkād | 13 | 113.0 | 15,811 | 10.6635 | 76.0033 | 10.86 | 10.46 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Kāramadai | 25 | 113.5 | 35,166 | 11.2406 | 76.9601 | 11.44 | 11.04 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Punnayūr | 13 | 114.3 | 19,387 | 10.6521 | 75.9951 | 10.85 | 10.45 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Sirumugai | 25 | 114.5 | 20,066 | 11.3214 | 77.0052 | 11.52 | 11.12 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Kunnamkulam | 13 | 115.0 | 63,903 | 10.6467 | 76.0670 | 10.85 | 10.45 | 76.27 | 75.87 | Off flood-path (heuristic) |
| French Rocks | 19 | 115.7 | 20,399 | 12.5009 | 76.6742 | 12.7 | 12.3 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Nīlēshwar | 13 | 115.8 | 25,405 | 12.2595 | 75.1352 | 12.46 | 12.06 | 75.34 | 74.94 | Downstream (heuristic - verify) |
| Vadakāncheri | 13 | 116.0 | 15,674 | 10.6604 | 76.2466 | 10.86 | 10.46 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Bannūr | 19 | 116.9 | 25,455 | 12.3330 | 76.8620 | 12.53 | 12.13 | 77.06 | 76.66 | Off flood-path (heuristic) |
| Puthuppariyāram | 13 | 117.0 | 30,895 | 10.8131 | 76.6287 | 11.01 | 10.61 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Periyanayakkanpalaiyam | 25 | 117.3 | 25,930 | 11.1525 | 76.9516 | 11.35 | 10.95 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Edakkazhiyūr | 13 | 117.6 | 17,335 | 10.6228 | 75.9965 | 10.82 | 10.42 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Narasimhanaickenpalayam | 25 | 117.9 | 17,858 | 11.1173 | 76.9363 | 11.32 | 10.92 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Rakkiyapālaiyam | 25 | 119.1 | 18,749 | 11.1061 | 76.9425 | 11.31 | 10.91 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Sullya | 19 | 119.7 | 19,958 | 12.5610 | 75.3874 | 12.76 | 12.36 | 75.59 | 75.19 | Off flood-path (heuristic) |
| Vadavalli | 25 | 120.2 | 39,873 | 11.0247 | 76.8973 | 11.22 | 10.82 | 77.1 | 76.7 | Off flood-path (heuristic) |
| Ambikāpuram | 13 | 120.3 | 28,592 | 10.7939 | 76.6530 | 10.99 | 10.59 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Arkalgūd | 19 | 120.4 | 16,810 | 12.7617 | 76.0603 | 12.96 | 12.56 | 76.26 | 75.86 | Off flood-path (heuristic) |
| Guruvāyūr | 13 | 120.7 | 21,416 | 10.5943 | 76.0411 | 10.79 | 10.39 | 76.24 | 75.84 | Off flood-path (heuristic) |
| Tudiyalūr | 25 | 120.8 | 33,924 | 11.0816 | 76.9446 | 11.28 | 10.88 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Krishnarājpet | 19 | 120.9 | 25,946 | 12.6662 | 76.4877 | 12.87 | 12.47 | 76.69 | 76.29 | Off flood-path (heuristic) |
| Kārakkād | 13 | 121.4 | 39,098 | 10.5880 | 76.0388 | 10.79 | 10.39 | 76.24 | 75.84 | Off flood-path (heuristic) |
| Kanhangad | 13 | 121.5 | 125,564 | 12.3081 | 75.1063 | 12.51 | 12.11 | 75.31 | 74.91 | Downstream (heuristic - verify) |
| Idaiyarpālaiyam | 25 | 121.6 | 83,908 | 11.0394 | 76.9237 | 11.24 | 10.84 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Pirāyiri | 13 | 121.7 | 41,359 | 10.7652 | 76.6318 | 10.97 | 10.57 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Killannur | 13 | 122.1 | 20,339 | 10.5992 | 76.2180 | 10.8 | 10.4 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Palakkad | 13 | 122.2 | 132,728 | 10.7732 | 76.6537 | 10.97 | 10.57 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Vellakkinar | 25 | 122.4 | 15,998 | 11.0736 | 76.9566 | 11.27 | 10.87 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Vīrakeralam | 25 | 122.7 | 23,841 | 11.0077 | 76.9126 | 11.21 | 10.81 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Ajānūr | 13 | 124.5 | 33,079 | 12.3361 | 75.0930 | 12.54 | 12.14 | 75.29 | 74.89 | Downstream (heuristic - verify) |
| Marutharōd | 13 | 125.0 | 24,963 | 10.7751 | 76.6995 | 10.98 | 10.58 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Holenarasipura | 19 | 125.4 | 29,974 | 12.7864 | 76.2433 | 12.99 | 12.59 | 76.44 | 76.04 | Off flood-path (heuristic) |
| Chinnavādampatti | 25 | 125.6 | 20,122 | 11.0615 | 76.9838 | 11.26 | 10.86 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Pudussery West | 13 | 125.7 | 20,140 | 10.7880 | 76.7279 | 10.99 | 10.59 | 76.93 | 76.53 | Off flood-path (heuristic) |
| Srvanampatti | 25 | 126.6 | 32,920 | 11.0764 | 77.0045 | 11.28 | 10.88 | 77.2 | 76.8 | Off flood-path (heuristic) |
| Rāmachettipālaiyam | 25 | 126.8 | 17,809 | 10.9582 | 76.9201 | 11.16 | 10.76 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Alattūr | 13 | 127.5 | 26,720 | 10.6500 | 76.5333 | 10.85 | 10.45 | 76.73 | 76.33 | Off flood-path (heuristic) |
| Coimbatore | 25 | 127.5 | 2,136,916 | 11.0055 | 76.9661 | 11.21 | 10.81 | 77.17 | 76.77 | Off flood-path (heuristic) |
| Chetwayi | 13 | 128.0 | 38,011 | 10.5289 | 76.0479 | 10.73 | 10.33 | 76.25 | 75.85 | Off flood-path (heuristic) |
| Vilankurichi | 25 | 128.1 | 24,235 | 11.0715 | 77.0173 | 11.27 | 10.87 | 77.22 | 76.82 | Off flood-path (heuristic) |
| Annur | 25 | 128.1 | 20,079 | 11.2362 | 77.1051 | 11.44 | 11.04 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Kuniyamuttūr | 25 | 129.2 | 95,924 | 10.9638 | 76.9525 | 11.16 | 10.76 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Kālappatti | 25 | 129.4 | 39,586 | 11.0794 | 77.0371 | 11.28 | 10.88 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Kollegāl | 19 | 129.8 | 57,149 | 12.1545 | 77.1105 | 12.35 | 11.95 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Punjai Puliyampatti | 25 | 130.2 | 18,967 | 11.3516 | 77.1667 | 11.55 | 11.15 | 77.37 | 76.97 | Off flood-path (heuristic) |
| Koduvayur | 13 | 130.6 | 20,703 | 10.6867 | 76.6588 | 10.89 | 10.49 | 76.86 | 76.46 | Off flood-path (heuristic) |
| Thrissur | 13 | 131.1 | 315,957 | 10.5167 | 76.2167 | 10.72 | 10.32 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Kurichchi | 25 | 131.2 | 123,667 | 10.9609 | 76.9738 | 11.16 | 10.76 | 77.17 | 76.77 | Off flood-path (heuristic) |
| Pudusseri | 13 | 132.2 | 16,629 | 10.7582 | 76.7859 | 10.96 | 10.56 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Manalur | 13 | 132.3 | 17,757 | 10.4929 | 76.1027 | 10.69 | 10.29 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Pudunagaram | 13 | 132.7 | 17,892 | 10.6802 | 76.6836 | 10.88 | 10.48 | 76.88 | 76.48 | Off flood-path (heuristic) |
| Karamuck | 13 | 133.3 | 15,129 | 10.4842 | 76.1044 | 10.68 | 10.28 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Mandya | 19 | 133.7 | 137,358 | 12.5223 | 76.8975 | 12.72 | 12.32 | 77.1 | 76.7 | Off flood-path (heuristic) |
| Singānallūr | 25 | 133.9 | 31,239 | 10.9990 | 77.0324 | 11.2 | 10.8 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Sathyamangalam | 25 | 134.1 | 37,816 | 11.5053 | 77.2383 | 11.71 | 11.31 | 77.44 | 77.04 | Off flood-path (heuristic) |
| Madukkarai | 25 | 134.2 | 30,357 | 10.9057 | 76.9634 | 11.11 | 10.71 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Vellalūr | 25 | 134.7 | 24,872 | 10.9775 | 77.0260 | 11.18 | 10.78 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Chittūr | 13 | 134.8 | 32,298 | 10.6997 | 76.7471 | 10.9 | 10.5 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Vadanappally | 13 | 134.8 | 30,657 | 10.4690 | 76.0813 | 10.67 | 10.27 | 76.28 | 75.88 | Off flood-path (heuristic) |
| Irugūr | 25 | 135.5 | 25,691 | 11.0178 | 77.0628 | 11.22 | 10.82 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Puthūr | 13 | 135.6 | 17,430 | 10.4874 | 76.2793 | 10.69 | 10.29 | 76.48 | 76.08 | Off flood-path (heuristic) |
| Kumārapālaiyam | 25 | 136.0 | 15,706 | 11.5021 | 77.2555 | 11.7 | 11.3 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Marattakara | 13 | 136.6 | 15,817 | 10.4733 | 76.2558 | 10.67 | 10.27 | 76.46 | 76.06 | Off flood-path (heuristic) |
| Chevvoor | 13 | 137.4 | 16,086 | 10.4586 | 76.2088 | 10.66 | 10.26 | 76.41 | 76.01 | Off flood-path (heuristic) |
| Malavalli | 19 | 137.7 | 38,129 | 12.3856 | 77.0605 | 12.59 | 12.19 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Talikkulam | 13 | 138.1 | 25,507 | 10.4404 | 76.0948 | 10.64 | 10.24 | 76.29 | 75.89 | Off flood-path (heuristic) |
| Chengala | 13 | 139.3 | 15,588 | 12.4984 | 75.0503 | 12.7 | 12.3 | 75.25 | 74.85 | Off flood-path (heuristic) |
| Chettipālaiyam | 25 | 139.9 | 24,080 | 10.9125 | 77.0370 | 11.11 | 10.71 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Kannampālaiyam | 25 | 140.1 | 15,868 | 10.9954 | 77.0990 | 11.2 | 10.8 | 77.3 | 76.9 | Off flood-path (heuristic) |
| Sulur | 25 | 140.9 | 27,909 | 11.0243 | 77.1256 | 11.22 | 10.82 | 77.33 | 76.93 | Off flood-path (heuristic) |
| Amballūr | 13 | 141.0 | 29,341 | 10.4343 | 76.2634 | 10.63 | 10.23 | 76.46 | 76.06 | Off flood-path (heuristic) |
| Namminikara | 13 | 141.1 | 18,067 | 10.4322 | 76.2542 | 10.63 | 10.23 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Karumattampatti | 25 | 141.7 | 35,062 | 11.1093 | 77.1820 | 11.31 | 10.91 | 77.38 | 76.98 | Off flood-path (heuristic) |
| Channarāyapatna | 19 | 142.1 | 40,417 | 12.9064 | 76.3877 | 13.11 | 12.71 | 76.59 | 76.19 | Off flood-path (heuristic) |
| Sakleshpur | 19 | 142.5 | 24,931 | 12.9412 | 75.7847 | 13.14 | 12.74 | 75.98 | 75.58 | Off flood-path (heuristic) |
| Kāsaragod | 13 | 144.3 | 54,172 | 12.4984 | 74.9896 | 12.7 | 12.3 | 75.19 | 74.79 | Downstream (heuristic - verify) |
| Sāmalāpuram | 25 | 145.1 | 20,691 | 11.0724 | 77.1980 | 11.27 | 10.87 | 77.4 | 77.0 | Off flood-path (heuristic) |
| Kattur | 13 | 146.2 | 18,017 | 10.3732 | 76.1668 | 10.57 | 10.17 | 76.37 | 75.97 | Off flood-path (heuristic) |
| Nambiyūr | 25 | 146.2 | 16,379 | 11.3581 | 77.3212 | 11.56 | 11.16 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Porathissery | 13 | 146.3 | 16,768 | 10.3764 | 76.2015 | 10.58 | 10.18 | 76.4 | 76.0 | Off flood-path (heuristic) |
| Avinashi | 25 | 146.5 | 28,868 | 11.1930 | 77.2686 | 11.39 | 10.99 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Kūdlu | 13 | 147.5 | 26,235 | 12.5298 | 74.9788 | 12.73 | 12.33 | 75.18 | 74.78 | Downstream (heuristic - verify) |
| Chendrappini | 13 | 147.7 | 16,404 | 10.3555 | 76.1282 | 10.56 | 10.16 | 76.33 | 75.93 | Off flood-path (heuristic) |
| Hassan | 19 | 147.8 | 155,006 | 13.0071 | 76.0962 | 13.21 | 12.81 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Satyāmangala | 19 | 149.4 | 18,002 | 13.0193 | 76.1243 | 13.22 | 12.82 | 76.32 | 75.92 | Off flood-path (heuristic) |
| Puttūr | 19 | 149.4 | 53,331 | 12.7598 | 75.2017 | 12.96 | 12.56 | 75.4 | 75.0 | Off flood-path (heuristic) |
| Nāgamangala | 19 | 149.7 | 17,776 | 12.8194 | 76.7546 | 13.02 | 12.62 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Maddūr | 19 | 149.8 | 28,754 | 12.5828 | 77.0429 | 12.78 | 12.38 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Palangarai | 25 | 150.0 | 17,248 | 11.1978 | 77.3058 | 11.4 | 11.0 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Kaipamangalam | 13 | 150.1 | 35,626 | 10.3350 | 76.1392 | 10.53 | 10.13 | 76.34 | 75.94 | Off flood-path (heuristic) |
| Irinjālakuda | 13 | 150.2 | 29,208 | 10.3424 | 76.2112 | 10.54 | 10.14 | 76.41 | 76.01 | Off flood-path (heuristic) |
| Mangalam | 25 | 150.8 | 17,699 | 11.1005 | 77.2712 | 11.3 | 10.9 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Tirumuruganpūndi | 25 | 151.7 | 31,528 | 11.1649 | 77.3084 | 11.36 | 10.96 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Perinjanam | 13 | 152.6 | 21,012 | 10.3133 | 76.1485 | 10.51 | 10.11 | 76.35 | 75.95 | Off flood-path (heuristic) |
| Velampālaiyam | 25 | 153.1 | 87,427 | 11.1376 | 77.3106 | 11.34 | 10.94 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Koipādi | 13 | 153.4 | 18,121 | 12.5930 | 74.9626 | 12.79 | 12.39 | 75.16 | 74.76 | Off flood-path (heuristic) |
| Chettipālaiyam | 25 | 154.3 | 37,620 | 11.1667 | 77.3350 | 11.37 | 10.97 | 77.54 | 77.14 | Off flood-path (heuristic) |
| Ūttukuli | 25 | 154.9 | 16,354 | 10.6519 | 76.9778 | 10.85 | 10.45 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Pappinivattom | 13 | 154.9 | 15,336 | 10.2937 | 76.1583 | 10.49 | 10.09 | 76.36 | 75.96 | Off flood-path (heuristic) |
| Andipalayam | 25 | 155.3 | 25,539 | 11.0925 | 77.3123 | 11.29 | 10.89 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Kāraippudūr | 25 | 156.4 | 28,602 | 11.0567 | 77.3061 | 11.26 | 10.86 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Vittal | 19 | 156.6 | 17,618 | 12.7632 | 75.0990 | 12.96 | 12.56 | 75.3 | 74.9 | Off flood-path (heuristic) |
| Pollachi | 25 | 156.6 | 90,180 | 10.6583 | 77.0085 | 10.86 | 10.46 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Thekkumkara | 13 | 156.9 | 15,258 | 10.2819 | 76.2132 | 10.48 | 10.08 | 76.41 | 76.01 | Off flood-path (heuristic) |
| Boyampālaiyam | 25 | 156.9 | 40,503 | 11.1487 | 77.3537 | 11.35 | 10.95 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Gobichettipalayam | 25 | 156.9 | 59,523 | 11.4550 | 77.4422 | 11.65 | 11.25 | 77.64 | 77.24 | Off flood-path (heuristic) |
| Murugampālaiyam | 25 | 157.0 | 26,349 | 11.0806 | 77.3238 | 11.28 | 10.88 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Kizhake Chālakudi | 13 | 157.2 | 49,525 | 10.3007 | 76.3376 | 10.5 | 10.1 | 76.54 | 76.14 | Off flood-path (heuristic) |
| Panangad | 13 | 157.4 | 15,630 | 10.2728 | 76.1748 | 10.47 | 10.07 | 76.37 | 75.97 | Off flood-path (heuristic) |
| Anaimalai | 25 | 157.6 | 17,208 | 10.5830 | 76.9344 | 10.78 | 10.38 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Palladam | 25 | 157.9 | 42,225 | 10.9917 | 77.2863 | 11.19 | 10.79 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Vettaikkaranpudur | 25 | 157.9 | 18,128 | 10.5621 | 76.9130 | 10.76 | 10.36 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Sūleswaranpatti | 25 | 158.2 | 20,104 | 10.6388 | 77.0084 | 10.84 | 10.44 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Tiruppur | 25 | 158.4 | 963,173 | 11.1154 | 77.3546 | 11.32 | 10.92 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Nerupperichchal | 25 | 158.5 | 53,579 | 11.1610 | 77.3740 | 11.36 | 10.96 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Mannarai | 25 | 160.2 | 17,261 | 11.1172 | 77.3726 | 11.32 | 10.92 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Vīrapāndi | 25 | 160.5 | 50,301 | 11.0625 | 77.3508 | 11.26 | 10.86 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Edavilangu | 13 | 160.9 | 20,363 | 10.2403 | 76.1710 | 10.44 | 10.04 | 76.37 | 75.97 | Off flood-path (heuristic) |
| Koratti | 13 | 161.2 | 17,618 | 10.2660 | 76.3477 | 10.47 | 10.07 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Kodungallūr | 13 | 162.1 | 60,190 | 10.2326 | 76.1951 | 10.43 | 10.03 | 76.4 | 76.0 | Off flood-path (heuristic) |
| Kallūr Vadakummuri | 13 | 162.2 | 25,259 | 10.2532 | 76.3281 | 10.45 | 10.05 | 76.53 | 76.13 | Off flood-path (heuristic) |
| Nallūr | 25 | 162.8 | 70,115 | 11.1003 | 77.3914 | 11.3 | 10.9 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Kallūr Tekkumuri | 13 | 163.5 | 17,480 | 10.2401 | 76.3236 | 10.44 | 10.04 | 76.52 | 76.12 | Off flood-path (heuristic) |
| Muttanampālaiyam | 25 | 164.0 | 26,014 | 11.0845 | 77.3969 | 11.28 | 10.88 | 77.6 | 77.2 | Off flood-path (heuristic) |
| Kottur | 25 | 164.8 | 26,627 | 10.5365 | 76.9803 | 10.74 | 10.34 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Belūr | 19 | 166.0 | 22,484 | 13.1656 | 75.8652 | 13.37 | 12.97 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Moothakunnam | 13 | 166.9 | 27,458 | 10.1899 | 76.2008 | 10.39 | 9.99 | 76.4 | 76.0 | Off flood-path (heuristic) |
| Puthenvelikara | 13 | 168.0 | 33,372 | 10.1851 | 76.2454 | 10.39 | 9.99 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Channapatna | 19 | 168.2 | 71,942 | 12.6514 | 77.2067 | 12.85 | 12.45 | 77.41 | 77.01 | Off flood-path (heuristic) |
| Vadakakarai | 13 | 169.5 | 20,571 | 10.1664 | 76.2018 | 10.37 | 9.97 | 76.4 | 76.0 | Off flood-path (heuristic) |
| Chendamangalam | 13 | 170.3 | 29,326 | 10.1632 | 76.2346 | 10.36 | 9.96 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Angamāli | 13 | 170.4 | 34,399 | 10.1905 | 76.3879 | 10.39 | 9.99 | 76.59 | 76.19 | Off flood-path (heuristic) |
| Salangaippālaiyam | 25 | 171.3 | 15,609 | 11.4260 | 77.5707 | 11.63 | 11.23 | 77.77 | 77.37 | Off flood-path (heuristic) |
| Anthiyur | 25 | 171.4 | 21,086 | 11.5751 | 77.5904 | 11.78 | 11.38 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Parūr | 13 | 171.9 | 31,503 | 10.1477 | 76.2300 | 10.35 | 9.95 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Bantvāl | 19 | 172.0 | 40,155 | 12.8905 | 75.0349 | 13.09 | 12.69 | 75.23 | 74.83 | Off flood-path (heuristic) |
| Chengamanād | 13 | 173.3 | 29,576 | 10.1541 | 76.3416 | 10.35 | 9.95 | 76.54 | 76.14 | Off flood-path (heuristic) |
| Martūru | 13 | 173.5 | 18,890 | 10.1717 | 76.4264 | 10.37 | 9.97 | 76.63 | 76.23 | Off flood-path (heuristic) |
| Karumālūr | 13 | 174.4 | 29,805 | 10.1329 | 76.2799 | 10.33 | 9.93 | 76.48 | 76.08 | Off flood-path (heuristic) |
| Nedumbassery | 13 | 174.5 | 29,706 | 10.1565 | 76.4017 | 10.36 | 9.96 | 76.6 | 76.2 | Off flood-path (heuristic) |
| Kōtekāra | 19 | 175.7 | 16,505 | 12.7929 | 74.8722 | 12.99 | 12.59 | 75.07 | 74.67 | Off flood-path (heuristic) |
| Karumāndi Chellipālaiyam | 25 | 175.7 | 23,868 | 11.3019 | 77.5860 | 11.5 | 11.1 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Kottuvalli | 13 | 176.2 | 42,922 | 10.1112 | 76.2463 | 10.31 | 9.91 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Alengād | 13 | 176.3 | 47,329 | 10.1190 | 76.3023 | 10.32 | 9.92 | 76.5 | 76.1 | Off flood-path (heuristic) |
| Perundurai | 25 | 176.7 | 24,930 | 11.2756 | 77.5879 | 11.48 | 11.08 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Koovappady | 13 | 177.0 | 29,339 | 10.1553 | 76.4854 | 10.36 | 9.96 | 76.69 | 76.29 | Off flood-path (heuristic) |
| Sōmēshvara | 19 | 177.1 | 24,066 | 12.8035 | 74.8647 | 13.0 | 12.6 | 75.06 | 74.66 | Off flood-path (heuristic) |
| Ullal | 19 | 177.6 | 59,116 | 12.8057 | 74.8606 | 13.01 | 12.61 | 75.06 | 74.66 | Off flood-path (heuristic) |
| Alangad | 13 | 178.0 | 47,329 | 10.1019 | 76.2910 | 10.3 | 9.9 | 76.49 | 76.09 | Off flood-path (heuristic) |
| Chelamartam | 13 | 178.1 | 16,844 | 10.1371 | 76.4570 | 10.34 | 9.94 | 76.66 | 76.26 | Off flood-path (heuristic) |
| Jāmbai | 25 | 178.4 | 16,522 | 11.4678 | 77.6434 | 11.67 | 11.27 | 77.84 | 77.44 | Off flood-path (heuristic) |
| Aluva | 13 | 178.5 | 24,108 | 10.1076 | 76.3516 | 10.31 | 9.91 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Alwaye | 13 | 178.7 | 23,703 | 10.1065 | 76.3548 | 10.31 | 9.91 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Kadungalūr | 13 | 179.3 | 39,666 | 10.0948 | 76.3211 | 10.29 | 9.89 | 76.52 | 76.12 | Off flood-path (heuristic) |
| Closepet | 19 | 179.5 | 95,167 | 12.7218 | 77.2815 | 12.92 | 12.52 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Sundakkāmpālaiyam | 25 | 179.7 | 16,459 | 10.5666 | 77.2135 | 10.77 | 10.37 | 77.41 | 77.01 | Off flood-path (heuristic) |
| Marampilly | 13 | 180.1 | 23,272 | 10.1138 | 76.4418 | 10.31 | 9.91 | 76.64 | 76.24 | Off flood-path (heuristic) |
| Kanakapura | 19 | 180.1 | 54,014 | 12.5465 | 77.4201 | 12.75 | 12.35 | 77.62 | 77.22 | Off flood-path (heuristic) |
| Varappuzha | 13 | 180.5 | 26,750 | 10.0759 | 76.2715 | 10.28 | 9.88 | 76.47 | 76.07 | Off flood-path (heuristic) |
| Choornikkara | 13 | 180.5 | 43,207 | 10.0879 | 76.3411 | 10.29 | 9.89 | 76.54 | 76.14 | Off flood-path (heuristic) |
| Udumalaippettai | 25 | 180.8 | 61,133 | 10.5881 | 77.2478 | 10.79 | 10.39 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Perumpāvūr | 13 | 181.0 | 27,105 | 10.1154 | 76.4761 | 10.32 | 9.92 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Kadamakudi | 13 | 181.4 | 16,295 | 10.0642 | 76.2456 | 10.26 | 9.86 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Valparai | 25 | 181.6 | 90,353 | 10.3269 | 76.9512 | 10.53 | 10.13 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Elūr | 13 | 181.7 | 31,468 | 10.0667 | 76.2833 | 10.27 | 9.87 | 76.48 | 76.08 | Off flood-path (heuristic) |
| Vāzhakulam | 13 | 181.7 | 18,358 | 10.0938 | 76.4198 | 10.29 | 9.89 | 76.62 | 76.22 | Off flood-path (heuristic) |
| Perumbavoor | 13 | 181.8 | 28,110 | 10.1069 | 76.4737 | 10.31 | 9.91 | 76.67 | 76.27 | Off flood-path (heuristic) |
| Chennimalai | 25 | 181.9 | 16,268 | 11.1638 | 77.6039 | 11.36 | 10.96 | 77.8 | 77.4 | Off flood-path (heuristic) |
| Tiptūr | 19 | 182.2 | 60,957 | 13.2563 | 76.4777 | 13.46 | 13.06 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Pudūr | 25 | 182.4 | 17,240 | 11.4360 | 77.6760 | 11.64 | 11.24 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Bhavāni | 25 | 182.9 | 39,744 | 11.4455 | 77.6821 | 11.65 | 11.25 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Kalamassery | 13 | 183.1 | 71,038 | 10.0614 | 76.3263 | 10.26 | 9.86 | 76.53 | 76.13 | Off flood-path (heuristic) |
| Cheranellūr | 13 | 183.2 | 30,594 | 10.0543 | 76.2896 | 10.25 | 9.85 | 76.49 | 76.09 | Off flood-path (heuristic) |
| Periyakottai | 25 | 183.2 | 17,356 | 10.5909 | 77.2797 | 10.79 | 10.39 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Arsikere | 19 | 183.6 | 53,216 | 13.3145 | 76.2570 | 13.51 | 13.11 | 76.46 | 76.06 | Off flood-path (heuristic) |
| Narakal | 13 | 183.9 | 23,760 | 10.0383 | 76.2221 | 10.24 | 9.84 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Kangayam | 25 | 184.0 | 32,147 | 11.0060 | 77.5609 | 11.21 | 10.81 | 77.76 | 77.36 | Off flood-path (heuristic) |
| Chikmagalūr | 19 | 184.6 | 121,484 | 13.3223 | 75.7740 | 13.52 | 13.12 | 75.97 | 75.57 | Off flood-path (heuristic) |
| Tindal | 25 | 184.7 | 15,440 | 11.3169 | 77.6742 | 11.52 | 11.12 | 77.87 | 77.47 | Off flood-path (heuristic) |
| Edattala | 13 | 184.9 | 77,811 | 10.0564 | 76.3845 | 10.26 | 9.86 | 76.58 | 76.18 | Off flood-path (heuristic) |
| Kunigal | 19 | 185.0 | 34,155 | 13.0232 | 77.0252 | 13.22 | 12.82 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Elamkunnapuzha | 13 | 185.2 | 26,997 | 10.0267 | 76.2223 | 10.23 | 9.83 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Periya Semūr | 25 | 185.3 | 55,282 | 11.3609 | 77.6895 | 11.56 | 11.16 | 77.89 | 77.49 | Off flood-path (heuristic) |
| Kumarapalayam | 25 | 186.1 | 195,071 | 11.4450 | 77.7110 | 11.64 | 11.24 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Vengola Kizhakkumbāgam | 13 | 186.5 | 32,697 | 10.0637 | 76.4761 | 10.26 | 9.86 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Mangaluru | 19 | 186.9 | 499,487 | 12.9172 | 74.8560 | 13.12 | 12.72 | 75.06 | 74.66 | Off flood-path (heuristic) |
| Sūryampālaiyam | 25 | 186.9 | 28,585 | 11.4045 | 77.7123 | 11.6 | 11.2 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Brāhmana Periya Agrahāram | 25 | 187.0 | 24,798 | 11.3690 | 77.7063 | 11.57 | 11.17 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Kuttampuzha | 13 | 187.2 | 25,436 | 10.1503 | 76.7354 | 10.35 | 9.95 | 76.94 | 76.54 | Off flood-path (heuristic) |
| Mulavukad | 13 | 187.2 | 21,833 | 10.0136 | 76.2631 | 10.21 | 9.81 | 76.46 | 76.06 | Off flood-path (heuristic) |
| Kunnatnād | 13 | 187.3 | 22,881 | 10.0429 | 76.4241 | 10.24 | 9.84 | 76.62 | 76.22 | Off flood-path (heuristic) |
| Tattānkuttai | 25 | 187.6 | 24,708 | 11.4352 | 77.7237 | 11.64 | 11.24 | 77.92 | 77.52 | Off flood-path (heuristic) |
| Vīrappanchathiram | 25 | 188.0 | 84,453 | 11.3531 | 77.7125 | 11.55 | 11.15 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Kakkanad | 13 | 188.3 | 25,531 | 10.0164 | 76.3417 | 10.22 | 9.82 | 76.54 | 76.14 | Off flood-path (heuristic) |
| Sūrampatti | 25 | 188.4 | 41,782 | 11.3273 | 77.7112 | 11.53 | 11.13 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Kāsipālaiyam | 25 | 188.4 | 73,425 | 11.3198 | 77.7097 | 11.52 | 11.12 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Vazhakkala | 13 | 188.4 | 51,242 | 10.0124 | 76.3263 | 10.21 | 9.81 | 76.53 | 76.13 | Off flood-path (heuristic) |
| Iramallūr | 13 | 189.7 | 33,829 | 10.0619 | 76.5717 | 10.26 | 9.86 | 76.77 | 76.37 | Off flood-path (heuristic) |
| Erode | 25 | 189.8 | 521,891 | 11.3428 | 77.7274 | 11.54 | 11.14 | 77.93 | 77.53 | Off flood-path (heuristic) |
| Mūdbidri | 19 | 190.1 | 30,632 | 13.0665 | 74.9952 | 13.27 | 12.87 | 75.2 | 74.8 | Off flood-path (heuristic) |
| Kotamangalam | 13 | 191.5 | 38,837 | 10.0643 | 76.6284 | 10.26 | 9.86 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Vypīn | 13 | 192.2 | 23,717 | 9.9667 | 76.2500 | 10.17 | 9.77 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Kanayannur | 13 | 192.4 | 851,406 | 9.9667 | 76.2667 | 10.17 | 9.77 | 76.47 | 76.07 | Off flood-path (heuristic) |
| Madattukkulam | 25 | 192.6 | 20,620 | 10.5587 | 77.3660 | 10.76 | 10.36 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Pallipalayam | 25 | 193.0 | 40,140 | 11.3652 | 77.7623 | 11.57 | 11.17 | 77.96 | 77.56 | Off flood-path (heuristic) |
| Māgadi | 19 | 193.0 | 27,605 | 12.9571 | 77.2237 | 13.16 | 12.76 | 77.42 | 77.02 | Off flood-path (heuristic) |
| Elandakuttai | 25 | 193.6 | 16,160 | 11.4060 | 77.7750 | 11.61 | 11.21 | 77.98 | 77.58 | Off flood-path (heuristic) |
| Ālampālaiyam | 25 | 193.6 | 20,286 | 11.3635 | 77.7677 | 11.56 | 11.16 | 77.97 | 77.57 | Off flood-path (heuristic) |
| Puthencruz | 13 | 194.1 | 22,378 | 9.9773 | 76.4105 | 10.18 | 9.78 | 76.61 | 76.21 | Off flood-path (heuristic) |
| Mettur | 25 | 194.2 | 56,743 | 11.7880 | 77.8008 | 11.99 | 11.59 | 78.0 | 77.6 | Off flood-path (heuristic) |
| Kochi | 13 | 195.3 | 633,553 | 9.9399 | 76.2602 | 10.14 | 9.74 | 76.46 | 76.06 | Off flood-path (heuristic) |
| Dharapuram | 25 | 195.4 | 72,291 | 10.7383 | 77.5322 | 10.94 | 10.54 | 77.73 | 77.33 | Off flood-path (heuristic) |
| Tripunittura | 13 | 196.2 | 69,390 | 9.9428 | 76.3333 | 10.14 | 9.74 | 76.53 | 76.13 | Off flood-path (heuristic) |
| Thiruvankulam | 13 | 196.4 | 23,160 | 9.9468 | 76.3666 | 10.15 | 9.75 | 76.57 | 76.17 | Off flood-path (heuristic) |
| Maradu | 13 | 196.7 | 44,704 | 9.9365 | 76.3238 | 10.14 | 9.74 | 76.52 | 76.12 | Off flood-path (heuristic) |
| Mūvattupula | 13 | 198.1 | 29,664 | 9.9849 | 76.5773 | 10.18 | 9.78 | 76.78 | 76.38 | Off flood-path (heuristic) |
| Idappadi | 25 | 198.4 | 54,823 | 11.5862 | 77.8389 | 11.79 | 11.39 | 78.04 | 77.64 | Off flood-path (heuristic) |
| Muvattupuzha | 13 | 198.5 | 30,397 | 9.9799 | 76.5738 | 10.18 | 9.78 | 76.77 | 76.37 | Off flood-path (heuristic) |
| Kulattuppālaiyam | 25 | 198.9 | 17,819 | 10.7613 | 77.5842 | 10.96 | 10.56 | 77.78 | 77.38 | Off flood-path (heuristic) |
| Marayur | 13 | 199.7 | 25,000 | 10.2764 | 77.1620 | 10.48 | 10.08 | 77.36 | 76.96 | Off flood-path (heuristic) |
| Vīrnūr | 25 | 199.8 | 16,665 | 11.8443 | 77.8473 | 12.04 | 11.64 | 78.05 | 77.65 | Off flood-path (heuristic) |
| Kumbalam | 13 | 199.8 | 29,193 | 9.9063 | 76.3113 | 10.11 | 9.71 | 76.51 | 76.11 | Off flood-path (heuristic) |

## Malankara Dam (Kerala)
Dam coordinates: 9.85, 76.8

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Thodupuzha | 13 | 9.8 | 52,045 | 9.8939 | 76.7222 | 10.09 | 9.69 | 76.92 | 76.52 | Downstream (heuristic - verify) |
| Erāttupetta | 13 | 18.2 | 34,814 | 9.6875 | 76.7789 | 9.89 | 9.49 | 76.98 | 76.58 | Off flood-path (heuristic) |
| Palai | 13 | 19.9 | 22,056 | 9.7131 | 76.6833 | 9.91 | 9.51 | 76.88 | 76.48 | Downstream (heuristic - verify) |
| Mūvattupula | 13 | 28.6 | 29,664 | 9.9849 | 76.5773 | 10.18 | 9.78 | 76.78 | 76.38 | Off flood-path (heuristic) |
| Muvattupuzha | 13 | 28.7 | 30,397 | 9.9799 | 76.5738 | 10.18 | 9.78 | 76.77 | 76.37 | Off flood-path (heuristic) |
| Kotamangalam | 13 | 30.4 | 38,837 | 10.0643 | 76.6284 | 10.26 | 9.86 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Ettumanoor | 13 | 32.2 | 26,993 | 9.6700 | 76.5700 | 9.87 | 9.47 | 76.77 | 76.37 | Downstream (heuristic - verify) |
| Piravam | 13 | 32.9 | 28,254 | 9.8667 | 76.5000 | 10.07 | 9.67 | 76.7 | 76.3 | Downstream (heuristic - verify) |
| Ettumānūr | 13 | 33.2 | 40,438 | 9.6690 | 76.5592 | 9.87 | 9.47 | 76.76 | 76.36 | Downstream (heuristic - verify) |
| Kuttampuzha | 13 | 34.1 | 25,436 | 10.1503 | 76.7354 | 10.35 | 9.95 | 76.94 | 76.54 | Off flood-path (heuristic) |
| Iramallūr | 13 | 34.4 | 33,829 | 10.0619 | 76.5717 | 10.26 | 9.86 | 76.77 | 76.37 | Off flood-path (heuristic) |
| Vijayapuram | 13 | 38.9 | 29,248 | 9.5912 | 76.5612 | 9.79 | 9.39 | 76.76 | 76.36 | Downstream (heuristic - verify) |
| Munnar | 13 | 39.1 | 68,000 | 10.0882 | 77.0624 | 10.29 | 9.89 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Perumbaikad | 13 | 39.1 | 42,839 | 9.6183 | 76.5313 | 9.82 | 9.42 | 76.73 | 76.33 | Downstream (heuristic - verify) |
| Puthuppally | 13 | 40.8 | 29,635 | 9.5575 | 76.5748 | 9.76 | 9.36 | 76.77 | 76.37 | Downstream (heuristic - verify) |
| Kottayam | 13 | 42.3 | 55,374 | 9.5869 | 76.5213 | 9.79 | 9.39 | 76.72 | 76.32 | Downstream (heuristic - verify) |
| Aymanam | 13 | 42.5 | 34,470 | 9.6068 | 76.5006 | 9.81 | 9.41 | 76.7 | 76.3 | Downstream (heuristic - verify) |
| Vengola Kizhakkumbāgam | 13 | 42.7 | 32,697 | 10.0637 | 76.4761 | 10.26 | 9.86 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Puthencruz | 13 | 45.0 | 22,378 | 9.9773 | 76.4105 | 10.18 | 9.78 | 76.61 | 76.21 | Downstream (heuristic - verify) |
| Panachikkad | 13 | 45.6 | 43,595 | 9.5297 | 76.5406 | 9.73 | 9.33 | 76.74 | 76.34 | Downstream (heuristic - verify) |
| Mulamthuruthy | 13 | 45.6 | 25,852 | 9.9003 | 76.3870 | 10.1 | 9.7 | 76.59 | 76.19 | Downstream (heuristic - verify) |
| Vaikam | 13 | 45.6 | 23,234 | 9.7486 | 76.3964 | 9.95 | 9.55 | 76.6 | 76.2 | Downstream (heuristic - verify) |
| Perumbavoor | 13 | 45.8 | 28,110 | 10.1069 | 76.4737 | 10.31 | 9.91 | 76.67 | 76.27 | Off flood-path (heuristic) |
| Chengalam | 13 | 46.0 | 16,111 | 9.5966 | 76.4678 | 9.8 | 9.4 | 76.67 | 76.27 | Downstream (heuristic - verify) |
| Perumpāvūr | 13 | 46.1 | 27,105 | 10.1154 | 76.4761 | 10.32 | 9.92 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Nattakam | 13 | 46.1 | 38,599 | 9.5453 | 76.5141 | 9.75 | 9.35 | 76.71 | 76.31 | Downstream (heuristic - verify) |
| Kunnatnād | 13 | 46.4 | 22,881 | 10.0429 | 76.4241 | 10.24 | 9.84 | 76.62 | 76.22 | Downstream (heuristic - verify) |
| Manakunnam | 13 | 46.9 | 39,538 | 9.8857 | 76.3733 | 10.09 | 9.69 | 76.57 | 76.17 | Downstream (heuristic - verify) |
| Koovappady | 13 | 48.4 | 29,339 | 10.1553 | 76.4854 | 10.36 | 9.96 | 76.69 | 76.29 | Off flood-path (heuristic) |
| Thiruvankulam | 13 | 48.7 | 23,160 | 9.9468 | 76.3666 | 10.15 | 9.75 | 76.57 | 76.17 | Downstream (heuristic - verify) |
| Marampilly | 13 | 49.0 | 23,272 | 10.1138 | 76.4418 | 10.31 | 9.91 | 76.64 | 76.24 | Off flood-path (heuristic) |
| Chelamartam | 13 | 49.3 | 16,844 | 10.1371 | 76.4570 | 10.34 | 9.94 | 76.66 | 76.26 | Off flood-path (heuristic) |
| Arukutti | 13 | 49.3 | 17,944 | 9.8667 | 76.3500 | 10.07 | 9.67 | 76.55 | 76.15 | Downstream (heuristic - verify) |
| Pallipuram | 13 | 49.7 | 28,276 | 9.7550 | 76.3572 | 9.96 | 9.56 | 76.56 | 76.16 | Downstream (heuristic - verify) |
| Vāzhakulam | 13 | 49.7 | 18,358 | 10.0938 | 76.4198 | 10.29 | 9.89 | 76.62 | 76.22 | Off flood-path (heuristic) |
| Thanneermukkom | 13 | 50.4 | 31,525 | 9.6634 | 76.3807 | 9.86 | 9.46 | 76.58 | 76.18 | Downstream (heuristic - verify) |
| Thaikkattussery | 13 | 50.7 | 20,874 | 9.7715 | 76.3439 | 9.97 | 9.57 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Edattala | 13 | 51.0 | 77,811 | 10.0564 | 76.3845 | 10.26 | 9.86 | 76.58 | 76.18 | Downstream (heuristic - verify) |
| Kutiatodu | 13 | 51.4 | 23,669 | 9.8000 | 76.3333 | 10.0 | 9.6 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Kokōtamangalam South | 13 | 51.9 | 17,047 | 9.6795 | 76.3589 | 9.88 | 9.48 | 76.56 | 76.16 | Downstream (heuristic - verify) |
| Tripunittura | 13 | 52.2 | 69,390 | 9.9428 | 76.3333 | 10.14 | 9.74 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Srīkandamangalam | 13 | 52.3 | 23,681 | 9.6594 | 76.3633 | 9.86 | 9.46 | 76.56 | 76.16 | Downstream (heuristic - verify) |
| Vayalār | 13 | 52.8 | 25,094 | 9.7116 | 76.3389 | 9.91 | 9.51 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Gudalur | 25 | 52.8 | 47,419 | 9.6783 | 77.2495 | 9.88 | 9.48 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Paippad | 13 | 52.9 | 21,338 | 9.4246 | 76.5848 | 9.62 | 9.22 | 76.78 | 76.38 | Downstream (heuristic - verify) |
| Tevāram | 25 | 52.9 | 16,079 | 9.8967 | 77.2809 | 10.1 | 9.7 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Maradu | 13 | 53.0 | 44,704 | 9.9365 | 76.3238 | 10.14 | 9.74 | 76.52 | 76.12 | Downstream (heuristic - verify) |
| Kakkanad | 13 | 53.5 | 25,531 | 10.0164 | 76.3417 | 10.22 | 9.82 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Shertallai | 13 | 53.6 | 45,474 | 9.6858 | 76.3400 | 9.89 | 9.49 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Changanācheri | 13 | 53.8 | 51,430 | 9.4420 | 76.5360 | 9.64 | 9.24 | 76.74 | 76.34 | Downstream (heuristic - verify) |
| Kumbalam | 13 | 53.9 | 29,193 | 9.9063 | 76.3113 | 10.11 | 9.71 | 76.51 | 76.11 | Downstream (heuristic - verify) |
| Cherthala | 13 | 54.1 | 45,827 | 9.6844 | 76.3356 | 9.88 | 9.48 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Aroor | 13 | 54.3 | 39,214 | 9.8694 | 76.3050 | 10.07 | 9.67 | 76.5 | 76.1 | Downstream (heuristic - verify) |
| Martūru | 13 | 54.3 | 18,890 | 10.1717 | 76.4264 | 10.37 | 9.97 | 76.63 | 76.23 | Off flood-path (heuristic) |
| Kombai | 25 | 54.3 | 15,960 | 9.8475 | 77.2960 | 10.05 | 9.65 | 77.5 | 77.1 | Off flood-path (heuristic) |
| Cumbum | 25 | 54.6 | 68,090 | 9.7365 | 77.2847 | 9.94 | 9.54 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Kodamthuruth | 13 | 54.9 | 21,295 | 9.8006 | 76.3015 | 10.0 | 9.6 | 76.5 | 76.1 | Downstream (heuristic - verify) |
| Ezhupunna | 13 | 54.9 | 27,528 | 9.8211 | 76.2998 | 10.02 | 9.62 | 76.5 | 76.1 | Downstream (heuristic - verify) |
| Vazhakkala | 13 | 54.9 | 51,242 | 10.0124 | 76.3263 | 10.21 | 9.81 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Muhamma | 13 | 55.1 | 25,861 | 9.6089 | 76.3608 | 9.81 | 9.41 | 76.56 | 76.16 | Downstream (heuristic - verify) |
| Nedumbassery | 13 | 55.4 | 29,706 | 10.1565 | 76.4017 | 10.36 | 9.96 | 76.6 | 76.2 | Off flood-path (heuristic) |
| Valparai | 25 | 55.6 | 90,353 | 10.3269 | 76.9512 | 10.53 | 10.13 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Alwaye | 13 | 56.5 | 23,703 | 10.1065 | 76.3548 | 10.31 | 9.91 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Kumbalangy | 13 | 56.7 | 42,367 | 9.8798 | 76.2835 | 10.08 | 9.68 | 76.48 | 76.08 | Downstream (heuristic - verify) |
| Choornikkara | 13 | 56.8 | 43,207 | 10.0879 | 76.3411 | 10.29 | 9.89 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Aluva | 13 | 56.9 | 24,108 | 10.1076 | 76.3516 | 10.31 | 9.91 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Kalamassery | 13 | 57.0 | 71,038 | 10.0614 | 76.3263 | 10.26 | 9.86 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Tiruvalla | 13 | 57.6 | 57,223 | 9.3816 | 76.5749 | 9.58 | 9.18 | 76.77 | 76.37 | Downstream (heuristic - verify) |
| Uttamapālaiyam | 25 | 58.0 | 29,050 | 9.8070 | 77.3272 | 10.01 | 9.61 | 77.53 | 77.13 | Off flood-path (heuristic) |
| Mannanchōri | 13 | 58.0 | 32,139 | 9.5722 | 76.3525 | 9.77 | 9.37 | 76.55 | 76.15 | Downstream (heuristic - verify) |
| Kāmayakkavundanpatti | 25 | 58.3 | 16,134 | 9.7386 | 77.3200 | 9.94 | 9.54 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Angamāli | 13 | 58.9 | 34,399 | 10.1905 | 76.3879 | 10.39 | 9.99 | 76.59 | 76.19 | Off flood-path (heuristic) |
| Kadungalūr | 13 | 59.1 | 39,666 | 10.0948 | 76.3211 | 10.29 | 9.89 | 76.52 | 76.12 | Downstream (heuristic - verify) |
| Kanayannur | 13 | 59.8 | 851,406 | 9.9667 | 76.2667 | 10.17 | 9.77 | 76.47 | 76.07 | Downstream (heuristic - verify) |
| Kochi | 13 | 60.0 | 633,553 | 9.9399 | 76.2602 | 10.14 | 9.74 | 76.46 | 76.06 | Downstream (heuristic - verify) |
| Cheranellūr | 13 | 60.3 | 30,594 | 10.0543 | 76.2896 | 10.25 | 9.85 | 76.49 | 76.09 | Downstream (heuristic - verify) |
| Kalavoor | 13 | 60.4 | 29,564 | 9.5705 | 76.3276 | 9.77 | 9.37 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Chengamanād | 13 | 60.5 | 29,576 | 10.1541 | 76.3416 | 10.35 | 9.95 | 76.54 | 76.14 | Off flood-path (heuristic) |
| Komalapuram | 13 | 60.7 | 47,126 | 9.5419 | 76.3424 | 9.74 | 9.34 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Elūr | 13 | 61.5 | 31,468 | 10.0667 | 76.2833 | 10.27 | 9.87 | 76.48 | 76.08 | Downstream (heuristic - verify) |
| Mulavukad | 13 | 61.6 | 21,833 | 10.0136 | 76.2631 | 10.21 | 9.81 | 76.46 | 76.06 | Downstream (heuristic - verify) |
| Vypīn | 13 | 61.6 | 23,717 | 9.9667 | 76.2500 | 10.17 | 9.77 | 76.45 | 76.05 | Downstream (heuristic - verify) |
| Marayur | 13 | 61.8 | 25,000 | 10.2764 | 77.1620 | 10.48 | 10.08 | 77.36 | 76.96 | Off flood-path (heuristic) |
| Alengād | 13 | 62.2 | 47,329 | 10.1190 | 76.3023 | 10.32 | 9.92 | 76.5 | 76.1 | Downstream (heuristic - verify) |
| Alangad | 13 | 62.4 | 47,329 | 10.1019 | 76.2910 | 10.3 | 9.9 | 76.49 | 76.09 | Downstream (heuristic - verify) |
| Chengannūr | 13 | 62.8 | 25,043 | 9.3157 | 76.6151 | 9.52 | 9.12 | 76.82 | 76.42 | Off flood-path (heuristic) |
| Bodināyakkanūr | 25 | 62.8 | 75,680 | 10.0117 | 77.3498 | 10.21 | 9.81 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Chokkanāthapuram | 25 | 63.0 | 15,625 | 9.9921 | 77.3566 | 10.19 | 9.79 | 77.56 | 77.16 | Off flood-path (heuristic) |
| Pathirappally | 13 | 63.0 | 27,445 | 9.5354 | 76.3221 | 9.74 | 9.34 | 76.52 | 76.12 | Downstream (heuristic - verify) |
| Varappuzha | 13 | 63.1 | 26,750 | 10.0759 | 76.2715 | 10.28 | 9.88 | 76.47 | 76.07 | Downstream (heuristic - verify) |
| Chinnamanūr | 25 | 63.7 | 42,305 | 9.8400 | 77.3811 | 10.04 | 9.64 | 77.58 | 77.18 | Off flood-path (heuristic) |
| Pathanāmthitta | 13 | 64.9 | 38,285 | 9.2667 | 76.7833 | 9.47 | 9.07 | 76.98 | 76.58 | Off flood-path (heuristic) |
| Karumālūr | 13 | 65.1 | 29,805 | 10.1329 | 76.2799 | 10.33 | 9.93 | 76.48 | 76.08 | Downstream (heuristic - verify) |
| Kadamakudi | 13 | 65.2 | 16,295 | 10.0642 | 76.2456 | 10.26 | 9.86 | 76.45 | 76.05 | Downstream (heuristic - verify) |
| Alappuzha | 13 | 65.6 | 240,991 | 9.4900 | 76.3264 | 9.69 | 9.29 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Elamkunnapuzha | 13 | 66.3 | 26,997 | 10.0267 | 76.2223 | 10.23 | 9.83 | 76.42 | 76.02 | Downstream (heuristic - verify) |
| Narakal | 13 | 66.7 | 23,760 | 10.0383 | 76.2221 | 10.24 | 9.84 | 76.42 | 76.02 | Downstream (heuristic - verify) |
| Kottuvalli | 13 | 67.2 | 42,922 | 10.1112 | 76.2463 | 10.31 | 9.91 | 76.45 | 76.05 | Downstream (heuristic - verify) |
| Mēppādam | 13 | 67.4 | 17,067 | 9.3242 | 76.4934 | 9.52 | 9.12 | 76.69 | 76.29 | Downstream (heuristic - verify) |
| Koratti | 13 | 67.8 | 17,618 | 10.2660 | 76.3477 | 10.47 | 10.07 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Kallūr Tekkumuri | 13 | 67.8 | 17,480 | 10.2401 | 76.3236 | 10.44 | 10.04 | 76.52 | 76.12 | Off flood-path (heuristic) |
| Kallūr Vadakummuri | 13 | 68.4 | 25,259 | 10.2532 | 76.3281 | 10.45 | 10.05 | 76.53 | 76.13 | Off flood-path (heuristic) |
| Parūr | 13 | 70.7 | 31,503 | 10.1477 | 76.2300 | 10.35 | 9.95 | 76.43 | 76.03 | Downstream (heuristic - verify) |
| Māvelikara | 13 | 70.9 | 28,300 | 9.2593 | 76.5564 | 9.46 | 9.06 | 76.76 | 76.36 | Downstream (heuristic - verify) |
| Chendamangalam | 13 | 71.0 | 29,326 | 10.1632 | 76.2346 | 10.36 | 9.96 | 76.43 | 76.03 | Downstream (heuristic - verify) |
| Kizhake Chālakudi | 13 | 71.2 | 49,525 | 10.3007 | 76.3376 | 10.5 | 10.1 | 76.54 | 76.14 | Off flood-path (heuristic) |
| Puthenvelikara | 13 | 71.3 | 33,372 | 10.1851 | 76.2454 | 10.39 | 9.99 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Haripād | 13 | 73.5 | 15,588 | 9.2836 | 76.4552 | 9.48 | 9.08 | 76.66 | 76.26 | Downstream (heuristic - verify) |
| Vadakakarai | 13 | 74.4 | 20,571 | 10.1664 | 76.2018 | 10.37 | 9.97 | 76.4 | 76.0 | Downstream (heuristic - verify) |
| Moothakunnam | 13 | 75.7 | 27,458 | 10.1899 | 76.2008 | 10.39 | 9.99 | 76.4 | 76.0 | Downstream (heuristic - verify) |
| Kumārapuram | 13 | 76.0 | 26,943 | 9.2708 | 76.4326 | 9.47 | 9.07 | 76.63 | 76.23 | Downstream (heuristic - verify) |
| Teni | 25 | 76.4 | 1,034,724 | 10.0112 | 77.4777 | 10.21 | 9.81 | 77.68 | 77.28 | Off flood-path (heuristic) |
| Karthikappally | 13 | 76.4 | 19,021 | 9.2568 | 76.4487 | 9.46 | 9.06 | 76.65 | 76.25 | Downstream (heuristic - verify) |
| Allinagaram | 25 | 76.8 | 94,453 | 10.0274 | 77.4781 | 10.23 | 9.83 | 77.68 | 77.28 | Off flood-path (heuristic) |
| Cheppad | 13 | 77.2 | 20,052 | 9.2346 | 76.4733 | 9.43 | 9.03 | 76.67 | 76.27 | Downstream (heuristic - verify) |
| Adūr | 13 | 77.5 | 29,652 | 9.1560 | 76.7319 | 9.36 | 8.96 | 76.93 | 76.53 | Off flood-path (heuristic) |
| Bharanikāvu Tekku | 13 | 78.5 | 15,922 | 9.1849 | 76.5608 | 9.38 | 8.98 | 76.76 | 76.36 | Off flood-path (heuristic) |
| Kodungallūr | 13 | 78.7 | 60,190 | 10.2326 | 76.1951 | 10.43 | 10.03 | 76.4 | 76.0 | Off flood-path (heuristic) |
| Kottur | 25 | 78.8 | 26,627 | 10.5365 | 76.9803 | 10.74 | 10.34 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Kattanam | 13 | 79.3 | 19,764 | 9.1761 | 76.5632 | 9.38 | 8.98 | 76.76 | 76.36 | Off flood-path (heuristic) |
| Muthukulam | 13 | 79.7 | 20,740 | 9.2168 | 76.4592 | 9.42 | 9.02 | 76.66 | 76.26 | Downstream (heuristic - verify) |
| Vettaikkaranpudur | 25 | 80.1 | 18,128 | 10.5621 | 76.9130 | 10.76 | 10.36 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Thekkumkara | 13 | 80.2 | 15,258 | 10.2819 | 76.2132 | 10.48 | 10.08 | 76.41 | 76.01 | Off flood-path (heuristic) |
| Kayamkulam | 13 | 81.2 | 68,634 | 9.1817 | 76.5009 | 9.38 | 8.98 | 76.7 | 76.3 | Downstream (heuristic - verify) |
| Edavilangu | 13 | 81.4 | 20,363 | 10.2403 | 76.1710 | 10.44 | 10.04 | 76.37 | 75.97 | Off flood-path (heuristic) |
| Pattiyūrgrāmam | 13 | 81.7 | 23,460 | 9.1774 | 76.5011 | 9.38 | 8.98 | 76.7 | 76.3 | Downstream (heuristic - verify) |
| Anaimalai | 25 | 82.8 | 17,208 | 10.5830 | 76.9344 | 10.78 | 10.38 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Panangad | 13 | 83.0 | 15,630 | 10.2728 | 76.1748 | 10.47 | 10.07 | 76.37 | 75.97 | Off flood-path (heuristic) |
| Kandalloor | 13 | 83.2 | 19,925 | 9.1756 | 76.4713 | 9.38 | 8.98 | 76.67 | 76.27 | Downstream (heuristic - verify) |
| Krishnāpuram | 13 | 83.3 | 26,705 | 9.1521 | 76.5234 | 9.35 | 8.95 | 76.72 | 76.32 | Downstream (heuristic - verify) |
| Irinjālakuda | 13 | 84.6 | 29,208 | 10.3424 | 76.2112 | 10.54 | 10.14 | 76.41 | 76.01 | Off flood-path (heuristic) |
| Ochira | 13 | 85.6 | 28,412 | 9.1348 | 76.5117 | 9.33 | 8.93 | 76.71 | 76.31 | Downstream (heuristic - verify) |
| Pappinivattom | 13 | 85.8 | 15,336 | 10.2937 | 76.1583 | 10.49 | 10.09 | 76.36 | 75.96 | Off flood-path (heuristic) |
| Periyakulam | 25 | 86.9 | 42,976 | 10.1227 | 77.5437 | 10.32 | 9.92 | 77.74 | 77.34 | Off flood-path (heuristic) |
| Kodaikānāl | 25 | 87.0 | 36,501 | 10.2393 | 77.4893 | 10.44 | 10.04 | 77.69 | 77.29 | Off flood-path (heuristic) |
| Amballūr | 13 | 87.6 | 29,341 | 10.4343 | 76.2634 | 10.63 | 10.23 | 76.46 | 76.06 | Off flood-path (heuristic) |
| Karungappalli | 13 | 87.8 | 25,336 | 9.1042 | 76.5370 | 9.3 | 8.9 | 76.74 | 76.34 | Off flood-path (heuristic) |
| Porathissery | 13 | 87.9 | 16,768 | 10.3764 | 76.2015 | 10.58 | 10.18 | 76.4 | 76.0 | Off flood-path (heuristic) |
| Perinjanam | 13 | 88.0 | 21,012 | 10.3133 | 76.1485 | 10.51 | 10.11 | 76.35 | 75.95 | Off flood-path (heuristic) |
| Namminikara | 13 | 88.1 | 18,067 | 10.4322 | 76.2542 | 10.63 | 10.23 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Sivagiri | 25 | 89.0 | 23,040 | 9.3446 | 77.4291 | 9.54 | 9.14 | 77.63 | 77.23 | Off flood-path (heuristic) |
| Thodiyoor | 13 | 89.2 | 25,884 | 9.0780 | 76.5777 | 9.28 | 8.88 | 76.78 | 76.38 | Off flood-path (heuristic) |
| Settūr | 25 | 89.3 | 20,228 | 9.4056 | 77.4784 | 9.61 | 9.21 | 77.68 | 77.28 | Off flood-path (heuristic) |
| Kulasēkarapuram | 13 | 89.4 | 26,907 | 9.0912 | 76.5303 | 9.29 | 8.89 | 76.73 | 76.33 | Off flood-path (heuristic) |
| Kaipamangalam | 13 | 90.2 | 35,626 | 10.3350 | 76.1392 | 10.53 | 10.13 | 76.34 | 75.94 | Off flood-path (heuristic) |
| Kattur | 13 | 90.5 | 18,017 | 10.3732 | 76.1668 | 10.57 | 10.17 | 76.37 | 75.97 | Off flood-path (heuristic) |
| Sūleswaranpatti | 25 | 90.6 | 20,104 | 10.6388 | 77.0084 | 10.84 | 10.44 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Puthūr | 13 | 90.9 | 17,430 | 10.4874 | 76.2793 | 10.69 | 10.29 | 76.48 | 76.08 | Off flood-path (heuristic) |
| Ūttukuli | 25 | 91.3 | 16,354 | 10.6519 | 76.9778 | 10.85 | 10.45 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Ādanāttutekkumuri Kizhakku | 13 | 91.3 | 22,250 | 9.0791 | 76.5137 | 9.28 | 8.88 | 76.71 | 76.31 | Downstream (heuristic - verify) |
| Marattakara | 13 | 91.4 | 15,817 | 10.4733 | 76.2558 | 10.67 | 10.27 | 76.46 | 76.06 | Off flood-path (heuristic) |
| Āndippatti | 25 | 91.4 | 27,287 | 9.9980 | 77.6210 | 10.2 | 9.8 | 77.82 | 77.42 | Off flood-path (heuristic) |
| Settiyārpatti | 25 | 91.4 | 17,520 | 9.3935 | 77.4935 | 9.59 | 9.19 | 77.69 | 77.29 | Off flood-path (heuristic) |
| Sundakkāmpālaiyam | 25 | 91.6 | 16,459 | 10.5666 | 77.2135 | 10.77 | 10.37 | 77.41 | 77.01 | Off flood-path (heuristic) |
| Kalleribhāgam | 13 | 92.4 | 21,723 | 9.0540 | 76.5580 | 9.25 | 8.85 | 76.76 | 76.36 | Off flood-path (heuristic) |
| Chendrappini | 13 | 92.6 | 16,404 | 10.3555 | 76.1282 | 10.56 | 10.16 | 76.33 | 75.93 | Off flood-path (heuristic) |
| Pollachi | 25 | 92.7 | 90,180 | 10.6583 | 77.0085 | 10.86 | 10.46 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Pudunagaram | 13 | 93.2 | 17,892 | 10.6802 | 76.6836 | 10.88 | 10.48 | 76.88 | 76.48 | Off flood-path (heuristic) |
| Punalūr | 13 | 93.3 | 47,263 | 9.0196 | 76.9226 | 9.22 | 8.82 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Alattūr | 13 | 93.6 | 26,720 | 10.6500 | 76.5333 | 10.85 | 10.45 | 76.73 | 76.33 | Off flood-path (heuristic) |
| Chevvoor | 13 | 93.6 | 16,086 | 10.4586 | 76.2088 | 10.66 | 10.26 | 76.41 | 76.01 | Off flood-path (heuristic) |
| Rajapalayam | 25 | 93.6 | 130,442 | 9.4530 | 77.5533 | 9.65 | 9.25 | 77.75 | 77.35 | Off flood-path (heuristic) |
| Kottārakara | 13 | 94.2 | 29,788 | 9.0036 | 76.7738 | 9.2 | 8.8 | 76.97 | 76.57 | Off flood-path (heuristic) |
| Koduvayur | 13 | 94.3 | 20,703 | 10.6867 | 76.6588 | 10.89 | 10.49 | 76.86 | 76.46 | Off flood-path (heuristic) |
| Chittūr | 13 | 94.7 | 32,298 | 10.6997 | 76.7471 | 10.9 | 10.5 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Ayanavelikulangara Vadakku | 13 | 94.7 | 24,268 | 9.0430 | 76.5230 | 9.24 | 8.84 | 76.72 | 76.32 | Off flood-path (heuristic) |
| Mamsapuram | 25 | 94.7 | 18,635 | 9.4996 | 77.5879 | 9.7 | 9.3 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Vathirairuppu | 25 | 95.0 | 16,784 | 9.6353 | 77.6389 | 9.84 | 9.44 | 77.84 | 77.44 | Off flood-path (heuristic) |
| Vāsudevanallūr | 25 | 95.3 | 21,361 | 9.2417 | 77.4118 | 9.44 | 9.04 | 77.61 | 77.21 | Off flood-path (heuristic) |
| Udumalaippettai | 25 | 95.6 | 61,133 | 10.5881 | 77.2478 | 10.79 | 10.39 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Periyakottai | 25 | 97.7 | 17,356 | 10.5909 | 77.2797 | 10.79 | 10.39 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Thrissur | 13 | 97.8 | 315,957 | 10.5167 | 76.2167 | 10.72 | 10.32 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Devadanapatti | 25 | 98.1 | 19,285 | 10.1467 | 77.6439 | 10.35 | 9.95 | 77.84 | 77.44 | Off flood-path (heuristic) |
| Elumalai | 25 | 98.5 | 15,746 | 9.8650 | 77.6992 | 10.07 | 9.67 | 77.9 | 77.5 | Off flood-path (heuristic) |
| Ponmana | 13 | 98.5 | 29,139 | 9.0080 | 76.5202 | 9.21 | 8.81 | 76.72 | 76.32 | Off flood-path (heuristic) |
| Srivilliputhur | 25 | 98.8 | 75,396 | 9.5127 | 77.6337 | 9.71 | 9.31 | 77.83 | 77.43 | Off flood-path (heuristic) |
| Puliyankudi | 25 | 99.7 | 66,034 | 9.1749 | 77.3980 | 9.37 | 8.97 | 77.6 | 77.2 | Off flood-path (heuristic) |
| Madattukkulam | 25 | 100.2 | 20,620 | 10.5587 | 77.3660 | 10.76 | 10.36 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Elampalloor | 13 | 100.4 | 33,959 | 8.9558 | 76.6739 | 9.16 | 8.76 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Pudusseri | 13 | 101.0 | 16,629 | 10.7582 | 76.7859 | 10.96 | 10.56 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Talikkulam | 13 | 101.3 | 25,507 | 10.4404 | 76.0948 | 10.64 | 10.24 | 76.29 | 75.89 | Off flood-path (heuristic) |
| Panayāttur Vadakkumbhāgam | 13 | 101.5 | 25,607 | 8.9546 | 76.6185 | 9.15 | 8.75 | 76.82 | 76.42 | Off flood-path (heuristic) |
| Perunād | 13 | 101.7 | 35,173 | 8.9490 | 76.6427 | 9.15 | 8.75 | 76.84 | 76.44 | Off flood-path (heuristic) |
| Chavara | 13 | 102.2 | 42,655 | 8.9673 | 76.5419 | 9.17 | 8.77 | 76.74 | 76.34 | Off flood-path (heuristic) |
| Karuva | 13 | 102.5 | 25,432 | 8.9500 | 76.5986 | 9.15 | 8.75 | 76.8 | 76.4 | Off flood-path (heuristic) |
| Palani | 25 | 103.4 | 70,467 | 10.4503 | 77.5209 | 10.65 | 10.25 | 77.72 | 77.32 | Off flood-path (heuristic) |
| Pirāyiri | 13 | 103.4 | 41,359 | 10.7652 | 76.6318 | 10.97 | 10.57 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Marutharōd | 13 | 103.5 | 24,963 | 10.7751 | 76.6995 | 10.98 | 10.58 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Karamuck | 13 | 103.8 | 15,129 | 10.4842 | 76.1044 | 10.68 | 10.28 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Palakkad | 13 | 103.9 | 132,728 | 10.7732 | 76.6537 | 10.97 | 10.57 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Vadakarai Kīl Pidāgai | 25 | 104.0 | 20,821 | 9.0401 | 77.2741 | 9.24 | 8.84 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Sivagirippatti | 25 | 104.1 | 17,306 | 10.4502 | 77.5303 | 10.65 | 10.25 | 77.73 | 77.33 | Off flood-path (heuristic) |
| Kottangara | 13 | 104.3 | 44,402 | 8.9241 | 76.6467 | 9.12 | 8.72 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Vadanappally | 13 | 104.5 | 30,657 | 10.4690 | 76.0813 | 10.67 | 10.27 | 76.28 | 75.88 | Off flood-path (heuristic) |
| Manalur | 13 | 104.6 | 17,757 | 10.4929 | 76.1027 | 10.69 | 10.29 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Pudussery West | 13 | 104.6 | 20,140 | 10.7880 | 76.7279 | 10.99 | 10.59 | 76.93 | 76.53 | Off flood-path (heuristic) |
| Killannur | 13 | 104.9 | 20,339 | 10.5992 | 76.2180 | 10.8 | 10.4 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Kadayanallur | 25 | 104.9 | 90,364 | 9.0728 | 77.3415 | 9.27 | 8.87 | 77.54 | 77.14 | Off flood-path (heuristic) |
| Nedumpana | 13 | 105.4 | 29,454 | 8.9080 | 76.6930 | 9.11 | 8.71 | 76.89 | 76.49 | Off flood-path (heuristic) |
| Tirkadavūr | 13 | 105.5 | 39,285 | 8.9240 | 76.5910 | 9.12 | 8.72 | 76.79 | 76.39 | Off flood-path (heuristic) |
| Ayakudi | 25 | 105.9 | 27,156 | 10.4499 | 77.5520 | 10.65 | 10.25 | 77.75 | 77.35 | Off flood-path (heuristic) |
| Ambikāpuram | 13 | 106.2 | 28,592 | 10.7939 | 76.6530 | 10.99 | 10.59 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Trikonavattam | 13 | 107.8 | 41,609 | 8.8899 | 76.6659 | 9.09 | 8.69 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Adichānallūr | 13 | 108.2 | 27,240 | 8.8805 | 76.7156 | 9.08 | 8.68 | 76.92 | 76.52 | Off flood-path (heuristic) |
| Vadakāncheri | 13 | 108.6 | 15,674 | 10.6604 | 76.2466 | 10.86 | 10.46 | 76.45 | 76.05 | Off flood-path (heuristic) |
| Shenkottai | 25 | 108.7 | 26,823 | 8.9774 | 77.2463 | 9.18 | 8.78 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Puthuppariyāram | 13 | 108.7 | 30,895 | 10.8131 | 76.6287 | 11.01 | 10.61 | 76.83 | 76.43 | Off flood-path (heuristic) |
| Usilampatti | 25 | 108.8 | 35,219 | 9.9694 | 77.7862 | 10.17 | 9.77 | 77.99 | 77.59 | Off flood-path (heuristic) |
| Talattala | 13 | 109.5 | 37,517 | 8.8738 | 76.6716 | 9.07 | 8.67 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Kollam | 13 | 110.3 | 367,107 | 8.8811 | 76.5847 | 9.08 | 8.68 | 76.78 | 76.38 | Off flood-path (heuristic) |
| Vattalkundu | 25 | 110.5 | 22,928 | 10.1607 | 77.7588 | 10.36 | 9.96 | 77.96 | 77.56 | Off flood-path (heuristic) |
| Sankarankovil | 25 | 111.0 | 57,277 | 9.1705 | 77.5411 | 9.37 | 8.97 | 77.74 | 77.34 | Off flood-path (heuristic) |
| Āyikudi | 25 | 111.5 | 15,129 | 9.0032 | 77.3449 | 9.2 | 8.8 | 77.54 | 77.14 | Off flood-path (heuristic) |
| Chetwayi | 13 | 111.7 | 38,011 | 10.5289 | 76.0479 | 10.73 | 10.33 | 76.25 | 75.85 | Off flood-path (heuristic) |
| Mīnād | 13 | 111.8 | 29,716 | 8.8503 | 76.6952 | 9.05 | 8.65 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Ottapalam | 13 | 112.6 | 53,792 | 10.7735 | 76.3776 | 10.97 | 10.57 | 76.58 | 76.18 | Off flood-path (heuristic) |
| Mayyanād | 13 | 113.9 | 40,039 | 8.8373 | 76.6450 | 9.04 | 8.64 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Thenkasi | 25 | 114.0 | 70,545 | 8.9600 | 77.3153 | 9.16 | 8.76 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Sāmbūrvadakara | 25 | 114.5 | 16,709 | 8.9986 | 77.3876 | 9.2 | 8.8 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Puttankulam | 13 | 115.6 | 29,447 | 8.8138 | 76.7179 | 9.01 | 8.61 | 76.92 | 76.52 | Off flood-path (heuristic) |
| Vāniyamkulam | 13 | 115.6 | 16,085 | 10.7830 | 76.3336 | 10.98 | 10.58 | 76.53 | 76.13 | Off flood-path (heuristic) |
| Shōranūr | 13 | 116.8 | 43,533 | 10.7618 | 76.2708 | 10.96 | 10.56 | 76.47 | 76.07 | Off flood-path (heuristic) |
| Kārakkād | 13 | 116.9 | 39,098 | 10.5880 | 76.0388 | 10.79 | 10.39 | 76.24 | 75.84 | Off flood-path (heuristic) |
| Guruvāyūr | 13 | 117.2 | 21,416 | 10.5943 | 76.0411 | 10.79 | 10.39 | 76.24 | 75.84 | Off flood-path (heuristic) |
| Sivakasi | 25 | 118.1 | 234,704 | 9.4500 | 77.7980 | 9.65 | 9.25 | 78.0 | 77.6 | Off flood-path (heuristic) |
| Paravūr Tekkumbhāgam | 13 | 118.2 | 38,946 | 8.7947 | 76.6680 | 8.99 | 8.59 | 76.87 | 76.47 | Off flood-path (heuristic) |
| Sithurajapuram | 25 | 118.3 | 16,860 | 9.4214 | 77.7873 | 9.62 | 9.22 | 77.99 | 77.59 | Off flood-path (heuristic) |
| Sūrandai | 25 | 118.6 | 35,272 | 8.9757 | 77.4192 | 9.18 | 8.78 | 77.62 | 77.22 | Off flood-path (heuristic) |
| Madukkarai | 25 | 118.7 | 30,357 | 10.9057 | 76.9634 | 11.11 | 10.71 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Viswanatham | 25 | 119.2 | 25,555 | 9.4295 | 77.8003 | 9.63 | 9.23 | 78.0 | 77.6 | Off flood-path (heuristic) |
| Kunnamkulam | 13 | 119.5 | 63,903 | 10.6467 | 76.0670 | 10.85 | 10.45 | 76.27 | 75.87 | Off flood-path (heuristic) |
| Nilakottai | 25 | 120.2 | 22,197 | 10.1650 | 77.8502 | 10.36 | 9.96 | 78.05 | 77.65 | Off flood-path (heuristic) |
| Tiruttangal | 25 | 120.4 | 55,362 | 9.4833 | 77.8333 | 9.68 | 9.28 | 78.03 | 77.63 | Off flood-path (heuristic) |
| Chettipālaiyam | 25 | 121.0 | 24,080 | 10.9125 | 77.0370 | 11.11 | 10.71 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Edavai | 13 | 121.3 | 25,994 | 8.7645 | 76.6885 | 8.96 | 8.56 | 76.89 | 76.49 | Off flood-path (heuristic) |
| Ongallur-II | 13 | 122.3 | 26,273 | 10.7897 | 76.2190 | 10.99 | 10.59 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Edakkazhiyūr | 13 | 122.9 | 17,335 | 10.6228 | 75.9965 | 10.82 | 10.42 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Ongallur-I | 13 | 123.6 | 16,998 | 10.8027 | 76.2185 | 11.0 | 10.6 | 76.42 | 76.02 | Off flood-path (heuristic) |
| Rāmachettipālaiyam | 25 | 123.9 | 17,809 | 10.9582 | 76.9201 | 11.16 | 10.76 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Varkala | 13 | 124.5 | 43,276 | 8.7333 | 76.7167 | 8.93 | 8.53 | 76.92 | 76.52 | Off flood-path (heuristic) |
| Kuniyamuttūr | 25 | 125.0 | 95,924 | 10.9638 | 76.9525 | 11.16 | 10.76 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Kurichchi | 25 | 125.0 | 123,667 | 10.9609 | 76.9738 | 11.16 | 10.76 | 77.17 | 76.77 | Off flood-path (heuristic) |
| Pattāmbi | 13 | 125.3 | 28,632 | 10.8001 | 76.1841 | 11.0 | 10.6 | 76.38 | 75.98 | Off flood-path (heuristic) |
| Punnayūr | 13 | 125.3 | 19,387 | 10.6521 | 75.9951 | 10.85 | 10.45 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Oddanchathiram | 25 | 125.4 | 30,064 | 10.4801 | 77.7498 | 10.68 | 10.28 | 77.95 | 77.55 | Off flood-path (heuristic) |
| Kilapavoor | 25 | 125.5 | 22,231 | 8.9086 | 77.4311 | 9.11 | 8.71 | 77.63 | 77.23 | Off flood-path (heuristic) |
| Vadakkēkkād | 13 | 125.6 | 15,811 | 10.6635 | 76.0033 | 10.86 | 10.46 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Cherpulassery | 13 | 126.1 | 30,000 | 10.8765 | 76.3093 | 11.08 | 10.68 | 76.51 | 76.11 | Off flood-path (heuristic) |
| Vettūr | 13 | 126.2 | 37,219 | 8.7174 | 76.7258 | 8.92 | 8.52 | 76.93 | 76.53 | Off flood-path (heuristic) |
| Kalugumalai | 25 | 126.2 | 15,423 | 9.1494 | 77.7057 | 9.35 | 8.95 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Ammainaickanur | 25 | 126.9 | 19,257 | 10.1671 | 77.9132 | 10.37 | 9.97 | 78.11 | 77.71 | Off flood-path (heuristic) |
| Dharapuram | 25 | 127.2 | 72,291 | 10.7383 | 77.5322 | 10.94 | 10.54 | 77.73 | 77.33 | Off flood-path (heuristic) |
| Vellalūr | 25 | 127.8 | 24,872 | 10.9775 | 77.0260 | 11.18 | 10.78 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Kadikkād | 13 | 128.0 | 19,147 | 10.6705 | 75.9797 | 10.87 | 10.47 | 76.18 | 75.78 | Off flood-path (heuristic) |
| Attingal | 13 | 128.3 | 37,346 | 8.6961 | 76.8151 | 8.9 | 8.5 | 77.02 | 76.62 | Off flood-path (heuristic) |
| Sholavandan | 25 | 128.6 | 22,578 | 10.0216 | 77.9609 | 10.22 | 9.82 | 78.16 | 77.76 | Off flood-path (heuristic) |
| Kīlattingal | 13 | 128.7 | 15,185 | 8.6926 | 76.7933 | 8.89 | 8.49 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Trittāla | 13 | 128.9 | 27,796 | 10.8030 | 76.1288 | 11.0 | 10.6 | 76.33 | 75.93 | Off flood-path (heuristic) |
| Vīrakeralam | 25 | 129.3 | 23,841 | 11.0077 | 76.9126 | 11.21 | 10.81 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Vakkam | 13 | 129.6 | 19,267 | 8.6845 | 76.7675 | 8.88 | 8.48 | 76.97 | 76.57 | Off flood-path (heuristic) |
| Tirumangalam | 25 | 129.7 | 51,194 | 9.8231 | 77.9838 | 10.02 | 9.62 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Coimbatore | 25 | 129.8 | 2,136,916 | 11.0055 | 76.9661 | 11.21 | 10.81 | 77.17 | 76.77 | Off flood-path (heuristic) |
| Vadipatti | 25 | 129.8 | 26,830 | 10.0848 | 77.9611 | 10.28 | 9.88 | 78.16 | 77.76 | Off flood-path (heuristic) |
| Muthutala | 13 | 130.1 | 24,861 | 10.8354 | 76.1596 | 11.04 | 10.64 | 76.36 | 75.96 | Off flood-path (heuristic) |
| Ālankōd | 13 | 130.1 | 33,918 | 10.7460 | 76.0348 | 10.95 | 10.55 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Kadakkavoor | 13 | 130.2 | 25,362 | 8.6792 | 76.7671 | 8.88 | 8.48 | 76.97 | 76.57 | Off flood-path (heuristic) |
| Singānallūr | 25 | 130.3 | 31,239 | 10.9990 | 77.0324 | 11.2 | 10.8 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Virudunagar | 25 | 130.3 | 73,273 | 9.5851 | 77.9579 | 9.79 | 9.39 | 78.16 | 77.76 | Off flood-path (heuristic) |
| Vadavalli | 25 | 131.1 | 39,873 | 11.0247 | 76.8973 | 11.22 | 10.82 | 77.1 | 76.7 | Off flood-path (heuristic) |
| Kannampālaiyam | 25 | 131.5 | 15,868 | 10.9954 | 77.0990 | 11.2 | 10.8 | 77.3 | 76.9 | Off flood-path (heuristic) |
| Kizhuvalam-Koonthalloor | 13 | 132.0 | 30,770 | 8.6625 | 76.8097 | 8.86 | 8.46 | 77.01 | 76.61 | Off flood-path (heuristic) |
| Chinnalapatti | 25 | 132.1 | 26,285 | 10.2848 | 77.9233 | 10.48 | 10.08 | 78.12 | 77.72 | Off flood-path (heuristic) |
| Mannārakkāt | 13 | 132.2 | 50,921 | 10.9922 | 76.4642 | 11.19 | 10.79 | 76.66 | 76.26 | Off flood-path (heuristic) |
| Kulattuppālaiyam | 25 | 132.8 | 17,819 | 10.7613 | 77.5842 | 10.96 | 10.56 | 77.78 | 77.38 | Off flood-path (heuristic) |
| Idaiyarpālaiyam | 25 | 132.9 | 83,908 | 11.0394 | 76.9237 | 11.24 | 10.84 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Irugūr | 25 | 133.0 | 25,691 | 11.0178 | 77.0628 | 11.22 | 10.82 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Ālangulam | 25 | 133.8 | 28,558 | 8.8640 | 77.4994 | 9.06 | 8.66 | 77.7 | 77.3 | Off flood-path (heuristic) |
| Azhoor | 13 | 134.1 | 27,390 | 8.6441 | 76.7990 | 8.84 | 8.44 | 77.0 | 76.6 | Off flood-path (heuristic) |
| Māranchēri | 13 | 134.3 | 35,011 | 10.7405 | 75.9710 | 10.94 | 10.54 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Sattur | 25 | 135.0 | 31,856 | 9.3559 | 77.9246 | 9.56 | 9.16 | 78.12 | 77.72 | Off flood-path (heuristic) |
| Edappāl | 13 | 135.2 | 32,550 | 10.7834 | 76.0079 | 10.98 | 10.58 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Sulur | 25 | 135.3 | 27,909 | 11.0243 | 77.1256 | 11.22 | 10.82 | 77.33 | 76.93 | Off flood-path (heuristic) |
| Vellūr | 13 | 136.1 | 22,816 | 8.6262 | 76.8305 | 8.83 | 8.43 | 77.03 | 76.63 | Off flood-path (heuristic) |
| Chinnavādampatti | 25 | 136.2 | 20,122 | 11.0615 | 76.9838 | 11.26 | 10.86 | 77.18 | 76.78 | Off flood-path (heuristic) |
| Irimbiliyam | 13 | 136.6 | 30,635 | 10.8624 | 76.0922 | 11.06 | 10.66 | 76.29 | 75.89 | Off flood-path (heuristic) |
| Vellakkinar | 25 | 137.1 | 15,998 | 11.0736 | 76.9566 | 11.27 | 10.87 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Pudukkottai | 25 | 137.6 | 15,769 | 9.9373 | 78.0533 | 10.14 | 9.74 | 78.25 | 77.85 | Off flood-path (heuristic) |
| Palladam | 25 | 137.6 | 42,225 | 10.9917 | 77.2863 | 11.19 | 10.79 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Inam Maniyachi | 25 | 137.8 | 18,258 | 9.1706 | 77.8512 | 9.37 | 8.97 | 78.05 | 77.65 | Off flood-path (heuristic) |
| Tudiyalūr | 25 | 137.9 | 33,924 | 11.0816 | 76.9446 | 11.28 | 10.88 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Vilankurichi | 25 | 137.9 | 24,235 | 11.0715 | 77.0173 | 11.27 | 10.87 | 77.22 | 76.82 | Off flood-path (heuristic) |
| Srvanampatti | 25 | 138.2 | 32,920 | 11.0764 | 77.0045 | 11.28 | 10.88 | 77.2 | 76.8 | Off flood-path (heuristic) |
| Kāladi | 13 | 138.4 | 25,872 | 10.8194 | 76.0064 | 11.02 | 10.62 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Iroopara | 13 | 138.7 | 23,113 | 8.6075 | 76.9149 | 8.81 | 8.41 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Kuttippuram | 13 | 138.8 | 25,750 | 10.8425 | 76.0308 | 11.04 | 10.64 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Kālappatti | 25 | 139.1 | 39,586 | 11.0794 | 77.0371 | 11.28 | 10.88 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Vettanād | 13 | 139.2 | 27,140 | 8.6059 | 76.9424 | 8.81 | 8.41 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Paravai | 25 | 139.3 | 20,042 | 9.9645 | 78.0667 | 10.16 | 9.76 | 78.27 | 77.87 | Off flood-path (heuristic) |
| Kovilpatti | 25 | 139.5 | 95,057 | 9.1717 | 77.8699 | 9.37 | 8.97 | 78.07 | 77.67 | Off flood-path (heuristic) |
| Tirupparangunram | 25 | 139.5 | 50,004 | 9.8815 | 78.0731 | 10.08 | 9.68 | 78.27 | 77.87 | Off flood-path (heuristic) |
| Ponnāni | 13 | 139.8 | 105,512 | 10.7669 | 75.9252 | 10.97 | 10.57 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Adiyanuthu | 25 | 139.9 | 17,851 | 10.3308 | 77.9812 | 10.53 | 10.13 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Kāttipparutti | 13 | 140.1 | 40,318 | 10.8738 | 76.0535 | 11.07 | 10.67 | 76.25 | 75.85 | Off flood-path (heuristic) |
| Perintalmanna | 13 | 140.2 | 49,723 | 10.9772 | 76.2254 | 11.18 | 10.78 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Nedumangād | 13 | 140.4 | 60,161 | 8.6027 | 77.0014 | 8.8 | 8.4 | 77.2 | 76.8 | Off flood-path (heuristic) |
| Rakkiyapālaiyam | 25 | 140.5 | 18,749 | 11.1061 | 76.9425 | 11.31 | 10.91 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Dindigul | 25 | 141.5 | 292,512 | 10.3690 | 77.9804 | 10.57 | 10.17 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Uliyazhathura | 13 | 141.7 | 28,230 | 8.5816 | 76.9224 | 8.78 | 8.38 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Narasimhanaickenpalayam | 25 | 141.7 | 17,858 | 11.1173 | 76.9363 | 11.32 | 10.92 | 77.14 | 76.74 | Off flood-path (heuristic) |
| Vikramasingapuram | 25 | 141.9 | 47,241 | 8.7148 | 77.3903 | 8.91 | 8.51 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Agaram | 25 | 142.0 | 15,610 | 10.4433 | 77.9485 | 10.64 | 10.24 | 78.15 | 77.75 | Off flood-path (heuristic) |
| Vilāngudi | 25 | 142.1 | 30,884 | 9.9458 | 78.0935 | 10.15 | 9.75 | 78.29 | 77.89 | Off flood-path (heuristic) |
| Chettināyakkanpatti | 25 | 142.2 | 17,701 | 10.3940 | 77.9754 | 10.59 | 10.19 | 78.18 | 77.78 | Off flood-path (heuristic) |
| Tādikombu | 25 | 142.3 | 18,838 | 10.4390 | 77.9546 | 10.64 | 10.24 | 78.15 | 77.75 | Off flood-path (heuristic) |
| Sāmalāpuram | 25 | 142.7 | 20,691 | 11.0724 | 77.1980 | 11.27 | 10.87 | 77.4 | 77.0 | Off flood-path (heuristic) |
| Balakrishnapuram | 25 | 143.3 | 25,627 | 10.3591 | 78.0026 | 10.56 | 10.16 | 78.2 | 77.8 | Off flood-path (heuristic) |
| Kariapatti | 25 | 143.8 | 18,191 | 9.6751 | 78.0999 | 9.88 | 9.48 | 78.3 | 77.9 | Off flood-path (heuristic) |
| Avaniyāpuram | 25 | 143.8 | 89,635 | 9.8818 | 78.1125 | 10.08 | 9.68 | 78.31 | 77.91 | Off flood-path (heuristic) |
| Naduvattam | 13 | 144.0 | 21,273 | 10.8799 | 76.0020 | 11.08 | 10.68 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Kidarakulam | 13 | 144.2 | 29,624 | 8.5669 | 76.9913 | 8.77 | 8.37 | 77.19 | 76.79 | Off flood-path (heuristic) |
| Ānaiyūr | 25 | 144.2 | 63,917 | 9.9615 | 78.1118 | 10.16 | 9.76 | 78.31 | 77.91 | Off flood-path (heuristic) |
| Triprangod | 13 | 144.4 | 41,167 | 10.8422 | 75.9486 | 11.04 | 10.64 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Thirunavaya | 13 | 144.6 | 24,790 | 10.8746 | 75.9855 | 11.07 | 10.67 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Madurai | 25 | 144.8 | 1,465,625 | 9.9190 | 78.1195 | 10.12 | 9.72 | 78.32 | 77.92 | Off flood-path (heuristic) |
| Mūlanūr | 25 | 144.8 | 15,223 | 10.7943 | 77.7115 | 10.99 | 10.59 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Kāraippudūr | 25 | 145.1 | 28,602 | 11.0567 | 77.3061 | 11.26 | 10.86 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Sreekaryam | 13 | 145.3 | 23,528 | 8.5488 | 76.9172 | 8.75 | 8.35 | 77.12 | 76.72 | Off flood-path (heuristic) |
| Sīlappādi | 25 | 145.4 | 17,824 | 10.3940 | 78.0078 | 10.59 | 10.19 | 78.21 | 77.81 | Off flood-path (heuristic) |
| Kudappanakkunnu | 13 | 145.5 | 41,583 | 8.5514 | 76.9608 | 8.75 | 8.35 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Ambasamudram | 25 | 145.5 | 35,645 | 8.7107 | 77.4519 | 8.91 | 8.51 | 77.65 | 77.25 | Off flood-path (heuristic) |
| Periyanayakkanpalaiyam | 25 | 145.8 | 25,930 | 11.1525 | 76.9516 | 11.35 | 10.95 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Karumattampatti | 25 | 146.1 | 35,062 | 11.1093 | 77.1820 | 11.31 | 10.91 | 77.38 | 76.98 | Off flood-path (heuristic) |
| Pālaiyampatti | 25 | 146.5 | 18,576 | 9.5392 | 78.0984 | 9.74 | 9.34 | 78.3 | 77.9 | Off flood-path (heuristic) |
| Tiruppālai | 25 | 146.7 | 19,305 | 9.9779 | 78.1329 | 10.18 | 9.78 | 78.33 | 77.93 | Off flood-path (heuristic) |
| Nāyanakulam | 25 | 147.0 | 23,284 | 9.9611 | 78.1372 | 10.16 | 9.76 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Aruppukkottai | 25 | 147.0 | 87,722 | 9.5096 | 78.0959 | 9.71 | 9.31 | 78.3 | 77.9 | Off flood-path (heuristic) |
| Anuppānadi | 25 | 147.3 | 26,158 | 9.9040 | 78.1433 | 10.1 | 9.7 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Kannānendal | 25 | 147.5 | 31,095 | 9.9649 | 78.1416 | 10.16 | 9.76 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Vīrapāndi | 25 | 147.7 | 50,301 | 11.0625 | 77.3508 | 11.26 | 10.86 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Melmadai | 25 | 148.2 | 43,797 | 9.9264 | 78.1503 | 10.13 | 9.73 | 78.35 | 77.95 | Off flood-path (heuristic) |
| Mangalam | 25 | 148.3 | 17,699 | 11.1005 | 77.2712 | 11.3 | 10.9 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Murugampālaiyam | 25 | 148.3 | 26,349 | 11.0806 | 77.3238 | 11.28 | 10.88 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Kallidaikurichi | 25 | 148.6 | 26,398 | 8.6859 | 77.4659 | 8.89 | 8.49 | 77.67 | 77.27 | Off flood-path (heuristic) |
| Vattiyūrkāvu | 13 | 148.8 | 47,187 | 8.5247 | 76.9889 | 8.72 | 8.32 | 77.19 | 76.79 | Off flood-path (heuristic) |
| Andipalayam | 25 | 149.1 | 25,539 | 11.0925 | 77.3123 | 11.29 | 10.89 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Vandiyūr | 25 | 149.2 | 28,646 | 9.9092 | 78.1609 | 10.11 | 9.71 | 78.36 | 77.96 | Off flood-path (heuristic) |
| Talakkād | 13 | 149.2 | 35,820 | 10.8846 | 75.9309 | 11.08 | 10.68 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Vilappil | 13 | 150.0 | 36,212 | 8.5222 | 77.0400 | 8.72 | 8.32 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Vadakku Viravanallur | 25 | 150.5 | 19,689 | 8.6979 | 77.5192 | 8.9 | 8.5 | 77.72 | 77.32 | Off flood-path (heuristic) |
| Peringottupulam | 13 | 151.7 | 36,602 | 11.0268 | 76.0987 | 11.23 | 10.83 | 76.3 | 75.9 | Off flood-path (heuristic) |
| Muttanampālaiyam | 25 | 152.0 | 26,014 | 11.0845 | 77.3969 | 11.28 | 10.88 | 77.6 | 77.2 | Off flood-path (heuristic) |
| Kodur | 13 | 152.2 | 45,459 | 11.0153 | 76.0701 | 11.22 | 10.82 | 76.27 | 75.87 | Off flood-path (heuristic) |
| Tirur | 13 | 152.4 | 56,058 | 10.9137 | 75.9212 | 11.11 | 10.71 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Kulathummal | 13 | 152.5 | 40,448 | 8.5073 | 77.0815 | 8.71 | 8.31 | 77.28 | 76.88 | Off flood-path (heuristic) |
| Ottakkadai | 25 | 152.6 | 15,152 | 9.9580 | 78.1886 | 10.16 | 9.76 | 78.39 | 77.99 | Off flood-path (heuristic) |
| Thiruvananthapuram | 13 | 152.6 | 788,271 | 8.4855 | 76.9492 | 8.69 | 8.29 | 77.15 | 76.75 | Off flood-path (heuristic) |
| Pallappatti | 25 | 152.7 | 30,624 | 10.7206 | 77.8795 | 10.92 | 10.52 | 78.08 | 77.68 | Off flood-path (heuristic) |
| Cheriyamundam | 13 | 153.0 | 31,212 | 10.9476 | 75.9564 | 11.15 | 10.75 | 76.16 | 75.76 | Off flood-path (heuristic) |
| Kangayam | 25 | 153.1 | 32,147 | 11.0060 | 77.5609 | 11.21 | 10.81 | 77.76 | 77.36 | Off flood-path (heuristic) |
| Tiruppur | 25 | 153.2 | 963,173 | 11.1154 | 77.3546 | 11.32 | 10.92 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Nallūr | 25 | 153.3 | 70,115 | 11.1003 | 77.3914 | 11.3 | 10.9 | 77.59 | 77.19 | Off flood-path (heuristic) |
| Malayinkeezhu | 13 | 153.4 | 37,350 | 8.4902 | 77.0374 | 8.69 | 8.29 | 77.24 | 76.84 | Off flood-path (heuristic) |
| Velampālaiyam | 25 | 153.7 | 87,427 | 11.1376 | 77.3106 | 11.34 | 10.94 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Malappuram | 13 | 154.1 | 101,386 | 11.0420 | 76.0815 | 11.24 | 10.84 | 76.28 | 75.88 | Off flood-path (heuristic) |
| Ponmundam | 13 | 154.2 | 25,855 | 10.9536 | 75.9468 | 11.15 | 10.75 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Vilavoorkkal | 13 | 154.2 | 31,761 | 8.4809 | 77.0220 | 8.68 | 8.28 | 77.22 | 76.82 | Off flood-path (heuristic) |
| Mannarai | 25 | 154.2 | 17,261 | 11.1172 | 77.3726 | 11.32 | 10.92 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Kōttakkal | 13 | 154.6 | 44,382 | 11.0009 | 76.0062 | 11.2 | 10.8 | 76.21 | 75.81 | Off flood-path (heuristic) |
| Cheranmahadevi | 25 | 155.5 | 18,327 | 8.6755 | 77.5696 | 8.88 | 8.48 | 77.77 | 77.37 | Off flood-path (heuristic) |
| Kāramadai | 25 | 155.6 | 35,166 | 11.2406 | 76.9601 | 11.44 | 11.04 | 77.16 | 76.76 | Off flood-path (heuristic) |
| Othukkungal | 13 | 155.8 | 39,139 | 11.0283 | 76.0290 | 11.23 | 10.83 | 76.23 | 75.83 | Off flood-path (heuristic) |
| Parappur | 13 | 156.4 | 36,270 | 11.0121 | 75.9947 | 11.21 | 10.81 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Tirumuruganpūndi | 25 | 156.4 | 31,528 | 11.1649 | 77.3084 | 11.36 | 10.96 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Tānālūr | 13 | 156.5 | 47,976 | 10.9515 | 75.9096 | 11.15 | 10.75 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Vadamadurai | 25 | 156.5 | 18,015 | 10.4408 | 78.0978 | 10.64 | 10.24 | 78.3 | 77.9 | Off flood-path (heuristic) |
| Boyampālaiyam | 25 | 156.6 | 40,503 | 11.1487 | 77.3537 | 11.35 | 10.95 | 77.55 | 77.15 | Off flood-path (heuristic) |
| Pattamadai | 25 | 156.7 | 16,625 | 8.6726 | 77.5845 | 8.87 | 8.47 | 77.78 | 77.38 | Off flood-path (heuristic) |
| V.S.K.Valasai (Dindigul-Dist.) | 25 | 156.7 | 17,865 | 10.3155 | 78.1514 | 10.52 | 10.12 | 78.35 | 77.95 | Off flood-path (heuristic) |
| Vellakkovil | 25 | 157.5 | 40,359 | 10.9463 | 77.7124 | 11.15 | 10.75 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Pallichal | 13 | 157.7 | 53,861 | 8.4498 | 77.0257 | 8.65 | 8.25 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Chettipālaiyam | 25 | 157.7 | 37,620 | 11.1667 | 77.3350 | 11.37 | 10.97 | 77.54 | 77.14 | Off flood-path (heuristic) |
| Annur | 25 | 157.7 | 20,079 | 11.2362 | 77.1051 | 11.44 | 11.04 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Avinashi | 25 | 157.9 | 28,868 | 11.1930 | 77.2686 | 11.39 | 10.99 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Tirunelveli | 25 | 158.1 | 1,435,844 | 8.7274 | 77.6838 | 8.93 | 8.53 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Tennala | 13 | 158.5 | 56,546 | 10.9934 | 75.9350 | 11.19 | 10.79 | 76.14 | 75.74 | Off flood-path (heuristic) |
| Nerupperichchal | 25 | 158.7 | 53,579 | 11.1610 | 77.3740 | 11.36 | 10.96 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Nāranammālpuram | 25 | 159.2 | 17,094 | 8.7599 | 77.7399 | 8.96 | 8.56 | 77.94 | 77.54 | Off flood-path (heuristic) |
| Kalliyoor | 13 | 159.5 | 40,816 | 8.4313 | 77.0129 | 8.63 | 8.23 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Manjeri | 13 | 159.6 | 97,102 | 11.1202 | 76.1200 | 11.32 | 10.92 | 76.32 | 75.92 | Off flood-path (heuristic) |
| Palangarai | 25 | 159.7 | 17,248 | 11.1978 | 77.3058 | 11.4 | 11.0 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Tiruppuvanam | 25 | 159.8 | 24,554 | 9.8256 | 78.2579 | 10.03 | 9.63 | 78.46 | 78.06 | Off flood-path (heuristic) |
| Nannambra | 13 | 160.1 | 40,543 | 10.9921 | 75.9080 | 11.19 | 10.79 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Urakam | 13 | 160.4 | 29,157 | 11.0512 | 75.9883 | 11.25 | 10.85 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Vengara | 13 | 161.0 | 48,600 | 11.0508 | 75.9781 | 11.25 | 10.85 | 76.18 | 75.78 | Off flood-path (heuristic) |
| Mettupalayam | 25 | 161.9 | 69,213 | 11.2997 | 76.9348 | 11.5 | 11.1 | 77.13 | 76.73 | Off flood-path (heuristic) |
| Natham | 25 | 162.1 | 23,660 | 10.2278 | 78.2297 | 10.43 | 10.03 | 78.43 | 78.03 | Off flood-path (heuristic) |
| Kannamangalam | 13 | 162.8 | 41,260 | 11.0754 | 75.9852 | 11.28 | 10.88 | 76.19 | 75.79 | Off flood-path (heuristic) |
| Venganoor | 13 | 163.2 | 35,963 | 8.3964 | 77.0033 | 8.6 | 8.2 | 77.2 | 76.8 | Off flood-path (heuristic) |
| Tirūrangādi | 13 | 163.7 | 56,632 | 11.0432 | 75.9234 | 11.24 | 10.84 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Ayyalur | 25 | 164.2 | 17,100 | 10.4818 | 78.1564 | 10.68 | 10.28 | 78.36 | 77.96 | Off flood-path (heuristic) |
| Neyyāttinkara | 13 | 164.4 | 88,104 | 8.3985 | 77.0859 | 8.6 | 8.2 | 77.29 | 76.89 | Off flood-path (heuristic) |
| Athiyannur | 13 | 164.6 | 40,712 | 8.3930 | 77.0637 | 8.59 | 8.19 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Pariyāpuram | 13 | 165.1 | 22,766 | 11.0167 | 75.8667 | 11.22 | 10.82 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Abdu Rahiman Nagar | 13 | 165.1 | 41,993 | 11.0698 | 75.9388 | 11.27 | 10.87 | 76.14 | 75.74 | Off flood-path (heuristic) |
| Sirumugai | 25 | 165.1 | 20,066 | 11.3214 | 77.0052 | 11.52 | 11.12 | 77.21 | 76.81 | Off flood-path (heuristic) |
| Moonniyur | 13 | 166.5 | 55,535 | 11.0597 | 75.9031 | 11.26 | 10.86 | 76.1 | 75.7 | Off flood-path (heuristic) |
| Coonoor | 25 | 166.8 | 45,494 | 11.3498 | 76.7938 | 11.55 | 11.15 | 76.99 | 76.59 | Off flood-path (heuristic) |
| Kanjiramkulam | 13 | 168.0 | 19,902 | 8.3598 | 77.0525 | 8.56 | 8.16 | 77.25 | 76.85 | Off flood-path (heuristic) |
| Kadayal | 25 | 168.3 | 21,665 | 8.4083 | 77.2657 | 8.61 | 8.21 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Wellington | 25 | 168.5 | 20,254 | 11.3655 | 76.7844 | 11.57 | 11.17 | 76.98 | 76.58 | Off flood-path (heuristic) |
| Neduva | 13 | 168.6 | 35,996 | 11.0567 | 75.8668 | 11.26 | 10.86 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Peruvallur | 13 | 168.7 | 34,941 | 11.1048 | 75.9327 | 11.3 | 10.9 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Kērkandi | 25 | 168.9 | 23,229 | 11.3678 | 76.7458 | 11.57 | 11.17 | 76.95 | 76.55 | Off flood-path (heuristic) |
| Edaicode | 25 | 168.9 | 25,378 | 8.3825 | 77.1983 | 8.58 | 8.18 | 77.4 | 77.0 | Off flood-path (heuristic) |
| Triparappu | 25 | 169.7 | 22,401 | 8.3948 | 77.2659 | 8.59 | 8.19 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Vilattikulam | 25 | 169.8 | 15,277 | 9.1323 | 78.1663 | 9.33 | 8.93 | 78.37 | 77.97 | Off flood-path (heuristic) |
| Melur | 25 | 169.8 | 40,017 | 10.0324 | 78.3393 | 10.23 | 9.83 | 78.54 | 78.14 | Off flood-path (heuristic) |
| Kalakkādu | 25 | 169.8 | 30,921 | 8.5138 | 77.5494 | 8.71 | 8.31 | 77.75 | 77.35 | Off flood-path (heuristic) |
| Nilambūr | 13 | 170.2 | 46,366 | 11.2727 | 76.2257 | 11.47 | 11.07 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Kondotty | 13 | 170.2 | 28,794 | 11.1423 | 75.9657 | 11.34 | 10.94 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Chennimalai | 25 | 170.5 | 16,268 | 11.1638 | 77.6039 | 11.36 | 10.96 | 77.8 | 77.4 | Off flood-path (heuristic) |
| Palugal | 25 | 171.7 | 18,276 | 8.3536 | 77.1859 | 8.55 | 8.15 | 77.39 | 76.99 | Off flood-path (heuristic) |
| Punjai Puliyampatti | 25 | 171.7 | 18,967 | 11.3516 | 77.1667 | 11.55 | 11.15 | 77.37 | 76.97 | Off flood-path (heuristic) |
| Arumanai | 25 | 171.9 | 16,283 | 8.3670 | 77.2433 | 8.57 | 8.17 | 77.44 | 77.04 | Off flood-path (heuristic) |
| Ariyallur | 13 | 172.1 | 22,558 | 11.0833 | 75.8490 | 11.28 | 10.88 | 76.05 | 75.65 | Off flood-path (heuristic) |
| Pallikal | 13 | 172.1 | 46,962 | 11.1372 | 75.9257 | 11.34 | 10.94 | 76.13 | 75.73 | Off flood-path (heuristic) |
| Pārassāla | 25 | 172.5 | 34,096 | 8.3387 | 77.1542 | 8.54 | 8.14 | 77.35 | 76.95 | Off flood-path (heuristic) |
| Kulasegaram | 25 | 174.1 | 17,267 | 8.3632 | 77.2978 | 8.56 | 8.16 | 77.5 | 77.1 | Off flood-path (heuristic) |
| Ooty | 25 | 174.2 | 233,426 | 11.4134 | 76.6952 | 11.61 | 11.21 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Thenhippalam | 13 | 174.4 | 32,045 | 11.1323 | 75.8822 | 11.33 | 10.93 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Pacode | 25 | 174.5 | 24,050 | 8.3352 | 77.2136 | 8.54 | 8.14 | 77.41 | 77.01 | Off flood-path (heuristic) |
| Kotagiri | 25 | 174.8 | 28,848 | 11.4207 | 76.8603 | 11.62 | 11.22 | 77.06 | 76.66 | Off flood-path (heuristic) |
| Pālaiyam | 25 | 175.6 | 15,336 | 10.7256 | 78.1354 | 10.93 | 10.53 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Kuzhithurai | 25 | 175.7 | 21,307 | 8.3179 | 77.1919 | 8.52 | 8.12 | 77.39 | 76.99 | Off flood-path (heuristic) |
| Methukummal | 25 | 175.8 | 19,417 | 8.3075 | 77.1521 | 8.51 | 8.11 | 77.35 | 76.95 | Off flood-path (heuristic) |
| Ponmana | 25 | 176.0 | 15,554 | 8.3552 | 77.3283 | 8.56 | 8.16 | 77.53 | 77.13 | Off flood-path (heuristic) |
| Cherukavu | 13 | 176.5 | 30,126 | 11.1731 | 75.9086 | 11.37 | 10.97 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Tiruvattār | 25 | 176.6 | 18,985 | 8.3307 | 77.2673 | 8.53 | 8.13 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Chelambra | 13 | 176.7 | 34,149 | 11.1509 | 75.8719 | 11.35 | 10.95 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Kollancode | 25 | 176.8 | 38,385 | 8.2890 | 77.1080 | 8.49 | 8.09 | 77.31 | 76.91 | Off flood-path (heuristic) |
| Nambiyūr | 25 | 177.1 | 16,379 | 11.3581 | 77.3212 | 11.56 | 11.16 | 77.52 | 77.12 | Off flood-path (heuristic) |
| Kizhuparamba | 13 | 177.5 | 22,062 | 11.2526 | 76.0244 | 11.45 | 11.05 | 76.22 | 75.82 | Off flood-path (heuristic) |
| Marthandam | 25 | 177.6 | 20,938 | 8.3081 | 77.2214 | 8.51 | 8.11 | 77.42 | 77.02 | Off flood-path (heuristic) |
| Sivagiri | 25 | 177.8 | 16,779 | 11.1203 | 77.7881 | 11.32 | 10.92 | 77.99 | 77.59 | Off flood-path (heuristic) |
| Nalloor | 25 | 177.8 | 17,989 | 8.3064 | 77.2240 | 8.51 | 8.11 | 77.42 | 77.02 | Off flood-path (heuristic) |
| Unnamalaikadai | 25 | 179.1 | 23,656 | 8.2996 | 77.2406 | 8.5 | 8.1 | 77.44 | 77.04 | Off flood-path (heuristic) |
| Ramanattukara | 13 | 179.4 | 35,937 | 11.1780 | 75.8689 | 11.38 | 10.98 | 76.07 | 75.67 | Off flood-path (heuristic) |
| Eruvādi | 25 | 179.6 | 18,067 | 8.4439 | 77.6044 | 8.64 | 8.24 | 77.8 | 77.4 | Off flood-path (heuristic) |
| Ezhudesam | 25 | 180.2 | 24,657 | 8.2651 | 77.1421 | 8.47 | 8.07 | 77.34 | 76.94 | Off flood-path (heuristic) |
| Perundurai | 25 | 180.4 | 24,930 | 11.2756 | 77.5879 | 11.48 | 11.08 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Singampunari | 25 | 180.7 | 18,143 | 10.1862 | 78.4150 | 10.39 | 9.99 | 78.62 | 78.22 | Off flood-path (heuristic) |
| Vazhayur | 13 | 181.1 | 36,909 | 11.2173 | 75.8999 | 11.42 | 11.02 | 76.1 | 75.7 | Off flood-path (heuristic) |
| Verukulambu | 25 | 181.2 | 19,730 | 8.2953 | 77.2939 | 8.5 | 8.1 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Ferokh | 13 | 181.2 | 32,122 | 11.1799 | 75.8414 | 11.38 | 10.98 | 76.04 | 75.64 | Off flood-path (heuristic) |
| Painkulam | 25 | 181.5 | 23,630 | 8.2602 | 77.1740 | 8.46 | 8.06 | 77.37 | 76.97 | Off flood-path (heuristic) |
| Valvachatottam | 25 | 181.6 | 16,965 | 8.2803 | 77.2561 | 8.48 | 8.08 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Kāttatturai | 25 | 181.7 | 17,271 | 8.2849 | 77.2755 | 8.48 | 8.08 | 77.48 | 77.08 | Off flood-path (heuristic) |
| Karuvanthuruthy | 13 | 181.7 | 21,952 | 11.1721 | 75.8226 | 11.37 | 10.97 | 76.02 | 75.62 | Off flood-path (heuristic) |
| Sankaraperi | 25 | 182.1 | 19,844 | 8.8387 | 78.1051 | 9.04 | 8.64 | 78.31 | 77.91 | Off flood-path (heuristic) |
| Milavittan | 25 | 182.2 | 45,863 | 8.8193 | 78.0909 | 9.02 | 8.62 | 78.29 | 77.89 | Off flood-path (heuristic) |
| Srivaikuntam | 25 | 182.6 | 15,847 | 8.6293 | 77.9128 | 8.83 | 8.43 | 78.11 | 77.71 | Off flood-path (heuristic) |
| Beypore | 13 | 182.8 | 70,751 | 11.1715 | 75.8061 | 11.37 | 10.97 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Karumāndi Chellipālaiyam | 25 | 182.9 | 23,868 | 11.3019 | 77.5860 | 11.5 | 11.1 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Cheruvannur | 13 | 183.0 | 61,614 | 11.1903 | 75.8283 | 11.39 | 10.99 | 76.03 | 75.63 | Off flood-path (heuristic) |
| Kothanallur | 25 | 183.4 | 17,662 | 8.2791 | 77.3096 | 8.48 | 8.08 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Mulakumūd | 25 | 183.8 | 19,538 | 8.2681 | 77.2860 | 8.47 | 8.07 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Manamadurai | 25 | 184.2 | 32,257 | 9.6732 | 78.4710 | 9.87 | 9.47 | 78.67 | 78.27 | Off flood-path (heuristic) |
| Sivaganga | 25 | 184.4 | 42,785 | 9.8470 | 78.4836 | 10.05 | 9.65 | 78.68 | 78.28 | Off flood-path (heuristic) |
| Mavoor | 13 | 184.8 | 29,781 | 11.2667 | 75.9167 | 11.47 | 11.07 | 76.12 | 75.72 | Off flood-path (heuristic) |
| Mappilaiurani | 25 | 184.9 | 40,035 | 8.8359 | 78.1352 | 9.04 | 8.64 | 78.34 | 77.94 | Off flood-path (heuristic) |
| Perumanna | 13 | 185.0 | 35,460 | 11.2529 | 75.8906 | 11.45 | 11.05 | 76.09 | 75.69 | Off flood-path (heuristic) |
| Keezhkulam | 25 | 185.0 | 17,327 | 8.2307 | 77.1863 | 8.43 | 8.03 | 77.39 | 76.99 | Off flood-path (heuristic) |
| Chinna Āndānkovil | 25 | 185.0 | 19,779 | 10.9511 | 78.0681 | 11.15 | 10.75 | 78.27 | 77.87 | Off flood-path (heuristic) |
| Pantheeramkavu | 13 | 185.2 | 24,537 | 11.2305 | 75.8518 | 11.43 | 11.03 | 76.05 | 75.65 | Off flood-path (heuristic) |
| Olavanna | 13 | 185.3 | 43,895 | 11.2184 | 75.8325 | 11.42 | 11.02 | 76.03 | 75.63 | Off flood-path (heuristic) |
| Tāndoni | 25 | 185.3 | 53,854 | 10.9261 | 78.0941 | 11.13 | 10.73 | 78.29 | 77.89 | Off flood-path (heuristic) |
| Kappiyara | 25 | 185.4 | 15,998 | 8.2466 | 77.2617 | 8.45 | 8.05 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Karingal | 25 | 185.9 | 16,691 | 8.2363 | 77.2426 | 8.44 | 8.04 | 77.44 | 77.04 | Off flood-path (heuristic) |
| Vadakku Valliyūr | 25 | 185.9 | 29,417 | 8.3829 | 77.6122 | 8.58 | 8.18 | 77.81 | 77.41 | Off flood-path (heuristic) |
| Kuttikkāttūr | 13 | 186.5 | 25,929 | 11.2626 | 75.8796 | 11.46 | 11.06 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Karur | 25 | 186.5 | 234,191 | 10.9577 | 78.0810 | 11.16 | 10.76 | 78.28 | 77.88 | Off flood-path (heuristic) |
| Kollivāyal | 25 | 186.7 | 21,943 | 11.4998 | 76.4815 | 11.7 | 11.3 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Tiruvankod | 25 | 186.7 | 18,723 | 8.2452 | 77.3010 | 8.45 | 8.05 | 77.5 | 77.1 | Off flood-path (heuristic) |
| Pūvātūparamba | 13 | 186.7 | 27,598 | 11.2710 | 75.8894 | 11.47 | 11.07 | 76.09 | 75.69 | Off flood-path (heuristic) |
| Thazhecode | 13 | 186.9 | 25,116 | 11.3226 | 75.9758 | 11.52 | 11.12 | 76.18 | 75.78 | Off flood-path (heuristic) |
| Pūlakkōd | 13 | 187.0 | 29,872 | 11.3097 | 75.9500 | 11.51 | 11.11 | 76.15 | 75.75 | Off flood-path (heuristic) |
| Padmanābhapuram | 25 | 187.6 | 21,342 | 8.2446 | 77.3258 | 8.44 | 8.04 | 77.53 | 77.13 | Off flood-path (heuristic) |
| Palappallam | 25 | 188.9 | 18,589 | 8.2095 | 77.2476 | 8.41 | 8.01 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Gudalur | 25 | 189.0 | 49,535 | 11.5207 | 76.4814 | 11.72 | 11.32 | 76.68 | 76.28 | Off flood-path (heuristic) |
| Tindal | 25 | 189.0 | 15,440 | 11.3169 | 77.6742 | 11.52 | 11.12 | 77.87 | 77.47 | Off flood-path (heuristic) |
| Attimarappatti | 25 | 189.1 | 22,218 | 8.7399 | 78.1053 | 8.94 | 8.54 | 78.31 | 77.91 | Off flood-path (heuristic) |
| Thoothukudi | 25 | 189.5 | 410,760 | 8.7674 | 78.1342 | 8.97 | 8.57 | 78.33 | 77.93 | Off flood-path (heuristic) |
| Senapparetti | 25 | 189.6 | 22,447 | 10.9625 | 78.1132 | 11.16 | 10.76 | 78.31 | 77.91 | Off flood-path (heuristic) |
| Boothapandi | 25 | 189.9 | 15,931 | 8.2659 | 77.4461 | 8.47 | 8.07 | 77.65 | 77.25 | Off flood-path (heuristic) |
| Tondalam | 25 | 190.1 | 44,590 | 11.5014 | 76.3498 | 11.7 | 11.3 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Pānakkudi | 25 | 190.1 | 29,895 | 8.3220 | 77.5771 | 8.52 | 8.12 | 77.78 | 77.38 | Off flood-path (heuristic) |
| Sathyamangalam | 25 | 190.2 | 37,816 | 11.5053 | 77.2383 | 11.71 | 11.31 | 77.44 | 77.04 | Off flood-path (heuristic) |
| Kumārapālaiyam | 25 | 190.3 | 15,706 | 11.5021 | 77.2555 | 11.7 | 11.3 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Muttayyāpuram | 25 | 190.5 | 32,494 | 8.7498 | 78.1311 | 8.95 | 8.55 | 78.33 | 77.93 | Off flood-path (heuristic) |
| Kunnamangalam | 13 | 190.6 | 47,396 | 11.3046 | 75.8777 | 11.5 | 11.1 | 76.08 | 75.68 | Off flood-path (heuristic) |
| Pugalūr | 25 | 190.6 | 23,408 | 11.0740 | 78.0209 | 11.27 | 10.87 | 78.22 | 77.82 | Off flood-path (heuristic) |
| Pottanūr | 25 | 191.1 | 18,455 | 11.1098 | 77.9888 | 11.31 | 10.91 | 78.19 | 77.79 | Off flood-path (heuristic) |
| Kozhikode | 13 | 191.3 | 550,440 | 11.2480 | 75.7804 | 11.45 | 11.05 | 75.98 | 75.58 | Off flood-path (heuristic) |
| Kāsipālaiyam | 25 | 191.3 | 73,425 | 11.3198 | 77.7097 | 11.52 | 11.12 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Villukuri | 25 | 191.6 | 15,304 | 8.2226 | 77.3732 | 8.42 | 8.02 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Reethapuram | 25 | 191.6 | 21,177 | 8.1843 | 77.2481 | 8.38 | 7.98 | 77.45 | 77.05 | Off flood-path (heuristic) |
| Gobichettipalayam | 25 | 191.8 | 59,523 | 11.4550 | 77.4422 | 11.65 | 11.25 | 77.64 | 77.24 | Off flood-path (heuristic) |
| Velur | 25 | 191.9 | 25,012 | 11.1082 | 78.0011 | 11.31 | 10.91 | 78.2 | 77.8 | Off flood-path (heuristic) |
| Sūrampatti | 25 | 192.1 | 41,782 | 11.3273 | 77.7112 | 11.53 | 11.13 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Kallukuttam | 25 | 192.3 | 19,093 | 8.1887 | 77.2878 | 8.39 | 7.99 | 77.49 | 77.09 | Off flood-path (heuristic) |
| Devarshola | 25 | 192.4 | 24,954 | 11.5437 | 76.4404 | 11.74 | 11.34 | 76.64 | 76.24 | Off flood-path (heuristic) |
| Nallavila | 25 | 192.4 | 16,138 | 8.2055 | 77.3444 | 8.41 | 8.01 | 77.54 | 77.14 | Off flood-path (heuristic) |
| Colachel | 25 | 192.5 | 23,227 | 8.1794 | 77.2582 | 8.38 | 7.98 | 77.46 | 77.06 | Off flood-path (heuristic) |
| Nazareth | 25 | 192.6 | 16,584 | 8.5610 | 77.9721 | 8.76 | 8.36 | 78.17 | 77.77 | Off flood-path (heuristic) |
| Periya Semūr | 25 | 194.1 | 55,282 | 11.3609 | 77.6895 | 11.56 | 11.16 | 77.89 | 77.49 | Off flood-path (heuristic) |
| Ālūr | 25 | 194.4 | 15,063 | 8.1931 | 77.3643 | 8.39 | 7.99 | 77.56 | 77.16 | Off flood-path (heuristic) |
| Salangaippālaiyam | 25 | 194.4 | 15,609 | 11.4260 | 77.5707 | 11.63 | 11.23 | 77.77 | 77.37 | Off flood-path (heuristic) |
| Erode | 25 | 194.5 | 521,891 | 11.3428 | 77.7274 | 11.54 | 11.14 | 77.93 | 77.53 | Off flood-path (heuristic) |
| Vīrappanchathiram | 25 | 194.6 | 84,453 | 11.3531 | 77.7125 | 11.55 | 11.15 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Aramboli | 25 | 194.8 | 22,846 | 8.2496 | 77.5216 | 8.45 | 8.05 | 77.72 | 77.32 | Off flood-path (heuristic) |
| Paramathi Velur | 25 | 195.5 | 25,012 | 11.1916 | 77.9563 | 11.39 | 10.99 | 78.16 | 77.76 | Off flood-path (heuristic) |
| Brāhmana Periya Agrahāram | 25 | 195.8 | 24,798 | 11.3690 | 77.7063 | 11.57 | 11.17 | 77.91 | 77.51 | Off flood-path (heuristic) |
| Kuruvattūr | 13 | 196.0 | 34,241 | 11.3361 | 75.8351 | 11.54 | 11.14 | 76.04 | 75.64 | Off flood-path (heuristic) |
| Kakkodi | 13 | 196.5 | 42,866 | 11.3197 | 75.8015 | 11.52 | 11.12 | 76.0 | 75.6 | Off flood-path (heuristic) |
| Manapparai | 25 | 196.9 | 40,510 | 10.6077 | 78.4258 | 10.81 | 10.41 | 78.63 | 78.23 | Off flood-path (heuristic) |
| Āchāripallam Vāniyakudi | 25 | 197.1 | 16,822 | 8.1743 | 77.3849 | 8.37 | 7.97 | 77.58 | 77.18 | Off flood-path (heuristic) |
| Nāgercoil | 25 | 198.4 | 224,849 | 8.1790 | 77.4323 | 8.38 | 7.98 | 77.63 | 77.23 | Off flood-path (heuristic) |
| Pallipalayam | 25 | 198.6 | 40,140 | 11.3652 | 77.7623 | 11.57 | 11.17 | 77.96 | 77.56 | Off flood-path (heuristic) |
| Ālampālaiyam | 25 | 198.8 | 20,286 | 11.3635 | 77.7677 | 11.56 | 11.16 | 77.97 | 77.57 | Off flood-path (heuristic) |
| Paramagudi | 25 | 199.2 | 95,579 | 9.5463 | 78.5907 | 9.75 | 9.35 | 78.79 | 78.39 | Off flood-path (heuristic) |
| Sūryampālaiyam | 25 | 199.5 | 28,585 | 11.4045 | 77.7123 | 11.6 | 11.2 | 77.91 | 77.51 | Off flood-path (heuristic) |

## Indira Sagar Dam (Madhya Pradesh)
Dam coordinates: 22.27, 76.47

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Punāsa | 35 | 8.8 | 350,000 | 22.2351 | 76.3933 | 22.44 | 22.04 | 76.59 | 76.19 | Downstream (heuristic - verify) |
| Harsūd | 35 | 33.2 | 16,736 | 22.0995 | 76.7342 | 22.3 | 21.9 | 76.93 | 76.53 | Off flood-path (heuristic) |
| Chhanerā | 35 | 41.4 | 22,052 | 21.9610 | 76.6949 | 22.16 | 21.76 | 76.89 | 76.49 | Off flood-path (heuristic) |
| Khirkiya | 35 | 41.9 | 22,737 | 22.1673 | 76.8614 | 22.37 | 21.97 | 77.06 | 76.66 | Off flood-path (heuristic) |
| Sanāwad | 35 | 42.5 | 38,740 | 22.1739 | 76.0699 | 22.37 | 21.97 | 76.27 | 75.87 | Downstream (heuristic - verify) |
| Barwāh | 35 | 44.4 | 26,459 | 22.2539 | 76.0385 | 22.45 | 22.05 | 76.24 | 75.84 | Downstream (heuristic - verify) |
| Khandwa | 35 | 51.1 | 200,738 | 21.8243 | 76.3509 | 22.02 | 21.62 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Kannod | 35 | 52.4 | 17,744 | 22.6676 | 76.7429 | 22.87 | 22.47 | 76.94 | 76.54 | Off flood-path (heuristic) |
| Khātegaon | 35 | 58.2 | 25,413 | 22.5957 | 76.9133 | 22.8 | 22.4 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Hāt Piplia | 35 | 58.2 | 17,419 | 22.7695 | 76.2999 | 22.97 | 22.57 | 76.5 | 76.1 | Off flood-path (heuristic) |
| Harda | 35 | 64.9 | 74,268 | 22.3441 | 77.0954 | 22.54 | 22.14 | 77.3 | 76.9 | Off flood-path (heuristic) |
| Bhikangaon | 35 | 68.7 | 16,217 | 21.8676 | 75.9639 | 22.07 | 21.67 | 76.16 | 75.76 | Downstream (heuristic - verify) |
| Pālda | 35 | 74.7 | 18,697 | 22.6800 | 75.8939 | 22.88 | 22.48 | 76.09 | 75.69 | Downstream (heuristic - verify) |
| Timurni | 35 | 78.7 | 22,359 | 22.3712 | 77.2274 | 22.57 | 22.17 | 77.43 | 77.03 | Off flood-path (heuristic) |
| Rāvu | 35 | 78.8 | 36,055 | 22.6373 | 75.8147 | 22.84 | 22.44 | 76.01 | 75.61 | Downstream (heuristic - verify) |
| Sonkach | 35 | 79.0 | 16,545 | 22.9717 | 76.3467 | 23.17 | 22.77 | 76.55 | 76.15 | Off flood-path (heuristic) |
| Mhow | 35 | 79.2 | 81,702 | 22.5589 | 75.7654 | 22.76 | 22.36 | 75.97 | 75.57 | Downstream (heuristic - verify) |
| Indore | 35 | 82.2 | 1,994,397 | 22.7179 | 75.8333 | 22.92 | 22.52 | 76.03 | 75.63 | Downstream (heuristic - verify) |
| Bānk | 35 | 83.7 | 18,534 | 22.7030 | 75.8039 | 22.9 | 22.5 | 76.0 | 75.6 | Downstream (heuristic - verify) |
| Bāngarda Chhota | 35 | 85.5 | 64,213 | 22.7435 | 75.8145 | 22.94 | 22.54 | 76.01 | 75.61 | Downstream (heuristic - verify) |
| Ashta | 35 | 87.1 | 53,184 | 23.0175 | 76.7221 | 23.22 | 22.82 | 76.92 | 76.52 | Off flood-path (heuristic) |
| Pithampur | 35 | 87.7 | 126,200 | 22.6020 | 75.6965 | 22.8 | 22.4 | 75.9 | 75.5 | Downstream (heuristic - verify) |
| Bāngarda | 35 | 88.1 | 15,761 | 22.7592 | 75.7954 | 22.96 | 22.56 | 76.0 | 75.6 | Downstream (heuristic - verify) |
| Dewas | 35 | 88.3 | 289,550 | 22.9658 | 76.0553 | 23.17 | 22.77 | 76.26 | 75.86 | Off flood-path (heuristic) |
| Kasrāwad | 35 | 89.8 | 22,750 | 22.1274 | 75.6110 | 22.33 | 21.93 | 75.81 | 75.41 | Downstream (heuristic - verify) |
| Dhārni | 35 | 90.7 | 15,761 | 21.5533 | 76.8897 | 21.75 | 21.35 | 77.09 | 76.69 | Off flood-path (heuristic) |
| Nepānagar | 35 | 91.1 | 32,611 | 21.4538 | 76.3933 | 21.65 | 21.25 | 76.59 | 76.19 | Off flood-path (heuristic) |
| Maheshwar | 35 | 91.5 | 24,411 | 22.1759 | 75.5871 | 22.38 | 21.98 | 75.79 | 75.39 | Downstream (heuristic - verify) |
| Nasrullāhganj | 35 | 94.3 | 23,788 | 22.6837 | 77.2707 | 22.88 | 22.48 | 77.47 | 77.07 | Off flood-path (heuristic) |
| Betma | 35 | 99.3 | 15,999 | 22.6865 | 75.6146 | 22.89 | 22.49 | 75.81 | 75.41 | Downstream (heuristic - verify) |
| Khargone | 35 | 101.3 | 116,150 | 21.8229 | 75.6139 | 22.02 | 21.62 | 75.81 | 75.41 | Downstream (heuristic - verify) |
| Ichhāwar | 35 | 101.3 | 15,221 | 23.0282 | 77.0173 | 23.23 | 22.83 | 77.22 | 76.82 | Off flood-path (heuristic) |
| Sānwer | 35 | 102.4 | 16,150 | 22.9742 | 75.8271 | 23.17 | 22.77 | 76.03 | 75.63 | Off flood-path (heuristic) |
| Dhāmnod | 35 | 103.1 | 32,093 | 22.2093 | 75.4706 | 22.41 | 22.01 | 75.67 | 75.27 | Downstream (heuristic - verify) |
| Seoni Mālwa | 35 | 104.4 | 30,100 | 22.4505 | 77.4665 | 22.65 | 22.25 | 77.67 | 77.27 | Off flood-path (heuristic) |
| Burhānpur | 35 | 109.7 | 210,886 | 21.3087 | 76.2303 | 21.51 | 21.11 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Maksi | 35 | 115.0 | 20,094 | 23.2600 | 76.1457 | 23.46 | 23.06 | 76.35 | 75.95 | Off flood-path (heuristic) |
| Depālpur | 35 | 115.1 | 17,474 | 22.8510 | 75.5422 | 23.05 | 22.65 | 75.74 | 75.34 | Downstream (heuristic - verify) |
| Dharampuri | 35 | 116.6 | 16,363 | 22.1495 | 75.3444 | 22.35 | 21.95 | 75.54 | 75.14 | Downstream (heuristic - verify) |
| Shāhpur | 35 | 117.6 | 19,719 | 21.2374 | 76.2256 | 21.44 | 21.04 | 76.43 | 76.03 | Off flood-path (heuristic) |
| Sehore | 35 | 121.0 | 109,118 | 23.2000 | 77.0833 | 23.4 | 23.0 | 77.28 | 76.88 | Off flood-path (heuristic) |
| Rāver | 16 | 122.2 | 27,039 | 21.2476 | 76.0351 | 21.45 | 21.05 | 76.24 | 75.84 | Off flood-path (heuristic) |
| Ujjain | 35 | 123.9 | 515,215 | 23.1824 | 75.7764 | 23.38 | 22.98 | 75.98 | 75.58 | Off flood-path (heuristic) |
| Dhār | 35 | 125.7 | 93,917 | 22.5937 | 75.2977 | 22.79 | 22.39 | 75.5 | 75.1 | Downstream (heuristic - verify) |
| Tarāna | 35 | 126.1 | 24,908 | 23.3338 | 76.0425 | 23.53 | 23.13 | 76.24 | 75.84 | Off flood-path (heuristic) |
| Shujālpur | 35 | 128.8 | 51,225 | 23.4067 | 76.7098 | 23.61 | 23.21 | 76.91 | 76.51 | Off flood-path (heuristic) |
| Shājāpur | 35 | 130.1 | 69,263 | 23.4264 | 76.2777 | 23.63 | 23.23 | 76.48 | 76.08 | Off flood-path (heuristic) |
| Jalgaon Jamod | 16 | 135.6 | 28,276 | 21.0519 | 76.5346 | 21.25 | 20.85 | 76.73 | 76.33 | Off flood-path (heuristic) |
| Budhni | 35 | 137.0 | 16,808 | 22.7866 | 77.6811 | 22.99 | 22.59 | 77.88 | 77.48 | Off flood-path (heuristic) |
| Faizpur | 16 | 137.8 | 26,602 | 21.1677 | 75.8601 | 21.37 | 20.97 | 76.06 | 75.66 | Off flood-path (heuristic) |
| Sāvda | 16 | 138.2 | 20,584 | 21.1505 | 75.8894 | 21.35 | 20.95 | 76.09 | 75.69 | Off flood-path (heuristic) |
| Itārsi | 35 | 138.2 | 100,574 | 22.6148 | 77.7622 | 22.81 | 22.41 | 77.96 | 77.56 | Off flood-path (heuristic) |
| Bhainsdehi | 35 | 138.4 | 16,400 | 21.6449 | 77.6302 | 21.84 | 21.44 | 77.83 | 77.43 | Off flood-path (heuristic) |
| Kolar | 35 | 139.2 | 87,882 | 23.1648 | 77.4189 | 23.36 | 22.96 | 77.62 | 77.22 | Off flood-path (heuristic) |
| Narmadapuram | 35 | 139.6 | 117,988 | 22.7475 | 77.7274 | 22.95 | 22.55 | 77.93 | 77.53 | Off flood-path (heuristic) |
| Ubaidullāhganj | 35 | 140.3 | 22,845 | 22.9983 | 77.5862 | 23.2 | 22.8 | 77.79 | 77.39 | Off flood-path (heuristic) |
| Mandideep | 35 | 141.6 | 59,654 | 23.0817 | 77.5333 | 23.28 | 22.88 | 77.73 | 77.33 | Off flood-path (heuristic) |
| Barnagar | 35 | 141.6 | 36,438 | 23.0489 | 75.3780 | 23.25 | 22.85 | 75.58 | 75.18 | Downstream (heuristic - verify) |
| Manāwar | 35 | 142.2 | 30,393 | 22.2357 | 75.0892 | 22.44 | 22.04 | 75.29 | 74.89 | Downstream (heuristic - verify) |
| Rajpur | 35 | 142.2 | 20,947 | 21.9402 | 75.1361 | 22.14 | 21.74 | 75.34 | 74.94 | Downstream (heuristic - verify) |
| Telhāra | 16 | 143.4 | 21,146 | 21.0269 | 76.8389 | 21.23 | 20.83 | 77.04 | 76.64 | Off flood-path (heuristic) |
| Akot | 16 | 144.0 | 92,637 | 21.0963 | 77.0588 | 21.3 | 20.9 | 77.26 | 76.86 | Off flood-path (heuristic) |
| Sārangpur | 35 | 144.2 | 37,435 | 23.5665 | 76.4731 | 23.77 | 23.37 | 76.67 | 76.27 | Off flood-path (heuristic) |
| Bhopal | 35 | 145.4 | 1,798,218 | 23.2547 | 77.4029 | 23.45 | 23.05 | 77.6 | 77.2 | Off flood-path (heuristic) |
| Yāval | 16 | 146.2 | 36,706 | 21.1677 | 75.6976 | 21.37 | 20.97 | 75.9 | 75.5 | Downstream (heuristic - verify) |
| Anjad | 35 | 147.9 | 26,289 | 22.0417 | 75.0552 | 22.24 | 21.84 | 75.26 | 74.86 | Downstream (heuristic - verify) |
| Anjangaon | 16 | 150.4 | 56,380 | 21.1652 | 77.3091 | 21.37 | 20.97 | 77.51 | 77.11 | Off flood-path (heuristic) |
| Kandāri | 16 | 150.8 | 16,353 | 21.0608 | 75.8098 | 21.26 | 20.86 | 76.01 | 75.61 | Off flood-path (heuristic) |
| Varangaon | 16 | 150.8 | 44,067 | 21.0177 | 75.9104 | 21.22 | 20.82 | 76.11 | 75.71 | Off flood-path (heuristic) |
| Unhel | 35 | 151.0 | 15,837 | 23.3379 | 75.5593 | 23.54 | 23.14 | 75.76 | 75.36 | Off flood-path (heuristic) |
| Badnāwar | 35 | 152.0 | 20,917 | 23.0218 | 75.2327 | 23.22 | 22.82 | 75.43 | 75.03 | Downstream (heuristic - verify) |
| Betūl | 35 | 153.2 | 103,330 | 21.9006 | 77.9023 | 22.1 | 21.7 | 78.1 | 77.7 | Off flood-path (heuristic) |
| Bhusawal | 16 | 153.6 | 187,421 | 21.0436 | 75.7851 | 21.24 | 20.84 | 75.99 | 75.59 | Off flood-path (heuristic) |
| Achalpur | 16 | 155.7 | 112,311 | 21.2567 | 77.5101 | 21.46 | 21.06 | 77.71 | 77.31 | Off flood-path (heuristic) |
| Sendhwa | 35 | 155.8 | 56,485 | 21.6856 | 75.0962 | 21.89 | 21.49 | 75.3 | 74.9 | Downstream (heuristic - verify) |
| Malkāpur | 16 | 156.5 | 67,740 | 20.8855 | 76.1993 | 21.09 | 20.69 | 76.4 | 76.0 | Off flood-path (heuristic) |
| Bābai | 35 | 158.0 | 16,741 | 22.7026 | 77.9349 | 22.9 | 22.5 | 78.13 | 77.73 | Off flood-path (heuristic) |
| Mehidpur | 35 | 159.0 | 34,362 | 23.4888 | 75.6580 | 23.69 | 23.29 | 75.86 | 75.46 | Off flood-path (heuristic) |
| Nāndūra | 16 | 159.7 | 44,419 | 20.8342 | 76.4592 | 21.03 | 20.63 | 76.66 | 76.26 | Off flood-path (heuristic) |
| Pachor | 35 | 162.4 | 27,396 | 23.7098 | 76.7339 | 23.91 | 23.51 | 76.93 | 76.53 | Off flood-path (heuristic) |
| Rājgarh | 35 | 163.2 | 17,113 | 22.6782 | 74.9448 | 22.88 | 22.48 | 75.14 | 74.74 | Downstream (heuristic - verify) |
| Barwāni | 35 | 163.9 | 55,504 | 22.0323 | 74.8998 | 22.23 | 21.83 | 75.1 | 74.7 | Downstream (heuristic - verify) |
| Shegaon | 16 | 165.9 | 59,672 | 20.7932 | 76.6992 | 20.99 | 20.59 | 76.9 | 76.5 | Off flood-path (heuristic) |
| Chopda | 16 | 166.1 | 72,783 | 21.2458 | 75.2995 | 21.45 | 21.05 | 75.5 | 75.1 | Downstream (heuristic - verify) |
| Agar | 35 | 166.9 | 37,917 | 23.7118 | 76.0157 | 23.91 | 23.51 | 76.22 | 75.82 | Off flood-path (heuristic) |
| Jalgaon | 16 | 169.1 | 460,228 | 21.0029 | 75.5660 | 21.2 | 20.8 | 75.77 | 75.37 | Downstream (heuristic - verify) |
| Nagda | 35 | 170.5 | 103,501 | 23.4583 | 75.4176 | 23.66 | 23.26 | 75.62 | 75.22 | Off flood-path (heuristic) |
| Narsinghgarh | 35 | 172.1 | 32,329 | 23.7076 | 77.0932 | 23.91 | 23.51 | 77.29 | 76.89 | Off flood-path (heuristic) |
| Daryāpur | 16 | 173.8 | 36,463 | 20.9249 | 77.3264 | 21.12 | 20.72 | 77.53 | 77.13 | Off flood-path (heuristic) |
| Khāmgaon | 16 | 174.1 | 94,604 | 20.7074 | 76.5683 | 20.91 | 20.51 | 76.77 | 76.37 | Off flood-path (heuristic) |
| Chāndūr Bāzār | 16 | 174.8 | 18,780 | 21.2385 | 77.7471 | 21.44 | 21.04 | 77.95 | 77.55 | Off flood-path (heuristic) |
| Amla | 35 | 175.1 | 30,215 | 21.9248 | 78.1279 | 22.12 | 21.72 | 78.33 | 77.93 | Off flood-path (heuristic) |
| Nal Khera | 35 | 175.7 | 16,690 | 23.8360 | 76.2432 | 24.04 | 23.64 | 76.44 | 76.04 | Off flood-path (heuristic) |
| Sārni | 35 | 176.2 | 86,141 | 22.1032 | 78.1716 | 22.3 | 21.9 | 78.37 | 77.97 | Off flood-path (heuristic) |
| Kukshi | 35 | 176.4 | 28,331 | 22.2068 | 74.7579 | 22.41 | 22.01 | 74.96 | 74.56 | Downstream (heuristic - verify) |
| Khāchrod | 35 | 176.8 | 34,191 | 23.4232 | 75.2819 | 23.62 | 23.22 | 75.48 | 75.08 | Off flood-path (heuristic) |
| Jāmner | 16 | 177.5 | 46,762 | 20.8095 | 75.7777 | 21.01 | 20.61 | 75.98 | 75.58 | Off flood-path (heuristic) |
| Raisen | 35 | 178.8 | 44,162 | 23.3303 | 77.7811 | 23.53 | 23.13 | 77.98 | 77.58 | Off flood-path (heuristic) |
| Berasia | 35 | 180.7 | 30,951 | 23.6313 | 77.4335 | 23.83 | 23.43 | 77.63 | 77.23 | Off flood-path (heuristic) |
| Bālāpur | 16 | 181.1 | 44,594 | 20.6661 | 76.7739 | 20.87 | 20.47 | 76.97 | 76.57 | Off flood-path (heuristic) |
| Akola | 16 | 181.9 | 428,857 | 20.7096 | 76.9981 | 20.91 | 20.51 | 77.2 | 76.8 | Off flood-path (heuristic) |
| Umbri | 16 | 182.4 | 20,262 | 20.7137 | 77.0264 | 20.91 | 20.51 | 77.23 | 76.83 | Off flood-path (heuristic) |
| Sohāgpur | 35 | 183.6 | 25,040 | 22.7005 | 78.1952 | 22.9 | 22.5 | 78.4 | 78.0 | Off flood-path (heuristic) |
| Badi | 35 | 186.3 | 19,603 | 23.0367 | 78.0842 | 23.24 | 22.84 | 78.28 | 77.88 | Off flood-path (heuristic) |
| Dharangaon | 16 | 186.7 | 35,375 | 21.0119 | 75.2741 | 21.21 | 20.81 | 75.47 | 75.07 | Downstream (heuristic - verify) |
| Ratlām | 35 | 188.1 | 264,914 | 23.3303 | 75.0403 | 23.53 | 23.13 | 75.24 | 74.84 | Downstream (heuristic - verify) |
| Biaora | 35 | 189.0 | 49,093 | 23.9205 | 76.9107 | 24.12 | 23.72 | 77.11 | 76.71 | Off flood-path (heuristic) |
| Morsi | 16 | 189.9 | 37,333 | 21.3403 | 78.0126 | 21.54 | 21.14 | 78.21 | 77.81 | Off flood-path (heuristic) |
| Petlāwad | 35 | 190.4 | 15,174 | 23.0110 | 74.7977 | 23.21 | 22.81 | 75.0 | 74.6 | Downstream (heuristic - verify) |
| Susner | 35 | 190.5 | 16,432 | 23.9467 | 76.0883 | 24.15 | 23.75 | 76.29 | 75.89 | Off flood-path (heuristic) |
| Alot | 35 | 190.6 | 24,115 | 23.7634 | 75.5566 | 23.96 | 23.56 | 75.76 | 75.36 | Off flood-path (heuristic) |
| Erandol | 16 | 190.9 | 31,071 | 20.9221 | 75.3264 | 21.12 | 20.72 | 75.53 | 75.13 | Downstream (heuristic - verify) |
| Multai | 35 | 192.3 | 29,976 | 21.7746 | 78.2576 | 21.97 | 21.57 | 78.46 | 78.06 | Off flood-path (heuristic) |
| Shirpur | 16 | 193.5 | 76,905 | 21.3482 | 74.8804 | 21.55 | 21.15 | 75.08 | 74.68 | Downstream (heuristic - verify) |
| Murtajāpur | 16 | 194.5 | 40,295 | 20.7330 | 77.3669 | 20.93 | 20.53 | 77.57 | 77.17 | Off flood-path (heuristic) |
| Jirapur | 35 | 195.0 | 21,724 | 24.0214 | 76.3764 | 24.22 | 23.82 | 76.58 | 76.18 | Off flood-path (heuristic) |
| Rājgarh | 35 | 195.1 | 29,726 | 24.0083 | 76.7325 | 24.21 | 23.81 | 76.93 | 76.53 | Off flood-path (heuristic) |
| Buldāna | 16 | 195.8 | 67,431 | 20.5293 | 76.1846 | 20.73 | 20.33 | 76.38 | 75.98 | Off flood-path (heuristic) |
| Vidisha | 35 | 195.9 | 155,951 | 23.5260 | 77.8109 | 23.73 | 23.33 | 78.01 | 77.61 | Off flood-path (heuristic) |
| Khilchipur | 35 | 197.1 | 18,928 | 24.0394 | 76.5780 | 24.24 | 23.84 | 76.78 | 76.38 | Off flood-path (heuristic) |
| Bareli | 35 | 198.2 | 34,663 | 23.0044 | 78.2301 | 23.2 | 22.8 | 78.43 | 78.03 | Off flood-path (heuristic) |
| Amravati | 16 | 199.0 | 647,057 | 20.9333 | 77.7500 | 21.13 | 20.73 | 77.95 | 77.55 | Off flood-path (heuristic) |
| Amalner | 16 | 199.9 | 97,369 | 21.0398 | 75.0589 | 21.24 | 20.84 | 75.26 | 74.86 | Downstream (heuristic - verify) |

## Sardar Sarovar Dam (Gujarat)
Dam coordinates: 21.83, 73.75

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Rājpīpla | 09 | 26.1 | 35,392 | 21.8667 | 73.5000 | 22.07 | 21.67 | 73.7 | 73.3 | Downstream (heuristic - verify) |
| Akalkuva | 16 | 41.4 | 17,840 | 21.5543 | 74.0192 | 21.75 | 21.35 | 74.22 | 73.82 | Off flood-path (heuristic) |
| Dabhoi | 09 | 51.1 | 56,253 | 22.1833 | 73.4333 | 22.38 | 21.98 | 73.63 | 73.23 | Off flood-path (heuristic) |
| Taloda | 16 | 56.3 | 26,363 | 21.5613 | 74.2124 | 21.76 | 21.36 | 74.41 | 74.01 | Off flood-path (heuristic) |
| Chhota Udepur | 09 | 59.4 | 25,787 | 22.3040 | 74.0158 | 22.5 | 22.1 | 74.22 | 73.82 | Off flood-path (heuristic) |
| Vāghodia | 09 | 64.0 | 16,604 | 22.3051 | 73.4002 | 22.51 | 22.11 | 73.6 | 73.2 | Off flood-path (heuristic) |
| Karjan | 09 | 69.5 | 30,405 | 22.0467 | 73.1181 | 22.25 | 21.85 | 73.32 | 72.92 | Downstream (heuristic - verify) |
| Nandurbar | 16 | 72.3 | 111,037 | 21.3667 | 74.2405 | 21.57 | 21.17 | 74.44 | 74.04 | Off flood-path (heuristic) |
| Navāpur | 16 | 74.5 | 34,207 | 21.1616 | 73.7940 | 21.36 | 20.96 | 73.99 | 73.59 | Off flood-path (heuristic) |
| Jhadeshwar | 09 | 75.2 | 28,148 | 21.7136 | 73.0323 | 21.91 | 21.51 | 73.23 | 72.83 | Downstream (heuristic - verify) |
| Sarangpore | 09 | 75.7 | 16,671 | 21.6359 | 73.0475 | 21.84 | 21.44 | 73.25 | 72.85 | Downstream (heuristic - verify) |
| Songadh | 09 | 75.9 | 26,515 | 21.1697 | 73.5636 | 21.37 | 20.97 | 73.76 | 73.36 | Off flood-path (heuristic) |
| Vadodara | 09 | 76.4 | 1,822,221 | 22.2994 | 73.2081 | 22.5 | 22.1 | 73.41 | 73.01 | Off flood-path (heuristic) |
| Bholav | 09 | 77.3 | 24,605 | 21.7197 | 73.0110 | 21.92 | 21.52 | 73.21 | 72.81 | Downstream (heuristic - verify) |
| Andada | 09 | 77.7 | 16,730 | 21.6559 | 73.0215 | 21.86 | 21.46 | 73.22 | 72.82 | Downstream (heuristic - verify) |
| Anklesvar INA | 09 | 78.3 | 24,789 | 21.6167 | 73.0276 | 21.82 | 21.42 | 73.23 | 72.83 | Downstream (heuristic - verify) |
| Māndvi | 09 | 78.8 | 18,669 | 21.2553 | 73.3041 | 21.46 | 21.06 | 73.5 | 73.1 | Downstream (heuristic - verify) |
| Gadkhol | 09 | 79.0 | 25,332 | 21.6438 | 73.0121 | 21.84 | 21.44 | 73.21 | 72.81 | Downstream (heuristic - verify) |
| Hālol | 09 | 80.1 | 64,265 | 22.5032 | 73.4724 | 22.7 | 22.3 | 73.67 | 73.27 | Off flood-path (heuristic) |
| Bharūch | 09 | 80.9 | 169,007 | 21.6948 | 72.9805 | 21.89 | 21.49 | 73.18 | 72.78 | Downstream (heuristic - verify) |
| Shāhāda | 16 | 80.9 | 61,376 | 21.5454 | 74.4711 | 21.75 | 21.35 | 74.67 | 74.27 | Off flood-path (heuristic) |
| Ankleshwar | 09 | 81.5 | 89,457 | 21.6324 | 72.9900 | 21.83 | 21.43 | 73.19 | 72.79 | Downstream (heuristic - verify) |
| Alirajpur | 35 | 81.7 | 28,498 | 22.3039 | 74.3557 | 22.5 | 22.1 | 74.56 | 74.16 | Off flood-path (heuristic) |
| Padra | 09 | 82.3 | 46,660 | 22.2398 | 73.0845 | 22.44 | 22.04 | 73.28 | 72.88 | Downstream (heuristic - verify) |
| Undera | 09 | 85.8 | 16,902 | 22.3483 | 73.1331 | 22.55 | 22.15 | 73.33 | 72.93 | Off flood-path (heuristic) |
| Kadod | 09 | 87.5 | 16,747 | 21.2172 | 73.2197 | 21.42 | 21.02 | 73.42 | 73.02 | Downstream (heuristic - verify) |
| Khetia | 16 | 88.1 | 15,744 | 21.6712 | 74.5854 | 21.87 | 21.47 | 74.79 | 74.39 | Off flood-path (heuristic) |
| Vyāra | 09 | 88.1 | 39,789 | 21.1108 | 73.3936 | 21.31 | 20.91 | 73.59 | 73.19 | Off flood-path (heuristic) |
| Kālol | 09 | 91.4 | 25,929 | 22.6078 | 73.4627 | 22.81 | 22.41 | 73.66 | 73.26 | Off flood-path (heuristic) |
| Kosamba | 09 | 91.5 | 33,221 | 21.4620 | 72.9584 | 21.66 | 21.26 | 73.16 | 72.76 | Downstream (heuristic - verify) |
| Tarsadi | 09 | 91.7 | 29,305 | 21.4700 | 72.9521 | 21.67 | 21.27 | 73.15 | 72.75 | Downstream (heuristic - verify) |
| Amod | 09 | 92.5 | 18,742 | 21.9932 | 72.8705 | 22.19 | 21.79 | 73.07 | 72.67 | Downstream (heuristic - verify) |
| Kim | 09 | 97.6 | 18,638 | 21.4008 | 72.9268 | 21.6 | 21.2 | 73.13 | 72.73 | Downstream (heuristic - verify) |
| Vejalpur | 09 | 97.6 | 121,610 | 22.6902 | 73.5630 | 22.89 | 22.49 | 73.76 | 73.36 | Off flood-path (heuristic) |
| Sāvli | 09 | 97.8 | 18,467 | 22.5619 | 73.2232 | 22.76 | 22.36 | 73.42 | 73.02 | Off flood-path (heuristic) |
| Anklav | 09 | 98.3 | 21,003 | 22.3774 | 73.0007 | 22.58 | 22.18 | 73.2 | 72.8 | Downstream (heuristic - verify) |
| Devgadh Bāriya | 09 | 98.7 | 21,030 | 22.7052 | 73.9088 | 22.91 | 22.51 | 74.11 | 73.71 | Off flood-path (heuristic) |
| Jambusar | 09 | 101.0 | 43,344 | 22.0524 | 72.8007 | 22.25 | 21.85 | 73.0 | 72.6 | Downstream (heuristic - verify) |
| Dondaicha | 16 | 101.6 | 46,767 | 21.3236 | 74.5680 | 21.52 | 21.12 | 74.77 | 74.37 | Off flood-path (heuristic) |
| Baben | 09 | 102.5 | 15,610 | 21.1373 | 73.0965 | 21.34 | 20.94 | 73.3 | 72.9 | Downstream (heuristic - verify) |
| Bārdoli | 09 | 102.7 | 60,821 | 21.1230 | 73.1115 | 21.32 | 20.92 | 73.31 | 72.91 | Downstream (heuristic - verify) |
| Kāthor | 09 | 103.1 | 15,311 | 21.2885 | 72.9407 | 21.49 | 21.09 | 73.14 | 72.74 | Downstream (heuristic - verify) |
| Godhra | 09 | 106.0 | 143,644 | 22.7755 | 73.6149 | 22.98 | 22.58 | 73.81 | 73.41 | Off flood-path (heuristic) |
| Sayan | 09 | 106.2 | 15,324 | 21.3198 | 72.8817 | 21.52 | 21.12 | 73.08 | 72.68 | Downstream (heuristic - verify) |
| Borsad | 09 | 108.8 | 63,377 | 22.4079 | 72.8982 | 22.61 | 22.21 | 73.1 | 72.7 | Downstream (heuristic - verify) |
| Od | 09 | 109.4 | 23,250 | 22.6210 | 73.1172 | 22.82 | 22.42 | 73.32 | 72.92 | Off flood-path (heuristic) |
| Sakri | 16 | 110.1 | 21,764 | 20.9910 | 74.3148 | 21.19 | 20.79 | 74.51 | 74.11 | Off flood-path (heuristic) |
| Kadodara | 09 | 110.3 | 27,336 | 21.1616 | 72.9623 | 21.36 | 20.96 | 73.16 | 72.76 | Downstream (heuristic - verify) |
| Chalthan | 09 | 110.9 | 21,795 | 21.1542 | 72.9614 | 21.35 | 20.95 | 73.16 | 72.76 | Downstream (heuristic - verify) |
| Kukshi | 35 | 112.0 | 28,331 | 22.2068 | 74.7579 | 22.41 | 22.01 | 74.96 | 74.56 | Off flood-path (heuristic) |
| Amroli | 09 | 114.1 | 17,082 | 21.2508 | 72.8388 | 21.45 | 21.05 | 73.04 | 72.64 | Downstream (heuristic - verify) |
| Anand | 09 | 114.7 | 209,410 | 22.5525 | 72.9552 | 22.75 | 22.35 | 73.16 | 72.76 | Off flood-path (heuristic) |
| Umreth | 09 | 116.6 | 33,762 | 22.6988 | 73.1156 | 22.9 | 22.5 | 73.32 | 72.92 | Off flood-path (heuristic) |
| Vallabh Vidyanagar | 09 | 117.4 | 32,581 | 22.5333 | 72.9000 | 22.73 | 22.33 | 73.1 | 72.7 | Off flood-path (heuristic) |
| Karamsad | 09 | 117.7 | 35,285 | 22.5424 | 72.9039 | 22.74 | 22.34 | 73.1 | 72.7 | Off flood-path (heuristic) |
| Surat | 09 | 118.4 | 4,591,246 | 21.1959 | 72.8302 | 21.4 | 21.0 | 73.03 | 72.63 | Downstream (heuristic - verify) |
| Ahwa | 09 | 119.5 | 15,004 | 20.7572 | 73.6863 | 20.96 | 20.56 | 73.89 | 73.49 | Off flood-path (heuristic) |
| Dākor | 09 | 119.8 | 25,658 | 22.7527 | 73.1497 | 22.95 | 22.55 | 73.35 | 72.95 | Off flood-path (heuristic) |
| Morwa | 09 | 119.9 | 20,168 | 22.9047 | 73.8391 | 23.1 | 22.7 | 74.04 | 73.64 | Off flood-path (heuristic) |
| Barwāni | 35 | 120.7 | 55,504 | 22.0323 | 74.8998 | 22.23 | 21.83 | 75.1 | 74.7 | Off flood-path (heuristic) |
| Boriavi | 09 | 120.9 | 19,865 | 22.6112 | 72.9328 | 22.81 | 22.41 | 73.13 | 72.73 | Off flood-path (heuristic) |
| Thāsra | 09 | 121.1 | 18,337 | 22.7983 | 73.2117 | 23.0 | 22.6 | 73.41 | 73.01 | Off flood-path (heuristic) |
| Petlād | 09 | 121.4 | 55,330 | 22.4768 | 72.7999 | 22.68 | 22.28 | 73.0 | 72.6 | Downstream (heuristic - verify) |
| Kanjari | 09 | 121.9 | 17,881 | 22.6124 | 72.9211 | 22.81 | 22.41 | 73.12 | 72.72 | Off flood-path (heuristic) |
| Sachīn | 09 | 122.1 | 28,102 | 21.0872 | 72.8815 | 21.29 | 20.89 | 73.08 | 72.68 | Downstream (heuristic - verify) |
| Kansad | 09 | 123.2 | 28,327 | 21.0747 | 72.8789 | 21.27 | 20.87 | 73.08 | 72.68 | Downstream (heuristic - verify) |
| Dohad | 09 | 123.2 | 118,846 | 22.8328 | 74.2599 | 23.03 | 22.63 | 74.46 | 74.06 | Off flood-path (heuristic) |
| Chaklāsi | 09 | 123.5 | 39,581 | 22.6532 | 72.9450 | 22.85 | 22.45 | 73.14 | 72.74 | Off flood-path (heuristic) |
| Shehera | 09 | 125.2 | 19,175 | 22.9508 | 73.6312 | 23.15 | 22.75 | 73.83 | 73.43 | Off flood-path (heuristic) |
| Kabilpor | 09 | 127.6 | 15,699 | 20.9508 | 72.9583 | 21.15 | 20.75 | 73.16 | 72.76 | Downstream (heuristic - verify) |
| Khambhāt | 09 | 128.5 | 99,164 | 22.3174 | 72.6192 | 22.52 | 22.12 | 72.82 | 72.42 | Downstream (heuristic - verify) |
| Shirpur | 16 | 128.6 | 76,905 | 21.3482 | 74.8804 | 21.55 | 21.15 | 75.08 | 74.68 | Off flood-path (heuristic) |
| Navsari | 09 | 130.6 | 171,109 | 20.9424 | 72.9247 | 21.14 | 20.74 | 73.12 | 72.72 | Downstream (heuristic - verify) |
| Jalalpore | 09 | 131.8 | 17,325 | 20.9490 | 72.8983 | 21.15 | 20.75 | 73.1 | 72.7 | Downstream (heuristic - verify) |
| Sojītra | 09 | 132.1 | 19,403 | 22.5388 | 72.7198 | 22.74 | 22.34 | 72.92 | 72.52 | Downstream (heuristic - verify) |
| Vādāsinor | 09 | 132.4 | 39,330 | 22.9568 | 73.3350 | 23.16 | 22.76 | 73.54 | 73.14 | Off flood-path (heuristic) |
| Nadiād | 09 | 132.6 | 225,071 | 22.6939 | 72.8616 | 22.89 | 22.49 | 73.06 | 72.66 | Off flood-path (heuristic) |
| Vijalpor | 09 | 133.3 | 81,245 | 20.9221 | 72.9095 | 21.12 | 20.72 | 73.11 | 72.71 | Downstream (heuristic - verify) |
| Jhābua | 35 | 135.5 | 35,753 | 22.7677 | 74.5909 | 22.97 | 22.57 | 74.79 | 74.39 | Off flood-path (heuristic) |
| Anjad | 35 | 136.7 | 26,289 | 22.0417 | 75.0552 | 22.24 | 21.84 | 75.26 | 74.86 | Off flood-path (heuristic) |
| Gandevi | 09 | 137.4 | 16,827 | 20.8121 | 72.9981 | 21.01 | 20.61 | 73.2 | 72.8 | Downstream (heuristic - verify) |
| Vaso | 09 | 137.9 | 15,934 | 22.6608 | 72.7552 | 22.86 | 22.46 | 72.96 | 72.56 | Off flood-path (heuristic) |
| Mahudha | 09 | 138.1 | 17,722 | 22.8208 | 72.9403 | 23.02 | 22.62 | 73.14 | 72.74 | Off flood-path (heuristic) |
| Abrama | 09 | 138.9 | 21,000 | 20.8587 | 72.9065 | 21.06 | 20.66 | 73.11 | 72.71 | Downstream (heuristic - verify) |
| Sendhwa | 35 | 140.0 | 56,485 | 21.6856 | 75.0962 | 21.89 | 21.49 | 75.3 | 74.9 | Off flood-path (heuristic) |
| Kathlāl | 09 | 142.0 | 22,071 | 22.8982 | 72.9928 | 23.1 | 22.7 | 73.19 | 72.79 | Off flood-path (heuristic) |
| Bilimora | 09 | 143.5 | 510,879 | 20.7696 | 72.9613 | 20.97 | 20.57 | 73.16 | 72.76 | Downstream (heuristic - verify) |
| Rajpur | 35 | 143.5 | 20,947 | 21.9402 | 75.1361 | 22.14 | 21.74 | 75.34 | 74.94 | Off flood-path (heuristic) |
| Lūnāvāda | 09 | 145.1 | 36,954 | 23.1284 | 73.6104 | 23.33 | 22.93 | 73.81 | 73.41 | Off flood-path (heuristic) |
| Satānā | 16 | 145.2 | 37,701 | 20.5948 | 74.2030 | 20.79 | 20.39 | 74.4 | 74.0 | Off flood-path (heuristic) |
| Manāwar | 35 | 145.2 | 30,393 | 22.2357 | 75.0892 | 22.44 | 22.04 | 75.29 | 74.89 | Off flood-path (heuristic) |
| Walwadi | 16 | 145.5 | 29,636 | 20.9209 | 74.7611 | 21.12 | 20.72 | 74.96 | 74.56 | Off flood-path (heuristic) |
| Jhālod | 09 | 147.3 | 28,720 | 23.1010 | 74.1554 | 23.3 | 22.9 | 74.36 | 73.96 | Off flood-path (heuristic) |
| Dhule | 16 | 148.3 | 375,559 | 20.9013 | 74.7774 | 21.1 | 20.7 | 74.98 | 74.58 | Off flood-path (heuristic) |
| Kapadvanj | 09 | 149.9 | 49,308 | 23.0230 | 73.0711 | 23.22 | 22.82 | 73.27 | 72.87 | Off flood-path (heuristic) |
| Kheda | 09 | 150.0 | 25,575 | 22.7522 | 72.6853 | 22.95 | 22.55 | 72.89 | 72.49 | Off flood-path (heuristic) |
| Mahemdāvād | 09 | 150.6 | 35,368 | 22.8236 | 72.7555 | 23.02 | 22.62 | 72.96 | 72.56 | Off flood-path (heuristic) |
| Santrampur | 09 | 152.0 | 19,465 | 23.1902 | 73.8953 | 23.39 | 22.99 | 74.1 | 73.7 | Off flood-path (heuristic) |
| Rājgarh | 35 | 155.0 | 17,113 | 22.6782 | 74.9448 | 22.88 | 22.48 | 75.14 | 74.74 | Off flood-path (heuristic) |
| Dharampur | 09 | 155.7 | 24,178 | 20.5369 | 73.1737 | 20.74 | 20.34 | 73.37 | 72.97 | Off flood-path (heuristic) |
| Thandla | 35 | 156.3 | 15,756 | 23.0096 | 74.5775 | 23.21 | 22.81 | 74.78 | 74.38 | Off flood-path (heuristic) |
| Valsād | 09 | 159.8 | 139,764 | 20.6101 | 72.9343 | 20.81 | 20.41 | 73.13 | 72.73 | Downstream (heuristic - verify) |
| Amalner | 16 | 161.5 | 97,369 | 21.0398 | 75.0589 | 21.24 | 20.84 | 75.26 | 74.86 | Off flood-path (heuristic) |
| Dyāne | 16 | 161.9 | 49,192 | 20.5674 | 74.5285 | 20.77 | 20.37 | 74.73 | 74.33 | Off flood-path (heuristic) |
| Soyāgaon | 16 | 162.3 | 34,341 | 20.5525 | 74.5069 | 20.75 | 20.35 | 74.71 | 74.31 | Off flood-path (heuristic) |
| Malegaon | 16 | 164.0 | 481,228 | 20.5497 | 74.5346 | 20.75 | 20.35 | 74.73 | 74.33 | Off flood-path (heuristic) |
| Bayad | 09 | 164.4 | 17,886 | 23.2234 | 73.2149 | 23.42 | 23.02 | 73.41 | 73.01 | Off flood-path (heuristic) |
| Bareja | 09 | 164.4 | 19,690 | 22.8486 | 72.5914 | 23.05 | 22.65 | 72.79 | 72.39 | Off flood-path (heuristic) |
| Bhavnagar | 09 | 165.0 | 605,882 | 21.7629 | 72.1533 | 21.96 | 21.56 | 72.35 | 71.95 | Downstream (heuristic - verify) |
| Dholka | 09 | 167.6 | 80,945 | 22.7273 | 72.4413 | 22.93 | 22.53 | 72.64 | 72.24 | Downstream (heuristic - verify) |
| Dharampuri | 35 | 168.2 | 16,363 | 22.1495 | 75.3444 | 22.35 | 21.95 | 75.54 | 75.14 | Off flood-path (heuristic) |
| Pārdi | 09 | 168.9 | 28,495 | 20.5087 | 72.9457 | 20.71 | 20.31 | 73.15 | 72.75 | Off flood-path (heuristic) |
| Alang | 09 | 169.7 | 18,480 | 21.3988 | 72.1754 | 21.6 | 21.2 | 72.38 | 71.98 | Downstream (heuristic - verify) |
| Petlāwad | 35 | 169.8 | 15,174 | 23.0110 | 74.7977 | 23.21 | 22.81 | 75.0 | 74.6 | Off flood-path (heuristic) |
| Chopda | 16 | 172.9 | 72,783 | 21.2458 | 75.2995 | 21.45 | 21.05 | 75.5 | 75.1 | Off flood-path (heuristic) |
| Chāndor | 16 | 174.4 | 25,341 | 20.3306 | 74.2447 | 20.53 | 20.13 | 74.44 | 74.04 | Off flood-path (heuristic) |
| Parola | 16 | 176.8 | 37,666 | 20.8810 | 75.1194 | 21.08 | 20.68 | 75.32 | 74.92 | Off flood-path (heuristic) |
| Dahegām | 09 | 176.8 | 42,632 | 23.1690 | 72.8216 | 23.37 | 22.97 | 73.02 | 72.62 | Off flood-path (heuristic) |
| Barwala | 09 | 178.8 | 17,951 | 22.2198 | 72.0675 | 22.42 | 22.02 | 72.27 | 71.87 | Downstream (heuristic - verify) |
| Ahmedabad | 09 | 178.8 | 6,357,693 | 23.0258 | 72.5873 | 23.23 | 22.83 | 72.79 | 72.39 | Off flood-path (heuristic) |
| Dhār | 35 | 180.5 | 93,917 | 22.5937 | 75.2977 | 22.79 | 22.39 | 75.5 | 75.1 | Off flood-path (heuristic) |
| Bāola | 09 | 180.7 | 42,458 | 22.8284 | 72.3636 | 23.03 | 22.63 | 72.56 | 72.16 | Downstream (heuristic - verify) |
| Sarkhej | 09 | 181.4 | 30,341 | 22.9830 | 72.5020 | 23.18 | 22.78 | 72.7 | 72.3 | Off flood-path (heuristic) |
| Dabhel | 52 | 181.7 | 52,578 | 20.4095 | 72.8834 | 20.61 | 20.21 | 73.08 | 72.68 | Off flood-path (heuristic) |
| Chhiri | 09 | 182.0 | 18,829 | 20.3778 | 72.9411 | 20.58 | 20.18 | 73.14 | 72.74 | Off flood-path (heuristic) |
| Dharangaon | 16 | 182.1 | 35,375 | 21.0119 | 75.2741 | 21.21 | 20.81 | 75.47 | 75.07 | Off flood-path (heuristic) |
| Dhāmnod | 35 | 182.3 | 32,093 | 22.2093 | 75.4706 | 22.41 | 22.01 | 75.67 | 75.27 | Off flood-path (heuristic) |
| Daman | 52 | 184.0 | 44,282 | 20.4143 | 72.8324 | 20.61 | 20.21 | 73.03 | 72.63 | Downstream (heuristic - verify) |
| Nani Daman | 52 | 184.0 | 62,000 | 20.4143 | 72.8324 | 20.61 | 20.21 | 73.03 | 72.63 | Downstream (heuristic - verify) |
| Vapi INA | 09 | 184.2 | 34,162 | 20.3601 | 72.9311 | 20.56 | 20.16 | 73.13 | 72.73 | Off flood-path (heuristic) |
| Vapi | 09 | 184.3 | 163,630 | 20.3717 | 72.9049 | 20.57 | 20.17 | 73.1 | 72.7 | Off flood-path (heuristic) |
| Talāja | 09 | 185.1 | 29,948 | 21.3527 | 72.0352 | 21.55 | 21.15 | 72.24 | 71.84 | Downstream (heuristic - verify) |
| Sihor | 09 | 185.1 | 54,547 | 21.7113 | 71.9618 | 21.91 | 21.51 | 72.16 | 71.76 | Downstream (heuristic - verify) |
| Khali Kachigam | 52 | 185.1 | 18,434 | 20.3833 | 72.8667 | 20.58 | 20.18 | 73.07 | 72.67 | Off flood-path (heuristic) |
| Chanod | 09 | 185.7 | 18,776 | 20.3467 | 72.9283 | 20.55 | 20.15 | 73.13 | 72.73 | Off flood-path (heuristic) |
| Modāsa | 09 | 187.3 | 67,648 | 23.4625 | 73.2986 | 23.66 | 23.26 | 73.5 | 73.1 | Off flood-path (heuristic) |
| Bopal | 09 | 187.9 | 37,635 | 23.0334 | 72.4672 | 23.23 | 22.83 | 72.67 | 72.27 | Off flood-path (heuristic) |
| Talod | 09 | 188.1 | 18,298 | 23.3514 | 72.9500 | 23.55 | 23.15 | 73.15 | 72.75 | Off flood-path (heuristic) |
| Āmli | 52 | 188.1 | 33,369 | 20.2833 | 73.0167 | 20.48 | 20.08 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Gandhinagar | 09 | 189.1 | 292,797 | 23.2167 | 72.6833 | 23.42 | 23.02 | 72.88 | 72.48 | Off flood-path (heuristic) |
| Manmād | 16 | 189.3 | 80,058 | 20.2533 | 74.4376 | 20.45 | 20.05 | 74.64 | 74.24 | Off flood-path (heuristic) |
| Silvassa | 52 | 189.9 | 98,265 | 20.2739 | 72.9967 | 20.47 | 20.07 | 73.2 | 72.8 | Off flood-path (heuristic) |
| Sānand | 09 | 191.0 | 95,890 | 22.9923 | 72.3818 | 23.19 | 22.79 | 72.58 | 72.18 | Off flood-path (heuristic) |
| Dhandhuka | 09 | 191.7 | 32,475 | 22.3819 | 71.9866 | 22.58 | 22.18 | 72.19 | 71.79 | Downstream (heuristic - verify) |
| Erandol | 16 | 191.9 | 31,071 | 20.9221 | 75.3264 | 21.12 | 20.72 | 75.53 | 75.13 | Off flood-path (heuristic) |
| Naroli | 52 | 192.3 | 16,260 | 20.2735 | 72.9417 | 20.47 | 20.07 | 73.14 | 72.74 | Off flood-path (heuristic) |
| Khargone | 35 | 192.4 | 116,150 | 21.8229 | 75.6139 | 22.02 | 21.62 | 75.81 | 75.41 | Off flood-path (heuristic) |
| Chhala | 09 | 192.5 | 17,323 | 23.3078 | 72.7740 | 23.51 | 23.11 | 72.97 | 72.57 | Off flood-path (heuristic) |
| Valabhīpur | 09 | 193.2 | 18,663 | 21.8887 | 71.8794 | 22.09 | 21.69 | 72.08 | 71.68 | Downstream (heuristic - verify) |
| Maheshwar | 35 | 193.3 | 24,411 | 22.1759 | 75.5871 | 22.38 | 21.98 | 75.79 | 75.39 | Off flood-path (heuristic) |
| Nāndgaon | 16 | 193.7 | 24,209 | 20.3068 | 74.6550 | 20.51 | 20.11 | 74.86 | 74.46 | Off flood-path (heuristic) |
| Ozar | 16 | 193.8 | 51,297 | 20.0947 | 73.9282 | 20.29 | 19.89 | 74.13 | 73.73 | Off flood-path (heuristic) |
| Pethāpur | 09 | 193.9 | 23,497 | 23.2631 | 72.6739 | 23.46 | 23.06 | 72.87 | 72.47 | Off flood-path (heuristic) |
| Lāsalgaon | 16 | 194.4 | 17,360 | 20.1427 | 74.2395 | 20.34 | 19.94 | 74.44 | 74.04 | Off flood-path (heuristic) |
| Kasrāwad | 35 | 194.7 | 22,750 | 22.1274 | 75.6110 | 22.33 | 21.93 | 75.81 | 75.41 | Off flood-path (heuristic) |
| Sarigam INA | 09 | 195.2 | 19,903 | 20.2885 | 72.8503 | 20.49 | 20.09 | 73.05 | 72.65 | Off flood-path (heuristic) |

## Koyna Dam (Maharashtra)
Dam coordinates: 17.4, 73.75

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Koynanagar | 16 | 1.8 | 28,091 | 17.4000 | 73.7667 | 17.6 | 17.2 | 73.97 | 73.57 | Off flood-path (heuristic) |
| Chiplūn | 16 | 29.5 | 55,139 | 17.5334 | 73.5093 | 17.73 | 17.33 | 73.71 | 73.31 | Off flood-path (heuristic) |
| Satara | 16 | 40.9 | 120,195 | 17.6859 | 73.9933 | 17.89 | 17.49 | 74.19 | 73.79 | Off flood-path (heuristic) |
| Godoli | 16 | 41.1 | 22,517 | 17.6718 | 74.0129 | 17.87 | 17.47 | 74.21 | 73.81 | Off flood-path (heuristic) |
| Kodoli | 16 | 42.6 | 26,106 | 17.6702 | 74.0347 | 17.87 | 17.47 | 74.23 | 73.83 | Off flood-path (heuristic) |
| Karād | 16 | 47.5 | 55,663 | 17.2894 | 74.1818 | 17.49 | 17.09 | 74.38 | 73.98 | Off flood-path (heuristic) |
| Malkapur | 16 | 47.7 | 32,000 | 17.2621 | 74.1757 | 17.46 | 17.06 | 74.38 | 73.98 | Off flood-path (heuristic) |
| Khed | 16 | 51.6 | 16,892 | 17.7189 | 73.3969 | 17.92 | 17.52 | 73.6 | 73.2 | Off flood-path (heuristic) |
| Rahimatpur | 16 | 52.3 | 17,633 | 17.5921 | 74.1997 | 17.79 | 17.39 | 74.4 | 74.0 | Off flood-path (heuristic) |
| Koregaon | 16 | 54.9 | 24,690 | 17.6991 | 74.1625 | 17.9 | 17.5 | 74.36 | 73.96 | Off flood-path (heuristic) |
| Shahuwadi | 16 | 58.4 | 180,322 | 16.9099 | 73.9465 | 17.11 | 16.71 | 74.15 | 73.75 | Downstream (heuristic - verify) |
| Wai | 16 | 63.2 | 36,025 | 17.9528 | 73.8906 | 18.15 | 17.75 | 74.09 | 73.69 | Off flood-path (heuristic) |
| Ratnagiri | 16 | 65.2 | 76,229 | 16.9915 | 73.3102 | 17.19 | 16.79 | 73.51 | 73.11 | Off flood-path (heuristic) |
| Urun-Islāmpur | 16 | 67.3 | 67,391 | 17.0500 | 74.2667 | 17.25 | 16.85 | 74.47 | 74.07 | Downstream (heuristic - verify) |
| Dāpoli | 16 | 71.7 | 15,713 | 17.7593 | 73.1882 | 17.96 | 17.56 | 73.39 | 72.99 | Off flood-path (heuristic) |
| Kodoli | 16 | 74.7 | 17,537 | 16.8764 | 74.1909 | 17.08 | 16.68 | 74.39 | 73.99 | Downstream (heuristic - verify) |
| Mahād | 16 | 83.8 | 27,536 | 18.0833 | 73.4167 | 18.28 | 17.88 | 73.62 | 73.22 | Off flood-path (heuristic) |
| Bhor | 16 | 83.8 | 18,982 | 18.1486 | 73.8434 | 18.35 | 17.95 | 74.04 | 73.64 | Off flood-path (heuristic) |
| Vite | 16 | 84.8 | 48,289 | 17.2734 | 74.5379 | 17.47 | 17.07 | 74.74 | 74.34 | Off flood-path (heuristic) |
| Lonand | 16 | 84.9 | 18,723 | 18.0404 | 74.1872 | 18.24 | 17.84 | 74.39 | 73.99 | Off flood-path (heuristic) |
| Ashta | 16 | 86.1 | 37,105 | 16.9494 | 74.4094 | 17.15 | 16.75 | 74.61 | 74.21 | Downstream (heuristic - verify) |
| Wadgaon | 16 | 86.7 | 25,651 | 16.8355 | 74.3134 | 17.04 | 16.64 | 74.51 | 74.11 | Downstream (heuristic - verify) |
| Kolhāpur | 16 | 93.6 | 549,236 | 16.6956 | 74.2317 | 16.9 | 16.5 | 74.43 | 74.03 | Downstream (heuristic - verify) |
| Unchagao | 16 | 95.9 | 31,238 | 16.6975 | 74.2733 | 16.9 | 16.5 | 74.47 | 74.07 | Downstream (heuristic - verify) |
| Pachgaon | 16 | 96.7 | 22,353 | 16.6602 | 74.2274 | 16.86 | 16.46 | 74.43 | 74.03 | Downstream (heuristic - verify) |
| Phaltan | 16 | 97.7 | 53,202 | 17.9911 | 74.4318 | 18.19 | 17.79 | 74.63 | 74.23 | Off flood-path (heuristic) |
| Tāsgaon | 16 | 99.1 | 37,945 | 17.0370 | 74.6017 | 17.24 | 16.84 | 74.8 | 74.4 | Off flood-path (heuristic) |
| Bhudgaon | 16 | 105.6 | 15,738 | 16.9074 | 74.5995 | 17.11 | 16.71 | 74.8 | 74.4 | Downstream (heuristic - verify) |
| Sāngli | 16 | 105.7 | 601,214 | 16.8544 | 74.5642 | 17.05 | 16.65 | 74.76 | 74.36 | Downstream (heuristic - verify) |
| Korochi | 16 | 105.8 | 20,420 | 16.7192 | 74.4451 | 16.92 | 16.52 | 74.65 | 74.25 | Downstream (heuristic - verify) |
| Srīvardhan | 16 | 105.9 | 15,279 | 18.0459 | 73.0155 | 18.25 | 17.85 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Kabnur | 16 | 106.8 | 38,146 | 16.7017 | 74.4395 | 16.9 | 16.5 | 74.64 | 74.24 | Downstream (heuristic - verify) |
| Shrivardhan | 16 | 107.5 | 15,123 | 18.0532 | 73.0011 | 18.25 | 17.85 | 73.2 | 72.8 | Off flood-path (heuristic) |
| Sāsvad | 16 | 109.0 | 31,821 | 18.3435 | 74.0310 | 18.54 | 18.14 | 74.23 | 73.83 | Off flood-path (heuristic) |
| Ichalkaranji | 16 | 109.2 | 287,353 | 16.6912 | 74.4605 | 16.89 | 16.49 | 74.66 | 74.26 | Downstream (heuristic - verify) |
| Kāgal | 16 | 109.5 | 34,106 | 16.5770 | 74.3154 | 16.78 | 16.38 | 74.52 | 74.12 | Downstream (heuristic - verify) |
| Jaisingpur | 16 | 110.0 | 48,510 | 16.7764 | 74.5536 | 16.98 | 16.58 | 74.75 | 74.35 | Downstream (heuristic - verify) |
| Hupari | 16 | 111.5 | 28,953 | 16.6167 | 74.4044 | 16.82 | 16.42 | 74.6 | 74.2 | Downstream (heuristic - verify) |
| Mhaswad | 16 | 113.1 | 24,120 | 17.6336 | 74.7877 | 17.83 | 17.43 | 74.99 | 74.59 | Off flood-path (heuristic) |
| Indāpur | 16 | 113.2 | 26,752 | 18.3000 | 73.2500 | 18.5 | 18.1 | 73.45 | 73.05 | Off flood-path (heuristic) |
| Kharakvasla | 16 | 115.7 | 78,684 | 18.4400 | 73.7755 | 18.64 | 18.24 | 73.98 | 73.58 | Off flood-path (heuristic) |
| Kurandvād | 16 | 119.6 | 22,372 | 16.6832 | 74.5889 | 16.88 | 16.48 | 74.79 | 74.39 | Downstream (heuristic - verify) |
| Nāteputa | 16 | 119.8 | 17,930 | 17.8989 | 74.7522 | 18.1 | 17.7 | 74.95 | 74.55 | Off flood-path (heuristic) |
| Bārāmati | 16 | 121.1 | 54,415 | 18.1517 | 74.5777 | 18.35 | 17.95 | 74.78 | 74.38 | Off flood-path (heuristic) |
| Jalochi | 16 | 123.7 | 19,346 | 18.1566 | 74.6071 | 18.36 | 17.96 | 74.81 | 74.41 | Off flood-path (heuristic) |
| Pune | 16 | 125.0 | 3,124,458 | 18.5196 | 73.8554 | 18.72 | 18.32 | 74.06 | 73.66 | Off flood-path (heuristic) |
| Sadalgi | 19 | 125.2 | 23,790 | 16.5587 | 74.5321 | 16.76 | 16.36 | 74.73 | 74.33 | Downstream (heuristic - verify) |
| Shivaji Nagar | 16 | 126.1 | 1,000,000 | 18.5302 | 73.8526 | 18.73 | 18.33 | 74.05 | 73.65 | Off flood-path (heuristic) |
| Kankauli | 16 | 126.1 | 16,398 | 16.2661 | 73.7122 | 16.47 | 16.07 | 73.91 | 73.51 | Downstream (heuristic - verify) |
| Khadki | 16 | 129.8 | 75,654 | 18.5635 | 73.8521 | 18.76 | 18.36 | 74.05 | 73.65 | Off flood-path (heuristic) |
| Nipāni | 16 | 130.1 | 62,865 | 16.3990 | 74.3829 | 16.6 | 16.2 | 74.58 | 74.18 | Downstream (heuristic - verify) |
| Roha | 16 | 133.2 | 90,000 | 18.4369 | 73.1196 | 18.64 | 18.24 | 73.32 | 72.92 | Off flood-path (heuristic) |
| Vagholi | 16 | 133.8 | 33,479 | 18.5823 | 73.9830 | 18.78 | 18.38 | 74.18 | 73.78 | Off flood-path (heuristic) |
| Shiraguppi | 16 | 134.0 | 25,000 | 16.6187 | 74.7091 | 16.82 | 16.42 | 74.91 | 74.51 | Downstream (heuristic - verify) |
| Pimpri-Chinchwad | 16 | 135.6 | 1,727,692 | 18.6187 | 73.8037 | 18.82 | 18.42 | 74.0 | 73.6 | Off flood-path (heuristic) |
| Pimpri | 16 | 136.1 | 1,284,606 | 18.6229 | 73.8070 | 18.82 | 18.42 | 74.01 | 73.61 | Off flood-path (heuristic) |
| Chikodi | 19 | 139.9 | 38,307 | 16.4290 | 74.5859 | 16.63 | 16.23 | 74.79 | 74.39 | Downstream (heuristic - verify) |
| Koregaon | 16 | 142.3 | 25,846 | 18.6457 | 74.0591 | 18.85 | 18.45 | 74.26 | 73.86 | Off flood-path (heuristic) |
| Dehu Road | 16 | 142.6 | 48,961 | 18.6821 | 73.7316 | 18.88 | 18.48 | 73.93 | 73.53 | Off flood-path (heuristic) |
| Alandi | 16 | 142.9 | 28,645 | 18.6776 | 73.8987 | 18.88 | 18.48 | 74.1 | 73.7 | Off flood-path (heuristic) |
| Aklūj | 16 | 145.4 | 39,972 | 17.8924 | 75.0214 | 18.09 | 17.69 | 75.22 | 74.82 | Off flood-path (heuristic) |
| Kudachi | 19 | 145.4 | 23,154 | 16.6278 | 74.8541 | 16.83 | 16.43 | 75.05 | 74.65 | Downstream (heuristic - verify) |
| Gadhinglaj | 16 | 145.6 | 27,185 | 16.2229 | 74.3501 | 16.42 | 16.02 | 74.55 | 74.15 | Downstream (heuristic - verify) |
| Daund | 16 | 147.7 | 49,450 | 18.4652 | 74.5837 | 18.67 | 18.27 | 74.78 | 74.38 | Off flood-path (heuristic) |
| Raybag | 19 | 148.5 | 18,736 | 16.4918 | 74.7739 | 16.69 | 16.29 | 74.97 | 74.57 | Downstream (heuristic - verify) |
| Talegaon Dābhāde | 16 | 148.7 | 56,435 | 18.7350 | 73.6756 | 18.94 | 18.54 | 73.88 | 73.48 | Off flood-path (heuristic) |
| Sankeshwar | 19 | 149.1 | 34,637 | 16.2565 | 74.4819 | 16.46 | 16.06 | 74.68 | 74.28 | Downstream (heuristic - verify) |
| Ajara | 16 | 151.0 | 17,257 | 16.1160 | 74.2110 | 16.32 | 15.92 | 74.41 | 74.01 | Downstream (heuristic - verify) |
| Chākan | 16 | 151.8 | 41,113 | 18.7606 | 73.8635 | 18.96 | 18.56 | 74.06 | 73.66 | Off flood-path (heuristic) |
| Mālvan | 16 | 152.1 | 18,858 | 16.0598 | 73.4629 | 16.26 | 15.86 | 73.66 | 73.26 | Downstream (heuristic - verify) |
| Sāngola | 16 | 153.2 | 34,321 | 17.4395 | 75.1938 | 17.64 | 17.24 | 75.39 | 74.99 | Off flood-path (heuristic) |
| Maval | 16 | 154.1 | 15,612 | 18.7553 | 73.4443 | 18.96 | 18.56 | 73.64 | 73.24 | Off flood-path (heuristic) |
| Kudāl | 16 | 154.5 | 16,015 | 16.0115 | 73.6887 | 16.21 | 15.81 | 73.89 | 73.49 | Downstream (heuristic - verify) |
| Lonavla | 16 | 154.8 | 58,562 | 18.7527 | 73.4057 | 18.95 | 18.55 | 73.61 | 73.21 | Off flood-path (heuristic) |
| Indāpur | 16 | 157.1 | 25,515 | 18.1153 | 75.0289 | 18.32 | 17.92 | 75.23 | 74.83 | Off flood-path (heuristic) |
| Athani | 19 | 158.5 | 47,842 | 16.7261 | 75.0642 | 16.93 | 16.53 | 75.26 | 74.86 | Off flood-path (heuristic) |
| Hukeri | 19 | 158.5 | 22,988 | 16.2308 | 74.6024 | 16.43 | 16.03 | 74.8 | 74.4 | Downstream (heuristic - verify) |
| Khopoli | 16 | 159.9 | 71,141 | 18.7856 | 73.3459 | 18.99 | 18.59 | 73.55 | 73.15 | Off flood-path (heuristic) |
| Rājgurunagar | 16 | 163.9 | 25,146 | 18.8667 | 73.9000 | 19.07 | 18.67 | 74.1 | 73.7 | Off flood-path (heuristic) |
| Pen | 16 | 164.0 | 37,852 | 18.7373 | 73.0960 | 18.94 | 18.54 | 73.3 | 72.9 | Off flood-path (heuristic) |
| Sāvantvādi | 16 | 166.5 | 23,851 | 15.9041 | 73.8219 | 16.1 | 15.7 | 74.02 | 73.62 | Downstream (heuristic - verify) |
| Alībāg | 16 | 166.8 | 20,752 | 18.6481 | 72.8758 | 18.85 | 18.45 | 73.08 | 72.68 | Off flood-path (heuristic) |
| Shrīgonda | 16 | 168.3 | 31,134 | 18.6153 | 74.6989 | 18.82 | 18.42 | 74.9 | 74.5 | Off flood-path (heuristic) |
| Pandharpur | 16 | 170.5 | 98,923 | 17.6792 | 75.3310 | 17.88 | 17.48 | 75.53 | 75.13 | Off flood-path (heuristic) |
| Konnūr | 19 | 170.5 | 19,386 | 16.2014 | 74.7489 | 16.4 | 16.0 | 74.95 | 74.55 | Downstream (heuristic - verify) |
| Terdāl | 19 | 170.8 | 26,411 | 16.4938 | 75.0467 | 16.69 | 16.29 | 75.25 | 74.85 | Downstream (heuristic - verify) |
| Sirūr | 16 | 171.9 | 37,111 | 18.8276 | 74.3748 | 19.03 | 18.63 | 74.57 | 74.17 | Off flood-path (heuristic) |
| Karjat | 16 | 173.9 | 34,554 | 18.9107 | 73.3235 | 19.11 | 18.71 | 73.52 | 73.12 | Off flood-path (heuristic) |
| Mudalgi | 19 | 175.4 | 29,128 | 16.3368 | 74.9677 | 16.54 | 16.14 | 75.17 | 74.77 | Downstream (heuristic - verify) |
| Rabkavi | 19 | 177.5 | 73,835 | 16.4757 | 75.1106 | 16.68 | 16.28 | 75.31 | 74.91 | Downstream (heuristic - verify) |
| Gokak | 19 | 178.3 | 79,121 | 16.1690 | 74.8239 | 16.37 | 15.97 | 75.02 | 74.62 | Downstream (heuristic - verify) |
| Rabkavi-Banhatti | 19 | 178.7 | 77,004 | 16.4700 | 75.1200 | 16.67 | 16.27 | 75.32 | 74.92 | Downstream (heuristic - verify) |
| Manchar | 16 | 179.6 | 18,876 | 19.0044 | 73.9435 | 19.2 | 18.8 | 74.14 | 73.74 | Off flood-path (heuristic) |
| Mangalvedha | 16 | 180.4 | 21,824 | 17.5105 | 75.4471 | 17.71 | 17.31 | 75.65 | 75.25 | Off flood-path (heuristic) |
| Chanaje | 16 | 183.0 | 16,714 | 18.8613 | 72.9526 | 19.06 | 18.66 | 73.15 | 72.75 | Off flood-path (heuristic) |
| Mahālingpur | 19 | 183.1 | 36,055 | 16.3888 | 75.1087 | 16.59 | 16.19 | 75.31 | 74.91 | Downstream (heuristic - verify) |
| Kalamb | 16 | 184.1 | 27,287 | 19.0444 | 73.9555 | 19.24 | 18.84 | 74.16 | 73.76 | Off flood-path (heuristic) |
| Uran | 16 | 185.3 | 30,439 | 18.8781 | 72.9392 | 19.08 | 18.68 | 73.14 | 72.74 | Off flood-path (heuristic) |
| Neral | 16 | 186.4 | 18,429 | 19.0248 | 73.3169 | 19.22 | 18.82 | 73.52 | 73.12 | Off flood-path (heuristic) |
| Panvel | 16 | 189.2 | 195,373 | 18.9888 | 73.1101 | 19.19 | 18.79 | 73.31 | 72.91 | Off flood-path (heuristic) |
| Karmāla | 16 | 189.5 | 23,199 | 18.4077 | 75.1939 | 18.61 | 18.21 | 75.39 | 74.99 | Off flood-path (heuristic) |
| Belagavi | 19 | 190.0 | 490,045 | 15.8521 | 74.5045 | 16.05 | 15.65 | 74.7 | 74.3 | Downstream (heuristic - verify) |
| Jamkhandi | 19 | 191.8 | 68,938 | 16.5046 | 75.2915 | 16.7 | 16.3 | 75.49 | 75.09 | Downstream (heuristic - verify) |
| Kurduvādi | 16 | 192.5 | 23,131 | 18.0934 | 75.4157 | 18.29 | 17.89 | 75.62 | 75.22 | Off flood-path (heuristic) |
| Piranvādi | 19 | 194.0 | 17,874 | 15.8020 | 74.4801 | 16.0 | 15.6 | 74.68 | 74.28 | Downstream (heuristic - verify) |
| Māchai | 19 | 195.1 | 18,073 | 15.7926 | 74.4841 | 15.99 | 15.59 | 74.68 | 74.28 | Downstream (heuristic - verify) |
| Kharghar | 16 | 197.0 | 80,612 | 19.0498 | 73.0702 | 19.25 | 18.85 | 73.27 | 72.87 | Off flood-path (heuristic) |
| Navi Mumbai | 16 | 197.8 | 2,600,000 | 19.0368 | 73.0158 | 19.24 | 18.84 | 73.22 | 72.82 | Off flood-path (heuristic) |

## Khadakwasla Dam (Maharashtra)
Dam coordinates: 18.44, 73.77

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Kharakvasla | 16 | 0.6 | 78,684 | 18.4400 | 73.7755 | 18.64 | 18.24 | 73.98 | 73.58 | Downstream (heuristic - verify) |
| Pune | 16 | 12.6 | 3,124,458 | 18.5196 | 73.8554 | 18.72 | 18.32 | 74.06 | 73.66 | Downstream (heuristic - verify) |
| Shivaji Nagar | 16 | 13.3 | 1,000,000 | 18.5302 | 73.8526 | 18.73 | 18.33 | 74.05 | 73.65 | Downstream (heuristic - verify) |
| Khadki | 16 | 16.2 | 75,654 | 18.5635 | 73.8521 | 18.76 | 18.36 | 74.05 | 73.65 | Off flood-path (heuristic) |
| Pimpri-Chinchwad | 16 | 20.2 | 1,727,692 | 18.6187 | 73.8037 | 18.82 | 18.42 | 74.0 | 73.6 | Off flood-path (heuristic) |
| Pimpri | 16 | 20.7 | 1,284,606 | 18.6229 | 73.8070 | 18.82 | 18.42 | 74.01 | 73.61 | Off flood-path (heuristic) |
| Dehu Road | 16 | 27.2 | 48,961 | 18.6821 | 73.7316 | 18.88 | 18.48 | 73.93 | 73.53 | Off flood-path (heuristic) |
| Vagholi | 16 | 27.5 | 33,479 | 18.5823 | 73.9830 | 18.78 | 18.38 | 74.18 | 73.78 | Downstream (heuristic - verify) |
| Sāsvad | 16 | 29.6 | 31,821 | 18.3435 | 74.0310 | 18.54 | 18.14 | 74.23 | 73.83 | Downstream (heuristic - verify) |
| Alandi | 16 | 29.7 | 28,645 | 18.6776 | 73.8987 | 18.88 | 18.48 | 74.1 | 73.7 | Off flood-path (heuristic) |
| Bhor | 16 | 33.3 | 18,982 | 18.1486 | 73.8434 | 18.35 | 17.95 | 74.04 | 73.64 | Off flood-path (heuristic) |
| Talegaon Dābhāde | 16 | 34.3 | 56,435 | 18.7350 | 73.6756 | 18.94 | 18.54 | 73.88 | 73.48 | Off flood-path (heuristic) |
| Chākan | 16 | 37.0 | 41,113 | 18.7606 | 73.8635 | 18.96 | 18.56 | 74.06 | 73.66 | Off flood-path (heuristic) |
| Koregaon | 16 | 38.1 | 25,846 | 18.6457 | 74.0591 | 18.85 | 18.45 | 74.26 | 73.86 | Downstream (heuristic - verify) |
| Maval | 16 | 49.1 | 15,612 | 18.7553 | 73.4443 | 18.96 | 18.56 | 73.64 | 73.24 | Off flood-path (heuristic) |
| Rājgurunagar | 16 | 49.4 | 25,146 | 18.8667 | 73.9000 | 19.07 | 18.67 | 74.1 | 73.7 | Off flood-path (heuristic) |
| Lonavla | 16 | 51.8 | 58,562 | 18.7527 | 73.4057 | 18.95 | 18.55 | 73.61 | 73.21 | Off flood-path (heuristic) |
| Mahād | 16 | 54.5 | 27,536 | 18.0833 | 73.4167 | 18.28 | 17.88 | 73.62 | 73.22 | Off flood-path (heuristic) |
| Wai | 16 | 55.7 | 36,025 | 17.9528 | 73.8906 | 18.15 | 17.75 | 74.09 | 73.69 | Off flood-path (heuristic) |
| Indāpur | 16 | 57.0 | 26,752 | 18.3000 | 73.2500 | 18.5 | 18.1 | 73.45 | 73.05 | Off flood-path (heuristic) |
| Khopoli | 16 | 58.9 | 71,141 | 18.7856 | 73.3459 | 18.99 | 18.59 | 73.55 | 73.15 | Off flood-path (heuristic) |
| Lonand | 16 | 62.6 | 18,723 | 18.0404 | 74.1872 | 18.24 | 17.84 | 74.39 | 73.99 | Downstream (heuristic - verify) |
| Manchar | 16 | 65.4 | 18,876 | 19.0044 | 73.9435 | 19.2 | 18.8 | 74.14 | 73.74 | Off flood-path (heuristic) |
| Roha | 16 | 68.6 | 90,000 | 18.4369 | 73.1196 | 18.64 | 18.24 | 73.32 | 72.92 | Off flood-path (heuristic) |
| Kalamb | 16 | 70.0 | 27,287 | 19.0444 | 73.9555 | 19.24 | 18.84 | 74.16 | 73.76 | Off flood-path (heuristic) |
| Karjat | 16 | 70.4 | 34,554 | 18.9107 | 73.3235 | 19.11 | 18.71 | 73.52 | 73.12 | Off flood-path (heuristic) |
| Sirūr | 16 | 76.9 | 37,111 | 18.8276 | 74.3748 | 19.03 | 18.63 | 74.57 | 74.17 | Downstream (heuristic - verify) |
| Pen | 16 | 78.4 | 37,852 | 18.7373 | 73.0960 | 18.94 | 18.54 | 73.3 | 72.9 | Off flood-path (heuristic) |
| Neral | 16 | 80.7 | 18,429 | 19.0248 | 73.3169 | 19.22 | 18.82 | 73.52 | 73.12 | Off flood-path (heuristic) |
| Daund | 16 | 85.9 | 49,450 | 18.4652 | 74.5837 | 18.67 | 18.27 | 74.78 | 74.38 | Downstream (heuristic - verify) |
| Phaltan | 16 | 85.9 | 53,202 | 17.9911 | 74.4318 | 18.19 | 17.79 | 74.63 | 74.23 | Downstream (heuristic - verify) |
| Junnar | 16 | 86.1 | 25,997 | 19.2081 | 73.8752 | 19.41 | 19.01 | 74.08 | 73.68 | Off flood-path (heuristic) |
| Satara | 16 | 87.1 | 120,195 | 17.6859 | 73.9933 | 17.89 | 17.49 | 74.19 | 73.79 | Off flood-path (heuristic) |
| Godoli | 16 | 89.2 | 22,517 | 17.6718 | 74.0129 | 17.87 | 17.47 | 74.21 | 73.81 | Off flood-path (heuristic) |
| Khed | 16 | 89.4 | 16,892 | 17.7189 | 73.3969 | 17.92 | 17.52 | 73.6 | 73.2 | Off flood-path (heuristic) |
| Kodoli | 16 | 90.1 | 26,106 | 17.6702 | 74.0347 | 17.87 | 17.47 | 74.23 | 73.83 | Off flood-path (heuristic) |
| Srīvardhan | 16 | 90.9 | 15,279 | 18.0459 | 73.0155 | 18.25 | 17.85 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Bārāmati | 16 | 91.1 | 54,415 | 18.1517 | 74.5777 | 18.35 | 17.95 | 74.78 | 74.38 | Downstream (heuristic - verify) |
| Shrivardhan | 16 | 91.9 | 15,123 | 18.0532 | 73.0011 | 18.25 | 17.85 | 73.2 | 72.8 | Off flood-path (heuristic) |
| Koregaon | 16 | 92.2 | 24,690 | 17.6991 | 74.1625 | 17.9 | 17.5 | 74.36 | 73.96 | Off flood-path (heuristic) |
| Panvel | 16 | 92.5 | 195,373 | 18.9888 | 73.1101 | 19.19 | 18.79 | 73.31 | 72.91 | Off flood-path (heuristic) |
| Jalochi | 16 | 93.8 | 19,346 | 18.1566 | 74.6071 | 18.36 | 17.96 | 74.81 | 74.41 | Downstream (heuristic - verify) |
| Badlapur | 16 | 95.6 | 174,226 | 19.1552 | 73.2655 | 19.36 | 18.96 | 73.47 | 73.07 | Off flood-path (heuristic) |
| Alībāg | 16 | 97.1 | 20,752 | 18.6481 | 72.8758 | 18.85 | 18.45 | 73.08 | 72.68 | Off flood-path (heuristic) |
| Dāpoli | 16 | 97.5 | 15,713 | 17.7593 | 73.1882 | 17.96 | 17.56 | 73.39 | 72.99 | Off flood-path (heuristic) |
| Chanaje | 16 | 98.0 | 16,714 | 18.8613 | 72.9526 | 19.06 | 18.66 | 73.15 | 72.75 | Off flood-path (heuristic) |
| Murbād | 16 | 99.0 | 18,725 | 19.2539 | 73.3899 | 19.45 | 19.05 | 73.59 | 73.19 | Off flood-path (heuristic) |
| Shrīgonda | 16 | 99.9 | 31,134 | 18.6153 | 74.6989 | 18.82 | 18.42 | 74.9 | 74.5 | Downstream (heuristic - verify) |
| Kharghar | 16 | 100.1 | 80,612 | 19.0498 | 73.0702 | 19.25 | 18.85 | 73.27 | 72.87 | Off flood-path (heuristic) |
| Uran | 16 | 100.2 | 30,439 | 18.8781 | 72.9392 | 19.08 | 18.68 | 73.14 | 72.74 | Off flood-path (heuristic) |
| Navi Mumbai | 16 | 103.5 | 2,600,000 | 19.0368 | 73.0158 | 19.24 | 18.84 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Chiplūn | 16 | 104.5 | 55,139 | 17.5334 | 73.5093 | 17.73 | 17.33 | 73.71 | 73.31 | Off flood-path (heuristic) |
| Rahimatpur | 16 | 104.7 | 17,633 | 17.5921 | 74.1997 | 17.79 | 17.39 | 74.4 | 74.0 | Off flood-path (heuristic) |
| Ambarnath | 16 | 105.7 | 253,475 | 19.2000 | 73.1667 | 19.4 | 19.0 | 73.37 | 72.97 | Off flood-path (heuristic) |
| Ulhasnagar | 16 | 108.2 | 516,584 | 19.2167 | 73.1500 | 19.42 | 19.02 | 73.35 | 72.95 | Off flood-path (heuristic) |
| Mharal Bk | 16 | 109.2 | 29,462 | 19.2459 | 73.1771 | 19.45 | 19.05 | 73.38 | 72.98 | Off flood-path (heuristic) |
| Kalyān | 16 | 111.6 | 1,262,255 | 19.2437 | 73.1355 | 19.44 | 19.04 | 73.34 | 72.94 | Off flood-path (heuristic) |
| Dombivali | 16 | 112.6 | 1,247,327 | 19.2167 | 73.0833 | 19.42 | 19.02 | 73.28 | 72.88 | Off flood-path (heuristic) |
| Airoli | 16 | 113.5 | 100,000 | 19.1510 | 72.9963 | 19.35 | 18.95 | 73.2 | 72.8 | Off flood-path (heuristic) |
| Koynanagar | 16 | 115.6 | 28,091 | 17.4000 | 73.7667 | 17.6 | 17.2 | 73.97 | 73.57 | Off flood-path (heuristic) |
| Dhārāvi | 16 | 116.8 | 700,000 | 19.0500 | 72.8667 | 19.25 | 18.85 | 73.07 | 72.67 | Off flood-path (heuristic) |
| Mumbai | 16 | 117.0 | 12,691,836 | 19.0728 | 72.8826 | 19.27 | 18.87 | 73.08 | 72.68 | Off flood-path (heuristic) |
| Powai | 16 | 118.1 | 20,000 | 19.1164 | 72.9047 | 19.32 | 18.92 | 73.1 | 72.7 | Off flood-path (heuristic) |
| Ārangaon | 16 | 119.0 | 29,591 | 19.0268 | 74.7149 | 19.23 | 18.83 | 74.91 | 74.51 | Downstream (heuristic - verify) |
| Thāne | 16 | 119.5 | 1,841,488 | 19.1970 | 72.9635 | 19.4 | 19.0 | 73.16 | 72.76 | Off flood-path (heuristic) |
| Kalher | 16 | 119.9 | 15,573 | 19.2472 | 73.0152 | 19.45 | 19.05 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Nāteputa | 16 | 119.9 | 17,930 | 17.8989 | 74.7522 | 18.1 | 17.7 | 74.95 | 74.55 | Downstream (heuristic - verify) |
| Vasind | 16 | 120.2 | 20,561 | 19.4084 | 73.2629 | 19.61 | 19.21 | 73.46 | 73.06 | Off flood-path (heuristic) |
| Bhiwandi | 16 | 121.4 | 874,032 | 19.3002 | 73.0588 | 19.5 | 19.1 | 73.26 | 72.86 | Off flood-path (heuristic) |
| Khoni | 16 | 122.9 | 26,016 | 19.3173 | 73.0597 | 19.52 | 19.12 | 73.26 | 72.86 | Off flood-path (heuristic) |
| Ahilyanagar | 16 | 125.3 | 367,140 | 19.0946 | 74.7384 | 19.29 | 18.89 | 74.94 | 74.54 | Downstream (heuristic - verify) |
| Borivli | 16 | 130.3 | 609,617 | 19.2350 | 72.8598 | 19.43 | 19.03 | 73.06 | 72.66 | Off flood-path (heuristic) |
| Sangamner | 16 | 133.7 | 67,309 | 19.5678 | 74.2115 | 19.77 | 19.37 | 74.41 | 74.01 | Off flood-path (heuristic) |
| Karād | 16 | 135.2 | 55,663 | 17.2894 | 74.1818 | 17.49 | 17.09 | 74.38 | 73.98 | Off flood-path (heuristic) |
| Bhayandar | 16 | 136.1 | 809,378 | 19.3016 | 72.8511 | 19.5 | 19.1 | 73.05 | 72.65 | Off flood-path (heuristic) |
| Ghulewadi | 16 | 136.8 | 21,860 | 19.6031 | 74.1936 | 19.8 | 19.4 | 74.39 | 73.99 | Off flood-path (heuristic) |
| Gorai | 16 | 137.5 | 29,107 | 19.2500 | 72.7833 | 19.45 | 19.05 | 72.98 | 72.58 | Off flood-path (heuristic) |
| Kasāra | 16 | 137.6 | 15,611 | 19.6451 | 73.4743 | 19.85 | 19.45 | 73.67 | 73.27 | Off flood-path (heuristic) |
| Indāpur | 16 | 137.7 | 25,515 | 18.1153 | 75.0289 | 18.32 | 17.92 | 75.23 | 74.83 | Downstream (heuristic - verify) |
| Malkapur | 16 | 137.8 | 32,000 | 17.2621 | 74.1757 | 17.46 | 17.06 | 74.38 | 73.98 | Off flood-path (heuristic) |
| Mhaswad | 16 | 140.1 | 24,120 | 17.6336 | 74.7877 | 17.83 | 17.43 | 74.99 | 74.59 | Downstream (heuristic - verify) |
| Rāhuri | 16 | 140.5 | 38,813 | 19.3907 | 74.6498 | 19.59 | 19.19 | 74.85 | 74.45 | Downstream (heuristic - verify) |
| Igatpuri | 16 | 141.3 | 35,461 | 19.6952 | 73.5626 | 19.9 | 19.5 | 73.76 | 73.36 | Off flood-path (heuristic) |
| Ghoti Budrukh | 16 | 142.7 | 24,838 | 19.7164 | 73.6282 | 19.92 | 19.52 | 73.83 | 73.43 | Off flood-path (heuristic) |
| Aklūj | 16 | 145.6 | 39,972 | 17.8924 | 75.0214 | 18.09 | 17.69 | 75.22 | 74.82 | Downstream (heuristic - verify) |
| Deolali | 16 | 145.7 | 30,997 | 19.4739 | 74.6206 | 19.67 | 19.27 | 74.82 | 74.42 | Off flood-path (heuristic) |
| Vāda | 16 | 149.9 | 16,750 | 19.6535 | 73.1481 | 19.85 | 19.45 | 73.35 | 72.95 | Off flood-path (heuristic) |
| Karmāla | 16 | 150.3 | 23,199 | 18.4077 | 75.1939 | 18.61 | 18.21 | 75.39 | 74.99 | Downstream (heuristic - verify) |
| Virār | 16 | 151.4 | 1,222,390 | 19.4559 | 72.8114 | 19.66 | 19.26 | 73.01 | 72.61 | Off flood-path (heuristic) |
| Vite | 16 | 153.1 | 48,289 | 17.2734 | 74.5379 | 17.47 | 17.07 | 74.74 | 74.34 | Off flood-path (heuristic) |
| Sinnar | 16 | 158.1 | 65,299 | 19.8451 | 73.9987 | 20.05 | 19.65 | 74.2 | 73.8 | Off flood-path (heuristic) |
| Rahata | 16 | 160.4 | 22,335 | 19.7166 | 74.4811 | 19.92 | 19.52 | 74.68 | 74.28 | Off flood-path (heuristic) |
| Shrirampur | 16 | 161.1 | 89,282 | 19.6220 | 74.6570 | 19.82 | 19.42 | 74.86 | 74.46 | Off flood-path (heuristic) |
| Urun-Islāmpur | 16 | 163.3 | 67,391 | 17.0500 | 74.2667 | 17.25 | 16.85 | 74.47 | 74.07 | Off flood-path (heuristic) |
| Shirdi | 16 | 165.1 | 36,004 | 19.7662 | 74.4774 | 19.97 | 19.57 | 74.68 | 74.28 | Off flood-path (heuristic) |
| Jāmkhed | 16 | 165.9 | 34,017 | 18.7352 | 75.3134 | 18.94 | 18.54 | 75.51 | 75.11 | Downstream (heuristic - verify) |
| Deolāli | 16 | 167.4 | 54,027 | 19.9440 | 73.8344 | 20.14 | 19.74 | 74.03 | 73.63 | Off flood-path (heuristic) |
| Ratnagiri | 16 | 168.3 | 76,229 | 16.9915 | 73.3102 | 17.19 | 16.79 | 73.51 | 73.11 | Off flood-path (heuristic) |
| Pāthardi | 16 | 168.8 | 27,211 | 19.1728 | 75.1743 | 19.37 | 18.97 | 75.37 | 74.97 | Downstream (heuristic - verify) |
| Shahuwadi | 16 | 171.2 | 180,322 | 16.9099 | 73.9465 | 17.11 | 16.71 | 74.15 | 73.75 | Off flood-path (heuristic) |
| Nashik | 16 | 173.2 | 1,486,053 | 19.9973 | 73.7910 | 20.2 | 19.8 | 73.99 | 73.59 | Off flood-path (heuristic) |
| Pālghar | 16 | 175.2 | 72,335 | 19.6969 | 72.7654 | 19.9 | 19.5 | 72.97 | 72.57 | Off flood-path (heuristic) |
| Kopargaon | 16 | 176.7 | 65,273 | 19.8824 | 74.4761 | 20.08 | 19.68 | 74.68 | 74.28 | Off flood-path (heuristic) |
| Kurduvādi | 16 | 178.0 | 23,131 | 18.0934 | 75.4157 | 18.29 | 17.89 | 75.62 | 75.22 | Downstream (heuristic - verify) |
| Ashta | 16 | 179.0 | 37,105 | 16.9494 | 74.4094 | 17.15 | 16.75 | 74.61 | 74.21 | Off flood-path (heuristic) |
| Tāsgaon | 16 | 179.2 | 37,945 | 17.0370 | 74.6017 | 17.24 | 16.84 | 74.8 | 74.4 | Off flood-path (heuristic) |
| Kodoli | 16 | 179.5 | 17,537 | 16.8764 | 74.1909 | 17.08 | 16.68 | 74.39 | 73.99 | Off flood-path (heuristic) |
| Paranda | 16 | 179.8 | 18,758 | 18.2632 | 75.4632 | 18.46 | 18.06 | 75.66 | 75.26 | Downstream (heuristic - verify) |
| Khaira | 16 | 183.4 | 31,699 | 19.7867 | 72.7616 | 19.99 | 19.59 | 72.96 | 72.56 | Off flood-path (heuristic) |
| Ozar | 16 | 184.7 | 51,297 | 20.0947 | 73.9282 | 20.29 | 19.89 | 74.13 | 73.73 | Off flood-path (heuristic) |
| Boisar | 16 | 185.3 | 36,151 | 19.8036 | 72.7560 | 20.0 | 19.6 | 72.96 | 72.56 | Off flood-path (heuristic) |
| Pandharpur | 16 | 185.4 | 98,923 | 17.6792 | 75.3310 | 17.88 | 17.48 | 75.53 | 75.13 | Downstream (heuristic - verify) |
| Sāngola | 16 | 187.3 | 34,321 | 17.4395 | 75.1938 | 17.64 | 17.24 | 75.39 | 74.99 | Downstream (heuristic - verify) |
| Wadgaon | 16 | 187.5 | 25,651 | 16.8355 | 74.3134 | 17.04 | 16.64 | 74.51 | 74.11 | Off flood-path (heuristic) |
| Pasthal | 16 | 188.4 | 18,194 | 19.8202 | 72.7296 | 20.02 | 19.62 | 72.93 | 72.53 | Off flood-path (heuristic) |
| Gangāpur | 16 | 191.1 | 27,745 | 19.6972 | 75.0105 | 19.9 | 19.5 | 75.21 | 74.81 | Downstream (heuristic - verify) |
| Bhudgaon | 16 | 191.7 | 15,738 | 16.9074 | 74.5995 | 17.11 | 16.71 | 74.8 | 74.4 | Off flood-path (heuristic) |
| Vaijāpur | 16 | 193.5 | 41,296 | 19.9267 | 74.7275 | 20.13 | 19.73 | 74.93 | 74.53 | Off flood-path (heuristic) |
| Yeola | 16 | 193.5 | 49,826 | 20.0424 | 74.4894 | 20.24 | 19.84 | 74.69 | 74.29 | Off flood-path (heuristic) |
| Sāngli | 16 | 195.4 | 601,214 | 16.8544 | 74.5642 | 17.05 | 16.65 | 74.76 | 74.36 | Off flood-path (heuristic) |
| Lāsalgaon | 16 | 195.6 | 17,360 | 20.1427 | 74.2395 | 20.34 | 19.94 | 74.44 | 74.04 | Off flood-path (heuristic) |
| Bhoom | 16 | 199.2 | 18,561 | 18.4591 | 75.6588 | 18.66 | 18.26 | 75.86 | 75.46 | Downstream (heuristic - verify) |

## Temghar Dam (Maharashtra)
Dam coordinates: 18.55, 73.55

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Dehu Road | 16 | 24.1 | 48,961 | 18.6821 | 73.7316 | 18.88 | 18.48 | 73.93 | 73.53 | Downstream (heuristic - verify) |
| Talegaon Dābhāde | 16 | 24.5 | 56,435 | 18.7350 | 73.6756 | 18.94 | 18.54 | 73.88 | 73.48 | Off flood-path (heuristic) |
| Maval | 16 | 25.4 | 15,612 | 18.7553 | 73.4443 | 18.96 | 18.56 | 73.64 | 73.24 | Off flood-path (heuristic) |
| Kharakvasla | 16 | 26.7 | 78,684 | 18.4400 | 73.7755 | 18.64 | 18.24 | 73.98 | 73.58 | Downstream (heuristic - verify) |
| Lonavla | 16 | 27.2 | 58,562 | 18.7527 | 73.4057 | 18.95 | 18.55 | 73.61 | 73.21 | Off flood-path (heuristic) |
| Pimpri-Chinchwad | 16 | 27.8 | 1,727,692 | 18.6187 | 73.8037 | 18.82 | 18.42 | 74.0 | 73.6 | Downstream (heuristic - verify) |
| Pimpri | 16 | 28.3 | 1,284,606 | 18.6229 | 73.8070 | 18.82 | 18.42 | 74.01 | 73.61 | Downstream (heuristic - verify) |
| Khadki | 16 | 31.9 | 75,654 | 18.5635 | 73.8521 | 18.76 | 18.36 | 74.05 | 73.65 | Downstream (heuristic - verify) |
| Shivaji Nagar | 16 | 32.0 | 1,000,000 | 18.5302 | 73.8526 | 18.73 | 18.33 | 74.05 | 73.65 | Downstream (heuristic - verify) |
| Pune | 16 | 32.4 | 3,124,458 | 18.5196 | 73.8554 | 18.72 | 18.32 | 74.06 | 73.66 | Downstream (heuristic - verify) |
| Khopoli | 16 | 33.9 | 71,141 | 18.7856 | 73.3459 | 18.99 | 18.59 | 73.55 | 73.15 | Off flood-path (heuristic) |
| Alandi | 16 | 39.4 | 28,645 | 18.6776 | 73.8987 | 18.88 | 18.48 | 74.1 | 73.7 | Downstream (heuristic - verify) |
| Chākan | 16 | 40.5 | 41,113 | 18.7606 | 73.8635 | 18.96 | 18.56 | 74.06 | 73.66 | Downstream (heuristic - verify) |
| Indāpur | 16 | 42.1 | 26,752 | 18.3000 | 73.2500 | 18.5 | 18.1 | 73.45 | 73.05 | Off flood-path (heuristic) |
| Vagholi | 16 | 45.8 | 33,479 | 18.5823 | 73.9830 | 18.78 | 18.38 | 74.18 | 73.78 | Downstream (heuristic - verify) |
| Karjat | 16 | 46.7 | 34,554 | 18.9107 | 73.3235 | 19.11 | 18.71 | 73.52 | 73.12 | Off flood-path (heuristic) |
| Roha | 16 | 47.1 | 90,000 | 18.4369 | 73.1196 | 18.64 | 18.24 | 73.32 | 72.92 | Off flood-path (heuristic) |
| Rājgurunagar | 16 | 51.0 | 25,146 | 18.8667 | 73.9000 | 19.07 | 18.67 | 74.1 | 73.7 | Off flood-path (heuristic) |
| Pen | 16 | 52.2 | 37,852 | 18.7373 | 73.0960 | 18.94 | 18.54 | 73.3 | 72.9 | Off flood-path (heuristic) |
| Mahād | 16 | 53.8 | 27,536 | 18.0833 | 73.4167 | 18.28 | 17.88 | 73.62 | 73.22 | Off flood-path (heuristic) |
| Bhor | 16 | 54.3 | 18,982 | 18.1486 | 73.8434 | 18.35 | 17.95 | 74.04 | 73.64 | Downstream (heuristic - verify) |
| Koregaon | 16 | 54.7 | 25,846 | 18.6457 | 74.0591 | 18.85 | 18.45 | 74.26 | 73.86 | Downstream (heuristic - verify) |
| Sāsvad | 16 | 55.7 | 31,821 | 18.3435 | 74.0310 | 18.54 | 18.14 | 74.23 | 73.83 | Downstream (heuristic - verify) |
| Neral | 16 | 58.2 | 18,429 | 19.0248 | 73.3169 | 19.22 | 18.82 | 73.52 | 73.12 | Off flood-path (heuristic) |
| Manchar | 16 | 65.3 | 18,876 | 19.0044 | 73.9435 | 19.2 | 18.8 | 74.14 | 73.74 | Off flood-path (heuristic) |
| Panvel | 16 | 67.3 | 195,373 | 18.9888 | 73.1101 | 19.19 | 18.79 | 73.31 | 72.91 | Off flood-path (heuristic) |
| Kalamb | 16 | 69.6 | 27,287 | 19.0444 | 73.9555 | 19.24 | 18.84 | 74.16 | 73.76 | Off flood-path (heuristic) |
| Chanaje | 16 | 71.8 | 16,714 | 18.8613 | 72.9526 | 19.06 | 18.66 | 73.15 | 72.75 | Off flood-path (heuristic) |
| Alībāg | 16 | 71.9 | 20,752 | 18.6481 | 72.8758 | 18.85 | 18.45 | 73.08 | 72.68 | Off flood-path (heuristic) |
| Badlapur | 16 | 73.6 | 174,226 | 19.1552 | 73.2655 | 19.36 | 18.96 | 73.47 | 73.07 | Off flood-path (heuristic) |
| Uran | 16 | 74.0 | 30,439 | 18.8781 | 72.9392 | 19.08 | 18.68 | 73.14 | 72.74 | Off flood-path (heuristic) |
| Kharghar | 16 | 75.1 | 80,612 | 19.0498 | 73.0702 | 19.25 | 18.85 | 73.27 | 72.87 | Off flood-path (heuristic) |
| Wai | 16 | 75.5 | 36,025 | 17.9528 | 73.8906 | 18.15 | 17.75 | 74.09 | 73.69 | Off flood-path (heuristic) |
| Navi Mumbai | 16 | 78.1 | 2,600,000 | 19.0368 | 73.0158 | 19.24 | 18.84 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Srīvardhan | 16 | 79.5 | 15,279 | 18.0459 | 73.0155 | 18.25 | 17.85 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Shrivardhan | 16 | 80.1 | 15,123 | 18.0532 | 73.0011 | 18.25 | 17.85 | 73.2 | 72.8 | Off flood-path (heuristic) |
| Murbād | 16 | 80.1 | 18,725 | 19.2539 | 73.3899 | 19.45 | 19.05 | 73.59 | 73.19 | Off flood-path (heuristic) |
| Junnar | 16 | 80.8 | 25,997 | 19.2081 | 73.8752 | 19.41 | 19.01 | 74.08 | 73.68 | Off flood-path (heuristic) |
| Ambarnath | 16 | 82.8 | 253,475 | 19.2000 | 73.1667 | 19.4 | 19.0 | 73.37 | 72.97 | Off flood-path (heuristic) |
| Ulhasnagar | 16 | 85.2 | 516,584 | 19.2167 | 73.1500 | 19.42 | 19.02 | 73.35 | 72.95 | Off flood-path (heuristic) |
| Mharal Bk | 16 | 86.8 | 29,462 | 19.2459 | 73.1771 | 19.45 | 19.05 | 73.38 | 72.98 | Off flood-path (heuristic) |
| Lonand | 16 | 88.0 | 18,723 | 18.0404 | 74.1872 | 18.24 | 17.84 | 74.39 | 73.99 | Downstream (heuristic - verify) |
| Kalyān | 16 | 88.6 | 1,262,255 | 19.2437 | 73.1355 | 19.44 | 19.04 | 73.34 | 72.94 | Off flood-path (heuristic) |
| Airoli | 16 | 88.7 | 100,000 | 19.1510 | 72.9963 | 19.35 | 18.95 | 73.2 | 72.8 | Off flood-path (heuristic) |
| Dombivali | 16 | 88.9 | 1,247,327 | 19.2167 | 73.0833 | 19.42 | 19.02 | 73.28 | 72.88 | Off flood-path (heuristic) |
| Dhārāvi | 16 | 90.9 | 700,000 | 19.0500 | 72.8667 | 19.25 | 18.85 | 73.07 | 72.67 | Off flood-path (heuristic) |
| Mumbai | 16 | 91.2 | 12,691,836 | 19.0728 | 72.8826 | 19.27 | 18.87 | 73.08 | 72.68 | Off flood-path (heuristic) |
| Sirūr | 16 | 92.2 | 37,111 | 18.8276 | 74.3748 | 19.03 | 18.63 | 74.57 | 74.17 | Downstream (heuristic - verify) |
| Powai | 16 | 92.6 | 20,000 | 19.1164 | 72.9047 | 19.32 | 18.92 | 73.1 | 72.7 | Off flood-path (heuristic) |
| Khed | 16 | 93.8 | 16,892 | 17.7189 | 73.3969 | 17.92 | 17.52 | 73.6 | 73.2 | Off flood-path (heuristic) |
| Thāne | 16 | 94.8 | 1,841,488 | 19.1970 | 72.9635 | 19.4 | 19.0 | 73.16 | 72.76 | Off flood-path (heuristic) |
| Kalher | 16 | 95.8 | 15,573 | 19.2472 | 73.0152 | 19.45 | 19.05 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Dāpoli | 16 | 95.9 | 15,713 | 17.7593 | 73.1882 | 17.96 | 17.56 | 73.39 | 72.99 | Off flood-path (heuristic) |
| Bhiwandi | 16 | 98.1 | 874,032 | 19.3002 | 73.0588 | 19.5 | 19.1 | 73.26 | 72.86 | Off flood-path (heuristic) |
| Khoni | 16 | 99.7 | 26,016 | 19.3173 | 73.0597 | 19.52 | 19.12 | 73.26 | 72.86 | Off flood-path (heuristic) |
| Vasind | 16 | 100.1 | 20,561 | 19.4084 | 73.2629 | 19.61 | 19.21 | 73.46 | 73.06 | Off flood-path (heuristic) |
| Borivli | 16 | 105.2 | 609,617 | 19.2350 | 72.8598 | 19.43 | 19.03 | 73.06 | 72.66 | Off flood-path (heuristic) |
| Satara | 16 | 106.9 | 120,195 | 17.6859 | 73.9933 | 17.89 | 17.49 | 74.19 | 73.79 | Off flood-path (heuristic) |
| Godoli | 16 | 109.2 | 22,517 | 17.6718 | 74.0129 | 17.87 | 17.47 | 74.21 | 73.81 | Off flood-path (heuristic) |
| Daund | 16 | 109.4 | 49,450 | 18.4652 | 74.5837 | 18.67 | 18.27 | 74.78 | 74.38 | Downstream (heuristic - verify) |
| Kodoli | 16 | 110.4 | 26,106 | 17.6702 | 74.0347 | 17.87 | 17.47 | 74.23 | 73.83 | Off flood-path (heuristic) |
| Bhayandar | 16 | 111.3 | 809,378 | 19.3016 | 72.8511 | 19.5 | 19.1 | 73.05 | 72.65 | Off flood-path (heuristic) |
| Phaltan | 16 | 111.9 | 53,202 | 17.9911 | 74.4318 | 18.19 | 17.79 | 74.63 | 74.23 | Downstream (heuristic - verify) |
| Gorai | 16 | 112.1 | 29,107 | 19.2500 | 72.7833 | 19.45 | 19.05 | 72.98 | 72.58 | Off flood-path (heuristic) |
| Chiplūn | 16 | 113.1 | 55,139 | 17.5334 | 73.5093 | 17.73 | 17.33 | 73.71 | 73.31 | Off flood-path (heuristic) |
| Koregaon | 16 | 114.6 | 24,690 | 17.6991 | 74.1625 | 17.9 | 17.5 | 74.36 | 73.96 | Downstream (heuristic - verify) |
| Bārāmati | 16 | 117.2 | 54,415 | 18.1517 | 74.5777 | 18.35 | 17.95 | 74.78 | 74.38 | Downstream (heuristic - verify) |
| Jalochi | 16 | 119.8 | 19,346 | 18.1566 | 74.6071 | 18.36 | 17.96 | 74.81 | 74.41 | Downstream (heuristic - verify) |
| Shrīgonda | 16 | 121.3 | 31,134 | 18.6153 | 74.6989 | 18.82 | 18.42 | 74.9 | 74.5 | Downstream (heuristic - verify) |
| Kasāra | 16 | 122.0 | 15,611 | 19.6451 | 73.4743 | 19.85 | 19.45 | 73.67 | 73.27 | Off flood-path (heuristic) |
| Rahimatpur | 16 | 126.7 | 17,633 | 17.5921 | 74.1997 | 17.79 | 17.39 | 74.4 | 74.0 | Downstream (heuristic - verify) |
| Virār | 16 | 127.2 | 1,222,390 | 19.4559 | 72.8114 | 19.66 | 19.26 | 73.01 | 72.61 | Off flood-path (heuristic) |
| Igatpuri | 16 | 127.3 | 35,461 | 19.6952 | 73.5626 | 19.9 | 19.5 | 73.76 | 73.36 | Off flood-path (heuristic) |
| Vāda | 16 | 129.8 | 16,750 | 19.6535 | 73.1481 | 19.85 | 19.45 | 73.35 | 72.95 | Off flood-path (heuristic) |
| Koynanagar | 16 | 129.9 | 28,091 | 17.4000 | 73.7667 | 17.6 | 17.2 | 73.97 | 73.57 | Off flood-path (heuristic) |
| Ghoti Budrukh | 16 | 130.0 | 24,838 | 19.7164 | 73.6282 | 19.92 | 19.52 | 73.83 | 73.43 | Off flood-path (heuristic) |
| Sangamner | 16 | 132.8 | 67,309 | 19.5678 | 74.2115 | 19.77 | 19.37 | 74.41 | 74.01 | Off flood-path (heuristic) |
| Ārangaon | 16 | 133.6 | 29,591 | 19.0268 | 74.7149 | 19.23 | 18.83 | 74.91 | 74.51 | Downstream (heuristic - verify) |
| Ghulewadi | 16 | 135.2 | 21,860 | 19.6031 | 74.1936 | 19.8 | 19.4 | 74.39 | 73.99 | Off flood-path (heuristic) |
| Ahilyanagar | 16 | 139.0 | 367,140 | 19.0946 | 74.7384 | 19.29 | 18.89 | 74.94 | 74.54 | Downstream (heuristic - verify) |
| Nāteputa | 16 | 146.2 | 17,930 | 17.8989 | 74.7522 | 18.1 | 17.7 | 74.95 | 74.55 | Downstream (heuristic - verify) |
| Rāhuri | 16 | 148.7 | 38,813 | 19.3907 | 74.6498 | 19.59 | 19.19 | 74.85 | 74.45 | Downstream (heuristic - verify) |
| Sinnar | 16 | 151.5 | 65,299 | 19.8451 | 73.9987 | 20.05 | 19.65 | 74.2 | 73.8 | Off flood-path (heuristic) |
| Pālghar | 16 | 151.8 | 72,335 | 19.6969 | 72.7654 | 19.9 | 19.5 | 72.97 | 72.57 | Off flood-path (heuristic) |
| Deolali | 16 | 152.4 | 30,997 | 19.4739 | 74.6206 | 19.67 | 19.27 | 74.82 | 74.42 | Off flood-path (heuristic) |
| Karād | 16 | 155.3 | 55,663 | 17.2894 | 74.1818 | 17.49 | 17.09 | 74.38 | 73.98 | Off flood-path (heuristic) |
| Malkapur | 16 | 157.8 | 32,000 | 17.2621 | 74.1757 | 17.46 | 17.06 | 74.38 | 73.98 | Off flood-path (heuristic) |
| Deolāli | 16 | 157.9 | 54,027 | 19.9440 | 73.8344 | 20.14 | 19.74 | 74.03 | 73.63 | Off flood-path (heuristic) |
| Khaira | 16 | 160.5 | 31,699 | 19.7867 | 72.7616 | 19.99 | 19.59 | 72.96 | 72.56 | Off flood-path (heuristic) |
| Boisar | 16 | 162.4 | 36,151 | 19.8036 | 72.7560 | 20.0 | 19.6 | 72.96 | 72.56 | Off flood-path (heuristic) |
| Rahata | 16 | 162.5 | 22,335 | 19.7166 | 74.4811 | 19.92 | 19.52 | 74.68 | 74.28 | Off flood-path (heuristic) |
| Nashik | 16 | 162.9 | 1,486,053 | 19.9973 | 73.7910 | 20.2 | 19.8 | 73.99 | 73.59 | Off flood-path (heuristic) |
| Indāpur | 16 | 163.4 | 25,515 | 18.1153 | 75.0289 | 18.32 | 17.92 | 75.23 | 74.83 | Downstream (heuristic - verify) |
| Pasthal | 16 | 165.4 | 18,194 | 19.8202 | 72.7296 | 20.02 | 19.62 | 72.93 | 72.53 | Off flood-path (heuristic) |
| Mhaswad | 16 | 165.8 | 24,120 | 17.6336 | 74.7877 | 17.83 | 17.43 | 74.99 | 74.59 | Downstream (heuristic - verify) |
| Shrirampur | 16 | 166.6 | 89,282 | 19.6220 | 74.6570 | 19.82 | 19.42 | 74.86 | 74.46 | Off flood-path (heuristic) |
| Shirdi | 16 | 166.7 | 36,004 | 19.7662 | 74.4774 | 19.97 | 19.57 | 74.68 | 74.28 | Off flood-path (heuristic) |
| Aklūj | 16 | 171.7 | 39,972 | 17.8924 | 75.0214 | 18.09 | 17.69 | 75.22 | 74.82 | Downstream (heuristic - verify) |
| Karmāla | 16 | 174.1 | 23,199 | 18.4077 | 75.1939 | 18.61 | 18.21 | 75.39 | 74.99 | Downstream (heuristic - verify) |
| Ratnagiri | 16 | 175.1 | 76,229 | 16.9915 | 73.3102 | 17.19 | 16.79 | 73.51 | 73.11 | Off flood-path (heuristic) |
| Vite | 16 | 176.3 | 48,289 | 17.2734 | 74.5379 | 17.47 | 17.07 | 74.74 | 74.34 | Downstream (heuristic - verify) |
| Ozar | 16 | 176.3 | 51,297 | 20.0947 | 73.9282 | 20.29 | 19.89 | 74.13 | 73.73 | Off flood-path (heuristic) |
| Kopargaon | 16 | 177.2 | 65,273 | 19.8824 | 74.4761 | 20.08 | 19.68 | 74.68 | 74.28 | Off flood-path (heuristic) |
| Dāhānu | 16 | 180.5 | 50,287 | 19.9678 | 72.7126 | 20.17 | 19.77 | 72.91 | 72.51 | Off flood-path (heuristic) |
| Urun-Islāmpur | 16 | 183.2 | 67,391 | 17.0500 | 74.2667 | 17.25 | 16.85 | 74.47 | 74.07 | Off flood-path (heuristic) |
| Pāthardi | 16 | 184.4 | 27,211 | 19.1728 | 75.1743 | 19.37 | 18.97 | 75.37 | 74.97 | Downstream (heuristic - verify) |
| Jāmkhed | 16 | 186.9 | 34,017 | 18.7352 | 75.3134 | 18.94 | 18.54 | 75.51 | 75.11 | Downstream (heuristic - verify) |
| Shahuwadi | 16 | 187.1 | 180,322 | 16.9099 | 73.9465 | 17.11 | 16.71 | 74.15 | 73.75 | Off flood-path (heuristic) |
| Lāsalgaon | 16 | 191.3 | 17,360 | 20.1427 | 74.2395 | 20.34 | 19.94 | 74.44 | 74.04 | Off flood-path (heuristic) |
| Yeola | 16 | 193.0 | 49,826 | 20.0424 | 74.4894 | 20.24 | 19.84 | 74.69 | 74.29 | Off flood-path (heuristic) |
| Solsumba | 09 | 195.8 | 18,796 | 20.1575 | 72.7891 | 20.36 | 19.96 | 72.99 | 72.59 | Off flood-path (heuristic) |
| Vaijāpur | 16 | 196.8 | 41,296 | 19.9267 | 74.7275 | 20.13 | 19.73 | 74.93 | 74.53 | Off flood-path (heuristic) |
| Sanjan | 09 | 198.0 | 15,544 | 20.1916 | 72.8183 | 20.39 | 19.99 | 73.02 | 72.62 | Off flood-path (heuristic) |
| Kodoli | 16 | 198.1 | 17,537 | 16.8764 | 74.1909 | 17.08 | 16.68 | 74.39 | 73.99 | Off flood-path (heuristic) |
| Gangāpur | 16 | 199.5 | 27,745 | 19.6972 | 75.0105 | 19.9 | 19.5 | 75.21 | 74.81 | Downstream (heuristic - verify) |
| Ashta | 16 | 199.9 | 37,105 | 16.9494 | 74.4094 | 17.15 | 16.75 | 74.61 | 74.21 | Off flood-path (heuristic) |

## Hetwane Dam (Maharashtra)
Dam coordinates: 18.75, 73.2

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Pen | 16 | 11.0 | 37,852 | 18.7373 | 73.0960 | 18.94 | 18.54 | 73.3 | 72.9 | Downstream (heuristic - verify) |
| Khopoli | 16 | 15.9 | 71,141 | 18.7856 | 73.3459 | 18.99 | 18.59 | 73.55 | 73.15 | Off flood-path (heuristic) |
| Lonavla | 16 | 21.7 | 58,562 | 18.7527 | 73.4057 | 18.95 | 18.55 | 73.61 | 73.21 | Off flood-path (heuristic) |
| Karjat | 16 | 22.1 | 34,554 | 18.9107 | 73.3235 | 19.11 | 18.71 | 73.52 | 73.12 | Off flood-path (heuristic) |
| Maval | 16 | 25.7 | 15,612 | 18.7553 | 73.4443 | 18.96 | 18.56 | 73.64 | 73.24 | Off flood-path (heuristic) |
| Panvel | 16 | 28.2 | 195,373 | 18.9888 | 73.1101 | 19.19 | 18.79 | 73.31 | 72.91 | Off flood-path (heuristic) |
| Chanaje | 16 | 28.8 | 16,714 | 18.8613 | 72.9526 | 19.06 | 18.66 | 73.15 | 72.75 | Downstream (heuristic - verify) |
| Uran | 16 | 30.9 | 30,439 | 18.8781 | 72.9392 | 19.08 | 18.68 | 73.14 | 72.74 | Downstream (heuristic - verify) |
| Neral | 16 | 32.9 | 18,429 | 19.0248 | 73.3169 | 19.22 | 18.82 | 73.52 | 73.12 | Off flood-path (heuristic) |
| Roha | 16 | 35.8 | 90,000 | 18.4369 | 73.1196 | 18.64 | 18.24 | 73.32 | 72.92 | Off flood-path (heuristic) |
| Alībāg | 16 | 36.0 | 20,752 | 18.6481 | 72.8758 | 18.85 | 18.45 | 73.08 | 72.68 | Downstream (heuristic - verify) |
| Kharghar | 16 | 36.0 | 80,612 | 19.0498 | 73.0702 | 19.25 | 18.85 | 73.27 | 72.87 | Off flood-path (heuristic) |
| Navi Mumbai | 16 | 37.3 | 2,600,000 | 19.0368 | 73.0158 | 19.24 | 18.84 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Badlapur | 16 | 45.6 | 174,226 | 19.1552 | 73.2655 | 19.36 | 18.96 | 73.47 | 73.07 | Off flood-path (heuristic) |
| Dhārāvi | 16 | 48.4 | 700,000 | 19.0500 | 72.8667 | 19.25 | 18.85 | 73.07 | 72.67 | Off flood-path (heuristic) |
| Mumbai | 16 | 49.0 | 12,691,836 | 19.0728 | 72.8826 | 19.27 | 18.87 | 73.08 | 72.68 | Off flood-path (heuristic) |
| Airoli | 16 | 49.5 | 100,000 | 19.1510 | 72.9963 | 19.35 | 18.95 | 73.2 | 72.8 | Off flood-path (heuristic) |
| Talegaon Dābhāde | 16 | 50.1 | 56,435 | 18.7350 | 73.6756 | 18.94 | 18.54 | 73.88 | 73.48 | Off flood-path (heuristic) |
| Ambarnath | 16 | 50.2 | 253,475 | 19.2000 | 73.1667 | 19.4 | 19.0 | 73.37 | 72.97 | Off flood-path (heuristic) |
| Indāpur | 16 | 50.3 | 26,752 | 18.3000 | 73.2500 | 18.5 | 18.1 | 73.45 | 73.05 | Off flood-path (heuristic) |
| Powai | 16 | 51.2 | 20,000 | 19.1164 | 72.9047 | 19.32 | 18.92 | 73.1 | 72.7 | Off flood-path (heuristic) |
| Ulhasnagar | 16 | 52.2 | 516,584 | 19.2167 | 73.1500 | 19.42 | 19.02 | 73.35 | 72.95 | Off flood-path (heuristic) |
| Dombivali | 16 | 53.3 | 1,247,327 | 19.2167 | 73.0833 | 19.42 | 19.02 | 73.28 | 72.88 | Off flood-path (heuristic) |
| Mharal Bk | 16 | 55.2 | 29,462 | 19.2459 | 73.1771 | 19.45 | 19.05 | 73.38 | 72.98 | Off flood-path (heuristic) |
| Kalyān | 16 | 55.3 | 1,262,255 | 19.2437 | 73.1355 | 19.44 | 19.04 | 73.34 | 72.94 | Off flood-path (heuristic) |
| Thāne | 16 | 55.6 | 1,841,488 | 19.1970 | 72.9635 | 19.4 | 19.0 | 73.16 | 72.76 | Off flood-path (heuristic) |
| Dehu Road | 16 | 56.5 | 48,961 | 18.6821 | 73.7316 | 18.88 | 18.48 | 73.93 | 73.53 | Off flood-path (heuristic) |
| Kalher | 16 | 58.6 | 15,573 | 19.2472 | 73.0152 | 19.45 | 19.05 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Murbād | 16 | 59.5 | 18,725 | 19.2539 | 73.3899 | 19.45 | 19.05 | 73.59 | 73.19 | Off flood-path (heuristic) |
| Bhiwandi | 16 | 63.0 | 874,032 | 19.3002 | 73.0588 | 19.5 | 19.1 | 73.26 | 72.86 | Off flood-path (heuristic) |
| Borivli | 16 | 64.7 | 609,617 | 19.2350 | 72.8598 | 19.43 | 19.03 | 73.06 | 72.66 | Off flood-path (heuristic) |
| Khoni | 16 | 64.8 | 26,016 | 19.3173 | 73.0597 | 19.52 | 19.12 | 73.26 | 72.86 | Off flood-path (heuristic) |
| Pimpri-Chinchwad | 16 | 65.3 | 1,727,692 | 18.6187 | 73.8037 | 18.82 | 18.42 | 74.0 | 73.6 | Off flood-path (heuristic) |
| Pimpri | 16 | 65.5 | 1,284,606 | 18.6229 | 73.8070 | 18.82 | 18.42 | 74.01 | 73.61 | Off flood-path (heuristic) |
| Kharakvasla | 16 | 69.8 | 78,684 | 18.4400 | 73.7755 | 18.64 | 18.24 | 73.98 | 73.58 | Off flood-path (heuristic) |
| Chākan | 16 | 69.9 | 41,113 | 18.7606 | 73.8635 | 18.96 | 18.56 | 74.06 | 73.66 | Off flood-path (heuristic) |
| Gorai | 16 | 70.8 | 29,107 | 19.2500 | 72.7833 | 19.45 | 19.05 | 72.98 | 72.58 | Off flood-path (heuristic) |
| Bhayandar | 16 | 71.5 | 809,378 | 19.3016 | 72.8511 | 19.5 | 19.1 | 73.05 | 72.65 | Off flood-path (heuristic) |
| Khadki | 16 | 71.8 | 75,654 | 18.5635 | 73.8521 | 18.76 | 18.36 | 74.05 | 73.65 | Off flood-path (heuristic) |
| Shivaji Nagar | 16 | 73.0 | 1,000,000 | 18.5302 | 73.8526 | 18.73 | 18.33 | 74.05 | 73.65 | Off flood-path (heuristic) |
| Vasind | 16 | 73.5 | 20,561 | 19.4084 | 73.2629 | 19.61 | 19.21 | 73.46 | 73.06 | Off flood-path (heuristic) |
| Pune | 16 | 73.7 | 3,124,458 | 18.5196 | 73.8554 | 18.72 | 18.32 | 74.06 | 73.66 | Off flood-path (heuristic) |
| Alandi | 16 | 74.0 | 28,645 | 18.6776 | 73.8987 | 18.88 | 18.48 | 74.1 | 73.7 | Off flood-path (heuristic) |
| Rājgurunagar | 16 | 74.8 | 25,146 | 18.8667 | 73.9000 | 19.07 | 18.67 | 74.1 | 73.7 | Off flood-path (heuristic) |
| Mahād | 16 | 77.6 | 27,536 | 18.0833 | 73.4167 | 18.28 | 17.88 | 73.62 | 73.22 | Off flood-path (heuristic) |
| Shrivardhan | 16 | 80.3 | 15,123 | 18.0532 | 73.0011 | 18.25 | 17.85 | 73.2 | 72.8 | Off flood-path (heuristic) |
| Srīvardhan | 16 | 80.7 | 15,279 | 18.0459 | 73.0155 | 18.25 | 17.85 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Manchar | 16 | 83.2 | 18,876 | 19.0044 | 73.9435 | 19.2 | 18.8 | 74.14 | 73.74 | Off flood-path (heuristic) |
| Vagholi | 16 | 84.6 | 33,479 | 18.5823 | 73.9830 | 18.78 | 18.38 | 74.18 | 73.78 | Off flood-path (heuristic) |
| Kalamb | 16 | 86.0 | 27,287 | 19.0444 | 73.9555 | 19.24 | 18.84 | 74.16 | 73.76 | Off flood-path (heuristic) |
| Junnar | 16 | 87.4 | 25,997 | 19.2081 | 73.8752 | 19.41 | 19.01 | 74.08 | 73.68 | Off flood-path (heuristic) |
| Virār | 16 | 88.5 | 1,222,390 | 19.4559 | 72.8114 | 19.66 | 19.26 | 73.01 | 72.61 | Off flood-path (heuristic) |
| Koregaon | 16 | 91.2 | 25,846 | 18.6457 | 74.0591 | 18.85 | 18.45 | 74.26 | 73.86 | Off flood-path (heuristic) |
| Bhor | 16 | 95.3 | 18,982 | 18.1486 | 73.8434 | 18.35 | 17.95 | 74.04 | 73.64 | Off flood-path (heuristic) |
| Sāsvad | 16 | 98.6 | 31,821 | 18.3435 | 74.0310 | 18.54 | 18.14 | 74.23 | 73.83 | Off flood-path (heuristic) |
| Vāda | 16 | 100.6 | 16,750 | 19.6535 | 73.1481 | 19.85 | 19.45 | 73.35 | 72.95 | Off flood-path (heuristic) |
| Kasāra | 16 | 103.6 | 15,611 | 19.6451 | 73.4743 | 19.85 | 19.45 | 73.67 | 73.27 | Off flood-path (heuristic) |
| Dāpoli | 16 | 110.2 | 15,713 | 17.7593 | 73.1882 | 17.96 | 17.56 | 73.39 | 72.99 | Off flood-path (heuristic) |
| Igatpuri | 16 | 111.8 | 35,461 | 19.6952 | 73.5626 | 19.9 | 19.5 | 73.76 | 73.36 | Off flood-path (heuristic) |
| Pālghar | 16 | 114.8 | 72,335 | 19.6969 | 72.7654 | 19.9 | 19.5 | 72.97 | 72.57 | Off flood-path (heuristic) |
| Wai | 16 | 114.8 | 36,025 | 17.9528 | 73.8906 | 18.15 | 17.75 | 74.09 | 73.69 | Off flood-path (heuristic) |
| Ghoti Budrukh | 16 | 116.5 | 24,838 | 19.7164 | 73.6282 | 19.92 | 19.52 | 73.83 | 73.43 | Off flood-path (heuristic) |
| Khed | 16 | 116.5 | 16,892 | 17.7189 | 73.3969 | 17.92 | 17.52 | 73.6 | 73.2 | Off flood-path (heuristic) |
| Sirūr | 16 | 124.0 | 37,111 | 18.8276 | 74.3748 | 19.03 | 18.63 | 74.57 | 74.17 | Off flood-path (heuristic) |
| Khaira | 16 | 124.1 | 31,699 | 19.7867 | 72.7616 | 19.99 | 19.59 | 72.96 | 72.56 | Off flood-path (heuristic) |
| Boisar | 16 | 126.1 | 36,151 | 19.8036 | 72.7560 | 20.0 | 19.6 | 72.96 | 72.56 | Off flood-path (heuristic) |
| Pasthal | 16 | 128.8 | 18,194 | 19.8202 | 72.7296 | 20.02 | 19.62 | 72.93 | 72.53 | Off flood-path (heuristic) |
| Lonand | 16 | 130.7 | 18,723 | 18.0404 | 74.1872 | 18.24 | 17.84 | 74.39 | 73.99 | Off flood-path (heuristic) |
| Chiplūn | 16 | 139.2 | 55,139 | 17.5334 | 73.5093 | 17.73 | 17.33 | 73.71 | 73.31 | Off flood-path (heuristic) |
| Sangamner | 16 | 139.9 | 67,309 | 19.5678 | 74.2115 | 19.77 | 19.37 | 74.41 | 74.01 | Off flood-path (heuristic) |
| Ghulewadi | 16 | 141.0 | 21,860 | 19.6031 | 74.1936 | 19.8 | 19.4 | 74.39 | 73.99 | Off flood-path (heuristic) |
| Dāhānu | 16 | 144.7 | 50,287 | 19.9678 | 72.7126 | 20.17 | 19.77 | 72.91 | 72.51 | Off flood-path (heuristic) |
| Satara | 16 | 145.0 | 120,195 | 17.6859 | 73.9933 | 17.89 | 17.49 | 74.19 | 73.79 | Off flood-path (heuristic) |
| Godoli | 16 | 147.5 | 22,517 | 17.6718 | 74.0129 | 17.87 | 17.47 | 74.21 | 73.81 | Off flood-path (heuristic) |
| Sinnar | 16 | 147.8 | 65,299 | 19.8451 | 73.9987 | 20.05 | 19.65 | 74.2 | 73.8 | Off flood-path (heuristic) |
| Deolāli | 16 | 148.5 | 54,027 | 19.9440 | 73.8344 | 20.14 | 19.74 | 74.03 | 73.63 | Off flood-path (heuristic) |
| Kodoli | 16 | 149.0 | 26,106 | 17.6702 | 74.0347 | 17.87 | 17.47 | 74.23 | 73.83 | Off flood-path (heuristic) |
| Daund | 16 | 149.2 | 49,450 | 18.4652 | 74.5837 | 18.67 | 18.27 | 74.78 | 74.38 | Off flood-path (heuristic) |
| Nashik | 16 | 151.9 | 1,486,053 | 19.9973 | 73.7910 | 20.2 | 19.8 | 73.99 | 73.59 | Off flood-path (heuristic) |
| Koregaon | 16 | 154.9 | 24,690 | 17.6991 | 74.1625 | 17.9 | 17.5 | 74.36 | 73.96 | Off flood-path (heuristic) |
| Phaltan | 16 | 155.0 | 53,202 | 17.9911 | 74.4318 | 18.19 | 17.79 | 74.63 | 74.23 | Off flood-path (heuristic) |
| Shrīgonda | 16 | 158.6 | 31,134 | 18.6153 | 74.6989 | 18.82 | 18.42 | 74.9 | 74.5 | Off flood-path (heuristic) |
| Bārāmati | 16 | 159.8 | 54,415 | 18.1517 | 74.5777 | 18.35 | 17.95 | 74.78 | 74.38 | Off flood-path (heuristic) |
| Koynanagar | 16 | 161.6 | 28,091 | 17.4000 | 73.7667 | 17.6 | 17.2 | 73.97 | 73.57 | Off flood-path (heuristic) |
| Ārangaon | 16 | 162.3 | 29,591 | 19.0268 | 74.7149 | 19.23 | 18.83 | 74.91 | 74.51 | Off flood-path (heuristic) |
| Solsumba | 09 | 162.3 | 18,796 | 20.1575 | 72.7891 | 20.36 | 19.96 | 72.99 | 72.59 | Off flood-path (heuristic) |
| Jalochi | 16 | 162.4 | 19,346 | 18.1566 | 74.6071 | 18.36 | 17.96 | 74.81 | 74.41 | Off flood-path (heuristic) |
| Sanjan | 09 | 165.2 | 15,544 | 20.1916 | 72.8183 | 20.39 | 19.99 | 73.02 | 72.62 | Off flood-path (heuristic) |
| Ahilyanagar | 16 | 166.3 | 367,140 | 19.0946 | 74.7384 | 19.29 | 18.89 | 74.94 | 74.54 | Off flood-path (heuristic) |
| Rahimatpur | 16 | 166.5 | 17,633 | 17.5921 | 74.1997 | 17.79 | 17.39 | 74.4 | 74.0 | Off flood-path (heuristic) |
| Umargām | 09 | 167.7 | 27,859 | 20.1972 | 72.7503 | 20.4 | 20.0 | 72.95 | 72.55 | Off flood-path (heuristic) |
| Ozar | 16 | 167.9 | 51,297 | 20.0947 | 73.9282 | 20.29 | 19.89 | 74.13 | 73.73 | Off flood-path (heuristic) |
| Rāhuri | 16 | 168.2 | 38,813 | 19.3907 | 74.6498 | 19.59 | 19.19 | 74.85 | 74.45 | Off flood-path (heuristic) |
| Deolali | 16 | 169.6 | 30,997 | 19.4739 | 74.6206 | 19.67 | 19.27 | 74.82 | 74.42 | Off flood-path (heuristic) |
| Silvassa | 52 | 170.8 | 98,265 | 20.2739 | 72.9967 | 20.47 | 20.07 | 73.2 | 72.8 | Off flood-path (heuristic) |
| Naroli | 52 | 171.6 | 16,260 | 20.2735 | 72.9417 | 20.47 | 20.07 | 73.14 | 72.74 | Off flood-path (heuristic) |
| Āmli | 52 | 171.6 | 33,369 | 20.2833 | 73.0167 | 20.48 | 20.08 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Rahata | 16 | 172.2 | 22,335 | 19.7166 | 74.4811 | 19.92 | 19.52 | 74.68 | 74.28 | Off flood-path (heuristic) |
| Sarigam INA | 09 | 174.9 | 19,903 | 20.2885 | 72.8503 | 20.49 | 20.09 | 73.05 | 72.65 | Off flood-path (heuristic) |
| Shirdi | 16 | 175.3 | 36,004 | 19.7662 | 74.4774 | 19.97 | 19.57 | 74.68 | 74.28 | Off flood-path (heuristic) |
| Chanod | 09 | 179.8 | 18,776 | 20.3467 | 72.9283 | 20.55 | 20.15 | 73.13 | 72.73 | Off flood-path (heuristic) |
| Shrirampur | 16 | 181.1 | 89,282 | 19.6220 | 74.6570 | 19.82 | 19.42 | 74.86 | 74.46 | Off flood-path (heuristic) |
| Vapi INA | 09 | 181.2 | 34,162 | 20.3601 | 72.9311 | 20.56 | 20.16 | 73.13 | 72.73 | Off flood-path (heuristic) |
| Vapi | 09 | 183.0 | 163,630 | 20.3717 | 72.9049 | 20.57 | 20.17 | 73.1 | 72.7 | Off flood-path (heuristic) |
| Chhiri | 09 | 183.0 | 18,829 | 20.3778 | 72.9411 | 20.58 | 20.18 | 73.14 | 72.74 | Off flood-path (heuristic) |
| Kopargaon | 16 | 183.8 | 65,273 | 19.8824 | 74.4761 | 20.08 | 19.68 | 74.68 | 74.28 | Off flood-path (heuristic) |
| Khali Kachigam | 52 | 184.9 | 18,434 | 20.3833 | 72.8667 | 20.58 | 20.18 | 73.07 | 72.67 | Off flood-path (heuristic) |
| Dabhel | 52 | 187.5 | 52,578 | 20.4095 | 72.8834 | 20.61 | 20.21 | 73.08 | 72.68 | Off flood-path (heuristic) |
| Daman | 52 | 189.0 | 44,282 | 20.4143 | 72.8324 | 20.61 | 20.21 | 73.03 | 72.63 | Off flood-path (heuristic) |
| Nani Daman | 52 | 189.0 | 62,000 | 20.4143 | 72.8324 | 20.61 | 20.21 | 73.03 | 72.63 | Off flood-path (heuristic) |
| Nāteputa | 16 | 189.2 | 17,930 | 17.8989 | 74.7522 | 18.1 | 17.7 | 74.95 | 74.55 | Off flood-path (heuristic) |
| Lāsalgaon | 16 | 189.4 | 17,360 | 20.1427 | 74.2395 | 20.34 | 19.94 | 74.44 | 74.04 | Off flood-path (heuristic) |
| Karād | 16 | 192.8 | 55,663 | 17.2894 | 74.1818 | 17.49 | 17.09 | 74.38 | 73.98 | Off flood-path (heuristic) |
| Malkapur | 16 | 195.0 | 32,000 | 17.2621 | 74.1757 | 17.46 | 17.06 | 74.38 | 73.98 | Off flood-path (heuristic) |
| Ratnagiri | 16 | 195.9 | 76,229 | 16.9915 | 73.3102 | 17.19 | 16.79 | 73.51 | 73.11 | Off flood-path (heuristic) |
| Yeola | 16 | 197.3 | 49,826 | 20.0424 | 74.4894 | 20.24 | 19.84 | 74.69 | 74.29 | Off flood-path (heuristic) |
| Pārdi | 09 | 197.4 | 28,495 | 20.5087 | 72.9457 | 20.71 | 20.31 | 73.15 | 72.75 | Off flood-path (heuristic) |
| Dharampur | 09 | 198.7 | 24,178 | 20.5369 | 73.1737 | 20.74 | 20.34 | 73.37 | 72.97 | Off flood-path (heuristic) |

## Kolkewadi Dam (Maharashtra)
Dam coordinates: 17.58, 73.55

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Chiplūn | 16 | 6.7 | 55,139 | 17.5334 | 73.5093 | 17.73 | 17.33 | 73.71 | 73.31 | Downstream (heuristic - verify) |
| Khed | 16 | 22.4 | 16,892 | 17.7189 | 73.3969 | 17.92 | 17.52 | 73.6 | 73.2 | Off flood-path (heuristic) |
| Koynanagar | 16 | 30.5 | 28,091 | 17.4000 | 73.7667 | 17.6 | 17.2 | 73.97 | 73.57 | Off flood-path (heuristic) |
| Dāpoli | 16 | 43.2 | 15,713 | 17.7593 | 73.1882 | 17.96 | 17.56 | 73.39 | 72.99 | Downstream (heuristic - verify) |
| Satara | 16 | 48.4 | 120,195 | 17.6859 | 73.9933 | 17.89 | 17.49 | 74.19 | 73.79 | Off flood-path (heuristic) |
| Godoli | 16 | 50.1 | 22,517 | 17.6718 | 74.0129 | 17.87 | 17.47 | 74.21 | 73.81 | Off flood-path (heuristic) |
| Kodoli | 16 | 52.3 | 26,106 | 17.6702 | 74.0347 | 17.87 | 17.47 | 74.23 | 73.83 | Off flood-path (heuristic) |
| Wai | 16 | 54.9 | 36,025 | 17.9528 | 73.8906 | 18.15 | 17.75 | 74.09 | 73.69 | Off flood-path (heuristic) |
| Mahād | 16 | 57.7 | 27,536 | 18.0833 | 73.4167 | 18.28 | 17.88 | 73.62 | 73.22 | Off flood-path (heuristic) |
| Koregaon | 16 | 66.2 | 24,690 | 17.6991 | 74.1625 | 17.9 | 17.5 | 74.36 | 73.96 | Off flood-path (heuristic) |
| Rahimatpur | 16 | 68.9 | 17,633 | 17.5921 | 74.1997 | 17.79 | 17.39 | 74.4 | 74.0 | Off flood-path (heuristic) |
| Ratnagiri | 16 | 70.2 | 76,229 | 16.9915 | 73.3102 | 17.19 | 16.79 | 73.51 | 73.11 | Off flood-path (heuristic) |
| Bhor | 16 | 70.4 | 18,982 | 18.1486 | 73.8434 | 18.35 | 17.95 | 74.04 | 73.64 | Off flood-path (heuristic) |
| Karād | 16 | 74.4 | 55,663 | 17.2894 | 74.1818 | 17.49 | 17.09 | 74.38 | 73.98 | Off flood-path (heuristic) |
| Malkapur | 16 | 75.2 | 32,000 | 17.2621 | 74.1757 | 17.46 | 17.06 | 74.38 | 73.98 | Off flood-path (heuristic) |
| Srīvardhan | 16 | 76.7 | 15,279 | 18.0459 | 73.0155 | 18.25 | 17.85 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Shrivardhan | 16 | 78.4 | 15,123 | 18.0532 | 73.0011 | 18.25 | 17.85 | 73.2 | 72.8 | Off flood-path (heuristic) |
| Lonand | 16 | 84.7 | 18,723 | 18.0404 | 74.1872 | 18.24 | 17.84 | 74.39 | 73.99 | Off flood-path (heuristic) |
| Shahuwadi | 16 | 85.6 | 180,322 | 16.9099 | 73.9465 | 17.11 | 16.71 | 74.15 | 73.75 | Off flood-path (heuristic) |
| Indāpur | 16 | 86.1 | 26,752 | 18.3000 | 73.2500 | 18.5 | 18.1 | 73.45 | 73.05 | Off flood-path (heuristic) |
| Urun-Islāmpur | 16 | 96.2 | 67,391 | 17.0500 | 74.2667 | 17.25 | 16.85 | 74.47 | 74.07 | Off flood-path (heuristic) |
| Kharakvasla | 16 | 98.6 | 78,684 | 18.4400 | 73.7755 | 18.64 | 18.24 | 73.98 | 73.58 | Off flood-path (heuristic) |
| Sāsvad | 16 | 99.0 | 31,821 | 18.3435 | 74.0310 | 18.54 | 18.14 | 74.23 | 73.83 | Off flood-path (heuristic) |
| Kodoli | 16 | 103.7 | 17,537 | 16.8764 | 74.1909 | 17.08 | 16.68 | 74.39 | 73.99 | Off flood-path (heuristic) |
| Phaltan | 16 | 104.0 | 53,202 | 17.9911 | 74.4318 | 18.19 | 17.79 | 74.63 | 74.23 | Off flood-path (heuristic) |
| Roha | 16 | 105.6 | 90,000 | 18.4369 | 73.1196 | 18.64 | 18.24 | 73.32 | 72.92 | Off flood-path (heuristic) |
| Pune | 16 | 109.3 | 3,124,458 | 18.5196 | 73.8554 | 18.72 | 18.32 | 74.06 | 73.66 | Off flood-path (heuristic) |
| Vite | 16 | 110.2 | 48,289 | 17.2734 | 74.5379 | 17.47 | 17.07 | 74.74 | 74.34 | Off flood-path (heuristic) |
| Shivaji Nagar | 16 | 110.4 | 1,000,000 | 18.5302 | 73.8526 | 18.73 | 18.33 | 74.05 | 73.65 | Off flood-path (heuristic) |
| Khadki | 16 | 113.9 | 75,654 | 18.5635 | 73.8521 | 18.76 | 18.36 | 74.05 | 73.65 | Off flood-path (heuristic) |
| Ashta | 16 | 115.1 | 37,105 | 16.9494 | 74.4094 | 17.15 | 16.75 | 74.61 | 74.21 | Off flood-path (heuristic) |
| Wadgaon | 16 | 115.9 | 25,651 | 16.8355 | 74.3134 | 17.04 | 16.64 | 74.51 | 74.11 | Off flood-path (heuristic) |
| Pimpri-Chinchwad | 16 | 118.6 | 1,727,692 | 18.6187 | 73.8037 | 18.82 | 18.42 | 74.0 | 73.6 | Off flood-path (heuristic) |
| Pimpri | 16 | 119.1 | 1,284,606 | 18.6229 | 73.8070 | 18.82 | 18.42 | 74.01 | 73.61 | Off flood-path (heuristic) |
| Vagholi | 16 | 120.5 | 33,479 | 18.5823 | 73.9830 | 18.78 | 18.38 | 74.18 | 73.78 | Off flood-path (heuristic) |
| Kolhāpur | 16 | 122.1 | 549,236 | 16.6956 | 74.2317 | 16.9 | 16.5 | 74.43 | 74.03 | Off flood-path (heuristic) |
| Dehu Road | 16 | 124.0 | 48,961 | 18.6821 | 73.7316 | 18.88 | 18.48 | 73.93 | 73.53 | Off flood-path (heuristic) |
| Unchagao | 16 | 124.6 | 31,238 | 16.6975 | 74.2733 | 16.9 | 16.5 | 74.47 | 74.07 | Off flood-path (heuristic) |
| Pachgaon | 16 | 125.1 | 22,353 | 16.6602 | 74.2274 | 16.86 | 16.46 | 74.43 | 74.03 | Off flood-path (heuristic) |
| Bārāmati | 16 | 126.0 | 54,415 | 18.1517 | 74.5777 | 18.35 | 17.95 | 74.78 | 74.38 | Off flood-path (heuristic) |
| Tāsgaon | 16 | 126.9 | 37,945 | 17.0370 | 74.6017 | 17.24 | 16.84 | 74.8 | 74.4 | Off flood-path (heuristic) |
| Alandi | 16 | 127.5 | 28,645 | 18.6776 | 73.8987 | 18.88 | 18.48 | 74.1 | 73.7 | Off flood-path (heuristic) |
| Jalochi | 16 | 128.9 | 19,346 | 18.1566 | 74.6071 | 18.36 | 17.96 | 74.81 | 74.41 | Off flood-path (heuristic) |
| Talegaon Dābhāde | 16 | 129.1 | 56,435 | 18.7350 | 73.6756 | 18.94 | 18.54 | 73.88 | 73.48 | Off flood-path (heuristic) |
| Koregaon | 16 | 130.1 | 25,846 | 18.6457 | 74.0591 | 18.85 | 18.45 | 74.26 | 73.86 | Off flood-path (heuristic) |
| Maval | 16 | 131.2 | 15,612 | 18.7553 | 73.4443 | 18.96 | 18.56 | 73.64 | 73.24 | Off flood-path (heuristic) |
| Lonavla | 16 | 131.3 | 58,562 | 18.7527 | 73.4057 | 18.95 | 18.55 | 73.61 | 73.21 | Off flood-path (heuristic) |
| Mhaswad | 16 | 131.3 | 24,120 | 17.6336 | 74.7877 | 17.83 | 17.43 | 74.99 | 74.59 | Off flood-path (heuristic) |
| Nāteputa | 16 | 132.2 | 17,930 | 17.8989 | 74.7522 | 18.1 | 17.7 | 74.95 | 74.55 | Off flood-path (heuristic) |
| Bhudgaon | 16 | 134.2 | 15,738 | 16.9074 | 74.5995 | 17.11 | 16.71 | 74.8 | 74.4 | Off flood-path (heuristic) |
| Sāngli | 16 | 134.6 | 601,214 | 16.8544 | 74.5642 | 17.05 | 16.65 | 74.76 | 74.36 | Off flood-path (heuristic) |
| Korochi | 16 | 134.9 | 20,420 | 16.7192 | 74.4451 | 16.92 | 16.52 | 74.65 | 74.25 | Off flood-path (heuristic) |
| Chākan | 16 | 135.4 | 41,113 | 18.7606 | 73.8635 | 18.96 | 18.56 | 74.06 | 73.66 | Off flood-path (heuristic) |
| Khopoli | 16 | 135.8 | 71,141 | 18.7856 | 73.3459 | 18.99 | 18.59 | 73.55 | 73.15 | Off flood-path (heuristic) |
| Kabnur | 16 | 135.9 | 38,146 | 16.7017 | 74.4395 | 16.9 | 16.5 | 74.64 | 74.24 | Off flood-path (heuristic) |
| Pen | 16 | 137.3 | 37,852 | 18.7373 | 73.0960 | 18.94 | 18.54 | 73.3 | 72.9 | Off flood-path (heuristic) |
| Kāgal | 16 | 138.0 | 34,106 | 16.5770 | 74.3154 | 16.78 | 16.38 | 74.52 | 74.12 | Off flood-path (heuristic) |
| Ichalkaranji | 16 | 138.3 | 287,353 | 16.6912 | 74.4605 | 16.89 | 16.49 | 74.66 | 74.26 | Off flood-path (heuristic) |
| Alībāg | 16 | 138.5 | 20,752 | 18.6481 | 72.8758 | 18.85 | 18.45 | 73.08 | 72.68 | Off flood-path (heuristic) |
| Jaisingpur | 16 | 139.1 | 48,510 | 16.7764 | 74.5536 | 16.98 | 16.58 | 74.75 | 74.35 | Off flood-path (heuristic) |
| Hupari | 16 | 140.4 | 28,953 | 16.6167 | 74.4044 | 16.82 | 16.42 | 74.6 | 74.2 | Off flood-path (heuristic) |
| Daund | 16 | 147.1 | 49,450 | 18.4652 | 74.5837 | 18.67 | 18.27 | 74.78 | 74.38 | Off flood-path (heuristic) |
| Kankauli | 16 | 147.1 | 16,398 | 16.2661 | 73.7122 | 16.47 | 16.07 | 73.91 | 73.51 | Off flood-path (heuristic) |
| Rājgurunagar | 16 | 147.8 | 25,146 | 18.8667 | 73.9000 | 19.07 | 18.67 | 74.1 | 73.7 | Off flood-path (heuristic) |
| Kurandvād | 16 | 148.8 | 22,372 | 16.6832 | 74.5889 | 16.88 | 16.48 | 74.79 | 74.39 | Off flood-path (heuristic) |
| Karjat | 16 | 149.9 | 34,554 | 18.9107 | 73.3235 | 19.11 | 18.71 | 73.52 | 73.12 | Off flood-path (heuristic) |
| Sadalgi | 19 | 154.3 | 23,790 | 16.5587 | 74.5321 | 16.76 | 16.36 | 74.73 | 74.33 | Off flood-path (heuristic) |
| Chanaje | 16 | 155.8 | 16,714 | 18.8613 | 72.9526 | 19.06 | 18.66 | 73.15 | 72.75 | Off flood-path (heuristic) |
| Uran | 16 | 158.1 | 30,439 | 18.8781 | 72.9392 | 19.08 | 18.68 | 73.14 | 72.74 | Off flood-path (heuristic) |
| Nipāni | 16 | 158.4 | 62,865 | 16.3990 | 74.3829 | 16.6 | 16.2 | 74.58 | 74.18 | Off flood-path (heuristic) |
| Aklūj | 16 | 159.7 | 39,972 | 17.8924 | 75.0214 | 18.09 | 17.69 | 75.22 | 74.82 | Off flood-path (heuristic) |
| Neral | 16 | 162.5 | 18,429 | 19.0248 | 73.3169 | 19.22 | 18.82 | 73.52 | 73.12 | Off flood-path (heuristic) |
| Shiraguppi | 16 | 163.1 | 25,000 | 16.6187 | 74.7091 | 16.82 | 16.42 | 74.91 | 74.51 | Off flood-path (heuristic) |
| Panvel | 16 | 163.4 | 195,373 | 18.9888 | 73.1101 | 19.19 | 18.79 | 73.31 | 72.91 | Off flood-path (heuristic) |
| Manchar | 16 | 163.7 | 18,876 | 19.0044 | 73.9435 | 19.2 | 18.8 | 74.14 | 73.74 | Off flood-path (heuristic) |
| Sirūr | 16 | 163.8 | 37,111 | 18.8276 | 74.3748 | 19.03 | 18.63 | 74.57 | 74.17 | Off flood-path (heuristic) |
| Shrīgonda | 16 | 167.3 | 31,134 | 18.6153 | 74.6989 | 18.82 | 18.42 | 74.9 | 74.5 | Off flood-path (heuristic) |
| Indāpur | 16 | 167.5 | 25,515 | 18.1153 | 75.0289 | 18.32 | 17.92 | 75.23 | 74.83 | Off flood-path (heuristic) |
| Kalamb | 16 | 168.4 | 27,287 | 19.0444 | 73.9555 | 19.24 | 18.84 | 74.16 | 73.76 | Off flood-path (heuristic) |
| Chikodi | 19 | 168.9 | 38,307 | 16.4290 | 74.5859 | 16.63 | 16.23 | 74.79 | 74.39 | Off flood-path (heuristic) |
| Mālvan | 16 | 169.3 | 18,858 | 16.0598 | 73.4629 | 16.26 | 15.86 | 73.66 | 73.26 | Off flood-path (heuristic) |
| Kharghar | 16 | 171.1 | 80,612 | 19.0498 | 73.0702 | 19.25 | 18.85 | 73.27 | 72.87 | Off flood-path (heuristic) |
| Navi Mumbai | 16 | 171.5 | 2,600,000 | 19.0368 | 73.0158 | 19.24 | 18.84 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Gadhinglaj | 16 | 173.3 | 27,185 | 16.2229 | 74.3501 | 16.42 | 16.02 | 74.55 | 74.15 | Off flood-path (heuristic) |
| Kudachi | 19 | 174.4 | 23,154 | 16.6278 | 74.8541 | 16.83 | 16.43 | 75.05 | 74.65 | Off flood-path (heuristic) |
| Sāngola | 16 | 175.0 | 34,321 | 17.4395 | 75.1938 | 17.64 | 17.24 | 75.39 | 74.99 | Off flood-path (heuristic) |
| Kudāl | 16 | 175.0 | 16,015 | 16.0115 | 73.6887 | 16.21 | 15.81 | 73.89 | 73.49 | Off flood-path (heuristic) |
| Ajara | 16 | 177.3 | 17,257 | 16.1160 | 74.2110 | 16.32 | 15.92 | 74.41 | 74.01 | Off flood-path (heuristic) |
| Sankeshwar | 19 | 177.4 | 34,637 | 16.2565 | 74.4819 | 16.46 | 16.06 | 74.68 | 74.28 | Off flood-path (heuristic) |
| Raybag | 19 | 177.7 | 18,736 | 16.4918 | 74.7739 | 16.69 | 16.29 | 74.97 | 74.57 | Off flood-path (heuristic) |
| Badlapur | 16 | 177.7 | 174,226 | 19.1552 | 73.2655 | 19.36 | 18.96 | 73.47 | 73.07 | Off flood-path (heuristic) |
| Dhārāvi | 16 | 178.7 | 700,000 | 19.0500 | 72.8667 | 19.25 | 18.85 | 73.07 | 72.67 | Off flood-path (heuristic) |
| Mumbai | 16 | 180.3 | 12,691,836 | 19.0728 | 72.8826 | 19.27 | 18.87 | 73.08 | 72.68 | Off flood-path (heuristic) |
| Powai | 16 | 183.9 | 20,000 | 19.1164 | 72.9047 | 19.32 | 18.92 | 73.1 | 72.7 | Off flood-path (heuristic) |
| Airoli | 16 | 184.2 | 100,000 | 19.1510 | 72.9963 | 19.35 | 18.95 | 73.2 | 72.8 | Off flood-path (heuristic) |
| Junnar | 16 | 184.3 | 25,997 | 19.2081 | 73.8752 | 19.41 | 19.01 | 74.08 | 73.68 | Off flood-path (heuristic) |
| Ambarnath | 16 | 184.6 | 253,475 | 19.2000 | 73.1667 | 19.4 | 19.0 | 73.37 | 72.97 | Off flood-path (heuristic) |
| Athani | 19 | 186.8 | 47,842 | 16.7261 | 75.0642 | 16.93 | 16.53 | 75.26 | 74.86 | Off flood-path (heuristic) |
| Ulhasnagar | 16 | 186.8 | 516,584 | 19.2167 | 73.1500 | 19.42 | 19.02 | 73.35 | 72.95 | Off flood-path (heuristic) |
| Murbād | 16 | 186.9 | 18,725 | 19.2539 | 73.3899 | 19.45 | 19.05 | 73.59 | 73.19 | Off flood-path (heuristic) |
| Hukeri | 19 | 187.2 | 22,988 | 16.2308 | 74.6024 | 16.43 | 16.03 | 74.8 | 74.4 | Off flood-path (heuristic) |
| Dombivali | 16 | 188.5 | 1,247,327 | 19.2167 | 73.0833 | 19.42 | 19.02 | 73.28 | 72.88 | Off flood-path (heuristic) |
| Sāvantvādi | 16 | 188.6 | 23,851 | 15.9041 | 73.8219 | 16.1 | 15.7 | 74.02 | 73.62 | Off flood-path (heuristic) |
| Pandharpur | 16 | 189.1 | 98,923 | 17.6792 | 75.3310 | 17.88 | 17.48 | 75.53 | 75.13 | Off flood-path (heuristic) |
| Mharal Bk | 16 | 189.4 | 29,462 | 19.2459 | 73.1771 | 19.45 | 19.05 | 73.38 | 72.98 | Off flood-path (heuristic) |
| Kalyān | 16 | 190.1 | 1,262,255 | 19.2437 | 73.1355 | 19.44 | 19.04 | 73.34 | 72.94 | Off flood-path (heuristic) |
| Thāne | 16 | 190.2 | 1,841,488 | 19.1970 | 72.9635 | 19.4 | 19.0 | 73.16 | 72.76 | Off flood-path (heuristic) |
| Kalher | 16 | 193.8 | 15,573 | 19.2472 | 73.0152 | 19.45 | 19.05 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Karmāla | 16 | 196.7 | 23,199 | 18.4077 | 75.1939 | 18.61 | 18.21 | 75.39 | 74.99 | Off flood-path (heuristic) |
| Borivli | 16 | 197.9 | 609,617 | 19.2350 | 72.8598 | 19.43 | 19.03 | 73.06 | 72.66 | Off flood-path (heuristic) |
| Bhiwandi | 16 | 198.2 | 874,032 | 19.3002 | 73.0588 | 19.5 | 19.1 | 73.26 | 72.86 | Off flood-path (heuristic) |
| Konnūr | 19 | 199.4 | 19,386 | 16.2014 | 74.7489 | 16.4 | 16.0 | 74.95 | 74.55 | Off flood-path (heuristic) |
| Terdāl | 19 | 199.8 | 26,411 | 16.4938 | 75.0467 | 16.69 | 16.29 | 75.25 | 74.85 | Off flood-path (heuristic) |
| Khoni | 16 | 200.0 | 26,016 | 19.3173 | 73.0597 | 19.52 | 19.12 | 73.26 | 72.86 | Off flood-path (heuristic) |

## Dudhaganga Dam (Maharashtra)
Dam coordinates: 16.35, 74.05

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Ajara | 16 | 31.2 | 17,257 | 16.1160 | 74.2110 | 16.32 | 15.92 | 74.41 | 74.01 | Downstream (heuristic - verify) |
| Gadhinglaj | 16 | 35.0 | 27,185 | 16.2229 | 74.3501 | 16.42 | 16.02 | 74.55 | 74.15 | Downstream (heuristic - verify) |
| Nipāni | 16 | 35.9 | 62,865 | 16.3990 | 74.3829 | 16.6 | 16.2 | 74.58 | 74.18 | Downstream (heuristic - verify) |
| Kankauli | 16 | 37.2 | 16,398 | 16.2661 | 73.7122 | 16.47 | 16.07 | 73.91 | 73.51 | Off flood-path (heuristic) |
| Kāgal | 16 | 37.9 | 34,106 | 16.5770 | 74.3154 | 16.78 | 16.38 | 74.52 | 74.12 | Off flood-path (heuristic) |
| Pachgaon | 16 | 39.3 | 22,353 | 16.6602 | 74.2274 | 16.86 | 16.46 | 74.43 | 74.03 | Off flood-path (heuristic) |
| Kolhāpur | 16 | 43.0 | 549,236 | 16.6956 | 74.2317 | 16.9 | 16.5 | 74.43 | 74.03 | Off flood-path (heuristic) |
| Unchagao | 16 | 45.4 | 31,238 | 16.6975 | 74.2733 | 16.9 | 16.5 | 74.47 | 74.07 | Off flood-path (heuristic) |
| Sankeshwar | 19 | 47.3 | 34,637 | 16.2565 | 74.4819 | 16.46 | 16.06 | 74.68 | 74.28 | Downstream (heuristic - verify) |
| Hupari | 16 | 48.0 | 28,953 | 16.6167 | 74.4044 | 16.82 | 16.42 | 74.6 | 74.2 | Off flood-path (heuristic) |
| Kudāl | 16 | 53.9 | 16,015 | 16.0115 | 73.6887 | 16.21 | 15.81 | 73.89 | 73.49 | Off flood-path (heuristic) |
| Sāvantvādi | 16 | 55.2 | 23,851 | 15.9041 | 73.8219 | 16.1 | 15.7 | 74.02 | 73.62 | Off flood-path (heuristic) |
| Sadalgi | 19 | 56.4 | 23,790 | 16.5587 | 74.5321 | 16.76 | 16.36 | 74.73 | 74.33 | Off flood-path (heuristic) |
| Kabnur | 16 | 57.0 | 38,146 | 16.7017 | 74.4395 | 16.9 | 16.5 | 74.64 | 74.24 | Off flood-path (heuristic) |
| Chikodi | 19 | 57.8 | 38,307 | 16.4290 | 74.5859 | 16.63 | 16.23 | 74.79 | 74.39 | Downstream (heuristic - verify) |
| Ichalkaranji | 16 | 57.9 | 287,353 | 16.6912 | 74.4605 | 16.89 | 16.49 | 74.66 | 74.26 | Off flood-path (heuristic) |
| Korochi | 16 | 58.8 | 20,420 | 16.7192 | 74.4451 | 16.92 | 16.52 | 74.65 | 74.25 | Off flood-path (heuristic) |
| Kodoli | 16 | 60.4 | 17,537 | 16.8764 | 74.1909 | 17.08 | 16.68 | 74.39 | 73.99 | Off flood-path (heuristic) |
| Hukeri | 19 | 60.4 | 22,988 | 16.2308 | 74.6024 | 16.43 | 16.03 | 74.8 | 74.4 | Downstream (heuristic - verify) |
| Wadgaon | 16 | 60.8 | 25,651 | 16.8355 | 74.3134 | 17.04 | 16.64 | 74.51 | 74.11 | Off flood-path (heuristic) |
| Shahuwadi | 16 | 63.2 | 180,322 | 16.9099 | 73.9465 | 17.11 | 16.71 | 74.15 | 73.75 | Off flood-path (heuristic) |
| Kurandvād | 16 | 68.4 | 22,372 | 16.6832 | 74.5889 | 16.88 | 16.48 | 74.79 | 74.39 | Off flood-path (heuristic) |
| Mālvan | 16 | 70.5 | 18,858 | 16.0598 | 73.4629 | 16.26 | 15.86 | 73.66 | 73.26 | Off flood-path (heuristic) |
| Jaisingpur | 16 | 71.6 | 48,510 | 16.7764 | 74.5536 | 16.98 | 16.58 | 74.75 | 74.35 | Off flood-path (heuristic) |
| Belagavi | 19 | 73.6 | 490,045 | 15.8521 | 74.5045 | 16.05 | 15.65 | 74.7 | 74.3 | Downstream (heuristic - verify) |
| Piranvādi | 19 | 76.3 | 17,874 | 15.8020 | 74.4801 | 16.0 | 15.6 | 74.68 | 74.28 | Downstream (heuristic - verify) |
| Shiraguppi | 16 | 76.4 | 25,000 | 16.6187 | 74.7091 | 16.82 | 16.42 | 74.91 | 74.51 | Off flood-path (heuristic) |
| Konnūr | 19 | 76.4 | 19,386 | 16.2014 | 74.7489 | 16.4 | 16.0 | 74.95 | 74.55 | Downstream (heuristic - verify) |
| Ashta | 16 | 76.9 | 37,105 | 16.9494 | 74.4094 | 17.15 | 16.75 | 74.61 | 74.21 | Off flood-path (heuristic) |
| Māchai | 19 | 77.4 | 18,073 | 15.7926 | 74.4841 | 15.99 | 15.59 | 74.68 | 74.28 | Downstream (heuristic - verify) |
| Sāngli | 16 | 78.4 | 601,214 | 16.8544 | 74.5642 | 17.05 | 16.65 | 74.76 | 74.36 | Off flood-path (heuristic) |
| Raybag | 19 | 78.8 | 18,736 | 16.4918 | 74.7739 | 16.69 | 16.29 | 74.97 | 74.57 | Downstream (heuristic - verify) |
| Urun-Islāmpur | 16 | 81.2 | 67,391 | 17.0500 | 74.2667 | 17.25 | 16.85 | 74.47 | 74.07 | Off flood-path (heuristic) |
| Bicholim | 33 | 84.9 | 16,986 | 15.5932 | 73.9457 | 15.79 | 15.39 | 74.15 | 73.75 | Off flood-path (heuristic) |
| Gokak | 19 | 85.0 | 79,121 | 16.1690 | 74.8239 | 16.37 | 15.97 | 75.02 | 74.62 | Downstream (heuristic - verify) |
| Bhudgaon | 16 | 85.3 | 15,738 | 16.9074 | 74.5995 | 17.11 | 16.71 | 74.8 | 74.4 | Off flood-path (heuristic) |
| Mapusa | 33 | 88.2 | 40,122 | 15.5915 | 73.8090 | 15.79 | 15.39 | 74.01 | 73.61 | Off flood-path (heuristic) |
| Kudachi | 19 | 91.1 | 23,154 | 16.6278 | 74.8541 | 16.83 | 16.43 | 75.05 | 74.65 | Downstream (heuristic - verify) |
| Khānāpur | 19 | 93.0 | 19,309 | 15.6397 | 74.5085 | 15.84 | 15.44 | 74.71 | 74.31 | Downstream (heuristic - verify) |
| Calangute | 33 | 95.0 | 17,446 | 15.5439 | 73.7553 | 15.74 | 15.34 | 73.96 | 73.56 | Off flood-path (heuristic) |
| Penha de França | 33 | 95.4 | 15,342 | 15.5170 | 73.8354 | 15.72 | 15.32 | 74.04 | 73.64 | Off flood-path (heuristic) |
| Tāsgaon | 16 | 96.4 | 37,945 | 17.0370 | 74.6017 | 17.24 | 16.84 | 74.8 | 74.4 | Off flood-path (heuristic) |
| Chimbel | 33 | 97.2 | 15,289 | 15.4926 | 73.8747 | 15.69 | 15.29 | 74.07 | 73.67 | Off flood-path (heuristic) |
| Mudalgi | 19 | 97.9 | 29,128 | 16.3368 | 74.9677 | 16.54 | 16.14 | 75.17 | 74.77 | Downstream (heuristic - verify) |
| Panjim | 33 | 98.0 | 70,991 | 15.4957 | 73.8262 | 15.7 | 15.3 | 74.03 | 73.63 | Off flood-path (heuristic) |
| Taleigao | 33 | 100.7 | 17,148 | 15.4692 | 73.8328 | 15.67 | 15.27 | 74.03 | 73.63 | Off flood-path (heuristic) |
| Malkapur | 16 | 102.3 | 32,000 | 17.2621 | 74.1757 | 17.46 | 17.06 | 74.38 | 73.98 | Off flood-path (heuristic) |
| Curti | 33 | 103.8 | 16,385 | 15.4167 | 74.0167 | 15.62 | 15.22 | 74.22 | 73.82 | Off flood-path (heuristic) |
| Bail-Hongal | 19 | 105.0 | 49,182 | 15.8137 | 74.8589 | 16.01 | 15.61 | 75.06 | 74.66 | Downstream (heuristic - verify) |
| Ponda | 33 | 105.3 | 22,664 | 15.4034 | 74.0152 | 15.6 | 15.2 | 74.22 | 73.82 | Off flood-path (heuristic) |
| Karād | 16 | 105.4 | 55,663 | 17.2894 | 74.1818 | 17.49 | 17.09 | 74.38 | 73.98 | Off flood-path (heuristic) |
| Ratnagiri | 16 | 106.3 | 76,229 | 16.9915 | 73.3102 | 17.19 | 16.79 | 73.51 | 73.11 | Off flood-path (heuristic) |
| Terdāl | 19 | 107.5 | 26,411 | 16.4938 | 75.0467 | 16.69 | 16.29 | 75.25 | 74.85 | Downstream (heuristic - verify) |
| Vasco da Gama | 33 | 109.0 | 100,485 | 15.3958 | 73.8157 | 15.6 | 15.2 | 74.02 | 73.62 | Off flood-path (heuristic) |
| Sancoale | 33 | 109.2 | 21,923 | 15.3779 | 73.9035 | 15.58 | 15.18 | 74.1 | 73.7 | Off flood-path (heuristic) |
| Mormugao | 33 | 109.8 | 102,345 | 15.3891 | 73.8149 | 15.59 | 15.19 | 74.01 | 73.61 | Off flood-path (heuristic) |
| Mahālingpur | 19 | 113.0 | 36,055 | 16.3888 | 75.1087 | 16.59 | 16.19 | 75.31 | 74.91 | Downstream (heuristic - verify) |
| Rabkavi | 19 | 114.0 | 73,835 | 16.4757 | 75.1106 | 16.68 | 16.28 | 75.31 | 74.91 | Downstream (heuristic - verify) |
| Rabkavi-Banhatti | 19 | 114.9 | 77,004 | 16.4700 | 75.1200 | 16.67 | 16.27 | 75.32 | 74.92 | Downstream (heuristic - verify) |
| Vite | 16 | 115.1 | 48,289 | 17.2734 | 74.5379 | 17.47 | 17.07 | 74.74 | 74.34 | Off flood-path (heuristic) |
| Athani | 19 | 115.9 | 47,842 | 16.7261 | 75.0642 | 16.93 | 16.53 | 75.26 | 74.86 | Off flood-path (heuristic) |
| Madgaon | 33 | 119.9 | 87,650 | 15.2750 | 73.9579 | 15.48 | 15.08 | 74.16 | 73.76 | Off flood-path (heuristic) |
| Davorlim | 33 | 120.0 | 15,350 | 15.2722 | 73.9924 | 15.47 | 15.07 | 74.19 | 73.79 | Off flood-path (heuristic) |
| Koynanagar | 16 | 120.6 | 28,091 | 17.4000 | 73.7667 | 17.6 | 17.2 | 73.97 | 73.57 | Off flood-path (heuristic) |
| Curchorem | 33 | 121.0 | 22,730 | 15.2635 | 74.1088 | 15.46 | 15.06 | 74.31 | 73.91 | Off flood-path (heuristic) |
| Alnāvar | 19 | 126.5 | 17,228 | 15.4273 | 74.7411 | 15.63 | 15.23 | 74.94 | 74.54 | Downstream (heuristic - verify) |
| Cuncolim | 33 | 130.5 | 16,623 | 15.1773 | 73.9939 | 15.38 | 14.98 | 74.19 | 73.79 | Off flood-path (heuristic) |
| Saundatti | 19 | 131.3 | 41,215 | 15.7661 | 75.1178 | 15.97 | 15.57 | 75.32 | 74.92 | Downstream (heuristic - verify) |
| Mudhol | 19 | 131.6 | 52,199 | 16.3335 | 75.2831 | 16.53 | 16.13 | 75.48 | 75.08 | Downstream (heuristic - verify) |
| Jamkhandi | 19 | 133.5 | 68,938 | 16.5046 | 75.2915 | 16.7 | 16.3 | 75.49 | 75.09 | Downstream (heuristic - verify) |
| Dandeli | 19 | 134.9 | 52,295 | 15.2667 | 74.6167 | 15.47 | 15.07 | 74.82 | 74.42 | Downstream (heuristic - verify) |
| Haliyal | 19 | 136.4 | 24,238 | 15.3286 | 74.7564 | 15.53 | 15.13 | 74.96 | 74.56 | Downstream (heuristic - verify) |
| Rahimatpur | 16 | 139.0 | 17,633 | 17.5921 | 74.1997 | 17.79 | 17.39 | 74.4 | 74.0 | Off flood-path (heuristic) |
| Rāmdurg | 19 | 140.7 | 34,800 | 15.9458 | 75.2978 | 16.15 | 15.75 | 75.5 | 75.1 | Downstream (heuristic - verify) |
| Chiplūn | 16 | 143.6 | 55,139 | 17.5334 | 73.5093 | 17.73 | 17.33 | 73.71 | 73.31 | Off flood-path (heuristic) |
| Kodoli | 16 | 146.8 | 26,106 | 17.6702 | 74.0347 | 17.87 | 17.47 | 74.23 | 73.83 | Off flood-path (heuristic) |
| Godoli | 16 | 147.0 | 22,517 | 17.6718 | 74.0129 | 17.87 | 17.47 | 74.21 | 73.81 | Off flood-path (heuristic) |
| Satara | 16 | 148.7 | 120,195 | 17.6859 | 73.9933 | 17.89 | 17.49 | 74.19 | 73.79 | Off flood-path (heuristic) |
| Koregaon | 16 | 150.5 | 24,690 | 17.6991 | 74.1625 | 17.9 | 17.5 | 74.36 | 73.96 | Off flood-path (heuristic) |
| Nargund | 19 | 159.0 | 36,291 | 15.7230 | 75.3867 | 15.92 | 15.52 | 75.59 | 75.19 | Downstream (heuristic - verify) |
| Hubballi | 19 | 160.8 | 943,788 | 15.3478 | 75.1338 | 15.55 | 15.15 | 75.33 | 74.93 | Downstream (heuristic - verify) |
| Mhaswad | 16 | 162.9 | 24,120 | 17.6336 | 74.7877 | 17.83 | 17.43 | 74.99 | 74.59 | Off flood-path (heuristic) |
| Kalghatgi | 19 | 162.9 | 16,917 | 15.1831 | 74.9710 | 15.38 | 14.98 | 75.17 | 74.77 | Downstream (heuristic - verify) |
| Kerūr | 19 | 164.1 | 19,731 | 16.0138 | 75.5463 | 16.21 | 15.81 | 75.75 | 75.35 | Downstream (heuristic - verify) |
| Navalgund | 19 | 164.8 | 24,613 | 15.5588 | 75.3530 | 15.76 | 15.36 | 75.55 | 75.15 | Downstream (heuristic - verify) |
| Khed | 16 | 167.3 | 16,892 | 17.7189 | 73.3969 | 17.92 | 17.52 | 73.6 | 73.2 | Off flood-path (heuristic) |
| Bilgi | 19 | 167.3 | 17,792 | 16.3471 | 75.6180 | 16.55 | 16.15 | 75.82 | 75.42 | Downstream (heuristic - verify) |
| Yellāpur | 19 | 169.5 | 20,452 | 14.9637 | 74.7093 | 15.16 | 14.76 | 74.91 | 74.51 | Downstream (heuristic - verify) |
| Karwar | 19 | 171.1 | 77,139 | 14.8136 | 74.1297 | 15.01 | 14.61 | 74.33 | 73.93 | Off flood-path (heuristic) |
| Sāngola | 16 | 171.7 | 34,321 | 17.4395 | 75.1938 | 17.64 | 17.24 | 75.39 | 74.99 | Off flood-path (heuristic) |
| Bagalkot | 19 | 176.6 | 111,933 | 16.1867 | 75.6961 | 16.39 | 15.99 | 75.9 | 75.5 | Downstream (heuristic - verify) |
| Kundgol | 19 | 176.7 | 18,726 | 15.2561 | 75.2473 | 15.46 | 15.06 | 75.45 | 75.05 | Downstream (heuristic - verify) |
| Wai | 16 | 179.0 | 36,025 | 17.9528 | 73.8906 | 18.15 | 17.75 | 74.09 | 73.69 | Off flood-path (heuristic) |
| Annigeri | 19 | 180.2 | 28,267 | 15.4251 | 75.4335 | 15.63 | 15.23 | 75.63 | 75.23 | Downstream (heuristic - verify) |
| Bādāmi | 19 | 180.4 | 30,943 | 15.9149 | 75.6768 | 16.11 | 15.71 | 75.88 | 75.48 | Downstream (heuristic - verify) |
| Dāpoli | 16 | 181.5 | 15,713 | 17.7593 | 73.1882 | 17.96 | 17.56 | 73.39 | 72.99 | Off flood-path (heuristic) |
| Vijayapura | 19 | 185.1 | 327,427 | 16.8244 | 75.7154 | 17.02 | 16.62 | 75.92 | 75.52 | Downstream (heuristic - verify) |
| Mundgod | 19 | 186.2 | 18,866 | 14.9714 | 75.0366 | 15.17 | 14.77 | 75.24 | 74.84 | Downstream (heuristic - verify) |
| Phaltan | 16 | 186.9 | 53,202 | 17.9911 | 74.4318 | 18.19 | 17.79 | 74.63 | 74.23 | Off flood-path (heuristic) |
| Nāteputa | 16 | 187.7 | 17,930 | 17.8989 | 74.7522 | 18.1 | 17.7 | 74.95 | 74.55 | Off flood-path (heuristic) |
| Lonand | 16 | 188.5 | 18,723 | 18.0404 | 74.1872 | 18.24 | 17.84 | 74.39 | 73.99 | Off flood-path (heuristic) |
| Guledagudda | 19 | 188.8 | 33,851 | 16.0502 | 75.7900 | 16.25 | 15.85 | 75.99 | 75.59 | Downstream (heuristic - verify) |
| Ankola | 19 | 189.8 | 22,249 | 14.6605 | 74.3047 | 14.86 | 14.46 | 74.5 | 74.1 | Off flood-path (heuristic) |
| Kamatgi | 16 | 190.7 | 15,620 | 16.0779 | 75.8132 | 16.28 | 15.88 | 76.01 | 75.61 | Downstream (heuristic - verify) |
| Ron | 19 | 194.0 | 23,311 | 15.6994 | 75.7341 | 15.9 | 15.5 | 75.93 | 75.53 | Downstream (heuristic - verify) |
| Shiggaon | 19 | 196.7 | 28,207 | 14.9905 | 75.2250 | 15.19 | 14.79 | 75.42 | 75.02 | Downstream (heuristic - verify) |
| Mangalvedha | 16 | 196.8 | 21,824 | 17.5105 | 75.4471 | 17.71 | 17.31 | 75.65 | 75.25 | Off flood-path (heuristic) |
| Gadag-Betageri | 19 | 197.1 | 172,813 | 15.4167 | 75.6167 | 15.62 | 15.22 | 75.82 | 75.42 | Downstream (heuristic - verify) |
| Mulgund | 19 | 197.3 | 18,928 | 15.2807 | 75.5213 | 15.48 | 15.08 | 75.72 | 75.32 | Downstream (heuristic - verify) |
| Gadag | 19 | 197.5 | 172,612 | 15.4298 | 75.6297 | 15.63 | 15.23 | 75.83 | 75.43 | Downstream (heuristic - verify) |

## Savatri Dam (Maharashtra)
Dam coordinates: 18.05, 73.35

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Mahād | 16 | 8.0 | 27,536 | 18.0833 | 73.4167 | 18.28 | 17.88 | 73.62 | 73.22 | Off flood-path (heuristic) |
| Indāpur | 16 | 29.7 | 26,752 | 18.3000 | 73.2500 | 18.5 | 18.1 | 73.45 | 73.05 | Off flood-path (heuristic) |
| Srīvardhan | 16 | 35.4 | 15,279 | 18.0459 | 73.0155 | 18.25 | 17.85 | 73.22 | 72.82 | Downstream (heuristic - verify) |
| Dāpoli | 16 | 36.6 | 15,713 | 17.7593 | 73.1882 | 17.96 | 17.56 | 73.39 | 72.99 | Off flood-path (heuristic) |
| Shrivardhan | 16 | 36.9 | 15,123 | 18.0532 | 73.0011 | 18.25 | 17.85 | 73.2 | 72.8 | Downstream (heuristic - verify) |
| Khed | 16 | 37.2 | 16,892 | 17.7189 | 73.3969 | 17.92 | 17.52 | 73.6 | 73.2 | Off flood-path (heuristic) |
| Roha | 16 | 49.4 | 90,000 | 18.4369 | 73.1196 | 18.64 | 18.24 | 73.32 | 72.92 | Off flood-path (heuristic) |
| Bhor | 16 | 53.3 | 18,982 | 18.1486 | 73.8434 | 18.35 | 17.95 | 74.04 | 73.64 | Off flood-path (heuristic) |
| Wai | 16 | 58.2 | 36,025 | 17.9528 | 73.8906 | 18.15 | 17.75 | 74.09 | 73.69 | Off flood-path (heuristic) |
| Chiplūn | 16 | 59.9 | 55,139 | 17.5334 | 73.5093 | 17.73 | 17.33 | 73.71 | 73.31 | Off flood-path (heuristic) |
| Kharakvasla | 16 | 62.4 | 78,684 | 18.4400 | 73.7755 | 18.64 | 18.24 | 73.98 | 73.58 | Off flood-path (heuristic) |
| Pune | 16 | 74.7 | 3,124,458 | 18.5196 | 73.8554 | 18.72 | 18.32 | 74.06 | 73.66 | Off flood-path (heuristic) |
| Shivaji Nagar | 16 | 75.3 | 1,000,000 | 18.5302 | 73.8526 | 18.73 | 18.33 | 74.05 | 73.65 | Off flood-path (heuristic) |
| Khadki | 16 | 77.9 | 75,654 | 18.5635 | 73.8521 | 18.76 | 18.36 | 74.05 | 73.65 | Off flood-path (heuristic) |
| Lonavla | 16 | 78.4 | 58,562 | 18.7527 | 73.4057 | 18.95 | 18.55 | 73.61 | 73.21 | Off flood-path (heuristic) |
| Sāsvad | 16 | 79.0 | 31,821 | 18.3435 | 74.0310 | 18.54 | 18.14 | 74.23 | 73.83 | Off flood-path (heuristic) |
| Maval | 16 | 79.1 | 15,612 | 18.7553 | 73.4443 | 18.96 | 18.56 | 73.64 | 73.24 | Off flood-path (heuristic) |
| Satara | 16 | 79.2 | 120,195 | 17.6859 | 73.9933 | 17.89 | 17.49 | 74.19 | 73.79 | Off flood-path (heuristic) |
| Pimpri-Chinchwad | 16 | 79.3 | 1,727,692 | 18.6187 | 73.8037 | 18.82 | 18.42 | 74.0 | 73.6 | Off flood-path (heuristic) |
| Pimpri | 16 | 79.9 | 1,284,606 | 18.6229 | 73.8070 | 18.82 | 18.42 | 74.01 | 73.61 | Off flood-path (heuristic) |
| Pen | 16 | 81.0 | 37,852 | 18.7373 | 73.0960 | 18.94 | 18.54 | 73.3 | 72.9 | Off flood-path (heuristic) |
| Dehu Road | 16 | 81.0 | 48,961 | 18.6821 | 73.7316 | 18.88 | 18.48 | 73.93 | 73.53 | Off flood-path (heuristic) |
| Godoli | 16 | 81.8 | 22,517 | 17.6718 | 74.0129 | 17.87 | 17.47 | 74.21 | 73.81 | Off flood-path (heuristic) |
| Khopoli | 16 | 81.8 | 71,141 | 18.7856 | 73.3459 | 18.99 | 18.59 | 73.55 | 73.15 | Off flood-path (heuristic) |
| Alībāg | 16 | 83.2 | 20,752 | 18.6481 | 72.8758 | 18.85 | 18.45 | 73.08 | 72.68 | Off flood-path (heuristic) |
| Talegaon Dābhāde | 16 | 83.6 | 56,435 | 18.7350 | 73.6756 | 18.94 | 18.54 | 73.88 | 73.48 | Off flood-path (heuristic) |
| Kodoli | 16 | 83.9 | 26,106 | 17.6702 | 74.0347 | 17.87 | 17.47 | 74.23 | 73.83 | Off flood-path (heuristic) |
| Koynanagar | 16 | 84.7 | 28,091 | 17.4000 | 73.7667 | 17.6 | 17.2 | 73.97 | 73.57 | Off flood-path (heuristic) |
| Lonand | 16 | 88.5 | 18,723 | 18.0404 | 74.1872 | 18.24 | 17.84 | 74.39 | 73.99 | Off flood-path (heuristic) |
| Vagholi | 16 | 89.3 | 33,479 | 18.5823 | 73.9830 | 18.78 | 18.38 | 74.18 | 73.78 | Off flood-path (heuristic) |
| Alandi | 16 | 90.7 | 28,645 | 18.6776 | 73.8987 | 18.88 | 18.48 | 74.1 | 73.7 | Off flood-path (heuristic) |
| Koregaon | 16 | 94.4 | 24,690 | 17.6991 | 74.1625 | 17.9 | 17.5 | 74.36 | 73.96 | Off flood-path (heuristic) |
| Karjat | 16 | 95.7 | 34,554 | 18.9107 | 73.3235 | 19.11 | 18.71 | 73.52 | 73.12 | Off flood-path (heuristic) |
| Chākan | 16 | 95.8 | 41,113 | 18.7606 | 73.8635 | 18.96 | 18.56 | 74.06 | 73.66 | Off flood-path (heuristic) |
| Chanaje | 16 | 99.5 | 16,714 | 18.8613 | 72.9526 | 19.06 | 18.66 | 73.15 | 72.75 | Off flood-path (heuristic) |
| Koregaon | 16 | 99.9 | 25,846 | 18.6457 | 74.0591 | 18.85 | 18.45 | 74.26 | 73.86 | Off flood-path (heuristic) |
| Uran | 16 | 101.8 | 30,439 | 18.8781 | 72.9392 | 19.08 | 18.68 | 73.14 | 72.74 | Off flood-path (heuristic) |
| Rahimatpur | 16 | 103.4 | 17,633 | 17.5921 | 74.1997 | 17.79 | 17.39 | 74.4 | 74.0 | Off flood-path (heuristic) |
| Panvel | 16 | 107.4 | 195,373 | 18.9888 | 73.1101 | 19.19 | 18.79 | 73.31 | 72.91 | Off flood-path (heuristic) |
| Rājgurunagar | 16 | 107.8 | 25,146 | 18.8667 | 73.9000 | 19.07 | 18.67 | 74.1 | 73.7 | Off flood-path (heuristic) |
| Neral | 16 | 108.4 | 18,429 | 19.0248 | 73.3169 | 19.22 | 18.82 | 73.52 | 73.12 | Off flood-path (heuristic) |
| Phaltan | 16 | 114.6 | 53,202 | 17.9911 | 74.4318 | 18.19 | 17.79 | 74.63 | 74.23 | Off flood-path (heuristic) |
| Kharghar | 16 | 115.0 | 80,612 | 19.0498 | 73.0702 | 19.25 | 18.85 | 73.27 | 72.87 | Off flood-path (heuristic) |
| Navi Mumbai | 16 | 115.2 | 2,600,000 | 19.0368 | 73.0158 | 19.24 | 18.84 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Ratnagiri | 16 | 117.8 | 76,229 | 16.9915 | 73.3102 | 17.19 | 16.79 | 73.51 | 73.11 | Off flood-path (heuristic) |
| Karād | 16 | 122.1 | 55,663 | 17.2894 | 74.1818 | 17.49 | 17.09 | 74.38 | 73.98 | Off flood-path (heuristic) |
| Dhārāvi | 16 | 122.3 | 700,000 | 19.0500 | 72.8667 | 19.25 | 18.85 | 73.07 | 72.67 | Off flood-path (heuristic) |
| Manchar | 16 | 123.2 | 18,876 | 19.0044 | 73.9435 | 19.2 | 18.8 | 74.14 | 73.74 | Off flood-path (heuristic) |
| Badlapur | 16 | 123.2 | 174,226 | 19.1552 | 73.2655 | 19.36 | 18.96 | 73.47 | 73.07 | Off flood-path (heuristic) |
| Malkapur | 16 | 123.8 | 32,000 | 17.2621 | 74.1757 | 17.46 | 17.06 | 74.38 | 73.98 | Off flood-path (heuristic) |
| Mumbai | 16 | 123.9 | 12,691,836 | 19.0728 | 72.8826 | 19.27 | 18.87 | 73.08 | 72.68 | Off flood-path (heuristic) |
| Powai | 16 | 127.5 | 20,000 | 19.1164 | 72.9047 | 19.32 | 18.92 | 73.1 | 72.7 | Off flood-path (heuristic) |
| Kalamb | 16 | 127.7 | 27,287 | 19.0444 | 73.9555 | 19.24 | 18.84 | 74.16 | 73.76 | Off flood-path (heuristic) |
| Airoli | 16 | 128.0 | 100,000 | 19.1510 | 72.9963 | 19.35 | 18.95 | 73.2 | 72.8 | Off flood-path (heuristic) |
| Ambarnath | 16 | 129.3 | 253,475 | 19.2000 | 73.1667 | 19.4 | 19.0 | 73.37 | 72.97 | Off flood-path (heuristic) |
| Bārāmati | 16 | 130.2 | 54,415 | 18.1517 | 74.5777 | 18.35 | 17.95 | 74.78 | 74.38 | Off flood-path (heuristic) |
| Ulhasnagar | 16 | 131.4 | 516,584 | 19.2167 | 73.1500 | 19.42 | 19.02 | 73.35 | 72.95 | Off flood-path (heuristic) |
| Dombivali | 16 | 132.7 | 1,247,327 | 19.2167 | 73.0833 | 19.42 | 19.02 | 73.28 | 72.88 | Off flood-path (heuristic) |
| Jalochi | 16 | 133.4 | 19,346 | 18.1566 | 74.6071 | 18.36 | 17.96 | 74.81 | 74.41 | Off flood-path (heuristic) |
| Thāne | 16 | 133.9 | 1,841,488 | 19.1970 | 72.9635 | 19.4 | 19.0 | 73.16 | 72.76 | Off flood-path (heuristic) |
| Murbād | 16 | 133.9 | 18,725 | 19.2539 | 73.3899 | 19.45 | 19.05 | 73.59 | 73.19 | Off flood-path (heuristic) |
| Mharal Bk | 16 | 134.2 | 29,462 | 19.2459 | 73.1771 | 19.45 | 19.05 | 73.38 | 72.98 | Off flood-path (heuristic) |
| Kalyān | 16 | 134.6 | 1,262,255 | 19.2437 | 73.1355 | 19.44 | 19.04 | 73.34 | 72.94 | Off flood-path (heuristic) |
| Kalher | 16 | 137.7 | 15,573 | 19.2472 | 73.0152 | 19.45 | 19.05 | 73.22 | 72.82 | Off flood-path (heuristic) |
| Daund | 16 | 138.2 | 49,450 | 18.4652 | 74.5837 | 18.67 | 18.27 | 74.78 | 74.38 | Off flood-path (heuristic) |
| Sirūr | 16 | 138.4 | 37,111 | 18.8276 | 74.3748 | 19.03 | 18.63 | 74.57 | 74.17 | Off flood-path (heuristic) |
| Junnar | 16 | 140.2 | 25,997 | 19.2081 | 73.8752 | 19.41 | 19.01 | 74.08 | 73.68 | Off flood-path (heuristic) |
| Borivli | 16 | 141.5 | 609,617 | 19.2350 | 72.8598 | 19.43 | 19.03 | 73.06 | 72.66 | Off flood-path (heuristic) |
| Shahuwadi | 16 | 141.7 | 180,322 | 16.9099 | 73.9465 | 17.11 | 16.71 | 74.15 | 73.75 | Off flood-path (heuristic) |
| Bhiwandi | 16 | 142.4 | 874,032 | 19.3002 | 73.0588 | 19.5 | 19.1 | 73.26 | 72.86 | Off flood-path (heuristic) |
| Khoni | 16 | 144.2 | 26,016 | 19.3173 | 73.0597 | 19.52 | 19.12 | 73.26 | 72.86 | Off flood-path (heuristic) |
| Gorai | 16 | 146.2 | 29,107 | 19.2500 | 72.7833 | 19.45 | 19.05 | 72.98 | 72.58 | Off flood-path (heuristic) |
| Urun-Islāmpur | 16 | 147.7 | 67,391 | 17.0500 | 74.2667 | 17.25 | 16.85 | 74.47 | 74.07 | Off flood-path (heuristic) |
| Bhayandar | 16 | 148.8 | 809,378 | 19.3016 | 72.8511 | 19.5 | 19.1 | 73.05 | 72.65 | Off flood-path (heuristic) |
| Nāteputa | 16 | 149.3 | 17,930 | 17.8989 | 74.7522 | 18.1 | 17.7 | 74.95 | 74.55 | Off flood-path (heuristic) |
| Vasind | 16 | 151.3 | 20,561 | 19.4084 | 73.2629 | 19.61 | 19.21 | 73.46 | 73.06 | Off flood-path (heuristic) |
| Vite | 16 | 152.6 | 48,289 | 17.2734 | 74.5379 | 17.47 | 17.07 | 74.74 | 74.34 | Off flood-path (heuristic) |
| Shrīgonda | 16 | 155.6 | 31,134 | 18.6153 | 74.6989 | 18.82 | 18.42 | 74.9 | 74.5 | Off flood-path (heuristic) |
| Kodoli | 16 | 158.1 | 17,537 | 16.8764 | 74.1909 | 17.08 | 16.68 | 74.39 | 73.99 | Off flood-path (heuristic) |
| Mhaswad | 16 | 159.1 | 24,120 | 17.6336 | 74.7877 | 17.83 | 17.43 | 74.99 | 74.59 | Off flood-path (heuristic) |
| Ashta | 16 | 166.1 | 37,105 | 16.9494 | 74.4094 | 17.15 | 16.75 | 74.61 | 74.21 | Off flood-path (heuristic) |
| Virār | 16 | 166.3 | 1,222,390 | 19.4559 | 72.8114 | 19.66 | 19.26 | 73.01 | 72.61 | Off flood-path (heuristic) |
| Wadgaon | 16 | 169.4 | 25,651 | 16.8355 | 74.3134 | 17.04 | 16.64 | 74.51 | 74.11 | Off flood-path (heuristic) |
| Tāsgaon | 16 | 174.1 | 37,945 | 17.0370 | 74.6017 | 17.24 | 16.84 | 74.8 | 74.4 | Off flood-path (heuristic) |
| Kolhāpur | 16 | 177.3 | 549,236 | 16.6956 | 74.2317 | 16.9 | 16.5 | 74.43 | 74.03 | Off flood-path (heuristic) |
| Indāpur | 16 | 177.6 | 25,515 | 18.1153 | 75.0289 | 18.32 | 17.92 | 75.23 | 74.83 | Off flood-path (heuristic) |
| Aklūj | 16 | 177.6 | 39,972 | 17.8924 | 75.0214 | 18.09 | 17.69 | 75.22 | 74.82 | Off flood-path (heuristic) |
| Kasāra | 16 | 177.8 | 15,611 | 19.6451 | 73.4743 | 19.85 | 19.45 | 73.67 | 73.27 | Off flood-path (heuristic) |
| Unchagao | 16 | 179.5 | 31,238 | 16.6975 | 74.2733 | 16.9 | 16.5 | 74.47 | 74.07 | Off flood-path (heuristic) |
| Vāda | 16 | 179.6 | 16,750 | 19.6535 | 73.1481 | 19.85 | 19.45 | 73.35 | 72.95 | Off flood-path (heuristic) |
| Ārangaon | 16 | 180.3 | 29,591 | 19.0268 | 74.7149 | 19.23 | 18.83 | 74.91 | 74.51 | Off flood-path (heuristic) |
| Pachgaon | 16 | 180.4 | 22,353 | 16.6602 | 74.2274 | 16.86 | 16.46 | 74.43 | 74.03 | Off flood-path (heuristic) |
| Bhudgaon | 16 | 183.6 | 15,738 | 16.9074 | 74.5995 | 17.11 | 16.71 | 74.8 | 74.4 | Off flood-path (heuristic) |
| Igatpuri | 16 | 184.3 | 35,461 | 19.6952 | 73.5626 | 19.9 | 19.5 | 73.76 | 73.36 | Off flood-path (heuristic) |
| Sāngli | 16 | 185.1 | 601,214 | 16.8544 | 74.5642 | 17.05 | 16.65 | 74.76 | 74.36 | Off flood-path (heuristic) |
| Ahilyanagar | 16 | 186.8 | 367,140 | 19.0946 | 74.7384 | 19.29 | 18.89 | 74.94 | 74.54 | Off flood-path (heuristic) |
| Ghoti Budrukh | 16 | 187.6 | 24,838 | 19.7164 | 73.6282 | 19.92 | 19.52 | 73.83 | 73.43 | Off flood-path (heuristic) |
| Korochi | 16 | 188.2 | 20,420 | 16.7192 | 74.4451 | 16.92 | 16.52 | 74.65 | 74.25 | Off flood-path (heuristic) |
| Kabnur | 16 | 189.3 | 38,146 | 16.7017 | 74.4395 | 16.9 | 16.5 | 74.64 | 74.24 | Off flood-path (heuristic) |
| Jaisingpur | 16 | 190.7 | 48,510 | 16.7764 | 74.5536 | 16.98 | 16.58 | 74.75 | 74.35 | Off flood-path (heuristic) |
| Sangamner | 16 | 191.6 | 67,309 | 19.5678 | 74.2115 | 19.77 | 19.37 | 74.41 | 74.01 | Off flood-path (heuristic) |
| Ichalkaranji | 16 | 191.6 | 287,353 | 16.6912 | 74.4605 | 16.89 | 16.49 | 74.66 | 74.26 | Off flood-path (heuristic) |
| Pālghar | 16 | 193.2 | 72,335 | 19.6969 | 72.7654 | 19.9 | 19.5 | 72.97 | 72.57 | Off flood-path (heuristic) |
| Kāgal | 16 | 193.2 | 34,106 | 16.5770 | 74.3154 | 16.78 | 16.38 | 74.52 | 74.12 | Off flood-path (heuristic) |
| Ghulewadi | 16 | 194.2 | 21,860 | 19.6031 | 74.1936 | 19.8 | 19.4 | 74.39 | 73.99 | Off flood-path (heuristic) |
| Hupari | 16 | 194.7 | 28,953 | 16.6167 | 74.4044 | 16.82 | 16.42 | 74.6 | 74.2 | Off flood-path (heuristic) |
| Karmāla | 16 | 198.8 | 23,199 | 18.4077 | 75.1939 | 18.61 | 18.21 | 75.39 | 74.99 | Off flood-path (heuristic) |

## Bisalpur Dam (Rajasthan)
Dam coordinates: 25.83, 75.15

| Place | State/Admin | Distance (km) | Population | Latitude | Longitude | BBox N | BBox S | BBox E | BBox W | Flood Path (heuristic) |
|-------|-------------|----------------|------------|----------|-----------|--------|--------|--------|--------|--------------------------|
| Sawar | 24 | 11.0 | 20,000 | 25.7557 | 75.2229 | 25.96 | 25.56 | 75.42 | 75.02 | Off flood-path (heuristic) |
| Kekri | 24 | 15.7 | 41,890 | 25.9713 | 75.1499 | 26.17 | 25.77 | 75.35 | 74.95 | Off flood-path (heuristic) |
| Deoli | 24 | 24.4 | 22,065 | 25.7573 | 75.3799 | 25.96 | 25.56 | 75.58 | 75.18 | Off flood-path (heuristic) |
| Jahāzpur | 24 | 26.6 | 20,586 | 25.6199 | 75.2761 | 25.82 | 25.42 | 75.48 | 75.08 | Off flood-path (heuristic) |
| Bāda | 24 | 29.1 | 20,372 | 26.0648 | 75.0216 | 26.26 | 25.86 | 75.22 | 74.82 | Off flood-path (heuristic) |
| Shāhpura | 24 | 32.4 | 29,259 | 25.6209 | 74.9249 | 25.82 | 25.42 | 75.12 | 74.72 | Off flood-path (heuristic) |
| Todaraisingh | 24 | 39.6 | 23,559 | 26.0240 | 75.4818 | 26.22 | 25.82 | 75.68 | 75.28 | Downstream (heuristic - verify) |
| Sarwar | 24 | 45.9 | 20,372 | 26.2425 | 75.1287 | 26.44 | 26.04 | 75.33 | 74.93 | Off flood-path (heuristic) |
| Gulābpura | 24 | 49.7 | 27,215 | 25.9045 | 74.6603 | 26.1 | 25.7 | 74.86 | 74.46 | Off flood-path (heuristic) |
| Bijaynagar | 24 | 51.3 | 32,124 | 25.9298 | 74.6492 | 26.13 | 25.73 | 74.85 | 74.45 | Off flood-path (heuristic) |
| Mālpura | 24 | 54.8 | 36,028 | 26.2838 | 75.3646 | 26.48 | 26.08 | 75.56 | 75.16 | Downstream (heuristic - verify) |
| Būndi | 24 | 65.4 | 104,919 | 25.4385 | 75.6373 | 25.64 | 25.24 | 75.84 | 75.44 | Off flood-path (heuristic) |
| Nasīrābād | 24 | 67.2 | 51,747 | 26.3047 | 74.7336 | 26.5 | 26.1 | 74.93 | 74.53 | Off flood-path (heuristic) |
| Nainwa | 24 | 70.4 | 19,485 | 25.7715 | 75.8498 | 25.97 | 25.57 | 76.05 | 75.65 | Downstream (heuristic - verify) |
| Māndalgarh | 24 | 71.1 | 21,569 | 25.1941 | 75.0721 | 25.39 | 24.99 | 75.27 | 74.87 | Off flood-path (heuristic) |
| Māndal | 24 | 72.5 | 23,478 | 25.4413 | 74.5698 | 25.64 | 25.24 | 74.77 | 74.37 | Off flood-path (heuristic) |
| Tonk | 24 | 73.9 | 165,294 | 26.1664 | 75.7882 | 26.37 | 25.97 | 75.99 | 75.59 | Downstream (heuristic - verify) |
| Bhilwara | 24 | 74.1 | 359,483 | 25.3471 | 74.6408 | 25.55 | 25.15 | 74.84 | 74.44 | Off flood-path (heuristic) |
| Āsind | 24 | 82.5 | 16,611 | 25.7342 | 74.3328 | 25.93 | 25.53 | 74.53 | 74.13 | Off flood-path (heuristic) |
| Ajmer | 24 | 86.0 | 542,321 | 26.4521 | 74.6387 | 26.65 | 26.25 | 74.84 | 74.44 | Off flood-path (heuristic) |
| Beāwar | 24 | 88.3 | 151,152 | 26.1012 | 74.3203 | 26.3 | 25.9 | 74.52 | 74.12 | Off flood-path (heuristic) |
| Kishangarh | 24 | 89.5 | 154,886 | 26.5901 | 74.8540 | 26.79 | 26.39 | 75.05 | 74.65 | Off flood-path (heuristic) |
| Pushkar | 24 | 94.6 | 21,626 | 26.4902 | 74.5521 | 26.69 | 26.29 | 74.75 | 74.35 | Off flood-path (heuristic) |
| Begūn | 24 | 95.3 | 20,836 | 24.9833 | 75.0000 | 25.18 | 24.78 | 75.2 | 74.8 | Off flood-path (heuristic) |
| Niwai | 24 | 96.8 | 37,765 | 26.3607 | 75.9184 | 26.56 | 26.16 | 76.12 | 75.72 | Downstream (heuristic - verify) |
| Keshorai Pātan | 24 | 99.2 | 24,627 | 25.2928 | 75.9395 | 25.49 | 25.09 | 76.14 | 75.74 | Off flood-path (heuristic) |
| Kota | 24 | 99.8 | 1,001,694 | 25.1825 | 75.8391 | 25.38 | 24.98 | 76.04 | 75.64 | Off flood-path (heuristic) |
| Kāpren | 24 | 104.0 | 20,748 | 25.4053 | 76.0743 | 25.61 | 25.21 | 76.27 | 75.87 | Off flood-path (heuristic) |
| Lākheri | 24 | 104.3 | 29,572 | 25.6724 | 76.1769 | 25.87 | 25.47 | 76.38 | 75.98 | Downstream (heuristic - verify) |
| Naraina | 24 | 107.0 | 17,048 | 26.7907 | 75.2061 | 26.99 | 26.59 | 75.41 | 75.01 | Downstream (heuristic - verify) |
| Rāwatbhāta | 24 | 109.5 | 37,699 | 24.9298 | 75.5921 | 25.13 | 24.73 | 75.79 | 75.39 | Off flood-path (heuristic) |
| Gangāpur | 24 | 112.2 | 18,777 | 25.2195 | 74.2603 | 25.42 | 25.02 | 74.46 | 74.06 | Off flood-path (heuristic) |
| Kaithoon | 24 | 113.9 | 24,260 | 25.1241 | 75.9722 | 25.32 | 24.92 | 76.17 | 75.77 | Off flood-path (heuristic) |
| Raipur | 24 | 115.1 | 17,537 | 26.0426 | 74.0237 | 26.24 | 25.84 | 74.22 | 73.82 | Off flood-path (heuristic) |
| Bagru | 24 | 116.0 | 31,229 | 26.8107 | 75.5470 | 27.01 | 26.61 | 75.75 | 75.35 | Downstream (heuristic - verify) |
| Phulera | 24 | 116.4 | 26,091 | 26.8740 | 75.2417 | 27.07 | 26.67 | 75.44 | 75.04 | Downstream (heuristic - verify) |
| Chittorgarh | 24 | 117.2 | 116,406 | 24.8896 | 74.6240 | 25.09 | 24.69 | 74.82 | 74.42 | Off flood-path (heuristic) |
| Chaksu | 24 | 117.3 | 33,432 | 26.6051 | 75.9481 | 26.81 | 26.41 | 76.15 | 75.75 | Downstream (heuristic - verify) |
| Sāmbhar | 24 | 119.9 | 22,828 | 26.9081 | 75.1914 | 27.11 | 26.71 | 75.39 | 74.99 | Downstream (heuristic - verify) |
| Nīmāj | 24 | 120.2 | 20,424 | 26.1500 | 74.0009 | 26.35 | 25.95 | 74.2 | 73.8 | Off flood-path (heuristic) |
| Bāonlī | 24 | 121.0 | 15,300 | 26.3261 | 76.2283 | 26.53 | 26.13 | 76.43 | 76.03 | Downstream (heuristic - verify) |
| Sawai Madhopur | 24 | 121.3 | 121,106 | 26.0230 | 76.3441 | 26.22 | 25.82 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Parvatsar | 24 | 123.5 | 15,405 | 26.8860 | 74.7660 | 27.09 | 26.69 | 74.97 | 74.57 | Off flood-path (heuristic) |
| Jaitāran | 24 | 128.2 | 22,621 | 26.2045 | 73.9368 | 26.4 | 26.0 | 74.14 | 73.74 | Off flood-path (heuristic) |
| Devgarh | 24 | 129.0 | 17,604 | 25.5253 | 73.9081 | 25.73 | 25.33 | 74.11 | 73.71 | Off flood-path (heuristic) |
| Nāwa | 24 | 133.1 | 22,088 | 27.0195 | 75.0023 | 27.22 | 26.82 | 75.2 | 74.8 | Off flood-path (heuristic) |
| Kapasan | 24 | 134.0 | 20,869 | 24.8894 | 74.3167 | 25.09 | 24.69 | 74.52 | 74.12 | Off flood-path (heuristic) |
| Amet | 24 | 135.9 | 17,434 | 25.3061 | 73.9258 | 25.51 | 25.11 | 74.13 | 73.73 | Off flood-path (heuristic) |
| Jaipur | 24 | 136.8 | 3,046,163 | 26.9196 | 75.7878 | 27.12 | 26.72 | 75.99 | 75.59 | Downstream (heuristic - verify) |
| Anta | 24 | 138.0 | 32,377 | 25.1500 | 76.3000 | 25.35 | 24.95 | 76.5 | 76.1 | Off flood-path (heuristic) |
| Jāwad | 35 | 139.9 | 17,129 | 24.5992 | 74.8626 | 24.8 | 24.4 | 75.06 | 74.66 | Off flood-path (heuristic) |
| Borāwar | 24 | 140.9 | 24,975 | 27.0237 | 74.6758 | 27.22 | 26.82 | 74.88 | 74.48 | Off flood-path (heuristic) |
| Makrāna | 24 | 141.4 | 94,487 | 27.0436 | 74.7245 | 27.24 | 26.84 | 74.92 | 74.52 | Off flood-path (heuristic) |
| Nīmbāhera | 24 | 142.4 | 61,949 | 24.6217 | 74.6800 | 24.82 | 24.42 | 74.88 | 74.48 | Off flood-path (heuristic) |
| Basi | 24 | 142.9 | 26,029 | 26.8315 | 76.0486 | 27.03 | 26.63 | 76.25 | 75.85 | Downstream (heuristic - verify) |
| Lālsot | 24 | 142.9 | 34,363 | 26.5595 | 76.3291 | 26.76 | 26.36 | 76.53 | 76.13 | Downstream (heuristic - verify) |
| Merta | 24 | 143.8 | 46,070 | 26.6486 | 74.0341 | 26.85 | 26.45 | 74.23 | 73.83 | Off flood-path (heuristic) |
| Māngrol | 24 | 147.2 | 25,073 | 25.3306 | 76.5097 | 25.53 | 25.13 | 76.71 | 76.31 | Off flood-path (heuristic) |
| Sojat | 24 | 148.8 | 43,023 | 25.9249 | 73.6663 | 26.12 | 25.72 | 73.87 | 73.47 | Off flood-path (heuristic) |
| Renwāl | 24 | 149.1 | 29,201 | 27.1577 | 75.3581 | 27.36 | 26.96 | 75.56 | 75.16 | Downstream (heuristic - verify) |
| Kuchāman | 24 | 149.4 | 61,969 | 27.1474 | 74.8565 | 27.35 | 26.95 | 75.06 | 74.66 | Off flood-path (heuristic) |
| Bilāra | 24 | 149.5 | 41,710 | 26.1807 | 73.7055 | 26.38 | 25.98 | 73.91 | 73.51 | Off flood-path (heuristic) |
| Manāsa | 35 | 150.4 | 26,551 | 24.4776 | 75.1410 | 24.68 | 24.28 | 75.34 | 74.94 | Off flood-path (heuristic) |
| Sangod | 24 | 152.0 | 21,846 | 24.9271 | 76.2865 | 25.13 | 24.73 | 76.49 | 76.09 | Off flood-path (heuristic) |
| Rājsamand | 24 | 152.9 | 67,798 | 25.0714 | 73.8798 | 25.27 | 24.87 | 74.08 | 73.68 | Off flood-path (heuristic) |
| Rāmganj Mandi | 24 | 153.9 | 41,328 | 24.6465 | 75.9433 | 24.85 | 24.45 | 76.14 | 75.74 | Off flood-path (heuristic) |
| Rāmpura | 35 | 154.3 | 18,495 | 24.4670 | 75.4400 | 24.67 | 24.27 | 75.64 | 75.24 | Off flood-path (heuristic) |
| Baroda | 35 | 154.7 | 18,437 | 25.5000 | 76.6500 | 25.7 | 25.3 | 76.85 | 76.45 | Off flood-path (heuristic) |
| Fatehnagar | 24 | 154.9 | 22,812 | 24.8149 | 74.0950 | 25.01 | 24.61 | 74.3 | 73.9 | Off flood-path (heuristic) |
| Nimach | 24 | 155.0 | 128,561 | 24.4595 | 74.8662 | 24.66 | 24.26 | 75.07 | 74.67 | Off flood-path (heuristic) |
| Sheopur | 35 | 155.9 | 71,951 | 25.6647 | 76.6962 | 25.86 | 25.46 | 76.9 | 76.5 | Downstream (heuristic - verify) |
| Sātalkheri | 24 | 156.3 | 15,617 | 24.6522 | 75.9983 | 24.85 | 24.45 | 76.2 | 75.8 | Off flood-path (heuristic) |
| Merta Road | 24 | 158.0 | 16,905 | 26.7227 | 73.9176 | 26.92 | 26.52 | 74.12 | 73.72 | Off flood-path (heuristic) |
| Rāmgarh | 24 | 158.0 | 29,834 | 27.2510 | 75.1789 | 27.45 | 27.05 | 75.38 | 74.98 | Downstream (heuristic - verify) |
| Bhānpura | 35 | 158.3 | 21,013 | 24.5130 | 75.7469 | 24.71 | 24.31 | 75.95 | 75.55 | Off flood-path (heuristic) |
| Suket | 24 | 159.3 | 22,319 | 24.6461 | 76.0417 | 24.85 | 24.45 | 76.24 | 75.84 | Off flood-path (heuristic) |
| Bārān | 24 | 159.4 | 117,992 | 25.1000 | 76.5167 | 25.3 | 24.9 | 76.72 | 76.32 | Off flood-path (heuristic) |
| Chaumu | 24 | 159.5 | 64,417 | 27.1696 | 75.7223 | 27.37 | 26.97 | 75.92 | 75.52 | Downstream (heuristic - verify) |
| Danta | 24 | 163.1 | 15,594 | 27.2964 | 75.1867 | 27.5 | 27.1 | 75.39 | 74.99 | Downstream (heuristic - verify) |
| Nāthdwāra | 24 | 166.1 | 42,016 | 24.9381 | 73.8239 | 25.14 | 24.74 | 74.02 | 73.62 | Off flood-path (heuristic) |
| Dausa | 24 | 166.9 | 85,960 | 26.8900 | 76.3358 | 27.09 | 26.69 | 76.54 | 76.14 | Downstream (heuristic - verify) |
| Chhoti Sādri | 24 | 167.3 | 18,360 | 24.3815 | 74.7012 | 24.58 | 24.18 | 74.9 | 74.5 | Off flood-path (heuristic) |
| Gotan | 24 | 168.2 | 17,700 | 26.6555 | 73.7371 | 26.86 | 26.46 | 73.94 | 73.54 | Off flood-path (heuristic) |
| Jhālāwār | 24 | 171.0 | 66,919 | 24.5963 | 76.1650 | 24.8 | 24.4 | 76.36 | 75.96 | Off flood-path (heuristic) |
| Bari Sādri | 24 | 171.6 | 15,713 | 24.4134 | 74.4733 | 24.61 | 24.21 | 74.67 | 74.27 | Off flood-path (heuristic) |
| Bhawāni Mandi | 35 | 171.7 | 42,283 | 24.4158 | 75.8355 | 24.62 | 24.22 | 76.04 | 75.64 | Off flood-path (heuristic) |
| Pīpār | 24 | 171.8 | 36,810 | 26.3844 | 73.5439 | 26.58 | 26.18 | 73.74 | 73.34 | Off flood-path (heuristic) |
| Gangāpur | 24 | 172.0 | 120,115 | 26.4725 | 76.7174 | 26.67 | 26.27 | 76.92 | 76.52 | Downstream (heuristic - verify) |
| Kuchera | 24 | 174.2 | 23,468 | 26.9875 | 73.9711 | 27.19 | 26.79 | 74.17 | 73.77 | Off flood-path (heuristic) |
| Garot | 35 | 175.0 | 15,122 | 24.3234 | 75.6520 | 24.52 | 24.12 | 75.85 | 75.45 | Off flood-path (heuristic) |
| Reengus | 24 | 175.5 | 26,139 | 27.3636 | 75.5684 | 27.56 | 27.16 | 75.77 | 75.37 | Downstream (heuristic - verify) |
| Losal | 24 | 176.1 | 28,504 | 27.4000 | 74.9167 | 27.6 | 27.2 | 75.12 | 74.72 | Off flood-path (heuristic) |
| Jhālrapātan | 24 | 176.3 | 37,506 | 24.5420 | 76.1724 | 24.74 | 24.34 | 76.37 | 75.97 | Off flood-path (heuristic) |
| Bhindār | 24 | 176.7 | 17,878 | 24.5023 | 74.1855 | 24.7 | 24.3 | 74.39 | 73.99 | Off flood-path (heuristic) |
| Sunel | 24 | 181.5 | 15,840 | 24.3707 | 75.9571 | 24.57 | 24.17 | 76.16 | 75.76 | Off flood-path (heuristic) |
| Manoharpur | 24 | 181.5 | 28,928 | 27.2977 | 75.9495 | 27.5 | 27.1 | 76.15 | 75.75 | Downstream (heuristic - verify) |
| Panth Pīplia | 35 | 182.4 | 15,070 | 24.1951 | 75.0060 | 24.4 | 24.0 | 75.21 | 74.81 | Off flood-path (heuristic) |
| Pāli | 24 | 183.0 | 230,075 | 25.7728 | 73.3234 | 25.97 | 25.57 | 73.52 | 73.12 | Off flood-path (heuristic) |
| Dīdwāna | 24 | 183.8 | 53,749 | 27.4010 | 74.5754 | 27.6 | 27.2 | 74.78 | 74.38 | Off flood-path (heuristic) |
| Sādri | 24 | 184.8 | 27,390 | 25.1855 | 73.4529 | 25.39 | 24.99 | 73.65 | 73.25 | Off flood-path (heuristic) |
| Sri Mādhopur | 24 | 187.3 | 31,366 | 27.4660 | 75.5974 | 27.67 | 27.27 | 75.8 | 75.4 | Downstream (heuristic - verify) |
| Ajeetgarh | 24 | 188.9 | 15,414 | 27.4193 | 75.8214 | 27.62 | 27.22 | 76.02 | 75.62 | Downstream (heuristic - verify) |
| Shāmgarh | 35 | 189.1 | 24,637 | 24.1882 | 75.6390 | 24.39 | 23.99 | 75.84 | 75.44 | Off flood-path (heuristic) |
| Mūndwa | 24 | 190.4 | 17,465 | 27.0631 | 73.8230 | 27.26 | 26.86 | 74.02 | 73.62 | Off flood-path (heuristic) |
| Shāhpura | 24 | 191.3 | 33,895 | 27.3912 | 75.9596 | 27.59 | 27.19 | 76.16 | 75.76 | Downstream (heuristic - verify) |
| Mandsaur | 35 | 195.7 | 141,667 | 24.0718 | 75.0699 | 24.27 | 23.87 | 75.27 | 74.87 | Off flood-path (heuristic) |
| Bāndīkūi | 24 | 196.2 | 44,664 | 27.0509 | 76.5733 | 27.25 | 26.85 | 76.77 | 76.37 | Downstream (heuristic - verify) |
| Bhuwāna | 24 | 197.7 | 17,665 | 24.6214 | 73.7082 | 24.82 | 24.42 | 73.91 | 73.51 | Off flood-path (heuristic) |
| Sīkar | 24 | 198.2 | 244,497 | 27.6121 | 75.1400 | 27.81 | 27.41 | 75.34 | 74.94 | Off flood-path (heuristic) |
| Bāli | 24 | 199.4 | 19,880 | 25.1973 | 73.2912 | 25.4 | 25.0 | 73.49 | 73.09 | Off flood-path (heuristic) |

---

**Total dams processed:** 35  
**Total place-entries across all dams:** 6814 (places near multiple dams are counted once per dam)  
**Entries flagged 'Downstream (heuristic)':** 1697 -- again, heuristic only, requires model validation.
