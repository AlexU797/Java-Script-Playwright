//The test selects a specific country
import { test, expect } from '@playwright/test';
test('a Specific Country', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//select[@id='country']").selectOption('germany');
    await page.waitForTimeout(6000);
});