addEventListener("message", function (pesanYgDIterima) { //atau onmessage
    const total = pesanYgDIterima.data //Menerima pesan dari webWorker.html
    for (let index = 0; index < total; index++) {
        postMessage(index); // Mengirim pesan ke webWorker.html
    }
})