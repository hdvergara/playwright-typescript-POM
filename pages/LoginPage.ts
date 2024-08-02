import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.locator('input[name="username"]');
        this.passwordInput = this.page.locator('input[name="password"]');
        this.loginButton = this.page.locator('button[type="submit"]');
    }

    /**
 * Sets the username in the login form.
 * @param {string} username - The username to be entered.
 * @returns {Promise<void>} A promise that resolves when the username has been filled.
 */
async setUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
}

/**
 * Sets the password in the login form.
 * @param {string} password - The password to be entered.
 * @returns {Promise<void>} A promise that resolves when the password has been filled.
 */
async setPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
}

/**
 * Simulates a click on the login button.
 * @returns {Promise<void>} A promise that resolves when the login button has been clicked.
 */
async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
}
}