export class Battleship {


    gameBoard(){

        let gameBoard = []
        let column = 10
        let row = 10

        for(let i = 0; i < column; i++){

            gameBoard[i] = []

        for(let j = 0; j < row; j++){

            gameBoard[i][j] = j
        }
        }

        return gameBoard

    }

    placeShips(){

        let gameBoard = this.gameBoard()

        console.log(gameBoard)

    }


}
