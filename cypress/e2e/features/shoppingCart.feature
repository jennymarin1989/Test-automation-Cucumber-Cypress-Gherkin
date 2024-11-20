Feature: Shopping cart test suite

    Background: Login and add 2 items to the shopping cart

      Given I visit "https://www.saucedemo.com/"
      And I check that url "not.include" the endpoint "inventory"
      When I log in with valid credentials
      And I check that the element "inventory-list" should "be.visible"
      And  I add the product "Sauce Labs Onesie" to the shopping cart
      When I click on the product with position 1 of the list with the "inventory-item-name" "Sauce Labs Backpack" 
      And I check that product name "Sauce Labs Backpack" is visible, has a price of "29.99" and has "add-to-cart" button
      And I click on the "add-to-cart" button
      And The badge icon number number is updated to "2"  
      Then I click on the "shopping-cart-link" button

     Scenario: The products added to the shopping cart are correct and visible
      Given I check that url "include" the endpoint "cart"
    # I check that list container is available
    # I check that the list have 2 products visible
    # I check that the product Sauce Labs Onesie is visible with quantity: 1 and remove button
    # I check that the product Sauce Labs Onesie is visible with quantity: 1 and remove button

    # Scenario: Checkout