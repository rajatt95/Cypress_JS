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

describe('Section_08_RS_UI_Tests_AutomationPractice - Test Suite - Rahul Shetty Automation Practice _15_Cypress_GrabAttributeValue',function(){

    it('Test case for _15_Cypress_GrabAttributeValue',function(){

        //https://docs.cypress.io/api/events/catalog-of-events

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Textbox -> Type to Select Countries  
        // cy.get('#autocomplete')
        //     .should('have.attr','id')
        //     .should('have.attr','placeholder')
        //     .should('have.attr','class')
        cy.get('#autocomplete').should('have.attr','id')
        cy.get('#autocomplete').should('have.attr','placeholder')
        cy.get('#autocomplete').should('have.attr','class')
    })//it

})//describe