/*
Buatlah sebuah function dengan parameter object scores
dengan isi nilai Live code dari minggu lalu,
lalu return nama ranking #1 secara rata".
*/

function getBestStudent(scores) {
    //code goes here
    // for(var key in scores){
    //     console.log(key)
    // }
    var arr = Object.keys(scores)
    return arr
}

console.log(getBestStudent({
	John: [100, 90, 80],
	Bob: [100, 70, 80]
})) // John

console.log(getBestStudent({
	Susan: [67, 84, 75, 63],
    Mike: [87, 98, 64, 71],
    Jim: [90, 58, 73, 86]
})) // Mike

console.log(getBestStudent({
	Tim: [93, 84, 49, 71, 76, 83],
    Nick: [88, 91, 74, 72, 63, 68],
    Brad: [100, 94, 72, 64, 58, 81],
	Annie: [79, 93, 82, 82, 63, 87]
})) // Annie

console.log(getBestStudent({
	Eddie: [65, 85, 72, 76],
    Brock: [55, 97, 82, 91],
    Jessica: [78, 62, 79, 99]
})) // Brock