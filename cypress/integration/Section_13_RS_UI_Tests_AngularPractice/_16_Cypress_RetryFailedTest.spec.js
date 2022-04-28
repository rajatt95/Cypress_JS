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

describe('Section_13_RS_UI_Tests_AngularPractice - Test Suite - Rahul Shetty Automation Practice - _16_Cypress_RetryFailedTest',function(){
    
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