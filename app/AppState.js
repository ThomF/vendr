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
      imgUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c861d306-8f42-4864-ab2e-61a271518c8a/df3b4ya-8cf2302e-1043-451d-9763-f1beacd43900.png/v1/fill/w_1280,h_1281,strp/poke_ball_by_ace_zeroartic_df3b4ya-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MSIsInBhdGgiOiJcL2ZcL2M4NjFkMzA2LThmNDItNDg2NC1hYjJlLTYxYTI3MTUxOGM4YVwvZGYzYjR5YS04Y2YyMzAyZS0xMDQzLTQ1MWQtOTc2My1mMWJlYWNkNDM5MDAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EqTfwjka0Ul1J8yEVBewpQNE7CJclv6y7WtjHLHkTDM'
    }),
    new Snack({
      name: 'greatball',
      price: 25,
      imgUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c861d306-8f42-4864-ab2e-61a271518c8a/df3b5yi-fe566d48-3f67-4034-8b5a-1fb220c3e265.png/v1/fill/w_1280,h_1281,strp/great_ball_by_ace_zeroartic_df3b5yi-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MSIsInBhdGgiOiJcL2ZcL2M4NjFkMzA2LThmNDItNDg2NC1hYjJlLTYxYTI3MTUxOGM4YVwvZGYzYjV5aS1mZTU2NmQ0OC0zZjY3LTQwMzQtOGI1YS0xZmIyMjBjM2UyNjUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.b3kIK8k3LJLj_V5OEDx80t8555WTJXtiFDxhIojCPAA'
    }),
    new Snack({
      name: 'ultraball',
      price: 50,
      imgUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c861d306-8f42-4864-ab2e-61a271518c8a/df3b63i-4672f9df-2106-4591-94b7-4482b9815a0c.png/v1/fill/w_1280,h_1281,strp/ultra_ball_by_ace_zeroartic_df3b63i-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MSIsInBhdGgiOiJcL2ZcL2M4NjFkMzA2LThmNDItNDg2NC1hYjJlLTYxYTI3MTUxOGM4YVwvZGYzYjYzaS00NjcyZjlkZi0yMTA2LTQ1OTEtOTRiNy00NDgyYjk4MTVhMGMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.z0bcUU1CPmGsZtvbDJ-44U-qe6D-GuAXOCisC50aWc4'
    }),
    new Snack({
      name: 'megaball',
      price: 5000,
      imgUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c861d306-8f42-4864-ab2e-61a271518c8a/df3czl0-481707bd-7c8e-4402-b8d1-e364deef6b8a.png/v1/fill/w_1280,h_1281,strp/master_ball_by_ace_zeroartic_df3czl0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MSIsInBhdGgiOiJcL2ZcL2M4NjFkMzA2LThmNDItNDg2NC1hYjJlLTYxYTI3MTUxOGM4YVwvZGYzY3psMC00ODE3MDdiZC03YzhlLTQ0MDItYjhkMS1lMzY0ZGVlZjZiOGEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mB7nC5evG50D-LlXYayrWD0mhD1sCSuo-UkhsDLvIp4'
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
