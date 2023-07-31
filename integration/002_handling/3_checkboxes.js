describe('Handling checkboxes',() =>{

    it('checking the option1',() =>{

    cy.visit("http://www.webdriveruniversity.com/")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
    cy.get("#checkboxes > :nth-child(1) > input").check()
    cy.get("#checkboxes > :nth-child(1) > input").check().should('be.checked')

    cy.get("#checkboxes > :nth-child(1) > input").as('option01')
    // cy.get('@option01').check()
    cy.get('@option01').check().should('be.checked')

    })

    it('unchecking the third option' ,() => {

    cy.visit("http://www.webdriveruniversity.com/")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
    cy.get(':nth-child(5) > input').as('option5')
    cy.get('@option5').uncheck().should('not.be.checked')
    })


    it('Checking all the multiple checkboxes', () => {
    cy.visit("http://www.webdriveruniversity.com/")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
    // Here we are giving values of checkboxes with th list.
    cy.get("input[type='checkbox']").check(['option-1','option-2','option-3','option-4'])
    })

})