# PRD — Flood-Guard AI: Uncertainty-Aware Dam-Break Digital Twin (SIH 2026, PS 26161)

## 1. Overview

Flood-Guard AI is a full-stack platform that, given a dam/reservoir state and a breach scenario for any river in India, runs a hydrodynamic simulation (SPH + Delft3D), predicts flood extent, depth, velocity, and arrival time, quantifies its own uncertainty, validates its prediction against satellite imagery (Google Earth Engine), and converts the result into a time-aware evacuation plan, dynamic road/bridge safety assessment, and a ranked emergency action list. Every output is explainable back to its inputs, assumptions, and confidence. The system is presented through a command-center-style web dashboard covering 18 pages, from scenario building through export.

## 2. Problem Statement (PS 26161, NTRO)

India has repeatedly experienced flash floods from natural dam/lake breaches and reservoir failures (Rishi Ganga 2021, Kosi 2008, Kashmir/Assam 2014, among others). Existing tools for dam-break/flood simulation are largely disconnected from real-time HADR decision-making: they can produce a flood map, but not an actionable answer to *when* water arrives, *how confident* the prediction is, *who* is most vulnerable, and *what* to do about it. The problem statement calls for a generalized software framework that simulates dam-break/river-blockage scenarios using SPH and Delft3D, run against hydrological data, DEM, and satellite imagery, with a dashboard for input/output and near-real-time flood analysis via Google Earth Engine.

## 3. Exact Gap Being Solved

Existing systems stop at **Dam Break → Flood Map**. They do not: quantify uncertainty when input data (breach width, exact reservoir state) is incomplete; predict *arrival time* per location rather than a static extent; treat road/bridge safety as time-dependent; convert flood output into a ranked, explainable evacuation and emergency-response plan; or validate the simulated flood extent against observed satellite imagery. Flood-Guard AI's gap-closing chain is: **Dam Break → Hydrodynamic Simulation → Flood Prediction → Arrival-Time Prediction → Uncertainty Analysis → Satellite Validation → Risk Prioritization → Dynamic Evacuation Planning → Emergency Decision Support.**

## 4. Project Name & USP

**Flood-Guard AI** — *"An Uncertainty-Aware Dam-Break Digital Twin for Predictive Flood Modelling, Satellite Validation, and Intelligent Emergency Decision Support."*

One-line USP: *An uncertainty-aware Flood Digital Twin that combines hydrodynamic modelling, multi-scenario analysis, satellite validation, time-aware evacuation, dynamic route safety, and explainable emergency decision support — not just another dam-break simulator.*

## 5. Goals

- G1: Accept dam/reservoir (source-water), breach/failure, and environment inputs, and detect + flag missing ones via a Missing-Data Diagnostic Engine rather than failing or silently guessing.
- G2: Run a hydrodynamic simulation using an SPH component (breach-zone/near-field detail) and a Delft3D component (river/floodplain propagation), behind an adapter layer that supports both independent comparison and a documented SPH→Delft3D coupling (hydrograph handoff), with a **Real Model Mode** and a **Demo/Surrogate Mode** clearly labeled and never conflated.
- G3: Automatically generate best-case / most-likely / worst-case multi-scenario runs, plus user-editable parameter overrides.
- G4: Quantify uncertainty where inputs are incomplete via ensemble runs, producing flood probability and confidence (High/Medium/Low) per location, not a single false-precision value.
- G5: Produce a Time-to-Flood map (arrival-time bands) per location, not only a flooded/non-flooded extent.
- G6: Evaluate every road/bridge segment's safety as a function of time (Dynamic Road & Bridge Safety), and recompute safe/fastest routes accordingly.
- G7: Generate a per-village evacuation recommendation (evacuate immediately / by road / to high ground / rescue-priority) by comparing flood arrival time against travel time to a reachable shelter.
- G8: Score and rank all affected locations into a single Emergency Priority List using flood probability, depth, velocity, arrival time, population, and infrastructure/road accessibility.
- G9: Validate simulated flood extent against Sentinel/Landsat imagery pulled via Google Earth Engine (IoU, agreement %, over/under-prediction zones).
- G10: Provide a documented (prototype-level) forecast-updating mechanism that can fold in new satellite observations, rainfall, or gauge data.
- G11: Provide an Offline/Low-Connectivity mode: pre-download scenario data, view cached results, and generate an emergency report without live connectivity, syncing later.
- G12: Convert simulation output into an Emergency Decision Engine that answers what happened, who is affected, where/when to act, and which route/shelter to use — not raw numbers alone.
- G13: Make every output auditable: an "Explain This Result" trail showing inputs, model, scenario, assumptions, confidence, and validation score per recommendation, plus an Assumption Log and Simulation History.
- G14: Support exports in SHP, KML, GeoJSON, CSV, and a PDF emergency report.
- G15: Present the system through an 18-page command-center dashboard (see `frontend_spec.md`) built against a documented API contract (`api_endpoints.md`) so frontend/backend/simulation teams can work in parallel.

## 6. Non-Goals (Out of Scope for the Prototype)

- Continuous real-time dam-sensor health monitoring (water level/seepage/deformation telemetry) and any AI model trained to predict *whether* a dam will fail from live sensor data. Flood-Guard AI takes a breach scenario as an input (user-specified or scenario-generated); it does not attempt structural failure prediction. This is a deliberate scope boundary against the earlier "continuous monitoring" concept explored for this project — noted here explicitly since it is a likely point of confusion.
- Full, validated, production-grade SPH/Delft3D simulation runs at operational resolution — the prototype runs either genuine but reduced-resolution/scenario-limited SPH/Delft3D jobs, or a clearly labeled surrogate approximation, per Real Model vs. Demo/Surrogate Mode (see `constraints.md`).
- Full scientific data-assimilation (e.g., Kalman-filter-grade forecast updating) — the prototype implements a simplified, clearly-labeled update mechanism only.
- Real SMS/siren field alerting — the Emergency Decision Engine's output is dashboard/report-based; external alert-channel integration is a stretch goal only if trivially available.
- Multi-dam cascading failure modeling — noted as future scope.
- Native mobile app — responsive web is the target platform; the Offline Mode is a browser-cache-based feature, not a native offline app.

## 7. Users / Roles

| Role | Description |
|---|---|
| `PUBLIC` | Views published scenarios and dashboard pages, read-only. |
| `ANALYST` | Builds and runs scenarios for assigned dams: sets parameters, triggers SPH/Delft3D runs, reviews model comparison and satellite validation. |
| `EMERGENCY_MANAGER` | District/HADR authority: reviews evacuation plans and the emergency priority list, approves/overrides recommended routes and shelters, uses Offline Mode in the field, exports the PDF emergency report. |
| `SYSTEM_ADMIN` | Full access: manages the dam/river registry, data sources, missing-data fallback assumptions, and user roles. |

Full permission matrix in `api_endpoints.md`. Functional requirements below are tagged with the minimum role where relevant.

## 8. Functional Requirements (by module)

### 8.1 Data Layer & Preprocessing
- FR1.1: Ingest and store, per dam: dam location/height/reservoir capacity/water level, DEM (SRTM/ASTER or other open DEM), river network geometry, land-use/land-cover, and known villages/roads/bridges/buildings/shelters/critical infrastructure.
- FR1.2: Pull Sentinel/Landsat imagery for the dam's downstream reach via the Google Earth Engine Python API, on demand and for a configurable before/after window.
- FR1.3: All datasets are versioned per `dam_id` so a scenario always references a specific, reproducible input snapshot.

### 8.2 Missing-Data Diagnostic Engine
- FR2.1: On scenario creation, detect which required inputs (source-water, breach, or environment category) are missing or unspecified.
- FR2.2: For each missing input, apply a documented fallback (minimum/likely/maximum) rather than silently defaulting to a single guessed value, and write the fallback to a visible Assumption Log (`ANALYST`+).
- FR2.3: Trigger an ensemble run (Uncertainty Engine, 8.5) across the fallback range instead of a single-value run whenever a fallback was used.

### 8.3 Scenario Generator (Multi-Scenario Engine)
- FR3.1: `ANALYST` role may create a scenario with explicit source-water, breach, and environment parameters, or auto-generate best-case / most-likely / worst-case variants from a base input.
- FR3.2: Each scenario is stored as an immutable, uniquely-identified run (`scenario_id`) — never mutated after creation; re-running with changed parameters always produces a new `scenario_id`.
- FR3.3: Scenarios support side-by-side comparison (extent, depth, velocity, arrival time, impact).

### 8.4 Hydrodynamic Engine (SPH + Delft3D)
- FR4.1: SPH component models the near-field/breach-zone flow (particle-based: position, velocity, mass, pressure, density) for the initial surge.
- FR4.2: Delft3D component models grid-based propagation through the river and floodplain (depth, water level, velocity, flow direction per grid cell) using the DEM and river network.
- FR4.3: Support both (a) independent SPH and Delft3D runs for comparison, and (b) a documented coupled workflow where SPH output (discharge-vs-time hydrograph or an equivalent boundary condition) feeds Delft3D's upstream boundary.
- FR4.4: Every run and every result page states explicitly whether it used **Real Model Mode** or **Demo/Surrogate Mode** — no result is presented in a way that could be mistaken for a full physics run if it wasn't one.
- FR4.5: Provide an **Accuracy Mode** (full/slower simulation) and a **Rapid Response Mode** (fast approximation/precomputed surrogate), and show the accuracy-vs-speed tradeoff on the relevant dashboard page.

### 8.5 Flood Digital Twin & Uncertainty Engine
- FR5.1: Store, per scenario and per timestep: depth grid, velocity grid, and a single arrival-time grid, referencing the dam's terrain/environment snapshot.
- FR5.2: Where an ensemble was run (missing/uncertain input), compute per-location flood probability and a confidence label (High/Medium/Low), and generate a Probability Flood Map and an Uncertainty Map.
- FR5.3: Document, in-product, how uncertainty is calculated or approximated for the prototype (visible on the Assumptions & Data Quality page).

### 8.6 Time-to-Flood & Dynamic Road/Bridge Safety
- FR6.1: Derive arrival-time bands (0–15 min, 15–30 min, 30–60 min, 1–3 hr, etc.) per location from the arrival-time grid.
- FR6.2: Compute Last Safe Departure Time per village = flood arrival time − travel time to shelter − a safety margin.
- FR6.3: Evaluate every road/bridge segment's safe/unsafe status as a function of simulation time against the depth/velocity grids and a configurable safety threshold; a segment safe at t=0 can become unsafe at t=20min and the system must reflect that change.
- FR6.4: Recompute safest route, fastest safe route, and alternative routes as road/bridge status changes over simulated time.

### 8.7 Smart Evacuation Engine
- FR7.1: Per village: identify population, nearest shelters (checking elevation/capacity where data exists), current road accessibility, and travel time to each reachable shelter.
- FR7.2: Compare travel time against flood arrival time to classify: evacuate immediately / evacuate by road / move to nearest high ground / rescue-assistance-required.
- FR7.3: Output, per village: safe shelters, unsafe shelters, reachable shelters, last safe departure time, and a recommended route.

### 8.8 Emergency Priority Engine
- FR8.1: Compute a single priority score per affected village/asset from flood probability, depth, velocity, arrival time, population, known vulnerable groups (where data exists), critical infrastructure, road accessibility, and shelter availability — not depth alone.
- FR8.2: Classify into High / Medium / Low priority and produce one ranked, cross-village Emergency Action List answering "which village should emergency teams reach first?"

### 8.9 Satellite Validation
- FR9.1: Extract observed water/flood extent from Sentinel/Landsat imagery via GEE for the scenario's time window.
- FR9.2: Compare observed vs. simulated flood extent; compute Intersection-over-Union and agreement percentage; generate a difference map showing over-prediction and under-prediction zones.
- FR9.3: Display Model Prediction vs. Satellite Observation side-by-side on a dedicated dashboard page.

### 8.10 Forecast Updating
- FR10.1: Accept new observations (satellite extent, rainfall, river-gauge data where available) against an existing scenario and produce an updated prediction.
- FR10.2: Clearly label this as a simplified prototype update mechanism, distinct from full data assimilation (see `constraints.md`).

### 8.11 Offline / Low-Connectivity Mode
- FR11.1: Allow `EMERGENCY_MANAGER` to pre-download a scenario's map, results, and evacuation plan for offline viewing.
- FR11.2: Support generating an emergency report while offline from cached data, syncing any changes when connectivity returns.

### 8.12 Emergency Decision Engine & Explainability
- FR12.1: For each priority location, generate a plain-language action statement (what happened, who is affected, where/when to act, which route/shelter to use) rather than raw numeric output alone.
- FR12.2: Provide an "Explain This Result" view for any recommendation, showing input data used, model/scenario used, assumptions applied, confidence, and validation score.
- FR12.3: Maintain an Assumption Log, Scenario History, and Simulation Log, all exportable as part of an audit report.

### 8.13 Damage & Impact Analysis
- FR13.1: Overlay flood results against villages, buildings, roads, bridges, agricultural land, schools, hospitals, and other critical infrastructure.
- FR13.2: Compute flooded area, affected villages/buildings, road length affected, bridge risk, agricultural land affected, and critical infrastructure at risk, on a dedicated Damage Assessment dashboard.

### 8.14 Near-Real-Time Flood Analysis (Google Earth Engine)
- FR14.1: Support before/after satellite comparison and water-change-detection workflows via GEE, independent of a specific simulated scenario, for near-real-time flood-extent estimation.

### 8.15 AI Components
- FR15.1: Scenario recommendation (suggest which parameter ranges are worth simulating) and missing-data-handling logic (8.2) are implemented as concrete, narrow AI/heuristic components — not a generic chatbot.
- FR15.2: If a conversational assistant is included, it must retrieve numeric answers from the actual simulation database (never hallucinate a figure) and answer scenario-specific questions such as "What happens if breach width increases to 150 m?" or "Why is Route A unsafe?".

### 8.16 Exports & Dashboard
- FR16.1: Support SHP, KML, GeoJSON, and CSV export of flood/impact/evacuation layers, and a PDF emergency report (scenario, inputs, assumptions, flood extent, affected areas, priority locations, evacuation plan, recommended actions, confidence, validation result).
- FR16.2: Present all of the above through the 18-page dashboard defined in `frontend_spec.md`, consuming only the documented API — no client-side computation of risk, priority, or evacuation logic.

## 9. Non-Functional Requirements

- NFR1: Runs in a standard modern browser; responsive design, desktop-primary, usable on tablet.
- NFR2: Simulation runtime is honestly stated: Accuracy Mode may take minutes; Rapid Response Mode is near-instant via precomputed/surrogate approximation — the dashboard always labels which was used (never implied to be faster/more rigorous than it is).
- NFR3: Map/timeline playback of a completed scenario (time-slider scrubbing across timesteps) must feel responsive, achieved via precomputed per-timestep grids, not live physics per frame.
- NFR4: All tools used are free/open-source or free-tier, suitable for a hackathon team with no budget.
- NFR5: Backend, simulation, and frontend teams build against the shared contract in `api_endpoints.md` in parallel (mock-data-first rule).
- NFR6: Role/permission checks are enforced server-side, not only hidden in the UI.
- NFR7: No feature ever presents a surrogate/approximated number as if it came from a validated physics model or real historical data — every page distinguishes Real Model Mode from Demo/Surrogate Mode and states its assumptions.

## 10. Phased Breakdown (Final Build Order)

### Phase 0 — Setup & Contracts (Days 1–2)
1. Freeze `architecture.md`, `api_endpoints.md`, and `frontend_spec.md` as the shared contract.
2. Set up repo structure (data-layer, scenario-engine, hydrodynamic-engine, flood-digital-twin, uncertainty-engine, satellite-validation, risk-and-evacuation, emergency-decision, backend, frontend, docs).
3. Both teams begin against mock JSON fixtures matching documented response shapes.
4. Select the "hero dam" for the full pipeline demo from `important-dam-locations.md`, plus 2–4 lighter dams to populate the map.

### Phase 1 — Data Layer, Dam Registry & Auth (Days 2–4)
1. Build dam/river registry, DEM/land-use/village-road-building ingestion, and auth endpoints.
2. Build the Home/Command Center map, Dam and River Input page, and login/register screens against mock data.
3. Integrate real GEE pull for one demo dam's imagery.

### Phase 2 — Scenario Generator & Missing-Data Diagnostic (Days 3–5)
1. Build the Scenario Builder (manual + best/likely/worst-case auto-generation).
2. Build the Missing-Data Diagnostic Engine and Assumption Log.
3. Wire the Scenario Builder and Dam/River Input pages to real endpoints.

### Phase 3 — Hydrodynamic Engine: SPH + Delft3D (Days 4–8)
1. Stand up the adapter layer: Real Model Mode vs. Demo/Surrogate Mode, clearly labeled everywhere.
2. Implement (or wire a prototype-appropriate approximation for) the SPH breach-zone component and the Delft3D propagation component.
3. Implement the documented SPH→Delft3D coupling path (hydrograph handoff) alongside standalone runs of each.
4. Store results as immutable scenarios in the Flood Digital Twin; expose SPH Simulation, Delft3D Simulation, and Model Comparison pages.

### Phase 4 — Uncertainty, Time-to-Flood, Satellite Validation (Days 6–9)
1. Build the ensemble runner and Uncertainty Engine (probability + confidence maps).
2. Build Time-to-Flood banding and the Flood Probability/Uncertainty page.
3. Build the GEE-based Satellite Validation workflow (IoU, agreement, difference map).

### Phase 5 — Evacuation Intelligence & Emergency Decision Engine (Days 7–10)
1. Build Dynamic Road & Bridge Safety and the time-aware routing recompute.
2. Build the Smart Evacuation Engine and Emergency Priority Engine.
3. Build the Emergency Decision Engine (action statements) and the Explainability/"Explain This Result" view.
4. Build Damage Assessment.

### Phase 6 — Offline Mode, Exports, Forecast Updating (Days 9–11)
1. Build Offline/Low-Connectivity mode (pre-download, cached view, offline report generation, sync).
2. Build SHP/KML/GeoJSON/CSV export and the PDF emergency report.
3. Build the prototype forecast-updating mechanism.

### Phase 7 — Integration, Testing, Polish (Days 11–13)
1. End-to-end test on the hero dam: scenario → SPH/Delft3D → uncertainty → satellite validation → priority list → evacuation plan → PDF export.
2. Confirm role/permission enforcement across all four roles.
3. Visual polish on the 18-page dashboard; prepare the demo script, backup video, and presentation deck (per `PRD.md` success criteria and the master prompt's presentation/pitch requirements).

## 11. Success Criteria

- The hero dam demonstrates the full chain live: a judge-selected scenario (water level, breach width, breach formation time) produces a flood animation, a Time-to-Flood map, an updated dynamic road-safety view, a satellite validation comparison, a ranked emergency priority list, and a downloadable PDF report.
- At least one scenario explicitly shows the Missing-Data Diagnostic Engine in action (a deliberately unspecified input triggering an ensemble run and an Assumption Log entry).
- The Model Comparison page shows SPH vs. Delft3D side by side with clearly labeled Real Model / Demo-Surrogate status for each.
- Role-based access behaves correctly for `PUBLIC`, `ANALYST`, and `EMERGENCY_MANAGER` in the live demo.
- Judges can be shown, on request, the "Explain This Result" trail for the top-ranked emergency priority item.

## 12. Key Risks

- Scope is very large for a hackathon timeframe — mitigate with one fully-working "hero dam" end-to-end before broadening; treat Demo/Surrogate Mode as the default path and Real Model Mode as a stretch/partial goal (see `constraints.md`).
- Running genuine SPH and Delft3D within the hackathon window is unlikely at full fidelity — mitigate by implementing the adapter layer early so surrogate and real modes are interchangeable without touching downstream code.
- GEE quota/auth setup can stall a late start — mitigate by wiring GEE access and one before/after imagery pull in Phase 1, not Phase 4.
- Judges may probe on "is this a real SPH/Delft3D run" — answer honestly per NFR7/Real-vs-Surrogate labeling; overclaiming invites harder follow-up questions than a clearly labeled prototype does.
- Frontend/backend/simulation integration slippage — mitigated structurally by the mock-data-first rule in `api_endpoints.md`/`frontend_spec.md`.
