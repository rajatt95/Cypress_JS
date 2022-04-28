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

describe('Section_09_RS_UI_Tests_AngularPractice - Test Suite - Rahul Shetty Automation Practice - _06_Cypress_CustomCypressCommand',function(){
    
    it('Test case for custom Cypress Command',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.log('Application URL : '+cy.url())
        
        cy.get(':nth-child(2) > .nav-link').click()

      //   cy.get("h4[class='card-title']").each((el, index, $list) => {
      //     //if(el.text() === 'Blackberry'){
      //     if(el.text().includes('Blackberry')){
      //       //Clicking on the Add button present under Blackberry
      //       cy.get('button.btn.btn-info').eq(index).click()
      //     }
      // })

      //Custom Cypress Command
      cy.selectProduct('iphone X')
      cy.selectProduct('Samsung Note 8')
      cy.selectProduct('Nokia Edge')
      cy.selectProduct('Blackberry')

      // Assertion for Checkout count
      cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').should('include.text',' Checkout ( 4 )')

    })//it

})//describe