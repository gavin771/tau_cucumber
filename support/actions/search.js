/**
 * Search for a keyword
 * @param {String} keyword keyword to search for
 * @param {object} inputField WebdriverIO input field element
 * @param {object} submitButton WebdriverIO submit button element
 */
export default async (keyword, ggl_agree, /*  */inputField, submitButton) => {
    await ggl_agree.waitForDisplayed(5000);
    await ggl_agree.click();
    await inputField.waitForDisplayed(5000);
    await inputField.click();
    await inputField.setValue(keyword);
    await submitButton.waitForDisplayed(5000);
    await submitButton.click();
};