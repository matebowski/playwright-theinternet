import { Locator, Page, expect } from "@playwright/test";

export class DynamicLoadingPage {
  readonly page: Page;
  readonly resultText: Locator;
  readonly startButton: Locator;
  readonly loadingBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.resultText = this.page
      .locator("#finish")
      .filter({ hasText: "Hello World!" });
    this.startButton = page.getByRole("button", { name: "Start" });
    this.loadingBar = page.locator("#loading");
  }

  async verifyIfTextIsHidden() {
    await expect(this.resultText).toHaveCount(1);
    await expect(this.resultText).toBeHidden();
  }

  async clickStartButton() {
    await this.startButton.click();
  }

  async verifyIfLoadingBarIsVisible() {
    await expect(this.loadingBar).toBeVisible();
  }

  async verifyIfLoadingBarIsNotVisible() {
    await expect(this.loadingBar).not.toBeVisible();
  }

  async verifyIfHiddenTextIsVisible() {
    await this.resultText.waitFor({ state: "visible" });
  }

  async verifyIfTextDoesNotExist() {
    await expect(this.resultText).toHaveCount(0);
  }
}
