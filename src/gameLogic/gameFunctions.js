import { Ships, ships } from "./gamePeices"

export class Battleship {

    gameBoard(){

        let gameBoard = []

        
        for(let i = 0; i < 10; i++){
        
                gameBoard[i] = []

            for(let j = 0; j < 10; j++){
                
                gameBoard[i][j] = 3

            }
        }  

       return gameBoard
    }


    placeShipsUi(array){

            let gameBoard = this.gameBoard()

            let shipName = document.getElementById('shipName')
            let shipLength = document.getElementById('shipLength')
            let placedShips = document.getElementById('placedShips')

            let board = document.getElementById('gameboard')

            let ships = 0

            shipName.innerHTML = `Place Your ${array[ships].ship}`
            shipLength.innerHTML = `Length is: ${array[ships].length}`
            
        for(let row = 0; row < 10; row++){

            for(let col = 0; col < 10; col++){

                let cell = document.createElement('div')
                cell.classList.add('cell')
                cell.textContent = row 

                cell.addEventListener('click', () => {

                if(ships < array.length){

                    let placedShip = document.createElement('div')
                    placedShip.innerHTML = `${array[ships].ship} was placed at ${row}, ${col}`



                    placedShips.append(placedShip)
                    console.log(ships)

                    // gameboard row + 4 = 0

                    for(let i = 0; i < array[ships].length; i++){

                        if(col >= 9){

                           return 

                        }else if(col <= 9){

                            gameBoard[row][col++] = 0
                            cell.style.background = 'red'
                        }
                    }
                    shipName.innerHTML = `Place Your ${array[ships].ship}`
                    shipLength.innerHTML = `Length is: ${array[ships].length}`
                    console.log(gameBoard)
                    console.log(`${array[ships].ship} was placed`)
                    ships++

 


                }
                else if(ships == array.length){

                    return console.log('all ships have been placed')
                 }

            })
            board.append(cell)
            
                
            }

        }

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
new Battleship().placeShips()
// Continue tomorrow