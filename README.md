# Test automation with Cypress, Cucumber, Gherkin and CI/CD integration

<div align="center">

![Screenshot 2024-11-06 at 00 10 45](https://github.com/user-attachments/assets/09864d57-bfc6-4ce6-bb90-3a1250ecc21b)

</div>

<div align="center">

![Screenshot 2024-11-06 at 00 10 45](https://github.com/user-attachments/assets/304de15f-f7c4-4190-afa0-4843f889c2b0)

</div>

## Approach

The main goal of this project is to practice the implementation of Behaviour Driven Development on test automation using tools like Cypress, Cucumber and Gherkin. This approach will allow me to write test specifications in a human-redable way, utilising 'Gherkin' syntax and allowing 'Cucumber' to read those specifications and validate the software functionality. In this case, automated tests were created to review the functionality of main fetures in [Saucedemo website](https://www.saucedemo.com/).

Features to test:

- Log in
- Main products page
- Product detail
- Shopping cart
- Checkout

The implementation of CI/CD was included too, utilising tools like Github Actions, enabling to set up automated workflows to build, test, and deploy code when specific events occur in GitHub repository. Tags were added to run @smoke tests, @regression and @åfeature tests when pushing a code update in Github

## Smoke Testing Job result

<div align="center">

![Screenshot 2024-11-06 at 00 10 45](https://github.com/user-attachments/assets/44934509-5d7e-4c01-8dc8-e9391d37ffc8)

</div>

## Smoke Testing report using Mochawesome

<div align="center">

![Screenshot 2024-11-06 at 00 10 45](https://github.com/user-attachments/assets/e9ebb58c-b944-42b5-a89b-0b9054e5e8d3)

</div>

## Installing

- **Note that you should have installed NodeJS ^18.18.0 to proceed with steps below**

- Clone the project to your local directory

- `$git clone https://github.com/jennymarin1989/automationWithCucumberAndGherkin.git`

- `$cd automationWithCucumberAndGherkin`

- `$npm install`

- `$cy:open` (to run cypress in browser window)

- `$cy:run` (to run cypress headless in terminal)

## Technologies:

- NodeJS ^18.18.0

- cypress ^13.15.0

- cypress-cucumber ^20.0.5

- Gherkin syntax

- cypress-mochawesome-reporter ^3.8.2

## Author

Jenny Arenas
