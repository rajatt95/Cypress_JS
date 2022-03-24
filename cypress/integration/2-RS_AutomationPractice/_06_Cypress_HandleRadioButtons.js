/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice _06_Cypress_HandleRadioButtons',function(){

    it('Test case for _06_Cypress_HandleRadioButtons',function(){

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Get the web element which has CSS Selector - input.radioButton[value='radio1']
        //Multiple Assertions -> 
            // Radio button should be clicked 
            // Element should have an attribute (value=radio1) 
        //<input value="radio1" name="radioButton" class="radioButton" type="radio">
        cy.get("input.radioButton[value='radio1']").check().should('be.checked').and('have.value','radio1')
                   
        cy.get("input.radioButton[value='radio2']").check().should('be.checked').and('have.value','radio2')

        cy.get("input.radioButton[value='radio3']").check().should('be.checked').and('have.value','radio3')

    })//if

})//describe