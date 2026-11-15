//The test counts the number of countries available for selection.
import { test, expect } from '@playwright/test';
test('Selection Of Countries', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const Country = await page.locator("//select[@id='country']/option")
    const CountryCount = await Country.count();
    console.log(CountryCount);
    await page.waitForTimeout(6000);
});