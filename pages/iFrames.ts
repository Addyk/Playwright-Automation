import{Page,expect,FrameLocator} from '@playwright/test';

export class iFrames {

    readonly page:Page;
    readonly frameLocator:FrameLocator;

    constructor(page:Page)
    {
        this.page=page;
        this.frameLocator=page.frameLocator('#mce_0_ifr');
    }               
    async open(){
        await this.page.goto('/iframe');
        await expect(this.page).toHaveURL('/iframe');
    }
    async typeInFrame(text:string){
        await this.frameLocator.locator('body#tinymce').fill(text);
    }
    async getFrameText():Promise<string>{
        return await this.frameLocator.locator('body#tinymce').innerText();
    }
}