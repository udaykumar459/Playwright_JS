const { expect } = require('@playwright/test');

class CartPage {


    constructor(page) {
        this.page = page;
        this.cartItems = page.locator("li.ng-star-inserted")
        this.checkOutBtn = page.getByRole("button", { name: 'Checkout' })
    }


    async verifyProductInCart(productName) {

        await this.cartItems.first().waitFor();

        console.log("product name in cart ---- " + productName);
        // await this.page.pause();
        await expect(this.page.locator("h3:has-text('"+ productName+"')")).toBeVisible();

        // await expect(this.page.getByRole('heading', { name: productName }).toBe);

        // await expect(page.locator('h3')).toHaveText(productName);
        // await expect(this.page.locator("h3", { hasText: productName })).
        // await expect(this.page.locator("//li//h3[text()='"+ productName+"']")).toBeVisible();



    }

    async checkOutOrder() {
        await this.checkOutBtn.click();
        await this.page.waitForLoadState('domcontentloaded');


    }
}

module.exports = { CartPage };