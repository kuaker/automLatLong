import UserPage from "../pages/UserPage"

export class AssertUserPage {

    checkTitle = () => {
        // I used fixtures instead of data-generator class just for show that
        // I´m can work with both functions.
        cy.log('***checkTitle***')
        cy.fixture('userValidData').then((data) => {
            UserPage.getUserTitle().should('be.visible')
                .and('have.text', `Welcome ${data.name} ${data.surname}`)
        })
    }

}

export default new AssertUserPage()