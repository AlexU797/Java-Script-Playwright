/*This automated test verifies that a message prompting the user to 
register appears when the login form is submitted with empty fields.
*/
import { test, expect } from '@playwright/test';
test('Empty Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.click("//input[@id='login-button']");
    await expect(page.locator("//h3[normalize-space()='Epic sadface: Username is required']")).toHaveText("Epic sadface: Username is required");

});