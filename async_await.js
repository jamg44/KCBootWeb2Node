"use strict";

const sleep = ms =>
    new Promise(resolve => setTimeout( resolve, ms));


async function main() {
    const ms = 2000;
    console.log(`esperando ${ms} milisegundos`);

    JSON.parse('aksjd f fdksfdhjksfs f');

    for(let i = 0; i < 4; i++) {
        await sleep(2000);
        // el siguiente código es como si estuviera
        // dentro de .then(function() {
        console.log('fin');
    }
}

main().catch(err => {
    console.log('Anda! un error, ', err);
});