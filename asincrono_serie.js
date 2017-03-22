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
function serie(veces, funcionALlamar, callbackFin) {
    if (veces == 0) {
        callbackFin();
        return;
    }
    veces--;
    funcionALlamar('texto' + veces, function() {
        serie(veces, funcionALlamar, callbackFin);
    });
}


serie(5, escribeTras2Segundos, function() {
    console.log('fin');
});