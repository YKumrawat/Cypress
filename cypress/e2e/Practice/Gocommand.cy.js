describe("Custom Commands",()=>{
    it("Handling link",()=>{
cy.visit("https://demo.nopcommerce.com/");
cy.screenshot("digital")
cy.title().should('eq','nopCommerce demo store');
cy.get("ul[class='top-menu notmobile'] li:nth-child(4) a:nth-child(1)").click({force: true});

cy.get(".page-title").should("have.text","Digital downloads");
cy.go('back');
cy.title().should('eq','nopCommerce demo store');
cy.go('forward');
cy.get(".page-title").should("have.text","Digital downloads");

    })
})