/// <reference types= "cypress" />

// describe('Print the name of the first item and the last item ', () => {
//   it('first category - FEATURED', () => {
//         cy.visit("https://www.automationteststore.com/");

//         cy.get('#featured > .container-fluid').find('.prdocutname').first().invoke('text').then((the_text)=>{
//           cy.log(`first item inside the Featured Category is : ${the_text}`)
//         })

//         cy.get('#featured > .container-fluid').find('.prdocutname').last().invoke('text').then((the_text)=>{
//           cy.log(`last item inside the Featured Category is : ${the_text}`)

//         })
//   });

//   it('second category - latest products', () => {
//     cy.visit("https://www.automationteststore.com/");

//     cy.get('#latest > .container-fluid').find('.prdocutname').first().invoke('text').then((the_text)=>{
//       cy.log(`first item inside the latest Category is : ${the_text}`)
//     })

//     cy.get('#latest > .container-fluid').find('.prdocutname').last().invoke('text').then((the_text)=>{
//       cy.log(`last item inside the latest Category is : ${the_text}`)

//     })
// });

// it('third category - BEST SELLERS', () => {
//     cy.visit("https://www.automationteststore.com/");

//     cy.get('#bestseller > .container-fluid').find('.prdocutname').first().invoke('text').then((the_text)=>{
//     cy.log(`first item inside BEST SELLERS Category is : ${the_text}`)
//     })

//     cy.get('#bestseller > .container-fluid').find('.prdocutname').last().invoke('text').then((the_text)=>{
//     cy.log(`last item inside BEST SELLERS Category is : ${the_text}`)

//     })
// });

// it('fourth category - SPECIALS', () => {
//     cy.visit("https://www.automationteststore.com/");

//     cy.get('#special > .container-fluid').find('.prdocutname').first().invoke('text').then((the_text)=>{
//     cy.log(`first item inside SPECIALS Category is : ${the_text}`)
//     })

//     cy.get('#special > .container-fluid').find('.prdocutname').last().invoke('text').then((the_text)=>{
//     cy.log(`last item inside SPECIALS Category is : ${the_text}`)

//     })
// });
// });

// describe("this is to see the price multiply by 10 ", () => {
//   it("hey we need to see the price multiply by 10 for the first item inside best seller category", () => {
//     cy.visit("https://www.automationteststore.com/");
//     cy.get("#bestseller > .container-fluid")
//       .find(".oneprice").first().invoke("text").then((the_text) => {

//         let ModifiedPrice = (the_text.replace("$",""))*10
//         cy.log(ModifiedPrice)

//          alert(`the price of the first product of third category - BEST SELLERS multiplied by 10 is ${ModifiedPrice}`)


//       });
//   });
// });


describe('assignment', () => {
    it('calculates and displays sums of old and new prices', () => {
        cy.visit("https://www.automationteststore.com/");


        let newPrices = [];
        cy.get('#special > .container-fluid').find('.pricenew').each((item) => {
            cy.wrap(item).invoke('text').then((newPrice) => {
                newPrices.push(parseFloat(newPrice.replace('$', '')));
            });
        }).then(() => {

            let oldPrices = [];
            cy.get('#special > .container-fluid').find('.priceold').each((item) => {
                cy.wrap(item).invoke('text').then((oldPrice) => {
                    oldPrices.push(parseFloat(oldPrice.replace('$', '')));
                });
            }).then(() => {
              
                let sumOldPrices = oldPrices.reduce((sum, price) => sum + price, 0);
                let sumNewPrices = newPrices.reduce((sum, price) => sum + price, 0);

               
                let alertMessage = `Hey, the sum of the old prices is $${sumOldPrices.toFixed(2)}, and the sum of the new prices is $${sumNewPrices.toFixed(2)}.`;
                cy.log(alertMessage); 
                alert(alertMessage);
                });

              
            });
        });
    });

