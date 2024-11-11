Feature: add cy.session

    Background: login in to saucedemo and keep session
    Given I login and keep the sesion for the standar_user
  
    Scenario: Verify sorting by price
        Given the filter option is visible
        And the product container is visible
        And the filter option A-Z is the selected by default in the filter funnel
