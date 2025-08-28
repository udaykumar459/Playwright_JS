import {test, expect, request} from '@playwright/test';
const {APIUtils} = require('./utils/APIUtils');


const dataPayload = {userEmail: "anshika@gmail.com", userPassword: "Iamking@000"};
const orderPayload = {orders: [{country: "China", productOrderedId: "67a8df56c0d3e6622a297ccd"}]};


let apiData;
test.beforeAll('before all tests ', async()=>{

    const apiContext = await request.newContext();
     const apiUtils = new APIUtils(apiContext, dataPayload);
    apiData = await apiUtils.createOrder(orderPayload);



});




test('@API end to end e commerce product adding by passing login', async ({page}) =>{

    page.addInitScript(value =>{
        window.localStorage.setItem('token',value);
    }, apiData.token)


    await page.goto("https://rahulshettyacademy.com/client");
    

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
        if(apiData.orderId.includes(rowOrderId)){
            await page.locator("tbody tr").nth(i).getByRole("button",{name:'View'}).click();
            break;
        }
    }

    // await page.pause();
    await page.waitForLoadState('networkidle');
    await page.locator(".col-text").waitFor();
    // await page.pause();
    const orderIDText = await page.locator(".col-text").textContent();
    expect(apiData.orderId.includes(orderIDText)).toBeTruthy;


});
