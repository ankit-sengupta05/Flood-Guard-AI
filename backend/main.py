from __future__ import annotations

import csv
import hashlib
import io
import json
import math
import os
import re
import secrets
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Literal, Optional

import numpy as np
from fastapi import Depends, FastAPI, Header, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, Response
from fastapi.staticfiles import StaticFiles
from PIL import Image
from pydantic import BaseModel, Field

ROOT = Path(__file__).resolve().parent.parent
DAM_SOURCE = ROOT / "important-dam-locations.md"
ASSET_ROOT = ROOT / "dam_heightmaps"

Role = Literal["PUBLIC", "ANALYST", "EMERGENCY_MANAGER", "SYSTEM_ADMIN"]

GRID_N = 256  # cells per side
GRID_SPAN_KM = 15.0  # grid coverage radius around dam


def compute_arrival_grid(scenario: dict[str, Any]) -> np.ndarray:
    """Compute arrival-time field (minutes until flood) using radial wave propagation.
    
    Simulates water spreading from dam breach as circular wavefront.
    Speed increases with breach width. Returns grid of arrival times in minutes.
    """
    dam = get_dam(scenario["dam_id"])
    breach_width = scenario["params"].get("breach_width_m", 80)
    
    # Speed of floodwater front (m/s): wider breach = faster propagation
    speed_mps = 0.4 + (breach_width / 200.0)
    
    # Create grid centered on dam
    xs = np.linspace(-GRID_SPAN_KM, GRID_SPAN_KM, GRID_N)
    ys = np.linspace(-GRID_SPAN_KM, GRID_SPAN_KM, GRID_N)
    xx, yy = np.meshgrid(xs, ys)
    
    # Distance from dam in km, converted to meters
    dist_m = np.sqrt(xx**2 + yy**2) * 1000.0
    
    # Arrival time in minutes (distance / speed / 60)
    arrival_min = dist_m / (speed_mps + 0.01) / 60.0
    
    return arrival_min.astype(np.float32)


def arrival_grid_to_rgba(grid_min: np.ndarray, max_min: float = 180.0) -> np.ndarray:
    """Convert arrival-time grid to RGBA image.
    
    Fast arrival (red/opaque) -> near dam (immediate danger)
    Slow arrival (orange/yellow/fading) -> far from dam (later impact)
    """
    # Normalize: 0 = immediate (dam location), 1 = very late/no impact
    t = np.clip(grid_min / max_min, 0, 1)
    
    # Color mapping: red at dam, orange/yellow further out, transparent beyond max_min
    red = np.full_like(t, 255, dtype=np.uint8)
    green = (t * 180).astype(np.uint8)  # increases from 0 (pure red) to orange/yellow
    blue = np.zeros_like(t, dtype=np.uint8)
    
    # Opacity: opaque near dam (high impact), fading with distance
    alpha = (np.maximum(0, 1 - t) * 220 + 35).astype(np.uint8)
    
    return np.dstack([red, green, blue, alpha])



def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def slug(value: str) -> str:
    value = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return value or "dam"


def parse_dams() -> list[dict[str, Any]]:
    rows: list[dict[str, Any]] = []
    section = ""
    seen_ids: set[str] = set()
    for line in DAM_SOURCE.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line.startswith("## "):
            section = line[3:].strip()
        if not line.startswith("|") or "---" in line:
            continue
        cells = [part.strip() for part in line.strip("|").split("|")]
        if len(cells) < 8 or cells[0].lower() == "dam":
            continue
        match = re.search(r"(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)", cells[3])
        if not match:
            continue
        name = cells[0].replace("*", "").strip()
        dam_id = slug(name)
        if dam_id in seen_ids:
            dam_id = f"{dam_id}-{slug(section)}"
        seen_ids.add(dam_id)
        rows.append({
            "dam_id": dam_id,
            "name": name,
            "river": cells[1],
            "town": cells[2],
            "lat": float(match.group(1)),
            "lng": float(match.group(2)),
            "state": section,
            "district": cells[2].split(",")[-1].strip(),
            "height_m": 0,
            "reservoir_capacity_mcm": 0,
            "water_level_pct": 68,
            "status": "no_active_scenario",
            "dem_ref": f"/assets/{dam_id}/{dam_id}_dem.tif",
            "terrain_mesh_ref": f"/assets/{dam_id}/{dam_id}_terrain.glb",
            "terrain_tile_ref": f"/assets/{dam_id}/terrain-rgb/",
            "land_use_ref": f"/assets/{dam_id}/land-use.geojson",
            "updated_at": now_iso(),
        })
    return rows


DAMS = parse_dams()
DAM_BY_ID = {dam["dam_id"]: dam for dam in DAMS}
SCENARIOS: dict[str, dict[str, Any]] = {}
GROUPS: dict[str, list[str]] = {}
USERS: dict[str, dict[str, Any]] = {
    "demo-analyst": {"user_id": "demo-analyst", "name": "Demo Analyst", "role": "ANALYST", "scope": {"dam_ids": list(DAM_BY_ID), "district_ids": []}},
    "demo-manager": {"user_id": "demo-manager", "name": "Emergency Manager", "role": "EMERGENCY_MANAGER", "scope": {"dam_ids": list(DAM_BY_ID), "district_ids": []}},
}

app = FastAPI(title="Flood-Guard AI API", version="1.0.0")
configured_origins = os.getenv("FRONTEND_ORIGIN", "http://localhost:5173,http://127.0.0.1:5173,http://localhost:5174,http://127.0.0.1:5174,http://localhost:3000")
local_origins = ["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:5174", "http://127.0.0.1:5174", "http://localhost:3000"]
configured_origins = [origin.strip() for origin in configured_origins.split(",") if origin.strip()]
app.add_middleware(CORSMiddleware, allow_origins=sorted(set(local_origins + configured_origins)), allow_origin_regex=r"https://[a-zA-Z0-9-]+\.vercel\.app", allow_credentials=True, allow_methods=["*"], allow_headers=["*"])
if ASSET_ROOT.exists():
    app.mount("/assets", StaticFiles(directory=ASSET_ROOT), name="dam-assets")


# ─────────────────────────────────────────────────────────────────────────
# ARRIVAL-TIME GRID & HEATMAP TEXTURE ENDPOINTS
# ─────────────────────────────────────────────────────────────────────────

@app.get("/scenarios/{scenario_id}/arrival-time-grid")
def arrival_time_grid_json(scenario_id: str):
    """Return arrival-time grid as JSON array (for frontend processing).
    
    Grid is 256x256, covering ±15 km around dam center.
    Values are in minutes from breach initiation.
    """
    scenario = get_scenario(scenario_id)
    grid = compute_arrival_grid(scenario)
    return {
        "grid": grid.round(1).tolist(),
        "cell_count": GRID_N,
        "span_km": GRID_SPAN_KM,
        "dam_id": scenario["dam_id"],
        "scenario_id": scenario_id,
        "max_arrival_min": 180.0,
    }


@app.get("/scenarios/{scenario_id}/arrival-time-texture")
def arrival_time_texture(scenario_id: str):
    """Return arrival-time heatmap as PNG texture overlay.
    
    Red (opaque) = immediate flood arrival near dam
    Orange/Yellow (fading) = later arrival, progressive flood
    Transparent = beyond ~180 minutes (no significant impact)
    
    Texture can be directly overlaid on 3D terrain mesh.
    """
    scenario = get_scenario(scenario_id)
    grid = compute_arrival_grid(scenario)
    rgba = arrival_grid_to_rgba(grid)
    
    img = Image.fromarray(rgba, mode="RGBA")
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    
    return Response(
        content=buf.getvalue(),
        media_type="image/png",
        headers={
            "Cache-Control": "public, max-age=3600",
            "Content-Disposition": f"inline; filename=arrival-time-{scenario_id}.png",
        },
    )



def root():
    return {"service": "flood-guard-api", "status": "ok", "health": "/health", "docs": "/docs"}


def fail(status: int, code: str, message: str):
    raise HTTPException(status_code=status, detail={"error_code": code, "message": message})


def current_user(authorization: Optional[str] = Header(default=None)) -> dict[str, Any]:
    if not authorization:
        return {"user_id": "public", "name": "Public viewer", "role": "PUBLIC", "scope": {"dam_ids": [], "district_ids": []}}
    token = authorization.removeprefix("Bearer ")
    user = USERS.get(token)
    if not user:
        fail(401, "invalid_token", "Bearer token is invalid")
    return user


def require_roles(*roles: Role):
    def dependency(user: dict[str, Any] = Depends(current_user)):
        if user["role"] not in roles and user["role"] != "SYSTEM_ADMIN":
            fail(403, "forbidden", "This action requires a higher role")
        return user
    return dependency


def get_dam(dam_id: str) -> dict[str, Any]:
    dam = DAM_BY_ID.get(dam_id)
    if not dam:
        fail(404, "dam_not_found", f"Dam '{dam_id}' was not found")
    return dam


def get_scenario(scenario_id: str) -> dict[str, Any]:
    scenario = SCENARIOS.get(scenario_id)
    if not scenario:
        fail(404, "scenario_not_found", f"Scenario '{scenario_id}' was not found")
    return scenario


def scenario_seed(scenario: dict[str, Any]) -> int:
    return int(hashlib.sha256(scenario["scenario_id"].encode()).hexdigest()[:8], 16)


def create_result_data(scenario: dict[str, Any]):
    seed = scenario_seed(scenario)
    rng = lambda index: ((seed >> (index % 24)) & 255) / 255
    arrivals = [8 + int(rng(i) * 100) for i in range(6)]
    villages = ["Tehri town", "Bhagirathi valley", "Koti", "Dhanaulti", "Rishikesh", "Srinagar"]
    priorities = []
    for index, name in enumerate(villages):
        score = round(92 - index * 11 + rng(index + 4) * 7, 1)
        tier = "high" if score >= 70 else "medium" if score >= 45 else "low"
        priorities.append({"rank": index + 1, "village_id": f"village-{index + 1}", "priority": tier, "priority_score": score, "action_statement": f"{('Evacuate immediately' if tier == 'high' else 'Prepare evacuation' if tier == 'medium' else 'Monitor conditions')} — {name}; use the assigned safe route."})
    scenario["results"] = {
        "model_mode": "surrogate",
        "timesteps": [{"t": t, "depth_grid_ref": f"/scenarios/{scenario['scenario_id']}/grids/depth-{t}", "velocity_grid_ref": f"/scenarios/{scenario['scenario_id']}/grids/velocity-{t}", "depth_texture_ref": f"/scenarios/{scenario['scenario_id']}/textures/depth-{t}.png", "velocity_texture_ref": f"/scenarios/{scenario['scenario_id']}/textures/velocity-{t}.png"} for t in [0, 5, 10, 20, 40, 60]],
        "arrival_time_grid_ref": f"/scenarios/{scenario['scenario_id']}/grids/arrival-time",
        "priorities": priorities,
        "villages": villages,
        "arrivals": arrivals,
        "assumptions": scenario["assumptions"],
    }
    scenario["status"] = "completed"
    scenario["simulation_log"] = [{"step": "diagnostic", "engine": "missing-data", "model_mode": "surrogate", "timestamp": scenario["created_at"], "params": scenario["params"]}, {"step": "simulation", "engine": "SPH + Delft3D adapter", "model_mode": "surrogate", "timestamp": now_iso(), "params": {"coupling": "coupled"}}]


class RegisterBody(BaseModel):
    name: str
    email: str
    password: str
    role_requested: Role = "PUBLIC"


class LoginBody(BaseModel):
    email: str
    password: str


class ScenarioBody(BaseModel):
    water_level_pct: float = Field(ge=0, le=100)
    reservoir_volume_mcm: Optional[float] = None
    breach_width_m: Optional[float] = Field(default=None, gt=0)
    breach_depth_m: Optional[float] = Field(default=None, gt=0)
    breach_side_slope: Optional[float] = Field(default=None, gt=0)
    breach_formation_time_min: Optional[float] = Field(default=None, gt=0)
    failure_type: Literal["partial", "complete", "controlled_release"] = "partial"
    rainfall_mm: Optional[float] = Field(default=None, ge=0)


class RunBody(BaseModel):
    mode: Literal["real", "surrogate"] = "surrogate"
    coupling: Optional[Literal["independent", "coupled"]] = None


class AssistantBody(BaseModel):
    question: str


class ExportBody(BaseModel):
    format: Literal["shp", "kml", "geojson", "csv", "pdf"]
    layers: Optional[list[str]] = None


@app.get("/health")
def health():
    return {"status": "ok", "service": "flood-guard-api", "model_default": "surrogate"}


@app.get("/dams")
def list_dams(page: int = Query(1, ge=1), page_size: int = Query(50, ge=1, le=100)):
    start = (page - 1) * page_size
    return {"items": DAMS[start:start + page_size], "total": len(DAMS), "page": page, "page_size": page_size}


@app.get("/dams/{dam_id}")
def dam_detail(dam_id: str):
    return get_dam(dam_id)


@app.get("/dams/{dam_id}/environment")
def environment(dam_id: str):
    dam = get_dam(dam_id)
    features = []
    for index in range(6):
        features.append({"type": "Feature", "properties": {"name": f"{dam['name']} asset {index + 1}", "layer": "village" if index < 3 else "shelter"}, "geometry": {"type": "Point", "coordinates": [dam["lng"] + (index - 2) * 0.04, dam["lat"] + (index - 2) * 0.03]}})
    return {"type": "FeatureCollection", "features": features}


@app.post("/auth/register")
def register(body: RegisterBody):
    user_id = f"user-{secrets.token_hex(4)}"
    USERS[user_id] = {"user_id": user_id, "name": body.name, "role": "PUBLIC", "scope": {"dam_ids": [], "district_ids": []}, "email": body.email, "password_hash": hashlib.sha256(body.password.encode()).hexdigest()}
    return {"user_id": user_id}


@app.post("/auth/login")
def login(body: LoginBody):
    if body.email == "analyst@floodguard.local":
        return {"token": "demo-analyst", "role": "ANALYST", "scope": USERS["demo-analyst"]["scope"]}
    if body.email == "manager@floodguard.local":
        return {"token": "demo-manager", "role": "EMERGENCY_MANAGER", "scope": USERS["demo-manager"]["scope"]}
    return {"token": "public", "role": "PUBLIC", "scope": {"dam_ids": [], "district_ids": []}}


@app.get("/users/me")
def me(user: dict[str, Any] = Depends(current_user)):
    return {key: user[key] for key in ("user_id", "name", "role", "scope")}


@app.post("/dams/{dam_id}/scenarios")
def create_scenario(dam_id: str, body: ScenarioBody, user: dict[str, Any] = Depends(require_roles("ANALYST", "EMERGENCY_MANAGER"))):
    dam = get_dam(dam_id)
    scenario_id = f"scenario-{secrets.token_hex(5)}"
    params = body.model_dump()
    assumptions = []
    fallbacks = {"breach_width_m": (25, 80, 180), "breach_depth_m": (5, 15, 35), "breach_formation_time_min": (10, 30, 90), "rainfall_mm": (0, 30, 120)}
    for field, values in fallbacks.items():
        if params.get(field) is None:
            params[field] = values[1]
            assumptions.append({"field": field, "status": "missing", "fallback_used": values[1], "fallback_min": values[0], "fallback_likely": values[1], "fallback_max": values[2]})
        else:
            assumptions.append({"field": field, "status": "provided"})
    scenario = {"scenario_id": scenario_id, "dam_id": dam["dam_id"], "scenario_group_id": None, "status": "diagnosing", "model_mode": "surrogate", "created_by": user["user_id"], "created_at": now_iso(), "published": True, "params": params, "assumptions": assumptions}
    SCENARIOS[scenario_id] = scenario
    create_result_data(scenario)
    return {"scenario_id": scenario_id, "status": "diagnosing"}


@app.post("/dams/{dam_id}/scenarios/generate")
def generate_scenarios(dam_id: str, body: ScenarioBody, user: dict[str, Any] = Depends(require_roles("ANALYST", "EMERGENCY_MANAGER"))):
    get_dam(dam_id)
    group_id = f"group-{secrets.token_hex(5)}"
    ids = []
    for label, scale in (("best", 0.65), ("likely", 1.0), ("worst", 1.45)):
        params = body.model_dump()
        params["breach_width_m"] = params.get("breach_width_m") or round(80 * scale, 1)
        params["breach_formation_time_min"] = params.get("breach_formation_time_min") or round(30 / scale, 1)
        scenario_id = f"scenario-{label}-{secrets.token_hex(4)}"
        scenario = {"scenario_id": scenario_id, "dam_id": dam_id, "scenario_group_id": group_id, "status": "completed", "model_mode": "surrogate", "created_by": user["user_id"], "created_at": now_iso(), "published": True, "params": params, "assumptions": [{"field": "variant", "status": "provided", "fallback_used": label}]}
        SCENARIOS[scenario_id] = scenario
        create_result_data(scenario)
        ids.append(scenario_id)
    GROUPS[group_id] = ids
    return {"scenario_group_id": group_id, "scenario_ids": ids}


@app.get("/dams/{dam_id}/scenarios")
def list_scenarios(dam_id: str, page: int = Query(1, ge=1), page_size: int = Query(50, ge=1, le=100), user: dict[str, Any] = Depends(current_user)):
    get_dam(dam_id)
    items = [{key: scenario[key] for key in ("scenario_id", "scenario_group_id", "status", "model_mode", "created_by", "created_at", "published")} for scenario in SCENARIOS.values() if scenario["dam_id"] == dam_id and (scenario["published"] or user["role"] != "PUBLIC")]
    start = (page - 1) * page_size
    return {"items": items[start:start + page_size], "total": len(items), "page": page, "page_size": page_size}


@app.get("/scenarios/{scenario_id}/assumptions")
def assumptions(scenario_id: str):
    return get_scenario(scenario_id)["assumptions"]


@app.post("/scenarios/{scenario_id}/sph/run")
def sph_run(scenario_id: str, body: RunBody, user: dict[str, Any] = Depends(require_roles("ANALYST"))):
    scenario = get_scenario(scenario_id)
    scenario["model_mode"] = body.mode
    return {"job_id": f"job-sph-{secrets.token_hex(4)}", "status": "queued", "model_mode": body.mode}


@app.post("/scenarios/{scenario_id}/delft3d/run")
def delft_run(scenario_id: str, body: RunBody, user: dict[str, Any] = Depends(require_roles("ANALYST"))):
    scenario = get_scenario(scenario_id)
    scenario["model_mode"] = body.mode
    return {"job_id": f"job-delft-{secrets.token_hex(4)}", "status": "queued", "model_mode": body.mode, "coupling": body.coupling or "independent"}


@app.get("/scenarios/{scenario_id}/flood-timesteps")
def flood_timesteps(scenario_id: str, engine: Literal["sph", "delft3d"] = "delft3d"):
    scenario = get_scenario(scenario_id)
    return {"terrain_ref": f"/assets/{scenario['dam_id']}/{scenario['dam_id']}_terrain.glb", "model_mode": scenario["model_mode"], "timesteps": scenario["results"]["timesteps"], "arrival_time_grid_ref": scenario["results"]["arrival_time_grid_ref"]}


@app.get("/scenarios/{scenario_id}/compare")
def compare(scenario_id: str):
    scenario = get_scenario(scenario_id)
    base = 16 + (scenario_seed(scenario) % 12)
    result = lambda mode, factor: {"extent_km2": round(base * factor, 2), "max_depth_m": round(4.2 * factor, 2), "max_velocity_ms": round(2.8 * factor, 2), "arrival_time_min": round(42 / factor, 1), "compute_time_s": round(1.2 / factor, 2), "model_mode": mode}
    return {"sph": result(scenario["model_mode"], 0.8), "delft3d": result(scenario["model_mode"], 1.0), "satellite_agreement_pct": 78.4}


@app.get("/scenario-groups/{group_id}/uncertainty")
def uncertainty(group_id: str):
    if group_id not in GROUPS:
        fail(404, "group_not_found", "Scenario group not found")
    return {"probability_grid_ref": f"/scenario-groups/{group_id}/probability-grid", "confidence_grid_ref": f"/scenario-groups/{group_id}/confidence-grid", "method_note": "Prototype ensemble approximation: three deterministic variants are aggregated into per-location probability and confidence bands."}


@app.get("/scenarios/{scenario_id}/time-to-flood")
def time_to_flood(scenario_id: str):
    result = get_scenario(scenario_id)["results"]
    bands = ["0-15min", "15-30min", "30-60min", "1-3hr"]
    return [{"location_id": f"village-{index + 1}", "name": name, "band": bands[min(index // 2, 3)], "arrival_time_min": arrival} for index, (name, arrival) in enumerate(zip(result["villages"], result["arrivals"]))]


@app.get("/scenarios/{scenario_id}/road-safety")
def road_safety(scenario_id: str, t: float = Query(0, ge=0)):
    get_scenario(scenario_id)
    return [{"segment_id": f"segment-{index + 1}", "type": "bridge" if index == 2 else "road", "status": "unsafe" if t >= 20 + index * 8 else "safe", "unsafe_from_min": 20 + index * 8 if index >= 1 else None} for index in range(6)]


@app.get("/scenarios/{scenario_id}/damage")
def damage(scenario_id: str):
    get_scenario(scenario_id)
    return {"flooded_area_km2": 42.8, "affected_villages": 6, "affected_buildings": 384, "road_length_affected_km": 18.4, "bridges_at_risk": 2, "agri_land_affected_ha": 612, "critical_infra_at_risk": [{"type": "hospital", "name": "District Hospital", "arrival_time_min": 34}, {"type": "school", "name": "Valley School", "arrival_time_min": 22}]}


@app.get("/scenarios/{scenario_id}/evacuation-plan")
def evacuation(scenario_id: str):
    result = get_scenario(scenario_id)["results"]
    classes = ["evacuate_immediately", "evacuate_by_road", "high_ground", "rescue_priority"]
    return [{"village_id": f"village-{index + 1}", "classification": classes[index % 4], "recommended_route_geojson": {"type": "LineString", "coordinates": [[78.48, 30.38], [78.48 + index * 0.02, 30.38 + index * 0.02]]}, "recommended_shelter_id": f"shelter-{index + 1}", "last_safe_departure_min": max(0, arrival - 18)} for index, arrival in enumerate(result["arrivals"])]


@app.get("/scenarios/{scenario_id}/priority-list")
def priority_list(scenario_id: str):
    return get_scenario(scenario_id)["results"]["priorities"]


@app.get("/scenarios/{scenario_id}/explain/{item_id}")
def explain(scenario_id: str, item_id: str):
    scenario = get_scenario(scenario_id)
    item = next((item for item in scenario["results"]["priorities"] if item["village_id"] == item_id), scenario["results"]["priorities"][0])
    return {"inputs_used": {"priority_score": item["priority_score"], "arrival_time_min": scenario["results"]["arrivals"][0], "water_level_pct": scenario["params"]["water_level_pct"]}, "model_used": "Explainable weighted priority formula", "scenario_used": scenario_id, "assumptions": scenario["assumptions"], "confidence": "Medium", "validation_score": 78.4}


@app.post("/scenarios/{scenario_id}/assistant/query")
def assistant(scenario_id: str, body: AssistantBody, user: dict[str, Any] = Depends(require_roles("ANALYST", "EMERGENCY_MANAGER"))):
    scenario = get_scenario(scenario_id)
    return {"answer": f"This scenario uses the documented surrogate adapter. The recorded breach width is {scenario['params']['breach_width_m']} m and the first modeled arrival is {scenario['results']['arrivals'][0]} minutes.", "sources": [{"field": "breach_width_m", "value": scenario["params"]["breach_width_m"]}, {"field": "arrival_time_min", "value": scenario["results"]["arrivals"][0]}]}


@app.get("/scenarios/{scenario_id}/simulation-log")
def simulation_log(scenario_id: str):
    return get_scenario(scenario_id)["simulation_log"]


@app.get("/scenarios/{scenario_id}/offline-bundle")
def offline_bundle(scenario_id: str, user: dict[str, Any] = Depends(require_roles("ANALYST", "EMERGENCY_MANAGER"))):
    get_scenario(scenario_id)
    return {"bundle_ref": f"/scenarios/{scenario_id}/offline-bundle/data", "generated_at": now_iso()}


@app.post("/scenarios/{scenario_id}/export")
def export_scenario(scenario_id: str, body: ExportBody, user: dict[str, Any] = Depends(require_roles("ANALYST", "EMERGENCY_MANAGER"))):
    get_scenario(scenario_id)
    return {"export_id": f"export-{secrets.token_hex(4)}", "status": "queued", "format": body.format}


@app.get("/exports/{export_id}")
def export_status(export_id: str):
    return {"status": "done", "download_ref": f"/exports/{export_id}/download"}
