import React from 'react';
import { AlertCircle, Droplet } from 'lucide-react';

interface ArrivalTimeLegendProps {
  scenarioId?: string;
  damName?: string;
  showDetails?: boolean;
}

export const ArrivalTimeLegend: React.FC<ArrivalTimeLegendProps> = ({
  scenarioId,
  damName = 'Dam',
  showDetails = true,
}) => {
  const arrivalBands = [
    { label: '0–15 min', color: '#FF0000', desc: 'CRITICAL: Immediate evacuation required' },
    { label: '15–30 min', color: '#FF6600', desc: 'HIGH: Prepare immediate evacuation' },
    { label: '30–60 min', color: '#FFAA00', desc: 'MEDIUM: Alert & prepare evacuation' },
    { label: '60–180 min', color: '#FFDD00', desc: 'LOW: Monitor; prepare if needed' },
    { label: '180+ min', color: '#999999', desc: 'SAFE: Minimal flood impact expected' },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Droplet className="w-4 h-4 text-red-500" />
        <h3 className="text-sm font-bold text-white">Flood Arrival Time Heatmap</h3>
      </div>

      <div className="glass-panel p-3 rounded-[12px] space-y-2 border border-white/10">
        <p className="text-xs text-[var(--ink-muted)]">
          Red overlay shows estimated water arrival time at each location when {damName} breaches.
        </p>

        {/* Legend Bands */}
        <div className="space-y-1.5 mt-3 pt-3 border-t border-white/10">
          {arrivalBands.map((band, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs">
              <div
                className="w-5 h-5 rounded border border-white/20 flex-shrink-0"
                style={{ backgroundColor: band.color, opacity: 0.7 }}
              />
              <div className="flex-1">
                <span className="font-semibold text-white">{band.label}</span>
                <span className="text-[var(--ink-muted)] ml-2">{band.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showDetails && (
        <div className="glass-panel p-3 rounded-[12px] border border-amber-500/30 space-y-2 bg-amber-500/5">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <div className="text-xs space-y-1">
              <p className="font-semibold text-amber-300">Note: Surrogate Model</p>
              <p className="text-[var(--ink-muted)]">
                Arrival times are estimated using a simplified radial propagation model. 
                Real SPH/Delft3D simulations will refine these predictions based on actual terrain, 
                rainfall, and hydrodynamic coupling.
              </p>
            </div>
          </div>
        </div>
      )}

      {scenarioId && (
        <div className="text-xs text-[var(--ink-dim)] text-center">
          Scenario ID: <code className="bg-white/5 px-1.5 py-0.5 rounded font-mono">{scenarioId}</code>
        </div>
      )}
    </div>
  );
};
