Feature: Google Searching

  Scenario: Search from the search bar produces correct images
    Given A web browser is at the Google home page
    When The user enters "cucumber" into the search bar
    Then links related to "cucumber" are shown on the results page
