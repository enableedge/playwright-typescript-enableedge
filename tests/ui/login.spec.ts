import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

const TEST_DATA = {
    validCredentials: {
        email: 'ulhas@enableedge.com',
        password: 'ulhas@123'
    },
    invalidCredentials: {
        email: 'invalid@example.com',
        password: 'Wrong123!'
    }
};

test.describe('Login Tests', () => {
    let homePage: HomePage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await homePage.navigate();
    });

    test('should allow user to login with valid credentials', async ({ page }) => {
        await homePage.clickLogin();
        await loginPage.fillLoginForm(
            TEST_DATA.validCredentials.email,
            TEST_DATA.validCredentials.password
        );
        await loginPage.clickLogin();
        
        await expect(page).toHaveURL('/');
        await expect(page).toHaveTitle('Automation Exercise');
        await expect(homePage.verifyLoggedIn()).toBeTruthy();
        
    });

    test('should show error message for invalid credentials', async ({ page }) => {
        await homePage.clickLogin();
        await loginPage.fillLoginForm(
            TEST_DATA.invalidCredentials.email,
            TEST_DATA.invalidCredentials.password
        );
        await loginPage.clickLogin();
        
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('Your email or password is incorrect!');
    });

    test('should validate required fields', async ({ page }) => {
        await homePage.clickLogin();
        await loginPage.clickLogin();
        
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('Email is required');
    });
});
