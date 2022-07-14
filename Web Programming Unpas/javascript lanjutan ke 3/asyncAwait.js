// Async Function
{
    function cobaPromise() {
        return new Promise((resolve, reject) => {
            const waktu = 4000
            if (waktu<5000) {
                setTimeout(() => {
                    resolve('selesai')
                }, waktu);
            } else {
                reject('Loading lama')
            }
        });
    }
    const coba = cobaPromise();
    console.log(coba); // hasilnya akan pending, kalau tidak menggunakan .then
    coba
        .then(()=>console.log(coba))
        .catch(()=>console.log(coba));


    // Cara Async Await :
    async function cobaAsync() {
        try {
            const coba = await cobaPromise(); // await disini biasanya berisi function of fatch (promise)
            console.log(coba);
        } catch (error) {
            console.error(error);
        }  
    }
    cobaAsync();
}