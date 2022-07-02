const company = "Koding Works";

function sum(first, second) {
    return `Jumlah ${first} dengan ${second} adalah ${first + second}` ;
}

class Otomotif {
    mobil (merk, jenis){
        return `Mobil ${merk} termasuk jenis ${jenis}.`
    }
}

export {company, sum, Otomotif};