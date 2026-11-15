//Test for uploading multiple files
import { test, expect } from '@playwright/test';
test('Multiple file upload', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//input[@id='multipleFilesInput']").setInputFiles(['test.1.docx', 'test.2.docx']);
    await page.waitForTimeout(6000);
});