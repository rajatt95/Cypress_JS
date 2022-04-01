/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty - _05_Cypress_API_Testing',function(){


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