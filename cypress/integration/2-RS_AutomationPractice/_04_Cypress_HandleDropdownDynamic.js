/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice',function(){

    it('My First Test case for navigating to some URL',function(){

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Get the web element which has ID - autocomplete
        cy.get('fieldset #autocomplete').type('ind')
        cy.wait(2000)

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
                if($el.text() === 'India'){
                    cy.wrap($el).click()
                }
            })

        //Assertion -> Element should have value 'India'    
        cy.get('fieldset #autocomplete').should('have.value','India')

    })//if

})//describe