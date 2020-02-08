
var nama="Mike"
var peran="Penyihir"

if (nama=='' && peran==''){
    console.log("Nama harus diisi!!")
}

else if(peran==''){
    console.log("Halo " + nama + " Pilih peranmu untuk memulai game!")
}
else if (peran=="Ksatria" || peran=="ksatria"){
    console.log("Selamat datang di dunia Proxytia, " + nama)
    console.log("Halo " + peran + " " + nama + " , kamu dapat menyerang dengan senjatamu!")
}
else if (peran=="Tabib" || peran=="tabib"){
    console.log("Selamat datang di dunia Proxytia, " + nama)
    console.log("Halo " + peran + " " + nama + " , kamu akan membantu temanmu yang terlukka!")
}
else if (peran=="Penyihir" || peran=="penyihir"){
    console.log("Selamat datang di dunia Proxytia, " + nama)
    console.log("Halo " + peran + " " + nama + " , ciptakan keajaiban yang membantu kemenanganmu!" )
}
