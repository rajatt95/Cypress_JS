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

describe('Section_07_RS_UI_Tests_AutomationPractice - Test Suite - Rahul Shetty Automation Practice _08_Cypress_Alerts_BrowserEvents',function(){

    it('Test case for _08_Cypress_Alerts_BrowserEvents',function(){

        //https://docs.cypress.io/api/events/catalog-of-events

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Get the web element which has ID - alertbtn]
        cy.get('#alertbtn').click()

        //on() -> Method to trigger an event -> We are firing 'window:alert' alert to the Browser -> 
        //Automatically, Alert will be opened
        cy.on('window:alert',(str) => {
            //Two Strings comparison using Mocha framework
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //Get the web element which has ID - confirmbtn]
        cy.get('#confirmbtn').click()

        //on() -> Method to trigger an event -> We are firing 'window:confirm' alert to the Browser -> 
        //Automatically, Alert will be opened
        cy.on('window:confirm',(str) => {
            //Two Strings comparison using Mocha framework
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })


    })//it

})//describe