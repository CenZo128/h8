/*
Buatlah sebuah function yang mereturn object
dengan isi banyaknya kemunculan setiap string dalam huruf.

RULES:
No built-in function
*/

function getFrequencies(arr) {
    //code goes here
    var kelas={}
    for(let i=0;i<arr.length;i++){
        if(kelas[arr[i]]===undefined){
          kelas[arr[i]]=1
        }else{
            kelas[arr[i]]++
          }
      }
      return kelas
}


console.log(getFrequencies(["A", "B", "A", "A", "A"])) //{ A: 4, B: 1 }

console.log(getFrequencies([1, 2, 3, 3, 2])) //{ "1": 1, "2": 2, "3": 2 }

console.log(getFrequencies([true, false, true, false, false])) //{ true: 2, false: 3 }

console.log(getFrequencies([])) //{}