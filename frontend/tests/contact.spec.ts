import { test, expect } from '@playwright/test';

test('contact form submits successfully', async ({ page }) => {
  // Mock the backend API call so we don't actually send emails or pollute the database during E2E tests
  await page.route('/api/contact', async route => {
    const json = { ok: true, message: 'Thank you — our team will contact you within one business day.' };
    await route.fulfill({ json });
  });

  await page.goto('/contact');

  // Fill out the form
  await page.fill('input[name="name"]', 'Playwright Tester');
  await page.fill('input[name="phone"]', '1234567890');
  await page.fill('input[name="email"]', 'test@playwright.com');
  await page.selectOption('select[name="projectType"]', 'Office Interiors');
  await page.fill('textarea[name="message"]', 'This is an automated test message.');

  // Submit
  await page.click('button[type="submit"]');

  // Verify success screen is displayed
  await expect(page.locator('text=Request received')).toBeVisible();
  await expect(page.locator('text=Thank you — our team will contact you within one business day.')).toBeVisible();
});
