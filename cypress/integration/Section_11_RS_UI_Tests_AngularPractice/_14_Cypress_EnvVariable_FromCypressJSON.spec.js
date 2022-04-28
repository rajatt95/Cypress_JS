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

describe('Section_11_RS_UI_Tests_AngularPractice - Test Suite - Rahul Shetty Automation Practice - _14_Cypress_EnvVariable_FromCypressJSON',function(){
    
    it('Test case for Environment Variable from cypress.json file',function(){

        /** HOME PAGE - START*/

        //cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.visit(Cypress.env("application_URL")) 
        
        cy.log('Application URL : '+cy.url())
        console.log('Application URL : '+cy.url())

    })//it

})//describe