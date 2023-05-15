import 'cypress-file-upload'
class Forms{

forms_praticeForm = "//span[normalize-space()='Practice Form']";
forms_txtfirstName ="#firstName";
forms_txtlastName="#lastName";
forms_txtemail="#userEmail";
forms_radgenderMale="#gender-radio-1";
forms_txtmobile="#userNumber";
forms_txtsubject=".subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3"
forms_txtDOB="#dateOfBirthInput";
forms_boxhobbies="label[for='hobbies-checkbox-2']";
forms_btnUploadFile="#uploadPicture";
forms_txtcurrentAddress="#currentAddress";
forms_dropselectState="//*[@id='state']";
forms_dropcity="//*[@id='city']";
forms_btnSubmit="#submit";
forms_success="#example-modal-sizes-title-lg";


clickOnPraticeForm(){
    cy.xpath(this.forms_praticeForm).click();
}

enterFirstnameInForm(firstname){
    cy.get(this.forms_txtfirstName).type(firstname);
  
}

enterLastnameInForm(lastname){

    cy.get(this.forms_txtlastName).type(lastname);

}

enterEmailInForm(email){
    cy.get(this.forms_txtemail).type(email);
}
selectGenderAsMale(){
    cy.get(this.forms_radgenderMale).check({force: true});
}
enterMobile(mobile){
    cy.get(this.forms_txtmobile).type(mobile);
}
enterDOB(DOB){
    cy.get(this.forms_txtDOB).clear();
    cy.get(this.forms_txtDOB).type(DOB);
}

enterSubjects(subjects){
    cy.get(this.forms_txtsubject).type(subjects+'{enter}');
}

selectHobbiesAsReading(){
    cy.get(this.forms_boxhobbies).click();
}

fileUpload(filename_PresentInFituresFolder){
    cy.get(this.forms_btnUploadFile).attachFile(filename_PresentInFituresFolder);
}

enterCurrentAddress(country){
    cy.get(this.forms_txtcurrentAddress).type(country);
}

selectState(state){
    cy.xpath(this.forms_dropselectState).type(state+'{enter}');
}

selectCity(city){
    cy.xpath(this.forms_dropcity).type(city+'{enter}');

}

clickSubmit(){
    cy.get(this.forms_btnSubmit).click({force: true});
}

checkSuccess(){
    return cy.get(this.forms_success);
}

}

export default Forms;