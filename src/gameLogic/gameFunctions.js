import { Ships } from "./gamePeices"

export class Battleship {
    
   Gameboard = (array) => {

    let board = document.getElementById('gameboard')

    let gameboard = []
    let horizontal = true
    let placedShips = 0

    const changeDirection = () => {

        horizontal = !horizontal
        console.log(horizontal)
    }

    const updateBoard = (cell, value) => {

        if(value === 0){

            cell.style.backgroundColor = 'red'
        }

    }

    const updateColors = (cell, gameboard, i ,j) => {

        updateBoard(cell, gameboard[i][j])
    }

    const canPlaceShip = (gameboard, i, j, length) => {
    
        if(horizontal){

            if(i + length > 10){

                return false
            }

            for(let r = 0; r < length;  r++){
                

                if(gameboard[i + r][j] != 3){

                    return false

                }

            }
            return true
        }else{

            if(j + length > 10){


                return false
            }

            for(let r = 0; r < length;  r++){

                if(gameboard[i][j + r] != 3){

                    return false
                }
            }
            return true
        } 

    }

    let changebutton = document.getElementById('changeDirection')
    changebutton.addEventListener('click', changeDirection)


        for(let i = 0; i < 10; i++){

            gameboard[i] = []

            for(let j = 0; j < 10; j++){    

                let cell = document.createElement('div')
                cell.classList.add('cell')
                gameboard[i][j] = 3
                board.append(cell)

                cell.addEventListener('click', () => {

                if(placedShips != array.length){

                    let canPlace = canPlaceShip(gameboard, i, j, array[placedShips].length)

                    if(canPlace === false){
                        return false
                    }else{

                    if(horizontal){

                        for(let r = 0; r < array[placedShips].length; r++){

                            let row = i + r
    
                            if(i + array[placedShips].length <= 10){
    
                                gameboard[row][j] = 0
                                const targetCell = board.children[row * 10 + j]
                                updateColors(targetCell, gameboard, row, j)
                            }
                            else if ( i + array[placedShips].length > 10){
                                

                                return
                            }
    
                            }
                        placedShips++
                    }else{

                        for(let r = 0; r < array[placedShips].length; r++){

                            let column = j + r
    
                            if(j + array[placedShips].length <= 10){
    
                                gameboard[i][column] = 0
                                const targetCell = board.children[i * 10 + column]
                                updateColors(targetCell, gameboard, i, column)
                            }
                            else if (j + array[placedShips].length > 10){
    
                                return
                            }
    
                            }
                        placedShips++

                        }

                        console.log(gameboard)
                    }


                }
                 else if(placedShips === array.length){


                    return this.StartGame()
                }

                })

            }

        }


   }
   
   Placeships = () => {

        let Carrier = new Ships('Carrier', 5)
        let Battleship = new Ships('Battleship', 4)
        let Submarine = new Ships('Submarine', 3)
        let Cruiser = new Ships('Cruiser', 3)
        let Destroyer = new Ships('Destroyer', 2)

        let playerShips = [Carrier, Battleship, Submarine, Cruiser, Destroyer]

        this.Gameboard(playerShips)
   }

   StartGame = () => {

    console.log('Hello')
   }

}
new Battleship().Placeships()
