const {test,expect} = require('@playwright/test');

test.describe.configure({mode:'parallel'});

test('first test @web case', async({page})=>{

    await page.goto("https://google.com")

});


test('@web second test case', async({page})=>{

    await page.goto("https://facebook.com")
    // await expect(page).toHaveTitle('google');

});


test('third test case', async({page})=>{

    await page.goto("https://youtube.com")

});
