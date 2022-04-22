/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice _05_Cypress_AssertVisibleAndInvisible',function(){

    it('Test case for _05_Cypress_AssertVisibleAndInvisible',function(){

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Get the web element which has ID - displayed-text
        //Assertion -> Element should visible 
        cy.get('#displayed-text').should('be.visible')
        cy.wait(1000)

        cy.get('#hide-textbox').click()
        cy.wait(1000)
        //Assertion -> Element should not be visible 
        cy.get('#displayed-text').should('not.be.visible')

        cy.get('#show-textbox').click()
        cy.wait(1000)
        //Assertion -> Element should be visible 
        cy.get('#displayed-text').should('be.visible')

        

    })//if

})//describe