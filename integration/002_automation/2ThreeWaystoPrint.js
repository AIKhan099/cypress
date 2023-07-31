/// <reference types="cypress"/>

let var_value;
describe(' This is the inspect file',()=>{
    it('To cleck any of the product by using its order',()=>{
        
    cy.visit('https://automationteststore.com/')
    cy.get('.thumbnail').eq(0).click()
    //printing through alias
    cy.get('.productfilneprice').invoke('text').as('price')
    //printing through wrap
    cy.get('.productfilneprice').then($value=>{
        const value = $value.text()
        cy.wrap(value).as("wrappedprice")
    })
    //print through variable
    cy.get('.productfilneprice').then($value=>{
        var_value= $value.text()
    })

    })
    it('printing the values',function(){
        
        cy.log("Hello");
        cy.log("Printing through alias : "+this.price);
        cy.log("Printing through wrape "+this.wrappedprice)
        cy.log("printing through variable " + this.var_value)
    })

    it('To cleck any of the product by using its order, using .find too', () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    });
});