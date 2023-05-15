///<reference types="Cypress"/>
describe("CheckUI for Elemnets",()=>{

it("RadioButton",()=>{
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    cy.get('#female').should('be.visible')
    cy.get('#male').should('be.visible')

    //Seleting radio burron
    cy.get('#male').check().should('be.checked')
    cy.get('#female').should('not.be.checked')
})
    
it("Checkbox",()=>{
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    cy.get('#monday').should('be.visible')
    cy.get('#monday').check().should('be.checked')
    cy.get('#monday').uncheck().should('not.be.checked')

    //Selecting all checkbox
    cy.get(".form-check-label>input[type='checkbox']").should('be.visible').and('have.length',7);
    cy.get(".form-check-label>input[type='checkbox']").check();
    cy.get(".form-check-label>input[type='checkbox']").should('be.checked')
    cy.get(".form-check-label>input[type='checkbox']").uncheck();

    cy.get(".form-check-label>input[type='checkbox']").first().check();



})
    







})