
//Testing Framework - Mocha

describe('Test Suite - Rahul Shetty Green Kart - _09_Cypress_PromiseHandl_ElementText',function(){

    it('Test case for _09_Cypress_PromiseHandl_ElementText',function(){

        //Test One -> Steps
        //Selenium WebDriver -> driver.get("https://rahulshettyacademy.com/seleniumPractise/");
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/')
        
        //Selenium WebDriver -> driver.findElement(By.cssSelector(".search-keyword")).sendKeys("ca");
        cy.get('.search-keyword').type('ca')

        //Java -> Thread.sleep(2000);
        cy.wait(2000)
 
        //Scope is limited now
        //Now, Cypress will only try to find the webelements inside the element which has class 'products'
        // cy.get('.products').find('.product') - >This will return an Array of 4 elements
        cy.get('.products').find('.product').should('have.length',4)

        //Out of 4 elements -> Go to 2nd element which has text 'ADD TO CART' and perform click operation on it.
        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {
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
            //cy.log() -> This will add the details in Cypress steps
            cy.log("elementLogo.text(): "+elementLogo.text())
        })
 

    })//if

})//describe