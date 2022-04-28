/// <reference types="Cypress" />
import deliveryLocationPage from '../../support/pageObjects_AngularPractice/DeliveryLocationPage'
import homePage from '../../support/pageObjects_AngularPractice/HomePage'
import productsPage from '../../support/pageObjects_AngularPractice/ProductsPage'
import productsSummaryPage from '../../support/pageObjects_AngularPractice/ProductsSummaryPage'



describe('Test Suite - Rahul Shetty Automation Practice - _11_Cypress_POM_Flow',function(){
    
  before(() => {
    // runs once before all tests in the block
    cy.fixture('03_RS-AngularPractice').then(function(testData_AngularPractice){
        this.testData_AngularPractice = testData_AngularPractice;
    })//then
  })//before
 
    it('Test case for complete Flow',function(){

        /** HOME PAGE - START*/

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.log('Application URL : '+cy.url())
        
        //Object creation of HomePage.js 
        //const homePage = new HomePage()

        homePage.enterName(this.testData_AngularPractice.name)
        homePage.selectGender(this.testData_AngularPractice.gender)

        //Assertion for Two-way Data Binding
        homePage.elements.textBox_TwoWayDataBiniding().should('have.value',this.testData_AngularPractice.name)

        // Assertion for Custom Attribute(minlength)
        // Expected value is 2
        //<input class="form-control ng-pristine ng-invalid ng-touched" minlength="2" name="name" required="" type="text" xpath="1">
        homePage.elements.textBox_Name().should('have.attr','minlength',2)
        homePage.elements.textBox_Name().should('have.attr','class','form-control ng-dirty ng-valid ng-touched')
        homePage.elements.textBox_Name().should('have.attr','type','text')

        //Assertion for Radio button(Entrepreneur) disabled
        homePage.elements.radioButton_Entrepreneur().should('be.disabled')

        //homePage.getLinkShop.click()
        homePage.gotToShopTab()        

        // this.testData_AngularPractice.productName = "productName":["iphone X","Samsung Note 8","Nokia Edge","Blackberry"]
        this.testData_AngularPractice.productName.forEach(function(element){
            cy.selectProduct(element)
        });

        /** HOME PAGE - END*/

        /** PRODUCTS PAGE - START*/
        //const productsPage = new ProductsPage()

        //productsPage.elements.link_Checkout().click()
        productsPage.clickOnCheckoutLink()

        /** PRODUCTS PAGE - END*/

        /** PRODUCTS PAGE - START*/
        //const productsSummaryPage = new ProductsSummaryPage()
        //productsSummaryPage.elements.button_Checkout().click()
        productsSummaryPage.clickOnCheckoutButton()

        /** PRODUCTS PAGE - END*/


        /** DELIVERY LOCATION PAGE - START*/
        //const deliveryLocationPage = new DeliveryLocationPage()
        
        //deliveryLocationPage.getTextbox_Location.type('India')
        deliveryLocationPage.enterLocation('India')
        deliveryLocationPage.elements.dropdown_Location().click()
        deliveryLocationPage.elements.checkBox_Agree().click()
        deliveryLocationPage.elements.button_Purchase().click()

        //deliveryLocationPage.getMessage_Success().should('should.have','Success!')
        deliveryLocationPage.elements.message_Success().should('include.text','Success!')

        /** DELIVERY LOCATION PAGE - END*/


    })//it

})//describe