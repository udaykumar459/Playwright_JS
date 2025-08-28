import { LoginPage } from "../pageobjects_ts/LoginPage";
import { DashboardPage } from "../pageobjects_ts/DashboardPage";
import { Page } from "@playwright/test";

export class POManager{

page:Page;
loginPage:LoginPage;
dashboardPage:DashboardPage;

    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
    }


    getLoginPage(){
        return this.loginPage;
    }

    getDashboardPage(){
        return this.dashboardPage;    
    
    }
}

module.exports = {POManager};