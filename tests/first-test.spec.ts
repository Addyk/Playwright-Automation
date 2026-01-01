import {test, expect} from '@playwright/test';

test('Home Page should open and show correct title', async({page})=>{
    await page.goto('/');

    await expect(page).toHaveTitle('The Internet');

});