
///<reference types="Cypress"/>
describe("CheckUI for Elemnets-Dropdown",()=>{

    it.skip("Dropdown1",()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html');
cy.selectDropdown("//select[@id=zcf_address_country'']");
        //cy.xpath("//select[@id=zcf_address_country'']").select('American Samoa').should('have.value','American Samoa')


    })

    it.only("Dropdown without select tag",()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/?wmc-currency=INR');
        cy.get("#select2-billing_country-container").click();
        cy.get("input.select2-search__field").type('India');

        //each is the jquery function
        cy.xpath('//*[contains(@class,"select2-results__option")]//li').each(($el,index,$list)=>{
       if($el.text()=="India"){
        //To use cypress function need to wrap
        cy.wrap($el).click();
        
       }
        })
        cy.get("#select2-billing_country-container").should('have.text','India');


    })
})