import{Page, Locator,expect} from '@playwright/test'

export class dropDownPage{

readonly page:Page;
readonly dropDownTitle:Locator;
readonly dropDown:Locator;

constructor(page:Page){
    this.page=page;
    this.dropDownTitle=page.getByRole('heading', { name: 'Dropdown List' });
    this.dropDown=page.locator('#dropdown');
}

async open(){
    await this.page.goto('/dropdown');
    await expect(this.page).toHaveURL('/dropdown');
}

async selectByValue(byValue:string){
    await this.page.selectOption('#dropdown',{label:byValue});
    await expect(this.page.locator('#dropdown option:checked')).toHaveText(byValue);
}

async selectByIndex(byIndex:number){
    const selectedIndex =  await this.page.selectOption('#dropdown',{index:byIndex});
    await expect(this.page.locator('#dropdown')).toHaveValue(byIndex.toString());

}

}