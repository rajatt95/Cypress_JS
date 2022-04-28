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

describe('Section_11_RS_UI_Tests_AngularPractice - Test Suite - Rahul Shetty Automation Practice - _15_Cypress_AutoScreenshotOnFailure',function(){
    
    it('Test case for Screenshot On Failure',function(){

        /** HOME PAGE - START*/

        cy.visit('https://dummy12441w23232.com/')
        
        cy.log('Application URL : '+cy.url())
        console.log('Application URL : '+cy.url())

    })//it

})//describe