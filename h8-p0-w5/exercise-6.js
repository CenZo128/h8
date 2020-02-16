

function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var faktor=[]
  var jumlahFaktor=[]
  for(var i=1;i<=angka;i++){
    if(angka%i==0){
      faktor.push(i)
    }
  }
  var x=0, y=faktor.length-1 
  while(x< (faktor.length-1)/2){
    var temp=''
    temp=String(faktor[x]) + String(faktor[y])
    jumlahFaktor.push(temp.length)
    x++
    y--
  }
  if(jumlahFaktor==''){
    return 2
  }else
    return jumlahFaktor[jumlahFaktor.length-1]
}
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2