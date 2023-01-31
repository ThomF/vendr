

export class Snack{

    constructor(data){
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
    }

    get ListTemplate() {
        return `
        <div class="col-2">
            <div class="card cWidth text-center">
                    <img class="cImg"
                    src="${this.imgUrl}"
                    alt="">
                <div class="card-body">
                    <h5>${this.name}</h5>
                    <p>Handy Item to help you catch Pokemon!</p>
                    <p>$${this.price}</p>
                    <button class="btn btn-primary">BUY</button>
                    </div>
            </div>
        </div>
        `
    }




}