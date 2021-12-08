Feature: Dress Search

    As a user, I want to be able to search for dresses by type so I can purchace one
    
    Background: We are at the "Home" page
        Given the browser is at the "Home" page

    Scenario: Search for a type that does not exist
        When the user searches for "floral"
        Then a no results error message is shown
        And no products are listed

    Scenario: Search for a type that exist
        When the user searches for "printed"
        Then products are listed
        And search results show products related to "printed"

    