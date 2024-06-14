import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AssertLoginPage from "../../support/assertPages/AssertLoginPage";
import LoginPage from "../../support/pages/LoginPage";

When('I navigate to the login page', () => {
    cy.visit('/user/login')
})

Then('I verify "User Login" title is visible', () => {
    AssertLoginPage.checkLoginTitle()
})

When('I enter incorrect {string} and {string}', (email: string, password: string) => {
    LoginPage.getEmailInput().clear().type(email)
    LoginPage.getPasswordInput().clear().type(password)
})

Then('I click login button', () => {
    LoginPage.clickOnLoginButton()
})

Then('I verify error message is displayed', () => {
    AssertLoginPage.checkErrorLoginMessageIsVisible()
})

When('I enter incorrect {string}', (email: string) => {
    LoginPage.getEmailInput().clear().type(email)
})
