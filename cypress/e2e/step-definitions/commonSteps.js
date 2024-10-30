import { Given } from '@badeball/cypress-cucumber-preprocessor'

// Clases importadas
import { CommonPage } from '../pages/commonPage'

//Instancias de clase
let commonPage = new CommonPage()

//puede ser given, then, when, da igual el orden-- siempre lo importante es lo q hay dentrode la funcion importante
//si tengo otra string que quiero pasar tb como parametro {string} {string} el orden es importante a la hora de pasar los parametros de la funcion si paso en orden contrario fallar'a el test
Given('I visit {string}', (checkUrl, url) => {
  commonPage.visitLink(checkUrl, url)
})

Given('I check the url {string} contains {string}', (url, checkUrl) => {
  commonPage.visitLink(url, checkUrl)
})

// importante q sea tipo integer en este casso ya q lo valida
// Given("the list have {int} elements", (elementNumber) => {
//     mainPage.listElementNumber(elementNumber);
// });

//nunca tener 2 steps que se llamen igual/ cypress no sabra cual utilizar y fallara
