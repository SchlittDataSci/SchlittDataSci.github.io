# OSINT-VHF Surveillance Dashboard

Single-file dashboard (`dashboard.html`) tracking viral hemorrhagic fever outbreaks from open-source reporting. Built on the **Nocturne** design system (`_ds/nocturne-.../`).

## What it is
- Event list (AI-generated outbreak briefs) + world map + stat cards + DRC Ebola trend chart + latest-figures table.
- Live data pulled from a published Google Sheet (CSV export), with a hardcoded fallback snapshot if the fetch fails.

## Data source
Two published CSV tabs from one Google Sheet (`GSHEET_CSV_URL`, `GSHEET_REPORTS_URL` in `dashboard.html`):

1. **Measurements tab** — long format, one row per (location, pathogen, measure, report_date [, source]). Known columns: `location`, `pathogen`, `measure` (`confirmed_cases`, `confirmed_deaths`, possibly others), `report_date`, `value`, `outlier` ("True"/"False" — statistically flagged), `sources` (semicolon-separated URLs), `n_sources`. See `DATA-NOTES.md` for open questions on geography level / outcome-vs-raw columns.
2. **Merged reports tab** — one row per AI-written outbreak brief: `Event Title`, `Risk Severity Score`, `Latest Report`, `Outbreak Country`/`Outbreak Location`, `Status Report` (HTML).

## Key aggregation rule (IMPORTANT — see current task)
Cases/deaths are reported at mixed geographic granularity (national totals AND subnational/county-level rows can both exist for the same country+date). Naively summing all rows double-counts. The correct aggregation, per user instruction:
- Filter to **national-level geography rows only** OR, when only subnational is available, take the **max value per county/subnational unit** then **sum across counties** — never sum raw rows blindly.
- Use the **outcome-processed measure** (post statistical/outlier processing, i.e. `outlier == 'False'` rows / the "outcome" fields) rather than raw values, to reduce outlier distortion.
- Language: always call these "reported"/"confirmed" cases and deaths aggregated from open-source reporting, not official epi totals.

This rule currently lives in `latestFor()` (dashboard.html) in a simplified form (dedupes by max-per-date across duplicate rows, filters `outlier==='False'`) — it does NOT yet explicitly filter by geography level or do the per-county-max-then-sum step described above. That refinement plus the new charts is the active task — see `TODO.md`.

## Design system
Nocturne, bound at `_ds/nocturne-c236f95b-6f2d-4f5b-9bdc-974f09e4a112/`. Dark ground, single accent (#9184d9), Inter, outlined buttons. Load `styles.css` + `_ds_bundle.js` in any new component.
