//https://rahulshettyacademy.com/angularpractice/
class HomePage{

    get getLinkShop(){
        return cy.get(':nth-child(2) > .nav-link')
    }

    get getTextBox_Name(){
        return cy.get(':nth-child(1) > .form-control')
    }

    get getDropdown_Gender(){
        return cy.get('select')
    }

    get getRadioButton_Entrepreneur(){
        return cy.get('#inlineRadio3')
    }

    get getTextBox_TwoWayDataBiniding(){
        return cy.get(':nth-child(4) > .ng-pristine')
    }


}

//This is required so that other classes can also use HomePage.js file 
export default new HomePage
