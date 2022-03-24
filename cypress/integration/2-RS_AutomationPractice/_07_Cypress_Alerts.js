/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice _07_Cypress_Alerts',function(){

    it('Test case for _07_Cypress_Alerts',function(){

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Get the web element which has ID - alertbtn]
        cy.get('#alertbtn').click()

        cy.wait(2000)
        
        //Get the web element which has ID - confirmbtn]
        cy.get('#confirmbtn').click()

    })//if

})//describe