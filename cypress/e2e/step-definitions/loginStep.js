import 'cypress-mochawesome-reporter/cucumberSupport';
import { Given } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../pages/loginPage';

const loginPage = new LoginPage();
const incorrectCredentialsText = 'Epic sadface: Username and password do not match any user in this service';

Given('I can access the login page', () => {
  loginPage.visitLink('/');
  loginPage.checkUrlContent('include', '/');
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

Given('I log in with incorrect credentials', () => {
  loginPage.loginWithInvalidCredentials('standard_user', 'test123', incorrectCredentialsText);
});

Given('I log in with valid credentials', () => {
  loginPage.loginWithValidCredentials('standard_user', 'secret_sauce');
  loginPage.checkUrlContent('include', 'inventory');
});

Given('I login and keep the sesion for the standar_user', () => {
  loginPage.loginKeepSession();
});
