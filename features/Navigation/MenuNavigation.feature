Feature: Menu Navigation

  As a user, I want to be able to navigate through out the website
  using the menu links to get to various pages

  Scenario Outline: Navigating through the main menu options from the home page
    Given the browser is at the "Home" page
    When the user clicks on the "<menuOption>" menu option in the menu
    Then the title of the page should be "<pageTitle>"

    Examples:
      | menuOption | pageTitle           |
      | Women      | Women - My Store    |
      | Dresses    | Dresses - My Store  |
      | T-Shirts   | T-shirts - My Store |