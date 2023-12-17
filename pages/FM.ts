import { Page } from '@playwright/test';
import * as path from 'path';

export default class loginPage {
    constructor(public page : Page) {}
    
    async uploadFile() {
        await this.page.getByLabel('Обновить').nth(0).click();
        const file = path.join(__dirname, '../testFile/planP.xlsx');
        await this.page.setInputFiles('//input[@type="file"]', file);
        await this.page.getByRole('button', { name: 'Сохранить' });
    }
}