import { Ships, ships } from "./gamePeices"

export class Battleship {

    gameBoardPlayer(array){

        let gameBoard = []
        let placedShips = 0
        let horizontal = false
        let vertical = true

        let board = document.getElementById('gameboard')
        let changeDirection = document.getElementById('changeDirection')

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

                for(let j = 0; j < 10; j++ ){

                    let cell = document.createElement('div')
                    cell.classList.add('cell')
                    board.append(cell)
                    gameBoard[i][j] = 3

                    cell.addEventListener('click', () => {

                        if(horizontal){

                            for(let r = 0; r < array[placedShips].length; r++){

                                if(gameBoard[i][j] = 0){

                                    console.log('this spot is taken')
                                    return
                                }else{

                                gameBoard[i][j++] = 0

                                }

                            }
                            placedShips++
                            console.log(gameBoard)

                        }else{

                            for(let r = 0; r < array[placedShips].length; r++){

                                if(gameBoard[i][j] = 0){

                                    console.log('this spot is taken')
                                    return
                                }else{

                                    gameBoard[i++][j] = 0


                                }
                            }
                            placedShips++
                            console.log(gameBoard)
                        }


                         

                    })

                    if(placedShips === array.length){

                        console.log('All ships are placed')
                    }

                    // As long as the console works you can just manipulate 
               
                    
           
                }

            }

            let cells = document.querySelectorAll('.cell')
            const gridwidth = 10

            cells.forEach((cell, index) => {

                cell.addEventListener('mouseover', () => {

                    if(placedShips != array.length){

                        
                    
                    
                    for(let i = 0; i < array[placedShips].length; i++){

                        let nextIndex = vertical ? index + i * gridwidth : index + i

                        if(nextIndex < cells.length){

                        if(!vertical && Math.floor(index / gridwidth) === Math.floor(nextIndex / gridwidth) ||
                        (vertical && nextIndex % gridwidth === index % gridwidth)){

                            cells[nextIndex].classList.add('highlighted')
                        }

                        
                    }
     
                        
                    }
                }
                else if(placedShips === array.length){

                    return
                }


                })

                cell.addEventListener('mouseout', () => {


                    if(placedShips != array.length){

                    for(let i = 0; i < array[placedShips].length; i++){
                        let nextIndex = vertical ? index + i * gridwidth : index + i

                        if(nextIndex < cells.length){

                        if(!vertical && Math.floor(index / gridwidth) === Math.floor(nextIndex / gridwidth) ||
                        (vertical && nextIndex % gridwidth === index % gridwidth)){

                            cells[nextIndex].classList.remove('highlighted')
                        }

                        
                    }
     
                    }
                }

                else if(placedShips === array.length){

                    return
                }

                })
            })


            
    }

    gameBoardComputer(array){

        let gameBoard = []
        let placedShips = 0

        const addHorizontal = (gameBoard, i, j) => {


        }

        const addVertical = (gameBoard, i, j) => {

            for(let r = 0; r < array[placedShips].length; r++){

                    gameBoard[i][j].style.backgroundColor = 'blue'
                    gameBoard[i++][j].dataset.x = 'X'
            }
        }

        let gameBoardComp = document.getElementById('gameBoardComp')

                    
        const pickCell = (gameBoard) => {

            let numRows = gameBoard.length
            let numCols = gameBoard[0].length

            let i = Math.floor(Math.random() * numRows)
            let j = Math.floor(Math.random() * numCols)
            
            let direction = ['Horizontal', 'Vertical']
            let compChoice =  direction[Math.floor(Math.random() * direction.length)]

            if(placedShips != array.length){

                if(compChoice === 'Horizontal'){

                    if(j + array[placedShips].length > 10){
                        
                        pickCell(gameBoard)
                    }
                    else if(gameBoard[i][j + array[placedShips].length - 1].dataset.x === 'X'){

                        pickCell(gameBoard)
                        
                    }
                    else if(gameBoard[i][j].dataset.x === 'X'){
                        
                        pickCell(gameBoard)

                    }
                    else{

                        for(let r = 0; r < array[placedShips].length; r++){

                            gameBoard[i][j].style.backgroundColor = 'blue'
                            gameBoard[i][j++].dataset.x = 'X'
                    }
                    placedShips++
                        
                    }
                }

                
                if(compChoice === 'Vertical'){

                    if(i + array[placedShips].length > 10){

                        pickCell(gameBoard)
                    }
                    else if(gameBoard[i + array[placedShips].length - 1][j].dataset.x === 'X'){

                        pickCell(gameBoard)
                        
                    }
                    else if(gameBoard[i][j].dataset.x === 'X'){
                        pickCell(gameBoard)
                        
                    }
                    else{
                        for(let r = 0; r < array[placedShips].length; r++){

                            gameBoard[i][j].style.backgroundColor = 'blue'
                            gameBoard[i++][j].dataset.x = 'X'
                    }
                    placedShips++
                       
                    }


            }
        }
        else if(placedShips === array.length){

            console.log('Comp is Done')
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

        return console.log('done')
        
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


new Battleship().placeShips()
new Battleship().placeShipsComp()
// draggable 
// hover