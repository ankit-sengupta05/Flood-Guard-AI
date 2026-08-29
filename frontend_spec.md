# Frontend Specification — Dam Breakage Simulation Platform

This document defines the frontend screens/components and exactly which API endpoints (from `api_endpoints.md`) each one consumes, so frontend work can proceed against mock data without waiting on backend, and without guessing at backend behavior.

## 1. Screen: Map View (default landing screen)

**Purpose:** Open-world map, currently focused on India, showing all registered dams as floating markers.

**Data source:** `GET /dams`

**Behavior:**
- Map centered/bounded on India by default (zoomable/pannable beyond, but India is the initial viewport).
- Each dam rendered as a marker at `{lat, lng}`, colored by `risk_status` (`SAFE` = green, `WATCH` = yellow, `WARNING` = orange, `CRITICAL` = red) — status enum and colors must match `api_endpoints.md` section 5 exactly.
- Clicking a marker opens that dam's card (see Section 2) or navigates directly to Dam Detail (Section 3) — recommend marker click → card popup, card click → detail view, to match the "list of dams as item cards" requirement.
- A parallel list panel (toggleable with the map) shows the same dams as scrollable cards, so users can browse by list or by map.

## 2. Component: Dam Item Card

**Purpose:** Compact summary shown in the dam list and in map marker popups.

**Data source:** Fields from `GET /dams` (no separate call needed — the list endpoint already returns everything a card needs).

**Displays:**
- Dam name, state/district
- Risk status badge (color-coded per the enum above)
- Last updated timestamp
- Small thumbnail/icon (static per dam type, not fetched per-card)

**Interaction:** Clicking anywhere on the card navigates to Dam Detail View (Section 3), passing `dam_id`.

## 3. Screen: Dam Detail View

**Purpose:** Everything about one specific dam — live stats, health graphs, and the 3D simulation.

**Layout: three tabs/sections within one screen**

### 3.1 Overview tab
- **Data source:** `GET /dams/{id}`, `GET /dams/{id}/risk`
- Current risk score (numeric + status badge), dam metadata (type, height, location), last updated time.
- Risk score history graph (line chart) — `GET /dams/{id}/risk?history=true` (requires `DAM_OPERATOR`+ role; if the viewer is `PUBLIC`/`CITIZEN`, show current status only and hide the historical graph, don't call the endpoint at all to avoid a `403` in the console).

### 3.2 Live Stats tab (role-gated)
- **Data source:** `GET /dams/{id}/sensors/latest`, `GET /dams/{id}/sensors/history`
- Only rendered/requested if the logged-in user's role/scope permits (per the permission matrix) — the frontend should check the user's role client-side to decide whether to show this tab at all, but the backend is still the enforcement point (never trust the client-side check alone).
- Graphs: water level, seepage, deformation, pore pressure, temperature over the selected time range.
- Anomaly list from `GET /dams/{id}/imagery/anomalies` shown alongside, with confidence scores and thumbnail image references.

### 3.3 Simulation tab
- **Data source:** `GET /dams/{id}/scenarios` to list available scenarios (default to the most recent/published one), then `GET /dams/{id}/scenarios/{scenario_id}/flood-timesteps` for the 3D playback data and `GET /dams/{id}/scenarios/{scenario_id}/impact` for the village/road/building impact table.
- This tab hosts the 3D view (Three.js) described in the earlier PRD/tech_stack docs: terrain + dam + village markers, time slider, flood animation, village state changes, click-to-inspect.
- Evacuation plan overlay (routes, safe zones) from `GET /dams/{id}/scenarios/{scenario_id}/evacuation-plan`, toggleable as a map layer within the 3D/map view.
- If the user has `DAM_OPERATOR`/`DISTRICT_ADMIN` role and the dam is theirs/in-scope, show a "Run New Simulation" button → `POST /dams/{id}/simulate`, then poll `GET /dams/{id}/scenarios` until the new scenario's status is ready.

## 4. Screen: Alerts

**Data source:** `GET /alerts?dam_id` (for a specific dam, shown as a section within Dam Detail) and `GET /alerts` globally (for a dedicated Alerts screen, filtered to the user's subscriptions if `CITIZEN`, or all if `DISTRICT_ADMIN`).

**Behavior:**
- Severity badge per alert (tied to arrival-time proximity per architecture.md).
- `CITIZEN` users can subscribe/unsubscribe to a dam or district via `POST /users/{id}/subscriptions`.
- `DISTRICT_ADMIN` sees an "Issue Alert" button → `POST /alerts`.

## 5. Auth Screens

- Login/Register forms → `POST /auth/login`, `POST /auth/register`.
- Store returned JWT; attach as bearer token on all subsequent requests.
- `GET /users/me` on app load (if a token exists) to restore session and determine which UI elements (tabs, buttons) to show per the permission matrix.

## 6. Component-to-Role Visibility Summary

| Screen/Component | PUBLIC | CITIZEN | DAM_OPERATOR | DISTRICT_ADMIN |
|---|---|---|---|---|
| Map + dam cards | ✅ | ✅ | ✅ | ✅ |
| Dam Overview tab | ✅ (current risk only) | ✅ | ✅ + history | ✅ + history |
| Live Stats tab | ❌ | ❌ | ✅ (own dams) | ✅ |
| Simulation tab (view) | ✅ (published scenarios) | ✅ | ✅ | ✅ |
| "Run New Simulation" button | ❌ | ❌ | ✅ (own dams) | ✅ |
| Alerts screen (subscribe) | ❌ | ✅ | ✅ | ✅ |
| "Issue Alert" button | ❌ | ❌ | ❌ | ✅ |
| Dam registration form | ❌ | ❌ | ❌ | ✅ |

## 7. Build-in-Parallel Rule

The frontend team builds every screen above against static mock JSON matching the exact response shapes in `api_endpoints.md`, stored in a local `mocks/` folder mirroring the endpoint paths. When backend endpoints go live, only the data-fetching layer (e.g., a single API client module) needs to point at real URLs instead of mocks — component code does not change. This is the mechanism that lets both teams work simultaneously without blocking each other.
