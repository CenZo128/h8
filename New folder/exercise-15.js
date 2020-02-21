
function groupAnimals(animals) {
  // you can only write your code here!
  var huruf="abcdefghijklmnopqrstuvwxyz"
  var result=[]
    for(var i=0;i<huruf.length;i++){
        temp=[]; var check=false
        for(var j=0; j<animals.length;j++){
            if(huruf[i]==animals[j][0] ){
                temp.push(animals[j]);
                check=true

            }
        }
        if(check===true)
        result.push(temp)
    }
    return result

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]