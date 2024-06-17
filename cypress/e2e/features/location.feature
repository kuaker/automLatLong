Feature: Find Location

    Location tests

    Background: I navigate the website
        # This steps can be replaced by doing an api login step.
        Given I navigate to home page
        Then I verify that home page is visible successfully
        When I navigate to the login page
        Then I verify "User Login" title is visible
        When I enter the correct email and password
        And I click login button
        Then I land in my user page and I see a welcome message with my name

    Scenario: I search a place and I get the latitude and the longitud
        When I click on the logo
        Then I verify that home page is visible successfully
        Then The "Place name" input, the "Latitude" input and the "Longitude" input are empty
        And I type the place name
        And I click on "Find" button
        Then I verify the latitude and the longitud numbers are visible