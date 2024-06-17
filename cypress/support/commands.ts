// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import LoginPage from "./pages/LoginPage";

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('getByName', (id) => {
    return cy.get(`[name="${id}"]`);
});

Cypress.Commands.add('login', (username: string, password: string) => {
    cy.visit('/user/login')
    LoginPage.getEmailInput().clear().type(username)
    LoginPage.getPasswordInput().clear().type(password)
    LoginPage.clickOnLoginButton()
})

Cypress.Commands.add('goToUrl', (newUrl: string) => {
    cy.window().then(win => {
        win.location.href = newUrl
    })
});
