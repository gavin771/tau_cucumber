class Catalog {
    get noResultsErrorMessage() {
        return $(".alert.alert-warning");
    }

    get products() {
        return $$("#search .product_list .product-container .product-name");
    }
}

export default new Catalog();