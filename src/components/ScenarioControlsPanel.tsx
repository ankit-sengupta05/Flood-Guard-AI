import React, { useState } from 'react';
import { Sliders, Layers, Sparkles, AlertCircle, RefreshCw, CheckCircle2 } from 'lucide-react';
import type { Scenario } from '../data/mockData';

interface LeftPanelProps {
  selectedScenario: Scenario;
  onUpdateScenario: (scenario: Scenario) => void;
  showSatelliteOverlay: boolean;
  onToggleSatelliteOverlay: () => void;
  showRoadSafety: boolean;
  onToggleRoadSafety: () => void;
  onOpenAssumptions: () => void;
}

export const ScenarioControlsPanel: React.FC<LeftPanelProps> = ({
  selectedScenario,
  onUpdateScenario,
  showSatelliteOverlay,
  onToggleSatelliteOverlay,
  showRoadSafety,
  onToggleRoadSafety,
  onOpenAssumptions,
}) => {
  const [activeTab, setActiveTab] = useState<'inputs' | 'layers'>('inputs');
  const [breachWidth, setBreachWidth] = useState(selectedScenario.breachWidthM);
  const [waterLevel, setWaterLevel] = useState(selectedScenario.waterLevelPct);

  const handleApplyChanges = () => {
    onUpdateScenario({
      ...selectedScenario,
      breachWidthM: breachWidth,
      waterLevelPct: waterLevel,
    });
  };

  return (
    <div className="w-80 h-full glass-panel border-r border-white/10 flex flex-col z-30 select-none">
      {/* Tabs */}
      <div className="flex border-b border-white/10">
        <button
          onClick={() => setActiveTab('inputs')}
          className={`flex-1 py-3 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all ${
            activeTab === 'inputs'
              ? 'text-[var(--accent)] border-b-2 border-[var(--accent)] bg-[var(--accent-dim)]'
              : 'text-[var(--ink-muted)] hover:text-white'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Scenario Builder</span>
        </button>

        <button
          onClick={() => setActiveTab('layers')}
          className={`flex-1 py-3 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all ${
            activeTab === 'layers'
              ? 'text-[var(--accent)] border-b-2 border-[var(--accent)] bg-[var(--accent-dim)]'
              : 'text-[var(--ink-muted)] hover:text-white'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>3D Layers</span>
        </button>
      </div>

      {/* Content Body */}
      <div className="flex-1 p-4 overflow-y-auto space-y-5">
        {activeTab === 'inputs' ? (
          <>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-medium text-[var(--ink)]">Reservoir Capacity Level</label>
                <span className="text-xs font-mono font-bold text-[var(--accent)]">{waterLevel}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={waterLevel}
                onChange={(e) => setWaterLevel(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[var(--accent)]"
              />
              <p className="text-[10px] text-[var(--ink-muted)] mt-1">Current Reservoir Head = 212.5 meters</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-medium text-[var(--ink)]">Breach Width (m)</label>
                <span className="text-xs font-mono font-bold text-[var(--accent)]">{breachWidth} m</span>
              </div>
              <input
                type="range"
                min="40"
                max="300"
                step="10"
                value={breachWidth}
                onChange={(e) => setBreachWidth(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[var(--accent)]"
              />
              <p className="text-[10px] text-[var(--ink-muted)] mt-1">Froehlich Empirical Dam Breach Regression</p>
            </div>

            <div className="pt-2 border-t border-white/10">
              <label className="text-[11px] font-semibold text-[var(--ink-muted)] uppercase block mb-2">
                Auto-Ensemble Generation
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    setWaterLevel(70);
                    setBreachWidth(60);
                  }}
                  className="py-1.5 px-2 rounded-[14px] bg-white/5 hover:bg-white/10 text-[10px] font-medium border border-white/10 text-center"
                >
                  Best-Case
                </button>
                <button
                  onClick={() => {
                    setWaterLevel(88);
                    setBreachWidth(120);
                  }}
                  className="py-1.5 px-2 rounded-[14px] bg-[var(--accent-dim)] text-[var(--accent)] text-[10px] font-semibold border border-[var(--accent)]/30 text-center"
                >
                  Likely Case
                </button>
                <button
                  onClick={() => {
                    setWaterLevel(98);
                    setBreachWidth(220);
                  }}
                  className="py-1.5 px-2 rounded-[14px] bg-red-500/10 hover:bg-red-500/20 text-red-400 text-[10px] font-medium border border-red-500/20 text-center"
                >
                  Worst-Case
                </button>
              </div>
            </div>

            <button
              onClick={handleApplyChanges}
              className="w-full py-2.5 rounded-[14px] bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-xs font-bold shadow-lg shadow-[#FF6A3D]/25 transition-all flex items-center justify-center space-x-2"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Re-Run Hydrodynamic Model</span>
            </button>

            <div
              onClick={onOpenAssumptions}
              className="glass-card p-3 rounded-[14px] cursor-pointer hover:border-[var(--accent)] transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-[var(--ink)] flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Missing-Data Diagnostic</span>
                </span>
                <span className="text-[9px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded font-mono">
                  3 Fallbacks Logged
                </span>
              </div>
              <p className="text-[10px] text-[var(--ink-muted)] line-clamp-2">
                Click to inspect Assumption Log: Froehlich breach width & MacDonald formation time applied automatically.
              </p>
            </div>
          </>
        ) : (
          <div className="space-y-3">
            <label className="text-[11px] font-semibold text-[var(--ink-muted)] uppercase block">
              Toggle 3D Viewport Layers
            </label>

            <div
              onClick={onToggleSatelliteOverlay}
              className={`glass-card p-3 rounded-[14px] cursor-pointer flex items-center justify-between transition-all ${
                showSatelliteOverlay ? 'border-purple-500/50 bg-purple-500/10' : ''
              }`}
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <div>
                  <div className="text-xs font-semibold text-white">Satellite Validation Overlay</div>
                  <div className="text-[10px] text-[var(--ink-muted)]">GEE Sentinel-2 Extent vs Simulated</div>
                </div>
              </div>
              <CheckCircle2 className={`w-4 h-4 ${showSatelliteOverlay ? 'text-purple-400' : 'text-white/10'}`} />
            </div>

            <div
              onClick={onToggleRoadSafety}
              className={`glass-card p-3 rounded-[14px] cursor-pointer flex items-center justify-between transition-all ${
                showRoadSafety ? 'border-sky-500/50 bg-sky-500/10' : ''
              }`}
            >
              <div className="flex items-center space-x-2">
                <Layers className="w-4 h-4 text-sky-400" />
                <div>
                  <div className="text-xs font-semibold text-white">Dynamic Road & Bridge Safety</div>
                  <div className="text-[10px] text-[var(--ink-muted)]">Time-aware safe vs submerged roads</div>
                </div>
              </div>
              <CheckCircle2 className={`w-4 h-4 ${showRoadSafety ? 'text-sky-400' : 'text-white/10'}`} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
