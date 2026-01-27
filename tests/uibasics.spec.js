const {test,expect}=require('@playwright/test');


test('Browser context FirstPlaywright Test',async ({browser}) =>{
const context=await browser.newContext();  
 const page = await context.newPage();  
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/#/"); 
    await console.log( await page.title());
    await page.locator('#username').fill("rahulshettyacademy");
    await page.locator('#password').fill("Learning@830$3mK2");
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
     expect( await page.locator("[style*='block']").textContent()).toContain("Incorrect username/password.");

    
});


test('Browser context First Playwright Test1',async ({browser}) =>{
const context=await browser.newContext();  
 const page = await context.newPage();  
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/#/"); 
    await console.log( await page.title());
    await page.locator('#username').fill("rahulshettyacademy");
    await page.locator('#password').fill("Learning@830$3mK2");
    await page.locator('#signInBtn').click();
    await console.log(await page.locator('.card-body a').first().textContent());
     await console.log(await page.locator('.card-body a').nth(1).textContent());
     const k=await page.locator('.card-body a').allTextContents();
     console.log(k);
});


test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle'); // bit flaky
   //await page.locator(".card-body b").waitFor(); // ther alternative for flakiness
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 

});

test('Page FirstPlaywright Test',async ({page}) =>{  //inbuilt feature of plywright
    await page.goto("https://www.google.com/");
    await console.log( await page.title());
    await expect(page).toHaveTitle("Google");
})

test.only('ui controls',async({page})=>{
  const userName=page.locator('#username');
  const password=page.locator('#password');
  const signInBtn=page.locator('#signInBtn');
  const dropdown=page.locator("select.form-control");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/#/");
  await userName.fill("rahulshettyacademy");
  await password.fill("Learning@830$3mK2");
  await dropdown.selectOption("consult");
  expect (page.locator(".radiotextsty").last().click());
  console.log(page.locator(".radiotextsty").last().isChecked()); //boolean for console 
  page.locator(".radiotextsty").last().toBeChecked(); //assertion
  await page.locator('#okayBtn').click();
  await page.locator("#terms").click();
  
  await page.pause();
  
});