/// <reference types="cypress"/>

describe.only('Promise concept',()=>{
    it.only('using then',()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get('.fixed_wrapper').contains('Skinsheen Bronzer Stick').click().then(function(thisone){
            cy.log('The selected product is : '+ thisone.text())
        })
    })
})