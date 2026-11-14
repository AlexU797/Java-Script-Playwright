//This test verifies that the page menu contains exactly six links.
import { test, expect } from '@playwright/test';
test('MenuLinks', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    const MenuLinks = await page.locator('//a[@class="nav-link"]');
    await page.waitForTimeout(4000);
    const MenuLinlsCount = await MenuLinks.count();
    await expect(MenuLinlsCount - 2).toBe(6);
    await page.waitForTimeout(3000);
});