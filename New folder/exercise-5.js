function balikString(kata){
    var balik=""
  
    for(var i=0; i<kata.length; i++){
        balik += kata[kata.length-1-i];
    }
  
    return balik;
  }
  
function palindrome(str){
    if(str==balikString(str)){
        return true;
    }
    else{
        return false;
    }
}

// // TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
  