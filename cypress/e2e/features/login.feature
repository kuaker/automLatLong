Feature: Feature name

    Login tests

    Background: I navigate the website
        Given I navigate to home page
        Then I verify that home page is visible successfully
        When I navigate to the login page
        Then I verify "User Login" title is visible

    # Scenario Outline: Login User with incorrect email and password
    #     When I enter incorrect "<email>" and "<password>"
    #     And I click login button
    #     Then I verify error message is displayed
    #     Examples:
    #         | email               | password         |
    #         | arroupe09@gmail.com | 12132135678      |
    #         | arroupe09@gmail.com | 12               |
    #         | arroupe@gmail.com   | challengeNewFire |

    Scenario: Login User with correct email and password
        When I enter the correct email and password
        And I click login button
        Then I land in my user page and I see a welcome message with my name