export class UserPage {

    getUserTitle = () => cy.get('h5').eq(0)

}

export default new UserPage()