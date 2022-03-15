describe("Verify Amazon Product Search page", ()=> {

    beforeEach(()=> {

        cy.visit("https://amazon.in");

    })

    it("TC#1 - Search Product", ()=> {

        cy.get("#searchDropdownBox").scrollIntoView().select("Electronics", {force:true})

        cy.get("#twotabsearchtextbox").type("Apple Watch")

        cy.get("#nav-search-submit-button").click()

        cy.get("[data-component-type='s-search-result']").as("products")

        cy.get("@products").first().invoke("text").then((productInfo) =>{

            cy.log(productInfo)
        })

        cy.get("@products").last().invoke("text").then((productInfo) =>{

            cy.log(productInfo)
        })
        
        cy.get("@products").eq(5).invoke("text").then((productInfo) =>{

            cy.log(productInfo)
        })

        cy.get("@products").first().next().invoke("text").then((productInfo) =>{

            cy.log(productInfo)
        })

        cy.get("@products").each((el, index, $list) => {


            cy.wrap(el).scrollIntoView()

            cy.log("Index - " + index + " and the product is - " + el.text())

        })

    })

    

    
})