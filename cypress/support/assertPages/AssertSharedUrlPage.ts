import SharedUrlPage from "../pages/SharedUrlPage";

export class AssertSharedUrlPage {


    checkSharedUrlTitile = () => {
        cy.log('***checkSharedUrlTitile***')
        cy.get('@latitudeNumber').then((latitude) => {
            cy.get('@longitudNumber').then((longitude) => {
                SharedUrlPage.getTitle().then((title) => {
                    expect(title).to.be.visible
                    expect(title.text()).include(`(${latitude}, ${longitude}) Lat & Long Map`)
                })
            })
        })
    }

    checkUrl = () => {
        cy.log('***checkUrl***')
        cy.get('@latitudeNumber').then((latitude) => {
            cy.get('@longitudNumber').then((longitude) => {
                cy.url().then((url) => {
                    expect(url).to.includes(`https://www.latlong.net/c/?lat=${latitude}&long=${longitude}`)
                })
            })
        })
    }

}

export default new AssertSharedUrlPage();
