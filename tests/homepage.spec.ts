import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test.describe("Homepage tests", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToMainPage();
  });

  test("Title of the homepage", async ({ page }) => {
    await expect(page).toHaveTitle("The Internet");
  });

  test("Visibility of elements", async ({ page }) => {
    await homePage.verifyHeaderText();
    await homePage.verifyFirstItemOnList();
  });
});
