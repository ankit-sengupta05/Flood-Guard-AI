# Quick Start: Arrival-Time Heatmap Visualization

## Setup Instructions

### 1. Backend Dependencies
Update Python dependencies:

```bash
cd backend
pip install -r requirements.txt
```

This installs:
- `numpy>=1.24.0` – Grid computation
- `pillow>=10.0.0` – PNG image generation

### 2. Frontend Components
The new React components are already in `frontend/src/components/`:
- `ArrivalTimeLegend.tsx` – Color reference guide
- `VillageImpactCard.tsx` – Per-village impact analysis
- `FloodMap.tsx` – Interactive map with Leaflet
- `ArrivalTimeDashboard.tsx` – Main dashboard panel
- Updated: `Scene3DViewport.tsx` – 3D overlay integration

### 3. Update Scene3DViewport Integration

If you want to display the dashboard alongside the 3D scene, update `CommandCenter.tsx`:

```typescript
import { ArrivalTimeDashboard } from './ArrivalTimeDashboard';

// In your main render:
<div className="grid grid-cols-3 gap-4">
  <div className="col-span-2">
    <Scene3DViewport 
      selectedDam={selectedDam}
      villages={villages}
      // ... other props
      showArrivalHeatmap={true}  // Enable heatmap
    />
  </div>
  <div className="overflow-y-auto">
    <ArrivalTimeDashboard
      scenarioId="scenario-demo-1"
      damName={selectedDam.name}
      damLat={selectedDam.lat}
      damLng={selectedDam.lng}
      villages={VILLAGES_DEMO_LIST}
    />
  </div>
</div>
```

## Testing the Backend

### 1. Start the backend server
```bash
cd backend
python -m uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

### 2. Test arrival-time grid endpoint
```bash
# Get JSON grid data
curl "http://localhost:8000/scenarios/scenario-demo-1/arrival-time-grid" \
  -H "Authorization: Bearer demo-analyst" \
  | jq '.grid[0:2]'  # Show first 2 rows

# Output should show arrival times increasing with distance from dam
```

### 3. Test texture endpoint
```bash
# Download PNG heatmap
curl "http://localhost:8000/scenarios/scenario-demo-1/arrival-time-texture" \
  -H "Authorization: Bearer demo-analyst" \
  -o /tmp/heatmap.png

# Verify PNG format
file /tmp/heatmap.png
# Should output: PNG image data, 256 x 256, 8-bit/color RGBA

# View the image
open /tmp/heatmap.png  # macOS
# or
xdg-open /tmp/heatmap.png  # Linux
# or open in Windows image viewer
```

### 4. Validate color gradient
The PNG should show:
- Bright red center (dam location)
- Fading orange/yellow rings outward
- Transparent/gray at edges

## Testing the Frontend

### 1. Start the frontend dev server
```bash
cd frontend
npm run dev
```

### 2. Enable heatmap in Scene3DViewport
- Scroll down to "Load real DEM" panel
- Check "Show arrival heatmap"
- You should see a red-to-yellow gradient overlay on the terrain

### 3. Test ArrivalTimeDashboard
Add to your main app component:
```typescript
<ArrivalTimeDashboard
  scenarioId="scenario-demo-1"
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
    {
      id: "village-2",
      name: "Bhagirathi Valley",
      lat: 30.36,
      lng: 78.50,
      arrivalTimeMin: 18,
      population: 3200,
      priority: "medium"
    },
  ]}
/>
```

### 4. Test Leaflet Map
Click "Map View" tab in ArrivalTimeDashboard:
- Should show OSM basemap with dam marker
- Concentric rings for 15, 30, 60, 180 minute arrival times
- Village markers with color coding
- Click markers to jump to village details

## API Reference

### Get Arrival-Time Grid
```http
GET /scenarios/{scenario_id}/arrival-time-grid
Authorization: Bearer {token}
```

**Response:**
```json
{
  "grid": [[0.0, 0.5, 1.2, ...], [...], ...],
  "cell_count": 256,
  "span_km": 15.0,
  "dam_id": "tehri-dam",
  "scenario_id": "scenario-xyz",
  "max_arrival_min": 180.0
}
```

### Get Arrival-Time Texture
```http
GET /scenarios/{scenario_id}/arrival-time-texture
Authorization: Bearer {token}
Content-Type: image/png
```

**Response:** PNG image (256×256 pixels, RGBA)

## Troubleshooting

### Heatmap not showing in 3D scene
1. Check network tab: Is `/scenarios/{id}/arrival-time-texture` returning 200 OK?
2. Verify PNG is 256×256: `identify -verbose /tmp/heatmap.png | grep Geometry`
3. Check Three.js console for texture loading errors
4. Ensure dam coordinate is valid (not NaN)

### Map not displaying
1. Verify Leaflet CSS is imported: `import 'leaflet/dist/leaflet.css'`
2. Check package.json has `leaflet` and `react-leaflet` dependencies
3. Map container needs explicit height: `h-96` or `style={{ height: '400px' }}`

### Colors not matching expected
1. Verify `arrival_grid_to_rgba()` color values in backend
2. PNG should have pure red center (#FF0000)
3. Check PNG encoding is RGBA (not RGB)

### Performance issues
- Heatmap texture is ~20–40 KB, should load instantly
- 256×256 grid computation < 100ms
- If slow, check:
  - Network bandwidth
  - CPU during PNG encoding
  - GPU texture upload time

## Configuration

### Adjust Grid Coverage
Change in `main.py`:
```python
GRID_SPAN_KM = 20.0  # Cover ±20 km instead of ±15 km
GRID_N = 512  # Use 512×512 for higher resolution
```

Then rebuild PNG:
```python
def arrival_grid_to_rgba(grid_min, max_min=180.0):
    # Adjust color scale if needed
    max_min = 240.0  # Extend max time to 4 hours
```

### Adjust Breach Speed Model
Modify in `compute_arrival_grid()`:
```python
# More realistic physical model
speed_mps = 2.0 + (breach_width / 100.0)  # Faster base speed

# Or use Manning's equation
n = 0.03  # Manning's roughness
slope = 0.05  # Average channel slope
speed_mps = (1/n) * (depth_m ** (2/3)) * (slope ** 0.5)
```

## Next Steps

### Short-term
- [ ] Wire dashboard to actual scenario selection
- [ ] Add real scenario data from API
- [ ] Style legend/cards to match your design system

### Medium-term
- [ ] Integrate with real SPH simulation output
- [ ] Add time-series animation (flood progression)
- [ ] Export grids to GeoTIFF for GIS

### Long-term
- [ ] Uncertainty quantification (min/max/median ensemble)
- [ ] Real-time streaming from simulation engine
- [ ] Mobile-optimized map view
- [ ] Integration with early-warning systems

## Support

For issues with:
- **Backend**: Check `backend/main.py` lines 33–80 (grid computation)
- **3D rendering**: See `frontend/src/components/Scene3DViewport.tsx` lines 33–60
- **Map display**: See `frontend/src/components/FloodMap.tsx`
- **Dashboard**: See `frontend/src/components/ArrivalTimeDashboard.tsx`

All components include detailed JSDoc comments and type annotations.
