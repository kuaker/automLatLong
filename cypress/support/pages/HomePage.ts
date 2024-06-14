const LAT_AND_LONG_TITLE = 'h1'

export class HomePage {

    getTitle = () => cy.get(LAT_AND_LONG_TITLE)

}

export default new HomePage()
