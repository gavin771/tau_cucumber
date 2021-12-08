const { Then } = require("@wdio/cucumber-framework");
const { default: checkProducts } = require("../../support/assertions/checkProducts");

Then(/^(no )?products are listed$/, async (notListed) => {
    if(notListed) {
        checkProducts(false);
    } else {
        checkProducts(true);
    }
});