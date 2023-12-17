import { Page } from '@playwright/test';

export default class dashboardProject {
    constructor(public page : Page) {}

    async clickCreatePL() {
        const waitBtn = ("//app-recommendations-pricelist-link");
        await this.page.waitForSelector(waitBtn);
        await this.page.click("(//app-button[@class='ng-star-inserted']//button)[2]");
    }

    async clickPriceList() {
        const waitBtn = ("//app-recommendations-pricelist-link");
        await this.page.waitForSelector(waitBtn);
        await this.page.click("//a[contains(text(),'Перейти в прайс-лист')]");
    }
}