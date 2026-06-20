import { test, expect } from '@playwright/test';

test('homepage loads and displays main content', async ({ page }) => {
  await page.goto('/');
  // Look for a key heading that we know is on the homepage
  const heading = page.locator('h1').first();
  await expect(heading).toBeVisible();
});

test('project cards navigate to portfolio details', async ({ page }) => {
  await page.goto('/');
  // Wait for a project link to load
  const projectLink = page.locator('a[href^="/portfolio/"]').first();
  await expect(projectLink).toBeVisible();
  
  // Click the first project card
  await projectLink.click();
  
  // Wait for URL to be the project page
  await expect(page).toHaveURL(/\/portfolio\/.+/);
  
  // The portfolio details page should have a heading with the project name
  const detailHeading = page.locator('h1').first();
  await expect(detailHeading).toBeVisible();
});
