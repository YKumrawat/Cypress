const schema = require('../../fixtures/AddressSchema')
describe('Validating the schema of Just Eat', () => {
    let res;
    let postcode_data;
    let rurl;

    before(() => {
        cy.fixture('justEat_PostCode').then((data) => {
            postcode_data = data;
        })
        cy.request({
            failOnStatusCode: false,
            method: 'GET',
            url: 'https://uk.api.just-eat.io/restaurants/bypostcode/G61',
            headers: {
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false

        }).then((response) => {
            res = response;

        })
    })

    it('Check Resturants URL', () => {
        let restaturantsNumber = res.body.Restaurants;
        if (restaturantsNumber.length > 0) {
            restaturantsNumber.forEach(($resturant, index, list) => {
                rurl = $resturant.Url
                if (rurl != null) {
                    cy.request({
                        method: 'GET',
                        url: rurl,
                    }).then((response) => {
                        cy.log(response.status)
                        expect(response.status).to.eq(200);
                    })
                }
            })
        }
    })

    it.skip('Schema validation for Adddress under Resturants object', () => {
        expect(res.status).to.eq(200);
        for (let i = 0; i < res.body.Restaurants.length; i++) {
            expect(res.body.Restaurants[i].Address).to.be.jsonSchema(schema)
        }

    })

    it.skip('Check all the restaurants with more than 1 rating should have a star rating greater than 0', () => {

        for (let i = 0; i < res.body.Restaurants.length; i++) {
            let resturantReview = res.body.Restaurants[i].Rating.Count;
            if (resturantReview > 0) {
                expect(res.body.Restaurants[i].Rating.StarRating).to.greaterThan(0);
            }
        }
    })

    it.skip('Check all the restaurants with no ratings should have a star rating of 0', () => {

        for (let i = 0; i < res.body.Restaurants.length; i++) {
            let resturantReview = res.body.Restaurants[i].Rating.Count;
            if (resturantReview == 0) {
                expect(res.body.Restaurants[i].Rating.StarRating).to.eq(0);
            }
        }
    })

    it('Check logo of all the restaurants', () => {

        for (let i = 0; i < res.body.Restaurants.length; i++) {
            let resturantLogo = res.body.Restaurants[i].LogoUrl;
            if (resturantReview == 0) {
                expect(res.body.Restaurants[i].Rating.StarRating).to.eq(0);
            }
        }
    })




})







