/*
Function angkaPrimaRange adalah function menerima angka dan memiliki 
ouput array berisi angka-angka perima sebelum angka tersesbut
cobalah kerjakan soal ini dengan modular function 

Rules : 
Dilarang menggunakan built-in function selain .push()
*/

function angkaPrima(angka) {
    // your code here
    var n=0
    for(var i=1;i<=angka;i++){
        if(angka%i==0) n++
    }
    return (n==2) ? true : false;
    
}

function angkaPrimaRange(num) {
    // your code here
    let x=1, temp =[]
    while(x<num){
        if(angkaPrima(x)==true || x==1){
            temp.push(x)
        }
        x++
    }
    return temp
}

// TEST CASES
console.log(angkaPrimaRange(6)); // [ 1, 2, 3, 5 ]
console.log(angkaPrimaRange(33)); // [ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]