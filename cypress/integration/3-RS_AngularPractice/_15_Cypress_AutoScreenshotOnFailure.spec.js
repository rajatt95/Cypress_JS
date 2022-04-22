/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice - _15_Cypress_AutoScreenshotOnFailure',function(){
    
    it('Test case for Screenshot On Failure',function(){

        /** HOME PAGE - START*/

        cy.visit('https://dummy12441w23232.com/')
        
        cy.log('Application URL : '+cy.url())
        console.log('Application URL : '+cy.url())

    })//it

})//describe