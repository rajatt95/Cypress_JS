/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/
* 
* Course: Cypress -Modern Automation Testing from Scratch + Frameworks(https://www.udemy.com/course/cypress-tutorial/)
* Tutor: Rahul Shetty (https://www.udemy.com/user/rahul445/)
*/

/***************************************************/

/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Section_09_RS_UI_Tests_AngularPractice - Test Suite - Rahul Shetty Automation Practice _21_Cypress_Hooks',function(){

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
    })//it

    it('My Second Test case for navigating to some URL',function(){
        cy.log('Application URL : '+cy.url())
    })//it

})//describe