import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  AlertTriangle,
  Sparkles,
  HelpCircle,
  Clock,
  Layers,
  CheckCircle2,
  Navigation,
  Activity,
  Compass,
  Plus,
  Minus,
  Locate,
} from 'lucide-react';
import { Scene3DViewport } from './Scene3DViewport';
import type { Dam, VillageRisk, ModelMode } from '../types';
import {
  HERO_DAM,
  SECONDARY_DAM,
  VILLAGES_DEMO_LIST,
  DEFAULT_BREACH_PARAMS,
  ROAD_SEGMENTS_DEMO,
  SATELLITE_VALIDATION_STATS,
} from '../data/demoData';

interface CommandCenterProps {
  onOpenExplainability: (village: VillageRisk) => void;
  onOpenAssumptions: () => void;
  onNavigate: (route: string) => void;
}

export const CommandCenter: React.FC<CommandCenterProps> = ({
  onOpenExplainability,
  onNavigate,
}) => {
  // Dam & Scenario State
  const [selectedDam, setSelectedDam] = useState<Dam>(HERO_DAM);
  const [waterLevelPct, setWaterLevelPct] = useState(HERO_DAM.waterLevelPct);
  const [breachWidthM, setBreachWidthM] = useState(DEFAULT_BREACH_PARAMS.widthM);
  const [breachDepthM, setBreachDepthM] = useState(DEFAULT_BREACH_PARAMS.depthM);
  const [formationTimeMin, setFormationTimeMin] = useState(DEFAULT_BREACH_PARAMS.formationTimeMin);
  const [modelMode, setModelMode] = useState<ModelMode>('Hybrid');
  const [scenarioPreset, setScenarioPreset] = useState<'Conservative' | 'Likely' | 'Severe' | 'Custom'>('Severe');

  // Timeline & Playback State
  const [currentTimeMin, setCurrentTimeMin] = useState<number>(20);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speedMultiplier] = useState<1 | 2 | 5>(1);

  // Active Map Layer
  const [activeMapLayer, setActiveMapLayer] = useState<
    'extent' | 'depth' | 'velocity' | 'arrival' | 'probability' | 'uncertainty' | 'roads'
  >('extent');

  // Selected Village
  const [selectedVillage, setSelectedVillage] = useState<VillageRisk>(VILLAGES_DEMO_LIST[0]);
  const [showSatelliteOverlay] = useState<boolean>(false);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTimeMin((prev) => {
          if (prev >= 120) return 0;
          return prev + 5 * speedMultiplier;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, speedMultiplier]);

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setCurrentTimeMin(20);
    }, 1200);
  };

  const timelineSteps = [0, 10, 20, 30, 45, 60, 90, 120];

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] w-full bg-[#07090E] text-[#F4F6F8] overflow-y-auto select-none">
      {/* Upper Main 3-Column Layout: Left Controls + Hero Map + Right Insights */}
      <div className="flex flex-1 min-h-[580px] overflow-hidden relative border-b border-white/10">
        {/* LEFT PANEL: DAM & SCENARIO CONTROLS (18% Width) */}
        <aside className="w-72 bg-[#0B0E12] border-r border-white/10 flex flex-col z-30 text-xs overflow-y-auto shrink-0">
          <div className="p-3 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <span className="font-bold tracking-wide uppercase text-white text-[11px]">DAM & SCENARIO CONTROLS</span>
          </div>

          <div className="p-3 space-y-3.5">
            {/* Select Dam / Reservoir */}
            <div>
              <label className="text-[10px] font-semibold text-[var(--ink-muted)] uppercase block mb-1">
                Select Dam / Reservoir
              </label>
              <select
                value={selectedDam.id}
                onChange={(e) => {
                  const dam = e.target.value === 'konda-pochamma' ? HERO_DAM : SECONDARY_DAM;
                  setSelectedDam(dam);
                  setWaterLevelPct(dam.waterLevelPct);
                }}
                className="w-full bg-[#151A21] border border-white/10 rounded-[10px] p-2 text-xs font-semibold text-white focus:outline-none focus:border-blue-500"
              >
                <option value="konda-pochamma">Konda Pochamma Sagar Dam</option>
                <option value="tehri-dam">Tehri Dam (Bhagirathi River)</option>
              </select>
            </div>

            {/* Reservoir Conditions */}
            <div className="bg-[#151A21] p-2.5 rounded-[12px] border border-white/5 space-y-1.5">
              <div className="text-[10px] font-bold text-[var(--ink-muted)] uppercase">Reservoir Conditions</div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[var(--ink-muted)]">Water Level:</span>
                <span className="font-mono font-bold text-blue-400">{waterLevelPct}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={waterLevelPct}
                onChange={(e) => setWaterLevelPct(Number(e.target.value))}
                className="w-full h-1 bg-white/10 rounded appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] text-[var(--ink-muted)] font-mono">
                <span>Storage Volume:</span>
                <span className="text-white font-bold">{selectedDam.currentStorageMcm} MCM / {selectedDam.capacityMcm} MCM</span>
              </div>
              <div className="flex justify-between text-[10px] text-[var(--ink-muted)] font-mono">
                <span>Inflow (24h):</span>
                <span className="text-white font-bold">{selectedDam.inflowM3s} m³/s</span>
              </div>
              <div className="flex justify-between text-[10px] text-[var(--ink-muted)] font-mono">
                <span>Outflow (24h):</span>
                <span className="text-white font-bold">{selectedDam.outflowM3s} m³/s</span>
              </div>
            </div>

            {/* Breach Parameters */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-[var(--ink-muted)] uppercase block">
                Breach Parameters
              </span>

              <div className="flex justify-between items-center text-[10px]">
                <span className="text-[var(--ink-muted)]">Breach Width</span>
                <div className="flex items-center space-x-1">
                  <input
                    type="number"
                    value={breachWidthM}
                    onChange={(e) => setBreachWidthM(Number(e.target.value))}
                    className="w-14 bg-[#151A21] border border-white/10 rounded px-1.5 py-0.5 text-right text-white font-mono text-[10px]"
                  />
                  <span className="text-[var(--ink-muted)]">m</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px]">
                <span className="text-[var(--ink-muted)]">Breach Depth</span>
                <div className="flex items-center space-x-1">
                  <input
                    type="number"
                    value={breachDepthM}
                    onChange={(e) => setBreachDepthM(Number(e.target.value))}
                    className="w-14 bg-[#151A21] border border-white/10 rounded px-1.5 py-0.5 text-right text-white font-mono text-[10px]"
                  />
                  <span className="text-[var(--ink-muted)]">m</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px]">
                <span className="text-[var(--ink-muted)]">Breach Formation Time</span>
                <div className="flex items-center space-x-1">
                  <input
                    type="number"
                    value={formationTimeMin}
                    onChange={(e) => setFormationTimeMin(Number(e.target.value))}
                    className="w-14 bg-[#151A21] border border-white/10 rounded px-1.5 py-0.5 text-right text-white font-mono text-[10px]"
                  />
                  <span className="text-[var(--ink-muted)]">min</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px]">
                <span className="text-[var(--ink-muted)]">Breach Type</span>
                <select className="bg-[#151A21] border border-white/10 rounded px-1 py-0.5 text-white font-semibold text-[10px]">
                  <option>Instantaneous</option>
                  <option>Progressive</option>
                  <option>Overtopping</option>
                </select>
              </div>
            </div>

            {/* Scenario Selector */}
            <div>
              <span className="text-[10px] font-bold text-[var(--ink-muted)] uppercase block mb-1">
                Scenario Selector
              </span>
              <div className="grid grid-cols-3 gap-1 text-[10px]">
                {(['Conservative', 'Likely', 'Severe'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => {
                      setScenarioPreset(p);
                      if (p === 'Conservative') { setBreachWidthM(50); setWaterLevelPct(75); }
                      if (p === 'Likely') { setBreachWidthM(100); setWaterLevelPct(88); }
                      if (p === 'Severe') { setBreachWidthM(150); setWaterLevelPct(95); }
                    }}
                    className={`py-1 rounded border text-center transition-all ${
                      scenarioPreset === p
                        ? 'bg-blue-600 border-blue-500 text-white font-bold shadow'
                        : 'border-white/10 bg-white/5 text-[var(--ink-muted)] hover:text-white'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button className="w-full mt-1 py-1 rounded border border-white/10 bg-white/5 text-[var(--ink-muted)] text-[10px] hover:text-white">
                Custom Scenario
              </button>
            </div>

            {/* Large Blue Action Button */}
            <button
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className="w-full py-2.5 rounded-[12px] bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center space-x-2"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isSimulating ? 'SIMULATING DAM FAILURE...' : 'RUN SIMULATION'}</span>
            </button>

            {/* Model Mode & Status */}
            <div className="bg-[#151A21] p-2 rounded-[12px] border border-white/5 text-[10px] space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[var(--ink-muted)]">Model Mode</span>
                <select
                  value={modelMode}
                  onChange={(e) => setModelMode(e.target.value as any)}
                  className="bg-[#0B0E12] border border-white/10 rounded px-1.5 py-0.5 text-blue-400 font-bold"
                >
                  <option value="Hybrid">Hybrid (SPH + Delft3D)</option>
                  <option value="SPH">SPH Particles</option>
                  <option value="Delft3D">Delft3D Grid</option>
                </select>
              </div>

              <div className="flex justify-between items-center font-mono">
                <span className="text-[var(--ink-muted)]">Simulation Status:</span>
                <span className="text-emerald-400 font-bold flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Completed</span>
                </span>
              </div>
              <div className="flex justify-between font-mono text-[9px] text-[var(--ink-muted)]">
                <span>Time Taken:</span>
                <span>00:18:42</span>
              </div>

              <button
                onClick={() => onNavigate('scenarios')}
                className="w-full mt-1 py-1 rounded bg-white/5 hover:bg-white/10 text-[var(--ink-muted)] hover:text-white text-[9px] font-medium border border-white/10"
              >
                VIEW SCENARIO COMPARISON
              </button>
            </div>
          </div>
        </aside>

        {/* CENTER MAIN MAP: SATELLITE CANVAS VIEWPORT (55% Width) */}
        <main className="flex-1 relative h-full bg-[#07090E] shrink-0">
          {/* Top Layer Selector Toolbar Floating Over Map */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-1 bg-[#0B0E12]/90 backdrop-blur-md px-2 py-1 rounded-[14px] border border-white/15 text-[11px] shadow-2xl">
            {[
              { id: 'extent', label: 'Flood Extent', icon: Layers },
              { id: 'depth', label: 'Depth', icon: Activity },
              { id: 'velocity', label: 'Velocity', icon: Compass },
              { id: 'arrival', label: 'Arrival Time', icon: Clock },
              { id: 'probability', label: 'Probability', icon: Sparkles },
              { id: 'uncertainty', label: 'Uncertainty', icon: HelpCircle },
              { id: 'roads', label: 'Road Safety', icon: Navigation },
            ].map((layer) => {
              const IconComp = layer.icon;
              const isActive = activeMapLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveMapLayer(layer.id as any)}
                  className={`px-3 py-1 rounded-[10px] font-semibold transition-all flex items-center space-x-1.5 text-[11px] ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-[var(--ink-muted)] hover:text-white'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{layer.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Map Stack Control Buttons */}
          <div className="absolute top-3 right-4 z-20 flex flex-col space-y-1">
            <button className="w-8 h-8 rounded bg-[#0B0E12]/80 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center shadow">
              <Plus className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded bg-[#0B0E12]/80 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center shadow">
              <Minus className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded bg-[#0B0E12]/80 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center shadow">
              <Locate className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded bg-[#0B0E12]/80 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center shadow">
              <Layers className="w-4 h-4" />
            </button>
          </div>

          {/* 3D Satellite Map Canvas Viewport Component */}
          <Scene3DViewport
            selectedDam={selectedDam}
            villages={VILLAGES_DEMO_LIST as any}
            selectedVillage={selectedVillage as any}
            onSelectVillage={(v) => setSelectedVillage(v as any)}
            currentTimeStep={currentTimeMin}
            showSatelliteOverlay={showSatelliteOverlay}
          />

          {/* FLOOD DEPTH LEGEND BOX (Bottom Left of Map) */}
          <div className="absolute bottom-4 left-4 z-20 bg-[#0B0E12]/95 backdrop-blur-md px-3.5 py-3 rounded-[16px] border border-white/15 text-[10px] space-y-2 shadow-2xl w-48">
            <div className="font-bold text-white uppercase text-[9px] tracking-wider border-b border-white/10 pb-1">
              LEGEND - FLOOD DEPTH (m)
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2"><span className="w-3 h-3 bg-sky-300 rounded-xs" /> <span>0 - 0.5</span></div>
              <div className="flex items-center space-x-2"><span className="w-3 h-3 bg-sky-500 rounded-xs" /> <span>0.5 - 1.0</span></div>
              <div className="flex items-center space-x-2"><span className="w-3 h-3 bg-blue-600 rounded-xs" /> <span>1.0 - 2.0</span></div>
              <div className="flex items-center space-x-2"><span className="w-3 h-3 bg-blue-800 rounded-xs" /> <span>2.0 - 3.0</span></div>
              <div className="flex items-center space-x-2"><span className="w-3 h-3 bg-indigo-900 rounded-xs" /> <span>3.0 - 5.0</span></div>
              <div className="flex items-center space-x-2"><span className="w-3 h-3 bg-red-600 rounded-xs" /> <span>&gt; 5.0</span></div>
            </div>
            <div className="pt-1.5 border-t border-white/10 space-y-1 text-[9px] text-[var(--ink-muted)]">
              <div className="flex items-center space-x-1.5"><span className="w-2 h-2 rounded-full bg-white" /> <span>Village</span></div>
              <div className="flex items-center space-x-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> <span>Critical Infrastructure</span></div>
              <div className="flex items-center space-x-1.5"><span className="w-2 h-2 rounded-full bg-red-500" /> <span>Bridge</span></div>
              <div className="flex items-center space-x-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" /> <span>Shelter</span></div>
              <div className="flex items-center space-x-1.5"><span className="w-2 h-2 rounded-full bg-amber-400" /> <span>Unsafe Road</span></div>
            </div>
          </div>

          {/* Coordinates Overlay Bottom Right */}
          <div className="absolute bottom-4 right-4 z-20 bg-black/60 px-2 py-1 rounded text-[10px] font-mono text-[var(--ink-muted)]">
            17.3891° N, 78.6578° E
          </div>
        </main>

        {/* RIGHT PANEL: EMERGENCY INSIGHTS (22% Width) */}
        <aside className="w-80 bg-[#0B0E12] border-l border-white/10 flex flex-col z-30 text-xs overflow-y-auto shrink-0">
          {/* CRITICAL ALERT CARD */}
          <div className="p-3 bg-red-950/30 border-b border-red-500/20 space-y-2">
            <div className="flex items-center space-x-2 text-red-500 font-bold uppercase tracking-wider text-[11px]">
              <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
              <span>CRITICAL ALERT</span>
            </div>

            <div className="bg-[#151A21] p-3 rounded-[14px] border border-red-500/30 space-y-2">
              <h3 className="font-bold text-sm text-white">Village {selectedVillage.name}</h3>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="bg-black/30 p-2 rounded-[10px]">
                  <span className="text-[var(--ink-muted)] text-[9px] block">Flood arrival in</span>
                  <span className="font-mono font-extrabold text-red-500 text-lg">{selectedVillage.earliestArrivalMin}</span>
                  <span className="text-[10px] text-red-400 font-bold ml-1">min</span>
                </div>
                <div className="bg-black/30 p-2 rounded-[10px]">
                  <span className="text-[var(--ink-muted)] text-[9px] block">Expected Depth</span>
                  <span className="font-mono font-extrabold text-white text-lg">{selectedVillage.expectedDepthM}</span>
                  <span className="text-[10px] text-[var(--ink-muted)] font-bold ml-1">m</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px] pt-1">
                <div>
                  <span className="text-[var(--ink-muted)]">Flood Probability</span>
                  <div className="font-mono font-bold text-white text-xs">{selectedVillage.floodProbabilityPct}%</div>
                </div>
                <div className="text-right">
                  <span className="text-[var(--ink-muted)] block">Confidence</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[9px] border border-emerald-500/30">
                    {selectedVillage.confidence}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 space-y-3">
            {/* RECOMMENDED ACTION CARD */}
            <div className="bg-[#151A21] p-3 rounded-[14px] border border-white/5 space-y-2">
              <div className="flex items-center space-x-1 text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5" />
                <span>RECOMMENDED ACTION</span>
              </div>

              <div className="font-extrabold text-amber-400 text-xs">
                {selectedVillage.recommendedAction}
                <span className="text-white block text-[11px] font-normal">via <b className="text-amber-400">Route C</b></span>
              </div>

              <div className="text-[10px] text-[var(--ink-muted)] space-y-1 pt-1 border-t border-white/5">
                <div><b>Recommended Shelter:</b></div>
                <div className="text-white font-semibold">School Building, Bheemgal</div>
                <div className="flex justify-between font-mono pt-1 text-[9px]">
                  <span>Distance: <b>6.2 km</b></span>
                  <span>Est. Travel Time: <b>22 min</b></span>
                </div>
              </div>

              <button
                onClick={() => onOpenExplainability(selectedVillage)}
                className="w-full py-1.5 rounded-[8px] bg-white/5 hover:bg-white/10 text-white font-semibold text-[10px] border border-white/10 text-center"
              >
                VIEW ALL RECOMMENDATIONS
              </button>
            </div>

            {/* AFFECTED SUMMARY CARD */}
            <div className="bg-[#151A21] p-3 rounded-[14px] border border-white/5 space-y-2">
              <div className="text-[10px] font-bold text-[var(--ink-muted)] uppercase tracking-wider">
                AFFECTED SUMMARY
              </div>

              <div className="space-y-1 text-[11px]">
                <div className="flex justify-between"><span className="text-[var(--ink-muted)]">Villages at Risk:</span> <b className="text-white font-mono">12</b></div>
                <div className="flex justify-between"><span className="text-[var(--ink-muted)]">Population at Risk:</span> <b className="text-white font-mono">18,650</b></div>
                <div className="flex justify-between"><span className="text-[var(--ink-muted)]">Roads Likely to Close:</span> <b className="text-amber-400 font-mono">8</b></div>
                <div className="flex justify-between"><span className="text-[var(--ink-muted)]">Bridges at Risk:</span> <b className="text-red-400 font-mono">3</b></div>
                <div className="flex justify-between"><span className="text-[var(--ink-muted)]">Shelters Available:</span> <b className="text-emerald-400 font-mono">7</b></div>
              </div>

              <button
                onClick={() => onNavigate('reports')}
                className="w-full py-1.5 rounded-[8px] bg-white/5 hover:bg-white/10 text-white font-semibold text-[10px] border border-white/10 text-center"
              >
                VIEW DETAILED REPORT
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* FLOOD PROPAGATION TIMELINE SCRUBBER BAR */}
      <div className="bg-[#0B0E12] border-b border-white/10 px-6 py-2.5 flex items-center justify-between z-40 select-none">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 transition-all"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />}
          </button>

          <span className="text-xs font-bold uppercase tracking-wider text-white">FLOOD PROPAGATION TIMELINE</span>
        </div>

        <div className="flex-1 max-w-2xl mx-8">
          <input
            type="range"
            min="0"
            max="120"
            step="5"
            value={currentTimeMin}
            onChange={(e) => setCurrentTimeMin(Number(e.target.value))}
            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="flex justify-between text-[10px] text-[var(--ink-muted)] font-mono mt-1">
            {timelineSteps.map((step) => (
              <span
                key={step}
                onClick={() => setCurrentTimeMin(step)}
                className={`cursor-pointer ${
                  step === currentTimeMin ? 'text-blue-400 font-extrabold text-[11px]' : 'hover:text-white'
                }`}
              >
                {step} min
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-3 text-[10px] font-mono text-[var(--ink-muted)]">
          <span>Current Time: <b className="text-emerald-400 font-bold">{currentTimeMin}:00 min</b></span>
          <span>Total Duration: <b>120 min</b></span>
        </div>
      </div>

      {/* LOWER DASHBOARD GRID ROW (5 CARDS) */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-[#07090E]">
        {/* CARD 1: TIME TO FLOOD - SELECTED */}
        <div className="bg-[#111622] p-3.5 rounded-[16px] border border-white/10 space-y-2 flex flex-col justify-between">
          <div className="text-[10px] font-bold text-[var(--ink-muted)] uppercase tracking-wider">
            TIME TO FLOOD - SELECTED
          </div>
          <div className="space-y-1.5 text-xs">
            {VILLAGES_DEMO_LIST.map((v) => (
              <div key={v.id} className="flex justify-between items-center p-1 rounded hover:bg-white/5">
                <span className="text-white font-semibold">{v.name}</span>
                <span
                  className={`px-2 py-0.5 rounded font-mono font-bold text-[10px] ${
                    v.status === 'CRITICAL'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : v.status === 'WARNING'
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}
                >
                  {v.earliestArrivalMin} min
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CARD 2: ROAD SAFETY OVER TIME */}
        <div className="bg-[#111622] p-3.5 rounded-[16px] border border-white/10 space-y-2 flex flex-col justify-between">
          <div className="text-[10px] font-bold text-[var(--ink-muted)] uppercase tracking-wider">
            ROAD SAFETY OVER TIME
          </div>
          <div className="space-y-1 text-xs">
            <table className="w-full text-left">
              <thead className="text-[9px] text-[var(--ink-muted)] uppercase">
                <tr><th className="pb-1">Road / Bridge</th><th className="pb-1">Status</th><th className="pb-1 text-right">Floods In</th></tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[10px]">
                {ROAD_SEGMENTS_DEMO.map((r) => (
                  <tr key={r.id}>
                    <td className="py-1 font-medium text-white">{r.name}</td>
                    <td className="py-1">
                      <span className={`px-1.5 py-0.5 rounded font-bold ${r.status === 'CRITICAL' ? 'bg-red-500 text-white' : r.status === 'WARNING' ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                        {r.status === 'CRITICAL' ? 'Unsafe' : r.status}
                      </span>
                    </td>
                    <td className="py-1 text-right font-mono font-bold text-amber-400">{r.floodsInMin} min</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CARD 3: EVACUATION ROUTE PREVIEW */}
        <div className="bg-[#111622] p-3.5 rounded-[16px] border border-white/10 space-y-2 flex flex-col justify-between">
          <div className="text-[10px] font-bold text-[var(--ink-muted)] uppercase tracking-wider">
            EVACUATION ROUTE PREVIEW
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between text-[10px] text-[var(--ink-muted)]">
              <span>From: <b>Atmakur</b></span>
              <span>To: <b>School Building, Bheemgal</b></span>
            </div>
            <div className="bg-black/30 p-2 rounded-[10px] border border-white/5 space-y-0.5 text-[10px]">
              <div className="flex justify-between"><span>Recommended Route:</span> <b className="text-amber-400">Route C</b></div>
              <div className="flex justify-between font-mono"><span>Distance:</span> <b>6.2 km</b></div>
              <div className="flex justify-between font-mono"><span>Travel Time:</span> <b>22 min</b></div>
              <div className="flex justify-between"><span>Route Status:</span> <b className="text-emerald-400">Safe</b></div>
            </div>
          </div>
          <button onClick={() => onNavigate('evacuation')} className="w-full py-1 rounded bg-blue-600/20 text-blue-400 font-bold text-[10px] border border-blue-500/30">
            VIEW ON MAP
          </button>
        </div>

        {/* CARD 4: SATELLITE VALIDATION */}
        <div className="bg-[#111622] p-3.5 rounded-[16px] border border-white/10 space-y-2 flex flex-col justify-between">
          <div className="text-[10px] font-bold text-[var(--ink-muted)] uppercase tracking-wider">
            SATELLITE VALIDATION
          </div>
          <div className="text-center space-y-1">
            <div className="text-[10px] text-[var(--ink-muted)]">Model vs Satellite (IoU)</div>
            <div className="text-2xl font-extrabold font-mono text-amber-400">{SATELLITE_VALIDATION_STATS.iou}</div>
            <div className="text-[9px] text-emerald-400 font-bold">Good Agreement</div>
          </div>
          <div className="grid grid-cols-3 gap-1 text-[9px] font-mono text-center pt-1 border-t border-white/5">
            <div><span className="text-[var(--ink-muted)] block">Precision</span><b>{SATELLITE_VALIDATION_STATS.precision}</b></div>
            <div><span className="text-[var(--ink-muted)] block">Recall</span><b>{SATELLITE_VALIDATION_STATS.recall}</b></div>
            <div><span className="text-[var(--ink-muted)] block">F1 Score</span><b>{SATELLITE_VALIDATION_STATS.f1}</b></div>
          </div>
          <button onClick={() => onNavigate('validation')} className="w-full py-1 rounded bg-white/5 hover:bg-white/10 text-white font-semibold text-[10px] border border-white/10">
            VIEW VALIDATION MAP
          </button>
        </div>

        {/* CARD 5: MODEL COMPARISON */}
        <div className="bg-[#111622] p-3.5 rounded-[16px] border border-white/10 space-y-2 flex flex-col justify-between">
          <div className="text-[10px] font-bold text-[var(--ink-muted)] uppercase tracking-wider">
            MODEL COMPARISON
          </div>
          <table className="w-full text-left text-[10px]">
            <thead className="text-[9px] text-[var(--ink-muted)] uppercase border-b border-white/5">
              <tr><th>Metric</th><th className="text-right">SPH</th><th className="text-right">Delft3D</th></tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono">
              <tr><td className="py-0.5 text-[var(--ink-muted)]">Flood Extent (km²)</td><td className="text-right">24.3</td><td className="text-right">26.1</td></tr>
              <tr><td className="py-0.5 text-[var(--ink-muted)]">Max Depth (m)</td><td className="text-right">4.8</td><td className="text-right">4.5</td></tr>
              <tr><td className="py-0.5 text-[var(--ink-muted)]">Avg Velocity (m/s)</td><td className="text-right">2.1</td><td className="text-right">1.9</td></tr>
              <tr><td className="py-0.5 text-[var(--ink-muted)]">Arrival Time (min)</td><td className="text-right">31</td><td className="text-right">36</td></tr>
              <tr><td className="py-0.5 text-[var(--ink-muted)]">Run Time</td><td className="text-right">12 min</td><td className="text-right">6 min</td></tr>
            </tbody>
          </table>
          <button onClick={() => onNavigate('scenarios')} className="w-full py-1 rounded bg-white/5 hover:bg-white/10 text-white font-semibold text-[10px] border border-white/10">
            FULL COMPARISON
          </button>
        </div>
      </div>
    </div>
  );
};
