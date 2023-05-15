
/// <reference types ="Cypress" />
const dataforPost_createUser = require('../../fixtures/Getusers_JsonSchema')
describe('get api user test',()=>{
    let token ="Bearer 1cb05b074e8e73065279f53096075c22b0919cfab5e51bd418d6ee430347bb56";
let randomText;
let testemail='';


it('Get user',()=>{
    cy.request({
    method: 'GET',
    url:"https://gorest.co.in/public/v2/users",
   
    headers:{
        "Authorization": token
    },
    failOnstatusCode:false,
    }).then((response)=>{
        expect(response.body).to.be.jsonSchema(dataforPost_createUser)
    
})
})

})