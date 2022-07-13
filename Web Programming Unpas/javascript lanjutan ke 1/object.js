// CARA MEMBUAT OBJECT PADA JAVASCRIPT :

// 1. Object Literal :
let santri = {
    nama : "Ahsan",
    uangSaku : 1000,
    totalUang : function (tambahan) {
        // memanggil key harus diawali this
        this.uangSaku = this.uangSaku + tambahan;
        console.log("Total uang saku "+this.nama+" adalah "+this.uangSaku)
    }
}
// Mengakses fungsi di atas:
santri.totalUang(5000); //Hasilnya 6000


// 2. Fungction Declaration :
// Membuat template dahulu :
{
function Siswa(nama, uangSaku) {
    let siswa = {};
    // key = value
    siswa.nama = nama;
    siswa.uangSaku = uangSaku;
    siswa.totalUang = function (tambahan) {
        this.uangSaku = this.uangSaku + tambahan; //atau bisa :
        // this.uangSaku += tambahan;
        console.log("Total uang saku "+this.nama+" adalah "+this.uangSaku)        
    }
    return siswa; // Harus direturn sebagai siswa
}
let siswa1 = Siswa("Galih", 4000);
console.log(siswa1);
const galih = siswa1.totalUang(5000);
console.log(galih);
}


// 3. Constructor Function :
// perbedaan dengan Function Declaration : kita tdk perlu mendeklarasikan variabel siswa dan returnnya. 
// Tetapi mendeklarasikanya harus pakai new Siswa
{
function Siswa(nama, uangSaku) {
    this.nama = nama;
    this.uangSaku = uangSaku;
    this.totalUang = function (tambahan) {
        this.uangSaku = this.uangSaku + tambahan; //atau bisa :
        // this.uangSaku += tambahan;
        console.log("Total uang saku "+this.nama+" adalah "+this.uangSaku)        
    }
}
let siswa1 = new Siswa("Rudi", 4000);
console.log(siswa1);
const galih = siswa1.totalUang(5000);
console.log(galih);
}


// 4. Object Create :
{
    const metthodSiswa = {
        totalUang : function (tambahan) {
            this.uangSaku = this.uangSaku + tambahan; //atau bisa :
            // this.uangSaku += tambahan;
            console.log("Total uang saku "+this.nama+" adalah "+this.uangSaku)   
        },
        uangSisa : function (jajan) {
            this.uangSaku = this.uangSaku + jajan; //atau bisa :
            // this.uangSaku += tambahan;
            console.log("Total uang saku "+this.nama+" adalah "+this.uangSaku)   
        }
    }

    function Siswa(nama, uangSaku) {
        let siswa = Object.create(metthodSiswa);
        // key = value
        siswa.nama = nama;
        siswa.uangSaku = uangSaku;
        siswa.totalUang = function (tambahan) {
            this.uangSaku = this.uangSaku + tambahan; //atau bisa :
            // this.uangSaku += tambahan;
            console.log("Total uang saku "+this.nama+" adalah "+this.uangSaku)        
        }
        return siswa; // Harus direturn sebagai siswa
    }

    let siswa1 = new Siswa("Ali", 500);
    console.log(siswa1);
    const galih = siswa1.totalUang(5000);
    console.log(galih);
}

// 5. Dengan Prototype pada Class
{
    class Siswa {
        constructor (nama, uangSaku){
            this.nama = nama;
            this.uangSaku = uangSaku;
        }
        menabung (tambahan) {
            this.uangSaku = this.uangSaku + tambahan; //atau bisa :
            // this.uangSaku += tambahan;
            console.log("Total uang saku "+this.nama+" adalah "+this.uangSaku)        
        }

        jajan (kurang) {
            this.uangSaku = this.uangSaku - kurang; //atau bisa :
            // this.uangSaku -= kutang;
            console.log("Total uang saku "+this.nama+" adalah "+this.uangSaku)        
        }
    }
    let siswa1 = new Siswa("Gugun", 4000);
    console.log(siswa1);
    const gugun = siswa1.menabung(5000);
    console.log(gugun);
    const jajan = siswa1.jajan(3200);
    console.log(jajan);
}