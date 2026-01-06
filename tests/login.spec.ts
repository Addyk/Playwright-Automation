import{test} from '@playwright/test';
import { loginPage }  from '../pages/loginPage';
import { secureAreaPage } from '../pages/secureAreaPage';

test('@regression @login Valid user should be able to login',async({page})=>
{
    const login=new loginPage(page);
    const secure=new secureAreaPage(page);

    await login.open();
    await login.login('tomsmith','SuperSecretPassword!');
     await secure.expectLoaded();
  await secure.expectFlashContains('You logged into a secure area!');
});

test('@regression @login Invalid user should not be able to login', async({page})=>
{
  const login=new loginPage(page);
  const secure=new secureAreaPage(page);

  await login.open();
  await login.login('invalid','SuperSecretPassword!');
  await secure.expectFlashContains('Your username is invalid!');

});

test('@regression @login user should not be able to login with invalid password', async({page})=>
{
  const login=new loginPage(page);
  const secure=new secureAreaPage(page);

  await login.open();
  await login.login('tomsmith','SuperSecretPassword');
  await secure.expectFlashContains(' Your password is invalid!');

});