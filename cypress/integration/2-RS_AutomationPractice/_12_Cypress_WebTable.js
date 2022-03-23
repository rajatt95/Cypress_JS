/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice',function(){

    it('My First Test case for navigating to some URL',function(){

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
    })//if
})//describe