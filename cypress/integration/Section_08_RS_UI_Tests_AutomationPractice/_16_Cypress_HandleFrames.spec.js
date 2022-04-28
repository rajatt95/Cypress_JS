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

describe('Section_08_RS_UI_Tests_AutomationPractice - Test Suite - Rahul Shetty Automation Practice _16_Cypress_HandleFrames',function(){

    it('Test case for _16_Cypress_HandleFrames',function(){

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe')
 
        //a[href='#/mentorship'] -> Returns 3 elements
        cy.iframe().find("a[href='#/mentorship']").eq(0).click()

        cy.wait(3000)

        //Returns 2 elements -> Bronze and Platinum
        cy.iframe().find("h1[class='pricing-title text-white ls-1']").should('have.length',2)

    })//it

})//describe