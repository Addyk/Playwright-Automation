import{test} from '@playwright/test';
import { dropDownPage } from '../pages/dropDown';


test('@regression @dropdowntest Option 1 is selected',async({page})=>{
    const dropdownTest=new dropDownPage(page);
    await dropdownTest.open();
    dropdownTest.selectByValue('Option 1');

})

test('@regression @dropdowntest Option 2 is selected',async({page})=>{
    const dropdownTest=new dropDownPage(page);
    await dropdownTest.open();
    dropdownTest.selectByIndex(2);

})
