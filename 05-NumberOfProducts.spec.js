//This automated test verifies that the page displays exactly nine products.
import { test, expect } from '@playwright/test';
test('NumberOfProducts', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    const Products = await page.locator('//p[@id="article"]');
    await page.waitForSelector('//p[@id="article"]');
    const ProductsCount = await Products.count();
    await expect(ProductsCount).toBe(9);
    await page.waitForTimeout(3000);
});