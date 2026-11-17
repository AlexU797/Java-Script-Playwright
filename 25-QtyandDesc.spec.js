//This test verifies that the item quantity and description are displayed in the cart.
import { test, expect } from '@playwright/test';
test('Qty and Desc', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.click("//input[@id='login-button']");
    await page.click("(//div[@Class='pricebar'])[1]")
    await page.click("//span[@class='shopping_cart_badge']");
    await page.waitForTimeout(3000);
    await expect(page.getByText('QTY', { exact: true })).toBeVisible();
    await expect(page.getByText('Description', { exact: true })).toBeVisible();
})
