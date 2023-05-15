///<reference types="Cypress"/>



describe('Hooks and Tags',()=>{
    before(()=>{
        cy.log("#####Launch Appilcation#######")
    })
it("Search",()=>{
    cy.log('#######Search######')
})

it("Advance Search",()=>{
    cy.log('######Advance Search######')
})
after(()=>{
    cy.log("#####Close Appilcation#######")
})

beforeEach(()=>{
    cy.log("########BeforeEachStep###########")
})
})