import { test, expect } from '@playwright/test';

test("screenshot",async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.locator("//*[text()='Alert with OK ']").click();
    await page.waitForTimeout(3000);
    page.on("dialog",async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!')
        console.log(dialog.message());
        await dialog.accept();
        //await dailog.dismiss();
        //await dailog.accept('bhcjlshcos');
    })
    await page.locator("[onclick='alertbox()']").click();
    await page.screenshot({path:"confrimation.png"});
    await page.waitForTimeout(3000);

})