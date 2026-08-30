import React, { useEffect, useState } from 'react';
import { AlertTriangle, Zap, MapPin, Clock, Users } from 'lucide-react';

interface ArrivalGridData {
  grid: number[][];
  cell_count: number;
  span_km: number;
  dam_id: string;
  scenario_id: string;
  max_arrival_min: number;
}

interface VillageImpactProps {
  scenarioId: string;
  villageName: string;
  villageCoords: [number, number];
  arrivalTimeMin?: number;
  population?: number;
  priorityLevel?: 'high' | 'medium' | 'low';
  onClose?: () => void;
}

export const VillageImpactCard: React.FC<VillageImpactProps> = ({
  scenarioId,
  villageName,
  villageCoords,
  arrivalTimeMin = 22,
  population = 4500,
  priorityLevel = 'high',
  onClose,
}) => {
  const [gridData, setGridData] = useState<ArrivalGridData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArrivalGrid = async () => {
      try {
        const response = await fetch(`/scenarios/${scenarioId}/arrival-time-grid`);
        if (response.ok) {
          const data = (await response.json()) as ArrivalGridData;
          setGridData(data);
        }
      } catch (error) {
        console.warn(`Failed to fetch arrival grid: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchArrivalGrid();
  }, [scenarioId]);

  const getPriorityColor = (level: string) => {
    switch (level) {
      case 'high':
        return { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/40', icon: '#EF4444' };
      case 'medium':
        return { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/40', icon: '#F59E0B' };
      default:
        return { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/40', icon: '#3B82F6' };
    }
  };

  const colors = getPriorityColor(priorityLevel);
  const isImmediate = arrivalTimeMin < 15;
  const isCritical = arrivalTimeMin < 30;

  return (
    <div className={`glass-panel rounded-[16px] p-4 border ${colors.border} ${colors.bg} space-y-4 max-w-md`}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: colors.icon, opacity: 0.2 }}
          >
            <MapPin className="w-4 h-4" style={{ color: colors.icon }} />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-white">{villageName}</h3>
            <p className="text-xs text-[var(--ink-muted)]">
              {villageCoords[0].toFixed(2)}°N, {villageCoords[1].toFixed(2)}°E
            </p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-[var(--ink-muted)] hover:text-white transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* Critical Alert Banner */}
      {isImmediate && (
        <div className="flex items-center gap-2 rounded-lg bg-red-500/30 border border-red-500/50 px-3 py-2">
          <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
          <span className="text-xs font-semibold text-red-300">IMMEDIATE ACTION REQUIRED</span>
        </div>
      )}

      {/* Main Metrics Grid */}
      <div className="grid grid-cols-2 gap-2">
        {/* Arrival Time */}
        <div className="rounded-lg bg-white/5 border border-white/10 p-2.5">
          <div className="flex items-center gap-1 text-[10px] text-[var(--ink-muted)] mb-1">
            <Clock className="w-3 h-3" />
            <span>Arrival Time</span>
          </div>
          <div className="text-xl font-bold text-white">
            {arrivalTimeMin}
            <span className="text-xs text-[var(--ink-muted)] ml-1">min</span>
          </div>
          <div className="text-xs text-[var(--ink-muted)] mt-1">
            {isImmediate
              ? 'From dam breach'
              : isCritical
              ? 'Prepare now'
              : 'Monitor status'}
          </div>
        </div>

        {/* Population at Risk */}
        <div className="rounded-lg bg-white/5 border border-white/10 p-2.5">
          <div className="flex items-center gap-1 text-[10px] text-[var(--ink-muted)] mb-1">
            <Users className="w-3 h-3" />
            <span>Population</span>
          </div>
          <div className="text-xl font-bold text-white">
            {(population / 1000).toFixed(1)}
            <span className="text-xs text-[var(--ink-muted)] ml-1">K</span>
          </div>
          <div className="text-xs text-[var(--ink-muted)] mt-1">at risk</div>
        </div>
      </div>

      {/* Action Items */}
      <div className="space-y-1.5 pt-2 border-t border-white/10">
        {isImmediate && (
          <>
            <div className="flex items-start gap-2 text-xs">
              <Zap className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
              <span className="text-white">
                <strong>Evacuate immediately</strong> using pre-planned safe routes.
              </span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <Zap className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
              <span className="text-white">
                Alert emergency services and shelters in advance.
              </span>
            </div>
          </>
        )}
        {isCritical && !isImmediate && (
          <div className="flex items-start gap-2 text-xs">
            <AlertTriangle className="w-3 h-3 text-amber-400 mt-0.5 flex-shrink-0" />
            <span className="text-white">
              Begin evacuation procedures and activate safe routes.
            </span>
          </div>
        )}
        {!isCritical && (
          <div className="flex items-start gap-2 text-xs">
            <Clock className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
            <span className="text-white">
              Continue monitoring; prepare evacuation plans and shelter capacity.
            </span>
          </div>
        )}
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="text-xs text-[var(--ink-muted)] text-center py-2">
          Loading impact analysis...
        </div>
      )}

      {/* Grid Stats */}
      {gridData && !loading && (
        <div className="text-xs text-[var(--ink-dim)] text-center border-t border-white/10 pt-2">
          Analysis covers {gridData.span_km * 2}×{gridData.span_km * 2} km area
          <br />
          Grid resolution: {gridData.cell_count}×{gridData.cell_count} cells
        </div>
      )}
    </div>
  );
};
