import {test, expect} from '@playwright/test';

test('More validations', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("https://google.com");
    await page.goBack();
    // await page.goForward();

    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();

    // await page.pause();

    // await page.on('dialog', dialog=>dialog.accept());
    // await page.locator('#alertbtn').click();

    page.on('dialog', dialog=>dialog.dismiss());
    await page.locator('#confirmbtn').click();

    await page.locator("#mousehover").hover();

    //iframe
    const framePage = await page.frameLocator("#courses-iframe");
    await framePage.locator("a[href*='lifetime-access']:visible").click();
    const subscribers = await framePage.locator(".text h2").textContent();
    console.log(subscribers?.split(" ")[1]);
})