# Mobile layer

Mobile support is a separate, additive layer. It is **not** a second copy of the dashboard.

- `mobile/mobile.css`: every rule is scoped to `html.m-compact` or `html.m-touch`.
- `mobile/mobile.js`: sets those classes from `matchMedia`, then observes and re-dispatches events. It never re-implements dashboard logic.
- `index.html`: two lines before `</head>`, `viewport-fit=cover` on the viewport meta, and `tlMobile()`-gated branches in `renderTimeline` (see Timeline below).

On a mouse-driven desktop neither class is ever set, so no mobile rule or behaviour can apply there.

## Modes
- **`m-compact`** (viewport ≤ 760px wide, or a touch phone in landscape) controls layout:
  - The page stays as a single column.
  - A sticky bar holds Filters and shows a summary of the active filters.
  - The real `.toolbar` opens as a bottom sheet. No DOM nodes are moved.
  - A bottom tab bar (Overview / Map / Reports / Trends / Figures) jumps to sections and highlights the current one as you scroll.
  - Dialogs open as bottom sheets, and the brief modal opens full screen.
  - Inputs use a 16px font, which stops iOS from zooming in when you focus them.
- **`m-touch`** (`hover:none` + `pointer:coarse`, independent of width, so it also covers iPad) controls interaction:
  - **Tap to inspect, tap again to open (no hover dependence):** a tap explicitly fires the mark's own d3 `mousemove`/`mouseover` handler. If that produces one of index.html's `.tooltip`s, the click is held back and the tooltip appears in a docked sheet (floating tooltips are CSS-hidden). A second tap on the same mark, or the sheet's action button (labelled from the tooltip's `.t-foot`), runs the original click handler. The timeline keeps its own built-in inspect→open model, and the sheet mirrors it. Globe (MapLibre) markers get the same model: their `mouseenter` popup content is shown in the sheet, and MapLibre popups are CSS-hidden. Because tooltips and popups only ever appear in the sheet, the plot frame can't crop them.
  - **Help text on tap:** title-only help (`?` buttons, non-interactive titled text, SVG `<title>`) shows in the same sheet.
  - **No page yanking:** on desktop, an in-plot action (open brief, list articles, drill a cluster) scrolls to its destination. On phones, actions that start inside `.map-card` or `.plots-card` stay put. Instead, the destination tab pulses and gets a dot, and a toast ("Brief opened · View Reports ↓") offers the jump. This is done by wrapping `selectEvent` (map and plot selections don't scroll even on desktop), `smoothScrollTo` and object-form `window.scrollTo`; nothing else is intercepted.
  - **Scrolling over plots:** inline, a one-finger drag over the map or plots scrolls the page. Taps still reach the marks and the +/−/⊙ buttons still work.
  - **Landscape:** the map, plots and figures table each carry a "Landscape" button. It opens a full-screen overlay (pinch and pan enabled) and, where supported (Android), fullscreen + `screen.orientation.lock('landscape')`. Elsewhere (iOS), a rotate prompt shows while the phone is portrait. Android back exits fullscreen, which also closes the overlay. In landscape the map title and legend are hidden to give the chart room.
- **Timeline (in index.html, gated by `tlMobile()`):**
  - Once panned or zoomed, glyphs, situational-development chips and "+N more" labels are culled instead of being clamped to the edge. This covers a date outside the frame, a chip box that would cross the frame edge, and a lane scrolled above or below the frame.
  - The same chip culling applies to the development chips on the Trends time series (`drawDevelopmentMarkers`).
  - The per-date glyph cap drops from 22 to 8, and development chips from 10 to 6.
  - Zoom ticks are coalesced to one render per animation frame.
  - `tlMobile()` is false on mouse desktops, so desktop output is identical. To use culling on desktop too, drop the `tlMobile()` term from `tlCull`.
- **Figures table:**
  - explicit `overflow-x:auto` and `touch-action: pan-x pan-y`
  - `border-collapse: separate` (works around a Safari bug with sticky cells)
  - a pinned first column
  - a "Swipe sideways" hint that fades after the first scroll
  - the Landscape button
- **Escape hatches:**
  - `?view=desktop` forces the desktop layout for the session. The footer links back to the mobile layout.
  - `?mtouch=1` forces touch mode on a mouse, for testing.

## Contract with index.html
`mobile.js` checks these hooks at load and logs `[mobile] index.html hooks missing…` for any that are absent. If a hook is missing, only the features that depend on it are affected; the rest of the dashboard keeps working.

**Selectors:**
- `.nav`, `#syncTag`, `#syncBtn`
- `.page-head`, `.toolbar`, `#disease`, `#species`, `#pathoGroup`, `#investigatorGroup`, `#dataReportBtn`
- `.map-card`, `#mapWrap`, `#mapSvg`, `#timelineWrap`, `.map-hint`, `.zoom-controls`
- `.summary-card`, `.briefs-card`, `.events-col`, `.brief-body`
- `.plots-card`, `#chartWrap`, `#sourceChartWrap`
- `.table-card`, `.table-scroll`, `#tablePager`
- `footer.note`, `.dialog-backdrop` / `.dialog`, `.brief-modal`
- `.section-help`, `#tableHelpBtn`

**Behaviours:**
- Tooltips are elements with class `.tooltip` that are visible when they have class `.show`. This covers `#tooltip` and the lazily created chart tip.
- Chart re-rendering listens to `window` `resize`.
- Globals: `hideTooltip`, `forceHideChartTip`, `focusEvent`, `selectEvent`, `smoothScrollTo`, `renderTimeline`.
- d3 hover and click listeners are detected through `__on`, so new marks must use d3 `.on('mousemove' | 'click')` to get tap behaviour.

**Rules for desktop feature work:**
- **New plot or tooltip:** keep using `.tooltip.show` with d3 `.on('mousemove')` and `.on('click')`, and it works on mobile automatically.
- **New in-plot action that scrolls:** use `smoothScrollTo` or `window.scrollTo({top})`, and phones will pulse the destination tab instead.
- **New top-level section:** add it to `SECTIONS` in `mobile.js` if it deserves a tab.
- **Renaming a hook above:** update `mobile.js` / `mobile.css` in the same commit. The console warning flags any hook you miss.
- **Never add un-scoped rules to mobile.css.**

## Test checklist
- Desktop at ≥ 1024px with a mouse: `<html>` has no `m-*` class.
- 390px and 360px width with `?mtouch=1`:
  - tab bar tracks scroll
  - filter sheet changes the data
  - marker tap previews, then Open selects the brief
  - bar tap previews, then Open lists articles
  - a marker action in the map pulses the Reports tab instead of scrolling
  - Landscape gives pinch and pan; Esc or ✕ exits
  - timeline zoomed and panned: no glyphs pile at the frame edges
- Real iOS Safari and Android Chrome. The Globe view needs real WebGL.

## Native app path
The layer already handles safe areas (`viewport-fit=cover` + `env(safe-area-inset-*)`), bottom navigation and sheets. The site can be wrapped as-is with Capacitor (iOS/Android WebView) with no code fork.

Remaining work for a native wrapper:
- hook the Android back button up to close sheets (Capacitor `backButton` → the Escape handler)
- add app icons
- optionally, send push notifications from the alerts feed
