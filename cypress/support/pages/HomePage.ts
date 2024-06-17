const LAT_AND_LONG_TITLE = 'h1'
const PLACE_NAME = 'place'
const LAT_NAME = 'lat'
const LON_NAME = 'lng'
const LAT_LONG_NUMBERS = '#latlngspan'

export class HomePage {

    getTitle = () => cy.get(LAT_AND_LONG_TITLE)

    getPlaceNameInput = () => cy.getByName(PLACE_NAME)

    getLatitudeInput = () => cy.getByName(LAT_NAME)

    getLongitudeInput = () => cy.getByName(LON_NAME)

    clickOnFindButton = () => cy.contains('button', 'Find').click()

    getLatLongNumberSpan = () => cy.get(LAT_LONG_NUMBERS)

}

export default new HomePage()
