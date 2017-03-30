"use strict";

// Funciones que devuelven promesas

function conArroz(plato) {
    return new Promise((resolve, reject) => {
        process.nextTick(() => {
            resolve(plato + ' arroz');
        });
    });
}

function conAjo(plato) {
    return new Promise((resolve, reject) => {
        process.nextTick(() => {
            resolve(plato + ' ajo');
        });
    });
}

const arrayDePromesas = [];

for(let i = 0; i < 5; i++) {
    arrayDePromesas.push(conArroz('paella'));
    arrayDePromesas.push(conAjo('paella'));
}

Promise.all(arrayDePromesas).then( resultados => {
    console.log(resultados);
}).catch(err => {
    // si alguna falla salta el catch
});
