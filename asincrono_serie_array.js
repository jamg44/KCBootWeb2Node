"use strict";

// Hacer una función que reciba un texto y tras 2 segundos lo escriba en la consola.

function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000)
}

// llamar a una funcion n veces en serie
// y al terminar llamar a un callback final
function serieArray(arr, funcionALlamar, callbackFin) {
    if (arr.length == 0) {
        callbackFin();
        return;
    }
    var elemento = arr.shift();
    funcionALlamar('texto' + elemento, function() {
        serieArray(arr, funcionALlamar, callbackFin);
    });
}


serieArray([1,2,3,4], escribeTras2Segundos, function() {
    console.log('fin');
});