import { test, expect } from '@playwright/test';
test.only('Gender', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.click("(//label[@for='gender']/..//input[@type='radio'])[1]");
    await page.waitForSelector("(//label[@for='gender']/..//input[@type='radio'])[1]")
    await page.click("(//label[@for='gender']/..//input[@type='radio'])[2]");
    const days = page.locator("(//label[@for='days']/..//input[@type='checkbox'])");
    const daysCount = await days.count();
    for (let i = 0; i < daysCount; i++) {
        await days.nth(i).check();
    }
    await page.waitForTimeout(4000);
});
// Прокликать элементы + использлование цикла