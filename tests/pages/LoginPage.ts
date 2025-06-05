import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
    private readonly emailInput = 'input[data-qa="login-email"]';
    private readonly passwordInput = 'input[data-qa="login-password"]';
    private readonly loginButton = 'button[data-qa="login-button"]';
    private readonly loginForm = 'form[data-qa="login-form"]';

    constructor(page: Page) {
        super(page);
    }

    async navigate(): Promise<void> {
        await this.navigateTo('/login');
    }

    async fillLoginForm(email: string, password: string): Promise<void> {
        await this.fillInput(this.emailInput, email);
        await this.fillInput(this.passwordInput, password);
    }

    async clickLogin(): Promise<void> {
        await this.clickElement(this.loginButton);
    }

    async verifyPageLoaded(): Promise<boolean> {
        return await this.page.isVisible(this.loginForm);
    }

    async verifyLoginSuccess(): Promise<boolean> {
        return await this.page.isVisible('h2.title');
    }

    async getErrorMessage(): Promise<string> {
        return await this.getText('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > p');
    }
}
