import{Page,Locator, expect} from '@playwright/test'

export class hoverPage{

    readonly page:Page;
    readonly userLocator1:Locator;
    readonly userLocator2:Locator;
    readonly userLocator3:Locator;

    constructor(page:Page){
        this.page=page;
        this.userLocator1=page.getByRole('img', { name: 'User Avatar' }).first();
        this.userLocator2=page.getByRole('img', { name: 'User Avatar' }).nth(1);
        this.userLocator3=page.getByRole('img', { name: 'User Avatar' }).nth(2);
    }


    async open(){
        await this.page.goto('/hovers');
        await expect(this.page).toHaveURL('/hovers');
    }

    async hoverByMouse(hoverOnUser:string){
        await this.page.locator(hoverOnUser).hover();
        await expect(this.page.locator(hoverOnUser)).toBeVisible();

    }

}