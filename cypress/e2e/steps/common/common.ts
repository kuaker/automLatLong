import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import AssertHomePage from "../../../support/assertPages/AssertHomePage";

Given('I navigate to home page', () => {
    cy.visit(Cypress.env('baseUrl'))
});

Then('I verify that home page is visible successfully', () => {
    AssertHomePage.checkLatAndLongTitle()
});
