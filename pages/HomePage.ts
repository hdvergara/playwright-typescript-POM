import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
    private page: Page;
    private dashBoardHome: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashBoardHome = page.locator('.oxd-layout-context');
    }

    /**
     * Checks if the dashboard home element is visible on the page.
     *
     * @returns {Promise<boolean>} A promise that resolves to a boolean value indicating whether the dashboard home element is visible.
     */
    async isdashBoardHomeDisplayed(): Promise<boolean> {
        try {
            await expect(this.dashBoardHome).toBeVisible({ timeout: 10000 });
            return true;
          } catch (error) {
            console.error('Element not visible:', error);
            return false;
          }
        }
}