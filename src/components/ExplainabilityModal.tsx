import React from 'react';
import { X, HelpCircle, ShieldCheck, Cpu, AlertTriangle, Sparkles, FileText } from 'lucide-react';
import type { Village } from '../data/mockData';

interface ExplainModalProps {
  village: Village | null;
  onClose: () => void;
}

export const ExplainabilityModal: React.FC<ExplainModalProps> = ({ village, onClose }) => {
  if (!village) return null;

  const { explainability } = village;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fade-in select-none">
      <div className="w-full max-w-2xl glass-panel rounded-[28px] border border-white/15 overflow-hidden shadow-2xl">
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="font-bold text-sm text-white">
              Explainability Audit Trail — {village.name} (Rank #{village.rank})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-[var(--ink-muted)] hover:text-white flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5 text-xs">
          <div className="bg-[var(--accent-dim)] border border-[var(--accent)]/30 p-3.5 rounded-[16px]">
            <div className="font-bold text-[var(--accent)] text-xs mb-1">Recommendation Audit Summary:</div>
            <p className="text-[var(--ink)] leading-relaxed">{village.actionStatement}</p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/5 p-3 rounded-[16px] border border-white/5">
              <div className="text-[10px] text-[var(--ink-muted)] uppercase mb-1">Model Execution Mode</div>
              <div className="font-bold text-white flex items-center space-x-1">
                <Cpu className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>SURROGATE MODE</span>
              </div>
            </div>

            <div className="bg-white/5 p-3 rounded-[16px] border border-white/5">
              <div className="text-[10px] text-[var(--ink-muted)] uppercase mb-1">Simulation Confidence</div>
              <div className="font-bold text-emerald-400 font-mono text-sm">
                {explainability.confidencePct}% High
              </div>
            </div>

            <div className="bg-white/5 p-3 rounded-[16px] border border-white/5">
              <div className="text-[10px] text-[var(--ink-muted)] uppercase mb-1">Satellite IoU Agreement</div>
              <div className="font-bold text-purple-400 font-mono text-sm flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{explainability.satelliteAgreementPct}%</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2 flex items-center space-x-1.5">
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Hydrological & Geospatial Inputs Used</span>
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {explainability.inputsUsed.map((input, idx) => (
                <div key={idx} className="bg-white/5 px-3 py-2 rounded-[12px] text-[11px] text-[var(--ink-muted)] flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  <span>{input}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2 flex items-center space-x-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Missing-Data Fallback Assumptions Applied</span>
            </h4>
            <div className="space-y-1.5">
              {explainability.assumptionsApplied.map((ass, idx) => (
                <div key={idx} className="bg-amber-500/10 border border-amber-500/20 px-3 py-2 rounded-[12px] text-[11px] text-amber-200">
                  {ass}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-3.5 border-t border-white/10 bg-white/5 flex items-center justify-between text-[11px] text-[var(--ink-muted)]">
          <div className="flex items-center space-x-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Audited & Signed by Flood-Guard Emergency Engine</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-[12px] bg-white/10 hover:bg-white/20 text-white font-semibold transition-all"
          >
            Close Audit View
          </button>
        </div>
      </div>
    </div>
  );
};
