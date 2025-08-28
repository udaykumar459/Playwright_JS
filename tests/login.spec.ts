// const {test, expect} = require('@playwright/test');
import {test, expect} from '@playwright/test'

test.only('validate login page', async ({page})=>{

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await console.log(page.title());
  await page.locator('#username').fill("rahulshetty");
  await page.locator("[name='password']").fill("2passow");
  await page.locator("#signInBtn").click();
  console.log(await page.locator("div[style*='block']").textContent());
  await expect(page.locator("div[style*='block']")).toContainText('Incorrect');

  await page.locator('#username').fill("");
  await page.locator('#username').fill("rahulshettyacademy");
  await page.locator("[name='password']").fill("learning");
  await page.locator("#signInBtn").click();
  console.log(await page.locator('.card-body a').nth(0).textContent());
  console.log(await page.locator('.card-body a').last().textContent());
  const allProducts = page.locator('.card-body a');
  console.log(await allProducts.allTextContents());

  
});


test('page fixture diectly', async ({page})=>{

    await page.goto("https://google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
    
    
})