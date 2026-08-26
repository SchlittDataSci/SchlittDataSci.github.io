# Evidence Layer — Deployment Plan

Working copy: **`index.evidence.html`** (promoted to `index.html` only after acceptance).
Scope of first run: **Tier 1** (index layer, figure popup, report evidence profile, tooltips). Tier 2/3 deferred.

## Goal

Connect the three feeds — outcome measurements, AI event reports, raw article/fact extracts — into a
cross-feed **evidence graph**, so every number and every report can answer *"what evidence produced
this?"* and every article can answer *"where did this evidence end up?"*

Principle: **progressive disclosure of provenance**. The evidence layer appears on demand
(tooltips, popups, expandable sections); no new always-on columns beyond the existing Sources cell.

## Phase 0 — feed verification (done, Aug 26)

Live sampling of the three published CSVs:

| Finding | Value | Design consequence |
|---|---|---|
| citations ∩ raw URLs | 210/210 = **100%** | Every report citation enrichable from raw feed; coverage diagnostic pivots to fact level |
| measure ∩ raw URLs | 291/941 = **31%** | Figures ↔ raw is a partial view; UI must degrade gracefully |
| measure ∩ citation URLs | 17% | Figures and reports draw from different article pools — never conflate counts |
| measurement rows / distinct URLs | 1,549 / 941 · avg 1.66 URLs/row · `"; "` delimited | Split `sources` on `;` |
| reports / mean citations | 105 · 4.1/report | Small citation universe |
| raw rows / distinct URLs | 4,505 / 811 | Trivially indexable client-side |
| Raw schema notes | free-text `location`, separate `country`, `extract_locations`, `extract_country_iso2`, `published=20260822T144500Z` | Normalize via `geoCountry()` |

## Architecture

One new layer, built once per feed arrival, consumed on demand:

```text
rebuildEvidenceIndex()                       // idempotent; called from fetchSheet, fetchReports,
                                             // and the 'rawarticles' event
  byUrl   : normUrl -> { raw, measures[], domains }      // raw row + measurement rows citing it
  byComboUrls : pathogen||geoCountry -> Set(normUrl)     // measurement source URLs per event combo
  byReport: computed on demand from byUrl/byComboUrls    // DIRECT / RELATED / CITED_ONLY per citation
```

Citation relationship taxonomy (epistemic honesty — a citation is not automatically evidence):

- **DIRECT** — URL appears in the `sources` of a measurement row for the same pathogen + country:
  the article demonstrably contributed a structured figure.
- **RELATED** — not in measurements, but raw extraction observed the URL with matching pathogen
  (+ country where resolvable): extracted, but never became a figure input.
- **CITED ONLY** — no raw row exists: all we know is the brief cited it. Never claimed as support
  for any number.

## Steps

### Step 1 — index layer only (no UI)
- `esc()` HTML escaper for all new interpolated surfaces (titles/domains are third-party text).
- `urlHost(u)` shared domain helper; `measureUrlSet(rows)` splitter.
- `rebuildEvidenceIndex()` + accessors (`rawForUrl`, `reportEvidence(r)`, `figureEvidence(rows)`).
- Degrades silently with raw feed in any state (`idle/loading/ready/unavailable`).

### Step 2 — figure source popup → evidence cards
`openFigureSourcePopup()` reworked: value header · canonical chip + reason · vettings + quality
band · article card (title via `articleTitles`, domain, published date parsed from
`YYYYMMDDTHHMMSSZ`, vetting/proximity/combined scores, outbound link). Noncanonical rows show the
screen reason and the superseding canonical figure. No raw match → today's compact layout.

### Step 3 — report evidence profile
- Report parsing keeps structured citations (it already has `r.urls`).
- Brief banner replaces the measurement-derived documentation badge with the citation-derived
  profile: strength label + `N articles · M domains · K corroborated facts · P% contributed`.
- Expandable section: per-citation cards with DIRECT/RELATED/CITED-ONLY chips, transparent
  breakdown (no opaque composite), per-measure corroboration bars from the record's `rowsAt`.
- Measurement doc tier remains in the event LIST rows and figures table where it describes figures.

### Step 4 — tooltips at point of contact
- Map marker tooltip: aggregated evidence line(s) for the pathogens shown.
- Trend dots: add distinct articles/domains, median proximity/vetting where resolvable, canonical
  reason; excluded points keep screen reason.
- Sources histogram tooltip: adds independent-domain count (weekly bins pool correctly).

## Verification protocol (per step)
Fresh-document deep-link loads (hash nav does not re-run boot), Accepted/All/Rejected × species ×
pathogen matrix, fallback sample-data mode, raw-unavailable mode, histogram-tooltip == popup-list
count reconciliation, zero console errors, `node --check` on extracted inline JS.

## Deferred (Tier 2/3)
Raw-table "Used in" reverse traceability; distribution mini-charts (vetting/proximity sparklines);
evidence convergence composite; cross-report source analysis (domain share across reports).
Known deferred elsewhere and unchanged: XSS-hardening of the AI-brief HTML itself.

## Outcome — Tier 1 implemented, verified, and deployed to `index.html` (Aug 26)

Implemented in `index.evidence.html` then promoted to `index.html`. Live-corpus verification
(headless Chromium against the published feeds, plus a full-network-failure pass):

| Check | Result |
|---|---|
| Feeds resolve; raw corpus settles `ready` | PASS |
| Index populated | 34 event combos, 811 raw URLs |
| Citation relationships (105 reports) | **350 direct · 28 related · 53 cited-only** |
| Brief banner = citation profile + expandable Evidence section | PASS |
| Figure popup renders enriched evidence cards | PASS |
| Map tooltip evidence block; histogram domain counts; trend-dot medians | PASS |
| Zero page errors (live pass and all-feeds-down pass) | PASS |

The 53 cited-only citations are the headline diagnostic: ~14% of report citations sit
outside the current extraction window (archived or out-of-window, e.g. `25 Jul – 24 Aug 26`)
— exactly the epistemic gap the relationship taxonomy was designed to expose. Brief citations
are heuristically selected (quality × recency), so the cited set is a subset of what was
available.

Follow-up polish in same deploy: histogram x-domain decoupled from forecast horizon;
brief `<details>` sections restyled to page scale; evidence summary is now a bulleted list
with peer-distribution box strips; deep-link hash (`#p=…&c=…&v=…&m=…`) correctly filters the
scorecard/map and flies to the requested country; headline is a newspaper-style report title;
logo is 63px with interleaved background-bar scan slices (no tagline).

