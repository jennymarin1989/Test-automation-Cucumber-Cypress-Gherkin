   @product @smoke @regression
   Feature: PageItem test suite

    Background: Login

    Given I visit "https://www.saucedemo.com/"
    And I check that url "not.include" the endpoint "inventory"
    When I log in with valid credentials
    Then I check that the element "inventory-list" should "be.visible"
    And I click on the product with position 1 of the list with the "inventory-item-name" "Sauce Labs Backpack" 
       
        Scenario: Add item to shopping cart 
            Given I check that url "include" the endpoint "inventory-item"
            And I check that product name "Sauce Labs Backpack" is visible, has a price of "29.99" and has "add-to-cart" button
            And I check that the element "shopping-cart-link" should "be.visible" 
            And I check that the element "shopping-cart-badge" should "not.exist"   
            When I click on the "add-to-cart" button
            Then I check that the element "shopping-cart-badge" should "be.visible"   
            And The badge icon number number is updated to "1"  
            And I check that the element "add-to-cart" should "not.exist" 
            And I check that the element "remove" should "be.visible"
        
        Scenario: Remove item to shopping cart 
            Given I check that product name "Sauce Labs Backpack" is visible, has a price of "29.99" and has "add-to-cart" button
            When I click on the "add-to-cart" button
            Then I check that the element "shopping-cart-badge" should "be.visible"   
            And The badge icon number number is updated to "1"  
            And I check that the element "remove" should "be.visible"
            When I click on the "remove" button
            Then I check that the element "shopping-cart-badge" should "not.exist" 


         Scenario: Click on back to products 
            Given I click on the "back-to-products" button
            Then I check that url "not.include" the endpoint "inventory-item"
            Then I check that url "include" the endpoint "inventory"