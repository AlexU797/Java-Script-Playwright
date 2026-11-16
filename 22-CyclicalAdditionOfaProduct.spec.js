//This automated test verifies that all products displayed on the page can be added to the cart.
import { test, expect } from '@playwright/test';
test('Cyclical Addition Of a product', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.click("//input[@id='login-button']")
    const Products = await page.locator("//div[@class='pricebar']");
    const ProductsCount = await Products.count();
    console.log(ProductsCount);
    for (let i = 0; i < ProductsCount; i++) {
        await Products.nth(i).click()
    }
    await page.waitForTimeout(5000);
})