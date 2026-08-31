/**
 * DualViewLayout.tsx
 * Main layout component switching between 2D (default) and 3D views
 * with simulation toggle panel and affected villages highlighting
 */

import React, { useState, useCallback } from 'react';
import { Zap, Map, Layers3, SlidersHorizontal } from 'lucide-react';
import { TwoDMapView } from './TwoDMapView';
import { Scene3DViewport } from './Scene3DViewport';
import { SimulationComparison } from './SimulationComparison';
import { getVillagesByDam } from './VillageDataLoader';
import type { Village } from './VillageDataLoader';

type ViewMode = '2d' | '3d' | 'comparison';
type SidePanel = 'simulation' | 'comparison' | 'none';

interface DualViewLayoutProps {
  scenarioId: string;
  damId: string;
  damName: string;
  damLat: number;
  damLng: number;
  breachWidth?: number;
  onExit?: () => void;
}

/**
 * Main layout component
 * Default view: 2D with simulation toggle panel on right
 */
export const DualViewLayout: React.FC<DualViewLayoutProps> = ({
  scenarioId,
  damId,
  damName,
  damLat,
  damLng,
  breachWidth = 50,
  onExit,
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('2d');
  const [sidePanel, setSidePanel] = useState<SidePanel>('simulation');
  const [selectedVillage, setSelectedVillage] = useState<Village | null>(null);
  const [villages] = useState<Village[]>(getVillagesByDam(damName));

  const handleVillageSelect = useCallback((village: Village | { place: string; population: number; latitude: number; longitude: number }) => {
    const match = villages.find((entry) => entry.place === village.place);
    if (match) {
      setSelectedVillage(match);
    }
  }, [villages]);

  const toggleSidePanel = useCallback((panel: SidePanel) => {
    setSidePanel(sidePanel === panel ? 'none' : panel);
  }, [sidePanel]);

  return (
    <div className="h-screen w-full bg-black flex flex-col overflow-hidden">
      {/* Top Navigation Bar */}
      <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-3 border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Zap className="w-6 h-6 text-yellow-400" />
          <div>
            <h1 className="text-xl font-bold">{damName} - Flood Analysis</h1>
            <p className="text-slate-300 text-xs">{scenarioId} • Breach Width: {breachWidth}m</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* View Mode Buttons */}
          <div className="flex gap-1 bg-slate-800 rounded-lg p-1 border border-slate-700">
            <button
              onClick={() => setViewMode('2d')}
              className={`flex items-center gap-1 px-3 py-2 rounded transition text-sm font-semibold ${
                viewMode === '2d'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
              title="2D Map View (Default)"
            >
              <Map className="w-4 h-4" />
              2D Map
            </button>
            <button
              onClick={() => setViewMode('3d')}
              className={`flex items-center gap-1 px-3 py-2 rounded transition text-sm font-semibold ${
                viewMode === '3d'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
              title="3D Terrain with Heatmap Overlay"
            >
              <Layers3 className="w-4 h-4" />
              3D Terrain
            </button>
            <button
              onClick={() => setViewMode('comparison')}
              className={`flex items-center gap-1 px-3 py-2 rounded transition text-sm font-semibold ${
                viewMode === 'comparison'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
              title="Delft3D vs HEC-RAS Comparison"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Compare Models
            </button>
          </div>

          {/* Side Panel Toggles */}
          {viewMode === '2d' && (
            <div className="flex gap-1 ml-4 pl-4 border-l border-slate-700">
              <button
                onClick={() => toggleSidePanel('simulation')}
                className={`px-3 py-2 rounded text-sm font-semibold transition ${
                  sidePanel === 'simulation'
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
                title="Show/Hide Simulation Panel"
              >
                {sidePanel === 'simulation' ? '✓' : '○'} Simulations
              </button>
            </div>
          )}

          {/* Exit Button */}
          <button
            onClick={onExit}
            className="ml-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold text-sm"
          >
            Exit
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Primary View */}
        <div className={`flex-1 overflow-hidden transition-all ${sidePanel !== 'none' ? 'mr-0' : ''}`}>
          {viewMode === '2d' && (
            <TwoDMapView
              scenarioId={scenarioId}
              damName={damName}
              damLat={damLat}
              damLng={damLng}
              breachWidth={breachWidth}
              onVillageSelect={handleVillageSelect}
            />
          )}

          {viewMode === '3d' && (
            <Scene3DViewport
              selectedDam={{ id: damId, name: damName }}
              villages={[]}
              selectedVillage={null}
              currentTimeStep={0}
              showSatelliteOverlay={false}
            />
          )}

          {viewMode === 'comparison' && (
            <SimulationComparison
              scenarioId={scenarioId}
              damName={damName}
              damLat={damLat}
              damLng={damLng}
              villages={villages}
            />
          )}
        </div>

        {/* Side Panel - Only visible in 2D mode */}
        {viewMode === '2d' && sidePanel !== 'none' && (
          <div className="w-96 bg-white border-l border-gray-300 shadow-2xl flex flex-col z-50">
            {sidePanel === 'simulation' && (
              <SimulationToggleSidebar
                damName={damName}
                scenarioId={scenarioId}
                villages={villages}
                selectedVillage={selectedVillage}
              />
            )}
          </div>
        )}
      </div>

      {/* Status Bar */}
      <div className="bg-slate-900 text-slate-300 p-2 border-t border-slate-700 flex items-center justify-between text-xs">
        <div className="flex gap-4">
          <span>📍 View: {viewMode.toUpperCase()}</span>
          <span>🗺️ Affected Villages: {villages.filter(v => v.floodPathHeuristic === 'downstream').length}</span>
          <span>👥 Total Pop at Risk: ~{(villages.reduce((sum, v) => sum + v.population, 0) / 1000000).toFixed(1)}M</span>
        </div>
        <span>Press F1 for help • Last updated: {new Date().toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

/**
 * Simulation toggle side panel for 2D view
 */
interface SimulationToggleSidebarProps {
  damName: string;
  scenarioId: string;
  villages: Village[];
  selectedVillage: Village | null;
}

const SimulationToggleSidebar: React.FC<SimulationToggleSidebarProps> = ({
  damName,
  scenarioId,
  villages,
  selectedVillage,
}) => {
  const [activeModel, setActiveModel] = useState<'delft3d' | 'hec-ras'>('delft3d');
  const [showBoth, setShowBoth] = useState(false);

  const downstreamVillages = villages.filter(v => v.floodPathHeuristic === 'downstream');

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 border-b border-purple-900">
        <h3 className="text-lg font-bold mb-1">⚙️ Simulation Control</h3>
        <p className="text-purple-100 text-xs">{damName} • {scenarioId}</p>
      </div>

      {/* Active Model Selection */}
      <div className="p-4 border-b border-gray-200 space-y-3">
        <h4 className="font-semibold text-gray-800 text-sm">Select Model</h4>
        
        <div className="space-y-2">
          <label className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer">
            <input
              type="radio"
              name="model"
              value="delft3d"
              checked={activeModel === 'delft3d' && !showBoth}
              onChange={() => {
                setActiveModel('delft3d');
                setShowBoth(false);
              }}
              className="w-4 h-4"
            />
            <div>
              <p className="font-semibold text-gray-800 text-sm">Delft3D-FM</p>
              <p className="text-gray-500 text-xs">2025 Calibration (10% faster)</p>
            </div>
          </label>

          <label className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer">
            <input
              type="radio"
              name="model"
              value="hec-ras"
              checked={activeModel === 'hec-ras' && !showBoth}
              onChange={() => {
                setActiveModel('hec-ras');
                setShowBoth(false);
              }}
              className="w-4 h-4"
            />
            <div>
              <p className="font-semibold text-gray-800 text-sm">HEC-RAS 6.4</p>
              <p className="text-gray-500 text-xs">USACE Standard</p>
            </div>
          </label>

          <label className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer">
            <input
              type="checkbox"
              checked={showBoth}
              onChange={(e) => setShowBoth(e.target.checked)}
              className="w-4 h-4"
            />
            <div>
              <p className="font-semibold text-gray-800 text-sm">Show Both</p>
              <p className="text-gray-500 text-xs">Overlay comparison</p>
            </div>
          </label>
        </div>
      </div>

      {/* Model Info */}
      <div className="p-4 border-b border-gray-200 bg-blue-50">
        <div className="text-xs space-y-2">
          {activeModel === 'delft3d' && !showBoth && (
            <>
              <p className="font-bold text-blue-900">Delft3D-FM 2025</p>
              <ul className="list-disc list-inside text-blue-700 space-y-1">
                <li>Advanced FEM solver</li>
                <li>100m mesh resolution</li>
                <li>Manning: 0.035</li>
                <li>Validation RMSE: 12%</li>
              </ul>
            </>
          )}
          {activeModel === 'hec-ras' && !showBoth && (
            <>
              <p className="font-bold text-blue-900">HEC-RAS 6.4</p>
              <ul className="list-disc list-inside text-blue-700 space-y-1">
                <li>1D-2D Hybrid FD</li>
                <li>50m grid (2D)</li>
                <li>Manning: 0.040</li>
                <li>Validation RMSE: 18%</li>
              </ul>
            </>
          )}
          {showBoth && (
            <>
              <p className="font-bold text-blue-900">Comparison Mode</p>
              <p className="text-blue-700">
                Both models displayed. Delft3D in red, HEC-RAS in cyan. Overlap = agreement.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Affected Areas */}
      <div className="p-4 flex-1 overflow-y-auto border-b border-gray-200">
        <h4 className="font-semibold text-gray-800 text-sm mb-2">
          At-Risk Places ({downstreamVillages.length})
        </h4>
        <div className="space-y-2">
          {downstreamVillages.slice(0, 8).map((v) => (
            <div
              key={v.place}
              className={`bg-red-50 border-l-4 border-red-500 p-2 rounded text-xs cursor-pointer hover:bg-red-100 transition ${
                selectedVillage?.place === v.place ? 'ring-2 ring-red-400' : ''
              }`}
            >
              <p className="font-bold text-red-900">{v.place}</p>
              <p className="text-red-700">Pop: {(v.population / 1000).toFixed(0)}K</p>
              <p className="text-red-600 text-xs mt-1">Distance: {v.distanceKm} km</p>
            </div>
          ))}
          {downstreamVillages.length > 8 && (
            <p className="text-gray-600 text-xs text-center p-2">
              +{downstreamVillages.length - 8} more places...
            </p>
          )}
        </div>
      </div>

      {/* Selected Village Details */}
      {selectedVillage && (
        <div className="p-4 bg-gradient-to-b from-yellow-50 to-orange-50 border-t border-yellow-200">
          <h4 className="font-bold text-yellow-900 mb-2">Selected: {selectedVillage.place}</h4>
          <div className="text-xs text-yellow-800 space-y-1">
            <p>
              <strong>Population:</strong> {selectedVillage.population.toLocaleString()}
            </p>
            <p>
              <strong>Distance:</strong> {selectedVillage.distanceKm} km
            </p>
            <p>
              <strong>Status:</strong>{' '}
              {selectedVillage.floodPathHeuristic === 'downstream' ? (
                <span className="text-red-600 font-bold">🔴 DOWNSTREAM</span>
              ) : (
                <span className="text-green-600">✓ OFF-PATH</span>
              )}
            </p>
            <div className="mt-2 pt-2 border-t border-yellow-300">
              <button className="w-full bg-yellow-600 text-white px-2 py-1 rounded text-xs font-semibold hover:bg-yellow-700 transition">
                View Detailed Analysis
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <p className="text-gray-600 text-xs leading-relaxed">
          💡 <strong>Tip:</strong> Click villages on map to see detailed impact analysis. Toggle
          between models to compare predictions.
        </p>
      </div>
    </>
  );
};

export default DualViewLayout;
