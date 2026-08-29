# System Architecture — Flood-Guard AI (SIH 2026, PS 26161)

## 1. High-Level Architecture

```
   DAM/RESERVOIR INPUT    BREACH INPUT    DEM · RIVER · LAND-USE    SENTINEL/LANDSAT (GEE)
          │                    │                   │                        │
          └────────────────────┴─────────┬─────────┴────────────────────────┘
                                          ▼
                                   ┌─────────────┐
                                   │ DATA LAYER  │
                                   └──────┬──────┘
                                          ▼
                              ┌────────────────────┐
                              │ DATA PREPROCESSING  │
                              └──────────┬──────────┘
                                          ▼
                       ┌──────────────────────────────────┐
                       │ MISSING-DATA DIAGNOSTIC ENGINE    │──▶ ASSUMPTION LOG
                       └──────────────────┬─────────────────┘
                                          ▼
                              ┌────────────────────┐
                              │ SCENARIO GENERATOR  │  (best/likely/worst-case + ensemble)
                              └──────────┬──────────┘
                                          ▼
                              ┌────────────────────┐
                              │ HYDRODYNAMIC ENGINE │
                              └──────────┬──────────┘
                                    ┌─────┴─────┐
                                    ▼           ▼
                                  SPH        DELFT3D
                            (breach-zone,  (grid-based
                             particles)     propagation)
                                    └─────┬─────┘
                                          ▼  (independent OR coupled via hydrograph)
                              ┌────────────────────┐
                              │ FLOOD DIGITAL TWIN  │  Depth │ Velocity │ Arrival Time
                              └──────────┬──────────┘
                     ┌────────────────────┼────────────────────┐
                     ▼                    ▼                    ▼
          ┌────────────────┐   ┌───────────────────┐   ┌───────────────┐
          │ UNCERTAINTY     │   │ SATELLITE          │   │ RISK ENGINE   │
          │ ENGINE          │   │ VALIDATION (GEE)   │   │ (priority     │
          │ (probability/   │   │ IoU, agreement %,  │   │  score)       │
          │  confidence)    │   │ difference map      │   │               │
          └────────┬────────┘   └─────────┬───────────┘   └───────┬───────┘
                    └──────────────────────┼───────────────────────┘
                                          ▼
                              ┌─────────────────────────┐
                              │ EVACUATION INTELLIGENCE  │
                              │ Time-to-Flood │ Dynamic  │
                              │ Road/Bridge Safety │      │
                              │ Route + Shelter Matching  │
                              └────────────┬──────────────┘
                                          ▼
                              ┌─────────────────────────┐
                              │ EMERGENCY DECISION ENGINE │
                              │ Action list │ Explainability│
                              └────────────┬──────────────┘
                                          ▼
                                   ┌─────────────┐
                                   │  DASHBOARD  │──▶ EXPORTS (SHP/KML/GeoJSON/CSV/PDF)
                                   └─────────────┘
```

## 2. Subsystems

### 2.1 Data Layer
Static + pulled-on-demand inputs, versioned per `dam_id`:
- **Dam/reservoir registry** — location, height, reservoir capacity/water level, inflow/outflow, catchment rainfall if available.
- **Environment layers** — DEM (SRTM/ASTER or other open DEM), river network geometry, terrain slope, river width/depth/geometry, land-use/land-cover, and village/road/bridge/building/shelter/critical-infrastructure layers, loaded once per dam during registration.
- **Satellite imagery** — Sentinel/Landsat pulled via the Google Earth Engine Python API, on demand or for a configured before/after window per scenario.

### 2.2 Data Preprocessing
Normalizes and clips all of the above to the dam's area of interest (per the bounding boxes in `important-dam-locations.md`), reprojects to one consistent coordinate reference per dam, and prepares the DEM/river network for the Hydrodynamic Engine.

### 2.3 Missing-Data Diagnostic Engine
- Runs at scenario-creation time against the preprocessed inputs.
- Detects missing/unspecified source-water, breach, or environment parameters.
- Applies a documented minimum/likely/maximum fallback per missing input, writes it to the **Assumption Log**, and flags the scenario for ensemble (uncertainty) treatment rather than a single silently-guessed run.

### 2.4 Scenario Generator (Multi-Scenario Engine)
- Accepts manual parameters (reservoir level, breach width/depth/side-slope/formation time, partial vs. complete failure vs. controlled release) or auto-generates best-case / most-likely / worst-case variants from a base input.
- Each generated variant becomes its own immutable `scenario_id` feeding the Hydrodynamic Engine independently.

### 2.5 Hydrodynamic Engine
Two components behind one adapter interface, each supporting **Real Model Mode** (actual SPH/Delft3D run) and **Demo/Surrogate Mode** (fast mathematical approximation) — every downstream consumer and dashboard page reads which mode produced a result and labels it accordingly:
- **SPH (Smoothed Particle Hydrodynamics)** — models the near-field/breach-zone flow as moving particles (position, velocity, mass, pressure, density); appropriate for the rapidly-changing flow immediately after breach.
- **Delft3D** — grid-based simulation of the wider domain (river, floodplain, downstream reach); outputs depth, water level, velocity, and flow direction per grid cell per timestep.
- **Independent comparison mode:** both run on the same scenario for direct comparison (extent, max depth, max velocity, arrival time, computation time, satellite agreement).
- **Coupled mode:** SPH's near-field output is converted into a discharge-vs-time hydrograph (or another justified boundary variable) that becomes Delft3D's upstream boundary condition for downstream propagation. The coupling variable and conversion step are documented explicitly wherever coupled mode is used.

### 2.6 Flood Digital Twin
- Stores, per scenario and per timestep: depth grid, velocity grid, and one arrival-time grid, referenced against the dam's terrain/environment snapshot.
- Represents the dam, reservoir, river, terrain, floodplain, villages, roads, buildings, and shelters as one live-updatable model: changing water level, breach parameters, or rainfall for a new scenario produces a new simulation and a new twin state (twin state is per-`scenario_id`, not mutated in place).

### 2.7 Uncertainty Engine
- Where the Missing-Data Diagnostic Engine flagged ensemble treatment, runs the Hydrodynamic Engine across the fallback parameter range instead of once.
- Aggregates the ensemble into a per-location flood probability and a High/Medium/Low confidence label; produces a Probability Flood Map and an Uncertainty Map.
- The calculation approach is documented on the Assumptions & Data Quality dashboard page — this is stated as a prototype-level approximation, not a full stochastic-hydrology treatment.

### 2.8 Satellite Validation
- Pulls Sentinel/Landsat imagery for the scenario's real-world time window (where the scenario corresponds to a real historical event) via GEE, extracts observed water extent (water-index thresholding), and compares it against the simulated flood extent.
- Computes Intersection-over-Union and agreement percentage; generates a difference map showing over-prediction and under-prediction zones.
- Also supports a standalone **Near-Real-Time Flood Analysis** workflow (before/after imagery, change detection) independent of a specific simulated scenario.

### 2.9 Risk Engine
- Overlays depth/velocity/arrival-time grids (optionally probability-weighted from the Uncertainty Engine) against villages, roads, buildings, agricultural land, schools, hospitals, and other critical infrastructure.
- Produces per-asset impact records (arrival time, expected depth/velocity, risk category) and feeds the Damage & Impact Analysis dashboard.

### 2.10 Evacuation Intelligence
Three tightly-linked components:
- **Time-to-Flood** — buckets the arrival-time grid into bands (0–15 min, 15–30 min, 30–60 min, 1–3 hr) per location, and computes Last Safe Departure Time = arrival time − travel time to shelter − safety margin.
- **Dynamic Road & Bridge Safety** — evaluates every road/bridge segment's safe/unsafe status as a function of simulated time against depth/velocity thresholds, producing a time-aware road network rather than a single static "flooded roads" layer.
- **Route + Shelter Matching (Smart Evacuation Engine)** — for each affected village: checks shelter reachability/elevation/capacity where available, computes travel time via the time-aware road network, compares it to flood arrival time, and classifies the village as evacuate-immediately / evacuate-by-road / high-ground-evacuation / rescue-priority, with a recommended route and shelter.

### 2.11 Emergency Decision Engine
- Combines the Risk Engine's priority scores (Emergency Priority Engine: flood probability, depth, velocity, arrival time, population, vulnerable groups where known, critical infrastructure, road accessibility, shelter availability) into one ranked, cross-village Emergency Action List.
- Converts each entry into a plain-language action statement (what happened / who is affected / where and when to act / which route and shelter to use), not raw numbers alone.
- Provides an **Explainability** layer: for any recommendation, an "Explain This Result" view surfaces the input data used, model/scenario used, assumptions applied, confidence, and validation score — backed by the Assumption Log, Scenario History, and Simulation Log, each exportable in the audit report.

### 2.12 Dashboard & Exports
- 18-page web dashboard (full list in `frontend_spec.md`): command center, scenario builder, dam/river input, SPH simulation, Delft3D simulation, model comparison, flood map, time-to-flood map, probability/uncertainty, satellite validation, damage assessment, evacuation planner, dynamic route safety, emergency priority list, AI explanation, simulation history, assumptions & data quality, export center.
- Consumes only backend API data — a pure client of the API layer defined in `api_endpoints.md`; it never computes risk, priority, or evacuation logic client-side.
- Exports: SHP, KML, GeoJSON, CSV, and a PDF emergency report assembled from scenario, inputs, assumptions, flood extent, affected areas, priority locations, evacuation plan, recommended actions, confidence, and validation result.
- **Offline/Low-Connectivity mode**: the dashboard can pre-download a scenario's map, results, and evacuation plan for offline viewing and offline report generation, syncing any field changes when connectivity returns.

## 3. Component Ownership (avoids team conflicts)

| Component | Owned by | Exposes to frontend via |
|---|---|---|
| Data layer, preprocessing, GEE ingestion | Data/GIS team | Not exposed directly — internal, feeds other components |
| Missing-Data Diagnostic Engine | Backend/data team | `/scenarios/{id}/assumptions` |
| Scenario Generator | Backend team | `/dams/{id}/scenarios`, `/dams/{id}/scenarios/generate` |
| Hydrodynamic Engine (SPH + Delft3D) | Simulation team | `/scenarios/{id}/sph`, `/scenarios/{id}/delft3d`, `/scenarios/{id}/compare` |
| Flood Digital Twin | Simulation/backend team | `/scenarios/{id}/flood-timesteps` |
| Uncertainty Engine | ML/simulation team | `/scenarios/{id}/uncertainty` |
| Satellite Validation | GIS/remote-sensing team | `/scenarios/{id}/satellite-validation` |
| Risk Engine (damage/impact) | Backend/GIS team | `/scenarios/{id}/impact`, `/scenarios/{id}/damage` |
| Evacuation Intelligence (time-to-flood, road safety, routing) | Backend/GIS team | `/scenarios/{id}/time-to-flood`, `/scenarios/{id}/road-safety`, `/scenarios/{id}/evacuation-plan` |
| Emergency Decision Engine + Explainability | ML/backend team | `/scenarios/{id}/priority-list`, `/scenarios/{id}/explain/{item_id}` |
| Dashboard UI (18 pages) | Frontend team | Consumes all of the above only through documented API endpoints |
| Exports | Backend team | `/scenarios/{id}/export` |

**Rule for all teams:** the frontend never derives risk category, priority score, uncertainty confidence, or evacuation recommendation client-side — these are always server-computed fields. The backend never assumes a specific frontend layout — it returns structured JSON per `api_endpoints.md`, not pre-formatted display strings. Every result payload includes a `model_mode` field (`real` or `surrogate`) so the frontend can render the Real-vs-Surrogate label without guessing.

## 4. Data Flow Summary (per scenario)

1. Dam/reservoir + breach parameters submitted (or a variant auto-generated) → Missing-Data Diagnostic Engine checks completeness → Assumption Log updated if fallbacks used.
2. Scenario Generator creates one or more immutable `scenario_id` runs (single, or best/likely/worst-case, or ensemble if uncertainty-flagged).
3. Hydrodynamic Engine runs SPH and/or Delft3D (Real or Surrogate Mode) per `scenario_id` → depth/velocity/arrival-time grids stored in the Flood Digital Twin.
4. If ensemble: Uncertainty Engine aggregates across runs → probability + confidence maps stored against a parent `scenario_group_id`.
5. Satellite Validation (if imagery available for the scenario's time window) compares simulated vs. observed extent → IoU/agreement/difference map stored.
6. Risk Engine overlays grids against villages/roads/buildings/infrastructure → impact + damage records generated.
7. Evacuation Intelligence computes time-to-flood bands, dynamic road/bridge safety over time, and per-village evacuation recommendations.
8. Emergency Decision Engine scores and ranks all villages into one priority list, generates action statements, and makes every item's inputs/assumptions/confidence queryable via the Explainability endpoint.
9. All of the above (scenarios, grids, uncertainty, validation, impact, evacuation plans, priority list, assumption/scenario/simulation logs) become queryable via the API for the dashboard, and exportable via the Export Center.
