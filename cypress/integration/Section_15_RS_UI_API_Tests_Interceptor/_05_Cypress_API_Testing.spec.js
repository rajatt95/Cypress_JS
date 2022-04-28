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

describe('Section_15_RS_UI_Tests_AngularPractice - Test Suite - Rahul Shetty - _05_Cypress_API_Testing',function(){


  //https://docs.cypress.io/api/commands/request#Assertions
  it('Test case for API_Testing using Cypress',function(){

      cy.
      request(
        // Request method type
        'POST',
        // Request URL
        'https://rahulshettyacademy.com/Library/Addbook.php',
        // Request body
        {
          "name":"Learn Automation testing using Cypress",
          "isbn":"abcd",
          "aisle":"25441",
          "author":"John Deer"
        }).then(function(response){
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
      })

  })//it

})//describe