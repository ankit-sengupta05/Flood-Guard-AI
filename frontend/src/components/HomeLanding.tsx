import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Activity, ArrowRight, ChevronRight, Droplets, MapPin, Shield, Waves, X } from 'lucide-react';
import type { Dam } from '../types';
import { HERO_DAM, SECONDARY_DAM } from '../data/demoData';

interface HomeProps {
  onStartSimulation: () => void;
  onExploreDemo: () => void;
  onViewArchitecture: () => void;
}

type RegistryDam = Dam & { demRef?: string; terrainMeshRef?: string };
const configuredApiUrl = import.meta.env.VITE_API_URL?.trim().replace(/\/$/, '');
const isLocalDevelopment = ['localhost', '127.0.0.1'].includes(window.location.hostname);
const API_URL = configuredApiUrl || (isLocalDevelopment ? 'http://127.0.0.1:8000' : '');
const FALLBACK_DAMS: RegistryDam[] = [HERO_DAM, SECONDARY_DAM];

function toDam(record: Record<string, unknown>): RegistryDam {
  return {
    id: String(record.dam_id), name: String(record.name), river: String(record.river), state: String(record.state), district: String(record.district),
    lat: Number(record.lat), lng: Number(record.lng), heightM: Number(record.height_m ?? 0), capacityMcm: Number(record.reservoir_capacity_mcm ?? 0),
    currentStorageMcm: 0, waterLevelPct: Number(record.water_level_pct ?? 0), inflowM3s: 0, outflowM3s: 0, status: String(record.status ?? 'no_active_scenario'), modelMode: 'surrogate',
    demRef: String(record.dem_ref ?? ''), terrainMeshRef: String(record.terrain_mesh_ref ?? ''),
  };
}

function dangerScore(dam: RegistryDam) {
  const scenarioBoost = dam.status.includes('high') ? 24 : dam.status.includes('medium') ? 12 : 0;
  return Math.round(dam.waterLevelPct * 0.72 + scenarioBoost);
}

function project(dam: RegistryDam) {
  return [(dam.lng - 68) / 30 * 16 - 8, (dam.lat - 7) / 31 * 15 - 7.5] as [number, number];
}

function FocusRig({ dam }: { dam: RegistryDam }) {
  const { camera } = useThree();
  const target = useMemo(() => { const [x, y] = project(dam); return new THREE.Vector3(x * 0.36, 1.4, y * 0.36); }, [dam]);
  useFrame(() => { const desired = new THREE.Vector3(target.x, target.y + 10, target.z + 14); camera.position.lerp(desired, 0.045); camera.lookAt(target); });
  return null;
}

function IndiaScene({ dams, selected, onSelect }: { dams: RegistryDam[]; selected: RegistryDam; onSelect: (dam: RegistryDam) => void }) {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-6.8, -6.2); shape.lineTo(-5.5, -4.4); shape.lineTo(-5.7, -2.6); shape.lineTo(-4.2, -1.3); shape.lineTo(-3.8, 1.4); shape.lineTo(-1.7, 3.1); shape.lineTo(-0.3, 5.2); shape.lineTo(2.4, 5.8); shape.lineTo(5.8, 5.1); shape.lineTo(7.3, 3.5); shape.lineTo(6.5, 1.6); shape.lineTo(7.4, -0.3); shape.lineTo(5.9, -2.2); shape.lineTo(4.8, -4.3); shape.lineTo(2.8, -5.4); shape.lineTo(1.5, -7.1); shape.lineTo(0.2, -5.1); shape.lineTo(-1.3, -4.2); shape.lineTo(-3.5, -4.8); shape.lineTo(-4.7, -6.7); shape.closePath();
    return new THREE.ExtrudeGeometry(shape, { depth: 0.5, bevelEnabled: true, bevelSize: 0.08, bevelThickness: 0.08 });
  }, []);
  return <><ambientLight intensity={1.8} /><directionalLight position={[5, 12, 8]} intensity={2.4} castShadow /><mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.35, 0]} receiveShadow><meshStandardMaterial color="#303b3c" roughness={0.9} metalness={0.05} /></mesh><mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.62, 0]}><planeGeometry args={[19, 18]} /><meshBasicMaterial color="#0b0e12" transparent opacity={0.7} /></mesh>{dams.map((dam) => { const [x, y] = project(dam); const active = dam.id === selected.id; return <group key={dam.id} position={[x, active ? 0.9 : 0.52, y]} onClick={(event) => { event.stopPropagation(); onSelect(dam); }}><mesh scale={active ? 1.8 : 1}><sphereGeometry args={[0.11, 18, 18]} /><meshBasicMaterial color="#ff6a3d" /></mesh><mesh rotation={[Math.PI / 2, 0, 0]}><ringGeometry args={[0.15, 0.19, 24]} /><meshBasicMaterial color="#ff6a3d" transparent opacity={active ? 0.9 : 0.38} side={THREE.DoubleSide} /></mesh>{active && <Html distanceFactor={12}><div className="scene-tag"><MapPin size={11} />{dam.name}</div></Html>}</group>; })}<FocusRig dam={selected} /><OrbitControls enablePan={false} minDistance={8} maxDistance={28} maxPolarAngle={1.42} enableDamping dampingFactor={0.08} /></>;
}

function Metric({ label, value, unit }: { label: string; value: string | number; unit?: string }) {
  return <div className="home-metric"><span>{label}</span><strong>{value}<small>{unit}</small></strong></div>;
}

export const HomeLanding: React.FC<HomeProps> = ({ onStartSimulation, onExploreDemo, onViewArchitecture }) => {
  const [dams, setDams] = useState<RegistryDam[]>(FALLBACK_DAMS);
  const [selected, setSelected] = useState<RegistryDam>(FALLBACK_DAMS[0]);
  const [showDetail, setShowDetail] = useState(false);
  const [query, setQuery] = useState('');
  const [loadError, setLoadError] = useState('');
  const [mapReady, setMapReady] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!API_URL) {
      setLoadError('API URL is not configured for this deployment. Set VITE_API_URL in Vercel and redeploy.');
      return;
    }
    fetch(`${API_URL}/dams?page=1&page_size=100`).then((response) => { if (!response.ok) throw new Error('Registry unavailable'); return response.json(); }).then((payload: { items: Record<string, unknown>[] }) => { const registry = payload.items.map(toDam); if (registry.length) { setDams(registry); setSelected(registry[0]); } }).catch(() => setLoadError('Showing cached registry while the API reconnects.'));
    const timer = window.setTimeout(() => setMapReady(true), 120);
    return () => window.clearTimeout(timer);
  }, []);

  const sortedDams = useMemo(() => dams.filter((dam) => `${dam.name} ${dam.river} ${dam.state}`.toLowerCase().includes(query.toLowerCase())).sort((a, b) => dangerScore(b) - dangerScore(a) || a.name.localeCompare(b.name)), [dams, query]);
  const selectDam = (dam: RegistryDam) => { setSelected(dam); setShowDetail(false); listRef.current?.querySelector(`[data-dam-id="${dam.id}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); };

  return <div className="home-command"><div className="home-map-wrap"><div className="home-map-vignette" /><div className={`home-map ${mapReady ? 'map-ready' : ''}`}><Canvas camera={{ position: [0, 11, 16], fov: 42 }} shadows dpr={[1, 1.5]}><IndiaScene dams={dams} selected={selected} onSelect={selectDam} /></Canvas></div><div className="home-map-copy"><span className="eyebrow">LIVE TERRAIN REGISTRY · INDIA</span><h1>See the risk<br /><em>before the water.</em></h1><p>One command view for dam-break scenarios, terrain evidence, and the decisions that follow.</p><div className="home-actions"><button className="primary-action" onClick={onExploreDemo}>RUN DEMO SCENARIO <ArrowRight size={15} /></button><button className="ghost-action" onClick={onViewArchitecture}>HOW IT WORKS</button></div></div><div className="home-map-legend"><span><i className="legend-dot" />REGISTERED DAM</span><span><i className="legend-ring" />SELECTED FOCUS</span><span>3D TERRAIN VIEW</span></div><div className="home-brand"><span className="brand-mark">FG</span><span><strong>FLOOD-GUARD AI</strong><small>DECISION SUPPORT SYSTEM</small></span></div></div><aside className="dam-registry"><div className="registry-head"><div><span className="eyebrow">COMMAND CENTER</span><h2>Dam registry</h2><p>{dams.length} locations · sorted by modeled danger</p></div><div className="registry-status"><i />API {loadError ? 'CACHE' : 'LIVE'}</div></div><div className="registry-search"><Activity size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search dam, river, state" /></div>{loadError && <div className="registry-note">{loadError}</div>}<div className="dam-registry-list" ref={listRef}>{sortedDams.map((dam, index) => <button key={dam.id} data-dam-id={dam.id} className={`registry-card ${selected.id === dam.id ? 'selected' : ''}`} onClick={() => selectDam(dam)}><div className="registry-card-top"><span className="danger-rank">{String(index + 1).padStart(2, '0')}</span><div className="registry-card-title"><strong>{dam.name}</strong><small>{dam.river} · {dam.state}</small></div><span className="danger-score">{dangerScore(dam)}<small>RISK</small></span></div><div className="registry-card-metrics"><span><Droplets size={13} />{dam.waterLevelPct}%<small>WATER LEVEL</small></span><span><Waves size={13} />{dam.heightM || '—'}<small>HEIGHT M</small></span><span className="card-status">{dam.status === 'no_active_scenario' ? 'NO ACTIVE SCENARIO' : dam.status.replace('_', ' ').toUpperCase()}</span></div><ChevronRight className="card-arrow" size={16} /></button>)}</div><div className="registry-footer"><span>SELECTED</span><strong>{selected.name}</strong><button onClick={() => setShowDetail(true)}>OPEN FULL INSIGHT <ArrowRight size={14} /></button></div></aside>{showDetail && <div className="detail-overlay" onClick={() => setShowDetail(false)}><section className="dam-detail" onClick={(event) => event.stopPropagation()}><button className="close-detail" onClick={() => setShowDetail(false)} aria-label="Close details"><X size={18} /></button><span className="eyebrow">DAM INTELLIGENCE BRIEF</span><h2>{selected.name}</h2><p>{selected.river} · {selected.state} · {selected.district}</p><div className="detail-grid"><Metric label="Risk index" value={dangerScore(selected)} unit="/ 100" /><Metric label="Water level" value={selected.waterLevelPct} unit="%" /><Metric label="Dam height" value={selected.heightM || '—'} unit="m" /><Metric label="DEM source" value={selected.demRef ? 'READY' : 'PENDING'} /></div><div className="detail-section"><span className="eyebrow">SIMULATION READINESS</span><div className="readiness-row"><span className="readiness-icon"><Shield size={16} /></span><div><strong>Terrain and flood twin</strong><small>{selected.demRef ? 'DEM reference registered for this dam.' : 'DEM asset has not been ingested yet.'}</small></div><span className="mode-pill">SURROGATE</span></div><div className="readiness-row"><span className="readiness-icon"><Waves size={16} /></span><div><strong>Prediction layers</strong><small>Depth · velocity · arrival time · uncertainty</small></div><span className="mode-pill">READY</span></div></div><div className="detail-section"><span className="eyebrow">NEXT DECISION</span><p className="detail-disclosure">Open the scenario workspace to set breach parameters, generate best/likely/worst variants, review assumptions, and inspect the 3D propagation scene. Results are labeled surrogate until a real engine run is connected.</p></div><button className="primary-action detail-action" onClick={onStartSimulation}>OPEN SIMULATION WORKSPACE <ArrowRight size={15} /></button></section></div>}</div>;
};
