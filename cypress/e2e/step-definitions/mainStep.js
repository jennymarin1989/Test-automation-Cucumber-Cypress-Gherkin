import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../pages/mainPage';

const mainPage = new MainPage();

/**
Los pasos:
- 'the filter option is visible'
- 'the product container is visible'
No son necesarios puesto que los parámetros de la función checkElementVisibility los puedes pasar directamente en el paso en el test.
Voy a crear un step en CommonStep para que puedas comprobar la visibilidad de cualquier elemento.
Por lo que te recomendaría que los elimines , los voy a sustituir en el test
 */

/* 
Es una mejor pŕactica crear pasos genéricos y introducir valores de los elementos en el test, 
por lo que no es necesario tener la mayoría de los pasos que tienes aquí, voy a hacer una limpieza
*/

Given(
  'I check that the selected filter option has the value {string} and displays the text {string}',
  (optionValue, optionText) => {
    mainPage.checkFilterOptionSelected(optionValue, optionText);
  }
);

Given(
  'I check that the first product from the list is {string} and has a price of {string}',
  (productName, productPrice) => {
    mainPage.checkFirstProductNameAndPrice(productName, productPrice);
  }
);

Given(
  'I check that the last product from the list is {string} and has a price of {string}',
  (productName, productPrice) => {
    mainPage.checkLastProductNameAndPrice(productName, productPrice);
  }
);

Given(
  'I check that product name {string} is visible, has a price of {string} and has {string} button',
  (productName, productPrice, shoppingButtonElement) => {
    mainPage.checkProductItemDetails(productName, productPrice, shoppingButtonElement);
  }
);

When('I select the {string} option from the filter', (option) => {
  mainPage.selectFilterOption(option);
});

When(
  'I click on the product with position {int} of the list with the {string} {string}',
  (position, element, productName) => {
    mainPage.findProductItemByTextPositionAndClick(position, element, productName);
  }
);
