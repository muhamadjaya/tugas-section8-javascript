var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true; // Soal no 1b. Mengubah kode sehingga dapat menampilkan baris 22 di dalam code. Jawaban : ubah nilai variabel terdaftar menjadi true.
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = "indonesia";
  return console.log(
    "perkenalkan nama saya " +
      nama +
      " nomor urut " +
      a +
      " sekarang sedang mengikuti " +
      b +
      "berasal dari " +
      asal
  );
}

if (terdaftar === true) {
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b;

// console.log("asal diakses = " + asal);
// console.log("a adalah = " + a);
// console.log("b adalah = " + b);
