import '@4tw/cypress-drag-drop'
class Interactions{
    interaction_InteractionsOption = "//div[contains(@class,'header-text')][normalize-space()='Interactions']";
    interaction_BtnDroppable = "//span[normalize-space()='Droppable']";
    interaction_Draggble = "#draggable";
    interaction_Droppable ="#droppable";

    clickOninteractionOption(){
        cy.scrollTo('bottom');
        cy.xpath(this.interaction_InteractionsOption).click();
    }
    clickOnDroppable(){
        cy.xpath(this.interaction_BtnDroppable).click({force:true});
    }
    dragDrop(){
        cy.get(this.interaction_Draggble).move({ deltaX: 200, deltaY: 50 });
    }

    checkdrop(){
        return cy.get(this.interaction_Droppable);
    }

}

export default Interactions;