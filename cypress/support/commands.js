/// <reference types="Cypress" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//Syntax: selectProduct(productName) 
    // selectProduct -> Method name
    // productName -> Argument/Parameter
Cypress.Commands.add('selectProduct', (productName) => { 
    cy.get("h4[class='card-title']").each((el, index, $list) => {
        if(el.text().includes(productName)){
          //Clicking on the Add button present under productName
          cy.get('button.btn.btn-info').eq(index).click()
        }
    })
})

//Navigate to application using visit()
Cypress.Commands.add('goToApplication_AutomationPractice', () => { 
    //cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.visit(Cypress.env("application_URL_AutomationPractice")) 
})

// //Click using click()
// Cypress.Commands.add('clickOnElement', (element) => { 
//    //element.click()

//    element.each(($el, index, $list) => {
//     // $el is a wrapped jQuery element
//         cy.wrap($el).click()
//   })

// })

// // Fill TextBox using type()
// Cypress.Commands.add('fillTextBox', (element, textToBeFilled) => { 
//    // element.type(textToBeFilled)
//     element.each((el, index, $list) => {
//             cy.wrap(el).click()
//     })
//  })

 
// Wait for 2 seconds using wait()
Cypress.Commands.add('waitForSomeTime', () => { 
    cy.wait(2000)
})

// Wait for Given time using wait()
Cypress.Commands.add('waitForGivenTime', (timeInSeconds) => { 
    cy.wait(timeInSeconds*1000)
})

// _04_Cypress_Type_Assertion -> cy.get('.product').should('have.length',4)

// _12_Cypress_Complete -> cy.get('div.brand').should('have.text','GREENKART')

// _01_Cypress_HandleCheckbox -> 
        //cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        // cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
       
//_03_Cypress_HandleDropdownStatic ->     
    //cy.get('select#dropdown-class-example').select('option2').should('have.value','option2') //using value attribute
    //cy.get('select#dropdown-class-example').select('Option1').should('have.value','option1') // using text


//_05_Cypress_AssertVisibleAndInvisible
    //cy.get('#displayed-text').should('be.visible')   
    //cy.get('#displayed-text').should('not.be.visible')

//_06_Cypress_HandleRadioButtons ->
    //cy.get("input.radioButton[value='radio1']").check().should('be.checked').and('have.value','radio1')

// _08_Cypress_Alerts_BrowserEvents -> 
    // cy.on('window:alert',(str) => {
    //     expect(str).to.equal('Hello , share this practice page and share your knowledge')
    // })

    //on() -> Method to trigger an event -> We are firing 'window:confirm' alert to the Browser -> 
    //Automatically, Alert will be opened
    // cy.on('window:confirm',(str) => {
    //     expect(str).to.equal('Hello , Are you sure you want to confirm?')
    // })

//_09_Cypress_ChildTab ->  
    //cy.get('#opentab').invoke('removeAttr','target').click()
        //removeAttr -> jQuery function
        //invoke() -> Cypress method
 
//_10_Cypress_CurrentURL

//_11_Cypress_NavigationControls
    // cy.url().should('include','https://www.rahulshettyacademy.com/#/index')
    // cy.go('back')

//_12_Cypress_WebTable
    //expect(coursePrice).to.equal('25')

//_13_Cypress_MouseHover
    //cy.get('.mouse-hover-content').invoke('show')

//_14_Cypress_Force_HiddenElementClick
    //cy.contains('Top').click({force : true})

//_15_Cypress_GrabAttributeValue
    // cy.get('#opentab').then(function(e1){
        //     //Getting the attribute 'href' value
        //     const attribute_href = e1.prop('href')
        //     cy.log("Attribute - href value is : "+attribute_href)
        //     cy.wait(2000)
        //     cy.visit(attribute_href)
        // })

//_16_Cypress_HandleFrames

//_04_Cypress_Assertion_AttributeValue
    // cy.get(':nth-child(1) > .form-control').should('have.attr','minlength',2)

//_05_Cypress_ElementDisable      
    //cy.get('#inlineRadio3').should('be.disabled')

//_08_Cypress_TestDebugging
    //cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').should('include.text',' Checkout ( 4 )')




// Handle Promise

// visit

//click 

// type

// Get element text

// Get Page URL

// Get Page Title

//



//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
