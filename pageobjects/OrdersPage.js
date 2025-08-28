const { expect } = require('@playwright/test');

class OrdersPage {
    constructor(page) {
        this.page = page;
        this.orderID = page.locator("label.ng-star-inserted")
        this.orderConfirmationText = page.getByText("Thankyou for the order.")
        this.ordersMenuBtn = page.getByRole("listitem").getByRole("button", { name: 'ORDERS' });
        this.row = page.locator("tbody tr");
        this.orderIDText = page.locator(".col-text");
    }


    async verifyOrderInOrdersPage() {
        await this.orderID.waitFor();

        await expect(this.orderConfirmationText).toBeVisible();
        const orderId = await this.orderID.textContent();
        console.log(orderId);

        await this.ordersMenuBtn.click();
        await this.page.waitForLoadState('networkidle');
        await this.row.first().waitFor();


        const rows = await this.row;
        console.log(await this.row.count());
        const rowCount = await this.row.count();
        // await page.pause();
        for (let i = 0; i < rowCount; i++) {
            const rowOrderId = await this.row.nth(i).locator('th').textContent();
            console.log(rowOrderId);
            // await page.pause();
            if (orderId.includes(rowOrderId)) {
                await this.row.nth(i).getByRole("button", { name: 'View' }).click();
                break;
            }
        }

        // await page.pause();
        await this.page.waitForLoadState('networkidle');
        await this.orderIDText.waitFor();
        // await page.pause();
        const orderIDText = await this.orderIDText.textContent();
        expect(orderId.includes(orderIDText)).toBeTruthy;

    }

}

module.exports = { OrdersPage };