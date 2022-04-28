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

describe('Section_06_RS_UI_Tests_AutomationPractice - Test Suite - Rahul Shetty Automation Practice _04_Cypress_HandleDropdownDynamic',function(){

    it('Test case for _04_Cypress_HandleDropdownDynamic',function(){

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

    })//it

})//describe