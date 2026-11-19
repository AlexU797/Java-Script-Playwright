/*This automated test verifies that the “Add to cart” button on the homepage 
changes to “Remove” after the product is added to the cart.
*/
import { test, expect } from '@playwright/test';
test.only('Remove check', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.click("//input[@id='login-button']")
    const products = await page.locator("//div[@class='pricebar']");
    const productsCount = await products.count();
    for (let i = 0; i < productsCount; i++) {
        await products.nth(i).click()
    }
    await page.waitForTimeout(4000);
    const productText = await products.allTextContents();
    const text = productText.map(text => text.replace(/[^\p{L}]/gu, ''));
    console.log(text);
    await expect(text).toEqual(Array(productsCount).fill('Remove'));
})