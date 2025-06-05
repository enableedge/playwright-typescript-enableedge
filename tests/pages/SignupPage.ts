import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class SignupPage extends BasePage {
    private readonly nameInput = 'input[data-qa="signup-name"]';
    private readonly emailInput = 'input[data-qa="signup-email"]';
    private readonly signupButton = 'button[data-qa="signup-button"]';
    private readonly signupForm = 'form[data-qa="signup-form"]';
    private readonly genderMale = 'input[value="Mr"]';
    private readonly genderFemale = 'input[value="Mrs"]';
    private readonly passwordInput = '#password';
    private readonly dateOfBirth = '#days';
    private readonly monthOfBirth = '#months';
    private readonly yearOfBirth = '#years';
    private readonly newsletterCheckbox = '#newsletter';
    private readonly specialOffersCheckbox = '#optin';
    private readonly addressInput = '#address';
    private readonly stateInput = '#state';
    private readonly cityInput = '#city';
    private readonly zipcodeInput = '#zipcode';
    private readonly mobileNumberInput = '#mobile_number';
    private readonly createAccountButton = 'button[data-qa="create-account-button"]';

    constructor(page: Page) {
        super(page);
    }

    async navigate(): Promise<void> {
        await this.navigateTo('/signup');
    }

    async fillSignupForm(
        name: string,
        email: string,
        password: string,
        gender: 'Mr' | 'Mrs',
        date: string,
        month: string,
        year: string,
        address: string,
        state: string,
        city: string,
        zipcode: string,
        mobile: string
    ): Promise<void> {
        await this.fillInput(this.nameInput, name);
        await this.fillInput(this.emailInput, email);
        await this.fillInput(this.passwordInput, password);
        
        if (gender === 'Mr') {
            await this.clickElement(this.genderMale);
        } else {
            await this.clickElement(this.genderFemale);
        }

        await this.selectOption(this.dateOfBirth, date);
        await this.selectOption(this.monthOfBirth, month);
        await this.selectOption(this.yearOfBirth, year);
        
        await this.fillInput(this.addressInput, address);
        await this.fillInput(this.stateInput, state);
        await this.fillInput(this.cityInput, city);
        await this.fillInput(this.zipcodeInput, zipcode);
        await this.fillInput(this.mobileNumberInput, mobile);
    }

    private async selectOption(selector: string, value: string): Promise<void> {
        await this.page.selectOption(selector, value);
    }

    async clickSignup(): Promise<void> {
        await this.clickElement(this.signupButton);
    }

    async clickCreateAccount(): Promise<void> {
        await this.clickElement(this.createAccountButton);
    }

    async verifyPageLoaded(): Promise<boolean> {
        return await this.page.isVisible(this.signupForm);
    }

    async verifySignupSuccess(): Promise<boolean> {
        return await this.page.isVisible('h2.title');
    }

    async getErrorMessage(): Promise<string> {
        return await this.getText('.signup-form > p');
    }
    // fill name and email and click on sign-up button
    async fillNameAndEmailAndClickSignup(name: string, email: string): Promise<void> {
        await this.fillInput(this.nameInput, name);
        await this.fillInput(this.emailInput, email);
        await this.clickElement(this.signupButton);
    }
}
