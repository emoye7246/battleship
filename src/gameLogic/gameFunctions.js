import { Ships, ships } from "./gamePeices"

export class Battleship {

    gameBoard(array){

        let gameBoard = []
        let placedShips = 0

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

                    cell.addEventListener('click', () => {
                        
                        let horizontal = true
                        let vertical = false
                
                        if(horizontal == true){
                            if(j + 5 > 10){
                
                                console.log('invalid')
                                return
                            }else{
                
                                console.log('valid')
                                for(let r = 0; r < array[placedShips].length; r++){
                
                                    gameBoard[i][j].style.backgroundColor = 'red'
                                    gameBoard[i][j++].dataset.x = 'red'
                
                                }
                            }
                            placedShips++
                            console.log(placedShips)
                        }
                
                        if(vertical == true){
                
                            if(i + 5 > 10){
                
                                console.log('invalid')
                                return

                            } else{
                
                                console.log('valid')
                            }
                        }
                
                    })


                }
            }
            console.log(gameBoard)
    }


    placeShips(){


        let Carrier = new Ships('Carrier', 5)
        let Battleship = new Ships('Battleship', 4)
        let Cruiser = new Ships('Cruiser', 3)
        let Submarine = new Ships('Submarine', 3)
        let Destroyer = new Ships('Destroyer', 2)

        let shipCount = [Carrier, Battleship, Cruiser, Submarine, Destroyer]

        this.gameBoard(shipCount)
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