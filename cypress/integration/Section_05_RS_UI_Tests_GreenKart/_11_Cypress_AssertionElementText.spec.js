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


//Testing Framework - Mocha

describe('Section_05_RS_UI_Tests_GreenKart - Test Suite - Rahul Shetty Green Kart - _11_Cypress_AssertionElementText',function(){

    it('Test case for _11_Cypress_AssertionElementText',function(){

        //Test One -> Steps
        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/seleniumPractise/");
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/')
        
        //Selenium WebDriver -> driver.findElement(By.cssSelector(".search-keyword")).sendKeys("ca");
        cy.get('.search-keyword').type('ca')

        //Java -> Thread.sleep(2000);
        cy.wait(2000)
 

        //Aliasing 
        cy.get('.products').as('productLocator')

        //cy.get('.products').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').should('have.length',4)

        //  cy.get('.products').find('.product').each(($el, index, $list) => {
          cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        // $el is a wrapped jQuery element
            const productName = $el.find('h4.product-name').text()
            if(productName.includes('Cashews')){
                cy.wrap($el).find('button').click() 
            }
          })

        //Here, we need to manually take care of Promises as steps are broken (not in single line) or taken care automatically
        //This is Non-Cypress code (Promises are n)
        // const logo=cy.get('div.brand')
        // logo.text()

        //text() is not a Cypress command
        cy.get('div.brand').then(function(elementLogo){
            //cy.log() -> This will add the details in Cypress steps (in the Test Runner information)
            cy.log("elementLogo.text(): "+elementLogo.text())
        })
 

        //Assertion for Element text
        cy.get('div.brand').should('have.text','GREENKART')


    })//it

})//describe