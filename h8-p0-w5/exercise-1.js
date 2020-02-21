function sorting(arrNumber) {
    // code di sini
    for (var i = 0; i < arrNumber; i++) {
        for (var j = 0; j < arrNumber; j++) {
            if (arrNumber[j] < arrNumber[j + 1]) {
                var swap = arrNumber[j + 1]
                arrNumber[j + 1] = arrNumber[j]
                arrNumber[j] = swap
            }
        }
    }
    return arrNumber
}

function getTotal(arrNumber) {
    // code di sini
    var count = 0
    var highest = arrNumber[arrNumber.length - 1]

    for (var a = 0; a < arrNumber.length; a++) {
        if (highest == arrNumber[a]) {
            count++
        }
    }
    if (count == 0) {
        return []
    }
    else {
        return `Angka paling besar adalah ${highest} dan jumlah kemunculan sebanyak ${count} kali`
    }
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''