import { appState } from "../AppState.js"
// @ts-ignore
import { saveState } from "../Utils/Store.js"
import { Pop } from "../Utils/Pop.js";
import { setText } from "../Utils/Writer.js";



class SnacksService {


    increaseMoney(){
        appState.money += 1
        console.log(appState.money);
    }

    dispenseMoney(name){
        console.log('almost?!')
        let money = appState.money
        // console.log('im working')
        // let snack = appState.snacks
        let currentSnack = appState.snacks.find(p => p.name == name)
        // @ts-ignore
        if (money >= currentSnack.price) {
            currentSnack.price -= money 
        }else{
            Pop.toast("Broke Bozo", 'warning', 'top-end', 3000, true)
        }
    }

    }





export const snacksService = new SnacksService()