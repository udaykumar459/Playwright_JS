const {After, Before, BeforeStep, AfterStep, Status} = require('@cucumber/cucumber');
const {POManager} = require('../../pageobjects/POManager');
const playwright = require('playwright');

Before(async function () {
    const browser = await playwright.chromium.launch({headless:false});
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
    //this.loginPage = this.poManager.getLoginPage();
    // await this.loginPage.goTOLoginPage();
});

After(async function () {
    console.log("in after hook");
    await this.page.close();
});

BeforeStep(async function () {
    // await this.page.screenshot({path:`./screenshots/${Date.now()}.png`});
});
// You can add hooks here that will run before or after each scenario
// For example, you might want to set up a browser instance before each scenario

AfterStep(async function ({result}) {
if(result.status === Status.FAILED){
 await this.page.screenshot({path:`./screenshots/${Date.now()}.png`});
}
});

   
