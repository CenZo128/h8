// for(var i =0; i<5; i++){
//     var temp='';
//     for(var j=5;j>i;j--){
//       temp+= " "
//     }
//     for(var k=0; k<i+1; k++){
//       temp+="*"
//     }
//     console.log(temp)
//   }
//   console.log()

//   for(var i =0; i<5; i++){
//     var temp='';

//     for(var k=0; k<i+1; k++){
//       temp+=" "
//     }
//     for(var j=5;j>i;j--){
//       temp+= "*"
//     }
//     console.log(temp)
//   }

/**
 * Pseudocode dan kode program jika:
 * 
 * var School = {
 *   name: 'SMA Negeri 8 Jakarta',
 *   address: 'Jl. Taman Bukit Duri No.2',
 *   headmaster: 'Acong',
 *   teachers: ['Acong', 'Djoko', 'Sitorus', 'Painem', 'Sisingamangaraja', 'Baja Hitam', 'Radjagukguk', 'I Made Gunawangsa', 'Angka'],
 *   subjects: ['Matematika', 'BhsInggris', 'BhsIndonesia', 'Fisika', 'Kimia', 'Biologi', 'Ekonomi', 'Geografi', 'Sejarah', 'Sosiologi'],
 *   classes: ['X1', 'X2', 'X2', 'X3', 'XIIPA1', 'XIIPA2', 'XIIPS1', 'XIIPS2', 'XIIIPA1', 'XIIIPA2', 'XIIIPS1', 'XIIIPS2'];
 * }
 * 
 * 
 * Buat properti baru untuk School yaitu:
 *   - x1Teachers, x2Teachers, x3Teachers, dst... Assign guru (bebas) ke masing-masing properti, dengan ketentuan satu guru boleh merangkap lebih dari 1 kelas
 *   - matematikaTeachers, bhsInggrisTeachers, bhsIndonesiaTeachers, dst... Assign guru (bebas) ke masing-masing properti, dengan ketentuan satu guru boleh merangkap lebih dari 1 kelas
 * 
 * Berdasarkan properti yang telah dibuat, tetukan:
 *   - Guru mana yang mengajar subject paling banyak, guru mana yang mengajar subject paling sedikit
 *   - Guru mana yang mengajar kelas paling banyak, guru mana yang mengajar kelas paling sedikit
 * 
 * Buat sebuah properti baru yaitu salaries di mana urutannya sama dengan properti teachers. Misal, teachers[0] memiliki gaji salaries[1]. Ketentuan perhitungan gaji adalah:
 *   - Tiap mata pelajaran memiliki nilai 10000
 *   - Tiap kelas memiliki nilai 7500
 */

var School = {
    name: 'SMA Negeri 8 Jakarta',
    address: 'Jl. Taman Bukit Duri No.2',
    headmaster: 'Acong',
    teachers: ['Acong', 'Djoko', 'Sitorus', 'Painem', 'Sisingamangaraja', 'Baja Hitam', 'Radjagukguk', 'I Made Gunawangsa', 'Angka'],
    subjects: ['Matematika', 'BhsInggris', 'BhsIndonesia', 'Fisika', 'Kimia', 'Biologi', 'Ekonomi', 'Geografi', 'Sejarah', 'Sosiologi'],
    classes: ['X1', 'X2', 'X3', 'X4', 'XIIPA1', 'XIIPA2', 'XIIPS1', 'XIIPS2', 'XIIIPA1', 'XIIIPA2', 'XIIIPS1', 'XIIIPS2'], 
    // classTeachers:[],
    // subjectTeachers:[]
}
function randomInt(min, max) {
    return Math.floor(Math.random() * (+max - +min) + +min);
} 


function buatProperties(school) {

    for (var i = 0; i < school.classes.length; i++) {
        School[school.classes[i].toLowerCase() + "Teachers"] = []
    }
    for (var j = 0; j < school.subjects.length; j++) {
        School[school.subjects[j].toLowerCase() + "Teachers"] = []
    }
    
    // for (var i = 0; i < school.classes.length; i++) {
    //     School.classTeachers[school.classes[i].toLowerCase() + "Teachers"] = []
    // }
    // for (var j = 0; j < school.subjects.length; j++) {
    //     School.subjectTeachers[school.subjects[j].toLowerCase() + "Teachers"] = []
    // }
    
    // return school
}
buatProperties(School);
// console.log(School);

function insertClassTeachers(school){
    // buatProperties(School);
    // for (let k =0; k < school.classes.length; k++) {
    //     console.log(school.classes[k].toLowerCase() + 'Teachers');
    // }
    for (let i = randomInt(0, school.teachers.length); i > 0; i--) {
        
        school[school.classes[i].toLowerCase() + 'Teachers'].push(school.teachers[i]);
        
      }
    // return school
}

insertClassTeachers(School);

// console.log(buatProperties(School))
console.log(School)
