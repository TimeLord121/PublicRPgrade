import { Page } from '@playwright/test';

export default class priceList {
    constructor(public page : Page) {}

    async clickWF(wfName: string) {
        await this.page.waitForSelector('p-splitbutton.p-element.ng-star-inserted:not(.disabled)'), {timeout: 60000};
        await this.page.click('(//p-splitbutton//button)[2]');
        

        const wflocator = `//span[contains(text(), '${wfName}')]`;
        await this.page.click(wflocator);

        //модалка
        await this.page.click('(//div[@role="dialog"]//app-button)[1]');
    }
    
    async clickPencil() {
        const waitBtn = ('//app-button-edit');
        await this.page.waitForSelector(waitBtn);
        await this.page.locator('//app-button-edit').nth(0).click();
    }

    async recomendationInput(recomendationInput) { //добавить проверку на передачу числа с точкой
        await this.page.locator("//input[@placeholder='Введите коэффициент']")
            .fill(recomendationInput);
    }

    async commentInput(commentInput: string) {
        await this.page.locator('//textarea')
            .fill(commentInput);
    }

    async clickSaveRecomendation() {
        await this.page.getByRole('button', { name: 'Сохранить' }).click();
    }

    async clickRecalculate() {
        // await this.page.waitForTimeout(5000);
        const waitBtn = ('//div[@class="recommendations__workflow-alert ng-star-inserted"]//button');
        await this.page.waitForSelector(waitBtn);
        await this.page.locator('//div[@class="recommendations__workflow-alert ng-star-inserted"]//button')
            .click();
        await this.page.getByText('Операция "Пересчет рекомендаций для прайс-листа" успешно завершилась');
    }
}