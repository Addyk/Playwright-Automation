import{test} from "@playwright/test";
import { checkBox } from "../pages/checkBox";
import {CheckBoxLocators} from "../pages/locators/locators";

test('@regression @CheckBox Checkbox 1 check',async({page})=>
{
    const checkbox=new checkBox(page);
    await checkbox.open();
    await checkbox.clickOnCheckBox(CheckBoxLocators.checkBox1,true);
});

test('@regression @Checkbox checkbox2 uncheck',async({page})=>{
    const checkbox=new checkBox(page);
    await checkbox.open();
    await checkbox.clickOnCheckBox(CheckBoxLocators.checkBox2,false);
}

)
