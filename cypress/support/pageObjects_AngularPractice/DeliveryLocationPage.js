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

class DeliveryLocationPage{

    elements = { 
        textBox_Location: () => cy.get("#country"),
        dropdown_Location: () => cy.get("div[class='suggestions'] ul li a"),
        checkBox_Agree: () => cy.get("label[for='checkbox2']"),
        button_Purchase: () => cy.get("input[value='Purchase']"),
        message_Success: () => cy.get(".alert.alert-success.alert-dismissible")
    }



    /** Operations */

    // enterLocation(data){
    //     this.elements.textBox_Location().type(data)
    // }    

    enterLocation(data){
        basePage.fillTextBox(this.elements.textBox_Location(),data)
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
