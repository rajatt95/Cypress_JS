// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//Syntax: selectProduct(productName) 
    // selectProduct -> Method name
    // productName -> Argument/Parameter
Cypress.Commands.add('selectProduct', (productName) => { 
    cy.get("h4[class='card-title']").each((el, index, $list) => {
        if(el.text().includes(productName)){
          //Clicking on the Add button present under productName
          cy.get('button.btn.btn-info').eq(index).click()
        }
    })

})


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
