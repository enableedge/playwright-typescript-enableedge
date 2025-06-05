import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignupPage } from '../pages/SignupPage';

const TEST_DATA = {
    validSignup: {
        name: 'Test User',
        email: 'testuser' + Date.now() + '@example.com',
        password: 'Test123!',
        gender: 'Mr',
        date: '15',
        month: 'May',
        year: '1990',
        address: '123 Test Street',
        state: 'Test State',
        city: 'Test City',
        zipcode: '12345',
        mobile: '1234567890'
    },
    invalidSignup: {
        email: 'invalid@example',
        password: 'short'
    }
};

test.describe('Signup Tests', () => {
    let homePage: HomePage;
    let signupPage: SignupPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signupPage = new SignupPage(page);
        await homePage.navigate();
    });

    test('should allow user to signup with valid information', async ({ page }) => {
        await homePage.clickSignup();
        await signupPage.fillNameAndEmailAndClickSignup(
            TEST_DATA.validSignup.name,
            TEST_DATA.validSignup.email
        );
        await expect(page).toHaveURL('/signup');
        await expect(page).toHaveTitle('Automation Exercise');
    });

    test.skip('should show error message for invalid email', async ({ page }) => {
        await homePage.clickSignup();
        await signupPage.fillSignupForm(
            TEST_DATA.validSignup.name,
            TEST_DATA.invalidSignup.email,
            TEST_DATA.validSignup.password,
            'Mr',
            TEST_DATA.validSignup.date,
            TEST_DATA.validSignup.month,
            TEST_DATA.validSignup.year,
            TEST_DATA.validSignup.address,
            TEST_DATA.validSignup.state,
            TEST_DATA.validSignup.city,
            TEST_DATA.validSignup.zipcode,
            TEST_DATA.validSignup.mobile
        );
        await signupPage.clickCreateAccount();
        
        const errorMessage = await signupPage.getErrorMessage();
        expect(errorMessage).toContain('Please enter valid email address');
    });

    test.skip('should validate password requirements', async ({ page }) => {
        await homePage.clickSignup();
        await signupPage.fillSignupForm(
            TEST_DATA.validSignup.name,
            TEST_DATA.validSignup.email,
            TEST_DATA.invalidSignup.password,
            'Mr',
            TEST_DATA.validSignup.date,
            TEST_DATA.validSignup.month,
            TEST_DATA.validSignup.year,
            TEST_DATA.validSignup.address,
            TEST_DATA.validSignup.state,
            TEST_DATA.validSignup.city,
            TEST_DATA.validSignup.zipcode,
            TEST_DATA.validSignup.mobile
        );
        await signupPage.clickCreateAccount();
        
        const errorMessage = await signupPage.getErrorMessage();
        expect(errorMessage).toContain('Password must be minimum 8 characters');
    });
});
