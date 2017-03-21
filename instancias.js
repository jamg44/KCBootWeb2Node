"use strict";

function Fruta() {
  var nombre;
  this.setNombre = function(value) { nombre = value; }
  this.getNombre = function() { return nombre; }
  return {
    setNombre: this.setNombre
  }
}

var limon = new Fruta();

console.log(limon);

limon.setNombre('Limon');

// console.log(limon.getNombre());
