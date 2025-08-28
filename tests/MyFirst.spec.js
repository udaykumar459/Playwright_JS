const {test, expect} = require('@playwright/test');


test('My First broser context test', async ({browser})=>{

    const browserContext= await browser.newContext();

    const page = await browserContext.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
});


test.only('page fixture diectly', async ({page})=>{

    await page.goto("https://google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
    
})