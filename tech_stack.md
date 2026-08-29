# Tech Stack — Flood-Guard AI (SIH 2026, PS 26161)

This stack follows the master prompt's recommended architecture directly (React/Next.js, Leaflet/MapLibre, FastAPI, GDAL/GeoPandas/Rasterio/Shapely, PostgreSQL+PostGIS, Celery/Redis, Google Earth Engine), with the SPH/Delft3D hydrodynamic layer sitting behind an adapter so a genuine physics run and a demo surrogate are interchangeable without touching downstream code.

## 1. Stack Summary Table

| Layer | Tool | Alternative | Notes |
|---|---|---|---|
| Frontend framework | React / Next.js | — | Next.js if SSR/routing across 18 dashboard pages is worth the setup; plain React + Vite if the team wants a lighter build |
| Map | Leaflet | MapLibre GL JS | Leaflet is free/open-source, no API key, sufficient for markers, layers, and a timeline slider; MapLibre if vector-tile styling for the flood-extent/velocity layers is wanted |
| Backend/API | Python, FastAPI | Flask/Django | Async-friendly; one Python codebase spans API, geospatial processing, and simulation-adapter glue |
| Geospatial processing | GDAL, GeoPandas, Rasterio, Shapely | PostGIS-only spatial queries | Used for DEM clipping/reprojection, raster↔vector conversion, and the village/road/building overlay logic in the Risk Engine |
| Database | PostgreSQL + PostGIS | Separate spatial DB | One database for dam registry, scenarios, grids metadata, impact records, evacuation plans, alerts/priority lists |
| Task/queue processing | Celery + Redis | RQ, Dramatiq | SPH/Delft3D runs, GEE pulls, and ensemble (uncertainty) runs are queued/async jobs, not request-blocking calls |
| Remote sensing | Google Earth Engine Python API | Sentinel Hub API | GEE gives free, scriptable access to Sentinel/Landsat plus SRTM-derived products for both satellite validation and near-real-time flood analysis |
| SPH engine | Adapter over an open SPH implementation (e.g. `PySPH` or `DualSPHysics` where feasible) | Simplified surrogate (shallow-water/kinematic approximation) if a full SPH run isn't feasible in the timeframe | Real Model Mode vs. Demo/Surrogate Mode, always labeled — never presented interchangeably |
| Delft3D engine | Adapter over Delft3D / Delft3D-FM (Deltares, free for non-commercial/academic use) | Simplified 2D shallow-water surrogate (e.g. a lightweight `ANUGA` or raster-routing approximation) if Delft3D setup isn't feasible in time | Same Real/Surrogate labeling rule applies |
| Hydrodynamic coupling | Custom adapter layer converting SPH near-field output into a discharge-vs-time hydrograph for Delft3D's boundary condition | Run independently only, and present as "comparison mode" if coupling isn't built in time | Document exactly which mode (independent vs. coupled) produced a given result |
| Uncertainty/ensemble runner | Celery-orchestrated batch of Hydrodynamic Engine runs across a fallback parameter range | — | Aggregation (probability, confidence) done in `numpy`/`pandas` |
| Evacuation routing | Python `networkx` (shortest path) + `osmnx` (OpenStreetMap road network) | Custom Dijkstra | `osmnx` pulls real Indian road-network data for the demo region; `networkx` recomputes shortest-path as road/bridge safety status changes over time |
| Priority/decision scoring | Weighted scoring function (`pandas`/`numpy`) over documented factors (probability, depth, velocity, arrival time, population, infrastructure, accessibility) | Small `scikit-learn` model if the team wants a learned weighting | Kept as an explainable, inspectable formula by default — a black-box model works against the Explainability requirement (G13/FR12) unless its weights are also surfaced |
| AI explanation / scenario assistant | LLM call (via Anthropic API or similar) constrained to retrieve figures from the simulation database and template them into an explanation | Rule-based templating only, if an LLM integration is out of scope | Must never fabricate a numeric result — retrieval-grounded only, per FR15.2 |
| Auth | FastAPI + JWT (`python-jose`) with role claims | Auth0 (free tier) | Four roles (`PUBLIC`, `ANALYST`, `EMERGENCY_MANAGER`, `SYSTEM_ADMIN`), each scoped to specific `dam_ids` where relevant |
| Charts/dashboard | Recharts | Plotly.js, Chart.js | Model-comparison charts, uncertainty confidence bars, risk-score/priority visualizations |
| Offline mode | Service worker + IndexedDB (browser) caching a scenario's map tiles/results/evacuation plan | — | Pre-download triggered from the dashboard; PDF report generation must work from the cached payload without a live API call |
| Exports | `geopandas`/`fiona` for SHP/GeoJSON, `simplekml` for KML, `pandas` for CSV, `WeasyPrint`/`ReportLab` for PDF | — | All export formats generated server-side from the same underlying scenario data, never hand-built per format |
| Hosting (frontend) | Vercel or Netlify | GitHub Pages | Free tier |
| Hosting (backend) | Render or Railway | Fly.io | Free tier; confirm PostGIS extension support and enough memory/CPU headroom for Celery workers running simulation jobs |
| Version control / collaboration | Git + GitHub, GitHub Projects/Issues | — | `api_endpoints.md` is the shared source of truth referenced in issues |

## 2. Why Each Choice, In Detail

### Real Model Mode vs. Demo/Surrogate Mode — the central engineering decision
Genuine SPH and Delft3D runs are heavy, often desktop-GUI-oriented tools not designed for a hackathon's compressed timeline or free-tier hosting. Rather than either (a) falsely claiming a simplified approximation is a full SPH/Delft3D run, or (b) not attempting the real tools at all, the adapter layer makes both paths implement the same interface (`run(scenario_params) -> {depth_grid, velocity_grid, arrival_time_grid, model_mode}`). This lets the team start immediately with the surrogate mode (needed for every other module to be buildable in parallel), and swap in a genuine SPH/Delft3D run later for the hero dam if time allows — without any downstream code (Flood Digital Twin, Risk Engine, Evacuation Intelligence) needing to change. `model_mode` is a first-class field in every response, and the dashboard is required to render it (NFR7).

### Why FastAPI end-to-end
Ingestion, the simulation adapter, the uncertainty ensemble runner, the risk/evacuation logic, and the API itself are all naturally async/IO-bound (waiting on Celery jobs, GEE calls, DB queries) — one Python/FastAPI codebase avoids a polyglot backend for a small team.

### Why PostgreSQL + PostGIS (single database)
Dam/reservoir metadata, scenario records, impact tables, evacuation plans, and priority lists are all relational and frequently joined against spatial geometry (villages, roads, buildings). PostGIS keeps geometry operations in the same database instead of running a second spatial store, minimizing ops overhead for a hackathon team.

### Why Celery + Redis for the simulation/ensemble/GEE jobs
SPH/Delft3D runs (even surrogate ones) and GEE image pulls should never block an API request; they're queued jobs with a `status` the frontend polls (`queued` → `running` → `done`). Ensemble/uncertainty runs are naturally a batch of such jobs fanned out and aggregated on completion — Celery's task groups fit this directly.

### Why Google Earth Engine over a generic satellite API
GEE gives free, scriptable, pre-processed access to Sentinel-2/Sentinel-1 and Landsat imagery plus common derived products, without managing raw scene downloads — appropriate for both the Satellite Validation workflow (8.9 in `PRD.md`) and the standalone Near-Real-Time Flood Analysis workflow (FR14.1), and it is what the master prompt specifically calls out.

### Why networkx + osmnx for evacuation routing
`osmnx` pulls real OpenStreetMap road-network data for the demo region — materially more convincing to judges than hand-drawn segments — and `networkx` runs shortest-path with flooded/unsafe segments (from Dynamic Road & Bridge Safety) removed or penalized as of a given simulated time. Because road safety is time-dependent here (not a single static flooded-roads layer), the route recomputation is re-run per relevant timestep rather than once.

### Why an explainable scoring formula over a black-box model for priority
FR12/G13 require every recommendation to be explainable back to specific inputs. A documented weighted-sum formula (with the weights themselves visible on the Assumptions & Data Quality page) satisfies this directly; a trained black-box model would need its own separate explainability layer (e.g. SHAP) to meet the same bar, which is unnecessary complexity unless the team specifically wants to demonstrate that capability.

### Why a retrieval-grounded LLM (if included) rather than a general chatbot
The master prompt explicitly warns against "a useless generic chatbot." If a conversational layer is built, its only job is to answer scenario-specific questions by querying the simulation database and templating the retrieved numbers into a sentence — never generating a flood number itself.

### Why service worker + IndexedDB for Offline Mode
This keeps the offline capability inside the same web app (no native app build) — a scenario's tiles/results/evacuation plan are cached client-side on explicit "pre-download," and PDF report generation is implemented to run entirely against that cached payload so it works with no network at all.

## 3. Data Formats Between Stages

| From | To | Format |
|---|---|---|
| Dam/reservoir + breach input | Missing-Data Diagnostic Engine | JSON scenario-input object; missing fields explicitly `null`, not omitted |
| Missing-Data Diagnostic Engine | Scenario Generator | Same object, filled with fallback values + `assumptions: [...]` array |
| Scenario Generator | Hydrodynamic Engine (Celery job) | JSON job payload: dam terrain/river refs + resolved scenario parameters |
| SPH | Delft3D (coupled mode only) | Discharge-vs-time hydrograph, JSON array of `{t, discharge}` |
| Hydrodynamic Engine | Flood Digital Twin | GeoTIFF depth/velocity per timestep + one arrival-time GeoTIFF, referenced by `_ref` |
| Flood Digital Twin | Uncertainty Engine | Set of GeoTIFFs across ensemble members, keyed by `scenario_group_id` |
| Flood Digital Twin | Satellite Validation | Simulated extent polygon (from thresholded depth grid) vs. GEE-extracted observed extent polygon |
| Flood Digital Twin | Risk Engine | Depth/velocity/arrival grids + village/road/building/infrastructure vector layers |
| Risk Engine | Evacuation Intelligence | Per-asset impact records (JSON) |
| Evacuation Intelligence | Emergency Decision Engine | Per-village evacuation classification + recommended route/shelter (JSON) |
| Emergency Decision Engine | Frontend | Ranked priority list (JSON) + per-item explainability payload |
| Any module | Export Center | GeoTIFF/vector layers → SHP/KML/GeoJSON/CSV; full scenario bundle → PDF |

## 4. Suggested Repository Structure

```
flood-guard-ai/
├── docs/
│   ├── PRD.md
│   ├── tech_stack.md
│   ├── constraints.md
│   ├── architecture.md
│   ├── api_endpoints.md
│   ├── frontend_spec.md
│   └── important-dam-locations.md
├── data-layer/
│   ├── dam_registry.py
│   ├── dem_ingest.py            # SRTM/ASTER fetch + clip
│   ├── gee_client.py            # Sentinel/Landsat pull via GEE Python API
│   └── vector_layers/           # villages, roads, bridges, buildings, shelters
├── scenario-engine/
│   ├── missing_data_diagnostic.py
│   ├── scenario_generator.py    # best/likely/worst-case + manual params
│   └── assumption_log.py
├── hydrodynamic-engine/
│   ├── adapter.py               # common interface: real vs. surrogate
│   ├── sph/
│   │   ├── real_model/          # PySPH/DualSPHysics wrapper, if built
│   │   └── surrogate/
│   └── delft3d/
│       ├── real_model/          # Delft3D-FM wrapper, if built
│       └── surrogate/
├── flood-digital-twin/
│   ├── grid_store.py
│   └── timestep_api.py
├── uncertainty-engine/
│   ├── ensemble_runner.py
│   └── probability_confidence.py
├── satellite-validation/
│   ├── water_extraction.py      # GEE water-index thresholding
│   └── iou_agreement.py
├── risk-and-evacuation/
│   ├── impact_engine.py
│   ├── time_to_flood.py
│   ├── road_bridge_safety.py    # time-aware safety status
│   ├── route_engine.py          # networkx + osmnx
│   └── priority_engine.py
├── emergency-decision/
│   ├── action_engine.py
│   └── explainability.py
├── backend/
│   ├── main.py                  # FastAPI app
│   ├── routers/                 # one router file per api_endpoints.md section
│   ├── models/                  # DB models (dams, scenarios, grids meta, impact, evacuation, priority, users)
│   ├── celery_app.py
│   └── auth/
└── frontend/
    ├── mocks/                   # JSON fixtures matching api_endpoints.md shapes
    └── src/
        ├── pages/                # 18 dashboard pages per frontend_spec.md
        ├── components/           # MapView, ScenarioBuilder, TimeSlider, PriorityList, ExplainPanel
        └── offline/              # service worker + IndexedDB cache logic
```

## 5. Setup Order

1. Agree and freeze `docs/api_endpoints.md` v1 before any team writes feature code (Phase 0 in `PRD.md`).
2. Backend: Python env, FastAPI, PostgreSQL with PostGIS installed, Redis + Celery worker scaffold, JWT auth scaffold.
3. Data layer: GDAL/GeoPandas/Rasterio/Shapely installed; GEE Python API authenticated (service account or user OAuth) and one test Sentinel pull confirmed working — do this early, GEE auth setup is a common late-stage blocker.
4. Frontend: Node/React (or Next.js) scaffold, Leaflet, Recharts installed; `mocks/` folder populated first against the frozen API contract.
5. Hydrodynamic Engine: stand up the adapter interface and the surrogate implementations for SPH and Delft3D first (unblocks every downstream module); attempt real-model wrappers only once the surrogate path is fully wired end-to-end.
6. Evacuation/routing: `networkx`, `osmnx` installed; pull the demo region's real road network via `osmnx` early, since large-area pulls can be slow.
7. Wire data layer → missing-data diagnostic → scenario generator → hydrodynamic engine → flood digital twin → uncertainty/satellite-validation → risk/evacuation → emergency decision → API, in that order, matching `PRD.md` Phases 1–6.
