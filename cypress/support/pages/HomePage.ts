const LAT_AND_LONG_TITLE = 'h1'
const PLACE_NAME = 'place'
const LAT_NAME = 'lat'
const LON_NAME = 'lng'
const LAT_LONG_NUMBERS = '#latlngspan'
const SHARE_LOCATION_LINK = '#coordinateslink'
const LOCATION_URL = '#coordinatesurl'

export class HomePage {

    getTitle = () => cy.get(LAT_AND_LONG_TITLE)

    getPlaceNameInput = () => cy.getByName(PLACE_NAME)

    getLatitudeInput = () => cy.getByName(LAT_NAME)

    getLongitudeInput = () => cy.getByName(LON_NAME)

    clickOnFindButton = () => cy.contains('button', 'Find').click()

    getLatLongNumberSpan = () => cy.get(LAT_LONG_NUMBERS)

    getShareLocationLink = () => cy.get(SHARE_LOCATION_LINK)

    getLocationURL = () => cy.get(LOCATION_URL)

    saveLocationUrl = () => {
        this.getLocationURL().invoke('val').then((url) => {
            cy.writeFile('cypress/fixtures/newUrl.json', JSON.stringify(url))
        })
    }

    navigateToNewUrl = () => {
        cy.readFile('cypress/fixtures/newUrl.json').then((data) => {
            cy.goToUrl(data)
        })
    }
}

export default new HomePage()
