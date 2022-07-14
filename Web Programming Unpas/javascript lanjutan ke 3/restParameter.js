// REST PARAMETER

{
    function restPar(a, b, ...c) { //hanya menerima argumen a, b, dan ...c
        return `a= ${a}  b=${b}  c=${c}`;
    }
    console.log(restPar(1,2,3,4,5,6,7,8,9,10));
}
console.log("\n");

{ // menjumlahkan semua parameter yang dikirim
    function penjumlahan(...params) {
        let total = 0;
        for (const iterator of params) {
            total += iterator
        }
        return total;
    }
    console.log(penjumlahan(1,2,3,4,5,6,7,8,9,10))
}

console.log("\n");
{ // menjumlahkan semua parameter yang dikirim
    function penjumlahan(...params) {
        return params.reduce((a,b)=>(a+b));
    }
    console.log(penjumlahan(1,2,3,4,5,6,7,8,9,10))
}

console.log("\n");
{ // menjumlahkan semua parameter yang dikirim
        params = [1,2,3,4,5,6,7,8,9,10];
        total = 0;
        for (const iterator of params) {
            total += iterator
        }
        console.log(total); 
}
console.log("\n");

{ // Rest Parameter untuk distructuring Array
    const keluarga = ['Budi','Ani','Laras','Rangga','Maman'];
    const [bapak, ibu, ...anak] = keluarga;
    console.log(bapak);
    console.log(ibu);
    console.log(anak);
}
console.log("\n");

{ // Rest Parameter untuk distructuring Object
    const keluarga = {
        bapak :'Budi',
        ibu : 'Ani',
        anak1 : 'Laras',
        anak2 :'Rangga',
        anak3 : 'Maman'
    };
    const {bapak, ibu, ...anak} = keluarga;
    console.log(bapak);
    console.log(ibu);
    console.log(anak);
}
console.log("\n");

{ // Rest Parameter untuk filter (memfilter yang tipe datanya number)
    function filterBy(type, ...values) {
        return values.filter(hasilVilter => typeof hasilVilter ===type)
    }
    console.log(filterBy('number',1,'Parman',5,9,25674,false,43,true,'Mulur'));
}
console.log("\n");


console.log("\n");