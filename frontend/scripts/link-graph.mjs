/**
 * Internal link-depth and orphan report.
 *
 * Crawls the running production build from / following internal <a href>s,
 * then compares what it reached against sitemap.xml.
 *
 *   npm run build && npx next start -p 3100 &
 *   node scripts/link-graph.mjs
 */
import { chromium } from '@playwright/test';
const BASE = 'http://127.0.0.1:3100';
const browser = await chromium.launch(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {});
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });

const depth = new Map([['/', 0]]);
const inbound = new Map();
const queue = ['/'];
const seen = new Set(['/']);

while (queue.length) {
  const path = queue.shift();
  const page = await ctx.newPage();
  let hrefs = [];
  try {
    const r = await page.goto(BASE + path, { waitUntil: 'load', timeout: 60000 });
    if (r && r.status() >= 400) { await page.close(); continue; }
    hrefs = await page.$$eval('a[href]', (as) => as.map((a) => a.getAttribute('href')));
  } catch { await page.close(); continue; }
  await page.close();

  for (const raw of hrefs) {
    if (!raw || !raw.startsWith('/') || raw.startsWith('//')) continue;
    const href = raw.split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
    if (href.startsWith('/admin')) continue;
    inbound.set(href, (inbound.get(href) ?? new Set()).add(path));
    if (!seen.has(href)) {
      seen.add(href);
      depth.set(href, (depth.get(path) ?? 0) + 1);
      queue.push(href);
    }
  }
}
await browser.close();

// Everything the sitemap claims should exist.
const sitemapUrls = (await (await fetch(BASE + '/sitemap.xml')).text())
  .match(/<loc>([^<]+)<\/loc>/g).map((m) => m.replace(/<\/?loc>/g, '').replace('https://www.brandkettle.co.in', '') || '/');

console.log('Reachable from / by crawling links:\n');
[...depth.entries()].sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))
  .forEach(([p, d]) => console.log(`  depth ${d}  ${p.padEnd(42)} inbound links from: ${[...(inbound.get(p) ?? [])].join(', ') || '(entry point)'}`));

const orphans = sitemapUrls.filter((u) => !depth.has(u));
console.log(`\nIn sitemap but NOT reachable by crawling from / (orphans): ${orphans.length}`);
orphans.forEach((o) => console.log('  ', o));

const notInSitemap = [...depth.keys()].filter((p) => !sitemapUrls.includes(p));
console.log(`\nLinked but not in sitemap: ${notInSitemap.length}`);
notInSitemap.forEach((p) => console.log('  ', p));
