/// <reference types="cypress" />


describe('Handling Iframes',() =>{

    it('Handing Iframes',() =>{

    cy.visit("http://www.webdriveruniversity.com/")
    cy.get('#iframe').invoke('removeAttr','target').click({force:true})
// As iframe does not support the direct interaction with iframe. So we will go step by step i.e.:
        // 1: go to the iframe. 2: access its body 3: wrapping the body and providing alias or name to be used further

   // 1: go to the iframe.     
   cy.get('#frame').then($iframe => {

    // 2: access its body
    const body=$iframe.contents().find('body')
    // 3: wrapping the body and providing alias or name to be used further
    cy.wrap(body).as('iframe')

   })
//    clicking in the button on iframe:
   cy.get('@iframe').find('#button-find-out-more').click()

//    Accessing and creating alias of new iframe
   cy.get('@iframe').find('#myModal').as('modal')
// comparing the text on new iframe
   cy.get("@modal").should($expected_texts =>{
    const all_text=$expected_texts.text()
    expect(all_text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods')
   })
// As we have all of the text, and we are clicking on button of new iframe by accessing through text.
   cy.get('@modal').contains('Close').click()

})
})