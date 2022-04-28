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

describe('Section_07_RS_UI_Tests_AutomationPractice - Test Suite - Rahul Shetty Automation Practice _13_Cypress_MouseHover',function(){

    it('Test case for _13_Cypress_MouseHover',function(){

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // 1. Get the web element which has ID - mousehover] 
        // invoke() -> Cypress method
        // Not working -> Because element having ID 'mousehover' is not an parent of options 'Top' and 'Reload'
        // cy.get('#mousehover').invoke('show') 

        cy.get('.mouse-hover-content').invoke('show')

        cy.wait(2000)

        cy.contains('Top').click()

        cy.wait(2000)

        //Assertion for Current URL
        cy.url().should('include','AutomationPractice/#top')

    })//it

})//describe