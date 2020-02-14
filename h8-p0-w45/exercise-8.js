
function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  var kata=kalimat;
  var huruf='abcdefghijklmnopqrstuvwxyz', string='' ;  
  for(var i=0;i<kata.length;i++){
    var check=false  
    if(kata[i].toLowerCase()==kata[i]){
        check=true

      }
    if(check==true){
    string += kata[i].toUpperCase()
        
        
    }else{
        string += kata[i].toLowerCase()
    }
        //         }else{
                    
        //             string += huruf[j+1]
        //         }
        //     }
        //     // else {
        //         // string += huruf[j+1]
                
        //     // }
        // }
    }
    return string
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"