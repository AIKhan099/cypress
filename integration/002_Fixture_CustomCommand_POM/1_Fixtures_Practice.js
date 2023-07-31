/// <reference types="cypress" />
describe("Practicing Fixture", ()=>
{
    before(function() 
    {
        cy.fixture("Uni_ContactUsPage_Elements").then(function(Uni_ContactUsPage_Elements)
        {
            
            globalThis.Uni_ContactUsPage_Elements = Uni_ContactUsPage_Elements
        })
    })
    
    it("Filling the form",() =>
    {
        //Custom Command, it is defined in support/commands.js
        cy.webuni(globalThis.Uni_ContactUsPage_Elements.WebUniUrl);
        // cy.visit(globalThis.Uni_ContactUsPage_Elements.WebUniUrl);
        cy.get(globalThis.Uni_ContactUsPage_Elements.FirstName).clear().type(globalThis.Uni_ContactUsPage_Elements.FirstNameValue);
        cy.get(globalThis.Uni_ContactUsPage_Elements.LastName).clear().type(globalThis.Uni_ContactUsPage_Elements.LastNameValue);
        cy.get(globalThis.Uni_ContactUsPage_Elements.Email).clear().type(globalThis.Uni_ContactUsPage_Elements.EmailValue);
        cy.get(globalThis.Uni_ContactUsPage_Elements.Feedback).clear().type(globalThis.Uni_ContactUsPage_Elements.FeedbackValue);
        cy.get(globalThis.Uni_ContactUsPage_Elements.Feedback).clear().type(globalThis.Uni_ContactUsPage_Elements.FeedbackValue);
        cy.xpath(globalThis.Uni_ContactUsPage_Elements.SubmitBtnXpath).click()

        cy.get(globalThis.Uni_ContactUsPage_Elements.ThanksMsg).then($thank =>{
            const thank =$thank.text();
            cy.log(thank)
            assert.equal(thank,globalThis.Uni_ContactUsPage_Elements.ThanksMsgValue);
        })
        cy.get(globalThis.Uni_ContactUsPage_Elements.ThanksMsg).should("have.text",globalThis.Uni_ContactUsPage_Elements.ThanksMsgValue)
        
    })
})