// #region Import
import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import CarbonFootprintCalculatorPage from "../pages/CarbonFootprintCalculatorPage"
// #endregion

// #region Constants
const carbonFootprintCalculatorPage = new CarbonFootprintCalculatorPage()
// #endregion

// #region Given

// #endregion

// #region And
And('select a primary heating {string}', (source) => {
    carbonFootprintCalculatorPage.selectPrimaryHeatingSource(source)
    
})

And('enter your monthly consumption in dollars', () => {
    carbonFootprintCalculatorPage.fillNaturalGasConsumption()
    carbonFootprintCalculatorPage.fillElectricityConsumption()
    carbonFootprintCalculatorPage.fillFuelOilConsumption()
    carbonFootprintCalculatorPage.fillPropaneConsumption()
})

And('fill reduce your mission', () => {
    carbonFootprintCalculatorPage.fillHeatingCooling()
    carbonFootprintCalculatorPage.fillLighting()
    carbonFootprintCalculatorPage.fillPowerSourceSettings()
    carbonFootprintCalculatorPage.fillWashingDrying()
    carbonFootprintCalculatorPage.fillEnergyStarProducts()
    
})

And('', () => {

})


// #endregion

// #region When
When('click to continue to transportation', () => {
    carbonFootprintCalculatorPage.clickToContinueToTransportation()

})

// #endregion

// #region Then
Then('sytem returns transportation tab', () => {
    carbonFootprintCalculatorPage.verifyTransportationTab()

    
})

// #endregion
