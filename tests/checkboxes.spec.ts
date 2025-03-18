import { expect, test } from "@playwright/test";
import { CheckboxesPage } from "../pages/CheckboxesPage";

test.describe("Checkboxes tests", () => {
  test("Navigation to Checkboxes page", async ({ page }) => {
    await page.goto("/");
    await page.click("text=Checkboxes");
    await expect(page).toHaveURL(/checkboxes/);
    const checkBoxesPage = new CheckboxesPage(page);

    await checkBoxesPage.verifyPage();
  });

  test("Verify status of Checkboxes", async ({ page }) => {
    const checkBoxesPage = new CheckboxesPage(page);

    await checkBoxesPage.navigate();
    await checkBoxesPage.verifyCheckboxesStatus(0, false);
    await checkBoxesPage.verifyCheckboxesStatus(1, true);
  });
});
