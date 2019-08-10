import { When } from "cucumber";
import signIn from "../../support/actions/signIn";

When(
  /^the user tries to use "(valid|invalid)" credentials, "(.*)" to login$/,
  (valid, email) => {
    signIn(valid === "valid" ? true : false, email);
  }
);

When(
  /^a visual checkpoint is created for "(Login Page|Account Page)"$/,
  name => {
    try {
      browser.call(() => eyes.open(browser));
      browser.call(() => eyes.check(name, Target.window().fully()));
      browser.call(() => eyes.close(false));
    } catch (e) {
      console.log(e);
    } finally {
      browser.call(() => eyes.abortIfNotClosed());
    }
  }
);
