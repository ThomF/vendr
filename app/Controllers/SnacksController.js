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





export class SnacksController{


    constructor(){
        _drawSnacks()
    }

    increaseMoney(){
        console.log("did it work")
        snacksService.increaseMoney()
        setText('currentMoney', appState.money + 1)
    }

    dispenseMoney(){
        let money = appState.money
        
        if (money <= 0) {
            Pop.toast("Broke Bozo", 'warning', 'center', 3000, true)
        }else if (money >= 0){
            console.log('money money')
        
        }

    }




    
}