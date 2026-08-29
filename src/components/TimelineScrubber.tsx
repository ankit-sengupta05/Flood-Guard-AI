import React from 'react';
import { Play, Pause, RotateCcw, Clock } from 'lucide-react';

interface TimelineProps {
  currentTimeStep: number; // 0, 15, 30, 45, 60
  onChangeTimeStep: (step: number) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const TimelineScrubber: React.FC<TimelineProps> = ({
  currentTimeStep,
  onChangeTimeStep,
  isPlaying,
  onTogglePlay,
}) => {
  const steps = [0, 15, 30, 45, 60];

  return (
    <div className="h-16 px-6 glass-panel border-t border-white/10 flex items-center justify-between z-30 relative select-none">
      {/* Controls Left */}
      <div className="flex items-center space-x-3">
        <button
          onClick={onTogglePlay}
          className="w-10 h-10 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white flex items-center justify-center shadow-lg shadow-[#FF6A3D]/30 transition-all transform active:scale-95"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>

        <button
          onClick={() => onChangeTimeStep(0)}
          className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-[var(--ink-muted)] hover:text-white flex items-center justify-center transition-all"
          title="Reset Timeline to t = 0 min"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <div className="flex items-center space-x-1.5 text-xs text-[var(--ink-muted)]">
          <Clock className="w-4 h-4 text-[var(--accent)]" />
          <span>Simulated Time:</span>
          <span className="font-bold text-white text-sm tabular-nums">t = {currentTimeStep} min</span>
        </div>
      </div>

      {/* Scrubber Slider Center */}
      <div className="flex-1 max-w-xl mx-8 flex flex-col justify-center">
        <div className="relative flex items-center">
          <input
            type="range"
            min="0"
            max="60"
            step="15"
            value={currentTimeStep}
            onChange={(e) => onChangeTimeStep(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[var(--accent)]"
          />
        </div>
        {/* Step Ticks */}
        <div className="flex justify-between mt-1 text-[10px] text-[var(--ink-muted)] font-mono">
          {steps.map((step) => (
            <span
              key={step}
              onClick={() => onChangeTimeStep(step)}
              className={`cursor-pointer transition-colors ${
                step === currentTimeStep ? 'text-[var(--accent)] font-bold' : 'hover:text-white'
              }`}
            >
              {step}m
            </span>
          ))}
        </div>
      </div>

      {/* Arrival Band Legend Right */}
      <div className="hidden lg:flex items-center space-x-2 text-[10px]">
        <span className="text-[var(--ink-muted)] uppercase font-semibold">Arrival Bands:</span>
        <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-medium">0-15m (Critical)</span>
        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-medium">15-30m (Warning)</span>
        <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-400 font-medium">30-60m (Alert)</span>
      </div>
    </div>
  );
};
