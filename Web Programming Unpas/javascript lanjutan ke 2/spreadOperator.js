// Spread Operator
// Memecah iterables menjadi single elements

// Memecah Array :
console.log("\n");
{ // Memecah Array kemudian menggabungkannya isinya :
    const nama = ['Mukhlis', 'Kurnia', 'Aji'];
    console.log(...nama);
}

console.log("\n");
{ // Menggabungkan 2 array atau lebih, dan bisa menyisipkan isi lg :
    const nama1 = ['Mukhlis', 'Kurnia', 'Aji'];
    const nama2 = ['Banyu', 'Bening', 'Alfarizi'];
    console.log([...nama1, 'Sugeng', ...nama2, "Rahayu"]); 
    console.log(...nama1, 'Sugeng', ...nama2, "Rahayu"); 
    console.log(nama1.concat(nama2));
}

console.log("\n");
{ // Mengkopy array
    const nama = ['Banyu', 'Bening', 'Alfarizi'];

    const nama1 = [...nama];
    console.log(nama1);
}


console.log("\n");
{ // NodeList
    const liNama =  document.querySelectorAll('li');
    console.log(liNama); // bentuknya nodelist, haris innerHTML untuk menangkap valuenya
    const nama = [];
    for (let index = 0; index < liNama.length; index++) {
        nama.push(liNama[index].innerHTML);
    }
    console.log(nama);
}