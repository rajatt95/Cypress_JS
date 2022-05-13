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

describe('Section_10_RS_UI_Tests_AngularPractice - Test Suite - Rahul Shetty Automation Practice - _07_Cypress_ParameterizedTest',function(){
    
  before(() => {
    // runs once before all tests in the block
    //cy.fixture('03_RS-AngularPractice.json')
    cy.fixture('03_RS-AngularPractice').then(function(testData_AngularPractice){
        this.testData_AngularPractice = testData_AngularPractice;
    })//then
  })//before
 
    it('Test case for Parameterize Test',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.log('Application URL : '+cy.url())
        
        cy.get(':nth-child(2) > .nav-link').click()

      //Custom Cypress Command
      // cy.selectProduct('iphone X')
      // cy.selectProduct('Samsung Note 8')
      // cy.selectProduct('Nokia Edge')
      // cy.selectProduct('Blackberry')

      // this.testData_AngularPractice.productName = "productName":["iphone X","Samsung Note 8","Nokia Edge","Blackberry"]
      this.testData_AngularPractice.productName.forEach(function(element){
        cy.selectProduct(element)
      });


      // Assertion for Checkout count
      cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').should('include.text',' Checkout ( 4 )')

    })//it

})//describe