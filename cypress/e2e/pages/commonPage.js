/* eslint-disable cypress/unsafe-to-chain-command */

export const productElementFromList = '[data-test="inventory-item"]';
export const productItemName = '[data-test="inventory-item-name"]';
export const productElementPrice = '[data-test="inventory-item-price"]';

export class CommonPage {
  visitLink(url) {
    cy.visit(url);
  }

  checkUrlContent(checkUrlContent, url) {
    cy.url().should(checkUrlContent, url);
  }

  setInputValue(inputElement, value) {
    if (value) {
      cy.get(`[data-test=${inputElement}]`).should('be.visible');
      cy.get(`[data-test=${inputElement}]`).clear().type(value);
    }
  }

  checkInitialElementValue(inputElement) {
    cy.get(`[data-test=${inputElement}]`).should('have.value', '');
  }

  checkElementVisibility(element, elementVisibility) {
    cy.get(`[data-test^=${element}]`).should(elementVisibility);
  }

  checkInputValue(inputElement, inputValue) {
    cy.get(`[data-test=${inputElement}]`).should('have.value', inputValue);
  }

  checkProductItemDetails(productName, productPrice, shoppingButtonElement) {
    cy.get(productElementFromList).within(() => {
      cy.get(productItemName).should('contain', productName);
      cy.get(productElementPrice).should('contain', productPrice);
      cy.get(`[data-test=${shoppingButtonElement.toLowerCase()}]`).should('be.visible');
    });
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
