import { test, expect } from '@playwright/test';

test('landing button works', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=ENTER NIGHT CITY TERMINAL')).toBeVisible();
  await page.locator('text=ENTER NIGHT CITY TERMINAL').click();
  await expect(page).toHaveURL('/terminal');
});
