describe('Check broken link from jsonfile',()=>{
   let data; 
    before(()=>{
        cy.fixture('brokenlink').then((data_brokenlink)=>{
data=data_brokenlink;
        })
    })


    it("broken lin from jsonFile",()=>{
        for(let index in data){
            cy.log(data[index].url);
            cy.request({
                url:data[index].url,
                falseOnStatusCode:false
            })

        }
    })
})