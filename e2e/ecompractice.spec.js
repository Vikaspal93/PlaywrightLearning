import { test, expect } from "@playwright/test";


test('Register User', async({page}) =>{

await page.goto("https://rahulshettyacademy.com/client/");

console.log(await page.title());

await page.locator('.text-reset').click();
await page.locator('#firstName').fill('Vikas');
await page.locator('#lastName').fill('Pal');
const userEmail = await page.locator('#userEmail').fill('vishpal389@gmail.com');
await page.locator('#userMobile').fill('8707618240');
const dropDown = page.locator('.custom-select');
await dropDown.selectOption("Engineer");

await page.locator("input[value='Male']").click(); // need to check why .nth and .first() not working.
expect (page.locator("input[value='Male']")).toBeChecked();

await page.locator("#userPassword").fill('ZAQ!zaq1');
const userPassword = await page.locator("#confirmPassword").fill('ZAQ!zaq1');
const checkBox = page.locator('[type="checkbox"]');
await checkBox.click();
expect (checkBox.isChecked());
await checkBox.uncheck();
expect(checkBox.isChecked()).toBeFalsy;
await page.locator("#login").click();

const toastMessage =  await page.locator("#toast-container").textContent();

console.log(toastMessage);

if (toastMessage === page.locator("#toast-container").textContent()){
    await page.locator("text=Login here").click();
}

await page.locator('#userEmail').fill('vishpal389@gmail.com');
await page.locator('#userPassword').fill('ZAQ!zaq1');
await page.locator('#login').click();

const productTitles =  await page.locator('.card-body b').allTextContents();

//console.log(count);




//await page.pause();



})
