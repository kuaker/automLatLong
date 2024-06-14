import HomePage from "../pages/HomePage"


export class AssertHomePage {

    checkLatAndLongTitle = () => {
        cy.log('***checkLatAndLongTitle***')
        HomePage.getTitle().should('be.visible').and('have.text', 'Latitude and Longitude Finder')
    }

}

export default new AssertHomePage()
