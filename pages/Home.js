class Home {
    get url() {
      return "/";
    }
  
    get searchField() {
      return $("#search_query_top");
    }
  
    get searchButton() {
      return $(".btn.btn-default.button-search");
    }
  
    /**
     * Searches for a keyword
     * @param {String} keyword Search term
     */
  
    search(keyword) {
      this.searchField.waitForDisplayed(2000);
      this.searchField.setValue(keyword);
      this.searchButton.click();
    }
  }
  
  module.exports = new Home();