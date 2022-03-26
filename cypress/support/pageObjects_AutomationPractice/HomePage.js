//https://rahulshettyacademy.com/AutomationPractice/
class HomePage{

    getLinkShop(){
        return cy.get(':nth-child(2) > .nav-link')

    }

    getTextBox_Name(){
        return cy.get(':nth-child(1) > .form-control')
    }

    getDropdown_Gender(){
        return cy.get('select')
    }

    getRadioButton_Entrepreneur(){
        return cy.get('#inlineRadio3')
    }

    getTextBox_TwoWayDataBiniding(){
        return cy.get(':nth-child(4) > .ng-pristine')
    }


}

//This is required so that other classes can also use HomePage.js file 
export default HomePage
