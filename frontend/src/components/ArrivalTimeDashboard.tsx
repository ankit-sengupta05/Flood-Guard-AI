import React, { useState } from 'react';
import { ArrivalTimeLegend } from './ArrivalTimeLegend';
import { VillageImpactCard } from './VillageImpactCard';
import { FloodMap } from './FloodMap';
import { Map, List, AlertTriangle } from 'lucide-react';

interface ArrivalTimeDashboardProps {
  scenarioId: string;
  damName: string;
  damLat: number;
  damLng: number;
  villages: Array<{
    id: string;
    name: string;
    lat: number;
    lng: number;
    arrivalTimeMin: number;
    population: number;
    priority: 'high' | 'medium' | 'low';
  }>;
  onVillageSelect?: (villageId: string) => void;
}

type ViewMode = 'list' | 'map' | 'legend';

export const ArrivalTimeDashboard: React.FC<ArrivalTimeDashboardProps> = ({
  scenarioId,
  damName,
  damLat,
  damLng,
  villages,
  onVillageSelect,
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedVillageId, setSelectedVillageId] = useState<string | null>(villages[0]?.id ?? null);

  const selectedVillage = villages.find((v) => v.id === selectedVillageId);
  const criticalCount = villages.filter((v) => v.arrivalTimeMin < 15).length;
  const highRiskCount = villages.filter((v) => v.arrivalTimeMin >= 15 && v.arrivalTimeMin < 30).length;

  return (
    <div className="space-y-4 h-full overflow-y-auto">
      {/* Header Summary */}
      <div className="glass-panel rounded-[16px] p-4 border border-white/10 space-y-3">
        <h2 className="text-base font-bold text-white">Flood Impact Analysis</h2>
        <p className="text-xs text-[var(--ink-muted)]">
          Scenario: <code className="bg-white/5 px-1.5 py-0.5 rounded font-mono">{scenarioId}</code>
        </p>

        {/* Risk Summary Grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-2 text-center">
            <div className="text-lg font-bold text-red-400">{criticalCount}</div>
            <div className="text-[10px] text-red-300 font-semibold">CRITICAL</div>
            <div className="text-[8px] text-red-300/70">&lt; 15 min</div>
          </div>
          <div className="rounded-lg bg-amber-500/10 border border-amber-500/30 p-2 text-center">
            <div className="text-lg font-bold text-amber-400">{highRiskCount}</div>
            <div className="text-[10px] text-amber-300 font-semibold">HIGH RISK</div>
            <div className="text-[8px] text-amber-300/70">15–30 min</div>
          </div>
          <div className="rounded-lg bg-blue-500/10 border border-blue-500/30 p-2 text-center">
            <div className="text-lg font-bold text-blue-400">{villages.length}</div>
            <div className="text-[10px] text-blue-300 font-semibold">MONITORED</div>
            <div className="text-[8px] text-blue-300/70">Total areas</div>
          </div>
        </div>
      </div>

      {/* View Mode Tabs */}
      <div className="flex gap-2 sticky top-0 z-10">
        <button
          onClick={() => setViewMode('list')}
          className={`flex-1 px-3 py-2 rounded-[12px] text-xs font-semibold transition-all ${
            viewMode === 'list'
              ? 'bg-[var(--accent)] text-[#080b10] shadow-lg shadow-[#FF6A3D]/30'
              : 'glass-panel text-[var(--ink-muted)] hover:text-white border border-white/10'
          }`}
        >
          <List className="w-3 h-3 inline mr-1.5" />
          Priority List
        </button>
        <button
          onClick={() => setViewMode('map')}
          className={`flex-1 px-3 py-2 rounded-[12px] text-xs font-semibold transition-all ${
            viewMode === 'map'
              ? 'bg-[var(--accent)] text-[#080b10] shadow-lg shadow-[#FF6A3D]/30'
              : 'glass-panel text-[var(--ink-muted)] hover:text-white border border-white/10'
          }`}
        >
          <Map className="w-3 h-3 inline mr-1.5" />
          Map View
        </button>
        <button
          onClick={() => setViewMode('legend')}
          className={`flex-1 px-3 py-2 rounded-[12px] text-xs font-semibold transition-all ${
            viewMode === 'legend'
              ? 'bg-[var(--accent)] text-[#080b10] shadow-lg shadow-[#FF6A3D]/30'
              : 'glass-panel text-[var(--ink-muted)] hover:text-white border border-white/10'
          }`}
        >
          <AlertTriangle className="w-3 h-3 inline mr-1.5" />
          Legend
        </button>
      </div>

      {/* View Content */}
      {viewMode === 'list' && (
        <div className="space-y-3">
          {selectedVillage && (
            <div className="animate-in fade-in slide-in-from-top-2">
              <VillageImpactCard
                scenarioId={scenarioId}
                villageName={selectedVillage.name}
                villageCoords={[selectedVillage.lat, selectedVillage.lng]}
                arrivalTimeMin={selectedVillage.arrivalTimeMin}
                population={selectedVillage.population}
                priorityLevel={selectedVillage.priority}
                onClose={() => setSelectedVillageId(null)}
              />
            </div>
          )}

          {/* Village List */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-white px-1">Affected Areas</h3>
            {villages
              .sort((a, b) => a.arrivalTimeMin - b.arrivalTimeMin)
              .map((village) => {
                const isSelected = village.id === selectedVillageId;
                const bgColor =
                  village.arrivalTimeMin < 15
                    ? 'bg-red-500/10 border-red-500/30'
                    : village.arrivalTimeMin < 30
                    ? 'bg-amber-500/10 border-amber-500/30'
                    : 'bg-blue-500/10 border-blue-500/30';

                return (
                  <button
                    key={village.id}
                    onClick={() => {
                      setSelectedVillageId(village.id);
                      onVillageSelect?.(village.id);
                    }}
                    className={`w-full text-left glass-panel rounded-[12px] p-2.5 border transition-all ${
                      isSelected
                        ? 'border-[var(--accent)] bg-[var(--surface-raised)] shadow-lg shadow-[#FF6A3D]/20'
                        : `border-white/10 ${bgColor} hover:border-white/30`
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-white">{village.name}</h4>
                        <p className="text-[10px] text-[var(--ink-muted)] mt-0.5">
                          Pop: {(village.population / 1000).toFixed(1)}K • 
                          Lat {village.lat.toFixed(2)}°, Lng {village.lng.toFixed(2)}°
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-sm font-bold text-white">{village.arrivalTimeMin}</div>
                        <div className="text-[9px] text-[var(--ink-muted)]">minutes</div>
                      </div>
                    </div>
                  </button>
                );
              })}
          </div>
        </div>
      )}

      {viewMode === 'map' && (
        <div className="h-96 rounded-[16px] overflow-hidden border border-white/10">
          <FloodMap
            damLat={damLat}
            damLng={damLng}
            damName={damName}
            villages={villages}
            spanKm={15}
            scenarioId={scenarioId}
            onVillageSelect={(villageId) => {
              setSelectedVillageId(villageId);
              onVillageSelect?.(villageId);
              setViewMode('list');
            }}
          />
        </div>
      )}

      {viewMode === 'legend' && (
        <ArrivalTimeLegend scenarioId={scenarioId} damName={damName} showDetails />
      )}
    </div>
  );
};
