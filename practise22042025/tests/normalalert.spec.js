import { test, expect } from '@playwright/test';

test("screenshot",async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.locator("//*[text()='Alert with OK & Cancel ']").click();
    await page.waitForTimeout(3000);
    page.on("dialog",async dialog=>{
        expect(dialog.message()).toContain('Press a Button !')
        console.log(dialog.message());
        await dialog.dismiss();
        //await dailog.dismiss();
        //await dailog.accept('bhcjlshcos');
    })
    await page.locator("[onclick='confirmbox()']").click();
    await page.waitForTimeout(3000);
    await page.screenshot({path:"confrimation.png"});
    

})