# Tech Stack — Dam Breakage Simulation & Early Warning Platform (SIH 2026)

## 1. Stack Summary Table

| Layer | Tool | Alternative | Notes |
|---|---|---|---|
| Terrain sculpting | Gaea (free tier) or World Machine | Houdini, QGIS (if real-world DEM) | Per-dam terrain, exported as heightmap |
| Breach physics | HEC-RAS 2D (breach module) | ANUGA (Python-native) | ANUGA preferred if batch-scripting many scenarios for ML training data |
| Flood routing | HEC-RAS 2D or ANUGA | TELEMAC-MASCARET | Outputs depth/velocity/arrival-time grids |
| Breach ML model | scikit-learn / XGBoost / LightGBM | PyTorch (only if dataset is large) | Tabular regression: dam params → breach outcome |
| Dam Health AI — risk scoring | scikit-learn / XGBoost, or a small PyTorch model if time-series depth is needed | LSTM (PyTorch) for sequence-based risk trend modeling | Combines sensor + rainfall + CV anomaly score into one Failure Risk Score |
| Dam Health AI — CV anomaly detection | Pretrained CNN (e.g., ResNet/EfficientNet via `torchvision`), fine-tuned | YOLO (if bounding-box crack/anomaly localization is wanted) | Fine-tune on sample crack/deformation imagery; use a heuristic/rule-based placeholder if time is short |
| Data ingestion / time-series storage | FastAPI + PostgreSQL (with TimescaleDB extension) | InfluxDB | TimescaleDB keeps everything in one Postgres instance instead of a separate time-series DB |
| GIS Impact Engine | Python (`geopandas`, `rasterio`, `shapely`) | PostGIS spatial queries | Overlay village/road/building layers against depth/arrival rasters |
| Evacuation Route Engine | Python (`networkx` for road-graph shortest path) + `osmnx` (if using OpenStreetMap road data) | Custom Dijkstra implementation | `osmnx` pulls real Indian road network data for the demo region |
| Backend/API | FastAPI | Flask/Django | Async-friendly; single Python codebase across ML, simulation, and API layers |
| Database | PostgreSQL + PostGIS + TimescaleDB | Separate Postgres + InfluxDB + Mongo | One database technology minimizes ops overhead for a hackathon team |
| Auth | FastAPI + JWT (e.g., `python-jose`) + role/scope claims | Auth0 (free tier) | Self-rolled JWT is simpler to customize for the 5-role permission matrix |
| 3D web rendering | Three.js | deck.gl, CesiumJS | Three.js for custom/sculpted per-dam terrain; CesiumJS is the swap-in if using real-world geo terrain instead |
| Map view (India, dam markers) | Leaflet or Mapbox GL JS (free tier) | Google Maps JS API | Leaflet is free/open-source and sufficient for marker + popup use cases |
| Frontend framework | React + TypeScript | — | Component structure fits map, cards, tabs, forms |
| Charts/dashboard | Recharts | Plotly.js, Chart.js | Sensor history graphs, risk trend graphs |
| Real-time-ish updates | Polling (`setInterval` + REST) | WebSockets (FastAPI supports natively) | WebSockets are the correct upgrade if live risk-score/alert push is a priority feature to demo; polling is the simpler fallback |
| Notifications | Web push (dashboard) + mocked SMS/siren interface | Twilio (free trial tier) for real SMS | Use Twilio only if trial credits comfortably cover the demo; otherwise mock and state so clearly in the report |
| Detailed 3D models (dam, buildings) | Blender (optional) | — | Export via glTF into Three.js scene |
| Hosting (frontend) | Vercel or Netlify | GitHub Pages | Free tier |
| Hosting (backend) | Render or Railway | Fly.io | Free tier; confirm it supports the Postgres extensions needed (PostGIS/TimescaleDB) |
| Version control / collaboration | Git + GitHub, GitHub Projects/Issues for task tracking | — | Use the `api_endpoints.md` contract as the shared source of truth referenced in issues |

## 2. Why Each Choice, In Detail

### Dam Health AI — two sub-models, kept separate
The CV anomaly-detection model (imagery → structural anomaly score) and the risk-scoring model (sensors + rainfall + anomaly score → Failure Risk Score) are deliberately kept as two separate, independently-testable models rather than one end-to-end model. This matters for a hackathon: it lets you demo/validate each piece on its own (e.g., show the CV model correctly flagging a crack in a sample image, separately from showing the risk score responding to a rising water level), and lets different team members work on each without blocking each other.

### TimescaleDB over a separate time-series database
Sensor/risk-score data is fundamentally time-series, which normally argues for InfluxDB or similar. But running a second database technology adds real ops overhead for a small team on a deadline. TimescaleDB is a PostgreSQL extension — you get proper time-series query performance while keeping one database, one connection pool, and the ability to `JOIN` sensor data against dam metadata and GIS tables directly.

### Evacuation routing: networkx + osmnx
`osmnx` pulls real OpenStreetMap road-network data for a given area (including Indian regions), which is far more convincing for a demo than hand-drawn road segments. `networkx` then runs shortest-path algorithms over that graph, with flooded road segments (from the GIS Impact Engine) removed/penalized before computing the route — this is a well-established, simple approach (weighted shortest-path avoiding blocked edges) rather than needing custom routing logic.

### Auth: self-rolled JWT vs. Auth0
Given five custom roles with dam/district-scoped permissions (not just generic "admin/user"), a self-rolled JWT with custom claims (`role`, `dam_ids`, `district_ids`) is more directly controllable than fitting a five-role scoped system into a third-party auth provider's free tier. Auth0 remains a reasonable fallback if the team wants to save backend time and can work within its role-model constraints.

### Map: Leaflet over Mapbox/Google Maps
Leaflet is free with no API key/usage-limit concerns, which matters for an unpredictable hackathon judging/demo environment. Mapbox GL JS is a reasonable upgrade if the team wants nicer default basemap styling and is comfortable with its free-tier usage limits.

### Real-time updates: start with polling, upgrade to WebSockets only if time allows
Polling (frontend re-fetches `/dams` or `/dams/{id}/risk` every N seconds) is simpler to build and debug, and is genuinely sufficient for the NFR2-stated update interval (15-60 min risk recompute — polling every 30s-1min for the demo is more than fast enough to feel live). WebSockets are worth adding only as a polish item if there's spare time, since they add real complexity (connection lifecycle, reconnection handling) that isn't necessary to hit the stated requirements.

### 3D/terrain layer — unchanged from the original flood-sim project
Three.js (or CesiumJS if switching to real-world geo terrain), the breach ML model, and the hydrodynamic routing tools carry over directly from the earlier flood-simulation-only scope — this platform wraps that pipeline with the health-monitoring, GIS, evacuation, and alerting layers around it, rather than replacing it.

## 3. Data Formats Between Stages

| From | To | Format |
|---|---|---|
| Sensor gateway | Ingestion API | JSON per reading: `{dam_id, sensor_type, value, timestamp}` |
| Rainfall API | Dam Health AI | JSON: current + forecast rainfall per catchment area |
| Satellite/drone imagery | CV anomaly model | Image files (JPEG/PNG/GeoTIFF), processed on ingestion or on a schedule |
| CV model | Risk-scoring model | Structural anomaly score (float, 0-1) + detected-anomaly metadata |
| Risk-scoring model | Database + `/dams/{id}/risk` | `{risk_score, risk_status, timestamp}` |
| Breach ML model | Hydrodynamic routing | Hydrograph (discharge vs. time) |
| Hydrodynamic routing | Data processing script | GeoTIFF depth/velocity per timestep, one arrival-time GeoTIFF |
| Data processing | Backend/frontend | Compressed JSON/binary array per timestep, referenced by `_ref` per `api_endpoints.md` conventions |
| GIS Impact Engine | Evacuation Route Engine | Per-asset impact records (JSON) |
| Evacuation Route Engine | Frontend | GeoJSON route geometries + per-village plan summary |
| Any module | Alerts | `{dam_id, severity, message}` triggering `/alerts` |

## 4. Suggested Repository Structure

```
dam-platform/
├── docs/
│   ├── PRD.md
│   ├── tech_stack.md
│   ├── constraints.md
│   ├── architecture.md
│   ├── api_endpoints.md
│   └── frontend_spec.md
├── ingestion/
│   ├── sensor_gateway.py
│   └── rainfall_fetch.py
├── dam-health-ai/
│   ├── cv_anomaly_model/
│   └── risk_scoring_model/
├── simulation/
│   ├── breach-ml/
│   ├── terrain/                # per-dam heightmaps
│   ├── physics/                # HEC-RAS/ANUGA project files, routing output
│   └── data-processing/        # raster_to_json.py, village_impact.py
├── gis-evacuation/
│   ├── impact_engine.py
│   └── route_engine.py
├── backend/
│   ├── main.py                 # FastAPI app
│   ├── routers/                # one router file per api_endpoints.md section
│   ├── models/                 # DB models (dams, sensors, scenarios, users, alerts)
│   └── auth/
├── frontend/
│   ├── mocks/                  # JSON fixtures matching api_endpoints.md shapes
│   └── src/
│       ├── components/         # MapView, DamCard, DamDetail tabs, TimeSlider, AlertsScreen
│       └── three/
└── README.md
```

## 5. Setup Order

1. Agree and freeze `docs/api_endpoints.md` v1 before either team writes feature code (Phase 0 in PRD).
2. Backend: Python env, FastAPI, PostgreSQL with PostGIS + TimescaleDB extensions installed, JWT auth scaffold.
3. Frontend: Node/React/TypeScript scaffold, Leaflet, Three.js, Recharts installed; `mocks/` folder populated first.
4. Simulation: carry over the earlier flood-sim project's environment (HEC-RAS/ANUGA, `rasterio`, `geopandas`) unchanged.
5. Dam Health AI: Python env with `torchvision`/`scikit-learn`/`xgboost`; sample sensor + imagery mock-data generator built early so this module isn't blocked on real data.
6. GIS/Evacuation: `networkx`, `osmnx`, `shapely` installed; pull a sample Indian region's road network via `osmnx` for the demo dam(s).
7. Wire ingestion → Dam Health AI → simulation trigger → GIS/evacuation → alerts → API, in that order, matching PRD Phases 2-5.
