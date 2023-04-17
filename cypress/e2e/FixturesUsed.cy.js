///<reference types ="Cypress"/>

describe('fixture',()=>{
    let data;
    before(()=>{
        
        cy.fixture('example').then((Testdata)=>{
            data=Testdata;
            cy.log(data);
        })
    })



        it.only('Using data from fixture',()=>{
            
            cy.visit("https://www.amazon.in/");
cy.get('#nav-logo-sprites').should('have.visible').and('exist');
cy.get('#twotabsearchtextbox')
cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
cy.get('#nav-logo-sprites').click();
cy.get('#twotabsearchtextbox').type(data.name);

cy.get('#twotabsearchtextbox').should('have.value','Using fixtures to represent data')
        })
   
})
