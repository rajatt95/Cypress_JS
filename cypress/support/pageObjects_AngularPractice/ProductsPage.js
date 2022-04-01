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
