Feature: Main Page test suite

    Background: Login

    Given I visit "https://www.saucedemo.com/"
    And I check that url "not.include" the endpoint "inventory"
    When I log in with valid credentials
    Then I check that url "include" the endpoint "inventory"

    Scenario: Sort by price
        Given the filter option is visible
        And the product container is visible
        And the filter option A-Z is the selected by default in the filter funnel
        And I check that the first product from the list is "Sauce Labs Backpack" and has a price of "29.99"
        And I check that the last product from the list is "Test.allTheThings" and has a price of "15.99"
        When I select the option "Price low to high"
        Then I check that the "Price low to high" option was successfully updated
        Then I check that the first product from the list is "Sauce Labs Onesie" and has a price of "7.99"
        And  I check that the last product from the list is "Sauce Labs Fleece Jacket" and has a price of "49.99"
        When I select the option "Price high to low"
        Then I check that the "Price high to low" option was successfully updated
        Then I check that the first product from the list is "Sauce Labs Fleece Jacket" and has a price of "49.99"
        And  I check that the last product from the list is "Sauce Labs Onesie" and has a price of "7.99"
      






