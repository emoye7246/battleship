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

            if(direction == 'V'){

                vertical = true
                horizontal = false
            }
            else if(direction == 'H'){

                horizontal = true
                vertical = false
            }

            for(let i = 0; i < element.length; i++){

                if(horizontal == true){


                    if(y > 9 || gameBoard[x][y] != 3){

                        return console.log("This is invalid")
                    }
                    else{

                        gameBoard[x][y] = element.position
                        y++

                    }
                    
                }
                else if(vertical == true){

                    if(x > 9 || gameBoard[x][y] != 3){

                        return console.log("This is invalid")
                    }
                    else{

                        gameBoard[x][y] = element.position
                        x++ 

                    }

                }
                console.log(`${element.ship} has been placed at ${x}, ${y}`)
            }
            placedShips++
            console.log(gameBoard)

            if(placedShips == shipCount.length){

                console.log('All ships have been placed')
                return this.recieveAttack(gameBoard)
            }
            else{
    
                console.log(`Now place your ${shipCount[placedShips].ship}`)
            }
        })

    }

    recieveAttack(array){

        let X = window.prompt('Choose an X coordiante for the attack')
        let Y = window.prompt('Choose an Y coordiante for the attack')

        if(array[X][Y] == 0){

            console.log('Hit')
        }
        else{

            console.log('Miss')
        }

    }
}
// I think it works
new Battleship().placeShips()
