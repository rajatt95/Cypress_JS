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
class BasePage{

    clickOnWebElement(element){
        element.click()
    }

    clickOnWebElement_Force(element){
        element.click({force:true})
    }

    fillTextBox(element,textToBeFilled){
        element.type(textToBeFilled)
    }

    selectFromDropdown(element,dropdownValue){
        element.select(dropdownValue)
    }

}
//This is required so that other classes can also use BasePage.js file 
export default new BasePage
