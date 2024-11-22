import { CommonPage } from './commonPage';

const dropDownFunnelElement = '[data-test="product-sort-container"]';
export const productElementFromList = '[data-test="inventory-item"]';
const listOfProductElements = '[data-test="inventory-list"]';
const productElementDescription = '[data-test="inventory-item-description"]';
const productElementPrice = '[data-test="inventory-item-price"]';
const addToCartElement = '[data-test^=add-to-cart]';
const shoppingCartBadgeElement = '[data-test="shopping-cart-badge"]';

export class MainPage extends CommonPage {
  checkFilterOptionSelected(optionValue, optionText) {
    cy.get(`${dropDownFunnelElement} option:selected`).should('have.text', optionText).and('have.value', optionValue);
  }
  checkFirstProductNameAndPrice(productName, productPrice) {
    cy.get(productElementFromList)
      .first()
      .within(() => {
        cy.get(productElementDescription).should('contain', productName);
        cy.get(productElementPrice).should('contain', productPrice);
      });
  }

  checkLastProductNameAndPrice(productName, productPrice) {
    cy.get(productElementFromList)
      .last()
      .within(() => {
        cy.get(productElementDescription).should('contain', productName);
        cy.get(productElementPrice).should('contain', productPrice);
      });
  }

  findProductItemByTextPositionAndClick(position, element, productName) {
    cy.get(productElementFromList)
      .eq(position - 1)
      .within(() => {
        cy.get(`[data-test=${element}]`).should('contain', productName).click();
      });
  }

  addProductFromTheListToShoppingCart(productName) {
    cy.get(listOfProductElements).find(`${productElementFromList} :contains(${productName})`).as('addProductToCart');
    cy.get('@addProductToCart').find(addToCartElement).should('be.visible').click();
  }

  selectFilterOption(option) {
    cy.get(dropDownFunnelElement).select(option);
  }

  updateBadgeIconNumber(numberOfProduct) {
    cy.get(shoppingCartBadgeElement).should('have.text', numberOfProduct);
  }
}
