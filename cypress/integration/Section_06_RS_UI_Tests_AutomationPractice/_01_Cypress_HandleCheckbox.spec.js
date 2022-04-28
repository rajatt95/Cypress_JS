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

describe('Section_06_RS_UI_Tests_AutomationPractice - Test Suite - Rahul Shetty Automation Practice _01_Cypress_HandleCheckbox',function(){

    it('Test case for _01_Cypress_HandleCheckbox',function(){

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
       
    })//it


    it('Test case for _03_Cypress_Type - Intentionally Failing',function(){

        //Test One -> Steps
        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/seleniumPractise/");
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/')
        
        //Selenium WebDriver -> driver.findElement(By.cssSelector(".search-keyword")).sendKeys("ca");
        cy.get('.search-fake-locator').type('ca')
    
    })//it

})//describe