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

//https://rahulshettyacademy.com/angularpractice/shop
import basePage from "./BasePage"
class ProductsSummaryPage{
   
    elements = { 
        button_Checkout:() => cy.get("button[class='btn btn-success']"),
        text_TotalPrice:() => cy.get("td[class='text-right'] h3 strong")
    } 

    clickOnCheckoutButton(){
        basePage.clickOnWebElement(this.elements.button_Checkout())
    }

    
}

//This is required so that other classes can also use ProductsSummaryPage.js file 
export default new ProductsSummaryPage
