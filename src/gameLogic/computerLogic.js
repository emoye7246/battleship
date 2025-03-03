import { Battleship } from "./gameFunctions"
import { Ships } from "./gamePeices"

export class Computer {


    Computerplace = (array) => {
    
        let computerGameboard = []
        let gameboardComp = document.getElementById('gameBoardComp')

        let placedShips = 0

        const updateBoard = (computerCell, value) => {

            if(value != 3){

                computerCell.style.backgroundColor = 'blue'
            }

        }

        const updateColors = (computerCell, computerGameboard, i, j) => {

            updateBoard(computerCell, computerGameboard[i][j])


        }

        const canPlaceShip = (computerGameboard, i, j, length, choice) => {


            if(choice === 'H'){

                if(i + length > 10){
                    
                    return false
                }
                for(let r = 0; r < length; r++){

                    if(computerGameboard[i + r][j] != 3){

                        return false
                    }
                }
                return true
            }else{

                if(j + length > 10){

                    return false
                }
                
                for(let r = 0; r < length; r++){

                    if(computerGameboard[i][j + r] != 3){

                        return false
                    }
                }

                return true
            }
        }

        const computerChoice = (computerGameboard) => {

            let pickDirection = ['H', 'V']
            let pickDirectionChoice = pickDirection[Math.floor(Math.random() * pickDirection.length)]


            let numRows = computerGameboard.length
            let numCols = computerGameboard[0].length

            let i = Math.floor(Math.random() * numRows)
            let j = Math.floor(Math.random() * numCols)

            let canPlace = canPlaceShip(computerGameboard, i, j, array[placedShips].length , pickDirectionChoice)

            if(canPlace === false){

                computerChoice(computerGameboard)

            }else{
                
                if(pickDirectionChoice === 'H'){

                    for(let r = 0; r < array[placedShips].length; r++){

                        let row = i + r

                        if(i + array[placedShips].length <= 10){

                            computerGameboard[row][j] = array[placedShips].ship
                            const targetCell = gameboardComp.children[row * 10 + j]
                            updateColors(targetCell, computerGameboard, row, j)
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

                            computerGameboard[i][column] = array[placedShips].ship
                            const targetCell = gameboardComp.children[i * 10 + column]
                            updateColors(targetCell, computerGameboard, i, column)
                        }
                        else if (j + array[placedShips].length > 10){

                            return
                        }

                        }
                    placedShips++

                }

            }
                
                
                

        }

        for(let i = 0; i < 10; i++){

            computerGameboard[i] = []

            for(let j = 0; j < 10; j++){

                let computerCell = document.createElement('div')
                computerCell.classList.add('computerCell')
                computerGameboard[i][j] = 3
                gameboardComp.append(computerCell)

                computerCell.addEventListener('click', () => {
                    
                    console.log(computerGameboard[i][j])
                })


            }
        }

        for(let r = 0; r < array.length; r++){

            computerChoice(computerGameboard)
        }

        if(placedShips === array.length){

            return new Battleship().StartGame()
        }


    }

    PlaceComputerShips = () => {

        let Carrier = new Ships('Carrier', 5)
        let Battleship = new Ships('Battleship', 4)
        let Submarine = new Ships('Submarine', 3)
        let Cruiser = new Ships('Cruiser', 3)
        let Destroyer = new Ships('Destroyer', 2)

        let playerShips = [Carrier, Battleship, Submarine, Cruiser, Destroyer]

        this.Computerplace(playerShips)

    }
}

new Computer().PlaceComputerShips()