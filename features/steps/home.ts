import { expect } from "@playwright/test";
import { Given, When, Then } from "./fixtures";
import { DataTable } from "playwright-bdd";

When("user click button login", async ({ page }) => {
  await page.getByTitle("Login to your account").first().click();
});

Then(
  "user login with email, password and verify error message",
  async ({ page }, dataTable: DataTable) => {
    const dataLogin = dataTable.hashes();
    for (const data of dataLogin) {
      const email = data.email;
      const password = data.password;
      const errorMessage = data.message;
      await page.getByPlaceholder("email").fill(email);
      await page.getByPlaceholder("password").fill(password);
      await page.click("//button[text()='Login']");
      await page.waitForLoadState("networkidle");
      const message = await page.textContent(
        "//div[@class='LoginForm_error_text__4fzmN']"
      );
      expect(message).toEqual(errorMessage);
    }
  }
);

Then("verify lesson", () => {
  // Write code here that turns the phrase above into concrete actions
});
