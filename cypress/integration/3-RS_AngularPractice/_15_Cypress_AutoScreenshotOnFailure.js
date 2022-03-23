/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice',function(){
    
    it('My First Test case for navigating to some URL',function(){

        /** HOME PAGE - START*/

        cy.visit('https://dummy12441w23232.com/')
        
        cy.log('Application URL : '+cy.url())
        console.log('Application URL : '+cy.url())

    })//it

})//describe