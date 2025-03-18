import { expect, Locator, Page } from "@playwright/test";

export class FormAuthenticationPage {
  readonly page: Page;
  readonly loginInputField: Locator;
  readonly passwordInputField: Locator;
  readonly loginButton: Locator;
  readonly loggedInBar: Locator;
  readonly wrongUsername: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginInputField = page.locator("#username");
    this.passwordInputField = page.locator("#password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.loggedInBar = page
      .locator("#flash")
      .filter({ hasText: "You logged into a secure area!" });
    this.wrongUsername = page
      .locator("#flash")
      .filter({ hasText: "Your username is invalid" });
  }

  async login(username: string, password: string) {
    await this.loginInputField.fill(username);
    await this.passwordInputField.fill(password);
    await this.loginButton.click();
  }

  async verifyIfUserIsLoggedIn() {
    await expect(this.loggedInBar).toBeVisible();
  }

  async verifyLoginErrorMessage() {
    await expect(this.wrongUsername).toBeVisible();
  }
}
