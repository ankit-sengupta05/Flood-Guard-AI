import React from 'react';
import {
  Shield,
  Play,
  Layers,
  Cpu,
  Sparkles,
  Navigation,
  ArrowRight,
} from 'lucide-react';

interface HomeProps {
  onStartSimulation: () => void;
  onExploreDemo: () => void;
  onViewArchitecture: () => void;
}

export const HomeLanding: React.FC<HomeProps> = ({
  onStartSimulation,
  onExploreDemo,
  onViewArchitecture,
}) => {
  return (
    <div className="min-h-screen bg-[#07090E] text-[#F4F6F8] flex flex-col justify-between overflow-y-auto selection:bg-[var(--accent)] selection:text-white">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/20 via-[#07090E] to-[#07090E] pointer-events-none" />

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-12 relative z-10 text-center flex-1 flex flex-col justify-center">
        {/* Brand Tag */}
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-[999px] text-xs font-semibold text-[var(--accent)] mb-8 mx-auto shadow-lg shadow-[#FF6A3D]/10">
          <Shield className="w-4 h-4 text-[var(--accent)]" />
          <span>Smart India Hackathon 2026 — Problem Statement SIH26161 (NTRO)</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          FLOOD-GUARD AI
        </h1>
        <p className="text-xl md:text-3xl font-bold text-[var(--accent)] mb-6 uppercase tracking-wider">
          FROM FLOOD PREDICTION TO INTELLIGENT DISASTER DECISIONS
        </p>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-[var(--ink-muted)] mb-10 leading-relaxed">
          An uncertainty-aware Dam-Break Digital Twin for predictive flood modelling, hydrodynamic SPH & Delft3D simulation, Google Earth Engine satellite validation, and time-aware emergency evacuation planning.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={onStartSimulation}
            className="px-8 py-4 rounded-[14px] bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold text-sm shadow-xl shadow-[#FF6A3D]/30 transition-all flex items-center space-x-2 transform hover:-translate-y-0.5"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>START SIMULATION</span>
          </button>

          <button
            onClick={onExploreDemo}
            className="px-8 py-4 rounded-[14px] bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/15 transition-all flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>EXPLORE SIH DEMO (5-MIN)</span>
          </button>

          <button
            onClick={onViewArchitecture}
            className="px-8 py-4 rounded-[14px] bg-white/5 hover:bg-white/10 text-[var(--ink-muted)] hover:text-white font-semibold text-sm border border-white/10 transition-all"
          >
            <span>VIEW ARCHITECTURE</span>
          </button>
        </div>

        {/* 4 Major Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-16">
          <div className="bg-[#111622] p-6 rounded-[24px] border border-white/10 hover:border-[var(--accent)]/50 transition-all">
            <div className="w-10 h-10 rounded-[14px] bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white mb-2">HYDRODYNAMIC MODELLING</h3>
            <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
              SPH near-field breach particles coupled with Delft3D regional floodplain propagation.
            </p>
          </div>

          <div className="bg-[#111622] p-6 rounded-[24px] border border-white/10 hover:border-[var(--accent)]/50 transition-all">
            <div className="w-10 h-10 rounded-[14px] bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white mb-2">UNCERTAINTY ENGINE</h3>
            <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
              Ensemble runs across plausible breach parameter gaps to output probability & confidence maps.
            </p>
          </div>

          <div className="bg-[#111622] p-6 rounded-[24px] border border-white/10 hover:border-[var(--accent)]/50 transition-all">
            <div className="w-10 h-10 rounded-[14px] bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white mb-2">SATELLITE VALIDATION</h3>
            <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
              Google Earth Engine Sentinel-2 / Landsat flood extraction compared against simulated extent (IoU: 0.72).
            </p>
          </div>

          <div className="bg-[#111622] p-6 rounded-[24px] border border-white/10 hover:border-[var(--accent)]/50 transition-all">
            <div className="w-10 h-10 rounded-[14px] bg-[var(--accent-dim)] text-[var(--accent)] flex items-center justify-center mb-4">
              <Navigation className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white mb-2">EMERGENCY RESPONSE</h3>
            <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
              Ranked risk priority lists, time-aware road closure status, and last safe departure countdowns.
            </p>
          </div>
        </div>

        {/* Simplified Workflow Diagram */}
        <div className="bg-[#111622] p-8 rounded-[28px] border border-white/10 max-w-4xl mx-auto w-full">
          <h4 className="text-xs uppercase font-bold text-[var(--accent)] tracking-widest mb-6">
            SIMPLIFIED PRODUCT WORKFLOW
          </h4>
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-white">
            <div className="bg-white/5 px-4 py-2.5 rounded-[14px] border border-white/10 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>DAM BREAK</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[var(--ink-muted)] hidden sm:block" />

            <div className="bg-white/5 px-4 py-2.5 rounded-[14px] border border-white/10 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>SIMULATE</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[var(--ink-muted)] hidden sm:block" />

            <div className="bg-white/5 px-4 py-2.5 rounded-[14px] border border-white/10 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>PREDICT</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[var(--ink-muted)] hidden sm:block" />

            <div className="bg-white/5 px-4 py-2.5 rounded-[14px] border border-white/10 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span>VALIDATE</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[var(--ink-muted)] hidden sm:block" />

            <div className="bg-[var(--accent)] px-4 py-2.5 rounded-[14px] text-white shadow-lg shadow-[#FF6A3D]/20 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>RESPOND</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-white/10 bg-[#07090E] text-center text-xs text-[var(--ink-muted)] z-10">
        <div>FLOOD-GUARD AI — Developed for Smart India Hackathon 2026 | NTRO Problem Statement 26161</div>
      </footer>
    </div>
  );
};
