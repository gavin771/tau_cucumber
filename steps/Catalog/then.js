import { Then } from "cucumber";
import checkNoResultsError from "../../support/assertions/checkNoResultsError";
import checkProducts from "../../support/assertions/checkProducts";
import checkProductsContain from "../../support/assertions/checkProductsContain";

Then("a no results error message is shown", () => {
  checkNoResultsError();
});

Then(/^(no )?products are listed$/, notListed => {
  if (notListed) {
    checkProducts(false);
  } else {
    checkProducts(true);
  }
});

Then(/^search results show products related to "(.*)"$/, keyword => {
  checkProducts(true);
  checkProductsContain(keyword);
});
