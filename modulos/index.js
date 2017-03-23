"use strict";

const calculadora = require('./calculadora');
calculadora.persona.nombre ='Pepe';
const calculadora1 = require('./calculadora');
console.log(calculadora1.persona);
const calculadora2 = require('./calculadora');
const calculadora3 = require('./calculadora');
const calculadora4 = require('./calculadora');

console.log(calculadora.resta(1,5));