import { appState } from "../AppState.js"
import { saveState } from "../Utils/Store.js"
import { Pop } from "../Utils/Pop.js";


class SnacksService {


    increaseMoney(){
        appState.money += 1
        console.log(appState.money);
    }

    subtractTotal(name){
        let totalMoney = appState.money

    }

}



export const snacksService = new SnacksService()