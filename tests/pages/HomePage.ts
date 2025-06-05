import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class HomePage extends BasePage {
    private readonly loginLink = 'a[href="/login"]';
    private readonly logoutLink = 'a[href="/logout"]';
    private readonly signupLink = 'a[href="/login"]';
    private readonly productsLink = 'a[href="/products"]';

    constructor(page: Page) {
        super(page);
    }

    async navigate(): Promise<void> {
        await this.navigateTo('/');
    }

    async clickLogin(): Promise<void> {
        await this.clickElement(this.loginLink);
    }

    async clickSignup(): Promise<void> {
        await this.clickElement(this.signupLink);
    }

    async clickProducts(): Promise<void> {
        await this.clickElement(this.productsLink);
    }

    async verifyPageLoaded(): Promise<boolean> {
        return await this.page.isVisible('h2.title');
    }
    async verifyLoggedIn(): Promise<boolean> {
        return await this.page.isVisible(this.logoutLink);
    }
}
