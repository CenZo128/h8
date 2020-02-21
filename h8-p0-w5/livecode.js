/**
 * Best Bang for Your Buck
 * Buat sebuah program yang akan mengevaluasi produk smartphone mana yang paling sesuai untuk konsumen berdasarkan:
 *   1. Budget Friendly,
 *   2. PPI atau Pixel Per Inch,
 *   3. Internet Rating,
 *   4. Performance
 * Nilai evaluasi tertinggi yang dapat diberikan untuk sebuah smartphone adalah 1.0.
 * 
 * Perhitungan kriteria Budget Friendly adalah sebagai berikut: (Uang Konsumen - Harga Smartphone) / Uang Konsumen.
 * Nilai PPI berada dalam rentang 300 - 1000. Semakin tinggi nilai PPI smartphone, semakin baik nilai evaluasinya.
 * Nilai Internet Rating berada dalam rentang 1 - 5. Semakin tinggi nilai Internet Rating smartphone, semakin baik nilai evaluasinya.
 * Nilai Performance berada dalam rentang 1 - 10. Semakin tinggi nilai Performance, semakin baik nilai evaluasinya.
 * 
 * Program akan membutuhkan tiga input yaitu:
 *   1. Sebuah object evaluationProfile yang merupakan bobot dari masing-masing kriteria penilaian.
 *      Contoh:
 *        var evaluationProfile = {
 *          budgetFriendly: 0.15,
 *          ppi: 0.25,
 *          internetRating: 0.15,
 *          performance: 0.45
 *        }
 *   2. Sebuah Number yaitu Uang Konsumen.
 *   3. Array multidimensi nx5 yang berisi list smartphone.
 *      Contoh:
 *        [
 *          // Nama Smartphone, Harga Smartphone, PPI, Internet Rating, Performance
 *          ['Nokia'          , 5000000         , 500, 4              , 4          ],
 *          ['LG'             , 4000000         , 600, 6              , 6          ],
 *          ['Shimizu'        , 1000000         , 300, 3              , 3          ],
 *          ['Changhong'      , 6000000         , 777, 4              , 7          ]
 *        ]
 * 
 * Jika harga smartphone tidak dapat terbeli oleh uang konsumen, maka smartphone tersebut diabaikan.
 * Output yang diharapkan dari program adalah seperti di bawah:
 *   {
 *     name: 'Shimizu',
 *     price: 1000000,
 *     ppi: 300,
 *     performance: 3
 *     evaluation: 7
 *   }
 */function smartphoneEvaluation(evaluationProfile, uangKonsumen, smartphones) {}// Test case 1
 var evaluationProfile = { budgetFriendly: 0.15, ppi: 0.25, internetRating: 0.15, performance: 0.45 };
 var smartphones = [['Nokia', 5000000, 500, 4, 4], ['LG', 4000000, 300, 4, 1], ['Changhong', 1000000, 300, 3, 3], ['Apel', 6000000, 777, 4, 7]];
 console.log(smartphoneEvaluation(evaluationProfile, 4500000, smartphones));
 // { name: 'Changhong', price: 1000000, ppi: 300, performance: 3, evaluation: 0.29166666666666663 }
 console.log(smartphoneEvaluation(evaluationProfile, 10000000, smartphones));
 // { name: 'Apel', price: 6000000, ppi: 777, performance: 7, evaluation: 0.7110000000000001 }// Test case 2
 var evaluationProfile = { budgetFriendly: 0.25, ppi: 0.25, internetRating: 0.25, performance: 0.25 };
 var smartphones = [['Nokia', 5000000, 500, 4, 4], ['LG', 4000000, 300, 4, 1], ['Changhong', 1000000, 300, 3, 3], ['Apel', 6000000, 777, 4, 7]];
 console.log(smartphoneEvaluation(evaluationProfile, 4500000, smartphones));
 // { name: 'Changhong', price: 1000000, ppi: 300, performance: 3, evaluation: 0.375 }
 console.log(smartphoneEvaluation(evaluationProfile, 10000000, smartphones));
 // { name: 'Apel', price: 6000000, ppi: 777, performance: 7, evaluation: 0.6926666666666667 }
 console.log(smartphoneEvaluation(evaluationProfile, 1000000, smartphones));
 // { name: 'Changhong', price: 1000000, ppi: 300, performance: 3, evaluation: 0.375 }