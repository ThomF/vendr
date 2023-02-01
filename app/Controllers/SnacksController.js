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





export class SnacksController{


    constructor(){
        _drawSnacks()
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
        let money = appState.money
        console.log('im working')
        let snack = appState.snacks
        let priceFind = snack.find(name => name.price == name)
        if (money <= 0) {
            Pop.toast("Broke Bozo", 'warning', 'top-end', 3000, true)
        }else{
            console.log('money money')
            money -= this.price 
            setText('currentMoney', money)
        }
    }
        
    }



    
