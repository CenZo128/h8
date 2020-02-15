
function shoppingTime(memberId, money) {
  // you can only write your code here!
    var result={}
    var sale = [
      {
        item:'Sepatu Staccatu'   ,
        price: 1500000
      },
      {
        item:'Baju Zara '   ,
        price: 500000
      },{
        item:'Baju H&N '   ,
        price: 250000
      },{
        item:'Sweater Uniklooh'   ,
        price: 175000
      },{
        item:'Casing Handphone'   ,
        price: 50000
      },
    ]
    if(memberId==''|| memberId== undefined || money== undefined ){
      return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    else{
      if(money<50000 ){
        return  'Mohon maaf, uang tidak cukup'
      }  
      else{
        result["memberId"]= memberId
        result["money"]= money
        var items =[]
      for(var i=0; i<sale.length;i++){
        if(money>=sale[i].price){
          money -= sale[i].price
          items.push(sale[i].item)
        }
  
      }
        result["listPurchased"]=items
        result["changeMoney"]=money 
      
      }
    }

    return result
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja