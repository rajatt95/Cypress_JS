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

describe('Section_07_RS_UI_Tests_AutomationPractice - Test Suite - Rahul Shetty Automation Practice _12_Cypress_WebTable',function(){

    it('Test case for _12_Cypress_WebTable',function(){

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const courseNames = $el.text()
            //cy.log(courseNames)
            if(courseNames.includes('JMETER')){
                cy.log('Course name: '+courseNames)
               
                // Get the text of following-sibling
                // Handle the Promise manually as it is not a Cypress command (using then() method)
                cy.get('tr td:nth-child(2)').eq(index).next().then(
                    function(price){
                        const coursePrice = price.text()
                        cy.log('Course price: '+coursePrice)
                        //Assertion for Course price
                        expect(coursePrice).to.equal('25')
                    }
                )
            }
            
        })
    
    })//it

})//describe