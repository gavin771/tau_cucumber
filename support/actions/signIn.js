import login from "../../pages/Login";
import credentials from "../../data/credentials";

export default (isValid, email) => {
  const password = isValid
    ? credentials.find(creds => creds.email === email).password
    : "randomPassword";

  login.signIn(email, password);
};
