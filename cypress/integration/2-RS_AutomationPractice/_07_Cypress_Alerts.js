/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice',function(){

    it('My First Test case for navigating to some URL',function(){

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Get the web element which has ID - alertbtn]
        cy.get('#alertbtn').click()

        cy.wait(2000)
        
        //Get the web element which has ID - confirmbtn]
        cy.get('#confirmbtn').click()

    })//if

})//describe