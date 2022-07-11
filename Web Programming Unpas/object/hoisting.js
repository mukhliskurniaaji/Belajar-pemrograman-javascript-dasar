function satu() {
    var nama = 'Mukhlis';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Banyu';
satu();
dua("Mada");
console.log(nama);

// LANGKAH KERJANYA :
// 1. hoisting dari bari 1 sampai 8 (function)
// baris 10, console.log(nama); diisi undefined ken belum ada variabel nama
// baris 11, memanggil function satu() mengirimkan parameter nama. tetapi function satu() tidak menerima parameter. console.log(nama) pada baris ke 3 akan mencetak var nama = 'Mukhlis' pada baris ke 2
// baris 12, memanggil function dua() tidak membawa parameter. console.log(nama) pada baris ke 7 mencari variabel nama di lokal. Karena tidak AudioDestinationNode, kemudian mencari dari parameter. Karena tidak ada juga, mencari di global. ketemu var nama = 'Banyu' pada baris 11
// Kemudian console.log(nama) pada baris 14 akan memanggil global var nama = 'Banyu' pada baris 11.