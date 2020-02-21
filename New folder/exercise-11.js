function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var temp=[];
  for(var i=0;i<arr.length-1;i++){
    var beda=arr[i+1]-arr[i];

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
// return flag;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false