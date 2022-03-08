// Soal Nomor 2

/* 
  a. Jelaskan kenapa baris 21, 22, 23 tidak dapat tampil?
     Jawaban :
     Karena, pada baris 21, 22, 23 merupakan sebuah percabangan yang hanya melakukan proses dibelakang layar tanpa ditampilkan.
     Dan yang dapat tampil hanya pada baris 22 yang merupakan statement, itu pun jika kondisi pada if terpenuhi.
     Pada kasus tersebut kondisi pada if tidak terpenuhi. Kondisi yang terdapat pada blok if tersebut akan terpenuhi dan 
     menjalankan statement didalamnya jika sesuai dengan nilai yang tersimpan pada variabel terdaftar sama dengan true. 
     Sedangkan, variabel terdaftar tersebut dideklarasikan dengan nilai false di awal.
*/

/* 
  b. Jelaskan kenapa deklarasi pada baris 26 menyebabkan error?
     Jawaban :
     Karena variabel nama adalah variabel const yang telah dideklarasikan di awal sehingga tidak dapat dilakukan reassignment, 
     sedangkan pada kode tersebut dilakukan reassignment maka menyebabkan error.
*/

/* 
  c. Dengan melakukan komen pada baris ke 26, apakah baris 28 dapat dieksekusi? Jelaskan.
     Jawaban :
     Masih tidak dapat dieksekusi, karena variabel asal tidak dideklarasikan di awal dan scopenya bukan global, melainkan
     dideklarasikan di dalam function perkenalan sehingga scopenya menjadi lokal dan hanya bisa diakses diruang lingkup 
     function itu sendiri.
*/
