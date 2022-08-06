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


describe('Assertion for Element not exist', () => {
	
	it('Assertion for Element not exist - Absent', () => {
        
        cy.visit('http://zero.webappsecurity.com/index.html')

        cy.get('fake css selector 234').should('not.exist')
        
    })// it

})// describe
