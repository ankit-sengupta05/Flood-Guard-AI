import React, { useState } from 'react';
import { AlertOctagon, Navigation, HelpCircle, Users, Clock } from 'lucide-react';
import type { Village } from '../data/mockData';

interface PriorityPanelProps {
  villages: Village[];
  selectedVillage: Village | null;
  onSelectVillage: (village: Village) => void;
  onOpenExplainability: (village: Village) => void;
}

export const EmergencyPriorityPanel: React.FC<PriorityPanelProps> = ({
  villages,
  selectedVillage,
  onSelectVillage,
  onOpenExplainability,
}) => {
  const [activeTab, setActiveTab] = useState<'priority' | 'evacuation'>('priority');

  return (
    <div className="w-96 h-full glass-panel border-l border-white/10 flex flex-col z-30 select-none">
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AlertOctagon className="w-5 h-5 text-[var(--accent)]" />
          <span className="font-bold text-sm tracking-wide text-white">Emergency Decision Support</span>
        </div>
      </div>

      <div className="flex border-b border-white/10">
        <button
          onClick={() => setActiveTab('priority')}
          className={`flex-1 py-2.5 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all ${
            activeTab === 'priority'
              ? 'text-[var(--accent)] border-b-2 border-[var(--accent)] bg-[var(--accent-dim)]'
              : 'text-[var(--ink-muted)] hover:text-white'
          }`}
        >
          <span>Priority List</span>
          <span className="text-[9px] bg-[var(--accent)] text-white px-1.5 py-0.2 rounded-full font-mono">
            {villages.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('evacuation')}
          className={`flex-1 py-2.5 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all ${
            activeTab === 'evacuation'
              ? 'text-[var(--accent)] border-b-2 border-[var(--accent)] bg-[var(--accent-dim)]'
              : 'text-[var(--ink-muted)] hover:text-white'
          }`}
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Evacuation Plan</span>
        </button>
      </div>

      <div className="flex-1 p-3 overflow-y-auto space-y-3">
        {villages.map((v) => {
          const isSelected = selectedVillage?.id === v.id;
          return (
            <div
              key={v.id}
              onClick={() => onSelectVillage(v)}
              className={`glass-card p-3.5 rounded-[20px] cursor-pointer transition-all border ${
                isSelected
                  ? 'border-[var(--accent)] bg-[var(--surface-raised)] shadow-lg shadow-[#FF6A3D]/20 ring-1 ring-[var(--accent)]/50'
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-white/10 text-white font-mono font-bold text-xs flex items-center justify-center">
                    #{v.rank}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white">{v.name}</h4>
                    <div className="flex items-center space-x-2 text-[10px] text-[var(--ink-muted)]">
                      <span className="flex items-center space-x-1">
                        <Users className="w-3 h-3 text-sky-400" />
                        <span>{v.population.toLocaleString()} pop</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span>t = {v.arrivalTimeMin}m arrival</span>
                      </span>
                    </div>
                  </div>
                </div>

                <span
                  className={`px-2.5 py-1 rounded-[999px] text-[10px] font-bold tracking-wider uppercase ${
                    v.priority === 'high'
                      ? 'bg-[var(--accent)] text-white shadow-md shadow-[#FF6A3D]/30'
                      : v.priority === 'medium'
                      ? 'border border-[var(--ink-muted)] text-[var(--ink)]'
                      : 'text-[var(--ink-muted)] border border-white/10'
                  }`}
                >
                  {v.priority}
                </span>
              </div>

              <div className="bg-white/5 p-2.5 rounded-[14px] text-[11px] leading-relaxed text-[var(--ink)] mb-3 border border-white/5">
                <span className="font-semibold text-[var(--accent)] block mb-0.5">Recommended HADR Action:</span>
                {v.actionStatement}
              </div>

              {activeTab === 'evacuation' && (
                <div className="space-y-1.5 text-[10px] text-[var(--ink-muted)] mb-3 bg-black/20 p-2 rounded-[12px]">
                  <div>
                    <span className="font-semibold text-white">Assigned Route:</span> {v.recommendedRoute}
                  </div>
                  <div>
                    <span className="font-semibold text-white">Safe Shelter:</span> {v.recommendedShelter}
                  </div>
                  <div>
                    <span className="font-semibold text-amber-400">Last Safe Departure:</span> t = {v.lastSafeDepartureMin} min
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px]">
                <div className="text-[var(--ink-muted)]">
                  Risk Priority Score: <span className="font-mono font-bold text-white">{v.priorityScore} / 100</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenExplainability(v);
                  }}
                  className="flex items-center space-x-1 text-[var(--accent)] hover:text-[var(--accent-hover)] font-semibold transition-colors bg-[var(--accent-dim)] px-2 py-1 rounded-[10px]"
                >
                  <HelpCircle className="w-3 h-3" />
                  <span>Explain Result</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
