//https://rahulshettyacademy.com/angularpractice/shop
class ProductsSummaryPage{

    get getButtonCheckout(){
        return cy.get("button[class='btn btn-success']")
    }

    get getText_TotalPrice(){
        return cy.get("td[class='text-right'] h3 strong")
    }
    
}

//This is required so that other classes can also use ProductsSummaryPage.js file 
export default new ProductsSummaryPage
