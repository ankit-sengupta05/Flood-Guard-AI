# Flood-Guard AI dashboard

Run the API first, then start the dashboard:

```bash
npm install
npm run dev
```

The app reads `VITE_API_URL` and defaults to `http://localhost:8000`. The shared `Scene3DViewport` is a Three.js terrain/flood view with orbit and drone cameras, timeline playback, layer toggles, and explicit SURROGATE labeling.
