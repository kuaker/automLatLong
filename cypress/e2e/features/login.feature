Feature: Feature name

    Login tests

    Background: I navigate the website
        Given I navigate to home page
        Then I verify that home page is visible successfully
        When I navigate to the login page
        Then I verify "User Login" title is visible

    Scenario Outline: Login User with incorrect email and password
        When I enter incorrect "<email>" address and "<password>"
        And I click login button
        Then I verify error message is displayed
        Examples:
            | email               | password    |
            | arroupe09@gmail.com | 12132135678 |
            | arroupe09@gmail.com | 12          |
            | arroupe             | 12132135678 |
            | arroupe.com         | 1           |



