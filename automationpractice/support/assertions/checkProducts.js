import catalog from "../../pom/Catalog";
import assert from "assert";

/**
 * @param {boolean} toBeFound If true, products should be present, else - they should not
 */
export default async (toBeFound) => {
    const products = await catalog.products;

    if (toBeFound) {
        assert(await products.length > 0, "No products were found");
    } else {
        assert(await products.length === 0, "Products were found");
    }
}