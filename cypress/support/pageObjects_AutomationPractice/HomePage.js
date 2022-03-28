//https://rahulshettyacademy.com/AutomationPractice/
class HomePage{

    getTextBox_SuggestionClass(){
        //return cy.get('#autocomplete')
        return cy.xpath("//input[@id='autocomplete']")
}

    getDropdown_Example(){
        return cy.get("#dropdown-class-example")
    }

    getRadioButton_Radio1(){
        return cy.get("label[for='radio1']")
    }

}

//This is required so that other classes can also use HomePage.js file 
export default HomePage
