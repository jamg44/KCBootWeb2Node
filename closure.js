"use strict";

function creaPersona(name) {
    const surname = 'Gotera';
    return {
        fullname: function () {
            console.log(name + ' ' + surname);
            return name + ' ' + surname;
        }
    };
}

const pepe = creaPersona('Pepe');
const luis = creaPersona('Luis');

// console.log(pepe.fullname());

setTimeout(pepe.fullname, 1000);
setTimeout(luis.fullname, 2000);
