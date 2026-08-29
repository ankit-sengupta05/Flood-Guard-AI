import React, { useRef, useState, useMemo } from 'react';
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

// Procedural 3D Terrain Mesh Component
const TerrainMesh: React.FC<{ showSatelliteOverlay: boolean }> = ({ showSatelliteOverlay }) => {
  const terrainGeometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(50, 50, 80, 80);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const distFromRiver = Math.abs(y);
      let z = Math.sin(x * 0.15) * 1.5 + Math.pow(distFromRiver * 0.35, 1.8) - 2.5;
      
      if (Math.abs(x + 10) < 1.5 && Math.abs(y) < 12) {
        z += 8 - Math.abs(y) * 0.4;
      }
      
      if (x < -10 && distFromRiver < 10) {
        z = Math.min(z, 3.5);
      }
      
      pos.setZ(i, z);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

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
const WaterSurface: React.FC<{ currentTimeStep: number }> = ({ currentTimeStep }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const floodLevel = useMemo(() => {
    return 0.5 + (currentTimeStep / 60) * 3.8;
  }, [currentTimeStep]);

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

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 18, 28], fov: 45 }}
        shadows
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[20, 40, 20]} intensity={1.2} castShadow />
        <pointLight position={[-10, 10, 0]} intensity={2} color="#0284C7" />

        <TerrainMesh showSatelliteOverlay={showSatelliteOverlay} />
        <WaterSurface currentTimeStep={currentTimeStep} />
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
