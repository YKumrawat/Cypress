describe("UI -Alert",()=>{

it.skip("Alert",()=>{
cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
cy.get("button[onclick='jsAlert()']").click();
cy.on('window:alert',(t)=>{
    expect(t).to.contain('I am a JS Alert');

})
cy.get("button[onclick='jsAlert()']").should('have.text','You successfully clicked an alert');
})

it.skip("Alert",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:confirm',(t)=>{
        expect(t).to.contain('I am a JS Confirm');
    })
    cy.get("#result").should('have.text','You clicked: Ok');
    })




        it.skip("Js Prompt alert with text box ",()=>{
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
            //Enter text in prompt alet
        cy.window().then((win)=>{
            cy.stub(win,"prompt").returns("Welcome")
        })

        cy.get("button[onclick='jsPrompt()']").click();
 
        cy.on('window:confirm',(t)=>{
            expect(t).to.contain('I am a JS prompt');
        })
        cy.get("#result").should('have.text','You entered: Welcome');
            })
    

it.skip('Authentication Alert',()=>{
    cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{
        username:"admin",
        password:"admin"
    }});

    cy.get('div[class="example"] p').should('have.contain','Congratulations! You must have the proper credentials.')

})

it('Authentication Alert-approch 2',()=>{
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');

    cy.get('div[class="example"] p').should('have.contain','Congratulations! You must have the proper credentials.')

})

})