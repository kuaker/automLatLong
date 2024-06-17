Feature: Find Location

    Location tests

    Background: I navigate the website
        # This steps can be replaced by doing an api login step.
        Given I navigate to home page
        Then I verify that home page is visible successfully
        When I login as a user

    Scenario: I search a place and I get the latitude and the longitud
        When I click on the logo
        Then I verify that home page is visible successfully
        Then The "Place name" input, the "Latitude" input and the "Longitude" input are empty
        And I type the place name
        And I click on "Find" button
        Then I verify the latitude and the longitud numbers are visible

    Scenario: I share the place url
        When I click on the logo
        Then I verify that home page is visible successfully
        And I type the place name
        And I click on "Find" button
        Then I verify the latitude and the longitud numbers are visible
        When I copy the link url
        And I navigate to the url
        Then I see the url shared