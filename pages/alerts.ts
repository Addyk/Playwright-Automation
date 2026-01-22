import { Locator,Page,expect } from "@playwright/test";

export class alerts {

    readonly page:Page;
    readonly jsAlertButton:Locator;
    readonly jsConfirmButton:Locator;
    readonly jsPromptButton:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.jsAlertButton=page.getByRole('button', { name: 'Click for JS Alert' });
        this.jsConfirmButton=page.getByRole('button', { name: 'Click for JS Confirm' });
        this.jsPromptButton=page.getByRole('button', { name: 'Click for JS Prompt' });
    }

    async open(){
        await this.page.goto('/javascript_alerts');
        await expect(this.page).toHaveURL('/javascript_alerts');
    }

    async acceptAlert(){
        await this.jsAlertButton.click()

    }
    
    async dismissAlert(){
        await this.jsConfirmButton.click();
    }

    async promptAlert(){
        await this.jsPromptButton.click();
    }
}