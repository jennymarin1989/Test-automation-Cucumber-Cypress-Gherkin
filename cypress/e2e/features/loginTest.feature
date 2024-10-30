#Para comentar en un archivo .feature se hace con este símbolo #

#Esto es la descripción de la batería de test contenida en este archivo
Feature: Login test suite
    
    Background: visit the page
    #Esto es equivalente al beforeEach
    Given I visit "https://www.saucedemo.com/"

    
    
    #Los Scenarios con errores de login 
    Scenario: login unsuccessful with empty credentials 
        Given I visit "https://www.saucedemo.com/"
        Given I check that url "include" the endpoint "https://www.saucedemo.com/"
        Given I click on the "login-button" button
        Then I can see a "error" message with text: "Epic sadface: Username is required"
        Given I click on the "error-button" button
        Then I can see the "error" message dissapear
       
   Scenario: login unsuccessful with correct user and empty password
        Given I visit "https://www.saucedemo.com/"
        Given I check that url "include" the endpoint "https://www.saucedemo.com/"
        When I type in the input "username" the invalid value "standard_user"
        When I type in the input "password" the invalid value " {enter}"
        Then I check that value in input "username" should be "standard_user"
        Then I check that value in input "password" should be " "
        Given I click on the "login-button" button
        Then I can see a "error" message with text: "Epic sadface: Username and password do not match any user in this service"

    Scenario: login unsuccessful with incorrect user and password
        Given I visit "https://www.saucedemo.com/"
        Given I check that url "include" the endpoint "https://www.saucedemo.com/"
        When I type in the input "username" the invalid value "123_user"
        When I type in the input "password" the invalid value "12345"
        Then I check that value in input "username" should be "123_user"
        Then I check that value in input "password" should be "12345"
        Given I click on the "login-button" button
        Then I can see a "error" message with text: "Epic sadface: Username and password do not match any user in this service"

    Scenario: login unsuccessful with locked user and correct password
        Given I visit "https://www.saucedemo.com/"
        Given I check that url "include" the endpoint "https://www.saucedemo.com/"
        When I type in the input "username" the invalid value "locked_out_user"
        When I type in the input "password" the invalid value "secret_sauce"
        Then I check that value in input "username" should be "locked_out_user"
        Then I check that value in input "password" should be "secret_sauce"
        Given I click on the "login-button" button
        Then I can see a "error" message with text: "Epic sadface: Sorry, this user has been locked out."


   #Los Scenarios con steps simplificadss
    Scenario: login unsuccessful with empty credentials
        Given I can access the login page
        When I can see an error message when logging in with empty credentials
        When I can see an error message when logging in with incorrect credentials
