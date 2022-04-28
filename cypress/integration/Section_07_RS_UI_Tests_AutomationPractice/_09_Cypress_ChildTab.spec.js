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

describe('Section_07_RS_UI_Tests_AutomationPractice - Test Suite - Rahul Shetty Automation Practice _09_Cypress_ChildTab',function(){

    it('Test case for _09_Cypress_ChildTab',function(){

        //https://docs.cypress.io/api/events/catalog-of-events

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // 1. Get the web element which has ID - opentab] 
        // 2. Remove the attribute 'target' from DOM 
        // 3. Click on web element
        // Now, link will be opened in the same tab instead of new tab because we remove the attribute 'target'
        cy.get('#opentab').invoke('removeAttr','target').click()
        
        //removeAttr -> jQuery function
        //invoke() -> Cypress method
 
    })//it

})//describe