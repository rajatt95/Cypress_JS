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
class ProductsPage{

    elements = { 
        link_Checkout: () => cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    clickOnCheckoutLink(){
        basePage.clickOnWebElement(this.elements.link_Checkout())
    }


}

//This is required so that other classes can also use ProductsPage.js file 
export default new ProductsPage
