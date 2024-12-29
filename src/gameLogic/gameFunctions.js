import { Ships, ships } from "./gamePeices"

export class Battleship {

    gameBoard(){

        let gameBoard = []
        
        for(let i = 0; i < 10; i++){
        
                gameBoard[i] = []

            for(let j = 0; j < 10; j++){
                
                gameBoard[i][j] = 3

            }

        }  

       return gameBoard
    }

    placeShips(){

        let gameBoard = this.gameBoard()

        let Carrier = new Ships('Carrier', 5)
        let Battleship = new Ships('Battleship', 4)
        let Cruiser = new Ships('Cruiser', 3)
        let Submarine = new Ships('Submarine', 3)
        let Destroyer = new Ships('Destroyer', 2)

        let shipCount = [Carrier, Battleship, Cruiser, Submarine, Destroyer]

        let horizontal = false
        let vertical = false

        let placedShips = 0

        shipCount.forEach((element) => {

            let x = window.prompt('Enter a X Coordinate')
            let y = window.prompt('Enter a Y Coordinate')

            let direction = window.prompt('Choose H for horizontal or V for vertical')

            direction == 'V' ? vertical = true :  direction == 'H' ? horizontal = true: console.log('Hi')

            for(let i = 0; i < element.length; i++){

                if(horizontal == true){

                    y > 9 || gameBoard[x][y] != 3 ? console.log("This is invalid") : gameBoard[x][y] = element.ship, y++
                }
                else if(vertical == true){

                    x > 9 || gameBoard[x][y] != 3 ? console.log("This is invalid") :  gameBoard[x][y] = element.ship, x++

                }

                console.log(`${element.ship} has been placed at ${x}, ${y}`)
            }

            placedShips++
            
            console.log(gameBoard)

            if(placedShips == shipCount.length){

                console.log('All ships have been placed')
                console.log(shipCount)
                return this.recieveAttack(gameBoard, shipCount)
            }
            else{
    
                console.log(`Now place your ${shipCount[placedShips].ship}`)
            }
        })

    }

    recieveAttack(array, array2){

        let X = window.prompt('Choose an X coordiante for the attack')
        let Y = window.prompt('Choose an Y coordiante for the attack')

        if(array[X][Y] != 3) {

            array2.forEach((element) => {

                if(element.ship == array[X][Y]){

                    console.log(`Hit ${element.ship}`)
                    element.hit++
                }
                else{

                    console.log(`Missed ${element.ship}`)
                }
            })
            console.log(array2)
        }
        else{

            console.log('Miss')

        }

    }
}
// I think it works

// Condense all if statemnets
new Battleship().placeShips()
