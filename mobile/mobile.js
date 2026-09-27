/* OSINT-VHF mobile layer — additive only.
   Two independent modes, never set on a mouse-driven desktop:
     html.m-compact  phone-sized viewport (≤760px wide, or a touch phone in landscape)
     html.m-touch    touch-primary pointer
   It never re-implements dashboard features: it drives index.html's own hover handlers on tap,
   re-dispatches its own click handlers and restyles its own DOM. Contract: HOOKS below + MOBILE.md. */
(function () {
  'use strict';
  var d = document, root = d.documentElement, W = window;
  var q = new URLSearchParams(location.search);
  var PREF = 'vhf.mobile.view';
  var forced = q.get('view');
  try { if (forced) sessionStorage.setItem(PREF, forced); else forced = sessionStorage.getItem(PREF); } catch (e) {}
  var mqC = W.matchMedia('(max-width: 760px), (hover: none) and (pointer: coarse) and (max-height: 520px)');
  var mqT = W.matchMedia('(hover: none) and (pointer: coarse)');
  var mqPortrait = W.matchMedia('(orientation: portrait)');
  var isCompact = function () { return forced !== 'desktop' && mqC.matches; };
  // Some phones (stylus devices, a few Android skins) report hover:hover — a phone-sized touch screen counts too.
  var isTouch = function () { return forced !== 'desktop' && (mqT.matches || q.has('mtouch') || (mqC.matches && navigator.maxTouchPoints > 0)); };
  var active = function () { return isCompact() || isTouch(); };
  function sync() {
    root.classList.toggle('m-compact', isCompact());
    root.classList.toggle('m-touch', isTouch());
    root.classList.toggle('m-forced-desktop', forced === 'desktop' && mqC.matches);
  }
  sync(); // runs in <head>, before first paint

  var HOOKS = ['.nav', '.page-head', '.toolbar', '#disease', '#species', '.map-card', '#mapWrap', '#mapSvg', '#tooltip',
    '.summary-card', '.briefs-card', '.plots-card', '#chartWrap', '#sourceChartWrap', '.table-card', '.table-scroll', 'footer.note'];
  var GLOBALS = ['hideTooltip', 'forceHideChartTip', 'focusEvent', 'selectEvent', 'smoothScrollTo', 'renderTimeline'];

  var ICON = {
    overview: '<path d="M3 12h4l2-6 4 12 2-6h6"/>',
    map: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',
    reports: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
    trends: '<path d="M4 4v16h16"/><path d="M7 15l4-4 3 3 5-6"/>',
    figures: '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3 10h18M9 10v9"/>',
    funnel: '<path d="M4 5h16l-6 7.5V19l-4-2v-4.5z"/>',
    expand: '<path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    rotate: '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M20.5 9.5a8 8 0 0 1-3 9.5M3.5 14.5a8 8 0 0 1 3-9.5"/><path d="M17 16.5l.6 2.6 2.6-.7M7 7.5l-.6-2.6-2.6.7"/>'
  };
  var svg = function (k) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICON[k] + '</svg>'; };
  function el(tag, cls, html) { var n = d.createElement(tag); n.className = cls; if (html) n.innerHTML = html; return n; }
  var $ = function (s) { return d.querySelector(s); };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var SECTIONS = [
    { id: 'overview', label: 'Overview', sel: '.page-head' },
    { id: 'map', label: 'Map', sel: '.map-card' },
    { id: 'reports', label: 'Reports', sel: '.briefs-card' },
    { id: 'trends', label: 'Trends', sel: '.plots-card' },
    { id: 'figures', label: 'Figures', sel: '.table-card' }
  ];
  var LOCKED = '#mapWrap, #chartWrap, #sourceChartWrap';     // inline: one-finger drag scrolls the page
  var OWN_TAP = '#timelineWrap';                              // index.html already runs inspect→open here
  var IMPLICIT = '.map-card, .plots-card';                    // taps here don't yank the page; tabs pulse instead
  var HELP = '.section-help, #tableHelpBtn';
  var INTERACTIVE = 'a, button, select, input, textarea, label, summary, [role="button"], [tabindex], th.sortable, .seg-opt';

  function init() {
    var missing = HOOKS.filter(function (s) { return !$(s); })
      .concat(GLOBALS.filter(function (n) { return typeof W[n] !== 'function'; }).map(function (n) { return n + '()'; }));
    if (missing.length) console.warn('[mobile] index.html hooks missing; affected mobile features fall back to default behaviour:', missing.join(', '));

    buildTabbar(); buildFilters(); buildPeek(); buildExpand(); buildTableHint(); buildViewLink();
    wrapFocusEvent(); wrapSelectEvent(); wrapScrolls();
    var onChange = function () {
      sync();
      if (!isCompact()) closeSheet();
      if (!isTouch()) { exitFull(); hidePeek(); }
    };
    [mqC, mqT].forEach(function (m) { m.addEventListener ? m.addEventListener('change', onChange) : m.addListener(onChange); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') { exitFull(); closeSheet(); hidePeek(); } });
    d.addEventListener('fullscreenchange', function () { if (!d.fullscreenElement && fsOwned) { fsOwned = false; exitFull(); } });
    var rt = 0;
    W.addEventListener('resize', function () {
      if (!active()) return; clearTimeout(rt);
      rt = setTimeout(function () { var tl = d.getElementById('timelineWrap'); if (tl && tl.style.display !== 'none' && typeof W.renderTimeline === 'function') { try { W.renderTimeline(); } catch (e) {} } }, 200);
    });
  }

  /* ---------- tab bar: jump, scroll-spy, and "something opened here" pulses ---------- */
  var tabs = [], ownScroll = false, toast;
  function navOffset() {
    var off = 8, nav = $('.nav'), fb = $('.m-filterbar');
    if (nav && /sticky|fixed/.test(getComputedStyle(nav).position)) off += nav.offsetHeight;
    if (fb && isCompact()) off += fb.offsetHeight;
    return off;
  }
  function secEl(s) { return $(s.sel); }
  function goTo(s) {
    var t = secEl(s); if (!t) return;
    var y = s.id === 'overview' ? 0 : t.getBoundingClientRect().top + W.scrollY - navOffset();
    ownScroll = true; try { W.scrollTo({ top: Math.max(0, y), behavior: 'smooth' }); } finally { ownScroll = false; }
    clearPulse(s.id);
  }
  function buildTabbar() {
    var bar = el('nav', 'm-tabbar');
    bar.setAttribute('aria-label', 'Dashboard sections');
    SECTIONS.forEach(function (s) {
      var b = el('button', 'm-tab', '<span class="m-tab-ic">' + svg(s.id) + '</span><span>' + s.label + '</span>');
      b.type = 'button'; b.dataset.sec = s.id;
      b.addEventListener('click', function () { hideToast(); goTo(s); });
      bar.appendChild(b); tabs.push({ s: s, b: b });
    });
    d.body.appendChild(bar);
    toast = el('button', 'm-toast'); toast.type = 'button';
    toast.addEventListener('click', function () { var s = SECTIONS.filter(function (x) { return x.id === toast.dataset.sec; })[0]; hideToast(); if (s) goTo(s); });
    d.body.appendChild(toast);
    var ticking = false;
    W.addEventListener('scroll', function () {
      if (ticking || !isCompact()) return; ticking = true;
      requestAnimationFrame(function () { ticking = false; spy(); });
    }, { passive: true });
    spy();
  }
  function currentSection() {
    var line = W.innerHeight * 0.35, cur = SECTIONS[0];
    SECTIONS.forEach(function (s) { var n = secEl(s); if (n && n.getBoundingClientRect().top <= line) cur = s; });
    if (W.innerHeight + W.scrollY >= root.scrollHeight - 4) cur = SECTIONS[SECTIONS.length - 1];
    return cur;
  }
  function sectionAtY(y) {   // document y → section containing it
    var cur = SECTIONS[0], probe = y + navOffset() + 24;
    SECTIONS.forEach(function (s) { var n = secEl(s); if (n && n.getBoundingClientRect().top + W.scrollY <= probe) cur = s; });
    return cur;
  }
  function sectionOfNode(n) {
    for (var i = SECTIONS.length - 1; i >= 0; i--) { var e = secEl(SECTIONS[i]); if (e && e.contains(n)) return SECTIONS[i]; }
    return null;
  }
  function spy() {
    var cur = currentSection();
    tabs.forEach(function (t) { t.b.setAttribute('aria-current', t.s === cur ? 'true' : 'false'); });
    clearPulse(cur.id);
    updateSummary();
  }
  function pulse(s, msg) {
    var t = tabs.filter(function (x) { return x.s === s; })[0]; if (!t) return;
    t.b.classList.remove('m-pulse'); void t.b.offsetWidth; t.b.classList.add('m-pulse', 'm-news');
    if (msg) {
      toast.dataset.sec = s.id;
      toast.innerHTML = '<span>' + esc(msg) + '</span><span class="m-toast-go">View ' + esc(s.label) + ' ↓</span>';
      toast.classList.add('show'); clearTimeout(toast.__t);
      toast.__t = setTimeout(hideToast, 5000);
    }
  }
  function clearPulse(id) { tabs.forEach(function (t) { if (t.s.id === id) t.b.classList.remove('m-pulse', 'm-news'); }); }
  function hideToast() { if (toast) toast.classList.remove('show'); }

  /* The desktop scrolls to the destination section after an in-plot action (open brief, list
     articles, drill a cluster). On a phone that yanks the user off the plot they were exploring,
     so actions that start inside the map/plots cards stay put and the destination tab pulses. */
  var tapFrom = null, tapImplicit = false, lastTapAt = 0;
  function noteTap(n) { tapImplicit = !!(n && n.closest && n.closest(IMPLICIT)); tapFrom = tapImplicit ? sectionOfNode(n) : null; lastTapAt = Date.now(); }
  var TOAST_MSG = { reports: 'Brief opened', figures: 'Table updated', trends: 'Plot updated', map: 'Map updated', overview: 'Updated' };
  function shouldHold(y) {
    if (!isCompact() || ownScroll || typeof y !== 'number' || !isFinite(y)) return false;
    if (!tapImplicit || Date.now() - lastTapAt > 2500) return false;
    var dest = sectionAtY(y);
    if (!dest || dest === tapFrom) return false;
    tapImplicit = false;
    pulse(dest, TOAST_MSG[dest.id]);
    return true;
  }
  // Selecting an event from the map/plots doesn't scroll on desktop either (the brief sits beside it),
  // so the Reports pulse keys off the selection itself, not only off scroll calls.
  function wrapSelectEvent() {
    if (typeof W.selectEvent !== 'function') return;
    var orig = W.selectEvent;
    W.selectEvent = function () {
      var out = orig.apply(this, arguments);
      if (isCompact() && tapImplicit && Date.now() - lastTapAt < 2500 && (!tapFrom || tapFrom.id !== 'reports')) pulse(SECTIONS[2], TOAST_MSG.reports);
      return out;
    };
  }
  function wrapScrolls() {
    d.addEventListener('pointerdown', function (e) { if (!e.target.closest('.m-tabbar, .m-toast, .m-peek')) noteTap(e.target); }, true);
    if (typeof W.smoothScrollTo === 'function') {
      var sst = W.smoothScrollTo;
      W.smoothScrollTo = function (y) { if (shouldHold(y)) return; return sst.apply(this, arguments); };
    }
    var st = W.scrollTo;
    W.scrollTo = function (a) {
      // Object-form calls carry the final target; numeric calls are smoothScrollTo's own frames.
      if (a && typeof a === 'object' && shouldHold(a.top)) return;
      return st.apply(W, arguments);
    };
  }

  /* ---------- filters: the real .toolbar becomes a bottom sheet (no DOM moves) ---------- */
  var summaryEl, countEl;
  function buildFilters() {
    var tb = $('.toolbar'); if (!tb) return;
    var bar = el('div', 'm-filterbar',
      '<button type="button" class="btn btn-secondary m-filter-btn" aria-haspopup="dialog">' + svg('funnel') +
      '<span>Filters</span><span class="m-filter-count"></span></button><span class="m-filter-summary"></span>');
    tb.parentNode.insertBefore(bar, tb);
    var head = el('div', 'm-sheet-head', '<p class="m-sheet-title">Filters</p><button type="button" class="btn btn-primary m-sheet-done">Done</button>');
    tb.insertBefore(head, tb.firstChild);
    var bd = el('div', 'm-backdrop'); d.body.appendChild(bd);
    summaryEl = bar.querySelector('.m-filter-summary'); countEl = bar.querySelector('.m-filter-count');
    bar.querySelector('.m-filter-btn').addEventListener('click', openSheet);
    head.querySelector('.m-sheet-done').addEventListener('click', closeSheet);
    bd.addEventListener('click', closeSheet);
    tb.addEventListener('change', updateSummary, true);
    var dr = $('#dataReportBtn'); if (dr) dr.addEventListener('click', closeSheet);
    [800, 2500, 6000].forEach(function (t) { setTimeout(updateSummary, t); });
  }
  function selText(id) { var s = d.getElementById(id); return s && s.selectedOptions && s.selectedOptions[0] ? s.selectedOptions[0].textContent.trim() : ''; }
  function updateSummary() {
    if (!summaryEl) return;
    var parts = [selText('disease'), selText('species')], n = 0;
    ['pathoGroup', 'investigatorGroup'].forEach(function (id) {
      var s = d.getElementById(id); if (s && s.value && s.value !== 'All') { parts.push(selText(id)); n++; }
    });
    summaryEl.textContent = parts.filter(Boolean).join(' · ');
    countEl.textContent = n ? String(n) : '';
  }
  function openSheet() { if (!isCompact()) return; root.classList.add('m-sheet-open'); updateSummary(); }
  function closeSheet() { if (!root.classList.contains('m-sheet-open')) return; root.classList.remove('m-sheet-open'); updateSummary(); }

  /* ---------- tap-to-inspect, tap-again-to-open ----------
     Hover is never relied on. On a tap, the mark's own hover handler (d3 mousemove/mouseover) is
     fired explicitly; if that produces one of index.html's tooltips, the tap is held back from the
     mark's click handler and the tooltip is shown in the docked sheet. A second tap on the same mark,
     or the sheet's action button, lets the original click handler run untouched. */
  var peek, peekBody, peekOpen, armed = null, armedNode = null, bypass = false;
  function buildPeek() {
    peek = el('div', 'm-peek',
      '<div class="m-peek-body tooltip show"></div><div class="m-peek-actions">' +
      '<button type="button" class="btn btn-ghost btn-icon m-peek-close" aria-label="Close preview">' + svg('close') + '</button>' +
      '<button type="button" class="btn btn-primary m-peek-open" hidden>Open</button></div>');
    peek.setAttribute('role', 'status'); peek.setAttribute('aria-live', 'polite');
    d.body.appendChild(peek);
    peekBody = peek.querySelector('.m-peek-body'); peekOpen = peek.querySelector('.m-peek-open');
    peek.querySelector('.m-peek-close').addEventListener('click', function () { dismissTips(); });
    peekOpen.addEventListener('click', function () {
      var t = armedNode; if (!t || !t.isConnected) return dismissTips();
      noteTap(t);
      bypass = true;
      try { t.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: W })); } finally { bypass = false; }
      dismissTips();
    });

    d.addEventListener('pointerdown', function (e) { touchNode = e.target; }, { capture: true, passive: true });
    d.addEventListener('touchstart', function (e) { touchNode = e.target; lock(e); }, { capture: true, passive: true });
    d.addEventListener('touchmove', lock, { capture: true, passive: true });
    d.addEventListener('touchend', lock, { capture: true, passive: true });
    d.addEventListener('click', onTap, true);
  }
  var touchNode = null;
  function hoverSrc(n) {
    for (; n && n.nodeType === 1 && n !== d.body; n = n.parentNode) {
      if (n.__on && n.__on.some(function (o) { return o.type === 'mousemove' || o.type === 'mouseover'; })) return n;
    }
    return null;
  }
  function hasClick(n) {
    for (; n && n.nodeType === 1 && n !== d.body; n = n.parentNode) {
      if (n.__on && n.__on.some(function (o) { return o.type === 'click'; })) return true;
      if (n.tagName === 'svg') break;
    }
    return false;
  }
  function shownTip() {
    var all = d.querySelectorAll('.tooltip.show');
    for (var i = all.length - 1; i >= 0; i--) if (all[i] !== peekBody && all[i].innerHTML.trim()) return all[i];
    return null;
  }
  var globeArmed = null;
  function leaveGlobe() { if (globeArmed) { try { globeArmed.dispatchEvent(new MouseEvent('mouseleave')); } catch (e) {} globeArmed = null; } }
  function resetTips() { leaveGlobe(); try { if (typeof W.hideTooltip === 'function') W.hideTooltip(); if (typeof W.forceHideChartTip === 'function') W.forceHideChartTip(); } catch (e) {} }
  function fireHover(t, e) {
    var o = { bubbles: true, cancelable: true, view: W, clientX: e.clientX, clientY: e.clientY };
    t.dispatchEvent(new MouseEvent('mouseover', o));
    t.dispatchEvent(new MouseEvent('mousemove', o));
  }
  function onTap(e) {
    if (!isTouch() || bypass) return;
    var t = e.target;
    if (!t.closest || peek.contains(t) || t.closest('.m-tabbar, .m-toast, .m-expand, .m-rotate')) return;

    if (t.closest(OWN_TAP)) {   // timeline: its own capture handler does inspect→open; mirror the result
      var g = t;
      if (armedNode === g && peek.classList.contains('show')) { armedNode = null; setTimeout(hidePeek, 0); return; }
      setTimeout(function () { var tip = shownTip(); if (tip) { armedNode = g; showPeek(tip.innerHTML, g, true); } else hidePeek(); }, 0);
      return;
    }

    var gm = t.closest('#globeMap .maplibregl-marker');
    if (gm) {   // MapLibre globe markers: DOM listeners (mouseenter → popup, click → act), not d3
      if (armed === gm && peek.classList.contains('show')) { armed = null; setTimeout(dismissTips, 0); return; }
      e.stopPropagation(); e.preventDefault();
      leaveGlobe(); gm.dispatchEvent(new MouseEvent('mouseenter'));
      var pops = d.querySelectorAll('.maplibregl-popup.globe-pop .maplibregl-popup-content'), pc = pops[pops.length - 1];
      armed = gm; armedNode = gm; globeArmed = gm;
      if (pc && pc.innerHTML.trim()) showPeek(pc.innerHTML, gm, true);
      else { bypass = true; try { gm.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: W })); } finally { bypass = false; } }
      return;
    }

    var src = hoverSrc(t);
    if (src) {
      if (src === armed && peek.classList.contains('show')) {   // second tap → act
        armed = null;
        if (hasClick(t)) setTimeout(dismissTips, 0);
        return;
      }
      resetTips(); fireHover(t, e);
      var tip = shownTip();
      if (tip) {
        e.stopPropagation(); e.preventDefault();
        armed = src; armedNode = t;
        showPeek(tip.innerHTML, t, hasClick(t));
        return;
      }
    }

    var h = t.closest(HELP);
    var titled = h || t.closest('[title]');
    if (titled && (h || !titled.closest(INTERACTIVE)) && titled.getAttribute('title')) {
      showPeek('<p class="t-title">' + esc(titled.getAttribute('aria-label') || titled.textContent.trim().slice(0, 60) || 'About') + '</p><div class="m-peek-note">' + esc(titled.getAttribute('title')) + '</div>', null, false);
      armed = null; armedNode = null;
      return;
    }
    var svgTitle = t.closest('svg *') && t.querySelector && t.querySelector(':scope > title');
    if (svgTitle && !hasClick(t)) { showPeek('<div class="m-peek-note">' + esc(svgTitle.textContent) + '</div>', null, false); return; }

    hidePeek(); armed = null; armedNode = null;
  }
  function showPeek(html, target, actionable) {
    peekBody.innerHTML = html;
    var foot = peekBody.querySelector('.t-foot'), label = 'Open';
    if (foot && /^\s*(click|select|tap)\b/i.test(foot.textContent)) {
      label = foot.textContent.replace(/^\s*(click|select|tap)\s*(to\s+)?/i, '').replace(/[↗→]\s*$/, '').trim();
      label = label ? label.charAt(0).toUpperCase() + label.slice(1) : 'Open';
      foot.hidden = true;
    }
    peekOpen.hidden = !actionable; peekOpen.textContent = label;
    peek.classList.toggle('has-action', !!actionable);
    peek.classList.add('show');
  }
  function hidePeek() { if (peek) peek.classList.remove('show'); }
  function dismissTips() { hidePeek(); armed = null; armedNode = null; resetTips(); }

  /* ---------- scroll-safe plots, full screen + landscape ---------- */
  var nudged = false, fsOwned = false;
  function lock(e) {
    if (!isTouch()) return;
    var w = e.target.closest && e.target.closest(LOCKED);
    if (!w || w.closest('.m-full') || e.target.closest('button, .zoom-controls')) return;
    e.stopPropagation();   // keeps d3.zoom / MapLibre from capturing the page scroll; taps still click
    if (e.type === 'touchmove' && !nudged) {
      nudged = true; var c = w.closest('.card'), b = c && c.querySelector('.m-expand');
      if (b) { b.classList.add('m-nudge'); setTimeout(function () { b.classList.remove('m-nudge'); }, 1800); }
    }
  }
  function buildExpand() {
    ['.map-card', '.plots-card', '.table-card'].forEach(function (sel) {
      var card = $(sel); if (!card) return;
      var b = el('button', 'btn btn-secondary m-expand', svg('expand') + '<span class="m-expand-lbl">Landscape</span>');
      b.type = 'button'; b.setAttribute('aria-label', 'Open full screen in landscape');
      b.addEventListener('click', function () { setFull(card, !card.classList.contains('m-full')); });
      card.appendChild(b);
    });
    var r = el('div', 'm-rotate', svg('rotate') + '<span>Rotate your phone for the full view</span><button type="button" class="btn btn-ghost btn-icon" aria-label="Dismiss">' + svg('close') + '</button>');
    r.querySelector('button').addEventListener('click', function () { root.classList.add('m-rotate-dismissed'); });
    d.body.appendChild(r);
  }
  function tryLandscape() {
    if (!mqPortrait.matches) return;
    try {
      if (!d.fullscreenElement && root.requestFullscreen) {
        root.requestFullscreen({ navigationUI: 'hide' }).then(function () {
          fsOwned = true;
          if (screen.orientation && screen.orientation.lock) return screen.orientation.lock('landscape');
        }).catch(function () {});   // iOS / desktop: no API — the rotate prompt covers it
      }
    } catch (e) {}
  }
  function releaseLandscape() {
    try { if (screen.orientation && screen.orientation.unlock) screen.orientation.unlock(); } catch (e) {}
    try { if (fsOwned && d.fullscreenElement && d.exitFullscreen) { fsOwned = false; d.exitFullscreen().catch(function () {}); } } catch (e) {}
  }
  function setFull(card, on) {
    d.querySelectorAll('.m-full').forEach(function (c) { if (c !== card) c.classList.remove('m-full'); });
    card.classList.toggle('m-full', on);
    var b = card.querySelector('.m-expand');
    if (b) {
      b.innerHTML = on ? svg('close') + '<span class="m-expand-lbl">Close</span>' : svg('expand') + '<span class="m-expand-lbl">Landscape</span>';
      b.setAttribute('aria-label', on ? 'Exit full screen' : 'Open full screen in landscape');
    }
    root.classList.toggle('m-full-open', !!d.querySelector('.m-full'));
    root.classList.remove('m-rotate-dismissed');
    if (on) tryLandscape(); else releaseLandscape();
    dismissTips();
    requestAnimationFrame(function () {
      W.dispatchEvent(new Event('resize'));
      var tl = d.getElementById('timelineWrap');
      if (tl && tl.style.display !== 'none' && typeof W.renderTimeline === 'function') { try { W.renderTimeline(); } catch (e) {} }
    });
  }
  function exitFull() { var c = $('.m-full'); if (c) setFull(c, false); }
  function wrapFocusEvent() {
    if (typeof W.focusEvent !== 'function') return;
    var orig = W.focusEvent;
    W.focusEvent = function () { if (active()) exitFull(); return orig.apply(this, arguments); };
  }

  /* ---------- figures table affordance ---------- */
  function buildTableHint() {
    var ts = $('.table-scroll'); if (!ts) return;
    var h = el('p', 'm-table-hint', '<span>Swipe sideways for more columns</span><span aria-hidden="true">→</span>');
    ts.parentNode.insertBefore(h, ts);
    var edge = function () {
      var max = ts.scrollWidth - ts.clientWidth;
      ts.classList.toggle('m-at-end', ts.scrollLeft >= max - 2);
      if (ts.scrollLeft > 24) h.classList.add('m-seen');
    };
    ts.addEventListener('scroll', edge, { passive: true });
    setTimeout(edge, 1500);
  }

  /* ---------- escape hatch ---------- */
  function buildViewLink() {
    var f = $('footer.note'); if (!f) return;
    var a = el('a', 'm-view-link');
    var toDesktop = forced !== 'desktop';
    a.textContent = toDesktop ? 'Desktop layout' : 'Mobile layout';
    a.href = location.pathname + '?view=' + (toDesktop ? 'desktop' : 'mobile') + location.hash;
    if (!toDesktop) a.addEventListener('click', function () { try { sessionStorage.removeItem(PREF); } catch (e) {} });
    f.appendChild(a);
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init); else init();
})();
