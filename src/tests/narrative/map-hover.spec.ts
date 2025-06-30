import { test, expect } from '@playwright/test';

test('map hover shows tooltip', async ({ page }) => {
  await page.goto('/map');
  const hotspot = page.locator('[data-id="watson"]');
  await hotspot.hover();
  await expect(page.locator('.tooltip')).toContainText('Watson - Tyger Claws');
});
