import { Then } from "@badeball/cypress-cucumber-preprocessor";
import AssertHomePage from "../../support/assertPages/AssertHomePage";
import HomePage from "../../support/pages/HomePage";

const PLACE_NAME = 'Buenos Aires'

Then('The "Place name" input, the "Latitude" input and the "Longitude" input are empty', () => {
    AssertHomePage.checkInputFieldsAreEmpty()
});

Then('I type the place name', () => {
    HomePage.getPlaceNameInput().clear().type(PLACE_NAME)
});

Then('I click on "Find" button', () => {
    HomePage.clickOnFindButton()
})

Then('I verify the latitude and the longitud numbers are visible', () => {
    AssertHomePage.checkLatitudeAndLongitudeNumberAreVisible()
    AssertHomePage.checkShareLocationLink()
    AssertHomePage.checkLocationURL()
})