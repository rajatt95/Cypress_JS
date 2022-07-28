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


context('Context #1 ',function(){

    describe('Describe #1',function(){
        it('Should include URL',function(){
            cy.visit('https://example.com/')
            cy.url().should('not.include','google.com')
        })//it
        it('Should have Page Title',()=>{
            cy.visit('https://example.com/')
            cy.wait(2000)
            cy.title().should('include','Example Domain')
        })// it 

    })//describe #1

    describe('Describe #2',function(){
        it('Should include URL',function(){
            cy.visit('https://example.com/')
            cy.url().should('not.include','google.com')
        })//it

    })//describe #2

})//context #1

context('Context #2 ',function(){

    describe('Describe #1',function(){
        it('Should include URL',function(){
            cy.visit('https://example.com/')
            cy.url().should('not.include','google.com')
        })//it
        it('Should have Page Title',()=>{
            cy.visit('https://example.com/')
            cy.wait(2000)
            cy.title().should('include','Example Domain')
        })// it 

    })//describe #1

    describe('Describe #2',function(){
        it('Should include URL',function(){
            cy.visit('https://example.com/')
            cy.url().should('not.include','google.com')
        })//it

    })//describe #2

})//context #2

