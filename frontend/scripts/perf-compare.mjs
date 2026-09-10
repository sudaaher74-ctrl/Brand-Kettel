/**
 * Real-browser Core Web Vitals on an emulated mobile 4G connection with a 4x
 * CPU slowdown, run against two origins so before/after is measured the same way.
 *
 *   node perf-compare.mjs
 */
import { chromium } from '@playwright/test';

const ORIGINS = { before: 'http://127.0.0.1:3101', after: 'http://127.0.0.1:3100' };
const ROUTES = ['/', '/contact', '/portfolio', '/commercial-fit-outs'];
const RUNS = 3;

const browser = await chromium.launch(
  process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {},
);

async function measure(origin, route) {
  const ctx = await browser.newContext({ viewport: { width: 412, height: 823 }, deviceScaleFactor: 1.75, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  await page.addInitScript(() => {
    window.__m = { lcp: 0, cls: 0, lcpTag: '' };
    new PerformanceObserver((l) => { for (const e of l.getEntries()) { window.__m.lcp = e.startTime; window.__m.lcpTag = e.element?.tagName ?? e.url ?? '?'; } })
      .observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__m.cls += e.value; })
      .observe({ type: 'layout-shift', buffered: true });
  });
  const cdp = await ctx.newCDPSession(page);
  await cdp.send('Network.enable');
  await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 1.6 * 1024 * 1024 / 8, uploadThroughput: 750 * 1024 / 8 });
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });

  let bytes = 0, requests = 0;
  page.on('response', async (r) => { requests++; try { bytes += Number((await r.headerValue('content-length')) ?? 0); } catch {} });

  await page.goto(origin + route, { waitUntil: 'load', timeout: 120000 });
  await page.waitForTimeout(3500);
  const fcp = await page.evaluate(() => performance.getEntriesByName('first-contentful-paint')[0]?.startTime ?? 0);
  const m = await page.evaluate(() => window.__m);
  await ctx.close();
  return { lcp: m.lcp, cls: m.cls, fcp, lcpTag: m.lcpTag, kb: bytes / 1024, requests };
}

const median = (xs) => xs.slice().sort((a, b) => a - b)[Math.floor(xs.length / 2)];

console.log('route'.padEnd(24) + ['LCP before', 'LCP after', 'CLS before', 'CLS after', 'KB before', 'KB after'].map(h => h.padStart(12)).join(''));
for (const route of ROUTES) {
  const res = {};
  for (const [label, origin] of Object.entries(ORIGINS)) {
    const runs = [];
    for (let i = 0; i < RUNS; i++) runs.push(await measure(origin, route));
    res[label] = {
      lcp: Math.round(median(runs.map(r => r.lcp))),
      cls: Number(median(runs.map(r => r.cls)).toFixed(3)),
      kb: Math.round(median(runs.map(r => r.kb))),
      tag: runs[0].lcpTag,
    };
  }
  console.log(
    route.padEnd(24) +
      [`${res.before.lcp} ms`, `${res.after.lcp} ms`, res.before.cls, res.after.cls, res.before.kb, res.after.kb]
        .map(v => String(v).padStart(12)).join('') +
      `   LCP el: ${res.before.tag} -> ${res.after.tag}`,
  );
}
await browser.close();
