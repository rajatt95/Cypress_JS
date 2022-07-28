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


describe('Read Value from Cypress.JSON file', () => {
	
	it('Should read value by both ways', () => {
        
        cy.visit('http://zero.webappsecurity.com/index.html')

        cy.log(Cypress.env("application_URL"))
	
       // cy.log(config.env.application_URL)
    })// it

})// describe
