//This test verifies that the product is added to the cart.
import { test, expect } from '@playwright/test';
test('ProductInThecart', async ({ page }) => {
   await page.goto('https://demoblaze.com/index.html');
   await page.click("//a[normalize-space()='Nokia lumia 1520']");
   await page.click("//a[normalize-space()='Add to cart']");
   await page.click("//a[normalize-space()='Cart']");
   await page.waitForTimeout(4000);
   await expect(page.locator("//a[normalize-space()='Delete']")).toHaveText(`Delete`);
   await page.waitForTimeout(4000);
});