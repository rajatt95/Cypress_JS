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

/// <reference types="Cypress" />
const neatCSV = require('neat-csv');

describe('Section_17_RS_UI_Tests_AngularPractice - Test Suite - Rahul Shetty',function(){
    
    it('Test case for - Parse CSV file',async function(){
    
      //Get the Project path
      const projectPath = Cypress.config("fileServerFolder");

      //Convert file to text
      cy.readFile(projectPath+"/cypress/downloads/order-invoice_testtmail95.csv")
      .then(async (text)=>{
        //Text has to given as an argument for this method
        //neat_CSV -> This is Javascript object
        //await -> Another way to resolve the Promise
        const neat_CSV = await neatCSV(text);
        console.log('neat_CSV');
        console.log(neat_CSV);

        //We have only 1 row in CSV
        //neat_CSV[0].Product Name // This doesn't work here (because of space)
        const actualProductNameInCSV = neat_CSV[0]["Product Name"];
        const actualAddressInCSV = neat_CSV[0].Address;
        const actualOrderedByInCSV = neat_CSV[0]["Ordered By"];
        const actualProductDescriptionInCSV = neat_CSV[0]["Product Description"];
        const actualProductPriceInCSV = neat_CSV[0]["Product Price"];

        //Assertions for Product details
        cy.log('Assertions for Product details');
        expect(actualProductNameInCSV).to.equal('adidas original');
        expect(actualAddressInCSV).to.equal('India');
        expect(actualOrderedByInCSV).to.equal('testtmail95@gmail.com');
        expect(actualProductDescriptionInCSV).to.equal('adidas original');
        expect(actualProductPriceInCSV).to.equal('31500');

      });
      
    })//it

})//describe