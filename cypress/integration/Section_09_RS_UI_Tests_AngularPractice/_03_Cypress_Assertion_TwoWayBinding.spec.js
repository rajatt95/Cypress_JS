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

describe('Section_09_RS_UI_Tests_AngularPractice - Test Suite - Rahul Shetty Automation Practice - _03_Cypress_Assertion_TwoWayBinding' ,function(){

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

    
    it('Test case for Assertion Two-Way Binding',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.log('Application URL : '+cy.url())
        
        // cy.get(':nth-child(1) > .form-control').type('Rajat Verma')
        cy.get(':nth-child(1) > .form-control').type(this.testData_AngularPractice.name)

        // cy.get('select').select('Male')
        cy.get('select').select(this.testData_AngularPractice.gender)

        //Assertion for Two-way Data Binding
        cy.get(':nth-child(4) > .ng-pristine').should('have.value',this.testData_AngularPractice.name)

        // We can grab Attribute value using prop() method as well. In that case, we have to manually handle the promise then


    })//it

    afterEach(() => {
      // runs after each test in the block
    })
  
    after(() => {
      // runs once after all tests in the block
    })
  
})//describe