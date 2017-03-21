"use strict";

// Hacer una función que reciba un texto y tras 2 segundos lo escriba en la consola.

function escribeTras2Segundos(texto, callback) {
  setTimeout(function() {
    console.log(texto);
    callback();
  }, 2000)
}

for (var n = 0; n < 4; n++) {
  escribeTras2Segundos('texto' + n, function() {
    console.log('fin');
  });
}