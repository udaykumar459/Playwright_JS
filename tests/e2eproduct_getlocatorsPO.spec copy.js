import {test, expect} from '@playwright/test';
import { text } from 'stream/consumers';
const {customtest} = require('./utils/customData');
const {LoginPage} = require('../pageobjects/LoginPage');
const {DashboardPage} = require('../pageobjects/DashboardPage');
const {POManager} = require('../pageobjects/POManager');
const testDataJSON = JSON.parse(JSON.stringify(require('../resources/e2eProductOrderTestData.json')));

for(const testData of testDataJSON){
test(`end to end e commerce product ${testData.productName} order`, async ({page}) =>{
    const username = testData.username;
    const password = testData.password;
    const product = testData.productName
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTOLoginPage();
    await loginPage.doLogin(username, password)
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.addProductToCart(product);
    await dashboardPage.goToCartPage();

    // await page.goto("https://rahulshettyacademy.com/client");
    // await page.getByPlaceholder("email@example.com").fill('anshika@gmail.com');
    // await page.getByPlaceholder("enter your passsword").fill('Iamking@000');
    // await page.getByRole("button", {name:'Login'}).click();
    // await page.pause();

    

    await page.locator("li.ng-star-inserted").first().waitFor();

    await expect(page.getByText(product)).toBeVisible();
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

}

customtest.only(`custom test -  end to end e commerce product order`, async ({page, productTestData}) =>{
    const username = productTestData.username;
    const password = productTestData.password;
    const product = productTestData.productName
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTOLoginPage();
    await loginPage.doLogin(username, password)
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.addProductToCart(product);
    await dashboardPage.goToCartPage();

    // await page.goto("https://rahulshettyacademy.com/client");
    // await page.getByPlaceholder("email@example.com").fill('anshika@gmail.com');
    // await page.getByPlaceholder("enter your passsword").fill('Iamking@000');
    // await page.getByRole("button", {name:'Login'}).click();
    // await page.pause();

    

    await page.locator("li.ng-star-inserted").first().waitFor();

    await expect(page.getByText(product)).toBeVisible();
    await page.getByRole("button", {name:'Checkout'}).click();  
});