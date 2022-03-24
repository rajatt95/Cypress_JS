/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice - _16_Cypress_RetryFailedTest',function(){
    
    it('Test case for Retry Failed Tests',function(){

        /** HOME PAGE - START*/

        //cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.visit('https://rahulshettyacademy.com/')
        
        cy.log('Application URL : '+cy.url())
        console.log('Application URL : '+cy.url())
        
        cy.get(':nth-child(1) > .form-control').type('Rajat Verma')
        cy.get('select').select('Male')

        
    })//it

})//describe