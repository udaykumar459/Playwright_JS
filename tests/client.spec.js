import {test, expect} from '@playwright/test';

test('client app test', async ({page}) =>{

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill('anshika@gmail.com');
    await page.locator("#userPassword").fill('Iamking@000');
    await page.locator("#login").click();
    // await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').last().waitFor();
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
});