const {test, expect} = require('@playwright/test');

test('Pop up validations', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");  
    //popup handling


    await expect(await page.locator("#displayed-text").toBeVisible());
    await page.locator("#hide-textbox").click();
    await expect(await page.locator("#displayed-text")).toBeHidden();

    page.on('dialog',dialog=> dialog.accept());
    await page.locator("#confirmbtn").click(); //java or javascript dialogue box
   await page.locator("#mousehover").hover();   



   const framespage = page.frameLocator("#courses-iframe");
   await framespage.locator("li a[href*='mentorship']: visible").click();
    });

