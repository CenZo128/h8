function pasanganTerbesar(num) {
    // you can only write your code here!
    var numbers = [];
     num=num.toString();
     for (var i = 0; i < num.length - 1; i++) {
        numbers.push(Number(num[i] + num[i+1]));
     }
     
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers.length; j++) {
            if (numbers[j] > numbers[j + 1]) {
                var tmp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = tmp;
            }
        }
    }
    return numbers[numbers.length-1];

  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  