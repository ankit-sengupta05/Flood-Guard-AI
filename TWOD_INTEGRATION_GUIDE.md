# 2D Analysis Integration Guide

## Quick Start

### Option 1: Replace Existing App with DualViewLayout
```typescript
// App.tsx
import DualViewLayout from './components/DualViewLayout';

export default function App() {
  return (
    <DualViewLayout
      scenarioId="scenario-demo-1"
      damId="tehri-dam"
      damName="Tehri Dam"
      damLat={30.38}
      damLng={78.48}
      breachWidth={50}
      onExit={() => window.history.back()}
    />
  );
}
```

### Option 2: Use TwoDMapView Only (2D Only)
```typescript
// ScenarioAnalysis.tsx
import TwoDMapView from './components/TwoDMapView';

export default function ScenarioAnalysis() {
  const [selectedVillage, setSelectedVillage] = useState(null);

  return (
    <div className="h-screen w-full">
      <TwoDMapView
        scenarioId="scenario-demo-1"
        damName="Tehri Dam"
        damLat={30.38}
        damLng={78.48}
        breachWidth={50}
        maxArrivalTime={180}
        onVillageSelect={(village) => {
          setSelectedVillage(village);
          console.log('Selected:', village);
        }}
      />
    </div>
  );
}
```

### Option 3: Side-by-Side Layout with Custom Panel
```typescript
// CustomLayout.tsx
import TwoDMapView from './components/TwoDMapView';
import { getVillagesByDam } from './components/VillageDataLoader';

export default function CustomLayout() {
  const [selectedVillage, setSelectedVillage] = useState(null);
  const villages = getVillagesByDam('Tehri Dam');

  return (
    <div className="flex h-screen w-full">
      {/* Map - 70% */}
      <div className="flex-1">
        <TwoDMapView
          scenarioId="scenario-demo-1"
          damName="Tehri Dam"
          damLat={30.38}
          damLng={78.48}
          onVillageSelect={setSelectedVillage}
        />
      </div>

      {/* Custom Right Panel - 30% */}
      <div className="w-96 bg-white border-l border-gray-300 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Analysis</h2>
        {selectedVillage ? (
          <div className="space-y-3">
            <h3 className="font-bold text-lg">{selectedVillage.place}</h3>
            <p>Population: {selectedVillage.population.toLocaleString()}</p>
            <p>Distance: {selectedVillage.distanceKm} km</p>
            <p>Status: {selectedVillage.floodPathHeuristic}</p>
          </div>
        ) : (
          <p className="text-gray-500">Click a village to see details</p>
        )}
      </div>
    </div>
  );
}
```

---

## Component Details

### DualViewLayout Props
```typescript
interface DualViewLayoutProps {
  scenarioId: string;      // Unique scenario ID
  damId: string;           // Dam identifier
  damName: string;         // Display name (must match getVillagesByDam key)
  damLat: number;          // Dam latitude (WGS84)
  damLng: number;          // Dam longitude (WGS84)
  breachWidth?: number;    // Breach width in meters (default: 50)
  onExit?: () => void;     // Callback when user clicks Exit
}
```

### TwoDMapView Props
```typescript
interface TwoDMapViewProps {
  scenarioId: string;
  damName: string;
  damLat: number;
  damLng: number;
  breachWidth?: number;
  maxArrivalTime?: number;  // default: 180
  onVillageSelect?: (village: VillageData) => void;
}
```

### SimulationComparison Props
```typescript
interface SimulationComparisonProps {
  scenarioId: string;
  damName: string;
  damLat: number;
  damLng: number;
  villages: Array<{ 
    place: string; 
    population: number; 
    latitude: number; 
    longitude: number 
  }>;
}
```

---

## Styling Customization

### Tailwind Theme Integration
All components use Tailwind CSS. To customize colors:

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        'critical': '#EF4444',    // Red
        'high': '#F97316',        // Orange
        'medium': '#EAB308',      // Yellow
        'low': '#FDE047',         // Light Yellow
        'safe': '#D1D5DB',        // Gray
        'delft': '#FF6B6B',       // Model color
        'hecras': '#4ECDC4',      // Model color
      }
    }
  }
}
```

### Custom CSS Classes
```css
/* Override map styles */
.leaflet-container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Custom marker styling */
.village-marker {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.village-marker.critical {
  animation: pulse 1s infinite;
}
```

---

## Data Integration

### Linking to Backend

**Step 1:** Update backend to serve villages data
```python
# backend/main.py
@app.get("/villages/{dam_id}")
async def get_villages(dam_id: str, token: str = Depends(verify_auth)):
    """Return villages for dam from nearby_villages_cities.md"""
    # Parse nearby_villages_cities.md and return JSON
    return {
        "dam_id": dam_id,
        "villages": [...],
        "count": 45
    }
```

**Step 2:** Update VillageDataLoader to fetch from backend
```typescript
// VillageDataLoader.ts
export async function getVillagesByDamRemote(damName: string): Promise<Village[]> {
  const response = await fetch(`/villages/${damId}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return response.json();
}
```

**Step 3:** Use in component
```typescript
useEffect(() => {
  const loadVillages = async () => {
    const data = await getVillagesByDamRemote('tehri-dam');
    setVillages(data);
  };
  loadVillages();
}, [damId]);
```

### Parsing nearby_villages_cities.md

The file format is Markdown tables. To parse programmatically:

```typescript
// Parse markdown format
export function parseVillageMarkdown(markdown: string, damName: string): Village[] {
  const damSection = markdown.split(`## ${damName}`)[1];
  if (!damSection) return [];

  // Extract table rows
  const table = damSection.split('|').slice(3);
  return table
    .map(row => {
      const cols = row.split('|').map(c => c.trim());
      if (cols.length < 10) return null;
      
      return {
        place: cols[0],
        stateAdmin: cols[1],
        distanceKm: parseFloat(cols[2]),
        population: parseInt(cols[3]),
        latitude: parseFloat(cols[4]),
        longitude: parseFloat(cols[5]),
        // ... other fields
      };
    })
    .filter(Boolean);
}
```

---

## State Management

### Using React Context (Optional)
```typescript
// ScenarioContext.tsx
const ScenarioContext = createContext<{
  scenario: ScenarioData;
  villages: Village[];
  selectedVillage: Village | null;
  setSelectedVillage: (v: Village | null) => void;
  viewMode: '2d' | '3d' | 'comparison';
  setViewMode: (mode: '2d' | '3d' | 'comparison') => void;
}>({...});

export function useScenario() {
  return useContext(ScenarioContext);
}

// App.tsx
function App() {
  const [scenario, setScenario] = useState(scenarios[0]);
  const [selectedVillage, setSelectedVillage] = useState(null);
  const [viewMode, setViewMode] = useState('2d');

  return (
    <ScenarioContext.Provider value={{
      scenario,
      villages: getVillagesByDam(scenario.damName),
      selectedVillage,
      setSelectedVillage,
      viewMode,
      setViewMode
    }}>
      <DualViewLayout {...scenario} />
    </ScenarioContext.Provider>
  );
}
```

---

## Event Handling

### Village Selection
```typescript
const handleVillageSelect = (village: Village) => {
  console.log('Selected:', village.place);
  
  // Trigger analytics event
  analytics.track('village_selected', {
    place: village.place,
    population: village.population,
    arrivalTime: village.arrivalTime
  });
  
  // Update UI
  setSelectedVillage(village);
  
  // Show detail panel
  setSidePanel('details');
};
```

### View Mode Changes
```typescript
const handleViewModeChange = (mode: '2d' | '3d' | 'comparison') => {
  setViewMode(mode);
  
  // Persist preference
  localStorage.setItem('preferredView', mode);
  
  // Log analytics
  analytics.track('view_mode_changed', { mode });
};
```

---

## Performance Optimization

### Memoization
```typescript
// Avoid re-renders of expensive components
const MemoizedTwoDMap = React.memo(TwoDMapView);
const MemoizedComparison = React.memo(SimulationComparison);

// Use in DualViewLayout
<MemoizedTwoDMap
  key={scenarioId}
  {...props}
  onVillageSelect={memoizedCallback}
/>
```

### Lazy Loading
```typescript
// Load components only when needed
const SimulationComparison = lazy(() =>
  import('./SimulationComparison').then(m => ({
    default: m.SimulationComparison
  }))
);

// Use with Suspense
<Suspense fallback={<LoadingSpinner />}>
  {viewMode === 'comparison' && <SimulationComparison {...props} />}
</Suspense>
```

### Virtual Scrolling (for large village lists)
```typescript
import { VariableSizeList } from 'react-window';

const VillageList = ({ villages }) => (
  <VariableSizeList
    height={400}
    itemCount={villages.length}
    itemSize={(i) => 80}
  >
    {({ index, style }) => (
      <div style={style} className="p-2">
        {villages[index].place}
      </div>
    )}
  </VariableSizeList>
);
```

---

## Testing

### Unit Test Example
```typescript
// TwoDMapView.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import TwoDMapView from './TwoDMapView';

describe('TwoDMapView', () => {
  it('renders without crashing', () => {
    render(
      <TwoDMapView
        scenarioId="test-1"
        damName="Test Dam"
        damLat={30}
        damLng={78}
      />
    );
    expect(screen.getByText(/2D Flood Arrival/i)).toBeInTheDocument();
  });

  it('calls onVillageSelect when village marker is clicked', () => {
    const handleSelect = jest.fn();
    render(
      <TwoDMapView
        {...props}
        onVillageSelect={handleSelect}
      />
    );
    
    // Click a village marker
    const marker = screen.getByText('Tehri');
    fireEvent.click(marker);
    
    expect(handleSelect).toHaveBeenCalledWith(expect.objectContaining({
      place: 'Tehri'
    }));
  });
});
```

### Integration Test Example
```typescript
// DualViewLayout.test.tsx
it('switches between 2D and 3D views', async () => {
  const { getByText, findByText } = render(
    <DualViewLayout {...defaultProps} />
  );
  
  // Initially shows 2D
  expect(getByText('2D Map')).toHaveClass('bg-blue-600');
  
  // Click 3D button
  fireEvent.click(getByText('3D Terrain'));
  
  // Wait for 3D to load
  await findByText('Scene3DViewport');
  
  // Verify 3D button is now active
  expect(getByText('3D Terrain')).toHaveClass('bg-blue-600');
});
```

---

## Deployment

### Environment Variables
```bash
# .env.production
REACT_APP_API_URL=https://flood-guard.example.com
REACT_APP_MAP_TILES_API_KEY=your_mapbox_key
REACT_APP_ANALYTICS_ID=your_analytics_id
```

### Build
```bash
# Development
npm run dev

# Production
npm run build
npm run preview

# Deploy
npm run build
aws s3 sync dist/ s3://flood-guard-frontend/
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## Troubleshooting

### Map doesn't load
```typescript
// Check:
1. react-leaflet is installed: npm list react-leaflet
2. Leaflet CSS is imported: import 'leaflet/dist/leaflet.css'
3. Leaflet default icon paths are correct
4. No console errors with `L is not defined`

// Solution:
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
L.Icon.Default.mergeOptions({ iconUrl: icon });
```

### Villages not showing
```typescript
// Check:
1. getVillagesByDam(damName) returns data
2. damName matches exactly (case-sensitive)
3. Latitude/longitude are valid WGS84 coordinates
4. No console errors with coordinates

// Debug:
console.log('Villages:', getVillagesByDam('Tehri Dam'));
console.log('Dam center:', [damLat, damLng]);
```

### Simulation data not loading
```typescript
// Check:
1. Backend endpoints are running
2. Authorization token is valid
3. Scenario ID exists
4. CORS headers are set

// Solution:
curl -H "Authorization: Bearer token" \
  http://localhost:8000/scenarios/scenario-demo-1/arrival-time-grid
```

---

## FAQ

**Q: Can I use this with real SPH simulation data?**
A: Yes! Replace the mock data in SimulationComparison.tsx with real backend calls.

**Q: How do I add a new dam?**
A: Add entry to getVillagesByDam() in VillageDataLoader.ts, or update backend API.

**Q: Can I customize colors?**
A: Yes, edit getPriorityColor() function or use Tailwind config.

**Q: What map provider should I use?**
A: OpenStreetMap (free, no API key), Mapbox, or ESRI tiles.

**Q: Can I export the analysis?**
A: Yes, add export buttons that save PNG/PDF/GeoJSON using library.

---

## Resources

- [Leaflet Documentation](https://leafletjs.com/)
- [React-Leaflet Guide](https://react-leaflet.js.org/)
- [GeoJSON Specification](https://tools.ietf.org/html/rfc7946)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Last Updated:** August 30, 2026
**Status:** Production Ready
