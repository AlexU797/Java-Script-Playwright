//This automated test verifies that the number of items in the cart matches the number of products selected on the page.
import { test, expect } from '@playwright/test';
test('Product check', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.click("//input[@id='login-button']")
    const products = await page.locator("//div[@class='pricebar']");
    const productsCount = await products.count();
    console.log(productsCount);
    for (let i = 0; i < productsCount; i++) {
        await products.nth(i).click()
    }
    await page.waitForTimeout(3000);
    await page.click("//span[@class='shopping_cart_badge']");
    const productsCart = await page.locator("//div[@class='item_pricebar']");
    const productsCartCount = await productsCart.count();
    console.log(productsCartCount);
    await page.waitForTimeout(3000);
    await expect(productsCount).toEqual(productsCartCount);

})