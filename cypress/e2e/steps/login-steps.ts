import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AssertLoginPage from "../../support/assertPages/AssertLoginPage";
import LoginPage from "../../support/pages/LoginPage";
import { getUserValidData } from "../../support/utils/data-generator";
import AssertUserPage from "../../support/assertPages/AssertUserPage";
import UserPage from "../../support/pages/UserPage";

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

When('I enter the correct email and password', () => {
    let userData = getUserValidData()
    LoginPage.getEmailInput().clear().type(userData.email)
    LoginPage.getPasswordInput().clear().type(userData.password)
})

Then('I land in my user page and I see a welcome message with my name', () => {
    AssertUserPage.checkTitle()
})

Then('I click Logout button', () => {
    UserPage.clickOnLogOutButton()
})
