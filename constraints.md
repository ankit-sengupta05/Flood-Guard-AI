# Constraints — Dam Breakage Simulation & Early Warning Platform (SIH 2026)

## 1. Project Constraints

- **C1 — Timeline:** Hackathon timeframe (assume ~10-13 days per the PRD phased breakdown, adjust to actual SIH 2026 schedule). The system has many independently-impressive modules (Dam Health AI, simulation, GIS, evacuation, alerts, dashboard) — treat one fully-working "hero dam" end-to-end as the non-negotiable minimum before broadening to more dams or more polish.
- **C2 — Team size/specialization:** Assumes a multi-person team with rough role split (ML/data, simulation/GIS, backend, frontend). The `api_endpoints.md` contract exists specifically so these sub-teams can work in parallel — treat contract changes as requiring a quick sync, not a silent code change.
- **C3 — Budget:** Zero/near-zero. Every tool in `tech_stack.md` is free or free-tier. Real SMS/siren integration (e.g., Twilio) is optional and only worth adding if trial credits clearly cover the demo without risk of running out mid-presentation.
- **C4 — No real hardware/data access:** There is no real dam wired with real sensors, and no real satellite/drone imagery pipeline available. All sensor, rainfall, and imagery data must be mocked/simulated for the hackathon. This should be stated plainly and confidently in the presentation as a deliberate scoping decision (the ingestion API is built to accept real data later) rather than glossed over.
- **C5 — Platform access for physics tools:** HEC-RAS is Windows-only; if the simulation sub-team isn't on Windows, default to ANUGA (cross-platform, Python-native) to avoid losing time to environment setup.

## 2. Technical Constraints

- **C6 — "Real-time" is interval-based, not continuous streaming:** The Dam Health AI recomputes risk on a scheduled interval (NFR2: e.g., 15-60 min in a real deployment), not on every single sensor tick. For the demo, this interval can be shortened (e.g., every 30 seconds) purely to make the live demo visibly responsive — but the report/pitch should describe the real-world intended interval accurately, not claim continuous real-time inference where there isn't any.
- **C7 — 3D simulation playback is precomputed, not live physics:** As established earlier in this project, full hydrodynamic routing cannot run per-frame in a browser. Breach + flood simulation runs once per triggered scenario (seconds to minutes), and the frontend plays back the resulting precomputed timesteps in real time. This is the correct and industry-standard approach — state it as such rather than as a limitation.
- **C8 — CV anomaly detection is only as good as available training imagery:** With no access to real crack/deformation imagery datasets specific to Indian dams, the CV model will likely be trained/fine-tuned on generic crack-detection datasets (e.g., concrete crack datasets used for other infrastructure) as a proxy. Report this limitation honestly — the anomaly score is a reasonable proof-of-concept, not a validated dam-specific structural assessment tool.
- **C9 — Risk-scoring model has no real failure-event ground truth:** As with the earlier flood-sim ML constraints, there is no dataset of real Indian dam failures to train/validate the risk-scoring model against. The model's thresholds and weightings will be based on engineering heuristics/domain literature and synthetic/simulated scenarios, not fitted to historical failure outcomes. This is a standard and expected limitation for a hackathon prototype in this domain.
- **C10 — Evacuation routing uses real road network data but simulated flood/closure data:** `osmnx`-sourced road networks are real, but which roads become "flooded/closed" comes from the simulation pipeline's output for a hypothetical scenario, not observed real closures. Routing logic itself (shortest path avoiding blocked edges) is sound; the flood data feeding it is simulated.
- **C11 — Terrain/coordinate consistency across dams:** Each registered dam needs its own terrain (heightmap), village/road/building layers, and coordinate reference, all consistent with each other. Establish one convention per dam during registration (Phase 1) and do not mix real-world lat/long terrain with custom-sculpted, non-geo terrain within the same dam's data.
- **C12 — Village representation:** As in the earlier flood-sim scope, villages/buildings are represented as points (or simple polygons if time allows), not full detailed building-footprint data, unless a specific open dataset for the demo region provides this cheaply.

## 3. Security & Access Constraints

- **C13 — Role/permission enforcement is server-side only:** The frontend may hide UI elements based on role for a clean experience, but every sensitive endpoint (per `api_endpoints.md`'s permission matrix) must independently verify the requester's role/scope server-side. A hidden button is not a security boundary.
- **C14 — Scoped access, not just role-based:** `DAM_OPERATOR` and `DISTRICT_ADMIN` roles are scoped to specific `dam_ids`/`district_ids`, not globally permissive within their role tier. This scoping must be checked on every request touching a specific dam's data, not just checked once at login.
- **C15 — Manual alert/evacuation-plan overrides need an approval trail:** Per FR5.3/FR6.2, operator-proposed changes require admin approval before taking effect — this needs at least a minimal audit trail (who proposed, who approved, when) so the system's decision history is inspectable, which is also a good demo talking point for judges evaluating trustworthiness of an early-warning system.

## 4. Data & Validation Constraints

- **C16 — No real-world validation data (carried over from earlier scope):** Neither the flood physics, the breach ML model, nor the Dam Health AI risk model can be validated against real historical outcomes for the demo dam(s). Validation is physical-plausibility-based (water flows downhill, risk score rises with rising water level and rainfall, closer villages flood sooner) — state this clearly rather than overclaiming predictive accuracy.
- **C17 — Empirical equations and heuristics as ground-truth proxies:** Both the breach model (Froehlich/Von Thun-Gillette regression equations) and the risk-scoring model (domain-literature-based heuristics/weightings) rely on established engineering approximations rather than fitted real-failure data. This is standard practice in this domain and should be presented as such.

## 5. Assumptions Requiring Early Decisions

Lock these down in Phase 0/1 and avoid revisiting mid-build:

- **A1:** Number of fully-functional demo dams (recommended: 1 "hero" dam with the complete pipeline, 2-4 additional dams with lighter/sample data purely to populate the map).
- **A2:** Terrain approach per dam — custom sculpted (Three.js) vs. real-world geo (CesiumJS) — recommended: custom sculpted, consistent with the earlier flood-sim decision, unless the team specifically wants real Indian geographic terrain for credibility with judges.
- **A3:** Risk-score recompute interval for the live demo vs. the "real" stated interval in documentation (recommended: demo at ~30s-1min intervals, document the realistic 15-60min interval separately).
- **A4:** Real vs. mocked SMS/siren integration (recommended: mocked unless a free-tier gateway is trivially available).
- **A5:** WebSockets vs. polling for dashboard updates (recommended: polling first; WebSockets only as a stretch/polish item).
- **A6:** Source of road-network data for evacuation routing (recommended: `osmnx`/OpenStreetMap for the demo region).

## 6. Known Limitations to State Upfront (in report/pitch)

- Sensor, rainfall, and imagery data are simulated/mocked, not from real hardware (C4).
- Risk scoring and CV anomaly detection are heuristic/proxy-trained, not validated against real dam-failure history (C8, C9, C16, C17).
- "Real-time" refers to a configurable recompute interval and real-time *playback* of precomputed simulation data — not continuous live physics computation (C6, C7).
- Evacuation routing uses real road-network topology but simulated flood-closure data (C10).
- These are standard, deliberate scoping decisions for a system of this ambition built in a hackathon timeframe, and are worth framing exactly that way to judges — as evidence of good engineering judgment, not as hidden shortcomings.
