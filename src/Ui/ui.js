export function createDom(size){


let board = document.getElementById("board");
// The following code below is Dom manipulation and repeats how many rows you need along with how many rows you need
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let numDivs = size * size;


for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.classList.add("squares");

    board.append(div);
}

let help = document.querySelectorAll('.squares')


help.forEach((element) => {

    element.addEventListener('click', () => {

        console.log(Array.prototype.indexOf.call(help, element))
    
    })
})
}