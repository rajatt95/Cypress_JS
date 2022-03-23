/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Test Suite - Rahul Shetty Automation Practice',function(){

    beforeEach(() => {
        // runs before each test in the block
        cy.log('beforeEach')
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      })

    afterEach(() => {
        // runs after each test in the block
        cy.log('afterEach')
      })
    
    it('My First Test case for navigating to some URL',function(){
        cy.log('Application URL : '+cy.url())
    })//if

    it('My Second Test case for navigating to some URL',function(){
        cy.log('Application URL : '+cy.url())
    })//if

})//describe