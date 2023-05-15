class Elelments{

  
    ele_webTables= "div[class='element-list collapse show'] li[id='item-3'] span[class='text']";
    ele_BtnAdd = "#addNewRecordButton";
    ele_txtfirstName="#firstName";
    ele_txtLastName="#lastName";
    ele_txtEmail="#userEmail";
    ele_txtAge="#age";
    ele_txtSalary="#salary";
    ele_txtDepartment="#department";
    ele_btnSubmit="#submit";
    ele_rowlastEmail="div[class='ReactTable -striped -highlight'] div:nth-child(4) div:nth-child(1) div:nth-child(4)";
    ele_iconEditSecondRow="#edit-record-2";
    ele_rowSecondFirstname=":nth-child(2) > .rt-tr > :nth-child(1)";
    ele_rowSecindLastname="div:nth-child(2) > .rt-tr > :nth-child(2)";
    ele_brokenLinks="//div[@class='element-list collapse show']//li[@id='item-6']";
    ele_brokenImage="img[src='/images/Toolsqa_1.jpg']";






    clickOnWebTables(){
        cy.get(this.ele_webTables).click();
    }

    clickOnAdd(){
        cy.get(this.ele_BtnAdd).click();

    }

    enterFirstName(firstName){
        cy.get(this.ele_txtfirstName).clear().type(firstName);

    }



    enterLastName(lastName){
        cy.get(this.ele_txtLastName).clear().type(lastName);
    }
enterAge(age){
    cy.get(this.ele_txtAge).type(age);
}

enterEmail(email){
    cy.get(this.ele_txtEmail).type(email);
}

enterSalary(salary){
    cy.get(this.ele_txtSalary).type(salary);
}

enterDepartment(department){
    cy.get(this.ele_txtDepartment).type(department)
}

clickOnSubmit(){
    cy.get(this.ele_btnSubmit).click();
}

emailFromLastRow(){
    return cy.get(this.ele_rowlastEmail);
}

clickOnEditIconSecondRow(){
    cy.get(this.ele_iconEditSecondRow).click({ force: true });
}


secondRowFirstname(){
    cy.scrollTo('right');
    return cy.get(this.ele_rowSecondFirstname);
}

secondRowLastname(){
    return cy.get(this.ele_rowSecindLastname);
}

clickOnBrokenLinksOption(){
    cy.xpath(this.ele_brokenLinks).click();
}

brokenImage(){
    return cy.get(this.ele_brokenImage);
}
}

export default Elelments;