/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice _14_Cypress_Force_HiddenElementClick',function(){

    it('Test case for _14_Cypress_Force_HiddenElementClick',function(){

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //cy.contains('Top').click()
        cy.contains('Top').click({force : true})

        cy.wait(2000)

        //Assertion for Current URL
        cy.url().should('include','AutomationPractice/#top')

    })//if
})//describe