
class Widgets
{
    widgets_btnProgressBar = "//span[normalize-space()='Progress Bar']";
    widgets_Start = "//*[@id='startStopButton']";
    widgets_progressBar = "//*[@id='progressBar']/div";
    widgets_btnReset = "//*[@id='resetButton']";
    widgets_btnToolTip = "div[class='element-list collapse show'] li[id='item-6'] span[class='text']";
    widgets_btnHover ="//*[@id='toolTipButton']";

    clickOnProgressBarOption(){
        cy.xpath(this.widgets_btnProgressBar).click();
    }
    clickOnStart(){
        cy.xpath(this.widgets_Start).click({force:true});
        /*let c=0;
        while(c>=0)
        {
           //let v= cy.xpath(this.widgets_progressBar).invoke('aria-valuenow');
            then(($el)=>{
                cy.log(parseInt($el.text().replace('%','')));
                c = parseInt($el.text().replace('%',''));
           
            })
            c++;
            //cy.log(v);
            //if(v==100) break;
        }*/
        
    }
    checkBtnReset(){
        return cy.xpath(this.widgets_btnReset,{ timeout: 15000 });
    }
    clickOnToolTipOption(){
        cy.get(this.widgets_btnToolTip).click();
    }
    mouseHoverOnBtn(){
        return cy.xpath(this.widgets_btnHover).trigger('mouseover');
    }
}

export default Widgets