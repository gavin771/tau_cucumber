import assert from "assert";
import searchResultsPage from "../../pages/SearchResults";
/**
 * Ensure link text includes keyword
 * @param {Array.Object} links List of WebdriverIO elements
 * @param {String} keyword Search keyword
 */
export default async (keyword) => {
    const links = await searchResultsPage.searchResultsLinks;
    console.log("links.length: " + await links.length);
    console.log("links[0]: " + await links[0].getText());
    console.log("links[7]: " + await links[7].getText());
    for (const [i, link] of links.entries()) {
        const linkText = await link.getText();
        var str = await linkText.toLowerCase();
        console.log("link: " + await str);

        if (str) {
            console.log("     " + i + " true");
            assert(
                await str.includes(keyword),
                `Link text does not include ${keyword}`
            );
        } else {
            console.log("     " + i + " false");
        }
    };    
}