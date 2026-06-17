# Bordeaux Map — Roadmap

Improvement roadmap for the **Map** mode of the Bordeaux study app. Ordered by dependency and payoff: foundation first (it de-risks later work and ships on its own), then the feature that makes the map worth having over a plain list, then reinforcement and depth.

Status legend: `[ ]` not started · `[x]` done

## Phase 0 — Foundation (geometry + interaction)

Make the map teach geography on its own, and make it operable. Everything later builds on this.

- [x] **Color regions by bank** (Left / Right / Sweet / Entre-Deux-Mers) — done: regions filled by bank with a legend; selection shows as a gold outline so the bank colour stays visible. _(XS)_
- [ ] **Redraw geometry so the Gironde, Garonne, and Dordogne actually separate the banks.** Right now the rivers are decorative curves that enclose nothing — the most important landmark does no teaching work. _(M — hand-drawn SVG, the one real unknown)_ — see **Future Considerations** below for the real-GeoJSON alternative.
- [ ] **Fix label placement** — replace the average-all-points centroid in `getRegionCenter` with a bounding-box center or hand-tuned coordinates. Labels currently drift off irregular shapes (Haut-Médoc, Entre-Deux-Mers). _(S)_
- [ ] **Add hover and keyboard focus states**; make regions focusable and operable (`role`, `tabindex`, Enter/Space, `aria-label`). No desktop preview today, and regions aren't keyboard-reachable. _(S–M)_

Files: `src/components/Map/BordeauxMap.tsx`, `src/components/Map/Map.module.css`, `src/utils/bankColors.ts`.

## Phase 1 — Identification mode (flagship)

Make the map do active recall instead of fact lookup. Today you could swap the SVG for a dropdown and lose almost nothing; this is the change that fixes that.

- [ ] New mode: show a clue, user clicks the matching region.
- [ ] Clues generated from existing `regions.ts` data — name → location, or grape / classification / style → region (e.g. "Click the only First Growth commune with a sweet-wine neighbour").
- [ ] Clue generator + scoring; on a miss, flash the correct region.

Reuses all existing region data — a first version ships with no new content. _(M)_

Files: new `src/components/Map/Identify.tsx` + CSS, a small clue generator util, plus wiring into `App.tsx` and `types/index.ts`.

## Phase 2 — Reinforcement & retention

- [ ] **Persistent map thumbnail during the per-region quiz**, current region highlighted. The map vanishes during the quiz today, losing the spatial anchor exactly when it's being tested. _(S)_
- [ ] **Compare mode** — select two regions, side-by-side fact panel. WSET study leans heavily on comparison (Pauillac vs. Margaux). _(M)_

## Phase 3 — Depth & polish

- [ ] **Pin-drop identification** — place a marker rather than click a region. Harder recall; depends on Phase 1. _(M–L)_
- [ ] **More region quiz questions** (currently 22) and incremental refinement of the SVG geometry toward accurate shapes. _(ongoing)_
- [ ] **Progress persistence to localStorage.** Note this is app-wide, not map-only — it's already on the README Next Steps. _(M)_

## Suggested starting point

- **Afternoon win:** Phase 0's label fix + hover/focus (color-by-bank ✓ done). Visible improvement, no risky SVG surgery.
- **Real upgrade:** full Phase 0 + Phase 1 — the geometry redraw plus identification mode is what turns the map from a clickable fact sheet into a study tool.

## Future Considerations

### Geographical Map Upgrade

_The Phase 0 geometry redraw is the near-term, hand-drawn fix; this is the larger, accurate-geometry path for later._

The current map is a hand-drawn SVG schematic. To upgrade to real geography:

1. **Get GeoJSON boundary data** — French AOC/AOP delimitation files from INAO via data.gouv.fr, or extract from OpenStreetMap via Overpass API
2. **Simplify and convert** — upload GeoJSON to mapshaper.org, simplify to reduce point count, export as SVG
3. **Swap paths** — replace the current hand-drawn `d="..."` coordinates in `BordeauxMap.tsx` with the real projected paths, adjust the viewBox to fit

This approach keeps the same lightweight component structure (no new libraries) — just accurate geometry instead of approximated shapes. If pan/zoom or a tile basemap is later needed, React-Leaflet or D3 geo projection would be the next step up.
