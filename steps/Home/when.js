import { When } from "cucumber";
import search from "../../support/actions/search";
import clickMenuOption from "../../support/actions/clickMenuOption";

When(/^the user searches for "(.*)"$/, keyword => {
  search(keyword);
});

When(/^the user clicks on the "(.*)" option in the menu$/, option => {
  clickMenuOption(option);
});
