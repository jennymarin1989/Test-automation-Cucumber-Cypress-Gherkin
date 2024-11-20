import { CommonPage } from './commonPage';
import { productElementFromList } from './mainPage';

const listOfProductsInCart = '[data-test="cart-list"]';

export class ShoppingCart extends CommonPage {
  checkProductLengthInShoppingCart(productsInShoppingCart) {
    cy.get(productElementFromList).should('have.length', productsInShoppingCart);
  }

  checkProductsInShoppingCart(productName, productPrice, quantity, shoppingButtonElement) {
    cy.get(listOfProductsInCart)
      .find(`${productElementFromList} :contains(${productName})`)
      .parent()
      .as('productInCart');
    cy.get('@productInCart')
      .should('contain', quantity)
      .and('contain', productName)
      .and('contain', productPrice)
      .find(`[data-test^=${shoppingButtonElement.toLowerCase()}]`)
      .and('be.visible');
  }
}
