{ // For Loop Array
    const nama = ["Banyu",'Bening',"Al","Farizi"];

    for (let index = 0; index < nama.length; index++) {
        console.log(nama[index]);
        
    }
}

console.log("\n");
{ // For Each (KHUSUS ARRAY)
    const nama = ["Banyu",'Bening',"Al","Farizi"];

    nama.forEach((element, i) => console.log(element+' '+i));
}

console.log("\n");
{ // For Of Array
    const nama = ["Banyu",'Bening',"Al","Farizi"];

    for (const iterator of nama) {
        console.log(iterator);
    }
}

console.log("\n");
{ // For Of String
    const nama = "Banyu Bening";

    for (const iterator of nama) {
        console.log(iterator);
    }
}

console.log("\n");
{ // For Of menangkap index dan value pada Array
    const nama = ["Banyu",'Bening',"Al","Farizi"];

    for (const [index, value] of nama.entries()) { // ditambah .entries()
        console.log(`index ${index} bernama ${value}`);
    }
}

console.log("\n");
{ // For Of looping arguments
    function jumlahAngka() { //parameter kososng
        let jumlah = 0;
        for (const iterator of arguments) { // arguments otomatis menangkap parameter yg dikirim
            jumlah = jumlah + iterator;
            // jumlah += iterator;
        }
        return jumlah;
        
    }
    console.log(jumlahAngka(1,2,3,4,5,6,7,8));
}

console.log("\n");
{ // For Of NodeList
    const liName = document.querySelectorAll('.name');

    liName.forEach(element => {
        console.log(element.innerHTML)
    });
    // atau dengan forof :
    for (const iterator of liName) {
        console.log(iterator.innerHTML)
    }
}

// Forin hanya untuk object
console.log("\n");
{ // For In
    const nama = {
        nama : "Banyu",
        umur : 3,
        alamat : "Sukoharjo"
    };

    for (const key in nama) {
        if (Object.hasOwnProperty.call(nama, key)) {
            const element = nama[key];
            console.log(element);            
        }
    }
}


// Forin hanya untuk object
console.log("\n");
{ // For In
    const nama = {
        nama : "Banyu",
        umur : 3,
        alamat : "Sukoharjo"
    };

    for (const key in nama) {
        console.log(key);   
    }
}