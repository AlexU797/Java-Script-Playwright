//This automated test checks that the text length is greater than zero.
import { test, expect } from '@playwright/test';
test('Text Length', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    const elementWords = await page.locator("//p[contains(text(),'We believe performance needs to be validated at ev')]").textContent();
    const elementWords1 = elementWords.length;
    console.log(elementWords1);
    await expect(elementWords1).toBeGreaterThan(1);
    await page.waitForTimeout(3000);
});