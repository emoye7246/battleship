import { Ships, ships } from "./gamePeices"

export class Battleship {

    gameBoard(){

        let gameBoard = []

        let board = document.getElementById('gameboard')

            for(let i = 0; i < 10; i++){

                gameBoard[i] = []

                for(let j = 0 ; j < 10; j++){


                    let cell = document.createElement('div')
                    cell.dataset.x = 3
                    cell.dataset.y = 3
                    cell.classList.add('cell')
                    board.append(cell)
                    gameBoard[i][j] = cell
                    if(cell.dataset.x === 'X'){

                        cell.style.backgroundColor = 'red'
                    }

                    this.gameBoardLogic(gameBoard, i, j, cell)

                }

            }


            console.log(gameBoard)
    }

    gameBoardLogic(gameBoard, i, j, cell){

        let isValid = null
    
        let horizontal = false
        let vertical = true

        const checkValues = (gameBoard) => {

            gameBoard.forEach(spot => {

                spot.forEach(element => {

                    if(element.dataset.x === 'X' || element.dataset.y === 'X' ){

                        element.style.backgroundColor = 'red'
                    }
                })
            })

        }
        
        cell.addEventListener('click', () => {

            // iterate through ships length

            for(let r = 0; r < 5; r++){

                if(i < 0 || i > 9 || j < 0 || j > 9){

                    console.log('invalid')
                    return
                }
                else {

                    if(horizontal == true){

                        gameBoard[i++][j].dataset.x = 'X'

                    }else if( vertical == true){

                        gameBoard[i][j++].dataset.y = 'X'

                    }
                }
            }
            checkValues(gameBoard)
            
            console.log(gameBoard)
        
            // check if the selection is valid or not 
            // if valid then you can proceed 
            
            

            // must determine wether or not the ship direction is either horizontal or vertical
        })

        // Iterate ships length first 
        // If one comes back invalid stop the function
        // If none come back invalid update the colors

    }

    placeShips(){


        let Carrier = new Ships('Carrier', 5)
        let Battleship = new Ships('Battleship', 4)
        let Cruiser = new Ships('Cruiser', 3)
        let Submarine = new Ships('Submarine', 3)
        let Destroyer = new Ships('Destroyer', 2)

        let shipCount = [Carrier, Battleship, Cruiser, Submarine, Destroyer]

        this.placeShipsUi(shipCount)
        
    }

    recieveAttack(array, array2){

        let check = array2.every((spot) => spot.sunk == true)

        while(check == false){

        let X = window.prompt('Choose an X coordiante for the attack')
        let Y = window.prompt('Choose an Y coordiante for the attack')

        if(array[X][Y] != 3) {

            array2.forEach((element) => {

                if(element.ship == array[X][Y]){

                    array[X][Y] = 'Hit'
                    console.log(`Hit ${element.ship}`)
                    element.hit++
                    element.isHit()
                    this.gameOver(array2)
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

    gameOver(array){

        let check = array.every((spot) => spot.sunk == true)

        if(check == true){

            console.log('You WIn')
        }
        else{
            
            console.log('Game is in progress')
        }
        

    } 

}


// new Battleship().placeShips()
new Battleship().gameBoard()
// Continue tomorrow