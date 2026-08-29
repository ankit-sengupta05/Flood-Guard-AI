# System Architecture — Dam Breakage Simulation & Early Warning Platform (SIH 2026)

## 1. High-Level Architecture

```
        WEATHER API    SATELLITE/DRONE IMAGERY    IoT SENSORS    TERRAIN/GIS DATA
             │                   │                     │                │
             └───────────────────┴──────────┬──────────┴────────────────┘
                                             ▼
                                  ┌─────────────────────┐
                                  │   DAM HEALTH AI      │
                                  │  (risk scoring model)│
                                  └──────────┬───────────┘
                                             ▼
                                     FAILURE RISK SCORE
                                             │
                                   ┌─────────┴─────────┐
                                   ▼                   ▼
                                 SAFE              HIGH RISK
                            (log + monitor)             │
                                                         ▼
                                              DAM BREAK SIMULATION
                                                         │
                                                         ▼
                                              HYDRODYNAMIC MODEL
                                                         │
                                     ┌───────────────────┼───────────────────┐
                                     ▼                   ▼                   ▼
                                  DEPTH              VELOCITY            ARRIVAL TIME
                                     └───────────────────┼───────────────────┘
                                                         ▼
                                                  GIS IMPACT ENGINE
                                                         │
                                     ┌───────────────────┼───────────────────┐
                                     ▼                   ▼                   ▼
                                 VILLAGES             ROADS              BUILDINGS
                                     └───────────────────┼───────────────────┘
                                                         ▼
                                              EVACUATION ROUTE ENGINE
                                                         │
                                                         ▼
                                              EARLY WARNING / ALERT SYSTEM
                                                         │
                                     ┌───────────────────┴───────────────────┐
                                     ▼                                       ▼
                            DASHBOARD (web, map + dam cards)        PUSH/SMS/SIREN ALERTS
                                     │
                                     ▼
                          3D VISUALIZATION (per-dam breach + flood playback)
```

## 2. Subsystems

### 2.1 Data Ingestion Layer
Sources feeding the Dam Health AI:
- **Weather/rainfall forecast API** (e.g., IMD data or a third-party weather API) — current + forecast rainfall for the dam's catchment area.
- **Satellite/drone imagery pipeline** — periodic imagery run through a computer-vision model to flag cracks, deformation, erosion, sediment/landslide changes near the reservoir.
- **IoT sensor feed** — reservoir water level, rate of rise, seepage, pore-water pressure, structural deformation sensors, temperature. Ingested via a lightweight sensor-gateway API (dams may have different hardware; normalize to one schema at ingestion).
- **Terrain/GIS data** — static per-dam: DEM, river channel, catchment boundary, village/road/building layers (loaded once per dam during registration, not a live feed).

All ingested data is timestamped and written to a time-series store keyed by `dam_id`.

### 2.2 Dam Health AI
- Consumes the latest ingested readings (rolling window, e.g., last 30 days) per dam.
- Two model components:
  1. **CV sub-model** — processes satellite/drone imagery for crack/deformation/erosion detection, outputs a structural anomaly score.
  2. **Risk-scoring model** — combines sensor readings, rainfall/forecast, and the CV anomaly score into a single **Failure Risk Score (0-100)** per dam, updated on a scheduled interval (e.g., every 15-60 min, configurable per dam based on sensor refresh rate).
- Risk score is compared against a configurable per-dam threshold (`RISK_LIMIT`). Crossing it triggers the simulation pipeline.
- Every risk score (not just threshold crossings) is logged, so the dashboard can show a historical risk trend graph per dam.

### 2.3 Dam Break Simulation Trigger
- Triggered automatically when `risk_score > RISK_LIMIT`, or manually by an authorized user (Dam Operator/Admin) for scenario planning/drills.
- Feeds current reservoir state (water level, forecast rainfall) into the breach model to estimate breach parameters (this is the ML breach-prediction model from the earlier phase of this project), producing an outflow hydrograph.

### 2.4 Hydrodynamic Model
- Routes the outflow hydrograph across the dam's pre-loaded terrain (2D shallow-water routing, per the tech_stack.md physics layer).
- Outputs, per timestep: depth grid, velocity grid, arrival-time grid.

### 2.5 GIS Impact Engine
- Overlays the depth/velocity/arrival-time grids against the dam's registered villages, roads, and building layers.
- Produces, per affected asset: arrival time, expected depth/velocity, risk category (e.g., safe / caution / severe).

### 2.6 Evacuation Route Engine
- Given affected villages/roads (from GIS Impact Engine) and the road network layer, computes evacuation routes that avoid predicted-flooded road segments, prioritized by each village's arrival time (least time-to-impact first).
- Outputs a per-village evacuation plan: recommended route(s), nearest safe zone, estimated evacuation time needed vs. time available.

### 2.7 Early Warning / Alert System
- Triggered when GIS Impact Engine flags any village/asset as at-risk.
- Sends alerts via configured channels (push notification to dashboard, SMS gateway, siren trigger integration — SMS/siren are external integrations, stubbed/mocked if not available during hackathon).
- Alert severity tied to arrival time proximity (e.g., >6h = advisory, 1-6h = warning, <1h = critical).

### 2.8 Dashboard & 3D Visualization
- Web dashboard: India map with dam markers, dam list cards, per-dam detail view with live stats/graphs and the 3D breach/flood simulation playback (per earlier PRD/tech_stack docs).
- Consumes only backend API data — the dashboard is a pure client of the API layer defined in `api_endpoints.md`, no direct access to models or raw sensor data.

## 3. Component Ownership (avoids frontend/backend conflicts)

| Component | Owned by | Exposes to frontend via |
|---|---|---|
| Data ingestion, sensor normalization | Backend/data team | Not exposed directly — internal only |
| Dam Health AI (risk scoring, CV model) | ML team | `/dams/{id}/risk` endpoint |
| Dam Break Simulation + Hydrodynamic Model | Simulation team | `/dams/{id}/simulate`, `/dams/{id}/flood-timesteps` |
| GIS Impact Engine | Backend/GIS team | `/dams/{id}/impact` |
| Evacuation Route Engine | Backend/GIS team | `/dams/{id}/evacuation-plan` |
| Early Warning/Alerts | Backend team | `/alerts`, `/dams/{id}/alerts` |
| Dashboard UI (map, cards, detail view, 3D playback) | Frontend team | Consumes all of the above only through documented API endpoints |

**Rule for both teams:** the frontend never computes risk scores, simulation results, or evacuation routes client-side — it only requests and renders data from the API. The backend never assumes a specific frontend layout — it returns structured JSON per the contracts in `api_endpoints.md`, not pre-formatted display strings. This is the boundary that prevents the two sides' work from clashing.

## 4. Data Flow Summary (per dam, per cycle)

1. Sensors/weather/satellite data ingested → stored, timestamped, keyed by `dam_id`.
2. Dam Health AI runs on schedule → produces `risk_score`, stored with timestamp.
3. If `risk_score > RISK_LIMIT` (or manual trigger): breach prediction → hydrodynamic routing → depth/velocity/arrival grids generated and stored (keyed by `dam_id` + `scenario_id`).
4. GIS Impact Engine runs against the new grids → per-village/road/building impact records generated.
5. Evacuation Route Engine runs against impact records → evacuation plan generated.
6. Early Warning system checks impact records → alerts issued if thresholds crossed.
7. All of the above (risk history, scenario results, impact records, evacuation plans, alerts) become queryable via the API for the dashboard.
