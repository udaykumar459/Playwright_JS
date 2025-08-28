import {test, expect} from '@playwright/test';

test('validate gui page', async ({page})=>{

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());

  const dropdown = page.locator('select.form-control');
  await dropdown.selectOption('consult');

  await page.locator('.radiotextsty').last().click();
  await page.locator('#okayBtn').click();

  console.log(await page.locator('.radiotextsty').last().isChecked());
  await expect(page.locator('.radiotextsty').last()).toBeChecked();

  await page.locator('#terms').click();
  await expect(page.locator('#terms')).toBeChecked();


  await page.locator('#terms').uncheck();
  console.log(await page.locator('#terms').isChecked());
  expect(await page.locator('#terms').isChecked()).toBeFalsy(); 
  
  const blink_link = page.locator("[href*='documents-request']");
  await expect(blink_link).toHaveAttribute('class', 'blinkingText');


});

test.only('new window handling', async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator('#username');
    const blink_link = page.locator("[href*='qasummit']");

    
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
    

    const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    blink_link.click()]
    );    

    const text = await newPage.locator("[href*='linkedin.com/in/rahul-shetty-venkatesh']").first().textContent();
    console.log(text);

});