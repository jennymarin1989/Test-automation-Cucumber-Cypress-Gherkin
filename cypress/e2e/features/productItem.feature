   @regression
   Feature: PageItem test suite

    Background: Login

    Given I visit "https://www.saucedemo.com/"
    And I check that url "not.include" the endpoint "inventory"
    And I log in with valid credentials
    And I check that url "include" the endpoint "inventory"
    Then I check that the element "inventory-list" should be visible
    And I click on the product with position 1 of the list with the "inventory-item-name" "Sauce Labs Backpack" 
       
        Scenario: Add item to shopping cart 
            Given I check that url "include" the endpoint "inventory-item"
            And I check that product name "Sauce Labs Backpack" is visible, has a price of "29.99" and has "add-to-cart" button
    #     And I check that shopping cart badge icon does not exist
    #     And I check that "Add to cart" button is visible 
    #     When I click on "Add to cart" button
    #     Then the shopping cart badge icon is visible with number of products added: 1
    #     And  the "Add to cart" button is replaced by "Remove" button

    # Scenario: Click on back to products 
    #     Given I click on back to products main page
    #     Then I check that url "not.include" the endpoint "inventory-item"
    #     Then I check that url "include" the endpoint "inventory"