// Function Expression
{
const tampiNama = function (nama) {
    return `Hello ${nama}`;
}
console.log(tampiNama("Banyu Bening"));
}
{
    const tampiNama = (nama) => {
        return `Hello ${nama}`;
    }
    console.log(tampiNama("Banyu Bening"));
}
// Bisa lebih singkat
{
    const tampiNama = nama => `Hello ${nama}`;
    console.log(tampiNama("Banyu Bening"));
}
// Parameter lebih dari 1
{
    const tampiNama = (nama, umur) => {
        return `Hello ${nama}, umur ${umur} tahun`;
    }
    console.log(tampiNama("Banyu Bening", 3));
}
// Tanpa parameter
{
    const tampiNama = ()=> {
        return `Hello World`;
    }
    console.log(tampiNama());
}
