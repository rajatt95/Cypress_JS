/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice',function(){

    it('My First Test case for navigating to some URL',function(){

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //cy.contains('Top').click()
        cy.contains('Top').click({force : true})

        cy.wait(2000)

        //Assertion for Current URL
        cy.url().should('include','AutomationPractice/#top')

    })//if
})//describe