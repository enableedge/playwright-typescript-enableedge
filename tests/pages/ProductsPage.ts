import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class ProductsPage extends BasePage {
    private readonly productCards = '.features_items > div';
    private readonly addToCartButtons = 'button[data-qa="add-to-cart-button"]';
    private readonly viewCartButton = 'a[href="/view_cart"]';
    private readonly continueShoppingButton = 'button[data-qa="continue-button"]';

    constructor(page: Page) {
        super(page);
    }

    async navigateTo(): Promise<void> {
        await this.navigateTo('/products');
    }

    async verifyPageLoaded(): Promise<boolean> {
        return await this.page.isVisible('.features_items');
    }

    async getProductCount(): Promise<number> {
        return await this.page.locator(this.productCards).count();
    }

    async addToCart(index: number): Promise<void> {
        const buttons = await this.page.locator(this.addToCartButtons);
        await buttons.nth(index).click();
    }

    async clickViewCart(): Promise<void> {
        await this.clickElement(this.viewCartButton);
    }

    async clickContinueShopping(): Promise<void> {
        await this.clickElement(this.continueShoppingButton);
    }
}
