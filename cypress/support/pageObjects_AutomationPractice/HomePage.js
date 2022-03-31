//https://rahulshettyacademy.com/AutomationPractice/
class HomePage{

    get getTextBox_SuggestionClass(){
        //return cy.get('#autocomplete')
        return cy.xpath("//input[@id='autocomplete']")
}

    get getDropdown_Example(){
        return cy.get("#dropdown-class-example")
    }

    get getRadioButton_Radio1(){
        return cy.get("label[for='radio1']")
    }

}

//This is required so that other classes can also use HomePage.js file 
//export default HomePage
export default new HomePage
