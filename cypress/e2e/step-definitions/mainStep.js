import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../pages/mainPage';

const mainPage = new MainPage();

Given('the filter option is visible', () => {
  mainPage.checkElementVisibility('product-sort-container');
});

Given('the product container is visible', () => {
  mainPage.checkElementVisibility('inventory-list');
});

Given('the filter option A-Z is the selected by default in the filter funnel', () => {
  mainPage.checkFilterOptionSelected('az', 'Name (A to Z)');
});

Given('I check that the first product from the list is "Sauce Labs Backpack" and has a price of "29.99"', () => {
  mainPage.checkFirstProductNameAndPrice('Sauce Labs Backpack', '29.99');
});

Given('I check that the last product from the list is "Test.allTheThings" and has a price of "15.99"', () => {
  mainPage.checkLastProductNameAndPrice('Test.allTheThings() T-Shirt (Red)', '15.99');
});

When('I select the option "Price (low to high)"', () => {
  mainPage.selectFilterOption('lohi');
});

Given('I check that the "Price (low to high)" option was successfully updated', () => {
  mainPage.checkFilterOptionSelected('lohi', 'Price (low to high)');
});

Given('I check that the first product from the list is "Sauce Labs Onesie" and has a price of "7.99"', () => {
  mainPage.checkFirstProductNameAndPrice('Sauce Labs Onesie', '7.99');
});

Given('I check that the last product from the list is "Sauce Labs Fleece Jacket" and has a price of "49.99"', () => {
  mainPage.checkLastProductNameAndPrice('Sauce Labs Fleece Jacket', '49.99');
});

When('I select the option "Price (high to low)"', () => {
  mainPage.selectFilterOption('hilo');
});

Given('I check that the "Price (high to low)" option was successfully updated', () => {
  mainPage.checkFilterOptionSelected('hilo', 'Price (high to low)');
});

Given('I check that the first product from the list is "Sauce Labs Fleece Jacket" and has a price of "49.99"', () => {
  mainPage.checkFirstProductNameAndPrice('Sauce Labs Fleece Jacket', '49.99');
});

Given('I check that the last product from the list is "Sauce Labs Onesie" and has a price of "7.99"', () => {
  mainPage.checkLastProductNameAndPrice('Sauce Labs Onesie', '7.99');
});
