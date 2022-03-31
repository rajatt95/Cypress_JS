//https://rahulshettyacademy.com/angularpractice/shop
class DeliveryLocationPage{

    elements = { 
        textBox_Location: () => cy.get("#country"),
        dropdown_Location: () => cy.get("div[class='suggestions'] ul li a"),
        checkBox_Agree: () => cy.get("label[for='checkbox2']"),
        button_Purchase: () => cy.get("input[value='Purchase']"),
        message_Success: () => cy.get(".alert.alert-success.alert-dismissible")
    }



    /** Operations */

    enterLocation(data){
        this.elements.textBox_Location().type(data)
    }    
}

//This is required so that other classes can also use DeliveryLocationPage.js file 
export default new DeliveryLocationPage


    /** =================== OLD =================== */

//     get getTextbox_Location(){
//         return cy.get("#country")
//     }
 
//     get getDropdown_Location(){
//         return cy.get("div[class='suggestions'] ul li a")
//     }

//     get getCheckbox_Agree(){
//         return cy.get("label[for='checkbox2']")
//     }

//     get getButton_Purchase(){
//         return cy.get("input[value='Purchase']")
//     }
    
//     get getMessage_Success(){
//         return cy.get(".alert.alert-success.alert-dismissible")
//     }
    
// }

// //This is required so that other classes can also use DeliveryLocationPage.js file 
// export default new DeliveryLocationPage
