//https://rahulshettyacademy.com/angularpractice/
import basePage from "./BasePage"

class HomePage{
    
    elements = { 
        tab_Shop: () => cy.get(':nth-child(2) > .nav-link'),
        radioButton_Entrepreneur: () => cy.get('#inlineRadio3'),
        textBox_TwoWayDataBiniding: () => cy.get(':nth-child(4) > .ng-pristine'),
        textBox_Name: () => cy.get(':nth-child(1) > .form-control'),
        dropdown_Gender: () => cy.get('select')

    }

    /** Operations */
       
        enterName(data){
            //this.elements.textBox_Name().type(data)
            basePage.fillTextBox(this.elements.textBox_Name(),data)
        }

        selectGender(data){
            //this.elements.dropdown_Gender().select(data)
            basePage.selectFromDropdown(this.elements.dropdown_Gender(),data)
        }

        gotToShopTab(){
            //this.elements.tab_Shop().click()
            basePage.clickOnWebElement(this.elements.tab_Shop())
        }


        






}

//This is required so that other classes can also use HomePage.js file 
export default new HomePage




    /** =================== OLD =================== */
    //get getLinkShop -> This is not an function now
    //To use it, 
        //homePage.getLinkShop - Right
        //homePage.getLinkShop() - Wrong

    // get getLinkShop(){
    //     return cy.get(':nth-child(2) > .nav-link')
    // }
 
    // get getRadioButton_Entrepreneur(){
    //     return cy.get('#inlineRadio3')
    // }

    // get getTextBox_TwoWayDataBiniding(){
    //     return cy.get(':nth-child(4) > .ng-pristine')
    // }

//     /** Operations */

//     /** TextBox: Name */
//     get getTextBox_Name(){
//          return cy.get(':nth-child(1) > .form-control')
//     }
//     enterName(data){
//         //homePage.getTextBox_Name.type(this.testData_AngularPractice.name)
//         cy.get(':nth-child(1) > .form-control').type(data)
//     }

//     /** Dropdown: Gender */
//     // get getDropdown_Gender(){
//     //     return cy.get('select')
//     // }

//     selectGender(data){
//         cy.log(data)
//         //homePage.getDropdown_Gender.select(this.testData_AngularPractice.gender)
//         cy.get('select').select(data)
//     }

// }

// //This is required so that other classes can also use HomePage.js file 
// export default new HomePage
