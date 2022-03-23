/// <reference types="Cypress" />
import DeliveryLocationPage from '../../support/pageObjects/DeliveryLocationPage'
import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage'
import ProductsSummaryPage from '../../support/pageObjects/ProductsSummaryPage'



describe('Test Suite - Rahul Shetty Automation Practice',function(){
    
  before(() => {
    // runs once before all tests in the block
    cy.fixture('03_RS-AngularPractice').then(function(testData_AngularPractice){
        this.testData_AngularPractice = testData_AngularPractice;
    })//then
  })//before
 
    it('My First Test case for navigating to some URL',function(){

        /** HOME PAGE - START*/

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

        homePage.getLinkShop().click()        

        // this.testData_AngularPractice.productName = "productName":["iphone X","Samsung Note 8","Nokia Edge","Blackberry"]
        this.testData_AngularPractice.productName.forEach(function(element){
            cy.selectProduct(element)
        });

        /** HOME PAGE - END*/

        /** PRODUCTS PAGE - START*/
        const productsPage = new ProductsPage()

        productsPage.getLinkCheckout().click()

        /** PRODUCTS PAGE - END*/

        /** PRODUCTS PAGE - START*/
        const productsSummaryPage = new ProductsSummaryPage()
        productsSummaryPage.getButtonCheckout().click()

        /** PRODUCTS PAGE - END*/


        /** DELIVERY LOCATION PAGE - START*/
        const deliveryLocationPage = new DeliveryLocationPage()
        deliveryLocationPage.getTextbox_Location().type('India')
        deliveryLocationPage.getDropdown_Location().click()
        deliveryLocationPage.getCheckbox_Agree().click()
        deliveryLocationPage.getButton_Purchase().click()

        //deliveryLocationPage.getMessage_Success().should('should.have','Success!')
        deliveryLocationPage.getMessage_Success().should('include.text','Success!')

        /** DELIVERY LOCATION PAGE - END*/


    })//it

})//describe