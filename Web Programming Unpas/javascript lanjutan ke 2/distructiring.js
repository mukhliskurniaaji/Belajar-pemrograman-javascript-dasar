{// Distructuring Function
const mahasiswa = {
    id  : 1234,
    nama : 'Banyu Bening',
    umur : 19,
    email : 'banyubening@gmail.com'
}
function getMahasiswa({id, nama}) { // yang diterima object mahasiswa, tetapi lang dibungkar, dan diterima nama dan id
    return nama+' '+id;
}
console.log(getMahasiswa(mahasiswa)); //yang dikirim object mahasiswa
}

console.log("\n");
{// Distructuring Function Array
    function kalkulasi(a, b) {
        return [a*b , a+b , a-b]; // array
    }

    const kali = kalkulasi(5,4)[0];
    const tambah = kalkulasi(5,4)[1];
    const kurang = kalkulasi(5,4)[2];
    console.log(kali);
    console.log(tambah);
    console.log(kurang);

    // MENGGUNAKAN CARA DISTRUCTURING
    const [kalii, tambahh, kurangg] = kalkulasi(5, 4); 
    console.log(kalii);
    console.log(tambahh);
    console.log(kurangg);
}

console.log("\n");
{// Distructuring Function Object
    function kalkulasi(a, b) {
        return {
            tambah : a+b,
            kurang : a-b,
            kali : a*b,
            bagi : a/b
        }
    }

    // MENGGUNAKAN CARA DISTRUCTURING, Object tidak perlu urut
    const {tambah, kali, kurang, bagi} = kalkulasi(5, 4); 
    console.log(kali);
    console.log(tambah);
    console.log(kurang);
    console.log(bagi);
}

console.log("\n");
{//  Function Arguments
    const mahasiswa1 = {
        nama : 'Banyu Bening',
        umur : 16,
        email : 'banyu@gmail.com'
    } 

    function cetakMahasiswa(nama, umur, email) {
        return `Hello, nama saya ${nama}. Saya berumur ${umur}, dengan email ${email}.`
    }

    console.log(cetakMahasiswa(mahasiswa1.nama, mahasiswa1.umur, mahasiswa1.email));
}

console.log("\n");
{//  Dengan Distructuring Function Arguments
    const mahasiswa1 = {
        nama : 'Banyu Bening',
        umur : 16,
        email : 'banyu@gmail.com',
        nilai : {
            uas : 80,
            uts : 90
        }
    } 

    function cetakMahasiswa({nama, umur, email, nilai:{uts, uas}}) {
        return `Hello, nama saya ${nama}. Saya berumur ${umur}, dengan email ${email}. Nilai UTS ${uts}.`
    }

    console.log(cetakMahasiswa(mahasiswa1));
}