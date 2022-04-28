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
