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


    placeShipsUi(element, array){

        let length = document.getElementById('length')
        let name = document.getElementById('name')
        let placeShip = document.getElementById('placeShip')
        let ui = document.getElementById('ui')
        let placed = document.getElementById('placed')



            let myShipsX = document.createElement('input')
            let myShipsY = document.createElement('input')

            let enter = document.createElement('button')

            enter.innerHTML = 'Enter'

            length.innerHTML = `${element.length}`
            name.innerHTML = `${element.ship}`
            placeShip.innerHTML = `Place ${element.ship}`

            let ships = document.createElement('div')
            

            ui.append(myShipsX, myShipsY, enter)

            enter.addEventListener('click', () => {

                ships.innerHTML = `${element.ship} was placed at ${myShipsX.value}, ${myShipsY.value}`
                array[myShipsX.value][myShipsY.value] = 0
                console.log(array)
                placed.append(ships)
                




        })




        // ui.append(myShips, enter)


        
    }

    placeShips(){

        let gameBoard = this.gameBoard()

        let Carrier = new Ships('Carrier', 5)
        let Battleship = new Ships('Battleship', 4)
        let Cruiser = new Ships('Cruiser', 3)
        let Submarine = new Ships('Submarine', 3)
        let Destroyer = new Ships('Destroyer', 2)

        let shipCount = [Carrier, Battleship, Cruiser, Submarine, Destroyer]
        

        for(let i = 0; i < shipCount.length; i++){

            this.placeShipsUi(shipCount[i], gameBoard)
        }

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