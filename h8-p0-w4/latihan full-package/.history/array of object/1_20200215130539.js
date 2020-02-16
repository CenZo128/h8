/*
Buatlah sebuah function yang menerima dua parameter, grup ,dan student.
Function akan mereturn sebauh array of object, dengan students yang telah di-merge lewat studentId.
Harus dalam urutan sesuai Id.
*/

function getGroupsWithStudents(grup, student) {
    //code goes here
}

getGroupsWithStudents([ { id: 1, name: "G1", studentIds: [2, 1] } ], [ { id: 1, name: "John" }, { id: 2, name: "Steve" } ])

//[ { id: 1, name: "G1", students: [ { id: 2, name: "Steve" }, { id: 1, name: "John" } ] } ]