# TODO

## Done — Evidence layer Tier 1, deployed to `index.html` (Aug 26)
Cross-feed evidence graph per `EVIDENCE-PLAN.md`. Working copy promoted (`index.evidence.html` → `index.html`).
1. Evidence index (`rebuildEvidenceIndex`, near `normUrl`): normUrl → raw row; pathogen||geoCountry → measurement source URLs. Rebuilt on sheet resolve, reports resolve, and the `rawarticles` event (brief + event list re-render when it lands late).
2. Figure source popup → evidence cards: value header · quality band · canonical/not-canonical chip (+ screen flag, superseded-by-canonical note) · per-article cards with original title, domain, published (parsed from `YYYYMMDDTHHMMSSZ`), vetting/proximity/combined scores. Shared `citeCard()` also powers report citations.
3. Brief banner now shows the CITATION-derived profile (strength label + N articles · M domains · K corroborated facts · P% contributed figures) with an expandable Evidence section: coverage summary, corroboration bars (cases/deaths latest vettings), citation cards chipped DIRECT / RELATED / CITED-ONLY with tooltips. Measurement doc badge intentionally KEPT on event list rows + figures table (different corpora; banner decision recorded in plan doc).
4. Tooltips: map markers gain an Evidence block (articles/domains/vettings/facts on latest date, `comboEvidence`); trend dots gain articles/domains + median article scores + canonical reason; rejected dots gain the canonical figure + reason; sources histogram (daily + stacked + weekly bins) gains Independent domains row (`vettingsAndArticles` now returns `dom`).
5. New helpers all `esc()`-escaped for third-party titles/domains: `esc`, `urlHost`, `measureUrlSet`, `measureFactKey`, `reportEvidence`, `evidenceStrength`, `medianRawScores`, `comboEvidence`, `citeCard`, `reportEvidenceHtml`.
6. Verified live via headless Chromium + full-network-failure pass: index 34 combos/811 urls; relationships 350 direct · 28 related · 53 cited-only across 105 reports; all UI checks PASS; zero page errors both passes. Live-corpus finding: ~14% of report citations sit outside the current extraction window (archived or out-of-window) — see note on heuristic citation selection.
7. Follow-up fixes (same deploy): histogram x-domain now spans contributing-data window only (no forecast-extension crush); brief `<details>` collapsibles normalized to page scale (12.5px, boxed +/−, no trailing whitespace); evidence summary reframed as bulleted list ("Contributed context only — e.g. zoonotic linkage" is intel, not broken data, with window label like `25 Jul – 24 Aug 26`); peer-distribution box strips on evidence bars (peer median across same-pathogen events); deep-link bug fixed — hash pathogen no longer clobbered by species-select reset, segment controls synced and `c=` country flies the map; brief headline now prominent (report title, newspaper-style, with fallback derived title); list title tint gap fixed (0.14em padding); logo enlarged 50% to 63px, scan slices rebuilt as background-colour bars with interleaved z-order, tagline dropped.
Deferred to Tier 2/3 (see plan): raw-table "Used in" column, distribution sparklines, evidence convergence, cross-report source analysis.

## Done — function testing + adversarial round (Aug 26, pre-handoff)
Self-review of the diff plus a fresh Playwright pass caught and fixed five real bugs:
1. **Boot crash on deep links (TDZ)**: readHash assigned `tableMode`, declared ~450 lines later — any `#tm=raw` deep link or persisted pref threw "Cannot access 'tableMode' before initialization" and killed the entire script at boot. Declarations moved up beside the other table state.
2. **Region filter never scoped the scorecard**: Europe selected → stat card still showed 160,597 global cases (pre-existing; `renderStats` never applied `activeRegion`). Now scoped (623 cases · 11 countries · 17 clusters), and the region change listener re-renders the event list too (the `visibleReports` filter existed but nothing re-rendered it — list stayed at 105).
3. **Species-select race**: `populateSpeciesSelect()` ran only in `fetchReports`; reports-before-sheet resolution left the select a lone "All species" while the hash filter silently applied. Now populated in both fetch paths (3/3 timing orders verified).
4. **Dialog focus lost on close**: Esc/backdrop/button hid the dialog with focus stranded on the hidden close button. Opener is now remembered and focus restored on all three close paths.
5. **Stacked sources histogram**: a whole-bar transparent hover overlay sat on top of the segments, making per-segment tooltips unreachable. Overlay removed; the day total folded into each segment tooltip.
Also: Export CSV is disabled in raw mode (it serialised the stale figures rows — the raw tab's own CSV link sits beside it); external `hashchange` now reloads so edited URLs and back/forward re-resolve (our own `writeHash` uses `replaceState` and never fires it); dead `rawQuery` removed.
Testing note: same-document hash navigation does NOT re-run boot — deep links must be verified with fresh document loads.
Deferred (unchanged): XSS-hardening the AI-brief HTML; keyboard access for globe markers; the `reportFilter` event-list swap on event selection (design pass needed).

## Done — second fix round (Aug 26)
1. Top-pathogen determination = most FORECASTED DEATHS (max final-horizon p50 of confirmed_deaths series; max not sum — subnational series overlap). A surveillance-priority pathogen within 10% of the leader wins the near-tie, so Bundibugyo (3,185) keeps featuring over the nonspecific Ebola catch-all (3,310). Replaces data-depth scoring; selector order keeps the priority tier.
2. Species filter defaults to HUMANS on every fresh load — dropped from localStorage persistence (hash s= still wins). Scorecard scope line names a non-default host ("· birds host") so scoped numbers never read as unscoped. Host species column now reflects the filtered subset (viewRows).
3. Raw articles = the figures card's ALTERNATE, swappable table (Figures | Raw articles seg) — not a dialog. Columns: original + translated title, domain link, pathogen, location, host, extracted fact, NORMED vetting score (article_vetting_score log-normalised 0–100, raw value in tooltip), VETTINGS count (distinct articles reporting the exact fact — pathogen+location+measure+value — computed within the raw table, no lossy aggregated-tab join), PROXIMITY (functional_proximity_score 0–1, pipeline combined score in tooltip), published, run. Toolbar filters apply; sortable (score/count columns lead descending) + paginated; thead restores verbatim on switch-back; Accepted/All/Rejected toggle hidden in raw mode (raw rows carry no screening semantics).
4. Raw tab (gid 361501048, ~8 MB) fetched LAZILY ~2.5 s after first paint; powers the raw table AND original-language article titles (URL→title index; slug-derived fallback for the ~69% of aggregated citations absent from the raw tab).
5. Vettings vocabulary locked to cross-source fact duplication: VETTING_TIP ("one article corroborating two facts counts as two vettings; distinct sources counts unique URLs") on the figures column, event list, brief banner and popups.
6. Statistical screen renamed Accepted | All | Rejected (replaces the "Include outlier-screened figures" checkbox; default Accepted; persists via hash/prefs). Vocabulary sweep: "screened out/used" → "rejected/accepted" everywhere; "vetting" never describes the statistical mechanism.
7. Sources histogram rebuilt: bars = per-date vettings; tooltips pair "N vettings · M distinct articles"; click-through lists EXACTLY that date's distinct articles (the old popup listed a combo-wide URL pool — counts went both higher and lower). Weekly binning under ~7px/bar kills the crush; shared SRC_HIST style spec so national, bars-view and stacked subnational histograms share geometry/hover/tooltip (single-series fill accent-600 everywhere; comparison bars keep the map colormap by design).
8. Second row reorganized: events + reports panel LEFT, plots panel right.
9. Private "processing sheet" link removed; footer now carries GitHub (schlittdatasci) + LinkedIn badges and © James Schlitt 2026.
Verified live: featured pathogen = Bundibugyo via near-tie; fresh-context species = humans; raw swap/sort/pager/restore; screen states (rejected 12 / all 31 / accepted 31 locations); histogram tooltip counts == popup lists; zero console errors.

## Done — adversarial audit + priority round (Aug 26)
1. Forecast cap fixed properly: the horizon snaps to the highest multiple of 5 days with p25/p50/p75 LINEARLY INTERPOLATED at the cap. Truncation alone still labelled the last feed point ("19-day forecast"); scorecard and trend fan now end on the same multiple (verified live: "20-day").
2. Surveillance-priority metric (Bundibugyo > West Nile > Hantavirus) now LEADS default-pathogen selection, the All-pathogens featured outbreak and the selector order — the nonspecific "Ebola Virus" catch-all no longer eats the strain-specific Bundibugyo series (two parallel DRC national series exist: Bundibugyo 5,375 vs "Ebola Virus" 5,290). Category relabelled "Ebola Virus (unspecified strain)".
3. Footer notes West Nile is not a true VHF — tracked for completeness.
4. Host species selector now scopes EVERY data element — stats, map choropleth + marker figures, plots (national/subnational/bars + doc badges + outlier notes), figures table. Forecasts are suppressed for non-human hosts ("covers human outcome series only"). Species change also re-renders the trend section (was stats/table/map only — plots lagged).
5. Status vocabulary unified on statusOf (Reporting ≤4d / Slowing ≤14d / Quiet) across figures table, map markers and the Active-outbreaks scorecard — was three different thresholds AND three different words for recency.
6. Vettings verbiage unified — one term, per the pipeline definition (an admitted article from an independent domain corroborating one discrete fact; verified n_sources == source-URL count on 1,549/1,549 rows). Table column is now "Vettings" with a single count (the near-duplicate "N articles / M vettings" pair is gone); popups say "corroborated by N vettings"; CSV columns renamed "Distinct source URLs" / "Vettings". Vacuous "100% clean-screened" removed everywhere (those stats only ever saw outlier==='False' rows, which are all quality_flag 'good').
7. Globe popups now share the tooltip design system (fixes missing spaces between field and value + the style mismatch — .t-row flex never applied inside .globe-pop); drill dialogs get z-index 60 so the sticky figures-table header (z2) no longer paints over them.
8. Event reports list: pathogen mentions are tint-only (outbound links live in the brief header); risk chip can no longer wrap to 2 lines (column 216→244px, chip nowrap, meta truncates with ellipsis).
9. Pathogen links point to WHO topic/fact-sheet pages (URLs verified live) instead of Wikipedia; pathogens with no WHO page (hantaviruses) gracefully get no link.
10. Copy pass: methodology note, popup intros, drill-down intro and table intro tightened; the decorative "Methodology ⓘ" affordance (a span with no handler) removed.
11. Chart tooltips clamp to the viewport; the sources-per-day strip shares the trend chart's forecast-extended x-domain with date-anchored end labels; Events CSV honours the active filters.
Evaluated, NOT built: in-page article preview popups — news publishers send X-Frame-Options/CSP and CORS blocks client-side fetches, so a static site cannot iframe/fetch third-party articles reliably; the extraction-summary popup (value/measure/location/species/quality + link) remains the preview. Deferred: XSS-hardening the AI-brief HTML (injected via stripNan only), keyboard access for globe markers, and the reportFilter behaviour that swaps the event list to subnational-only on selection (needs a design pass, not a patch).

## Done — audit closeout round (Aug 25)
1. Region filter now scopes the event-reports list too (unclassifiable reports always kept); empty-state copy updated.
2. Sortable table headers keyboard-accessible (tabindex/role/aria-sort + Enter/Space).
3. Subnational legend swatches click-to-highlight the location (toggle, ★ marker).
4. localStorage preference persistence (pathogen/species/view/measure/type/region) — URL hash wins when present; invalid pathogens still fall back to All.
5. Globe view degrades honestly on WebGL/tile failure: inline explanation + automatic revert to Flat (was a silent blank + console error).
6. Map risk legend gradient now derives from the sevColor CSS vars (no more hardcoded hex drift).
7. Sticky table header inside the scroll area.
8. Hovering an event report lifts its map glyph (marker-hi ring).
9. Species filter labelled as table-scoping via tooltip.
10. Deferred (documented): full keyboard tooltips for individual chart points — figures table serves as the accessible data surface.

## Done — reliability & exports round (Aug 25)
1. ROOT-CAUSED "live sheet unreachable": a `.textContent()` call on a d3 selection in the bars renderer threw whenever the bars view rendered, and the silent `.catch` blamed the network. Fixed (`.text`), render errors now caught separately from fetch errors, and all fetch catches log the real reason to console.
2. Live-data orchestration: `fetchSheet/fetchReports/fetchForecast` + `loadLiveData()` with 20s timeouts, auto-retry ×2 (2s/5s), working "Sync now" button (was dead — no handler), sync-tag states (Loading → Refreshing (retry n) → Live · HH:MM → Sample data · unreachable — Retry with error tooltip).
3. First-paint: `body.preload` skeletons (stat shimmer, dimmed map/plots, "Loading live data…") until first resolve; on failure a "cached sample data" banner with Retry replaces the old silent seed presentation.
4. Fixed `undefined · —` trend title (worstCombo pathogenRaw guard + label fallback) and the bars/subnational overlap (zoom stale-callback render-generation guard).
5. URL deep-links: hash encodes pathogen/country/view/measure/type/region/species; parsed at boot, written on every filter change; invalid pathogens fall back to All.
6. Exports & print (audit trail): figures CSV now includes figure source URL + all source article URLs; new Events CSV export (title/pathogen/place/risk/rationale/coords/source URLs); "Print / PDF" button with print stylesheet (light theme, expanded panels, link URLs printed after anchors).
7. Copy/labels: pathogen toolbar label, status legend (Reporting ≤4d / Slowing ≤14d / Quiet), search placeholder, "All pathogens" in popup titles, chart zoom hint, map size-legend follows metric, popup ESC-to-close + focus management, table source links split into "Pipeline: processing sheet · data output (CSV)".

## Done — polish round 3 (Aug 25)
1. Two-axis plot zoom (rescaleX + rescaleY) with translateExtent clamped to the plot box; content clipped so nothing exceeds the graph bounds.
2. Map glyphs: invisible enlarged hit circles (~12px min, 1.7× glyph); filter banner in the events panel (prominent pathogen name + count) with a "Reset ✕" button returning everything to All pathogens/national view; pathogen name also shown prominently in the brief header.
3. Article popups: stale fixed-position chart tooltip dismissed on open; .art-extract wraps long locations (fixes crushed popup rows).
4. "L A County" scope fix: comma-less county strings are subnational (was standing in as the US national West Nile figure).
5. Comparison bar plot: auto-selected when the target geography has ≤3 observation dates (8 West Nile countries trigger); target's latest observation + up to 5 nearest same-measure national neighbours (haversine over GEO centroids), ghost diamonds for other observations, excluded chi-sq/monotonicity glyphs, "as of" date under the target bar, and the note "Bar plot selected due to lack of time series data". New Bars|National|Subnational switcher (auto default); legacy subnational checkbox retired.
6. Round-3 addenda: bars sorted ascending, larger labels, bar fill uses the SAME colormap + min/max domain as the map choropleth (shared choroplethDomain/choroplethColor helpers), thicker glyph strokes (2.2px ghosts / 2px excluded) for contrast, target bar outlined in accent. Compact plot-header seg buttons (was default button styling). FIXED: Subnational switcher seeded trendMode (was rendering "undefined · undefined" for DRC); "← National overview" also resets the switcher to auto.
7. Round-3 final: comparison bars now ZOOM (band-range transform + rescaleY, clipped, shared two-axis zoom, dblclick reset); metric (Cases/Deaths) selector moved into the plots header row beside the view selector; bar labels enlarged (13px values, 12px dynamic-truncated names, 11px meta). Pathogen names link to curated Wikipedia articles (PATHOGEN_WIKI, REST-verified; graceful no-link fallback) in the brief header AND event-report titles; brief meta row unified to one 13px font (colour/weight-only hierarchy); event titles tint pathogen (accent-200, linked) vs location (neutral-300) at unchanged size. FIXED: figures table now filters by the pathogen selector (visibleRecords); pathogen selector lists only renderable pathogens (≥1 unflagged confirmed_cases row resolving via geoCountry — drops Puumala/Cape Verde and no-cases entries); subnational-only pathogens (Seoul/Andes) get a reachable Subnational overlay via a top-record context-country fallback.

## Done — polish round 2 (Aug 20)
1. Event reports list: fixed-height column (briefs-card 560px, events-col overflow-y auto) scrolling independently of the AI brief.
2. Map risk colours muted to a low-chroma slate→crimson ramp (sevColor) with calmer marker glow + legend.
3. Summary stats moved OUT of the plots panel INTO an expanded card beside the map (grid-main = map | 320px summary); larger stat numerals + forecast box. Plots panel is charts-only.
4. Trend aggregation is national-scope only (isNationalScope classifier) AND forward-fills each country's last-known cumulative total across reporting-gap dates before summing — fixes both the national/subnational mixing and the cross-country reporting-gap cliff (e.g. Bundibugyo 08-09 was 19, now 3,992). latestCombo (summary/table) prefers national scope with fallback.

## Earlier — event-driven map + layout rework
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
