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
