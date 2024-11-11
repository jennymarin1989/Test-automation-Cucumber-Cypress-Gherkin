Feature: Main Page test suite

    Background: Login

    Given I visit "https://www.saucedemo.com/"
    And I check that url "not.include" the endpoint "inventory"
    When I log in with valid credentials

  #  Then I check that url "include" the endpoint "inventory"
  # Este paso no tiene sentido, ya que el login es el paso anterior y ya has comprobado que la url no contiene "inventory" en el background

    Scenario: Sort by price
        Given I check that the element "product-sort-container" should be visible
        And I check that the element "inventory-list" should be visible
        And I check that the selected filter option has the value "az" and displays the text "Name (A to Z)"
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

    # Scenario: Add item to shopping cart from product details -- extraerla en un productItem.feature
    #     Given I click on a product 
    #     And I check that url "include" the endpoint "inventory-item"
    #     And I check that product description and price are visible
    #     And I check that shopping cart badge icon does not exist
    #     And I check that "Add to cart" button is visible 
    #     When I click on "Add to cart" button
    #     Then the shopping cart badge icon is visible with number of products added: 1
    #     And  the "Add to cart" button is replaced by "Remove" button

    # Scenario: Click on back to products 
    #     Given I click on back to products main page






