function targetTerdekat(arr) {
  // you can only write your code here!
  var flagLeft=0;
  var flagRight=0;
    for(var i=0;i<arr.length; i++){
        if(arr[i]==='o'){
            //Left
            var check=false;
            for(var j=i;j>0;j--){
                if(arr[j]!='x'){
                    flagLeft++;
                }
                else{

                    check=true;
                    break
                }
            }
            //Right
            if(check==false){
                flagLeft=0;
            }
            var check1=false;
            for(var k=i;k<arr.length;k++){
                if(arr[k]!='x'){
                    flagRight++;
                }
                else{
                    check1=true;
                    break
                }
            }
            if(check1==false){
                flagRight=0;
            }
            
        }
    }
    if(flagLeft==0){
        return flagRight
    }
    else if(flagRight==0){
        return flagLeft
    }
    else{
        if(flagLeft<flagRight){
            return flagLeft
        }
        else
            return flagRight
    }
    // return [flagLeft, flagRight]
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2