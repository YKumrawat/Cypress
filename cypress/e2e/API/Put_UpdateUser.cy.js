///<reference types = "Cypress" />
const dataforPost_createUser = require('../../fixtures/Post-CreateUser')
describe("create and upadte user",()=>{
    let token ="Bearer 1cb05b074e8e73065279f53096075c22b0919cfab5e51bd418d6ee430347bb56";

    it("Update User data",()=>{

let pattern = "qwertyuiopasdfghjklzxcvbnm";
let randomText;
let testemail='';
    let i;
for (i=0;i<=10;i++){
    randomText=  pattern.charAt(Math.floor(Math.random() *(i+1)));
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
       
            expect(response.status).to.eq(201);
            expect(response.body).has.property('name',dataforPost_createUser.name);
            expect(response.body).has.property('gender',dataforPost_createUser.gender);
         
            return response

        }).then((response)=>{
            const userid =  response.body.id;

            cy.request({failOnStatusCode: false,
                method: 'PUT',
                url:'https://gorest.co.in/public/v2/users/'+userid,
                headers:{
                    "Authorization":token
                },
                //body is passing from json file
               // body:dataforPost_createUser

               body:{
                "name": "Test",
                "gender": "female",
                "email": "test1"+testemail +"@mail.com",
                "status": "active"}
               
                }).then((response)=>{
                    cy.log(JSON.stringify(response.body))
                   //expect(response.status).to.eq(200);
                  // expect(response.body.id).to.eq(userid);
                })
            })
        })
})
