
class DashboardPage{

    constructor(page){

        this.page = page;
        this.searchBox = page.locator('//*[@id="sidebar"]/form/div[1]/input');
        



    }

    async searchProduct(search){

        await this.searchBox.click();
        await this.searchBox.fill(search);
        //await this.page.pause();

    }
}

module.exports = {DashboardPage};