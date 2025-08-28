class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.countryInput = page.locator("input[placeholder='Select Country']");
        this.dropdown = page.locator('button.ng-star-inserted');
        this.firstSuggestion = page.getByRole("button", { name: "India" })
        this.placeOrderButton = page.getByText("PLACE ORDER");
    }

    async selectCountryFromDropdown(countryName) {
        await this.countryInput.pressSequentially(countryName);
        // await this.page.pause();
        await this.dropdown.last().waitFor();
        await this.firstSuggestion.last().click();
        //  await this.firstSuggestion.nth(1).click();


    }

    async placeOrder() {
        await this.placeOrderButton.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
}

module.exports = { CheckoutPage };