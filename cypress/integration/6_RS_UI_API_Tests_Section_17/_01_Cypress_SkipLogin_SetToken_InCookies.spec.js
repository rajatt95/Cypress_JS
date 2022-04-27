/// <reference types="Cypress" />

describe('Test Suite - Rahul Shetty - Web + API',function(){
    
    it('Test case for - Skip Login: Inject token into Browser\'s Cookies',function(){
    
      cy.loginToApplication_UsingAPI().then(()=>{

        //https://stackoverflow.com/questions/70554024/in-cypress-how-to-setcookie-before-test/70554079#70554079
        
        //token -> This will be set as Key in Browser
        //token_login -> This is the token (set in the custom command - loginToApplication_UsingAPI)
        //Cypress.env('token_login') -> Retrieving the token value
        cy.setCookie('token',Cypress.env('token_login'));

        cy.visit(
            'https://www.rahulshettyacademy.com/client',{
            
            //onBeforeLoad is the event 
            //Before navigating to this URL, inject the token into Browser's Local storage 
            onBeforeLoad:(window)=>{
              //window.localStorage.setItem('token',Cypress.env('token_login'))
            
              /**Tried for BCG-Optimixer application */
              //cy.setCookie('token',Cypress.env('token_login'))
              //Cypress.Cookies.setItem('token',Cypress.env('token_login'))
            
            }//onBeforeLoad
          }
          
        ); //visit()
      }); //loginToApplication_UsingAPI


    })//if

})//describe