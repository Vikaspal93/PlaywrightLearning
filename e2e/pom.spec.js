import { test, expect } from '@playwright/test';
import {POManager} from '../page_object/POManager';


test("login with vailid Credentials", async ({ page }) => {

    const poManager = new POManager(page)
    const email = 'vishpal389@gmail.com';
    const password = 'ZAQ!zaq1';

   const loginPage = poManager.getLoginPage();


    await loginPage.gotoLoginPage();
    await loginPage.vailidLogin(email,password);
    
    const dashboardPage = poManager.getDashboardPage();
    const searchText = "ADIDAS ORIGINAL";

    await dashboardPage.searchProduct(searchText);

    

});