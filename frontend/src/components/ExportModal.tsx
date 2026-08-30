import React, { useState } from 'react';
import { X, Download, FileText, Map, Database, CheckCircle2, ShieldCheck } from 'lucide-react';
import type { DamInfo } from '../data/mockData';

interface ExportModalProps {
  dam: DamInfo;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ dam, onClose }) => {
  const [format, setFormat] = useState<'pdf' | 'shp' | 'kml' | 'geojson' | 'csv'>('pdf');
  const [isExporting, setIsExporting] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);

  const handleTriggerExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setDownloadReady(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fade-in select-none">
      <div className="w-full max-w-xl glass-panel rounded-[28px] border border-white/15 overflow-hidden shadow-2xl">
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center space-x-2">
            <Download className="w-5 h-5 text-[var(--accent)]" />
            <h3 className="font-bold text-sm text-white">Export Center — {dam.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-[var(--ink-muted)] hover:text-white flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5 text-xs">
          <div>
            <label className="text-[11px] font-semibold text-[var(--ink-muted)] uppercase block mb-2">
              Select Export Format
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => { setFormat('pdf'); setDownloadReady(false); }}
                className={`p-3 rounded-[16px] border text-left flex flex-col justify-between transition-all ${
                  format === 'pdf'
                    ? 'border-[var(--accent)] bg-[var(--accent-dim)] text-white'
                    : 'border-white/10 bg-white/5 text-[var(--ink-muted)] hover:text-white'
                }`}
              >
                <FileText className="w-5 h-5 text-[var(--accent)] mb-2" />
                <div>
                  <div className="font-bold text-xs">PDF Emergency Plan</div>
                  <div className="text-[10px] text-[var(--ink-muted)]">HADR Action Report</div>
                </div>
              </button>

              <button
                onClick={() => { setFormat('shp'); setDownloadReady(false); }}
                className={`p-3 rounded-[16px] border text-left flex flex-col justify-between transition-all ${
                  format === 'shp'
                    ? 'border-[var(--accent)] bg-[var(--accent-dim)] text-white'
                    : 'border-white/10 bg-white/5 text-[var(--ink-muted)] hover:text-white'
                }`}
              >
                <Map className="w-5 h-5 text-sky-400 mb-2" />
                <div>
                  <div className="font-bold text-xs">GIS Shapefile (.shp)</div>
                  <div className="text-[10px] text-[var(--ink-muted)]">Vector Extent Layer</div>
                </div>
              </button>

              <button
                onClick={() => { setFormat('kml'); setDownloadReady(false); }}
                className={`p-3 rounded-[16px] border text-left flex flex-col justify-between transition-all ${
                  format === 'kml'
                    ? 'border-[var(--accent)] bg-[var(--accent-dim)] text-white'
                    : 'border-white/10 bg-white/5 text-[var(--ink-muted)] hover:text-white'
                }`}
              >
                <Database className="w-5 h-5 text-emerald-400 mb-2" />
                <div>
                  <div className="font-bold text-xs">Google Earth (.kml)</div>
                  <div className="text-[10px] text-[var(--ink-muted)]">3D Extent Polyline</div>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-[18px] border border-white/5">
            <h4 className="font-semibold text-white mb-2">Included Bundle Payload:</h4>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-[var(--ink-muted)]">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Simulated Hydrodynamic Grids</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ranked Priority Action List</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Time-Aware Evacuation Routes</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Assumption Log & Model Trail</span>
              </div>
            </div>
          </div>

          {downloadReady ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-[16px] text-center space-y-2">
              <div className="text-emerald-400 font-bold flex items-center justify-center space-x-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Export Bundle Generated Successfully!</span>
              </div>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert('Downloading Flood-Guard_Emergency_Report.pdf'); onClose(); }}
                className="inline-block px-5 py-2 rounded-[14px] bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/30"
              >
                Download {format.toUpperCase()} Package
              </a>
            </div>
          ) : (
            <button
              onClick={handleTriggerExport}
              disabled={isExporting}
              className="w-full py-3 rounded-[14px] bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold text-xs shadow-lg shadow-[#FF6A3D]/25 transition-all flex items-center justify-center space-x-2"
            >
              {isExporting ? (
                <span>Generating {format.toUpperCase()} Package...</span>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Generate & Download Package</span>
                </>
              )}
            </button>
          )}
        </div>

        <div className="px-6 py-3 border-t border-white/10 bg-white/5 flex items-center space-x-1 text-[10px] text-[var(--ink-muted)]">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Offline Mode Bundle Pre-download Supported (IndexedDB Service Worker)</span>
        </div>
      </div>
    </div>
  );
};
