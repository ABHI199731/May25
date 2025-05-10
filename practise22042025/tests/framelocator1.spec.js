import { test, expect } from '@playwright/test';

test("screenshot",async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    await page.waitForTimeout(3000);
    await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"}).fill("[name='mytext1']","zxcvbnm");
    //await page.screenshot({path:"sceen12.png",fullPage: true});
    await page.waitForTimeout(3000);


})