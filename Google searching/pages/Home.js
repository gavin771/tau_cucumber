class Home {
    get url() {
        return "https://google.com";
    }

    get ggl_agree() {
        return $('//*[@id="L2AGLb"]/div');
    }

    get searchField() {
        return $('.gLFyf.gsfi');
    }

    get searchButton() {
        return $('.aajZCb .gNO89b');
    }

    async search(keyword) {
         await this.ggl_agree.waitForDisplayed();
         await this.ggl_agree.click();
         await this.searchField.waitForDisplayed();
         await this.searchField.click();
         await this.searchField.setValue(keyword);
         await this.searchButton.waitForDisplayed(5000);
         await this.searchButton.click();
    }
}
export default new Home();