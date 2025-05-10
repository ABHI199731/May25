// @ts-check
import { test, expect } from '@playwright/test';

test('has one', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(3000);
  const element=await page.locator(".buttons_pzbO");
  await element.screenshot({path:"screenshot2.png"})
  await page.waitForTimeout(3000);
});


