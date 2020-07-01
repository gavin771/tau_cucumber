import { When } from "cucumber";
import search from "../../support/actions/search";

When(/^the user searches for "(.*)"$/, keyword => {
  search(keyword);
});