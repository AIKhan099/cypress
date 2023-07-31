/// <reference types="cypress" />
describe('Automating the Web Driver Website',()=>{

it.only('A positive registration automation',() => {
    // cy.visit('http://webdriveruniversity.com/')
    // cy.get('#contact-us').click({ force: true})
    

    cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
    
    cy.document().should('have.property', 'charset').and('eq','UTF-8')
    
    cy.title().should('include', 'WebDriver | Contact Us')
    
    cy.url().should('include','contactus')

    
    cy.get('[name="first_name"]').type('Awais')
    cy.get('[name="last_name"]').type('Khan')
    cy.get('[name="email"]').type('ai.khan099@gmail.com')
    cy.get('textarea.feedback-input').type('I am learning cypress.')
    cy.get('[type="submit"]').click()
    cy.wait(3000)
    // cy.xpath('//h1').should('have.text','Thank You for your Message!')
    cy.get('h1').should('have.text','Thank You for your Message!')
    
});


it('A positive registration automation',() => {
    // cy.visit('http://webdriveruniversity.com/')
    // cy.get('#contact-us').click({ force: true})
    
    cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name="first_name"]').type('Awais')
    cy.get('[name="last_name"]').type('Khan')
    cy.get('textarea.feedback-input').type('I am learning cypress.')
    cy.get('[type="submit"]').click()
});




})