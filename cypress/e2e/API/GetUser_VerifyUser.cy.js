
/// <reference types ="Cypress" />
const dataforPost_createUser = require('../../fixtures/Post-CreateUser')
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
        expect(response.status).to.eq(200);
        expect(response.body.length).to.eq(10);

      response.body.forEach(($user,index,list)=>{

expect($user.gender).to.eq('female');
const userid =$user.id;

cy.request({
    metghod: 'GET',
    url:'https://gorest.co.in/public/v2/users/'+userid,
    headers:{
               "Authorization": token
    }
}).then((response)=>{
expect(response.body).has.property('id',userid);
expect(response.body).has.property('name',dataforPost_createUser.name);
expect(response.body).has.property('gender',dataforPost_createUser.gender);
})

})
})

})
})