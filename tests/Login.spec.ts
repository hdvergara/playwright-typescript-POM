import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test.describe('Login Test', () =>{

    let loginPage: LoginPage;
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
      });

    test('Test login successfully', async ({page}) =>{
        await page.goto("https://opensource-demo.orangehrmlive.com/");
        await loginPage.setUsername("Admin");
        await loginPage.setPassword("admin123");
        await loginPage.clickLoginButton();
        expect(await homePage.isdashBoardHomeDisplayed()).toBeTruthy();
    })
})