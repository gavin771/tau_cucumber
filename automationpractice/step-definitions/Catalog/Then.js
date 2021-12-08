import { Then } from "@wdio/cucumber-framework";
import { default as checkProducts } from "../../support/assertions/checkProducts";

Then(/^(no )?products are listed$/, async (notListed) => {
    if(notListed) {
        await checkProducts(false);
    } else {
        await checkProducts(true);
    }
});