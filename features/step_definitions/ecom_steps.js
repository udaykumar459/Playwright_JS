const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const {POManager} = require('../../pageobjects/POManager');
const playwright = require('playwright');


Given('User is on the e-commerce landing page',  { timeout: 500*1000 },  async function () {
    // const browser = await playwright.chromium.launch({headless:false});
    // const context = await browser.newContext();
    // const page = await context.newPage();
    // this.poManager = new POManager(page);
    this.loginPage = this.poManager.getLoginPage();
    await this.loginPage.goTOLoginPage();
});

When('user logins with username {string} and password {string}', async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
   await this.loginPage.doLogin(username, password);
    
});


Then('User should be logged in successfully', async function () {
     this.dashboardPage = this.poManager.getDashboardPage();
});

When('add  product {string} to cart', async function (productName) {
   await this.dashboardPage.addProductToCart(productName);
   await this.dashboardPage.goToCartPage();
});

Then('verify product {string} is added to cart', async function (productName) {
    this.cartPage = this.poManager.getCartPage();
    await this.cartPage.verifyProductInCart(productName);
    await this.cartPage.checkOutOrder();
});

When('user enter valid details and place the order', async function () {
    this.checkoutPage = this.poManager.getCheckoutPage();   
    await this.checkoutPage.selectCountryFromDropdown("India");
    await this.checkoutPage.placeOrder();
});

Then('verify order is present in order history', async function () {
    this.ordersPage = this.poManager.getOrdersPage();
    await this.ordersPage.verifyOrderInOrdersPage();
});
