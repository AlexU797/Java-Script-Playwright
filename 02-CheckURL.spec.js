//This automated test checks the page URL.
import { test, expect } from '@playwright/test';
test('Check URL', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await expect(page).toHaveURL("https://demoblaze.com/index.html");
});