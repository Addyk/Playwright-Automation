import{test} from '@playwright/test';
import { loginPage }  from '../pages/loginPage';
import { secureAreaPage } from '../pages/secureAreaPage';
import { testData } from '../test-data/testData'; 

test('@regression @login Valid user should be able to login',async({page})=>
{
    const login=new loginPage(page);
    const secure=new secureAreaPage(page);

    await login.open();
    await login.login(testData.users.valid.username,testData.users.valid.password);
     await secure.expectLoaded();
  await secure.expectFlashContains('You logged into a secure area!');
  await secure.logout();
  await secure.expectFlashContains(' You logged out of the secure area!');
});


test('@regression @login Invalid user should not be able to login', async({page})=>
{
  const login=new loginPage(page);
  const secure=new secureAreaPage(page);

  await login.open();
  await login.login(testData.users.invalid.username,testData.users.valid.password);
  await secure.expectFlashContains('Your username is invalid!');
  
});

test('@regression @login user should not be able to login with invalid password', async({page})=>
{
  const login=new loginPage(page);
  const secure=new secureAreaPage(page);

  await login.open();
  await login.login(testData.users.valid.username,testData.users.invalid.password);
  await secure.expectFlashContains(' Your password is invalid!');

});

test('@login When username is kept blank user should not be able to login', async({page})=>
{
  const login=new loginPage(page);
  const secure=new secureAreaPage(page);

  await login.open();
  await login.login('',testData.users.valid.password);
  await secure.expectFlashContains('Your username is invalid!');

});

test('@login user should not be able to login when blank password is passed', async({page})=>
{
  const login=new loginPage(page);
  const secure=new secureAreaPage(page);

  await login.open();
  await login.login(testData.users.valid.username,'');
  await secure.expectFlashContains(' Your password is invalid!');

});


test('@login Valid user should be able to login refresh logout session maintained',async({page})=>
{
    const login=new loginPage(page);
    const secure=new secureAreaPage(page);

    await login.open();
    await login.login(testData.users.valid.username,testData.users.valid.password);
     await secure.expectLoaded();
  await secure.expectFlashContains('You logged into a secure area!');
  await secure.logout();
  await login.refresh();
});


