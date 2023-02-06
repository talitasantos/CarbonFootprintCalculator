///<reference types="cypress" />

// #region Import
import homeLoc from '../locators/HomeLocators'
import homeModel from '../models/HomeModel';
// #endregion

// #region Constants

// #endregion


class HomePage {

    fillNumerOfPeopleInHousehold() {
        cy.get(homeLoc.HOUSEHOLD_INPUT).type(homeModel.RANDMOM_NUMER_OF_PEOPLE)
    }

    fillZipCode() {
        cy.get(homeLoc.ZIPCODE_INPUT).type(homeModel.RANDOM_ZIP_CODE)

    }

    clickGetStarted() {
        cy.get(homeLoc.GET_STARTED_BUTTON).click()
    }


}

export default HomePage;

