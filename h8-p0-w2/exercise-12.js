function koversiMenit(seconds){
    var time = Math.round(seconds);
    var minutes = Math.floor(time / 60);
    var seconds = time - (minutes * 60)
    

    if(seconds <10){
        return minutes + ":0" + seconds;
        
    }
    else{
        return minutes + ":" + seconds;
        
    }

}

console.log(koversiMenit(100));