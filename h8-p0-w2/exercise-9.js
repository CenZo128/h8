//Soal 1
function shoutOut(str){
    return "Halo Function!";
}

console.log(shoutOut());

//Soal 2
function calculateMultiply(num1,num2){
    return num1 + num2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

//Soal 3
function processSentence(a,b,c,d){
    return "Nama saya " + a + ", Umur saya "+ b + " tahun, alamat saya di " + c + ", hobby saya "+ d + "!.";
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 