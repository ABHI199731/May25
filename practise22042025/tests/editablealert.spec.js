import { test, expect } from '@playwright/test';

test("screenshot",async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.locator("//*[text()='Alert with Textbox ']").click();
    await page.waitForTimeout(3000);
    page.on("dialog",async dialog=>{
        expect(dialog.message()).toContain('Please enter your name')
        console.log(dialog.message());
        await dialog.accept('abcdefghijklmn');
        //await dailog.dismiss();
        //await dailog.accept('bhcjlshcos');
    })
    await page.locator("[onclick='promptbox()']").click();
    await page.waitForTimeout(3000);
    await page.screenshot({path:"confrimation.png"});
    

})