/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Test Suite - Rahul Shetty Automation Practice _22_Cypress_Hooks',function(){

    beforeEach(() => {
        // runs before each test in the block
        cy.log('beforeEach')
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

      })

    afterEach(() => {
        // runs after each test in the block
        cy.log('afterEach')
      })
    
    it('First Test case for _22_Cypress_Hooks',function(){
        cy.log('Application URL : '+cy.url())
    })//if

    it('Second Test case for _22_Cypress_Hooks',function(){
        cy.log('Application URL : '+cy.url())
    })//if

})//describe