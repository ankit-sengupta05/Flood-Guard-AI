# Testing Checklist: Arrival-Time Heatmap Implementation

## Pre-Flight Checks

- [x] Backend Python syntax validated (`main.py` compiles)
- [x] Node.js/frontend environment available
- [x] Dependencies added to requirements.txt (numpy, pillow)
- [x] All new components created (5 new React files)
- [x] Scene3DViewport updated with ArrivalTimeOverlay
- [x] Documentation complete (3 markdown files)

## Backend Testing

### Unit Tests

- [ ] **Arrival Grid Computation**
  ```bash
  python -c "
  from backend.main import compute_arrival_grid
  scenario = {'dam_id': 'tehri-dam', 'params': {'breach_width_m': 80}}
  grid = compute_arrival_grid(scenario)
  print(f'Grid shape: {grid.shape}, dtype: {grid.dtype}')
  print(f'Min: {grid.min()}, Max: {grid.max()}')
  # Expected: (256, 256), float32, ~0 at center, ~1000+ at edges
  "
  ```

- [ ] **Color Mapping**
  ```bash
  python -c "
  import numpy as np
  from backend.main import arrival_grid_to_rgba
  grid = np.zeros((256, 256), dtype=np.float32)
  grid[0, 0] = 10  # 10 minutes (red)
  grid[255, 255] = 180  # 180 minutes (gray)
  rgba = arrival_grid_to_rgba(grid)
  print(f'RGBA shape: {rgba.shape}, dtype: {rgba.dtype}')
  print(f'Red channel range: {rgba[:,:,0].min()}-{rgba[:,:,0].max()}')
  print(f'Alpha channel range: {rgba[:,:,3].min()}-{rgba[:,:,3].max()}')
  # Expected: (256, 256, 4), uint8, red=255, alpha varies
  "
  ```

### Integration Tests

- [ ] **Endpoint: /scenarios/{scenario_id}/arrival-time-grid**
  ```bash
  # Start backend
  cd backend && python -m uvicorn main:app --reload
  
  # In another terminal, test endpoint
  curl -s http://localhost:8000/scenarios/scenario-demo-1/arrival-time-grid \
    -H "Authorization: Bearer demo-analyst" | jq '.grid | length'
  # Expected: 256 (rows)
  
  curl -s http://localhost:8000/scenarios/scenario-demo-1/arrival-time-grid \
    -H "Authorization: Bearer demo-analyst" | jq '.grid[0] | length'
  # Expected: 256 (columns)
  ```

- [ ] **Endpoint: /scenarios/{scenario_id}/arrival-time-texture**
  ```bash
  # Download and verify PNG
  curl -s http://localhost:8000/scenarios/scenario-demo-1/arrival-time-texture \
    -H "Authorization: Bearer demo-analyst" \
    -o /tmp/heatmap.png
  
  # Verify file format
  file /tmp/heatmap.png
  # Expected: PNG image data, 256 x 256, 8-bit/color RGBA
  
  # Verify file size (reasonable compression)
  ls -lh /tmp/heatmap.png
  # Expected: ~20-50 KB
  ```

- [ ] **Caching Headers**
  ```bash
  curl -i http://localhost:8000/scenarios/scenario-demo-1/arrival-time-texture \
    -H "Authorization: Bearer demo-analyst" | grep -i cache-control
  # Expected: Cache-Control: public, max-age=3600
  ```

- [ ] **Scenario Not Found**
  ```bash
  curl http://localhost:8000/scenarios/nonexistent/arrival-time-grid \
    -H "Authorization: Bearer demo-analyst"
  # Expected: 404 with error_code: "scenario_not_found"
  ```

- [ ] **Authorization Required**
  ```bash
  curl http://localhost:8000/scenarios/scenario-demo-1/arrival-time-grid
  # Expected: 401 with error_code: "invalid_token"
  ```

## Frontend Testing

### Component Imports

- [ ] All new components import correctly
  ```bash
  cd frontend
  grep -r "export const" src/components/Arrival*.tsx src/components/Village*.tsx src/components/FloodMap.tsx
  # Should see 5 exports
  ```

- [ ] No circular imports or missing dependencies
  - Check `ArrivalTimeLegend.tsx` imports (lucide-react)
  - Check `VillageImpactCard.tsx` imports (useState, useEffect, fetch)
  - Check `FloodMap.tsx` imports (react-leaflet, leaflet CSS)
  - Check `ArrivalTimeDashboard.tsx` imports (all sub-components)

### Scene3DViewport Integration

- [ ] Overlay state initialized
  ```bash
  grep "showArrivalHeatmap" frontend/src/components/Scene3DViewport.tsx
  # Should see: useState, toggle checkbox, <ArrivalTimeOverlay>
  ```

- [ ] Checkbox rendering
  ```bash
  grep -A 2 "Show arrival heatmap" frontend/src/components/Scene3DViewport.tsx
  # Should show proper label + input
  ```

### Manual UI Testing

- [ ] **Start Frontend**
  ```bash
  cd frontend && npm run dev
  # Opens http://localhost:5173
  ```

- [ ] **3D Scene Loads**
  - [ ] Terrain mesh visible
  - [ ] Dam structure displayed
  - [ ] Water surface animated
  - [ ] Village markers present
  - [ ] No console errors in DevTools

- [ ] **Heatmap Toggle**
  - [ ] Scroll to "Load real DEM" panel (top-right)
  - [ ] Locate "Show arrival heatmap" checkbox
  - [ ] Check box → Red overlay should appear on terrain
  - [ ] Uncheck box → Overlay disappears
  - [ ] No performance degradation (smooth interaction)

- [ ] **Heatmap Visual Quality**
  - [ ] Red center (dam location) prominent
  - [ ] Orange/yellow rings visible at distance
  - [ ] Fading transparency toward edges
  - [ ] Texture aligned with terrain (no offset/rotation issues)
  - [ ] Z-fighting (flickering) not visible

- [ ] **Camera Modes with Heatmap**
  - [ ] Cinematic Orbit: Heatmap stays fixed, camera rotates
  - [ ] Drone View: Can fly around and observe heatmap from angles
  - [ ] Toggle between modes with heatmap on → no breaks

### Dashboard Testing

- [ ] **Create simple test page** (add to your app):
  ```tsx
  import { ArrivalTimeDashboard } from './components/ArrivalTimeDashboard';
  
  export default function TestDashboard() {
    return (
      <div className="w-full h-screen p-4 bg-[#0B0E12]">
        <ArrivalTimeDashboard
          scenarioId="scenario-demo-1"
          damName="Test Dam"
          damLat={30.38}
          damLng={78.48}
          villages={[
            {
              id: "v1",
              name: "Village 1",
              lat: 30.38,
              lng: 78.48,
              arrivalTimeMin: 8,
              population: 5000,
              priority: "high"
            },
            {
              id: "v2",
              name: "Village 2",
              lat: 30.36,
              lng: 78.50,
              arrivalTimeMin: 45,
              population: 3000,
              priority: "medium"
            }
          ]}
        />
      </div>
    );
  }
  ```

- [ ] **List View Tab**
  - [ ] Summary stats show (X CRITICAL, Y HIGH RISK, Z MONITORED)
  - [ ] First village details card displays
  - [ ] Village list below is scrollable
  - [ ] Click villages → card updates
  - [ ] Correct priority colors (red/amber/blue)

- [ ] **Map View Tab**
  - [ ] OpenStreetMap tiles load
  - [ ] Dam marker at center (gray)
  - [ ] 4 concentric rings visible (15/30/60/180 min)
  - [ ] Village markers appear with times
  - [ ] Click marker → jumps to list, selects village
  - [ ] Map is interactive (pan/zoom)

- [ ] **Legend Tab**
  - [ ] All 5 color bands displayed with labels
  - [ ] Time ranges correct (0-15, 15-30, etc.)
  - [ ] Action statements present
  - [ ] "Surrogate Model" disclaimer visible
  - [ ] Scenario ID shown

### Network Testing

- [ ] **Open DevTools Network Tab**
  - [ ] Click heatmap checkbox on
  - [ ] Should see request to `/scenarios/scenario-demo-1/arrival-time-texture`
  - [ ] Response 200 OK
  - [ ] Content-Type: image/png
  - [ ] Size reasonable (~20-50 KB)
  - [ ] Take <1s to load

- [ ] **Texture Loads in 3D**
  - [ ] Check Network tab for texture load errors
  - [ ] No 404s or 500s
  - [ ] PNG displays immediately (no missing texture placeholder)

### Accessibility Testing

- [ ] **Color Blindness Check**
  - [ ] Heatmap uses multiple cues (not just color)
  - [ ] Numbers on map markers aid interpretation
  - [ ] Legend provides color reference
  - [ ] Text descriptions accompany colors

- [ ] **Keyboard Navigation**
  - [ ] Tab through dashboard components
  - [ ] Tab toggles between tabs in dashboard
  - [ ] Enter activates buttons
  - [ ] Checkboxes check/uncheck with Space

- [ ] **Responsive Design**
  - [ ] Test at 1024px width
  - [ ] Test at 1920px width
  - [ ] Test at mobile (if applicable)
  - [ ] Layout doesn't break

## Performance Testing

### Backend Performance

- [ ] **Arrival Grid Computation**
  ```bash
  python -c "
  import time
  from backend.main import compute_arrival_grid
  
  start = time.time()
  for _ in range(10):
      scenario = {'dam_id': 'tehri-dam', 'params': {'breach_width_m': 80}}
      grid = compute_arrival_grid(scenario)
  elapsed = (time.time() - start) / 10
  print(f'Avg time: {elapsed*1000:.2f} ms')
  # Expected: <100 ms
  "
  ```

- [ ] **PNG Encoding**
  ```bash
  python -c "
  import time
  import numpy as np
  from backend.main import arrival_grid_to_rgba
  from PIL import Image
  import io
  
  grid = np.random.uniform(0, 180, (256, 256)).astype(np.float32)
  
  start = time.time()
  for _ in range(10):
      rgba = arrival_grid_to_rgba(grid)
      img = Image.fromarray(rgba, mode='RGBA')
      buf = io.BytesIO()
      img.save(buf, format='PNG')
  elapsed = (time.time() - start) / 10
  print(f'Avg time: {elapsed*1000:.2f} ms')
  # Expected: <50 ms
  "
  ```

### Frontend Performance

- [ ] **3D Mesh Rendering**
  - [ ] Enable DevTools Performance tab
  - [ ] Toggle heatmap on/off 5 times
  - [ ] FPS should remain >30 (smooth)
  - [ ] No memory leaks (heap size stable)

- [ ] **Map Rendering**
  - [ ] Click to "Map View"
  - [ ] Pan/zoom map smoothly
  - [ ] No lag when interacting
  - [ ] Tile loading < 1s

### Memory Usage

- [ ] **Grid Data in Memory**
  ```
  256×256 float32 = 256 KB (acceptable)
  PNG texture = ~30 KB (compressed, acceptable)
  ```

- [ ] **Leaflet Map**
  - [ ] Load map, check DevTools memory
  - [ ] Zoom/pan 10 times
  - [ ] Memory should not grow >50% of initial

## Cross-Browser Testing

- [ ] **Chrome/Chromium**
  - [ ] Heatmap displays correctly
  - [ ] Map loads and is interactive
  - [ ] Dashboard renders cleanly

- [ ] **Firefox**
  - [ ] WebGL (Three.js) works
  - [ ] PNG texture loads
  - [ ] Leaflet compatible

- [ ] **Safari** (if available)
  - [ ] No vendor-specific issues
  - [ ] CSS transforms work
  - [ ] Hover effects responsive

## Error Handling

- [ ] **Missing Scenario**
  - Frontend gracefully handles 404 from backend
  - No crashes, helpful error message

- [ ] **Network Timeout**
  - Texture takes >5s to load
  - Mesh still renders without texture (visible terrain)
  - User can see structure even if overlay fails

- [ ] **Invalid Village Data**
  - Missing `arrivalTimeMin` field
  - Component doesn't crash
  - Falls back to reasonable default

## Documentation Verification

- [ ] **ARRIVAL_TIME_IMPLEMENTATION.md**
  - [ ] Explains backend endpoints
  - [ ] Documents color mapping
  - [ ] Shows data flow diagram
  - [ ] Lists known limitations
  - [ ] Points to future enhancements

- [ ] **SETUP_GUIDE.md**
  - [ ] Clear installation steps
  - [ ] Provides test commands
  - [ ] Includes troubleshooting
  - [ ] Shows configuration options

- [ ] **Code Comments**
  - [ ] Component JSDoc comments present
  - [ ] Inline comments for complex logic
  - [ ] Type annotations complete

## Sign-Off Checklist

- [ ] All backend endpoints return correct data
- [ ] All frontend components render without errors
- [ ] Heatmap visible on 3D terrain
- [ ] Dashboard shows all tabs (List/Map/Legend)
- [ ] Map displays with villages and arrival rings
- [ ] Performance acceptable (>30 FPS, <100ms response)
- [ ] No console errors in DevTools
- [ ] Accessibility basics covered
- [ ] Documentation complete and accurate

## Known Issues (To Fix)

- [ ] None at this time

## Notes for Next Phase

- Real SPH/Delft3D integration point: Replace `compute_arrival_grid()` function
- Consider adding time-series animation (show flood progression over time)
- May want to add DEM masking (clip heatmap to terrain bounds)
- Plan for uncertainty quantification (min/max bands) when models produce ensembles
