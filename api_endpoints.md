# API Specification, Roles & Permissions — Dam Breakage Simulation Platform

## 1. User Roles

| Role | Description | Typical User |
|---|---|---|
| `PUBLIC` | Unauthenticated visitor | General public viewing the map/dashboard |
| `CITIZEN` | Registered public account | Resident who wants alerts for a specific dam/region |
| `DAM_OPERATOR` | Manages one or more specific dams | Dam site staff |
| `DISTRICT_ADMIN` | Manages all dams within a district/region, can trigger manual simulations, edit evacuation plans | District Disaster Management Authority official |
| `SYSTEM_ADMIN` | Full platform access, manages dam registry, users, thresholds | Platform/hackathon admin |

## 2. Permission Matrix

| Action | PUBLIC | CITIZEN | DAM_OPERATOR | DISTRICT_ADMIN | SYSTEM_ADMIN |
|---|---|---|---|---|---|
| View dam map & list | ✅ | ✅ | ✅ | ✅ | ✅ |
| View dam public stats (risk status, general health) | ✅ | ✅ | ✅ | ✅ | ✅ |
| View detailed sensor readings & graphs | ❌ | ❌ | ✅ (own dams) | ✅ (region dams) | ✅ |
| View 3D breach/flood simulation | ✅ (published scenarios only) | ✅ | ✅ | ✅ | ✅ |
| Subscribe to alerts for a dam/region | ❌ | ✅ | ✅ | ✅ | ✅ |
| Trigger manual simulation run | ❌ | ❌ | ✅ (own dams) | ✅ (region dams) | ✅ |
| Edit dam metadata (location, terrain, thresholds) | ❌ | ❌ | ✅ (own dams, limited fields) | ✅ (region dams) | ✅ |
| Edit/approve evacuation plans | ❌ | ❌ | ❌ (propose only) | ✅ (approve) | ✅ |
| Issue/override public alerts | ❌ | ❌ | ❌ | ✅ | ✅ |
| Register a new dam | ❌ | ❌ | ❌ | ✅ | ✅ |
| Manage users/roles | ❌ | ❌ | ❌ | ❌ | ✅ |
| View raw ingestion/audit logs | ❌ | ❌ | ❌ | ❌ | ✅ |

## 3. Authentication

- All non-`PUBLIC` endpoints require a bearer token (JWT) issued at login.
- Token payload includes: `user_id`, `role`, and (for `DAM_OPERATOR`/`DISTRICT_ADMIN`) a scoped list of `dam_ids`/`district_ids` they're authorized for.
- Backend enforces scope on every request (e.g., a `DAM_OPERATOR` calling `/dams/{id}/sensors` for a dam not in their scope gets `403`, not filtered/empty data — this distinction matters for the frontend, since a `403` should render a permission message, while an empty array means genuinely no data).

## 4. Endpoint Reference

### 4.1 Dam Registry

| Method | Endpoint | Description | Min Role | Request Body | Response |
|---|---|---|---|---|---|
| GET | `/dams` | List all registered dams (for map + list view) | PUBLIC | — | `[{dam_id, name, lat, lng, state, district, risk_status, last_updated}]` |
| GET | `/dams/{id}` | Public summary for one dam | PUBLIC | — | `{dam_id, name, lat, lng, state, district, dam_type, height_m, risk_status, risk_score, last_updated}` |
| POST | `/dams` | Register a new dam | DISTRICT_ADMIN | `{name, lat, lng, state, district, dam_type, height_m, terrain_file_ref, risk_limit}` | `{dam_id}` |
| PATCH | `/dams/{id}` | Update dam metadata | DAM_OPERATOR (own, limited fields) / DISTRICT_ADMIN (full) | Partial dam object | `{dam_id, updated_fields}` |
| DELETE | `/dams/{id}` | Deregister a dam | SYSTEM_ADMIN | — | `{status}` |

### 4.2 Sensors & Health

| Method | Endpoint | Description | Min Role | Request Body | Response |
|---|---|---|---|---|---|
| GET | `/dams/{id}/sensors/latest` | Latest sensor readings | DAM_OPERATOR (own) / DISTRICT_ADMIN | — | `{water_level, seepage, deformation, pore_pressure, temperature, timestamp}` |
| GET | `/dams/{id}/sensors/history?from&to` | Historical sensor readings for graphs | DAM_OPERATOR (own) / DISTRICT_ADMIN | Query params: date range | `[{timestamp, water_level, seepage, ...}]` |
| POST | `/dams/{id}/sensors/ingest` | Sensor gateway pushes new readings | System-internal (service account, not a user role) | `{sensor_type, value, timestamp}` | `{status}` |
| GET | `/dams/{id}/risk` | Current + historical failure risk score | PUBLIC (current only) / DAM_OPERATOR+ (historical) | Query: `history=true` | `{risk_score, risk_status, threshold, timestamp}` or history array |
| GET | `/dams/{id}/imagery/anomalies` | CV-detected anomalies (cracks, deformation) from satellite/drone | DAM_OPERATOR (own) / DISTRICT_ADMIN | — | `[{type, confidence, location, image_ref, detected_at}]` |

### 4.3 Simulation

| Method | Endpoint | Description | Min Role | Request Body | Response |
|---|---|---|---|---|---|
| POST | `/dams/{id}/simulate` | Trigger a manual breach + flood simulation | DAM_OPERATOR (own) / DISTRICT_ADMIN | `{dam_params_override?, rainfall_scenario?}` | `{scenario_id, status: "queued"}` |
| GET | `/dams/{id}/scenarios` | List past/current simulation scenarios for a dam | PUBLIC (published only) / DAM_OPERATOR+ (all) | — | `[{scenario_id, triggered_by, trigger_type, status, created_at}]` |
| GET | `/dams/{id}/scenarios/{scenario_id}/flood-timesteps` | Precomputed depth/velocity/arrival grids for playback | PUBLIC (if published) / DAM_OPERATOR+ | — | `{terrain_ref, timesteps: [{t, depth_grid_ref, velocity_grid_ref}], arrival_time_grid_ref}` |
| GET | `/dams/{id}/scenarios/{scenario_id}/impact` | Village/road/building impact for a scenario | PUBLIC (if published) / DAM_OPERATOR+ | — | `[{asset_type, asset_id, name, arrival_time_min, peak_depth_m, risk_category}]` |

### 4.4 Evacuation

| Method | Endpoint | Description | Min Role | Request Body | Response |
|---|---|---|---|---|---|
| GET | `/dams/{id}/scenarios/{scenario_id}/evacuation-plan` | Generated evacuation plan | PUBLIC (if published) / DAM_OPERATOR+ | — | `[{village_id, route_geojson, safe_zone, time_needed_min, time_available_min}]` |
| POST | `/dams/{id}/scenarios/{scenario_id}/evacuation-plan/propose` | Operator proposes a manual override to a route | DAM_OPERATOR (own) | `{village_id, route_geojson}` | `{status: "pending_approval"}` |
| POST | `/evacuation-plan/{plan_id}/approve` | Approve a proposed evacuation plan change | DISTRICT_ADMIN | `{approved: true/false, comment?}` | `{status}` |

### 4.5 Alerts

| Method | Endpoint | Description | Min Role | Request Body | Response |
|---|---|---|---|---|---|
| GET | `/alerts?dam_id&status` | List active/past alerts | PUBLIC (own subscriptions) / DISTRICT_ADMIN (all) | Query params | `[{alert_id, dam_id, severity, message, issued_at, status}]` |
| POST | `/alerts` | Manually issue/override an alert | DISTRICT_ADMIN | `{dam_id, severity, message, channels}` | `{alert_id, status}` |
| POST | `/alerts/{id}/acknowledge` | Mark alert as acknowledged (ops tracking) | DAM_OPERATOR / DISTRICT_ADMIN | — | `{status}` |
| POST | `/users/{id}/subscriptions` | Citizen subscribes to alerts for a dam/region | CITIZEN | `{dam_id or district}` | `{status}` |

### 4.6 Auth & Users

| Method | Endpoint | Description | Min Role | Request Body | Response |
|---|---|---|---|---|---|
| POST | `/auth/register` | Create account | PUBLIC | `{name, email, password, role_requested}` | `{user_id}` (role activation may need admin approval for non-CITIZEN roles) |
| POST | `/auth/login` | Login | PUBLIC | `{email, password}` | `{token, role, scope}` |
| GET | `/users/me` | Current user profile | Any authenticated | — | `{user_id, name, role, scope}` |
| POST | `/users/{id}/role` | Change a user's role/scope | SYSTEM_ADMIN | `{role, scope}` | `{status}` |

## 5. Response Conventions (both teams must follow)

- All timestamps: ISO 8601 UTC.
- All list endpoints: paginated with `?page&page_size`, response wrapped as `{items: [...], total, page, page_size}` — the frontend should never assume an unwrapped array from a list endpoint.
- All error responses: `{error_code, message}` with standard HTTP status codes (`400` validation, `401` unauthenticated, `403` unauthorized/out-of-scope, `404` not found, `409` conflict, `500` server error).
- Large binary data (grids, imagery) is never inlined in JSON — endpoints return a `_ref` (URL/key) to fetch the binary/array data separately, so JSON payloads stay small and the frontend can lazy-load heavy simulation data only when the 3D view actually needs it.
- Risk status is always one of a fixed enum: `SAFE`, `WATCH`, `WARNING`, `CRITICAL` — never a raw free-text string — so the frontend can map it to consistent colors/icons without guessing.

## 6. Rules That Prevent Frontend/Backend Conflicts

1. **The frontend never derives risk status, alert severity, or evacuation priority itself** — these are always fields returned by the backend, computed once, server-side. This avoids the two sides disagreeing on thresholds or logic.
2. **The backend never changes an existing field's type or meaning without a version bump** — breaking changes go under a new path prefix (e.g., `/v2/dams`) rather than silently altering `/v1/dams`.
3. **Every endpoint in this document is the contract** — if either team needs a field that isn't listed here, it's proposed and added to this document first, then implemented, not added ad hoc in code.
4. **Mock data first:** the frontend team builds against static JSON fixtures matching these response shapes before the backend endpoints are live, so both sides can work in parallel without blocking on each other.
5. **Scenario data is immutable once generated:** a `scenario_id`'s flood-timesteps/impact/evacuation-plan data never changes after creation — a new simulation run always produces a new `scenario_id`. This means the frontend can safely cache scenario data without worrying about it going stale under the same ID.
