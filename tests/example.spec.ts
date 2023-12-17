import { test, expect } from '@playwright/test';
import loginPage from '../pages/login'
import * as path from 'path';

test("Ф", async ({page, baseURL}) => {
  await page.goto(`${baseURL}`);
  
  const autorisation = new loginPage(page);
  await autorisation.enterLogin("логин");
  await autorisation.enterPassword("пароль");
  await autorisation.clickLoginBtn();

});

test("ФМ загрузка файла", async ({page, baseURL}) => {
  await page.goto(`${baseURL}/projects/group/122/project/149/project-edit/sales-plan/list`);
  
  const autorisation = new loginPage(page);
  await autorisation.enterLogin("логин");
  await autorisation.enterPassword("пароль");
  await autorisation.clickLoginBtn();

  //test FM
  await page.getByLabel('Обновить').nth(0).click();
  
  const file = path.join(__dirname, '../testFile/planP.xlsx');
  
  await page.setInputFiles('//input[@type="file"]', file);
  // const setinput = await page.getByText('Загрузить');
  // await setinput.setInputFiles(file);


});

test('upload file', async ({page}) => {
  await page.goto('https://upload.antonzimaiev.repl.co/');
  await page.setInputFiles("#formFile", "../testFile/planP.xlsx");
  
} );



test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('added project', async ({ page }) => {
  // Step 1: Navigate to the website
  await page.goto('https://dev-stage.ai.profitbase.pro/projects');

  // Step 2: logging
  const loginInput = await page.locator('//input').nth(0);
  const passwordInput = await page.locator('//input').nth(1);
  await loginInput.fill('логин');
  await passwordInput.fill('пароль');

  const waitButton = '//button[@style]';
  // await page.waitForSelector(waitButton, { timeout: 3000 }); если надо будет добавить ожидание по времени
  const regButton = await page.locator(waitButton).click();

  // Step 3: Added project
  const button = await page.locator('//a[@class="btn btn_primary ng-star-inserted"]').nth(0).click();

  // Step 4: Setting object project
  const selectСurrency = await page.locator('//div[@class="p-dropdown p-component"]');
  await selectСurrency.click();
  const currency = await page.locator('//li[@role="option"]').nth(6);
  await currency.click();

  const inputNameProject = await page.locator('//input').nth(0);
  await inputNameProject.fill('PlaywrightProject')

  const addedObject = await page.locator('//app-button').nth(3);
  await addedObject.click();
  const checkboxSelectorObjects = 'p-checkbox';
  await page.waitForSelector(checkboxSelectorObjects);
  const checkbox = await page.locator(checkboxSelectorObjects).filter({ hasText: 'ЖК Александр (€)' });
  await checkbox.click();
  const waitObject = '//div[@class="flex-container align_center"]//button';
  await page.waitForSelector(waitObject);
  const buttonAddedObject = await page.locator('//app-add-houses//button').nth(0);
  await buttonAddedObject.click();
  
  const confirmSettingObject = await page.locator('//div[@class="flex-container align_center"]//button').nth(0).click();
});