import catalog from "../../pom/Catalog";
import assert from "assert";

/**
 * @param {boolean} keyword search term to be present
 */

export default async (keyword) => {
    const products = await catalog.products;
    console.log("### products length: " + await products.length + " ###");

    for(const product of products) {
        const productText = await product.getText()
        var str = await productText.trim().toLowerCase();

        if (str) {
            console.log("productText: " + await str);
            assert(
                await str.includes(keyword),
                `Product ${await product.getText()} does not contain ${keyword}`
            );
        }
    };
};