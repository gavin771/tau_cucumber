import { When } from "cucumber";
import googleSearch from "../../support/actions/search";

When(/^The user enters "(.*)" into the search bar$/, keyword => {
  googleSearch(keyword, $(".gLFyf.gsfi"), $(".aajZCb .gNO89b"));
});
