export class Ships{

ships = [
{
    name: 'Carrier', 
    spots: [1,2,3,4,5],
    hits: 0, 
    sunk: false
    
},
{
    name: 'Battleship',
    spots: [1,2,3,4],
    sunk: false,


},
{
    name: 'Cruiser',
    spots: [1,2,3],
    sunk: false
},
{
    name: 'Submarine',
    spots: [1,2,3],
    sunk: false,

},
{
    name: 'Destroyer',
    spots: [1,2],
    sunk: false

}
]

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
}
console.log(new Ships().hits(3, new Ships().ships))
