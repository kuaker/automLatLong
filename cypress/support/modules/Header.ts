const HEADER = '#myTopnav'

export class Header {

    getHeader = () => cy.get(HEADER)

    getLogoLatLong = () => this.getHeader().children('a').eq(0)

    goToHome = () => this.getLogoLatLong().click()

}

export default new Header()
