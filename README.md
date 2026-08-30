# Flood-Guard AI

**An uncertainty-aware Dam-Break Digital Twin for predictive flood modelling, satellite validation, and intelligent emergency decision support.**
Built for Smart India Hackathon 2026 — Problem Statement SIH26161 (NTRO): *"Dam Break Inundation Modelling Using Hydrodynamic Modelling of Any River."*

Flood-Guard AI is **not** another dam-break-to-flood-map tool. Given a dam, a reservoir state, and a breach scenario, it runs a hydrodynamic simulation, predicts not just *where* the flood goes but *when* it arrives and *how confident* the system is, validates its own prediction against satellite imagery, and converts all of that into a time-aware evacuation plan and a ranked emergency action list — with every recommendation auditable back to the inputs and assumptions that produced it.

## The Problem

Existing dam-break/flood tools generally stop at:

```
Dam Break → Flood Map
```

That leaves the actual decisions — who evacuates first, which road is still safe, how sure are we — unanswered. Flood-Guard AI closes that gap:

```
Dam Break → Hydrodynamic Simulation → Flood Prediction → Arrival-Time Prediction
    → Uncertainty Analysis → Satellite Validation → Risk Prioritization
    → Dynamic Evacuation Planning → Emergency Decision Support
```

The system is designed to answer, for any dam and river in India:

1. Where will the water go? 2. How fast will it move? 3. How deep will it get?
4. When will it reach each location? 5. How confident are we? 6. Who is most at risk?
7. Which roads/bridges will become unsafe, and when? 8. Which evacuation routes remain safe?
9. Which shelters are reachable? 10. Where should emergency teams deploy first?
11. How does the prediction compare against satellite-observed flood extent?

## How It Works

```
DAM + RESERVOIR INPUT   BREACH PARAMETERS   DEM + RIVER + LAND-USE + SATELLITE (GEE)
         │                      │                          │
         └──────────────────────┴───────────┬──────────────┘
                                             ▼
                                  DATA LAYER → PREPROCESSING
                                             ▼
                                     SCENARIO GENERATOR
                              (best-case / most-likely / worst-case,
                               ensemble runs for missing/uncertain inputs)
                                             ▼
                                  HYDRODYNAMIC ENGINE
                                 ┌──────────┴──────────┐
                               SPH                  Delft3D
                        (breach-zone particles)   (grid-based propagation)
                                 └──────────┬──────────┘
                                             ▼
                                   FLOOD DIGITAL TWIN
                             Depth │ Velocity │ Arrival Time
                                             ▼
                        ┌────────────────────┼────────────────────┐
                        ▼                    ▼                    ▼
              UNCERTAINTY ENGINE     SATELLITE VALIDATION     RISK ENGINE
              (probability/          (GEE Sentinel/Landsat    (priority score:
               confidence maps)       vs. simulated extent,    depth+velocity+
                                       IoU/agreement)           arrival+population+
                                                                 infrastructure)
                        └────────────────────┼────────────────────┘
                                             ▼
                                  EVACUATION INTELLIGENCE
                       (time-to-flood map, dynamic road/bridge safety,
                        safest & fastest routes, shelter reachability)
                                             ▼
                                EMERGENCY DECISION ENGINE
                        (who/where/when/which-route, ranked action list,
                         explainability: "why is Village A Priority 1?")
                                             ▼
                                       DASHBOARD
                     (command-center map, model comparison, exports:
                              SHP / KML / GeoJSON / CSV / PDF)
```

Full architectural detail is in [`docs/architecture.md`](docs/architecture.md).

## Home / Command Center

The dashboard opens on a single 3D India view — dam markers over real terrain, a radial vignette keeping focus on the country rather than the full globe, and a side list of every registered dam as a status-tagged card. Hovering or clicking a marker surfaces a quick health brief; clicking a marker or its card dynamically routes into that dam's own hub, where live stats, expandable graphs, and the full 3D simulation suite live. Full spec: [`docs/frontend_spec.md`](docs/frontend_spec.md) §1–2; visual language: [`docs/design-system.md`](docs/design-system.md).

## Features

Mapped to the master prompt's 12 "unique features":

- **Multi-scenario simulation** — best-case / most-likely / worst-case runs generated automatically from reservoir level, breach width, and breach formation time, plus user-editable parameters.
- **Uncertainty-aware prediction** — where an input (e.g. breach width) is unknown, the system runs an ensemble across plausible values and reports flood probability + confidence (High/Medium/Low) per location, rather than a single false-precision answer.
- **Time-to-flood mapping** — arrival-time bands (0–15 min, 15–30 min, 30–60 min, 1–3 hr) per location, not just a binary flooded/not-flooded map.
- **Dynamic road & bridge safety** — every road/bridge segment is evaluated as a function of time against predicted depth/velocity, so a route "safe now" but unsafe in 20 minutes is flagged before it's used.
- **Smart evacuation engine** — cross-references flood arrival time against travel time to the nearest reachable shelter per village, and recommends immediate evacuation, road evacuation, high-ground evacuation, or rescue-priority accordingly.
- **Emergency priority engine** — a single ranked action list across all affected villages, scored on flood probability, depth, velocity, arrival time, population, and infrastructure/road accessibility — not depth alone.
- **Missing-data diagnostic** — detects missing dam/breach parameters, documents the fallback assumption used, runs an ensemble instead of guessing silently, and logs it in a visible Assumption Log.
- **Satellite validation** — Sentinel/Landsat imagery via Google Earth Engine is used to extract observed water extent and compare it against the simulated flood extent (IoU, agreement %, over/under-prediction zones).
- **Forecast updating** — a documented (prototype-level) mechanism to fold new satellite observations or rainfall data into an updated prediction.
- **Offline / low-connectivity mode** — pre-downloadable scenario data and cached results so a field team can view results and generate a report without live connectivity, syncing later.
- **Emergency decision engine** — turns raw numbers ("depth = 4.2 m") into an action ("Evacuate Immediately — Use Route C — Move to Shelter B").
- **Auditability & explainability** — every recommendation carries an "Explain This Result" trail: inputs used, model/scenario, assumptions, confidence, and validation score.

## Tech Stack

| Layer | Tools |
|---|---|
| Frontend | React / Next.js |
| Home 3D globe | MapLibre GL JS (3D globe + terrain mode) |
| Per-dam 3D scene | three.js + `@react-three/fiber`/`drei` (terrain mesh, flood layers, drone free-fly camera) |
| Backend | Python, FastAPI |
| Geospatial processing | GDAL, GeoPandas, Rasterio, Shapely |
| Database | PostgreSQL + PostGIS |
| Task/queue processing | Celery + Redis |
| Remote sensing | Google Earth Engine Python API |
| Hydrodynamic engines | SPH (breach-zone) + Delft3D (propagation), behind a Real-Model/Demo-Surrogate adapter layer |
| AI components | Scenario recommendation, missing-data ensemble logic, priority scoring, NL explanation grounded in simulation DB (no hallucinated numbers) |

Full rationale, data formats, and setup order in [`docs/tech_stack.md`](docs/tech_stack.md).

## Documentation

| Document | Contents |
|---|---|
| [`docs/PRD.md`](docs/PRD.md) | Goals, functional/non-functional requirements, phased build plan |
| [`docs/tech_stack.md`](docs/tech_stack.md) | Full tool stack, rationale, data formats, repo structure, setup order |
| [`docs/constraints.md`](docs/constraints.md) | Technical/timeline/fidelity constraints, locked assumptions, known limitations |
| [`docs/architecture.md`](docs/architecture.md) | End-to-end system architecture and component ownership |
| [`docs/api_endpoints.md`](docs/api_endpoints.md) | Full API reference, user roles, and permission matrix |
| [`docs/design-system.md`](docs/design-system.md) | Visual language: color palette, shape/radius system, typography — applies to every page |
| [`docs/frontend_spec.md`](docs/frontend_spec.md) | Home/Command Center + 17 dam-scoped pages, all 3D-only, mapped to API endpoints |
| [`docs/important-dam-locations.md`](docs/important-dam-locations.md) | Reference dam/river locations and DEM bounding boxes for the demo |

## User Roles

| Role | Who |
|---|---|
| `PUBLIC` | Anyone viewing published scenarios on the dashboard |
| `ANALYST` | Builds/runs scenarios for a dam (student/researcher/dam operator equivalent) |
| `EMERGENCY_MANAGER` | District/HADR authority — approves evacuation plans, issues action lists, uses offline mode in the field |
| `SYSTEM_ADMIN` | Full platform access — manages dam registry, data sources, thresholds |

Full permission matrix in [`docs/api_endpoints.md`](docs/api_endpoints.md).

## Repository Structure

```
flood-guard-ai/
├── docs/                    # PRD, tech stack, constraints, architecture, API spec, frontend spec
├── data-layer/              # DEM, river network, land-use, dam/reservoir registry, GEE ingestion
├── scenario-engine/         # Scenario generator, missing-data diagnostic, assumption log
├── hydrodynamic-engine/
│   ├── sph/                 # SPH adapter (real model + surrogate)
│   └── delft3d/             # Delft3D adapter (real model + surrogate)
├── flood-digital-twin/      # Depth/velocity/arrival-time grid store + timestep API
├── uncertainty-engine/      # Ensemble runner, probability/confidence maps
├── satellite-validation/    # GEE water extraction, IoU/agreement, difference maps
├── risk-and-evacuation/     # Priority engine, time-to-flood, dynamic road safety, route/shelter logic
├── emergency-decision/      # Action-list generator, explainability engine
├── backend/                 # FastAPI app, routers, DB models, auth, Celery workers
└── frontend/                # React/Next.js app, mock fixtures, 3D scene layers, Home + dam-scoped pages
```

## Getting Started

### Prerequisites

- Python 3.12
- Node.js 22 or newer
- Git

### Local development

PowerShell terminal 1, from the repository root:

```powershell
Set-Location "C:\SDE Projects\SIH 2026"
& ".\.venv\Scripts\python.exe" -m pip install -r backend\requirements.txt
& ".\.venv\Scripts\python.exe" -m uvicorn backend.main:app --reload --host 127.0.0.1 --port 8000
```

PowerShell terminal 2:

```powershell
Set-Location "C:\SDE Projects\SIH 2026\frontend"
Copy-Item .env.example .env.local
& "C:\Program Files\nodejs\npm.cmd" ci
& "C:\Program Files\nodejs\npm.cmd" run dev -- --host 127.0.0.1 --port 5173
```

Open http://127.0.0.1:5173. The API health endpoint is http://127.0.0.1:8000/health and interactive API documentation is available at http://127.0.0.1:8000/docs.

The dashboard starts on the API-backed 3D dam registry. It loads all entries from `important-dam-locations.md` through `GET /dams`, sorts them by the server-provided status and water-level inputs, and keeps all risk/simulation outputs labeled as `surrogate` in the prototype.

### Deployment

**Backend on Render**

1. Create a Render Web Service connected to this repository.
2. Set the root directory to `backend`.
3. Use `render.yaml` as the service blueprint, or set:
  - Build command: `python -m pip install --upgrade pip && python -m pip install --only-binary=:all: -r requirements.txt`
  - Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
4. Confirm Render uses Python 3.12.10 from `backend/runtime.txt` (do not use Python 3.14 for this service).
5. Set `FRONTEND_ORIGIN` to the deployed Vercel URL, for example `https://flood-guard.vercel.app`.

**Frontend on Vercel**

1. Import this repository into Vercel.
2. Set the project root directory to `frontend`.
3. Vercel detects the Vite build automatically. The build command is `npm run build` and the output directory is `dist`.
4. Add `VITE_API_URL` with the public Render API URL, without a trailing slash, for example `https://flood-guard-api.onrender.com`.

`frontend/vercel.json` handles SPA deep-link rewrites. Set both deployment environment variables before the first production deploy so browser requests do not point at localhost.

### CI

`.github/workflows/ci.yml` runs on pushes and pull requests to `main`. It installs Python dependencies, compiles and smoke-tests the API, installs the frontend with `npm ci`, and runs the production build.

`.github/workflows/deploy.yml` supports provider deployment from `main`. Render and Vercel can also auto-deploy directly from their Git integrations. To enable the optional GitHub deploy jobs, create repository variable `VERCEL_DEPLOY_ENABLED=true` and secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`; create `RENDER_DEPLOY_ENABLED=true` and secret `RENDER_DEPLOY_HOOK` from the Render service's deploy hook. With the variables absent, the deploy workflow safely skips while CI continues to run.

## Important Notes

Flood-Guard AI is a hackathon prototype. SPH and Delft3D are integrated behind an adapter layer that clearly distinguishes **Real Model Mode** (actual physics engine, slower — "Accuracy Mode") from **Demo/Surrogate Mode** (fast mathematical approximation for live-demo responsiveness — "Rapid Response Mode"). The dashboard always labels which mode produced a given result. Real-time dam sensor monitoring, real historical dam-failure validation data, and full data-assimilation are out of scope for the prototype — see [`docs/constraints.md`](docs/constraints.md) for the complete, honest list of what's real vs. simplified in the current build. Every map/scene surface is 3D-only, built on real DEM-derived terrain, including a free-fly "drone view" camera mode; this raises the GPU/preprocessing bar over a flat 2D map and is a deliberate, documented trade-off (`constraints.md` C22–C23), not an accident of scope creep.

## Team

Built for Smart India Hackathon 2026.

## License

TBD.
