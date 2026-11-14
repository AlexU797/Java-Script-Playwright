//This automated test checks the page title.
import { test, expect } from '@playwright/test';
test('Has Title', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await expect(page).toHaveTitle("STORE");
});