describe('Resturants Api',()=>{
    let rurl;
it("Verify Resturants URL",()=>{
    cy.request({
        failOnStatusCode:false,
        method:'GET',
        url:'https://uk.api.just-eat.io/restaurants/bypostcode/G61',
        headers: {
            'Content-Type':'application/json'
        },
    }).then((res)=>{

expect(res.status).to.eq(200);
 let restaturantsNumber = res.body.Restaurants;
 if(restaturantsNumber.length>0){
 restaturantsNumber.forEach(($resturant, index,list) => {
   rurl= $resturant.Url
   if(rurl != null)
    {
        return;
    }
   }


 )
}
    
 })



})



})