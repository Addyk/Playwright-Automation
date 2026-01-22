import{test,expect} from "@playwright/test";
import { alerts } from "../pages/alerts";
import { handleDialog } from "../utils/utils";


test('@regression @ALerts Alerts Testcase accept',async({page})=>
{
    const AlertTest=new alerts(page);
    await AlertTest.open();
    await AlertTest.acceptAlert();
    await handleDialog(page, {
    action: 'accept',
    expectedMessage: 'I am a JS Alert'
  });
     await expect(page.locator('#result'))
    .toHaveText('You successfully clicked an alert');
});

test('@regression @ALerts Alerts Testcase dismiss',async({page})=>
{
    const AlertTest=new alerts(page);
    await AlertTest.open();
    await AlertTest.dismissAlert();
    await handleDialog(page, {
    action: 'dismiss',
    expectedMessage: 'I am a JS Confirm'
  });
    await expect(page.locator('#result'))
    .toHaveText('You clicked: Cancel');
});

test('@regression @ALerts @AlertAccept Alerts Testcase prompt',async({page})=>
{
    const AlertTest=new alerts(page);
    await AlertTest.open();
     await handleDialog(page, {
    action: 'accept',
    expectedMessage: 'I am a JS Prompt',
    promptText: 'Playwright Prompt'
  });
    await AlertTest.promptAlert();

   

    await expect(page.locator('#result'))
    .toHaveText('You entered: Playwright Prompt');
});

