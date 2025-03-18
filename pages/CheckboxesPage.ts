import { Page, Locator, expect } from "@playwright/test";

export class CheckboxesPage {
  readonly page: Page;
  readonly header: Locator;
  readonly checkboxes: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator("h3");
    this.checkboxes = page.locator('input[type="checkbox"]');
  }

  async navigate() {
    await this.page.goto("/checkboxes");
  }

  async verifyPage() {
    await expect(this.checkboxes).toHaveCount(2);
  }

  async verifyCheckboxesStatus(index: number, shouldBeChecked: boolean) {
    if (shouldBeChecked) {
      await expect(this.checkboxes.nth(index)).toBeChecked();
    } else {
      await expect(this.checkboxes.nth(index)).not.toBeChecked();
    }
  }
}
