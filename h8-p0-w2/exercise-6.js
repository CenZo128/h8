//Soal 1
var x=0;

console.log("Looping Pertama")
while(x<20){
    x+=2;
    console.log(x + " - I Love Coding!");
}

console.log("Looping Kedua")

while(x>0){
    console.log(x + " - I Will Become Fullstack Developer!");
    x-=2;
    
}

//Soal 2
console.log("Looping Pertama")
for(var i=1; i<=20; i++){
    console.log(i + " - I Love Coding!");
    
}

console.log("Looping Kedua")

for(var j=20; j>0; j--){
    console.log(j + " - I Will Become Fullstack Developer!");
    
}

//Soal 3

for(var a=1; a<=100; a++){
    if(a%2===0)
        console.log('GENAP');
    else
        console.log('GANJIL');
        
}

for(var k=1; k<=100; k+=2){
    if(k%3===0)
        console.log(k + ' kelipatan 3');
    else
        console.log(k);
        
}
for(var k=1; k<=100; k+=5){
    if(k%6===0)
        console.log(k + ' kelipatan 6');
    else
        console.log(k);
        
}
for(var k=1; k<=100; k+=9){
    if(k%10===0)
        console.log(k + ' kelipatan 10');
    else
        console.log(k);
        
}
