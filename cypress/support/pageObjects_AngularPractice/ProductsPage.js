//https://rahulshettyacademy.com/angularpractice/shop
class ProductsPage{

    getLinkCheckout(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')

    }

}

//This is required so that other classes can also use ProductsPage.js file 
export default ProductsPage
