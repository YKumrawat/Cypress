
///<reference types="Cypress"/>
describe('Handle Table',()=>{

beforeEach('login',()=>{
    cy.visit('https://demo.opencart.com/admin/index.php')
    cy.get("[name='username']").type("demo")
    cy.get("[name='password']").type("demo")
    cy.get("[type='submit']").click()

  cy.get('.btn-close').click();
  cy.get("a[href='#collapse-5']").click();
  cy.get("li#menu-customer>ul>li:first-child").click();


})
it.skip('Row number and column',()=>{

    //row
    cy.xpath("//table[@class='table table-bordered table-hover']//tbody/tr").should('have.length',10);
    //column
    cy.xpath("//table[@class='table table-bordered table-hover']//thead//tr/td").should('have.length',7)

    cy.xpath("//table[@class='table table-bordered table-hover']//following::tr[4]/td[3]").contains('gorankreziccc90@gmail.com')

})

it.skip('Read All the rows and columns data',()=>{
    cy.xpath("//table[@class='table table-bordered table-hover']//tbody/tr").each(($row,index,$rows)=>{
cy.wrap($row).within(()=>{
    cy.get("td").each(($col,index,$cols)=>{
        cy.log($col.text());
    })})
})
})


it('Pagination',()=>{
//Find number of pages
cy.get('.col-sm-6.text-end').then((el)=>{
   let mytext =el.text();
   let totalPages =mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1)
   cy.log("Total number of pages"+totalPages);

   let pageno =5;
   for(let i =1; i<pageno;i++){
    if(pageno>1){
        cy.log("Active Page:"+i+"")
        cy.get("ul.pagination>li:nth-child("+i+")").click()

            cy.xpath("//table[@class='table table-bordered table-hover']//tbody/tr").each(($row,index,$rows)=>{
cy.wrap($row).within(()=>{
    cy.xpath("//td[3]").then((ele)=>{
        cy.log(ele.text());
    })

})
            })

    }
   }
})

//     cy.xpath("//table[@class='table table-bordered table-hover']//tbody/tr").each(($row,index,$rows)=>{
// cy.wrap($row).within(()=>{
//     cy.get("td").each(($col,index,$cols)=>{
//         cy.log($col.text());


//     })})
// })
})

})