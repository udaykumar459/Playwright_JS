import {test, expect} from '@playwright/test';
import { text } from 'stream/consumers';
const {customtest} = require('./utils/customData');
const {LoginPage} = require('../pageobjects/LoginPage');
const {DashboardPage} = require('../pageobjects/DashboardPage');
const {CartPage} = require ('../pageobjects/CartPage');
const {CheckoutPage} = require('../pageobjects/CheckoutPage');
const {POManager} = require('../pageobjects/POManager');
const {OrdersPage} = require('../pageobjects/OrdersPage');
const testDataJSON = JSON.parse(JSON.stringify(require('../resources/e2eProductOrderTestData.json')));

for(const testData of testDataJSON){
test.only(`end to end e commerce product ${testData.productName} order`, async ({page}) =>{
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
    const cartPage = poManager.getCartPage();
    await cartPage.verifyProductInCart(product);
    await cartPage.checkOutOrder();
    const checkoutPage = poManager.getCheckoutPage();   
    await checkoutPage.selectCountryFromDropdown("India");
    await checkoutPage.placeOrder();
    const ordersPage = poManager.getOrdersPage();
    ordersPage.verifyOrderInOrdersPage();
    

    // await page.goto("https://rahulshettyacademy.com/client");
    // await page.getByPlaceholder("email@example.com").fill('anshika@gmail.com');
    // await page.getByPlaceholder("enter your passsword").fill('Iamking@000');
    // await page.getByRole("button", {name:'Login'}).click();
    //await page.pause();

    

   


});

}

customtest(`custom test -  end to end e commerce product order`, async ({page, productTestData}) =>{
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