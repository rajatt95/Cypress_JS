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
//import HomePage from '../../support/pageObjects_AngularPractice/HomePage'
import homePage from '../../support/pageObjects_AngularPractice/HomePage'

describe('Section_10_RS_UI_Tests_AngularPractice - Test Suite - Rahul Shetty Automation Practice - _09_Cypress_POM',function(){
    
  before(() => {
    // runs once before all tests in the block
    //cy.fixture('03_RS-AngularPractice.json')
    cy.fixture('03_RS-AngularPractice').then(function(testData_AngularPractice){
        this.testData_AngularPractice = testData_AngularPractice;
    })//then
  })//before
 
    it('Test case for Design pattern - Page Object Model',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.log('Application URL : '+cy.url())
        
        //Object creation of HomePage.js 
        //const homePage = new HomePage()

        // cy.get(':nth-child(1) > .form-control').type('Rajat Verma')
        //cy.get(':nth-child(1) > .form-control').type(this.testData_AngularPractice.name)
        //homePage.getTextBox_Name.type(this.testData_AngularPractice.name)
        homePage.enterName(this.testData_AngularPractice.name)

        // cy.get('select').select('Male')
        //cy.get('select').select(this.testData_AngularPractice.gender)
        //homePage.getDropdown_Gender.select(this.testData_AngularPractice.gender)
        homePage.selectGender(this.testData_AngularPractice.gender)


    })//it

})//describe