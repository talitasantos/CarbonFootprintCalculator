// #region Import
import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/HomePage";

// #endregion

// #region Constants
const homePage = new HomePage()

// #endregion

// #region Given
Given('I visited home page', () => {
    cy.visit("/")   
})

// #endregion

// #region And
And('I fill number of people in household', () => {
    homePage.fillNumerOfPeopleInHousehold()
})

And('fill valid zip code', () => {
    homePage.fillZipCode()
})

And('', () => {

})

// #endregion

// #region When
When('click get started', () => {
    homePage.clickGetStarted()
})

// #endregion

// #region Then
Then('system returns calculator page', () => {
    cy.contains('Home Energy')

})

// #endregion
