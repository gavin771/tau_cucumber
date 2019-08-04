import assert from "assert";

/**
 * @param {boolean} title expected title
 */
export default title => {
  assert(
    browser.getTitle() === title,
    `Title, ${browser.getTitle()} not equal to ${title}`
  );
};
