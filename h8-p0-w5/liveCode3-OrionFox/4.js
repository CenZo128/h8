/**
 * Kalian akan membuat sebuah program yang akan mensimulasikan program yang menghitung ongkos kirim.
 * Input ini merupakan array berisi beberapa string dengan format sebagai berikut:
 * [Nomor Transaksi]-[Nama]-[Asal Pengiriman]-[Tujuan Pengiriman].
 * Kalian harus mengimplementasikan function-function yang terdapat di dalam program ini (ada 5 function).
 * 
 * Asal Pengiriman dan Tujuan pengiriman adalah nama kota yang merepresentasikan asal kota tersebut. 
 * Biaya pengiriman dari 1 kota ke kota lain yang berdekatan (bersebalahan) adalah 20.000
 * Terdapat 5 kota yang memiliki urutan:
 * Jakarta -> Depok -> Bogor -> Tangerang -> Bekasi
 *  
 *  - Jakarta ke Depok memiliki biaya pengiriman 20.000, karena hanya melalui 1 kota
 *  
 * Pengiriman juga bisa berlaku sebaliknya, yaitu pengiriman dari Bekasi -> Tangerang atau Bekasi -> Jakarta. Harganya juga 20.000 per kota.
 * Contoh: 
 *     - Bekasi ke Bogor memiliki biaya pengiriman 40.000, karena melalui 2 kota
 * 
 * Program ini dibagi menjadi 5 fungsi.  Kalian harus mengimplementasikan fungsi-fungsi tersebut. Masing masing function akan memiliki 
 * deskripsi tentang apa fitur yang diperlukan di dalam masing-masing function. 
 *
 * Function `hitungOngkir` merupakan driver function, function tersebut sudah diisi dengan urutan pemanggilan yang diperlukan soal.
 * 
 *  Rules:
 * -Tidak boleh mengubah isi/urutan pemanggilan function yang ada di function hitungOngkir()!
 * -Dilarang menggunakan built-in function selain: .split(), .push(), .sort(), parseInt() dan semua built-in function yang terdapat di Math!
 *
 */

/** 
   Function ini akan menerima input berupa array berisi string transaksi pengiriman barang.
   Function ini akan memisahkan input dengan delimiter '-'. 
   Output dari function ini adalah array multidimensi yang memisahkan string input transaksi tersebut. 
*/
function splitTransactions(array) {
   //implementasikan fungsi ini 
   var temp=[]
   for(var i=0;i<array.length;i++){
      temp[i]=array[i].split("-")
   }
   return temp
}

/*
   Function ini menerima input berupa array multidimensi dari fungsi `splitTransactions`, dan 
   akan mengurutkan array-array di dalamnya dari angka yang paling kecil terlebih dahulu (disebelah kiri)
   Output yang diharapkan adalah sebuah array multidimensi yang terurut
*/
function sortItemsByNumber(array) {
   //implementasikan fungsi ini 
   var temp=[]
   for(var i=1;i<=array.length;i++){
      for(var j=0;j<array.length;j++){
         if(i==array[j][0]){
            temp.push(array[j])
         }
      }
   }
   return temp
}

/*
   Function ini akan menerima input berupa array multidimensi yang sudah diurutkan dari `SortItemsByNumber`, Ubahlah masing-masing array di dalamnya menjadi object
   Output yang diharapkan dari function ini adalah sebuah array of objects, dimana masing-masing object memiliki format:
   {Number: [Nomor Transaksi], Name: [Nama pengirim], Origin: [Asal pengiriman barang], Destination: [Tujuan pengiriman barang]}
*/
function objectify(items) {
   //implementasikan fungsi ini 
   var temp={}
   var array=[]
   for(var i=0;i<items.length;i++){
      temp["Nomor-Transaksi"]=items[i][0]
      temp["Name"]=items[i][1]
      temp["Origin"]=items[i][2]
      temp["Destination"]=items[i][3]
      array.push(temp)
      temp={}
   }
   return array
}


/*
   Function ini akan menerima input berupa array of objects dari function `objectify`. 
   Hitunglah biaya pengiriman dari masing-masing transaksi tersebut.
   Output yang diharapkan adalah sebuah array of objects, dimana masing-masing object memiliki format: 
   {Name: [Nama pengirim], Cost: [Biaya Pengiriman]}. 
 */
function calculatePrice(items) {
   //implementasikan fungsi ini 
   var alamat=["Jakarta","Depok","Bogor","Tangerang","Bekasi"],curr1,curr2,curr,temp={}, array=[]
   for(var i=0;i<items.length;i++){
      for(var j=0;j<alamat.length;j++){
         if(items[i].Origin==alamat[j]){
            curr1=j
         }
         if(items[i].Destination==alamat[j]){
            curr2=j
         } 
      }
      curr=Math.abs(curr1-curr2)
      temp["Name"]=items[i].Name
      temp["Ongkos"]=curr*20000
      array.push(temp)
      temp={}
   }
   return array
}

/*
   Function ini akan memiliki output berupa array of objects dari function `calculatePrice`. 
   Jangan ubah isi dari function ini
*/
function hitungOngkir(datas) {
   return calculatePrice(objectify(sortItemsByNumber(splitTransactions(datas))))
}

console.log(hitungOngkir(['1-Rafi-Jakarta-Depok', '4-Afif-Bekasi-Tangerang', '3-Rafki-Bogor-Bekasi', '2-Zara-Tangerang-Bekasi']))
/*
 [
  { Name: 'Rafi', Cost: 20000 },
  { Name: 'Zara', Cost: 20000 },
  { Name: 'Rafki', Cost: 40000 },
  { Name: 'Afif', Cost: 20000 }
 ]
*/



