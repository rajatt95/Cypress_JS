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

describe('Section_15_RS_UI_Tests_AngularPractice - Test Suite - Rahul Shetty - _01_MethodInterceptor_ModifyResponseBody',function(){

    
    it('Test case for modify the Response Body using Cypress',function(){
    
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
      cy.wait('@getSingleBook')

      // Using CSS Selector to deal with Web Elements
      cy.get('p').should('have.text','Oops only 1 Book available')
      
    })//it

})//describe