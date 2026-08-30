import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Sparkles,
  HelpCircle,
  Clock,
  Layers,
  Navigation,
  Activity,
  Compass,
  Plus,
  Minus,
  Locate,
} from 'lucide-react';
import { Scene3DViewport } from './Scene3DViewport';
import type { Dam, VillageRisk } from '../types';
import {
  HERO_DAM,
  VILLAGES_DEMO_LIST,
  ROAD_SEGMENTS_DEMO,
  SATELLITE_VALIDATION_STATS,
} from '../data/demoData';

interface CommandCenterProps {
  initialDam?: Dam;
  onDamChange?: (dam: Dam) => void;
  onOpenExplainability: (village: VillageRisk) => void;
  onOpenAssumptions: () => void;
  onNavigate: (route: string) => void;
}

const API_URL = import.meta.env.VITE_API_URL?.trim().replace(/\/$/, '') || (['localhost', '127.0.0.1'].includes(window.location.hostname) ? 'http://127.0.0.1:8000' : '');

export const CommandCenter: React.FC<CommandCenterProps> = ({
  initialDam,
  onDamChange,
  onNavigate,
}) => {
  const [, setAvailableDams] = useState<Dam[]>([]);
  // Dam & Scenario State
  const [selectedDam, setSelectedDam] = useState<Dam>(initialDam ?? HERO_DAM);
  const [, setWaterLevelPct] = useState(HERO_DAM.waterLevelPct);

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

  useEffect(() => {
    if (initialDam) {
      setSelectedDam(initialDam);
      setWaterLevelPct(initialDam.waterLevelPct);
    }
  }, [initialDam]);

  useEffect(() => {
    if (!API_URL) return;
    fetch(`${API_URL}/dams?page=1&page_size=100`)
      .then((response) => {
        if (!response.ok) throw new Error('Dam registry unavailable');
        return response.json() as Promise<{ items: Array<Record<string, unknown>> }>;
      })
      .then((payload) => {
        const registry: Dam[] = payload.items.map((record) => ({
          id: String(record.dam_id ?? ''),
          name: String(record.name ?? ''),
          river: String(record.river ?? ''),
          state: String(record.state ?? ''),
          district: String(record.district ?? ''),
          lat: Number(record.lat ?? 0),
          lng: Number(record.lng ?? 0),
          heightM: Number(record.height_m ?? 0),
          capacityMcm: Number(record.reservoir_capacity_mcm ?? 0),
          currentStorageMcm: Number(record.current_storage_mcm ?? 0),
          waterLevelPct: Number(record.water_level_pct ?? 0),
          inflowM3s: Number(record.inflow_m3s ?? 0),
          outflowM3s: Number(record.outflow_m3s ?? 0),
          status: String(record.status ?? 'no_active_scenario'),
          modelMode: 'surrogate',
        }));
        if (registry.length > 0) {
          setAvailableDams(registry);
          const currentExists = registry.some((dam) => dam.id === selectedDam.id);
          if (!currentExists) {
            const nextDam = registry[0];
            setSelectedDam(nextDam);
            setWaterLevelPct(nextDam.waterLevelPct);
            onDamChange?.(nextDam);
          }
        }
      })
      .catch(() => {
        // Ignore registry fallback while the API reconnects; the selected dam remains authoritative.
      });
  }, [onDamChange, selectedDam.id]);

  useEffect(() => {
    onDamChange?.(selectedDam);
  }, [onDamChange, selectedDam]);

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

  const timelineSteps = [0, 10, 20, 30, 45, 60, 90, 120];

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] w-full bg-[#07090E] text-[#F4F6F8] overflow-hidden select-none">
      <div className="flex flex-1 min-h-[580px] overflow-hidden relative border-b border-white/10">
        <main className="flex-1 relative h-full w-full bg-[#07090E] shrink-0 overflow-hidden">
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
