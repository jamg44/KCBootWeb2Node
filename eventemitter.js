"use strict";

const events = require('events');
const eventEmitter = new events.EventEmitter();

function suenaTelefono(quien) {
    if (quien === 'madre') {
        return;
    }
    console.log('ring ring');
}

function vibrarTelefono() {
    console.log('brr brr');
}

eventEmitter.on('llamar telefono', suenaTelefono);
eventEmitter.on('llamar telefono', vibrarTelefono);

eventEmitter.emit('llamar telefono', 'madre');
