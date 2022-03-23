/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice',function(){
    
  before(() => {
    // runs once before all tests in the block
    //cy.fixture('03_RS-AngularPractice.json')
    cy.fixture('03_RS-AngularPractice').then(function(testData_AngularPractice){
        this.testData_AngularPractice = testData_AngularPractice;
    })//then
  })//before
 
    it('My First Test case for navigating to some URL',function(){
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

    })//if

})//describe