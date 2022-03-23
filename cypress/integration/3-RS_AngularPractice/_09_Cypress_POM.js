/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'

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
        
        //Object creation of HomePage.js 
        const homePage = new HomePage()

         // cy.get(':nth-child(1) > .form-control').type('Rajat Verma')
         //cy.get(':nth-child(1) > .form-control').type(this.testData_AngularPractice.name)
         homePage.getTextBox_Name().type(this.testData_AngularPractice.name)

         // cy.get('select').select('Male')
         //cy.get('select').select(this.testData_AngularPractice.gender)
         homePage.getDropdown_Gender().select(this.testData_AngularPractice.gender)


    })//it

})//describe