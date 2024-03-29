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
import deliveryLocationPage from '../../support/pageObjects_AngularPractice/DeliveryLocationPage'
import homePage from '../../support/pageObjects_AngularPractice/HomePage'
import productsPage from '../../support/pageObjects_AngularPractice/ProductsPage'
import productsSummaryPage from '../../support/pageObjects_AngularPractice/ProductsSummaryPage'

describe('Section_11_RS_UI_Tests_AngularPractice - Test Suite - Rahul Shetty Automation Practice - _13_Cypress_POM_Assert_SumOfProductPrice',function(){
    
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

        productsSummaryPage.elements.text_TotalPrice().then(function(element){
            var actualFinalProductPrice = element.text()
            var res = actualFinalProductPrice.split(" ")
            var actualFinalProductPrice_Formatted = res[1].trim();

            //Assertion for price sum and final price - Using Chai
            expect(Number(actualFinalProductPrice_Formatted)).to.equal(sum)
          })

          //productsSummaryPage.elements.button_Checkout().click()
          productsSummaryPage.clickOnCheckoutButton()

        /** PRODUCTS SUMMARY PAGE - END*/


    })//it

})//describe