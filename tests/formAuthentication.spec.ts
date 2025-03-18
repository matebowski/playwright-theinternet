import { test } from "@playwright/test";
import { FormAuthenticationPage } from "../pages/FormAuthenticationPage";

test.describe("Form Authentication tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  test("Login with valid credentials", async ({ page }) => {
    const formAuthentication = new FormAuthenticationPage(page);

    await formAuthentication.login("tomsmith", "SuperSecretPassword!");
    await formAuthentication.verifyIfUserIsLoggedIn();
  });

  test("Login with invalid username", async ({ page }) => {
    const formAuthentication = new FormAuthenticationPage(page);
    await formAuthentication.login("chadsmith", "SuperSecretPassword!");
    await formAuthentication.verifyLoginErrorMessage();
  });
});
