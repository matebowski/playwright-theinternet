import { Page, Locator, expect } from "@playwright/test";

export class DragAndDropPage {
  readonly page: Page;
  readonly firstBox: Locator;
  readonly secondBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstBox = page.locator("#columns .column").nth(0);
    this.secondBox = page.locator("#columns .column").nth(1);
  }

  async verifyBoxesStateBeforeDragAndDrop(first: string, second: string) {
    await expect(this.firstBox).toHaveText(first);
    await expect(this.secondBox).toHaveText(second);
  }

  async verifyBoxesStateAfterDragAndDrop(first: string, second: string) {
    await expect(this.firstBox).toHaveText(first);
    await expect(this.secondBox).toHaveText(second);
  }

  async dragAndDropBox(source: Locator, target: Locator) {
    await source.dragTo(target);
  }
}
