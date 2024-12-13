export let ships = [
    {
        name: 'Carrier', 
        spots: 5,
        sunk: false
        
    },
    {
        name: 'Battleship',
        spots: 4,
        sunk: false,
    
    
    },
    {
        name: 'Cruiser',
        spots: 3,
        sunk: false
    },
    {
        name: 'Submarine',
        spots: 3,
        sunk: false,
    
    },
    {
        name: 'Destroyer',
        spots: 2,
        sunk: false
    
    }
    ]
    



export class Ships{

hits(hitCount, obj){

    if(hitCount == obj[0].spots.length){

        obj[0].hits = hitCount
        obj[0].sunk = true
        
    }
    else{

        obj[0].hits = hitCount

    }

    return obj[0]
}

acr
}
