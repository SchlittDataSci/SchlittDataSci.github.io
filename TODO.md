# TODO

## Done — event-driven map + layout rework (Aug 20)
- Map markers now represent REPORTED EVENTS (reports tab, 77 with coordinates), positioned at their real [lat,lon] (many sub-national), sized + coloured by Risk Severity Score 1–9 (sevColor heat, blurple→amber→red). Marker/globe click selects that event's brief (focusEvent). Size seg = Risk score | Cases. De-overlap spiral jitter for shared national coords.
- Layout: grid-main is now the full-width map. row-2col = thin plots panel (0.82fr) + wide master-detail briefs panel (1.85fr) that holds the Event reports list beside the AI brief it drives (fixed 620px height, internal scroll on list + brief).
- Summary counters are now scoped to the SELECTED pathogen (statScope label), fixing the cross-pathogen cumulative-sum inflation.
- Trend/source charts enlarged (190/92) so the plots panel fills its height.

## Done — real coordinates
- reports tab Coordinate column ([lat,lon], 80 valid) parsed; GSHEET_REPORTS_URL switched to the new sheet (gid 649975965).

## Earlier — new sheet + canonical/article layer + globe
- Data source switched to the updated sheet (`1dWcBrV_…`, gid 881754490) which adds `is_canonical`, `canonical_reason`, `sources` (article URL).
- Records generalized from 7 curated COMBOS to ALL country×pathogen clusters (~43 across 30 countries) — stats, table, drilldown now agree with the map.
- Trend line: each point is a clickable canonical-article dot (accent = has canonical source) → opens the article; hover shows the canonical reason.
- Source-per-day bars are clickable → article popup listing every source URL for that date, canonical first, each with a one-line extraction summary (value/measure/location/species + quality flag).
- Map view toggle: Flat (D3, default) | Globe (MapLibre, dark CARTO raster + ESRI satellite toggle, globe projection, same country markers with popups + click-to-fly + drilldown).

## Known limitation
- The MapLibre globe's WebGL basemap does NOT composite in the agent/verifier sandbox (software GL) — renders blank in tool screenshots though tiles fetch fine and all state is healthy; it renders in a real browser. Flat map is the default so the primary view is unaffected. CONFIRM the globe in a real browser.

## Earlier — map overhaul + layout
- Moved the 4 stat cards + forecast out of the 3rd grid-main column INTO the plots pane (top of the trend card); grid-main is now 2-col (events | map) and the map is much larger (560px).
- Map rebuilt: `geoNaturalEarth1` + `d3.zoom` (scroll/drag/+/−/reset), one marker per reporting country via `buildMarkers()`/`GEO`/`geoCountry()` — 32 countries now render (was 7 hardcoded COMBOS). Richer tooltips (per-pathogen cases/deaths) + click-to-zoom-and-drill (`openMarkerDetail`).

## Known follow-ups from the critique (NOT yet done)
- Stat cards + latest-figures table + pathogen trend selector still only cover the 7 curated `COMBOS`; the map now shows all 32 countries, so "Countries reporting: 7" reads inconsistent with the map. Generalizing `records`/the table to all countries is the next big step.
- Supranational location strings (Europe, European Union, "Multiple - …") and comma-less subnational strings (Greek municipalities, "Multiple United States") are dropped from the map — not point-locatable. Consider a "regional clusters (not mapped)" note.
- Pathogen select still only drives the trend chart, not the map/stats/table.

## Original task (trend section) — still current below

## In progress — expand trend section
Goal: expand the confirmed cases & deaths chart, and add a shared-x-axis "sources per day" plot beneath/alongside it. Both driven by a **pathogen selector** (new UI control), defaulting to **Bundibugyo ebolavirus**.

Steps:
1. [ ] Inspect actual CSV columns live (fetch `GSHEET_CSV_URL`, log a few rows) to confirm: exact geography-level field name (e.g. `admin_level`, or infer national vs subnational from `location` string granularity), exact pathogen value strings (confirm "Bundibugyo virus" / "Bundibugyo ebolavirus" spelling as it appears in `pathogen` column), and whether there's a distinct "outcome" processed value column vs raw `value`.
2. [ ] Write a proper aggregation function, e.g. `aggregateByDate(rows, pathogen, measure)`:
   - filter `outlier === 'False'` (the statistically-processed/outcome rows)
   - filter to national-level geography rows for that date; if a date has no national row, fall back to: group remaining subnational rows by county/subnational unit, take max value per unit, sum units
   - group by `report_date`, output one value per day
   - do this independently for `confirmed_cases`, `confirmed_deaths`, and a `sources`/`n_sources` count per day (union of source URLs per day, or sum of `n_sources` — decide once columns confirmed)
3. [ ] Add a pathogen `<select>` (Nocturne `.input`) near the existing trend chart card, populated from distinct `pathogen` values in the sheet, default selection = Bundibugyo ebolavirus.
4. [ ] Redraw the cases & deaths trend chart (bigger) driven by the selected pathogen using the new aggregation (currently hardcoded to DRC Ebola combined virus list).
5. [ ] Add new shared-x-axis chart underneath: bars or line for "sources per day" (count of distinct sources / n_sources backing that day's figure), x-axis aligned/synced with the cases-deaths chart above (same date domain, same width/margins so they visually line up).
6. [ ] Update card headers/labels to reflect selected pathogen (currently says "DRC Ebola trend").
7. [ ] Re-verify language throughout (stat cards, tooltips, table caption) doesn't overstate precision — note aggregation caveat somewhere visible (e.g. small caption under the new chart).
8. [ ] `ready_for_verification`.

## Open questions / assumptions to confirm if picking this back up cold
- Exact column name(s) for geography level in the sheet — not yet confirmed by inspecting live data. May need to infer from `location` (e.g. "Country, Province" = subnational, "Country" alone = national).
- Whether "outcome data" refers to the `outlier` flag specifically, or a separate already-aggregated column. Current code only uses `outlier==='False'`.
- Whether "sources per day" means count of rows contributing that day, count of distinct URLs, or the existing `n_sources` field summed.

## Backlog (not started, mentioned earlier but no active ask)
- None currently — everything above is the live task.
