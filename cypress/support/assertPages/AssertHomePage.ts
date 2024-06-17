import HomePage from "../pages/HomePage"


export class AssertHomePage {

    checkLatAndLongTitle = () => {
        cy.log('***checkLatAndLongTitle***')
        HomePage.getTitle().should('be.visible').and('have.text', 'Latitude and Longitude Finder')
    }

    checkInputFieldsAreEmpty = () => {
        cy.log('***checkInputFieldsAreEmpty***')
        HomePage.getPlaceNameInput().should('be.empty')
        HomePage.getLatitudeInput().should('be.empty')
        HomePage.getLongitudeInput().should('be.empty')
    }

    checkLatitudeAndLongitudeNumberAreVisible = () => {
        cy.log('***checkLatitudeAndLongitudeNumberAreVisible***')
        HomePage.getLatitudeInput().invoke('val').then((latitudeValue) => {
            cy.log(JSON.stringify(latitudeValue))
            expect(latitudeValue).to.be.not.eq('0.000000')
            cy.wrap(latitudeValue).as('latitudeNumber')
        })
        HomePage.getLongitudeInput().invoke('val').then((longitudValue) => {
            cy.log(JSON.stringify(longitudValue))
            expect(longitudValue).to.be.not.eq('0.000000')
            cy.wrap(longitudValue).as('longitudNumber')
        })

        cy.get('@latitudeNumber').then((latitude) => {
            cy.get('@longitudNumber').then((longitude) => {
                HomePage.getLatLongNumberSpan().then((span) => {
                    expect(span.text()).to.be.eq(`(${latitude}, ${longitude})`)
                })
            })
        })
    }

    checkShareLocationLink = () => {
        cy.log('***checkShareLocationLink***')
        cy.get('@latitudeNumber').then((latitude) => {
            cy.get('@longitudNumber').then((longitude) => {
                HomePage.getShareLocationLink().then((shareLink) => {
                    expect(shareLink.text()).to.be.eq(`<a href="https://www.latlong.net/c/?lat=${latitude}&long=${longitude}" target="_blank">(${latitude}, ${longitude})</a>`)
                })
            })
        })

    }

    checkLocationURL = () => {
        cy.log('***checkLocationURL***')
        cy.get('@latitudeNumber').then((latitude) => {
            cy.get('@longitudNumber').then((longitude) => {
                HomePage.getLocationURL().invoke('val').then((locationURL) => {
                    expect(locationURL).to.be.eq(`https://www.latlong.net/c/?lat=${latitude}&long=${longitude}`)
                })
            })
        })

    }

}

export default new AssertHomePage()
