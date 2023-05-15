
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
    qs:{
        "gender":"female"
    },
    headers:{
        "Authorization": token
    },
    failOnstatusCode:false,
    }).then((response)=>{
        expect(response.status).to.eq(200);
        expect(response.body.length).to.eq(10);

      response.body.forEach(($user,index,list)=>{

expect($user.gender).to.eq('female');
if(($user.id)==(1176531)){
expect($user.name).to.eq('Ankal Sethi');

}
      })
      });
    })
    it('Create user',()=>{
const pattern="qwertyuiopasdfghklzxcvbnm";

// 1. Create user
let i;
for (i=0;i<=10;i++){
    randomText=  pattern.charAt(Math.floor(Math.random() *(pattern.length)));
testemail = testemail+randomText;
}
cy.log('test email is:'+testemail);
let response = "";

        cy.request({failOnStatusCode: false,
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                "Authorization":token
            },
            body:{
    "name": dataforPost_createUser.name,
    "gender": dataforPost_createUser.gender,
    "email": "test"+testemail +"@mail.com",
    "status": dataforPost_createUser.status}
        }).then((response)=>{
            cy.log(JSON.stringify(response));
       
            expect(response.status).to.eq(201);
            expect(response.body).has.property('name',dataforPost_createUser.name);
            expect(response.body).has.property('gender',dataforPost_createUser.gender);
            const userid =  response.body.id;
      

//2. Get user 
         
            cy.log("User id is:" +userid);
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
            }
            )

        })
    })
})
