import { Page } from '@playwright/test';

export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async waitForSelector(selector: string): Promise<void> {
        await this.page.waitForSelector(selector);
    }

    async clickElement(selector: string): Promise<void> {
        await this.page.click(selector);
    }

    async fillInput(selector: string, value: string): Promise<void> {
        await this.page.fill(selector, value);
    }

    async getText(selector: string): Promise<string> {
        const text = await this.page.textContent(selector);
        if (!text) {
            throw new Error(`Text not found for selector: ${selector}`);
        }
        return text;
    }
}
