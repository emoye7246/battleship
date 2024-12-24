import { ships } from "./gamePeices"


let gameBoard = []

export class Battleship {

    gameBoard(){
        
        let board = document.getElementById("board");
        board.style.gridTemplateColumns = `repeat(${10}, 1fr)`;
        
        
        for(let i = 0; i < 10; i++){
        
                gameBoard[i] = []

            for(let j = 0; j < 10; j++){
                
                gameBoard[i][j] = 3

            }

        }  

       return gameBoard
        // every square represents a j so you must think how you would use j to manipulate each square
    }

    createDom(){

        this.gameBoard()

        board.style.gridTemplateColumns = `repeat(${10}, 1fr)`;
    
        for(let i = 0; i < 10; i++){
    
        let board = document.getElementById("board");
            
        for(let j = 0; j < 10; j++){
            
            let squares = document.createElement('div')
            squares.classList.add('squares')
            board.append(squares)

            this.placeShips(squares, i, j)

        }
    
    } 

    }

    placeShips(check, x, y){

        check.addEventListener('click', () => {

            gameBoard[x][y] = 0
            console.log(gameBoard)
        })

    }

    // Make a function in the ships object to see where objects are placed 
    // Start here 
}



// new Battleship().gameBoard()
