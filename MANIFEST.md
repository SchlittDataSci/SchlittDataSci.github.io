# Project Manifest

## Files
- `dashboard.html` — the entire deliverable. Single Design surface (not a .dc.html — plain HTML page using D3 + the Nocturne CSS/bundle directly). All JS is inline in one `<script>` at the bottom.
- `_ds/nocturne-c236f95b-6f2d-4f5b-9bdc-974f09e4a112/` — bound design system (Nocturne). Do not edit; read `readme.md`/`theme.json` there for tokens if needed.
- `README.md` — what this project is, data source shape, the aggregation rule.
- `TODO.md` — active task checklist + open questions (read this first after any context reset).
- `uploads/` — user-uploaded files, if any (check before assuming empty).

## dashboard.html structure (for quick re-orientation)
- `<nav class="nav">` — top bar with sync status tag + "Sync now" button (button is currently non-functional decoration).
- `.toolbar` — pathogen / region / location filters (currently **not wired to any rendering** — decorative selects only; the actual filtering task will need to wire the new pathogen select into real state).
- `.grid-main` — 2-column: event list (AI briefs) | large zoomable world map (was 3-column; stat cards moved out — see below).
- `.row-2col` — LEFT: a combined metrics pane = inline stat row (4 stats) + compact forecast line + trend chart (`#trendSvg`) + sources-per-day chart (`#sourceSvg`). RIGHT: AI brief detail card.
- Map (`renderMap`): D3 `geoNaturalEarth1`, zoom/pan via `d3.zoom` (`zoomBehavior`), one marker per country built by `buildMarkers()` from ALL reporting countries (see `GEO` lon/lat + `geoCountry()` folding of raw location strings). Click/Enter a marker → `zoomToMarker` + `openMarkerDetail` (per-pathogen breakdown dialog). Tooltips list every pathogen with cases/deaths.
- `.table-card` — latest figures table.
- JS sections in order: `COMBOS`/`records`/`trend` fallback data → `renderStats`/`renderTable` → map (D3 geo, `renderMap`) → tooltip helpers → trend chart (`renderChart`, includes static forecast tail arrays `FORECAST_CASES_TAIL`/`FORECAST_DEATHS_TAIL`) → `renderAll()` → live CSV fetch (`GSHEET_CSV_URL`) with `normCountry`/`latestFor` aggregation helpers → live trend derivation (`drcRows`/`byDateMeasure`/`liveTrend`, hardcoded to DRC + Ebola/Bundibugyo pathogens) → AI reports fetch (`GSHEET_REPORTS_URL`) → event list/brief rendering.

## Key functions to know before editing
- `normCountry(loc)` — normalizes free-text location strings to a country name (handles Congo DRC vs RoC ambiguity).
- `latestFor(rows, country, pathogens, measure)` — current per-country "latest value" aggregator; filters `outlier==='False'`, takes the max report_date, then **max across duplicate rows at that date** (not sum). This is the pattern to generalize into the new day-by-day aggregation.
- `liveTrend` construction (in the `.then(rows => ...)` block) — currently DRC-only, combined-virus-list only, one date range. This is what gets replaced/generalized for the pathogen-selectable trend + new sources-per-day chart.
- Chart rendering (`renderChart`) — D3, viewBox `620×200`, margins `{top:14,right:12,bottom:22,left:44}`. New shared-axis chart should reuse the same `x` scale construction and margins for visual alignment.

## Design tokens in use
Nocturne CSS vars via `col('--color-accent-300')` etc. (a `getComputedStyle` helper defined near top of script). Reuse `col()` for any new chart colors — never hardcode hex.
