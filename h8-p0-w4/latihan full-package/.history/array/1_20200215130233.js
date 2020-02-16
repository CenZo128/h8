/*
Buatlah sebuah function yang menerima array of strings dan mereturn
array yang isinya string yang mempunyai nomor didalamnya.
Jika tidak ada, return array kosong.

NOTE:
Hanya boleh pakai built-in function .push()
*/

function numInStr(arr) {
    //code goes here
}

console.log(numInStr(["1a", "a", "2b", "b"])) //["1a", "2b"]

console.log(numInStr(["abc", "abc10"])) //["abc10"]

console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])) //["ab10c", "a10bc"]

console.log(numInStr(["this is a test", "test1"])) // ["test1"]