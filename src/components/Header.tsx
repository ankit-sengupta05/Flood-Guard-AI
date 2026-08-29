import React from 'react';
import {
  Shield,
  Bell,
  Wifi,
  Cpu,
  Play,
  User,
} from 'lucide-react';
import type { Dam, ModelMode } from '../types';

interface HeaderProps {
  currentDam: Dam;
  selectedScenarioName: string;
  modelMode: ModelMode;
  activeRoute: string;
  onNavigate: (route: string) => void;
  onTriggerDemoMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentDam,
  selectedScenarioName,
  modelMode,
  activeRoute,
  onNavigate,
  onTriggerDemoMode,
}) => {
  const routes = [
    { id: 'command-center', label: 'COMMAND CENTER' },
    { id: 'scenarios', label: 'SCENARIOS' },
    { id: 'simulation', label: 'SIMULATION' },
    { id: 'analysis', label: 'ANALYSIS' },
    { id: 'evacuation', label: 'EVACUATION' },
    { id: 'validation', label: 'VALIDATION' },
    { id: 'field', label: 'FIELD MODE' },
    { id: 'reports', label: 'REPORTS' },
    { id: 'data-quality', label: 'DATA QUALITY' },
  ];

  return (
    <header className="bg-[#07090E] border-b border-white/10 select-none z-50 sticky top-0">
      {/* Top Status & Telemetry Bar */}
      <div className="px-6 py-2 bg-[#0B0E12] border-b border-white/5 flex items-center justify-between text-xs">
        {/* Left Brand & Title */}
        <div className="flex items-center space-x-3">
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="p-1.5 rounded-lg bg-[var(--accent)] text-white shadow-lg shadow-[#FF6A3D]/20 group-hover:scale-105 transition-transform">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold tracking-wider text-sm text-white">FLOOD-GUARD AI</span>
              <span className="text-[10px] text-[var(--ink-muted)] block">From Flood Prediction to Intelligent Disaster Decisions</span>
            </div>
          </div>
        </div>

        {/* Telemetry Group Center */}
        <div className="hidden lg:flex items-center space-x-4 bg-white/5 px-4 py-1 rounded-[999px] border border-white/10">
          <div className="flex items-center space-x-1.5">
            <span className="text-[var(--ink-muted)]">Dam:</span>
            <span className="font-semibold text-white">{currentDam.name}</span>
          </div>

          <span className="text-white/20">|</span>

          <div className="flex items-center space-x-1.5">
            <span className="text-[var(--ink-muted)]">Scenario:</span>
            <span className="font-mono font-bold text-[var(--accent)]">{selectedScenarioName}</span>
          </div>

          <span className="text-white/20">|</span>

          <div className="flex items-center space-x-1.5">
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-[var(--ink-muted)]">Model:</span>
            <span className="font-semibold text-sky-400">{modelMode} (Surrogate)</span>
          </div>

          <span className="text-white/20">|</span>

          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-emerald-400 uppercase text-[10px]">READY</span>
          </div>

          <span className="text-white/20">|</span>

          <div className="flex items-center space-x-1 text-emerald-400 font-mono text-[11px]">
            <Wifi className="w-3 h-3" />
            <span>ONLINE</span>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* SIH 5-Min Live Demo Flow Trigger */}
          <button
            onClick={onTriggerDemoMode}
            className="flex items-center space-x-1.5 px-3 py-1 rounded-[999px] bg-gradient-to-r from-[var(--accent)] to-amber-500 text-white font-bold text-[11px] shadow-lg shadow-[#FF6A3D]/25 hover:brightness-110 transition-all"
            title="Start 5-Minute Live SIH Presentation Demo Flow"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>SIMULATE DAM FAILURE (DEMO)</span>
          </button>

          {/* Notifications Bell */}
          <button className="relative p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[var(--ink-muted)] hover:text-white transition-all">
            <Bell className="w-4 h-4" />
            <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-1.5 bg-white/5 px-2.5 py-1 rounded-[999px] border border-white/10 text-[11px]">
            <User className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-white font-medium">HADR Commander</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Tab Bar */}
      <nav className="px-6 flex items-center space-x-1 overflow-x-auto text-xs font-bold tracking-wider text-[var(--ink-muted)]">
        {routes.map((r) => {
          const isActive = activeRoute === r.id;
          return (
            <button
              key={r.id}
              onClick={() => onNavigate(r.id)}
              className={`py-2.5 px-3.5 border-b-2 transition-all whitespace-nowrap ${
                isActive
                  ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-dim)]'
                  : 'border-transparent hover:text-white hover:bg-white/5'
              }`}
            >
              {r.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
};
