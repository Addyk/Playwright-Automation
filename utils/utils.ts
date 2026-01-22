import{Page, Locator, expect} from '@playwright/test';


type DialogOptions = {
    action: 'accept' | 'dismiss';
  expectedMessage?: string;
  promptText?: string;
};

export async function handleDialog(
    page: Page,
    options: DialogOptions  ){
    page.once('dialog', async dialog => {
         if (options.action === 'accept') {
      if (options.promptText !== undefined) {
        await dialog.accept(options.promptText);
        console.log('DIALOG TYPE:', dialog.type());
        console.log('DIALOG MSG:', dialog.message());
        console.log('PROMPT TEXT:', options.promptText);
      } else {
        await dialog.accept(); // Alert / Confirm
      }
    } else {
      await dialog.dismiss(); // Cancel
    }
    });
    }