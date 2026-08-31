import { useState } from 'react';
import { Header } from './components/Header';
import { HomeLanding } from './components/HomeLanding';
import { DualViewLayout } from './components/DualViewLayout';
import { ExplainabilityModal } from './components/ExplainabilityModal';
import { AssumptionsModal } from './components/AssumptionsModal';
import { ExportModal } from './components/ExportModal';

import {
  HERO_DAM,
  VILLAGES_DEMO_LIST,
  ROAD_SEGMENTS_DEMO,
  SHELTERS_DEMO,
  DATA_READINESS,
  SENSITIVITY_DATA,
  SATELLITE_VALIDATION_STATS,
} from './data/demoData';
import type { Dam, VillageRisk } from './types';
import {
  Sparkles,
  Smartphone,
  Save,
} from 'lucide-react';

export function App() {
  const [activeRoute, setActiveRoute] = useState<string>('command-center');
  const [currentDam, setCurrentDam] = useState<Dam | null>(HERO_DAM);

  // Modals
  const [explainVillage, setExplainVillage] = useState<VillageRisk | null>(null);
  const [showAssumptionsModal, setShowAssumptionsModal] = useState<boolean>(false);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);

  // Field Mode State
  const [fieldObservationSaved, setFieldObservationSaved] = useState(false);

  // 5-Minute SIH Demo Flow Handler
  const handleTriggerDemoMode = () => {
    setCurrentDam(HERO_DAM);
    setActiveRoute('command-center');
    alert('SIH Live Demo Mode Activated!\n\n1. Command Center Loaded\n2. Konda Pochamma Sagar Dam Selected\n3. Severe Breach Scenario (100m width, 95% water level)\n4. Hydrodynamic Simulation Ready');
  };

  const handleStartSimulation = (dam?: Dam | null) => {
    const nextDam = dam ?? currentDam ?? HERO_DAM;
    setCurrentDam(nextDam);
    setActiveRoute('command-center');
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-[#F4F6F8] flex flex-col font-sans select-none">
      {/* Global Top Header Bar (renders on all views except home landing) */}
      {activeRoute !== 'home' && currentDam && (
        <Header
          currentDam={currentDam}
          selectedScenarioName="Severe_Breach_03 (100m Width)"
          modelMode="Hybrid"
          activeRoute={activeRoute}
          onNavigate={setActiveRoute}
          onTriggerDemoMode={handleTriggerDemoMode}
        />
      )}

      {/* Route Router Body */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 0. HOME LANDING PAGE */}
        {activeRoute === 'home' && (
          <HomeLanding
            onStartSimulation={handleStartSimulation}
            onViewArchitecture={() => setActiveRoute('data-quality')}
          />
        )}

        {/* 1. COMMAND CENTER (Default 2D view with explicit 2D / 3D / Compare mode switcher) */}
        {activeRoute === 'command-center' && (
          <DualViewLayout
            scenarioId={currentDam?.id ?? 'scenario-demo-1'}
            damId={currentDam?.id ?? HERO_DAM.id}
            damName={currentDam?.name ?? HERO_DAM.name}
            damLat={currentDam?.lat ?? HERO_DAM.lat}
            damLng={currentDam?.lng ?? HERO_DAM.lng}
            breachWidth={100}
            onExit={() => setActiveRoute('home')}
          />
        )}

        {/* 2. SCENARIOS PAGE */}
        {activeRoute === 'scenarios' && (
          <div className="p-8 max-w-5xl mx-auto w-full space-y-6 overflow-y-auto">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white">Multi-Scenario Builder & Ensemble Generator</h2>
                <p className="text-xs text-[var(--ink-muted)]">Generate conservative, likely, and severe breach variants to handle input uncertainty.</p>
              </div>
              <button
                onClick={() => setShowAssumptionsModal(true)}
                className="px-4 py-2 rounded-[14px] bg-[var(--accent-dim)] text-[var(--accent)] border border-[var(--accent)]/30 text-xs font-bold"
              >
                View Assumption Log →
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { title: 'Conservative Scenario', breach: '50 m', area: '12 km²', villages: '3', color: 'border-sky-500/30' },
                { title: 'Likely Breach Scenario', breach: '100 m', area: '25 km²', villages: '7', color: 'border-[var(--accent)] bg-[var(--accent-dim)]' },
                { title: 'Severe Breach Scenario', breach: '150 m', area: '41 km²', villages: '12', color: 'border-red-500/40 bg-red-950/10' },
              ].map((scen, idx) => (
                <div key={idx} className={`glass-card p-5 rounded-[24px] border ${scen.color} space-y-3`}>
                  <h3 className="font-bold text-sm text-white">{scen.title}</h3>
                  <div className="space-y-1 text-xs text-[var(--ink-muted)]">
                    <div className="flex justify-between"><span>Breach Width:</span> <b className="text-white font-mono">{scen.breach}</b></div>
                    <div className="flex justify-between"><span>Inundation Area:</span> <b className="text-white font-mono">{scen.area}</b></div>
                    <div className="flex justify-between"><span>Affected Villages:</span> <b className="text-white font-mono">{scen.villages}</b></div>
                  </div>
                  <button
                    onClick={() => setActiveRoute('command-center')}
                    className="w-full mt-2 py-2 rounded-[12px] bg-white/10 hover:bg-white/20 text-white font-bold text-xs"
                  >
                    Simulate Scenario →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. SIMULATION STAGE PAGE */}
        {activeRoute === 'simulation' && (
          <div className="p-8 max-w-4xl mx-auto w-full space-y-6">
            <div className="glass-panel p-6 rounded-[28px] border border-white/10 space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold text-white">Hydrodynamic Model Pipeline Execution</h2>
                  <p className="text-xs text-[var(--ink-muted)]">Hybrid SPH (Local breach particles) + Delft3D (Regional floodplain propagation)</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                  ● SIMULATION COMPLETED
                </span>
              </div>

              {/* Progress Pipeline */}
              <div className="space-y-3">
                {[
                  { step: '1. Input Data & Reservoir Head Validation', status: '✓ Complete' },
                  { step: '2. SRTM 30m Elevation Mesh Preparation', status: '✓ Complete' },
                  { step: '3. Multi-Scenario Ensemble Generation', status: '✓ Complete' },
                  { step: '4. SPH Breach-Zone Particle Hydrodynamics', status: '✓ Complete (Surrogate Mode)' },
                  { step: '5. Delft3D Regional Floodplain Propagation', status: '✓ Complete (Surrogate Mode)' },
                  { step: '6. Uncertainty & Confidence Mapping', status: '✓ Complete' },
                  { step: '7. Emergency Decision & Route Routing', status: '✓ Complete' },
                ].map((s, idx) => (
                  <div key={idx} className="bg-white/5 px-4 py-2.5 rounded-[14px] flex justify-between items-center text-xs">
                    <span className="font-semibold text-white">{s.step}</span>
                    <span className="text-emerald-400 font-bold">{s.status}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setActiveRoute('command-center')}
                className="w-full py-3 rounded-[14px] bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold text-xs"
              >
                View Output in Command Center →
              </button>
            </div>
          </div>
        )}

        {/* 4. ANALYSIS (TIME-TO-FLOOD & UNCERTAINTY) */}
        {activeRoute === 'analysis' && (
          <div className="p-8 max-w-6xl mx-auto w-full space-y-6 overflow-y-auto">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white">Time-to-Flood & Uncertainty Analysis</h2>
                <p className="text-xs text-[var(--ink-muted)]">Earliest, median, and latest flood arrival times per village with Last Safe Departure countdowns.</p>
              </div>
            </div>

            {/* Time to Flood Table */}
            <div className="glass-panel rounded-[24px] border border-white/10 overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-white/5 text-[var(--ink-muted)] font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="px-4 py-3">Village</th>
                    <th className="px-4 py-3">Earliest Arrival</th>
                    <th className="px-4 py-3">Median Arrival</th>
                    <th className="px-4 py-3">Max Depth</th>
                    <th className="px-4 py-3">Probability</th>
                    <th className="px-4 py-3">Last Safe Departure</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white">
                  {VILLAGES_DEMO_LIST.map((v) => (
                    <tr key={v.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-bold">{v.name}</td>
                      <td className="px-4 py-3 text-amber-400 font-mono font-bold">{v.earliestArrivalMin} min</td>
                      <td className="px-4 py-3 font-mono">{v.medianArrivalMin} min</td>
                      <td className="px-4 py-3 font-mono text-red-400 font-bold">{v.expectedDepthM} m</td>
                      <td className="px-4 py-3 font-mono">{v.floodProbabilityPct}%</td>
                      <td className="px-4 py-3 font-mono text-[var(--accent)] font-bold">{v.lastSafeDepartureMin} MIN COUNTDOWN</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => setExplainVillage(v)}
                          className="text-[var(--accent)] hover:underline font-semibold"
                        >
                          Explain Why?
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 5. EVACUATION PAGE */}
        {activeRoute === 'evacuation' && (
          <div className="p-8 max-w-6xl mx-auto w-full space-y-6 overflow-y-auto">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold text-white">Dynamic Road Safety & Evacuation Routing</h2>
              <p className="text-xs text-[var(--ink-muted)]">Time-aware road closure status and shelter reachability logic.</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Dynamic Road Safety Table */}
              <div className="glass-panel p-5 rounded-[24px] border border-white/10 space-y-4">
                <h3 className="font-bold text-sm text-white">Dynamic Road & Bridge Safety Status</h3>
                <div className="space-y-2">
                  {ROAD_SEGMENTS_DEMO.map((road) => (
                    <div key={road.id} className="bg-white/5 p-3 rounded-[14px] flex justify-between items-center text-xs">
                      <div>
                        <div className="font-bold text-white">{road.name}</div>
                        <div className="text-[10px] text-[var(--ink-muted)]">{road.type}</div>
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-[999px] font-bold text-[10px] ${
                          road.status === 'CRITICAL'
                            ? 'bg-red-500 text-white'
                            : road.status === 'WARNING'
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        }`}
                      >
                        {road.status === 'CRITICAL' ? `UNSAFE (Floods in ${road.floodsInMin}m)` : road.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shelters Management */}
              <div className="glass-panel p-5 rounded-[24px] border border-white/10 space-y-4">
                <h3 className="font-bold text-sm text-white">Shelter Availability & Elevation</h3>
                <div className="space-y-2">
                  {SHELTERS_DEMO.map((s) => (
                    <div key={s.id} className="bg-white/5 p-3 rounded-[14px] space-y-1 text-xs">
                      <div className="flex justify-between font-bold text-white">
                        <span>{s.name}</span>
                        <span className={s.status === 'SAFE' ? 'text-emerald-400' : 'text-red-400'}>{s.status}</span>
                      </div>
                      <div className="flex justify-between text-[10px] text-[var(--ink-muted)] font-mono">
                        <span>Occupancy: {s.currentOccupancy} / {s.capacity}</span>
                        <span>Elevation: {s.elevationM} m</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6. VALIDATION PAGE */}
        {activeRoute === 'validation' && (
          <div className="p-8 max-w-5xl mx-auto w-full space-y-6 overflow-y-auto">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold text-white">Google Earth Engine Satellite Validation</h2>
              <p className="text-xs text-[var(--ink-muted)]">Sentinel-2 / Landsat satellite-observed flood extent vs Hydrodynamic simulation extent.</p>
            </div>

            <div className="glass-panel p-6 rounded-[28px] border border-white/10 space-y-6">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-white/5 p-4 rounded-[18px] border border-white/5">
                  <div className="text-[10px] text-[var(--ink-muted)] uppercase">IoU Agreement</div>
                  <div className="text-2xl font-bold font-mono text-purple-400">{SATELLITE_VALIDATION_STATS.iou}</div>
                </div>
                <div className="bg-white/5 p-4 rounded-[18px] border border-white/5">
                  <div className="text-[10px] text-[var(--ink-muted)] uppercase">Precision</div>
                  <div className="text-2xl font-bold font-mono text-sky-400">{SATELLITE_VALIDATION_STATS.precision}</div>
                </div>
                <div className="bg-white/5 p-4 rounded-[18px] border border-white/5">
                  <div className="text-[10px] text-[var(--ink-muted)] uppercase">Recall</div>
                  <div className="text-2xl font-bold font-mono text-amber-400">{SATELLITE_VALIDATION_STATS.recall}</div>
                </div>
                <div className="bg-white/5 p-4 rounded-[18px] border border-white/5">
                  <div className="text-[10px] text-[var(--ink-muted)] uppercase">F1 Score</div>
                  <div className="text-2xl font-bold font-mono text-emerald-400">{SATELLITE_VALIDATION_STATS.f1}</div>
                </div>
              </div>

              <button
                onClick={() => setActiveRoute('command-center')}
                className="w-full py-3 rounded-[14px] bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 flex items-center justify-center space-x-1.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Inspect Difference Heatmap on 3D Command Map →</span>
              </button>
            </div>
          </div>
        )}

        {/* 7. FIELD MODE */}
        {activeRoute === 'field' && (
          <div className="p-8 max-w-md mx-auto w-full space-y-5">
            <div className="glass-panel p-6 rounded-[28px] border border-white/10 space-y-4">
              <div className="flex items-center space-x-2 text-[var(--accent)] font-bold text-sm border-b border-white/10 pb-3">
                <Smartphone className="w-5 h-5" />
                <span>FIELD OBSERVATION LOGGER (OFFLINE PWA)</span>
              </div>

              <div className="space-y-2 text-xs">
                <label className="text-[var(--ink-muted)] block">Report Hazard Type:</label>
                <div className="grid grid-cols-2 gap-2">
                  {['FLOOD OBSERVED', 'ROAD BLOCKED', 'BRIDGE BLOCKED', 'SHELTER FULL'].map((btn, idx) => (
                    <button key={idx} className="p-2.5 rounded-[12px] bg-white/5 border border-white/10 hover:border-[var(--accent)] text-white text-[11px] font-bold text-center">
                      {btn}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs space-y-1">
                <label className="text-[var(--ink-muted)] block">Observed Water Depth (m):</label>
                <input type="number" defaultValue={3.5} className="w-full bg-[#151A21] border border-white/10 rounded-lg p-2 text-white font-mono" />
              </div>

              <div className="text-[10px] text-emerald-400 bg-emerald-500/10 p-2 rounded-lg font-mono">
                GPS Position Acquired: 17.7612° N, 78.7420° E
              </div>

              <button
                onClick={() => {
                  setFieldObservationSaved(true);
                  setTimeout(() => setFieldObservationSaved(false), 2000);
                }}
                className="w-full py-3 rounded-[14px] bg-[var(--accent)] text-white font-bold text-xs flex items-center justify-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>{fieldObservationSaved ? 'OBSERVATION SAVED LOCALLY (OFFLINE)' : 'SAVE OBSERVATION'}</span>
              </button>
            </div>
          </div>
        )}

        {/* 8. REPORTS PAGE */}
        {activeRoute === 'reports' && (
          <div className="p-8 max-w-4xl mx-auto w-full space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold text-white">HADR Emergency Report Center</h2>
              <p className="text-xs text-[var(--ink-muted)]">Generate export packages for district authorities, GIS layers, and KML maps.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'PDF HADR Emergency Plan', type: 'PDF Report' },
                { title: 'GIS Vector Shapefile (.shp)', type: 'SHP Package' },
                { title: 'Google Earth 3D Polyline (.kml)', type: 'KML Map' },
                { title: 'Raw Inundation Vector (.geojson)', type: 'GeoJSON' },
              ].map((rep, idx) => (
                <div key={idx} className="glass-card p-4 rounded-[20px] border border-white/10 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-xs text-white">{rep.title}</h4>
                    <span className="text-[10px] text-[var(--ink-muted)]">{rep.type}</span>
                  </div>
                  <button
                    onClick={() => setShowExportModal(true)}
                    className="px-3 py-1.5 rounded-[12px] bg-[var(--accent)] text-white text-xs font-bold"
                  >
                    Export
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 9. DATA QUALITY PAGE */}
        {activeRoute === 'data-quality' && (
          <div className="p-8 max-w-5xl mx-auto w-full space-y-6 overflow-y-auto">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold text-white">Data Readiness & Sensitivity Analysis</h2>
              <p className="text-xs text-[var(--ink-muted)]">Inspect input data completeness and parameter sensitivity tornado charts.</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Data Readiness */}
              <div className="glass-panel p-5 rounded-[24px] border border-white/10 space-y-3">
                <h3 className="font-bold text-sm text-white">Input Data Readiness</h3>
                {DATA_READINESS.map((item, idx) => (
                  <div key={idx} className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[var(--ink-muted)]">{item.field}</span>
                      <span className="font-mono font-bold text-white">{item.completenessPct}%</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[var(--accent)] h-full" style={{ width: `${item.completenessPct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Sensitivity Analysis */}
              <div className="glass-panel p-5 rounded-[24px] border border-white/10 space-y-3">
                <h3 className="font-bold text-sm text-white">Parameter Sensitivity (Tornado Impact)</h3>
                {SENSITIVITY_DATA.map((item, idx) => (
                  <div key={idx} className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[var(--ink-muted)]">{item.parameter}</span>
                      <span className="font-mono font-bold text-amber-400">{item.impactScore} / 100</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full" style={{ width: `${item.impactScore}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modals & Audit Overlays */}
      {explainVillage && (
        <ExplainabilityModal village={explainVillage as any} onClose={() => setExplainVillage(null)} />
      )}

      {showAssumptionsModal && (
        <AssumptionsModal onClose={() => setShowAssumptionsModal(false)} />
      )}

      {showExportModal && (
        <ExportModal dam={HERO_DAM as any} onClose={() => setShowExportModal(false)} />
      )}
    </div>
  );
}

export default App;
