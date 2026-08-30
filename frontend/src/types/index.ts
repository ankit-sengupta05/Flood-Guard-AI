export type ModelMode = 'SPH' | 'Delft3D' | 'Hybrid' | 'Rapid Response';
export type SimulationStatus = 'READY' | 'RUNNING' | 'COMPLETED' | 'FAILED';
export type PriorityLevel = 'CRITICAL' | 'WARNING' | 'CAUTION' | 'SAFE';

export interface Dam {
  id: string;
  name: string;
  river: string;
  state: string;
  district: string;
  lat: number;
  lng: number;
  heightM: number;
  capacityMcm: number;
  currentStorageMcm: number;
  waterLevelPct: number;
  inflowM3s: number;
  outflowM3s: number;
  status: string;
  modelMode: 'real' | 'surrogate';
}

export interface BreachParams {
  widthM: number;
  depthM: number;
  formationTimeMin: number;
  type: 'Instantaneous' | 'Progressive' | 'Overtopping';
}

export interface VillageRisk {
  id: string;
  name: string;
  rank: number;
  population: number;
  earliestArrivalMin: number;
  medianArrivalMin: number;
  latestArrivalMin: number;
  expectedDepthM: number;
  maxVelocityMs: number;
  floodProbabilityPct: number;
  confidence: 'HIGH' | 'MEDIUM' | 'LOW';
  confidenceReason: string;
  priorityScore: number;
  recommendedAction: string;
  recommendedRoute: string;
  recommendedShelterId: string;
  travelTimeMin: number;
  safetyBufferMin: number;
  lastSafeDepartureMin: number;
  status: PriorityLevel;
  coords: [number, number]; // [lat, lng]
}

export interface RoadSegment {
  id: string;
  name: string;
  type: 'Highway' | 'Bridge' | 'Secondary Road';
  status: PriorityLevel;
  floodsInMin: number;
  currentDepthM: number;
}

export interface Shelter {
  id: string;
  name: string;
  capacity: number;
  currentOccupancy: number;
  elevationM: number;
  floodProbabilityPct: number;
  travelTimeMin: number;
  status: 'SAFE' | 'UNSAFE' | 'CAUTION';
  coords: [number, number];
}

export interface DataReadinessItem {
  field: string;
  completenessPct: number;
  status: 'Complete' | 'Partial' | 'Missing';
  confidence: 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface SensitivityItem {
  parameter: string;
  impactScore: number; // 0-100
  explanation: string;
}

export interface AssumptionLogItem {
  id: string;
  parameter: string;
  value: string;
  source: string;
  confidence: 'HIGH' | 'MEDIUM' | 'LOW';
}
