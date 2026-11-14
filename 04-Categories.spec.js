//This automated test verifies that the category contains exactly three items.
import { test, expect } from '@playwright/test';
test.only('Categories', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    const CategoriesElements = await page.locator('//a[@id="itemc"]');
    const CategoriesElementsCount = await CategoriesElements.count();
    await expect(CategoriesElementsCount).toBe(3);
    await page.waitForTimeout(3000);
});
