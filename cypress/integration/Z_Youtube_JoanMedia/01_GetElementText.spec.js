// https://www.youtube.com/watch?v=gIgqEvbYkgg&ab_channel=JoanMedia
// THE SECRET of declaring VARIABLES in CYPRESS IO | Then Command | CYPRESS TUTORIAL For BEGINNERS

describe('Variables & Aliases DEMO',()=>{


    Cypress.on('uncaught:exception',(error, runnable)=>{
        return false;
    });

    beforeEach(()=>{
        cy.visit('https://demoqa.com/modal-dialogs')
    })// beforeEach

    // it('Return Variables Misconception',()=>{
    //     const smallModalText = cy.get('#showSmallModal').text()
    //     cy.log('smallModalText: '+smallModalText)
    // })// it

    // Get Element Text and store in a variable
    // By using Callback function, we have created a Closure
        // Closure enable us to keep references around to work done in previous commands
    it('Closures & Variables',()=>{
        cy.get('#showSmallModal').then($modalButton=>{
            const smallModalText = $modalButton.text()
            cy.log('smallModalText: '+smallModalText)

            $modalButton.click()

            // cy.get('#example-modal-sizes-title-sm').contains(smallModalText)
            // {matchCase: false} -> This will help to avoid the check for exact same String (Case Sensitive is not considered)
            cy.get('#example-modal-sizes-title-sm').contains(smallModalText,{matchCase: false})
        })// then
    })// it


    // it('Context Misconception',()=>{
    //     cy.log('smallModalText: '+smallModalText)
    // })// it

    it('Alias DEMO',()=>{
        // 1st way
        cy.get('#showSmallModal').invoke('text').as('invokeText')

        //2nd way
        cy.get('#showSmallModal').then($modalButton => {
            const smallModalText = $modalButton.text()
            cy.log('smallModalText: '+smallModalText)

            cy.wrap(smallModalText).as('wrapText')
        })// then

        // cy.log('this.invokeText: '+this.invokeText)
        // cy.log('this.wrapText: '+this.wrapText)
        // cy.log('invokeText: '+invokeText)
        // cy.log('wrapText: '+wrapText)

    })// it

    // it('Sharing Context',()=> {
    it('Sharing Context',function(){
        // 1st way
        // cy.log('invokeText: '+invokeText)
        cy.log('this.invokeText: '+this.invokeText)
        cy.log('typeof(this.invokeText: '+typeof(this.invokeText))
        cy.log('typeof(parseInt(this.invokeText)): '+typeof(parseInt(this.invokeText)))

        // 2nd way
        cy.log('this.wrapText: '+this.wrapText)


    })// it

})// describe