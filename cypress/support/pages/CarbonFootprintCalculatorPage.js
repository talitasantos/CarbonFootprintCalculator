///<reference types="cypress" />

// #region Import
import calcLoc from '../locators/CarbonFootprintCalculatorLocators'
import calcModel from '../models/CarbonFootprintCalculatorModel';
import calcMessages from '../messages/CarbonFootprintCalculatorMessages'
// #endregion

// #region Constants

// #endregion


class CarbonFootprintCalculatorPage {

    selectPrimaryHeatingSource(source) {
        cy.get(calcLoc.PRIMARY_HEATING_SOURCE_SELECT).select(source)
    }

    fillNaturalGasConsumption() {
        cy.get(calcLoc.NATUAL_GAS_INPUT).type(calcModel.RANDOM_NATURAL_GAS)

    }
    fillElectricityConsumption() {
        cy.get(calcLoc.ELECTRICY_IPUNT).type(calcModel.RANDOM_ELECTRICY)

    }
    fillFuelOilConsumption() {
        cy.get(calcLoc.FUEL_INPUT).type(calcModel.RANDOM_FUEL_OIL)

    }
    fillPropaneConsumption() {
        cy.get(calcLoc.PROPANE_INPUT).type(calcModel.RANDOM_PROPANE)

    }

    fillHeatingCooling() {
        cy.get(calcLoc.ENERGY_AC_INPUT).type(calcModel.THERMOSTAT_SUMMER)
        cy.get(calcLoc.ENERGY_HEAT_INPUT).type(calcModel.THERMOSTAT_WINTER)

    }

    fillLighting() {
        cy.get(calcLoc.NUMBER_OF_LIGHTS_INPUT).type(calcModel.LIGHTS)

    }

    fillPowerSourceSettings() {
        cy.get(calcLoc.INCREAD_POWER_USAGE).type(calcModel.GREEN_POWER)

    }

    fillWashingDrying() {
        cy.get(calcLoc.LOADS_PER_WEEK).type(calcModel.LOADS_PER_WEEK)

    }

    fillEnergyStarProducts() {

    }

    clickToContinueToTransportation() {
        cy.get(calcLoc.GO_TO_TRANSPORTATION_BUTTON).click()
    }

    verifyTransportationTab() {
        cy.get(calcLoc.PAGE_TITLE).contains('Transportation')
    }

}

export default CarbonFootprintCalculatorPage;