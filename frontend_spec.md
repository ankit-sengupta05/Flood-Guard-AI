# Frontend Specification — Flood-Guard AI

This document defines all 18 dashboard pages called for in the master prompt and exactly which `api_endpoints.md` endpoints each one consumes, so frontend work can proceed against mock data without waiting on backend.

**Layout convention used across simulation/result pages:** left panel = inputs/controls, center = interactive map (Leaflet), right panel = insights/recommendations — per the master prompt's dashboard design.

## 1. Home / Command Center

**Data source:** `GET /dams`

- India-focused map, dam markers at `{lat, lng}`.
- Parallel list panel of dams as cards (name, river, state/district, reservoir level).
- Clicking a dam opens Dam and River Input (Page 3) or, if scenarios exist, jumps to Flood Map (Page 7) for the latest published scenario.

## 2. Scenario Builder

**Data source:** `POST /dams/{id}/scenarios`, `POST /dams/{id}/scenarios/generate`, `GET /scenarios/{id}/assumptions`

- Manual mode: form for source-water (water level %, reservoir volume), breach (width, depth, side slope, formation time, failure type: partial/complete/controlled release), and rainfall.
- Auto mode: "Generate Best/Likely/Worst-Case" button → `POST .../generate`, returns a `scenario_group_id` and three `scenario_id`s.
- On submit, immediately show the Assumption Log panel (`GET /scenarios/{id}/assumptions`) so any missing-input fallback is visible before results are reviewed — this is the Missing-Data Diagnostic Engine surfaced directly, not hidden.
- Role: `ANALYST`+ to submit; `PUBLIC` can view a read-only version of a published scenario's original parameters.

## 3. Dam and River Input

**Data source:** `GET /dams/{id}`, `GET /dams/{id}/environment`, `POST /dams/{id}/satellite/pull`

- Dam/reservoir metadata, DEM/land-use reference, and toggleable village/road/bridge/building/shelter/critical-infrastructure layers on the map.
- "Pull Satellite Imagery" control (`ANALYST`+) → `POST /dams/{id}/satellite/pull`, polls for job completion.

## 4. SPH Simulation

**Data source:** `POST /scenarios/{id}/sph/run`, `GET /scenarios/{id}/flood-timesteps?engine=sph`

- Mode selector: Real Model / Surrogate (Rapid Response) — label is always shown on results per `model_mode`.
- Time-slider playback of the near-field/breach-zone flood animation.
- Role: `ANALYST`+ to run; `PUBLIC` can view published results.

## 5. Delft3D Simulation

**Data source:** `POST /scenarios/{id}/delft3d/run`, `GET /scenarios/{id}/flood-timesteps?engine=delft3d`

- Same layout as Page 4, for the grid-based propagation model.
- Coupling toggle (`independent` / `coupled`) visible and passed to the run request; when `coupled`, show the SPH→hydrograph→Delft3D handoff diagram inline for judge-facing clarity.

## 6. Model Comparison

**Data source:** `GET /scenarios/{id}/compare`

- SPH vs. Delft3D side-by-side: extent, max depth, max velocity, arrival time, compute time, satellite agreement.
- Charts (Recharts) plus a difference map between the two engines' flood extents.
- Both engines' `model_mode` shown explicitly next to their respective columns.

## 7. Flood Map

**Data source:** `GET /scenarios/{id}/flood-timesteps`

- Full-screen map with toggleable layers: flood extent, depth, velocity, arrival time, probability, uncertainty, roads, bridges, villages, buildings, shelters, critical infrastructure.
- Timeline slider (0 / 5 / 10 / 20 / 40 min / 1 hr, etc., per available timesteps) animating flood propagation.
- This is the default landing view for a published scenario shared with `PUBLIC`.

## 8. Time-to-Flood Map

**Data source:** `GET /scenarios/{id}/time-to-flood`

- Map colored by arrival-time band (0–15 / 15–30 / 30–60 / 1–3 hr) rather than binary flooded/not.
- Per-location detail popover shows exact arrival time and Last Safe Departure Time.

## 9. Flood Probability and Uncertainty

**Data source:** `GET /scenario-groups/{group_id}/uncertainty`

- Probability Flood Map and Uncertainty Map as togglable layers.
- Method note (from the response) displayed prominently — states how uncertainty was computed for this prototype, per NFR7/transparency requirements.
- Only meaningful for scenarios that went through ensemble treatment; if a scenario has no `scenario_group_id`, this page shows a clear "single-run scenario — no ensemble available" state rather than a misleading empty chart.

## 10. Satellite Validation

**Data source:** `POST /scenarios/{id}/satellite-validation`, `GET /scenarios/{id}/satellite-validation`

- Side-by-side: Model Prediction vs. Satellite Observation.
- IoU and agreement % displayed as headline metrics; difference map showing over-prediction/under-prediction zones.
- "Run Validation" button visible to `ANALYST`+ only; result view is `PUBLIC`-visible once published.

## 11. Damage Assessment

**Data source:** `GET /scenarios/{id}/damage`

- Summary cards: flooded area, affected villages, affected buildings, road length affected, bridges at risk, agricultural land affected.
- Critical infrastructure at risk listed with type and distance/arrival time.

## 12. Evacuation Planner

**Data source:** `GET /scenarios/{id}/evacuation-plan`, `POST /scenarios/{id}/evacuation-plan/propose`, `POST /evacuation-plan/{plan_id}/approve`

- Per-village cards: classification (evacuate immediately / by road / high ground / rescue priority), recommended route (rendered as a map overlay), recommended shelter, last safe departure time.
- `ANALYST` sees a "Propose Override" control per village; `EMERGENCY_MANAGER` sees pending proposals with Approve/Reject.

## 13. Dynamic Route Safety

**Data source:** `GET /scenarios/{id}/road-safety?t={time}`

- Time-scrubbable map of every road/bridge segment's safe/unsafe status, synced to the same timeline control used on the Flood Map.
- Segments transitioning from safe to unsafe are visually flagged with the transition time (`unsafe_from_min`).

## 14. Emergency Priority List

**Data source:** `GET /scenarios/{id}/priority-list`

- Single ranked table/list across all affected villages: rank, priority badge (High/Medium/Low), priority score, and a one-line action statement per entry.
- Clicking an entry opens the Explainability panel (Page 15) scoped to that item.

## 15. AI Explanation / Decision Reasoning

**Data source:** `GET /scenarios/{id}/explain/{item_id}`, `POST /scenarios/{id}/assistant/query`

- "Explain This Result" panel: inputs used, model/scenario used, assumptions applied, confidence, validation score — reachable from the Priority List, Evacuation Planner, and Time-to-Flood pages via a consistent button.
- Optional scenario assistant text box (`ANALYST`+) for free-form questions ("What happens if breach width increases to 150 m?"); every answer displays its `sources` array so it's visibly grounded in retrieved data, not free-generated.

## 16. Simulation History

**Data source:** `GET /dams/{id}/scenarios`, `GET /scenarios/{id}/simulation-log`

- Chronological list of all scenarios/runs for a dam, filterable by status/model_mode/date.
- Clicking a run opens its full simulation log (step-by-step: engine, model_mode, timestamp, params).

## 17. Assumptions and Data Quality

**Data source:** `GET /scenarios/{id}/assumptions`

- The full Assumption Log for a scenario: which fields were missing, what fallback (min/likely/max) was applied, and whether ensemble treatment was triggered as a result.
- Also documents, in static copy tied to the current uncertainty method note, how confidence levels are derived — this page is the canonical "here's what's real vs. approximated" reference for judges.

## 18. Export Center

**Data source:** `POST /scenarios/{id}/export`, `GET /exports/{export_id}`

- Format selector (SHP / KML / GeoJSON / CSV / PDF) and layer picker for vector formats.
- PDF export preview lists exactly what will be included (scenario, inputs, assumptions, flood extent, affected areas, priority locations, evacuation plan, recommended actions, confidence, validation result) before generation.
- Also the entry point for Offline Mode: "Pre-download for Offline Use" → `GET /scenarios/{id}/offline-bundle`, cached client-side (service worker + IndexedDB per `tech_stack.md`); PDF generation must work from this cached bundle with no network.

## 19. Component-to-Role Visibility Summary

| Page | PUBLIC | ANALYST | EMERGENCY_MANAGER |
|---|---|---|---|
| Home / Command Center | ✅ | ✅ | ✅ |
| Scenario Builder | view-only | ✅ full | ✅ (own region) |
| Dam and River Input | ✅ view | ✅ + satellite pull | ✅ view |
| SPH / Delft3D Simulation | ✅ (published) | ✅ run + view | ✅ view |
| Model Comparison | ✅ (published) | ✅ | ✅ |
| Flood Map | ✅ (published) | ✅ | ✅ |
| Time-to-Flood Map | ✅ (published) | ✅ | ✅ |
| Flood Probability and Uncertainty | ✅ (published) | ✅ | ✅ |
| Satellite Validation | ✅ (published) | ✅ run + view | ✅ view |
| Damage Assessment | ✅ (published) | ✅ | ✅ |
| Evacuation Planner | ✅ view | ✅ view + propose | ✅ + approve |
| Dynamic Route Safety | ✅ (published) | ✅ | ✅ |
| Emergency Priority List | ✅ (published) | ✅ | ✅ |
| AI Explanation / Decision Reasoning | ✅ (published items) | ✅ + assistant | ✅ + assistant |
| Simulation History | ❌ | ✅ (own dams) | ✅ |
| Assumptions and Data Quality | ✅ (published) | ✅ | ✅ |
| Export Center (SHP/KML/GeoJSON/CSV) | ❌ | ✅ (own dams) | ✅ |
| Export Center (PDF report, Offline pre-download) | ❌ | ✅ (own dams) | ✅ |

## 20. Build-in-Parallel Rule

The frontend team builds every page above against static mock JSON matching the exact response shapes in `api_endpoints.md`, stored in a local `mocks/` folder mirroring the endpoint paths. When backend/simulation endpoints go live, only the data-fetching layer (a single API client module) needs to point at real URLs — page/component code does not change. This is the mechanism that lets the frontend, backend, and simulation teams work simultaneously without blocking each other.
