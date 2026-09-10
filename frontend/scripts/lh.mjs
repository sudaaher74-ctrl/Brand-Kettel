/**
 * Lighthouse mobile run against a running production build.
 *
 *   npm run build && npx next start -p 3100 &
 *   node scripts/lh.mjs [route...]   # defaults to /
 *
 * Prints performance score plus LCP / CLS / TBT / FCP / SI / TTI.
 */
import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';

const BASE = process.env.BASE ?? 'http://127.0.0.1:3100';
const ROUTES = process.argv.slice(2).length ? process.argv.slice(2) : ['/'];
const CHROME_PATH = process.env.CHROME_PATH;

const chrome = await launch({
  chromePath: CHROME_PATH,
  chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
});

const rows = [];
for (const route of ROUTES) {
  const result = await lighthouse(BASE + route, {
    port: chrome.port,
    output: 'json',
    logLevel: 'error',
    screenEmulation: { mobile: true, width: 412, height: 823, deviceScaleFactor: 1.75, disabled: false },
    formFactor: 'mobile',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  });
  const lhr = result.lhr;
  const a = (id) => lhr.audits[id]?.numericValue;
  const failing = Object.values(lhr.audits)
    .filter((a) => a.score !== null && a.score < 1 && ['accessibility', 'seo', 'best-practices'].some((c) =>
      lhr.categories[c].auditRefs.some((r) => r.id === a.id && r.weight > 0)))
    .map((a) => a.id);
  if (failing.length) console.log(`  ${route} failing a11y/seo/bp audits: ${failing.join(', ')}`);

  rows.push({
    route,
    perf: Math.round(lhr.categories.performance.score * 100),
    a11y: Math.round(lhr.categories.accessibility.score * 100),
    bp: Math.round(lhr.categories['best-practices'].score * 100),
    seo: Math.round(lhr.categories.seo.score * 100),
    LCP: Math.round(a('largest-contentful-paint')),
    CLS: Number(a('cumulative-layout-shift')?.toFixed(3)),
    TBT: Math.round(a('total-blocking-time')),
    FCP: Math.round(a('first-contentful-paint')),
    SI: Math.round(a('speed-index')),
  });
}
await chrome.kill();

console.log('\nroute'.padEnd(26) + ['perf', 'a11y', 'bp', 'seo', 'LCP ms', 'CLS', 'TBT ms', 'FCP ms', 'SI ms'].map(h => h.padStart(8)).join(''));
for (const r of rows) {
  console.log(
    r.route.padEnd(26) +
      [r.perf, r.a11y, r.bp, r.seo, r.LCP, r.CLS, r.TBT, r.FCP, r.SI].map(v => String(v).padStart(8)).join(''),
  );
}
