function balikKata(kata){
    var balik=""

    for(var i=0; i<kata.length; i++){
        balik += kata[kata.length-1-i];
    }

    return balik;
}

console.log(balikKata("Hello World For Coders"));
