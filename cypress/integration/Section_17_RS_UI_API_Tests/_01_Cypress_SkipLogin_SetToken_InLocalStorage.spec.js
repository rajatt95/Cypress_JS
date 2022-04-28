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

describe('Section_17_RS_UI_Tests_AngularPractice - Test Suite - Rahul Shetty - Web + API',function(){
    
    it('Test case for - Skip Login: Inject token into Browser\'s local storage',function(){
    
      cy.loginToApplication_UsingAPI().then(()=>{

        cy.visit(
            'https://www.rahulshettyacademy.com/client',{
            
            //onBeforeLoad is the event 
            //Before navigating to this URL, inject the token into Browser's Local storage 
            onBeforeLoad:(window)=>{
              //token -> This will be set as Key in Browser
              //token_login -> This is the token (set in the custom command - loginToApplication_UsingAPI)
              //Cypress.env('token_login') -> Retrieving the token value
              window.localStorage.setItem('token',Cypress.env('token_login'))
            }//onBeforeLoad
          }
          
        ); //visit()
      }); //loginToApplication_UsingAPI


    })//it

})//describe