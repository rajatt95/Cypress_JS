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

//NW -> ind -> Dropdown is not showing the Options -> India, Indonesia
describe('Section_17_RS_UI_Tests_AngularPractice - Test Suite - Rahul Shetty - Web + API',function(){
    
  Cypress.on('uncaught:exception',(error, runnable)=>{
    return false;
  });
  

    it('Test case for - Skip Login: Place Order, Download CSV file',function(){
    
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

      /******* Dashboard Page - START ********/

      //.card-body button:last-of-type -> This CSS Selector was returing 3 elements - Clicking on 2nd element
      cy.log('Clicking on Add to Cart button for 2nd product'); 
      cy.get('.card-body button:last-of-type').eq(1).click();
      
      cy.log('Clicking on Cart tab'); 
      cy.get("[routerlink='/dashboard/cart']").click();
      /******* Dashboard Page - END ********/

      /******* Cart Page - START ********/
      cy.log('Clicking on Checkout button'); 
      cy.contains("Checkout").click();

      /******* Cart Page - END ********/

      /******* Checkout Page - START ********/
      
      cy.log("Filling 'ind' in Country"); 
      cy.get("input[placeholder='Select Country']").type('ind');
      
      //Handling Dynamic Dropdown
      cy.get('.ta-results button').each((element,index,list)=>{
        if(element.text() === 'India'){
          cy.wrap(element).click()
        }//if 
      });

      cy.log('Clicking on Place Order button'); 
      cy.get(".action__submit").click(); 
      /******* Checkout Page - END ********/

      /******* Order Placed Page - START ********/

      cy.log('Clicking on Download Order details in CSV'); 
      cy.get('.order-summary button').click();

      /******* Order Placed Page - END ********/
    })//it

})//describe