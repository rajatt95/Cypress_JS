
//Testing Framework - Mocha

describe('Test Suite - Rahul Shetty Green Kart - _02_Cypress_Visit',function(){

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('Test case for _02_Cypress_Visit',function(){

        //Test One -> Steps
        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/seleniumPractise/");
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/')
    })//if

})//describe