
function ubahHuruf(kata) {
  // you can only write your code here!
  var huruf='abcdefghijklmnopqrstuvwxyz', string='' ;  
  for(var i=0;i<kata.length;i++){
        for(var j=0;j<huruf.length;j++){
            if(kata[i]==huruf[j]){
                string += huruf[j+1]
            }
        }
    }
    return string
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu