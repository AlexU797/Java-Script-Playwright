//This test verifies that the item quantity and description are displayed in the cart.
import { test, expect } from '@playwright/test';
test('Qty and Desc', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.click("//input[@id='login-button']");
    await page.click("(//div[@class='pricebar'])[2]")
    await page.waitForTimeout(3000);
    await page.click("//span[@class='shopping_cart_badge']");
    await page.waitForTimeout(3000);
    const descWords = await page.locator("//div[@class='inventory_item_desc']").textContent();
    const descWord1 = descWords.length;
    console.log(descWord1);
    await expect(descWord1).toBeGreaterThan(1);
    const qtyWords = await page.locator("//div[@class='cart_quantity']").textContent();
    const qtyWords1 = qtyWords.length;
    console.log(qtyWords1);
    await expect(qtyWords1).toBeGreaterThan(0);
})