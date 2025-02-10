export class Ships {

    constructor(ship, length){

        this.ship = ship,

        this.length = length,

        this.hit = 0, 

        this.sunk = false


    }

    isHit(){

        if(this.hit == this.length){

            this.sunk = true
            this.isSunk()
        }
        else{

            console.log(`${this.ship} has been hit ${this.hit} times`)
        }
        
    }

    isSunk(){

        console.log(`${this.ship} has been sunk mayday mayday`)
    }

}
