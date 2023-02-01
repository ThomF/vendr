import { appState } from "../AppState.js"
// @ts-ignore
import { saveState } from "../Utils/Store.js"
import { Pop } from "../Utils/Pop.js";



class SnacksService {


    increaseMoney(){
        appState.money += 1
        console.log(appState.money);
    }

    dispenseMoney(name){
        let money = appState.money
        // console.log('im working')
        // let snack = appState.snacks
        let currentSnack = appState.snacks.find(p => p.name == name)
        // @ts-ignore
        if (money <= currentSnack.price) {
            Pop.toast("Broke Bozo", 'warning', 'top-end', 3000, true)
        }else if(money >= currentSnack.price){
            console.log('money money')
            // @ts-ignore
            money -=  currentSnack.price
        }
    }

    }





export const snacksService = new SnacksService()