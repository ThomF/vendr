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

function _drawSnack(){
    let activeSnack = appState.activeSnack
    setHTML('active-snack', activeSnack.ActiveTemplate)
}

function drawMoney(){
    let money = appState.money

    setText(money += 1)
}

export class SnackController{


    constructor(){
        _drawSnacks()
    }




    
}