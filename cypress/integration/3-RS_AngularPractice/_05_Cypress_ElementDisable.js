/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice - _05_Cypress_ElementDisable',function(){

  before(() => {
    // runs once before all tests in the block
    //cy.fixture('03_RS-AngularPractice.json')
    cy.fixture('03_RS-AngularPractice').then(function(testData_AngularPractice){
        this.testData_AngularPractice = testData_AngularPractice;
    })//then
  })//before
 
  beforeEach(() => {
    // runs before each test in the block
  })

    
    it('Test case for handling Element Disable',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.log('Application URL : '+cy.url())
        
        // cy.get(':nth-child(1) > .form-control').type('Rajat Verma')
        cy.get(':nth-child(1) > .form-control').type(this.testData_AngularPractice.name)

        // cy.get('select').select('Male')
        cy.get('select').select(this.testData_AngularPractice.gender)

        //Assertion for Two-way Data Binding
        cy.get(':nth-child(4) > .ng-pristine').should('have.value',this.testData_AngularPractice.name)

        // Assertion for Custom Attribute(minlength)
        // Expected value is 2
        //<input class="form-control ng-pristine ng-invalid ng-touched" minlength="2" name="name" required="" type="text" xpath="1">
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength',2)
        cy.get(':nth-child(1) > .form-control').should('have.attr','class','form-control ng-dirty ng-valid ng-touched')
        cy.get(':nth-child(1) > .form-control').should('have.attr','type','text')

        //Assertion for Radio button(Entrepreneur) disabled
        cy.get('#inlineRadio3').should('be.disabled')
        
        // We can grab Attribute value using prop() method as well. In that case, we have to manually handle the promise then

      })//if

    afterEach(() => {
      // runs after each test in the block
    })
  
    after(() => {
      // runs once after all tests in the block
    })
  
})//describe