# Flood-Guard AI API

This is the runnable prototype API. It is seeded from `important-dam-locations.md` and keeps scenario state in memory for local development.

```powershell
python -m pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Demo login tokens:
- `analyst@floodguard.local` -> `demo-analyst`
- `manager@floodguard.local` -> `demo-manager`

Hydrodynamic responses are explicitly `surrogate` mode. Real SPH/Delft3D, PostGIS, Celery/Redis, GEE, and production export storage remain adapter seams described by the project documentation.
