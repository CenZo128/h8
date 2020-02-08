// SOal 1
var rows1=5;
var i,j;

for(i=0; i<rows1; i++){
    console.log("*")
}

//Soal 2
var rows2=5;
var tampung;
for(i=0;i<rows1; i++){
    tampung="";
    for(j=0;j<rows2; j++){
        tampung += "*";
    }
    console.log(tampung)
    
}

//Soal 3
var rows3= 5;

for(i=0;i<rows3; i++){
    tampung1="";
    for(j=0;j<i+1; j++){
        tampung1 += "*";
    }
    console.log(tampung1);
}