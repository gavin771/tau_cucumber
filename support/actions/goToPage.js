import home from "../../pages/Home";
import login from "../../pages/Login";

export default page => {
  switch (page) {
    case "Home":
      browser.url(home.url);
      break;
    case "Login":
      browser.url(login.url);
      break;
    default:
      console.log(`Invalid Page ${page}`);
  }
};
