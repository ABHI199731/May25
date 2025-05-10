import { test, expect } from '@playwright/test';

test("screenshot",async ({page})=>{
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(3000);
    const element=await page.locator("[class='buttons_pzbO']");
    await element.screenshot({path:"elementsceen12.png"});


})