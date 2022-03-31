/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty - _02_MethodInterceptor_ModifyResponseBody_AssertRowsWithArrayInResponse',function(){

    
    it('Test case for Assertion of Rows With Array In Response ',function(){
    
      cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
      //   cy.log('Application URL : '+cy.url())

      // It is work as Listener - 
      // If it gets thois API call as request, then, it will give the response
      // as per our requirements (Customized response) 
      // cy.intercept({requestBody},{responseBody})
      cy.intercept({
        method:'GET',
        url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
      },
      {
        statusCode:200,
        //Customized Response
        body:[
          {
            "book_name":"RestAssured with Java",
            "isbn":"RSU",
            "aisle":"2301"
          }
        ]
      }).as('getSingleBook')
            
      // Using XPath to deal with Web Elements
      cy.xpath("//a[normalize-space()='Library']").click()

      // Wait until Cypress modify the Response body and give it to Browser
      cy.wait('@getSingleBook').should(({request,response})=>
      {
          cy.get('tr').should('have.length',response.body.length+1)
      })


      // Using CSS Selector to deal with Web Elements
      cy.get('p').should('have.text','Oops only 1 Book available')
      
    })//if

})//describe