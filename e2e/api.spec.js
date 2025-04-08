
import { test, expect } from '@playwright/test';

    var userId;


test('API testing with Get ', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2');
    //console.log(await response.json());
    expect(response.status()).toBe(200);

})

test('API test with POST method', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        data:
        {
            "name": "Vikas Pal",
            "job": "SDET"
        }
    });
    expect (response.status()).toBe(201);
    const responseBody = await response.json();
    console.log(responseBody.job +" " + responseBody.name);
    userId = responseBody.id;
    console.log(userId);
   
})

test(' UPDATE API test', async({request}) =>{
    const response = await request.put('https://reqres.in/api/users/2'+userId,{
        data:{
            "name": "Anand Gaurav",
            "job": "SDE-Android"
        }
    })
    expect (response.status()).toBe(200);
    console.log(await response.json());


})

test('DELETE API Method', async({request}) =>{
    const response = await request.delete('https://reqres.in/api/users/2'+userId);

    expect(response.status()).toBe(204);
})







