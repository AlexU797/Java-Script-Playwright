//This test verifies that the product card includes a description.
import { test, expect } from '@playwright/test';
test('DescriptionInTheProductCard', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.click("(//a[@class='list-group-item'])[3]");
    await page.waitForSelector("(//a[@class='list-group-item'])[3]");
    await page.click("//a[normalize-space()='Sony vaio i5']");
    const elementWords = await page.locator("//p[contains(text(),'Sony is so confident that the VAIO S is a superior')]").textContent();
    const elementWords1 = elementWords.length;
    console.log(elementWords1);
    await expect(elementWords1).toBeGreaterThan(1);
    await page.waitForTimeout(3000);
});