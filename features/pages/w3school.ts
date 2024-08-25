import { Page } from "@playwright/test";
class W3SchoolsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async navigateToHomePage() {
    await this.page.goto("https://www.w3schools.com/", {
      waitUntil: "domcontentloaded",
    });
  }
  async searchForLesson(key: string) {
    const search = this.page.getByPlaceholder(
      "Search our tutorials, e.g. HTML"
    );
    await search.fill(key);
  }
  async clickLogin() {
    await this.page.getByTitle("Login to your account").first().click();
  }
  async login(email: string, password: string) {
    await this.page.getByPlaceholder("email").fill(email);
    await this.page.getByPlaceholder("password").fill(password);
  }
  async clickLoginButton() {
    await this.page.click('//button[text()="Login"]');
    await this.page.waitForLoadState("networkidle");
  }
  async getErrorMessage() {
    return await this.page.textContent(
      '//div[@class="LoginForm_error_text__4fzmN"]'
    );
  }
}
export default W3SchoolsPage;
