import { test, expect } from '@playwright/test';

test("screenshot",async ({page})=>{
    await page.goto("https://www.cleartrip.com/");
    await page.waitForTimeout(3000);
    await page.locator("[placeholder='Enter mobile number']").fill("1234567890");
    await page.waitForTimeout(3000);
})