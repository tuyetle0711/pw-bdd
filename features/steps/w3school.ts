import { expect } from "@playwright/test";
import { Given, When, Then } from "./fixtures";
import W3SchoolsPage from "../pages/w3school";

Given("user go to w3schools", async ({ page }) => {
  const w3SchoolsPage = new W3SchoolsPage(page);
  await w3SchoolsPage.navigateToHomePage();
});

When("user search lesson with key {string}", async ({ page }, key: string) => {
  const w3SchoolsPage = new W3SchoolsPage(page);
  await w3SchoolsPage.searchForLesson(key);
});

When(
  "user input {string} and {string}",
  async ({ page }, email: string, password: string) => {
    const w3SchoolsPage = new W3SchoolsPage(page);
    await w3SchoolsPage.clickLogin();
    await w3SchoolsPage.login(email, password);
  }
);

Then("verify {string}", async ({ page }, errorMessage: string) => {
  const w3SchoolsPage = new W3SchoolsPage(page);
  await w3SchoolsPage.clickLoginButton();
  const message = await w3SchoolsPage.getErrorMessage();
  expect(message).toEqual(errorMessage);
});
