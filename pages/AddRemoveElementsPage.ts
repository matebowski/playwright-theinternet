import { expect, Page, Locator } from "@playwright/test";

export class AddRemoveElementsPage {
  readonly page: Page;
  readonly header: Locator;
  readonly addButton: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator("h3");
    this.addButton = page.getByRole("button", { name: "Add Element" });
    this.deleteButton = page.getByRole("button", { name: "Delete" });
  }

  async navigate() {
    await this.page.goto("/add_remove_elements/");
  }
  async verifyPage() {
    await expect(this.header).toHaveText("Add/Remove Elements");
    await expect(this.addButton).toHaveText("Add Element");
    await expect(this.deleteButton).not.toBeVisible();
  }

  async clickAddButton() {
    await this.addButton.click();
  }

  async clickDeleteButton() {
    await this.deleteButton.click();
  }

  async verifyDeleteButtonIsNotVisible() {
    await expect(this.deleteButton).not.toBeVisible();
  }

  async verifyDeleteButtonIsVisible() {
    await expect(this.deleteButton).toBeVisible();
  }
}
