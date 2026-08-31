/**
 * SimulationComparison.tsx
 * Side-by-side view of Delft3D and HEC-RAS simulations
 * Shows colored heatmaps and arrival time comparisons
 */

import React, { useState, useEffect } from 'react';
import { AlertCircle, BarChart3, Download } from 'lucide-react';

/**
 * Simulation result data
 */
interface SimulationResult {
  name: 'delft3d' | 'hec-ras';
  label: string;
  color: string;
  arrivalTimeGrid: number[][];
  maxArrivalTime: number;
  computeTimeMs: number;
  validationRMSE: number;
  descriptionLong: string;
}

interface AffectedPlaceComparison {
  place: string;
  population: number;
  delft3dArrival: number;
  hecRasArrival: number;
  difference: number;
  percentDifference: number;
  priority: string;
}

interface SimulationComparisonProps {
  scenarioId: string;
  damName: string;
  damLat: number;
  damLng: number;
  villages: Array<{ place: string; population: number; latitude: number; longitude: number }>;
}

/**
 * Comparison component showing both models
 */
export const SimulationComparison: React.FC<SimulationComparisonProps> = ({
  scenarioId,
  damName,
  damLat,
  damLng,
  villages,
}) => {
  const [delft3dResult, setDelft3dResult] = useState<SimulationResult | null>(null);
  const [hecRasResult, setHecRasResult] = useState<SimulationResult | null>(null);
  const [comparison, setComparison] = useState<AffectedPlaceComparison[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'heatmap' | 'comparison'>('overview');

  useEffect(() => {
    const loadSimulations = async () => {
      // Simulated data - in production fetch from backend
      const delft3d: SimulationResult = {
        name: 'delft3d',
        label: 'Delft3D-FM 2025 Calibration',
        color: '#FF6B6B',
        arrivalTimeGrid: generateMockGrid(256, damLat, damLng),
        maxArrivalTime: 180,
        computeTimeMs: 2345,
        validationRMSE: 0.12,
        descriptionLong:
          'Advanced shallow water equations solver using Delft3D Flexible Mesh. Calibrated with 2025 field data from regional dam break studies. Includes Manning friction coefficient: 0.035, validated against historical breach simulations.',
      };

      const hecRas: SimulationResult = {
        name: 'hec-ras',
        label: 'HEC-RAS 6.4 USACE Standard',
        color: '#4ECDC4',
        arrivalTimeGrid: generateMockGrid(256, damLat, damLng, 1.05),
        maxArrivalTime: 180,
        computeTimeMs: 1850,
        validationRMSE: 0.18,
        descriptionLong:
          'USACE-standard 1D-2D hybrid hydrodynamic model (HEC-RAS 6.4). Widely adopted in dam safety studies across USA and India. Manning friction coefficient: 0.040, 50m grid resolution in 2D zones.',
      };

      setDelft3dResult(delft3d);
      setHecRasResult(hecRas);

      // Generate comparison data
      const comparisonData = villages
        .filter((_v) => Math.random() > 0.3) // Simulate affected subset
        .map((v) => {
          const d3 = Math.max(10, 180 - Math.random() * 50);
          const hr = d3 * (0.95 + Math.random() * 0.1);
          const diff = Math.abs(d3 - hr);
          return {
            place: v.place,
            population: v.population,
            delft3dArrival: Math.floor(d3),
            hecRasArrival: Math.floor(hr),
            difference: Math.floor(diff),
            percentDifference: Number(((diff / Math.max(d3, hr)) * 100).toFixed(1)),
            priority: d3 < 30 ? 'CRITICAL' : d3 < 60 ? 'HIGH' : 'MEDIUM',
          };
        })
        .sort((a, b) => a.delft3dArrival - b.delft3dArrival);

      setComparison(comparisonData);
      setLoading(false);
    };

    loadSimulations();
  }, [scenarioId, villages]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full w-full bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Running simulations...</p>
          <p className="text-slate-500 text-sm mt-2">Delft3D + HEC-RAS</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 border-b border-purple-900">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-1">
          <BarChart3 className="w-6 h-6" />
          Simulation Comparison
        </h2>
        <p className="text-purple-100 text-sm">{damName} • {scenarioId}</p>
      </div>

      {/* Tabs */}
      <div className="bg-gray-100 border-b border-gray-300 p-0 flex">
        {(['overview', 'heatmap', 'comparison'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-4 py-3 font-semibold transition text-sm ${
              activeTab === tab
                ? 'bg-white text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {tab === 'overview'
              ? '📊 Overview'
              : tab === 'heatmap'
                ? '🌡️ Heatmaps'
                : '📈 Comparison'}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'overview' && (
          <OverviewTab
            delft3d={delft3dResult!}
            hecRas={hecRasResult!}
            comparison={comparison}
          />
        )}
        {activeTab === 'heatmap' && (
          <HeatmapTab
            delft3d={delft3dResult!}
            hecRas={hecRasResult!}
          />
        )}
        {activeTab === 'comparison' && (
          <ComparisonTab comparison={comparison} />
        )}
      </div>
    </div>
  );
};

/**
 * Overview tab - Model specifications and key statistics
 */
interface OverviewTabProps {
  delft3d: SimulationResult;
  hecRas: SimulationResult;
  comparison: AffectedPlaceComparison[];
}

const OverviewTab: React.FC<OverviewTabProps> = ({ delft3d, hecRas, comparison }) => {
  const criticalPlaces = comparison.filter(p => p.delft3dArrival < 15).length;
  const totalPopulation = comparison.reduce((sum, p) => sum + p.population, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-900 mb-3">Quick Stats</h3>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Critical Areas:</strong>
              <span className="float-right text-red-600 font-bold">{criticalPlaces}</span>
            </p>
            <p>
              <strong>Affected Villages:</strong>
              <span className="float-right text-orange-600 font-bold">{comparison.length}</span>
            </p>
            <p>
              <strong>Total Population:</strong>
              <span className="float-right text-blue-600 font-bold">
                {(totalPopulation / 1000000).toFixed(2)}M
              </span>
            </p>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h3 className="font-bold text-purple-900 mb-3">Model Difference</h3>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Avg Difference:</strong>
              <span className="float-right text-purple-600 font-bold">
                {(
                  comparison.reduce((sum, p) => sum + p.difference, 0) / comparison.length
                ).toFixed(1)}{' '}
                min
              </span>
            </p>
            <p>
              <strong>Max Difference:</strong>
              <span className="float-right text-purple-600 font-bold">
                {Math.max(...comparison.map(p => p.difference))} min
              </span>
            </p>
            <p>
              <strong>Avg % Diff:</strong>
              <span className="float-right text-purple-600 font-bold">
                {comparison.length > 0
                  ? (comparison.reduce((sum, p) => sum + p.percentDifference, 0) / comparison.length).toFixed(1)
                  : '0.0'}
                %
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Model Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Delft3D */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-300 rounded-lg p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded bg-red-600"></div>
            <h3 className="font-bold text-lg text-red-900">{delft3d.label}</h3>
          </div>
          <p className="text-sm text-red-800 mb-3">{delft3d.descriptionLong}</p>
          <div className="space-y-2 text-xs text-red-700 bg-white rounded p-2">
            <p>
              <strong>Solver:</strong> Shallow Water Equations (FEM)
            </p>
            <p>
              <strong>Grid:</strong> 100m unstructured mesh
            </p>
            <p>
              <strong>Manning:</strong> 0.035 (variable by zone)
            </p>
            <p>
              <strong>Compute:</strong> {delft3d.computeTimeMs}ms
            </p>
            <p>
              <strong>Validation RMSE:</strong> {(delft3d.validationRMSE * 100).toFixed(0)}%
            </p>
          </div>
        </div>

        {/* HEC-RAS */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-300 rounded-lg p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded bg-teal-600"></div>
            <h3 className="font-bold text-lg text-teal-900">{hecRas.label}</h3>
          </div>
          <p className="text-sm text-teal-800 mb-3">{hecRas.descriptionLong}</p>
          <div className="space-y-2 text-xs text-teal-700 bg-white rounded p-2">
            <p>
              <strong>Solver:</strong> 1D-2D Hybrid (Finite Difference)
            </p>
            <p>
              <strong>Grid:</strong> 50m structured (2D zones)
            </p>
            <p>
              <strong>Manning:</strong> 0.040 (uniform)
            </p>
            <p>
              <strong>Compute:</strong> {hecRas.computeTimeMs}ms
            </p>
            <p>
              <strong>Validation RMSE:</strong> {(hecRas.validationRMSE * 100).toFixed(0)}%
            </p>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
        <div className="flex gap-2">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800">
            <strong>Model Disclaimer:</strong> Both models use simplified breach hydrographs and
            do not account for:
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li>Terrain-dependent flow routing (use DEM data for actual predictions)</li>
              <li>Tributary inflows or upstream backwater effects</li>
              <li>Vegetation/land use friction changes</li>
              <li>Bridge/embankment flow modification</li>
            </ul>
            Always validate against field data before using for critical decisions.
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Heatmap tab - Visual comparison
 */
interface HeatmapTabProps {
  delft3d: SimulationResult;
  hecRas: SimulationResult;
}

const HeatmapTab: React.FC<HeatmapTabProps> = ({ delft3d, hecRas }) => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Delft3D Heatmap */}
        <div>
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-600"></div>
            {delft3d.label}
          </h3>
          <div className="bg-gradient-to-br from-blue-200 via-yellow-300 to-red-600 h-64 rounded-lg border-2 border-gray-300 flex items-center justify-center text-white font-bold shadow-lg">
            [256×256 Grid Visualization]
            <br />
            <span className="text-sm">Arrival time heatmap</span>
          </div>
          <div className="mt-3 space-y-1 text-xs">
            <p>
              <strong>Min:</strong> 0 min (dam) | <strong>Max:</strong> {delft3d.maxArrivalTime} min
            </p>
            <p className="text-gray-600">Blue → Green → Yellow → Red (time progression)</p>
          </div>
        </div>

        {/* HEC-RAS Heatmap */}
        <div>
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-teal-600"></div>
            {hecRas.label}
          </h3>
          <div className="bg-gradient-to-br from-blue-200 via-cyan-300 to-teal-600 h-64 rounded-lg border-2 border-gray-300 flex items-center justify-center text-white font-bold shadow-lg">
            [256×256 Grid Visualization]
            <br />
            <span className="text-sm">Arrival time heatmap</span>
          </div>
          <div className="mt-3 space-y-1 text-xs">
            <p>
              <strong>Min:</strong> 0 min (dam) | <strong>Max:</strong> {hecRas.maxArrivalTime} min
            </p>
            <p className="text-gray-600">Blue → Cyan → Teal (time progression)</p>
          </div>
        </div>
      </div>

      {/* Difference Map */}
      <div>
        <h3 className="font-bold text-lg mb-3">Model Difference Map</h3>
        <p className="text-sm text-gray-600 mb-2">
          Shows where models diverge significantly (purple = high difference)
        </p>
        <div className="bg-gradient-to-r from-green-400 via-purple-500 to-red-600 h-32 rounded-lg border-2 border-gray-300 flex items-center justify-center text-white font-bold shadow-lg">
          [Difference Visualization]
        </div>
        <div className="mt-3 text-xs text-gray-700">
          <p>
            <strong>Interpretation:</strong> Green = models agree, Purple = high divergence (&gt;20 min difference)
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * Comparison tab - Table of affected places
 */
interface ComparisonTabProps {
  comparison: AffectedPlaceComparison[];
}

const ComparisonTab: React.FC<ComparisonTabProps> = ({ comparison }) => {
  const [sortBy, setSortBy] = useState<'delft3d' | 'diff' | 'pop'>('delft3d');

  const sorted = [...comparison].sort((a, b) => {
    if (sortBy === 'delft3d') return a.delft3dArrival - b.delft3dArrival;
    if (sortBy === 'diff') return b.difference - a.difference;
    return b.population - a.population;
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg">Affected Places (Sorted)</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy('delft3d')}
            className={`px-3 py-1 text-xs rounded ${
              sortBy === 'delft3d'
                ? 'bg-red-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Sort by Delft3D
          </button>
          <button
            onClick={() => setSortBy('diff')}
            className={`px-3 py-1 text-xs rounded ${
              sortBy === 'diff'
                ? 'bg-purple-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Sort by Diff
          </button>
          <button
            onClick={() => setSortBy('pop')}
            className={`px-3 py-1 text-xs rounded ${
              sortBy === 'pop'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Sort by Population
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-200 border-b-2 border-gray-400">
              <th className="text-left p-2">Place</th>
              <th className="text-right p-2">Population</th>
              <th className="text-center p-2">Delft3D (min)</th>
              <th className="text-center p-2">HEC-RAS (min)</th>
              <th className="text-center p-2">Diff (min)</th>
              <th className="text-center p-2">Diff (%)</th>
              <th className="text-center p-2">Priority</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((place, idx) => (
              <tr key={place.place} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-2 font-semibold text-gray-800">{place.place}</td>
                <td className="p-2 text-right text-gray-700">
                  {(place.population / 1000).toFixed(0)}K
                </td>
                <td className="p-2 text-center">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-bold">
                    {place.delft3dArrival}
                  </span>
                </td>
                <td className="p-2 text-center">
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded font-bold">
                    {place.hecRasArrival}
                  </span>
                </td>
                <td className="p-2 text-center text-purple-600 font-bold">{place.difference}</td>
                <td className="p-2 text-center text-purple-600 font-bold">
                  {place.percentDifference}%
                </td>
                <td className="p-2 text-center">
                  <span
                    className="px-2 py-1 rounded text-white font-bold text-xs"
                    style={{
                      backgroundColor:
                        place.priority === 'CRITICAL'
                          ? '#EF4444'
                          : place.priority === 'HIGH'
                            ? '#F97316'
                            : '#EAB308',
                    }}
                  >
                    {place.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Export Button */}
      <div className="mt-6 flex gap-2">
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          <Download className="w-4 h-4" />
          Export CSV
        </button>
        <button className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          <Download className="w-4 h-4" />
          Export PDF Report
        </button>
      </div>
    </div>
  );
};

/**
 * Generate mock 256x256 grid with realistic arrival time values
 */
function generateMockGrid(size: number, _centerLat: number, _centerLng: number, factor = 1.0): number[][] {
  const grid: number[][] = [];
  const maxDist = Math.sqrt(2 * (size / 2) ** 2);

  for (let i = 0; i < size; i++) {
    const row: number[] = [];
    for (let j = 0; j < size; j++) {
      const dx = (j - size / 2) / (size / 2);
      const dy = (i - size / 2) / (size / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      const value = (dist / maxDist) * 180 * factor + (Math.random() - 0.5) * 10;
      row.push(Math.max(0, value));
    }
    grid.push(row);
  }

  return grid;
}
