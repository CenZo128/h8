
// Code

function cariModus(arr) {
  // you can only write your code here!
  var result=[]
  var freq=[]
  for(var i=0;i<arr.length;i++){
      var check=false
      var flag=0;
    for(var j=0; j<result.length; j++){
        if(arr[i]==result[j]){
            check =true
            freq[j]++
        }
    }
    if(check==false){
      freq.push(0)
      result.push(arr[i])
    }
  
  }
  var number=0
  var position=0
   
  if(freq.length==1){
    return -1
  }
  else{
    for(var k=0;k<freq.length;k++){
      if(number<freq[k]){
        number=freq[k]
        position=k
      }
    }
    if(number==0){
      return -1
    }
    else{
      return result[position]  
    }
    
  }
  
  // return [result,freq]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1