import {test, expect} from '@playwright/test';

test('More validations', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://google.com");
    // await page.goBack();
    // await page.goForward();

    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#displayed-text').screenshot({path:'element_ss.png'});
    await page.locator('#hide-textbox').click();
    await page.screenshot({path:'screenshot.png'});
    await expect(page.locator('#displayed-text')).toBeHidden();


});

test.only('visual testing - image to image comparison', async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
expect(await page.screenshot()).toMatchSnapshot('rs.png');
});