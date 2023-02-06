#Author: talitasantos2310@gmail.com

Feature: Carbon Footprint Calculator
    As a user
    I want to fill my household informations
    So that I can estimates footprint in three areas: home energy, transportation and waste.

    Background: Get started
        Given I visited home page
        And I fill number of people in household
        And fill valid zip code
        When click get started
        Then system returns calculator page

   # Scenario: Estimates footprint sucessfully
   #     Given I filled heating informations
   #     And fill utility informations
