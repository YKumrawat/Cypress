import 'cypress-file-upload'
describe('File upload: ',()=>{
    it('file upload: single file',()=>{
cy.visit("https://the-internet.herokuapp.com/upload");
//cy.get('#file-upload').attachFile('Yashika.pdf');

//Rename the file name while upload
cy.get('#file-upload').attachFile({filePath:'Yashika.pdf',fileName:'Test.pdf'});
cy.get('#file-submit').click();
cy.wait(5000)
cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
})

it('file upload: Drag-n-Drop',()=>{
    cy.visit("https://the-internet.herokuapp.com/upload");
    //cy.get('#file-upload').attachFile('Yashika.pdf');
    
    //Rename the file name while upload
    cy.get('#drag-drop-upload').attachFile('Yashika.pdf',{subjectType:'drag-n-drop'});
    cy.wait(5000)
    cy.get("div.dz-filename").contains('Yashika.pdf');
    })


    it.only('Shadow-Dom',()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('Yashika.pdf');
        cy.get('.smart-file',{includeShadowDom:true}).contains('Yashika.pdf');
    })
})