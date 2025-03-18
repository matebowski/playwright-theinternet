import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly header: Locator;
  readonly firstListItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator("h1");
    this.firstListItem = page.locator("li").first();
  }

  async navigateToMainPage() {
    await this.page.goto("/");
  }
  async verifyHeaderText() {
    await expect(this.header).toHaveText("Welcome to the-internet");
  }

  async verifyFirstItemOnList() {
    await expect(this.firstListItem).toHaveText("A/B Testing");
  }
}
