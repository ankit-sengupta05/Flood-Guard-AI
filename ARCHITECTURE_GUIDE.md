# Visual Architecture Guide

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         USER INTERFACE LAYER                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌──────────────────────┐  ┌──────────────────────┐ ┌──────────────┐  │
│  │  Scene3DViewport     │  │ ArrivalTimeDashboard │ │  Command     │  │
│  │  ─────────────────   │  │ ────────────────────  │ │  Center      │  │
│  │ • 3D Terrain Mesh    │  │ • Priority List      │ │              │  │
│  │ • Water Surface      │  │ • Map View           │ │ • Dam Select │  │
│  │ • Dam Structure      │  │ • Legend             │ │ • Scenario   │  │
│  │ • Village Markers    │  └──────────────────────┘ │   Select     │  │
│  │ • Heatmap Overlay ✨ │                            └──────────────┘  │
│  │   (PNG texture)      │                                              │
│  └──────────────────────┘                                              │
│           │                      │                                     │
│           └──────────┬───────────┘                                     │
│                      │                                                 │
│     Toggle: "Show arrival heatmap"  ← Checkbox in control panel       │
│                      │                                                 │
└──────────────────────┼─────────────────────────────────────────────────┘
                       │ HTTP Requests
                       ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         NETWORK LAYER                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  GET /scenarios/{id}/arrival-time-grid                                │
│  ├─ Returns: JSON { grid: [[...]], cell_count, span_km, ... }         │
│  └─ Used by: Dashboard for analysis                                   │
│                                                                         │
│  GET /scenarios/{id}/arrival-time-texture                             │
│  ├─ Returns: PNG image (256×256, RGBA)                               │
│  ├─ Content-Type: image/png                                           │
│  ├─ Cache-Control: max-age=3600                                       │
│  └─ Used by: Three.js TextureLoader                                   │
│                                                                         │
│  GET /scenarios/{id}/time-to-flood (existing)                         │
│  ├─ Returns: Village arrival times (per-location)                     │
│  └─ Used by: Map markers and cards                                    │
│                                                                         │
└──────────────────────┬───────────────────────────────────────────────────┘
                       │ HTTP Responses
                       ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         BACKEND LAYER (FastAPI)                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  @app.get("/scenarios/{scenario_id}/arrival-time-grid")               │
│  ├─ get_scenario(scenario_id) → Load from SCENARIOS dict              │
│  ├─ compute_arrival_grid(scenario) ─┐                                 │
│  │                                   │                                 │
│  ├─ Return JSON with grid data       │                                 │
│  └─────────────────────────────────┬─┘                                 │
│                                    │                                   │
│  @app.get("/scenarios/{scenario_id}/arrival-time-texture")            │
│  ├─ get_scenario(scenario_id) → Load from SCENARIOS dict              │
│  ├─ compute_arrival_grid(scenario) ──┐                                │
│  │                                    │                                │
│  ├─ arrival_grid_to_rgba(grid) ──┐   │                                │
│  │                                │   │                                │
│  ├─ Image.fromarray(rgba) ──┐    │   │                                │
│  │                          │    │   │                                │
│  ├─ PIL.Image.save(PNG) ─┬──┴────┴───┘                                │
│  │                       │                                             │
│  ├─ Return PNG response  │                                             │
│  └──────────────────────┬┘                                             │
│                         │                                              │
│                    Computation Layer                                   │
│                         │                                              │
│                         ▼                                              │
│  ┌────────────────────────────────────────────────────────┐           │
│  │  compute_arrival_grid(scenario)                        │           │
│  │  ─────────────────────────────────────────────────────│           │
│  │                                                        │           │
│  │  1. dam = get_dam(scenario["dam_id"])                 │           │
│  │  2. breach_width = scenario["params"]["breach_width_m"]           │
│  │  3. speed_mps = 0.4 + (breach_width / 200.0)         │           │
│  │                                                        │           │
│  │  4. Create 256×256 grid (±15 km)                       │           │
│  │     xs = linspace(-15, 15, 256)                        │           │
│  │     ys = linspace(-15, 15, 256)                        │           │
│  │     xx, yy = meshgrid(xs, ys)                          │           │
│  │                                                        │           │
│  │  5. Compute distances from dam                         │           │
│  │     dist_km = sqrt(xx² + yy²)                          │           │
│  │                                                        │           │
│  │  6. Calculate arrival times                            │           │
│  │     arrival_min = dist_km * 1000 / (speed + 0.01) / 60           │
│  │                                                        │           │
│  │  7. Return float32 array (256, 256)                    │           │
│  └────────────────────────────────────────────────────────┘           │
│                         │                                              │
│                         ▼                                              │
│  ┌────────────────────────────────────────────────────────┐           │
│  │  arrival_grid_to_rgba(grid)                            │           │
│  │  ────────────────────────────────────────────────────  │           │
│  │                                                        │           │
│  │  1. Normalize grid: t = clip(grid / 180.0, 0, 1)      │           │
│  │                                                        │           │
│  │  2. Color mapping:                                     │           │
│  │     red = 255 (constant)                              │           │
│  │     green = t * 180 (0 to 180)                        │           │
│  │     blue = 0 (constant)                               │           │
│  │     alpha = (1-t) * 220 + 35                          │           │
│  │                                                        │           │
│  │  3. Stack RGBA channels                                │           │
│  │     return ndarray (256, 256, 4, uint8)               │           │
│  │                                                        │           │
│  │  Color Result:                                         │           │
│  │  • t=0 (dam center): red=255, green=0, alpha=255     │           │
│  │  • t=0.5 (mid-range): red=255, green=90, alpha=145   │           │
│  │  • t=1.0 (far/safe): red=255, green=180, alpha=35    │           │
│  └────────────────────────────────────────────────────────┘           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## Component Interaction Diagram

```
CommandCenter (Main App)
    │
    ├─→ Scene3DViewport
    │      │
    │      ├─→ TerrainMesh (existing)
    │      ├─→ WaterSurface (existing)
    │      ├─→ SPHParticles (existing)
    │      │
    │      └─→ ArrivalTimeOverlay ✨ (NEW)
    │          ├─ Loads PNG texture
    │          ├─ Creates PlaneGeometry (±15 km)
    │          ├─ Positions above terrain
    │          └─ Renders with transparency
    │
    └─→ ArrivalTimeDashboard ✨ (NEW)
         │
         ├─→ ArrivalTimeLegend (tab)
         │      └─ Displays color scale reference
         │
         ├─→ FloodMap (tab)
         │      ├─ MapContainer (Leaflet)
         │      ├─ Dam marker
         │      ├─ Arrival-time circles (4)
         │      └─ Village markers
         │
         └─→ Priority List (tab)
                ├─ Summary stats grid
                ├─ VillageImpactCard (selected)
                │   ├─ Arrival time
                │   ├─ Population at risk
                │   ├─ Priority level
                │   └─ Action recommendations
                │
                └─ Village list
                   └─ Click to select
```

## Data Flow: From Scenario to Visualization

```
User selects scenario
         │
         ▼
CommandCenter updates selectedScenarioId
         │
         ▼
┌────────────────────────────────────┐
│ ArrivalTimeDashboard receives:     │
│  - scenarioId                      │
│  - damName, damLat, damLng         │
│  - villages array                  │
└────────────────────────────────────┘
         │
         ├──→ Fetch /scenarios/{id}/arrival-time-grid
         │         │
         │         ▼
         │    Backend: compute_arrival_grid()
         │         │
         │         ▼
         │    Returns grid JSON
         │         │
         │         ▼
         │    Store in component state
         │         │
         │         ▼
         │    Display in dashboard/map
         │
         └──→ Fetch /scenarios/{id}/arrival-time-texture
                   │
                   ▼
              Backend: compute_arrival_grid() + arrival_grid_to_rgba()
                   │
                   ▼
              Returns PNG bytes
                   │
                   ▼
              Three.js TextureLoader receives PNG
                   │
                   ▼
              ArrivalTimeOverlay component
                   │
                   ▼
              PlaneGeometry + MeshBasicMaterial
                   │
                   ▼
              GPU renders heatmap overlay on terrain
```

## Color Mapping Visualization

```
Arrival Time (minutes)    Color              RGBA         Priority
─────────────────────────────────────────────────────────────────
0 - 15 min          ║  Red (#FF0000)   ║  (255,0,0,220)   CRITICAL ⚠️
                    ║  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
15 - 30 min         ║  Orange (#FF6600) ║  (255,102,0,200) HIGH ⚠️
                    ║  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
30 - 60 min         ║  Yellow (#FFAA00)  ║  (255,170,0,160) MEDIUM ⚠️
                    ║  ░░░░░░░░░░░░░░░░
60 - 180 min        ║  Light Yellow     ║  (255,220,0,80)  LOW ⚠️
                    ║  ░░░░░░░░░░░░░░░░
180+ min            ║  Gray (#999999)    ║  (153,153,153,30) SAFE ✓
                    ║  ░░░░░░░░░░░░░░░░

▓ = Opaque (high alpha)
░ = Semi-transparent (medium alpha)
. = Very transparent (low alpha)
```

## Request/Response Flow

```
CLIENT REQUEST:
═══════════════════════════════════════════════════════════════════
GET /scenarios/scenario-xyz/arrival-time-texture
Authorization: Bearer demo-analyst
User-Agent: Mozilla/5.0
Accept: image/png
═══════════════════════════════════════════════════════════════════
                            │
                            ▼
SERVER PROCESSING:
═══════════════════════════════════════════════════════════════════
1. Route: @app.get("/scenarios/{scenario_id}/arrival-time-texture")
2. Authenticate: Bearer token valid?
3. Database: Load scenario from SCENARIOS dict
4. Compute: arrival_grid_to_rgba() → PNG bytes
5. Encode: PIL.Image → PNG format
6. Cache: Add Cache-Control headers
═══════════════════════════════════════════════════════════════════
                            │
                            ▼
SERVER RESPONSE:
═══════════════════════════════════════════════════════════════════
HTTP/1.1 200 OK
Content-Type: image/png
Content-Length: 35421
Cache-Control: public, max-age=3600
Content-Disposition: inline; filename=arrival-time-scenario-xyz.png

[PNG binary data - 256×256 pixels, RGBA format]
═══════════════════════════════════════════════════════════════════
                            │
                            ▼
CLIENT RENDERING:
═══════════════════════════════════════════════════════════════════
1. Network: PNG received (35 KB)
2. Cache: Browser stores in HTTP cache
3. Decode: Browser decodes PNG
4. GPU: Three.js uploads texture to VRAM
5. Mesh: PlaneGeometry gets texture material
6. Render: GPU renders heatmap overlay
═══════════════════════════════════════════════════════════════════
```

## File Structure

```
SIH 2026 (project root)
│
├── backend/
│   ├── main.py ✏️ MODIFIED
│   │   ├── New imports: numpy, io, PIL.Image
│   │   ├── New constants: GRID_N=256, GRID_SPAN_KM=15.0
│   │   ├── New functions: compute_arrival_grid(), arrival_grid_to_rgba()
│   │   └── New endpoints: /arrival-time-grid, /arrival-time-texture
│   │
│   └── requirements.txt ✏️ MODIFIED
│       └── Added: numpy>=1.24.0, pillow>=10.0.0
│
├── frontend/src/components/
│   │
│   ├── Scene3DViewport.tsx ✏️ MODIFIED
│   │   ├── Import: useThree from @react-three/fiber
│   │   ├── New component: ArrivalTimeOverlay
│   │   ├── New state: showArrivalHeatmap
│   │   └── Canvas update: <ArrivalTimeOverlay>
│   │
│   ├── ArrivalTimeLegend.tsx ✨ NEW
│   │   ├── 5-tier color legend display
│   │   ├── Impact level descriptions
│   │   └── Model disclaimer
│   │
│   ├── VillageImpactCard.tsx ✨ NEW
│   │   ├── Arrival time display
│   │   ├── Population at risk
│   │   ├── Priority classification
│   │   └── Action recommendations
│   │
│   ├── FloodMap.tsx ✨ NEW
│   │   ├── Leaflet MapContainer
│   │   ├── Concentric arrival rings
│   │   ├── Village markers
│   │   └── Interactive click handling
│   │
│   ├── ArrivalTimeDashboard.tsx ✨ NEW
│   │   ├── 3 tabs (List/Map/Legend)
│   │   ├── Summary stats grid
│   │   ├── Component orchestration
│   │   └── State management
│   │
│   ├── INTEGRATION_EXAMPLES.tsx ✨ NEW
│   │   ├── 4 layout examples
│   │   └── Copy-paste integration code
│   │
│   └── ... (existing components)
│
├── ARRIVAL_TIME_IMPLEMENTATION.md ✨ NEW
│   └── Technical architecture & reference
│
├── SETUP_GUIDE.md ✨ NEW
│   └── Installation & quick start
│
├── TESTING_CHECKLIST.md ✨ NEW
│   └── Comprehensive test procedures
│
└── IMPLEMENTATION_SUMMARY.md ✨ NEW
    └── High-level overview (this file)

Legend: ✨ = Created, ✏️ = Modified
```

## Technology Stack

```
Backend
├─ FastAPI (REST API framework)
├─ NumPy (numerical computation)
├─ Pillow/PIL (image generation)
└─ Pydantic (data validation)

Frontend
├─ React 19 (UI framework)
├─ TypeScript (type safety)
├─ Three.js (3D rendering)
├─ Leaflet (map library)
├─ react-leaflet (React bindings)
├─ Tailwind CSS (styling)
└─ Lucide React (icons)

Network
└─ HTTP/REST (client-server communication)

Storage
└─ In-memory dicts (SCENARIOS, DAMS, etc.)

Caching
└─ HTTP Cache-Control headers
```

---

This architecture enables a scalable, modular system where:
- **Backend**: Computes grids on-demand, caches PNG responses
- **Frontend**: Displays multiple views of the same data
- **Integration**: New components can be added without modifying existing code
- **Future**: Easy to swap in real SPH/Delft3D models
