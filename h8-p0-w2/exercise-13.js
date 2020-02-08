function xo(str){
    var flag1=0;
    var flag2=0;
    for(var i=0; i<str.length; i++){
        if(str[i]==='x'){
            flag1++;
        }
        else if (str[i]==='o'){
            flag2++;
        }
    }
    if(flag1===flag2)
        return true;
    else
        return false;
}

console.log(xo("xxxxxooooo"));
