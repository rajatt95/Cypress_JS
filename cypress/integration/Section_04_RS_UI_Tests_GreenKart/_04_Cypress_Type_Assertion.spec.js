
//Testing Framework - Mocha

describe('Test Suite - Rahul Shetty Green Kart - _04_Cypress_Type_Assertion',function(){

    it('Test case for _04_Cypress_Type_Assertion',function(){

        //Test One -> Steps
        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/seleniumPractise/");
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/')
        
        //Selenium WebDriver -> driver.findElement(By.cssSelector(".search-keyword")).sendKeys("ca");
        cy.get('.search-keyword').type('ca')

        //Java -> Thread.sleep(2000);
        cy.wait(2000)
 
        cy.get('.product').should('have.length',4)
    })//if

})//describe