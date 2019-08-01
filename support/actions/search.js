import homePage from "../../pages/Home";

/**
 * Search for a keyword
 *
 * @param {String} keyword keyword to seasrch for
 */
export default keyword => {
  homePage.search(keyword);
};
