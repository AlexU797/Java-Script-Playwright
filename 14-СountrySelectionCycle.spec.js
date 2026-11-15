//The test is configured to allow country selection in a cycle using the arrow keys.
import { test, expect } from '@playwright/test';
test('Сountry Selection Cycle', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.click("//select[@id='country']");
    const Country1 = await page.locator("//select[@id='country']/option");
    const CountryCount1 = await Country1.count();
    for (let i = 0; i < 3; i++) {
        await page.keyboard.press('ArrowDown')
    }
    await page.waitForTimeout(6000); я
});