/* eslint-disable cypress/unsafe-to-chain-command */

export class CommonPage {
  visitLink(url) {
    cy.visit(url);
  }

  checkUrlContent(checkUrlContent, url) {
    cy.url().should(checkUrlContent, url);
  }

  setInputValue(inputElement, value) {
    cy.get(`[data-test=${inputElement}]`).should('be.visible');
    cy.get(`[data-test=${inputElement}]`).clear().type(value);
  }

  checkInputValue(inputElement, inputValue) {
    cy.get(`[data-test=${inputElement}]`).should('have.value', inputValue);
  }

  clickOnButton(buttonElement) {
    cy.get(`[data-test=${buttonElement}]`).should('be.visible').click();
  }

  getAMessage(typeOfMessage, textMessage) {
    cy.get(`[data-test=${typeOfMessage}]`).should('be.visible').and('have.text', textMessage);
  }

  isMessageDisplayed(typeOfMessage) {
    cy.get(`[data-test=${typeOfMessage}]`).should('not.exist');
  }
}
