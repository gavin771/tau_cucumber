import catalog from "../../pom/Catalog"

/**
 * @param {boolean} keyword search term to be present
 */

export default async (keyword) => {
    const products = await catalog.products;
    console.log("products: " + await products.length);

}