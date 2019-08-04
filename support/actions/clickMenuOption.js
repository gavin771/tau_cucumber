import home from "../../pages/Home";

export default option => {
  switch (option) {
    case "Women":
      home.womenMenuOption.click();
      break;
    case "Dresses":
      home.dressesMenuOption.click();
      break;
    case "T-Shirts":
      home.tshirtMenuOption.click();
      break;
    default:
      console.log(`Invalid Option ${option}`);
  }
  home.selectMenuOption(option);
};
