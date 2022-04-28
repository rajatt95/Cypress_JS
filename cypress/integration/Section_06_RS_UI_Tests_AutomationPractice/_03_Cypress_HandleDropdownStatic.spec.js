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

describe('Section_06_RS_UI_Tests_AutomationPractice - Test Suite - Rahul Shetty Automation Practice _03_Cypress_HandleDropdownStatic',function(){

    it('Test case for _03_Cypress_HandleDropdownStatic',function(){

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Get the web element which has ID - dropdown-class-example
        //Select the value using 'value' attribute
        //Assertion -> Dropdown should have sleected value
        //<option value="option1">Option2</option> 
        cy.get('select#dropdown-class-example').select('option2').should('have.value','option2') //using value attribute

        cy.wait(2000)

        //<option value="option1">Option1</option>
        //should('have.value','option1') -> option1 is value attribute
        cy.get('select#dropdown-class-example').select('Option1').should('have.value','option1') // using text

    })//it

})//describe