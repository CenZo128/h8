/**
 * Instruksi
 *
 * ===============
 * Count Stuff
 * ===============
 *
 * Pada program ini kalian harus mencari beberapa hal yang terdapat di dalam sebuah string.
 * Kalian diberikan 2 input, 'line' dan 'param'.
 * String line berisi angka (0-9), huruf (lowercase) atau karakter lain yang sembarang ('/', '#', '@', '$', dll). String ini merupakan string yang akan kalian proses.
 * Contoh line: '123abcdfghi9657$%^&*'
 * String param berisi parameter yang akan menentukan barang yang kalian cari di dalam string tersebut.
 * param bisa berupa: - 'sigma'
 *                         jika param berupa sigma, maka jumlahkan semua angka di dalam string.
 *                     - 'letters'
 *                         jika param berupa letters, maka carilah jumlah huruf di dalam string.
 *                     - 'length'
 *                         jika param berupa length, maka program akan mengoutput panjang dari elemen string yang berupa huruf dan angka.
 *                     - Selain ketiga param diatas, maka program akan mengoutput 'Parameter salah'
 * Contoh
 *
 * 1.
 * 'line' : 'abcdefghijklmonjasd'
 * 'param': 'letters'
 *
 * Output: 19
 *
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'sigma'
 *
 * Output: 0
 *
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'length'
 *
 * Output: 19
 *
 * 2. line: 'abcde12345
 *
 * param : 'sigma'
 *
 * Output: 15
 *
 * line: 'abcde12345
 *
 * param : 'length'
 *
 * Output: 10
 *
 * RULES :
 * - HANYA BOLEH MENGGUNAKAN BUILT-IN METHOD / FUNCTION dari tipe data Number
 *
 */

//  hitung jumlah deret 
// jumlah semua angka

var line = 'abcde&12345' //kalian bisa mengubah isi dari 'line' untuk menguji contoh-contoh string yang lainnya
var param = 'letters' //kalian bisa mengisi param ini dengan 'sigma', 'letters', 'length', dll

var huruf='abcdefghijklmnopqrstuvwxyz';
var angka='1234567890';

var flagLetter=0;
var flagAngka=0;
var flagLength=0;

//tulis kode kalian disini
if(param=="sigma" || param=="length" || param=="letters"){
    switch(param){
        case "sigma":
            for(var i=0; i<line.length; i++){
                for(var j=0; j<angka.length; j++){
                    if(line[i]==angka[j]){
                        flagAngka+=Number(angka[j]);
                    }
                }
            }
            console.log(flagAngka)
            break
        case "length":
            for(var i=0; i<line.length; i++){
                for(var j=0; j<huruf.length; j++){
                    if(line[i]==huruf[j]){
                        flagLength++;
                    }
                }
                for(var k=0; k<angka.length; k++){
                    if(line[i]==angka[k]){
                        flagLength++;

                    }
                }
            }
            console.log(flagLength)
            break;
        case "letters":
            for(var i=0; i<line.length; i++){
                for(var j=0; j<huruf.length; j++){
                    if(line[i]==huruf[j]){
                        flagLetter++;
                        break;
                    }
                }
            }
            console.log(flagLetter)
            break;
    }
}
else{
    console.log("Parameter Salah!!");
}