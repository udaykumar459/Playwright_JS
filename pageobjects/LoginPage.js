class LoginPage{

constructor(page){
    this.page = page;
    this.usernameField = page.getByPlaceholder("email@example.com");
    this.passwordField = page.getByPlaceholder("enter your passsword");
    this.loginBtn = page.locator('#login');

}

async goTOLoginPage(){
    await this.page.goto("https://rahulshettyacademy.com/client");
}

async doLogin(username, passsword){
     await this.usernameField.fill(username);
     await this.passwordField.fill(passsword);
     await this.loginBtn.click();
     await this.page.waitForLoadState('networkidle');
}

}

module.exports = {LoginPage};