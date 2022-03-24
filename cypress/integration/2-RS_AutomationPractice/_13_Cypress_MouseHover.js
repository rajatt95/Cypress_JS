/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice _13_Cypress_MouseHover',function(){

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

    })//if
})//describe