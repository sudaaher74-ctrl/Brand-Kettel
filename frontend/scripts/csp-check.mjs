/**
 * Drives a real browser over every public route against a running production
 * build and reports Content-Security-Policy violations and uncaught page errors.
 *
 * Usage:
 *   npm run build && npx next start -p 3100 &
 *   node scripts/csp-check.mjs
 *
 * Set BASE to point at another origin, and PW_CHROMIUM if Playwright's bundled
 * browser is not on the default path.
 */
import { chromium } from '@playwright/test';

const BASE = process.env.BASE ?? 'http://127.0.0.1:3100';
const ROUTES = ['/', '/about', '/process', '/portfolio', '/portfolio/gucci', '/contact',
                '/commercial-fit-outs', '/retail-fit-outs', '/jewellery-showrooms',
                '/residential-interiors', '/custom-furniture', '/careers', '/blog'];

const browser = await chromium.launch(
  process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {},
);
const violations = new Map();
const pageErrors = [];

for (const route of ROUTES) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  page.on('console', (msg) => {
    const t = msg.text();
    if (/Content Security Policy|Refused to/i.test(t)) {
      const key = t.split('\n')[0].slice(0, 220);
      violations.set(key, (violations.get(key) ?? 0) + 1);
    }
  });
  page.on('pageerror', (e) => pageErrors.push(`${route}: ${e.message.split('\n')[0]}`));
  try {
    await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 45000 });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1200);
  } catch (e) {
    pageErrors.push(`${route}: navigation failed — ${e.message.split('\n')[0]}`);
  }
  await ctx.close();
}
await browser.close();

console.log(`Checked ${ROUTES.length} routes.`);
console.log(`\nCSP report-only violations: ${violations.size === 0 ? 'none' : violations.size + ' distinct'}`);
for (const [k, n] of violations) console.log(`  (x${n}) ${k}`);
console.log(`\nUncaught page errors: ${pageErrors.length === 0 ? 'none' : ''}`);
for (const e of pageErrors) console.log('  -', e);
