/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Test Suite - Rahul Shetty Automation Practice _21_Cypress_Hooks',function(){

    beforeEach(() => {
        // runs before each test in the block
        cy.log('beforeEach')
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      })

    afterEach(() => {
        // runs after each test in the block
        cy.log('afterEach')
      })
    
    it('Test case for _21_Cypress_Hooks',function(){
        cy.log('Application URL : '+cy.url())
    })//if

    it('My Second Test case for navigating to some URL',function(){
        cy.log('Application URL : '+cy.url())
    })//if

})//describe