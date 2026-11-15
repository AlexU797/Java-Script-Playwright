//A test to verify that the author's name length is not 0
import { test, expect } from '@playwright/test';
test('Autor Length', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const elementWordsName = await page.locator("#HTML1 tr").nth(3).locator('td').nth(1).textContent();
    const elementWordsName1 = elementWordsName.length;
    console.log(elementWordsName1);
    await expect(elementWordsName1).toBeGreaterThan(1);
});