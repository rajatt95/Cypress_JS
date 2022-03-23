/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice',function(){
    
    it('My First Test case for navigating to some URL',function(){

        /** HOME PAGE - START*/

        //cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.visit('https://rahulshettyacademy.com/')
        
        cy.log('Application URL : '+cy.url())
        console.log('Application URL : '+cy.url())
        
        cy.get(':nth-child(1) > .form-control').type('Rajat Verma')
        cy.get('select').select('Male')

    })//it

})//describe