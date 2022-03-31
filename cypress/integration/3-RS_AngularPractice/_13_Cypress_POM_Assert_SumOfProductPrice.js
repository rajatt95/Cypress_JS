/// <reference types="Cypress" />
import deliveryLocationPage from '../../support/pageObjects_AngularPractice/DeliveryLocationPage'
import homePage from '../../support/pageObjects_AngularPractice/HomePage'
import productsPage from '../../support/pageObjects_AngularPractice/ProductsPage'
import productsSummaryPage from '../../support/pageObjects_AngularPractice/ProductsSummaryPage'

describe('Test Suite - Rahul Shetty Automation Practice - _13_Cypress_POM_Assert_SumOfProductPrice',function(){
    
  before(() => {
    // runs once before all tests in the block
    cy.fixture('03_RS-AngularPractice').then(function(testData_AngularPractice){
        this.testData_AngularPractice = testData_AngularPractice;
    })//then
  })//before
 
    it('Test case for POM_Assert_SumOfProductPrice',function(){

        /** HOME PAGE - START*/

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.log('Application URL : '+cy.url())
        
        //Object creation of HomePage.js 
        //const homePage = new HomePage()

        homePage.getTextBox_Name.type(this.testData_AngularPractice.name)
        homePage.getDropdown_Gender.select(this.testData_AngularPractice.gender)

        //Assertion for Two-way Data Binding
        homePage.getTextBox_TwoWayDataBiniding.should('have.value',this.testData_AngularPractice.name)

        // Assertion for Custom Attribute(minlength)
        // Expected value is 2
        //<input class="form-control ng-pristine ng-invalid ng-touched" minlength="2" name="name" required="" type="text" xpath="1">
        homePage.getTextBox_Name.should('have.attr','minlength',2)
        homePage.getTextBox_Name.should('have.attr','class','form-control ng-dirty ng-valid ng-touched')
        homePage.getTextBox_Name.should('have.attr','type','text')

        //Assertion for Radio button(Entrepreneur) disabled
        homePage.getRadioButton_Entrepreneur.should('be.disabled')

        homePage.getLinkShop.click()        

        // this.testData_AngularPractice.productName = "productName":["iphone X","Samsung Note 8","Nokia Edge","Blackberry"]
        this.testData_AngularPractice.productName.forEach(function(element){
            cy.selectProduct(element)
        });

        /** HOME PAGE - END*/

        /** PRODUCTS PAGE - START*/
        //const productsPage = new ProductsPage()

        productsPage.getLinkCheckout.click()

        /** PRODUCTS PAGE - END*/

        /** PRODUCTS SUMMARY PAGE - START*/
        //const productsSummaryPage = new ProductsSummaryPage()

        var sum=0;

        cy.get('tr td:nth-child(4) strong').each((element, index, list) => {
          const actualProductPrice = element.text()
          cy.log('Product Price before formatting: '+actualProductPrice) //String -> ₹. 100000
          
          //Splitting on the basis of space -> so that we can get sum
          var res = actualProductPrice.split(" ")
          cy.log('Product Price after formatting: '+res[1].trim())

          //Logic for doing sum of Products price
          //sum = sum + res[1].trim();
          sum = Number(sum) + Number(res[1].trim());

        }).then(function(){//Handling the Promise manually as it is Javascript and Javascript is Asynchronous
          cy.log('sum: '+sum)
        })

        productsSummaryPage.getText_TotalPrice.then(function(element){
            var actualFinalProductPrice = element.text()
            var res = actualFinalProductPrice.split(" ")
            var actualFinalProductPrice_Formatted = res[1].trim();

            //Assertion for price sum and final price - Using Chai
            expect(Number(actualFinalProductPrice_Formatted)).to.equal(sum)
          })

        productsSummaryPage.getButtonCheckout.click()

        /** PRODUCTS SUMMARY PAGE - END*/


        /** DELIVERY LOCATION PAGE - START*/
        // const deliveryLocationPage = new DeliveryLocationPage()
        // deliveryLocationPage.getTextbox_Location().type('India')
        // deliveryLocationPage.getDropdown_Location().click()
        // deliveryLocationPage.getCheckbox_Agree().click()
        // deliveryLocationPage.getButton_Purchase().click()

        // //deliveryLocationPage.getMessage_Success().should('should.have','Success!')
        // deliveryLocationPage.getMessage_Success().should('include.text','Success!')

        /** DELIVERY LOCATION PAGE - END*/


    })//it

})//describe