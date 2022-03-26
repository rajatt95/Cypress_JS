//https://rahulshettyacademy.com/angularpractice/shop
class DeliveryLocationPage{

    getTextbox_Location(){
        return cy.get("#country")
    }
 
    getDropdown_Location(){
        return cy.get("div[class='suggestions'] ul li a")
    }

    getCheckbox_Agree(){
        return cy.get("label[for='checkbox2']")
    }

    getButton_Purchase(){
        return cy.get("input[value='Purchase']")
    }
    
    getMessage_Success(){
        return cy.get(".alert.alert-success.alert-dismissible")
    }
    
}

//This is required so that other classes can also use DeliveryLocationPage.js file 
export default DeliveryLocationPage
