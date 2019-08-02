Feature: Login

  As a user, I want to be able to login to my account to
  view accont details

  Scenario Outline:
    Given the browser is at the "Login" page
    When the user tries to use "valid" credentials, "<email>" to login
    Then the title of the page should be ""

    @dev
    Examples:
      | email                             |
      | cucumber_automation_dev@gmail.com |

    @int
    Examples:
      | email                             |
      | cucumber_automation_int@gmail.com |

  Scenario Outline:
    Given the browser is at the "Login" page
    When the user tries to use "invalid" credentials, "<email>" to login
    Then the title of the page should be "Login - My Store"
    And an authentication error message should be shown

    @dev
    Examples:
      | email             |
      | 123_dev@gmail.com |

    @int
    Examples:
      | email             |
      | 345_int@gmail.com |
