Feature: Demo verify https://www.w3schools.com/

  Scenario: Search lesson
    Given user go to w3schools
    When user search lesson with key "html"
    Then verify lesson

  Scenario: Login use data table
    Given user go to w3schools
    When user click button login
    Then user login with email, password and verify error message
      | email          | password | message                              |
      | snow@gmail.com | test     | An unknown error has occurred.       |
      | snow@gmail.com |          | Please enter your email and password |
      |                | test     | Please enter your email and password |

  Scenario Outline: Login fail
    Given user go to w3schools
    When user input "<email>" and "<password>"
    Then verify "<error message>"

    Examples:
      | email          | password | error message                        |
      | snow@gmail.com | test     | An unknown error has occurred.       |
      | snow@gmail.com |          | Please enter your email and password |
      |                | test     | Please enter your email and password |

  Scenario: run cmd on windown/mac
    Given I open cmd and run process
