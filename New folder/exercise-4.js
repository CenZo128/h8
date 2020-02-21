var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 * */

 function dataHandling2(str){
    
    var result=str;
    result.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")

    var resultSplit=[];
    resultSplit=result[3].split("/")

    // resultSplit.sort()
    var temp=result[3].split("/").join("-")
    var name=result[1].slice(0,15)

    console.log(result)

    var bulan= resultSplit[1];
    switch(bulan){
      case '01':
          bulan = "Januari";
      break;
      case '02':
          bulan = "Februari";
      break;
      case '03':
          bulan = "Januari";
      break;
      case '04':
          bulan = "Januari";
      break;
      case '05':
          bulan = "Mei";
      break;
      case '06':
          bulan = "Juni";
      break;
      case '07':
          bulan = "Juli";
      break;
      case '08':
          bulan = "Agustus";
      break;
      case '09':
          bulan = "September";
      break;
      case '10':
          bulan = "Oktober";
      break;
      case '11':
          bulan = "November";
      break;
      case '12':
          bulan = "Desember";
      break;
  }
  var sort=resultSplit.sort(function(a,b){return b-a})
  console.log(sort);
  
    console.log(bulan)
    console.log(temp)
    console.log(name)

 }