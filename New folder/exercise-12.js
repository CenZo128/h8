function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  var temp=[];
  for(var i=0;i<arr.length-1;i++){
    var beda=arr[i+1]/arr[i];

    temp.push(beda)
    beda=0;
  }
  var flag = 0;
  for(var j=0;j<temp.length-1;j++){
      if(temp[j+1]==temp[j]){
          flag = 1;
      }
      else
        flag = 0;
  }
  if(flag==1){
      return true;
  }
  else
   return false;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false