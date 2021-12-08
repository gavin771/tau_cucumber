import catalog from "../../pom/Catalog";
import assert from "assert";

/**
 * @param {boolean} toBeFound If true, products should be
 */
export default toBeFound => {
    const products = catalog.products;

    if (toBeFound) {
        assert(products.length > 0, "No products were found");
    } else {
        assert(products.length === 0, "Products were found");
    }
}