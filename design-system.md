# Design System — Flood-Guard AI

This document is the single source of truth for visual language across the dashboard. Every page in `frontend_spec.md` inherits from this file rather than defining its own colors, shapes, or type. It exists because a 12-engine, 18-page emergency-command product only reads as trustworthy if it looks like *one* product — not eighteen independently-styled screens.

## 1. Design Philosophy

Flood-Guard AI is an emergency decision-support tool, not a consumer app. The visual language follows three rules:

1. **Minimal, not decorative.** Every color, shadow, and animation either communicates state (safe/unsafe, high/medium/low priority, real/surrogate) or it doesn't exist. No gradients, illustrations, or filler graphics.
2. **The 3D scene is the hero.** UI chrome (panels, cards, nav) is deliberately quiet — near-monochrome — so the terrain, flood extent, and satellite imagery inside the 3D viewport carry the color and detail. Chrome that competes with the data for attention is a bug.
3. **One accent, used sparingly.** A single accent color means "look here" everywhere in the product. Overusing it anywhere destroys that signal.

## 2. Color System — Strictly 2–3 Colors

| Token | Hex | Role |
|---|---|---|
| `--surface-base` | `#0B0E12` | App background, 3D scene backdrop, nav rail. Near-black, not pure black — keeps depth in the terrain rendering. |
| `--surface-raised` | `#151A21` | Cards, panels, modals — one step up from base. |
| `--ink` | `#F4F6F8` | Primary text/icons on dark surfaces. |
| `--ink-muted` | `#8A94A3` | Secondary text, labels, inactive states. (Tint of `--ink`, not a new hue — doesn't count against the color budget.) |
| `--accent` | `#FF6A3D` | The **one** accent: primary CTAs, active nav state, selected timeline position, "Evacuate Immediately" / High Priority marks, hover highlight on dam markers. |
| `--accent-dim` | `#FF6A3D` at 16% opacity | Accent-tinted backgrounds (selected card, active tab underline glow) — same hue, not a new color. |

That's the full palette: **one near-black neutral, one near-white neutral, one accent** (with opacity/tint variants of each, which don't count as new colors). No blue-for-water, no green-for-safe, no red-for-danger palette — see §5 for how state is communicated without adding hues.

Light backgrounds are not used anywhere in the product; the dashboard is dark-surface only, matching the command-center reference in the master prompt and keeping satellite/terrain imagery the highest-contrast thing on screen.

## 3. Shape Language — Circular / Pill-First

Every discrete UI container uses a rounded shape from this scale — no sharp (0px) corners anywhere in the product:

| Token | Radius | Used for |
|---|---|---|
| `--radius-pill` | 999px (fully round) | Dam status chips, role badges, priority badges (High/Medium/Low), the timeline scrubber handle, nav icons (circular icon buttons) |
| `--radius-card` | 28px | Dam list cards on the Home/Command Center, stat cards, the Explain-This-Result panel |
| `--radius-panel` | 20px | Larger containers — side panels, modals, the Assumption Log table wrapper |
| `--radius-control` | 14px | Buttons, inputs, dropdowns |

Dam markers on the 3D globe are rendered as circular pins (a filled circle + soft outer ring, no pin-drop teardrop shape) so they read consistently whether viewed top-down or at a low drone-camera angle. Photos/thumbnails inside cards are always circle- or squircle-masked, never square.

## 4. Typography

- One typeface family, two weights only: Regular (body, data values) and Semibold (headings, priority labels, key numbers). No third weight, no italic use for emphasis — emphasis is done with `--accent` color or size, not style.
- Numbers that matter (arrival time, depth, priority score) are set in a tabular/monospaced numeral style so they don't jitter as the timeline animates.
- Recommended stack: **Inter** (or **General Sans**) for UI text, tabular-nums enabled for data values. No display/decorative fonts.

## 5. Communicating State Without Adding Colors

Because the palette is capped at one accent, state (safe/unsafe, priority tier, confidence) is communicated by **shape + brightness + label text**, not by a rainbow of semantic colors:

- **Priority (High/Medium/Low):** filled pill in `--accent` (High) → outlined pill in `--ink-muted` (Medium) → ghost/transparent pill (Low). Always paired with the word, never color-only, for accessibility.
- **Road/bridge safety:** solid line at full `--ink` opacity = safe; dashed line at `--ink-muted` = unsafe. Never a green/red road overlay.
- **Model mode:** a small `REAL` / `SURROGATE` pill badge (text-first, per NFR7) rather than a color code — this is a labeling requirement (`constraints.md` C6), not a decoration, so it must never rely on color alone to convey which mode produced a result.
- **Confidence (High/Medium/Low):** three filled dots of `--accent`, `--accent` at 50%, `--accent` at 20% respectively, next to the text label.

## 6. The Home / Command Center Vignette

The India base map (see `frontend_spec.md` §1) uses a radial vignette — the 3D globe/terrain is at full brightness in the center of the viewport and fades toward `--surface-base` at the edges. This is a CSS/post-process overlay on the 3D canvas (a radial-gradient div layered above the WebGL canvas, or a fragment-shader vignette pass if done inside the 3D engine itself), not a separate image asset. It exists to keep focus on India and the dam markers rather than the full globe, and to hide the terrain-tile horizon/edge artifacts of a 3D scene that isn't rendering the whole planet at full fidelity.

## 7. Motion

- Camera moves (zoom into a dam, drone free-fly engage/disengage, timeline scrub) ease in/out over 300–500ms — no linear camera motion, it reads as robotic.
- Card hover/selection: a 150ms scale (1.0 → 1.02) plus an `--accent-dim` glow ring — no shadow-only hover states, since shadows read poorly on the dark surface.
- No decorative/looping animation anywhere (no ambient particle backgrounds, no pulsing icons) outside of data that is actually live-updating (flood propagation playback, an active Celery job's progress indicator).

## 8. Componentized Reuse

The following components are shared across all 18 pages and must not be redefined per-page:
- `DamCard` (circular-radius card — see `frontend_spec.md` §1)
- `StatusPill` / `PriorityPill` / `ModeBadge`
- `Scene3DViewport` (the shared 3D canvas wrapper — terrain + flood layers + drone-view toggle, described in `frontend_spec.md` §0 and `tech_stack.md` §1)
- `TimelineScrubber`
- `ExplainPanel`
- `StatGraphCard` (expandable stat card with an inline chart, used on the Dam Detail page and Damage Assessment)

Any new page proposing a new visual pattern instead of reusing one of the above is a design-review flag, not a default.
