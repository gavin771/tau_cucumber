import assert from "assert";

/**
 * Ensure link text includes keyword
 *
 * @param {Array.Object} links List of WebdriverIO elements
 * @param {String} keyword Search keyword
 */
export default (links, keyword) => {
  links.forEach(link => {
    const linkText = link.getText().toLowerCase();
    if (linkText) {
      assert(
        linkText.includes(keyword),
        `Link ${linkText} does not include ${keyword}`
      );
    }
  });
};
