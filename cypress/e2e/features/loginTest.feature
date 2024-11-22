@smoke
@regression

Feature: Login test suite
    
    Background: visit the page
      Given I visit "/"
      Then I check that url "include" the endpoint "/"


# It is important to use Gherkin syntax with sense, starting with "Given", use "When" on the principal action and  "Then" on the principal assertion
    
    Scenario: login unsuccessful with empty credentials and remove error message
        Given I click on the "login-button" button
        Then I can see a "error" message with text: "Epic sadface: Username is required"
        And I click on the "error-button" button
        And I can see the "error" message dissapear
       
   Scenario: login unsuccessful with correct user and empty password
        Given I type in the input "username" the value "standard_user"
        And I check that value in input "username" should be "standard_user"
        And I check that value in input "password" should be ""
        When I click on the "login-button" button
        Then I can see a "error" message with text: "Epic sadface: Password is required"

# In this case, if the message is short it can be defined in the assertion, otherwise it can referenced in a confluence page. 

    Scenario: login unsuccessful with incorrect user and password
        Given I type in the input "username" the value "123_user"
        And I type in the input "password" the value "12345"
        And I check that value in input "username" should be "123_user"
        And I check that value in input "password" should be "12345"
        When I click on the "login-button" button
        Then I can see a "error" message with text: "Epic sadface: Username and password do not match any user in this service"

    Scenario: login unsuccessful with locked user and correct password
        Given I type in the input "username" the value "locked_out_user"
        And I type in the input "password" the value "secret_sauce"
        And I check that value in input "username" should be "locked_out_user"
        And I check that value in input "password" should be "secret_sauce"
        When I click on the "login-button" button
        Then I can see a "error" message with text: "Epic sadface: Sorry, this user has been locked out."



# Simplifying steps in the scenario
# This approach can be useful when it's possible to reuse existing steps and group them into a single step

    Scenario: login unsuccessful with invalid credentials
        Given I log in with empty credentials
        Given I log in with incorrect credentials

    Scenario: login successfully with valid credentials
        Given I log in with valid credentials

# Example of scenario outline 
# This approach can be implemented when the same steps are executed with different sets of data

    Scenario Outline: Scenario outline for log in
        When I type in the input "username" the value "<usernameValue>"
        When I type in the input "password" the value "<passwordValue>"
        Given I click on the "login-button" button
        Then I can see a "error" message with text: "<errorMessage>"

        Examples:
        |usernameValue |passwordValue|errorMessage|
        |standard_user |123         |Epic sadface: Username and password do not match any user in this service|
        |123           |             |Epic sadface: Password is required|
        |locked_out_user|secret_sauce          |Epic sadface: Sorry, this user has been locked out.|


