import { expect, test } from "@playwright/test";
import { DragAndDropPage } from "../pages/DragAndDropPage";

test("This test is to verify drag and drop functionality", async ({ page }) => {
  await page.goto("/drag_and_drop");
  const dragAndDrop = new DragAndDropPage(page);

  await dragAndDrop.verifyBoxesStateBeforeDragAndDrop("A", "B");
  await dragAndDrop.dragAndDropBox(dragAndDrop.firstBox, dragAndDrop.secondBox);
  await dragAndDrop.verifyBoxesStateAfterDragAndDrop("B", "A");
});
