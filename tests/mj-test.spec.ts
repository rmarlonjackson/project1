import { test, expect } from "@playwright/test";

test("open engageli admin class page", async ({ page }) => {
  await page.goto("https://test3153.engageli.com/class/admin/");
  // Optionally, you can add an assertion to verify the page loaded
  await expect(page).toHaveURL("https://test3153.engageli.com/class/admin/");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page
    .getByRole("textbox", { name: "Enter email to sign in or" })
    .click();
  await page
    .getByRole("textbox", { name: "Enter email to sign in or" })
    .fill("engagelici+mj-auto@gmail.com");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("Avidakin1");
  await page.getByRole("button", { name: "Log In" }).click();
});
