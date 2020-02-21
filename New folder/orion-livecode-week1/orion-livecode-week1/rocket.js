/**
 * 
 * ================
 * 2 Digit Oddities
 * ================
 * 
 * '1234987566710'
 * 
 * 
 * Pada program ini, kalian harus mengimplementasikan function oddFinder() yang menerima input berupa 'string' berisi angka.
 * String ini pasti diisi oleh angka dan tidak akan diisi oleh huruf/karakter lainnya.
 * Untuk setiap angka 2 digit yang bisa dibentuk dari kiri ke kanan, carilah angka ganjil yang paling besar.
 * Jika tidak ada angka ganjil di dalam string tersebut, maka function akan return 'Tidak ada yang ganjil'
 * 
 * RULES :
 * - DILARANG MENGGUNAKAN BUILT-IN METHOD / FUNCTION KECUALI Number .parseInt
 * - HARUS MENULIS PSEUDOCODE / ALGORITMA, TIDAK MENULIS = 0!
 */


function oddFinder(string) {
   //tulis kode disini
   // cari angka ganjil
   // cari terbesar
   
   var numbers = [];
   var arrGanjil=[];
   var arrSort=[];
   var swap;
   for (let i = 0; i < string.length - 1; i++) {
      numbers.push(Number(string[i] + string[i+1]));
   }
   for(var j=0; j<numbers.length;j++){
      if(numbers[j]%2!==0){
         arrGanjil.push(numbers[j])
      }
   }  

   for(var k=0;k<arrGanjil.length; k++){
      for(var l=0;l>arrGanjil.length;l++){
         if(arrGanjil[l]>arrGanjil[l+1]){
            // arrSort.push(arrGanjil[l]);
            swap = arrGanjil[l]
            arrGanjil[l]=arrGanjil[l+1]
            arrGanjil[l+1]= swap

         }
      }
   }
   for (i=0;i<4;i++)
	{
		for (j=0;j<4;j++)
		{
			if (a[j]>a[j+1])
			{
				b=a[j];
				a[j]=a[j+1];
				a[j+1]=b;
			}
		}
	}
   return arrGanjil
}


console.log(oddFinder('1234987566710')); //87
// console.log(oddFinder('246804422')); //Tidak ada yang ganjil