// HACKTIV8 PHASE 0 DEN

// Code

function checkAB(num) {
  // you can only write your code here!
    var posA =[], posB=[] ;
     for(var i=0; i<num.length;i++){
        if(num[i]=='a')
            posA.push(i)
        else if(num[i]=='b')
            posB.push(i)
    }
    console.log(posA,posB)
    var check
    for(var j=0;j<posA.length;j++){
        if(posB[j]==undefined || posB[j]==''){
            posB[j]=0
        }
        for(var k=0;k<posB.length;k++){
            
            if(Math.abs(posA[j]-posB[k])==4 ){
                check= true;
                break;}
            else 
                check= false    
        }

    }
    if(check==true) return true
    else return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false