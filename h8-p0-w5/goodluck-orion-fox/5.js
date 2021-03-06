/**
 * =========================
 * Group Stage Mobile Legend
 * =========================
 *
 * Mobile legend adalah sebuah game moba yang sangat menarik banyak perhatian orang. Banyak team team yang bertanding dalam
 * turnamen untuk merebutkan peringkat team terbaik di Indonesia.
 *
 * Buatlah sebuah fungsi yang akan menentukan klasemen dari group stage turnamen Mobile legend.
 *
 * Rule perhitungan score:
 * - Setiap team akan mendapatkan 3 point  ketika menang daam sebuah pertandingan.
 * - Setiap team akan kehilangan 1 point ketika kalah dalam sebuah pertandingan.
 *
 * Output:
 * Fungsi ini akan mengeluarkan sebuah output berupa objek urutan klasemen setelah melakukan pertandingan. ( Perhatikan driver code )
 *
 * Asumsi:
 *  - Ketika ada lebih dari satu team yang memiliki score yang sama maka urutan pemenang ditentukan oleh posisi team dalam input fungsi yang kita buat.
 *
 *
 * Rules:
 *  - Tidak boleh menggunakan built-in function array. .map, .filter, .reduce, .sort
 **/
function groupStage(teams){
  // Insert your code here
  let result=[]
  for (let index = 0; index < teams.length; index++) {
    var tempObj={}
    tempObj.team=teams[index].name
    tempObj.score=0
    for (let i = 0; i < teams[index].matches.length; i++) {
      if(teams[index].matches[i].status=='win') 
        tempObj.score+=3
      else
        tempObj.score-=1
  }
    result.push(tempObj)    
  }

  for(var a=0;a<result.length;a++){
    for(var b=0;b<result.length;b++){
      // if(result[b].score<result[b+1].score){
      //   tempObj=result[b+1]
      //   result[b+1]=result[b]
      //   result[b]=tempObj
      // }
    }

  }
  return result
}
var group1 = [
  {
    name: 'Evos',
    matches: [
      {
        against: 'RRQ',
        status: 'win'
      },
      {
        against: 'Alter Ego',
        status: 'win'
      },
      {
        against: 'ONIC',
        status: 'win'
      }
    ]
  },
  {
    name: 'RRQ',
    matches: [
      {
        against: 'Evos',
        status: 'lose'
      },
      {
        against: 'Alter Ego',
        status: 'lose'
      },
      {
        against: 'ONIC',
        status: 'lose'
      }
    ]
  },
  {
    name: 'Alter Ego',
    matches: [
      {
        against: 'RRQ',
        status: 'win'
      },
      {
        against: 'Evos',
        status: 'win'
      },
      {
        against: 'ONIC',
        status: 'lose'
      }
    ]
  },
  {
    name: 'ONIC',
    matches: [
      {
        against: 'RRQ',
        status: 'win'
      },
      {
        against: 'Alter Ego',
        status: 'win'
      },
      {
        against: 'EVOS',
        status: 'lose'
      }
    ]
  }
]
console.log(groupStage(group1))
/**
 * {
 *  '1': {
 *  team: 'EVOS',
 *  score: 9
 * },
 * '2': {
 *  team: 'Alter Ego',
 *  score: 5
 * },
 * '3': {
 *  team: 'Onic',
 *  score: 5
 * },
 * '4': {
 *  team: 'RRQ',
 *  score: -3
 * }
 * }
 */
var group2 = [
  {
    name: 'Evos',
    matches: [
      {
        against: 'RRQ',
        status: 'lose'
      },
      {
        against: 'Alter Ego',
        status: 'lose'
      },
      {
        against: 'ONIC',
        status: 'lose'
      }
    ]
  },
  {
    name: 'RRQ',
    matches: [
      {
        against: 'Evos',
        status: 'win'
      },
      {
        against: 'Alter Ego',
        status: 'win'
      },
      {
        against: 'ONIC',
        status: 'win'
      }
    ]
  },
  {
    name: 'Alter Ego',
    matches: [
      {
        against: 'RRQ',
        status: 'lose'
      },
      {
        against: 'Evos',
        status: 'win'
      },
      {
        against: 'ONIC',
        status: 'lose'
      }
    ]
  },
  {
    name: 'ONIC',
    matches: [
      {
        against: 'RRQ',
        status: 'lose'
      },
      {
        against: 'Alter Ego',
        status: 'win'
      },
      {
        against: 'EVOS',
        status: 'win'
      }
    ]
  }
]
// console.log(groupStage(group2))
/**
 * { '1': { team: 'RRQ', score: 9 },
  '2': { team: 'ONIC', score: 5 },
  '3': { team: 'Alter Ego', score: 1 },
  '4': { team: 'Evos', score: -3 } }
**/