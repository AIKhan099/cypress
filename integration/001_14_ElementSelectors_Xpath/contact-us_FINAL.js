/// <reference types="cypress" />


describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        let max_value = 8;
        let pos, position;
        
        for(pos = 5; pos <max_value; pos++)
        {
            let child_value = '.info_links_footer > :nth-child({0}) > a';
            position = pos.toString();
            console.log(typeof(child_value));
            child_value = ".info_links_footer > :nth-child("+ position +") > a";
            console.log(child_value);

            cy.visit("https://www.automationteststore.com/");
            //cy.get('.info_links_footer > :nth-child(5) > a').click();
            cy.get(child_value).click();
            if(pos ==5){
            //cy.xpath("//a[contains(@href, 'contact')]").click();
            cy.get('#ContactUsFrm_first_name').type("Joe");
            cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
            cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
            cy.get('.col-md-6 > .btn').click(); 
            }
        }

    });
})