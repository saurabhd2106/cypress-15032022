describe("Drag and Drop", ()=> {

    beforeEach(()=>{
        cy.visit("https://jqueryui.com/droppable/")
    })

    it("TC #1 - Handling IFrame and Drag and Drop", ()=> {

       cy.get(".demo-frame").then(frame =>{

            const body = frame.contents().find("body")

            cy.wrap(body).find("#draggable").as("draggable")

            cy.wrap(body).find("#droppable").as("droppable")


       })

       cy.get("@draggable").trigger("mousedown", {which: 1})

       cy.get("@droppable").trigger("mousemove").trigger("mouseup", {force: true})
       

    }) 

   
})