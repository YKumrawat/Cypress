
describe("Data Driven Testing with fixture file",()=>{
it("Data Driven",()=>{
    cy.fixture('exampleWithMultipleSetsOfData').then((data)=>{
        cy.visit("https://www.amazon.in/");
        data.forEach((userdata)=>{
       
        cy.get('#nav-logo-sprites').should('have.visible').and('exist');
        cy.get('#twotabsearchtextbox')
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        cy.get('#nav-logo-sprites').click();
        cy.get('#twotabsearchtextbox').type(userdata.name);
        
        cy.get('#twotabsearchtextbox').should('have.value',userdata.name)
        cy.get('#nav-logo-sprites').click();



       })
    
})
})
})


