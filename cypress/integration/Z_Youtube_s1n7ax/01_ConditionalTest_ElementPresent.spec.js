
// https://www.youtube.com/watch?v=Ct29NYFltxA&ab_channel=s1n7ax
// Test Automation with Cypress #5 Conditional Testing
// https://github.com/s1n7ax/youtube-cypress/tree/05_conditional_testing


describe('Youtube - s1n7ax: Conditional Testing',function(){

    it('Conditional Test - Element Present',function(){

        // cy.visit('')
        cy.get('body').then((body) => {
            if(body.find("span[title='50 / page']").length > 0){
                cy.get('locator').should('be.visible')
            }else{
                cy.log('Pagination is absent.')
            }
        })

    })//it

})//describe