@regression @main
Feature: Main Page test suite

    Background: Login

      Given I visit "https://www.saucedemo.com/"
      And I check that url "not.include" the endpoint "inventory"
      When I log in with valid credentials
      Then  I check that the element "product-sort-container" should "be.visible"
      And I check that the element "inventory-list" should "be.visible"

  #  Then I check that url "include" the endpoint "inventory"
  # Este paso no tiene sentido, ya que el login es el paso anterior y ya has comprobado que la url no contiene "inventory" en el background

    Scenario: Sort by price
        Given I check that the selected filter option has the value "az" and displays the text "Name (A to Z)"
        And I check that the first product from the list is "Sauce Labs Backpack" and has a price of "29.99"
        And I check that the last product from the list is "Test.allTheThings" and has a price of "15.99"
        When I select the "Price (low to high)" option from the filter
        And I check that the selected filter option has the value "lohi" and displays the text "Price (low to high)"
        Then I check that the first product from the list is "Sauce Labs Onesie" and has a price of "7.99"
        And  I check that the last product from the list is "Sauce Labs Fleece Jacket" and has a price of "49.99"
        When I select the "Price (high to low)" option from the filter
        Then I check that the selected filter option has the value "hilo" and displays the text "Price (high to low)"
        Then I check that the first product from the list is "Sauce Labs Fleece Jacket" and has a price of "49.99"
        And  I check that the last product from the list is "Sauce Labs Onesie" and has a price of "7.99"

# ejecutara los tests en background y este test
@smoke
    Scenario: Click on first product from the list to see the product details
        Given I click on the product with position 1 of the list with the "inventory-item-name" "Sauce Labs Backpack" 
        Then I check that url "include" the endpoint "inventory-item"

    Scenario: Add the product with the lowest price to the shopping cart
        Given I select the "Price (low to high)" option from the filter
        And  I check that the first product from the list is "Sauce Labs Onesie" and has a price of "7.99"
        Then  I add the product "Sauce Labs Onesie" to the shopping cart
        And  I check that the element "shopping-cart-badge" should "be.visible"   
        And The badge icon number number is updated to "1"  
        And I check that the element "remove" should "be.visible"
     







