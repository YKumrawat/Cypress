class Home{
    home_widgets = "//*[name()='path' and contains(@d,'M13 13v8h8')]"
    home_elements = "//h5[normalize-space()='Elements']";
    home_forms = "//*[name()='path' and contains(@d,'M17 21h-10')]"
    home_interactions = "//*[name()='path' and contains(@d,'M880 112H1')]"

    GoToURL(){
        cy.visit(Cypress.env("baseUrl"));
    }
    
    clickOnElements(){
        cy.xpath(this.home_elements).click();

    }
    clickOnForm(){
        cy.xpath(this.home_forms).click({force: true} );
    }
    clickOnWidgets(){
        cy.xpath(this.home_widgets).click({force: true} );
    }
    clickOnInteractions(){
        cy.scrollTo('bottom');
        cy.xpath(this.home_interactions).click({force: true} );
    }
}

export default Home;