"use strict";

// function que retorna una promesa
function wait(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(function espera() {
            resolve();
            //reject(new Error('Error fatal!!'));
        }, ms);
    });
}

// usamos una promesa
const promesa = wait(1000);

console.log(promesa);

promesa.then(function() {
    console.log('Fin');
}).catch(function(err) {
    console.log('Error', err);
});


