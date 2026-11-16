//This automated test verifies that the user is logged in.
import { test, expect } from '@playwright/test';
test('UserLogin', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.click("//input[@id='login-button']")
    await page.click("//button[@id='react-burger-menu-btn']");
    await expect(page.locator("//a[@id='logout_sidebar_link']")).toHaveText("Logout");
    await page.waitForTimeout(3000);
})