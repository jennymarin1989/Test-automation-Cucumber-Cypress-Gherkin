import 'cypress-mochawesome-reporter/cucumberSupport';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { CommonPage } from '../pages/commonPage';

let commonPage = new CommonPage();

//si tengo otra string que quiero pasar tb como parametro {string} {string} el orden es importante a la hora de pasar los parametros de la funcion si paso en orden contrario fallar'a el test
Given('I visit {string}', (url) => {
  commonPage.visitLink(url);
});

Given('I check that url {string} the endpoint {string}', (checkUrl, url) => {
  commonPage.checkUrlContent(checkUrl, url);
});

When('I type in the input {string} the value {string}', (inputElement, inputValue) => {
  commonPage.setInputValue(inputElement, inputValue);
});

Then('I check that value in input {string} should be {string}', (inputElement, inputValue) => {
  commonPage.checkInputValue(inputElement, inputValue);
});

Given('I click on the {string} button', (buttonElement) => {
  commonPage.clickOnButton(buttonElement);
});

Then('I can see a {string} message with text: {string}', (typeOfMessage, textMessage) => {
  commonPage.getAMessage(typeOfMessage, textMessage);
});

Then('I can see the {string} message dissapear', (typeOfMessage) => {
  commonPage.isMessageDisplayed(typeOfMessage);
});

Then('I check that the element {string} should {string}', (elementDataTest, elementVisibility) => {
  commonPage.checkElementVisibility(elementDataTest, elementVisibility);
});

// importante q sea tipo integer en este caso ya q lo valida
// Given("the list have {int} elements", (elementNumber) => {
//     mainPage.listElementNumber(elementNumber);
// });

//nunca tener 2 steps que se llamen igual/ cypress no sabra cual utilizar y fallara
