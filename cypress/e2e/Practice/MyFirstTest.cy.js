

describe('suite name1',()=>{
    it('test1',()=>{
cy.visit("https://www.amazon.in/");
cy.get('#nav-logo-sprites').should('have.visible').and('exist');
cy.get('#twotabsearchtextbox')
cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
cy.get('.hm-icon.nav-sprite').click();
cy.xpath("(//a[@class='hmenu-item'][normalize-space()='Best Sellers'])[1]").click();
cy.xpath("//a[normalize-space()='Amazon Launchpad']").click();
cy.get('#nav-logo-sprites').click();
cy.get('#twotabsearchtextbox').type('coffee');
cy.get('#twotabsearchtextbox').should('have.value','coffee');



    })
})
describe('suite name2',function(){
    it('test1',()=>{
cy.visit("https://www.amazon.in/");
cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

    })

    it.only('Explicit Assertion',()=>{
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
cy.get("input[placeholder='Username']").type('Admin');
cy.get("input[placeholder='Password']").type('admin123');
cy.get("button[type='submit']").click();
cy.clearAllCookies({log:true,timeout:15000})
cy.xpath("//p[@class='oxd-userdropdown-name']",{timeout:4000}).should('be.visble')
let expName="xyz"
cy.xpath("//p[@class='oxd-userdropdown-name']").then((ex)=>{
    let actName =x.text();
    expect(expName).to.not.equal(actName);
    assert.equal(expName,actName)
    

})


    })
})