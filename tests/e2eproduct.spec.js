import {test, expect} from '@playwright/test';
import { text } from 'stream/consumers';

test('end to end e commerce product adding', async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill('anshika@gmail.com');
    await page.locator("#userPassword").fill('Iamking@000');
    await page.locator("#login").click();
    // await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').last().waitFor();
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);

    const products = page.locator('.card-body');
    const product = 'ADIDAS ORIGINAL';
    const productCount = await products.count();

    for(let i=0;i<productCount;i++){
        if (await products.nth(i).locator('b').textContent() === product){
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    await page.locator("button[routerlink='/dashboard/cart']").click();
    await page.waitForLoadState('domcontentloaded');
    await page.locator("li.ng-star-inserted").first().waitFor();
    const isVisible = await page.locator("h3:has-text('"+product+"')").isVisible();
    expect(isVisible).toBeTruthy();

    await page.locator('text=Checkout').click();
    await page.locator("input[placeholder='Select Country']").pressSequentially('Ind');

    const dropdown =  page.locator('section.ng-star-inserted');
    await dropdown.waitFor();

    const optionsCount = await dropdown.locator("button").count();
    for(let i =0;i<optionsCount;i++){

        if(await dropdown.locator("button").nth(i).textContent() === ' India'){
        await dropdown.locator("button").nth(i).click();
        break;
        }

    }

    // await page.getByLabel('anshika@gmail.com').waitFor();
    await expect(page.locator(".user__name label")).toHaveText('anshika@gmail.com');
    await page.locator("text=Place Order ").click();

    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator("h1:has-text('Thankyou for the order.')")).toBeVisible();
    const orderId = await page.locator("label.ng-star-inserted").textContent();
    console.log(orderId);

    await page.locator("button[routerlink*='/dashboard/myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
    for(let i=0;i<rows.count();i++){
        const rowOrderId = await rows.nth(i).locator('th').textContent();
        if(orderId.includes(rowOrderId)){
            await rows.nth(i).locator("text=View").click();
            break;
        }
    }

    
    await page.locator("col-text -main").waitFor();
    const orderIDText = await page.locator("col-text -main").textContent();
    expect(orderId.includes(orderIDText)).toBeTruthy;

});