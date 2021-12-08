/**
 * Navigates to a URL
 * @param {String} url URL to load
 */
export default async url => {
    await browser.url(url);
};