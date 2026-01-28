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

test('ui controls',async({page})=>{
  const userName=page.locator('#username');
  const password=page.locator('#password');
  const signInBtn=page.locator('#signInBtn');
  const dropdown=page.locator("select.form-control");
  const documentLink=page.locator("a[href*='documents-request']");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/#/");
  await userName.fill("rahulshettyacademy");
  await password.fill("Learning@830$3mK2");
  await dropdown.selectOption("consult");
  await page.locator(".radiotextsty").last().click();
  console.log(page.locator(".radiotextsty").last().isChecked()); //boolean for console 
  await expect(page.locator(".radiotextsty").last()).toBeChecked(); //assertion
  await page.locator('#okayBtn').click();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked(); // confirms if its checked or not at current state
  await page.locator("#terms").uncheck();
   await expect(page.locator("#terms")).not.toBeChecked(); //confirms if its unchecked or not at current state
   await expect(documentLink).toHaveAttribute("class","blinkingText");
});

test('Handling multiple tabs',async({page,context})=>{
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/#/");
  const documentLink=page.locator("a[href*='documents-request']");   
 const[newpage]=await Promise.all([
  context.waitForEvent('page'), //if two activities may go parallely we us e this method
  documentLink.click()]);

  const text = await newpage.locator(".red").textContent();
  const arraytext = text.split("@");
  const domain = arraytext[1].split(" ")[0];
  console.log(domain);
  await page.locator("#username").fill(domain);
  page.pause();
  console.log(await page.locator("#username").inputValue());});




  //--dummy elarning---------

  test('Dummy Web practice',async({page})=>{
   const randomString = Math.random().toString(36).substring(2, 8);
   const email=`${randomString}@gmail.com`;
   const password="Kranthi@1234";
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator(".text-reset").click();
     await page.locator("#firstName").fill("Kranthi");
     await page.locator("#lastName").fill("Kumar");
     await page.locator("#userEmail").fill(email);
     await page.locator("#userMobile").fill("9876543210");
     await page.locator("select").selectOption("Student");
     await page.locator("input[type='radio']").nth(0).click();
     await page.locator("#userPassword").fill(password);
     await page.locator("#confirmPassword").fill(password);
    await page.locator("input[type='checkbox']").click();
     await page.locator("#login").click();
      // await expect(page.locator(".login-section-wrapper")).toContain("Account Created Successfully");
      await page.locator(".btn.btn-primary").click();
      page.pause();
      await page.locator("#userEmail").fill(email);
      await page.locator("#userPassword").fill(password);
      await page.locator("[value='Login']").click();
      await page.waitForLoadState('networkidle');
      const titles = await page.locator(".card-body b").allTextContents();
      console.log(titles);
  });



  test('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
  // await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
 
   await page.locator("[routerlink*='cart']").click();
   //await page.pause();
 
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();
 
  await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
 
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});
 

