class Login
{
txtUsername = "input[placeholder='Username']";
txtPassword = "input[placeholder='Password']";
btnSubmit = "button[type='submit']";
lblMsg = ".oxd-topbar-header-breadcrumb>.oxd-text";

    setUsername(username){
        cy.get(this.txtUsername).type(username);
    }

    setPassword(password){
        cy.get(this.txtPassword).type(password);
    }

    clickSubmit(){
        cy.get(this.btnSubmit).click();
    }

    verifyLogin(expected){
        cy.get(this.lblMsg).should('have.text',expected);
    }
}

export default Login;