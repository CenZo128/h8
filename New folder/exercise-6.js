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

function angkaPalindrome(num){
    var fix=false;
    while(fix!=true){
        num++;
        var stringNum = num.toString();

        if(palindrome(stringNum)==true){
            fix=true;
            return stringNum;
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001