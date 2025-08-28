class DashboardPage {



    constructor(page) {
        this.page = page
        this.products = page.locator('.card-body b');
        this.cartIcon =  page.getByRole("listitem").getByRole("button", {name:'Cart'});

    }


    async addProductToCart(productName){
        await this.products.last().waitFor();
        
        
            const titles = await this.products.allTextContents();
            console.log(titles);
            
            const productCount = await this.products.count();
            console.log("product count ---- "+productCount);
            // await this.page.pause();
        
            await this.page.locator("//div[@class='card'][contains(.,'"+ productName+"')]//button[text()=' Add To Cart']").click();

            //await this.products.filter({hasText:'IPHONE 13 PRO'}).getByRole("button",{ name: ' Add To Cart' }).last().click();
        
         
    }

    async goToCartPage(){
             await this.cartIcon.waitFor();
            await this.cartIcon.click();
            await this.page.waitForLoadState('domcontentloaded');

    }
}

module.exports = {DashboardPage};