/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice - _14_Cypress_EnvVariable_FromCypressJSON',function(){
    
    it('Test case for Environment Variable from cypress.json file',function(){

        /** HOME PAGE - START*/

        //cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.visit(Cypress.env("application_URL")) 
        
        cy.log('Application URL : '+cy.url())
        console.log('Application URL : '+cy.url())

    })//it

})//describe