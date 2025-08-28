import { Page, expect, Locator } from "@playwright/test";

export class LoginPage{

  
    usernameField:Locator;
    passwordField:Locator;
    loginBtn:Locator;
    page:Page

constructor(page:Page){
    this.page = page;
    this.usernameField = page.getByPlaceholder("email@example.com");
    this.passwordField = page.getByPlaceholder("enter your passsword");
    this.loginBtn = page.locator('#login');

}

async goTOLoginPage(){
    await this.page.goto("https://rahulshettyacademy.com/client");
}

async doLogin(username:string, passsword:string){
     await this.usernameField.fill(username);
     await this.passwordField.fill(passsword);
     await this.loginBtn.click();
     await this.page.waitForLoadState('networkidle');
}

}

module.exports = {LoginPage};