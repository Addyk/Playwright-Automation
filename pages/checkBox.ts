import{Page, Locator, expect} from "@playwright/test"

export class checkBox{

        readonly page:Page;
        readonly checkbox1:Locator;
        readonly checkbox2:Locator;

        constructor(page:Page){
            this.page=page;
        }

        async open(){
            await this.page.goto('/checkboxes');
            await expect(this.page).toHaveURL('/checkboxes');
        }

        async clickOnCheckBox(checkBox:string,checked:boolean){
            const checkbox=this.page.locator(checkBox);
            await checkbox.setChecked(true);
            await expect(checkbox).toBeChecked();
        }

}