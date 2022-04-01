/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty - _03_MethodInterceptor_ModifyRequestURL',function(){

    
  it('Test case for modify the Request URL using Cypress',function(){
    
      cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
      //   cy.log('Application URL : '+cy.url())

      // It is work as Listener - 
      // If it gets this API call as request, then, it will give the response
      // as per our requirements (Customized response) 
      // cy.intercept({requestBody},{responseBody})
      cy.intercept(
        'GET',
        'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (request) => {
          //Instead of passing Shetty, we are passing malhotra to intercept 
          // shetty -> malhotra
          request.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

          request.continue((response) => {
              //Assertion for API response status code (For malhotra, it has to give 403 as a response status code)
              //Test will fail as this functionality is not yet implemented in the website
              //It will give 200 as response status code
              expect(response.statusCode).to.equal(403)
          })
      }).as("changedURL")
            
      // Using XPath to deal with Web Elements
      cy.xpath("//a[normalize-space()='Library']").click()

      // Wait until Cypress modify the Response body and give it to Browser
      cy.wait('@changedURL')

    })//if

})//describe