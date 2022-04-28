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
import HomePage from '../../support/pageObjects_AutomationPractice/HomePage';
import DeliveryLocationPage from '../../support/pageObjects_AutomationPractice/HomePage'

describe('Section_09_RS_UI_Tests_AngularPractice - Test Suite - Custom Cypress Commands - _01_Cypress_BasicOps',function(){
    
    it('Test case for basic operations using Cypress',function(){
        //cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.goToApplication_AutomationPractice();

        cy.log('Application URL : '+cy.url())
        
        const homePage = new HomePage()
        //cy.get(':nth-child(1) > .form-control').type('Rajat Verma')
       // cy.fillTextBox(homePage.getTextBox_SuggestionClass)
       homePage.getTextBox_SuggestionClass().type('India')
        cy.waitForSomeTime()

        //cy.get('select').select('Male')
        //cy.clickOnElement(homePage.getRadioButton_Radio1)
        
        cy.waitForGivenTime(3)

        //cy.clickOnElement(homePage.getDropdown_Example)

    })//it

})//describe