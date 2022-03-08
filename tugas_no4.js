// Soal Nomor 4

/* 
  Kalian memiliki sebuah variabel berikut (let bdays = ["10-17", "05-19", "20-19"];).
  Ubahlah tanda (-) dalam variabel tersebut menjadi (/) sehingga output yang akan keluar dalam
  console menjadi ["10/17", "05/19", "20/19"]
*/

let bdays = ["10-17", "05-19", "20-19"];
let value2 = bdays.map((x) => x.replace("-", "/"));

console.log(value2);
