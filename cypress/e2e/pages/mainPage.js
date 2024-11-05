import { CommonPage } from './commonPage';

export class MainPage extends CommonPage {
  checkFilterOptionSelected(optionValue, optionText) {
    cy.get('[data-test="product-sort-container"] option:selected')
      .should('have.text', optionText)
      .and('have.value', optionValue);
  }
  checkFirstProductNameAndPrice(productName, productPrice) {
    cy.get('[data-test="inventory-item"]')
      .first()
      .within(() => {
        cy.get('[data-test="inventory-item-description"]').should('contain', productName);
        cy.get('[data-test="inventory-item-price"]').should('contain', productPrice);
      });
  }

  checkLastProductNameAndPrice(productName, productPrice) {
    cy.get('[data-test="inventory-item"]')
      .last()
      .within(() => {
        cy.get('[data-test="inventory-item-description"]').should('contain', productName);
        cy.get('[data-test="inventory-item-price"]').should('contain', productPrice);
      });
  }

  selectFilterOption(option) {
    cy.get('[data-test="product-sort-container"]').select(option);
  }
}
