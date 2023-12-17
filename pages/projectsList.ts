import { Page } from '@playwright/test';

export default class projectsList {
    constructor(public page : Page) {}

    async clickProject(projectName: string) {
        const projectLocator = `//a[contains(text(), '${projectName}')]`;
        await this.page.locator(projectLocator).click();
      }
}