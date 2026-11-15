//The test uses a faker to log in.
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
test.only('Login Faker', async ({ page }) => {
    const nameRandom = faker.person.bio();
    console.log(nameRandom);
    const emailRandom = faker.internet.email();
    console.log(emailRandom);
    const phoneRandom = String(faker.number.int());
    console.log(phoneRandom);
    const addressRandom = faker.lorem.sentence();
    console.log(addressRandom);
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//input[@id='name']").fill(nameRandom);
    await page.locator("//input[@id='email']").fill(emailRandom);
    await page.locator("//input[@id='phone']").fill(phoneRandom);
    await page.locator("//textarea[@id='textarea']").fill(addressRandom);
    await page.waitForTimeout(4000);
});