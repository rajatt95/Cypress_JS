/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice',function(){

    it('My First Test case for navigating to some URL',function(){

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

    })//if

})//describe