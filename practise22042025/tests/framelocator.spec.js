import { test, expect } from '@playwright/test';

test("screenshot",async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    await page.waitForTimeout(3000);
    const frame=await page.frameLocator("[src='frame_1.html']");
    await frame.locator("[name='mytext1']").fill("abcdefghijklmn");
    //await page.screenshot({path:"sceen12.png",fullPage: true});
    await page.waitForTimeout(3000);


})