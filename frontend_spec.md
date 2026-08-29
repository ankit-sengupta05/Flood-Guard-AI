# Frontend Specification — Flood-Guard AI

This document defines the dashboard's structure — the Home/Command Center plus 17 further pages, dynamically routed per dam — and exactly which `api_endpoints.md` endpoints each one consumes, so frontend work can proceed against mock data without waiting on backend. Visual language (color, shape, type, motion) is defined once in `design-system.md` and inherited everywhere below rather than restated per page.

**This spec is 3D-only** (`constraints.md` C22): there is no 2D map anywhere in the product. Every map/scene surface renders through the one shared component described in §0.

**Layout convention used across simulation/result pages:** left panel = inputs/controls, center = the 3D scene (`Scene3DViewport`), right panel = insights/recommendations — per the master prompt's dashboard design, with "map" read throughout this document as "3D scene."

**Routing convention:** the Home/Command Center (§1) is the only static route. Selecting a dam card or marker routes dynamically to `/dams/[damId]`, which becomes the shell for that dam's Detail Hub (§2) and all of its sub-pages (§3–§18) — no dam-specific page is a hand-built static route.

## 0. Shared Component — `Scene3DViewport`

Every page below that shows a map/scene embeds this one component rather than instantiating its own. It is described once here to avoid repeating its behavior 13 times.

- **Rendering:** a real 3D terrain mesh for the current dam (generated once per dam from its DEM, per `tech_stack.md` §1) is the base layer. Flood depth/velocity/arrival-time, when a scenario is loaded, render as an animated water-surface mesh above the terrain, color/height-encoded per `design-system.md` §5 (not an arbitrary rainbow ramp — height and opacity carry the encoding, the palette stays capped). Village/road/bridge/shelter/critical-infrastructure layers render as circular markers, extruded line segments (roads/bridges), and simple building volumes, per real OSM/vector data (`constraints.md` C21).
- **Cameras:** two modes, toggled from a single control in the viewport's corner:
  - **Cinematic (default):** an orbit camera focused on the dam/reservoir or the current area of interest, with `drei` `OrbitControls`-style constraints (can't clip through terrain, can't fly to space).
  - **Drone Free-Fly:** WASD + mouse-look navigation through the same scene (`drei` `FlyControls`/`PointerLockControls`), for exploring the flood extent and terrain from any angle. This is a camera mode only — it never triggers a new simulation and is available identically in Real and Surrogate mode (`constraints.md` C23).
- **Timeline:** where the page has timestepped data (Flood Map, SPH/Delft3D Simulation, Dynamic Route Safety), a shared `TimelineScrubber` component drives which precomputed timestep's grids are currently textured onto the scene — scrubbing never re-runs anything server-side.
- **Layer toggles:** a consistent layer-control panel (flood extent, depth, velocity, arrival time, probability, uncertainty, roads, bridges, villages, buildings, shelters, critical infrastructure) — present on every page but only showing the layers relevant to that page's data source.
- **`model_mode` badge:** always rendered in the viewport's corner per `constraints.md` C6 — never omitted, never color-only (`design-system.md` §5).

## 1. Home / Command Center

**Data source:** `GET /dams`

The single static entry route. Full-bleed 3D India view with a two-panel overlay.

- **Center — 3D India scene:** `Scene3DViewport` in globe/terrain mode (MapLibre 3D globe, per `tech_stack.md` §1 — the Home view is the one place using the globe renderer rather than the per-dam three.js terrain mesh, since it spans a whole country rather than one dam's local area), focused/pitched over India, with a radial vignette per `design-system.md` §6 dimming the edges of the viewport so attention stays on India and the dam markers rather than the full globe.
- **Dam markers:** one circular marker per registered dam at `{lat, lng}` (`design-system.md` §3 — filled circle + ring, never a teardrop pin). Hovering a marker raises a small floating brief card (name, river, current water-level %, latest scenario status) without navigating away. Clicking a marker or its brief card triggers the same navigation as clicking its list card below.
- **Side panel — dam list:** every registered dam as a `DamCard` (circular-radius card per `design-system.md` §3): name, river, state/district, reservoir water-level %, and a `StatusPill` showing the dam's current status. Status is derived server-side from the dam's latest **published** scenario (e.g. "No active scenario" / "Scenario published — Priority: <highest tier>" / "Validation available") — never a fabricated live-sensor reading, consistent with `constraints.md` C4 (no real dam-sensor telemetry). Cards are sorted by status severity, then alphabetically.
- **Navigation:** clicking any dam card or marker routes dynamically to `/dams/{dam_id}` — the Dam Detail Hub (§2). There is no separate "open Dam and River Input" vs. "open Flood Map" branching on Home itself; that choice happens inside the hub once the dam's own data has loaded.

## 2. Dam Detail Hub (per-dam landing page)

**Data source:** `GET /dams/{id}`, `GET /dams/{id}/scenarios`

The page every dam card routes to — `/dams/{id}`. This is new relative to a flat 18-page list: it's the local "command center" for one dam, and every other page below (§3–§18) is reached from here as a tab/section under the same dynamic route, never as its own top-level nav item.

- **Header:** dam name, river, state/district, height, reservoir capacity, current water-level %, `model_mode` of the latest run.
- **Stat graphs:** a row of `StatGraphCard` components (per `design-system.md` §8) — compact by default, each expandable inline to a full Recharts chart: reservoir level over recent scenarios, flood extent by scenario, priority-tier distribution of the latest published scenario. Sourced from `GET /dams/{id}/scenarios` (list) plus each scenario's own summary fields — no new aggregate endpoint required, the frontend rolls these up client-side for display only (never re-deriving priority/risk values themselves, per `architecture.md` §3's rule).
- **Embedded 3D simulation preview:** a `Scene3DViewport` showing the dam's terrain and, if a published scenario exists, its latest flood-timestep state — a live-feeling preview, not the full Flood Map page — with a "Open Full Flood Map" action into §7.
- **Section tabs** (each is §3–§18 below, rendered under this same `/dams/{id}/...` route): Scenario Builder, Dam & River Input, SPH Simulation, Delft3D Simulation, Model Comparison, Flood Map, Time-to-Flood Map, Probability & Uncertainty, Satellite Validation, Damage Assessment, Evacuation Planner, Dynamic Route Safety, Emergency Priority List, AI Explanation, Simulation History, Assumptions & Data Quality, Export Center.
- If no scenario has been created yet for this dam, the hub's default state prompts straight into Scenario Builder (§3) rather than showing empty stat cards.

## 3. Scenario Builder

**Route:** `/dams/{id}/scenario-builder` · **Data source:** `POST /dams/{id}/scenarios`, `POST /dams/{id}/scenarios/generate`, `GET /scenarios/{id}/assumptions`

- Manual mode: form for source-water (water level %, reservoir volume), breach (width, depth, side slope, formation time, failure type: partial/complete/controlled release), and rainfall.
- Auto mode: "Generate Best/Likely/Worst-Case" button → `POST .../generate`, returns a `scenario_group_id` and three `scenario_id`s.
- On submit, immediately show the Assumption Log panel (`GET /scenarios/{id}/assumptions`) so any missing-input fallback is visible before results are reviewed — this is the Missing-Data Diagnostic Engine surfaced directly, not hidden.
- Role: `ANALYST`+ to submit; `PUBLIC` can view a read-only version of a published scenario's original parameters.

## 4. Dam and River Input

**Route:** `/dams/{id}/environment` · **Data source:** `GET /dams/{id}`, `GET /dams/{id}/environment`, `POST /dams/{id}/satellite/pull`

- Dam/reservoir metadata plus a `Scene3DViewport` (cinematic camera by default, drone free-fly available) showing the real terrain mesh with toggleable village/road/bridge/building/shelter/critical-infrastructure layers.
- "Pull Satellite Imagery" control (`ANALYST`+) → `POST /dams/{id}/satellite/pull`, polls for job completion; once pulled, imagery is available as a terrain texture option in the viewport.

## 5. SPH Simulation

**Route:** `/dams/{id}/scenarios/{scenarioId}/sph` · **Data source:** `POST /scenarios/{id}/sph/run`, `GET /scenarios/{id}/flood-timesteps?engine=sph`

- Mode selector: Real Model / Surrogate (Rapid Response) — label is always shown on results per `model_mode`.
- `Scene3DViewport` with `TimelineScrubber` playback of the near-field/breach-zone flood animation; SPH particles render as an instanced point cloud so their individual motion near the breach is visible, especially from the drone free-fly camera.
- Role: `ANALYST`+ to run; `PUBLIC` can view published results.

## 6. Delft3D Simulation

**Route:** `/dams/{id}/scenarios/{scenarioId}/delft3d` · **Data source:** `POST /scenarios/{id}/delft3d/run`, `GET /scenarios/{id}/flood-timesteps?engine=delft3d`

- Same layout as §5, for the grid-based propagation model — the water-surface mesh spans the full downstream terrain rather than SPH's near-field particle cloud.
- Coupling toggle (`independent` / `coupled`) visible and passed to the run request; when `coupled`, show the SPH→hydrograph→Delft3D handoff diagram inline (a 2D explanatory diagram artifact is fine here — this is documentation, not a map/scene surface, so it sits outside the 3D-only rule) for judge-facing clarity.

## 7. Model Comparison

**Route:** `/dams/{id}/scenarios/{scenarioId}/compare` · **Data source:** `GET /scenarios/{id}/compare`

- SPH vs. Delft3D side-by-side: extent, max depth, max velocity, arrival time, compute time, satellite agreement.
- Recharts comparison charts, plus two `Scene3DViewport` instances (synced camera) showing each engine's flood extent for a visual difference read, not just numbers.
- Both engines' `model_mode` shown explicitly next to their respective columns.

## 8. Flood Map

**Route:** `/dams/{id}/scenarios/{scenarioId}/flood-map` · **Data source:** `GET /scenarios/{id}/flood-timesteps`

- Full-viewport `Scene3DViewport` with every layer toggle available: flood extent, depth, velocity, arrival time, probability, uncertainty, roads, bridges, villages, buildings, shelters, critical infrastructure.
- `TimelineScrubber` (0 / 5 / 10 / 20 / 40 min / 1 hr, etc., per available timesteps) animating flood propagation across the 3D terrain; drone free-fly camera is the primary way to "walk" a judge through how the flood reaches a specific village.
- This is the default landing view for a published scenario shared with `PUBLIC`.

## 9. Time-to-Flood Map

**Route:** `/dams/{id}/scenarios/{scenarioId}/time-to-flood` · **Data source:** `GET /scenarios/{id}/time-to-flood`

- `Scene3DViewport` with locations color/height-banded by arrival-time band (0–15 / 15–30 / 30–60 / 1–3 hr) rather than binary flooded/not.
- Per-location detail popover (triggered by clicking a marker in the 3D scene) shows exact arrival time and Last Safe Departure Time.

## 10. Flood Probability and Uncertainty

**Route:** `/dams/{id}/scenarios/{scenarioId}/uncertainty` · **Data source:** `GET /scenario-groups/{group_id}/uncertainty`

- Probability and Uncertainty rendered as togglable layers in `Scene3DViewport` (e.g. surface opacity/height encodes probability, per `design-system.md` §5).
- Method note (from the response) displayed prominently — states how uncertainty was computed for this prototype, per NFR7/transparency requirements.
- Only meaningful for scenarios that went through ensemble treatment; if a scenario has no `scenario_group_id`, this page shows a clear "single-run scenario — no ensemble available" state rather than a misleading empty scene.

## 11. Satellite Validation

**Route:** `/dams/{id}/scenarios/{scenarioId}/satellite-validation` · **Data source:** `POST /scenarios/{id}/satellite-validation`, `GET /scenarios/{id}/satellite-validation`

- Side-by-side: two `Scene3DViewport` instances (synced camera) — Model Prediction terrain draped with the simulated extent vs. the same terrain draped with the satellite-observed extent.
- IoU and agreement % displayed as headline metrics; a difference layer (toggle on either viewport) shows over-prediction/under-prediction zones.
- "Run Validation" button visible to `ANALYST`+ only; result view is `PUBLIC`-visible once published.

## 12. Damage Assessment

**Route:** `/dams/{id}/scenarios/{scenarioId}/damage` · **Data source:** `GET /scenarios/{id}/damage`

- Summary `StatGraphCard`s: flooded area, affected villages, affected buildings, road length affected, bridges at risk, agricultural land affected.
- Critical infrastructure at risk listed with type and distance/arrival time, each linkable to its position in the shared `Scene3DViewport`.

## 13. Evacuation Planner

**Route:** `/dams/{id}/scenarios/{scenarioId}/evacuation` · **Data source:** `GET /scenarios/{id}/evacuation-plan`, `POST /scenarios/{id}/evacuation-plan/propose`, `POST /evacuation-plan/{plan_id}/approve`

- Per-village `DamCard`-style cards: classification (evacuate immediately / by road / high ground / rescue priority), recommended route (rendered as an extruded line in `Scene3DViewport`, walkable via drone free-fly to sanity-check it doesn't cross a now-unsafe segment), recommended shelter, last safe departure time.
- `ANALYST` sees a "Propose Override" control per village; `EMERGENCY_MANAGER` sees pending proposals with Approve/Reject.

## 14. Dynamic Route Safety

**Route:** `/dams/{id}/scenarios/{scenarioId}/route-safety` · **Data source:** `GET /scenarios/{id}/road-safety?t={time}`

- `Scene3DViewport` with `TimelineScrubber` (synced to the same timeline used on the Flood Map) showing every road/bridge segment's safe/unsafe status per `design-system.md` §5 (solid = safe, dashed/dimmed = unsafe — never a red/green overlay).
- Segments transitioning from safe to unsafe are visually flagged with the transition time (`unsafe_from_min`), visible as a label when the camera is close (cinematic or drone view).

## 15. Emergency Priority List

**Route:** `/dams/{id}/scenarios/{scenarioId}/priority-list` · **Data source:** `GET /scenarios/{id}/priority-list`

- Single ranked list across all affected villages: rank, `PriorityPill` (High/Medium/Low per `design-system.md` §5), priority score, and a one-line action statement per entry — list panel sits alongside a `Scene3DViewport` that jumps/orbits to the selected village on click.
- Clicking an entry opens the Explainability panel (§16) scoped to that item.

## 16. AI Explanation / Decision Reasoning

**Route:** `/dams/{id}/scenarios/{scenarioId}/explain` (and as a slide-over panel from §13/§14/§15) · **Data source:** `GET /scenarios/{id}/explain/{item_id}`, `POST /scenarios/{id}/assistant/query`

- "Explain This Result" panel: inputs used, model/scenario used, assumptions applied, confidence, validation score — reachable from the Priority List, Evacuation Planner, and Time-to-Flood pages via a consistent button.
- Optional scenario assistant text box (`ANALYST`+) for free-form questions ("What happens if breach width increases to 150 m?"); every answer displays its `sources` array so it's visibly grounded in retrieved data, not free-generated.

## 17. Simulation History

**Route:** `/dams/{id}/history` · **Data source:** `GET /dams/{id}/scenarios`, `GET /scenarios/{id}/simulation-log`

- Chronological list of all scenarios/runs for a dam, filterable by status/model_mode/date — plain list, no 3D scene needed here (a run log is inherently tabular; see `design-system.md` §1 on not forcing decoration where it adds nothing).
- Clicking a run opens its full simulation log (step-by-step: engine, model_mode, timestamp, params) and a shortcut back into that run's Flood Map (§8).

## 18. Assumptions and Data Quality

**Route:** `/dams/{id}/scenarios/{scenarioId}/assumptions` · **Data source:** `GET /scenarios/{id}/assumptions`

- The full Assumption Log for a scenario: which fields were missing, what fallback (min/likely/max) was applied, and whether ensemble treatment was triggered as a result.
- Also documents, in static copy tied to the current uncertainty method note, how confidence levels are derived — this page is the canonical "here's what's real vs. approximated" reference for judges, including the 3D terrain mesh's own honest limitation (decimated/precomputed, per `constraints.md` C22).

## 19. Export Center

**Route:** `/dams/{id}/scenarios/{scenarioId}/export` · **Data source:** `POST /scenarios/{id}/export`, `GET /exports/{export_id}`

- Format selector (SHP / KML / GeoJSON / CSV / PDF) and layer picker for vector formats.
- PDF export preview lists exactly what will be included (scenario, inputs, assumptions, flood extent, affected areas, priority locations, evacuation plan, recommended actions, confidence, validation result) before generation — the PDF itself is a static document (2D by nature) and is exempt from the 3D-only rule, but includes rendered still frames captured from `Scene3DViewport` rather than a flat map export.
- Also the entry point for Offline Mode: "Pre-download for Offline Use" → `GET /scenarios/{id}/offline-bundle`, cached client-side (service worker + IndexedDB per `tech_stack.md`, including the terrain mesh/tile assets); PDF generation must work from this cached bundle with no network.

## 20. Component-to-Role Visibility Summary

| Page | PUBLIC | ANALYST | EMERGENCY_MANAGER |
|---|---|---|---|
| Home / Command Center | ✅ | ✅ | ✅ |
| Dam Detail Hub | ✅ | ✅ | ✅ |
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

## 21. Build-in-Parallel Rule

The frontend team builds every page above against static mock JSON matching the exact response shapes in `api_endpoints.md`, stored in a local `mocks/` folder mirroring the endpoint paths. When backend/simulation endpoints go live, only the data-fetching layer (a single API client module) needs to point at real URLs — page/component code does not change. This is the mechanism that lets the frontend, backend, and simulation teams work simultaneously without blocking each other.

Two additions specific to the 3D-only + Home redesign in this revision:
- `mocks/dams.json` must include a `status` field per dam (see §1) so the Home dam-list cards and markers can be built before the backend's status-derivation logic exists.
- A single placeholder glTF terrain mesh + terrain-RGB tile set is checked into `mocks/terrain/` so `Scene3DViewport` can be built and demoed before any real dam's mesh has been generated.
