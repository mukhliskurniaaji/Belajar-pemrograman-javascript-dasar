{
    const murid = [
        {
            'nama' : 'Banyu Bening',
            'id' : '1',
            'kelas' : 2,
            'alamat': 'Begajah'
        },
        {
            'nama' : 'Sri Mulyono',
            'id' : '2',
            'kelas' : 2,
            'alamat': 'Mulur'
        },
        {
            'nama' : 'Giyono Karto Prawiro',
            'id' : '3',
            'kelas' : 2,
            'alamat': 'Gayam'
        },
    ];
    console.log("Mulai!");
    murid.forEach(element => {console.log(element.nama)}); // Synchronous
    console.log("Selesai!");
}

console.log("\n");
{
    //  ASYNCHRONOUS CALLBACK
    const murid = new XMLHttpRequest();
    murid.onreadystatechange = function () {
        if (murid.status === 200) {
            if (murid.readyState === 4) {
                console.log(JSON.parse(murid.response));
            }
        } else {
            console.log(murid.response);
        }
    }
    murid.open('get', 'murid.json'); // sumbernya dari murid.json
    murid.send();
}

console.log("\n");
{
    //  ASYNCHRONOUS CALLBACK dengan fetch
    fetch('murid.json') //fetch mengembalikan bentuk promise, sehingga diproses lagi di bawah :
        .then(response => response.json())
        .then(response => console.log(response));
}