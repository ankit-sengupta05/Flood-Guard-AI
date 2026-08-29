# PRD — Dam Breakage Simulation & Early Warning Platform (SIH 2026)

## 1. Overview

A full-stack platform that continuously monitors dam health using sensor, weather, and satellite/drone data, predicts failure risk via an AI model, and — when risk crosses a threshold — runs a dam-break simulation, routes the resulting flood across terrain, identifies affected villages/roads/buildings via GIS, generates evacuation plans, and issues early-warning alerts. All of this is presented through a web dashboard with an India-focused map, a registry of dams as browsable cards, and a per-dam detail view with live stats, health graphs, and an interactive 3D breach/flood simulation.

## 2. Problem Statement

Dam failures are low-frequency but high-consequence events. Most existing monitoring is manual/periodic (physical inspection) rather than continuous, and even where hydraulic simulation tools exist, they aren't connected to real-time risk detection or to an accessible, actionable interface for disaster-management authorities and the public. This platform closes that loop: continuous risk scoring → automatic simulation trigger → GIS-based impact analysis → evacuation planning → alerting, all in one system.

## 3. Goals

- G1: Continuously ingest sensor, weather/rainfall, and satellite/drone imagery data per dam and compute a Failure Risk Score via an AI model.
- G2: Automatically (or manually) trigger a dam-break simulation when risk crosses a configurable threshold.
- G3: Predict breach parameters via ML (instead of a full physics rerun each time) and route the resulting flood across each dam's terrain.
- G4: Identify affected villages, roads, and buildings via GIS overlay, with arrival time and severity per asset.
- G5: Automatically generate evacuation routes/plans prioritized by time-to-impact.
- G6: Issue early-warning alerts through the dashboard (and, as integrations allow, SMS/siren).
- G7: Present the entire system through a web dashboard: India map with dam markers, a dam registry as item cards, and a per-dam detail view with live stats, graphs, and 3D simulation playback.
- G8: Define a clean API/permissions contract so frontend and backend teams can build in parallel without conflicts (see `api_endpoints.md`, `architecture.md`, `frontend_spec.md`).

## 4. Non-Goals (Out of Scope)

- Physically deploying/installing real sensor hardware on real dams (assume sensor data is simulated/mocked for the hackathon, with the ingestion API built to accept real hardware later).
- Real SMS/siren integration beyond a stubbed/mocked interface (unless a free-tier SMS gateway is trivially available within the hackathon timeframe).
- Multi-dam cascading failure modeling (one dam's failure triggering analysis of downstream dams) — noted as a future extension, not required for the initial build.
- Native mobile app — responsive web is the target platform.
- Full CFD-grade breach/flood physics (see constraints.md for accepted fidelity level).

## 5. Users / Roles

Per `api_endpoints.md`: `PUBLIC`, `CITIZEN`, `DAM_OPERATOR`, `DISTRICT_ADMIN`, `SYSTEM_ADMIN`. See that document for the full permission matrix — this PRD's functional requirements below are tagged with the minimum role needed where relevant.

## 6. Functional Requirements (by module)

### 6.1 Data Ingestion
- FR1.1: Accept sensor readings (water level, seepage, deformation, pore pressure, temperature) via an ingestion API, normalized to one schema regardless of source hardware.
- FR1.2: Accept/fetch rainfall and rainfall-forecast data per dam's catchment area.
- FR1.3: Accept satellite/drone imagery per dam on a scheduled or on-demand basis.
- FR1.4: All ingested data is timestamped and stored per `dam_id` in a queryable time-series form.

### 6.2 Dam Health AI
- FR2.1: A computer-vision sub-model processes imagery to detect cracks, deformation, erosion, and landslide/sediment changes, producing a structural anomaly score.
- FR2.2: A risk-scoring model combines sensor readings, rainfall/forecast, and the anomaly score into a single Failure Risk Score (0-100), recomputed on a scheduled interval.
- FR2.3: Each dam has a configurable risk threshold (`RISK_LIMIT`); crossing it triggers the simulation pipeline.
- FR2.4: All computed risk scores are stored with timestamps for historical trend display.

### 6.3 Simulation Pipeline (breach + routing)
- FR3.1: On trigger (automatic or manual), predict breach parameters (failure time, breach width, peak outflow) via the trained ML model using current dam/reservoir state.
- FR3.2: Route the resulting hydrograph across the dam's pre-loaded terrain (2D hydrodynamic routing), producing depth, velocity, and arrival-time grids per timestep.
- FR3.3: Each simulation run is stored as an immutable, uniquely-identified scenario (`scenario_id`), never mutated after creation.
- FR3.4: Manual simulation triggering is available to `DAM_OPERATOR` (own dams) and `DISTRICT_ADMIN` (region dams), for scenario planning/drills independent of live risk status.

### 6.4 GIS Impact Analysis
- FR4.1: Overlay depth/velocity/arrival-time grids against each dam's registered villages, roads, and buildings.
- FR4.2: Produce a per-asset impact record: arrival time, expected depth/velocity, risk category (safe/caution/severe).

### 6.5 Evacuation Planning
- FR5.1: Generate evacuation routes per affected village, avoiding predicted-flooded road segments, prioritized by shortest time-to-impact first.
- FR5.2: Report time-needed-to-evacuate vs. time-available (arrival time) per village.
- FR5.3: Allow `DAM_OPERATOR` to propose manual route overrides; require `DISTRICT_ADMIN` approval before a proposed change takes effect.

### 6.6 Early Warning / Alerts
- FR6.1: Automatically issue an alert when GIS Impact Analysis flags any asset as at-risk, with severity tied to arrival-time proximity (advisory/warning/critical).
- FR6.2: Allow `DISTRICT_ADMIN` to manually issue or override alerts.
- FR6.3: Allow `CITIZEN` users to subscribe to alerts for a specific dam or district.
- FR6.4: Alerts delivered to the dashboard at minimum; SMS/siren as available integrations (may be mocked for the hackathon demo).

### 6.7 Dashboard (Frontend)
- FR7.1: India-focused open-world map with floating markers at each registered dam's location, color-coded by risk status.
- FR7.2: A parallel list of all registered dams as item cards (location, health/risk status).
- FR7.3: Clicking a dam opens a detail view with: live stats and health graphs (role-gated), current + historical risk score, and the interactive 3D breach/flood simulation with time slider and village impact overlay.
- FR7.4: Evacuation plan overlay viewable within the simulation/map view.
- FR7.5: Alerts screen with subscribe/issue functionality per role.
- FR7.6: All screens strictly consume the documented API — no client-side computation of risk, severity, or evacuation logic (see `api_endpoints.md` section 6).

## 7. Non-Functional Requirements

- NFR1: Runs in a standard modern browser, responsive design (desktop primary, usable on tablet/mobile).
- NFR2: Risk score recomputation interval configurable per dam (e.g., 15-60 min), not necessarily true real-time streaming — this should be stated plainly in the demo/report rather than implied to be faster than it is.
- NFR3: 3D simulation playback (time-slider scrubbing) must feel real-time/responsive — achieved via precomputed timestep data, not live physics per frame (see constraints.md).
- NFR4: All tools used are free/open-source or free-tier, suitable for a hackathon team with no budget.
- NFR5: Backend and frontend are built against the shared contract in `api_endpoints.md` so both teams can work in parallel without blocking on each other (mock-data-first rule).
- NFR6: Role/permission checks are enforced server-side, not just hidden in the UI.

## 8. Phased Breakdown

### Phase 0 — Setup & Contracts (Days 1-2)
1. Finalize `architecture.md`, `api_endpoints.md`, and `frontend_spec.md` as the shared contract — treat as living documents, update there first before changing behavior.
2. Set up repo structure (backend, frontend, ml, simulation, docs as top-level folders).
3. Both teams begin against mock JSON fixtures matching the documented response shapes, in parallel.
4. Decide the demo scope: how many dams (recommend 2-3 fully working demo dams, rest can be lower-fidelity/sample data for map population).

### Phase 1 — Dam Registry & Auth (Days 2-4)
1. Build `/dams`, `/dams/{id}`, dam registration, and auth endpoints (backend).
2. Build map view + dam list cards + login/register screens against mock data (frontend).
3. Integrate real endpoints once both are ready; confirm role-based visibility matches the permission matrix.

### Phase 2 — Data Ingestion & Dam Health AI (Days 3-6)
1. Build sensor ingestion API and time-series storage.
2. Build/mock a rainfall data feed.
3. Build the CV anomaly-detection sub-model (can start with a simple pretrained model fine-tuned on sample crack/deformation imagery if time-constrained).
4. Build the risk-scoring model combining sensors + rainfall + anomaly score into a Failure Risk Score.
5. Expose `/dams/{id}/risk` and `/dams/{id}/sensors/*` endpoints; wire into the Overview and Live Stats tabs on frontend.

### Phase 3 — Breach Prediction & Hydrodynamic Simulation (Days 4-8)
1. Reuse/adapt the earlier flood-sim pipeline: ML breach-parameter prediction (trained on physics-generated data) + 2D hydrodynamic routing.
2. Wire simulation trigger logic: automatic on risk threshold breach, manual via `/dams/{id}/simulate`.
3. Store each run as an immutable scenario; expose `/dams/{id}/scenarios` and `/flood-timesteps`.
4. Wire the Simulation tab (3D view, time slider) on frontend against real scenario data.

### Phase 4 — GIS Impact & Evacuation (Days 6-9)
1. Build the GIS overlay logic (villages/roads/buildings vs. depth/arrival grids).
2. Build the evacuation route generation logic (shortest-time-first, avoiding flooded roads).
3. Expose `/impact` and `/evacuation-plan` endpoints; wire into the Simulation tab's overlay.

### Phase 5 — Alerts (Days 8-10)
1. Build automatic alert issuance on impact thresholds.
2. Build manual alert issuance (`DISTRICT_ADMIN`) and citizen subscriptions.
3. Wire the Alerts screen on frontend.
4. Stub/mock SMS/siren integration if a real gateway isn't feasible in time.

### Phase 6 — Integration, Testing, Polish (Days 10-13)
1. End-to-end test: sensor data in → risk score → simulation trigger → impact → evacuation → alert → dashboard display, for at least one demo dam.
2. Confirm role/permission enforcement matches the matrix for all five roles.
3. Visual polish on map, cards, detail view, 3D playback.
4. Prepare demo script, backup video, and presentation deck.

## 9. Success Criteria

- At least one dam demonstrates the full pipeline live: simulated sensor data pushes risk above threshold → simulation auto-triggers → map/card/detail view update → evacuation plan and alert appear.
- Map and dam-card views correctly reflect near-real-time risk status for all registered demo dams.
- Role-based access behaves correctly for at least `PUBLIC`, `DAM_OPERATOR`, and `DISTRICT_ADMIN` in the live demo.
- 3D simulation view is interactive and responsive (time slider, village state changes) for the demo dam(s).
- Judges can be shown that frontend and backend were built independently against the shared API contract — a useful talking point for a hackathon, demonstrating engineering process, not just the end result.

## 10. Key Risks

- Scope is large for a hackathon timeframe — mitigate by identifying one "hero dam" with the full pipeline working end-to-end, while other dams on the map can have simpler/sample data.
- Real sensor/imagery data won't exist — mitigate by building a realistic mock/simulated data generator early (Phase 2) so the AI and pipeline can be developed and demoed without waiting on real hardware.
- CV model for crack/anomaly detection may be hard to train from scratch in the timeframe — mitigate by using a pretrained model with light fine-tuning, or a rule-based/heuristic stand-in if time runs out, clearly noted as a placeholder in the report.
- Frontend/backend integration slippage — mitigated structurally by the mock-data-first rule in `api_endpoints.md`/`frontend_spec.md`.
- Judges may probe on "is this really real-time" — be upfront (per NFR2/NFR3) about what's live-computed vs. precomputed/interval-based; this is standard practice, not a weakness, but overclaiming it invites harder follow-up questions.
