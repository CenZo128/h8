for(var i =1; i<=5; i++){
    var temp='';
    for(var j=5;j>=i;j--){
      temp+= " "
    }
    for(var k=1; k<=i; k++){
      temp+=k
    }
    console.log(temp)
  }
  console.log()

  for(var i =0; i<5; i++){
    var temp='';

    for(var k=0; k<i+1; k++){
      temp+=" "
    }
    for(var j=5;j>i;j--){
      temp+= "*"
    }
    console.log(temp)
  }

// // // /**
// // //  * Pseudocode dan kode program jika:
// // //  * 
// // //  * var School = {
// // //  *   name: 'SMA Negeri 8 Jakarta',
// // //  *   address: 'Jl. Taman Bukit Duri No.2',
// // //  *   headmaster: 'Acong',
// // //  *   teachers: ['Acong', 'Djoko', 'Sitorus', 'Painem', 'Sisingamangaraja', 'Baja Hitam', 'Radjagukguk', 'I Made Gunawangsa', 'Angka'],
// // //  *   subjects: ['Matematika', 'BhsInggris', 'BhsIndonesia', 'Fisika', 'Kimia', 'Biologi', 'Ekonomi', 'Geografi', 'Sejarah', 'Sosiologi'],
// // //  *   classes: ['X1', 'X2', 'X2', 'X3', 'XIIPA1', 'XIIPA2', 'XIIPS1', 'XIIPS2', 'XIIIPA1', 'XIIIPA2', 'XIIIPS1', 'XIIIPS2'];
// // //  * }
// // //  * 
// // //  * 
// // //  * Buat properti baru untuk School yaitu:
// // //  *   - x1Teachers, x2Teachers, x3Teachers, dst... Assign guru (bebas) ke masing-masing properti, dengan ketentuan satu guru boleh merangkap lebih dari 1 kelas
// // //  *   - matematikaTeachers, bhsInggrisTeachers, bhsIndonesiaTeachers, dst... Assign guru (bebas) ke masing-masing properti, dengan ketentuan satu guru boleh merangkap lebih dari 1 kelas
// // //  * 
// // //  * Berdasarkan properti yang telah dibuat, tetukan:
// // //  *   - Guru mana yang mengajar subject paling banyak, guru mana yang mengajar subject paling sedikit
// // //  *   - Guru mana yang mengajar kelas paling banyak, guru mana yang mengajar kelas paling sedikit
// // //  * 
// // //  * Buat sebuah properti baru yaitu salaries di mana urutannya sama dengan properti teachers. Misal, teachers[0] memiliki gaji salaries[1]. Ketentuan perhitungan gaji adalah:
// // //  *   - Tiap mata pelajaran memiliki nilai 10000
// // //  *   - Tiap kelas memiliki nilai 7500
// // //  */

// // // var School = {
// // //     name: 'SMA Negeri 8 Jakarta',
// // //     address: 'Jl. Taman Bukit Duri No.2',
// // //     headmaster: 'Acong',
// // //     teachers: ['Acong', 'Djoko', 'Sitorus', 'Painem', 'Sisingamangaraja', 'Baja Hitam', 'Radjagukguk', 'I Made Gunawangsa', 'Angka'],
// // //     subjects: ['Matematika', 'BhsInggris', 'BhsIndonesia', 'Fisika', 'Kimia', 'Biologi', 'Ekonomi', 'Geografi', 'Sejarah', 'Sosiologi'],
// // //     classes: ['X1', 'X2', 'X3', 'X4', 'XIIPA1', 'XIIPA2', 'XIIPS1', 'XIIPS2', 'XIIIPA1', 'XIIIPA2', 'XIIIPS1', 'XIIIPS2'], 
// // //     // classTeachers:[],
// // //     // subjectTeachers:[]
// // // }
// // // function randomInt(min, max) {
// // //     return Math.floor(Math.random() * (+max - +min) + +min);
// // // } 


// // // function buatProperties(school) {

// // //     for (var i = 0; i < school.classes.length; i++) {
// // //         School[school.classes[i].toLowerCase() + "Teachers"] = []
// // //     }
// // //     for (var j = 0; j < school.subjects.length; j++) {
// // //         School[school.subjects[j].toLowerCase() + "Teachers"] = []
// // //     }

// // //     // for (var i = 0; i < school.classes.length; i++) {
// // //     //     School.classTeachers[school.classes[i].toLowerCase() + "Teachers"] = []
// // //     // }
// // //     // for (var j = 0; j < school.subjects.length; j++) {
// // //     //     School.subjectTeachers[school.subjects[j].toLowerCase() + "Teachers"] = []
// // //     // }

// // //     // return school
// // // }
// // // buatProperties(School);
// // // // console.log(School);

// // // function insertClassTeachers(school){
// // //     // buatProperties(School);
// // //     // for (let k =0; k < school.classes.length; k++) {
// // //     //     console.log(school.classes[k].toLowerCase() + 'Teachers');
// // //     // }
// // //     for (let i = randomInt(0, school.teachers.length); i > 0; i--) {

// // //         school[school.classes[i].toLowerCase() + 'Teachers'].push(school.teachers[i]);

// // //       }
// // //     // return school
// // // }

// // // insertClassTeachers(School);

// // // // console.log(buatProperties(School))
// // // console.log(School)

// // /**
// //  * 
// //  * Abaikan kode program baris 4 sampai 14.
// //  *
// // class Student {
// //     constructor(nama, limaRibu, sepuluhRibu, duapuluhRibu) {
// //       this.nama = nama;
// //       this.limaRibu = limaRibu;
// //       this.sepuluhRibu = sepuluhRibu;
// //       this.duapuluhRibu = duapuluhRibu;
// //     }
// //   }
// //   let Acong = new Student('Acong', 2, 9, 1);
// //   let Djoko = new Student('Djoko', 7, 0, 2);
// //   let Sitorus = new Student('Sitorus', 0, 2, 5);
  
// //    * Terdapat sebuah array of objects dengan nama 'students' dimana masing-masing elemen array tersebut memiliki properti:
// //    *  - nama, yaitu nama siswa,
// //    *  - limaRibu, jumlah lembaran uang lima ribu rupiah,
// //    *  - sepuluhRibu, jumlah lembaran uang sepuluh ribu rupiah,
// //    *  - duapuluhRibu, jumlah lembaran uang dua puluh ribu rupiah
// //    * 
// //    * Tentukan nama dari murid yang memiliki uang paling banyak, serta jumlah uang yang dimiliki dalam angka.
   
// //   let students = [Acong, Djoko, Sitorus];
// //   function richest(input) {
// //     // Tuliskan kode program kalian di sini
// //   }
// //  */

// // var students = [
// //     {
// //         nama: "Acong",
// //         limaRibu: 2,
// //         sepuluhRibu: 9,
// //         duapuluhRibu: 1
// //     },
// //     {
// //         nama: "Djoko",
// //         limaRibu: 7,
// //         sepuluhRibu: 0,
// //         duapuluhRibu: 2
// //     },
// //     {
// //         nama: "Sitorus",
// //         limaRibu: 0,
// //         sepuluhRibu: 2,
// //         duapuluhRibu: 5
// //     },
// // ]

// // function richest(students){
// //     // Tuliskan kode program kalian di sini
    
// //     for(var i=0; i<students.length;i++){
// //         var total=0
// //         var n;
// //         total = students[i].limaRibu*5000 + students[i].sepuluhRibu*10000
// //     }
// // }

// /**
// ===========
// Pirate ID
// ===========Sebelum memasuki kawasan grand blue, para bajak laut harus melalui sistem administrasi kelautan. 
// Sistem ini akan menyaring Bajak Laut yang boleh melewati lautan ini dan membuat ID mereka. 
// Di dalam program ini, masing-masing bajak laut akan menginput `nama`, `umur`, serta tempat tinggal/ `location` mereka. 
// Di dalam soal ini diasumsikan bahwa lokasi hanya ada 4, dan lokasi-lokasi tersebut memiliki kode sebagai berikut: 
// LOKASI    KODE LOKASI
// -Jakarta  "JKT"
// -Bogor    "BGR"
// -Depok    "DPK"
// -Bekasi   "BKS"
// Jika ada seorang bajak laut yang berasal dari tempat lain selain dari 4 tempat tersebut, maka bajak laut tersebut tidak boleh melewati laut ini.
// Kalian diminta untuk membuat suatu function yang bernama 'filterPirates()'.
// Function ini menerima input berupa nama-nama bajak laut yang direpresentasikan dengan suatu `Array-Of-Objects`.
// Di dalam function ini, kalian harus menyaring dan membuat ID dari bajak laut yang boleh lewat. ID bisa dibuat dengan:
// > "2 DIGIT ANGKA TERAKHIR TAHUN KELAHIRAN" + "KODE LOKASI"Asumsikan bahwa: -Tahun ini adalah tahun 2020misal bajak laut tahun kelahiran 1987 dan berasal dari bogor akan memiliki ID:
// "87-BGR"Namun, beberapa orang marinir malah menyamar menjadi bajak laut. Kalian juga harus menyaring dan menolak orang-orang yang menyamar.
// Orang-orang yang menyamar ini memiliki unsur nama yang mengandung "A.", "B.", "C.", "D.", ......., "R.", "F.", dll. (Nama yang memiliki
// Huruf Kapital satu huruf saja dan titik).Saring dan buatlah ID untuk para bajak laut yang bisa melewati kawasan Grand Blue, format output yang diharapkan adalah suatu array of objects
// yang HANYA BERISI bajak laut yang boleh lewat beserta nama dan ID mereka:
// [{name: 'nama bajak laut', ID: 'XX-LOK'},...]Contoh:
// - input: [
//     { name: 'Frankie', age: 30, location: 'Jakarta'},
//     { name: 'Nami', age: 20, location: 'Bogor' },
//     { name: 'Luffy', age: 19, location: 'Bekasi' }]- output:
//    [{name: 'Frankie', ID: '90-JKT'}, {name: 'Nami', ID:'00-BGR'}, {name: 'Luffy', ID: '01-BKS'}]-input: [
//   {name: 'Gol D. Roger', age: 60, location: 'Jakarta'},
//   {name: 'Portgas D. Ace', age: 22, location: 'Jakarta'},
//   {name: 'Usop Yassop', age: 23, location: 'Payakumbuh' },
//   {name: 'Shanks', age: 35, location: 'Bogor'}
// ]
// -output:
// [{name: 'Shanks', ID:'85-BGR'}]RULES:
// Dilarang menggunakan built-in function kecuali .push()*/
// function filterPirates(pirates) {
//     //implementasi function disini
//     var kaizoku=[]
//     for(var i=0; i<pirates.length; i++){
//         var temp={}
//         var check=true

//         //Name
        

//         //Age
//         var idUmur = String(2020 - pirates[i].age)
//         var idAge = idUmur[2]+idUmur[3]
//         //Location
//         if(pirates[i].location=="Jakarta" || pirates[i].location=="Bogor" || pirates[i].location=="Depok" || pirates[i].location=="Bekasi"){
//             if(pirates[i].location=="Jakarta")
//                 idLoc='JKT'
//             else if(pirates[i].location=="Bogor")
//                 idLoc='BGR'
//             else if(pirates[i].location=="Depok")
//                 idLoc='DPK'
//             else if(pirates[i].location=="Bekasi")
//                 idLoc='BKS'
//         }
//         else{
//             check = false
//         }
        
//         //Push Result
//         if(check==true){
//             temp.name=pirates[i].name
//             temp.ID= `${idAge}-${idLoc}`
//             kaizoku.push(temp)
        
//         }

//     }

//     return kaizoku
//   }console.log(
//     filterPirates([
//       { name: 'Frankie', age: 30, location: 'Jakarta' },
//       { name: 'Nami', age: 20, location: 'Bogor' },
//       { name: 'Luffy', age: 19, location: 'Bekasi' },
//     ])
//   );
//   /**
//      Output:
//      [
//       { name: 'Frankie', ID: '90-JKT' },
//       { name: 'Nami', ID: '00-BGR' },
//       { name: 'Luffy', ID: '01-BKS' }
//     ]
//      */console.log(
//     filterPirates([
//       { name: 'Gol D. Roger', age: 60, location: 'Jakarta' },
//       { name: 'Portgas D. Ace', age: 22, location: 'Jakarta' },
//       { name: 'Usop Yassop', age: 23, location: 'Payakumbuh' },
//       { name: 'Shanks', age: 35, location: 'Bogor' },
//     ])
//   );
//   /**
//    Output:
//    [{name: 'Shanks', ID:'85-BGR'}]
//    */console.log(
//     filterPirates([
//       { name: 'Monkey D. Luffy', age: 21, location: 'Bekasi' },
//       { name: 'Portgas D. Ace', age: 23, location: 'Jakarta' },
//       { name: 'Chopper', age: 17, location: 'Thriller Bark' },
//     ])
//   );
//   //Output: []