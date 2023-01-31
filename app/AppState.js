import { Snack } from "./Models/Snack.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Snack').Snack[]} */
  snacks = [
    new Snack({
      name: 'pokeball',
      price: 10,
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png'
    }),
    new Snack({
      name: 'ultraball',
      price: 50,
      imgUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c861d306-8f42-4864-ab2e-61a271518c8a/df3b63i-4672f9df-2106-4591-94b7-4482b9815a0c.png/v1/fill/w_1280,h_1281,strp/ultra_ball_by_ace_zeroartic_df3b63i-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MSIsInBhdGgiOiJcL2ZcL2M4NjFkMzA2LThmNDItNDg2NC1hYjJlLTYxYTI3MTUxOGM4YVwvZGYzYjYzaS00NjcyZjlkZi0yMTA2LTQ1OTEtOTRiNy00NDgyYjk4MTVhMGMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.z0bcUU1CPmGsZtvbDJ-44U-qe6D-GuAXOCisC50aWc4'
    }),
    new Snack({
      name: 'megaball',
      price: 5000,
      imgUrl: 'http://www.pokemongobrasil.com/wp-content/uploads/2016/08/master_ball__01__by_adfpf1-d7ea28n.png'
    })
  ]


  /** @type {number} */
  money = 0

}













// STUB DO NOT EDIT
export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
