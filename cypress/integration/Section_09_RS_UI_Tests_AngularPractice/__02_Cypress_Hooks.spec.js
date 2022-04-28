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

describe('Section_09_RS_UI_Tests_AngularPractice - Test Suite - Rahul Shetty Automation Practice _22_Cypress_Hooks',function(){

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
    })//it

    it('Second Test case for _22_Cypress_Hooks',function(){
        cy.log('Application URL : '+cy.url())
    })//it

})//describe