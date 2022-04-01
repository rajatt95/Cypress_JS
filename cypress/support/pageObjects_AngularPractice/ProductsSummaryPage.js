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
