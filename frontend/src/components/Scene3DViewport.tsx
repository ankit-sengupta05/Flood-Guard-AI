import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, FlyControls, Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import type { Village, DamInfo } from '../data/mockData';
import { Camera, Compass, Sparkles, MapPin } from 'lucide-react';

interface Scene3DProps {
  selectedDam: DamInfo;
  villages: Village[];
  selectedVillage: Village | null;
  onSelectVillage: (village: Village) => void;
  currentTimeStep: number;
  showSatelliteOverlay: boolean;
}

interface DemHeightmap {
  data: Float32Array;
  width: number;
  height: number;
  min: number;
  max: number;
}

// Procedural 3D Terrain Mesh Component
const TerrainMesh: React.FC<{ showSatelliteOverlay: boolean; dem: DemHeightmap | null; damPosition: number }> = ({ showSatelliteOverlay, dem, damPosition }) => {
  const terrainGeometry = useMemo(() => {
    const segmentsX = dem ? Math.max(1, dem.width - 1) : 80;
    const segmentsY = dem ? Math.max(1, dem.height - 1) : 80;
    const geo = new THREE.PlaneGeometry(50, 50, segmentsX, segmentsY);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      let z: number;
      if (dem) {
        const column = i % dem.width;
        const row = Math.floor(i / dem.width);
        const elevation = dem.data[row * dem.width + column];
        z = ((elevation - dem.min) / Math.max(dem.max - dem.min, 1)) * 9 - 3;
      } else {
        const distFromRiver = Math.abs(y);
        z = Math.sin(x * 0.15) * 1.5 + Math.pow(distFromRiver * 0.35, 1.8) - 2.5;
        const damX = -25 + damPosition * 50;
        if (Math.abs(x - damX) < 1.5 && Math.abs(y) < 12) z += 8 - Math.abs(y) * 0.4;
        if (x < damX && distFromRiver < 10) z = Math.min(z, 3.5);
      }
      pos.setZ(i, z);
    }
    geo.computeVertexNormals();
    return geo;
  }, [damPosition, dem]);

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <mesh geometry={terrainGeometry} receiveShadow castShadow>
        <meshStandardMaterial
          color={showSatelliteOverlay ? '#1E293B' : '#2D3748'}
          roughness={0.85}
          metalness={0.1}
          wireframe={false}
        />
      </mesh>

      {showSatelliteOverlay && (
        <mesh geometry={terrainGeometry} position={[0, 0, 0.05]}>
          <meshBasicMaterial color="#A855F7" transparent opacity={0.35} wireframe />
        </mesh>
      )}

      <mesh position={[-10, 0, 2.5]} rotation={[0, 0, 0]}>
        <boxGeometry args={[2, 22, 9]} />
        <meshStandardMaterial color="#475569" roughness={0.4} />
      </mesh>
    </group>
  );
};

// Dynamic Water Surface Component
const WaterSurface: React.FC<{ currentTimeStep: number; reservoirLevel: number }> = ({ currentTimeStep, reservoirLevel }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const floodLevel = useMemo(() => Math.max(0.5, (reservoirLevel - 20) * 0.18) + (currentTimeStep / 60) * 3.8, [currentTimeStep, reservoirLevel]);

  const waterLength = useMemo(() => {
    return 15 + (currentTimeStep / 60) * 32;
  }, [currentTimeStep]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      meshRef.current.position.y = floodLevel + Math.sin(t * 2) * 0.08;
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        position={[-10 + waterLength / 2, floodLevel, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[waterLength, 18, 40, 40]} />
        <meshStandardMaterial color="#0284C7" roughness={0.1} metalness={0.8} transparent opacity={0.78} />
      </mesh>

      <mesh position={[-25, 3.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 22]} />
        <meshStandardMaterial color="#0369A1" roughness={0.05} transparent opacity={0.85} />
      </mesh>
    </group>
  );
};

// Instanced SPH Particle Cloud near Breach Zone
const SPHParticles: React.FC<{ currentTimeStep: number }> = ({ currentTimeStep }) => {
  const count = 120;
  const particlesRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      const t = clock.getElapsedTime();
      particlesRef.current.children.forEach((child, i) => {
        const speed = 2 + (i % 3);
        child.position.x = -10 + ((t * speed + i * 0.5) % 25);
        child.position.y = 1.5 + Math.sin(t * 4 + i) * 0.4;
      });
    }
  });

  if (currentTimeStep === 0) return null;

  return (
    <group ref={particlesRef}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} position={[-10 + (i % 10), 2, (i % 7) - 3.5]}>
          <sphereGeometry args={[0.2, 8, 8]} />
          <meshStandardMaterial color="#38BDF8" transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
};

// 3D Scene Controls & Render Tree
export const Scene3DViewport: React.FC<Scene3DProps> = ({
  selectedDam,
  villages,
  selectedVillage,
  onSelectVillage,
  currentTimeStep,
  showSatelliteOverlay,
}) => {
  const [cameraMode, setCameraMode] = useState<'cinematic' | 'drone'>('cinematic');
  const [dem, setDem] = useState<DemHeightmap | null>(null);
  const [demFile, setDemFile] = useState<File | null>(null);
  const [demWidth, setDemWidth] = useState('200');
  const [demHeight, setDemHeight] = useState('200');
  const [demStatus, setDemStatus] = useState('Procedural terrain active.');
  const [damPosition, setDamPosition] = useState(0.32);
  const [reservoirLevel, setReservoirLevel] = useState(34);

  useEffect(() => {
    const controller = new AbortController();
    const normalizeSlug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').replace(/-+/g, '-') || 'dam';
    const assetNames = Array.from(new Set([
      normalizeSlug(selectedDam.id),
      normalizeSlug(selectedDam.name),
      selectedDam.id.trim(),
      selectedDam.name.trim(),
    ])).filter(Boolean);

    setDem(null);
    setDemStatus(`Loading terrain asset for ${selectedDam.name}...`);

    const loadAsset = async () => {
      for (const assetName of assetNames) {
        try {
          const metadataResponse = await fetch(`/terrain/${assetName}_heightmap.json`, { signal: controller.signal, cache: 'no-store' });
          if (!metadataResponse.ok) continue;
          const metadata = await metadataResponse.json() as { width: number; height: number; min_elev_m: number; max_elev_m: number };
          const binaryResponse = await fetch(`/terrain/${assetName}_heightmap.bin`, { signal: controller.signal });
          if (!binaryResponse.ok) continue;
          const buffer = await binaryResponse.arrayBuffer();
          const expectedBytes = metadata.width * metadata.height * Float32Array.BYTES_PER_ELEMENT;
          if (buffer.byteLength !== expectedBytes) continue;
          setDem({ data: new Float32Array(buffer), width: metadata.width, height: metadata.height, min: metadata.min_elev_m, max: metadata.max_elev_m });
          setDemStatus(`Real terrain active: ${metadata.width} x ${metadata.height}.`);
          return;
        } catch (error) {
          if (error instanceof DOMException && error.name === 'AbortError') return;
        }
      }
      setDemStatus(`No terrain asset matched ${selectedDam.name}. Procedural terrain is active.`);
    };

    loadAsset();
    return () => controller.abort();
  }, [selectedDam.id, selectedDam.name]);

  const applyDem = async () => {
    if (!demFile) {
      setDemStatus('Choose a heightmap.bin file first.');
      return;
    }
    const width = Number(demWidth);
    const height = Number(demHeight);
    if (!Number.isInteger(width) || !Number.isInteger(height) || width < 2 || height < 2) {
      setDemStatus('Width and height must be whole numbers greater than 1.');
      return;
    }
    const buffer = await demFile.arrayBuffer();
    if (buffer.byteLength !== width * height * Float32Array.BYTES_PER_ELEMENT) {
      setDemStatus(`File size does not match ${width} x ${height} float32 cells.`);
      return;
    }
    const data = new Float32Array(buffer);
    let min = Infinity;
    let max = -Infinity;
    for (const value of data) {
      if (!Number.isFinite(value)) continue;
      min = Math.min(min, value);
      max = Math.max(max, value);
    }
    if (!Number.isFinite(min) || !Number.isFinite(max)) {
      setDemStatus('The selected heightmap contains no finite elevations.');
      return;
    }
    setDem({ data, width, height, min, max });
    setDemStatus(`Real DEM active: ${width} x ${height}, ${min.toFixed(1)}-${max.toFixed(1)} m.`);
  };

  return (
    <div className="relative w-full h-full bg-[#0B0E12] overflow-hidden select-none">
      {/* Radial Vignette Overlay */}
      <div className="radial-vignette" />

      {/* Viewport Floating Info Bar */}
      <div className="absolute top-4 left-4 z-20 flex items-center space-x-3">
        <div className="glass-panel px-3.5 py-2 rounded-[14px] flex items-center space-x-2 text-xs">
          <Compass className="w-4 h-4 text-[var(--accent)]" />
          <span className="font-semibold">{selectedDam.name} 3D Hydrodynamic Scene</span>
          <span className="text-[10px] text-[var(--ink-muted)]">| Elevation Mesh: SRTM 30m</span>
        </div>

        {/* Camera Toggle Button */}
        <button
          onClick={() => setCameraMode(cameraMode === 'cinematic' ? 'drone' : 'cinematic')}
          className={`glass-panel px-3 py-1.5 rounded-[14px] text-xs flex items-center space-x-1.5 transition-all ${
            cameraMode === 'drone'
              ? 'bg-[var(--accent)] text-white border-[var(--accent)] font-semibold shadow-lg shadow-[#FF6A3D]/30'
              : 'text-[var(--ink-muted)] hover:text-white'
          }`}
        >
          <Camera className="w-3.5 h-3.5" />
          <span>{cameraMode === 'drone' ? 'Drone View (WASD Keys Active)' : 'Cinematic Orbit View'}</span>
        </button>
      </div>

      {/* MANDATORY SURROGATE MODE BADGE OVERLAY */}
      <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
        {showSatelliteOverlay && (
          <div className="glass-panel px-3 py-1.5 rounded-[999px] text-xs text-purple-400 border border-purple-500/30 flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GEE Sentinel-2 IoU: 88.5%</span>
          </div>
        )}
        <div className="glass-panel px-3.5 py-1.5 rounded-[999px] border border-[var(--accent)]/50 text-[var(--accent)] text-xs font-bold tracking-wide flex items-center space-x-1.5 shadow-lg shadow-[#FF6A3D]/10">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] pulse-accent"></span>
          <span>SURROGATE MODE</span>
        </div>
      </div>

      {/* Drone View Instructions Helper */}
      {cameraMode === 'drone' && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 glass-panel px-4 py-2 rounded-[999px] text-xs text-white flex items-center space-x-3 border border-[var(--accent)]/40 shadow-xl">
          <span className="font-semibold text-[var(--accent)]">DRONE FLY MODE:</span>
          <span>Use <kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono">W</kbd> <kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono">A</kbd> <kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono">S</kbd> <kbd className="bg-white/10 px-1.5 py-0.5 rounded font-mono">D</kbd> keys & mouse drag to fly over valley</span>
        </div>
      )}

      <div className="absolute top-20 right-4 z-20 w-64 glass-panel p-3 rounded-[16px] text-[10px] space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className="font-bold uppercase tracking-wider text-white">Load real DEM</span>
          <span className="text-[var(--accent)] font-mono">{dem ? 'ACTIVE' : 'STAND-IN'}</span>
        </div>
        <label className="block text-[var(--ink-muted)]">Raw float32 heightmap.bin</label>
        <input type="file" accept=".bin" onChange={(event) => setDemFile(event.target.files?.[0] ?? null)} className="w-full text-[10px] text-[var(--ink-muted)] file:mr-2 file:rounded file:border-0 file:bg-white/10 file:px-2 file:py-1 file:text-[10px] file:text-white" />
        <div className="grid grid-cols-2 gap-2">
          <label className="text-[var(--ink-muted)]">Width<input value={demWidth} onChange={(event) => setDemWidth(event.target.value)} type="number" min="2" className="mt-1 w-full rounded border border-white/10 bg-[#0B0E12] px-2 py-1 text-white" /></label>
          <label className="text-[var(--ink-muted)]">Height<input value={demHeight} onChange={(event) => setDemHeight(event.target.value)} type="number" min="2" className="mt-1 w-full rounded border border-white/10 bg-[#0B0E12] px-2 py-1 text-white" /></label>
        </div>
        <label className="block text-[var(--ink-muted)]">Dam position: upstream to downstream<input type="range" min="5" max="95" value={damPosition * 100} onChange={(event) => setDamPosition(Number(event.target.value) / 100)} className="mt-1 w-full accent-[var(--accent)]" /><span className="mt-1 block text-right font-mono text-white">{Math.round(damPosition * 100)}%</span></label>
        <label className="block text-[var(--ink-muted)]">Reservoir level (m)<input type="number" value={reservoirLevel} onChange={(event) => setReservoirLevel(Number(event.target.value) || 0)} min="0" step="0.5" className="mt-1 w-full rounded border border-white/10 bg-[#0B0E12] px-2 py-1 text-white" /></label>
        <button onClick={() => void applyDem()} className="w-full rounded-lg bg-[var(--accent)] px-3 py-2 font-bold text-[#080b10] hover:brightness-110">APPLY &amp; RESET TERRAIN</button>
        <p className="min-h-7 text-[var(--ink-muted)] leading-relaxed">{demStatus}</p>
        <p className="text-[9px] leading-relaxed text-[var(--ink-dim)]">SRTM usually cannot resolve the dam wall itself; use the position slider to align the synthetic ridge with the real valley.</p>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 18, 28], fov: 45 }}
        shadows
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[20, 40, 20]} intensity={1.2} castShadow />
        <pointLight position={[-10, 10, 0]} intensity={2} color="#0284C7" />

        <TerrainMesh showSatelliteOverlay={showSatelliteOverlay} dem={dem} damPosition={damPosition} />
        <WaterSurface currentTimeStep={currentTimeStep} reservoirLevel={reservoirLevel} />
        <SPHParticles currentTimeStep={currentTimeStep} />

        {villages.map((v) => {
          const isSelected = selectedVillage?.id === v.id;
          return (
            <group key={v.id} position={v.coords3D}>
              <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <Html distanceFactor={25} center>
                  <div
                    onClick={() => onSelectVillage(v)}
                    className={`cursor-pointer transition-all duration-300 transform hover:scale-110 ${
                      isSelected ? 'scale-110 z-30' : 'z-20'
                    }`}
                  >
                    <div
                      className={`glass-panel px-2.5 py-1.5 rounded-[14px] flex items-center space-x-2 border ${
                        isSelected
                          ? 'border-[var(--accent)] bg-[var(--surface-raised)] shadow-xl shadow-[#FF6A3D]/40'
                          : 'border-white/20 hover:border-white/50'
                      }`}
                    >
                      <MapPin className={`w-4 h-4 ${v.priority === 'high' ? 'text-[var(--accent)]' : 'text-sky-400'}`} />
                      <div className="text-left">
                        <div className="text-[11px] font-bold text-white whitespace-nowrap">{v.name}</div>
                        <div className="flex items-center space-x-1.5 text-[9px] text-[var(--ink-muted)]">
                          <span>t = {v.arrivalTimeMin}m</span>
                          <span>•</span>
                          <span
                            className={`font-semibold uppercase px-1 rounded ${
                              v.priority === 'high'
                                ? 'bg-[#FF6A3D]/20 text-[#FF6A3D]'
                                : v.priority === 'medium'
                                ? 'bg-sky-500/20 text-sky-400'
                                : 'bg-slate-500/20 text-slate-400'
                            }`}
                          >
                            {v.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Html>
              </Float>
            </group>
          );
        })}

        {cameraMode === 'cinematic' ? (
          <OrbitControls maxPolarAngle={Math.PI / 2.1} minDistance={10} maxDistance={50} enableDamping />
        ) : (
          <FlyControls movementSpeed={12} rollSpeed={0.5} dragToLook />
        )}
      </Canvas>
    </div>
  );
};
