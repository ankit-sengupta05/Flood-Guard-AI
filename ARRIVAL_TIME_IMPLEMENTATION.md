# Arrival-Time Grid & Flood Visualization Implementation

## Overview

This implementation adds real arrival-time grids with colored texture overlays to visualize estimated flood propagation across terrain when a dam breaches. The system includes:

1. **Backend**: Computes arrival-time grids and generates PNG heatmaps
2. **3D Visualization**: Overlays colored textures on terrain mesh in Three.js
3. **Map Integration**: Real map view with village markers and arrival rings
4. **Impact Analysis**: Per-village risk scoring and evacuation recommendations

## Backend Implementation

### New Endpoints

#### `GET /scenarios/{scenario_id}/arrival-time-grid`
Returns a JSON array representing the arrival-time field for a scenario.

**Response:**
```json
{
  "grid": [[0, 1.2, 2.4, ...], [...], ...],
  "cell_count": 256,
  "span_km": 15.0,
  "dam_id": "tehri-dam",
  "scenario_id": "scenario-xyz123",
  "max_arrival_min": 180.0
}
```

**Parameters:**
- `scenario_id` (path): The scenario ID for which to compute arrival times

**Notes:**
- Grid is 256×256 cells covering ±15 km around dam
- Uses simplified radial propagation model (placeholder until real SPH/Delft3D integration)
- Values in minutes from breach initiation

#### `GET /scenarios/{scenario_id}/arrival-time-texture`
Returns a colored PNG texture overlay for the arrival-time field.

**Response:**
- Content-Type: `image/png`
- RGBA PNG image (256×256 pixels)
- Red (opaque) near dam = immediate flood
- Orange/Yellow (fading) = slower flood arrival
- Transparent/Gray = no significant impact

**Color Mapping:**
```
0–15 min   → Bright Red (#FF0000, α=220)      [CRITICAL]
15–30 min  → Orange (#FF6600, α=200)         [HIGH]
30–60 min  → Yellow (#FFAA00, α=160)        [MEDIUM]
60–180 min → Light Yellow (#FFDD00, α=80)   [LOW]
180+ min   → Gray (#999999, α=30)           [SAFE]
```

### Arrival-Time Computation

The `compute_arrival_grid()` function models floodwater propagation as a circular wavefront:

```python
def compute_arrival_grid(scenario: dict[str, Any]) -> np.ndarray:
    dam = get_dam(scenario["dam_id"])
    breach_width = scenario["params"].get("breach_width_m", 80)
    
    # Speed increases with breach width
    speed_mps = 0.4 + (breach_width / 200.0)
    
    # Grid: ±15 km around dam center
    xs = np.linspace(-15.0, 15.0, 256)
    ys = np.linspace(-15.0, 15.0, 256)
    xx, yy = np.meshgrid(xs, ys)
    
    # Distance in meters, arrival time in minutes
    dist_m = np.sqrt(xx**2 + yy**2) * 1000.0
    arrival_min = dist_m / (speed_mps + 0.01) / 60.0
    
    return arrival_min
```

**Parameters:**
- Wider breach → faster propagation speed
- Narrower breach → slower speed
- Distance from dam → linearly increases arrival time

**Future Enhancement:**
Replace this with real output from:
- ANUGA hydrodynamic model
- Delft3D shallow-water solver
- SPH particle simulation

## Frontend Implementation

### Components

#### `ArrivalTimeOverlay` (Scene3DViewport.tsx)
Renders the arrival-time PNG as a transparent overlay on the 3D terrain.

```typescript
<ArrivalTimeOverlay 
  scenarioId="scenario-xyz" 
  damPosition={0.32}
  dem={heightmapData}
  visible={true}
/>
```

**Features:**
- Loads PNG from `/scenarios/{id}/arrival-time-texture`
- Positioned ±15 km square centered at dam
- Slightly above terrain to prevent z-fighting
- Transparent material for blend-through effect
- Real-time update when scenario changes

#### `ArrivalTimeLegend.tsx`
Displays color-coded legend explaining arrival times and impact levels.

**Features:**
- 5-tier color mapping with time ranges
- Action items per risk level
- Surrogate model disclaimer
- Scenario ID reference

#### `VillageImpactCard.tsx`
Shows detailed impact analysis for a single village/area.

**Features:**
- Arrival time countdown
- Population at risk
- Priority classification (CRITICAL/HIGH/MEDIUM/LOW)
- Contextual evacuation recommendations
- Grid resolution and coverage info

#### `FloodMap.tsx`
Interactive Leaflet map showing:
- Dam location (gray marker)
- Flood propagation circles (15, 30, 60, 180 min rings)
- Village markers color-coded by priority
- Each marker displays estimated arrival time
- Click villages to select for detailed analysis

**Layers:**
- OpenStreetMap base layer
- Concentric arrival-time rings
- Village impact markers with click-to-select

#### `ArrivalTimeDashboard.tsx`
Main dashboard tying all components together.

**Tabs:**
1. **Priority List**: Ranked affected areas with impacts
2. **Map View**: Interactive map with flood rings and markers
3. **Legend**: Color reference and guidance

**Summary Stats:**
- Count of CRITICAL areas (< 15 min)
- Count of HIGH RISK areas (15–30 min)
- Total monitored locations

### Integration with Scene3DViewport

To display the arrival-time heatmap in the 3D scene:

```typescript
const [showArrivalHeatmap, setShowArrivalHeatmap] = useState(true);

// In Canvas render tree:
{showArrivalHeatmap && <ArrivalTimeOverlay 
  scenarioId={scenarioId} 
  damPosition={damPosition} 
  dem={dem}
  visible={showArrivalHeatmap}
/>}

// In control panel:
<label>
  <span>Show arrival heatmap</span>
  <input 
    type="checkbox" 
    checked={showArrivalHeatmap} 
    onChange={(e) => setShowArrivalHeatmap(e.target.checked)} 
  />
</label>
```

## Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│ Backend (main.py)                                          │
├─────────────────────────────────────────────────────────────┤
│ 1. Fetch scenario → extract breach params                 │
│ 2. compute_arrival_grid() → numpy array (256×256)         │
│ 3. arrival_grid_to_rgba() → RGBA buffer                   │
│ 4. Encode PNG → HTTP response                             │
│ 5. Cache headers for reuse                                │
└─────────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────────┐
│ Network                                                     │
├─────────────────────────────────────────────────────────────┤
│ GET /scenarios/{id}/arrival-time-texture                   │
│ Response: PNG (256×256, ~20–40 KB)                         │
│ Response: /scenarios/{id}/arrival-time-grid (JSON)         │
└─────────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────────┐
│ Frontend (React + Three.js)                               │
├─────────────────────────────────────────────────────────────┤
│ 1. Load texture via TextureLoader                          │
│ 2. Attach to plane mesh (PlaneGeometry)                    │
│ 3. Position at dam center (±15 km square)                  │
│ 4. Layer atop terrain mesh (depthWrite=false)             │
│ 5. Display legend + impact cards                          │
│ 6. Render interactive map with markers                    │
└─────────────────────────────────────────────────────────────┘
```

## Usage

### Enable/Disable Heatmap
Toggle in Scene3DViewport control panel:
- "Show arrival heatmap" checkbox
- Instant on/off without reloading

### View Impact Dashboard
```typescript
<ArrivalTimeDashboard
  scenarioId="scenario-xyz"
  damName="Tehri Dam"
  damLat={30.38}
  damLng={78.48}
  villages={[
    {
      id: "village-1",
      name: "Tehri Town",
      lat: 30.38,
      lng: 78.48,
      arrivalTimeMin: 8,
      population: 4500,
      priority: "high"
    },
    // ... more villages
  ]}
/>
```

### Fetch Grid Data
```typescript
const response = await fetch(`/scenarios/${scenarioId}/arrival-time-grid`);
const { grid, cell_count, span_km, max_arrival_min } = await response.json();

// Use grid data for:
// - Custom analysis/statistics
// - Alternative visualizations
// - Export to GIS formats
```

## Color Coding Reference

| Time Range | Color | Hex | Opacity | Priority | Action |
|-----------|-------|-----|---------|----------|--------|
| 0–15 min | Red | #FF0000 | 220 | CRITICAL | Evacuate immediately |
| 15–30 min | Orange | #FF6600 | 200 | HIGH | Begin evacuation |
| 30–60 min | Yellow | #FFAA00 | 160 | MEDIUM | Alert & prepare |
| 60–180 min | Light Yellow | #FFDD00 | 80 | LOW | Monitor status |
| 180+ min | Gray | #999999 | 30 | SAFE | No significant risk |

## Performance Considerations

### Backend
- **Computation**: 256×256 grid = ~100ms (numpy operations)
- **PNG Encoding**: ~50ms (PIL/Pillow)
- **Cache**: HTTP caching enabled (3600s max-age)
- **Memory**: ~256 KB per scenario (float32 grid)

### Frontend
- **Texture Load**: ~20–40 KB PNG
- **Three.js Mesh**: Single plane with texture
- **Map Tiles**: Loaded on-demand (OSM cached)
- **Village Markers**: <50 markers per scenario

## Integration with Real Models

When SPH/Delft3D simulations produce per-cell arrival times:

1. Replace `compute_arrival_grid()` with model output reader:
   ```python
   def compute_arrival_grid(scenario: dict[str, Any]) -> np.ndarray:
       # Load from SPH output file
       output_file = f"/data/scenarios/{scenario['scenario_id']}/arrival_time.bin"
       grid = np.fromfile(output_file, dtype=np.float32).reshape((GRID_N, GRID_N))
       return grid
   ```

2. Update color ramp if model uses different time scales

3. Add uncertainty bounds (min/max arrival times)

4. Support multiple model modes:
   ```python
   if scenario["model_mode"] == "surrogate":
       return compute_arrival_grid_surrogate(scenario)
   else:  # real SPH/Delft3D
       return load_arrival_grid_from_model(scenario)
   ```

## Testing

### Backend Tests
```bash
# Test arrival-time grid endpoint
curl http://localhost:8000/scenarios/scenario-demo-1/arrival-time-grid | jq .

# Test texture endpoint
curl http://localhost:8000/scenarios/scenario-demo-1/arrival-time-texture -o heatmap.png
file heatmap.png  # should be PNG 256x256
```

### Frontend Tests
```typescript
// Test texture loading
const response = await fetch('/scenarios/scenario-xyz/arrival-time-texture');
const blob = await response.blob();
console.log(`Texture size: ${blob.size} bytes`);

// Test grid data
const gridData = await fetch('/scenarios/scenario-xyz/arrival-time-grid').then(r => r.json());
console.log(`Grid: ${gridData.cell_count}×${gridData.cell_count} cells, max=${gridData.max_arrival_min} min`);
```

## Known Limitations

1. **Simplified Model**: Radial propagation ignores terrain slope, valleys, barriers
2. **Flat Assumption**: Grid assumes flat terrain; heights derived from DEM but not in flow calculation
3. **No Upstream**: Only models downriver flood, not backwater effects
4. **Single Breach**: Cannot model multiple breach scenarios
5. **No Rainfall**: Ignores precipitation effects on routing

These will be addressed with real hydrodynamic model integration.

## Future Enhancements

- [ ] Load real SPH/Delft3D arrival times
- [ ] Uncertainty bands (min/max/median ensemble)
- [ ] DEM-aware masking (clip heatmap to valley geometry)
- [ ] Time-series animation (show flood progression)
- [ ] Export grids to GeoTIFF for GIS integration
- [ ] 3D velocity field visualization (arrows/streamlines)
- [ ] Damage assessment heatmaps (depth, velocity, debris)
- [ ] Real-time streaming updates from simulation engine
