/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice - _01_Cypress_BasicOps',function(){

  before(() => {
    // runs once before all tests in the block
  })

  beforeEach(() => {
    // runs before each test in the block
  })

  afterEach(() => {
    // runs after each test in the block
  })

  after(() => {
    // runs once after all tests in the block
  })
    
    it('Test case for basic operations using Cypress',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.log('Application URL : '+cy.url())
        
        cy.get(':nth-child(1) > .form-control').type('Rajat Verma')
        cy.get('select').select('Male')

    })//if

})//describe