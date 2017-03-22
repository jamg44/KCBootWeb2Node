"use strict";

function Persona(name) {
    this.name = name;
}

const persona = new Persona('Neo');

// Las propiedades del prototipo las tienen todas las instancias de la 'clase'

Persona.prototype.saluda = function() {
    console.log('Hola, me llamo ' + this.name);
};

persona.saluda();

// -------- Heredando de Persona ---------

function Agente(name) {
    this.colorTraje = 'negro';
    Persona.call(this, name);
    // esto ejecuta el constructor de Persona con el this de Agente
}

Agente.prototype = new Persona('soy un prototipo!');

const smith = new Agente('Smith');

smith.saluda();

console.log(
    Object.getPrototypeOf(smith),
    smith instanceof Agente,
    smith instanceof Persona,
    smith instanceof Object
);

// -------- Herencia múltiple -------------

function Superheroe() {
    this.vuela = function() {
        console.log(this.name + ' vuela');
    };
    this.esquivaBalas = function() {
        console.log(this.name + ' esquiva balas');
    }
}

Object.assign(Agente.prototype, new Superheroe());

smith.vuela();
smith.esquivaBalas();
