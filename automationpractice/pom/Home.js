class Home {
    get url() {
        return "http://automationpractice.com";
    }

    get searchField() {
        return $("#search_query_top");
    }

    get searchButton() {
        return $(".btn.btn-default.button-search");
    }

    /**
     * Searches for a keyword
     * 
     * @param {String} keyword Search term
     */
    async search(keyword) {
        await this.searchField.waitForDisplayed(2000);
        await this.searchField.setValue(keyword);
        await this.searchButton.click();
    }
}

export default new Home();