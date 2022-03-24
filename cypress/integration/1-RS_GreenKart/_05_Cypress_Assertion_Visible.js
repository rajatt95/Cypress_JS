
//Testing Framework - Mocha

describe('Test Suite - Rahul Shetty Green Kart - _05_Cypress_Assertion_Visible',function(){

    it('Test case for _05_Cypress_Assertion_Visible',function(){

        //Test One -> Steps
        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/seleniumPractise/");
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/')
        
        //Selenium WebDriver -> driver.findElement(By.cssSelector(".search-keyword")).sendKeys("ca");
        cy.get('.search-keyword').type('ca')

        //Java -> Thread.sleep(2000);
        cy.wait(2000)
 
        //cy.get('.product') -> it is giving the count as 5 (4-visible , 1-invisible)
        //cy.get('.product').should('have.length',4)
    
        //cy.get('.product:visible') -> This will only give visible elements
        cy.get('.product:visible').should('have.length',4)
    })//if

})//describe