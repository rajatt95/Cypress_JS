/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice _02_Cypress_HandleCheckboxes',function(){

    it('Test case for _02_Cypress_HandleCheckboxes',function(){

        //Test One -> Steps
        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Steps
        //Get the web element which has ID - checkBoxOption1
        //Check/Enable the checkbox
        //Multiple Assertions -> 
            // Checkbox should be checked/enabled
            // Element should have an attribute (value=option1) 
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        
        //Assertion -> Checkbox should be unchecked
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
       
        //<input id="checkBoxOption1" value="option2" name="checkBoxOption1" type="checkbox">
        cy.get("input[type='checkbox']").check(['option2','option3'])

        cy.get('#checkBoxOption2').check().should('be.checked')
        cy.get('#checkBoxOption3').check().should('be.checked')


    })//if

})//describe