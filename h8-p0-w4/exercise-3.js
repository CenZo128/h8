
// Code

function cariMedian(arr) {
  // you can only write your code here!
  //Sorting

  var swap = ''
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] > arr[i + 1]) {
        swap = arr[i + 1];
        arr[i + 1] = arr[i]
        arr[i] = swap
      }

    }

  }

  if (arr.length % 2 == 0) {
    var a = arr.length / 2
    var b = (arr.length / 2) - 1

    return (arr[a] + arr[b]) / 2
  }
  else {
    var b = (arr.length + 1) / 2 - 1
    return arr[b]
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5