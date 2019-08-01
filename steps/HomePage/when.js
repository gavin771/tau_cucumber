import { When } from "cucumber";

When(/^The user enters "(.*)" into the search bar$/, keyword => {
  $(".gLFyf.gsfi").waitForDisplayed(5000);
  $(".gLFyf.gsfi").click();
  $(".gLFyf.gsfi").setValue(keyword);
  $(".aajZCb .gNO89b").waitForDisplayed(5000);
  $(".aajZCb .gNO89b").click();
});
