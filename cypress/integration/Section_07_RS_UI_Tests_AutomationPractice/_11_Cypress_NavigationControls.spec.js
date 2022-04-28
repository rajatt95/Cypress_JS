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

describe('Section_07_RS_UI_Tests_AutomationPractice - Test Suite - Rahul Shetty Automation Practice _11_Cypress_NavigationControls',function(){

    it('Test case for _11_Cypress_NavigationControls',function(){

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('body > header:nth-child(1) > div:nth-child(3) > a:nth-child(1) > button:nth-child(1)').click()
  
        cy.wait(3000)

        cy.url().should('include','https://www.rahulshettyacademy.com/#/index')

        cy.go('back')

        cy.url().should('include','https://rahulshettyacademy.com/AutomationPractice/')

        cy.wait(3000)

        cy.go('forward')

        cy.wait(3000)

    })//it

})//describe