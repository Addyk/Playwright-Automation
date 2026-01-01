import{Page, Locator,expect} from '@playwright/test'

export class loginPage{

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly flash: Locator;

    constructor(page:Page){
        this.page=page;
        this.username=page.locator('#username');
        this.password=page.locator('#password');
        this.loginBtn=page.getByRole('button',{name:'Login'});
        this.flash=page.locator('#flash');
    }

    async open(){
        await this.page.goto('/login');
        await expect(this.page).toHaveURL(/\/login/);
    }

    async login(user:string, pass:string){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }

    async expectFlashContains(text:string){
        await expect(this.flash).toContainText(text);
    }

}