/**
 * VillageDataLoader.ts
 * Parses nearby_villages_cities.md and provides typed data for visualization
 */

/**
 * Parsed village/city data structure
 */
export interface Village {
  place: string;
  stateAdmin: string;
  distanceKm: number;
  population: number;
  latitude: number;
  longitude: number;
  bboxN: number;
  bboxS: number;
  bboxE: number;
  bboxW: number;
  floodPathHeuristic: 'downstream' | 'off-path' | 'verify';
  damName: string;
}

/**
 * Simulate loading villages from CSV/markdown format
 * In production, this would parse the actual nearby_villages_cities.md file
 * or a converted CSV served from backend
 */
export function getVillagesByDam(damName: string): Village[] {
  const allVillages: Record<string, Village[]> = {
    'Tehri Dam': [
      {
        place: 'Tehri',
        stateAdmin: '39',
        distanceKm: 1.2,
        population: 27611,
        latitude: 30.3909,
        longitude: 78.4803,
        bboxN: 30.59,
        bboxS: 30.19,
        bboxE: 78.68,
        bboxW: 78.28,
        floodPathHeuristic: 'off-path',
        damName: 'Tehri Dam',
      },
      {
        place: 'Srinagar',
        stateAdmin: '39',
        distanceKm: 34.0,
        population: 20216,
        latitude: 30.2224,
        longitude: 78.7834,
        bboxN: 30.42,
        bboxS: 30.02,
        bboxE: 78.98,
        bboxW: 78.58,
        floodPathHeuristic: 'downstream',
        damName: 'Tehri Dam',
      },
      {
        place: 'Rishikesh',
        stateAdmin: '39',
        distanceKm: 35.2,
        population: 66390,
        latitude: 30.1078,
        longitude: 78.2926,
        bboxN: 30.31,
        bboxS: 29.91,
        bboxE: 78.49,
        bboxW: 78.09,
        floodPathHeuristic: 'off-path',
        damName: 'Tehri Dam',
      },
      {
        place: 'Pauri',
        stateAdmin: '39',
        distanceKm: 38.1,
        population: 26514,
        latitude: 30.1529,
        longitude: 78.7771,
        bboxN: 30.35,
        bboxS: 29.95,
        bboxE: 78.98,
        bboxW: 78.58,
        floodPathHeuristic: 'downstream',
        damName: 'Tehri Dam',
      },
      {
        place: 'Raipur',
        stateAdmin: '39',
        distanceKm: 38.2,
        population: 27702,
        latitude: 30.311,
        longitude: 78.0898,
        bboxN: 30.51,
        bboxS: 30.11,
        bboxE: 78.29,
        bboxW: 77.89,
        floodPathHeuristic: 'off-path',
        damName: 'Tehri Dam',
      },
      {
        place: 'Uttarkarshi',
        stateAdmin: '39',
        distanceKm: 39.1,
        population: 17123,
        latitude: 30.7299,
        longitude: 78.4434,
        bboxN: 30.93,
        bboxS: 30.53,
        bboxE: 78.64,
        bboxW: 78.24,
        floodPathHeuristic: 'off-path',
        damName: 'Tehri Dam',
      },
      {
        place: 'Mussoorie',
        stateAdmin: '39',
        distanceKm: 40.1,
        population: 25753,
        latitude: 30.455,
        longitude: 78.0707,
        bboxN: 30.65,
        bboxS: 30.25,
        bboxE: 78.27,
        bboxW: 77.87,
        floodPathHeuristic: 'off-path',
        damName: 'Tehri Dam',
      },
      {
        place: 'Dehradun',
        stateAdmin: '39',
        distanceKm: 43.2,
        population: 522081,
        latitude: 30.3244,
        longitude: 78.0339,
        bboxN: 30.52,
        bboxS: 30.12,
        bboxE: 78.23,
        bboxW: 77.83,
        floodPathHeuristic: 'off-path',
        damName: 'Tehri Dam',
      },
      {
        place: 'Haridwar',
        stateAdmin: '39',
        distanceKm: 57.0,
        population: 186079,
        latitude: 29.9479,
        longitude: 78.1603,
        bboxN: 30.15,
        bboxS: 29.75,
        bboxE: 78.36,
        bboxW: 77.96,
        floodPathHeuristic: 'off-path',
        damName: 'Tehri Dam',
      },
    ],
    'Bhakra Dam': [
      {
        place: 'Nangal',
        stateAdmin: '11',
        distanceKm: 12.0,
        population: 18500,
        latitude: 31.892,
        longitude: 76.125,
        bboxN: 32.092,
        bboxS: 31.692,
        bboxE: 76.325,
        bboxW: 75.925,
        floodPathHeuristic: 'downstream',
        damName: 'Bhakra Dam',
      },
      {
        place: 'Anandpur Sahib',
        stateAdmin: '11',
        distanceKm: 28.0,
        population: 31459,
        latitude: 31.7188,
        longitude: 76.5245,
        bboxN: 31.9188,
        bboxS: 31.5188,
        bboxE: 76.7245,
        bboxW: 76.3245,
        floodPathHeuristic: 'downstream',
        damName: 'Bhakra Dam',
      },
      {
        place: 'Hoshiarpur',
        stateAdmin: '11',
        distanceKm: 45.0,
        population: 75729,
        latitude: 31.5243,
        longitude: 75.9155,
        bboxN: 31.7243,
        bboxS: 31.3243,
        bboxE: 76.1155,
        bboxW: 75.7155,
        floodPathHeuristic: 'off-path',
        damName: 'Bhakra Dam',
      },
    ],
    'Indira Sagar Dam': [
      {
        place: 'Punasa',
        stateAdmin: '23',
        distanceKm: 8.5,
        population: 19200,
        latitude: 22.1245,
        longitude: 75.6145,
        bboxN: 22.3245,
        bboxS: 21.9245,
        bboxE: 75.8145,
        bboxW: 75.4145,
        floodPathHeuristic: 'downstream',
        damName: 'Indira Sagar Dam',
      },
      {
        place: 'Nemawar',
        stateAdmin: '23',
        distanceKm: 22.0,
        population: 25412,
        latitude: 22.3145,
        longitude: 75.7945,
        bboxN: 22.5145,
        bboxS: 22.1145,
        bboxE: 75.9945,
        bboxW: 75.5945,
        floodPathHeuristic: 'downstream',
        damName: 'Indira Sagar Dam',
      },
    ],
  };

  return allVillages[damName] || [];
}

/**
 * Calculate whether village is in affected area
 * Considers:
 * 1. Distance from dam (closer = higher priority)
 * 2. Flood path heuristic (downstream flagged as at-risk)
 * 3. Arrival time estimate
 */
export function computeAffectedStatus(
  village: Village,
  damLat: number,
  damLng: number,
  maxArrivalTime: number = 180
): { isAffected: boolean; arrivalTime: number; priority: string } {
  // Calculate great-circle distance
  const R = 6371; // Earth radius in km
  const dLat = ((village.latitude - damLat) * Math.PI) / 180;
  const dLng = ((village.longitude - damLng) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((damLat * Math.PI) / 180) *
      Math.cos((village.latitude * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceKm = R * c;

  // Simple model: arrival time based on distance and breach speed
  // In production: use actual grid data from backend
  const breachSpeed = 0.5; // m/s (conservative)
  const arrivalTimeMin = distanceKm > 0 ? (distanceKm * 1000) / (breachSpeed * 60) : 0;

  // Affected if:
  // 1. Downstream AND within reasonable flood extent
  // 2. Within 15 km radius AND downstream
  const isAffected =
    village.floodPathHeuristic === 'downstream' &&
    distanceKm <= 15 &&
    arrivalTimeMin <= maxArrivalTime;

  const priority =
    arrivalTimeMin < 15
      ? 'CRITICAL'
      : arrivalTimeMin < 30
        ? 'HIGH'
        : arrivalTimeMin < 60
          ? 'MEDIUM'
          : arrivalTimeMin < 180
            ? 'LOW'
            : 'SAFE';

  return {
    isAffected,
    arrivalTime: Math.max(0, Math.ceil(arrivalTimeMin)),
    priority,
  };
}

/**
 * Get color for priority level
 */
export function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'CRITICAL':
      return '#EF4444'; // Red
    case 'HIGH':
      return '#F97316'; // Orange
    case 'MEDIUM':
      return '#EAB308'; // Yellow
    case 'LOW':
      return '#FDE047'; // Light yellow
    default:
      return '#D1D5DB'; // Gray
  }
}

/**
 * Export villages for a dam as GeoJSON for mapping
 */
export function villagesAsGeoJSON(villages: Village[]) {
  return {
    type: 'FeatureCollection',
    features: villages.map((v) => ({
      type: 'Feature',
      properties: {
        name: v.place,
        population: v.population,
        distance: v.distanceKm,
        floodPath: v.floodPathHeuristic,
      },
      geometry: {
        type: 'Point',
        coordinates: [v.longitude, v.latitude],
      },
    })),
  };
}
