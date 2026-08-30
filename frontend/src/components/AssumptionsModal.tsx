import React from 'react';
import { X, AlertCircle, Info, CheckCircle } from 'lucide-react';
import { ASSUMPTION_LOG } from '../data/mockData';

interface AssumptionsProps {
  onClose: () => void;
}

export const AssumptionsModal: React.FC<AssumptionsProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fade-in select-none">
      <div className="w-full max-w-3xl glass-panel rounded-[28px] border border-white/15 overflow-hidden shadow-2xl">
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center space-x-2">
            <Info className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-sm text-white">
              Missing-Data Diagnostic Engine — Assumption Log
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-[var(--ink-muted)] hover:text-white flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
            Flood-Guard AI detects incomplete or missing dam parameters automatically. Rather than guessing silently, the system logs every fallback assumption used, records it in this log, and triggers an uncertainty ensemble run across plausible ranges.
          </p>

          <div className="border border-white/10 rounded-[18px] overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/5 text-[var(--ink-muted)] font-semibold uppercase text-[10px]">
                <tr>
                  <th className="px-4 py-3">Parameter Field</th>
                  <th className="px-4 py-3">Input Status</th>
                  <th className="px-4 py-3">Fallback Applied</th>
                  <th className="px-4 py-3">Plausible Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white">
                {ASSUMPTION_LOG.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-semibold text-white">{row.field}</td>
                    <td className="px-4 py-3">
                      {row.status === 'missing' ? (
                        <span className="inline-flex items-center space-x-1 bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                          <AlertCircle className="w-3 h-3" />
                          <span>Missing (Fallback)</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1 bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                          <CheckCircle className="w-3 h-3" />
                          <span>Provided</span>
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-[var(--ink-muted)]">{row.fallbackUsed}</td>
                    <td className="px-4 py-3 font-mono text-[var(--accent)]">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="px-6 py-3.5 border-t border-white/10 bg-white/5 flex items-center justify-between text-[11px]">
          <span className="text-[var(--ink-muted)]">All fallbacks are transparently disclosed and exportable in the PDF audit report.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-[12px] bg-[var(--accent)] text-white font-bold transition-all hover:bg-[var(--accent-hover)]"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
