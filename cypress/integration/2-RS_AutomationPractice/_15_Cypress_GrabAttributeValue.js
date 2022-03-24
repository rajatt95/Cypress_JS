/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice _15_Cypress_GrabAttributeValue',function(){

    it('Test case for _15_Cypress_GrabAttributeValue',function(){

        //https://docs.cypress.io/api/events/catalog-of-events

        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // prop() -> jQuery method
        cy.get('#opentab').then(function(e1){
            //Getting the attribute 'href' value
            const attribute_href = e1.prop('href')
            cy.log("Attribute - href value is : "+attribute_href)
            cy.wait(2000)
            cy.visit(attribute_href)
        })
        
    })//if

})//describe