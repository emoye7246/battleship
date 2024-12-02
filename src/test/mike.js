 export function hits(obj){
    let sunk = false

    if(obj.length == 0){

        sunk = true
        

    }
    else{

        sunk = false

    }
    return addHit(obj.length)
}

export function addHit(num){

    let addHit = 0

    let newAdd = addHit + num

    return newAdd
}



