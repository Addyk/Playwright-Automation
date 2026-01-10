import{Page, Locator, expect} from '@playwright/test';

export class secureAreaPage{

readonly page: Page;
  readonly heading: Locator;
  readonly logoutLink: Locator;
  readonly flash: Locator;


    constructor(page:Page){
    this.page = page;
    this.heading = page.getByRole('heading', { name: ' Secure Area',exact: true });
    this.logoutLink = page.getByRole('link', { name: 'Logout' });
    this.flash = page.locator('#flash');
    }

    async expectLoaded() {
    await expect(this.page).toHaveURL(/\/secure/);
    await expect(this.heading).toBeVisible();
  }

  async logout() {
    await this.logoutLink.click();
  }

  async expectFlashContains(text: string) {
    await expect(this.flash).toContainText(text);
  }


}