import assert from "assert";
import searchResultsPage from "../../pages/SearchResults";

/**
 * Ensure link text includes keyword
 *
 * @param {String} keyword Search keyword
 */
export default keyword => {
  searchResultsPage.searchResultsLinks.forEach(link => {
    const linkText = link.getText().toLowerCase();
    if (linkText) {
      assert(
        linkText.includes(keyword),
        `Link ${linkText} does not include ${keyword}`
      );
    }
  });
};
