/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Test Suite - Rahul Shetty Automation Practice',function(){

    it('My First Test case for navigating to some URL',function(){

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe')
 
        //a[href='#/mentorship'] -> Returns 3 elements
        cy.iframe().find("a[href='#/mentorship']").eq(0).click()

        cy.wait(3000)

        //Returns 2 elements -> Bronze and Platinum
        cy.iframe().find("h1[class='pricing-title text-white ls-1']").should('have.length',2)

    })//if

})//describe