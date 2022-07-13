{// Mencari angka lebih dari 3 dengan forof
    const angkas = [1,6,-7,6,8,-4,5,2,9,8,-3,4];
    let newAngka = 0;
    for (const angka of angkas) {
        if (angka>=3) {
            newAngka += angka;
            console.log(newAngka);
            // console.log(angka);
            // newAngka.push(angka);
            // console.log(newAngka);
        }
    }
}

console.log("\n");

{// Mencari angka lebih dari 3 dengan for loop
    const angka = [1,6,-7,6,8,-4,5,2,9,8,-3,4];
    const newAngka = []
    for (let index = 0; index < angka.length; index++) {
        if (angka[index] >=3 ) {
            // console.log(angka[index]);
            newAngka.push(angka[index]);
        }        
    }
    console.log(newAngka)
}

console.log("\n");

{// Mencari angka lebih dari 3 dengan FILTER
    const angka = [1,6,-7,6,8,-4,5,2,9,8,-3,4];
    const newAngka = angka.filter(function (params) {
        return params>=3;
    })
    
    console.log(newAngka)
}

console.log("\n");

{// Mencari angka lebih dari 3 dengan FILTER Arrow Fanctions
    const angka = [1,6,-7,6,8,-4,5,2,9,8,-3,4];
    const newAngka = angka.filter( params => params>=3)
    
    console.log(newAngka)
} 

console.log("\n");

{// Mengecek angka lebih dari 3 dengan MAP
    const angka = [1,6,-7,6,8,-4,5,2,9,8,-3,4];
    const newAngka = angka.map(function (params) {
        return params>=3;
    })
    
    console.log(newAngka)
}

console.log("\n");

{// Mengalikan angka dengan 3 menggunakan MAP
    // Artinya mengeksekusi setiap haril yang di Map
    const angka = [1,6,-7,6,8,-4,5,2,9,8,-3,4];
    const newAngka = angka.map(function (params) {
        return params*3;
    })
    
    console.log(newAngka)
}

console.log("\n");

{// Menjumlahkan angka menggunakan REDUCE
    const angka = [1,6,-7,6,8,-4,5,2,9,8,-3,4];
    const newAngka = angka.reduce(function (accumulator, currentValue) {
        return accumulator+currentValue; // 0 adalah nilai awal
    })    
    console.log(newAngka)
}

console.log("\n");

{// Menjumlahkan angka menggunakan REDUCE arrow fanction
    const angka = [1,6,-7,6,8,-4,5,2,9,8,-3,4];
    const newAngka = angka.reduce( (accumulator, currentValue) => accumulator+currentValue,0); // 0 adalah nilai awal
    console.log(newAngka)
}

console.log("\n");

{// MeMenggabungkan semua method di atas dengan method Chaining
    // cari angka >5
    // kalikan 2
    // jumlahkan
    const angka = [1,6,-7,6,8,-4,5,2,9,8,-3,4];
    const newAngka = angka.filter( a => a>5 ) //6,6,8,9,8
        .map( a => a*2 )
        .reduce((acc,cur) => acc+cur);
    console.log(newAngka) // 75
}