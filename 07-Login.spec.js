//This test verifies that a user can log in to the website using credentials loaded with `dotenv`.
import { test, expect } from '@playwright/test';
import 'dotenv/config';
test('Login', async ({ page }) => {
    const USERNAMEDATA = process.env.USERNAME1;
    const PASSWORD1 = process.env.PASSWORD1;
    console.log(USERNAMEDATA);
    await page.goto('https://demoblaze.com/index.html');
    await page.click("//a[@id='login2']");
    await page.locator("//input[@id='loginusername']").fill(USERNAMEDATA);
    await page.locator("//input[@id='loginpassword']").fill(PASSWORD1);
    await page.click("//button[normalize-space()='Log in']");
    await page.waitForSelector("//button[normalize-space()='Log in']");
    await page.waitForTimeout(5000);
    await expect(page.locator("(//a[@id='nameofuser'])")).toHaveText(`Welcome ${USERNAMEDATA}`);
    await page.click("//a[@id='logout2']");
    await page.waitForTimeout(5000);
    await expect(page.locator("(//a[@id='signin2'])")).toHaveText("Sign up");
});