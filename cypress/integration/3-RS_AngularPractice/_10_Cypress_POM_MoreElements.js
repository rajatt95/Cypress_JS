/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects_AngularPractice/HomePage'


describe('Test Suite - Rahul Shetty Automation Practice - _10_Cypress_POM_MoreElements',function(){
    
  before(() => {
    // runs once before all tests in the block
    cy.fixture('03_RS-AngularPractice').then(function(testData_AngularPractice){
        this.testData_AngularPractice = testData_AngularPractice;
    })//then
  })//before
 
  it('Test case for Design pattern - Page Object Model - more Elements',function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.log('Application URL : '+cy.url())
        
        //Object creation of HomePage.js 
        const homePage = new HomePage()

        homePage.getTextBox_Name().type(this.testData_AngularPractice.name)
        homePage.getDropdown_Gender().select(this.testData_AngularPractice.gender)

        //Assertion for Two-way Data Binding
        homePage.getTextBox_TwoWayDataBiniding().should('have.value',this.testData_AngularPractice.name)

        // Assertion for Custom Attribute(minlength)
        // Expected value is 2
        //<input class="form-control ng-pristine ng-invalid ng-touched" minlength="2" name="name" required="" type="text" xpath="1">
        homePage.getTextBox_Name().should('have.attr','minlength',2)
        homePage.getTextBox_Name().should('have.attr','class','form-control ng-dirty ng-valid ng-touched')
        homePage.getTextBox_Name().should('have.attr','type','text')

        //Assertion for Radio button(Entrepreneur) disabled
        homePage.getRadioButton_Entrepreneur().should('be.disabled')

    })//it

})//describe