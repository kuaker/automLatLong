import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AssertHomePage from "../../../support/assertPages/AssertHomePage";
import Header from "../../../support/modules/Header";

Given('I navigate to home page', () => {
    cy.visit(Cypress.env('baseUrl'))
});

Then('I verify that home page is visible successfully', () => {
    AssertHomePage.checkLatAndLongTitle()
});

When('I click on the logo', () => {
    Header.goToHome()
})
