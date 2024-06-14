export class UserPage {

    getUserTitle = () => cy.get('h5').eq(0)

    getLogOutButton = () => cy.contains('a', 'Logout')

    clickOnLogOutButton = () => this.getLogOutButton().click()

}

export default new UserPage()