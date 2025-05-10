import { test, expect } from '@playwright/test';

test("screenshot",async ({page})=>{
    await page.goto("https://www.cleartrip.com/");
    await page.waitForTimeout(3000);
    await page.locator("[class='pb-1 px-1 flex flex-middle nmx-1']").click();
    await page.waitForTimeout(3000);
})