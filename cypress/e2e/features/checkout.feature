Feature: Checkout test suite

    Background: checkout and pay the products from the shopping cart

      Given I visit "https://www.saucedemo.com/"
      And I check that url "not.include" the endpoint "inventory"
      When I log in with valid credentials
      And I check that the element "inventory-list" should "be.visible"
      And I add the product "Sauce Labs Onesie" to the shopping cart
      When I click on the product with position 1 of the list with the "inventory-item-name" "Sauce Labs Backpack" 
      And I check that product name "Sauce Labs Backpack" is visible, has a price of "29.99" and has "add-to-cart" button
      And I click on the "add-to-cart" button
      Then I click on the "shopping-cart-link" button
      And I click on the "checkout" button

    Scenario: Successful checkout process 
      Given I check that url "include" the endpoint "checkout-step-one"
      And I check that the element "checkout-info-container" should "exist"
      When I type in the input "firstName" the value "userTest"
      And I type in the input "lastName" the value "Test"
      And I type in the input "postalCode" the value "29000"
      And I click on the "continue" button
      Then I check that url "include" the endpoint "checkout-step-two"
      And I check that the element "cart-list" should "be.visible"
      And I check that product name "Sauce Labs Onesie" is correct, has a correct price of "7.99" and correct quantity of "1" in the checkout summary
      And I check that product name "Sauce Labs Backpack" is correct, has a correct price of "29.99" and correct quantity of "1" in the checkout summary
      And I check that the element "payment-info-label" should "be.visible"
      And I check that the element "shipping-info-label" should "be.visible"
      And I check that the element "total-info-label" should "be.visible"
      When I click on the "finish" button 
      Then I check that url "include" the endpoint "checkout-complete"
      And I can see a "complete-header" message with text: "Thank you for your order!"
      When I click on the "back-to-products" button
      Then I check that url "include" the endpoint "inventory"
      And I check that the element "shopping-cart-badge" should "not.exist" 

    Scenario: Unsuccessful checkout process