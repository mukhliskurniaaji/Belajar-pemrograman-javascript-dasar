// Karena fetch mengembalikan dalam bentuk Promise
// mari belajar Promis dahulu :

// Contoh Promis 1
console.log('Contoh Promis 1');
{
    let ditepati = true;
    const janji = new Promise((resolve,reject)=>{
        if (ditepati == true) {
            resolve ("Janji ditepati, Mengembalikan resolve");
        } else {
            reject ("Janji tidak ditepati.")
        }
    });
    console.log(janji);

    // mencetak isi :
    janji
        .then(response => console.log("OK "+ response))
        .catch(response => console.log("NOT OK "+ response))
}
console.log("\n");
// Contoh Promis ALl

{
    const film = new Promise (resolve => {
        setTimeout(() => {
            resolve([{
                judul : "Preman in Love",
                sutradara : "Haris Kuman",
                pemeran : "anung, Tamadi, Fajar, Prasetyo"
            }])
        }, 2000);
    })
    const cuaca = new Promise (resolve => {
        setTimeout(() => {
            resolve([{
                kota : "Sukoharjo",
                suhu : 27,
                keterangan : "cerah, berawan"
            }])
        }, 1000);
    })
    {// Dengan cara Promise satu-satu :
        film
            .then(response => console.log(response));
        cuaca
            .then(response => console.log(response))
        // Akan dieksekusi cuaca dahulu, krn setimeoutnya lebih cepat
    }
    {// Dengan cara Promise All :
        Promise.all([film,cuaca])
            .then(response => {
                const [film,cuaca] = response;
                console.log(film);
                console.log(cuaca);
            });
    }
}