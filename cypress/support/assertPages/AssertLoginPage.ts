import LoginPage from "../pages/LoginPage"

export class AssertLoginPage {

    checkLoginTitle = () => {
        cy.log('***checkLoginTitle***')
        LoginPage.getUserLoginTitle().should('be.visible').and('have.text', 'User Login')
    }

    checkErrorLoginMessageIsVisible = () => {
        cy.log('***checkErrorLoginMessageIsVisible***')
        LoginPage.getErrorMessage().should('be.visible')
    }

    checkEmailMessage = (email: string) => {
        cy.get('input:invalid')
            .invoke('prop', 'validationMessage')
            .should('include', `Ingresa texto después del signo "@". La dirección "${email}" está incompleta.`)
    }

}

export default new AssertLoginPage()
