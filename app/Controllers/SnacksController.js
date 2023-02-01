// @ts-nocheck
import { appState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

// STUB secret stuff

function _drawSnacks(){
    let snacks = appState.snacks
    let template = ''

    snacks.forEach(snack => template += snack.ListTemplate)

    setHTML('vendr', template)
}


function _drawMoney(){
    let money = appState.money
    let template = ''

    template += `$${appState.money}`

    setHTML('currentMoney', template)
}


export class SnacksController{

    constructor(){
        _drawSnacks()
        _drawMoney()
        appState.on('currentMoney', _drawMoney)
    }



    increaseMoney(){
        console.log("did it work")
        snacksService.increaseMoney()
        setText('currentMoney', appState.money + 1)
    }

    /**
     * @param {this.name} name
     */
    dispenseMoney(name){
        snacksService.subtractTotal(name)
    }

    dispenseMoney(name){
        console.log('working!')
        snacksService.dispenseMoney(name)
    }
}


    
