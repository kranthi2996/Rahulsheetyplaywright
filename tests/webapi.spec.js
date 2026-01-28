const {test, expect, request} = require('@playwright/test');4
const loginPayload= {userEmail: "anshika@gmail.com", userPassword: "Iamking@000"};

test.beforeAll(async()=>{

    const apiContext= await request.newContext();
    const loginResponse= await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',{
        data:loginPayload
    });
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson= await loginResponse.json();
    global.token= loginResponseJson.token;         


});

test('place order from API', async ({page}) => {

    //set storage state with token
    page.addInitScript( token => {
        window.localStorage.setItem('token', token);
    }, global.token);   
    const email = "";
    const productName = 'ZARA COAT 4';
    await page.goto("https://rahulshettyacademy.com/client");
        const products = page.locator(".card-body");
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
        }
    );

