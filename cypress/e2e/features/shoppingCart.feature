@regression
@smoke

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
      Then The badge icon number number is updated to "2"  
      When I click on the "shopping-cart-link" button
      Then I check that url "include" the endpoint "cart"
      And I check that the element "cart-list" should "be.visible"

     Scenario: The products added to the shopping cart are correct and visible
      Given I check that the products added to the shopping cart have a length of 2
      Then I check that "Sauce Labs Onesie" is the correct product name, has a correct price of "7.99", correct quantity of "1" and has the "remove" button
      And I check that "Sauce Labs Backpack" is the correct product name, has a correct price of "29.99", correct quantity of "1" and has the "remove" button
   
     Scenario: Proceed to checkout 
      Given I click on the "checkout" button
      Then I check that url "include" the endpoint "checkout-step-one"
  
     