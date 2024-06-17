import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AssertHomePage from "../../../support/assertPages/AssertHomePage";
import Header from "../../../support/modules/Header";
import LoginPage from "../../../support/pages/LoginPage";
import { getUserValidData } from "../../../support/utils/data-generator";

Given('I navigate to home page', () => {
    cy.visit(Cypress.env('baseUrl'))
});

Then('I verify that home page is visible successfully', () => {
    AssertHomePage.checkLatAndLongTitle()
});

When('I click on the logo', () => {
    Header.goToHome()
})

When('I login as a user', () => {
    let userData = getUserValidData()
    cy.login(userData.email, userData.password)
})
