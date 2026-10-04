# OSINT-VHF: data friction points for the backend

Audience: the backend / pipeline agent. Purpose: a warm handoff of every place the frontend (`index.html`) currently repairs, reinterprets or works around feed data, so each can be fixed at source and the matching frontend shim deleted.

Feeds referenced (Google Sheets CSV exports):
- **Figures**: `gid=881754490`
- **Event reports** (Merged reports): `gid=649975965`
- **Raw articles**: `gid=361501048`
- **Situational Developments**: the named tab, read via gviz
- **Forecast**: a separately published sheet
- **Quarantine list** (censor): a separately published sheet

Each item below gives: **Symptom** → **Frontend mitigation today** (function / where) → **Backend fix requested** → **Frontend cleanup once fixed**.
Priority: **P0** = wrong numbers or wrong meaning shown to users, **P1** = silent data loss or mis-scoping, **P2** = formatting or hygiene.

---

## P0: correctness

### 1. Ebola Virus vs Bundibugyo Virus (intentional; informational only)
- **Design decision:** the lanes stay separate on purpose, so that several Ebola strains causing epidemics at the same time can each be tracked.
- **Backend ask (minor):**
  - Only code a row "Ebola Virus (general)" when the species is genuinely unknown. A row whose source names Bundibugyo belongs in the Bundibugyo lane.
  - Keep spelling consistent, so the frontend's `PATHOGEN_ALIASES` folding can shrink.
- **Frontend cleanup:** `PATHOGEN_ALIASES` reduces to nothing once spellings are canonical; the separate lanes stay.

### 2. Event reports: one row per active outbreak (intentional)
- **Design decision:** the reports tab lists only active, threatening events, each at its latest report. Historical depth lives in the figures feed and the trend plot. No change requested.
- **Backend ask (minor):** emit `Earliest Report` and `Latest Report` as ISO dates (see item 6).

### 3. Sub-location figures inherit their parent's total ("bleed-through")
- **Symptom:** sub-locations carry the state or national count (first seen on US West Nile virus counties).
- **Frontend today:**
  - `isBleed()` / `bleedKey()` flag the row from `quality_flag` / `canonical_reason` / `location_flag`, matching any spelling (`bleed-through`, `bleedthrough`, `bleed_through`).
  - A subnational row never falls back to a national figure (the comment at around line 1680).
  - National rows are guarded so the flag can't bubble up to them.
- **Backend fix:**
  - Drop or correct bleed-through values at source.
  - If they must be kept, emit one controlled-vocabulary flag (`quality_flag = "bleed_through"`), and only on subnational rows.
- **Frontend cleanup:** remove the loose regex and the national guard; keep a single flag check, or nothing if the values are dropped.

### 4. Single mistranslated figures can win "top series"
- **Symptom:** one uncorroborated, mistranslated Ebola figure for Angola could become the default trend series.
- **Frontend today:** default series selection ranks by the *vetted canonical* peak (`peakCanonical`) and falls back to the raw peak only when nothing is vetted.
- **Backend fix:**
  - Emit an explicit per-figure `canonical` / `screened_in` boolean plus the corroborating domain count.
  - Quarantine known mistranslations rather than relying on the dashboard's ranking.
- **Frontend cleanup:** simpler default-series logic driven by a single `canonical` column.

### 5. Meaningless prevalence values in raw articles
- **Symptom:** values such as `prevalence: "1 case per 1 humans"` (with and without a trailing full stop) in raw articles. They surface as "Reported:" facts in unvetted tooltips and are counted as two different facts.
- **Frontend today:** nothing. A normalisation shim was trialled and **reverted on purpose**; this should be fixed upstream.
- **Backend fix:**
  - Don't populate `prevalence` when the denominator is 1 or the value just restates a case count.
  - Trim, normalise and de-duplicate all extracted text values; never emit trailing punctuation inside a value.
- **Frontend cleanup:** none needed once the values are clean.

---

## P1: silent loss and mis-scoping

### 6. Mixed date formats in raw articles
- **Symptom:** `published` / `report_date` mix ISO (`2026-09-25T23:46Z`), compact (`20260913T0`) and `report_YY-MM-DD` forms.
  - This broke the "latest day" check.
  - It also leaked raw strings like `20260913T0` into tooltip date ranges.
- **Frontend today:**
  - `toISODate()` handles ISO, `report_YY-MM-DD` and `Date()` parsing.
  - `uvDay()` was added this session to also fold the compact `YYYYMMDD` form; it is used by unvetted clustering and the latest-day tint.
- **Backend fix:** emit every date column as ISO 8601 (`YYYY-MM-DD`, or full `YYYY-MM-DDTHH:MMZ`) in every tab.
- **Frontend cleanup:** delete `uvDay()`; `toISODate()` becomes a pass-through.

### 7. Country names, including the DRC, need heuristic geocoding
- **Symptom:**
  - Locations arrive as free text: `"L A County"`, `"United States State"`, `"Victoria"`, Chilean town names, `"Multiple - …"`, `"Southern Europe"`.
  - "Congo" strings are ambiguous between the DRC and the Republic of the Congo.
  - `United States of America` vs `United States` vs `USA` / `US`.
- **Frontend today:**
  - `_geoCountry()` (around line 2400): substring heuristics plus last-comma-token lookup into a hand-kept `GEO` table of about 52 countries, each with a centroid, atlas name and region.
  - Report rows add an "anti-poisoning" raw-tail fallback (around line 7405).
  - `isNational()` treats any location containing a comma, or the word "county", as subnational.
- **Backend fix:**
  - Emit structured `country_iso3`, `country_name` (one canonical spelling), `admin1`, `admin2` and `granularity` (`national` | `subnational` | `supranational`) on every figure, report, raw and development row.
  - Emit a `lat` / `lon` pair as numbers.
- **Frontend cleanup:** delete the `_geoCountry` heuristics, the `GEO` table (except for display centroids), `isNational`, the anti-poisoning fallback and the `TL_ISO3` table added this session for the mobile gutter.

### 8. Reports and raw articles share only about 31% of URLs
- **Symptom:** an "unvetted extraction" is defined as a raw article whose URL isn't in any event report or figure row. The two tabs are parallel views with low URL overlap, so this test is lossy.
- **Frontend today:** `aggregatedUrlSet()` / `rawRowIsAggregated()` build a normalised URL set from report URLs, figure sources and developments, keyed by `aggKey()`.
- **Backend fix:** emit `aggregated_into_event_id` (or a boolean `is_aggregated`) on each raw article row.
- **Frontend cleanup:** delete `aggregatedUrlSet`, `aggKey` and the URL normalisation used for this purpose.

### 9. Duplicate re-reports in raw articles
- **Symptom:** the same URL, host and fact appears several times, at national and subnational level.
- **Frontend today:** `rawDedupe()` groups by (normalised URL, host species, numeric fact signature) and prefers the national row.
- **Backend fix:** de-duplicate raw rows at source on (url, host_species, measure, value), or emit a `duplicate_of` key.
- **Frontend cleanup:** delete `rawDedupe` / `rawFactSig`.

### 10. Host-species field holds non-species values and case variants
- **Symptom:** the Host filter lists `Angola` (a country) as a species, and `blue jays` and `Blue Jays` as separate hosts.
- **Frontend today:** nothing. `populateSpeciesSelect()` lists every distinct `species` string, and `isHumanHost()` uses a regex (`humans?|children|people|persons?`).
- **Backend fix:**
  - Emit a controlled `host_species` vocabulary (lower-case common name, or a taxon id) plus a `host_class` (`human` | `animal` | `vector` | `environmental`).
  - Never write a location into the species column.
- **Frontend cleanup:** delete the `HUMAN_HOST` regex; the selector reads the vocabulary directly.

### 11. Event reports carry no species field
- **Symptom:** under an animal-host filter, report-only pathogens (e.g. "Illness of Unknown Etiology") can't be scoped and leak into the selector.
- **Frontend today:** `availablePathogenRaws()` only admits report-only pathogens when the host filter is All or human.
- **Backend fix:** add `host_species` (as in item 10) to the reports tab.
- **Frontend cleanup:** remove the `reportsScopeOk` special case.

### 12. Forecast feed uses region-prefixed location keys
- **Symptom:** national forecast series are labelled `"Africa, Democratic Republic of the Congo"`, while every other feed uses the bare country name. Without an alias layer, every national projection misses its key and reads as "no reporting history".
- **Frontend today:** the alias layer in the forecast ingest (around line 4712).
- **Backend fix:** use the same location key (or `country_iso3`, as in item 7) as the figures feed.
- **Frontend cleanup:** delete the forecast alias map.

### 13. Situational Developments: malformed header, ordering, dates, country
- **Symptoms:**
  - A stray JOIN / ARRAYFORMULA in the header row turns every header cell into `"colname value value …"`.
  - Rows are listed oldest-first.
  - `report_date` is the date of the report that *first recorded* a development, not when it happened.
  - Many rows lack a resolvable country (they fall into "Other").
  - The same development exists both in this tab and inside each report's `Situational Developments` JSON cell.
- **Frontend today:**
  - `fetchDevelopments()` rebuilds the column names from the first token of each header cell.
  - Developments are sorted newest-first.
  - `scopedDevelopments()` merges the tab with the per-report JSON and de-duplicates.
  - The timeline groups developments by day × country × category; a tooltip disclaimer explains the dates.
- **Backend fix:**
  - Fix the header formula.
  - Emit `occurred_date` (when known) alongside `reported_date`.
  - Add `country_iso3` and `event_id`.
  - Make the developments tab the single source; drop the duplicated JSON from reports, or reference the tab by id.
- **Frontend cleanup:** delete the header-recovery block and the merge / de-dupe in `scopedDevelopments`.

### 14. Development categories are open-ended
- **Symptom:** categories arrive as free text. Four are known (scientific, pathological, organizational, political); "situational" was added this session; anything else gets an improvised 3-letter abbreviation and neutral colour.
- **Frontend today:** the `DEV_CATEGORIES` map plus the `devCategory()` fallback.
- **Backend fix:** a closed category enum, documented, lower-case.
- **Frontend cleanup:** delete the fallback branch.

### 15. Quarantine (censor) list is enforced in five places
- **Symptom:** known-bad reads must be hidden everywhere: figures, reports, raw articles, developments and timeline caches.
- **Frontend today:**
  - The checks are `isCensored()`, `reportIsCensored()`, `rawRowIsCensored()` and `tlFigureCensored()`, plus the load-time filter.
  - It fails open, with a warning, if the list is unreachable.
- **Backend fix:** apply the quarantine at source when publishing, so the published tabs never contain quarantined rows. Keep the list as an audit artefact only.
- **Frontend cleanup:** delete all censor checks and the censor fetch; keep, at most, a "N rows quarantined upstream" count from a metadata cell.

---

## P2: formatting and hygiene

### 16. Pandas artefacts in cells
- **Symptom:**
  - Empty cells arrive as the string `"nan"`.
  - Structured cells arrive as Python repr (`"['humans']"`, `"[{'action': 'x', 's': None}]"`).
  - Booleans arrive as `'True'` / `'False'` strings (e.g. `outlier`).
- **Frontend today:**
  - `cleanText()` blanks `nan` / `None` / `null`.
  - `parsePyish()` rewrites the Python literals to JSON and parses them.
  - Comparisons are string-based (`r.outlier === 'True'`).
- **Backend fix:** write real empty cells; emit lists and objects as JSON (double-quoted); emit booleans as `true` / `false`.
- **Frontend cleanup:** delete `parsePyish`, and most of `cleanText`'s work.

### 17. Status Report HTML is partly unrendered
- **Symptoms:**
  - Literal Markdown inside the HTML (`## Epidemiological Summary`, `**Rationale:**`).
  - Unfilled section placeholders (`<details>[response_efforts]</details>` with no `<summary>`).
  - Risk score, date and rationale are duplicated inside the body even though they are separate columns.
  - Reference lists vary between `<ol>` and `[1] …` text.
- **Frontend today:**
  - A regex Markdown→HTML pass (around line 4918).
  - Removal of the stub `<details>` elements.
  - Removal of the duplicated Risk / Date / Rationale paragraphs.
  - Two-pass reference matching (around line 6913).
- **Backend fix:**
  - Emit clean, semantic HTML (or Markdown only, rendered once by the backend).
  - No placeholders.
  - No metadata repeated in the body.
  - One reference-list format.
- **Frontend cleanup:** delete the report sanitising pass.

### 18. `Developments Formatted` carries hard-coded light-mode styling
- **Symptom:** inline white cards, red borders and 18px red headings, unreadable on the dark theme.
- **Frontend today:** `sanitizeDevHtml()` strips the inline styles; the parsed JSON is preferred when available.
- **Backend fix:** drop the `Developments Formatted` column (the structured JSON is enough), or emit it unstyled.
- **Frontend cleanup:** delete `sanitizeDevHtml` and the formatted-HTML fallback path.

### 19. Coordinates arrive as a bracketed string in lat, lon order
- **Symptom:** `Coordinate = "[lat, lon]"` as text, or `"None"`.
- **Frontend today:** `parseCoord()` (around line 7397) regex-extracts the numbers and swaps them to [lon, lat].
- **Backend fix:** numeric `lat` and `lon` columns.
- **Frontend cleanup:** delete `parseCoord`.

### 20. Counties arrive without a country suffix
- **Symptom:** `"L A County"` arrives with no comma, so a naive "national = no comma" rule would treat it as a country.
- **Frontend today:** an `isNational()` special case for "county".
- **Backend fix:** covered by item 7 (explicit `granularity`).

---

## Suggested backend order
1. **Item 5** (fact text hygiene) and **item 4** (an explicit canonical flag): user-visible wrong values.
2. **Items 6, 7, 16:** ISO dates, structured geography, JSON cells. These remove most of the frontend parsing at once.
3. **Items 8, 9, 15:** aggregation flag, de-duplication, quarantine at source.
4. **Items 10–14** and **17–19:** vocabulary and formatting cleanup. **Item 1:** spelling consistency only.

## Frontend simplification checklist (after each backend fix lands)
| Backend item | Delete from `index.html` |
| --- | --- |
| 1 | `PATHOGEN_ALIASES` (once spellings are canonical; lanes stay separate) |
| 3 | loose bleed-through regex, national guard |
| 6 | `uvDay`; most of `toISODate` |
| 7 | `_geoCountry` heuristics, `isNational`, report anti-poisoning fallback, `TL_ISO3` |
| 8 | `aggregatedUrlSet`, `aggKey`, `rawRowIsAggregated` URL logic |
| 9 | `rawDedupe`, `rawFactSig` |
| 10–11 | `HUMAN_HOST`, `reportsScopeOk` special case |
| 12 | forecast alias map |
| 13–14 | developments header recovery, `scopedDevelopments` merge, `devCategory` fallback |
| 15 | `isCensored`, `reportIsCensored`, `rawRowIsCensored`, `tlFigureCensored`, censor fetch |
| 16 | `parsePyish`, `cleanText` "nan" handling, `'True'`/`'False'` string comparisons |
| 17–18 | Status Report sanitiser, `sanitizeDevHtml` |
| 19 | `parseCoord` |

## Verification notes from this session (live data, 4 Oct 2026)
- **Reports tab:** 120 rows, none quarantined; 4 Ebola (DRC national, Ituri, North Kivu, Haut-Uélé) and 3 Bundibugyo.
- **Figures:** 1,203 Ebola rows (764 national, 439 subnational), continuous daily coverage from 30 Jul to 3 Oct, none quarantined.
- **Situational Developments, 14-day timeline window:** Ebola 29 items, Bundibugyo 19; older items fall outside the window by design. Before this session the timeline silently capped development chips at 10 per lane; that cap has been removed.
