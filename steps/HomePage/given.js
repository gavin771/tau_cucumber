import { Given } from "cucumber";

Given("A web browser is at the Google home page", () => {
  browser.url("/");
});
