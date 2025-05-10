import { test, expect } from '@playwright/test';

test("screenshot",async ({page})=>{
    await page.goto("https://www.cleartrip.com/");
    await page.waitForTimeout(3000);
    await page.reload();
    await page.waitForTimeout(3000);
})