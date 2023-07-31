/// <reference types="cypress" />
describe('Handling js allerts 0',() =>{

    it('Handling js allerts 1',() =>{

    cy.visit("http://www.webdriveruniversity.com/")
    cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
    cy.get('#button1').click()

    cy.on('window:alert',(str) =>{
        expect(str).to.equal('I am an alert box!')
    })
})

it('Handling js allerts again 2.',() =>{

    cy.visit("http://www.webdriveruniversity.com/")
    cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
    cy.get('#button4').click()

    cy.on('window:alert',(str) =>{
        return True;
    });
    cy.get('#confirm-alert-text').contains('You pressed OK!')
})

it('Handling js allerts again 2.',() =>{

    cy.visit("http://www.webdriveruniversity.com/")
    cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
    cy.get('#button4').click()

    cy.on('window:confirm',(str) =>{
        return false;
    });
    cy.get('#confirm-alert-text').contains('You pressed Cancel!')
})


it.only('Handling js allerts with stub and window confirm.',() =>{

    cy.visit("http://www.webdriveruniversity.com/")
    cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
    cy.get('#button4').click()

    const stub=cy.stub()
    cy.on('window:confirm', stub)

    cy.get('#button4').then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Press a button!')

    }).then(() =>{
        return true
    }).then(() =>{
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    })
})


})