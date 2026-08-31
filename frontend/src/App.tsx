import { useState } from 'react';
import { Header } from './components/Header';
import { HomeLanding } from './components/HomeLanding';
import { DualViewLayout } from './components/DualViewLayout';
import { ExplainabilityModal } from './components/ExplainabilityModal';
import { ExportModal } from './components/ExportModal';

import {
  HERO_DAM,
  SATELLITE_VALIDATION_STATS,
} from './data/demoData';
import type { Dam, VillageRisk } from './types';
import {
  Sparkles,
} from 'lucide-react';

export function App() {
  const [activeRoute, setActiveRoute] = useState<string>('command-center');
  const [currentDam, setCurrentDam] = useState<Dam | null>(HERO_DAM);

  // Modals
  const [explainVillage, setExplainVillage] = useState<VillageRisk | null>(null);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);

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
        {/* 1. OVERVIEW / HOME LANDING PAGE */}
        {activeRoute === 'home' && (
          <HomeLanding
            onStartSimulation={handleStartSimulation}
            onViewArchitecture={() => setActiveRoute('validation')}
          />
        )}

        {/* 2. SIMULATION & RESULTS (COMMAND CENTER) */}
        {activeRoute === 'command-center' && (
          <DualViewLayout
            scenarioId={currentDam?.id ?? 'scenario-demo-1'}
            damId={currentDam?.id ?? HERO_DAM.id}
            damName={currentDam?.name ?? HERO_DAM.name}
            damLat={currentDam?.lat ?? HERO_DAM.lat}
            damLng={currentDam?.lng ?? HERO_DAM.lng}
            breachWidth={100}
            onExit={() => setActiveRoute('home')}
            onOpenExport={() => setShowExportModal(true)}
          />
        )}

        {/* 3. NEAR-REAL-TIME SATELLITE VALIDATION */}
        {activeRoute === 'validation' && (
          <div className="p-8 max-w-5xl mx-auto w-full space-y-6 overflow-y-auto">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold text-white">Near Real-Time Satellite Analysis</h2>
              <p className="text-xs text-[var(--ink-muted)]">Sentinel-2 / Landsat satellite-observed flood extent vs Hydrodynamic simulation extent.</p>
            </div>

            <div className="glass-panel p-6 rounded-[28px] border border-white/10 space-y-6">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-[18px]">
                <div className="flex-1 space-y-2">
                  <div className="text-sm font-bold text-white">Google Earth Engine Integration</div>
                  <div className="text-xs text-[var(--ink-muted)]">
                    Automatically fetches the latest Sentinel-2 SAR imagery (when available cloud-free) to detect actual standing water and compare it against the modeled SPH/Delft3D output.
                  </div>
                </div>
                <div className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold whitespace-nowrap">
                  ● ACTIVE CONNECTION
                </div>
              </div>

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
                <span>Return to Simulation →</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modals & Audit Overlays */}
      {explainVillage && (
        <ExplainabilityModal village={explainVillage as any} onClose={() => setExplainVillage(null)} />
      )}

      {showExportModal && (
        <ExportModal dam={HERO_DAM as any} onClose={() => setShowExportModal(false)} />
      )}
    </div>
  );
}

export default App;
