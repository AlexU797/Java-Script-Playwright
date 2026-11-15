//Test for uploading a single file
import { test, expect } from '@playwright/test';
test('Singe file upload', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//input[@id='singleFileInput']").setInputFiles('test.1.docx');
    await page.waitForTimeout(6000);
});