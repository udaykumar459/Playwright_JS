import {test, expect, request} from '@playwright/test';
const {APIUtils} = require('./utils/APIUtils');


const dataPayload = {userEmail: "anshika@gmail.com", userPassword: "Iamking@000"};
const orderPayload = {orders: [{country: "China", productOrderedId: "67a8df56c0d3e6622a297ccd"}]};
const fakeOrdersPayload = {data:[], message:"No Orders"};

let apiData;
test.beforeAll('before all tests ', async()=>{

    const apiContext = await request.newContext();
     const apiUtils = new APIUtils(apiContext, dataPayload);
    apiData = await apiUtils.createOrder(orderPayload);



});




test('end to end e commerce product adding by passing login', async ({page}) =>{

    page.addInitScript(value =>{
        window.localStorage.setItem('token',value);
    }, apiData.token)


    await page.goto("https://rahulshettyacademy.com/client");

    //fake payload - interceot and send back to UI
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route=>{
            const response = await page.request.fetch(route.request());
            let body = JSON.stringify(fakeOrdersPayload);
            route.fulfill({
                response, body,
            })
        }
    );

    
    //intercepting response - API response ->{Playwright fake response} - browser rendein to frontend


    // await page.pause();
    await page.getByRole("listitem").getByRole("button", {name:'ORDERS'}).click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    console.log(await page.locator('.mt-4').textContent())



});
