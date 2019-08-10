import { When } from "cucumber";
import signIn from "../../support/actions/signIn";

When(
  /^the user tries to use "(valid|invalid)" credentials, "(.*)" to login$/,
  (valid, email) => {
    signIn(valid === "valid" ? true : false, email);
  }
);
