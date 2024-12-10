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

    placeShips(x, y, ship){

        let gameBoard = this.gameBoard()
        let horizontal = false
        let vertical = true
    
        for(let i = 0; i < ship; i++){

            if(x >= 10 || y >= 10){

                return console.log('Please place on gameboard')
            }
            else if(gameBoard[x][y] != 3 ){

                return console.log('Space is occupied')
            }
            else{

                if(horizontal == true){
                    gameBoard[x][y++] = 0
                }

                if(vertical == true){

                    gameBoard[x++][y] = 0
                }
                
            }
        }

        console.log(gameBoard)
        
    }


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
new Battleship().placeShips(9, 3, ships[0].spots)

