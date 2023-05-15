import Login from "../../PageObjects/LoginPage.js";
describe('Login to OrangeHRM',()=>{
let testData;
    before(()=>{
        cy.fixture("example").then((data)=>{
testData=data;
        })
    })

    it('Login',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        const ln = new Login();
        
        ln.setUsername(testData.username);
        ln.setPassword(testData.passwor);
        ln.clickSubmit();
        ln.verifyLogin(testData.expected);


    })



})
