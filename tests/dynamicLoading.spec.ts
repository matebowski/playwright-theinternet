import { test } from "@playwright/test";
import { DynamicLoadingPage } from "../pages/DynamicLoadingPage";

test.describe("Dynamically loaded page elements tests", () => {
  test("Test for element on page that is hidden", async ({ page }) => {
    await page.goto("/dynamic_loading/1");
    const dynamicLoading = new DynamicLoadingPage(page);

    await dynamicLoading.verifyIfTextIsHidden();
    await dynamicLoading.clickStartButton();
    await dynamicLoading.verifyIfLoadingBarIsVisible();
    await dynamicLoading.verifyIfHiddenTextIsVisible();
    await dynamicLoading.verifyIfLoadingBarIsNotVisible();
  });

  test("Test for element on page that is rendered after the fact", async ({
    page,
  }) => {
    await page.goto("/dynamic_loading/2");
    const dynamicLoading = new DynamicLoadingPage(page);

    await dynamicLoading.verifyIfTextDoesNotExist();
    await dynamicLoading.clickStartButton();
    await dynamicLoading.verifyIfLoadingBarIsVisible();
    await dynamicLoading.verifyIfHiddenTextIsVisible();
    await dynamicLoading.verifyIfLoadingBarIsNotVisible();
  });
});
