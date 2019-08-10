import { Then } from "cucumber";
import checkAuthError from "../../support/assertions/checkAuthError";

Then(/^an authentication error message should say "(.*)"$/, errorMessage => {
  checkAuthError(errorMessage);
});
