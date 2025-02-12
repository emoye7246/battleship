import { Ships, ships } from "./gamePeices"

export class Battleship {

    gameBoardPlayer(array){

        let gameBoard = []
        let placedShips = 0
        let horizontal = false
        let vertical = true

        let board = document.getElementById('gameboard')
        let changeDirection = document.getElementById('changeDirection')



        const addShipsHorizontal = (gameBoard, i, j) => {

            for(let r = 0; r < array[placedShips].length; r++){

                gameBoard[i][j].style.backgroundColor = 'red'
                gameBoard[i][j++].dataset.x = 'X'
            }
        }

        const addShipsVertical = (gameBoard, i, j) => {

            for(let r = 0; r < array[placedShips].length; r++){

                gameBoard[i][j].style.backgroundColor = 'red'
                gameBoard[i++][j].dataset.x = 'X'
            }
        }
        

        changeDirection.addEventListener('click', () => {

                if(horizontal == true){

                    horizontal = false
                    vertical = true
                }
                else if(vertical == true){

                    vertical = false
                    horizontal = true
                }
                
            })


            for(let i = 0; i < 10; i++){

                gameBoard[i] = []

                for(let j = 0 ; j < 10; j++){

                    let cell = document.createElement('div')
                    cell.dataset.x = 3
                    cell.dataset.y = 3
                    cell.classList.add('cell')
                    board.append(cell)
                    gameBoard[i][j] = cell
                    

                    cell.addEventListener('click', () => {
                        
                        if(placedShips != array.length){

                            if(horizontal == true){

                                if(j + array[placedShips].length > 10 ){

                                    console.log('invalid because it is out of bounds')
                                    return

                                }
                                else if(gameBoard[i][j + array[placedShips].length - 1].dataset.x === 'X'){

                                    console.log('invalid because its X ')
                                    return
                                }
                                else if(gameBoard[i][j].dataset.x === 'X'){

                                    console.log('invalid because its X ')
                                    return
                                }
                                
                                else{
                    
                                console.log('valid')
                                addShipsHorizontal(gameBoard, i, j)

                                }
                                placedShips++
                                console.log(placedShips)
                            }
                    
                            if(vertical == true){

                                if(i + array[placedShips].length > 10 ){

                                    console.log('invalid because it is out of bounds')
                                    return

                                }
                                else if(gameBoard[i + array[placedShips].length - 1][j].dataset.x === 'X'){

                                    console.log('invalid because its X ')
                                    return
                                }
                                else if(gameBoard[i][j].dataset.x === 'X'){

                                    console.log('invalid because its X ')
                                    return
                                }
                                
                                else{
                    
                                console.log('valid')
                                addShipsVertical(gameBoard, i, j)

                                }
                                placedShips++
                                console.log(placedShips)
                            }
                    
                        }

                        else if(placedShips == array.length){

                            console.log('Congratulations')
                            return this.startGame(gameBoard)
                        }
                
                    })

                }
            }
    }

    gameBoardComputer(array){

        let gameBoard = []
        let placedShips = 0

        let gameBoardComp = document.getElementById('gameBoardComp')

                    
        const pickCell = (gameBoard) => {

            let numRows = gameBoard.length
            let numCols = gameBoard[0].length

            let i = Math.floor(Math.random() * numRows)
            let j = Math.floor(Math.random() * numCols)
            
            let direction = ['Horizontal', 'Vertical']
            let compChoice =  direction[Math.floor(Math.random() * direction.length)]

            if(compChoice === 'Horizontal'){

                for(let r = 0; r < array[placedShips].length; r++){

                    gameBoard[i][j++].style.backgroundColor = 'blue'
                }
                placedShips++

            }
            
            if(compChoice === 'Vertical'){

                for(let r = 0; r < array[placedShips].length; r++){

                    gameBoard[i++][j].style.backgroundColor = 'blue'
                }
                placedShips++


            }
             

         }



            for(let i = 0; i < 10; i++){

                gameBoard[i] = []

                for(let j = 0; j < 10; j++ ){

                    let cell = document.createElement('div')
                    cell.dataset.x = 3
                    cell.dataset.y = 3
                    cell.classList.add('cell')
                    gameBoardComp.append(cell)
                    gameBoard[i][j] = cell

           
                }


            }
            for(let r = 0; r < array.length; r++){

                pickCell(gameBoard)
            }



    }

    placeShips(){


        let Carrier = new Ships('Carrier', 5)
        let Battleship = new Ships('Battleship', 4)
        let Cruiser = new Ships('Cruiser', 3)
        let Submarine = new Ships('Submarine', 3)
        let Destroyer = new Ships('Destroyer', 2)

        let shipCount = [Carrier, Battleship, Cruiser, Submarine, Destroyer]

        this.gameBoardPlayer(shipCount)
    }

    placeShipsComp(){

        let Carrier = new Ships('Carrier', 5)
        let Battleship = new Ships('Battleship', 4)
        let Cruiser = new Ships('Cruiser', 3)
        let Submarine = new Ships('Submarine', 3)
        let Destroyer = new Ships('Destroyer', 2)

        let shipCount = [Carrier, Battleship, Cruiser, Submarine, Destroyer]

        this.gameBoardComputer(shipCount)

    }

    startGame(gameBoard){

        
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
new Battleship().placeShips()
new Battleship().placeShipsComp()
// Continue tomorrow