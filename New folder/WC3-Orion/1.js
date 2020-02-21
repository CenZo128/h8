/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * 'steps' adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan,
 * lokasi yang sudah di lewati oleh penambang, akan menjadi kosong
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 * Dan jika variable mine yang di tambang di console.log maka penampakan terakhirnya adalah seperti ini:
 *    [
 *      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 *      [' ', ' ', ' ', ' ', 'd', '#', '#'],
 *      ['#', '#', '#', 'g', '#', '#', '#']
 *    ]
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf etc
 */

 //PSEUDOCODE=============================================================
 /*SET mine
 SET totalMineral
 SET temp
 SET flagCopper
 SET flagSilver
 SET flagGold
 SET flagDiamond

 FOR i=0 TO JumlahIndexMine 
	SET 'checkMine' TO false
	FOR j=0 TO JumlahIndex Mine ke i
		IF mine ke i = 'c' OR 's' OR 'g' OR 'd' THEN
			FOR k=0 TO JumlahTemp
				SET 'checkMine' TO true
				k=k+1
			ENDFOR

		IF mine ke i AND J = 'c' THEN
			flagCopper++
		IF mine ke i AND j = 's' THEN
			flagSilver++
		IF mine ke i AND J = 'g' THEN
			flagGold++
		IF mine ke i AND j = 'd' THEN
			flagDiamond++

			INPUT mine ke i AND j TO temp
		ENDEIF

		IF steps != 0 THEN
			steps --
		ELSE IF steps = 0 THEN
			break

		j=j+1	
	ENDFOR

	i=i+1
 ENDFOR

IF flagCopper != 0 THEN
	INPUT flagCopper AND 'copper' TO totalMineral
ENDIF	
IF flagSilver != 0 THEN
	INPUT flagSilver AND 'silver' TO totalMineral
ENDIF	
IF flagGold != 0 THEN
	INPUT flagGold AND 'gold' TO totalMineral
ENDIF	
IF flagCopper != 0 THEN
	INPUT flagCopper AND 'diamonad' TO totalMineral
ENDIF	

PRINT totalMineral
  */ 
function mineTycoon(mine, steps) {
	//implementasi function disini!
	var mine=mine
	var totalMineral=[]
	var temp=[]
	var flagCopper=0, flagSilver=0, flagGold=0, flagDiamond=0;
	for(var i=0; i<mine.length;i++){
		
		for (let j = 0; j < mine[i].length; j++) {
			var checkMine=false; 
			if(mine[i][j]== 'c' || mine[i][j]== 's' ||mine[i][j]== 'g' ||mine[i][j]== 'd'){
				for(var k=0;k<temp.length; k++){
					if(mine[i][j]==temp[k]){
						checkMine=true
						
					}

				}
				
				if(mine[i][j]=='c')
					flagCopper++;
				else if(mine[i][j]=='g')
					flagGold++;
				else if(mine[i][j]=='s')
					flagSilver++;
				else if(mine[i][j]=='d')
					flagDiamond++;
				if(checkMine==false){
					
					temp.push(mine[i][j])
					
				}
			}
			
			// console.log(steps)
			if(steps!=0){
				steps--
				
				mine[i][j]=' '
			}
			else if(steps==0){
				break;
			}
		}
	}
	if(flagCopper!=0){
		totalMineral.push(flagCopper,'copper')
	}
    if(flagSilver!=0){
		totalMineral.push(flagSilver,'silver')
	}
	if(flagGold!=0){
		totalMineral.push(flagGold,'gold')
	}
	if(flagDiamond!=0){
		totalMineral.push(flagDiamond,'diamond')
	}
	return totalMineral
}

var mine1 = [
	['#', 'h', 's', '#', '#', '#', 'g'],
	['u', '#', 'c', '#', 'd', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]

var mine2 = [
	['#', '#', '#', '#', '#', 'w', '#'],
	['r', '#', 'c', '#', 'd', '#', '#'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine2, 20))
// [[2, copper], [1, diamond]]

var mine3 = [
	['d', 'c', '#', 's', '#', 'w', '#'],
	['r', 'b', 'c', '#', '#', '#', 'g'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineTycoon(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]