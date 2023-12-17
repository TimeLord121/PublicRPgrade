import { expect, test } from '@playwright/test';
import loginPage from '../pages/login'
import clickCreatePL from '../pages/dashboardProject'
import projectsList from '../pages/projectsList';
import dashboardProject from '../pages/dashboardProject';
import priceList from '../pages/priceList';

test("Login test_01", async ({page, baseURL}) => {
    const autorisation = new loginPage(page);
    await page.goto(`${baseURL}`);
    await autorisation.enterLogin("логин");
    await autorisation.enterPassword("пароль");
    await autorisation.clickLoginBtn();
    expect(await page.title()).toBe("Profitbase.ai"); 
});

test("CreatePL test_02", async ({page, baseURL}) => {
    await page.goto(`${baseURL}`);
    
    const autorisation = new loginPage(page);
    await autorisation.enterLogin("логин");
    await autorisation.enterPassword("пароль");
    await autorisation.clickLoginBtn();

    const projectList = new projectsList(page);
    await projectList.clickProject("(//h2[@class='project__title']//a)[1]"); //можно попробовать переделать, чтобы по тексту названия проекта
    
    const createPL = new dashboardProject(page);
    await createPL.clickCreatePL();
})

test("PublishPL tets_03", async({page, baseURL}) => {
    await page.goto(`${baseURL}`);

    const autorisation = new loginPage(page);
    await autorisation.enterLogin("логин");
    await autorisation.enterPassword("пароль");
    await autorisation.clickLoginBtn();
    
    const projectList = new projectsList(page);
    await projectList.clickProject("PlaywrightProject"); 
    
    const createPL = new dashboardProject(page);
    await createPL.clickCreatePL();

    const publishPL = new priceList(page);
    await publishPL.clickPencil();
    await publishPL.recomendationInput("10");
    await publishPL.commentInput("Test Playwright")
    await publishPL.clickSaveRecomendation()
    await publishPL.clickRecalculate();
    
    await publishPL.clickWF('Отправить в архив');
})