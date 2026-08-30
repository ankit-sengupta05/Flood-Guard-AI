/**
 * Example Integration: How to use the ArrivalTimeDashboard
 * 
 * This file shows different ways to integrate the new arrival-time
 * visualization components into your existing UI.
 */

import React from 'react';
import { CommandCenter } from './CommandCenter';
import { ArrivalTimeDashboard } from './ArrivalTimeDashboard';
import { Scene3DViewport } from './Scene3DViewport';
import { ArrivalTimeLegend } from './ArrivalTimeLegend';
import type { Dam, VillageRisk } from '../types';

// ===================================================================
// OPTION 1: Side-by-side 3D Scene + Dashboard (Recommended)
// ===================================================================

export const FloodAnalysisLayout: React.FC<{
  selectedDam: Dam;
  scenarios: Array<{ id: string; label: string }>;
  villages: VillageRisk[];
}> = ({ selectedDam, scenarios, villages }) => {
  const [selectedScenario, setSelectedScenario] = React.useState(scenarios[0]?.id ?? 'scenario-demo-1');
  const [selectedVillage, setSelectedVillage] = React.useState<VillageRisk | null>(villages[0] ?? null);

  return (
    <div className="w-full h-screen bg-[#0B0E12] flex gap-4 p-4">
      {/* Left: 3D Visualization */}
      <div className="flex-1 rounded-[16px] overflow-hidden border border-white/10">
        <Scene3DViewport
          selectedDam={selectedDam}
          villages={villages}
          selectedVillage={selectedVillage}
          onSelectVillage={setSelectedVillage}
          currentTimeStep={20}
          showSatelliteOverlay={false}
        />
      </div>

      {/* Right: Impact Analysis Dashboard */}
      <div className="w-96 bg-[#0B0E12] rounded-[16px] border border-white/10 overflow-hidden flex flex-col">
        <div className="bg-[#111827] border-b border-white/10 p-4">
          <label className="block text-xs font-semibold text-white mb-2">Select Scenario</label>
          <select
            value={selectedScenario}
            onChange={(e) => setSelectedScenario(e.target.value)}
            className="w-full bg-[#1F2937] border border-white/10 rounded-lg px-3 py-2 text-sm text-white"
          >
            {scenarios.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <ArrivalTimeDashboard
            scenarioId={selectedScenario}
            damName={selectedDam.name}
            damLat={selectedDam.lat}
            damLng={selectedDam.lng}
            villages={villages.map((v) => ({
              id: v.id,
              name: v.name,
              lat: v.coords[0],
              lng: v.coords[1],
              arrivalTimeMin: v.earliestArrivalMin,
              population: v.population,
              priority: v.status === 'CRITICAL' ? 'high' : v.status === 'WARNING' ? 'medium' : 'low',
            }))}
            onVillageSelect={(villageId) => {
              const village = villages.find((v) => v.id === villageId);
              if (village) setSelectedVillage(village);
            }}
          />
        </div>
      </div>
    </div>
  );
};

// ===================================================================
// OPTION 2: Fullscreen Dashboard with Scene Overlay
// ===================================================================

export const FullscreenAnalysis: React.FC<{
  selectedDam: Dam;
  villages: VillageRisk[];
}> = ({ selectedDam, villages }) => {
  const [showMap, setShowMap] = React.useState(false);

  return (
    <div className="w-full h-screen bg-[#0B0E12] flex">
      {/* Background: 3D Scene */}
      <div className="absolute inset-0">
        <Scene3DViewport
          selectedDam={selectedDam}
          villages={villages}
          selectedVillage={null}
          onSelectVillage={() => {}}
          currentTimeStep={20}
          showSatelliteOverlay={true}
        />
      </div>

      {/* Floating: Dashboard Panel */}
      <div className="relative z-10 m-4 w-96 max-h-[90vh] bg-[#0B0E12]/95 backdrop-blur rounded-[16px] border border-white/10 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-white/10">
          <h2 className="text-lg font-bold text-white">{selectedDam.name}</h2>
          <p className="text-xs text-[var(--ink-muted)]">Flood Risk Assessment</p>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ArrivalTimeDashboard
            scenarioId="scenario-fullscreen-1"
            damName={selectedDam.name}
            damLat={selectedDam.lat}
            damLng={selectedDam.lng}
            villages={villages.map((v) => ({
              id: v.id,
              name: v.name,
              lat: v.coords[0],
              lng: v.coords[1],
              arrivalTimeMin: v.earliestArrivalMin,
              population: v.population,
              priority: v.priorityScore > 70 ? 'high' : v.priorityScore > 45 ? 'medium' : 'low',
            }))}
          />
        </div>

        <div className="border-t border-white/10 p-3">
          <button
            onClick={() => setShowMap(!showMap)}
            className="w-full px-3 py-2 bg-[var(--accent)] text-[#080b10] rounded-lg font-semibold text-sm hover:brightness-110"
          >
            {showMap ? 'Hide Map' : 'Show Map View'}
          </button>
        </div>
      </div>
    </div>
  );
};

// ===================================================================
// OPTION 3: Tabbed Interface (Alternative)
// ===================================================================

export const TabbedAnalysisView: React.FC<{
  selectedDam: Dam;
  villages: VillageRisk[];
}> = ({ selectedDam, villages }) => {
  const [activeTab, setActiveTab] = React.useState<'scene' | 'dashboard' | 'legend'>('scene');

  return (
    <div className="w-full h-screen bg-[#0B0E12] flex flex-col">
      {/* Tabs */}
      <div className="flex gap-2 p-4 border-b border-white/10 bg-[#111827]">
        <button
          onClick={() => setActiveTab('scene')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'scene'
              ? 'bg-[var(--accent)] text-[#080b10]'
              : 'text-[var(--ink-muted)] hover:text-white'
          }`}
        >
          3D Scene
        </button>
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'dashboard'
              ? 'bg-[var(--accent)] text-[#080b10]'
              : 'text-[var(--ink-muted)] hover:text-white'
          }`}
        >
          Impact Analysis
        </button>
        <button
          onClick={() => setActiveTab('legend')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'legend'
              ? 'bg-[var(--accent)] text-[#080b10]'
              : 'text-[var(--ink-muted)] hover:text-white'
          }`}
        >
          Legend &amp; Guide
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4">
        {activeTab === 'scene' && (
          <div className="h-full rounded-[16px] overflow-hidden border border-white/10">
            <Scene3DViewport
              selectedDam={selectedDam}
              villages={villages}
              selectedVillage={null}
              onSelectVillage={() => {}}
              currentTimeStep={20}
              showSatelliteOverlay={false}
            />
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div className="max-w-2xl">
            <ArrivalTimeDashboard
              scenarioId="scenario-tabbed-1"
              damName={selectedDam.name}
              damLat={selectedDam.lat}
              damLng={selectedDam.lng}
              villages={villages.map((v) => ({
                id: v.id,
                name: v.name,
                lat: v.coords[0],
                lng: v.coords[1],
                arrivalTimeMin: v.earliestArrivalMin,
                population: v.population,
                priority: v.priorityScore > 70 ? 'high' : v.priorityScore > 45 ? 'medium' : 'low',
              }))}
            />
          </div>
        )}

        {activeTab === 'legend' && (
          <div className="max-w-2xl">
            <ArrivalTimeLegend damName={selectedDam.name} showDetails />
          </div>
        )}
      </div>
    </div>
  );
};

// ===================================================================
// OPTION 4: Minimal Integration (Add to Existing CommandCenter)
// ===================================================================

/**
 * To add to your existing CommandCenter component, simply include:
 * 
 * ```typescript
 * import { ArrivalTimeDashboard } from './ArrivalTimeDashboard';
 * 
 * // Inside your render:
 * <div className="grid grid-cols-3">
 *   <div className="col-span-2">
 *     <Scene3DViewport {...props} />
 *   </div>
 *   <div className="col-span-1 overflow-y-auto">
 *     <ArrivalTimeDashboard
 *       scenarioId={selectedScenarioId}
 *       damName={selectedDam.name}
 *       damLat={selectedDam.lat}
 *       damLng={selectedDam.lng}
 *       villages={transformedVillages}
 *     />
 *   </div>
 * </div>
 * ```
 */

// ===================================================================
// Data Transformation Helper
// ===================================================================

/**
 * Convert your existing VillageRisk objects to the format
 * expected by ArrivalTimeDashboard.
 */
export const transformVillagesForDashboard = (villages: VillageRisk[]) => {
  return villages.map((v) => ({
    id: v.id,
    name: v.name,
    lat: v.coords[0],
    lng: v.coords[1],
    arrivalTimeMin: v.earliestArrivalMin,
    population: v.population,
    priority: v.priorityScore > 70 ? 'high' : v.priorityScore > 45 ? 'medium' : ('low' as const),
  }));
};

// ===================================================================
// Export All Layouts
// ===================================================================

export const AnalysisLayouts = {
  SideBySide: FloodAnalysisLayout,
  Fullscreen: FullscreenAnalysis,
  Tabbed: TabbedAnalysisView,
};
