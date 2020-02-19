/*
Buat lah sebuah function yang menerima string dan
mereturn sebuah object dengan key huruf dan value array dimana
isinya adalah index kemunculan di string.

RULES :
Tidak boleh memakai built-in function
*/

function mapLetters(string) {
    //code goes here
    var result = {}
    var temp = []
    
    for (var i = 0; i < string.length; i++) {
        if (result[string[i]] === undefined) {
            result[string[i]] = []
            temp.push(string[i])
        }
    }
    for (var j = 0; j < temp.length; j++) {
        var arr = []
        for (var k = 0; k < string.length; k++) {

            if (temp[j] == string[k]) {
                arr.push(k)
            }
        }
        result[temp[j]] = arr

    }
    return result
}

console.log(mapLetters("dodo")) // { d: [0, 2], o: [1, 3] }

console.log(mapLetters("froggy")) // { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

console.log(mapLetters("grapes")) // { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }