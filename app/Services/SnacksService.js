import { appState } from "../AppState.js"
import { saveState } from "../Utils/Store.js"


class SnacksService {


    increaseMoney(){
        appState.money += 1
        console.log(appState.money);
    }




}



export const snacksService = new SnacksService()