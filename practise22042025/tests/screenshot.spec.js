import { test, expect } from '@playwright/test';

test("screenshot",async ({page})=>{
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(3000);
    await page.screenshot({path:"sceen12.png",fullPage: true});


})