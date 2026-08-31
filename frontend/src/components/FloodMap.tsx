import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface FloodMapProps {
  damLat: number;
  damLng: number;
  damName: string;
  villages?: Array<{
    id: string;
    name: string;
    lat: number;
    lng: number;
    arrivalTimeMin: number;
    population: number;
    priority: 'high' | 'medium' | 'low';
  }>;
  spanKm?: number;
  scenarioId?: string;
  onVillageSelect?: (villageId: string) => void;
}

// Custom icon for dam location
const damIcon = L.divIcon({
  html: `<div class="w-8 h-8 bg-slate-700 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
    <div class="w-4 h-4 bg-slate-600 rounded-full"></div>
  </div>`,
  iconSize: [32, 32],
  className: 'dam-marker',
});

// Priority-based color mapping
const getVillageColor = (arrivalMin: number) => {
  if (arrivalMin < 15) return '#EF4444'; // bright red
  if (arrivalMin < 30) return '#F97316'; // orange
  if (arrivalMin < 60) return '#EAB308'; // yellow
  if (arrivalMin < 180) return '#84CC16'; // lime
  return '#6B7280'; // gray
};

const getPriorityLabel = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'CRITICAL';
    case 'medium':
      return 'HIGH';
    default:
      return 'MEDIUM';
  }
};

export const FloodMap: React.FC<FloodMapProps> = ({
  damLat,
  damLng,
  damName,
  villages = [],
  spanKm = 15,
  scenarioId,
  onVillageSelect,
}) => {
  const [, setImageOverlay] = useState<string | null>(null);

  useEffect(() => {
    if (scenarioId) {
      // Try to load the arrival-time texture as an overlay
      setImageOverlay(`/scenarios/${scenarioId}/arrival-time-texture`);
    }
  }, [scenarioId]);

  // Calculate bounds for the map view
  const kmToDegrees = spanKm / 111; // rough approximation (1 degree latitude ≈ 111 km)
  void kmToDegrees;

  return (
    <div className="w-full h-full rounded-[16px] overflow-hidden border border-white/10">
      <MapContainer
        center={[damLat, damLng]}
        zoom={9}
        style={{ width: '100%', height: '100%' }}
        scrollWheelZoom={true}
      >
        {/* Base map layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
          maxZoom={19}
        />

        {/* Dam location marker */}
        <Marker position={[damLat, damLng]} icon={damIcon}>
          <Popup>
            <div className="text-sm font-bold text-slate-900">{damName}</div>
            <div className="text-xs text-slate-600">Breach point</div>
          </Popup>
        </Marker>

        {/* Flood propagation circles */}
        {[15, 30, 60, 180].map((minutes, idx) => {
          const speedMps = 0.6; // approximate average speed
          const radiusKm = (speedMps * 60 * minutes) / 1000;
          return (
            <Circle
              key={`arrival-${minutes}`}
              center={[damLat, damLng]}
              radius={radiusKm * 1000}
              pathOptions={{
                color: idx === 0 ? '#EF4444' : idx === 1 ? '#F97316' : idx === 2 ? '#EAB308' : '#84CC16',
                weight: 1,
                opacity: 0.3,
                fillOpacity: 0.05,
                dashArray: '5, 5',
              }}
              eventHandlers={{
                mouseover: (e) => {
                  e.target.setStyle({ opacity: 0.5, fillOpacity: 0.1 });
                },
                mouseout: (e) => {
                  e.target.setStyle({ opacity: 0.3, fillOpacity: 0.05 });
                },
              }}
            >
              <Popup>
                <div className="text-xs font-semibold text-slate-900">
                  ~{minutes} min arrival ring
                </div>
              </Popup>
            </Circle>
          );
        })}

        {/* Village impact markers */}
        {villages.map((village) => (
          <Marker
            key={village.id}
            position={[village.lat, village.lng]}
            icon={L.divIcon({
              html: `<div class="w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-[10px] font-bold text-white"
                style="background-color: ${getVillageColor(village.arrivalTimeMin)};">
                ${Math.floor(village.arrivalTimeMin)}
              </div>`,
              iconSize: [24, 24],
              className: 'village-marker',
            })}
            eventHandlers={{
              click: () => onVillageSelect?.(village.id),
            }}
          >
            <Popup>
              <div className="space-y-1 text-xs">
                <div className="font-bold text-slate-900">{village.name}</div>
                <div className="text-slate-600">
                  <span className="font-semibold">Priority:</span> {getPriorityLabel(village.priority)}
                </div>
                <div className="text-slate-600">
                  <span className="font-semibold">Arrival:</span> {village.arrivalTimeMin} min
                </div>
                <div className="text-slate-600">
                  <span className="font-semibold">Population:</span> {(village.population / 1000).toFixed(1)}K
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
