/**
 * Tuliskan ALGORITMA dan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, SeaWorld ingin mengganti harga tiketnya. Saat ini, aquarium tersebut memiliki HARGA DASAR dari tiket masuk Rp 25.000.
 * Harga tiket masuk akan disesuaikan dengan umur dan status pelajar dari pengunjung tersebut.
 * Kamu harus membuat program yang akan menghitung harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA, TAHUN KELAHIRAN,
 * dan STATUS PELAJAR.
 * STATUS PELAJAR bisa diisi: true jika merupakan pelajar
 *                            false jika bukan merupakan pelajar
 *
 * -Umur < 2 tahun: HARGA TIKET GRATIS
 * -Umur 2-10:  Harga tiket seharga HARGA DASAR
 * -Umur 11-18:  Jika bukan pelajar, maka harga adalah harga dasar dikalikan 1.5
 *               Jika pelajar, maka harga adalah harga dasar dikalikan 1.25
 * -Umur 19 keatas: Jika bukan pelajar, harga adalah harga dasar dikalikan 2
 *                  Jika pelajar, maka harga adalah harga dasar dikalikan 1.5
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
 *
 *
 */

// Your algorithm/pseudocode here

var nama="James";
var tanggalLahir="1900";
var pelajar=true;
var tiket=25000;

var umur= 2020-tanggalLahir;

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
if(umur>120 || tanggalLahir<1900){
    console.log("Invalid Age!");

}
else{
    console.log(`Nama : ${nama}`);
if(tiket==0)
    console.log(`Harga Tiket : GRATIS!`);
else
    console.log(`Harga Tiket : Rp. ${tiket}`);
}
