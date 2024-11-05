/* eslint-disable cypress/unsafe-to-chain-command */
import { CommonPage } from './commonPage';

export class LoginPage extends CommonPage {
  checkLogInFormInitialState(username, password) {
    this.checkInitialElementValue(username);
    this.checkInitialElementValue(password);
    cy.get('[data-test="login-button"]').should('be.visible');
  }

  setCredentialInputValue(element, value) {
    this.setInputValue(element, value);
    this.checkInputValue(element, value);
  }

  loginWithInvalidCredentials(usernameValue, passwordValue, errorMessage) {
    this.setCredentialInputValue('username', usernameValue);
    this.setCredentialInputValue('password', passwordValue);
    this.clickOnButton('login-button');
    this.getAMessage('error', errorMessage);
  }

  loginWithValidCredentials(usernameValue, passwordValue) {
    this.setCredentialInputValue('username', usernameValue);
    this.setCredentialInputValue('password', passwordValue);
    this.clickOnButton('login-button');
  }
}
