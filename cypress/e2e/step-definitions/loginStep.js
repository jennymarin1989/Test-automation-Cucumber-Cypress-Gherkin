import { Given } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../pages/loginPage';

const loginPage = new LoginPage();
const incorrectCredentialsText =
  'Epic sadface: Username and password do not match any user in this service';

Given('I can access the login page', () => {
  loginPage.visitLink('https://www.saucedemo.com/');
  loginPage.checkUrlContent('include', 'https://www.saucedemo.com/');
  loginPage.checkLogInFields();
});

Given('I log in with empty credentials', () => {
  loginPage.setInputValue('username', ' {enter}');
  loginPage.setInputValue('password', ' {enter}');
  loginPage.checkInputValue('username', ' ');
  loginPage.checkInputValue('password', ' ');
  loginPage.clickOnButton('login-button');
  loginPage.getAMessage('error', incorrectCredentialsText);
});

//------mismo paso de verificar invalid credential pero con funciones parametrizadas creadas en loginPage
Given('I log in with incorrect credentials', () => {
  loginPage.loginWithInvalidCredentials('standard_user', 'test123', incorrectCredentialsText);
});

//Este step es útil para meter en el background de tests que no sean de login (Como los de main page, cart...)
Given('I log in with valid credentials', () => {
  loginPage.loginWithValidCredentials('standard_user', 'secret_sauce');
  loginPage.checkUrlContent('include', 'inventory');
});
