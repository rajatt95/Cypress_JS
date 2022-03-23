/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice',function(){
    
    it('My First Test case for navigating to some URL',function(){

        /** HOME PAGE - START*/

        //cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.visit(Cypress.env("application_URL")) 
        
        cy.log('Application URL : '+cy.url())
        console.log('Application URL : '+cy.url())

    })//it

})//describe