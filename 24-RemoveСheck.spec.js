/*This automated test verifies that the “Add to cart” button on the homepage 
changes to “Remove” after the product is added to the cart.
*/
import { test, expect } from '@playwright/test';
test.only('Remove check', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.click("//input[@id='login-button']")
    await page.click("(//div[@class='pricebar'])[1]")
    await page.waitForTimeout(3000);
    await expect(page.locator("(//div[@class ='pricebar'])[1]//button")).toHaveText("Remove");
})