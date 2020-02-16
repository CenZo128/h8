/* Buat lah function yang mereturn array yang isinya
kumpulan nomor-nomor terbanyak yang selisih-nya
hanya satu dan length array tersebut.
Bisa increment atau decrement.
Jika tidak ada, return 1.

RULES:
Hanya boleh pakai built-in function .push()
*/

function longestRun(arr) {
    // code goes here
}


console.log(longestRun([1, 2, 3, 5, 6, 7, 8, 9]))
// [5, 6, 7, 8, 9]
// 5

console.log(longestRun([1, 2, 3, 10, 11, 15]))
// [1, 2, 3]
// 3

console.log(longestRun([5, 4, 2, 1]))
// [2, 1]
// 2

console.log(longestRun([3, 5, 7, 10, 15]))
// 1