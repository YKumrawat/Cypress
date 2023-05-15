///<reference types = "Cypress"/>
describe('Intercept',()=>{
    it('Test api with simple intercept',()=>{
        cy.visit('https://jsonplaceholder.typicode.com');
        cy.intercept({
            path:'/posts'
        }).as('Posts');
        cy.get('table tr:nth-child(1) > td:nth-child(1) > a').click();
        cy.wait('@Posts').then((response)=>{
            expect(response).to.have.length(100);
        })
    })


})