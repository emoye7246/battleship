import { Ships, ships } from "./gamePeices"

export class Battleship {

    gameBoard(){

        let gameBoard = []
        let board = document.getElementById('gameboard')

        
        for(let i = 0; i < 10; i++){
        
                gameBoard[i] = []

            for(let j = 0; j < 10; j++){
                
                let cell = document.createElement('div')
                cell.classList.add('cell')
                cell.textContent = i 

                cell.addEventListener('click', () => {

                    console.log(i, j)
                })
                board.append(cell)

                gameBoard[i][j] = 3

            }
            

        }  
        console.log(gameBoard)

       return gameBoard
    }


    placeShipsUi(array, gameBoard){

            let shipName = document.getElementById('shipName')
            let shipLength = document.getElementById('shipLength')
            let sendOutput = document.getElementById('sendOutput')
            let shipInputs = document.getElementById('shipInputs')  
            let placedShips = document.getElementById('placedShips')

            let ships = 0
            
            let xLabel= document.createElement('label')
            xLabel.innerHTML = 'Choose Your X coordiante'

            let yLabel = document.createElement('label')
            yLabel.innerHTML = 'Choose Your Y coordiante'

            let inputX = document.createElement('input')
            inputX.type = 'number'
            inputX.max = '9'
            inputX.min = '0'

            let inputY = document.createElement('input')
            inputY.type = 'number'
            inputY.max = '9'
            inputY.min = '0'

        shipInputs.insertBefore(xLabel, sendOutput)
        shipInputs.insertBefore(inputX, sendOutput)

        shipInputs.insertBefore(yLabel, sendOutput)
        shipInputs.insertBefore(inputY, sendOutput)

        sendOutput.addEventListener('click', () => {

            if(ships < array.length){

            let placedShip = document.createElement('div')
            placedShip.innerHTML = `${array[ships].ship} was placed at ${inputX.value}, ${inputY.value}`

            shipName.innerHTML = `${array[ships].ship}`
            shipLength.innerHTML = `${array[ships].length}`

            placedShips.append(placedShip)
            console.log(ships)
                
            
            gameBoard[inputX.value][inputY.value] = 0
            ships++
            console.log(gameBoard)

            }

            else if(ships == array.length){

               return console.log('all ships have been placed')
            }



        })
    }

    placeShips(){

        let gameBoard = this.gameBoard()

        let Carrier = new Ships('Carrier', 5)
        let Battleship = new Ships('Battleship', 4)
        let Cruiser = new Ships('Cruiser', 3)
        let Submarine = new Ships('Submarine', 3)
        let Destroyer = new Ships('Destroyer', 2)

        let shipCount = [Carrier, Battleship, Cruiser, Submarine, Destroyer]

        this.placeShipsUi(shipCount, gameBoard)
        
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
// Continue tomorrow