import { test, expect } from '@playwright/test';

test('map click redirects to district view', async ({ page }) => {
  await page.goto('/map');
  await page.locator('[data-id="pacifica"]').click();
  await expect(page).toHaveURL('/map/pacifica');
  await expect(page.locator('h1')).toContainText('Pacifica');
});
