import 'cypress-iframe';
describe('Handling iframe',()=>{

it.skip('Approch1',()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe');
   const iframe = cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible').then(cy.wrap);
   iframe.clear().type("Welcome");
   iframe.should('have.text','Welcome')

})


it.skip('Approch2',()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe');
   cy.getIframe('#mce_0_ifr').clear().type('Welcome{cmd+a}');
   cy.get("button[aria-label='Bold']").click();
})


it('Approch3-Cypress iframe Plugin',()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe');
    //switch to iframe
   cy.frameLoaded('#mce_0_ifr');
   cy.iframe('#mce_0_ifr').clear().type('Hello{cmd+a}')
  // cy.get("button[aria-label='Bold']").click();
   cy.iframe('#mce_0_ifr').should('have.text','Hello')
})

})