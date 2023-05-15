import Home from "../PageObjects/HomePage.js";
import Elements from "../PageObjects/ElementsPage.js";
import Forms from "../PageObjects/Forms.js";
import Widgets from "../PageObjects/WidgetsPage.js";
import Interactions from "../PageObjects/Interactions";



describe("Elements option functionality",()=>{
    const viewports = ['macbook-11','macbook-16']
    let data;
    const elements = new Elements();
    const home = new Home();
    const forms = new Forms();
    const widgets = new Widgets();
    const interactions = new Interactions();
before(()=>{
    
    cy.fixture("testDataFile").then((testdata)=>{
data =testdata;
    })
})

beforeEach(()=>{
   // cy.viewport(414,736);
    home.GoToURL();

})


    it.skip("Verify user can enter new data into table",()=>{
     
//cy.viewport(array);
home.clickOnElements();
elements.clickOnWebTables();
elements.clickOnAdd();
elements.enterFirstName(data.fix_firstName);
cy.log(data.fix_firstName);
elements.enterLastName(data.fix_lastName);
elements.enterAge(data.fix_age);
elements.enterEmail(data.fix_email);
elements.enterSalary(data.fix_salary);
elements.enterDepartment(data.fix_department);
elements.clickOnSubmit();
elements.emailFromLastRow().should('have.text',data.fix_email)
    })

    it.skip("Verify user can edit the row in a table",()=>{
    
        home.clickOnElements();
        elements.clickOnWebTables();
        elements.clickOnAdd();
        elements.enterFirstName(data.fix_firstName);
        elements.enterLastName(data.fix_lastName);
        elements.enterAge(data.fix_age);
        elements.enterEmail(data.fix_email);
        elements.enterSalary(data.fix_salary);
        elements.enterDepartment(data.fix_department);
        elements.clickOnSubmit();
        elements.clickOnEditIconSecondRow();
        elements.enterFirstName(data.fix_secondRowFirstName);
        elements.enterLastName(data.fix_secondRowLastName);
        elements.clickOnSubmit();
        elements.secondRowFirstname().should('have.text',data.fix_secondRowFirstName);
        elements.secondRowLastname().should('have.text',data.fix_secondRowLastName)


    })


    it("Verify broken image",()=>{
     
        home.clickOnElements();
       elements.clickOnBrokenLinksOption();
       elements.brokenImage().should('be.visible')
       .should(([img])=>{
        expect(img.naturalWidth).to.eq(0);
        expect(img.naturalWidth).to.eq(0);
       })

    })

    it.skip("Verify user can submit the form",()=>{
        home.GoToURL();
        home.clickOnForm();
        forms.clickOnPraticeForm();
        forms.enterFirstnameInForm(data.fix_forms_Firstname);
        forms.enterLastnameInForm(data.fix_forms_Lastname);
        forms.enterEmailInForm(data.fix_forms_Email);
        forms.selectGenderAsMale();
        forms.enterMobile(data.fix_forms_Mobile);
        //On clearing DOB field, page is getting blank
        //forms.enterDOB(data.fix_forms_DOB);
        forms.enterSubjects(data.fix_forms_subjects);
        forms.selectHobbiesAsReading();
        forms.fileUpload('image.jpg');
        forms.enterCurrentAddress(data.fix_forms_currentAddress);
        forms.selectState(data.fix_form_state);
        forms.selectCity(data.fix_form_city);
        forms.clickSubmit();
        forms.checkSuccess().should('contain.text','Thanks for submitting the form');


    })

    it.skip("Verify the progress bar",()=>{
     
        home.clickOnWidgets();
        widgets.clickOnProgressBarOption();
        widgets.clickOnStart();
        widgets.checkBtnReset().should('be.visible');
    })

    it.skip("Verify the tooltip",()=>{
   
        home.clickOnWidgets();
        widgets.clickOnToolTipOption();
        widgets.mouseHoverOnBtn().should('have.attr', 'aria-describedby','buttonToolTip');
    })

    it.skip("Verify user can drag and drop",()=>{
    
        home.clickOnInteractions();
        interactions.clickOninteractionOption();
        interactions.clickOnDroppable();
        interactions.dragDrop();
        interactions.checkdrop().should('have.attr','class', 'drop-box ui-droppable ui-state-highlight');
    })
})