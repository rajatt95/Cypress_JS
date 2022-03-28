
//Testing Framework - Mocha

describe('Test Suite - Rahul Shetty Green Kart - _03_Cypress_Type',function(){

    it('Test case for _03_Cypress_Type',function(){

        //Test One -> Steps
        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/seleniumPractise/");
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/')
        
        //Selenium WebDriver -> driver.findElement(By.cssSelector(".search-keyword")).sendKeys("ca");
        cy.get('.search-keyword').type('ca')
    })//if

})//describe