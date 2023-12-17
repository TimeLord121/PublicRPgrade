import { Page } from '@playwright/test';

export default class loginPage {
    constructor(public page : Page) {}

    async enterLogin(loginInput: string) {
        await this.page.locator('//input').nth(0)
            ////locator('div').filter({ hasText: /^Логин$/ }).getByRole('textbox')
            .fill(loginInput);
    }

    async enterPassword(passwordInput: string) {
        await this.page.locator('//input').nth(1)
            .fill(passwordInput);
    }

    async clickLoginBtn() {
        await this.page.click("//app-button//button");
    }
}