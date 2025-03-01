
export class Battleship {
    
   Gameboard = () => {

    let board = document.getElementById('gameboard')

    let gameboard = []
    let horizontal = true

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

    const canPlaceShip = (gameboard, i, j) => {
    
        if(horizontal){

            if(i + 5 > 10){

                return false
            }

            for(let r = 0; r < 5;  r++){

                if(gameboard[i + r][j] != 3){
                    return false
                }
            }
            return true
        }else{

            if(j + 5 > 10){

                return false
            }

            for(let r = 0; r < 5;  r++){

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

                    let canPlace = canPlaceShip(gameboard, i, j)

                    if(canPlace === false){
                        return false
                    }else{


                    if(horizontal){

                        for(let r = 0; r < 5; r++){

                            let row = i + r
    
                            if(i + 5 < 10){
    
                                gameboard[row][j] = 0
                                const targetCell = board.children[row * 10 + j]
                                updateColors(targetCell, gameboard, row, j)
                            }
                            else if ( i + 5 > 10){
    
                                return
                            }
    
                            }
                    }else{

                        for(let r = 0; r < 5; r++){

                            let column = j + r
    
                            if(j + 5 < 10){
    
                                gameboard[i][column] = 0
                                const targetCell = board.children[i * 10 + column]
                                updateColors(targetCell, gameboard, i, column)
                            }
                            else if (j + 5 > 10){
    
                                return
                            }
    
                            }
                        }

                        console.log(gameboard)
                    }
                })

            }

        }

   }
   

}
new Battleship().Gameboard()
