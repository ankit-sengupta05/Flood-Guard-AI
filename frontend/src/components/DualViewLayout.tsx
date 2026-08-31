import React, { useState, useCallback, useEffect } from 'react';
import { Zap, Map, Layers3, SlidersHorizontal, Download, Play, Square, RotateCcw } from 'lucide-react';
import { TwoDMapView } from './TwoDMapView';
import { Scene3DViewport } from './Scene3DViewport';
import { SimulationComparison } from './SimulationComparison';
import { getVillagesByDam } from './VillageDataLoader';
import type { Village } from './VillageDataLoader';

type ViewMode = '2d' | '3d' | 'comparison';
type SidePanel = 'configuration' | 'progress' | 'results' | 'none';

interface DualViewLayoutProps {
  scenarioId: string;
  damId: string;
  damName: string;
  damLat: number;
  damLng: number;
  breachWidth?: number;
  onExit?: () => void;
  onOpenExport?: () => void;
}

export const DualViewLayout: React.FC<DualViewLayoutProps> = ({
  scenarioId,
  damId,
  damName,
  damLat,
  damLng,
  breachWidth = 100,
  onExit,
  onOpenExport,
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('2d');
  const [sidePanel, setSidePanel] = useState<SidePanel>('configuration');
  const [villages] = useState<Village[]>(getVillagesByDam(damName));
  const [simulationTime, setSimulationTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Animation effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setSimulationTime((prev) => {
          if (prev >= 120) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 100); // 100ms per simulation minute
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleVillageSelect = useCallback((_village: Village | { place: string; population: number; latitude: number; longitude: number }) => {
    // Optional: handle village selection
  }, []);

  const handleRunSimulation = () => {
    setSidePanel('progress');
    // Mock progress sequence
    setTimeout(() => {
      setSidePanel('results');
      setIsPlaying(true); // Auto-play animation on complete
    }, 4000);
  };

  return (
    <div className="h-screen w-full bg-[#0B0E12] flex flex-col overflow-hidden text-white">
      {/* Top Navigation Bar */}
      <nav className="bg-[#111827] text-white p-3 border-b border-white/10 flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <Zap className="w-6 h-6 text-[var(--accent)]" />
          <div>
            <h1 className="text-xl font-bold">{damName} - Flood Analysis</h1>
            <p className="text-[var(--ink-muted)] text-xs">Scenario: Severe Breach</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* View Mode Buttons */}
          <div className="flex gap-1 bg-[#1F2937] rounded-[12px] p-1 border border-white/10">
            <button
              onClick={() => setViewMode('2d')}
              className={`flex items-center gap-1 px-3 py-2 rounded-[8px] transition text-sm font-semibold ${
                viewMode === '2d'
                  ? 'bg-[var(--accent)] text-[#080b10] shadow-lg shadow-[#FF6A3D]/30'
                  : 'text-[var(--ink-muted)] hover:text-white hover:bg-white/5'
              }`}
            >
              <Map className="w-4 h-4" />
              2D Flood Map
            </button>
            <button
              onClick={() => setViewMode('3d')}
              className={`flex items-center gap-1 px-3 py-2 rounded-[8px] transition text-sm font-semibold ${
                viewMode === '3d'
                  ? 'bg-[var(--accent)] text-[#080b10] shadow-lg shadow-[#FF6A3D]/30'
                  : 'text-[var(--ink-muted)] hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers3 className="w-4 h-4" />
              3D Terrain
            </button>
            <button
              onClick={() => setViewMode('comparison')}
              className={`flex items-center gap-1 px-3 py-2 rounded-[8px] transition text-sm font-semibold ${
                viewMode === 'comparison'
                  ? 'bg-[var(--accent)] text-[#080b10] shadow-lg shadow-[#FF6A3D]/30'
                  : 'text-[var(--ink-muted)] hover:text-white hover:bg-white/5'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Model Comparison
            </button>
          </div>
          
          {sidePanel === 'results' && (
            <button
              onClick={onOpenExport}
              className="ml-2 flex items-center gap-2 px-4 py-2 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-[12px] hover:bg-emerald-600/30 transition font-semibold text-sm"
            >
              <Download className="w-4 h-4" />
              Export Flood Extent
            </button>
          )}

          {/* Exit Button */}
          <button
            onClick={onExit}
            className="ml-2 px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/30 rounded-[12px] hover:bg-red-500/20 transition font-semibold text-sm"
          >
            Exit
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Primary View (Map takes 70% width) */}
        <div className={`flex-1 overflow-hidden relative ${sidePanel !== 'none' && viewMode !== 'comparison' ? 'w-[70%]' : 'w-full'}`}>
          {viewMode === '2d' && (
            <>
              <TwoDMapView
                scenarioId={scenarioId}
                damName={damName}
                damLat={damLat}
                damLng={damLng}
                breachWidth={breachWidth}
                onVillageSelect={handleVillageSelect}
                simulationTime={simulationTime}
              />
              {sidePanel === 'results' && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-[1000] bg-[#111827] px-6 py-4 rounded-[24px] border border-[var(--accent)]/30 flex items-center gap-6 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setIsPlaying(!isPlaying)} className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--accent)] text-[#080b10] hover:scale-105 transition-transform">
                      {isPlaying ? <Square className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
                    </button>
                    <button onClick={() => { setIsPlaying(false); setSimulationTime(0); }} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                      <RotateCcw className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <div className="flex-1 min-w-[300px]">
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-[var(--ink-muted)]">Time Elapsed</span>
                      <span className="text-[var(--accent)] font-mono">{simulationTime} min</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--accent)] transition-all duration-100 ease-linear" style={{ width: `${(simulationTime / 120) * 100}%` }} />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {viewMode === '3d' && (
            <Scene3DViewport
              selectedDam={{ id: damId, name: damName }}
              villages={[]}
              selectedVillage={null}
              currentTimeStep={simulationTime}
              showSatelliteOverlay={false}
            />
          )}

          {viewMode === 'comparison' && (
            <SimulationComparison
              scenarioId={scenarioId}
              damName={damName}
              damLat={damLat}
              damLng={damLng}
              villages={villages}
            />
          )}
        </div>

        {/* Side Panel (30% width) */}
        {viewMode !== 'comparison' && sidePanel !== 'none' && (
          <div className="w-[30%] min-w-[350px] max-w-[450px] bg-[#0B0E12] border-l border-white/10 shadow-2xl flex flex-col z-50">
            {sidePanel === 'configuration' && (
              <ConfigurationSidebar damName={damName} onRun={handleRunSimulation} />
            )}
            {sidePanel === 'progress' && (
              <ProgressSidebar />
            )}
            {sidePanel === 'results' && (
              <ResultsSidebar villages={villages} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Configuration Sidebar Component */
/* -------------------------------------------------------------------------- */
const ConfigurationSidebar: React.FC<{ damName: string; onRun: () => void }> = ({ damName, onRun }) => {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="p-6 border-b border-white/10">
        <h2 className="text-xl font-bold text-white mb-2">Configure Scenario</h2>
        <p className="text-xs text-[var(--ink-muted)]">Set the parameters for the hydrodynamic simulation.</p>
      </div>

      <div className="p-6 space-y-6 flex-1">
        <div className="space-y-2">
          <label className="text-xs font-bold text-[var(--ink-muted)]">Dam Name</label>
          <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-semibold text-white">
            {damName}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-[var(--ink-muted)] flex justify-between">
            <span>Water Level</span>
            <span className="text-[var(--accent)] font-mono">95%</span>
          </label>
          <input type="range" min="0" max="100" defaultValue="95" className="w-full accent-[var(--accent)]" />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-[var(--ink-muted)] flex justify-between">
            <span>Breach Width (m)</span>
            <span className="text-[var(--accent)] font-mono">100m</span>
          </label>
          <input type="range" min="10" max="200" defaultValue="100" className="w-full accent-[var(--accent)]" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-[var(--ink-muted)]">Breach Time (min)</label>
            <input type="number" defaultValue={30} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-[var(--accent)] outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-[var(--ink-muted)]">Sim Duration (hr)</label>
            <input type="number" defaultValue={2} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-[var(--accent)] outline-none" />
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-white/10">
        <button
          onClick={onRun}
          className="w-full py-4 rounded-[14px] bg-[var(--accent)] hover:bg-[#ff7b52] text-[#080b10] font-bold text-sm tracking-wide shadow-lg shadow-[#FF6A3D]/20 transition-all hover:-translate-y-0.5"
        >
          RUN FLOOD SIMULATION
        </button>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Progress Sidebar Component */
/* -------------------------------------------------------------------------- */
const ProgressSidebar: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const intervals = [500, 1500, 2500, 3500];
    intervals.forEach((t, i) => {
      setTimeout(() => setStep(i + 1), t);
    });
  }, []);

  const steps = [
    'Preparing terrain and mesh',
    'Generating flood scenario parameters',
    'Running hydrodynamic model (SPH + Delft3D)',
    'Calculating inundation grid',
    'Generating impact analysis',
  ];

  return (
    <div className="flex flex-col h-full justify-center p-8 space-y-8">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto border-4 border-white/10 border-t-[var(--accent)] rounded-full animate-spin"></div>
        <h2 className="text-xl font-bold text-white">Running Simulation</h2>
      </div>

      <div className="space-y-4">
        {steps.map((label, idx) => {
          const isActive = idx === step;
          const isDone = idx < step;
          return (
            <div key={idx} className={`flex items-center gap-4 transition-opacity duration-300 ${isActive || isDone ? 'opacity-100' : 'opacity-30'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                isDone ? 'bg-emerald-500 text-white' : isActive ? 'bg-[var(--accent)] text-[#080b10] animate-pulse' : 'bg-white/10 text-white/50'
              }`}>
                {isDone ? '✓' : idx + 1}
              </div>
              <span className={`text-sm ${isDone ? 'text-emerald-400 font-semibold' : isActive ? 'text-white font-bold' : 'text-[var(--ink-muted)]'}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Results Sidebar Component */
/* -------------------------------------------------------------------------- */
const ResultsSidebar: React.FC<{ villages: Village[] }> = ({ villages }) => {
  const affectedVillages = villages.filter(v => v.floodPathHeuristic === 'downstream' || Math.random() > 0.5); // Simple mock for affected
  
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="p-6 border-b border-white/10 bg-emerald-500/10">
        <h2 className="text-xl font-bold text-emerald-400 mb-1">Simulation Complete</h2>
        <p className="text-xs text-[var(--ink-muted)]">Hydrodynamic solver finished in 3.2s (Surrogate)</p>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white border-b border-white/10 pb-2">Flood Impact</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-[10px] text-[var(--ink-muted)] uppercase tracking-wider">Inundated Area</div>
              <div className="text-2xl font-bold font-mono text-white mt-1">42.8 <span className="text-sm text-[var(--ink-muted)]">km²</span></div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-[10px] text-[var(--ink-muted)] uppercase tracking-wider">Max Depth</div>
              <div className="text-2xl font-bold font-mono text-red-400 mt-1">4.2 <span className="text-sm text-[var(--ink-muted)]">m</span></div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-[10px] text-[var(--ink-muted)] uppercase tracking-wider">Max Velocity</div>
              <div className="text-2xl font-bold font-mono text-amber-400 mt-1">2.8 <span className="text-sm text-[var(--ink-muted)]">m/s</span></div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-[10px] text-[var(--ink-muted)] uppercase tracking-wider">First Arrival</div>
              <div className="text-2xl font-bold font-mono text-[var(--accent)] mt-1">12 <span className="text-sm text-[var(--ink-muted)]">min</span></div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white border-b border-white/10 pb-2">Human Impact</h3>
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-red-200">Affected Villages</span>
              <span className="text-lg font-bold text-red-400">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-red-200">Affected Population</span>
              <span className="text-lg font-bold text-red-400">~14,200</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-red-200">Critical Infrastructure</span>
              <span className="text-lg font-bold text-red-400">2 Hospitals, 1 School</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white border-b border-white/10 pb-2">High Risk Locations</h3>
          <div className="space-y-2">
            {affectedVillages.slice(0, 5).map((v, i) => (
              <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                <div>
                  <div className="text-sm font-bold text-white">{v.place}</div>
                  <div className="text-[10px] text-[var(--ink-muted)]">Dist: {v.distanceKm} km</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono text-[var(--accent)] font-bold">{12 + i * 8} min</div>
                  <div className="text-[10px] text-[var(--ink-muted)]">Arrival</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
