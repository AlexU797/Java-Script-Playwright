//This test verifies that the product price on the homepage matches the price shown in the product card.
import { test, expect } from '@playwright/test';
test('Price Verification', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    const PriceHome = await page.locator("(//h5[normalize-space()='$360'])").textContent();
    const numbersHome = PriceHome.match(/\d+/g);
    const FullPriceHome = numbersHome[0];
    console.log(FullPriceHome);
    await page.click("//a[normalize-space()='Samsung galaxy s6']");
    const price = await page.locator("(//h3[@class='price-container'])").textContent();
    const numbers = price.match(/\d+/g);
    const fullPrice = numbers[0];
    console.log(fullPrice);
    //await expect(FullPriceHome).toEqual(fullPrice);
    //await expect(FullPriceHome).toBe(fullPrice);
    await expect(FullPriceHome == fullPrice).toBeTruthy();
});