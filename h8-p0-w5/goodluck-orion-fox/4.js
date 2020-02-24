/*
GET TEMAN
function getTeman menerima 2 paramater yang pertama adalah array of strings dan yg ke 
parameter kedua adalah string.
function ini akan mencari teman yang memiliki nomer indonesia dan gendernya laki-laki

Rules: 
 Dilarang menggunakan built-in function selain .push()
*/

function getTeman(data, template) {
    // your code here..
    let obj = {}, temp = '', abc =[]
    let keys = [], values = [], result = []
    for (var i = 0; i < template.length; i++) {

        if (template[i] == ',' || i == template.length - 1) {
            temp+=template[i]
            keys.push(temp)
            temp = ''
        }
        else {
            temp += template[i]
        }
    }

    for (var i = 0; i < data.length; i++) {
        abc = []
        for (var j = 0; j < data[i].length; j++) {
            if (data[i][j] == ',' || j == data[i].length - 1) {
                temp+=data[i][j]
                abc.push(temp)
                temp = ''
            }
            else {
                temp += data[i][j]
            }
        }
        values.push(abc)
    }
    return [keys, values]
}

const datas = [
    "Claudette,Dreng,Female,+63-952-343-8477",
    "Wilton,Jarville,Male,+62-388-568-9918",
    "Cosette,Jachimczak,Female,+351-759-588-8682",
    "Verne,Antunes,Male,+62-459-995-2535"
]


console.log(getTeman(datas, "firstName,lastName,gender,phone"))
// [
//     {
//       fullName: 'Wilton Jarville',
//       gender: 'Male',
//       phone: '+62-388-568-9918'
//     },
//     {
//       fullName: 'Verne Antunes',
//       gender: 'Male',
//       phone: '+62-459-995-2535'
//     }
// ]