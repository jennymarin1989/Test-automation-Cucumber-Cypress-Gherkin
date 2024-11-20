import { ShoppingCart } from '../pages/shoppingCart';
import { Given } from '@badeball/cypress-cucumber-preprocessor';

const shoppingCart = new ShoppingCart();

Given('I check that the products added to the shopping cart have a length of {int}', (productsInShoppingCart) => {
  shoppingCart.checkProductLengthInShoppingCart(productsInShoppingCart);
});

Given(
  'I check that {string} is the correct product name, has a correct price of {string}, correct quantity of {string} and has the {string} button',
  (productName, productPrice, quantity, shoppingButtonElement) => {
    shoppingCart.checkProductsInShoppingCart(productName, productPrice, quantity, shoppingButtonElement);
  }
);
Given(
  'I check that product name {string} is correct, has a correct price of {string} and correct quantity of {string} in the checkout summary',
  (productName, productPrice, quantity) => {
    shoppingCart.checkProductsInShoppingCart(productName, productPrice, quantity);
  }
);
