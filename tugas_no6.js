// Soal Nomor 6

/* 
  Kalian memiliki variabel berikut (let arr = [1.5, 2.56, 5.1, 12.33];). 
  Bulatkan ke atas variable tersebut sehingga output dihasilkan adalah [2, 3, 5, 12]
*/

let arr = [1.5, 2.56, 5.1, 12.33];
let arr2 = arr.map((x) => Math.round(x));

console.log(arr2);
