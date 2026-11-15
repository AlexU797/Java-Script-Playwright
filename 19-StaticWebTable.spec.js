//The test calculates the average value from the price column.
import { test, expect } from '@playwright/test';
test('Static Web Table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const priceCells = page.locator('#HTML1 tr td:nth-child(4)');
    const priceTexts = await priceCells.allTextContents();
    const prices = priceTexts.map(function (text) {
        return Number(text.trim());
    });
    const total = prices.reduce(function (sum, price) {
        return sum + price;
    }, 0);
    const average = total / prices.length;
    console.log(prices);
    console.log(average);
});
