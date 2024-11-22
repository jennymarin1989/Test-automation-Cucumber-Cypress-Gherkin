Feature: add cy.session

    Background: login in to saucedemo and keep session open
      Given I login and keep the sesion for the standar_user
      And I check that the element "product-sort-container" should "be.visible"
      And I check that the element "inventory-list" should "be.visible"
  
    Scenario: Verify sorting by price
      Given I check that the selected filter option has the value "az" and displays the text "Name (A to Z)"
      And I check that the first product from the list is "Sauce Labs Backpack" and has a price of "29.99"
