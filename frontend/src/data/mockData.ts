export interface DamInfo {
  id: string;
  name: string;
  river: string;
  state: string;
  district: string;
  lat: number;
  lng: number;
  heightM: number;
  capacityMcm: number;
  waterLevelPct: number;
  status: string;
  modelMode: 'real' | 'surrogate';
}

export interface Village {
  id: string;
  name: string;
  rank: number;
  population: number;
  priority: 'high' | 'medium' | 'low';
  priorityScore: number;
  arrivalTimeMin: number;
  lastSafeDepartureMin: number;
  depthM: number;
  velocityMs: number;
  actionStatement: string;
  recommendedRoute: string;
  recommendedShelter: string;
  coords3D: [number, number, number];
  explainability: {
    inputsUsed: string[];
    modelMode: string;
    assumptionsApplied: string[];
    confidencePct: number;
    satelliteAgreementPct: number;
    iouScore: number;
  };
}

export interface Scenario {
  id: string;
  name: string;
  type: 'best' | 'likely' | 'worst';
  waterLevelPct: number;
  breachWidthM: number;
  breachDepthM: number;
  formationTimeMin: number;
  rainfallMm: number;
}

export const DAMS_DATA: DamInfo[] = [
  {
    id: 'tehri-dam',
    name: 'Tehri Dam',
    river: 'Bhagirathi River',
    state: 'Uttarakhand',
    district: 'Tehri Garhwal',
    lat: 30.38,
    lng: 78.48,
    heightM: 260.5,
    capacityMcm: 3540,
    waterLevelPct: 88,
    status: 'published:high',
    modelMode: 'surrogate'
  },
  {
    id: 'hirakud-dam',
    name: 'Hirakud Dam',
    river: 'Mahanadi River',
    state: 'Odisha',
    district: 'Sambalpur',
    lat: 21.53,
    lng: 83.87,
    heightM: 60.9,
    capacityMcm: 5896,
    waterLevelPct: 74,
    status: 'published:medium',
    modelMode: 'surrogate'
  },
  {
    id: 'bhakra-dam',
    name: 'Bhakra Nangal Dam',
    river: 'Sutlej River',
    state: 'Himachal Pradesh',
    district: 'Bilaspur',
    lat: 31.42,
    lng: 76.43,
    heightM: 226.0,
    capacityMcm: 9340,
    waterLevelPct: 65,
    status: 'no_active_scenario',
    modelMode: 'surrogate'
  },
  {
    id: 'idukki-dam',
    name: 'Idukki Dam',
    river: 'Periyar River',
    state: 'Kerala',
    district: 'Idukki',
    lat: 9.84,
    lng: 76.97,
    heightM: 168.9,
    capacityMcm: 1996,
    waterLevelPct: 81,
    status: 'published:high',
    modelMode: 'surrogate'
  }
];

export const SCENARIOS_DATA: Scenario[] = [
  {
    id: 'scen-likely',
    name: 'Most Likely Breach Scenario',
    type: 'likely',
    waterLevelPct: 88,
    breachWidthM: 120,
    breachDepthM: 35,
    formationTimeMin: 45,
    rainfallMm: 140
  },
  {
    id: 'scen-worst',
    name: 'Worst-Case Complete Breach',
    type: 'worst',
    waterLevelPct: 98,
    breachWidthM: 220,
    breachDepthM: 65,
    formationTimeMin: 20,
    rainfallMm: 280
  },
  {
    id: 'scen-best',
    name: 'Best-Case Partial Breach',
    type: 'best',
    waterLevelPct: 70,
    breachWidthM: 60,
    breachDepthM: 15,
    formationTimeMin: 90,
    rainfallMm: 40
  }
];

export const VILLAGES_DATA: Village[] = [
  {
    id: 'v-01',
    name: 'Chamba Sector 1',
    rank: 1,
    population: 18400,
    priority: 'high',
    priorityScore: 94.2,
    arrivalTimeMin: 18,
    lastSafeDepartureMin: 10,
    depthM: 4.8,
    velocityMs: 3.6,
    actionStatement: 'IMMEDIATE EVACUATION: Use Route C via Bypass Bridge to Shelter B (GIC Senior Secondary School).',
    recommendedRoute: 'Route C (North-East Bypass - Clear)',
    recommendedShelter: 'Shelter B: GIC Senior School (Cap: 22,000)',
    coords3D: [-6, 1.2, 4],
    explainability: {
      inputsUsed: [
        'SRTM 30m DEM Elevation Mesh',
        'Hydrodynamic SPH Near-Field Particles',
        'Delft3D Grid Propagation (Surrogate Mode)',
        'OpenStreetMap Highway Network (OSMnx)'
      ],
      modelMode: 'Surrogate Mode (Rapid Response Hydrodynamic Approximation)',
      assumptionsApplied: [
        'Breach Formation Time: 45 min (Default Fallback applied)',
        'Upstream Inflow: 4,500 m³/s (Measured Inflow Hydrograph)',
        'Manning Roughness coefficient n = 0.035 for valley channel'
      ],
      confidencePct: 94.2,
      satelliteAgreementPct: 88.5,
      iouScore: 0.885
    }
  },
  {
    id: 'v-02',
    name: 'New Tehri Sector 4',
    rank: 2,
    population: 24100,
    priority: 'high',
    priorityScore: 89.6,
    arrivalTimeMin: 28,
    lastSafeDepartureMin: 18,
    depthM: 3.5,
    velocityMs: 2.8,
    actionStatement: 'ROAD EVACUATION: Initiate vehicle evacuation before Route A submerging at t = 20 min.',
    recommendedRoute: 'Route A (Upper Hill Link Road)',
    recommendedShelter: 'Shelter A: District Indoor Stadium (Cap: 30,000)',
    coords3D: [-2, 1.8, 12],
    explainability: {
      inputsUsed: [
        'SRTM 30m DEM Elevation Mesh',
        'Delft3D 2D Grid Propagation',
        'OSMnx Time-Aware Road Network'
      ],
      modelMode: 'Surrogate Mode (Rapid Response Hydrodynamic Approximation)',
      assumptionsApplied: [
        'Breach Width: 120m (Auto Diagnostic Fallback)',
        'Road Safety Depth Threshold: 0.3m vehicle limit'
      ],
      confidencePct: 91.0,
      satelliteAgreementPct: 86.2,
      iouScore: 0.862
    }
  },
  {
    id: 'v-03',
    name: 'Koti Colony & Dam Reach',
    rank: 3,
    population: 6200,
    priority: 'medium',
    priorityScore: 68.4,
    arrivalTimeMin: 42,
    lastSafeDepartureMin: 30,
    depthM: 2.1,
    velocityMs: 1.9,
    actionStatement: 'HIGH-GROUND RETREAT: Move residents upward toward Ridge Point Shelter D.',
    recommendedRoute: 'Route D (High Ridge Trail)',
    recommendedShelter: 'Shelter D: Koti Heights Ridge Point (Cap: 10,000)',
    coords3D: [8, 2.2, -6],
    explainability: {
      inputsUsed: [
        'SRTM 30m DEM Elevation Mesh',
        'Delft3D Grid Store',
        'Population Centroid Overlay'
      ],
      modelMode: 'Surrogate Mode (Rapid Response Hydrodynamic Approximation)',
      assumptionsApplied: [
        'Water Level: 88% Capacity',
        'Channel Sinuosity: 1.15'
      ],
      confidencePct: 87.5,
      satelliteAgreementPct: 84.1,
      iouScore: 0.841
    }
  },
  {
    id: 'v-04',
    name: 'Malidewal Settlement',
    rank: 4,
    population: 3100,
    priority: 'low',
    priorityScore: 42.1,
    arrivalTimeMin: 75,
    lastSafeDepartureMin: 55,
    depthM: 0.9,
    velocityMs: 0.8,
    actionStatement: 'STANDBY ALERT: Monitor river gauge station S-02. Prepare emergency supply kits.',
    recommendedRoute: 'Route E (East Valley Secondary Road)',
    recommendedShelter: 'Shelter E: Malidewal Community Center (Cap: 5,000)',
    coords3D: [16, 1.1, -14],
    explainability: {
      inputsUsed: [
        'SRTM 30m DEM Elevation Mesh',
        'Delft3D Grid Store'
      ],
      modelMode: 'Surrogate Mode (Rapid Response Hydrodynamic Approximation)',
      assumptionsApplied: [
        'Rainfall Hydrograph: 140mm / 24hr'
      ],
      confidencePct: 82.0,
      satelliteAgreementPct: 81.0,
      iouScore: 0.810
    }
  }
];

export const ASSUMPTION_LOG = [
  { field: 'Breach Width', status: 'missing', fallbackUsed: '120 meters (Froehlich empirical regression)', range: '60m - 220m' },
  { field: 'Breach Formation Time', status: 'missing', fallbackUsed: '45 minutes (MacDonald-Langridge-Monopolis relationship)', range: '20m - 90m' },
  { field: 'Reservoir Inflow', status: 'provided', fallbackUsed: 'None (Measured at Hydro Gauge Station S-01 = 4,500 m³/s)', range: 'N/A' },
  { field: 'Manning Roughness (n)', status: 'missing', fallbackUsed: '0.035 (Standard steep natural channel with boulders)', range: '0.030 - 0.045' },
  { field: 'DEM Source Resolution', status: 'provided', fallbackUsed: 'SRTM 30m Global Elevation Model (GeoTIFF)', range: 'N/A' }
];
