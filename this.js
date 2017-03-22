"use strict";

const persona = {
    name: 'Luis',
    surname: 'Gomez',
    fullname: function() {
        console.log(this.name + ' ' + this.surname);
    }
};

// persona.fullname();

// setTimeout(persona.fullname.bind(persona), 1000);

const gato = {
    name: "Garfield",
    surname: "Lopez"
};

persona.fullname.call(gato);