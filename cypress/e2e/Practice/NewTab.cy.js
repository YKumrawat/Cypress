describe('Handle Tab',()=>{
    it('New tab approch 1',()=>{
cy.visit('https://the-internet.herokuapp.com/windows');
cy.get("a[href='/windows/new']").invoke('removeAttr','target');
cy.get("a[href='/windows/new']").click();
cy.wait(5000)
cy.url().should('contain','https://the-internet.herokuapp.com/windows');
cy.go('back');



    })
})