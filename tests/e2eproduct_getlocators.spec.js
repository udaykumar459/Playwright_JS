import {test, expect} from '@playwright/test';
import { text } from 'stream/consumers';

test('end to end e commerce product adding', async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.getByPlaceholder("email@example.com").fill('anshika@gmail.com');
    await page.getByPlaceholder("enter your passsword").fill('Iamking@000');
    await page.getByRole("button", {name:'Login'}).click();

    await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').last().waitFor();


    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);



    const products = page.locator('.card-body');
    const product = 'IPHONE 13 PRO';
    const productCount = await products.count();

    await page.locator(".card-body").filter({hasText:'IPHONE 13 PRO'}).getByRole("button",{name: 'Add to Cart'}).click();

 
    await page.getByRole("listitem").getByRole("button", {name:'Cart'}).click();
    await page.waitForLoadState('domcontentloaded');
    await page.locator("li.ng-star-inserted").first().waitFor();

    await expect(page.getByText("IPHONE 13 PRO")).toBeVisible();
    await page.getByRole("button", {name:'Checkout'}).click();    

    
    await page.locator("input[placeholder='Select Country']").pressSequentially('Ind');

    const dropdown =  page.locator('section.ng-star-inserted');
    await dropdown.waitFor();

    await page.getByRole("button", {name:"India"}).nth(1).click();
    await page.getByText("PLACE ORDER").click();


    await page.waitForLoadState('domcontentloaded');
    await page.locator("label.ng-star-inserted").waitFor();

    await expect(page.getByText("Thankyou for the order.")).toBeVisible();
    const orderId = await page.locator("label.ng-star-inserted").textContent();
    console.log(orderId);

    await page.getByRole("listitem").getByRole("button", {name:'ORDERS'}).click();
    await page.waitForLoadState('networkidle');
    await page.locator("tbody tr").first().waitFor();

    
    const rows = await page.locator("tbody tr");
    console.log(await page.locator("tbody tr").count());
    const rowCount = await page.locator("tbody tr").count();
    // await page.pause();
    for(let i=0;i<rowCount;i++){
        const rowOrderId = await page.locator("tbody tr").nth(i).locator('th').textContent();
        console.log(rowOrderId);
        // await page.pause();
        if(orderId.includes(rowOrderId)){
            await page.locator("tbody tr").nth(i).getByRole("button",{name:'View'}).click();
            break;
        }
    }

    // await page.pause();
    await page.waitForLoadState('networkidle');
    await page.locator(".col-text").waitFor();
    // await page.pause();
    const orderIDText = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIDText)).toBeTruthy;


});