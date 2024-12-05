import { Ships } from "./gamePeices"
import { ships } from "./gamePeices"

export class Battleship {


    gameBoard(){

        let gameBoard = []
        let column = 10
        let row = 10

        for(let i = 0; i < column; i++){

            gameBoard[i] = []

        for(let j = 0; j < row; j++){

            gameBoard[i][j] = 3
        }
        }

        return gameBoard

    }

    placeShips(xcord, marker, shipSpots){

        let horizontal = false
        let vertical = true
        let gameBoard = this.gameBoard()

        if(horizontal == true){

            gameBoard[xcord].fill(0, marker, marker + shipSpots)
    
            console.log(gameBoard)
    
            this.recieveAttack(gameBoard, 0, 0)
        }
        else if(vertical == true){
            

            for(let i = 0; i < shipSpots; i++){

                gameBoard[i][marker] = 0
                // FIVE BIG BOOOMMS

            }

            console.log(gameBoard)


        }


        
    }


    // find a way to change horizontal or diagonal 

    recieveAttack(gameBoard, xCord, yCord){

        let attack = gameBoard[xCord][yCord]

        if(attack == 0){

            console.log('PlayerOne is hit')
        }
        else{

            console.log('miss')
        }

        console.log(attack)
    }


}
new Battleship().placeShips(8, 4, ships[0].spots)
