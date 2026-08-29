# API Specification, Roles & Permissions — Flood-Guard AI

## 1. User Roles

| Role | Description | Typical User |
|---|---|---|
| `PUBLIC` | Unauthenticated visitor | General public viewing published scenarios |
| `ANALYST` | Builds/runs scenarios for assigned dams | Student team member, researcher, dam-operator equivalent |
| `EMERGENCY_MANAGER` | District/HADR authority; approves plans, uses offline mode, exports reports | District Disaster Management Authority official |
| `SYSTEM_ADMIN` | Full platform access | Platform/hackathon admin |

## 2. Permission Matrix

| Action | PUBLIC | ANALYST | EMERGENCY_MANAGER | SYSTEM_ADMIN |
|---|---|---|---|---|
| View dam/river map & registry | ✅ | ✅ | ✅ | ✅ |
| View published scenario results (flood map, time-to-flood, priority list) | ✅ | ✅ | ✅ | ✅ |
| View Assumption Log / Simulation History for a scenario | ❌ | ✅ (own dams) | ✅ | ✅ |
| Create/run a scenario (manual params or auto-generate) | ❌ | ✅ (own dams) | ✅ (own region) | ✅ |
| Run SPH / Delft3D / model comparison | ❌ | ✅ (own dams) | ❌ | ✅ |
| Trigger Satellite Validation | ❌ | ✅ (own dams) | ❌ | ✅ |
| View Damage Assessment | ✅ (published) | ✅ | ✅ | ✅ |
| View / edit Evacuation Plan | ✅ (view, published) | ✅ (view + propose) | ✅ (view + approve/override) | ✅ |
| View Emergency Priority List | ✅ (published) | ✅ | ✅ | ✅ |
| Request "Explain This Result" | ✅ (published items) | ✅ | ✅ | ✅ |
| Use Offline Mode (pre-download scenario) | ❌ | ✅ | ✅ | ✅ |
| Generate/export PDF emergency report | ❌ | ✅ (own dams) | ✅ | ✅ |
| Export SHP / KML / GeoJSON / CSV | ❌ | ✅ (own dams) | ✅ | ✅ |
| Register a new dam / edit dam metadata | ❌ | ❌ | ❌ (propose only) | ✅ |
| Publish a scenario (make visible to PUBLIC) | ❌ | ❌ (propose only) | ✅ | ✅ |
| Manage users/roles, fallback-assumption defaults | ❌ | ❌ | ❌ | ✅ |
| View raw ingestion/audit logs | ❌ | ❌ | ❌ | ✅ |

## 3. Authentication

- All non-`PUBLIC` endpoints require a bearer token (JWT) issued at login.
- Token payload includes `user_id`, `role`, and — for `ANALYST`/`EMERGENCY_MANAGER` — a scoped list of `dam_ids`/`district_ids`.
- Backend enforces scope on every request. A request for a dam outside the caller's scope returns `403`, never a filtered/empty result — the frontend must distinguish "not authorized" from "genuinely no data."

## 4. Endpoint Reference

### 4.1 Dam & River Registry

| Method | Endpoint | Description | Min Role | Request Body | Response |
|---|---|---|---|---|---|
| GET | `/dams` | List all registered dams (map + registry view) | PUBLIC | — | `{items: [{dam_id, name, river, lat, lng, state, district, height_m, reservoir_capacity_mcm}], total, page, page_size}` |
| GET | `/dams/{id}` | Full dam/reservoir/environment record | PUBLIC | — | `{dam_id, name, river, lat, lng, state, district, height_m, reservoir_capacity_mcm, water_level_pct, dem_ref, land_use_ref, updated_at}` |
| POST | `/dams` | Register a new dam | SYSTEM_ADMIN | `{name, river, lat, lng, state, district, height_m, reservoir_capacity_mcm, dem_source, bounding_box}` | `{dam_id}` |
| PATCH | `/dams/{id}` | Update dam metadata | SYSTEM_ADMIN (full) / EMERGENCY_MANAGER (propose) | Partial dam object | `{dam_id, updated_fields}` or `{status: "pending_approval"}` |
| GET | `/dams/{id}/environment` | Village/road/bridge/building/shelter/critical-infrastructure layers | PUBLIC | — | GeoJSON FeatureCollection per layer type |
| POST | `/dams/{id}/satellite/pull` | Trigger a GEE Sentinel/Landsat pull for a date range | ANALYST (own) / SYSTEM_ADMIN | `{start_date, end_date}` | `{job_id, status: "queued"}` |

### 4.2 Scenario Builder & Missing-Data Diagnostic

| Method | Endpoint | Description | Min Role | Request Body | Response |
|---|---|---|---|---|---|
| POST | `/dams/{id}/scenarios` | Create a scenario with manual source-water/breach/environment parameters | ANALYST (own) | `{water_level_pct, breach_width_m?, breach_depth_m?, breach_side_slope?, breach_formation_time_min?, failure_type, rainfall_mm?}` | `{scenario_id, status: "diagnosing"}` |
| POST | `/dams/{id}/scenarios/generate` | Auto-generate best-case/most-likely/worst-case variants from a base input | ANALYST (own) | `{base_params}` | `{scenario_group_id, scenario_ids: [best, likely, worst]}` |
| GET | `/scenarios/{id}/assumptions` | Assumption Log: which inputs were missing and what fallback was used | ANALYST+ | — | `[{field, status: "missing"|"provided", fallback_used?, fallback_min?, fallback_likely?, fallback_max?}]` |
| GET | `/dams/{id}/scenarios` | List scenarios for a dam | PUBLIC (published) / ANALYST+ (all) | — | `{items: [{scenario_id, scenario_group_id?, status, model_mode, created_by, created_at, published}], total}` |

### 4.3 Hydrodynamic Engine (SPH / Delft3D / Comparison)

| Method | Endpoint | Description | Min Role | Request Body | Response |
|---|---|---|---|---|---|
| POST | `/scenarios/{id}/sph/run` | Run the SPH breach-zone component | ANALYST (own) | `{mode: "real"|"surrogate"}` | `{job_id, status: "queued"}` |
| POST | `/scenarios/{id}/delft3d/run` | Run the Delft3D propagation component | ANALYST (own) | `{mode: "real"|"surrogate", coupling: "independent"|"coupled"}` | `{job_id, status: "queued"}` |
| GET | `/scenarios/{id}/flood-timesteps` | Precomputed depth/velocity/arrival grids for playback | PUBLIC (if published) / ANALYST+ | Query: `engine=sph|delft3d` | `{terrain_ref, model_mode, timesteps: [{t, depth_grid_ref, velocity_grid_ref}], arrival_time_grid_ref}` |
| GET | `/scenarios/{id}/compare` | SPH vs. Delft3D comparison metrics | PUBLIC (if published) / ANALYST+ | — | `{sph: {extent_km2, max_depth_m, max_velocity_ms, arrival_time_min, compute_time_s, model_mode}, delft3d: {...}, satellite_agreement_pct}` |

### 4.4 Uncertainty & Satellite Validation

| Method | Endpoint | Description | Min Role | Request Body | Response |
|---|---|---|---|---|---|
| GET | `/scenario-groups/{group_id}/uncertainty` | Aggregated probability + confidence map across an ensemble | PUBLIC (if published) / ANALYST+ | — | `{probability_grid_ref, confidence_grid_ref, method_note}` |
| POST | `/scenarios/{id}/satellite-validation` | Run satellite validation for this scenario's time window | ANALYST (own) | `{}` | `{job_id, status: "queued"}` |
| GET | `/scenarios/{id}/satellite-validation` | Retrieve validation result | PUBLIC (if published) / ANALYST+ | — | `{observed_extent_ref, simulated_extent_ref, iou, agreement_pct, difference_map_ref}` |
| GET | `/dams/{id}/near-real-time-flood` | Standalone before/after GEE flood-extent analysis (no simulation) | ANALYST (own) / SYSTEM_ADMIN | Query: `before_date, after_date` | `{before_extent_ref, after_extent_ref, change_map_ref}` |

### 4.5 Time-to-Flood, Road Safety, Damage, Evacuation

| Method | Endpoint | Description | Min Role | Request Body | Response |
|---|---|---|---|---|---|
| GET | `/scenarios/{id}/time-to-flood` | Arrival-time bands per location | PUBLIC (if published) / ANALYST+ | — | `[{location_id, name, band: "0-15min"|"15-30min"|"30-60min"|"1-3hr", arrival_time_min}]` |
| GET | `/scenarios/{id}/road-safety` | Time-aware road/bridge safety status | PUBLIC (if published) / ANALYST+ | Query: `t` (minutes) | `[{segment_id, type: "road"|"bridge", status: "safe"|"unsafe", unsafe_from_min?}]` |
| GET | `/scenarios/{id}/damage` | Damage & impact analysis | PUBLIC (if published) / ANALYST+ | — | `{flooded_area_km2, affected_villages, affected_buildings, road_length_affected_km, bridges_at_risk, agri_land_affected_ha, critical_infra_at_risk: [...]}` |
| GET | `/scenarios/{id}/evacuation-plan` | Per-village evacuation recommendation | PUBLIC (if published) / ANALYST+ | — | `[{village_id, classification: "evacuate_immediately"|"evacuate_by_road"|"high_ground"|"rescue_priority", recommended_route_geojson, recommended_shelter_id, last_safe_departure_min}]` |
| POST | `/scenarios/{id}/evacuation-plan/propose` | Propose a manual override to a route/shelter | ANALYST (own) | `{village_id, route_geojson?, shelter_id?}` | `{status: "pending_approval"}` |
| POST | `/evacuation-plan/{plan_id}/approve` | Approve/reject a proposed change | EMERGENCY_MANAGER | `{approved: true|false, comment?}` | `{status}` |

### 4.6 Emergency Priority & Explainability

| Method | Endpoint | Description | Min Role | Request Body | Response |
|---|---|---|---|---|---|
| GET | `/scenarios/{id}/priority-list` | Ranked, cross-village emergency action list | PUBLIC (if published) / ANALYST+ | — | `[{rank, village_id, priority: "high"|"medium"|"low", priority_score, action_statement}]` |
| GET | `/scenarios/{id}/explain/{item_id}` | Explainability trail for a priority-list item or any recommendation | PUBLIC (if published) / ANALYST+ | — | `{inputs_used, model_used, scenario_used, assumptions: [...], confidence, validation_score}` |
| POST | `/scenarios/{id}/assistant/query` | Ask the retrieval-grounded scenario assistant a question | ANALYST+ | `{question}` | `{answer, sources: [{field, value}]}` |
| GET | `/scenarios/{id}/simulation-log` | Full simulation/scenario run log for audit | ANALYST+ | — | `[{step, engine, model_mode, timestamp, params}]` |

### 4.7 Offline Mode & Exports

| Method | Endpoint | Description | Min Role | Request Body | Response |
|---|---|---|---|---|---|
| GET | `/scenarios/{id}/offline-bundle` | Full cacheable bundle (map tiles refs, results, evacuation plan) for offline pre-download | ANALYST+ | — | `{bundle_ref, generated_at}` |
| POST | `/scenarios/{id}/export` | Generate an export in a given format | ANALYST (own) / EMERGENCY_MANAGER | `{format: "shp"|"kml"|"geojson"|"csv"|"pdf", layers?: [...]}` | `{export_id, status: "queued"}` |
| GET | `/exports/{export_id}` | Poll/download a generated export | Same as requester | — | `{status, download_ref}` |

### 4.8 Auth & Users

| Method | Endpoint | Description | Min Role | Request Body | Response |
|---|---|---|---|---|---|
| POST | `/auth/register` | Create account | PUBLIC | `{name, email, password, role_requested}` | `{user_id}` (non-`ANALYST` roles need admin approval) |
| POST | `/auth/login` | Login | PUBLIC | `{email, password}` | `{token, role, scope}` |
| GET | `/users/me` | Current user profile | Any authenticated | — | `{user_id, name, role, scope}` |
| POST | `/users/{id}/role` | Change a user's role/scope | SYSTEM_ADMIN | `{role, scope}` | `{status}` |

## 5. Response Conventions (all teams must follow)

- All timestamps: ISO 8601 UTC.
- All list endpoints: paginated with `?page&page_size`, response wrapped as `{items: [...], total, page, page_size}` — never an unwrapped array.
- All error responses: `{error_code, message}` with standard HTTP status codes (`400` validation, `401` unauthenticated, `403` unauthorized/out-of-scope, `404` not found, `409` conflict, `500` server error).
- Large binary/raster data (grids, imagery) is never inlined in JSON — endpoints return a `_ref` to fetch it separately, so the frontend lazy-loads heavy simulation data only when a page actually renders it.
- Every simulation/result object includes `model_mode: "real"|"surrogate"` — the frontend must render this, never infer or omit it (see `architecture.md` §3).
- Priority is always one of a fixed enum (`high`, `medium`, `low`); road/bridge status is always `safe`/`unsafe`; evacuation classification is always one of the four fixed values in §4.5 — never free-text — so the frontend can map consistent colors/icons without guessing.

## 6. Rules That Prevent Team Conflicts

1. **The frontend never derives priority, confidence, road-safety status, or evacuation classification itself** — always server-computed fields.
2. **Breaking changes go under a new path prefix** (e.g. `/v2/dams`) rather than silently altering `/v1/dams`.
3. **Every endpoint in this document is the contract** — a needed field not listed here is proposed and added to this document first, then implemented.
4. **Mock data first:** the frontend builds against static JSON fixtures matching these response shapes before backend endpoints are live.
5. **Scenario data is immutable once generated:** a `scenario_id`'s grids/impact/evacuation-plan/priority-list data never change after creation — a new run (including re-running with edited parameters) always produces a new `scenario_id`. `scenario_group_id` links related ensemble/multi-scenario runs without implying any of them are mutable.
6. **Every scenario-derived result response must be traceable to an `/explain/{item_id}`-style payload or an `/assumptions` entry** — a page that shows a number but can't answer "why" from the API is treated as incomplete, per the Explainability requirement.
