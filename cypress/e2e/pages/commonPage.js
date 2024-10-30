export class CommonPage{
   
    visitLink(url) {
        cy.visit(url);
     }

     checkUrlContent(url,checkUrlContent) {
        cy.visit(url).should(checkUrlContent, url);
     }
    }