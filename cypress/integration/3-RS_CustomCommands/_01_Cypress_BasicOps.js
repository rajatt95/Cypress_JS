/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects_AutomationPractice/HomePage';
import DeliveryLocationPage from '../../support/pageObjects_AutomationPractice/HomePage'

describe('Test Suite - Custom Cypress Commands - _01_Cypress_BasicOps',function(){
    
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

    })//if

})//describe