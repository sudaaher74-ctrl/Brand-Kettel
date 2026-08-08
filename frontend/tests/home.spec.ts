import { test, expect } from '@playwright/test';

// ─── Homepage ───────────────────────────────────────────────────────────────

test('homepage loads with an H1 headline', async ({ page }) => {
  await page.goto('/');
  const h1 = page.locator('h1').first();
  await expect(h1).toBeVisible();
  // Confirm it has meaningful content (not just an empty element)
  await expect(h1).not.toBeEmpty();
});

test('homepage hero renders CTA links', async ({ page }) => {
  await page.goto('/');
  // Both CTA buttons from the new Hero
  await expect(page.locator('a[href="/portfolio"]').first()).toBeVisible();
  await expect(page.locator('a[href="/contact"]').first()).toBeVisible();
});

test('Our Expertise section appears on the homepage', async ({ page }) => {
  await page.goto('/');
  // The ExpertiseStorytelling heading
  const heading = page.getByText(/Our Core Interior/i).first();
  await heading.scrollIntoViewIfNeeded();
  await expect(heading).toBeVisible();
});

// ─── Navigation ─────────────────────────────────────────────────────────────

test('navbar renders Brand Kettle logo text', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Brand Kettle').first()).toBeVisible();
});

test('mobile menu opens and closes', async ({ page, isMobile }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggleBtn = page.locator('button[aria-label="Toggle menu"]');
  await expect(toggleBtn).toBeVisible();
  await toggleBtn.click();
  // Menu should now be open — a "Get in Touch" CTA appears inside it
  await expect(page.locator('a[href="/contact"]').last()).toBeVisible();
  await toggleBtn.click();
});

// ─── Key Pages ───────────────────────────────────────────────────────────────

test('blog page loads without 404', async ({ page }) => {
  const response = await page.goto('/blog');
  expect(response?.status()).not.toBe(404);
  await expect(page.locator('h1').first()).toBeVisible();
});

test('portfolio page loads and shows at least one project link', async ({ page }) => {
  await page.goto('/portfolio');
  // Should have at least one link pointing into /portfolio/<slug>
  const firstProjectLink = page.locator('a[href^="/portfolio/"]').first();
  await expect(firstProjectLink).toBeVisible();
});

test('contact page loads with a form', async ({ page }) => {
  await page.goto('/contact');
  // There should be at least one input on the contact page
  await expect(page.locator('input').first()).toBeVisible();
});

// ─── Error Handling ──────────────────────────────────────────────────────────

test('unknown routes show a 404 not-found page', async ({ page }) => {
  await page.goto('/this-page-does-not-exist-xyz');
  // Next.js not-found.tsx should render
  const body = await page.textContent('body');
  expect(body).toMatch(/not found|404|doesn't exist/i);
});
