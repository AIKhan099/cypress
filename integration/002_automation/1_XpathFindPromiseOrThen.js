/// <reference types='cypress' />
describe.only('Contact the Automation',()=>{

    it('Positive contact us test',()=>{
        cy.visit('https://automationteststore.com/')

        cy.xpath('//div[@class="block_frame block_frame_listing_block"]/h1/span[@class="maintext"]').should('have.text','Brands Scrolling List')

        // cy.get('.info_links_footer > :nth-child(5) > a').click()

    // By an xpath
        // Only by select attribute (@) and select node (/)

            cy.xpath('//a[@href="https://automationteststore.com/index.php?rt=content/contact"]').click()

        // Only by delect from root node (/) select attribute (@) and select node (//)
            // cy.xpath('//div/ul/li[5]/a[@href="https://automationteststore.com/index.php?rt=content/contact"]').click()

        // By using $:which check that where the argument of an element ends.
            // cy.get('a[href$="contact"]').click()

        // by using ^: This implicates that where the argument ends.
            //  cy.get('a[href^="https://automationteststore.com/index.php?rt=content/contact"]').click()

            //  cy.get("//*[starts-with(text(),'Contact Us')]").click()
            // cy.get("//*[starts-with(text(),'Contact Us')][@style='outline: orange dashed 2px !important; outline-offset: -1px !important;']").click()

        // cy.xpath("//div[@class='block_frame block_frame_html_block']/ul[@class='contact']/li[1]").should('be.visible').should('have.text','+123 456 7890')
        // cy.get('.contact > :nth-child(1)').should('be.visible')

        

    });

    it(' Filling the form of automation',() =>{

        cy.xpath('//input[@name="first_name"]').type('Awais')

        cy.xpath('//input[@name="first_name"]').should('have.attr', 'type', 'text')

        cy.xpath('//label[text()="First name:"]').should('have.text',"First name:")
        

        cy.xpath('//input[@name="email"][@id="ContactUsFrm_email"]').type('aa@albana.com')
        
        cy.xpath('//textarea[@name="enquiry"]').type('Kuh nhi kehna mghe')

        // cy.get('.col-md-6 > .btn').should('have.attr','title',"Submit")

        cy.xpath('//button[@type="submit"][@class="btn btn-primary lock-on-click"]').should('have.attr','title',"Submit")

        // cy.xpath('//button[@type="submit"][@class="btn btn-primary lock-on-click').should('have.attr','title',"Submit")

        cy.xpath('//button[@type="submit"][@class="btn btn-primary lock-on-click"]').click()
       
    })

});

describe(' This is the part part to practice the CHAINING COMMANDS',()=>{

    it('To cleck any of the product by using its order',()=>{
        
    cy.visit('https://automationteststore.com/')
    cy.get('.thumbnail').eq(0).click()
    console.log('Without find')

    })

    it('To cleck any of the product by using its order, using .find too', () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
        cy.log('with find')
    })
});

describe('Promise concept',()=>{
    it.only('using then',()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click().then(function(thisone){
            cy.log('ye bt'+ thisone.text())
        })
    })
})