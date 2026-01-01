import{test} from '@playwright/test';
import { loginPage }  from '../pages/loginPage';
import { secureAreaPage } from '../pages/secureAreaPage';

test('@regression Valid user should be able to login',async({page})=>
{
    const login=new loginPage(page);
    const secure=new secureAreaPage(page);

    await login.open();
    await login.login('tomsmith','SuperSecretPassword!');
     await secure.expectLoaded();
  await secure.expectFlashContains('You logged into a secure area!');

});