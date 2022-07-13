{
let add = function () {
    // deklarasi counter ada di dalam function (local scope) agar tidak terganggu counter global
    let counter = 0;
    return function () {
        return ++counter;
    }
}

counter = 100;

let add2 = add();

console.log(add2());
console.log(add2());
console.log(add2());
console.log(add2());
}
// ATAU BISA DENGAN CARA :
{
    let add = (function () {
        // deklarasi counter ada di dalam function (local scope) agar tidak terganggu counter global
        let counter = 0;
        return function () {
            return ++counter;
        }
    })();
    
    counter = 100;
    
    // let add2 = add(); // TIDAK PERLU  INI LAGI
    
    console.log(add());
    console.log(add());
    console.log(add());
    console.log(add());
}