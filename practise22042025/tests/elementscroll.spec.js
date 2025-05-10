import { test, expect } from '@playwright/test';

test("screenshot",async ({page})=>{
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(3000);
    const element=await page.locator("[class='footer__copyright']");
    await element.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await page.screenshot({path:"scroll.png"});
})