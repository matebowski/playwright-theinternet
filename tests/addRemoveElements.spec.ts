import { expect, test } from "@playwright/test";
import { AddRemoveElementsPage } from "../pages/AddRemoveElementsPage";

test.describe("Add/Remove Elements tests", () => {
  test("Navigation to Add/Remove Elements page", async ({ page }) => {
    const addRemoveElementsPage = new AddRemoveElementsPage(page);
    await page.goto("/");
    await page.click("text=Add/Remove Elements");

    await addRemoveElementsPage.verifyPage();
  });

  test("Add and remove elements", async ({ page }) => {
    const addRemoveElementsPage = new AddRemoveElementsPage(page);

    await addRemoveElementsPage.navigate();
    await addRemoveElementsPage.clickAddButton();
    await addRemoveElementsPage.verifyDeleteButtonIsVisible();
    await addRemoveElementsPage.clickDeleteButton();
    await addRemoveElementsPage.verifyDeleteButtonIsNotVisible();
  });
});
