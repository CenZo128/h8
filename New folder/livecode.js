var nama="James";
var tanggalLahir="1990";
var pelajar=false;
var tiket=25000;

var umur= 2020-tanggalLahir;
// if(umur>120 || tanggalLahir<1900){
//     console.log("Invalid Age!");
//     break;
// }
// else{
    if(umur<2){
        tiket=0;
    }
    else if(umur>=2 && umur <=10){
        tiket=tiket;
    }
    else if(umur>=11 && umur<=18){
        if(pelajar==true){
            tiket= tiket*1.25;
        }
        else{
            tiket= tiket*1.5;
        }
    }
    else if(umur>=19){
        if(pelajar==true){
            tiket= tiket*1.5;
        }
        else{
            tiket= tiket*2;
        }
    }
// }

console.log(`Nama : ${nama}`);
console.log(`Harga TIket : ${tiket}`);
   
