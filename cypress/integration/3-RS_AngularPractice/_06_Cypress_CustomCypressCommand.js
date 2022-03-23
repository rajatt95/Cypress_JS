/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty Automation Practice',function(){
    
    it('My First Test case for navigating to some URL',function(){
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

    })//if

})//describe