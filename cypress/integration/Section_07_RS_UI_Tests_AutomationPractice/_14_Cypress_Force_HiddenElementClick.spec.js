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

describe('Section_07_RS_UI_Tests_AutomationPractice - Test Suite - Rahul Shetty Automation Practice _14_Cypress_Force_HiddenElementClick',function(){

    it('Test case for _14_Cypress_Force_HiddenElementClick',function(){

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //cy.contains('Top').click()
        cy.contains('Top').click({force : true})

        cy.wait(2000)

        //Assertion for Current URL
        cy.url().should('include','AutomationPractice/#top')

    })//it

})//describe